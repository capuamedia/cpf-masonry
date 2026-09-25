/**
 * Publishes the noindexed review copy to https://capuamedia.github.io/cpf-masonry/
 *
 * HOW THIS CHANGED, AND WHY IT MATTERS
 *
 * This script used to build locally and force-push dist/ to the `gh-pages`
 * branch, which GitHub Pages served directly. On 2026-09-20 the repo moved to
 * Settings > Pages > Source = "GitHub Actions" (.github/workflows/
 * deploy-pages.yml), and from that moment Pages stopped reading `gh-pages`.
 *
 * The old script kept "working" perfectly: it built, committed, force-pushed,
 * printed the URL and exited 0. It just no longer deployed anything. A deploy
 * script that reports success while changing nothing is worse than no script at
 * all — it costs a round of "why isn't my change live" before anyone thinks to
 * doubt the tool. It cost exactly that once; hence this rewrite.
 *
 * So this now dispatches the real workflow, and — just as importantly — it
 * reports the run's real conclusion rather than the fact that it managed to
 * send a request.
 *
 * IMPORTANT: the workflow builds from a ref on the REMOTE, not from your
 * working tree. Uncommitted work does not ship. The guards below refuse to
 * dispatch when local and remote disagree, precisely so this script cannot go
 * back to quietly deploying something other than what you are looking at.
 */
import { execSync } from 'node:child_process';

const WORKFLOW = 'deploy-pages.yml';
const DEMO_URL = 'https://capuamedia.github.io/cpf-masonry/';
const REPO = 'capuamedia/cpf-masonry';

const sh = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();
const run = (cmd) => execSync(cmd, { stdio: 'inherit' });
const sleep = (secs) =>
  execSync(`powershell -NoProfile -Command "Start-Sleep -Seconds ${secs}"`, { stdio: 'ignore' });

const die = (msg) => {
  console.error('\n' + msg + '\n');
  process.exit(1);
};

try {
  sh('gh --version');
} catch {
  die(
    'The GitHub CLI (`gh`) is required to dispatch the Pages workflow.\n' +
      'Install it, or simply push to main — the workflow also runs on every push.',
  );
}

const branch = sh('git rev-parse --abbrev-ref HEAD');

if (sh('git status --porcelain')) {
  die(
    'Working tree is dirty. The workflow builds from the REMOTE, so uncommitted\n' +
      'changes would not appear in the deploy. Commit and push them first.',
  );
}

sh('git fetch origin --quiet');

let behind = '0';
let ahead = '0';
try {
  [behind, ahead] = sh(`git rev-list --left-right --count origin/${branch}...HEAD`).split(/\s+/);
} catch {
  die(`No remote branch origin/${branch}. Push it first:\n  git push -u origin ${branch}`);
}

if (ahead !== '0') {
  die(
    `Local ${branch} is ${ahead} commit(s) ahead of origin/${branch}.\n` +
      'Those commits are not on the remote, so the workflow cannot build them.\n' +
      `Push first:\n  git push origin ${branch}`,
  );
}

if (behind !== '0') {
  die(
    `Local ${branch} is ${behind} commit(s) behind origin/${branch}.\n` +
      'The deploy would include work you have not seen. Pull first.',
  );
}

/*
 * The `github-pages` environment carries a deployment branch policy. Dispatching
 * from a branch outside it BUILDS FINE and then fails at the deploy step — the
 * build job goes green, so it reads as success right up until you load the page
 * and get a 404. Catch it before spending ten minutes on a run that cannot
 * publish. (Learned the hard way, 2026-09-24.)
 */
let allowed = [];
try {
  allowed = sh(
    `gh api repos/${REPO}/environments/github-pages/deployment-branch-policies` +
      ' --jq ".branch_policies[].name"',
  )
    .split('\n')
    .map((b) => b.trim())
    .filter(Boolean);
} catch {
  console.log('> could not read the environment branch policy; continuing without that check');
}

if (allowed.length && !allowed.includes(branch)) {
  die(
    `Branch "${branch}" may not deploy to Pages.\n` +
      `The github-pages environment permits: ${allowed.join(', ')}.\n\n` +
      'The build would succeed and the deploy would be rejected. Either merge to\n' +
      'main, or allow this branch:\n' +
      `  gh api repos/${REPO}/environments/github-pages/deployment-branch-policies ` +
      `-f name='${branch}'`,
  );
}

console.log(`> dispatching ${WORKFLOW} against ${branch} (${sh('git rev-parse --short HEAD')})`);
run(`gh workflow run ${WORKFLOW} --ref ${branch}`);

console.log('> queued. GitHub needs a moment to register the run.');
sleep(6);

let id = null;
try {
  id = sh(`gh run list --workflow=${WORKFLOW} --limit 1 --json databaseId --jq ".[0].databaseId"`);
} catch {
  die(`Dispatched, but could not find the run. Check it:\n  gh run list --workflow=${WORKFLOW}`);
}

console.log(`> following run ${id} (Ctrl-C is safe, the deploy keeps going)\n`);
try {
  run(`gh run watch ${id} --exit-status`);
} catch {
  /*
   * `gh run watch` dropping is NOT the same as the deploy failing, and the two
   * were conflated here once already: the watch died, the catch swallowed it,
   * and the script printed the URL and exited 0 on a run that had actually
   * failed at the deploy step. Whatever happened to the watch, the run's own
   * conclusion is the only truth — go and ask for it below.
   */
  console.log('> lost the live log; asking GitHub for the result instead.');
}

let status = '';
let conclusion = '';
for (let i = 0; i < 120; i++) {
  [status, conclusion] = sh(
    `gh run view ${id} --json status,conclusion --jq ".status + \\" \\" + (.conclusion // \\"\\")"`,
  ).split(' ');
  if (status === 'completed') break;
  sleep(15);
}

if (status !== 'completed') {
  die(`Run ${id} is still "${status}" after 30 minutes. Check it:\n  gh run view ${id}`);
}

if (conclusion !== 'success') {
  die(
    `Deploy FAILED (${conclusion}). Nothing was published.\n` +
      `  gh run view ${id} --log-failed\n\n` +
      'If the build job passed and only deploy failed, it is almost certainly the\n' +
      'environment branch policy — see DEPLOY.md.',
  );
}

console.log(`\n> deployed (run ${id})`);
console.log(`> ${DEMO_URL}`);

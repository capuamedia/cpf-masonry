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
 * So this now dispatches the real workflow.
 *
 * IMPORTANT: the workflow builds from a ref on the REMOTE, not from your
 * working tree. Uncommitted work does not ship. The guards below refuse to
 * dispatch when local and remote disagree, precisely so this script cannot go
 * back to quietly deploying something other than what you are looking at.
 */
import { execSync } from 'node:child_process';

const WORKFLOW = 'deploy-pages.yml';
const DEMO_URL = 'https://capuamedia.github.io/cpf-masonry/';

const sh = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();
const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

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

console.log(`> dispatching ${WORKFLOW} against ${branch} (${sh('git rev-parse --short HEAD')})`);
run(`gh workflow run ${WORKFLOW} --ref ${branch}`);

console.log('> queued. GitHub needs a moment to register the run.');
try {
  const id = sh(
    `gh run list --workflow=${WORKFLOW} --limit 1 --json databaseId --jq ".[0].databaseId"`,
  );
  console.log(`> following run ${id} (Ctrl-C is safe, the deploy keeps going)\n`);
  run(`gh run watch ${id} --exit-status`);
} catch {
  console.log(`> could not follow it. Check with:\n  gh run list --workflow=${WORKFLOW}`);
}

console.log(`\n> ${DEMO_URL}`);

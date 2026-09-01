/**
 * Publishes the noindexed review copy to https://capuamedia.github.io/cpf-masonry/
 *
 * This is the no-auth-scope route: it builds locally and force-pushes dist/ to
 * the gh-pages branch, which GitHub Pages serves directly. It needs no
 * `workflow` OAuth scope, which is why it exists.
 *
 * The better long-term setup is the Actions workflow parked at
 * deploy/github-pages.yml — it rebuilds on every push to main instead of
 * whenever someone remembers to run this. Activating it needs one command:
 *   gh auth refresh -h github.com -s workflow
 * then move that file into .github/workflows/ and set
 * Settings > Pages > Source = "GitHub Actions".
 */
import { execSync } from 'node:child_process';
import { writeFileSync, rmSync, existsSync } from 'node:fs';

const REPO = 'https://github.com/capuamedia/cpf-masonry.git';
const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });

console.log('> building demo (base=/cpf-masonry, noindex, no sitemap)');
run('npx astro build', {
  env: { ...process.env, DEPLOY_TARGET: 'github-pages', GITHUB_REPOSITORY: 'capuamedia/cpf-masonry' },
});

// GitHub Pages runs Jekyll on legacy branch builds, and Jekyll silently skips
// any directory starting with an underscore. Without this file the entire
// /_astro/ folder - every image and stylesheet - is dropped from the deploy.
writeFileSync('dist/.nojekyll', '');

const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ') + 'Z';
if (existsSync('dist/.git')) rmSync('dist/.git', { recursive: true, force: true });

run('git init -q -b gh-pages', { cwd: 'dist' });
run('git add -A', { cwd: 'dist' });
run(
  `git -c user.name="Capua Media" -c user.email="mike@capua.media" ` +
    `commit -q -m "Demo build ${stamp} - noindexed review copy"`,
  { cwd: 'dist' },
);
run(`git push -q -f ${REPO} gh-pages`, { cwd: 'dist' });
rmSync('dist/.git', { recursive: true, force: true });

console.log('\n> pushed. GitHub Pages takes 60-90s to rebuild.');
console.log('> https://capuamedia.github.io/cpf-masonry/');

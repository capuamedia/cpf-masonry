# Image-coverage drop for cpfmasonry.com

Unzip at the repo root. Paths are already correct:

- `src/assets/incoming/` — 44 original photographs, deduplicated and tiered
- `_docs/MISSING-ORIGINALS.tsv` — the work order (status / tier / job_group / notes)
- `_docs/PROMPT-image-coverage.md` — the task
- `_docs/contact-sheets/` — keepers, rejected duplicate pairs, crop variants

These came from the recovered WordPress media library, which lives in
`new_assets/` on the owner's desktop. That path is gitignored and outside `src/`,
so Astro never processed it — which is why these photographs never rendered.

Commit all of it, then follow `_docs/PROMPT-image-coverage.md`.

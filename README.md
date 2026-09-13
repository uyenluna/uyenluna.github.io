# Portfolio site

Static site, no build step. Two files: `index.html`, `style.css`.

## Deploy on GitHub Pages (free, ~10 min)

1. Create a new GitHub repo named `yourusername.github.io`
2. Push `index.html` and `style.css` to the root of that repo
3. Go to Settings → Pages → set source to `main` branch, `/root`
4. Site is live at `https://yourusername.github.io` within a few minutes

## Before you publish

- Replace the email, GitHub, and LinkedIn links in the Contact section
- Swap "PROJ-001" descriptions with your own wording once you have a couple
  sentences of results/specifics for each (numbers, benchmarks, what you'd
  tell an interviewer)
- Consider adding a project page per item later (link each project title to
  a longer write-up) once you have more to show — the current version is a
  single-page overview, which is the right amount for now

## Where to put your "proof" (photos, schematics, code, PDFs)

Each project has a "Proof: ... →" link with a placeholder `#` href. Two options:

1. **In this same repo** (simplest): make a folder like `assets/proj-001/`,
   drop in your PCB photos, schematic exports, or a short PDF, then point
   the link at it, e.g. `assets/proj-001/hydrophone-pcb.pdf`.
2. **Link out to a separate GitHub repo** for anything that's actual code
   (the FPGA/Verilog files, the U-Net notebook, the firmware). Point the
   link at that repo's URL instead. This is usually the better call for
   code specifically — recruiters expect to click through to a real repo,
   not a code dump pasted into your portfolio.

Mix of both is normal: images/PDFs live in this repo, code links out.

# Luna Nguyen — Engineering Portfolio

A zero-framework, GitHub Pages-ready portfolio for **Phuong Uyen (Luna) Nguyen**, Computer Systems Engineering at Arizona State University.

## Deploy on GitHub Pages

1. Create a GitHub repository (for a user site, name it `YOUR_USERNAME.github.io`; otherwise any repository name works).
2. Upload **all files and folders in this project root** to the repository's default branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch and `/ (root)`, then save.
6. GitHub will publish the site automatically.

No build step, package manager, Jekyll, React, Bootstrap, or external framework is required.

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile/
    │   └── profile.png
    ├── resume/
    │   └── Luna_Nguyen_Resume.pdf
    └── projects/
        ├── hydrophone/
        │   └── hydrophone-schematics.png
        ├── agricultural-ml/
        │   └── agricultural-field-segmentation-proposal.pdf
        ├── robotic-arm/
        │   ├── furi-poster.png
        │   ├── robot-demo.mp4
        │   └── robotic-arm-report.pdf
        ├── fpga/
        └── embedded/
```

## Customize Links

Open `index.html` and replace the placeholder GitHub URL (`https://github.com/`) with your exact GitHub profile or project repository URLs. Project buttons intentionally marked unavailable are styled as disabled until you add public links/files.

## Included UI Features

- Dark PCB-inspired engineering interface
- Responsive sticky profile sidebar
- Animated circuit-board canvas background
- Copper and green trace accents
- Boot sequence animation
- Cursor glow
- PCB-style scroll progress indicator
- Project filtering
- Scroll reveal animations
- Project image lightbox
- Robotic-arm video modal
- Terminal easter egg: press `T`
- Mobile-responsive layouts
- Accessible semantic HTML and reduced dependency surface

## Local Preview

You can open `index.html` directly, or run any simple static server from the project directory. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

All paths are relative, so the portfolio works for both root GitHub Pages sites and project sites. The site has no external JavaScript or CSS dependencies.

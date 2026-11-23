# الصفوة | El Safwa Gold — showcase website

Static single-page showcase site (no build step, no dependencies).

- Open `index.html` in any browser, or host the folder on any static host.
- Arabic (RTL) default with English toggle; dark/light mode toggle.
- Placeholder contact data lives in `assets/app.js` (COPY object) and `index.html` — swap address, phone, WhatsApp and hours there.
- Hero includes a real-time 3D gold ring (Three.js r160, self-hosted in `assets/`, no CDN). Falls back to the photo hero automatically when WebGL is unavailable.
- Photos: Pexels (free license). Fonts: Amiri + Tajawal (Google Fonts, OFL), bundled in `fonts/`.

NOTE: because the 3D hero uses ES modules, open the site through a web server (any static host, or `python3 -m http.server`) rather than double-clicking the file.

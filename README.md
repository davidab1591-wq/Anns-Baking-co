# Ann's Baking Co. Website

One-page site for Ann's Baking Co. Customers browse the treats and tap through to order on Swiggy or Zomato, or message on WhatsApp for custom cakes. It also installs on a phone like an app.

## Edit your details

Open `index.html` and change the `SITE` block near the bottom: Swiggy and Zomato links, WhatsApp number, email, location, Instagram and FSSAI number. Any field left empty is simply not shown. The wording of each section is in the page itself, so edit it there.

## Replace a photo

Put the new image in the `images` folder with the same file name (for example `images/cake.webp`), or change the name in the matching `<img src>` line. Square or 4:3 photos at about 1000 px wide look best.

## Upload to GitHub and go live

1. Add every file and the `images` folder to your repo: `index.html`, `logo.webp`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `README.md`, `images/`.
2. In the repo, go to Settings > Pages, set Source to "Deploy from a branch", choose `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Installing it like an app

On Android in Chrome use the menu > "Install app". On iPhone in Safari use Share > "Add to Home Screen". It works once the site is live over https.

# Ann's Baking Co. Website

A single-page site for a home baker. Customers see the menu and tap through to order on Swiggy or Zomato. Custom orders go through WhatsApp.

## Edit your details

Open `index.html` and change the `BAKERY` block near the bottom: name, menu, prices, Swiggy and Zomato links, WhatsApp number, FSSAI number.

## Put it on GitHub and make it live

1. Create a new repo on your GitHub account (for example `bakery-site`).
2. Add all the files in this folder (`index.html`, `logo.webp`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `README.md`), then commit and push.
3. In the repo, go to Settings > Pages, set Source to "Deploy from a branch", choose `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/bakery-site/`.

To use your own domain, add it under Settings > Pages > Custom domain.

## Replace the placeholder drawings with real photos

1. Make an `images` folder in the repo and add your photos (square, around 600 px, `.webp` or `.jpg`).
2. In the `BAKERY.menu` block of `index.html`, add `image: "images/truffle.webp"` to the item. The photo replaces the drawing.

## Installing it like an app

The site works in any phone browser. Customers can also add it to their home screen: on Android in Chrome use the menu > "Install app", on iPhone in Safari use Share > "Add to Home Screen". It then opens full screen with Ann's logo as the icon. This only works once the site is live over https (GitHub Pages does this).

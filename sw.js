// Tiny service worker: lets the site install as an app and open even with a weak connection.
const CACHE = "anns-v2";
const FILES = ["./", "index.html", "logo.webp", "icon-192.png", "icon-512.png", "images/banner.webp", "images/cake.webp", "images/cupcakes.webp", "images/cookies.webp", "images/brownies.webp", "images/custom-cakes.webp", "images/gift-box.webp"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request)));
});

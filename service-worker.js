const CACHE_NAME = "typin-v2";
const urlsToCache = [
  "/",
  "/alphabet",
  "/alphabet/0.wav",
  "/alphabet/1.wav",
  "/alphabet/2.wav",
  "/alphabet/3.wav",
  "/alphabet/4.wav",
  "/alphabet/5.wav",
  "/alphabet/6.wav",
  "/alphabet/7.wav",
  "/alphabet/8.wav",
  "/alphabet/9.wav",
  "/alphabet/A.wav",
  "/alphabet/B.wav",
  "/alphabet/C.wav",
  "/alphabet/D.wav",
  "/alphabet/E.wav",
  "/alphabet/F.wav",
  "/alphabet/G.wav",
  "/alphabet/H.wav",
  "/alphabet/I.wav",
  "/alphabet/J.wav",
  "/alphabet/K.wav",
  "/alphabet/L.wav",
  "/alphabet/M.wav",
  "/alphabet/N.wav",
  "/alphabet/O.wav",
  "/alphabet/P.wav",
  "/alphabet/Q.wav",
  "/alphabet/R.wav",
  "/alphabet/S.wav",
  "/alphabet/T.wav",
  "/alphabet/U.wav",
  "/alphabet/V.wav",
  "/alphabet/W.wav",
  "/alphabet/X.wav",
  "/alphabet/Y.wav",
  "/alphabet/Z.wav",
  "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
  "https://cdn.tailwindcss.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
alphabet;

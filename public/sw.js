const CACHE_NAME = 'umbthumb-v1';
const urlsToCache = [
  '/umbraco-block-thumbnail-generator/',
  '/umbraco-block-thumbnail-generator/index.html',
  '/umbraco-block-thumbnail-generator/manifest.json',
  '/umbraco-block-thumbnail-generator/assets/index.js',
  '/umbraco-block-thumbnail-generator/assets/index.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});

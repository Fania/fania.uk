'use strict';

// https://developer.chrome.com/docs/workbox/caching-strategies-overview/

const cacheName = 'fania-v1.0.0';

// Stale-while-revalidate
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then((cache) => {
        return cache.match(event.request)
          .then((cachedResponse) => {
            return cachedResponse || fetch(event.request).then((response) => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
      })
  );
});
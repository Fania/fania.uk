'use strict';

// https://developer.chrome.com/docs/workbox/caching-strategies-overview/
// audio, document, font, image, manifest, object, script, style, video

const cacheName = 'fania-v1.0.0';

// ===================================================================
// Stale-while-revalidate
self.addEventListener('fetch', (event) => {
  console.log(`${event.request.destination}: ${event.request.url}`);
  if (event.request.destination === 'image' ||
      event.request.destination === 'audio' ||
      event.request.destination === 'font' ||
      event.request.destination === 'manifest' ||
      event.request.destination === 'object' ||
      event.request.destination === 'script' ||
      event.request.destination === 'style' ||
      event.request.destination === 'video'
     ) {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return cachedResponse || fetchedResponse;
      });
    }));
  } else {
    return;
  }
});
// ===================================================================
// Cache first, falling back to network
// self.addEventListener('fetch', (event) => {
//   console.log(`${event.request.destination}: ${event.request.url}`);
//   if (event.request.destination === 'image' ||
//       event.request.destination === 'audio' ||
//       event.request.destination === 'font' ||
//       event.request.destination === 'manifest' ||
//       event.request.destination === 'object' ||
//       event.request.destination === 'script' ||
//       event.request.destination === 'style' ||
//       event.request.destination === 'video'
//      ) {
//     event.respondWith(caches.open(cacheName).then((cache) => {
//       return cache.match(event.request.url).then((cachedResponse) => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         // Otherwise, hit the network
//         return fetch(event.request).then((fetchedResponse) => {
//           // Add the network response to the cache for later visits
//           cache.put(event.request, fetchedResponse.clone());
//           return fetchedResponse;
//         });
//       });
//     }));
//   } else {
//     return;
//   }
// });
// ===================================================================


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


// ===================================================================




// // add new cache(s)
// addEventListener('install', event => {
//   console.log('[Service Worker] installing...');
//   event.waitUntil( cacheAllThings() );
//   skipWaiting();
// });


// // delete old cache(s)
// addEventListener('activate', event => {
//   console.log('[Service Worker] activating...');
//   const whitelist = [cacheName];
//   event.waitUntil(
//     caches.keys().then( names => {
//       return Promise.all(
//         names.map( cn => {
//           if (whitelist.indexOf(cn) === -1) {
//             console.log('[Service Worker] deleting ', cn);
//             return caches.delete(cn);
//           }
//         })
//       );
//     })
//   );
//   // event.waitUntil(requestReload());
// });


// addEventListener('sync', event => {
//   if ((event.tag).includes('contribution')) {
//     console.log('contribution sync event triggered');
//     const order = (event.tag).slice(13);
//     console.log(event.tag);
//     console.log(`[SW] ${order}`);
//     // event.waitUntil(updateCacheWith(thing));
//   }
// });

// async function updateCacheWith(thing) {
//   const cache = await caches.open(cacheName);
//   return cache.add(thing);
// }



// addEventListener('fetch', event => {
//   // console.log('[Service Worker] fetching/serving assets');
//   // respondWith() for ASAP answer from cache
//   event.respondWith(
//     serveFromCache(event.request)
//   );
//   // don't put SW to sleep until we've done the following
//   event.waitUntil(
//     updateCacheFromNetwork(event.request)
//       // .then(requestRefresh)
//   );
// });



// async function cacheAllThings() {
//   console.log('[Service Worker] caching ...');
//   const cache = await caches.open(cacheName);
//   cache.addAll(postcacheResources.concat(dataResources));
//   // updateDataResources();
//   return cache.addAll(precacheResources.concat(staticResources));
// }


// // CACHE, UPDATE AND REFRESH

// async function serveFromCache(request) {
//   // console.log(`[Service Worker] serving from CACHE: ${request.url}`);
//   const cache = await caches.open(cacheName);
//   // get it from cache or fetch from network if new
//   return await cache.match(request) || await fetch(request);
// }

// async function updateCacheFromNetwork(request) {
//   // console.log(`[Service Worker] updating CACHE from NETWORK: ${request.url}`);
//   const cache = await caches.open(cacheName);
//   const fullurl = new URL(request.url)
//   const resource = fullurl.pathname;
//   let thing = await cache.match(resource);
//   // only adds new resources in, not updates out-of-date ones?
//   if (thing === undefined) {
//     thing = await fetch(request.clone());
//     await cache.put(request, thing);
//   }

// }

// 'use strict';

// // https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

// const cacheName = 'fania-v1.0.3';

// const resources = [
//   "/index.html",
//   "/haskell.html",
//   "/now/index.html",
//   "/hedgehog/index.html",
//   "/starlings/index.html",
//   "/meta/style.css",
//   "/meta/scripts.js",
//   "/meta/date.js",
//   "/meta/gallery.js",
//   "/meta/pataphysicalDate.min.js",
//   "/favicon.ico",
//   "/site.webmanifest"
// ];

// const deleteCache = async (key) => {
//   await caches.delete(key);
// };

// const deleteOldCaches = async () => {
//   const cacheKeepList = [cacheName];
//   const keyList = await caches.keys();
//   const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
//   await Promise.all(cachesToDelete.map(deleteCache));
// };

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open(cacheName);
//   // await cache.addAll(resources);
//   for (let i = 0; i < resources.length; i++) {
//     try {
//       ok = await cache.add(i);
//       // console.log('sw log: cache.add',resources[i]);
//     } catch (err) {
//       // console.warn('sw error: cache.add',resources[i]);
//     }
//   }
// };

// const putInCache = async (request, response) => {
//   const cache = await caches.open(cacheName);
//   const fullurl = new URL(request.url)
//   const urlOri = fullurl.origin;
//   if((urlOri.startsWith('http')) || (urlOri.startsWith('https'))){
//     await cache.put(request, response);
//   }
// };

// const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
//   // First try to get the resource from the cache
//   const responseFromCache = await caches.match(request);
//   if (responseFromCache) {
//     return responseFromCache;
//   }

//   // Next try to use (and cache) the preloaded response, if it's there
//   const preloadResponse = await preloadResponsePromise;
//   if (preloadResponse) {
//     // console.info("using preload response", preloadResponse);
//     putInCache(request, preloadResponse.clone());
//     return preloadResponse;
//   }

//   // Next try to get the resource from the network
//   try {
//     const responseFromNetwork = await fetch(request);
//     // response may be used only once
//     // we need to save clone to put one copy in cache
//     // and serve second one
//     putInCache(request, responseFromNetwork.clone());
//     return responseFromNetwork;
//   } catch (error) {
//     const fallbackResponse = await caches.match(fallbackUrl);
//     if (fallbackResponse) {
//       return fallbackResponse;
//     }
//     // when even the fallback response is not available,
//     // there is nothing we can do, but we must always
//     // return a Response object
//     return new Response("Network error happened", {
//       status: 408,
//       headers: { "Content-Type": "text/plain" },
//     });
//   }
// };

// // Enable navigation preload
// const enableNavigationPreload = async () => {
//   if (self.registration.navigationPreload) {
//     await self.registration.navigationPreload.enable();
//   }
// };

// self.addEventListener("activate", (event) => {
//   event.waitUntil(enableNavigationPreload());
//   event.waitUntil(deleteOldCaches());
// });

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     addResourcesToCache(resources),
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     cacheFirst({
//       request: event.request,
//       preloadResponsePromise: event.preloadResponse,
//       fallbackUrl: "/images/femalecodertocat.png",
//     }),
//   );
// });

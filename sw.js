'use strict';

// https://developer.chrome.com/docs/workbox/caching-strategies-overview/

const cacheName = 'fania-v1.0.0';


// const precacheResources = [
//   '/',
//   '/meta/date.min.js',
//   '/meta/pataphysicalDate.min.js',
//   '/meta/scripts.min.js',
//   '/meta/gallery.min.js',
//   '/meta/styles.css'
// ];

// const postcacheResources = [
//   '/now/index.html',
//   '/haskell.html',
//   '/starlings'
// ];

// const staticResources = [
//   '/site.webmanifest',
//   '/favicon.ico',
//   '/images/favicons/spiral-static.svg',
//   '/images/fuckthiscat.mp4',
//   '/images/fuckthiscat.webm',
//   '/images/favicons/android-chrome-192x192.png',
//   '/images/favicons/android-chrome-512x512.png',
//   '/images/favicons/apple-touch-icon.png',
//   '/images/favicons/maskable_icon.png'
// ];

// self.addEventListener('install', (event) => {
//   // Precache assets on install
//   event.waitUntil(caches.open(cacheName).then((cache) => {
//     return cache.addAll(precachedAssets);
//   }));
// });



// Stale-while-revalidate
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
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
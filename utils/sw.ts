// Service Worker installation event
// declare let self: ServiceWorkerGlobalScope;

(self).addEventListener('install', function(event) {
    (event as any).waitUntil(
      caches.open('app-cache-v1')
        .then(function(cache: Cache) {
          return cache.addAll([
            '/index.html',
            '/css/style.css',
            '/js/main.js',
            // Add other static assets you want to cache
          ]);
        })
    );
  });
  
  // Service Worker fetch event
  self.addEventListener('fetch', function(event) {
    (event as any).respondWith(
      caches.match((event as any).request)
        .then(function(response: Response | undefined) {
          return response || fetch((event as any).request);
        })
    );
  });
  
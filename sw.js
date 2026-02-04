self.addEventListner("install",(event)=>{
  event.waitUntil(
    caches.open('webapp')then((cache)=>{
      return caches.addAll([
        '/',
        '/index.html'
        ]);
    })
    )
});

self.addEventListner("fetch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((response)=>{
      return response || fetch(event.request);
    })
    );
});

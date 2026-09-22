// Minimal service worker — just enough to make the site "installable" as a PWA.
// It does not cache the game itself, since this is a live multiplayer app
// that always needs a fresh connection to the server.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass everything straight through to the network (no offline caching,
  // since a real-time multiplayer game needs a live connection anyway).
  event.respondWith(fetch(event.request));
});

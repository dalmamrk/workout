// sw.js — Service Worker per Workout PWA (funzionamento offline e cache per iPhone/desktop)
const CACHE_VERSION = 'workout-v1';
const CACHE_NAME = CACHE_VERSION;

const PRECACHE_URLS = [
    './',
    'index.html',
    'ex.html',
    'manifest.webmanifest',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/apple-touch-icon.png',
    'immagini/1_triceps_Overhead_DB_Tricep_Extension.png',
    'immagini/Dumbbell_Bench_Hip_Thrust.jpg',
    'immagini/alternating_curl.png',
    'immagini/bent_over_row.png',
    'immagini/bicep_curl.png',
    'immagini/cross_body_curl.png',
    'immagini/crunches.png',
    'immagini/dumbbell_fly.png',
    'immagini/dumbbell_pullover.png',
    'immagini/dumbbell_stiff_leg_deadlift.png',
    'immagini/hammer_curl.png',
    'immagini/incline_bicep_curl.png',
    'immagini/incline_dumbbell_press.png',
    'immagini/lying_leg_curl.png',
    'immagini/lying_triceps_extension.png',
    'immagini/narrow_stance_goblet_squat.png',
    'immagini/neutral_close_grip_dumbbell_press.png',
    'immagini/one_arm_bench_row.png',
    'immagini/plank.png',
    'immagini/reverse_grip_dumbbell_press.png',
    'immagini/russian_twists.png',
    'immagini/seated_arnold_press.png',
    'immagini/seated_bent_over_lateral_raise.png',
    'immagini/seated_front_press.png',
    'immagini/seated_front_raise.png',
    'immagini/seated_shoulder_press.png',
    'immagini/seated_side_lateral_raise.png',
    'immagini/standard_dumbbell_press.png',
    'immagini/standard_stance_goblet_squat.png',
    'immagini/tricep_kickback.png',
    'immagini/wide_stance_goblet_squat.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name.startsWith('workout-') && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('message', event => {
    if (event.data && event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('index.html');
                }
            });
        })
    );
});

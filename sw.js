/* SafeDoc : fonctionnement hors ligne.
   Réseau d'abord (les mises à jour arrivent dès la connexion), cache en secours. */
const V='safedoc-v11';
const SHELL=['./','styles.css','app.js','guide-data.js','manifest.webmanifest','favicon.svg','icon-192.png','icon-512.png','logo-dpworld.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==location.origin||u.pathname.startsWith('/_vercel/'))return;
  e.respondWith(fetch(r).then(res=>{
    if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}
    return res;
  }).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));
});

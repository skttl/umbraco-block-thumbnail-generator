if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let r={};const a=e=>i(e,s),f={module:{uri:s},exports:r,require:a};n[s]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-b833909e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.js",revision:null},{url:"icons/generate-icons.js",revision:"0a311c57e2b99651372bacd24dd64d95"},{url:"icons/icon-128x128.png",revision:"fb54156276e2fe19a2e7c0bb15a5c78b"},{url:"icons/icon-144x144.png",revision:"d372ea459e84dac4c74af7fe7e72b531"},{url:"icons/icon-152x152.png",revision:"030fa8bac95f12edf8529ea869cb2d62"},{url:"icons/icon-192x192.png",revision:"93407414e2198f6cd9b88814702af3ad"},{url:"icons/icon-384x384.png",revision:"a6ac0afb1afe84823e1bb85e76359b3e"},{url:"icons/icon-512x512.png",revision:"fd3c75a186ab01dce377ebfc87b14953"},{url:"icons/icon-72x72.png",revision:"f5e3da834877c5d507d540e3fe48e018"},{url:"icons/icon-96x96.png",revision:"093f78474a9717b1159049b8c7718018"},{url:"index.html",revision:"e55e0bdf75fa15fc46292fd81d4e0833"},{url:"registerSW.js",revision:"34b766a45b6ff67528130eb7e0faf15e"},{url:"icons/icon-72x72.png",revision:"f5e3da834877c5d507d540e3fe48e018"},{url:"icons/icon-96x96.png",revision:"093f78474a9717b1159049b8c7718018"},{url:"icons/icon-128x128.png",revision:"fb54156276e2fe19a2e7c0bb15a5c78b"},{url:"icons/icon-144x144.png",revision:"d372ea459e84dac4c74af7fe7e72b531"},{url:"icons/icon-152x152.png",revision:"030fa8bac95f12edf8529ea869cb2d62"},{url:"icons/icon-192x192.png",revision:"93407414e2198f6cd9b88814702af3ad"},{url:"icons/icon-384x384.png",revision:"a6ac0afb1afe84823e1bb85e76359b3e"},{url:"icons/icon-512x512.png",revision:"fd3c75a186ab01dce377ebfc87b14953"},{url:"manifest.webmanifest",revision:"d87993650ecd15b05d9593a9a59e11e9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));

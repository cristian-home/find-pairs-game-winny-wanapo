if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const o=e=>i(e,r),a={module:{uri:r},exports:u,require:o};s[r]=Promise.all(l.map((e=>a[e]||o(e)))).then((e=>(n(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"1cefe47617a8cdeeb4aa0dd98dcc67d9"},{url:"assets/1-BrcDC2RJ.webp",revision:null},{url:"assets/10-BV9ziIY-.webp",revision:null},{url:"assets/11-Dn2wTHlx.webp",revision:null},{url:"assets/12-BjhoDWHK.webp",revision:null},{url:"assets/2-lGhwYmcg.webp",revision:null},{url:"assets/3-CdvJDPsn.webp",revision:null},{url:"assets/4-CgAMfPE9.webp",revision:null},{url:"assets/404NotFound-B7S1rYhq.js",revision:null},{url:"assets/5-dBE2C5Ns.webp",revision:null},{url:"assets/6-ByxVwjII.webp",revision:null},{url:"assets/7-MbvSa_lL.webp",revision:null},{url:"assets/8-dVxCmU2-.webp",revision:null},{url:"assets/9-oPV23PUj.webp",revision:null},{url:"assets/AboutView-CHNlcaLE.js",revision:null},{url:"assets/bear-circle-CN0BfNpQ.webp",revision:null},{url:"assets/bottom-bear-BdGP2kR5.webp",revision:null},{url:"assets/bounce-stars-CTHf44uP.svg",revision:null},{url:"assets/ConfigView-DfL1mb_o.js",revision:null},{url:"assets/congrats-BXK5PCgt.webp",revision:null},{url:"assets/CongratsView-CPv3oIRP.js",revision:null},{url:"assets/crono-B7wSt1z4.svg",revision:null},{url:"assets/GameView-BjfNJU88.js",revision:null},{url:"assets/GameView-COhEU7Zr.css",revision:null},{url:"assets/index-6gAvHzvD.js",revision:null},{url:"assets/index-BKRrMUH4.css",revision:null},{url:"assets/ResultsView-AGFZToI6.js",revision:null},{url:"assets/start-text-C-f4zRv_.webp",revision:null},{url:"assets/winny-logo_600x600-bbuN3YDr.webp",revision:null},{url:"favicon.ico",revision:"5ad5475a1a95e995381bf0db5004ccc6"},{url:"favicon.svg",revision:"340bbb37c6e98d87eaefa0029a506752"},{url:"index.html",revision:"fb68774b80e360683594b40ed421c423"},{url:"maskable-icon-512x512.png",revision:"77a981941f8b4f2ac55577939935c7c1"},{url:"pwa-192x192.png",revision:"116d99ada24c59980f0002defb1b8193"},{url:"pwa-512x512.png",revision:"bd0459ca45f818a115591bba1024b8c6"},{url:"pwa-64x64.png",revision:"e5b60eae9037e7fcc8ae38e2467d4b72"},{url:"registerSW.js",revision:"e184204015e0dcedc73c8bbac45530f7"},{url:"maskable-icon-512x512.png",revision:"77a981941f8b4f2ac55577939935c7c1"},{url:"pwa-192x192.png",revision:"116d99ada24c59980f0002defb1b8193"},{url:"pwa-512x512.png",revision:"bd0459ca45f818a115591bba1024b8c6"},{url:"pwa-64x64.png",revision:"e5b60eae9037e7fcc8ae38e2467d4b72"},{url:"manifest.webmanifest",revision:"252b27947780b1a044130e81150fb055"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

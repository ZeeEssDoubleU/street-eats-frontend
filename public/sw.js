if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,a,t)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Pc9PD_RhjGMZbHeecbDxL/_buildManifest.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/Pc9PD_RhjGMZbHeecbDxL/_ssgManifest.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/20.fbe8645e9aa12e1aa3d8.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/69c383044fbfc759ad3cc2d6e859ec7caa571793.28bc28cd0edf11ddd41a.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/7c3c2c69ed832d0c1dd0d429b07945215fb7ae0f.077f3ec91af179d9cc7f.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/83a958db58d780f89f9eafa8ec77715ee6fb8756.271c473b0398240c285e.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/9058f31809328101d96179024fb78f178df05807.5af32a9f3e9f47d80ac2.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/9a521051a94dd6f94472689bd9c28b8350847ae2.195c33da4577a779552e.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/f642ace9ae74d9c8bd7a4ec936c7724ae5049b7d.4e7b050aa0a50bd1173f.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/fa5744826a55cd3db2a3184cb16474cd4b30d972.14ed3bbd741fc4316e94.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/framework.efe182f2d62be1d8151a.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/main-6e1affdfef8858afb013.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/_app-ec8ac9aa318ccb06c929.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/_error-2e36d09669f88e9afc1f.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/checkout/%5Bvendor%5D-e4109d0e6000bbf3d137.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/checkout/success-55892609fc214aa7029f.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/index-a968a992027fe5d55086.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/login-c09fb245182bc79d18aa.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/restaurants-39016c441dc11d335996.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/restaurants/%5Brestaurant%5D-8bacb50eea87ecd43a27.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/pages/signup-b1c3eb126476fb0e663d.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/polyfills-5ba9c403cc30e4733b64.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/_next/static/chunks/webpack-b30e70891ffe9326a6cc.js",revision:"Pc9PD_RhjGMZbHeecbDxL"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

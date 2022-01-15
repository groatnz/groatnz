/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/_app.js",
    "revision": "e2b3ff3e15b358077a8821ba2133117d"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/_error.js",
    "revision": "349ad5fae83ab7ccc8dfb49f3254e02d"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/index.js",
    "revision": "342e442381df9ac142466e3a05497ba2"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/quotes.js",
    "revision": "1dd196e9ab471cddfef0e65473ec6c2d"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/resume.js",
    "revision": "350e1ab806e9738f5534f8eb6c32d212"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/sfia-skills.js",
    "revision": "9a5e3533e9003193967951f127fc3b30"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/tech-skills.js",
    "revision": "090149b3e872479873487fa604a10ae6"
  },
  {
    "url": "/_next/static/_FH5EJlaHpMkz_Swjd-CB/pages/timeline.js",
    "revision": "0546185f5d1a9abb7631bf01de5f484f"
  },
  {
    "url": "/_next/static/chunks/ed583ac97828345775f099817ec331b83b75089a.ed9d87f80730ddce5554.js",
    "revision": "c626393d0815693bc57f8636ff4844a7"
  },
  {
    "url": "/_next/static/chunks/framework.c8d289f8b96717e32d7a.js",
    "revision": "f5aa0662c1046db91fee1a246690982b"
  },
  {
    "url": "/_next/static/runtime/main-c813c3cd4130941a05f5.js",
    "revision": "763cd91ff542e0e565f9d09ffa2441c1"
  },
  {
    "url": "/_next/static/runtime/polyfills-19c51f1d429240f27e5c.js",
    "revision": "f6832bdfcecd382f46a3d81235590c4d"
  },
  {
    "url": "/_next/static/runtime/webpack-c212667a5f965e81e004.js",
    "revision": "f5e6e2fca3144cc944812cfa3547f475"
  },
  {
    "url": "/404.html",
    "revision": "833c1a015497e8dfe926fa227b897ebc"
  },
  {
    "url": "/index.html",
    "revision": "88d0971509525e226030d045d75e2df7"
  },
  {
    "url": "/quotes.html",
    "revision": "82076b4b10776b002305cbb4d7e341f0"
  },
  {
    "url": "/resume.html",
    "revision": "7943e548c99769099524aed24c0c489a"
  },
  {
    "url": "/sfia-skills.html",
    "revision": "e460e488f9ec1f6d6f42b2a7f1533111"
  },
  {
    "url": "/static/css/hamburgers.css",
    "revision": "2aeedfb434a3ba8aa3dc175010f1bbf6"
  },
  {
    "url": "/static/images/hashtag.png",
    "revision": "91193c45780ff1060ccaadb81e54d2ec"
  },
  {
    "url": "/static/images/hashtag.webp",
    "revision": "b67a94418a2279fc3679f8a50bc6c356"
  },
  {
    "url": "/static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "/static/images/logo_white.png",
    "revision": "ee6cac2e4c4d1fe6daf29c216cee09d0"
  },
  {
    "url": "/static/images/logo.png",
    "revision": "e9a56e79ac434368ff632af193a3e3da"
  },
  {
    "url": "/static/images/ogimage.png",
    "revision": "92ea39600713234443ae29a0421956d0"
  },
  {
    "url": "/tech-skills.html",
    "revision": "cc27e87c9ac4999dc612791d2080a6c5"
  },
  {
    "url": "/timeline.html",
    "revision": "ba9989d14cf3da582555b93e3d2d875e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

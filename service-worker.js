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
    "url": "404.html",
    "revision": "83ea0fef611e5f20c3981190bdfdbf7a"
  },
  {
    "url": "assets/css/0.styles.4cb38b6f.css",
    "revision": "23499cdc6f7873eb45b16f1d4fd9fd7f"
  },
  {
    "url": "assets/img/2020-12-27_16-21-07.9a38ff3f.gif",
    "revision": "9a38ff3f769991563588a9d507656f2e"
  },
  {
    "url": "assets/img/786a415a-5fee-11e6-9c11-45a2cfdf085c.08daea42.png",
    "revision": "08daea42db8838ab4762f25b68dc743a"
  },
  {
    "url": "assets/img/Accept-Fields.aac269eb.png",
    "revision": "aac269eb9a7743a483dcfb3fc2627392"
  },
  {
    "url": "assets/img/controller.6e19042e.png",
    "revision": "6e19042ec6dae373a24c5aebfcf303d5"
  },
  {
    "url": "assets/img/dir.3315891f.png",
    "revision": "3315891fef2b7b7a3704a69c0b2283c6"
  },
  {
    "url": "assets/img/Front-End-Cache.d2f8a09b.png",
    "revision": "d2f8a09b400a1b2e0d982c4684591fba"
  },
  {
    "url": "assets/img/HTTP-All-Version.621107f2.png",
    "revision": "621107f25db14c4acbb0165a1047030e"
  },
  {
    "url": "assets/img/Http-Cache-Type.2cb81c44.png",
    "revision": "2cb81c44fd035cbc778ab54cc03ec43c"
  },
  {
    "url": "assets/img/HTTP-Cache.0c529972.png",
    "revision": "0c5299729426b447f81294239a801d6e"
  },
  {
    "url": "assets/img/HTTP-Main.e9ffe442.jpg",
    "revision": "e9ffe4426b395f09391f8da1fd774105"
  },
  {
    "url": "assets/img/image-20201112104422010.2f86b312.png",
    "revision": "2f86b3124b7fa1962f6609663124e314"
  },
  {
    "url": "assets/img/image-20201227205925934.5ae8b9c9.png",
    "revision": "5ae8b9c972bfd6b9f4c07a35039a2abb"
  },
  {
    "url": "assets/img/image-20201227210144938.a009a791.png",
    "revision": "a009a791579ea49505e3c5058c55ce1e"
  },
  {
    "url": "assets/img/image.fab16997.png",
    "revision": "fab1699770698b45d9204ca7da8a7520"
  },
  {
    "url": "assets/img/image10.aaf010e2.png",
    "revision": "aaf010e29b312c6b80136412f0597999"
  },
  {
    "url": "assets/img/image11.a2d52708.png",
    "revision": "a2d5270832d00515255e72c7e88a8950"
  },
  {
    "url": "assets/img/image2.560710c1.png",
    "revision": "560710c112e0e289ec4a5f6e2c0b3b39"
  },
  {
    "url": "assets/img/image3.4be9836e.png",
    "revision": "4be9836e3c8a888d35b38be0112d9fa1"
  },
  {
    "url": "assets/img/image4.7d5a3721.png",
    "revision": "7d5a37211b97fd3bf96e7002da2926dc"
  },
  {
    "url": "assets/img/image5.37f6c7ce.png",
    "revision": "37f6c7ce22306ca1a52690b0a6200c3f"
  },
  {
    "url": "assets/img/image6.5ed76eb3.png",
    "revision": "5ed76eb39cc9c99707dff931b8139287"
  },
  {
    "url": "assets/img/image7.d5f5f564.png",
    "revision": "d5f5f56473aa630b7d879ba3b482b1ef"
  },
  {
    "url": "assets/img/image8.8e7e8810.png",
    "revision": "8e7e881053d25bbb58236da51395efa6"
  },
  {
    "url": "assets/img/image9.c8be8362.png",
    "revision": "c8be836293e312549d9e96fb0b8ac56b"
  },
  {
    "url": "assets/img/JavaScript-Prototype.c5ff09a6.png",
    "revision": "c5ff09a638377b1920734b09c4b39322"
  },
  {
    "url": "assets/img/JS-Module.4ef02afe.png",
    "revision": "4ef02afeb05ba95186ace5675b190cf4"
  },
  {
    "url": "assets/img/React-LifeCycle.307fea35.png",
    "revision": "307fea3593fd920c5be0da7e184d3b26"
  },
  {
    "url": "assets/img/Request-Headers.1fe4c112.png",
    "revision": "1fe4c1121c50abcf571cebd677a8bdea"
  },
  {
    "url": "assets/img/Response-Headers.cb0d1d2c.png",
    "revision": "cb0d1d2c56400fe9c9988ee32842b175"
  },
  {
    "url": "assets/img/router.78a8af63.png",
    "revision": "78a8af63f5a2a441572c1e5d88144a82"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Snipaste_2020-11-12_00-12-33.1d42e446.png",
    "revision": "1d42e4464c2aa37f09bc8eee6a5c2b6c"
  },
  {
    "url": "assets/img/SSR.d41cb506.png",
    "revision": "d41cb5060c912def5d6f948d817e2920"
  },
  {
    "url": "assets/img/Strong-Cache-Header.54290a05.png",
    "revision": "54290a05834a227279b4d432dc728b43"
  },
  {
    "url": "assets/img/TCP-Four-Waves.3de448aa.png",
    "revision": "3de448aa3a736ef92b21de87100119fd"
  },
  {
    "url": "assets/img/TCP-Three-Handshakes-2.02561602.png",
    "revision": "02561602ba5e15f996579c2f091740a1"
  },
  {
    "url": "assets/img/TCP-Three-Handshakes.20c8cfa8.png",
    "revision": "20c8cfa8b22b0b14e8b2cb0bbbf8c848"
  },
  {
    "url": "assets/img/The-Same-Time-Create-TCP-Connect.8de795e0.jpg",
    "revision": "8de795e097623b8d278ca45ee3184480"
  },
  {
    "url": "assets/img/URI-Structure.ff41d020.png",
    "revision": "ff41d020c7a27d1e8191057f0e658b38"
  },
  {
    "url": "assets/img/vscode-eslint-error.b2dd4096.png",
    "revision": "b2dd40960f631765ba0052652dff714c"
  },
  {
    "url": "assets/img/vscode-output-eslint.73c10a27.png",
    "revision": "73c10a271b0e1953c10685fe06fdfc66"
  },
  {
    "url": "assets/img/Vue-LifeCycle.c0126709.png",
    "revision": "c012670912c9c25e99b4e4f95f843b3f"
  },
  {
    "url": "assets/js/10.ddc3aee7.js",
    "revision": "56b1a9069a4e547e32b50e0bc4deb3aa"
  },
  {
    "url": "assets/js/100.65ecbf90.js",
    "revision": "d1079371dc39f4aa3aebf4544618c685"
  },
  {
    "url": "assets/js/101.45034f47.js",
    "revision": "1cc2d56872e8adff23683143533b797d"
  },
  {
    "url": "assets/js/102.21070358.js",
    "revision": "3857c30358ca20eb7a1df7f17258b8a5"
  },
  {
    "url": "assets/js/103.81baf330.js",
    "revision": "f5f689c22dc159b0d35ee9971d7c7448"
  },
  {
    "url": "assets/js/104.96cd59ad.js",
    "revision": "a84c3642d7ad946a766fe58fdc12ac2c"
  },
  {
    "url": "assets/js/105.830ac272.js",
    "revision": "febfd20d86ac318c684a129b3655260b"
  },
  {
    "url": "assets/js/106.9f9b9344.js",
    "revision": "2931ae108762fbbfe638caa11b7aec52"
  },
  {
    "url": "assets/js/107.ff432364.js",
    "revision": "7d8eee96fff202c2215901318b73b634"
  },
  {
    "url": "assets/js/108.8ea46a48.js",
    "revision": "e4ae8b6a406dc2d5aef148eac2486fcd"
  },
  {
    "url": "assets/js/109.d65853fa.js",
    "revision": "9d79d8b149e631224c3567f6140004d5"
  },
  {
    "url": "assets/js/11.68340129.js",
    "revision": "d50d54095410e6fde55070af53a24e7b"
  },
  {
    "url": "assets/js/110.857ec4b0.js",
    "revision": "74d706693c3fa335bc9814f50c136995"
  },
  {
    "url": "assets/js/111.9b284e98.js",
    "revision": "426cd6613f05bb6b0293f159fb7d6d58"
  },
  {
    "url": "assets/js/112.f4b3c5a5.js",
    "revision": "6fc49ab5661d70b8c69a596d4cf250ae"
  },
  {
    "url": "assets/js/113.eb22d1a4.js",
    "revision": "f3d87aa803a0741c11d3a8afdced6ee2"
  },
  {
    "url": "assets/js/114.1a98bda4.js",
    "revision": "0ced456852a09d0c758e7d55c84b1d74"
  },
  {
    "url": "assets/js/115.924c85e2.js",
    "revision": "fc7b98435bdb8ce0aa1857ce3202eaae"
  },
  {
    "url": "assets/js/116.d608aecc.js",
    "revision": "abc87604e4815e61e24abc1282adbb44"
  },
  {
    "url": "assets/js/117.c2018e31.js",
    "revision": "fbcd57ced381fadc5172632842d02b9b"
  },
  {
    "url": "assets/js/118.c750f1a7.js",
    "revision": "8eba6f4956ac160a1aabe6ee1aec4eb1"
  },
  {
    "url": "assets/js/119.293886a9.js",
    "revision": "5a2ce6c2bc209e4e538ad6901f3c22a2"
  },
  {
    "url": "assets/js/12.c3ae57be.js",
    "revision": "4a43fdd5dbbf3a8f4ee93758f005760d"
  },
  {
    "url": "assets/js/120.7599472e.js",
    "revision": "108f1deacc94c7f9b253ae828d313f42"
  },
  {
    "url": "assets/js/121.04f2c3fd.js",
    "revision": "41ef8b2bd2e6fd06db57254f6a9c8d5a"
  },
  {
    "url": "assets/js/122.4f5c8c8d.js",
    "revision": "00fd004e6bb78d1217c587a38677f8b0"
  },
  {
    "url": "assets/js/123.0a49319e.js",
    "revision": "eba95001fb9bcb0b0f0c241e4e0bee9e"
  },
  {
    "url": "assets/js/124.68e00f32.js",
    "revision": "a9f9e93534181c83ee709ccb9004712b"
  },
  {
    "url": "assets/js/125.c1fa9698.js",
    "revision": "396f54935346a0fbc49f27d519a787b6"
  },
  {
    "url": "assets/js/126.21920633.js",
    "revision": "71355eb5f955fb9aebfdf129c54ae3ea"
  },
  {
    "url": "assets/js/127.ddf07f44.js",
    "revision": "acbddcd45d6dad7544d70cf291119891"
  },
  {
    "url": "assets/js/128.a4785d71.js",
    "revision": "222e408559bf91eee24dc9b87c10c1d2"
  },
  {
    "url": "assets/js/129.fd0b2389.js",
    "revision": "ed066e08049b5a2067002b209f71f397"
  },
  {
    "url": "assets/js/13.b9e03290.js",
    "revision": "6a50d2c693a64f9d32780d439f331abb"
  },
  {
    "url": "assets/js/130.b68903c6.js",
    "revision": "718d891d86308bea5053a908886ee25c"
  },
  {
    "url": "assets/js/131.c29851d7.js",
    "revision": "0c557d76ae96e5092faa439a64a8960d"
  },
  {
    "url": "assets/js/132.26bfa754.js",
    "revision": "65aee91474a7cf41e19f4a989075f468"
  },
  {
    "url": "assets/js/133.83ec44e5.js",
    "revision": "1ff4cfac5ea0ddbc927c6a9507853ae3"
  },
  {
    "url": "assets/js/134.d7b6fd46.js",
    "revision": "b9281f8c8a35cf39fbb288803b5f6505"
  },
  {
    "url": "assets/js/135.438c8fa5.js",
    "revision": "e2d8cf7bb8a9ce9863d93edc44e817c7"
  },
  {
    "url": "assets/js/136.781969d5.js",
    "revision": "943c2ae431c37ea0b211232e64195261"
  },
  {
    "url": "assets/js/137.c3c0340d.js",
    "revision": "c194b5b5f81cd79dbf841b9804e9224a"
  },
  {
    "url": "assets/js/138.24b18e8d.js",
    "revision": "04468dafacb5e215fa46008de27d84a4"
  },
  {
    "url": "assets/js/139.8cd48176.js",
    "revision": "99c0c370e4e56c4024796da1fda42039"
  },
  {
    "url": "assets/js/14.ac1faf8d.js",
    "revision": "c4e2c7ee6ccb0682d94bdbac2d6e1d8f"
  },
  {
    "url": "assets/js/140.8d92e126.js",
    "revision": "e5240da7d931f1da0a3c8abb53dcb263"
  },
  {
    "url": "assets/js/141.4de7e224.js",
    "revision": "30219eccff20d333a4bf5ca6b3a2eb07"
  },
  {
    "url": "assets/js/142.bc822060.js",
    "revision": "fd9816a94fb93e3c11ae1966cfe30ff6"
  },
  {
    "url": "assets/js/143.4acafd12.js",
    "revision": "b0fa6b8ca9f0b7f1f3389784663f32d6"
  },
  {
    "url": "assets/js/144.acb66cb0.js",
    "revision": "39878a70a4096b97ea947a851171edca"
  },
  {
    "url": "assets/js/145.14cca5d5.js",
    "revision": "b938810a0c39c2bc740dc0a8187c8e9d"
  },
  {
    "url": "assets/js/146.0c188ff2.js",
    "revision": "f50e528026897b8d39380ea48f3c1341"
  },
  {
    "url": "assets/js/147.bb596671.js",
    "revision": "683dbd51162b27207305f2d55923c8c5"
  },
  {
    "url": "assets/js/148.baf733a3.js",
    "revision": "541718339a6d29304506318063cf28e6"
  },
  {
    "url": "assets/js/149.ad9b53c2.js",
    "revision": "6178a851bc014bf844512a09399986dc"
  },
  {
    "url": "assets/js/15.11376457.js",
    "revision": "fb0d6531faf1c5b382a94f638a74c057"
  },
  {
    "url": "assets/js/150.2c6f0e07.js",
    "revision": "ae77eb31db0a4a21913037dfd65ebc81"
  },
  {
    "url": "assets/js/151.f61db484.js",
    "revision": "8374a5089b6afef5d30a59e7c35bdc38"
  },
  {
    "url": "assets/js/152.f5a46d0e.js",
    "revision": "45230385492b009354ac6711b27099a8"
  },
  {
    "url": "assets/js/16.2aa5f128.js",
    "revision": "e6b464d32dd1312141118f65375de452"
  },
  {
    "url": "assets/js/17.5a94abc0.js",
    "revision": "9111f8d43065db15b6c6612d0f1e79e6"
  },
  {
    "url": "assets/js/18.22266ea8.js",
    "revision": "6abfd74cd5c922fa95fad3e7aa9a78f7"
  },
  {
    "url": "assets/js/19.9d5e202c.js",
    "revision": "4c602b522477be7e64a0b52401aadab0"
  },
  {
    "url": "assets/js/2.cc29f35f.js",
    "revision": "ea21e09f235043284ca0e3b5175b97d2"
  },
  {
    "url": "assets/js/20.2bf4d527.js",
    "revision": "40f206f44b0496ad65cb7cec983b008a"
  },
  {
    "url": "assets/js/21.c27c9b35.js",
    "revision": "96aba4b2ad9d5fe348aadd6f96da7a99"
  },
  {
    "url": "assets/js/22.05ef3779.js",
    "revision": "64167f351e234abf32516519bc28d6c9"
  },
  {
    "url": "assets/js/23.547f0af3.js",
    "revision": "5fc659be77eb9662e8dc53b22d701373"
  },
  {
    "url": "assets/js/24.92f9cb66.js",
    "revision": "379a9c07d58c2f8baa0605d54f4aae21"
  },
  {
    "url": "assets/js/25.dad95fa9.js",
    "revision": "15779dc772709ec2fbf578a399ce3c86"
  },
  {
    "url": "assets/js/26.51290e38.js",
    "revision": "8f42d130e3208361c4a6e79c5cdaa935"
  },
  {
    "url": "assets/js/27.6ee151aa.js",
    "revision": "29df35352e04b5a1acbb5177655df1fa"
  },
  {
    "url": "assets/js/28.16f11f05.js",
    "revision": "907cda0f6aacc411dd861781d0ecce49"
  },
  {
    "url": "assets/js/29.e595daeb.js",
    "revision": "0ee1bedf7ae42013998f9a335542417b"
  },
  {
    "url": "assets/js/3.3bda7e9e.js",
    "revision": "50e0538d1c4a60ab20fdd243f0fe6e4f"
  },
  {
    "url": "assets/js/30.15005384.js",
    "revision": "0a22bf49926ced33a106a28dbe7a64ca"
  },
  {
    "url": "assets/js/31.68311903.js",
    "revision": "480b195f62c4d523021d45c5b5837c2d"
  },
  {
    "url": "assets/js/32.c413b9b1.js",
    "revision": "36dcc81ac98322982231077634bb54da"
  },
  {
    "url": "assets/js/33.ebaa5e3b.js",
    "revision": "ef811fb5ff7e8b7f260b1de42c44dade"
  },
  {
    "url": "assets/js/34.93062990.js",
    "revision": "6f774a2cb5b9acaf9c03cb22d760c2f1"
  },
  {
    "url": "assets/js/35.84866c98.js",
    "revision": "6a0a96a133461b6393cbac04bce341a5"
  },
  {
    "url": "assets/js/36.0deaf777.js",
    "revision": "94db1c56d8c7097a68f68a5417f53ab1"
  },
  {
    "url": "assets/js/37.a31cbca4.js",
    "revision": "ff0a530e15d69a2fe1a5a1094222d943"
  },
  {
    "url": "assets/js/38.37fdf4d2.js",
    "revision": "a506820e3e303b36e83ce224567801c5"
  },
  {
    "url": "assets/js/39.2bdd9640.js",
    "revision": "f0a86453c5055de29f7a3c1eaa1d7e94"
  },
  {
    "url": "assets/js/4.189d4dcc.js",
    "revision": "0ba223adeb9c6c81efdc3263a46d2dac"
  },
  {
    "url": "assets/js/40.7fa92507.js",
    "revision": "b6b766a919c7b65ce72b5f0b084812a5"
  },
  {
    "url": "assets/js/41.9e344eae.js",
    "revision": "748bb6c25b5c4c73a57d6791e2e8649d"
  },
  {
    "url": "assets/js/42.62d9ee7b.js",
    "revision": "3ce1f442b2c5306f682d6dbab564220c"
  },
  {
    "url": "assets/js/43.c2932b80.js",
    "revision": "0cc7137a3488feff482827f87e05fc44"
  },
  {
    "url": "assets/js/44.e4affdda.js",
    "revision": "6dc95c8cd2660094d7ef0895bbcbf3f2"
  },
  {
    "url": "assets/js/45.d6caf45f.js",
    "revision": "2a1e176b0787f982c5e45fa78c732809"
  },
  {
    "url": "assets/js/46.791bcf9b.js",
    "revision": "519754b4ee8047308c3de0e187ffdcbf"
  },
  {
    "url": "assets/js/47.511b7135.js",
    "revision": "a95fd410657f98eb0276de6f8ac0a1f6"
  },
  {
    "url": "assets/js/48.57d40c7f.js",
    "revision": "32c2d44f2c9028e2767b7439463be73c"
  },
  {
    "url": "assets/js/49.f4e50841.js",
    "revision": "feef0cd00da6843577b5d3f65bb7d68e"
  },
  {
    "url": "assets/js/5.b9a303b4.js",
    "revision": "775e6435c7f6cd597c8adee45a8372ad"
  },
  {
    "url": "assets/js/50.9ced9866.js",
    "revision": "3d49c8bb6cc24761bad23d6b9b33f630"
  },
  {
    "url": "assets/js/51.2900db23.js",
    "revision": "f51da78c58f6658b90c6d27548c0e911"
  },
  {
    "url": "assets/js/52.143ccb79.js",
    "revision": "fdfb6ba798ad3369a13c068460014926"
  },
  {
    "url": "assets/js/53.f906840b.js",
    "revision": "e6e5dd139a83b9aec80d76ecd65983ad"
  },
  {
    "url": "assets/js/54.71f59ac8.js",
    "revision": "a2154b777ff6cf6750c06f6d39efb0e6"
  },
  {
    "url": "assets/js/55.1ca88fd5.js",
    "revision": "30a75e9f91ef50d3c1f0f3d20e60e233"
  },
  {
    "url": "assets/js/56.4f076459.js",
    "revision": "9072c1bec04b4e8c977899a0a5027f07"
  },
  {
    "url": "assets/js/57.7b14b934.js",
    "revision": "349250936353c23dc93f477fdfe88f8c"
  },
  {
    "url": "assets/js/58.5e884722.js",
    "revision": "f700848076894aa57fc71353e904a439"
  },
  {
    "url": "assets/js/59.aa65db5e.js",
    "revision": "2c3d68eaaaac613a2a6f56fcca89e3a1"
  },
  {
    "url": "assets/js/6.a47c4d7e.js",
    "revision": "0575d7a23fc8de8250d87baf4e380dc1"
  },
  {
    "url": "assets/js/60.70f57642.js",
    "revision": "af14a12ed6e987ab4953fa33dfa5c5f5"
  },
  {
    "url": "assets/js/61.8ea111da.js",
    "revision": "00c813213f6e25d735910daed305b255"
  },
  {
    "url": "assets/js/62.b770f8b4.js",
    "revision": "3e020db02f2cc28b98a490ba3d12b63f"
  },
  {
    "url": "assets/js/63.04946d0d.js",
    "revision": "2ae9979f03c8477cdcd38b8d8ab26b52"
  },
  {
    "url": "assets/js/64.4a2bfce7.js",
    "revision": "099d3894cc6c9aa74af3cc160fefb4a3"
  },
  {
    "url": "assets/js/65.99d63ab9.js",
    "revision": "79230852ee4ffebd7142758169165760"
  },
  {
    "url": "assets/js/66.8bbc7b6b.js",
    "revision": "a7336a8794a28f6b50940f31ea716aee"
  },
  {
    "url": "assets/js/67.d43b1be4.js",
    "revision": "fcbb9b318a4af1649f91f551f2d0b60c"
  },
  {
    "url": "assets/js/68.90caf82a.js",
    "revision": "086cec72ccf28b83104bfbcd618e5f62"
  },
  {
    "url": "assets/js/69.b98b72b5.js",
    "revision": "512863e472a3f83c139a8b3256482a82"
  },
  {
    "url": "assets/js/7.ab0fbb82.js",
    "revision": "46cc8216288710cdf76cdd5a840c7c81"
  },
  {
    "url": "assets/js/70.f70a67d5.js",
    "revision": "130aa4012b5f444a3266a847fd95d79c"
  },
  {
    "url": "assets/js/71.5c0ee5f5.js",
    "revision": "52692a1dd2a1035752f83601d7e56e14"
  },
  {
    "url": "assets/js/72.bb790a69.js",
    "revision": "325e25dd215440087ffc377839b369f3"
  },
  {
    "url": "assets/js/73.972f8e47.js",
    "revision": "ab0040db75831e856d7e77a82fd595cc"
  },
  {
    "url": "assets/js/74.c74ae0f3.js",
    "revision": "78e9813478d65245852bea13720b9161"
  },
  {
    "url": "assets/js/75.63fe7d68.js",
    "revision": "fd7354617ee8130fafa68d3f851d6cc8"
  },
  {
    "url": "assets/js/76.3f6689ca.js",
    "revision": "cbd1af103eb80cbd42ff108845f680ff"
  },
  {
    "url": "assets/js/77.c447bf93.js",
    "revision": "73af994cf4b032fb6d13bc8f18badc40"
  },
  {
    "url": "assets/js/78.8f3023d5.js",
    "revision": "10ca11a308bcacf6212f77b0ed42735c"
  },
  {
    "url": "assets/js/79.ee771c9d.js",
    "revision": "17405b8104faff670f6543e40c793a6b"
  },
  {
    "url": "assets/js/8.d71d85dc.js",
    "revision": "b796bc6d9925eda95ef6b3bd938e00ab"
  },
  {
    "url": "assets/js/80.5a37dbeb.js",
    "revision": "142742956bcbbe6f048596afd1ba0162"
  },
  {
    "url": "assets/js/81.7dd62dde.js",
    "revision": "5a7a23253ca0bbf7ee017d551d21ee7b"
  },
  {
    "url": "assets/js/82.d0cfbcc9.js",
    "revision": "085e44983732cb40573d4c26dc00a796"
  },
  {
    "url": "assets/js/83.355f6b27.js",
    "revision": "ec1f2630e71d6c978d37368fc46709f5"
  },
  {
    "url": "assets/js/84.dcdca1de.js",
    "revision": "fc9b47eef868ee0ead9e625123d2d0cd"
  },
  {
    "url": "assets/js/85.9abd2690.js",
    "revision": "4d77d869299693172c0f84353b9b7715"
  },
  {
    "url": "assets/js/86.3ac82bbc.js",
    "revision": "39b247cbc6c5711533b5f152492af545"
  },
  {
    "url": "assets/js/87.edda11b9.js",
    "revision": "f915351ce8c2d4471fba13cb5ab7d16f"
  },
  {
    "url": "assets/js/88.45318fa1.js",
    "revision": "fd239c61115e1468c522d8f03b31e4ed"
  },
  {
    "url": "assets/js/89.9731b992.js",
    "revision": "f93790ace0970a5da1aa9f0ec3fd01b4"
  },
  {
    "url": "assets/js/9.29fb7e74.js",
    "revision": "3bba92eaff87b076358ba91b0de31bcc"
  },
  {
    "url": "assets/js/90.c95f41fd.js",
    "revision": "6c35d127b4c2ef2f565d69a4b751d02d"
  },
  {
    "url": "assets/js/91.27f1cfd7.js",
    "revision": "0783e8a875f943285a66c804c6b3bf49"
  },
  {
    "url": "assets/js/92.3462c66a.js",
    "revision": "171404e2efb8eb51d60e96978d24b825"
  },
  {
    "url": "assets/js/93.294ef7fe.js",
    "revision": "e79462d90cd536e28aff6207b1f951c2"
  },
  {
    "url": "assets/js/94.0c73f5ee.js",
    "revision": "c2f63f059fc3d7e6ad35ae10ab3276c8"
  },
  {
    "url": "assets/js/95.679bc5b5.js",
    "revision": "4288a5f5476e6b2679723229c3b415f9"
  },
  {
    "url": "assets/js/96.ececefdd.js",
    "revision": "d52b501bc99e2c4a8593be2a13751532"
  },
  {
    "url": "assets/js/97.1158cc1e.js",
    "revision": "d739086c25fbaa1727d360c033a1de57"
  },
  {
    "url": "assets/js/98.3b170dee.js",
    "revision": "6da705dd4b9c1ad6f97952457015c9f2"
  },
  {
    "url": "assets/js/99.a575163b.js",
    "revision": "c2fcd54c024e2a529a3f6b7a8d4c3261"
  },
  {
    "url": "assets/js/app.63182b31.js",
    "revision": "b3a4bae441e63737a121b6c06216eb37"
  },
  {
    "url": "CSS/BFC.html",
    "revision": "24e91166e749e55b2e86029e15c00c77"
  },
  {
    "url": "CSS/CSS 随笔.html",
    "revision": "47eda3ca297e227f067f84018910dd46"
  },
  {
    "url": "CSS/中间自适应，两边固定.html",
    "revision": "c069a9e7e5a49da6d6a708dc15f8deec"
  },
  {
    "url": "ES6-阮一峰/[es6]1.ECMAScript.6.简介.html",
    "revision": "e8b609f155de12380aa2f6a5a22e7b1d"
  },
  {
    "url": "ES6-阮一峰/[es6]10.对象的新增方法.html",
    "revision": "fb89ab123d5594ba12a248e3414ebaa5"
  },
  {
    "url": "ES6-阮一峰/[es6]11.Symbol.html",
    "revision": "5f7427329175d047e3ef177d66b03c90"
  },
  {
    "url": "ES6-阮一峰/[es6]12.Set.和.Map.数据结构.html",
    "revision": "bd70e48c4ae773b8a1693ee43e77eadf"
  },
  {
    "url": "ES6-阮一峰/[es6]13.Proxy.html",
    "revision": "22327b3cbb8f0f11018f26edf13502ec"
  },
  {
    "url": "ES6-阮一峰/[es6]14.Reflect.html",
    "revision": "3e3932560cc52f27cabb84150ab16cc5"
  },
  {
    "url": "ES6-阮一峰/[es6]15.Promise.对象.html",
    "revision": "4effee12e33cc57bcc51f47c232c394b"
  },
  {
    "url": "ES6-阮一峰/[es6]16.Iterator.和.for...of.循环.html",
    "revision": "0b49ccdbc3e05f68fbcdaf1846bc1ba7"
  },
  {
    "url": "ES6-阮一峰/[es6]17.Generator.函数的语法.html",
    "revision": "aa50d5c9ba6f0b9257a00a1b395b70a1"
  },
  {
    "url": "ES6-阮一峰/[es6]18.Generator.函数的异步应用.html",
    "revision": "5ff81bbf94d6de443e3ad94ea72b880d"
  },
  {
    "url": "ES6-阮一峰/[es6]19.async.函数.html",
    "revision": "0525ac8701f6130f6f16eb720ec53d81"
  },
  {
    "url": "ES6-阮一峰/[es6]2.let和const命令.html",
    "revision": "6bcb506a77dbbbc13c54130d42a819d4"
  },
  {
    "url": "ES6-阮一峰/[es6]20.Class.的基本语法.html",
    "revision": "ac4cb628cc27a86a94c6c38738c49b3d"
  },
  {
    "url": "ES6-阮一峰/[es6]21.Class.的继承.html",
    "revision": "6fe6a15a908a240b1fcd328d3eb2ec95"
  },
  {
    "url": "ES6-阮一峰/[es6]22.Module.的语法.html",
    "revision": "cbe258bf5b72491be6d3bbada0a601d0"
  },
  {
    "url": "ES6-阮一峰/[es6]23.Module.的加载实现.html",
    "revision": "a15edf5943c3f8d2b09c584053473568"
  },
  {
    "url": "ES6-阮一峰/[es6]24.编程风格.html",
    "revision": "ada7686039fdbcd6307728cf2c622ab0"
  },
  {
    "url": "ES6-阮一峰/[es6]25.读懂规格.html",
    "revision": "a6184616510aeb3e16e3bfa5fbdadc66"
  },
  {
    "url": "ES6-阮一峰/[es6]26.ArrayBuffer.html",
    "revision": "548466752d717ea492edd5797aea4a13"
  },
  {
    "url": "ES6-阮一峰/[es6]27.最新提案.html",
    "revision": "d8a477ec2ad271b0650629b44a819a12"
  },
  {
    "url": "ES6-阮一峰/[es6]28.Decorator.html",
    "revision": "4e97459fa59c852e651aaf54b6ea2ce9"
  },
  {
    "url": "ES6-阮一峰/[es6]29.参考链接.html",
    "revision": "605798ac6be327a444cb0039710b4c30"
  },
  {
    "url": "ES6-阮一峰/[es6]3.变量的解构赋值.html",
    "revision": "614d2ab3cf55738d0f132514d5fc840b"
  },
  {
    "url": "ES6-阮一峰/[es6]30.SIMD.html",
    "revision": "9cde3c7d25c28996d05cdee850c214bc"
  },
  {
    "url": "ES6-阮一峰/[es6]31.Mixin.html",
    "revision": "1551d729bc6adb092cd323d9f8f9eba9"
  },
  {
    "url": "ES6-阮一峰/[es6]32.函数式编程.html",
    "revision": "894ec4e5f491136641514d9641e17f13"
  },
  {
    "url": "ES6-阮一峰/[es6]33.鸣谢.html",
    "revision": "59215831cde839d55a276947da7ed766"
  },
  {
    "url": "ES6-阮一峰/[es6]4.字符串的扩展.html",
    "revision": "0ec621b88a38167a55cc32563f143fce"
  },
  {
    "url": "ES6-阮一峰/[es6]5.正则的扩展.html",
    "revision": "858aec02ced84d7e20f8a084b9562ffc"
  },
  {
    "url": "ES6-阮一峰/[es6]6.数值的扩展.html",
    "revision": "e6fc025d65dd1959bf0b57886db802eb"
  },
  {
    "url": "ES6-阮一峰/[es6]7.函数的扩展.html",
    "revision": "9fdb8cbbc6e05f2b3e9bda3d596255f3"
  },
  {
    "url": "ES6-阮一峰/[es6]8.数组的扩展.html",
    "revision": "7151b6bafaaa8f10426cca6f9e89314f"
  },
  {
    "url": "ES6-阮一峰/[es6]9.对象的扩展.html",
    "revision": "1105658ea9e3f253192ae0b7eb6b2515"
  },
  {
    "url": "images/egg.svg",
    "revision": "d8f570b68e9f7fe687978c854603f029"
  },
  {
    "url": "images/logo.png",
    "revision": "4bd8486e6ee374fa61c648e1a3795562"
  },
  {
    "url": "index.html",
    "revision": "a630780a26282812390f4a23f4a60dc6"
  },
  {
    "url": "JavaScript/1.JS随笔.html",
    "revision": "58a20aed5a511e05d6438e326c0bdd45"
  },
  {
    "url": "JavaScript/10.Iterator迭代器.html",
    "revision": "fd4146bf77341d50929d85132c4f0499"
  },
  {
    "url": "JavaScript/11.Generator.html",
    "revision": "149bff7dad8d5f37ae3d195f7f814752"
  },
  {
    "url": "JavaScript/12.instanceof.html",
    "revision": "3c1f0f5b37d1360b1f37e4bb005078f8"
  },
  {
    "url": "JavaScript/13.防抖、节流.html",
    "revision": "fc9fce82920433e1d7348220217a00f4"
  },
  {
    "url": "JavaScript/14.踩坑之路.html",
    "revision": "bcb26a972a4226ad215a0e647e057a4b"
  },
  {
    "url": "JavaScript/2.正则.html",
    "revision": "0e6f2e1ade3608c63147550604653baf"
  },
  {
    "url": "JavaScript/3.tool.html",
    "revision": "aafb81b26fe24d2fc7eb0be442476478"
  },
  {
    "url": "JavaScript/4.JavaScript原型链.html",
    "revision": "c4a7e60ed2d8a746500a7319e25e5a0c"
  },
  {
    "url": "JavaScript/5.手写Promise.html",
    "revision": "461fafea54d06dceedc37027722e38a7"
  },
  {
    "url": "JavaScript/6.模块化.html",
    "revision": "df481bf6b345712a6085e6c1976a5143"
  },
  {
    "url": "JavaScript/7.JS的运行机制.html",
    "revision": "f9db0dbed5f8c8151542afc6624207da"
  },
  {
    "url": "JavaScript/8.call、apply、bind函数.html",
    "revision": "c7c1c691c1bed0bc9b74164d2bbebbf9"
  },
  {
    "url": "JavaScript/9.new操作符.html",
    "revision": "69ad94501a75b00bb426fb81f3f0e9a3"
  },
  {
    "url": "js/theme.js",
    "revision": "d095d5905e1956641e211f8f2cdc1a92"
  },
  {
    "url": "Koa/1. 初识 Koa.html",
    "revision": "35bd9846a668cb0a55d315b660e62232"
  },
  {
    "url": "Koa/10.问题模块速览.html",
    "revision": "701e9c682cf2ce77057d000d67818937"
  },
  {
    "url": "Koa/2.使用 Koa-router 实现路由，前缀的整合、以及中间件的写法.html",
    "revision": "ce10ce286268ace646a77f73671e84b0"
  },
  {
    "url": "Koa/3.options 方法及 RESTful API 最佳实践，和设置响应内容.html",
    "revision": "790f8d203aa6e00c92a77acd2bbb1e16"
  },
  {
    "url": "Koa/4.配置更合理的目录结构，动态注册路由.html",
    "revision": "ca1319b5a04cfc08e90388be79fb05c7"
  },
  {
    "url": "Koa/5.使用JWT获取token.html",
    "revision": "0fa11f8315d04b0344e18f37b2f8507a"
  },
  {
    "url": "Koa/6.文件上传.html",
    "revision": "3cbf6effeab965ccb079bf19a8e77c8c"
  },
  {
    "url": "Koa/7.用户详情（多字段）.html",
    "revision": "8aa1dad88a717046135ba43cdcc98470"
  },
  {
    "url": "Koa/8.关注与粉丝的API及MongoDB的设计.html",
    "revision": "49adb5e8bd3de7d69a9ac3362e45e0ed"
  },
  {
    "url": "Koa/9.仿用户、关注、粉丝实现话题功能.html",
    "revision": "df6739ab203c7ab5e6aae238c22701ee"
  },
  {
    "url": "Nodejs/tool.html",
    "revision": "f7f8b5f0fd628c4160ab539c1bc69eb2"
  },
  {
    "url": "React/1、webpack 环境搭建.html",
    "revision": "2fb3d9d0a135138ceb3766c3653383c6"
  },
  {
    "url": "React/2、React 基础语法.html",
    "revision": "b123fd3652059f98659515bbf0950cd2"
  },
  {
    "url": "React/3、React Component 细读.html",
    "revision": "c314bd8c3c2667f798340df750a5df2b"
  },
  {
    "url": "React/4、React router.html",
    "revision": "c2e5f57138ab4a7834c6888f9d5a8421"
  },
  {
    "url": "React/React Hooks.html",
    "revision": "8577ab985a36a14a1f4054ef47b0bfde"
  },
  {
    "url": "React/React 组件生命周期.html",
    "revision": "3da1f4b23911f18a011f9a8f911df1b2"
  },
  {
    "url": "React/React 进阶.html",
    "revision": "bd3a6a147131b7cbba2d8b69ddc2a60e"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class-and-interfaces.html",
    "revision": "35af1064ea013792abbe0479b03b7f0f"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class.html",
    "revision": "887662757dfae4f386a3a3b502761d57"
  },
  {
    "url": "TypeScript-xcatliu/advanced/declaration-merging.html",
    "revision": "67feee167c7a55df496edd52ef57fdfc"
  },
  {
    "url": "TypeScript-xcatliu/advanced/enum.html",
    "revision": "edeb77e49c1c7ad31efff171388eae23"
  },
  {
    "url": "TypeScript-xcatliu/advanced/further-reading.html",
    "revision": "94642f5888db89487a140d4b6d12d2c6"
  },
  {
    "url": "TypeScript-xcatliu/advanced/generics.html",
    "revision": "c44878f3d4712da7762a00d54e8510d2"
  },
  {
    "url": "TypeScript-xcatliu/advanced/index.html",
    "revision": "998c75fa9add71aef7ed9d03095f9486"
  },
  {
    "url": "TypeScript-xcatliu/advanced/string-literal-types.html",
    "revision": "83484a9c99ba602d540b72ae16c31a7e"
  },
  {
    "url": "TypeScript-xcatliu/advanced/tuple.html",
    "revision": "d161c7d8ed12e3424011719464601a3b"
  },
  {
    "url": "TypeScript-xcatliu/advanced/type-aliases.html",
    "revision": "8f12933488f4a885ca42f9fc8e9b9baa"
  },
  {
    "url": "TypeScript-xcatliu/basics/any.html",
    "revision": "3ecfb8fde162a39d47d2b876023c6b95"
  },
  {
    "url": "TypeScript-xcatliu/basics/built-in-objects.html",
    "revision": "94b79084f526f9f592f60d183f8b4392"
  },
  {
    "url": "TypeScript-xcatliu/basics/declaration-files.html",
    "revision": "cf35302ba1a584873e0a43705ab47807"
  },
  {
    "url": "TypeScript-xcatliu/basics/index.html",
    "revision": "f24326133fac37e8b2d9a3567980f983"
  },
  {
    "url": "TypeScript-xcatliu/basics/primitive-data-types.html",
    "revision": "1e8391f856038678e10d5c9e8b585e09"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-assertion.html",
    "revision": "6f40f32f97559ac552068a8cebde4c25"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-inference.html",
    "revision": "6e4aca6588922ab93dc17f3f37caedf9"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-array.html",
    "revision": "6633654c81cfbc205402ec2c4c27995a"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-function.html",
    "revision": "56cc0eae5b97c4706045712058e7ed41"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-object-interfaces.html",
    "revision": "ef5b990f042e139158f352b44fc64f7c"
  },
  {
    "url": "TypeScript-xcatliu/basics/union-types.html",
    "revision": "7332fb03cf37ba8a6e36f890eefac85f"
  },
  {
    "url": "TypeScript-xcatliu/engineering/compiler-options.html",
    "revision": "1f87e133b2923bbf59efb74ec7e63ef4"
  },
  {
    "url": "TypeScript-xcatliu/engineering/index.html",
    "revision": "b330a1d49303ae8c9af2526c24299d11"
  },
  {
    "url": "TypeScript-xcatliu/engineering/lint.html",
    "revision": "803deb9ee4fe0481809ef842d10927d6"
  },
  {
    "url": "TypeScript-xcatliu/index.html",
    "revision": "faedc05c140161d6123157d0520a9e95"
  },
  {
    "url": "TypeScript-xcatliu/introduction/get-typescript.html",
    "revision": "bf0090e69652c32f2aa3319de653eded"
  },
  {
    "url": "TypeScript-xcatliu/introduction/hello-typescript.html",
    "revision": "0c364e227d806e098d39e5b6f95ff44c"
  },
  {
    "url": "TypeScript-xcatliu/introduction/index.html",
    "revision": "f48887dd18181cbafdc7e6b26cb7941c"
  },
  {
    "url": "TypeScript-xcatliu/introduction/what-is-typescript.html",
    "revision": "a71ea4aa2473ffa88d6a5b2b02b842ee"
  },
  {
    "url": "TypeScript-xcatliu/summary.html",
    "revision": "3e31994ea49666c4ad08085b365720e0"
  },
  {
    "url": "TypeScript-xcatliu/thanks/index.html",
    "revision": "185158ec0e347a647c47e7c2e0752997"
  },
  {
    "url": "Vue/Vue 修饰符.html",
    "revision": "8337495cd681a1b245a8178996e4756a"
  },
  {
    "url": "Vue/Vue 响应式和依赖收集.html",
    "revision": "7ac8c11daeabb6c89e4b7c2168fab25b"
  },
  {
    "url": "Vue/Vue 组件.html",
    "revision": "6c5a6c198a681a6e4b9e322d4975ca3d"
  },
  {
    "url": "Vue/Vue 组件生命周期.html",
    "revision": "7ffac9d66a5b2640b29d8b4f54a9c2ff"
  },
  {
    "url": "Vue/Vue 进阶.html",
    "revision": "e6e65fc1883e236e4bb3375f115ae866"
  },
  {
    "url": "Vue/Vue 高阶组件.html",
    "revision": "013e04aac3c09a10f7977039c38d9235"
  },
  {
    "url": "Vue/vue-cli.html",
    "revision": "25ad6898b418e3a82ac28ca276ad746a"
  },
  {
    "url": "Vue/Vue-SSR.html",
    "revision": "537cf8d94cd111d63f884b2075e214b1"
  },
  {
    "url": "Webpack/1.Webpack 入门.html",
    "revision": "27bcf55acacc1b5dbbe51792ae49a5bf"
  },
  {
    "url": "Webpack/2. 使用 Iconfont.html",
    "revision": "9a2d9327276824cf4c0bb862dbdca5e2"
  },
  {
    "url": "Webpack/3. 配置 SouceMap.html",
    "revision": "f24e9ee883daf8cd41bb8923de9f2f2a"
  },
  {
    "url": "Webpack/4. 配置 devServer.html",
    "revision": "fe28bd57fb6f12273e26f21590d303b8"
  },
  {
    "url": "Webpack/5. 配置 HMR.html",
    "revision": "bc9226f1827f626c8817bc93da83f296"
  },
  {
    "url": "Webpack/6. 配置 Babel.html",
    "revision": "590d9af4d8546bdc32673c80d6abfe47"
  },
  {
    "url": "Webpack/7. 配置Tree Shaking.html",
    "revision": "a8b6961b4c6057add0b4e55ec69a6a06"
  },
  {
    "url": "Webpack/8. 配置不同环境的配置.html",
    "revision": "f22c490bc65b79338ed4e7443de407e1"
  },
  {
    "url": "Webpack/9. 代码分割 Code Spliting.html",
    "revision": "f9acbc4799e65e8039b2f53c1eacbf85"
  },
  {
    "url": "其他/CI_CD.html",
    "revision": "97fce7de11920818860cf88161023852"
  },
  {
    "url": "前端/1.HTTP缓存.html",
    "revision": "c08b4d9353bd5a66aa3d1d884663d37c"
  },
  {
    "url": "前端/10.mate标签.html",
    "revision": "a97be954f219f1afb069313b0fa8fecf"
  },
  {
    "url": "前端/11.rollup、ts、umd配置.html",
    "revision": "674557eb8e3eb72eefefcf8c972bd09d"
  },
  {
    "url": "前端/12.rollup插件-cn.html",
    "revision": "ccab1e62e62c411997a9a63f1449c6ba"
  },
  {
    "url": "前端/13.rollup插件-en.html",
    "revision": "5433701813e851046eff5da53b20e327"
  },
  {
    "url": "前端/2.常见网络攻击.html",
    "revision": "2c0a085bd6474870faf401297420ca14"
  },
  {
    "url": "前端/3.HTTP协议.html",
    "revision": "0e8e743c84e684e543c0cd95e28f2e9f"
  },
  {
    "url": "前端/4.TCP协议.html",
    "revision": "f5d88c72e25d113acb5a0bfe1b17a1c7"
  },
  {
    "url": "前端/5.V8相关.html",
    "revision": "e131a014b70a73a80a95bde07cf51da8"
  },
  {
    "url": "前端/6.设计模式.html",
    "revision": "9b231cf6b5f774df42a90e7462c5354f"
  },
  {
    "url": "前端/7.性能优化.html",
    "revision": "64dfa291c10340bff0ca479e7a1f54c1"
  },
  {
    "url": "前端/8.框架相关.html",
    "revision": "13bc8749c1829704f4747e2b27b9083f"
  },
  {
    "url": "前端/9.npm.html",
    "revision": "d442d47ab0c87e6fedb8f990926e889b"
  },
  {
    "url": "插件/axios.html",
    "revision": "4c8c270565508ab40b34ccb922469283"
  },
  {
    "url": "插件/好东西.html",
    "revision": "a26ac9419a5e8051fbc6d9358c8586b6"
  },
  {
    "url": "数据结构和算法/二分查找.html",
    "revision": "cedcf4895de1bd57542102a7866b798f"
  },
  {
    "url": "数据结构和算法/二叉搜索树.html",
    "revision": "97ce8eefb0f098f6309a842de6eb1b91"
  },
  {
    "url": "数据结构和算法/力扣120： 三角形最小路径和.html",
    "revision": "0276e9eb7668b7e701023ca7c75497af"
  },
  {
    "url": "数据结构和算法/力扣53：最大子序合.html",
    "revision": "106886458fdd9d590d0465032b489713"
  },
  {
    "url": "数据结构和算法/力扣76：最小覆盖子串.html",
    "revision": "671c533a08c78a504f0223e3656298cd"
  },
  {
    "url": "数据结构和算法/堆.html",
    "revision": "98a35bdf8a9d34445061dffc5ab063a4"
  },
  {
    "url": "数据结构和算法/循环队列.html",
    "revision": "19898a33c3390cf700f7395699a3c2f5"
  },
  {
    "url": "数据结构和算法/快排.html",
    "revision": "cdbe19905473bbedcc10070ef35e1874"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

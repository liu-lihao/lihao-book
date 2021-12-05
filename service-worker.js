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
    "revision": "b14fe9f4ce09dff8608db0a07d111a23"
  },
  {
    "url": "assets/css/0.styles.48ce423b.css",
    "revision": "0551dd7d6332b97e940f948949e0d113"
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
    "url": "assets/js/123.bf452f1d.js",
    "revision": "5940b69b4de2ab3fe727b791a9c1b48c"
  },
  {
    "url": "assets/js/124.55b7edf2.js",
    "revision": "b1c6b8c9b9083e380a4e6c9f0c227b05"
  },
  {
    "url": "assets/js/125.cd442318.js",
    "revision": "2793764bfabf881812e1037c7814bccb"
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
    "url": "assets/js/128.77175442.js",
    "revision": "b21231ae789f32d064cc436fda8f1c90"
  },
  {
    "url": "assets/js/129.6d7f1dfd.js",
    "revision": "d67db7cb0394b1e8b07235589436240e"
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
    "url": "assets/js/131.f86dba00.js",
    "revision": "6c6c2777b583ef17da95af9e3bd09dd6"
  },
  {
    "url": "assets/js/132.d4d8b37e.js",
    "revision": "481f928a86c2241e0a4d2549d13ad7ab"
  },
  {
    "url": "assets/js/133.50966c4f.js",
    "revision": "72afe2e24de678942d6b66193e055bbc"
  },
  {
    "url": "assets/js/134.7c960129.js",
    "revision": "0369469dd73660906c56f805c309cbca"
  },
  {
    "url": "assets/js/135.462c580d.js",
    "revision": "e0a72bbdbcc4b4252a6c2c749f41908f"
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
    "url": "assets/js/139.1a0eb397.js",
    "revision": "5a1a099d62ea9d08928ed7052ef1d369"
  },
  {
    "url": "assets/js/14.ac1faf8d.js",
    "revision": "c4e2c7ee6ccb0682d94bdbac2d6e1d8f"
  },
  {
    "url": "assets/js/140.024cf1c5.js",
    "revision": "865c71065e789f87dbb3d11d3e901955"
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
    "url": "assets/js/150.9867f1d6.js",
    "revision": "996cc17e530dce28f7115a8531d34631"
  },
  {
    "url": "assets/js/151.268a757a.js",
    "revision": "d9ee5be67ec22883a24fb2a2dd648af0"
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
    "url": "assets/js/24.9eaf0e48.js",
    "revision": "b318a853c98735c5bd151b598fb8b5e4"
  },
  {
    "url": "assets/js/25.22b39374.js",
    "revision": "b62686737667a16e8ed3759310849468"
  },
  {
    "url": "assets/js/26.51290e38.js",
    "revision": "8f42d130e3208361c4a6e79c5cdaa935"
  },
  {
    "url": "assets/js/27.83fee76f.js",
    "revision": "c7e835e530885fd5417c1439eff95a68"
  },
  {
    "url": "assets/js/28.6f7739d1.js",
    "revision": "f3e2ca43671de3f775a51724c847d2e1"
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
    "url": "assets/js/41.4b4f65c2.js",
    "revision": "f4cc56650ca926cb6ab10f8a0321cdd5"
  },
  {
    "url": "assets/js/42.23a78624.js",
    "revision": "062714ce0631f9f8e68996b77efbf89e"
  },
  {
    "url": "assets/js/43.c748bb36.js",
    "revision": "4d72b3b6f9a2823919a99a7df492d784"
  },
  {
    "url": "assets/js/44.1cf59294.js",
    "revision": "ca66e9f8c1f413293b1320a857ed5d06"
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
    "url": "assets/js/6.42d87da3.js",
    "revision": "e453b98f69896b72c6e6f7e3dbd9ae88"
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
    "url": "assets/js/app.36cc7f20.js",
    "revision": "74af551f1a8e793ae5f14d34d2256a76"
  },
  {
    "url": "CSS/BFC.html",
    "revision": "ebe7b921d67dfb4b0b8f7e41b4bbd3dd"
  },
  {
    "url": "CSS/CSS 随笔.html",
    "revision": "5e166084111e282c6b4438bbfd6b6448"
  },
  {
    "url": "CSS/中间自适应，两边固定.html",
    "revision": "c029bb70fba6cd81fa9a3f1ed33a86b3"
  },
  {
    "url": "ES6-阮一峰/[es6]1.ECMAScript.6.简介.html",
    "revision": "b4d05f1dd670e60203ebc2ba9ca74bb2"
  },
  {
    "url": "ES6-阮一峰/[es6]10.对象的新增方法.html",
    "revision": "debf2e5767fbb63e0bd94a84e7eb3d68"
  },
  {
    "url": "ES6-阮一峰/[es6]11.Symbol.html",
    "revision": "601ff75672cfab9630c2c9a0057d5afe"
  },
  {
    "url": "ES6-阮一峰/[es6]12.Set.和.Map.数据结构.html",
    "revision": "edcd6de66c0fd44117e34062b92fb742"
  },
  {
    "url": "ES6-阮一峰/[es6]13.Proxy.html",
    "revision": "4bada3444527d8508869f0aaaf138f02"
  },
  {
    "url": "ES6-阮一峰/[es6]14.Reflect.html",
    "revision": "0f72201d8b7a08c8f9976de45dc218f2"
  },
  {
    "url": "ES6-阮一峰/[es6]15.Promise.对象.html",
    "revision": "c09650061c0bd3d915e8dc88ad05e123"
  },
  {
    "url": "ES6-阮一峰/[es6]16.Iterator.和.for...of.循环.html",
    "revision": "7a5e4586b5bcb71cc838bf6e6610299b"
  },
  {
    "url": "ES6-阮一峰/[es6]17.Generator.函数的语法.html",
    "revision": "838554255c700d9e38955d5b7a7421ce"
  },
  {
    "url": "ES6-阮一峰/[es6]18.Generator.函数的异步应用.html",
    "revision": "0957ce7fd241af52d0277140b2282f26"
  },
  {
    "url": "ES6-阮一峰/[es6]19.async.函数.html",
    "revision": "c4b970b8b48b2548aaa4ed403fdc8267"
  },
  {
    "url": "ES6-阮一峰/[es6]2.let和const命令.html",
    "revision": "98c31910270097dbc60ecd78ec6ac354"
  },
  {
    "url": "ES6-阮一峰/[es6]20.Class.的基本语法.html",
    "revision": "e53caae9f2cd2cde25027c320453057a"
  },
  {
    "url": "ES6-阮一峰/[es6]21.Class.的继承.html",
    "revision": "4cb93c4d7d79f45096c70eb27fb10a50"
  },
  {
    "url": "ES6-阮一峰/[es6]22.Module.的语法.html",
    "revision": "c77b7fb28be43ab5f41bf04df0b669e7"
  },
  {
    "url": "ES6-阮一峰/[es6]23.Module.的加载实现.html",
    "revision": "324c75f0eb0e9726ea4d6f2b567db4a7"
  },
  {
    "url": "ES6-阮一峰/[es6]24.编程风格.html",
    "revision": "93e250efeaa15a6074d3e363756d8871"
  },
  {
    "url": "ES6-阮一峰/[es6]25.读懂规格.html",
    "revision": "4be6c9d11f400994bcc1ebacbe53d5c2"
  },
  {
    "url": "ES6-阮一峰/[es6]26.ArrayBuffer.html",
    "revision": "f98bbc5a2ff1b2f52f5f9978bdf4b59e"
  },
  {
    "url": "ES6-阮一峰/[es6]27.最新提案.html",
    "revision": "2811ebe249e6d1d0f325841b7ca097d1"
  },
  {
    "url": "ES6-阮一峰/[es6]28.Decorator.html",
    "revision": "d91f30895b6c2e913b2ce6a33d657ee3"
  },
  {
    "url": "ES6-阮一峰/[es6]29.参考链接.html",
    "revision": "dad84d741877978e872ce910be6e0502"
  },
  {
    "url": "ES6-阮一峰/[es6]3.变量的解构赋值.html",
    "revision": "64f68831e2dc38987f7841379669fb5a"
  },
  {
    "url": "ES6-阮一峰/[es6]30.SIMD.html",
    "revision": "49fd447ec144ef21be0dde42619201d5"
  },
  {
    "url": "ES6-阮一峰/[es6]31.Mixin.html",
    "revision": "4bd518ce4c265a56160e1076bc4a00d1"
  },
  {
    "url": "ES6-阮一峰/[es6]32.函数式编程.html",
    "revision": "a1654ebe07c712c9abb6c30a05bd2063"
  },
  {
    "url": "ES6-阮一峰/[es6]33.鸣谢.html",
    "revision": "ad0b9cb326cd6179dc4d840ede4e87f2"
  },
  {
    "url": "ES6-阮一峰/[es6]4.字符串的扩展.html",
    "revision": "8e48272d8e12a77d055942afdfb93398"
  },
  {
    "url": "ES6-阮一峰/[es6]5.正则的扩展.html",
    "revision": "e616d305fe9cd5689dd5a21944bcf300"
  },
  {
    "url": "ES6-阮一峰/[es6]6.数值的扩展.html",
    "revision": "8535619f3a3afae0f47d65ddf24529e9"
  },
  {
    "url": "ES6-阮一峰/[es6]7.函数的扩展.html",
    "revision": "4e798e23e46221ac4bf2f4351aa9116e"
  },
  {
    "url": "ES6-阮一峰/[es6]8.数组的扩展.html",
    "revision": "d0387108e78f0c24ec726fab5996c8d1"
  },
  {
    "url": "ES6-阮一峰/[es6]9.对象的扩展.html",
    "revision": "daf16785e434b4a5ddb68e392cb0d36c"
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
    "revision": "a2626b2145ceb6610f816ed3b1829ef0"
  },
  {
    "url": "JavaScript/1.JS随笔.html",
    "revision": "e82435042f7783e18a6b7e5cebab81ec"
  },
  {
    "url": "JavaScript/10.Iterator迭代器.html",
    "revision": "d337a954619c16b84b96f98e10cf0345"
  },
  {
    "url": "JavaScript/11.Generator.html",
    "revision": "6c617a1b368aa58d1efc64d2c3044e97"
  },
  {
    "url": "JavaScript/12.instanceof.html",
    "revision": "24cb53a31dee7e32f6bfdaa93a56d484"
  },
  {
    "url": "JavaScript/13.防抖、节流.html",
    "revision": "5b9b8583ba204b719dd73b4397b54bd3"
  },
  {
    "url": "JavaScript/14.踩坑之路.html",
    "revision": "2e505d550092c166570e9e8d9eb06628"
  },
  {
    "url": "JavaScript/2.正则.html",
    "revision": "d4a4d067c9c8d7b458ea29643cb32ef3"
  },
  {
    "url": "JavaScript/3.tool.html",
    "revision": "c3d5d48600537179ad48073d394d45c3"
  },
  {
    "url": "JavaScript/4.JavaScript原型链.html",
    "revision": "7668465ef2914e477bd371f59d92fb3e"
  },
  {
    "url": "JavaScript/5.手写Promise.html",
    "revision": "d3a1fef38258f091c9f495d553ad3d8d"
  },
  {
    "url": "JavaScript/6.模块化.html",
    "revision": "bf445a22a504c03ba956880e3d6b86ed"
  },
  {
    "url": "JavaScript/7.JS的运行机制.html",
    "revision": "9ec252be710af46ffe886a2bfe4d2359"
  },
  {
    "url": "JavaScript/8.call、apply、bind函数.html",
    "revision": "36b012f13686758ca7496d9fcbca1e3f"
  },
  {
    "url": "JavaScript/9.new操作符.html",
    "revision": "739f3fd746141172f8b142941a1aaabe"
  },
  {
    "url": "js/theme.js",
    "revision": "d095d5905e1956641e211f8f2cdc1a92"
  },
  {
    "url": "Koa/1. 初识 Koa.html",
    "revision": "09bcc8e3a8995798a6fec8755c77fdbd"
  },
  {
    "url": "Koa/10.问题模块速览.html",
    "revision": "569d1bd3dcd23ba81518dbf6935a5a6e"
  },
  {
    "url": "Koa/2.使用 Koa-router 实现路由，前缀的整合、以及中间件的写法.html",
    "revision": "1bbf50735c80bf62f2b3b0dc3a4b8a3e"
  },
  {
    "url": "Koa/3.options 方法及 RESTful API 最佳实践，和设置响应内容.html",
    "revision": "d7b4e29304ab3a51cc5738c30ced2bdf"
  },
  {
    "url": "Koa/4.配置更合理的目录结构，动态注册路由.html",
    "revision": "80071234808fe572ec35c0e5dec8861a"
  },
  {
    "url": "Koa/5.使用JWT获取token.html",
    "revision": "eb9657ce35d3430ed243af48da9ee769"
  },
  {
    "url": "Koa/6.文件上传.html",
    "revision": "d72247c7dc136d450d5a570d57e4c562"
  },
  {
    "url": "Koa/7.用户详情（多字段）.html",
    "revision": "d3abe780a6cd2daef11be512b48781fa"
  },
  {
    "url": "Koa/8.关注与粉丝的API及MongoDB的设计.html",
    "revision": "5a4a13d8ec8f72f962876cf001883dd7"
  },
  {
    "url": "Koa/9.仿用户、关注、粉丝实现话题功能.html",
    "revision": "bde5a6e63fef88bc03ae7c7d9e7166b4"
  },
  {
    "url": "Nodejs/tool.html",
    "revision": "88e8ed3f4bdecb215d779f4369ce30b0"
  },
  {
    "url": "React/1、webpack 环境搭建.html",
    "revision": "8170b71f16e7cdb23589de8690df899c"
  },
  {
    "url": "React/2、React 基础语法.html",
    "revision": "23b20cd8e75a6991d6d6b0958dd76705"
  },
  {
    "url": "React/3、React Component 细读.html",
    "revision": "57ae672eed14c2fe168cb7e496f25eec"
  },
  {
    "url": "React/4、React router.html",
    "revision": "9509a5f73e926add89428cd5eb31971e"
  },
  {
    "url": "React/React Hooks.html",
    "revision": "d6b3e4e137a5054fcba1ef952c1a68a7"
  },
  {
    "url": "React/React 组件生命周期.html",
    "revision": "a6fa9e4da67dacd1cd24f50b23a71e5e"
  },
  {
    "url": "React/React 进阶.html",
    "revision": "a244ab9a0c702fd9acafeae4388373aa"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class-and-interfaces.html",
    "revision": "4b7938698cf88a22bec210579c6b50ff"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class.html",
    "revision": "5781cbff56762e9d8be73edd433351bc"
  },
  {
    "url": "TypeScript-xcatliu/advanced/declaration-merging.html",
    "revision": "11311c099f8f5bf42aa28867e1e09453"
  },
  {
    "url": "TypeScript-xcatliu/advanced/enum.html",
    "revision": "db0891b93a9df73063dd9240c3271d39"
  },
  {
    "url": "TypeScript-xcatliu/advanced/further-reading.html",
    "revision": "49283ae92e246ea29969409e69624835"
  },
  {
    "url": "TypeScript-xcatliu/advanced/generics.html",
    "revision": "07991c262c26b60bd1260a5f18104535"
  },
  {
    "url": "TypeScript-xcatliu/advanced/index.html",
    "revision": "aa7f2e1cd8df330c2e02095be6073f39"
  },
  {
    "url": "TypeScript-xcatliu/advanced/string-literal-types.html",
    "revision": "2dd85f45061ebc06def2c872d0097786"
  },
  {
    "url": "TypeScript-xcatliu/advanced/tuple.html",
    "revision": "56bf95dc8b3f6b48ef394b2e2e735dc1"
  },
  {
    "url": "TypeScript-xcatliu/advanced/type-aliases.html",
    "revision": "ae3fce417f70382907c947cbc8e64bcc"
  },
  {
    "url": "TypeScript-xcatliu/basics/any.html",
    "revision": "75a6a621619d460f9b1164cc67022070"
  },
  {
    "url": "TypeScript-xcatliu/basics/built-in-objects.html",
    "revision": "9b2344a6566f7f216c1bb1a942e0e603"
  },
  {
    "url": "TypeScript-xcatliu/basics/declaration-files.html",
    "revision": "bb1f177dc2cea851a17fe8dc804e8b82"
  },
  {
    "url": "TypeScript-xcatliu/basics/index.html",
    "revision": "835f80c83eda143bfe9379db6d9e533c"
  },
  {
    "url": "TypeScript-xcatliu/basics/primitive-data-types.html",
    "revision": "3070fb2ebb2371cda8c6eac53898259e"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-assertion.html",
    "revision": "3f5e5e29db5535bb28c5c01e06a33afe"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-inference.html",
    "revision": "a2f8cf4c574f584b6f6775230202c030"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-array.html",
    "revision": "76e631321647b02e2a0d8727796a3035"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-function.html",
    "revision": "f927507ebdb6a6a8fc625da742c3bb35"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-object-interfaces.html",
    "revision": "4ea83919ae1c848bcfbc2a032befdaac"
  },
  {
    "url": "TypeScript-xcatliu/basics/union-types.html",
    "revision": "ab65d5defd9d11950e34b9dcd0470658"
  },
  {
    "url": "TypeScript-xcatliu/engineering/compiler-options.html",
    "revision": "2d64b9d493f6e5b70b121fac4ad60b3d"
  },
  {
    "url": "TypeScript-xcatliu/engineering/index.html",
    "revision": "222cb9968321cc49d1777de67fdc36a9"
  },
  {
    "url": "TypeScript-xcatliu/engineering/lint.html",
    "revision": "e05b2984ea710f1ef148703ad0d32c02"
  },
  {
    "url": "TypeScript-xcatliu/index.html",
    "revision": "046d252fb36f482cd556c356ebea8cfc"
  },
  {
    "url": "TypeScript-xcatliu/introduction/get-typescript.html",
    "revision": "2fa4368b7af9796000c7aa1b644cc682"
  },
  {
    "url": "TypeScript-xcatliu/introduction/hello-typescript.html",
    "revision": "3653347df38cfce9be7521cf042c1b79"
  },
  {
    "url": "TypeScript-xcatliu/introduction/index.html",
    "revision": "da0d59a9e98ed81ba37775b6fe6d8f1a"
  },
  {
    "url": "TypeScript-xcatliu/introduction/what-is-typescript.html",
    "revision": "e258f1ba3a821b95352d4e453a3d9c37"
  },
  {
    "url": "TypeScript-xcatliu/summary.html",
    "revision": "bf327a0a8bcb0db930a39dd2c2dce664"
  },
  {
    "url": "TypeScript-xcatliu/thanks/index.html",
    "revision": "1285f33953f37325cc6f40b79b51499f"
  },
  {
    "url": "Vue/Vue 修饰符.html",
    "revision": "e0dc72dbb528a85e345d09ad6a1622c1"
  },
  {
    "url": "Vue/Vue 响应式和依赖收集.html",
    "revision": "7dc6cb0160bb0b7f83a10d8ded5b5d60"
  },
  {
    "url": "Vue/Vue 组件.html",
    "revision": "03877b29b87dd34fbc9ba35c24257c4a"
  },
  {
    "url": "Vue/Vue 组件生命周期.html",
    "revision": "bec5dce218846c28e0f0237c18b1c9e9"
  },
  {
    "url": "Vue/Vue 进阶.html",
    "revision": "10c8fa0b00f71b9e4e4a2723c75efaf7"
  },
  {
    "url": "Vue/Vue 高阶组件.html",
    "revision": "5a03eee17cd3cc8799ad02c1c7b5cae6"
  },
  {
    "url": "Vue/vue-cli.html",
    "revision": "8a8c1e098da2bb8ff663bc69eb39328e"
  },
  {
    "url": "Vue/Vue-SSR.html",
    "revision": "32ffd903720efb1178e360b6b6237627"
  },
  {
    "url": "Webpack/1.Webpack 入门.html",
    "revision": "51915a981d2915a7b3b318517062c351"
  },
  {
    "url": "Webpack/2. 使用 Iconfont.html",
    "revision": "3aefd91b6eddd49c48469b99f0d550e7"
  },
  {
    "url": "Webpack/3. 配置 SouceMap.html",
    "revision": "61d3f182b54bcc363b0cd9ad6809f97b"
  },
  {
    "url": "Webpack/4. 配置 devServer.html",
    "revision": "fd4a626dd127b9c4754b8f3c226b1e43"
  },
  {
    "url": "Webpack/5. 配置 HMR.html",
    "revision": "6e27b1f364beea07922298fb53f1d533"
  },
  {
    "url": "Webpack/6. 配置 Babel.html",
    "revision": "d7d1a6d9534ab5e3a0ed620714c2f403"
  },
  {
    "url": "Webpack/7. 配置Tree Shaking.html",
    "revision": "b105b349a5c931fbd3f2c5f317c599e0"
  },
  {
    "url": "Webpack/8. 配置不同环境的配置.html",
    "revision": "813f255535c4a7eb3454f16dcd46610c"
  },
  {
    "url": "Webpack/9. 代码分割 Code Spliting.html",
    "revision": "435775e0043f84497f526177a1c921de"
  },
  {
    "url": "其他/CI_CD.html",
    "revision": "2cb01f3fec43b2d76e929b5d6f646e03"
  },
  {
    "url": "前端/1.HTTP缓存.html",
    "revision": "e5361a452563b771e89350ababe99ba6"
  },
  {
    "url": "前端/10.mate标签.html",
    "revision": "777ed9684ed4c62b59bd63ebd3d6b543"
  },
  {
    "url": "前端/11.rollup、ts、umd配置.html",
    "revision": "d224bd9d7aec0624742ad6a5fe215bc2"
  },
  {
    "url": "前端/12.rollup插件-cn.html",
    "revision": "06898fa53da49c60fcaa29a0ac1a5d27"
  },
  {
    "url": "前端/13.rollup插件-en.html",
    "revision": "09c744ee15c59e1e77eee17a3586750a"
  },
  {
    "url": "前端/2.常见网络攻击.html",
    "revision": "a5dab374cb7d54ccf628c01fd8cb82f3"
  },
  {
    "url": "前端/3.HTTP协议.html",
    "revision": "31ec4fa67736d7955a537077b01cf8c8"
  },
  {
    "url": "前端/4.TCP协议.html",
    "revision": "b6a838ed996c37f18ab33145e0173d0b"
  },
  {
    "url": "前端/5.V8相关.html",
    "revision": "0d0a84f775cffdfe799c861ec0c874e6"
  },
  {
    "url": "前端/6.设计模式.html",
    "revision": "6cacd29226694c5a5c66c8189ca3aea4"
  },
  {
    "url": "前端/7.性能优化.html",
    "revision": "84e3a5a199ae62f1134aef42fc1c7167"
  },
  {
    "url": "前端/8.框架相关.html",
    "revision": "993e2d79f967c7486f2c4a1bc8066854"
  },
  {
    "url": "前端/9.npm.html",
    "revision": "c5083f0e4a36e237aaed370847ca5747"
  },
  {
    "url": "插件/axios.html",
    "revision": "b3885987d89dc3ecdb6dc1b22622a4c9"
  },
  {
    "url": "插件/好东西.html",
    "revision": "42022025d42bc33c814e522377479b88"
  },
  {
    "url": "数据结构和算法/二分查找.html",
    "revision": "e8f40efde04cb10b0361e386d6e754d0"
  },
  {
    "url": "数据结构和算法/二叉搜索树.html",
    "revision": "0d3363269d854e0713df4beb5191c4db"
  },
  {
    "url": "数据结构和算法/力扣120： 三角形最小路径和.html",
    "revision": "e8749b6db6f6c490a395048112e0acbe"
  },
  {
    "url": "数据结构和算法/力扣53：最大子序合.html",
    "revision": "a27ee0b3db71ba0e5b15850456412e41"
  },
  {
    "url": "数据结构和算法/力扣76：最小覆盖子串.html",
    "revision": "95fd63ead89071dc056409f9922f295d"
  },
  {
    "url": "数据结构和算法/堆.html",
    "revision": "b4d05f53e76c175ddc6580600341d502"
  },
  {
    "url": "数据结构和算法/循环队列.html",
    "revision": "ddb9ac2ea361395e57f921e7d22df522"
  },
  {
    "url": "数据结构和算法/快排.html",
    "revision": "1e98aa4952f111584b50c39cada125e8"
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

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
    "revision": "bda8d0a4dd85d87ec8d1f25989fa5a8e"
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
    "url": "assets/js/133.83ec44e5.js",
    "revision": "1ff4cfac5ea0ddbc927c6a9507853ae3"
  },
  {
    "url": "assets/js/134.153ddd99.js",
    "revision": "f6bff69edc368e47cc51a94b258ffa7c"
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
    "url": "assets/js/24.92f9cb66.js",
    "revision": "379a9c07d58c2f8baa0605d54f4aae21"
  },
  {
    "url": "assets/js/25.25f98237.js",
    "revision": "c8ec775521da4672cb95a3ae3688b856"
  },
  {
    "url": "assets/js/26.c79606be.js",
    "revision": "b3afe93fb1b219eac8eceeb9c21a35d4"
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
    "url": "assets/js/71.bf4d1176.js",
    "revision": "26e40072a0f470a30997e6009b6f7364"
  },
  {
    "url": "assets/js/72.fa988a47.js",
    "revision": "95a99e28af93b454176bde7f4fba9296"
  },
  {
    "url": "assets/js/73.972f8e47.js",
    "revision": "ab0040db75831e856d7e77a82fd595cc"
  },
  {
    "url": "assets/js/74.48f063dd.js",
    "revision": "57bcdff61aa399c20b92fd2e0f26b5c9"
  },
  {
    "url": "assets/js/75.996cf305.js",
    "revision": "40eae5bfe2c1705e161e2ca205922267"
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
    "url": "assets/js/79.3ca304fd.js",
    "revision": "86fb5a17b7c6572ca9ab1d26e0b50e99"
  },
  {
    "url": "assets/js/8.d71d85dc.js",
    "revision": "b796bc6d9925eda95ef6b3bd938e00ab"
  },
  {
    "url": "assets/js/80.4f0d1367.js",
    "revision": "75bc89eb9c9716cf0ef53e3fd102b084"
  },
  {
    "url": "assets/js/81.30668729.js",
    "revision": "e026e12de12cc532fa052392d7c330e9"
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
    "url": "assets/js/app.d1fb5660.js",
    "revision": "b1d8e049dd3872a4e986442ba0345230"
  },
  {
    "url": "CSS/BFC.html",
    "revision": "e8501167cdb75b3a4a74e6d6975d3a08"
  },
  {
    "url": "CSS/CSS 随笔.html",
    "revision": "694adfeb940df191bff0344193c95a07"
  },
  {
    "url": "CSS/中间自适应，两边固定.html",
    "revision": "693a90a42f27de59678d5d6d628dd2a8"
  },
  {
    "url": "ES6-阮一峰/[es6]1.ECMAScript.6.简介.html",
    "revision": "105a0fd30a8a1ac9791a40adf002776a"
  },
  {
    "url": "ES6-阮一峰/[es6]10.对象的新增方法.html",
    "revision": "f07fafdbbd5c128d1a40bf2cffde5348"
  },
  {
    "url": "ES6-阮一峰/[es6]11.Symbol.html",
    "revision": "43b5bbfac7ef4a5181d20eaea55f13dc"
  },
  {
    "url": "ES6-阮一峰/[es6]12.Set.和.Map.数据结构.html",
    "revision": "ea0d971faf3fa0c4c9c30096b3a10da7"
  },
  {
    "url": "ES6-阮一峰/[es6]13.Proxy.html",
    "revision": "6c35ee8ad6ce4206b090d2df20e0f029"
  },
  {
    "url": "ES6-阮一峰/[es6]14.Reflect.html",
    "revision": "d62b1121768f140670129834767a6427"
  },
  {
    "url": "ES6-阮一峰/[es6]15.Promise.对象.html",
    "revision": "c8f9f30c0202c5e45587d8f52f6ce5ea"
  },
  {
    "url": "ES6-阮一峰/[es6]16.Iterator.和.for...of.循环.html",
    "revision": "301e3fa36f33cf769404221b112e4da4"
  },
  {
    "url": "ES6-阮一峰/[es6]17.Generator.函数的语法.html",
    "revision": "0992165f19ddc4654f8541cc41b1a03d"
  },
  {
    "url": "ES6-阮一峰/[es6]18.Generator.函数的异步应用.html",
    "revision": "3740f1fa457aa12344f5d67e10f96592"
  },
  {
    "url": "ES6-阮一峰/[es6]19.async.函数.html",
    "revision": "87d1a0c94ed4840b34c82564a014a6f2"
  },
  {
    "url": "ES6-阮一峰/[es6]2.let和const命令.html",
    "revision": "52ed871b0b5e5f759972e8ca9b066f9e"
  },
  {
    "url": "ES6-阮一峰/[es6]20.Class.的基本语法.html",
    "revision": "b1a2fad45d64cc630cb06037f456e1d0"
  },
  {
    "url": "ES6-阮一峰/[es6]21.Class.的继承.html",
    "revision": "56fbd94132138c533f87ac97062a702e"
  },
  {
    "url": "ES6-阮一峰/[es6]22.Module.的语法.html",
    "revision": "8af68f041ca1552a9b210c8138da2259"
  },
  {
    "url": "ES6-阮一峰/[es6]23.Module.的加载实现.html",
    "revision": "caf40a5d1cae65bbcd84f26d359a9254"
  },
  {
    "url": "ES6-阮一峰/[es6]24.编程风格.html",
    "revision": "b053fdf5211a9b0a42af7beca7725353"
  },
  {
    "url": "ES6-阮一峰/[es6]25.读懂规格.html",
    "revision": "fd5c15e8e52aade47b98e8c816e2f08c"
  },
  {
    "url": "ES6-阮一峰/[es6]26.ArrayBuffer.html",
    "revision": "1f9dce27d81e0cb704ac28e254386c0c"
  },
  {
    "url": "ES6-阮一峰/[es6]27.最新提案.html",
    "revision": "8260a96d48a15ed75754054b39fe9113"
  },
  {
    "url": "ES6-阮一峰/[es6]28.Decorator.html",
    "revision": "c9cf47c14193788c780dfb4729a03d0e"
  },
  {
    "url": "ES6-阮一峰/[es6]29.参考链接.html",
    "revision": "e176cd52aadd3178c5bf651b3bddb628"
  },
  {
    "url": "ES6-阮一峰/[es6]3.变量的解构赋值.html",
    "revision": "db478ef8efa85c920a5a6327d26a0d33"
  },
  {
    "url": "ES6-阮一峰/[es6]30.SIMD.html",
    "revision": "04acf90861e285181f6d2f2a7dac6882"
  },
  {
    "url": "ES6-阮一峰/[es6]31.Mixin.html",
    "revision": "0f6cab826abdb397482f3eb2d5bfdf6f"
  },
  {
    "url": "ES6-阮一峰/[es6]32.函数式编程.html",
    "revision": "6830c85c06a0459fee7414889fcbb2f9"
  },
  {
    "url": "ES6-阮一峰/[es6]33.鸣谢.html",
    "revision": "5ecc7c1ecd45cdd3726aff85723b8ffc"
  },
  {
    "url": "ES6-阮一峰/[es6]4.字符串的扩展.html",
    "revision": "514f6d18f9f422bd1ce0ed4fa49e308b"
  },
  {
    "url": "ES6-阮一峰/[es6]5.正则的扩展.html",
    "revision": "c0f342ebe07c7c8a8e7033f786b2f855"
  },
  {
    "url": "ES6-阮一峰/[es6]6.数值的扩展.html",
    "revision": "09525cefabbc986434c3da7e4a7678f9"
  },
  {
    "url": "ES6-阮一峰/[es6]7.函数的扩展.html",
    "revision": "c1c09b64762e70e897be2fcb30821d49"
  },
  {
    "url": "ES6-阮一峰/[es6]8.数组的扩展.html",
    "revision": "7f49aac89f3c1f9d3e9da06742337de6"
  },
  {
    "url": "ES6-阮一峰/[es6]9.对象的扩展.html",
    "revision": "68d10ea6b6b1060fc14faaa23ba6ea54"
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
    "revision": "40a61a4db330889bc2d7aec730aa2868"
  },
  {
    "url": "JavaScript/1.JS随笔.html",
    "revision": "776da7449f81c3aa00388e0fb9e9bae2"
  },
  {
    "url": "JavaScript/10.Iterator迭代器.html",
    "revision": "ed61cee577493a52a7b08ec48b6c72aa"
  },
  {
    "url": "JavaScript/11.Generator.html",
    "revision": "8859f3336fa1d033e70de66fe28e756a"
  },
  {
    "url": "JavaScript/12.instanceof.html",
    "revision": "e733c5777954fcd487421468900a6524"
  },
  {
    "url": "JavaScript/13.防抖、节流.html",
    "revision": "057df6c1f764b858c010421c072397e4"
  },
  {
    "url": "JavaScript/14.踩坑之路.html",
    "revision": "3375b50af0743329e0f3b16a5b34a3b3"
  },
  {
    "url": "JavaScript/2.正则.html",
    "revision": "4d38dd9f66cb4a3631fc804bc88117dc"
  },
  {
    "url": "JavaScript/3.tool.html",
    "revision": "e1406e0403a04d020c928a07b224bcb7"
  },
  {
    "url": "JavaScript/4.JavaScript原型链.html",
    "revision": "a94b560393cb4b6b38ad9a1a878c0870"
  },
  {
    "url": "JavaScript/5.手写Promise.html",
    "revision": "51f15601d3d275eb9517180547d127f6"
  },
  {
    "url": "JavaScript/6.模块化.html",
    "revision": "5dde485c35bc42ca93797f7faf9dfa29"
  },
  {
    "url": "JavaScript/7.JS的运行机制.html",
    "revision": "f845e53c1dc50177a71fc9fee60a6a09"
  },
  {
    "url": "JavaScript/8.call、apply、bind函数.html",
    "revision": "f8a7c917af7e44ecbf187cdb1f7802bb"
  },
  {
    "url": "JavaScript/9.new操作符.html",
    "revision": "4ece14aaa57de92ec6c62420cc2ec06c"
  },
  {
    "url": "js/theme.js",
    "revision": "d095d5905e1956641e211f8f2cdc1a92"
  },
  {
    "url": "Koa/1. 初识 Koa.html",
    "revision": "4e8a9e1bb755456b209182113fb8e7b7"
  },
  {
    "url": "Koa/10.问题模块速览.html",
    "revision": "77b1062eb5c4a775f5154eeaea9f209c"
  },
  {
    "url": "Koa/2.使用 Koa-router 实现路由，前缀的整合、以及中间件的写法.html",
    "revision": "9cc4fbf954379b6ca70bbd4aeb636f77"
  },
  {
    "url": "Koa/3.options 方法及 RESTful API 最佳实践，和设置响应内容.html",
    "revision": "57b5d3e7122d46cdbec3454d5f2c191b"
  },
  {
    "url": "Koa/4.配置更合理的目录结构，动态注册路由.html",
    "revision": "f9af572c8680792eb87d00de4e318e1f"
  },
  {
    "url": "Koa/5.使用JWT获取token.html",
    "revision": "f6672ce28b015ff7e36897cfdf9d982b"
  },
  {
    "url": "Koa/6.文件上传.html",
    "revision": "c16174990711da592718db264fa06aa1"
  },
  {
    "url": "Koa/7.用户详情（多字段）.html",
    "revision": "4347e06323f641c6b6965a2039e1b794"
  },
  {
    "url": "Koa/8.关注与粉丝的API及MongoDB的设计.html",
    "revision": "801cf3800f7d4c627842c3e1680b80e1"
  },
  {
    "url": "Koa/9.仿用户、关注、粉丝实现话题功能.html",
    "revision": "16e09d79a2ca91fcd9f32c788d217673"
  },
  {
    "url": "Nodejs/tool.html",
    "revision": "0e55102568ddc857c44ba928eca40592"
  },
  {
    "url": "React/1、webpack 环境搭建.html",
    "revision": "1d3e7e234a288c322ae56361ba0ea74f"
  },
  {
    "url": "React/2、React 基础语法.html",
    "revision": "a0006d07a2df412d2134ff65341d2e05"
  },
  {
    "url": "React/3、React Component 细读.html",
    "revision": "559e07ecd4d20931474427f719253a19"
  },
  {
    "url": "React/4、React router.html",
    "revision": "853c4aff67c7174ccb3f2d3963cb63c9"
  },
  {
    "url": "React/React Hooks.html",
    "revision": "309289ebca7d370801df98c131764ce6"
  },
  {
    "url": "React/React 组件生命周期.html",
    "revision": "7d7a8ee14960206239ac07357c5cc822"
  },
  {
    "url": "React/React 进阶.html",
    "revision": "ccf606ac862c16549e3931ed059d2973"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class-and-interfaces.html",
    "revision": "a7d23a4f4123b946ec0bcb55f73db3e5"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class.html",
    "revision": "37b587a2e88d1f243d83870351e9cf32"
  },
  {
    "url": "TypeScript-xcatliu/advanced/declaration-merging.html",
    "revision": "2768ec98cc34087549c713ad04bc54a8"
  },
  {
    "url": "TypeScript-xcatliu/advanced/enum.html",
    "revision": "22fdeabfe51b01586eef409f3d0e8fc8"
  },
  {
    "url": "TypeScript-xcatliu/advanced/further-reading.html",
    "revision": "aa6c0631a8eb6dfe280300963123b993"
  },
  {
    "url": "TypeScript-xcatliu/advanced/generics.html",
    "revision": "69dfc16e7e355efed6541d603d874505"
  },
  {
    "url": "TypeScript-xcatliu/advanced/index.html",
    "revision": "f22e5c2e88852dacc1388cc5d43de46c"
  },
  {
    "url": "TypeScript-xcatliu/advanced/string-literal-types.html",
    "revision": "61ffbe08be12050263ccecd4b914e12f"
  },
  {
    "url": "TypeScript-xcatliu/advanced/tuple.html",
    "revision": "c0619f263d6777cc8f94e963fbc16c36"
  },
  {
    "url": "TypeScript-xcatliu/advanced/type-aliases.html",
    "revision": "d934d3dbecb1fd10700daa6ae7105ab0"
  },
  {
    "url": "TypeScript-xcatliu/basics/any.html",
    "revision": "0b1238dd6e19ac5391c04158c8ceb09a"
  },
  {
    "url": "TypeScript-xcatliu/basics/built-in-objects.html",
    "revision": "526ab4ede927129cfe67276303aeee58"
  },
  {
    "url": "TypeScript-xcatliu/basics/declaration-files.html",
    "revision": "c72c3c7507ce978e97ed921d8049f35f"
  },
  {
    "url": "TypeScript-xcatliu/basics/index.html",
    "revision": "0683d07fd24e4f2a63263cbd5eeaa2e7"
  },
  {
    "url": "TypeScript-xcatliu/basics/primitive-data-types.html",
    "revision": "8688240f6aa325b148a83d329097f94f"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-assertion.html",
    "revision": "e5c01a0159721c868e4d75fb65ff1736"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-inference.html",
    "revision": "6680aa0fb43500a6b8ac181cd16d3434"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-array.html",
    "revision": "665d8893f7255e6d645f4b6b82126af2"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-function.html",
    "revision": "1a12fd5d246000d83092a9c709c9215b"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-object-interfaces.html",
    "revision": "1e39755deb16cbf2dd25afe930a6e6a5"
  },
  {
    "url": "TypeScript-xcatliu/basics/union-types.html",
    "revision": "42301d7db01c5400c0b25c6c0a1418f6"
  },
  {
    "url": "TypeScript-xcatliu/engineering/compiler-options.html",
    "revision": "6e8110129697d19ba1fdef49ebb50f16"
  },
  {
    "url": "TypeScript-xcatliu/engineering/index.html",
    "revision": "e9b0b748433f8b360ebd19142ab93d11"
  },
  {
    "url": "TypeScript-xcatliu/engineering/lint.html",
    "revision": "f4089bdfe8d35ccc304d25cf7ce1c05e"
  },
  {
    "url": "TypeScript-xcatliu/index.html",
    "revision": "33effd070deb69eafaa4eb9aa5f1b1d2"
  },
  {
    "url": "TypeScript-xcatliu/introduction/get-typescript.html",
    "revision": "fba814d86fd7bc881700c43088c0e763"
  },
  {
    "url": "TypeScript-xcatliu/introduction/hello-typescript.html",
    "revision": "69fc93cf4912bc58878b635a834f4433"
  },
  {
    "url": "TypeScript-xcatliu/introduction/index.html",
    "revision": "2ddcc249facc216e1bf407980e290f91"
  },
  {
    "url": "TypeScript-xcatliu/introduction/what-is-typescript.html",
    "revision": "a25840878d30965e42eb3bc1bbbb5f9b"
  },
  {
    "url": "TypeScript-xcatliu/summary.html",
    "revision": "568f7bfbb5f78f2a82fb450309762568"
  },
  {
    "url": "TypeScript-xcatliu/thanks/index.html",
    "revision": "b097d034fa25f39d8b8f2c5e411c57b5"
  },
  {
    "url": "Vue/Vue 修饰符.html",
    "revision": "20f13ea2cec42694936f7402e19f668a"
  },
  {
    "url": "Vue/Vue 响应式和依赖收集.html",
    "revision": "4049be8df499ed9d5ae34a5b81d6c26d"
  },
  {
    "url": "Vue/Vue 组件.html",
    "revision": "ada685f6c28e4bc9bdb3c2977333bf74"
  },
  {
    "url": "Vue/Vue 组件生命周期.html",
    "revision": "5c5a15c5977753afac047aa8443482b6"
  },
  {
    "url": "Vue/Vue 进阶.html",
    "revision": "398a08ee5753162bc387fc6a5a3c4ab3"
  },
  {
    "url": "Vue/Vue 高阶组件.html",
    "revision": "f21bc182dda4c4614cdff6b64326adeb"
  },
  {
    "url": "Vue/vue-cli.html",
    "revision": "af4209c5c6ba8f12482506ef66fa8f1a"
  },
  {
    "url": "Vue/Vue-SSR.html",
    "revision": "8ba0a900ee09dfa317a6e9adb79d84d5"
  },
  {
    "url": "Webpack/1.Webpack 入门.html",
    "revision": "54b92482e8830a72b033c387539d763f"
  },
  {
    "url": "Webpack/2. 使用 Iconfont.html",
    "revision": "b5145ab2e7f47f18946807b9a59a6ed2"
  },
  {
    "url": "Webpack/3. 配置 SouceMap.html",
    "revision": "eac4e0504c21dea4427dd3a7bf3477e7"
  },
  {
    "url": "Webpack/4. 配置 devServer.html",
    "revision": "1f7e31ab1bca4dab33afde58e5964b9c"
  },
  {
    "url": "Webpack/5. 配置 HMR.html",
    "revision": "bea0f12dff78f5a7288fb7d1da92c27b"
  },
  {
    "url": "Webpack/6. 配置 Babel.html",
    "revision": "c35fb25c48ff2c1bfbb6760e5a910cc4"
  },
  {
    "url": "Webpack/7. 配置Tree Shaking.html",
    "revision": "2bd3ca378ea48979f247895f162b30fd"
  },
  {
    "url": "Webpack/8. 配置不同环境的配置.html",
    "revision": "c9038535f4ab3213154d7351996ba616"
  },
  {
    "url": "Webpack/9. 代码分割 Code Spliting.html",
    "revision": "2acceea1c35d4c638dad651fa5859fb2"
  },
  {
    "url": "其他/CI_CD.html",
    "revision": "66bb0b42f32789625d32c1be71b74ef7"
  },
  {
    "url": "前端/1.HTTP缓存.html",
    "revision": "5100865cd18d02137ba2f229a7092bd5"
  },
  {
    "url": "前端/10.mate标签.html",
    "revision": "cdb3e4554c9ed9418842a692c95cfd1f"
  },
  {
    "url": "前端/11.rollup、ts、umd配置.html",
    "revision": "2ee27ba15920e631c16caccc5ac2fba9"
  },
  {
    "url": "前端/12.rollup插件-cn.html",
    "revision": "c0d2dc8c3b3f161e59842e464c49bc05"
  },
  {
    "url": "前端/13.rollup插件-en.html",
    "revision": "ef131930f04d83d968acc9cc7faaef92"
  },
  {
    "url": "前端/2.常见网络攻击.html",
    "revision": "37b4d3eed4861e7caebf44e8aa4791b8"
  },
  {
    "url": "前端/3.HTTP协议.html",
    "revision": "fb7cc0bf17d182d213ebcae87395ca94"
  },
  {
    "url": "前端/4.TCP协议.html",
    "revision": "0a58b86da07e2d5efae751fe470896f0"
  },
  {
    "url": "前端/5.V8相关.html",
    "revision": "f8424269c555dc99d0f023a22b345bc9"
  },
  {
    "url": "前端/6.设计模式.html",
    "revision": "f5acd8b03c32d2849bc5175bdc374db7"
  },
  {
    "url": "前端/7.性能优化.html",
    "revision": "bf275a8b781671b1c327b274eef7a575"
  },
  {
    "url": "前端/8.框架相关.html",
    "revision": "4c0e30d7e3896f37e60f3a326e9f522a"
  },
  {
    "url": "前端/9.npm.html",
    "revision": "6e7025e7e080e149451c6c9664668e5d"
  },
  {
    "url": "插件/axios.html",
    "revision": "cb82227c9c76e191b3d0cb3d2a5ddd5e"
  },
  {
    "url": "插件/好东西.html",
    "revision": "28a690d3ec73219e5d091cae82d45e08"
  },
  {
    "url": "数据结构和算法/二分查找.html",
    "revision": "896a066b0d53ca6a523625cf9c80a7b7"
  },
  {
    "url": "数据结构和算法/二叉搜索树.html",
    "revision": "05f3f07fb9431fb351c06fa9c635ee41"
  },
  {
    "url": "数据结构和算法/力扣120： 三角形最小路径和.html",
    "revision": "cecf70cdde7e83e870f15a9e2d041e5e"
  },
  {
    "url": "数据结构和算法/力扣53：最大子序合.html",
    "revision": "c07b9fdcaa3009b9f3008eaa2361cc17"
  },
  {
    "url": "数据结构和算法/力扣76：最小覆盖子串.html",
    "revision": "2211e51a156e132e7b785ed5dfa2b7e9"
  },
  {
    "url": "数据结构和算法/堆.html",
    "revision": "2706dff0830cd5acc36f735df3899163"
  },
  {
    "url": "数据结构和算法/循环队列.html",
    "revision": "5d6fc269692398498dd75fad26e09983"
  },
  {
    "url": "数据结构和算法/快排.html",
    "revision": "4de4553117372f75211409201c519edc"
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

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
    "revision": "8378fd40b6ff2a1ad0eebf50df5d82ab"
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
    "url": "assets/js/123.0a49319e.js",
    "revision": "eba95001fb9bcb0b0f0c241e4e0bee9e"
  },
  {
    "url": "assets/js/124.68e00f32.js",
    "revision": "a9f9e93534181c83ee709ccb9004712b"
  },
  {
    "url": "assets/js/125.cfd09045.js",
    "revision": "fb0ad3b1cc0e0163a940af315663bb6f"
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
    "url": "assets/js/130.59094b9e.js",
    "revision": "c50b9f5fa502a51e6129f421eb6b8eae"
  },
  {
    "url": "assets/js/131.f86dba00.js",
    "revision": "6c6c2777b583ef17da95af9e3bd09dd6"
  },
  {
    "url": "assets/js/132.8080118d.js",
    "revision": "9a8bb6605ceb192920b07dd3a282719a"
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
    "url": "assets/js/138.9f83d586.js",
    "revision": "b164afe4308af8ff4e6273bdcca4ace7"
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
    "url": "assets/js/25.dad95fa9.js",
    "revision": "15779dc772709ec2fbf578a399ce3c86"
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
    "url": "assets/js/3.b3e6b350.js",
    "revision": "283ac02de7f5769b809e0ba737b7a692"
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
    "url": "assets/js/52.5c616c19.js",
    "revision": "bd4a84b220ebae06463a6de9b505ee40"
  },
  {
    "url": "assets/js/53.d5ecf804.js",
    "revision": "970139e5314bdb0afe7b04dd1bf66223"
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
    "url": "assets/js/7.e0f889e8.js",
    "revision": "2b9fc9a99742e50cb9f636d98200b763"
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
    "url": "assets/js/app.1ed79682.js",
    "revision": "7c5de0985db5b8fe85706ffdb96574b0"
  },
  {
    "url": "CSS/BFC.html",
    "revision": "1bbdae1b1271d064c844aa4799e2cd54"
  },
  {
    "url": "CSS/CSS 随笔.html",
    "revision": "de0e26118f30423703b5d132b7c4d220"
  },
  {
    "url": "CSS/中间自适应，两边固定.html",
    "revision": "1c55998c0f9ef4b3fea4bb07a7f5a1ee"
  },
  {
    "url": "ES6-阮一峰/[es6]1.ECMAScript.6.简介.html",
    "revision": "ae95d89a7b3de728814a527ebfdc3dd2"
  },
  {
    "url": "ES6-阮一峰/[es6]10.对象的新增方法.html",
    "revision": "d5c07581606f17b3dd6de81d6953cf0e"
  },
  {
    "url": "ES6-阮一峰/[es6]11.Symbol.html",
    "revision": "9141b4c2afbd8b41e15c8e521d4cf635"
  },
  {
    "url": "ES6-阮一峰/[es6]12.Set.和.Map.数据结构.html",
    "revision": "5b58a89e4b6bbba797b2c8e383d14c91"
  },
  {
    "url": "ES6-阮一峰/[es6]13.Proxy.html",
    "revision": "92d5d16ca5b268696da3ecd069c76747"
  },
  {
    "url": "ES6-阮一峰/[es6]14.Reflect.html",
    "revision": "6351774192cfe6a25e852d0500e8bd1d"
  },
  {
    "url": "ES6-阮一峰/[es6]15.Promise.对象.html",
    "revision": "ec68e627225a31cf2545fdbe5a86bf93"
  },
  {
    "url": "ES6-阮一峰/[es6]16.Iterator.和.for...of.循环.html",
    "revision": "681e3b21be5e77db86f052bdca8f9e97"
  },
  {
    "url": "ES6-阮一峰/[es6]17.Generator.函数的语法.html",
    "revision": "1cd9ca9632742959b29ae23aafd91ce9"
  },
  {
    "url": "ES6-阮一峰/[es6]18.Generator.函数的异步应用.html",
    "revision": "10cfbdb4af2b5817aed90525bda17aaa"
  },
  {
    "url": "ES6-阮一峰/[es6]19.async.函数.html",
    "revision": "3f180eb9c5a1ec8594af584c5b42487f"
  },
  {
    "url": "ES6-阮一峰/[es6]2.let和const命令.html",
    "revision": "e9bacce1499b8778092b72b27eb25551"
  },
  {
    "url": "ES6-阮一峰/[es6]20.Class.的基本语法.html",
    "revision": "a8c41e0e4b09a2950b653246db6fbe60"
  },
  {
    "url": "ES6-阮一峰/[es6]21.Class.的继承.html",
    "revision": "138c9d9abc7411e5f3a7e971316cfbec"
  },
  {
    "url": "ES6-阮一峰/[es6]22.Module.的语法.html",
    "revision": "c77718e22594f690d54303736e4e6bc9"
  },
  {
    "url": "ES6-阮一峰/[es6]23.Module.的加载实现.html",
    "revision": "1afa1d62c95d215d333e1f7ed76fe80f"
  },
  {
    "url": "ES6-阮一峰/[es6]24.编程风格.html",
    "revision": "ada2018cfb5012cb5d0a89389df96ce8"
  },
  {
    "url": "ES6-阮一峰/[es6]25.读懂规格.html",
    "revision": "44139090c86b5b8f7b5640888cafe5c6"
  },
  {
    "url": "ES6-阮一峰/[es6]26.ArrayBuffer.html",
    "revision": "d5eb50406024a2c52dbfde34c9400137"
  },
  {
    "url": "ES6-阮一峰/[es6]27.最新提案.html",
    "revision": "e345531ac2116ba127d2409eed547ad9"
  },
  {
    "url": "ES6-阮一峰/[es6]28.Decorator.html",
    "revision": "5120d2c400be381c5d984f87b7b9226a"
  },
  {
    "url": "ES6-阮一峰/[es6]29.参考链接.html",
    "revision": "6d467773ec49fb11fbb37f166f4bff2f"
  },
  {
    "url": "ES6-阮一峰/[es6]3.变量的解构赋值.html",
    "revision": "c88426d81dc7b3eef82abbb1f519eb4f"
  },
  {
    "url": "ES6-阮一峰/[es6]30.SIMD.html",
    "revision": "ee14ddd74af920e85e923aece3f3c0d5"
  },
  {
    "url": "ES6-阮一峰/[es6]31.Mixin.html",
    "revision": "1bdd6ae6564ed5fb0515eb4f4d1f5ffd"
  },
  {
    "url": "ES6-阮一峰/[es6]32.函数式编程.html",
    "revision": "9664fc36f06993067116b877df4f803e"
  },
  {
    "url": "ES6-阮一峰/[es6]33.鸣谢.html",
    "revision": "e25c228ee05a3b7aba27c235eeba6850"
  },
  {
    "url": "ES6-阮一峰/[es6]4.字符串的扩展.html",
    "revision": "07f19efaa5c894ccea73215c7f21c4c3"
  },
  {
    "url": "ES6-阮一峰/[es6]5.正则的扩展.html",
    "revision": "7d5b635e807492030f507a99879b5e6b"
  },
  {
    "url": "ES6-阮一峰/[es6]6.数值的扩展.html",
    "revision": "cf73f9475f8c4243e83b36e4cc0238d4"
  },
  {
    "url": "ES6-阮一峰/[es6]7.函数的扩展.html",
    "revision": "c01dbe8043d49a9e7974bbabffa7d23f"
  },
  {
    "url": "ES6-阮一峰/[es6]8.数组的扩展.html",
    "revision": "4989a1bc67a657c2cb0e4a98f013d56a"
  },
  {
    "url": "ES6-阮一峰/[es6]9.对象的扩展.html",
    "revision": "81abb83683aaceaa455c30831e5fea6b"
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
    "revision": "3de95b09ea55cf559c431c61471ed870"
  },
  {
    "url": "JavaScript/1.JS随笔.html",
    "revision": "06a0fc34aed42b4883391a5c359c7bf9"
  },
  {
    "url": "JavaScript/10.Iterator迭代器.html",
    "revision": "6db90109e695af14d5cb480f54e9d43d"
  },
  {
    "url": "JavaScript/11.Generator.html",
    "revision": "9fdeb792d6aa70ee26d8a3678ca4a842"
  },
  {
    "url": "JavaScript/12.instanceof.html",
    "revision": "306a829a8404bceda46fb2f6a88dd630"
  },
  {
    "url": "JavaScript/13.防抖、节流.html",
    "revision": "bb9ac4fcb132aed41cb702b381a5fe15"
  },
  {
    "url": "JavaScript/14.踩坑之路.html",
    "revision": "97b123ba8a92c69f8ae30f6ae4380a1e"
  },
  {
    "url": "JavaScript/2.正则.html",
    "revision": "ad5ce42241005c00b463891e66caae19"
  },
  {
    "url": "JavaScript/3.tool.html",
    "revision": "5209e5eef42649947f4bd81302aa31ce"
  },
  {
    "url": "JavaScript/4.JavaScript原型链.html",
    "revision": "e0c6c6345e9c5404062704bf51d9dffc"
  },
  {
    "url": "JavaScript/5.手写Promise.html",
    "revision": "ba3d534b01daca2e966e1a6a91f8e3e1"
  },
  {
    "url": "JavaScript/6.模块化.html",
    "revision": "ec4b6375ae1848c916de48f93c01b32b"
  },
  {
    "url": "JavaScript/7.JS的运行机制.html",
    "revision": "9a4c9d9350de54cb76d19ab4add1e5cc"
  },
  {
    "url": "JavaScript/8.call、apply、bind函数.html",
    "revision": "1a62cffa190d1b373fe4e1cf93a77453"
  },
  {
    "url": "JavaScript/9.new操作符.html",
    "revision": "ed85adb1c26833cbfa8852fb12f0c97c"
  },
  {
    "url": "js/theme.js",
    "revision": "d095d5905e1956641e211f8f2cdc1a92"
  },
  {
    "url": "Koa/1. 初识 Koa.html",
    "revision": "4e7305f55b58c402949e1feb947f9c7e"
  },
  {
    "url": "Koa/10.问题模块速览.html",
    "revision": "b45ad9052a3ac8508ecbb003531a5e7f"
  },
  {
    "url": "Koa/2.使用 Koa-router 实现路由，前缀的整合、以及中间件的写法.html",
    "revision": "938239a5918a525625364b201b8fc2e3"
  },
  {
    "url": "Koa/3.options 方法及 RESTful API 最佳实践，和设置响应内容.html",
    "revision": "7d19473b9b3ea202e82456766c31cf82"
  },
  {
    "url": "Koa/4.配置更合理的目录结构，动态注册路由.html",
    "revision": "9c1be78119f6eeee32974ff271ee0dd1"
  },
  {
    "url": "Koa/5.使用JWT获取token.html",
    "revision": "756c3b5f04239234b66501756d368972"
  },
  {
    "url": "Koa/6.文件上传.html",
    "revision": "b9be76ff126311539f872b094cc6192c"
  },
  {
    "url": "Koa/7.用户详情（多字段）.html",
    "revision": "b7b010c36f9f4f9575202eef2d2f6ec4"
  },
  {
    "url": "Koa/8.关注与粉丝的API及MongoDB的设计.html",
    "revision": "924c90db9c20d943ea84963074fa2a82"
  },
  {
    "url": "Koa/9.仿用户、关注、粉丝实现话题功能.html",
    "revision": "b30b31f1bc8ffe44517e5cc8291d5710"
  },
  {
    "url": "Nodejs/tool.html",
    "revision": "f2abe0de8c3daca61692d401b1db5d11"
  },
  {
    "url": "React/1、webpack 环境搭建.html",
    "revision": "a87776d286764e07cf15d6eb8071e5f1"
  },
  {
    "url": "React/2、React 基础语法.html",
    "revision": "86e00f78ea154560fa524bd550c0a2f3"
  },
  {
    "url": "React/3、React Component 细读.html",
    "revision": "3c7b5238002bfbffb9089b9cb520ab50"
  },
  {
    "url": "React/4、React router.html",
    "revision": "7e93e4537901cb77cc77bd218260cefc"
  },
  {
    "url": "React/React Hooks.html",
    "revision": "eaac545d5c74acf6b4d44cd249adb284"
  },
  {
    "url": "React/React 组件生命周期.html",
    "revision": "d57cd1389b0c0975e59bdbaa8052e73a"
  },
  {
    "url": "React/React 进阶.html",
    "revision": "2448039a7a9912cecb9369ad0a9d32e8"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class-and-interfaces.html",
    "revision": "2870ad412a661e0c64b2483f4b9a72bc"
  },
  {
    "url": "TypeScript-xcatliu/advanced/class.html",
    "revision": "55ce6212345bd1ade722f4a8396cfcaa"
  },
  {
    "url": "TypeScript-xcatliu/advanced/declaration-merging.html",
    "revision": "eafe489366d0058a7900d4327b5bc6a6"
  },
  {
    "url": "TypeScript-xcatliu/advanced/enum.html",
    "revision": "52adf926e120965a00df5ad9c25b9d54"
  },
  {
    "url": "TypeScript-xcatliu/advanced/further-reading.html",
    "revision": "951a1842f933b36497dded8ea77edd33"
  },
  {
    "url": "TypeScript-xcatliu/advanced/generics.html",
    "revision": "3e2acb9370fd90b2494afe75daef6da1"
  },
  {
    "url": "TypeScript-xcatliu/advanced/index.html",
    "revision": "118c73745e8e559ada65265e04ce68f9"
  },
  {
    "url": "TypeScript-xcatliu/advanced/string-literal-types.html",
    "revision": "824447d03ccf0f0051d490355d600853"
  },
  {
    "url": "TypeScript-xcatliu/advanced/tuple.html",
    "revision": "07de25b0ccf36c9dd02ef74fa242c0b0"
  },
  {
    "url": "TypeScript-xcatliu/advanced/type-aliases.html",
    "revision": "0306b065b1185d3f11440331e33f3cef"
  },
  {
    "url": "TypeScript-xcatliu/basics/any.html",
    "revision": "59c8f9a246931a19c70478843137e5f9"
  },
  {
    "url": "TypeScript-xcatliu/basics/built-in-objects.html",
    "revision": "5b9d7c7dc02d7492b9b015d986d8c9fc"
  },
  {
    "url": "TypeScript-xcatliu/basics/declaration-files.html",
    "revision": "97aaf382188b753580c242a8b796336f"
  },
  {
    "url": "TypeScript-xcatliu/basics/index.html",
    "revision": "b82fe7d12b06d92df17d821222e6c464"
  },
  {
    "url": "TypeScript-xcatliu/basics/primitive-data-types.html",
    "revision": "28f8b8bdfd639fe9f6e5c13d89fb5c88"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-assertion.html",
    "revision": "5a7dd402e66815343ff7e02f7f522113"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-inference.html",
    "revision": "e05e32fe463a61cc5d93ac1d324d5c31"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-array.html",
    "revision": "f27ad45dfa08e9124f2cc56ea122a1c4"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-function.html",
    "revision": "b96f1f103bec85ed2534ababbf91feb8"
  },
  {
    "url": "TypeScript-xcatliu/basics/type-of-object-interfaces.html",
    "revision": "c31e9befb0979ff51bc68439cbb41a19"
  },
  {
    "url": "TypeScript-xcatliu/basics/union-types.html",
    "revision": "8b0d0ef24b9ac90f34215e10b3201149"
  },
  {
    "url": "TypeScript-xcatliu/engineering/compiler-options.html",
    "revision": "12776e380a7516bae9f82aebf15708ab"
  },
  {
    "url": "TypeScript-xcatliu/engineering/index.html",
    "revision": "a904b5f04098b5ff82e4f28cf4aff401"
  },
  {
    "url": "TypeScript-xcatliu/engineering/lint.html",
    "revision": "c253b568fe39c41cae1735eeed774e84"
  },
  {
    "url": "TypeScript-xcatliu/index.html",
    "revision": "98c893b3f8069bf451fb64967532ba1f"
  },
  {
    "url": "TypeScript-xcatliu/introduction/get-typescript.html",
    "revision": "1f598a8acc3a0c35196fa52e6b30ae19"
  },
  {
    "url": "TypeScript-xcatliu/introduction/hello-typescript.html",
    "revision": "8e2e8ff1bbf78198a1dd8d8e6b5cf4db"
  },
  {
    "url": "TypeScript-xcatliu/introduction/index.html",
    "revision": "83bcd30a53dd8f2e164820c6da60e1ec"
  },
  {
    "url": "TypeScript-xcatliu/introduction/what-is-typescript.html",
    "revision": "ec0fb553fd3031f9786e553e8248c6f8"
  },
  {
    "url": "TypeScript-xcatliu/summary.html",
    "revision": "fb307a77da0d1c4c3c7303246c15fc7e"
  },
  {
    "url": "TypeScript-xcatliu/thanks/index.html",
    "revision": "5caf0b3a6f9fb4b255bdcb342fd99019"
  },
  {
    "url": "Vue/Vue 修饰符.html",
    "revision": "023b47199ec9d716e7a95fdf6d3eef29"
  },
  {
    "url": "Vue/Vue 响应式和依赖收集.html",
    "revision": "ea1dadb3794413893689cba5a312da78"
  },
  {
    "url": "Vue/Vue 组件.html",
    "revision": "2dbefb611ae58e5cdec82015ac1cde3b"
  },
  {
    "url": "Vue/Vue 组件生命周期.html",
    "revision": "f9c7cfaf430a65bdbfa1931aafa7ad9c"
  },
  {
    "url": "Vue/Vue 进阶.html",
    "revision": "40ec1f196feff466ac8ac483e0a095d9"
  },
  {
    "url": "Vue/Vue 高阶组件.html",
    "revision": "68737193ec505631400afe983e6bfa5e"
  },
  {
    "url": "Vue/vue-cli.html",
    "revision": "9e309173b67200b0d80fd5cdbd7a3775"
  },
  {
    "url": "Vue/Vue-SSR.html",
    "revision": "fd88844fa602e47a0991656de1f3b77b"
  },
  {
    "url": "Webpack/1.Webpack 入门.html",
    "revision": "3e399a1c678097681d7c40417217013c"
  },
  {
    "url": "Webpack/2. 使用 Iconfont.html",
    "revision": "a0c1b11ffc22bd538a9d716fd8f5a6c5"
  },
  {
    "url": "Webpack/3. 配置 SouceMap.html",
    "revision": "4d1d0531b248af057d8a5d8a00eee73c"
  },
  {
    "url": "Webpack/4. 配置 devServer.html",
    "revision": "0baecc723827f25883c8dcf70251fbea"
  },
  {
    "url": "Webpack/5. 配置 HMR.html",
    "revision": "8d674594cfbdaa6dfcd5f54b1aab4c18"
  },
  {
    "url": "Webpack/6. 配置 Babel.html",
    "revision": "b462f2053d67d2fa78c5a08596e5747e"
  },
  {
    "url": "Webpack/7. 配置Tree Shaking.html",
    "revision": "56073357849b2621ebc5061de8c869ec"
  },
  {
    "url": "Webpack/8. 配置不同环境的配置.html",
    "revision": "219b5d614bfee3bbf6709631fe219010"
  },
  {
    "url": "Webpack/9. 代码分割 Code Spliting.html",
    "revision": "b9fdceeb5584254c47d12bf2ed306abf"
  },
  {
    "url": "其他/CI_CD.html",
    "revision": "803de26b7552f87c10fb6fbd3177a937"
  },
  {
    "url": "前端/1.HTTP缓存.html",
    "revision": "08145d6ca6251dfb187506d4c8720ba3"
  },
  {
    "url": "前端/10.mate标签.html",
    "revision": "5f74a4204b87f2810c483af18a319ca2"
  },
  {
    "url": "前端/11.rollup、ts、umd配置.html",
    "revision": "ec8b9fd4b4ddecdc038743d107a61616"
  },
  {
    "url": "前端/12.rollup插件-cn.html",
    "revision": "ec0bee9e9099ff5c16a3e3c5a9202202"
  },
  {
    "url": "前端/13.rollup插件-en.html",
    "revision": "f4ab5df22f1e2c62f19ddcbec2dadfa6"
  },
  {
    "url": "前端/2.常见网络攻击.html",
    "revision": "3f7c80a51e5190783c2e956f1e7df128"
  },
  {
    "url": "前端/3.HTTP协议.html",
    "revision": "8eb4b1150f558da31a5e077aa0f53280"
  },
  {
    "url": "前端/4.TCP协议.html",
    "revision": "b1aec931a0c1b669a0683ae811799534"
  },
  {
    "url": "前端/5.V8相关.html",
    "revision": "667c39272a4339d53dba43fa7602746b"
  },
  {
    "url": "前端/6.设计模式.html",
    "revision": "fc1a07d25a2f121bf3a586ff2d4832f1"
  },
  {
    "url": "前端/7.性能优化.html",
    "revision": "5ea89b194f1f1be3c630d2e7686a27df"
  },
  {
    "url": "前端/8.框架相关.html",
    "revision": "085ed665d4ea00b7558eae49beb5e496"
  },
  {
    "url": "前端/9.npm.html",
    "revision": "61c1288374cdf367aaa45a7bca9f80af"
  },
  {
    "url": "插件/axios.html",
    "revision": "e03e153c949cbca4ffd2bb74e7244d75"
  },
  {
    "url": "插件/好东西.html",
    "revision": "662ba994b8292e559a80d43b6f920e39"
  },
  {
    "url": "数据结构和算法/二分查找.html",
    "revision": "8b3c4a241ce96370cbc5bd0cdea5eea8"
  },
  {
    "url": "数据结构和算法/二叉搜索树.html",
    "revision": "b1042a36a6a6162045f10c6b5228689d"
  },
  {
    "url": "数据结构和算法/力扣120： 三角形最小路径和.html",
    "revision": "35515d5fd894453db9b117a2883e6a0c"
  },
  {
    "url": "数据结构和算法/力扣53：最大子序合.html",
    "revision": "b7f1984868dec8351c9475eaa1af60e7"
  },
  {
    "url": "数据结构和算法/力扣76：最小覆盖子串.html",
    "revision": "1972a0ac68f9b7a2a66aa1a1ed53d76a"
  },
  {
    "url": "数据结构和算法/堆.html",
    "revision": "7c9326e72d53dcda5194ee0a6fdb23ac"
  },
  {
    "url": "数据结构和算法/循环队列.html",
    "revision": "ff3132a11c5fffa09d44ba5b7c99e459"
  },
  {
    "url": "数据结构和算法/快排.html",
    "revision": "d954404616591501f80396eb7c2a13d3"
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

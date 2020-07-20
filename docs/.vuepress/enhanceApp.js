// mediumZoom('.theme-default-content :not(a) > img');

// 使用异步函数也是可以的
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {

  // onLoadSrc('https://liu-lihao.github.io/js-ide/style/PingFang-Zhun-Jian.ttf').then(() => {
  //   addPingFang();
  // }).catch(() => {
  //   addPingFang();
  // })

  // WebFont.load({
  //   google: {
  //     families: ['Droid Sans', 'Droid Serif'],
  //     api: 'https://cdn.moefont.com/fonts/css'
  //   }
  // });

  // addPingFang();

  window.addEventListener('load',function() {
    asyncLoadFont();

    let pathname = '';
    let zooms = [];
    document.addEventListener('click',function(event){
      const newPathname = window.location.pathname;
      const isImg = event.target.nodeName === 'IMG';
      const container = document.getElementsByClassName('theme-default-content')[0];
      const isChild = container.contains(event.target);
      const isOpened = (event.target.className || '').includes('medium-zoom-image--opened');
      // debugger;
      if (isImg && isChild && !isOpened) {
        if (newPathname !== pathname) {
          zooms.forEach(item => item.detach())
          pathname = newPathname;
          let list = document.querySelectorAll('.theme-default-content :not(a) > img');
          list = [...list].filter(dom => dom !== event.target); 
          const z1 = mediumZoom(list);
          const z2 = mediumZoom(event.target)
          z2.open();
          zooms = [z1, z2];
        }
      }
    })
  });
}


function asyncLoadFont() {
  const willChange = document.createElement('span');
  willChange.textContent = '你好，,123，？.';
  willChange.style.position = 'fixed';
  willChange.style.left = '-99999px';
  willChange.style.opacity = 0;
  document.body.appendChild(willChange);
  let count = 0;
  const robserver = new ResizeObserver( entries => {
    count += 1;
    if (count === 2) {
      addPingFang();
      robserver.unobserve(willChange);
      willChange.remove();
    }
  });
  robserver.observe(willChange);

  setTimeout(() => {
    willChange.className = 'will-change-preloading';
  }, 500);
}

function addPingFang() {
  const fontFace = `
  @font-face {
    font-family: 'SourceCodePro';
    src: url('https://liu-lihao.gitee.io/js-ide/style/SourceCodePro-Medium.ttf') format('truetype');
    src: url('https://liu-lihao.github.io/js-ide/style/SourceCodePro-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'PingFangZhunJian';
    src: url('https://liu-lihao.gitee.io/js-ide/style/PingFang-Zhun-Jian.ttf') format('truetype');
    src: url('https://liu-lihao.github.io/js-ide/style/PingFang-Zhun-Jian.ttf') format('truetype');
  }`;
  const styleStr = `
  * {
    font-family: 'SourceCodePro', 'PingFangZhunJian', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
  }`;
  const styleDom = document.createElement('style');
  styleDom.innerHTML = styleStr;
  // styleDom.innerHTML = fontFace + styleStr;
  document.head.append(styleDom);
}
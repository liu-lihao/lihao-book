// 使用异步函数也是可以的
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {

  window.addEventListener('load',function() {
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
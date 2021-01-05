// 使用异步函数也是可以的
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  const nextTick = window.requestAnimationFrame;
  const appendBeforeChild = (p, c) => {
    if (p.firstElementChild) {
      p.insertBefore(c, p.firstElementChild);
    } else {
      p.appendChild(c);
    }
  };
  const createNavItem = () => {
    const item = document.createElement("div");
    item.className = "nav-item";
    item.innerHTML = `<i class="theme-icon iconfont iconzhuti"></i>`;
    item.addEventListener("click", window.$changeTheme);
    return item;
  };
  const setThemeStyle = () => {
    const style = `
      .theme-icon {
        font-size: 18px;
        cursor: pointer;
        user-select: none;
      }
      .theme-icon:hover {
        color: var(--themeColor);
      }
    `;
    const styleDom = document.createElement("style");
    styleDom.innerHTML = style;
    document.head.appendChild(styleDom);
  };
  window.addEventListener("load", function() {
    nextTick(() => {
      setThemeStyle();
      const containers = document.querySelectorAll("nav.nav-links") || [];
      [...containers].forEach((p) => {
        appendBeforeChild(p, createNavItem());
      });
    });
  });
};

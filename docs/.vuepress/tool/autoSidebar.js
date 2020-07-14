const path = require('path');
const fs = require('fs')
const natsort = require('./natsort.min.js');
const utils = require('./utils.js');

// 配置
// 侧边栏过滤的目录
const filterFile = ['assets', '.vuepress', '草稿中'];
// 分组名称的连接符（文件夹嵌套的情况下文件名的拼接字符串）
const separator = ' - ';



// 自动添加侧边栏，扫描docs目录，排除 filterFile 所示目录，及其他文件。
// 只对目录添加至侧边栏！！！！！
const autoSidebar = () => {
  const env = path.join(__dirname, `../../`);
  const envFiles = fs.readdirSync(env);
  const res = {};
  envFiles.forEach((name, index) => {
    if (filterFile.includes(name)) {
      return;
    }
    const curPath = path.resolve(env, name);
    if (fs.statSync(curPath).isDirectory()) {
      // 只对文件夹处理
      const sidebarKey = `/${name}/`;
      res[sidebarKey] = [];
      utils.scanningAllFile(curPath, (type, dir) => {
        if (type === 1) {
          // 只处理文件
          const mdInfo = path.parse(dir);
          const ext = mdInfo.ext.toLocaleLowerCase();
          if (ext === '.md') {
            // 只处理md
            const dirRelative = path.relative(curPath, dir);
            const dirArr = dirRelative.split(path.sep);
            const sidebarValue = dirRelative
              .replace(new RegExp('\\' + mdInfo.ext + '$'), '')
              .replace(new RegExp('\\' + path.sep, 'g'), '/')
              .replace(/readme$/i, ''); // 对 readme 文件名提供支持
            if (mdInfo.ext !== '.md') {
              // 格式化 .md 后缀，vuepress 无法识别 .MD
              fs.rename(dir, path.join(dir, '../', mdInfo.name + '.md'))
            }
            if (dirArr.length === 1) {
              // 不分组
              res[sidebarKey].push(sidebarValue)
            } else {
              // 分组
              const tempDirArr = [...dirArr];
              tempDirArr.pop();
              const title = tempDirArr.join(separator);
              const hasTitle = res[sidebarKey].some(item => {
                if (typeof item === 'object' && item.title === title) {
                    item.children.push(sidebarValue);
                  return true;
                }
              })
              if (!hasTitle) {
                // 判断当前这个title是否 不存在`
                res[sidebarKey].push({
                  title,
                  children: [sidebarValue]
                })
              }
            }
          }
        }
      })
    }
  })
  return res;
}
const tempRes = autoSidebar();

// 排序
const res = {};
Object.keys(tempRes).forEach(resKey => {
  const item = tempRes[resKey];
  let strArr = [];
  let objArr = [];
  item.forEach(item => {
    if (typeof item === 'string') {
      strArr.push(item)
    } else {
      item.children = item.children.sort(natsort());
      const lastChild = item.children[item.children.length - 1];
      // 将 readme 文件顺序置顶
      if (lastChild[lastChild.length - 1] === '/' || (lastChild === '')) {
        item.children.pop();
        item.children.unshift(lastChild);
      }
      objArr.push(item);
    }
  });
  strArr = strArr.sort(natsort());
  const sorter = natsort();
  objArr = objArr.sort((a,b) => {
    return sorter(a.title, b.title);
  });
  res[resKey] = [
    ...strArr,
    ...objArr
  ]
})

utils.log('autoSidebar',JSON.stringify(res));

module.exports = res;
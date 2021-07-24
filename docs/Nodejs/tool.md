# 工具

## 遍历指定路径下所有文件和目录

```js
/**
 * 同步遍历指定路径下所有文件和目录
 * @param {string} path 指定目录，如'./dist'
 * @param {function} fn (type, dir) type：0=文件夹，1=文件
 * @param {boolean} self 是否包括 dir 自身
 */
function scanningAllFile(dir, fn, self = false) {
  const reading = (dir, self = false) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach((file, index) => {
        const curPath = path.resolve(dir, file);
        if (fs.statSync(curPath).isDirectory()) {
          reading(curPath, true);
        } else {
          fn(1, curPath);
        }
      });
      if (self) {
        fn(0, dir);
      }
    }
  };
  reading(dir, self);
}
```

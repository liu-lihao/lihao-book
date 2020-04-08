const fs = require('fs');
const path = require('path');
const natsort = require('./natsort.min.js');


const utils = {
  /**
   * 遍历目录下所有文件（同步的）
   * @param {string} path 指定目录，如'./dist'
   * @param {function}fn (type, dir) type：0=文件夹，1=文件
   */
  scanningAllFile(dir, fn, self = false) {
    const reading = (dir, self = false) => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach((file, index) => {
          const curPath = path.resolve(dir, file);
          if (fs.statSync(curPath).isDirectory()) { // recurse
            reading(curPath, true);
          } else {
            fn(1, curPath);
          }
        });
        if (self) {
          fn(0, dir);
        }
      }
    }
    reading(dir, self);
  },
  getDirChildFilenameByIndex(dir, index = 0) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      const files = (fs.readdirSync(dir) || [] ).map(filename => {
        const curPath = path.resolve(dir, filename);
        const { name } = path.parse(curPath);
        return name
      }).sort(natsort());
      return files[index] || null
    }
    return null
  }
}

module.exports = utils;
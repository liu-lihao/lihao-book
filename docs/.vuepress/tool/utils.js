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
        const { name, ext } = path.parse(curPath);
        if (ext !== '.md') {
          return null;
        }
        if ( name.toLocaleLowerCase() === 'readme' ) {
          return '';
        }
        return name
      }).filter(item => item !== null).sort(natsort());
      if (files.includes('')) {
        return '';
      }
      return files[index] || null
    }
    return null
  },
  dateFormat(dateObj = new Date(), fmt = 'yyyy-MM-dd') { // yyyy-MM-dd hh:mm:ss
    const o = {
      'M+': dateObj.getMonth() + 1, // 月份
      'd+': dateObj.getDate(), // 日
      'h+': dateObj.getHours(), // 小时
      'm+': dateObj.getMinutes(), // 分
      's+': dateObj.getSeconds(), // 秒
      'q+': Math.floor((dateObj.getMonth() + 3) / 3), // 季度
      S: dateObj.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${dateObj.getFullYear()}`).substr(4 - RegExp.$1.length));
    for (const k in o) if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    return fmt;
  },
  log(title,text) {
    const nowTime = this.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
    const logDir = './log.txt';
    const line = '-------------------------------------------------------------'
    let oldLog = '';
    try {
      oldLog = fs.readFileSync(logDir, 'utf8');
    } catch(err) {
      oldLog = '';
    }
    fs.writeFileSync(logDir, `${oldLog}[${nowTime}]#${title}#:${text}\n${line}\n`);
  }
}

module.exports = utils;
const fs = require("fs-extra");
const path = require("path");
const natsort = require("./natsort.min.js");

const getIsFile = (dir) => !fs.statSync(dir).isDirectory();

const createItem = (dir, parse, isFile, level) => {
  return {
    path: dir,
    ...parse, // root、dir、base、ext、name
    isFile,
    children: isFile ? null : [],
    level,
  };
};

/** Demo
  const testDir = path.resolve(__dirname, "../../");
  const catalog = getCatalog(testDir, {
    filter(item) {
      if (item.isFile && [".DS_Store"].includes(item.base)) {
        return false;
      }
      if (!item.isFile && ["node_modules"].includes(item.base)) {
        return false;
      }
      return true;
    },
  });
  console.log(catalog);
*/
const getCatalog = (dir = "", options = {}) => {
  const defaultOptions = {
    filter(item) {
      return true;
    },
  };
  options = { ...defaultOptions, ...options };

  const order = (dir, parent, level = 0) => {
    if (!fs.existsSync(dir)) {
      return null;
    }

    const info = path.parse(dir);

    const isFile = getIsFile(dir);

    const item = createItem(dir, info, isFile, level);

    if (!options.filter(item)) {
      return null;
    }

    if (parent) {
      parent.children.push(item);
    }

    if (!isFile) {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
        const fileDir = path.resolve(dir, file);
        order(fileDir, item, level + 1);
      });

      // 将文件夹放在前面，文件放在后面
      const sorter = natsort();
      item.children = item.children.sort((a, b) => {
        if (a.isFile && !b.isFile) {
          return 1;
        }
        if (!a.isFile && b.isFile) {
          return -1;
        }
        return sorter(a.path, b.path);
      });
    }

    return item;
  };

  return order(dir);
};

const orderCatalog = (catalog, fn, level = 0) => {
  if (!catalog) {
    return;
  }
  fn(catalog, level);
  if (!catalog.children || !catalog.children.length) {
    return;
  }
  catalog.children.forEach((item) => orderCatalog(item, fn, level + 1));
};

const writeFile = (dir, ...args) => {
  fs.mkdirpSync(path.dirname(dir));
  fs.writeFileSync(dir, ...args);
};

const getOnlyId = () => {
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const getOne = () => base[Math.floor(Math.random() * base.length)];
  return getOne() + getOne() + getOne() + getOne() + getOne() + getOne();
};

module.exports = {
  getCatalog,
  orderCatalog,
  writeFile,
  getOnlyId,
};

const fs = require("fs-extra");
const path = require("path");
const { getCatalog, orderCatalog, writeFile, getOnlyId } = require("./utils");
const { isBinary } = require("istextorbinary");
const TITLE_SYMBOL = "#title#";
const formatMdContent = (str) =>
  str.replace(/(\\| |_|\[|\]|\*)/g, ($1) => "\\" + $1);

const homeTitle = "vue-next";
const codeDir = path.resolve(__dirname, "./data/vue-next");
const outDir = path.resolve(__dirname, "./data/md");
const outHomeFileDir = path.resolve(__dirname, "./data/README.md");

const filter = ({ path, isFile, base }) => {
  if (isFile && [".DS_Store"].includes(base)) {
    return false;
  }
  if (!isFile && ["node_modules", ".git"].includes(base)) {
    return false;
  }
  return true;
};

const createHome = (content) => {
  content = content.replace(TITLE_SYMBOL, formatMdContent(homeTitle));
  writeFile(outHomeFileDir, content);
};

const getMdContent = ({ title, path }) => {
  return `# ${formatMdContent(title)}

<<< ${path}
`;
};

const createMd = (item) => {
  const filename = item.id + ".md";
  const fileDir = path.resolve(outDir, filename);
  if (item.ext === ".md") {
    fs.copyFileSync(item.path, fileDir);
    return;
  }
  const content = getMdContent({
    title: item.relation,
    path: `@/docs/#1#/${item.relation}`,
  });
  writeFile(fileDir, content);
};

const run = () => {
  const catalog = getCatalog(codeDir, { filter });
  if (!catalog) {
    console.log("代码目录不存在 codeDir:", codeDir);
    return;
  }
  let homeContent = `# ${TITLE_SYMBOL}\n\n`;
  orderCatalog(catalog, (item, level) => {
    item.id = getOnlyId();
    item.isBinary = isBinary(item.path);
    item.relation = path.relative(codeDir, item.path);
    if (!item.isBinary) {
      createMd(item);
    }
    if (level > 0) {
      const before = "".padEnd((level - 1) * 2, " ") + "- ";
      const name =
        item.isBinary || !item.isFile
          ? formatMdContent(item.base)
          : `[${formatMdContent(item.base)}](#2#/${item.id}.html)`;
      const after = "\n";
      homeContent += before + name + after;
    }
  });
  createHome(homeContent);
};

run();

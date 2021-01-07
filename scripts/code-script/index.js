const path = require("path");
const fs = require("fs");
const utils = require("../../docs/.vuepress/tool/utils");
const { isBinary } = require("istextorbinary");

const MD_EXT = ".md";

const codeDataDir = path.resolve(__dirname, "./vue-next");

const getMdContent = ({ title, path }) => {
  return `# ${title}

<<< ${path}
`;
};

utils.scanningAllFile(
  codeDataDir,
  (isFile, dir) => {
    if (!isFile) {
      return;
    }
    if (isBinary(dir)) {
      return;
    }

    const info = path.parse(dir);

    if (info.base === ".DS_Store") {
      return;
    }

    if (info.ext.toLocaleLowerCase() === MD_EXT) {
      return;
    }

    // 直接干掉.开头的目录和文件 以及 测试文件
    if (
      dir.includes("/.") ||
      dir.includes("\\.") ||
      dir.includes("__tests__") ||
      dir.includes("/tests/") ||
      dir.includes("\\tests\\") ||
      dir.includes("/test-dts/") ||
      dir.includes("\\test-dts\\")
    ) {
      return;
    }

    const newFileName = info.base + ".vito" + MD_EXT;

    const newFilePath = path.resolve(path.dirname(dir), newFileName);

    console.log(dir);
    console.log(newFilePath);
    console.log("---");

    fs.writeFileSync(
      newFilePath,
      getMdContent({
        title: path.relative(codeDataDir, dir),
        path: `@/docs/Code/vue-next/${path.relative(codeDataDir, dir)}`,
      })
    );
  },
  false
);

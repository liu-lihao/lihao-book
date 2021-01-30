const fs = require('fs-extra')
const path = require('path')
const {
  getCatalog,
  orderCatalog,
  writeFile,
  getOnlyId,
  getHashSync,
} = require('./utils')
const { isBinary } = require('istextorbinary')
const TITLE_SYMBOL = '#title#'
const formatMdContent = str =>
  str.replace(/(\\| |_|\[|\]|\*)/g, $1 => '\\' + $1)

// 脚本 - 源码位置
const codeDir = path.resolve(__dirname, './data/vue-next')
// 脚本 - 文档输出位置
const outDir = path.resolve(__dirname, './data/md')
// 脚本 - 首页输出位置
const outHomeFileDir = path.resolve(__dirname, './data/README.md')
// md - 内容 - 引用代码的代码文件目录，只能用 @/docs/ 开头
const codeFileDir = '@/docs/Code/vue-next/vue-next'
// md - 首页 - 跳转目目录
const mdFileDir = '/Code/vue-next/md'
// md - 首页 - 大标题
const homeTitle = 'vue-next'

const filter = ({ path, isFile, base }) => {
  if (isFile && ['.DS_Store'].includes(base)) {
    return false
  }
  if (!isFile && ['node_modules', '.git'].includes(base)) {
    return false
  }
  return true
}

const createHome = content => {
  content = content.replace(TITLE_SYMBOL, formatMdContent(homeTitle))
  writeFile(outHomeFileDir, content)
}

const getMdContent = ({ title, path }) => {
  return `# ${formatMdContent(title)}

<<< ${path}
`
}

const createMd = item => {
  const filename = item.id + '.md'
  const fileDir = path.resolve(outDir, filename)
  if (item.ext === '.md') {
    fs.copyFileSync(item.path, fileDir)
    return
  }
  const content = getMdContent({
    title: item.relation,
    path: `${codeFileDir}/${item.relation}`,
  })
  writeFile(fileDir, content)
}

const run = () => {
  const catalog = getCatalog(codeDir, { filter })
  if (!catalog) {
    console.log('代码目录不存在 codeDir:', codeDir)
    return
  }
  let homeContent = `# ${TITLE_SYMBOL}\n\n`
  orderCatalog(catalog, (item, level) => {
    item.id = item.isFile ? getHashSync(item.path) : getOnlyId()
    item.isBinary = item.isFile ? isBinary(item.path) : false
    item.relation = path.relative(codeDir, item.path)
    if (item.isFile && !item.isBinary) {
      createMd(item)
    }
    if (level > 0) {
      const before = ''.padEnd((level - 1) * 2, ' ') + '- '
      let name = ''
      if (!item.isFile) {
        name = formatMdContent(item.relation)
      } else if (item.isBinary) {
        name = formatMdContent(item.base)
      } else {
        name = `[${formatMdContent(item.base)}](${mdFileDir}/${item.id}.html)`
      }
      const after = '\n'
      homeContent += before + name + after
    }
  })
  createHome(homeContent)
}

run()

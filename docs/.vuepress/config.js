const commonConfig = require('./commonConfig.js')

const isGithub = process.env.npm_lifecycle_event.includes('github')

console.log(
  isGithub ?
  '🚀 构建 Github 版本' :
  '🚀 构建 Gitee 版本'
)

module.exports = {
  ...commonConfig,
}

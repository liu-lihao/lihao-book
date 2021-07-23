
echo '开始执行部署 GitHub 命令'

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist \n"
cd ./docs/.vuepress/dist

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init \n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy_github'"
git commit -m 'deploy_github'

# 推送到 gh-pages 分支
echo "代码推送到 GitHub 的 gh-pages 分支，用于部署"
git push -f https://github.com/liu-lihao/lihao-book.git master:gh-pages

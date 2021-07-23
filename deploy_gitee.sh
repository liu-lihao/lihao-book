echo '开始执行部署 Gitee 命令'

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
echo "执行命令：commit -m 'deploy_gitee'"
git commit -m 'deploy_gitee'

# 推送到 gitee-pages 分支
echo "代码推送到 Gitee 的 gitee-pages 分支，用于部署"
git push -f https://gitee.com/liu-lihao/lihao-book.git master:gitee-pages


echo "打开 Gitee Pages 服务，手动更新服务"
echo '若浏览器没打开，请手动打开链接：https://gitee.com/liu-lihao/lihao-book/pages'

echo '开始执行部署 GitHub 命令'

# 提交源码
git add .

read -p "请输入 commit 内容（默认：常规更新）: " content  #提示用户输入数字
if [ ! $content ];then             #判断用户是否输入，如果未输入则打印error
  echo "默认： 常规更新"
  git commit -m "常规更新"

else
  echo "刚刚的输入： $content"
  git commit -m "$content"
fi

git push origin dev
git pull origin dev


# 生成静态文件
echo '执行命令：vuepress build docs'
vuepress build docs

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist \n"
cd ./docs/.vuepress/dist

# 发布到自定义域名，没有域名直接略过
# echo "把liu-lihao.cn域名放到CNAME文件中"
# echo 'liu-lihao.cn' > CNAME

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init\n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git dev

# 如果发布到 https://<USERNAME>.github.io/<REPO>
echo "执行命令：git push -f https://github.com/liu-lihao/lihao-book.git master:gh-pages"
git push -f https://github.com/liu-lihao/lihao-book.git master:gh-pages

# 返回到上一次的工作目录
echo "回到刚才工作目录"
cd -

echo "提交到 Gitee"
bash deploy_gitee.sh
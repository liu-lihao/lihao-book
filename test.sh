read -p "enter a number: " content  #提示用户输入数字
if [ ! $content ];then             #判断用户是否输入，如果未输入则打印error
  echo "Error"
else
  echo "$content 刚刚的输入"
fi

echo "最后一行"

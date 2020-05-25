# vue-cli

## vue-cli3/4 + axios 实现跨域

```js
//新建vue.config.js
module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ifi.bmece.com/api/stadium',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

```js
//引入并配置axios
import Axios from "axios"
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/api";
```

```js
//使用
const url = this.HOST + "/getStadiumList"
this.$axios.get(url, {
                params: {
                    pageNum: 2,
                    pageSize: 3,
                    serverId:1
                }
            })
            .then(res => {
                console.log('跨域',res);
            })
            .catch(error => {
                console.log('跨域',error);
            });
```

# axios

axios get请求支持数组如: `{ item: [1, 2] } => ?item=1&item=2`

```js
import { stringify } from 'qs';

// 请求拦截
if (config.method.toLocaleLowerCase() === 'get') {
  config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' });
}
```

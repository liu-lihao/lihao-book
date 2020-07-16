# 手写 `Promise`

`Promise` 用起来很舒服。但是怎么实现的呢？

下面渐进式的逐步揭开 `Promise` 的真面目~

## 状态

`Promise` 的状态一开始是 `pending`，**才能**执行 `resolve` / `rejected`，相应的状态就变更为 `resolved` / `rejected`。

```js
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
```



## 简单 同步版

实现：

```js
function MyPromise(fn) {
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  const resolve = (value) => {
    if (this.status === PENDING) {
      this.status = RESOLVED;
      this.value = value;
    }
  }
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
    }
  }
  try {
    fn(resolve, reject);
  } catch(err) {
    reject(err);
  }
}

MyPromise.prototype.then = function(onResolve, onReject) {
  if (this.status === RESOLVED) {
    onResolve(this.value);
  } else {
    onReject(this.reason);
  }
}
```

例子：

```js
// 只能同步执行，不能异步执行 ok/no
new MyPromise((ok, no) => {
  no(7 + 7);
}).then(res => console.log('res',res), err => console.log('err', err));
```

## 中等 异步版

实现：

```js
function MyPromise(fn) {
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.resolveFn = null;
  this.rejectFn = null;
  const resolve = (value) => {
    if (this.status === PENDING) {
      this.status = RESOLVED;
      this.value = value;
      if (this.resolveFn) {
        this.resolveFn(this.value);
      }
    }
  }
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      if (this.rejectFn) {
        this.rejectFn(this.reason);
      }
    }
  }
  try {
    fn(resolve, reject);
  } catch(err) {
    reject(err);
  }
}

MyPromise.prototype.then = function(onResolve, onReject) {
  setTimeout(() => {
    if (this.status === PENDING) {
      this.resolveFn = onResolve;
      this.rejectFn = onReject;
    } else if (this.status === RESOLVED) {
      onResolve(this.value);
    } else {
      onReject(this.reason);
    }
  }, 0);
}
```

例子：

```js
const p1 = new MyPromise((ok, no) => {
  setTimeout(() => {
    ok(6 + 6)
  }, 1000);
})
p1.then(res => console.log('res',res), err => console.log('err', err));

// 

// 可以异步了，但是还不能链式执行.then
```

## 高级 链式 `.then`

实现：

```js
function MyPromise(fn) {
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.resolveFn = null;
  this.rejectFn = null;
  const resolve = (value) => {
    if (this.status === PENDING) {
      this.status = RESOLVED;
      this.value = value;
      if (this.resolveFn) {
        this.resolveFn(this.value);
      }
    }
  }
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      if (this.rejectFn) {
        this.rejectFn(this.reason);
      }
    }
  }
  try {
    fn(resolve, reject);
  } catch(err) {
    reject(err);
  }
}

MyPromise.prototype.resolvePromise = function(data , resolve, reject) {
  // 先只处理 return promise 的情况
  if (data instanceof MyPromise) {
    data.then(val => {
      resolve(val);
    }, reject)
  } else {
    // 暂不处理 data.then 的情况
    resolve(data);
  }
}

MyPromise.prototype.then = function(onResolve, onReject) {
  return new MyPromise((ok, no) => {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.resolveFn = (value) => {
          const data = onResolve(value);
          this.resolvePromise(data, ok, no);
        };
        this.rejectFn = (reason) => {
          // 简单版：直接阻断后续流程
          if (onReject) {
            onReject(reason);
          }
        }
      } else if (this.status === RESOLVED) {
        const data = onResolve(this.value);
        this.resolvePromise(data, ok, no);
      } else {
        // 简单版：直接阻断后续流程
        if (onReject) {
          onReject(this.reason);
        }
      }
    }, 0);
  })
}
```

例子：

```js
const p1 = new MyPromise((ok, no) => {
  setTimeout(() => {
    ok(6 + 6)
  }, 1000);
})
const p2 = new MyPromise((ok, no) => {
  setTimeout(() => {
    no(7 + 7) // 触发2的err，完全阻断3
  }, 2000);
})
const p3 = new MyPromise((ok, no) => {
  setTimeout(() => {
    ok(8+ 8)
  }, 3000);
})

p1.then(res => {
  console.log('1', res);
  return p2;
}).then(res => {
  console.log('2', res);
  return p3
}, (err) => {
  console.log('2 err', err);
}).then(res => {
  console.log('3', res);
}, (err) => {
  console.log('3 err', err);
});

// 1 12
// 2 err 14

// 常规使用已经可以了。
```

## 完美

需要处理 `catch` 、 `all` 、 `race` 、 `allSettled` 、`resolve` 、 `reject`。

详见Google ~


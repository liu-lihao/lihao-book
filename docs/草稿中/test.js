const _ = require('./lodash.min.js')

function Test(fn) {
    this.fn = fn;
    this.num = 0;
    this.payload = null;
    this.res = null;
    this.expectValue = null;
    this.isEqual = null;

    // 统计相关
    this.success = 0;
    this.fail = 0;
    this.task = null;

    return this;
}

Test.prototype.count = 0;

Test.prototype.run = function (...args) {
    this.num += 1;
    this.payload = args;
    this.res = this.fn(...args);
    return this
}

Test.prototype.export = function () {
    if (this.isEqual) {
        this.success += 1;
    } else {
        this.fail -= 1;
    }
    clearTimeout(this.task);
    this.task = setTimeout(() => {
        console.log(
            `测试通过率：${this.success}/${this.num}  ${(this.success * 100/this.num).toFixed(2) - 0}%`
        );
    }, 3000);
    console.log(
`${this.isEqual ? '√' : '×'} 测试用例 ${_.padStart(this.num + '', 2, '0')}：${this.isEqual ? '通过' : '失败'}
    输入：${JSON.stringify(this.payload).replace(/^\[/, '').replace(/\]$/, '')}
    输出：${JSON.stringify(this.res)}
    期望：${JSON.stringify(this.expectValue).replace(/^\[/, '').replace(/\]$/, '')}
`
    );
}

Test.prototype.expect = function (...args) {
    this.expectValue = args;
    this.isEqual = _.isEqual([this.res], args);
    this.export(); // 输出报告
    return this
}

module.exports = Test;

// const add = (a, b) => [{...a, ...b}];

// const testAdd = new Test(add);

// testAdd.run({a: 1}, {b: 2}).expect([{a: 1, b: 2}]);
// testAdd.run({a: 2}, {a: 3}).expect([{a: 3}]);
const Test = require('./test');

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 反向DP，因为正向的话 * 号若代表多个会导致 p 变长，指针不太容易控制。
    // 比如：【aab, c*a*b】，p 的指针遇到下一个是 * 号时，要跳跃至 p = j + 1，此时该值还没得出。
    // 反向的话，p遇到 j + 1 是 * ，则是回退（因为反向是从大到小，该值已得出）。


    // 创建dp，因为但 s 全部符合（索引不能是最后一个字符，要包括空的情况），即指针将会指向 s.length 时，才会得出 true。
    const dp = new Array(s.length + 1).fill('').map(() => []);
    
    // 同样，p 也要全部符合，所以，下方的边界值是 dp[s.length][p.length] = true;
    dp[s.length][p.length] = true;

    // 对全部s + 空字符
    for(let i = s.length; i >= 0 ; i -= 1) {
        for(let j = p.length - 1; j >= 0; j -= 1) {
            const equal = isEqual(s, i, p[j]);

            if (p[j + 1] === '*' && j < p.length - 1) {
                dp[i][j] = (equal && dp[i + 1][j]) || dp[i][j + 2];
            } else {
                dp[i][j] = equal && dp[i + 1][j + 1]
            }
        }
    }

    console.log(dp);
    return !!dp[0][0]
};

var isMatch = function(s, p) {
    const dp = new Array(s.length).fill('').map(() => []);
    
    // 边界值
    if (isEqual(s, s.length - 1, p, p.length - 1)) {
        // 最后直接匹配
        dp[s.length - 1][p.length - 1] = true;
    } else {
        dp[s.length - 1][p.length - 1] = false;
    }

    for(let i = s.length - 1; i >= 0 ; i -= 1) {
        for(let j = p.length - 1; j >= 0; j -= 1) {
            const equal = isEqual(s, i, p, j);

            if (j < p.length - 1 && p[j + 1] === '*') {
                dp[i][j] = (equal && dp[i + 1][j]) || dp[i][j + 2];
            } else {
                dp[i][j] = equal && dp[i + 1][j + 1]
            }
        }
    }

    return !!dp[0][0]
};

// function isEqual(s, i, pItem) {
//     return i < s.length && (s[i] === pItem || pItem === '.')
// }

function isEqual(s, i, p, j) {
    return s[i] === p[j] || p[j] === '.'
}


// test
const testIsMath = new Test(isMatch);

// testIsMath.run('aa', 'a').expect(false);
testIsMath.run('aa', 'a*').expect(true);
// testIsMath.run('ab', '.*').expect(true);
// testIsMath.run('aab', 'c*a*b').expect(true);
// testIsMath.run('mississippi', 'mis*is*p*.').expect(false);
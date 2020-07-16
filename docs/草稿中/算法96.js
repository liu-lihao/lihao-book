/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const res = [0, 1, 2, 5];
    const getCount = (num) => {
        if (num < res.length) {
            return res[num]
        }
        let count = 0;
        for(let i = 1; i <= Math.floor(num / 2); i += 1) {
            let leftNum = i - 1;
            let rightNum = num - i;
            if (leftNum === 1 || leftNum === 0) {
                count += getCount(rightNum);
            } else if (rightNum === 1 || rightNum === 0) {
                count += getCount(leftNum);
            } else {
                count += getCount(leftNum) * getCount(rightNum)
            }
        }
        if (num % 2) {
            // 奇数
            count += count + getCount(Math.ceil(num / 2));
        } else {
            count *= 2;
        }
        res[num] = count;
        return count;
    }
    return getCount(n);
};


// console.log(numTrees(4));
// console.log(numTrees(5));
// console.log(numTrees(6));
console.log(numTrees(7));
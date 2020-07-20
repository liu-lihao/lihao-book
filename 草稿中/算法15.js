const Test = require('./test');

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let zeroNum = 0;

    let n = nums.filter(item => {
        if (!item) {
            zeroNum +=1;
            return false;
        }
        return true;
    });

    let start = 1;

    const res = [];

    if(zeroNum.length >= 3) {
        res.push([0,0,0])
    }

    if(zeroNum.length) {
        n.push(0);
    }

    n.sort((a,b) => a - b);

    while(start < n.length - 1) {
        if (n[0] + n[start] + n[start + 1] > 0) {
            break;
        }
        let end = n.length - 1;
        for(let i = 0; i < start; i+= 1) {
            const { answer, endIndex } = searchTarget(n, start + 1, end, 0 - n[i] - n[start]);
            if (typeof answer === 'number') {
                const lastRes = res[res.length - 1];
                const willPush = [
                    n[i],
                    n[start],
                    n[answer]
                ];
                res.push(willPush);
            }
            if (endIndex) {
                end = endIndex;
            }
        }
        start += 1;
    }
    
    return [...new Set(res.map(item => item.join(',')))].map(item => {
        return item.split(',').map(numStr => Number(numStr))
    })
};

function searchTarget(arr, beginIndex, endIndex, target) {
    let start = beginIndex;
    let end = endIndex;

    while(start + 1 < end) {
        const center = Math.floor((end - start) / 2 + start);
        if (arr[center] === target) {
            return { answer: center };
        }
        if (arr[center] > target) {
            end = center;
        } else {
            start = center;
        }
    }

    if(arr[start] === target) {
        return { answer: start };
    }
    if(arr[end] === target) {
        return { answer: end };
    }
    return {
        endIndex: start + 1
    };
}

const test = new Test(threeSum);

// test.run([-1,0,1,2,-1, -1,-4]).expect([
//     [-1,-1,2],
//     [-1,0,1]
// ]);
// test.run([-1, 0, 1, 2, -1, -4]).expect([
//     [-1, -1, 2],
//     [-1, 0, 1]
// ]);


// test.run([-1, 0, 1]).expect([
//     [-1, 0, 1]
// ]);

// test.run([1, 0, -1]).expect([
//     [-1, 0, 1]
// ]);

// test.run([1, 1, 0, -1]).expect([
//     [-1, 0, 1]
// ]);

// test.run([1, 1, 0, -1, -1]).expect([
//     [-1, 0, 1]
// ]);

// test.run([-2,0,1,1,2]).expect([
//     [-2,0,2],
//     [-2,1,1]
// ]);

// test.run([3,0,-2,-1,1,2]).expect([
//     [-2,-1,3],
//     [-2,0,2],
//     [-1,0,1]
// ]);

test.run([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]).expect([
    [-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]
])
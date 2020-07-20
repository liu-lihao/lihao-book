const Test = require('./test');

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 二分法加递增
    let small = 0;
    let end = numbers.length - 1;

    while(small < numbers.length) {
        const { answer, endIndex } = searchTarget(numbers, small + 1, end, target - numbers[small]);
        if (answer) {
            return [small + 1, answer + 1]
        }
        end = endIndex;
        small += 1;
    }
};


function searchTarget(arr, beginIndex, endIndex,target) {
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


const test = new Test(twoSum);

test.run([2,2,11,15], 26).expect([3, 4]);
test.run([2,2,6,11,15], 26).expect([4, 5]);
test.run([2,7,11,15], 9).expect([1, 2]);
test.run([2,2,11,15], 4).expect([1, 2]);
test.run([1,2,2,11,15], 4).expect([2, 3]);
test.run([2,3,4], 6).expect([1, 3]);

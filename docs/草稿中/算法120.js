var minimumTotal = function(triangle) {
    if(!triangle.length) {
        return 0;
    }
    if(triangle.length === 1) {
        return Math.min(triangle[0]);
    }

    // const tempRes = new Array(triangle.length).fill('').map(()=> []);
    const oddRes = [];
    const evenRes = [];
    // i 纵向
    // j 横向
    evenRes[0] = triangle[0][0];

    for(let i = 1; i < triangle.length; i ++ ) {
        let cacheRes = null;
        let oldRes = null;
        if (i % 2) {
            // 奇数
            cacheRes = oddRes;
            oldRes = evenRes;
        } else {
            cacheRes = evenRes;
            oldRes = oddRes;
        }
        cacheRes.splice(0, cacheRes.length);

        cacheRes[0] = oldRes[0] + triangle[i][0];
        for(let j = 1; j < i; j ++ ) {
            cacheRes[j] = Math.min(oldRes[j - 1], oldRes[j]) + triangle[i][j];
        }
        cacheRes[i] = oldRes[i - 1] + triangle[i][i];
    }
    
    return Math.min(...(triangle.length % 2 ? evenRes : oddRes));
};

var minimumTotal = function(triangle) {
    if(!triangle.length) {
        return 0;
    }
    if(triangle.length === 1) {
        return triangle[0][0];
    }

    const tempRes = [...triangle[triangle.length - 1]];

    for(let i = triangle.length - 2; i >= 0; i -- ) {
        for(let j = 0; j <= i; j ++) {
            console.log(`i=${i},j=${j}`);
            tempRes[j] = Math.min(tempRes[j], tempRes[j + 1]) + triangle[i][j];
        }
        tempRes.pop()
    }
    
    return tempRes[0];
};


const res = minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]]);

console.log(res);
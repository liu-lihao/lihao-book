const binarySearch = (arr: number[], target: number) => {
  if (!arr.length || target < arr[0] || target > arr[arr.length - 1]) {
    return -1
  }

  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}


const binarySearch2 = (arr: number[], target: number) => {
  if (!arr || !arr.length) {
    return -1
  }

  let l = 0
  let r = arr.length - 1

  while(l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  console.log(l, r)
  return -1
}

console.log('单独')
binarySearch2([5], 5)

console.log('前面加数字')
binarySearch2([4,5], 5)
binarySearch2([2,4,5], 5)

console.log('后面加数字')
binarySearch2([5,6], 5)
binarySearch2([5,6,7], 5)

console.log('前后多')
binarySearch2([4,5,6], 5)
binarySearch2([3,4,5,6,7], 5)
binarySearch2([2,3,4,5,6,7,8], 5)

console.log('前1后多')
binarySearch2([4,5,6,7], 5)
binarySearch2([4,5,6,7,8], 5)

console.log('后1前多')
binarySearch2([3,4,5,6], 5)
binarySearch2([2,3,4,5,6], 5)




console.log('4.5 单独')
binarySearch2([5], 4.5)

console.log('4.5 前面加数字')
binarySearch2([4,5], 4.5)
binarySearch2([2,4,5], 4.5)

console.log('4.5 后面加数字')
binarySearch2([5,6], 4.5)
binarySearch2([5,6,7], 4.5)

console.log('4.5 前后多')
binarySearch2([4,5,6], 4.5)
binarySearch2([3,4,5,6,7], 4.5)
binarySearch2([2,3,4,5,6,7,8], 4.5)

console.log('4.5 前1后多')
binarySearch2([4,5,6,7], 4.5)
binarySearch2([4,5,6,7,8], 4.5)

console.log('4.5 后1前多')
binarySearch2([3,4,5,6], 4.5)
binarySearch2([2,3,4,5,6], 4.5)



console.log('5.5 单独')
binarySearch2([5], 5.5)

console.log('5.5 前面加数字')
binarySearch2([4,5], 5.5)
binarySearch2([2,4,5], 5.5)

console.log('5.5 后面加数字')
binarySearch2([5,6], 5.5)
binarySearch2([5,6,7], 5.5)

console.log('5.5 前后多')
binarySearch2([4,5,6], 5.5)
binarySearch2([3,4,5,6,7], 5.5)
binarySearch2([2,3,4,5,6,7,8], 5.5)

console.log('5.5 前1后多')
binarySearch2([4,5,6,7], 5.5)
binarySearch2([4,5,6,7,8], 5.5)

console.log('5.5 后1前多')
binarySearch2([3,4,5,6], 5.5)
binarySearch2([2,3,4,5,6], 5.5)

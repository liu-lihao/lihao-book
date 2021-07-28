const binarySearch = (arr: number[], target: number) => {
  if (!arr.length || target < arr[0] || target > arr[arr.length - 1]) {
    return -1
  }

  let r = 0
  let l = arr.length - 1
  while (r <= l) {
    const mid = Math.floor((r + l) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      l = mid - 1
    } else {
      r = mid + 1
    }
  }

  return -1
}

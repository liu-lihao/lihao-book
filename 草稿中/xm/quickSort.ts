const quickSort = <T>(
  arr: T[],
  cmp = (before: T, after: T) => before <= after,
  { rangeStart = 0, rangeEnd = arr.length - 1 } = {}
) => {
  if (
    rangeStart >= rangeEnd ||
    rangeStart < 0 ||
    rangeEnd > arr.length - 1 ||
    arr.length <= 1
  ) {
    return arr
  }

  let start = rangeStart
  let end = rangeEnd
  const t = arr[start]

  while (start < end) {
    while (start < end && cmp(t, arr[end])) {
      end--
    }
    if (start < end) {
      arr[start] = arr[end]
    }
    while (start < end && cmp(arr[start], t)) {
      start++
    }
    if (start < end) {
      arr[end] = arr[start]
    }
  }

  arr[start] = t
  quickSort(arr, cmp, { rangeStart, rangeEnd: start - 1 })
  quickSort(arr, cmp, { rangeEnd, rangeStart: start + 1 })
  return arr
}

console.log(...quickSort([5, 4, 3, 2, 1]))
console.log(...quickSort([5, 2, 3, 6, 1]))
console.log(...quickSort([]))
console.log(...quickSort([1]))
console.log(...quickSort([1, 2, 3]))
console.log(...quickSort([8, 9, 10, 40, 2, 3, 40, 40, 40]))
console.log(...quickSort([1, 1, 1, 1, 1]))
console.log(...quickSort([8, 9, 9, 8]))
console.log(...quickSort([8, 9, 9, 9, 8]))
console.log(...quickSort([8, 8, 9, 8, 8]))
console.log(...quickSort([20, 10, 6, 6, 7, 8, 20, 16]))

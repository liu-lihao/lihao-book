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

// console.log(...quickSort([5, 4, 3, 2, 1]))
// console.log(...quickSort([5, 2, 3, 6, 1]))
// console.log(...quickSort([]))
// console.log(...quickSort([1]))
// console.log(...quickSort([1, 2, 3]))
// console.log(...quickSort([8, 9, 10, 40, 2, 3, 40, 40, 40]))
// console.log(...quickSort([1, 1, 1, 1, 1]))
// console.log(...quickSort([8, 9, 9, 8]))
// console.log(...quickSort([8, 9, 9, 9, 8]))
// console.log(...quickSort([8, 8, 9, 8, 8]))
// console.log(...quickSort([20, 10, 6, 6, 7, 8, 20, 16]))


const quickSort2 = <T>(
  arr: T[],
  cmp = (beforeV: T, afterV: T) => beforeV <= afterV,
  range = { s: 0, e: arr.length - 1  }
) => {
  if (range?.s < 0 || range?.e > arr.length - 1 || range?.s >= range?.e || arr.length <= 1) {
    return arr
  }

  const t = arr[range.s]

  let s = range?.s
  let e = range?.e

  while (s < e) {
    while(s < e && cmp(t, arr[e])) {
      e--
    }
    if (s < e) {
      arr[s] = arr[e]
    }

    while(s < e && cmp(arr[s], t)) {
      s++
    }
    if (s < e) {
      arr[e] = arr[s]
    }
  }

  arr[s] = t
  quickSort2(arr, cmp, { s: range.s, e: s - 1 })
  quickSort2(arr, cmp, { s: s + 1 , e: range.e })
  return arr
}


console.log(...quickSort2([5, 4, 3, 2, 1]))
console.log(...quickSort2([5, 2, 3, 6, 1]))
console.log(...quickSort2([]))
console.log(...quickSort2([1]))
console.log(...quickSort2([1, 2, 3]))
console.log(...quickSort2([8, 9, 10, 40, 2, 3, 40, 40, 40]))
console.log(...quickSort2([1, 1, 1, 1, 1]))
console.log(...quickSort2([8, 9, 9, 8]))
console.log(...quickSort2([8, 9, 9, 9, 8]))
console.log(...quickSort2([8, 8, 9, 8, 8]))
console.log(...quickSort2([20, 10, 6, 6, 7, 8, 20, 16]))

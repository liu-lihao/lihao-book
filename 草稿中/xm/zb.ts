const quickSort = <T>(
  arr: T[],
  cmp = (beforeV: T, afterV: T) => beforeV <= afterV,
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

  let s = rangeStart
  let e = rangeEnd
  const t = arr[s]

  while(s < e) {
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
  quickSort(arr, cmp, { rangeStart, rangeEnd: s - 1 })
  quickSort(arr, cmp, { rangeStart: s + 1, rangeEnd })
  return arr
}

const binarySearch = (arr: number[], target: number) => {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}

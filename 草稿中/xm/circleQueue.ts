const circleQueue = <T>(max = 10) => {
  const list: T[] = []

  let start = 0
  let len = 0

  const last = () => (start + len - 1 + max) % max
  const next = (i: number) => (i + 1) % max
  const prev = (i: number) => (i - 1 + max) % max

  const isFull = () => len === max
  const isEmpty = () => !len
  const getLength = () => len

  const push = (v: T) => {
    if (isFull()) {
      // 满了后 不操作
      // return false
      // 满了后 覆盖开头
      shift()
    }
    const willLast = next(last())
    list[willLast] = v
    len++
    return willLast
  }
  const shift = () => {
    if (isEmpty()) {
      return false
    }
    const v = list[start]
    list[start] = void 0 // 避免泄露
    start = next(start)
    len--
    return v
  }
  const pop = () => {
    if (isEmpty()) {
      return false
    }
    const v = list[last()]
    list[last()] = void 0 // 避免泄露
    len--
    return v
  }
  const unshift = (v: T) => {
    if (isFull()) {
      // 满了后 不操作
      // return false
      // 满了后 覆盖屁股
      pop()
    }
    start = prev(start)
    len++
    list[start] = v
    return start
  }

  return {
    push,
    unshift,
    pop,
    shift,
    getLength,
    isEmpty,
    isFull,
    getList: () => list,
    print: () =>
      console.log(
        [...list].map(n => (typeof n === 'number' ? n : ' ')).join(', ')
      ),
    forEach: fn => {
      for (let i = 0; i < getLength(); i++) {
        const index = (start + i) % max
        fn(list[index], index, i)
      }
    },
  }
}

const queue = circleQueue(10)

// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.print()

// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.print()

// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.print()

// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.print()

// queue.pop()
// queue.pop()
// queue.pop()
// queue.print()

// queue.shift()
// queue.shift()
// queue.shift()
// queue.print()

queue.unshift(1)
queue.unshift(2)
queue.unshift(3)
queue.print()

queue.push(1)
queue.push(2)
queue.push(3)
queue.print()

queue.forEach((n, i, c) => {
  console.log(n, i, c)
})

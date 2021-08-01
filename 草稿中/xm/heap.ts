const Heap = <T>(cmp = (upV: T, downV: T) => upV >= downV) => {
  const list = []

  const isEmpty = () => !list.length
  const getLength = () => list.length

  const getParentIndex = (i: number) => Math.floor((i - 1) / 2)
  const getChildIndex = (i: number) => i * 2 + 1
  const inList = (i: number) => i >= 0 && i <= getLength() - 1

  const sink = (i: number) => {
    const t = list[i]
    while(inList(getChildIndex(i))) {
      let child = getChildIndex(i)
      if (inList(child + 1) && cmp(list[child + 1], list[child])) {
        child++
      }
      if (cmp(list[child], t)) {
        list[i] = list[child]
        list[child] = t
        i = child
      } else {
        break;
      }
    }
  }
  const swim = (i: number) => {
    const t = list[i]
    while(inList(getParentIndex(i))) {
      const p = getParentIndex(i)
      if (cmp(t, list[p])) {
        list[i] = list[p]
        list[p] = t
        i = p
      } else {
        break;
      }
    }
  }

  const push = (v: T) => {
    list.push(v)
    swim(getLength() - 1)
  }
  const pop = () => {
    if (isEmpty()) {
      return false
    }
    const v = list[0]
    list[0] = list.pop()
    sink(0)
    return v
  }

  const print = () => {
    const res = []
    let level = 0
    let count = 1
    list.forEach(n => {
      if (!count) {
        level++
        count = 2 ** level
      }
      res[level] = res[level] || []
      res[level].push(n)
      count--
    })
    return res.reduce((str, n) => {
      return str + n.join(',') + '\n'
    }, '')
  }

  return {
    getLength,
    push,
    pop,
    print,
  }
}


const maxHeap = Heap()

maxHeap.push(2)
maxHeap.push(6)
maxHeap.push(9)
maxHeap.push(1)
maxHeap.push(10)
maxHeap.push(3)
maxHeap.push(12)

console.log(maxHeap.print())


maxHeap.pop()
console.log(maxHeap.print())
maxHeap.pop()
console.log(maxHeap.print())
maxHeap.pop()
console.log(maxHeap.print())
maxHeap.pop()
console.log(maxHeap.print())
maxHeap.push(12)
console.log(maxHeap.print())

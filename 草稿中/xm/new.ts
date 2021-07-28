const myNew = (fn, ...args) => {
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  return res && typeof res === 'object' ? res : obj
}

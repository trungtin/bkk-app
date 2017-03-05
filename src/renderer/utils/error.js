export const reduxError = origAction => {
  const e = new Error()
  for (let k in origAction) {
    if (origAction.hasOwnProperty(k)) {
      Object.defineProperty(e, k, {
        value: origAction[k],
        enumerable: true,
        writable: true,
        configurable: true
      })
    }
  }

  return e
}

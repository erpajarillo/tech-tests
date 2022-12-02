export const contains = (store, product) => {
  if (typeof store !== 'object' || Array.isArray(store)) throw new Error()
  if (typeof product !== 'string') throw new Error()

  const isObjectFound = isObjectInStore(store, product)
  return isObjectFound ?? false
}

const isObjectInStore = (store, product) => {
  let found = false

  Object.values(store).forEach((value) => {
    if (typeof value === 'object') {
      const foundRec = isObjectInStore(value, product)
      if (foundRec) found = true
    }
    if (value === product) found = true
  })

  if (found) return found
}

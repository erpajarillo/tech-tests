export const groupBy = (collection, it) => {
  if (!Array.isArray(collection)) throw new Error()
  if (typeof it !== 'string' && typeof it !== 'function') throw new Error()

  const result = {}
  collection.forEach(e => {
    const key = (typeof it === 'function') ? it(e) : e[it]
    result[key] ??= []
    result[key].push(e)
  })

  return result
}

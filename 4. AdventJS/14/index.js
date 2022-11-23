export const missingReindeer = (ids) => {
  if (!Array.isArray(ids)) throw new Error()
  if (ids.filter(i => i > 100 || i < 0).length > 0) throw new Error()
  if (ids.length === 0) return 0

  const idsSorted = ids.sort((a, b) => a - b)
  let idNotFound = Math.max(...idsSorted) + 1
  idsSorted.every((id, index) => {
    if (id !== index) {
      idNotFound = index
      return false
    }
    return true
  })

  return idNotFound
}

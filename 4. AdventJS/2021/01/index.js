export const countSheeps = (sheeps) => {
  let sheepsFiltered = []
  if (!Array.isArray(sheeps)) throw new Error()

  sheeps.forEach(sheep => {
    if (!('name' in sheep && 'color' in sheep)) throw new Error()
  })

  sheepsFiltered = sheeps.filter(s => s.color === 'rojo')

  const filterASheeps = /a/gi
  const filterNSheeps = /n/gi
  sheepsFiltered = sheepsFiltered.filter(
    s => s.name.match(filterASheeps) &&
    s.name.match(filterNSheeps)
  )

  return sheepsFiltered
}

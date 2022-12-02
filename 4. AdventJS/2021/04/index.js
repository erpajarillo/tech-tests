export const createXmasTree = (height) => {
  if (typeof height !== 'number') throw new Error()
  if (height < 0 || height > 100) throw new Error()

  let xmasTree = ''
  const weight = height * 2 - 1
  let asteriks = 1
  while (asteriks <= weight) {
    const underscores = weight - asteriks
    const sideUnderscores = underscores / 2

    xmasTree +=
        ('_').repeat(sideUnderscores) +
        ('*').repeat(asteriks) +
        ('_').repeat(sideUnderscores) +
        '\n'

    asteriks += 2
  }

  const logUnderscores = ('_').repeat(asteriks / 2 - 1)
  xmasTree +=
      logUnderscores + '#' + logUnderscores + '\n' +
      logUnderscores + '#' + logUnderscores

  return xmasTree
}

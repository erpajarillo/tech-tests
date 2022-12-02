import { describe, it, expect } from 'vitest'
import { createXmasTree } from '.'

describe('Create Xmas Tree', () => {
  it('It should be a function', () => {
    expect(createXmasTree).toBeTypeOf('function')
  })

  it('It should receive a number', () => {
    expect(() => createXmasTree()).toThrow()
    expect(() => createXmasTree('one')).toThrow()
    expect(() => createXmasTree(undefined)).toThrow()
  })

  it('It should receive a number between 0 and 100', () => {
    expect(() => createXmasTree(-Infinity)).toThrow()
    expect(() => createXmasTree(-1)).toThrow()
    expect(() => createXmasTree(101)).toThrow()
    expect(() => createXmasTree(Infinity)).toThrow()
  })

  it('It should return a string', () => {
    expect(createXmasTree(1)).toBeTypeOf('string')
    expect(createXmasTree(50)).toBeTypeOf('string')
    expect(createXmasTree(100)).toBeTypeOf('string')
  })

  it('It should return \\n', () => {
    expect(createXmasTree(50)).toContain('\n')
  })

  it('It should return \\n for each height level', () => {
    const height = 3
    const xmasTree = createXmasTree(height)
    const xmasTreeJumps = xmasTree.split('\n').length - 1 - 1

    expect(xmasTreeJumps).toBe(height)
  })

  it('It should return a log with 2 # symbols', () => {
    const xmasTree = createXmasTree(3)
    const xmasTreeLog = xmasTree.split('#').length - 1

    expect(xmasTreeLog).toBe(2)
  })

  it('It should return x asteriks', () => {
    const height = 100
    const asteriks = calculateAsteriksNumber(height)
    const xmasTree = createXmasTree(height)
    const asteriksAmount = xmasTree.split('*').length - 1

    expect(asteriksAmount).toBe(asteriks)
  })

  it('It should 25 asteriks with 5 height', () => {
    const xmasTree = createXmasTree(5)
    const asteriksAmount = xmasTree.split('*').length - 1

    expect(asteriksAmount).toBe(25)
  })

  it('It should 9 asteriks with 3 height', () => {
    const xmasTree = createXmasTree(3)
    const asteriksAmount = xmasTree.split('*').length - 1

    expect(asteriksAmount).toBe(9)
  })
})

const calculateAsteriksNumber = (height) => {
  let totalAsteriks = 0
  while (height > 0) {
    totalAsteriks += (height - 1) * 2 + 1
    height--
  }

  return totalAsteriks
}

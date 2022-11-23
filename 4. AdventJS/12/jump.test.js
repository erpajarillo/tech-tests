import { describe, it, expect } from 'vitest'

const obstaclesTest1 = [5, 3, 6, 7, 9] // 4
const obstaclesTest2 = [2, 4, 6, 8, 10] // 7
const obstaclesTest3 = [1, 2, 3, 5] // 4
const obstaclesTest4 = [3, 7, 5] // 2
const obstaclesTest5 = [9, 5, 1] // 2

const getMinJump = (obstacles) => {
  if (!Array.isArray(obstacles)) throw new Error()
  if (obstacles.length < 1 || obstacles.length > 10) throw new Error()
  obstacles.forEach(o => {
    if (typeof o !== 'number') throw new Error()
    if (o < 0 || o > 10) throw new Error()
  })

  const MAX_OBSTACLES_LENGTH = 10

  let minJump = 0
  for (let i = 0; i < MAX_OBSTACLES_LENGTH; i++) {
    const positionsToJump = Array.from({ length: 10 }, (_, pos) => pos * (i + 1))
    const isObstacleInAnyJump = obstacles.some(o => positionsToJump.indexOf(o) >= 0)

    if (!isObstacleInAnyJump) {
      minJump = i + 1
      break
    }
  }

  return minJump
}

describe('Get Min Jump', () => {
  it('It should be a function', () => {
    expect(getMinJump).toBeTypeOf('function')
  })

  it('It should receive an array of positive numbers (max 10 value) (max 10 elements)', () => {
    expect(() => getMinJump()).toThrow()
    expect(() => getMinJump([])).toThrow()
    expect(() => getMinJump([0, 'one', 'two', 3])).toThrow()
    expect(() => getMinJump(undefined)).toThrow()
    expect(() => getMinJump(null)).toThrow()
    expect(() => getMinJump([-1, -3])).toThrow()
    expect(() => getMinJump([-1, 2])).toThrow()
    expect(() => getMinJump([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toThrow()
    expect(() => getMinJump([11])).toThrow()
  })

  it('It should return a number', () => {
    expect(getMinJump(obstaclesTest1)).toBeTypeOf('number')
  })

  it('It should return 4 with the variable obstaclesTest1', () => {
    expect(getMinJump(obstaclesTest1)).toBe(4)
  })

  it('It should return 4 with the variable obstaclesTest2', () => {
    expect(getMinJump(obstaclesTest2)).toBe(7)
  })

  it('It should return 4 with the variable obstaclesTest3', () => {
    expect(getMinJump(obstaclesTest3)).toBe(4)
  })

  it('It should return 4 with the variable obstaclesTest4', () => {
    expect(getMinJump(obstaclesTest4)).toBe(2)
  })

  it('It should return 4 with the variable obstaclesTest5', () => {
    expect(getMinJump(obstaclesTest5)).toBe(2)
  })
})

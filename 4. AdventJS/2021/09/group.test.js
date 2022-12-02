import { describe, it, expect } from 'vitest'
import { groupBy } from '.'

const example1 = { p1: [6.1, 4.2, 6.3], p2: Math.floor }
const result1 = { 6: [6.1, 6.3], 4: [4.2] }

const example2 = { p1: ['one', 'two', 'three'], p2: 'length' }
const result2 = { 3: ['one', 'two'], 5: ['three'] }

const example3 = { p1: [1397639141184, 1363223700000], p2: timestamp => new Date(timestamp).getFullYear() }
const result3 = { 2013: [1363223700000], 2014: [1397639141184] }

const example4 = {
  p1: [
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 }
  ],
  p2: 'rating'
}
const result4 = {
  8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
  9: [{ title: 'Clean Code', rating: 9 }],
  10: [{ title: 'Aprendiendo Git', rating: 10 }]
}

describe('Group By', () => {
  it('It should a function', () => {
    expect(groupBy).toBeTypeOf('function')
  })

  it('It should receive an array and (function or string)', () => {
    expect(() => groupBy()).toThrow()
    expect(() => groupBy([], 12)).toThrow()
    expect(() => groupBy(123, Math.floor)).toThrow()
  })

  it('It should return an object', () => {
    const result = groupBy(example1.p1, example1.p2)
    const isArray = Array.isArray(result)

    expect(result).toBeTypeOf('object')
    expect(isArray).toBe(false)
  })

  it('It should retrieve the elements grouped by Math.floor()', () => {
    expect(groupBy(example1.p1, example1.p2)).toStrictEqual(result1)
  })

  it('It should retrieve the elements grouped by length property', () => {
    expect(groupBy(example2.p1, example2.p2)).toStrictEqual(result2)
  })

  it('It should retrieve the elements grouped by Date function', () => {
    expect(groupBy(example3.p1, example3.p2)).toStrictEqual(result3)
  })

  it('It should retrieve the elements grouped by property rating', () => {
    expect(groupBy(example4.p1, example4.p2)).toStrictEqual(result4)
  })
})

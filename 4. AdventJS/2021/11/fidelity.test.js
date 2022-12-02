import { describe, it, expect } from 'vitest'

const shouldBuyFidelity = (times) => {
  if (typeof times !== 'number' || times <= 0) throw new Error()
  const NORMAL_TICKET_PRICE = 12
  const FIDELITY_CARD_PRICE = 250
  const FIDELITY_DISCOUNT = 0.75

  const normalPrice = NORMAL_TICKET_PRICE * times

  let fidelityPrice = FIDELITY_CARD_PRICE
  let remainingTimes = times
  let index = 1
  while (remainingTimes > 0) {
    fidelityPrice += NORMAL_TICKET_PRICE * Math.pow(FIDELITY_DISCOUNT, index)
    index++
    remainingTimes--
  }
  const fidelityPriceRounded = Math.round(fidelityPrice * 100) / 100

  return fidelityPriceRounded < normalPrice
}

describe('Should Buy Fidelity', () => {
  it('It should be a function', () => {
    expect(shouldBuyFidelity).toBeTypeOf('function')
  })

  it('It should receive a number greater than 0', () => {
    expect(() => shouldBuyFidelity()).toThrow()
    expect(() => shouldBuyFidelity(0)).toThrow()
    expect(() => shouldBuyFidelity(-0.000001)).toThrow()
    expect(() => shouldBuyFidelity(-1)).toThrow()
    expect(() => shouldBuyFidelity(-Infinity)).toThrow()
  })

  it('It should return a boolean', () => {
    expect(shouldBuyFidelity(1)).toBeTypeOf('boolean')
  })

  it('It should return false if times is 1, 3 & 22', () => {
    expect(shouldBuyFidelity(1)).toBeFalsy()
    expect(shouldBuyFidelity(3)).toBeFalsy()
    expect(shouldBuyFidelity(22)).toBeFalsy()
  })

  it('It should return false if times is 23', () => {
    expect(shouldBuyFidelity(23)).toBeFalsy()
  })

  it('It should return true if times is 24', () => {
    expect(shouldBuyFidelity(24)).toBeTruthy()
  })

  it('It should return true if times is 100', () => {
    expect(shouldBuyFidelity(100)).toBeTruthy()
  })
})

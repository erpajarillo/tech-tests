const wrapping = (gifts) => {
  if (!Array.isArray(gifts)) throw new Error('gifts must be an array')
  if (gifts.some((gift) => typeof gift !== 'string')) throw new Error('gifts must be an array of strings')

  const wrappedGifts = gifts.map(gift => {
    const stars = '*'.repeat(gift.length + 2)
    const giftWrapped = `\n*${gift}*\n`
    
    return stars + giftWrapped + stars
  })

  return wrappedGifts
}

export default wrapping
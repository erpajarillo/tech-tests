export const daysToXmas = (date) => {
  if (!(date instanceof Date)) throw new Error()
  const xmasDate = new Date('Dec 25, 2021').valueOf()
  const askedDate = date.valueOf()

  const daysBetweenDates = (xmasDate - askedDate) / (1000 * 60 * 60 * 24)

  return Math.ceil(daysBetweenDates)
}

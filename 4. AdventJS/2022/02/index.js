const countHours = (year, holidays) => {
  if (typeof year !== 'number') throw new Error('year must be a number')
  if (!Array.isArray(holidays)) throw new Error('holidays must be an array')
  if (holidays.some((holiday) => typeof holiday !== 'string')) {
    throw new Error('holidays must be an array of strings')
  }

  const hours = holidays.reduce((hours, holiday) => {
    const [month, day] = holiday.split('/')
    const date = new Date(year, month - 1, day)
    if (![0, 6].includes(date.getDay())) hours += 2

    return hours
  }, 0)

  return hours
}

export default countHours

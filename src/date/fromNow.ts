import moment from 'moment-timezone'

interface Lookup {
  [key: string]: string,
}

const lookup: Lookup = {
  'a day ago': 'yesterday',
  'in a day': 'tomorrow',
}

/**
 * A better `fromNow` supporting 'yesterday' & 'tomorrow'
 */
export default (...args: Parameters<typeof moment>) => {
  const m = moment(...args)
  if (!m.isValid()) {
    return 'N/A'
  }

  const formatted = m.fromNow()
  return lookup[formatted] || formatted
}

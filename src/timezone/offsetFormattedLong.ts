import moment from 'moment-timezone'

import names from './names'

/**
 * GMT+00:00, GMT+01:00, GMT+04:30, GMT-11:00
 * @param {string} timezone
 */
export default (timezone: string) => {
  if (!names.includes(timezone)) {
    return null
  }

  const m = moment.tz(timezone)
  return `GMT${m.format('Z')}`
}

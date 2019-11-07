import moment from 'moment-timezone'
import { orderBy } from 'lodash'

import {
  names as timezoneNames,
  suggested as getSuggestedTimezone,
  offsetFormattedShort,
  offsetFormattedLong,
} from '../src/timezone'

const OFFSET_SHORT_RE = /^GMT([+−]\d{1,2}(:\d{2})?)?$/
const OFFSET_LONG_RE = /^GMT[+-]\d{2}:\d{2}$/

const rubbishTimezone = 'shit'

describe('Timezone utils', () => {
  it('Should have all the timezone names that moment does', () => {
    const sortedTimezoneNames = orderBy(timezoneNames)
    const sortedMomentTimezoneNames = orderBy(moment.tz.names())
    expect(sortedTimezoneNames).toEqual(sortedMomentTimezoneNames)
  })

  it('Should output correct suggested timezone', () => {
    const suggested = getSuggestedTimezone()
    expect(timezoneNames).toContain(suggested)
  })

  for (const tz of timezoneNames) {
    it(`Should output correct offset formatted short (${tz})`, () => {
      const result = offsetFormattedShort(tz)
      expect(result).toMatch(OFFSET_SHORT_RE)
      expect(result).not.toMatch(/\:00$/)
    })
  }

  it('Should out correct sign for formatted short', () => {
    const ny = offsetFormattedShort('America/New_York')!
    const moscow = offsetFormattedShort('Europe/Moscow')!
    const gmt = offsetFormattedShort('GMT')
    expect(ny[3]).toBe('−')
    expect(moscow[3]).toBe('+')
    expect(gmt).toBe('GMT')
  })

  for (const tz of timezoneNames) {
    it(`Should output correct offset formatted long (${tz})`, () => {
      const result = offsetFormattedLong(tz)
      expect(result).toMatch(OFFSET_LONG_RE)
    })
  }

  it('Should out correct sign for formatted long', () => {
    const ny = offsetFormattedLong('America/New_York')!
    const moscow = offsetFormattedLong('Europe/Moscow')!
    const gmt = offsetFormattedLong('GMT')
    expect(ny[3]).toBe('-')
    expect(moscow[3]).toBe('+')
    expect(gmt).toBe('GMT+00:00')
  })

  it('Should work correctly with rubbish data (offsetFormattedShort)', () => {
    const result = offsetFormattedShort(rubbishTimezone)
    expect(result).toMatchSnapshot()
  })

  it('Should work correctly with rubbish data (offsetFormattedLong)', () => {
    const result = offsetFormattedLong(rubbishTimezone)
    expect(result).toMatchSnapshot()
  })
})

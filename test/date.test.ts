import moment from 'moment-timezone'

import { fromNow } from '../src/date'

function getInputs() {
  const m = moment()
  const date = m.toDate()

  return {
    str: date.toISOString(),
    date,
    rubbish: 'rubbish shit',
    yesterday: m.clone().subtract(1, 'day').toDate(),
    twoDaysAgo: m.clone().subtract(2, 'day').toDate(),
    tomorrow: m.clone().add(1, 'day').toDate(),
    inTwoDays: m.clone().add(2, 'day').toDate(),
  }
}

describe('Date utils', () => {
  for (const [name, input] of Object.entries(getInputs())) {
    it(`Should fromNow ${name} correctly`, () => {
      const result = fromNow(input)
      expect(result).toMatchSnapshot()
    })
  }

  it('Should treat string, Date & moment instance equally', () => {
    const m = moment()
    m.add(2, 'months')
    const date = m.toDate()
    const str = date.toISOString()

    const res1 = fromNow(str)
    const res2 = fromNow(date)
    const res3 = fromNow(m)
    expect(res2).toBe(res1)
    expect(res3).toBe(res1)
  })
})

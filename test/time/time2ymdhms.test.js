const time2ymdhms = require('../../src/modules/time/time2ymdhms')
const expect = require('chai').expect

describe('日期格式化为YYYY-MM-DD HH:mm:ss', () => {
  it('当前时间 === 当前时间', () => {
    expect(time2ymdhms()).to.be.equal(time2ymdhms())
  })
  it('new Date() -> 2017-11-22 14:00:10', () => {
    expect(time2ymdhms(new Date('2017-11-22 14:00:10'))).to.be.equal('2017-11-22 14:00:10')
  })
  it('new Date().getTime() -> 2017-11-22 14:00:10', () => {
    expect(time2ymdhms(new Date('2017-11-22 14:00:10').getTime())).to.be.equal('2017-11-22 14:00:10')
  })
  it('new Date().toISOString() -> 2017-11-22 14:00:10', () => {
    expect(time2ymdhms(new Date('2017-11-22 14:00:10').toISOString())).to.be.equal('2017-11-22 14:00:10')
  })
})
const time2ymdhm = require('../../src/modules/time/time2ymdhm')
const expect = require('chai').expect

describe('日期格式化为YYYY-MM-DD HH:mm', () => {
  it('当前时间 === 当前时间', () => {
    expect(time2ymdhm()).to.be.equal(time2ymdhm())
  })
  it('new Date() -> 2017-11-22 01:02', () => {
    expect(time2ymdhm(new Date('2017-11-22 01:02'))).to.be.equal('2017-11-22 01:02')
  })
  it('new Date().getTime() -> 2017-11-22 01:02', () => {
    expect(time2ymdhm(new Date('2017-11-22 01:02').getTime())).to.be.equal('2017-11-22 01:02')
  })
  it('new Date().toISOString() -> 2017-11-22 01:02', () => {
    expect(time2ymdhm(new Date('2017-11-22 01:02').toISOString())).to.be.equal('2017-11-22 01:02')
  })
})
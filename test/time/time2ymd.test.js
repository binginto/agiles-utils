const time2ymd = require('../../src/modules/time/time2ymd')
const expect = require('chai').expect

describe('日期格式化为YYYY-MM-DD', () => {
  it('当前时间 === 当前时间', () => {
    expect(time2ymd()).to.be.equal(time2ymd())
  })
  it('new Date() -> 2018-01-01', () => {
    expect(time2ymd(new Date('2018-01-01'))).to.be.equal('2018-01-01')
  })
  it('new Date().getTime() -> 2018-01-01', () => {
    expect(time2ymd(new Date('2018-01-01').getTime())).to.be.equal('2018-01-01')
  })
  it('new Date().toISOString() -> 2018-01-01', () => {
    expect(time2ymd(new Date('2018-01-01').toISOString())).to.be.equal('2018-01-01')
  })
})
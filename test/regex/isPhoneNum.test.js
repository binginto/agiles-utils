const isPhoneNum = require('../../src/modules/regex/isPhoneNum')
const expect = require('chai').expect

describe('判断是否为手机号', () => {
  it('缺少number', () => {
    try {
      isPhoneNum()
    } catch (err) {
      expect(err.message).to.be.equal('缺少number')
    }
  })
  it('number只能是Number | String', () => {
    try {
      isPhoneNum(true)
    } catch (err) {
      expect(err.message).to.be.equal('number只能是Number | String')
    }
  })
  it('13143501111 -> true', () => {
    expect(isPhoneNum(13143501111)).to.be.ok
  })
  it('13143501111 -> true', () => {
    expect(isPhoneNum('13143501111')).to.be.ok
  })
  it('110 -> false', () => {
    expect(isPhoneNum(100)).to.not.ok
  })
})
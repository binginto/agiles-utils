const fen2yuan = require('../../src/modules/unit/fen2yuan')
const expect = require('chai').expect

describe('分 -> 元', () => {
  it('缺少price', () => {
    try {
      fen2yuan()
    } catch (err) {
      expect(err.message).to.be.equal('缺少price')
    }
  })
  it('字符串 -> NaN', () => {
    expect(isNaN(fen2yuan('搞事'))).to.be.ok
  })
  it('10分 -> 0.10元', () => {
    expect(fen2yuan(10)).to.be.equal(0.10)
  })
  it('100分 -> 1元', () => {
    expect(fen2yuan(100)).to.be.equal(1)
  })
  it('12600分 -> 126元', () => {
    expect(fen2yuan(12600)).to.be.equal(126)
  })
  it('13286分 -> 132.86元', () => {
    expect(fen2yuan(13286)).to.be.equal(132.86)
  })
})
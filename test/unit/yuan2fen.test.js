const yuan2fen = require('../../src/modules/unit/yuan2fen')
const expect = require('chai').expect

describe('元 -> 分', () => {
  it('缺少price', () => {
    try {
      yuan2fen()
    } catch (err) {
      expect(err.message).to.be.equal('缺少price')
    }
  })
  it('字符串 -> NaN', () => {
    expect(isNaN(yuan2fen('搞事'))).to.be.ok
  })
  it('0.01元 -> 1分', () => {
    expect(yuan2fen(0.01)).to.be.equal(1)
  })
  it('0.1元 -> 10分', () => {
    expect(yuan2fen(0.1)).to.be.equal(10)
  })
  it('1元 -> 100分', () => {
    expect(yuan2fen(1)).to.be.equal(100)
  })
  it('50元 -> 5000分', () => {
    expect(yuan2fen(50)).to.be.equal(5000)
  })
})
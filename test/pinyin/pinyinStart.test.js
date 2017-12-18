const pinyinStart = require('../../src/modules/pinyin/pinyinStart')
const expect = require('chai').expect

describe('获取拼音的开头字母', () => {
  it('缺少character', () => {
    try {
      pinyinStart()
    } catch (err) {
      expect(err.message).to.be.equal('缺少character')
    }
  })
  it('只能传入String类型', () => {
    try {
      pinyinStart(110)
    } catch (err) {
      expect(err.message).to.be.equal('只能传入String类型')
    }
  })
  it('哇哈哈 -> w', () => {
    expect(pinyinStart('哇哈哈')).to.be.equal('w')
  })
  it('桑兮兮 -> s', () => {
    expect(pinyinStart('桑嘻嘻')).to.be.equal('s')
  })
  it('秋名山 -> Q', () => {
    expect(pinyinStart('秋名山', true)).to.be.equal('Q')
  })
  it('天龙八部 -> T', () => {
    expect(pinyinStart('天龙八部', true)).to.be.equal('T')
  })
  it('尤大 -> Y', () => {
    expect(pinyinStart('尤大', true)).to.be.equal('Y')
  })
})
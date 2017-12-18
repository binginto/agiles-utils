const fontSize = require('../../src/modules/dom/fontSize')
const expect = require('chai').expect

describe('判断是否有空的成员', () => {
  it('300 --> 80', () => {
    global.window = { innerWidth:300 }
    expect(fontSize()).equal(80)
  })
  it('350 --> 80', () => {
    global.window = { innerWidth:350 }
    expect(fontSize()).equal(100)
  })
  it('400 --> 120', () => {
    global.window = { innerWidth:400 }
    expect(fontSize()).equal(120)
  })
  it('500 --> 120', () => {
    global.window = { innerWidth:500 }
    expect(fontSize()).equal(120)
  })
})
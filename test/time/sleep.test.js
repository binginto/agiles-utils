const sleep = require('../../src/modules/time/sleep')
const expect = require('chai').expect

describe('睡眠', () => {
  it('缺少milliseconds', async () => {
    try {
      await sleep()
    } catch (err) {
      expect(err.message).to.be.equal('缺少milliseconds')
    }
  })
  it('1.5秒后打印 get up !', async () => {
    await sleep(1500)
    console.log('get up !')
  })
})
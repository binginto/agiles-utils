const unique = require('../../src/modules/array/unique')
const expect = require('chai').expect

describe('数组去重', () => {
  it('缺少items', () => {
    try {
      unique()
    } catch (err) {
      expect(err.message).to.be.equal('缺少items')
    }
  })
  it('[1, 2, 3, 3, 2] --> [1, 2, 3]', () => {
    expect(unique([1, 2, 3, 3, 2])).to.be.deep.equal([1, 2, 3])
  })
  it('users --> newUsers', () => {
    const users = [{
      id: '001',
      name: 'user1',
      age: 20
    }, {
      id: '002',
      name: 'user2',
      age: 17
    }, {
      id: '001',
      name: 'user3',
      age: 36
    }]

    newUsers = [{
      id: '001',
      name: 'user1',
      age: 20
    }, {
      id: '002',
      name: 'user2',
      age: 17
    }]
    expect(unique(users, 'id')).to.be.deep.equal(newUsers)
  })
})
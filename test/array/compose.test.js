const compose = require('../../src/modules/array/compose')
const expect = require('chai').expect

describe('把一个对象数组中某个属性相同的对象合并起来', () => {
  it('缺少items || compareAttr || composeAttr', () => {
    try {
      compose()
    } catch (err) {
      expect(err.message).to.be.equal('缺少items || compareAttr || composeAttr')
    }
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
    }, {
      id: '001',
      name: 'user4',
      age: 10
    }]
    const newUsers = [{
      id: '001',
      name: 'user1',
      age: 66
    }, {
      id: '002',
      name: 'user2',
      age: 17
    }]
    expect(compose(users, 'id', 'age')).to.be.deep.equal(newUsers)
  })
  it('teachers --> newTeachers', () => {
    const teachers = [{
      id: '001',
      name: 'hello'
    }, {
      id: '001',
      name: 'teacher'
    }]
    const newTeachers = [{
      id: '001',
      name: 'helloteacher'
    }]
    expect(compose(teachers, 'id', 'name')).to.be.deep.equal(newTeachers)
  })
})
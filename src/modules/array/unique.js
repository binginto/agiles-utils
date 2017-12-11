const _ = require('lodash')

/**
 * 数组去重
 * @param  items      对象数组
 * @param  attr       去重条件，如果不传入则判断元素本身
 * @return {* Array}  去重后的数组
 */
function unique (items, attr) {
  if (items) {
    const seen = new Map()
    return items.filter(item => {
      if (attr) item = item[attr]
      return !seen.has(item) && seen.set(item, 1)
    })
  } else {
    throw Error('缺少items')
  }
}

module.exports = unique
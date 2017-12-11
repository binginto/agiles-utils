const _ = require('lodash')

/**
 * 分 -> 元
 * @param  price      单位
 * @return {* Number} 转换后的单位
 */
function fen2yuan (price) {
  if (price) {
    return _.toNumber(_.divide(_.toNumber(price), 100).toFixed(_.toNumber(price) % 100 === 0 ? 0 : 2))
  } else {
    throw Error('缺少price')
  }
}

module.exports = fen2yuan
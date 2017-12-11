const _ = require('lodash')

/**
 * 元 -> 分
 * @param  price      单位
 * @return {* Number} 转换后的单位
 */
function convertYuan2Fen (price) {
  if (price) {
    return (_.multiply(_.toNumber(price), 100))
  } else {
    throw Error('缺少price')
  }
}

module.exports = convertYuan2Fen
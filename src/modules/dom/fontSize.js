const pinyin = require('pinyin')
const _ = require('lodash')

/**
 * 获取font-size
 * @return {* Number} font-size值
 */
function fontSize () {
  if (window.innerWidth <= 320) {
    return 80
  } else if (window.innerWidth > 320 && window.innerWidth <= 375) {
    return 100
  } else if (window.innerWidth > 375 && window.innerWidth <= 414) {
    return 120
  } else {
    return 120
  }
}

module.exports = fontSize
const pinyin = require('pinyin')
const _ = require('lodash')

/**
 * 滚动条距离顶部的位置
 * @return {* String} 拼音的开头字母
 */
function scrollTop () {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}

module.exports = scrollTop
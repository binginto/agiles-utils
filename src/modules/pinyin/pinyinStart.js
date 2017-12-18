const pinyin = require('pinyin')
const _ = require('lodash')

/**
 * 获取拼音的开头字母
 * @param  character 字符
 * @param  isUpper   是否转为大写
 * @return {String}  拼音的开头字母
 */
function pinyinStart (character, isUpper) {
  if (!character) {
    throw Error('缺少character')
  }
  if (!_.isString(character)) {
    throw Error('只能传入String类型')
  }
  let start = pinyin(character, {
    style: pinyin.STYLE_NORMAL
  })[0][0].split('')[0]
  if (isUpper) {
    return start.toUpperCase()
  } else {
    return start.toLowerCase()
  }
}

module.exports = pinyinStart
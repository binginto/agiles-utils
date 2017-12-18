const _ = require('lodash')

/**
 * 判断是否为手机号
 * @param   number   手机号码
 * @return {Boolean} 是否为手机号
 */
function isPhoneNum(number) {
  if (!number) {
    throw Error('缺少number')
  }
  if (!(_.isNumber(number) || _.isString(number))) {
    throw Error('number只能是Number | String')
  }
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(number)
}

module.exports = isPhoneNum
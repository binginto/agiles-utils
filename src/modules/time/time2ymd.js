const moment = require('moment')

/**
 * 日期格式化为YYYY-MM-DD
 * @param  time       时间
 * @return {* String} 格式化后的时间
 */
function time2ymd (time = new Date()) {
  return moment(time).format('YYYY-MM-DD')
}

module.exports = time2ymd
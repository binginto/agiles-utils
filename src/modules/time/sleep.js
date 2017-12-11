/**
 * 睡眠
 * @param  milliseconds 毫秒
 * @return {* None}
 */
function sleep (milliseconds) {
  if (milliseconds) {
    return new Promise(resolve => {
      setTimeout(_ => resolve(), milliseconds)
    })
  } else {
    throw Error('缺少milliseconds')
  }
}

module.exports = sleep
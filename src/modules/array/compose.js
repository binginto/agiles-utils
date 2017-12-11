/**
 * 把一个对象数组中某个属性相同的对象合并起来
 * @param   items       对象数组
 * @param   compareAttr 用于比较是否相同的属性
 * @param   composeAttr 用于合并的属性
 * @returns {* Array}   合并后的数组
 */
function compose (items, compareAttr, composeAttr) {
  if (items && compareAttr, composeAttr) {
    return items.reduce((acc, val) => {
      const target = acc.find(v => {
        return v[compareAttr] === val[compareAttr]
      })
      if (target) {
        target[composeAttr] += val[composeAttr]
      } else {
        acc.push(val)
      }
      return acc
    }, [])
  } else {
    throw Error('缺少items || compareAttr || composeAttr')
  }
}

module.exports = compose
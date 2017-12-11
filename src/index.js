/**
 * Webpack打包入口
 */

const lodash = require('lodash')

const compose = require('./modules/array/compose')
const unique = require('./modules/array/unique')

const hasEmpty = require('./modules/lang/hasEmpty')

const sleep = require('./modules/time/sleep')
const time2ymd = require('./modules/time/time2ymd')
const time2ymdhm = require('./modules/time/time2ymdhm')
const time2ymdhms = require('./modules/time/time2ymdhms')

const yuan2fen = require('./modules/unit/yuan2fen')
const fen2yuan = require('./modules/unit/fen2yuan')


module.exports = lodash.merge(lodash, { 
  compose,
  unique,

  hasEmpty,

  sleep,
  time2ymd,
  time2ymdhm,
  time2ymdhms,

  fen2yuan,
  yuan2fen
})
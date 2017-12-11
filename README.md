<p align="center"><a href="https://www.npmjs.com/package/agiles-utils" target="_blank"><img width="100" src="http://outt0i9l8.bkt.clouddn.com/chameleon.png"></a></p>

<p align="center">
    <a arget="_blank"><img src="https://img.shields.io/badge/version-0.0.1-blue.svg?style=flat" alt="Build Status"></a>
    <a arget="_blank"><img src="https://img.shields.io/travis/rust-lang/rust.svg" alt="Build Status"></a>
    <a arget="_blank"><img src="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="Build Status"></a>
    <a arget="_blank"><img src="https://img.shields.io/npm/v/npm.svg" alt="Version"></a>
    <a arget="_blank"><img src="https://img.shields.io/badge/dependency-lodash-ff69b4.svg" alt="Version"></a>
</p>

<h2 align="center">agiles-utils</h2>

### Quick start

#### Install
```
npm install agiles-utils -S
```

#### Use
```js
import _ from 'agiles-utils'
_.fen2yuan(2000)
```

#### Use in Vue
```html
<template>
  <div>
    <span v-text="fen2yuan(2000) + '元'"></span>
  </div>
</template>

<script>
import _ from 'agiles-utils'

export default {
  data () {
    return {
      fen2yuan: _.fen2yuan
    }
  }
}
</script>
```
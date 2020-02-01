# @calipsa/utils

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/utils

# or if you like yarn:
yarn add @calipsa/utils
```

## Usage
```javascript
import {
  Cache,
  CacheCapped,
  delay,
  getObjectPaths,
  hasDuplicates,
  isNaturalNumber,
  isNonNegativeInteger,
  limitConcurrent,
  lockAsync,
  objectToArray,
  objectToFunction,
  objectToFunctionWithBind,
  objectToMap,
  ordinal,
  queryObjectToString,
  racePromises,
  randomId,
  Singleton,
  sliceRotate,
  toNearestByStep,
} from '@calipsa/utils'

import {
  fromNow,
} from '@calipsa/utils/dist/date'

import {
  names,
  offset,
  offsetFormattedLong,
  offsetFormattedShort,
  suggested,
} from '@calipsa/utils/dist/timezone'

// ...
```

[npm-url]: https://npmjs.org/package/@calipsa/utils
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/utils.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/utils.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/utils
[david-dm-image]:https://david-dm.org/inker/@calipsa/utils.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/utils#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/utils/dev-status.svg

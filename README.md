# coco-js [![npm version](https://img.shields.io/npm/v/coco-js.svg?style=flat)](https://www.npmjs.org/package/coco-js) [![npm downloads](https://img.shields.io/npm/dm/coco-js.svg?style=flat)](https://www.npmjs.org/package/coco-js) [![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://tldrlegal.com/license/mit-license)

coco-js adds some syntax from CoffeeScript to JavaScript using [Sweet.js].

- prototype alias operator `::`
- this alias operator `@`

```bash
$ npm install coco-js
```

[Sweet.js]: http://sweetjs.org

# Examples

```javascript
Array::slice.call("string")
// [ 's', 't', 'r', 'i', 'n', 'g' ]


var prop = 'slice';
Array::[prop].call("string")
// [ 's', 't', 'r', 'i', 'n', 'g' ]

var isString = function (obj) {
  return Object::toString.call(obj) === '[object String]'
}

isString('string') // true
isString([]) // false

function Thing() {
  if (!(@ instanceof Thing)) return new Thing();
  @count = 1;
  @count++;
  console.log(@count);
}
```

## Tests

```bash
$ make test
```

## License

[MIT](https://github.com/benjreinhart/coco-js/blob/master/LICENSE.txt)

# load-json-xhr

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Loads a JSON file from a URI using [xhr](https://www.npmjs.org/package/xhr). The return object is the XMLHttpRequest. 

```js
var load = require('load-json-xhr');

load('my-file.json', function(err, data) {
    if (err)
        throw err;
    console.log(data.foo.bar);
})
```

Also accepts an options object which is passed along to the `xhr` module.

```js
var load = require('load-json-xhr');

load({ uri: 'my-file.json', timeout: 5000 }, function(err, data) {
    if (err)
        throw err;
    console.log(data.foo.bar);
})
```

## Usage

[![NPM](https://nodei.co/npm/load-json-xhr.png)](https://nodei.co/npm/load-json-xhr/)

#### `getJSON(opt[, callback])`

Gets JSON data from a `uri` specified in `opt`. Or you can pass a `string`. 

## License

MIT, see [LICENSE.md](http://github.com/bunnybones1/load-json-xhr/blob/master/LICENSE.md) for details.

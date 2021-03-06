var xhr = require("xhr");

module.exports = function getJSON(opt, cb) {
  cb = typeof cb === 'function' ? cb : noop;

  if (typeof opt === 'string')
    opt = { uri: opt };
  else if (!opt)
    opt = { };

  // if (!opt.headers)
  //   opt.headers = { "Content-Type": "application/json" };

  var jsonResponse = /^json$/i.test(opt.responseType);
  return xhr(opt, function(err, res, body) {
    if (err)
      return cb(err);
    if (!/^2/.test(res.statusCode))
      return cb(new Error('http status code: ' + res.statusCode));

    if (jsonResponse) { 
      cb(null, body);
    } else {
      var data;
      try {
        data = JSON.parse(body);
      } catch (e) {
        cb(new Error('cannot parse json: ' + e));
      }
      if(data) cb(null, data);
    }
  })
}

function noop() {}
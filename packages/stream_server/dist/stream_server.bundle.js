/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/accepts/index.js":
/*!*******************************************!*\
  !*** ../../node_modules/accepts/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * accepts
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Negotiator = __webpack_require__(/*! negotiator */ "../../node_modules/negotiator/index.js")
var mime = __webpack_require__(/*! mime-types */ "../../node_modules/mime-types/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = Accepts

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Accepts (req) {
  if (!(this instanceof Accepts)) {
    return new Accepts(req)
  }

  this.headers = req.headers
  this.negotiator = new Negotiator(req)
}

/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */

Accepts.prototype.type =
Accepts.prototype.types = function (types_) {
  var types = types_

  // support flattened arguments
  if (types && !Array.isArray(types)) {
    types = new Array(arguments.length)
    for (var i = 0; i < types.length; i++) {
      types[i] = arguments[i]
    }
  }

  // no types, return all requested types
  if (!types || types.length === 0) {
    return this.negotiator.mediaTypes()
  }

  // no accept header, return first given type
  if (!this.headers.accept) {
    return types[0]
  }

  var mimes = types.map(extToMime)
  var accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
  var first = accepts[0]

  return first
    ? types[mimes.indexOf(first)]
    : false
}

/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.encoding =
Accepts.prototype.encodings = function (encodings_) {
  var encodings = encodings_

  // support flattened arguments
  if (encodings && !Array.isArray(encodings)) {
    encodings = new Array(arguments.length)
    for (var i = 0; i < encodings.length; i++) {
      encodings[i] = arguments[i]
    }
  }

  // no encodings, return all requested encodings
  if (!encodings || encodings.length === 0) {
    return this.negotiator.encodings()
  }

  return this.negotiator.encodings(encodings)[0] || false
}

/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.charset =
Accepts.prototype.charsets = function (charsets_) {
  var charsets = charsets_

  // support flattened arguments
  if (charsets && !Array.isArray(charsets)) {
    charsets = new Array(arguments.length)
    for (var i = 0; i < charsets.length; i++) {
      charsets[i] = arguments[i]
    }
  }

  // no charsets, return all requested charsets
  if (!charsets || charsets.length === 0) {
    return this.negotiator.charsets()
  }

  return this.negotiator.charsets(charsets)[0] || false
}

/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */

Accepts.prototype.lang =
Accepts.prototype.langs =
Accepts.prototype.language =
Accepts.prototype.languages = function (languages_) {
  var languages = languages_

  // support flattened arguments
  if (languages && !Array.isArray(languages)) {
    languages = new Array(arguments.length)
    for (var i = 0; i < languages.length; i++) {
      languages[i] = arguments[i]
    }
  }

  // no languages, return all requested languages
  if (!languages || languages.length === 0) {
    return this.negotiator.languages()
  }

  return this.negotiator.languages(languages)[0] || false
}

/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function extToMime (type) {
  return type.indexOf('/') === -1
    ? mime.lookup(type)
    : type
}

/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function validMime (type) {
  return typeof type === 'string'
}


/***/ }),

/***/ "../../node_modules/base64id/lib/base64id.js":
/*!***************************************************!*\
  !*** ../../node_modules/base64id/lib/base64id.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

/*!
 * base64id v0.1.0
 */

/**
 * Module dependencies
 */

var crypto = __webpack_require__(/*! crypto */ "crypto");

/**
 * Constructor
 */

var Base64Id = function() { };

/**
 * Get random bytes
 *
 * Uses a buffer if available, falls back to crypto.randomBytes
 */

Base64Id.prototype.getRandomBytes = function(bytes) {

  var BUFFER_SIZE = 4096
  var self = this;  
  
  bytes = bytes || 12;

  if (bytes > BUFFER_SIZE) {
    return crypto.randomBytes(bytes);
  }
  
  var bytesInBuffer = parseInt(BUFFER_SIZE/bytes);
  var threshold = parseInt(bytesInBuffer*0.85);

  if (!threshold) {
    return crypto.randomBytes(bytes);
  }

  if (this.bytesBufferIndex == null) {
     this.bytesBufferIndex = -1;
  }

  if (this.bytesBufferIndex == bytesInBuffer) {
    this.bytesBuffer = null;
    this.bytesBufferIndex = -1;
  }

  // No buffered bytes available or index above threshold
  if (this.bytesBufferIndex == -1 || this.bytesBufferIndex > threshold) {
     
    if (!this.isGeneratingBytes) {
      this.isGeneratingBytes = true;
      crypto.randomBytes(BUFFER_SIZE, function(err, bytes) {
        self.bytesBuffer = bytes;
        self.bytesBufferIndex = 0;
        self.isGeneratingBytes = false;
      }); 
    }
    
    // Fall back to sync call when no buffered bytes are available
    if (this.bytesBufferIndex == -1) {
      return crypto.randomBytes(bytes);
    }
  }
  
  var result = this.bytesBuffer.slice(bytes*this.bytesBufferIndex, bytes*(this.bytesBufferIndex+1)); 
  this.bytesBufferIndex++; 
  
  return result;
}

/**
 * Generates a base64 id
 *
 * (Original version from socket.io <http://socket.io>)
 */

Base64Id.prototype.generateId = function () {
  var rand = Buffer.alloc(15); // multiple of 3 for base64
  if (!rand.writeInt32BE) {
    return Math.abs(Math.random() * Math.random() * Date.now() | 0).toString()
      + Math.abs(Math.random() * Math.random() * Date.now() | 0).toString();
  }
  this.sequenceNumber = (this.sequenceNumber + 1) | 0;
  rand.writeInt32BE(this.sequenceNumber, 11);
  if (crypto.randomBytes) {
    this.getRandomBytes(12).copy(rand);
  } else {
    // not secure for node 0.4
    [0, 4, 8].forEach(function(i) {
      rand.writeInt32BE(Math.random() * Math.pow(2, 32) | 0, i);
    });
  }
  return rand.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
};

/**
 * Export
 */

exports = module.exports = new Base64Id();


/***/ }),

/***/ "../../node_modules/cors/lib/index.js":
/*!********************************************!*\
  !*** ../../node_modules/cors/lib/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function () {

  'use strict';

  var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");
  var vary = __webpack_require__(/*! vary */ "../../node_modules/vary/index.js");

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/cookie/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/cookie/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(';')
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf('=')

    // skip things that don't look like key=value
    if (index < 0) {
      continue;
    }

    var key = pair.substring(0, index).trim()

    // only assign once
    if (undefined == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim()

      // quoted values
      if (val[0] === '"') {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/debug/src/browser.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/debug/src/browser.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/engine.io/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/debug/src/common.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/debug/src/common.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "../../node_modules/engine.io/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/debug/src/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/debug/src/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "../../node_modules/engine.io/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "../../node_modules/engine.io/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/debug/src/node.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/debug/src/node.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/engine.io/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "../../node_modules/engine.io/node_modules/ms/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/engine.io/node_modules/ms/index.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/index.js":
/*!*********************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const debug = __webpack_require__(/*! debug */ "../../node_modules/h264-profile-level-id/node_modules/debug/src/index.js")('h264-profile-level-id');

/* eslint-disable no-console */
debug.log = console.info.bind(console);
/* eslint-enable no-console */

const ProfileConstrainedBaseline = 1;
const ProfileBaseline = 2;
const ProfileMain = 3;
const ProfileConstrainedHigh = 4;
const ProfileHigh = 5;

exports.ProfileConstrainedBaseline = ProfileConstrainedBaseline;
exports.ProfileBaseline = ProfileBaseline;
exports.ProfileMain = ProfileMain;
exports.ProfileConstrainedHigh = ProfileConstrainedHigh;
exports.ProfileHigh = ProfileHigh;

// All values are equal to ten times the level number, except level 1b which is
// special.
const Level1_b = 0;
const Level1 = 10;
const Level1_1 = 11;
const Level1_2 = 12;
const Level1_3 = 13;
const Level2 = 20;
const Level2_1 = 21;
const Level2_2 = 22;
const Level3 = 30;
const Level3_1 = 31;
const Level3_2 = 32;
const Level4 = 40;
const Level4_1 = 41;
const Level4_2 = 42;
const Level5 = 50;
const Level5_1 = 51;
const Level5_2 = 52;

exports.Level1_b = Level1_b;
exports.Level1 = Level1;
exports.Level1_1 = Level1_1;
exports.Level1_2 = Level1_2;
exports.Level1_3 = Level1_3;
exports.Level2 = Level2;
exports.Level2_1 = Level2_1;
exports.Level2_2 = Level2_2;
exports.Level3 = Level3;
exports.Level3_1 = Level3_1;
exports.Level3_2 = Level3_2;
exports.Level4 = Level4;
exports.Level4_1 = Level4_1;
exports.Level4_2 = Level4_2;
exports.Level5 = Level5;
exports.Level5_1 = Level5_1;
exports.Level5_2 = Level5_2;

class ProfileLevelId
{
	constructor(profile, level)
	{
		this.profile = profile;
		this.level = level;
	}
}

exports.ProfileLevelId = ProfileLevelId;

// Default ProfileLevelId.
//
// TODO: The default should really be profile Baseline and level 1 according to
// the spec: https://tools.ietf.org/html/rfc6184#section-8.1. In order to not
// break backwards compatibility with older versions of WebRTC where external
// codecs don't have any parameters, use profile ConstrainedBaseline level 3_1
// instead. This workaround will only be done in an interim period to allow
// external clients to update their code.
//
// http://crbug/webrtc/6337.
const DefaultProfileLevelId =
	new ProfileLevelId(ProfileConstrainedBaseline, Level3_1);

// For level_idc=11 and profile_idc=0x42, 0x4D, or 0x58, the constraint set3
// flag specifies if level 1b or level 1.1 is used.
const ConstraintSet3Flag = 0x10;

// Class for matching bit patterns such as "x1xx0000" where 'x' is allowed to be
// either 0 or 1.
class BitPattern
{
	constructor(str)
	{
		this._mask = ~byteMaskString('x', str);
		this._maskedValue = byteMaskString('1', str);
	}

	isMatch(value)
	{
		return this._maskedValue === (value & this._mask);
	}
}

// Class for converting between profile_idc/profile_iop to Profile.
class ProfilePattern
{
	constructor(profile_idc, profile_iop, profile)
	{
		this.profile_idc = profile_idc;
		this.profile_iop = profile_iop;
		this.profile = profile;
	}
}

// This is from https://tools.ietf.org/html/rfc6184#section-8.1.
const ProfilePatterns =
[
	new ProfilePattern(0x42, new BitPattern('x1xx0000'), ProfileConstrainedBaseline),
	new ProfilePattern(0x4D, new BitPattern('1xxx0000'), ProfileConstrainedBaseline),
	new ProfilePattern(0x58, new BitPattern('11xx0000'), ProfileConstrainedBaseline),
	new ProfilePattern(0x42, new BitPattern('x0xx0000'), ProfileBaseline),
	new ProfilePattern(0x58, new BitPattern('10xx0000'), ProfileBaseline),
	new ProfilePattern(0x4D, new BitPattern('0x0x0000'), ProfileMain),
	new ProfilePattern(0x64, new BitPattern('00000000'), ProfileHigh),
	new ProfilePattern(0x64, new BitPattern('00001100'), ProfileConstrainedHigh)
];

/**
 * Parse profile level id that is represented as a string of 3 hex bytes.
 * Nothing will be returned if the string is not a recognized H264 profile
 * level id.
 *
 * @param {String} str - profile-level-id value as a string of 3 hex bytes.
 *
 * @returns {ProfileLevelId}
 */
exports.parseProfileLevelId = function(str)
{
	// The string should consist of 3 bytes in hexadecimal format.
	if (typeof str !== 'string' || str.length !== 6)
		return null;

	const profile_level_id_numeric = parseInt(str, 16);

	if (profile_level_id_numeric === 0)
		return null;

	// Separate into three bytes.
	const level_idc = profile_level_id_numeric & 0xFF;
	const profile_iop = (profile_level_id_numeric >> 8) & 0xFF;
	const profile_idc = (profile_level_id_numeric >> 16) & 0xFF;

	// Parse level based on level_idc and constraint set 3 flag.
	let level;

	switch (level_idc)
	{
		case Level1_1:
		{
			level = (profile_iop & ConstraintSet3Flag) !== 0 ? Level1_b : Level1_1;
			break;
		}
		case Level1:
		case Level1_2:
		case Level1_3:
		case Level2:
		case Level2_1:
		case Level2_2:
		case Level3:
		case Level3_1:
		case Level3_2:
		case Level4:
		case Level4_1:
		case Level4_2:
		case Level5:
		case Level5_1:
		case Level5_2:
		{
			level = level_idc;
			break;
		}
		// Unrecognized level_idc.
		default:
		{
			debug('parseProfileLevelId() | unrecognized level_idc:%s', level_idc);

			return null;
		}
	}

	// Parse profile_idc/profile_iop into a Profile enum.
	for (const pattern of ProfilePatterns)
	{
		if (
			profile_idc === pattern.profile_idc &&
			pattern.profile_iop.isMatch(profile_iop)
		)
		{
			return new ProfileLevelId(pattern.profile, level);
		}
	}

	debug('parseProfileLevelId() | unrecognized profile_idc/profile_iop combination');

	return null;
};

/**
 * Returns canonical string representation as three hex bytes of the profile
 * level id, or returns nothing for invalid profile level ids.
 *
 * @param {ProfileLevelId} profile_level_id
 *
 * @returns {String}
 */
exports.profileLevelIdToString = function(profile_level_id)
{
	// Handle special case level == 1b.
	if (profile_level_id.level == Level1_b)
	{
		switch (profile_level_id.profile)
		{
			case ProfileConstrainedBaseline:
			{
				return '42f00b';
			}
			case ProfileBaseline:
			{
				return '42100b';
			}
			case ProfileMain:
			{
				return '4d100b';
			}
			// Level 1_b is not allowed for other profiles.
			default:
			{
				debug(
					'profileLevelIdToString() | Level 1_b not is allowed for profile:%s',
					profile_level_id.profile);

				return null;
			}
		}
	}

	let profile_idc_iop_string;

	switch (profile_level_id.profile)
	{
		case ProfileConstrainedBaseline:
		{
			profile_idc_iop_string = '42e0';
			break;
		}
		case ProfileBaseline:
		{
			profile_idc_iop_string = '4200';
			break;
		}
		case ProfileMain:
		{
			profile_idc_iop_string = '4d00';
			break;
		}
		case ProfileConstrainedHigh:
		{
			profile_idc_iop_string = '640c';
			break;
		}
		case ProfileHigh:
		{
			profile_idc_iop_string = '6400';
			break;
		}
		default:
		{
			debug(
				'profileLevelIdToString() | unrecognized profile:%s',
				profile_level_id.profile);

			return null;
		}
	}

	let levelStr = (profile_level_id.level).toString(16);

	if (levelStr.length === 1)
		levelStr = `0${levelStr}`;

	return `${profile_idc_iop_string}${levelStr}`;
};

/**
 * Parse profile level id that is represented as a string of 3 hex bytes
 * contained in an SDP key-value map. A default profile level id will be
 * returned if the profile-level-id key is missing. Nothing will be returned if
 * the key is present but the string is invalid.
 *
 * @param {Object} [params={}] - Codec parameters object.
 *
 * @returns {ProfileLevelId}
 */
exports.parseSdpProfileLevelId = function(params = {})
{
	const profile_level_id = params['profile-level-id'];

	return !profile_level_id
		? DefaultProfileLevelId
		: exports.parseProfileLevelId(profile_level_id);
};

/**
 * Returns true if the parameters have the same H264 profile, i.e. the same
 * H264 profile (Baseline, High, etc).
 *
 * @param {Object} [params1={}] - Codec parameters object.
 * @param {Object} [params2={}] - Codec parameters object.
 *
 * @returns {Boolean}
 */
exports.isSameProfile = function(params1 = {}, params2 = {})
{
	const profile_level_id_1 = exports.parseSdpProfileLevelId(params1);
	const profile_level_id_2 = exports.parseSdpProfileLevelId(params2);

	// Compare H264 profiles, but not levels.
	return Boolean(
		profile_level_id_1 &&
		profile_level_id_2 &&
		profile_level_id_1.profile === profile_level_id_2.profile
	);
};

/**
 * Generate codec parameters that will be used as answer in an SDP negotiation
 * based on local supported parameters and remote offered parameters. Both
 * local_supported_params and remote_offered_params represent sendrecv media
 * descriptions, i.e they are a mix of both encode and decode capabilities. In
 * theory, when the profile in local_supported_params represent a strict superset
 * of the profile in remote_offered_params, we could limit the profile in the
 * answer to the profile in remote_offered_params.
 *
 * However, to simplify the code, each supported H264 profile should be listed
 * explicitly in the list of local supported codecs, even if they are redundant.
 * Then each local codec in the list should be tested one at a time against the
 * remote codec, and only when the profiles are equal should this function be
 * called. Therefore, this function does not need to handle profile intersection,
 * and the profile of local_supported_params and remote_offered_params must be
 * equal before calling this function. The parameters that are used when
 * negotiating are the level part of profile-level-id and level-asymmetry-allowed.
 *
 * @param {Object} [local_supported_params={}]
 * @param {Object} [remote_offered_params={}]
 *
 * @returns {String} Canonical string representation as three hex bytes of the
 *   profile level id, or null if no one of the params have profile-level-id.
 *
 * @throws {TypeError} If Profile mismatch or invalid params.
 */
exports.generateProfileLevelIdForAnswer = function(
	local_supported_params = {},
	remote_offered_params = {}
)
{
	// If both local and remote params do not contain profile-level-id, they are
	// both using the default profile. In this case, don't return anything.
	if (
		!local_supported_params['profile-level-id'] &&
		!remote_offered_params['profile-level-id']
	)
	{
		debug(
			'generateProfileLevelIdForAnswer() | no profile-level-id in local and remote params');

		return null;
	}

	// Parse profile-level-ids.
	const local_profile_level_id =
		exports.parseSdpProfileLevelId(local_supported_params);
	const remote_profile_level_id =
		exports.parseSdpProfileLevelId(remote_offered_params);

	// The local and remote codec must have valid and equal H264 Profiles.
	if (!local_profile_level_id)
		throw new TypeError('invalid local_profile_level_id');

	if (!remote_profile_level_id)
		throw new TypeError('invalid remote_profile_level_id');

	if (local_profile_level_id.profile !== remote_profile_level_id.profile)
		throw new TypeError('H264 Profile mismatch');

	// Parse level information.
	const level_asymmetry_allowed = (
		isLevelAsymmetryAllowed(local_supported_params) &&
		isLevelAsymmetryAllowed(remote_offered_params)
	);

	const local_level = local_profile_level_id.level;
	const remote_level = remote_profile_level_id.level;
	const min_level = minLevel(local_level, remote_level);

	// Determine answer level. When level asymmetry is not allowed, level upgrade
	// is not allowed, i.e., the level in the answer must be equal to or lower
	// than the level in the offer.
	const answer_level = level_asymmetry_allowed ? local_level : min_level;

	debug(
		'generateProfileLevelIdForAnswer() | result: [profile:%s, level:%s]',
		local_profile_level_id.profile, answer_level);

	// Return the resulting profile-level-id for the answer parameters.
	return exports.profileLevelIdToString(
		new ProfileLevelId(local_profile_level_id.profile, answer_level));
};

// Convert a string of 8 characters into a byte where the positions containing
// character c will have their bit set. For example, c = 'x', str = "x1xx0000"
// will return 0b10110000.
function byteMaskString(c, str)
{
	return (
		((str[0] === c) << 7) | ((str[1] === c) << 6) | ((str[2] === c) << 5) |
		((str[3] === c) << 4)	| ((str[4] === c) << 3)	| ((str[5] === c) << 2)	|
		((str[6] === c) << 1)	| ((str[7] === c) << 0)
	);
}

// Compare H264 levels and handle the level 1b case.
function isLessLevel(a, b)
{
	if (a === Level1_b)
		return b !== Level1 && b !== Level1_b;

	if (b === Level1_b)
		return a !== Level1;

	return a < b;
}

function minLevel(a, b)
{
	return isLessLevel(a, b) ? a : b;
}

function isLevelAsymmetryAllowed(params = {})
{
	const level_asymmetry_allowed = params['level-asymmetry-allowed'];

	return (
		level_asymmetry_allowed === 1 ||
		level_asymmetry_allowed === '1'
	);
}


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/node_modules/debug/src/browser.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/node_modules/debug/src/browser.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/h264-profile-level-id/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/node_modules/debug/src/common.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/node_modules/debug/src/common.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "../../node_modules/h264-profile-level-id/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/node_modules/debug/src/index.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/node_modules/debug/src/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "../../node_modules/h264-profile-level-id/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "../../node_modules/h264-profile-level-id/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/node_modules/debug/src/node.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/node_modules/debug/src/node.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/h264-profile-level-id/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "../../node_modules/h264-profile-level-id/node_modules/ms/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/h264-profile-level-id/node_modules/ms/index.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../node_modules/has-flag/index.js":
/*!********************************************!*\
  !*** ../../node_modules/has-flag/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/ActiveSpeakerObserver.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/ActiveSpeakerObserver.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActiveSpeakerObserver = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const RtpObserver_1 = __webpack_require__(/*! ./RtpObserver */ "../../node_modules/mediasoup/node/lib/RtpObserver.js");
const logger = new Logger_1.Logger('ActiveSpeakerObserver');
class ActiveSpeakerObserver extends RtpObserver_1.RtpObserver {
    /**
     * @private
     */
    constructor(options) {
        super(options);
        this.handleWorkerNotifications();
    }
    /**
     * Observer.
     */
    get observer() {
        return super.observer;
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.rtpObserverId, (event, data) => {
            switch (event) {
                case 'dominantspeaker':
                    {
                        const producer = this.getProducerById(data.producerId);
                        if (!producer) {
                            break;
                        }
                        const dominantSpeaker = {
                            producer
                        };
                        this.safeEmit('dominantspeaker', dominantSpeaker);
                        this.observer.safeEmit('dominantspeaker', dominantSpeaker);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.ActiveSpeakerObserver = ActiveSpeakerObserver;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/AudioLevelObserver.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/AudioLevelObserver.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioLevelObserver = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const RtpObserver_1 = __webpack_require__(/*! ./RtpObserver */ "../../node_modules/mediasoup/node/lib/RtpObserver.js");
const logger = new Logger_1.Logger('AudioLevelObserver');
class AudioLevelObserver extends RtpObserver_1.RtpObserver {
    /**
     * @private
     */
    constructor(options) {
        super(options);
        this.handleWorkerNotifications();
    }
    /**
     * Observer.
     */
    get observer() {
        return super.observer;
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.rtpObserverId, (event, data) => {
            switch (event) {
                case 'volumes':
                    {
                        // Get the corresponding Producer instance and remove entries with
                        // no Producer (it may have been closed in the meanwhile).
                        const volumes = data
                            .map(({ producerId, volume }) => ({
                            producer: this.getProducerById(producerId),
                            volume
                        }))
                            .filter(({ producer }) => producer);
                        if (volumes.length > 0) {
                            this.safeEmit('volumes', volumes);
                            // Emit observer event.
                            this.observer.safeEmit('volumes', volumes);
                        }
                        break;
                    }
                case 'silence':
                    {
                        this.safeEmit('silence');
                        // Emit observer event.
                        this.observer.safeEmit('silence');
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.AudioLevelObserver = AudioLevelObserver;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Channel.js":
/*!********************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Channel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const os = __webpack_require__(/*! os */ "os");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const errors_1 = __webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js");
const littleEndian = os.endianness() == 'LE';
const logger = new Logger_1.Logger('Channel');
// Binary length for a 4194304 bytes payload.
const MESSAGE_MAX_LEN = 4194308;
const PAYLOAD_MAX_LEN = 4194304;
class Channel extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Closed flag.
    #closed = false;
    // Unix Socket instance for sending messages to the worker process.
    #producerSocket;
    // Unix Socket instance for receiving messages to the worker process.
    #consumerSocket;
    // Next id for messages sent to the worker process.
    #nextId = 0;
    // Map of pending sent requests.
    #sents = new Map();
    // Buffer for reading messages from the worker.
    #recvBuffer = Buffer.alloc(0);
    /**
     * @private
     */
    constructor({ producerSocket, consumerSocket, pid }) {
        super();
        logger.debug('constructor()');
        this.#producerSocket = producerSocket;
        this.#consumerSocket = consumerSocket;
        // Read Channel responses/notifications from the worker.
        this.#consumerSocket.on('data', (buffer) => {
            if (!this.#recvBuffer.length) {
                this.#recvBuffer = buffer;
            }
            else {
                this.#recvBuffer = Buffer.concat([this.#recvBuffer, buffer], this.#recvBuffer.length + buffer.length);
            }
            if (this.#recvBuffer.length > PAYLOAD_MAX_LEN) {
                logger.error('receiving buffer is full, discarding all data in it');
                // Reset the buffer and exit.
                this.#recvBuffer = Buffer.alloc(0);
                return;
            }
            let msgStart = 0;
            while (true) // eslint-disable-line no-constant-condition
             {
                const readLen = this.#recvBuffer.length - msgStart;
                if (readLen < 4) {
                    // Incomplete data.
                    break;
                }
                const dataView = new DataView(this.#recvBuffer.buffer, this.#recvBuffer.byteOffset + msgStart);
                const msgLen = dataView.getUint32(0, littleEndian);
                if (readLen < 4 + msgLen) {
                    // Incomplete data.
                    break;
                }
                const payload = this.#recvBuffer.subarray(msgStart + 4, msgStart + 4 + msgLen);
                msgStart += 4 + msgLen;
                try {
                    // We can receive JSON messages (Channel messages) or log strings.
                    switch (payload[0]) {
                        // 123 = '{' (a Channel JSON message).
                        case 123:
                            this.processMessage(JSON.parse(payload.toString('utf8')));
                            break;
                        // 68 = 'D' (a debug log).
                        case 68:
                            logger.debug(`[pid:${pid}] ${payload.toString('utf8', 1)}`);
                            break;
                        // 87 = 'W' (a warn log).
                        case 87:
                            logger.warn(`[pid:${pid}] ${payload.toString('utf8', 1)}`);
                            break;
                        // 69 = 'E' (an error log).
                        case 69:
                            logger.error(`[pid:${pid} ${payload.toString('utf8', 1)}`);
                            break;
                        // 88 = 'X' (a dump log).
                        case 88:
                            // eslint-disable-next-line no-console
                            console.log(payload.toString('utf8', 1));
                            break;
                        default:
                            // eslint-disable-next-line no-console
                            console.warn(`worker[pid:${pid}] unexpected data: %s`, payload.toString('utf8', 1));
                    }
                }
                catch (error) {
                    logger.error('received invalid message from the worker process: %s', String(error));
                }
            }
            if (msgStart != 0) {
                this.#recvBuffer = this.#recvBuffer.slice(msgStart);
            }
        });
        this.#consumerSocket.on('end', () => (logger.debug('Consumer Channel ended by the worker process')));
        this.#consumerSocket.on('error', (error) => (logger.error('Consumer Channel error: %s', String(error))));
        this.#producerSocket.on('end', () => (logger.debug('Producer Channel ended by the worker process')));
        this.#producerSocket.on('error', (error) => (logger.error('Producer Channel error: %s', String(error))));
    }
    /**
     * @private
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Close every pending sent.
        for (const sent of this.#sents.values()) {
            sent.close();
        }
        // Remove event listeners but leave a fake 'error' hander to avoid
        // propagation.
        this.#consumerSocket.removeAllListeners('end');
        this.#consumerSocket.removeAllListeners('error');
        this.#consumerSocket.on('error', () => { });
        this.#producerSocket.removeAllListeners('end');
        this.#producerSocket.removeAllListeners('error');
        this.#producerSocket.on('error', () => { });
        // Destroy the socket after a while to allow pending incoming messages.
        setTimeout(() => {
            try {
                this.#producerSocket.destroy();
            }
            catch (error) { }
            try {
                this.#consumerSocket.destroy();
            }
            catch (error) { }
        }, 200);
    }
    /**
     * @private
     */
    async request(method, handlerId, data) {
        this.#nextId < 4294967295 ? ++this.#nextId : (this.#nextId = 1);
        const id = this.#nextId;
        logger.debug('request() [method:%s, id:%s]', method, id);
        if (this.#closed) {
            throw new errors_1.InvalidStateError('Channel closed');
        }
        const request = `${id}:${method}:${handlerId}:${JSON.stringify(data)}`;
        if (Buffer.byteLength(request) > MESSAGE_MAX_LEN) {
            throw new Error('Channel request too big');
        }
        // This may throw if closed or remote side ended.
        this.#producerSocket.write(Buffer.from(Uint32Array.of(Buffer.byteLength(request)).buffer));
        this.#producerSocket.write(request);
        return new Promise((pResolve, pReject) => {
            const sent = {
                id: id,
                method: method,
                resolve: (data2) => {
                    if (!this.#sents.delete(id)) {
                        return;
                    }
                    pResolve(data2);
                },
                reject: (error) => {
                    if (!this.#sents.delete(id)) {
                        return;
                    }
                    pReject(error);
                },
                close: () => {
                    pReject(new errors_1.InvalidStateError('Channel closed'));
                }
            };
            // Add sent stuff to the map.
            this.#sents.set(id, sent);
        });
    }
    processMessage(msg) {
        // If a response, retrieve its associated request.
        if (msg.id) {
            const sent = this.#sents.get(msg.id);
            if (!sent) {
                logger.error('received response does not match any sent request [id:%s]', msg.id);
                return;
            }
            if (msg.accepted) {
                logger.debug('request succeeded [method:%s, id:%s]', sent.method, sent.id);
                sent.resolve(msg.data);
            }
            else if (msg.error) {
                logger.warn('request failed [method:%s, id:%s]: %s', sent.method, sent.id, msg.reason);
                switch (msg.error) {
                    case 'TypeError':
                        sent.reject(new TypeError(msg.reason));
                        break;
                    default:
                        sent.reject(new Error(msg.reason));
                }
            }
            else {
                logger.error('received response is not accepted nor rejected [method:%s, id:%s]', sent.method, sent.id);
            }
        }
        // If a notification emit it to the corresponding entity.
        else if (msg.targetId && msg.event) {
            // Due to how Promises work, it may happen that we receive a response
            // from the worker followed by a notification from the worker. If we
            // emit the notification immediately it may reach its target **before**
            // the response, destroying the ordered delivery. So we must wait a bit
            // here.
            // See https://github.com/versatica/mediasoup/issues/510
            setImmediate(() => this.emit(String(msg.targetId), msg.event, msg.data));
        }
        // Otherwise unexpected message.
        else {
            logger.error('received message is not a response nor a notification');
        }
    }
}
exports.Channel = Channel;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Consumer.js":
/*!*********************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Consumer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Consumer = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('Consumer');
class Consumer extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // Consumer data.
    #data;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Paused flag.
    #paused = false;
    // Associated Producer paused flag.
    #producerPaused = false;
    // Current priority.
    #priority = 1;
    // Current score.
    #score;
    // Preferred layers.
    #preferredLayers;
    // Curent layers.
    #currentLayers;
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, data, channel, payloadChannel, appData, paused, producerPaused, score = { score: 10, producerScore: 10, producerScores: [] }, preferredLayers }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#data = data;
        this.#channel = channel;
        this.#payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.#paused = paused;
        this.#producerPaused = producerPaused;
        this.#score = score;
        this.#preferredLayers = preferredLayers;
        this.handleWorkerNotifications();
    }
    /**
     * Consumer id.
     */
    get id() {
        return this.#internal.consumerId;
    }
    /**
     * Associated Producer id.
     */
    get producerId() {
        return this.#data.producerId;
    }
    /**
     * Whether the Consumer is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * Media kind.
     */
    get kind() {
        return this.#data.kind;
    }
    /**
     * RTP parameters.
     */
    get rtpParameters() {
        return this.#data.rtpParameters;
    }
    /**
     * Consumer type.
     */
    get type() {
        return this.#data.type;
    }
    /**
     * Whether the Consumer is paused.
     */
    get paused() {
        return this.#paused;
    }
    /**
     * Whether the associate Producer is paused.
     */
    get producerPaused() {
        return this.#producerPaused;
    }
    /**
     * Current priority.
     */
    get priority() {
        return this.#priority;
    }
    /**
     * Consumer score.
     */
    get score() {
        return this.#score;
    }
    /**
     * Preferred video layers.
     */
    get preferredLayers() {
        return this.#preferredLayers;
    }
    /**
     * Current video layers.
     */
    get currentLayers() {
        return this.#currentLayers;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get channelForTesting() {
        return this.#channel;
    }
    /**
     * Close the Consumer.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.consumerId);
        this.#payloadChannel.removeAllListeners(this.#internal.consumerId);
        const reqData = { consumerId: this.#internal.consumerId };
        this.#channel.request('transport.closeConsumer', this.#internal.transportId, reqData)
            .catch(() => { });
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Transport was closed.
     *
     * @private
     */
    transportClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('transportClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.consumerId);
        this.#payloadChannel.removeAllListeners(this.#internal.consumerId);
        this.safeEmit('transportclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump Consumer.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('consumer.dump', this.#internal.consumerId);
    }
    /**
     * Get Consumer stats.
     */
    async getStats() {
        logger.debug('getStats()');
        return this.#channel.request('consumer.getStats', this.#internal.consumerId);
    }
    /**
     * Pause the Consumer.
     */
    async pause() {
        logger.debug('pause()');
        const wasPaused = this.#paused || this.#producerPaused;
        await this.#channel.request('consumer.pause', this.#internal.consumerId);
        this.#paused = true;
        // Emit observer event.
        if (!wasPaused) {
            this.#observer.safeEmit('pause');
        }
    }
    /**
     * Resume the Consumer.
     */
    async resume() {
        logger.debug('resume()');
        const wasPaused = this.#paused || this.#producerPaused;
        await this.#channel.request('consumer.resume', this.#internal.consumerId);
        this.#paused = false;
        // Emit observer event.
        if (wasPaused && !this.#producerPaused) {
            this.#observer.safeEmit('resume');
        }
    }
    /**
     * Set preferred video layers.
     */
    async setPreferredLayers({ spatialLayer, temporalLayer }) {
        logger.debug('setPreferredLayers()');
        const reqData = { spatialLayer, temporalLayer };
        const data = await this.#channel.request('consumer.setPreferredLayers', this.#internal.consumerId, reqData);
        this.#preferredLayers = data || undefined;
    }
    /**
     * Set priority.
     */
    async setPriority(priority) {
        logger.debug('setPriority()');
        const reqData = { priority };
        const data = await this.#channel.request('consumer.setPriority', this.#internal.consumerId, reqData);
        this.#priority = data.priority;
    }
    /**
     * Unset priority.
     */
    async unsetPriority() {
        logger.debug('unsetPriority()');
        const reqData = { priority: 1 };
        const data = await this.#channel.request('consumer.setPriority', this.#internal.consumerId, reqData);
        this.#priority = data.priority;
    }
    /**
     * Request a key frame to the Producer.
     */
    async requestKeyFrame() {
        logger.debug('requestKeyFrame()');
        await this.#channel.request('consumer.requestKeyFrame', this.#internal.consumerId);
    }
    /**
     * Enable 'trace' event.
     */
    async enableTraceEvent(types = []) {
        logger.debug('enableTraceEvent()');
        const reqData = { types };
        await this.#channel.request('consumer.enableTraceEvent', this.#internal.consumerId, reqData);
    }
    handleWorkerNotifications() {
        this.#channel.on(this.#internal.consumerId, (event, data) => {
            switch (event) {
                case 'producerclose':
                    {
                        if (this.#closed) {
                            break;
                        }
                        this.#closed = true;
                        // Remove notification subscriptions.
                        this.#channel.removeAllListeners(this.#internal.consumerId);
                        this.#payloadChannel.removeAllListeners(this.#internal.consumerId);
                        this.emit('@producerclose');
                        this.safeEmit('producerclose');
                        // Emit observer event.
                        this.#observer.safeEmit('close');
                        break;
                    }
                case 'producerpause':
                    {
                        if (this.#producerPaused) {
                            break;
                        }
                        const wasPaused = this.#paused || this.#producerPaused;
                        this.#producerPaused = true;
                        this.safeEmit('producerpause');
                        // Emit observer event.
                        if (!wasPaused) {
                            this.#observer.safeEmit('pause');
                        }
                        break;
                    }
                case 'producerresume':
                    {
                        if (!this.#producerPaused) {
                            break;
                        }
                        const wasPaused = this.#paused || this.#producerPaused;
                        this.#producerPaused = false;
                        this.safeEmit('producerresume');
                        // Emit observer event.
                        if (wasPaused && !this.#paused) {
                            this.#observer.safeEmit('resume');
                        }
                        break;
                    }
                case 'score':
                    {
                        const score = data;
                        this.#score = score;
                        this.safeEmit('score', score);
                        // Emit observer event.
                        this.#observer.safeEmit('score', score);
                        break;
                    }
                case 'layerschange':
                    {
                        const layers = data;
                        this.#currentLayers = layers;
                        this.safeEmit('layerschange', layers);
                        // Emit observer event.
                        this.#observer.safeEmit('layerschange', layers);
                        break;
                    }
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.#observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
        this.#payloadChannel.on(this.#internal.consumerId, (event, data, payload) => {
            switch (event) {
                case 'rtp':
                    {
                        if (this.#closed) {
                            break;
                        }
                        const packet = payload;
                        this.safeEmit('rtp', packet);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.Consumer = Consumer;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/DataConsumer.js":
/*!*************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/DataConsumer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataConsumer = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('DataConsumer');
class DataConsumer extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // DataConsumer data.
    #data;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, data, channel, payloadChannel, appData }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#data = data;
        this.#channel = channel;
        this.#payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.handleWorkerNotifications();
    }
    /**
     * DataConsumer id.
     */
    get id() {
        return this.#internal.dataConsumerId;
    }
    /**
     * Associated DataProducer id.
     */
    get dataProducerId() {
        return this.#data.dataProducerId;
    }
    /**
     * Whether the DataConsumer is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * DataConsumer type.
     */
    get type() {
        return this.#data.type;
    }
    /**
     * SCTP stream parameters.
     */
    get sctpStreamParameters() {
        return this.#data.sctpStreamParameters;
    }
    /**
     * DataChannel label.
     */
    get label() {
        return this.#data.label;
    }
    /**
     * DataChannel protocol.
     */
    get protocol() {
        return this.#data.protocol;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * Close the DataConsumer.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.dataConsumerId);
        this.#payloadChannel.removeAllListeners(this.#internal.dataConsumerId);
        const reqData = { dataConsumerId: this.#internal.dataConsumerId };
        this.#channel.request('transport.closeDataConsumer', this.#internal.transportId, reqData)
            .catch(() => { });
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Transport was closed.
     *
     * @private
     */
    transportClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('transportClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.dataConsumerId);
        this.#payloadChannel.removeAllListeners(this.#internal.dataConsumerId);
        this.safeEmit('transportclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump DataConsumer.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('dataConsumer.dump', this.#internal.dataConsumerId);
    }
    /**
     * Get DataConsumer stats.
     */
    async getStats() {
        logger.debug('getStats()');
        return this.#channel.request('dataConsumer.getStats', this.#internal.dataConsumerId);
    }
    /**
     * Set buffered amount low threshold.
     */
    async setBufferedAmountLowThreshold(threshold) {
        logger.debug('setBufferedAmountLowThreshold() [threshold:%s]', threshold);
        const reqData = { threshold };
        await this.#channel.request('dataConsumer.setBufferedAmountLowThreshold', this.#internal.dataConsumerId, reqData);
    }
    /**
     * Send data.
     */
    async send(message, ppid) {
        if (typeof message !== 'string' && !Buffer.isBuffer(message)) {
            throw new TypeError('message must be a string or a Buffer');
        }
        /*
         * +-------------------------------+----------+
         * | Value                         | SCTP     |
         * |                               | PPID     |
         * +-------------------------------+----------+
         * | WebRTC String                 | 51       |
         * | WebRTC Binary Partial         | 52       |
         * | (Deprecated)                  |          |
         * | WebRTC Binary                 | 53       |
         * | WebRTC String Partial         | 54       |
         * | (Deprecated)                  |          |
         * | WebRTC String Empty           | 56       |
         * | WebRTC Binary Empty           | 57       |
         * +-------------------------------+----------+
         */
        if (typeof ppid !== 'number') {
            ppid = (typeof message === 'string')
                ? message.length > 0 ? 51 : 56
                : message.length > 0 ? 53 : 57;
        }
        // Ensure we honor PPIDs.
        if (ppid === 56) {
            message = ' ';
        }
        else if (ppid === 57) {
            message = Buffer.alloc(1);
        }
        const requestData = String(ppid);
        await this.#payloadChannel.request('dataConsumer.send', this.#internal.dataConsumerId, requestData, message);
    }
    /**
     * Get buffered amount size.
     */
    async getBufferedAmount() {
        logger.debug('getBufferedAmount()');
        const { bufferedAmount } = await this.#channel.request('dataConsumer.getBufferedAmount', this.#internal.dataConsumerId);
        return bufferedAmount;
    }
    handleWorkerNotifications() {
        this.#channel.on(this.#internal.dataConsumerId, (event, data) => {
            switch (event) {
                case 'dataproducerclose':
                    {
                        if (this.#closed) {
                            break;
                        }
                        this.#closed = true;
                        // Remove notification subscriptions.
                        this.#channel.removeAllListeners(this.#internal.dataConsumerId);
                        this.#payloadChannel.removeAllListeners(this.#internal.dataConsumerId);
                        this.emit('@dataproducerclose');
                        this.safeEmit('dataproducerclose');
                        // Emit observer event.
                        this.#observer.safeEmit('close');
                        break;
                    }
                case 'sctpsendbufferfull':
                    {
                        this.safeEmit('sctpsendbufferfull');
                        break;
                    }
                case 'bufferedamountlow':
                    {
                        const { bufferedAmount } = data;
                        this.safeEmit('bufferedamountlow', bufferedAmount);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s" in channel listener', event);
                    }
            }
        });
        this.#payloadChannel.on(this.#internal.dataConsumerId, (event, data, payload) => {
            switch (event) {
                case 'message':
                    {
                        if (this.#closed) {
                            break;
                        }
                        const ppid = data.ppid;
                        const message = payload;
                        this.safeEmit('message', message, ppid);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s" in payload channel listener', event);
                    }
            }
        });
    }
}
exports.DataConsumer = DataConsumer;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/DataProducer.js":
/*!*************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/DataProducer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataProducer = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('DataProducer');
class DataProducer extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // DataProducer data.
    #data;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, data, channel, payloadChannel, appData }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#data = data;
        this.#channel = channel;
        this.#payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.handleWorkerNotifications();
    }
    /**
     * DataProducer id.
     */
    get id() {
        return this.#internal.dataProducerId;
    }
    /**
     * Whether the DataProducer is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * DataProducer type.
     */
    get type() {
        return this.#data.type;
    }
    /**
     * SCTP stream parameters.
     */
    get sctpStreamParameters() {
        return this.#data.sctpStreamParameters;
    }
    /**
     * DataChannel label.
     */
    get label() {
        return this.#data.label;
    }
    /**
     * DataChannel protocol.
     */
    get protocol() {
        return this.#data.protocol;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * Close the DataProducer.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.dataProducerId);
        this.#payloadChannel.removeAllListeners(this.#internal.dataProducerId);
        const reqData = { dataProducerId: this.#internal.dataProducerId };
        this.#channel.request('transport.closeDataProducer', this.#internal.transportId, reqData)
            .catch(() => { });
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Transport was closed.
     *
     * @private
     */
    transportClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('transportClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.dataProducerId);
        this.#payloadChannel.removeAllListeners(this.#internal.dataProducerId);
        this.safeEmit('transportclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump DataProducer.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('dataProducer.dump', this.#internal.dataProducerId);
    }
    /**
     * Get DataProducer stats.
     */
    async getStats() {
        logger.debug('getStats()');
        return this.#channel.request('dataProducer.getStats', this.#internal.dataProducerId);
    }
    /**
     * Send data (just valid for DataProducers created on a DirectTransport).
     */
    send(message, ppid) {
        if (typeof message !== 'string' && !Buffer.isBuffer(message)) {
            throw new TypeError('message must be a string or a Buffer');
        }
        /*
         * +-------------------------------+----------+
         * | Value                         | SCTP     |
         * |                               | PPID     |
         * +-------------------------------+----------+
         * | WebRTC String                 | 51       |
         * | WebRTC Binary Partial         | 52       |
         * | (Deprecated)                  |          |
         * | WebRTC Binary                 | 53       |
         * | WebRTC String Partial         | 54       |
         * | (Deprecated)                  |          |
         * | WebRTC String Empty           | 56       |
         * | WebRTC Binary Empty           | 57       |
         * +-------------------------------+----------+
         */
        if (typeof ppid !== 'number') {
            ppid = (typeof message === 'string')
                ? message.length > 0 ? 51 : 56
                : message.length > 0 ? 53 : 57;
        }
        // Ensure we honor PPIDs.
        if (ppid === 56) {
            message = ' ';
        }
        else if (ppid === 57) {
            message = Buffer.alloc(1);
        }
        const notifData = String(ppid);
        this.#payloadChannel.notify('dataProducer.send', this.#internal.dataProducerId, notifData, message);
    }
    handleWorkerNotifications() {
        // No need to subscribe to any event.
    }
}
exports.DataProducer = DataProducer;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/DirectTransport.js":
/*!****************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/DirectTransport.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DirectTransport = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const errors_1 = __webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js");
const Transport_1 = __webpack_require__(/*! ./Transport */ "../../node_modules/mediasoup/node/lib/Transport.js");
const logger = new Logger_1.Logger('DirectTransport');
class DirectTransport extends Transport_1.Transport {
    // DirectTransport data.
    #data;
    /**
     * @private
     */
    constructor(options) {
        super(options);
        logger.debug('constructor()');
        this.#data =
            {
            // Nothing.
            };
        this.handleWorkerNotifications();
    }
    /**
     * Close the DirectTransport.
     *
     * @override
     */
    close() {
        if (this.closed) {
            return;
        }
        super.close();
    }
    /**
     * Router was closed.
     *
     * @private
     * @override
     */
    routerClosed() {
        if (this.closed) {
            return;
        }
        super.routerClosed();
    }
    /**
     * Get DirectTransport stats.
     *
     * @override
     */
    async getStats() {
        logger.debug('getStats()');
        return this.channel.request('transport.getStats', this.internal.transportId);
    }
    /**
     * NO-OP method in DirectTransport.
     *
     * @override
     */
    async connect() {
        logger.debug('connect()');
    }
    /**
     * @override
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async setMaxIncomingBitrate(bitrate) {
        throw new errors_1.UnsupportedError('setMaxIncomingBitrate() not implemented in DirectTransport');
    }
    /**
     * @override
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async setMaxOutgoingBitrate(bitrate) {
        throw new errors_1.UnsupportedError('setMaxOutgoingBitrate() not implemented in DirectTransport');
    }
    /**
     * @override
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async setMinOutgoingBitrate(bitrate) {
        throw new errors_1.UnsupportedError('setMinOutgoingBitrate() not implemented in DirectTransport');
    }
    /**
     * Send RTCP packet.
     */
    sendRtcp(rtcpPacket) {
        if (!Buffer.isBuffer(rtcpPacket)) {
            throw new TypeError('rtcpPacket must be a Buffer');
        }
        this.payloadChannel.notify('transport.sendRtcp', this.internal.transportId, undefined, rtcpPacket);
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.transportId, (event, data) => {
            switch (event) {
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
        this.payloadChannel.on(this.internal.transportId, (event, data, payload) => {
            switch (event) {
                case 'rtcp':
                    {
                        if (this.closed) {
                            break;
                        }
                        const packet = payload;
                        this.safeEmit('rtcp', packet);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.DirectTransport = DirectTransport;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnhancedEventEmitter = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const logger = new Logger_1.Logger('EnhancedEventEmitter');
class EnhancedEventEmitter extends events_1.EventEmitter {
    constructor() {
        super();
        this.setMaxListeners(Infinity);
    }
    emit(eventName, ...args) {
        return super.emit(eventName, ...args);
    }
    /**
     * Special addition to the EventEmitter API.
     */
    safeEmit(eventName, ...args) {
        const numListeners = super.listenerCount(eventName);
        try {
            return super.emit(eventName, ...args);
        }
        catch (error) {
            logger.error('safeEmit() | event listener threw an error [eventName:%s]:%o', eventName, error);
            return Boolean(numListeners);
        }
    }
    on(eventName, listener) {
        super.on(eventName, listener);
        return this;
    }
    off(eventName, listener) {
        super.off(eventName, listener);
        return this;
    }
    addListener(eventName, listener) {
        super.on(eventName, listener);
        return this;
    }
    prependListener(eventName, listener) {
        super.prependListener(eventName, listener);
        return this;
    }
    once(eventName, listener) {
        super.once(eventName, listener);
        return this;
    }
    prependOnceListener(eventName, listener) {
        super.prependOnceListener(eventName, listener);
        return this;
    }
    removeListener(eventName, listener) {
        super.off(eventName, listener);
        return this;
    }
    removeAllListeners(eventName) {
        super.removeAllListeners(eventName);
        return this;
    }
    listenerCount(eventName) {
        return super.listenerCount(eventName);
    }
    listeners(eventName) {
        return super.listeners(eventName);
    }
    rawListeners(eventName) {
        return super.rawListeners(eventName);
    }
}
exports.EnhancedEventEmitter = EnhancedEventEmitter;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Logger.js":
/*!*******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Logger.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/mediasoup/node_modules/debug/src/index.js");
const APP_NAME = 'mediasoup';
class Logger {
    #debug;
    #warn;
    #error;
    constructor(prefix) {
        if (prefix) {
            this.#debug = (0, debug_1.default)(`${APP_NAME}:${prefix}`);
            this.#warn = (0, debug_1.default)(`${APP_NAME}:WARN:${prefix}`);
            this.#error = (0, debug_1.default)(`${APP_NAME}:ERROR:${prefix}`);
        }
        else {
            this.#debug = (0, debug_1.default)(APP_NAME);
            this.#warn = (0, debug_1.default)(`${APP_NAME}:WARN`);
            this.#error = (0, debug_1.default)(`${APP_NAME}:ERROR`);
        }
        /* eslint-disable no-console */
        this.#debug.log = console.info.bind(console);
        this.#warn.log = console.warn.bind(console);
        this.#error.log = console.error.bind(console);
        /* eslint-enable no-console */
    }
    get debug() {
        return this.#debug;
    }
    get warn() {
        return this.#warn;
    }
    get error() {
        return this.#error;
    }
}
exports.Logger = Logger;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/PayloadChannel.js":
/*!***************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/PayloadChannel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayloadChannel = void 0;
const os = __webpack_require__(/*! os */ "os");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const errors_1 = __webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js");
const littleEndian = os.endianness() == 'LE';
const logger = new Logger_1.Logger('PayloadChannel');
// Binary length for a 4194304 bytes payload.
const MESSAGE_MAX_LEN = 4194308;
const PAYLOAD_MAX_LEN = 4194304;
class PayloadChannel extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Closed flag.
    #closed = false;
    // Unix Socket instance for sending messages to the worker process.
    #producerSocket;
    // Unix Socket instance for receiving messages to the worker process.
    #consumerSocket;
    // Next id for messages sent to the worker process.
    #nextId = 0;
    // Map of pending sent requests.
    #sents = new Map();
    // Buffer for reading messages from the worker.
    #recvBuffer = Buffer.alloc(0);
    // Ongoing notification (waiting for its payload).
    #ongoingNotification;
    /**
     * @private
     */
    constructor({ producerSocket, consumerSocket }) {
        super();
        logger.debug('constructor()');
        this.#producerSocket = producerSocket;
        this.#consumerSocket = consumerSocket;
        // Read PayloadChannel notifications from the worker.
        this.#consumerSocket.on('data', (buffer) => {
            if (!this.#recvBuffer.length) {
                this.#recvBuffer = buffer;
            }
            else {
                this.#recvBuffer = Buffer.concat([this.#recvBuffer, buffer], this.#recvBuffer.length + buffer.length);
            }
            if (this.#recvBuffer.length > PAYLOAD_MAX_LEN) {
                logger.error('receiving buffer is full, discarding all data in it');
                // Reset the buffer and exit.
                this.#recvBuffer = Buffer.alloc(0);
                return;
            }
            let msgStart = 0;
            while (true) // eslint-disable-line no-constant-condition
             {
                const readLen = this.#recvBuffer.length - msgStart;
                if (readLen < 4) {
                    // Incomplete data.
                    break;
                }
                const dataView = new DataView(this.#recvBuffer.buffer, this.#recvBuffer.byteOffset + msgStart);
                const msgLen = dataView.getUint32(0, littleEndian);
                if (readLen < 4 + msgLen) {
                    // Incomplete data.
                    break;
                }
                const payload = this.#recvBuffer.subarray(msgStart + 4, msgStart + 4 + msgLen);
                msgStart += 4 + msgLen;
                this.processData(payload);
            }
            if (msgStart != 0) {
                this.#recvBuffer = this.#recvBuffer.slice(msgStart);
            }
        });
        this.#consumerSocket.on('end', () => (logger.debug('Consumer PayloadChannel ended by the worker process')));
        this.#consumerSocket.on('error', (error) => (logger.error('Consumer PayloadChannel error: %s', String(error))));
        this.#producerSocket.on('end', () => (logger.debug('Producer PayloadChannel ended by the worker process')));
        this.#producerSocket.on('error', (error) => (logger.error('Producer PayloadChannel error: %s', String(error))));
    }
    /**
     * @private
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove event listeners but leave a fake 'error' handler to avoid
        // propagation.
        this.#consumerSocket.removeAllListeners('end');
        this.#consumerSocket.removeAllListeners('error');
        this.#consumerSocket.on('error', () => { });
        this.#producerSocket.removeAllListeners('end');
        this.#producerSocket.removeAllListeners('error');
        this.#producerSocket.on('error', () => { });
        // Destroy the socket after a while to allow pending incoming messages.
        setTimeout(() => {
            try {
                this.#producerSocket.destroy();
            }
            catch (error) { }
            try {
                this.#consumerSocket.destroy();
            }
            catch (error) { }
        }, 200);
    }
    /**
     * @private
     */
    notify(event, handlerId, data, payload) {
        logger.debug('notify() [event:%s]', event);
        if (this.#closed) {
            throw new errors_1.InvalidStateError('PayloadChannel closed');
        }
        const notification = `n:${event}:${handlerId}:${data}`;
        if (Buffer.byteLength(notification) > MESSAGE_MAX_LEN) {
            throw new Error('PayloadChannel notification too big');
        }
        else if (Buffer.byteLength(payload) > MESSAGE_MAX_LEN) {
            throw new Error('PayloadChannel payload too big');
        }
        try {
            // This may throw if closed or remote side ended.
            this.#producerSocket.write(Buffer.from(Uint32Array.of(Buffer.byteLength(notification)).buffer));
            this.#producerSocket.write(notification);
        }
        catch (error) {
            logger.warn('notify() | sending notification failed: %s', String(error));
            return;
        }
        try {
            // This may throw if closed or remote side ended.
            this.#producerSocket.write(Buffer.from(Uint32Array.of(Buffer.byteLength(payload)).buffer));
            this.#producerSocket.write(payload);
        }
        catch (error) {
            logger.warn('notify() | sending payload failed: %s', String(error));
            return;
        }
    }
    /**
     * @private
     */
    async request(method, handlerId, data, payload) {
        this.#nextId < 4294967295 ? ++this.#nextId : (this.#nextId = 1);
        const id = this.#nextId;
        logger.debug('request() [method:%s, id:%s]', method, id);
        if (this.#closed) {
            throw new errors_1.InvalidStateError('PayloadChannel closed');
        }
        const request = `r:${id}:${method}:${handlerId}:${data}`;
        if (Buffer.byteLength(request) > MESSAGE_MAX_LEN) {
            throw new Error('PayloadChannel request too big');
        }
        else if (Buffer.byteLength(payload) > MESSAGE_MAX_LEN) {
            throw new Error('PayloadChannel payload too big');
        }
        // This may throw if closed or remote side ended.
        this.#producerSocket.write(Buffer.from(Uint32Array.of(Buffer.byteLength(request)).buffer));
        this.#producerSocket.write(request);
        this.#producerSocket.write(Buffer.from(Uint32Array.of(Buffer.byteLength(payload)).buffer));
        this.#producerSocket.write(payload);
        return new Promise((pResolve, pReject) => {
            const sent = {
                id: id,
                method: method,
                resolve: (data2) => {
                    if (!this.#sents.delete(id)) {
                        return;
                    }
                    pResolve(data2);
                },
                reject: (error) => {
                    if (!this.#sents.delete(id)) {
                        return;
                    }
                    pReject(error);
                },
                close: () => {
                    pReject(new errors_1.InvalidStateError('PayloadChannel closed'));
                }
            };
            // Add sent stuff to the map.
            this.#sents.set(id, sent);
        });
    }
    processData(data) {
        if (!this.#ongoingNotification) {
            let msg;
            try {
                msg = JSON.parse(data.toString('utf8'));
            }
            catch (error) {
                logger.error('received invalid data from the worker process: %s', String(error));
                return;
            }
            // If a response, retrieve its associated request.
            if (msg.id) {
                const sent = this.#sents.get(msg.id);
                if (!sent) {
                    logger.error('received response does not match any sent request [id:%s]', msg.id);
                    return;
                }
                if (msg.accepted) {
                    logger.debug('request succeeded [method:%s, id:%s]', sent.method, sent.id);
                    sent.resolve(msg.data);
                }
                else if (msg.error) {
                    logger.warn('request failed [method:%s, id:%s]: %s', sent.method, sent.id, msg.reason);
                    switch (msg.error) {
                        case 'TypeError':
                            sent.reject(new TypeError(msg.reason));
                            break;
                        default:
                            sent.reject(new Error(msg.reason));
                    }
                }
                else {
                    logger.error('received response is not accepted nor rejected [method:%s, id:%s]', sent.method, sent.id);
                }
            }
            // If a notification, create the ongoing notification instance.
            else if (msg.targetId && msg.event) {
                this.#ongoingNotification =
                    {
                        targetId: String(msg.targetId),
                        event: msg.event,
                        data: msg.data
                    };
            }
            else {
                logger.error('received data is not a notification nor a response');
                return;
            }
        }
        else {
            const payload = data;
            // Emit the corresponding event.
            this.emit(this.#ongoingNotification.targetId, this.#ongoingNotification.event, this.#ongoingNotification.data, payload);
            // Unset ongoing notification.
            this.#ongoingNotification = undefined;
        }
    }
}
exports.PayloadChannel = PayloadChannel;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/PipeTransport.js":
/*!**************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/PipeTransport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PipeTransport = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-node/index.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const ortc = __webpack_require__(/*! ./ortc */ "../../node_modules/mediasoup/node/lib/ortc.js");
const Transport_1 = __webpack_require__(/*! ./Transport */ "../../node_modules/mediasoup/node/lib/Transport.js");
const Consumer_1 = __webpack_require__(/*! ./Consumer */ "../../node_modules/mediasoup/node/lib/Consumer.js");
const logger = new Logger_1.Logger('PipeTransport');
class PipeTransport extends Transport_1.Transport {
    // PipeTransport data.
    #data;
    /**
     * @private
     */
    constructor(options) {
        super(options);
        logger.debug('constructor()');
        const { data } = options;
        this.#data =
            {
                tuple: data.tuple,
                sctpParameters: data.sctpParameters,
                sctpState: data.sctpState,
                rtx: data.rtx,
                srtpParameters: data.srtpParameters
            };
        this.handleWorkerNotifications();
    }
    /**
     * Transport tuple.
     */
    get tuple() {
        return this.#data.tuple;
    }
    /**
     * SCTP parameters.
     */
    get sctpParameters() {
        return this.#data.sctpParameters;
    }
    /**
     * SCTP state.
     */
    get sctpState() {
        return this.#data.sctpState;
    }
    /**
     * SRTP parameters.
     */
    get srtpParameters() {
        return this.#data.srtpParameters;
    }
    /**
     * Close the PipeTransport.
     *
     * @override
     */
    close() {
        if (this.closed) {
            return;
        }
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.close();
    }
    /**
     * Router was closed.
     *
     * @private
     * @override
     */
    routerClosed() {
        if (this.closed) {
            return;
        }
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.routerClosed();
    }
    /**
     * Get PipeTransport stats.
     *
     * @override
     */
    async getStats() {
        logger.debug('getStats()');
        return this.channel.request('transport.getStats', this.internal.transportId);
    }
    /**
     * Provide the PipeTransport remote parameters.
     *
     * @override
     */
    async connect({ ip, port, srtpParameters }) {
        logger.debug('connect()');
        const reqData = { ip, port, srtpParameters };
        const data = await this.channel.request('transport.connect', this.internal.transportId, reqData);
        // Update data.
        this.#data.tuple = data.tuple;
    }
    /**
     * Create a pipe Consumer.
     *
     * @override
     */
    async consume({ producerId, appData }) {
        logger.debug('consume()');
        if (!producerId || typeof producerId !== 'string') {
            throw new TypeError('missing producerId');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        const producer = this.getProducerById(producerId);
        if (!producer) {
            throw Error(`Producer with id "${producerId}" not found`);
        }
        // This may throw.
        const rtpParameters = ortc.getPipeConsumerRtpParameters({
            consumableRtpParameters: producer.consumableRtpParameters,
            enableRtx: this.#data.rtx
        });
        const reqData = {
            consumerId: (0, uuid_1.v4)(),
            producerId,
            kind: producer.kind,
            rtpParameters,
            type: 'pipe',
            consumableRtpEncodings: producer.consumableRtpParameters.encodings
        };
        const status = await this.channel.request('transport.consume', this.internal.transportId, reqData);
        const data = {
            producerId,
            kind: producer.kind,
            rtpParameters,
            type: 'pipe'
        };
        const consumer = new Consumer_1.Consumer({
            internal: {
                ...this.internal,
                consumerId: reqData.consumerId
            },
            data,
            channel: this.channel,
            payloadChannel: this.payloadChannel,
            appData,
            paused: status.paused,
            producerPaused: status.producerPaused
        });
        this.consumers.set(consumer.id, consumer);
        consumer.on('@close', () => this.consumers.delete(consumer.id));
        consumer.on('@producerclose', () => this.consumers.delete(consumer.id));
        // Emit observer event.
        this.observer.safeEmit('newconsumer', consumer);
        return consumer;
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.transportId, (event, data) => {
            switch (event) {
                case 'sctpstatechange':
                    {
                        const sctpState = data.sctpState;
                        this.#data.sctpState = sctpState;
                        this.safeEmit('sctpstatechange', sctpState);
                        // Emit observer event.
                        this.observer.safeEmit('sctpstatechange', sctpState);
                        break;
                    }
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.PipeTransport = PipeTransport;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/PlainTransport.js":
/*!***************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/PlainTransport.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlainTransport = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const Transport_1 = __webpack_require__(/*! ./Transport */ "../../node_modules/mediasoup/node/lib/Transport.js");
const logger = new Logger_1.Logger('PlainTransport');
class PlainTransport extends Transport_1.Transport {
    // PlainTransport data.
    #data;
    /**
     * @private
     */
    constructor(options) {
        super(options);
        logger.debug('constructor()');
        const { data } = options;
        this.#data =
            {
                rtcpMux: data.rtcpMux,
                comedia: data.comedia,
                tuple: data.tuple,
                rtcpTuple: data.rtcpTuple,
                sctpParameters: data.sctpParameters,
                sctpState: data.sctpState,
                srtpParameters: data.srtpParameters
            };
        this.handleWorkerNotifications();
    }
    /**
     * Transport tuple.
     */
    get tuple() {
        return this.#data.tuple;
    }
    /**
     * Transport RTCP tuple.
     */
    get rtcpTuple() {
        return this.#data.rtcpTuple;
    }
    /**
     * SCTP parameters.
     */
    get sctpParameters() {
        return this.#data.sctpParameters;
    }
    /**
     * SCTP state.
     */
    get sctpState() {
        return this.#data.sctpState;
    }
    /**
     * SRTP parameters.
     */
    get srtpParameters() {
        return this.#data.srtpParameters;
    }
    /**
     * Close the PlainTransport.
     *
     * @override
     */
    close() {
        if (this.closed) {
            return;
        }
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.close();
    }
    /**
     * Router was closed.
     *
     * @private
     * @override
     */
    routerClosed() {
        if (this.closed) {
            return;
        }
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.routerClosed();
    }
    /**
     * Get PlainTransport stats.
     *
     * @override
     */
    async getStats() {
        logger.debug('getStats()');
        return this.channel.request('transport.getStats', this.internal.transportId);
    }
    /**
     * Provide the PlainTransport remote parameters.
     *
     * @override
     */
    async connect({ ip, port, rtcpPort, srtpParameters }) {
        logger.debug('connect()');
        const reqData = { ip, port, rtcpPort, srtpParameters };
        const data = await this.channel.request('transport.connect', this.internal.transportId, reqData);
        // Update data.
        if (data.tuple) {
            this.#data.tuple = data.tuple;
        }
        if (data.rtcpTuple) {
            this.#data.rtcpTuple = data.rtcpTuple;
        }
        this.#data.srtpParameters = data.srtpParameters;
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.transportId, (event, data) => {
            switch (event) {
                case 'tuple':
                    {
                        const tuple = data.tuple;
                        this.#data.tuple = tuple;
                        this.safeEmit('tuple', tuple);
                        // Emit observer event.
                        this.observer.safeEmit('tuple', tuple);
                        break;
                    }
                case 'rtcptuple':
                    {
                        const rtcpTuple = data.rtcpTuple;
                        this.#data.rtcpTuple = rtcpTuple;
                        this.safeEmit('rtcptuple', rtcpTuple);
                        // Emit observer event.
                        this.observer.safeEmit('rtcptuple', rtcpTuple);
                        break;
                    }
                case 'sctpstatechange':
                    {
                        const sctpState = data.sctpState;
                        this.#data.sctpState = sctpState;
                        this.safeEmit('sctpstatechange', sctpState);
                        // Emit observer event.
                        this.observer.safeEmit('sctpstatechange', sctpState);
                        break;
                    }
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.PlainTransport = PlainTransport;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Producer.js":
/*!*********************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Producer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Producer = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('Producer');
class Producer extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // Producer data.
    #data;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Paused flag.
    #paused = false;
    // Current score.
    #score = [];
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, data, channel, payloadChannel, appData, paused }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#data = data;
        this.#channel = channel;
        this.#payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.#paused = paused;
        this.handleWorkerNotifications();
    }
    /**
     * Producer id.
     */
    get id() {
        return this.#internal.producerId;
    }
    /**
     * Whether the Producer is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * Media kind.
     */
    get kind() {
        return this.#data.kind;
    }
    /**
     * RTP parameters.
     */
    get rtpParameters() {
        return this.#data.rtpParameters;
    }
    /**
     * Producer type.
     */
    get type() {
        return this.#data.type;
    }
    /**
     * Consumable RTP parameters.
     *
     * @private
     */
    get consumableRtpParameters() {
        return this.#data.consumableRtpParameters;
    }
    /**
     * Whether the Producer is paused.
     */
    get paused() {
        return this.#paused;
    }
    /**
     * Producer score list.
     */
    get score() {
        return this.#score;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get channelForTesting() {
        return this.#channel;
    }
    /**
     * Close the Producer.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.producerId);
        this.#payloadChannel.removeAllListeners(this.#internal.producerId);
        const reqData = { producerId: this.#internal.producerId };
        this.#channel.request('transport.closeProducer', this.#internal.transportId, reqData)
            .catch(() => { });
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Transport was closed.
     *
     * @private
     */
    transportClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('transportClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.#channel.removeAllListeners(this.#internal.producerId);
        this.#payloadChannel.removeAllListeners(this.#internal.producerId);
        this.safeEmit('transportclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump Producer.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('producer.dump', this.#internal.producerId);
    }
    /**
     * Get Producer stats.
     */
    async getStats() {
        logger.debug('getStats()');
        return this.#channel.request('producer.getStats', this.#internal.producerId);
    }
    /**
     * Pause the Producer.
     */
    async pause() {
        logger.debug('pause()');
        const wasPaused = this.#paused;
        await this.#channel.request('producer.pause', this.#internal.producerId);
        this.#paused = true;
        // Emit observer event.
        if (!wasPaused) {
            this.#observer.safeEmit('pause');
        }
    }
    /**
     * Resume the Producer.
     */
    async resume() {
        logger.debug('resume()');
        const wasPaused = this.#paused;
        await this.#channel.request('producer.resume', this.#internal.producerId);
        this.#paused = false;
        // Emit observer event.
        if (wasPaused) {
            this.#observer.safeEmit('resume');
        }
    }
    /**
     * Enable 'trace' event.
     */
    async enableTraceEvent(types = []) {
        logger.debug('enableTraceEvent()');
        const reqData = { types };
        await this.#channel.request('producer.enableTraceEvent', this.#internal.producerId, reqData);
    }
    /**
     * Send RTP packet (just valid for Producers created on a DirectTransport).
     */
    send(rtpPacket) {
        if (!Buffer.isBuffer(rtpPacket)) {
            throw new TypeError('rtpPacket must be a Buffer');
        }
        this.#payloadChannel.notify('producer.send', this.#internal.producerId, undefined, rtpPacket);
    }
    handleWorkerNotifications() {
        this.#channel.on(this.#internal.producerId, (event, data) => {
            switch (event) {
                case 'score':
                    {
                        const score = data;
                        this.#score = score;
                        this.safeEmit('score', score);
                        // Emit observer event.
                        this.#observer.safeEmit('score', score);
                        break;
                    }
                case 'videoorientationchange':
                    {
                        const videoOrientation = data;
                        this.safeEmit('videoorientationchange', videoOrientation);
                        // Emit observer event.
                        this.#observer.safeEmit('videoorientationchange', videoOrientation);
                        break;
                    }
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.#observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.Producer = Producer;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Router.js":
/*!*******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-node/index.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const ortc = __webpack_require__(/*! ./ortc */ "../../node_modules/mediasoup/node/lib/ortc.js");
const errors_1 = __webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js");
const WebRtcTransport_1 = __webpack_require__(/*! ./WebRtcTransport */ "../../node_modules/mediasoup/node/lib/WebRtcTransport.js");
const PlainTransport_1 = __webpack_require__(/*! ./PlainTransport */ "../../node_modules/mediasoup/node/lib/PlainTransport.js");
const PipeTransport_1 = __webpack_require__(/*! ./PipeTransport */ "../../node_modules/mediasoup/node/lib/PipeTransport.js");
const DirectTransport_1 = __webpack_require__(/*! ./DirectTransport */ "../../node_modules/mediasoup/node/lib/DirectTransport.js");
const ActiveSpeakerObserver_1 = __webpack_require__(/*! ./ActiveSpeakerObserver */ "../../node_modules/mediasoup/node/lib/ActiveSpeakerObserver.js");
const AudioLevelObserver_1 = __webpack_require__(/*! ./AudioLevelObserver */ "../../node_modules/mediasoup/node/lib/AudioLevelObserver.js");
const logger = new Logger_1.Logger('Router');
class Router extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // Router data.
    #data;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Transports map.
    #transports = new Map();
    // Producers map.
    #producers = new Map();
    // RtpObservers map.
    #rtpObservers = new Map();
    // DataProducers map.
    #dataProducers = new Map();
    // Map of PipeTransport pair Promises indexed by the id of the Router in
    // which pipeToRouter() was called.
    #mapRouterPairPipeTransportPairPromise = new Map();
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, data, channel, payloadChannel, appData }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#data = data;
        this.#channel = channel;
        this.#payloadChannel = payloadChannel;
        this.#appData = appData || {};
    }
    /**
     * Router id.
     */
    get id() {
        return this.#internal.routerId;
    }
    /**
     * Whether the Router is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * RTP capabilities of the Router.
     */
    get rtpCapabilities() {
        return this.#data.rtpCapabilities;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get transportsForTesting() {
        return this.#transports;
    }
    /**
     * Close the Router.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        const reqData = { routerId: this.#internal.routerId };
        this.#channel.request('worker.closeRouter', undefined, reqData)
            .catch(() => { });
        // Close every Transport.
        for (const transport of this.#transports.values()) {
            transport.routerClosed();
        }
        this.#transports.clear();
        // Clear the Producers map.
        this.#producers.clear();
        // Close every RtpObserver.
        for (const rtpObserver of this.#rtpObservers.values()) {
            rtpObserver.routerClosed();
        }
        this.#rtpObservers.clear();
        // Clear the DataProducers map.
        this.#dataProducers.clear();
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Worker was closed.
     *
     * @private
     */
    workerClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('workerClosed()');
        this.#closed = true;
        // Close every Transport.
        for (const transport of this.#transports.values()) {
            transport.routerClosed();
        }
        this.#transports.clear();
        // Clear the Producers map.
        this.#producers.clear();
        // Close every RtpObserver.
        for (const rtpObserver of this.#rtpObservers.values()) {
            rtpObserver.routerClosed();
        }
        this.#rtpObservers.clear();
        // Clear the DataProducers map.
        this.#dataProducers.clear();
        this.safeEmit('workerclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump Router.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('router.dump', this.#internal.routerId);
    }
    /**
     * Create a WebRtcTransport.
     */
    async createWebRtcTransport({ webRtcServer, listenIps, port, enableUdp = true, enableTcp = false, preferUdp = false, preferTcp = false, initialAvailableOutgoingBitrate = 600000, enableSctp = false, numSctpStreams = { OS: 1024, MIS: 1024 }, maxSctpMessageSize = 262144, sctpSendBufferSize = 262144, appData }) {
        logger.debug('createWebRtcTransport()');
        if (!webRtcServer && !Array.isArray(listenIps)) {
            throw new TypeError('missing webRtcServer and listenIps (one of them is mandatory)');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        if (listenIps) {
            listenIps = listenIps.map((listenIp) => {
                if (typeof listenIp === 'string' && listenIp) {
                    return { ip: listenIp };
                }
                else if (typeof listenIp === 'object') {
                    return {
                        ip: listenIp.ip,
                        announcedIp: listenIp.announcedIp || undefined
                    };
                }
                else {
                    throw new TypeError('wrong listenIp');
                }
            });
        }
        const reqData = {
            transportId: (0, uuid_1.v4)(),
            webRtcServerId: webRtcServer ? webRtcServer.id : undefined,
            listenIps,
            port,
            enableUdp,
            enableTcp,
            preferUdp,
            preferTcp,
            initialAvailableOutgoingBitrate,
            enableSctp,
            numSctpStreams,
            maxSctpMessageSize,
            sctpSendBufferSize,
            isDataChannel: true
        };
        const data = webRtcServer
            ? await this.#channel.request('router.createWebRtcTransportWithServer', this.#internal.routerId, reqData)
            : await this.#channel.request('router.createWebRtcTransport', this.#internal.routerId, reqData);
        const transport = new WebRtcTransport_1.WebRtcTransport({
            internal: {
                ...this.#internal,
                transportId: reqData.transportId
            },
            data,
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getRouterRtpCapabilities: () => this.#data.rtpCapabilities,
            getProducerById: (producerId) => (this.#producers.get(producerId)),
            getDataProducerById: (dataProducerId) => (this.#dataProducers.get(dataProducerId))
        });
        this.#transports.set(transport.id, transport);
        transport.on('@close', () => this.#transports.delete(transport.id));
        transport.on('@listenserverclose', () => this.#transports.delete(transport.id));
        transport.on('@newproducer', (producer) => this.#producers.set(producer.id, producer));
        transport.on('@producerclose', (producer) => this.#producers.delete(producer.id));
        transport.on('@newdataproducer', (dataProducer) => (this.#dataProducers.set(dataProducer.id, dataProducer)));
        transport.on('@dataproducerclose', (dataProducer) => (this.#dataProducers.delete(dataProducer.id)));
        if (webRtcServer) {
            webRtcServer.handleWebRtcTransport(transport);
        }
        // Emit observer event.
        this.#observer.safeEmit('newtransport', transport);
        return transport;
    }
    /**
     * Create a PlainTransport.
     */
    async createPlainTransport({ listenIp, port, rtcpMux = true, comedia = false, enableSctp = false, numSctpStreams = { OS: 1024, MIS: 1024 }, maxSctpMessageSize = 262144, sctpSendBufferSize = 262144, enableSrtp = false, srtpCryptoSuite = 'AES_CM_128_HMAC_SHA1_80', appData }) {
        logger.debug('createPlainTransport()');
        if (!listenIp) {
            throw new TypeError('missing listenIp');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        if (typeof listenIp === 'string' && listenIp) {
            listenIp = { ip: listenIp };
        }
        else if (typeof listenIp === 'object') {
            listenIp =
                {
                    ip: listenIp.ip,
                    announcedIp: listenIp.announcedIp || undefined
                };
        }
        else {
            throw new TypeError('wrong listenIp');
        }
        const reqData = {
            transportId: (0, uuid_1.v4)(),
            listenIp,
            port,
            rtcpMux,
            comedia,
            enableSctp,
            numSctpStreams,
            maxSctpMessageSize,
            sctpSendBufferSize,
            isDataChannel: false,
            enableSrtp,
            srtpCryptoSuite
        };
        const data = await this.#channel.request('router.createPlainTransport', this.#internal.routerId, reqData);
        const transport = new PlainTransport_1.PlainTransport({
            internal: {
                ...this.#internal,
                transportId: reqData.transportId
            },
            data,
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getRouterRtpCapabilities: () => this.#data.rtpCapabilities,
            getProducerById: (producerId) => (this.#producers.get(producerId)),
            getDataProducerById: (dataProducerId) => (this.#dataProducers.get(dataProducerId))
        });
        this.#transports.set(transport.id, transport);
        transport.on('@close', () => this.#transports.delete(transport.id));
        transport.on('@listenserverclose', () => this.#transports.delete(transport.id));
        transport.on('@newproducer', (producer) => this.#producers.set(producer.id, producer));
        transport.on('@producerclose', (producer) => this.#producers.delete(producer.id));
        transport.on('@newdataproducer', (dataProducer) => (this.#dataProducers.set(dataProducer.id, dataProducer)));
        transport.on('@dataproducerclose', (dataProducer) => (this.#dataProducers.delete(dataProducer.id)));
        // Emit observer event.
        this.#observer.safeEmit('newtransport', transport);
        return transport;
    }
    /**
     * Create a PipeTransport.
     */
    async createPipeTransport({ listenIp, port, enableSctp = false, numSctpStreams = { OS: 1024, MIS: 1024 }, maxSctpMessageSize = 268435456, sctpSendBufferSize = 268435456, enableRtx = false, enableSrtp = false, appData }) {
        logger.debug('createPipeTransport()');
        if (!listenIp) {
            throw new TypeError('missing listenIp');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        if (typeof listenIp === 'string' && listenIp) {
            listenIp = { ip: listenIp };
        }
        else if (typeof listenIp === 'object') {
            listenIp =
                {
                    ip: listenIp.ip,
                    announcedIp: listenIp.announcedIp || undefined
                };
        }
        else {
            throw new TypeError('wrong listenIp');
        }
        const reqData = {
            transportId: (0, uuid_1.v4)(),
            listenIp,
            port,
            enableSctp,
            numSctpStreams,
            maxSctpMessageSize,
            sctpSendBufferSize,
            isDataChannel: false,
            enableRtx,
            enableSrtp
        };
        const data = await this.#channel.request('router.createPipeTransport', this.#internal.routerId, reqData);
        const transport = new PipeTransport_1.PipeTransport({
            internal: {
                ...this.#internal,
                transportId: reqData.transportId
            },
            data,
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getRouterRtpCapabilities: () => this.#data.rtpCapabilities,
            getProducerById: (producerId) => (this.#producers.get(producerId)),
            getDataProducerById: (dataProducerId) => (this.#dataProducers.get(dataProducerId))
        });
        this.#transports.set(transport.id, transport);
        transport.on('@close', () => this.#transports.delete(transport.id));
        transport.on('@listenserverclose', () => this.#transports.delete(transport.id));
        transport.on('@newproducer', (producer) => this.#producers.set(producer.id, producer));
        transport.on('@producerclose', (producer) => this.#producers.delete(producer.id));
        transport.on('@newdataproducer', (dataProducer) => (this.#dataProducers.set(dataProducer.id, dataProducer)));
        transport.on('@dataproducerclose', (dataProducer) => (this.#dataProducers.delete(dataProducer.id)));
        // Emit observer event.
        this.#observer.safeEmit('newtransport', transport);
        return transport;
    }
    /**
     * Create a DirectTransport.
     */
    async createDirectTransport({ maxMessageSize = 262144, appData } = {
        maxMessageSize: 262144
    }) {
        logger.debug('createDirectTransport()');
        const reqData = {
            transportId: (0, uuid_1.v4)(),
            direct: true,
            maxMessageSize
        };
        const data = await this.#channel.request('router.createDirectTransport', this.#internal.routerId, reqData);
        const transport = new DirectTransport_1.DirectTransport({
            internal: {
                ...this.#internal,
                transportId: reqData.transportId
            },
            data,
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getRouterRtpCapabilities: () => this.#data.rtpCapabilities,
            getProducerById: (producerId) => (this.#producers.get(producerId)),
            getDataProducerById: (dataProducerId) => (this.#dataProducers.get(dataProducerId))
        });
        this.#transports.set(transport.id, transport);
        transport.on('@close', () => this.#transports.delete(transport.id));
        transport.on('@listenserverclose', () => this.#transports.delete(transport.id));
        transport.on('@newproducer', (producer) => this.#producers.set(producer.id, producer));
        transport.on('@producerclose', (producer) => this.#producers.delete(producer.id));
        transport.on('@newdataproducer', (dataProducer) => (this.#dataProducers.set(dataProducer.id, dataProducer)));
        transport.on('@dataproducerclose', (dataProducer) => (this.#dataProducers.delete(dataProducer.id)));
        // Emit observer event.
        this.#observer.safeEmit('newtransport', transport);
        return transport;
    }
    /**
     * Pipes the given Producer or DataProducer into another Router in same host.
     */
    async pipeToRouter({ producerId, dataProducerId, router, listenIp = '127.0.0.1', enableSctp = true, numSctpStreams = { OS: 1024, MIS: 1024 }, enableRtx = false, enableSrtp = false }) {
        logger.debug('pipeToRouter()');
        if (!producerId && !dataProducerId) {
            throw new TypeError('missing producerId or dataProducerId');
        }
        else if (producerId && dataProducerId) {
            throw new TypeError('just producerId or dataProducerId can be given');
        }
        else if (!router) {
            throw new TypeError('Router not found');
        }
        else if (router === this) {
            throw new TypeError('cannot use this Router as destination');
        }
        let producer;
        let dataProducer;
        if (producerId) {
            producer = this.#producers.get(producerId);
            if (!producer) {
                throw new TypeError('Producer not found');
            }
        }
        else if (dataProducerId) {
            dataProducer = this.#dataProducers.get(dataProducerId);
            if (!dataProducer) {
                throw new TypeError('DataProducer not found');
            }
        }
        const pipeTransportPairKey = router.id;
        let pipeTransportPairPromise = this.#mapRouterPairPipeTransportPairPromise.get(pipeTransportPairKey);
        let pipeTransportPair;
        let localPipeTransport;
        let remotePipeTransport;
        if (pipeTransportPairPromise) {
            pipeTransportPair = await pipeTransportPairPromise;
            localPipeTransport = pipeTransportPair[this.id];
            remotePipeTransport = pipeTransportPair[router.id];
        }
        else {
            pipeTransportPairPromise = new Promise((resolve, reject) => {
                Promise.all([
                    this.createPipeTransport({ listenIp, enableSctp, numSctpStreams, enableRtx, enableSrtp }),
                    router.createPipeTransport({ listenIp, enableSctp, numSctpStreams, enableRtx, enableSrtp })
                ])
                    .then((pipeTransports) => {
                    localPipeTransport = pipeTransports[0];
                    remotePipeTransport = pipeTransports[1];
                })
                    .then(() => {
                    return Promise.all([
                        localPipeTransport.connect({
                            ip: remotePipeTransport.tuple.localIp,
                            port: remotePipeTransport.tuple.localPort,
                            srtpParameters: remotePipeTransport.srtpParameters
                        }),
                        remotePipeTransport.connect({
                            ip: localPipeTransport.tuple.localIp,
                            port: localPipeTransport.tuple.localPort,
                            srtpParameters: localPipeTransport.srtpParameters
                        })
                    ]);
                })
                    .then(() => {
                    localPipeTransport.observer.on('close', () => {
                        remotePipeTransport.close();
                        this.#mapRouterPairPipeTransportPairPromise.delete(pipeTransportPairKey);
                    });
                    remotePipeTransport.observer.on('close', () => {
                        localPipeTransport.close();
                        this.#mapRouterPairPipeTransportPairPromise.delete(pipeTransportPairKey);
                    });
                    resolve({
                        [this.id]: localPipeTransport,
                        [router.id]: remotePipeTransport
                    });
                })
                    .catch((error) => {
                    logger.error('pipeToRouter() | error creating PipeTransport pair:%o', error);
                    if (localPipeTransport) {
                        localPipeTransport.close();
                    }
                    if (remotePipeTransport) {
                        remotePipeTransport.close();
                    }
                    reject(error);
                });
            });
            this.#mapRouterPairPipeTransportPairPromise.set(pipeTransportPairKey, pipeTransportPairPromise);
            router.addPipeTransportPair(this.id, pipeTransportPairPromise);
            await pipeTransportPairPromise;
        }
        if (producer) {
            let pipeConsumer;
            let pipeProducer;
            try {
                pipeConsumer = await localPipeTransport.consume({
                    producerId: producerId
                });
                pipeProducer = await remotePipeTransport.produce({
                    id: producer.id,
                    kind: pipeConsumer.kind,
                    rtpParameters: pipeConsumer.rtpParameters,
                    paused: pipeConsumer.producerPaused,
                    appData: producer.appData
                });
                // Ensure that the producer has not been closed in the meanwhile.
                if (producer.closed) {
                    throw new errors_1.InvalidStateError('original Producer closed');
                }
                // Ensure that producer.paused has not changed in the meanwhile and, if
                // so, sync the pipeProducer.
                if (pipeProducer.paused !== producer.paused) {
                    if (producer.paused) {
                        await pipeProducer.pause();
                    }
                    else {
                        await pipeProducer.resume();
                    }
                }
                // Pipe events from the pipe Consumer to the pipe Producer.
                pipeConsumer.observer.on('close', () => pipeProducer.close());
                pipeConsumer.observer.on('pause', () => pipeProducer.pause());
                pipeConsumer.observer.on('resume', () => pipeProducer.resume());
                // Pipe events from the pipe Producer to the pipe Consumer.
                pipeProducer.observer.on('close', () => pipeConsumer.close());
                return { pipeConsumer, pipeProducer };
            }
            catch (error) {
                logger.error('pipeToRouter() | error creating pipe Consumer/Producer pair:%o', error);
                if (pipeConsumer) {
                    pipeConsumer.close();
                }
                if (pipeProducer) {
                    pipeProducer.close();
                }
                throw error;
            }
        }
        else if (dataProducer) {
            let pipeDataConsumer;
            let pipeDataProducer;
            try {
                pipeDataConsumer = await localPipeTransport.consumeData({
                    dataProducerId: dataProducerId
                });
                pipeDataProducer = await remotePipeTransport.produceData({
                    id: dataProducer.id,
                    sctpStreamParameters: pipeDataConsumer.sctpStreamParameters,
                    label: pipeDataConsumer.label,
                    protocol: pipeDataConsumer.protocol,
                    appData: dataProducer.appData
                });
                // Ensure that the dataProducer has not been closed in the meanwhile.
                if (dataProducer.closed) {
                    throw new errors_1.InvalidStateError('original DataProducer closed');
                }
                // Pipe events from the pipe DataConsumer to the pipe DataProducer.
                pipeDataConsumer.observer.on('close', () => pipeDataProducer.close());
                // Pipe events from the pipe DataProducer to the pipe DataConsumer.
                pipeDataProducer.observer.on('close', () => pipeDataConsumer.close());
                return { pipeDataConsumer, pipeDataProducer };
            }
            catch (error) {
                logger.error('pipeToRouter() | error creating pipe DataConsumer/DataProducer pair:%o', error);
                if (pipeDataConsumer) {
                    pipeDataConsumer.close();
                }
                if (pipeDataProducer) {
                    pipeDataProducer.close();
                }
                throw error;
            }
        }
        else {
            throw new Error('internal error');
        }
    }
    /**
     * @private
     */
    addPipeTransportPair(pipeTransportPairKey, pipeTransportPairPromise) {
        if (this.#mapRouterPairPipeTransportPairPromise.has(pipeTransportPairKey)) {
            throw new Error('given pipeTransportPairKey already exists in this Router');
        }
        this.#mapRouterPairPipeTransportPairPromise.set(pipeTransportPairKey, pipeTransportPairPromise);
        pipeTransportPairPromise
            .then((pipeTransportPair) => {
            const localPipeTransport = pipeTransportPair[this.id];
            // NOTE: No need to do any other cleanup here since that is done by the
            // Router calling this method on us.
            localPipeTransport.observer.on('close', () => {
                this.#mapRouterPairPipeTransportPairPromise.delete(pipeTransportPairKey);
            });
        })
            .catch(() => {
            this.#mapRouterPairPipeTransportPairPromise.delete(pipeTransportPairKey);
        });
    }
    /**
     * Create an ActiveSpeakerObserver
     */
    async createActiveSpeakerObserver({ interval = 300, appData } = {}) {
        logger.debug('createActiveSpeakerObserver()');
        if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        const reqData = {
            rtpObserverId: (0, uuid_1.v4)(),
            interval
        };
        await this.#channel.request('router.createActiveSpeakerObserver', this.#internal.routerId, reqData);
        const activeSpeakerObserver = new ActiveSpeakerObserver_1.ActiveSpeakerObserver({
            internal: {
                ...this.#internal,
                rtpObserverId: reqData.rtpObserverId
            },
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getProducerById: (producerId) => (this.#producers.get(producerId))
        });
        this.#rtpObservers.set(activeSpeakerObserver.id, activeSpeakerObserver);
        activeSpeakerObserver.on('@close', () => {
            this.#rtpObservers.delete(activeSpeakerObserver.id);
        });
        // Emit observer event.
        this.#observer.safeEmit('newrtpobserver', activeSpeakerObserver);
        return activeSpeakerObserver;
    }
    /**
     * Create an AudioLevelObserver.
     */
    async createAudioLevelObserver({ maxEntries = 1, threshold = -80, interval = 1000, appData } = {}) {
        logger.debug('createAudioLevelObserver()');
        if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        const reqData = {
            rtpObserverId: (0, uuid_1.v4)(),
            maxEntries,
            threshold,
            interval
        };
        await this.#channel.request('router.createAudioLevelObserver', this.#internal.routerId, reqData);
        const audioLevelObserver = new AudioLevelObserver_1.AudioLevelObserver({
            internal: {
                ...this.#internal,
                rtpObserverId: reqData.rtpObserverId
            },
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData,
            getProducerById: (producerId) => (this.#producers.get(producerId))
        });
        this.#rtpObservers.set(audioLevelObserver.id, audioLevelObserver);
        audioLevelObserver.on('@close', () => {
            this.#rtpObservers.delete(audioLevelObserver.id);
        });
        // Emit observer event.
        this.#observer.safeEmit('newrtpobserver', audioLevelObserver);
        return audioLevelObserver;
    }
    /**
     * Check whether the given RTP capabilities can consume the given Producer.
     */
    canConsume({ producerId, rtpCapabilities }) {
        const producer = this.#producers.get(producerId);
        if (!producer) {
            logger.error('canConsume() | Producer with id "%s" not found', producerId);
            return false;
        }
        try {
            return ortc.canConsume(producer.consumableRtpParameters, rtpCapabilities);
        }
        catch (error) {
            logger.error('canConsume() | unexpected error: %s', String(error));
            return false;
        }
    }
}
exports.Router = Router;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/RtpObserver.js":
/*!************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/RtpObserver.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RtpObserver = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('RtpObserver');
class RtpObserver extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    internal;
    // Channel instance.
    channel;
    // PayloadChannel instance.
    payloadChannel;
    // Closed flag.
    #closed = false;
    // Paused flag.
    #paused = false;
    // Custom app data.
    #appData;
    // Method to retrieve a Producer.
    getProducerById;
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     * @interface
     */
    constructor({ internal, channel, payloadChannel, appData, getProducerById }) {
        super();
        logger.debug('constructor()');
        this.internal = internal;
        this.channel = channel;
        this.payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.getProducerById = getProducerById;
    }
    /**
     * RtpObserver id.
     */
    get id() {
        return this.internal.rtpObserverId;
    }
    /**
     * Whether the RtpObserver is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * Whether the RtpObserver is paused.
     */
    get paused() {
        return this.#paused;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * Close the RtpObserver.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.channel.removeAllListeners(this.internal.rtpObserverId);
        this.payloadChannel.removeAllListeners(this.internal.rtpObserverId);
        const reqData = { rtpObserverId: this.internal.rtpObserverId };
        this.channel.request('router.closeRtpObserver', this.internal.routerId, reqData)
            .catch(() => { });
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Router was closed.
     *
     * @private
     */
    routerClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('routerClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.channel.removeAllListeners(this.internal.rtpObserverId);
        this.payloadChannel.removeAllListeners(this.internal.rtpObserverId);
        this.safeEmit('routerclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Pause the RtpObserver.
     */
    async pause() {
        logger.debug('pause()');
        const wasPaused = this.#paused;
        await this.channel.request('rtpObserver.pause', this.internal.rtpObserverId);
        this.#paused = true;
        // Emit observer event.
        if (!wasPaused) {
            this.#observer.safeEmit('pause');
        }
    }
    /**
     * Resume the RtpObserver.
     */
    async resume() {
        logger.debug('resume()');
        const wasPaused = this.#paused;
        await this.channel.request('rtpObserver.resume', this.internal.rtpObserverId);
        this.#paused = false;
        // Emit observer event.
        if (wasPaused) {
            this.#observer.safeEmit('resume');
        }
    }
    /**
     * Add a Producer to the RtpObserver.
     */
    async addProducer({ producerId }) {
        logger.debug('addProducer()');
        const producer = this.getProducerById(producerId);
        if (!producer) {
            throw Error(`Producer with id "${producerId}" not found`);
        }
        const reqData = { producerId };
        await this.channel.request('rtpObserver.addProducer', this.internal.rtpObserverId, reqData);
        // Emit observer event.
        this.#observer.safeEmit('addproducer', producer);
    }
    /**
     * Remove a Producer from the RtpObserver.
     */
    async removeProducer({ producerId }) {
        logger.debug('removeProducer()');
        const producer = this.getProducerById(producerId);
        if (!producer) {
            throw Error(`Producer with id "${producerId}" not found`);
        }
        const reqData = { producerId };
        await this.channel.request('rtpObserver.removeProducer', this.internal.rtpObserverId, reqData);
        // Emit observer event.
        this.#observer.safeEmit('removeproducer', producer);
    }
}
exports.RtpObserver = RtpObserver;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/RtpParameters.js":
/*!**************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/RtpParameters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/SctpParameters.js":
/*!***************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/SctpParameters.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/SrtpParameters.js":
/*!***************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/SrtpParameters.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Transport.js":
/*!**********************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Transport.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transport = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-node/index.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const utils = __webpack_require__(/*! ./utils */ "../../node_modules/mediasoup/node/lib/utils.js");
const ortc = __webpack_require__(/*! ./ortc */ "../../node_modules/mediasoup/node/lib/ortc.js");
const Producer_1 = __webpack_require__(/*! ./Producer */ "../../node_modules/mediasoup/node/lib/Producer.js");
const Consumer_1 = __webpack_require__(/*! ./Consumer */ "../../node_modules/mediasoup/node/lib/Consumer.js");
const DataProducer_1 = __webpack_require__(/*! ./DataProducer */ "../../node_modules/mediasoup/node/lib/DataProducer.js");
const DataConsumer_1 = __webpack_require__(/*! ./DataConsumer */ "../../node_modules/mediasoup/node/lib/DataConsumer.js");
const logger = new Logger_1.Logger('Transport');
class Transport extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    internal;
    // Transport data. This is set by the subclass.
    #data;
    // Channel instance.
    channel;
    // PayloadChannel instance.
    payloadChannel;
    // Close flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Method to retrieve Router RTP capabilities.
    #getRouterRtpCapabilities;
    // Method to retrieve a Producer.
    getProducerById;
    // Method to retrieve a DataProducer.
    getDataProducerById;
    // Producers map.
    #producers = new Map();
    // Consumers map.
    consumers = new Map();
    // DataProducers map.
    dataProducers = new Map();
    // DataConsumers map.
    dataConsumers = new Map();
    // RTCP CNAME for Producers.
    #cnameForProducers;
    // Next MID for Consumers. It's converted into string when used.
    #nextMidForConsumers = 0;
    // Buffer with available SCTP stream ids.
    #sctpStreamIds;
    // Next SCTP stream id.
    #nextSctpStreamId = 0;
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     * @interface
     */
    constructor({ internal, data, channel, payloadChannel, appData, getRouterRtpCapabilities, getProducerById, getDataProducerById }) {
        super();
        logger.debug('constructor()');
        this.internal = internal;
        this.#data = data;
        this.channel = channel;
        this.payloadChannel = payloadChannel;
        this.#appData = appData || {};
        this.#getRouterRtpCapabilities = getRouterRtpCapabilities;
        this.getProducerById = getProducerById;
        this.getDataProducerById = getDataProducerById;
    }
    /**
     * Transport id.
     */
    get id() {
        return this.internal.transportId;
    }
    /**
     * Whether the Transport is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get channelForTesting() {
        return this.channel;
    }
    /**
     * Close the Transport.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.channel.removeAllListeners(this.internal.transportId);
        this.payloadChannel.removeAllListeners(this.internal.transportId);
        const reqData = { transportId: this.internal.transportId };
        this.channel.request('router.closeTransport', this.internal.routerId, reqData)
            .catch(() => { });
        // Close every Producer.
        for (const producer of this.#producers.values()) {
            producer.transportClosed();
            // Must tell the Router.
            this.emit('@producerclose', producer);
        }
        this.#producers.clear();
        // Close every Consumer.
        for (const consumer of this.consumers.values()) {
            consumer.transportClosed();
        }
        this.consumers.clear();
        // Close every DataProducer.
        for (const dataProducer of this.dataProducers.values()) {
            dataProducer.transportClosed();
            // Must tell the Router.
            this.emit('@dataproducerclose', dataProducer);
        }
        this.dataProducers.clear();
        // Close every DataConsumer.
        for (const dataConsumer of this.dataConsumers.values()) {
            dataConsumer.transportClosed();
        }
        this.dataConsumers.clear();
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Router was closed.
     *
     * @private
     * @virtual
     */
    routerClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('routerClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.channel.removeAllListeners(this.internal.transportId);
        this.payloadChannel.removeAllListeners(this.internal.transportId);
        // Close every Producer.
        for (const producer of this.#producers.values()) {
            producer.transportClosed();
            // NOTE: No need to tell the Router since it already knows (it has
            // been closed in fact).
        }
        this.#producers.clear();
        // Close every Consumer.
        for (const consumer of this.consumers.values()) {
            consumer.transportClosed();
        }
        this.consumers.clear();
        // Close every DataProducer.
        for (const dataProducer of this.dataProducers.values()) {
            dataProducer.transportClosed();
            // NOTE: No need to tell the Router since it already knows (it has
            // been closed in fact).
        }
        this.dataProducers.clear();
        // Close every DataConsumer.
        for (const dataConsumer of this.dataConsumers.values()) {
            dataConsumer.transportClosed();
        }
        this.dataConsumers.clear();
        this.safeEmit('routerclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Listen server was closed (this just happens in WebRtcTransports when their
     * associated WebRtcServer is closed).
     *
     * @private
     */
    listenServerClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('listenServerClosed()');
        this.#closed = true;
        // Remove notification subscriptions.
        this.channel.removeAllListeners(this.internal.transportId);
        this.payloadChannel.removeAllListeners(this.internal.transportId);
        // Close every Producer.
        for (const producer of this.#producers.values()) {
            producer.transportClosed();
            // NOTE: No need to tell the Router since it already knows (it has
            // been closed in fact).
        }
        this.#producers.clear();
        // Close every Consumer.
        for (const consumer of this.consumers.values()) {
            consumer.transportClosed();
        }
        this.consumers.clear();
        // Close every DataProducer.
        for (const dataProducer of this.dataProducers.values()) {
            dataProducer.transportClosed();
            // NOTE: No need to tell the Router since it already knows (it has
            // been closed in fact).
        }
        this.dataProducers.clear();
        // Close every DataConsumer.
        for (const dataConsumer of this.dataConsumers.values()) {
            dataConsumer.transportClosed();
        }
        this.dataConsumers.clear();
        // Need to emit this event to let the parent Router know since
        // transport.listenServerClosed() is called by the listen server.
        // NOTE: Currently there is just WebRtcServer for WebRtcTransports.
        this.emit('@listenserverclose');
        this.safeEmit('listenserverclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump Transport.
     */
    async dump() {
        logger.debug('dump()');
        return this.channel.request('transport.dump', this.internal.transportId);
    }
    /**
     * Get Transport stats.
     *
     * @abstract
     */
    async getStats() {
        // Should not happen.
        throw new Error('method not implemented in the subclass');
    }
    /**
     * Provide the Transport remote parameters.
     *
     * @abstract
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async connect(params) {
        // Should not happen.
        throw new Error('method not implemented in the subclass');
    }
    /**
     * Set maximum incoming bitrate for receiving media.
     */
    async setMaxIncomingBitrate(bitrate) {
        logger.debug('setMaxIncomingBitrate() [bitrate:%s]', bitrate);
        const reqData = { bitrate };
        await this.channel.request('transport.setMaxIncomingBitrate', this.internal.transportId, reqData);
    }
    /**
     * Set maximum outgoing bitrate for sending media.
     */
    async setMaxOutgoingBitrate(bitrate) {
        logger.debug('setMaxOutgoingBitrate() [bitrate:%s]', bitrate);
        const reqData = { bitrate };
        await this.channel.request('transport.setMaxOutgoingBitrate', this.internal.transportId, reqData);
    }
    /**
     * Set minimum outgoing bitrate for sending media.
     */
    async setMinOutgoingBitrate(bitrate) {
        logger.debug('setMinOutgoingBitrate() [bitrate:%s]', bitrate);
        const reqData = { bitrate };
        await this.channel.request('transport.setMinOutgoingBitrate', this.internal.transportId, reqData);
    }
    /**
     * Create a Producer.
     */
    async produce({ id = undefined, kind, rtpParameters, paused = false, keyFrameRequestDelay, appData }) {
        logger.debug('produce()');
        if (id && this.#producers.has(id)) {
            throw new TypeError(`a Producer with same id "${id}" already exists`);
        }
        else if (!['audio', 'video'].includes(kind)) {
            throw new TypeError(`invalid kind "${kind}"`);
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        // This may throw.
        ortc.validateRtpParameters(rtpParameters);
        // If missing or empty encodings, add one.
        if (!rtpParameters.encodings ||
            !Array.isArray(rtpParameters.encodings) ||
            rtpParameters.encodings.length === 0) {
            rtpParameters.encodings = [{}];
        }
        // Don't do this in PipeTransports since there we must keep CNAME value in
        // each Producer.
        if (this.constructor.name !== 'PipeTransport') {
            // If CNAME is given and we don't have yet a CNAME for Producers in this
            // Transport, take it.
            if (!this.#cnameForProducers && rtpParameters.rtcp && rtpParameters.rtcp.cname) {
                this.#cnameForProducers = rtpParameters.rtcp.cname;
            }
            // Otherwise if we don't have yet a CNAME for Producers and the RTP parameters
            // do not include CNAME, create a random one.
            else if (!this.#cnameForProducers) {
                this.#cnameForProducers = (0, uuid_1.v4)().substr(0, 8);
            }
            // Override Producer's CNAME.
            rtpParameters.rtcp = rtpParameters.rtcp || {};
            rtpParameters.rtcp.cname = this.#cnameForProducers;
        }
        const routerRtpCapabilities = this.#getRouterRtpCapabilities();
        // This may throw.
        const rtpMapping = ortc.getProducerRtpParametersMapping(rtpParameters, routerRtpCapabilities);
        // This may throw.
        const consumableRtpParameters = ortc.getConsumableRtpParameters(kind, rtpParameters, routerRtpCapabilities, rtpMapping);
        const reqData = {
            producerId: id || (0, uuid_1.v4)(),
            kind,
            rtpParameters,
            rtpMapping,
            keyFrameRequestDelay,
            paused
        };
        const status = await this.channel.request('transport.produce', this.internal.transportId, reqData);
        const data = {
            kind,
            rtpParameters,
            type: status.type,
            consumableRtpParameters
        };
        const producer = new Producer_1.Producer({
            internal: {
                ...this.internal,
                producerId: reqData.producerId
            },
            data,
            channel: this.channel,
            payloadChannel: this.payloadChannel,
            appData,
            paused
        });
        this.#producers.set(producer.id, producer);
        producer.on('@close', () => {
            this.#producers.delete(producer.id);
            this.emit('@producerclose', producer);
        });
        this.emit('@newproducer', producer);
        // Emit observer event.
        this.#observer.safeEmit('newproducer', producer);
        return producer;
    }
    /**
     * Create a Consumer.
     *
     * @virtual
     */
    async consume({ producerId, rtpCapabilities, paused = false, mid, preferredLayers, ignoreDtx = false, enableRtx, pipe = false, appData }) {
        logger.debug('consume()');
        if (!producerId || typeof producerId !== 'string') {
            throw new TypeError('missing producerId');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        else if (mid && (typeof mid !== 'string' || mid.length === 0)) {
            throw new TypeError('if given, mid must be non empty string');
        }
        // This may throw.
        ortc.validateRtpCapabilities(rtpCapabilities);
        const producer = this.getProducerById(producerId);
        if (!producer) {
            throw Error(`Producer with id "${producerId}" not found`);
        }
        // If enableRtx is not given, set it to true if video and false if audio.
        if (enableRtx === undefined) {
            enableRtx = producer.kind === 'video';
        }
        // This may throw.
        const rtpParameters = ortc.getConsumerRtpParameters({
            consumableRtpParameters: producer.consumableRtpParameters,
            remoteRtpCapabilities: rtpCapabilities,
            pipe,
            enableRtx
        });
        // Set MID.
        if (!pipe) {
            if (mid) {
                rtpParameters.mid = mid;
            }
            else {
                rtpParameters.mid = `${this.#nextMidForConsumers++}`;
                // We use up to 8 bytes for MID (string).
                if (this.#nextMidForConsumers === 100000000) {
                    logger.error(`consume() | reaching max MID value "${this.#nextMidForConsumers}"`);
                    this.#nextMidForConsumers = 0;
                }
            }
        }
        const reqData = {
            consumerId: (0, uuid_1.v4)(),
            producerId,
            kind: producer.kind,
            rtpParameters,
            type: pipe ? 'pipe' : producer.type,
            consumableRtpEncodings: producer.consumableRtpParameters.encodings,
            paused,
            preferredLayers,
            ignoreDtx
        };
        const status = await this.channel.request('transport.consume', this.internal.transportId, reqData);
        const data = {
            producerId,
            kind: producer.kind,
            rtpParameters,
            type: pipe ? 'pipe' : producer.type
        };
        const consumer = new Consumer_1.Consumer({
            internal: {
                ...this.internal,
                consumerId: reqData.consumerId
            },
            data,
            channel: this.channel,
            payloadChannel: this.payloadChannel,
            appData,
            paused: status.paused,
            producerPaused: status.producerPaused,
            score: status.score,
            preferredLayers: status.preferredLayers
        });
        this.consumers.set(consumer.id, consumer);
        consumer.on('@close', () => this.consumers.delete(consumer.id));
        consumer.on('@producerclose', () => this.consumers.delete(consumer.id));
        // Emit observer event.
        this.#observer.safeEmit('newconsumer', consumer);
        return consumer;
    }
    /**
     * Create a DataProducer.
     */
    async produceData({ id = undefined, sctpStreamParameters, label = '', protocol = '', appData } = {}) {
        logger.debug('produceData()');
        if (id && this.dataProducers.has(id)) {
            throw new TypeError(`a DataProducer with same id "${id}" already exists`);
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        let type;
        // If this is not a DirectTransport, sctpStreamParameters are required.
        if (this.constructor.name !== 'DirectTransport') {
            type = 'sctp';
            // This may throw.
            ortc.validateSctpStreamParameters(sctpStreamParameters);
        }
        // If this is a DirectTransport, sctpStreamParameters must not be given.
        else {
            type = 'direct';
            if (sctpStreamParameters) {
                logger.warn('produceData() | sctpStreamParameters are ignored when producing data on a DirectTransport');
            }
        }
        const reqData = {
            dataProducerId: id || (0, uuid_1.v4)(),
            type,
            sctpStreamParameters,
            label,
            protocol
        };
        const data = await this.channel.request('transport.produceData', this.internal.transportId, reqData);
        const dataProducer = new DataProducer_1.DataProducer({
            internal: {
                ...this.internal,
                dataProducerId: reqData.dataProducerId
            },
            data,
            channel: this.channel,
            payloadChannel: this.payloadChannel,
            appData
        });
        this.dataProducers.set(dataProducer.id, dataProducer);
        dataProducer.on('@close', () => {
            this.dataProducers.delete(dataProducer.id);
            this.emit('@dataproducerclose', dataProducer);
        });
        this.emit('@newdataproducer', dataProducer);
        // Emit observer event.
        this.#observer.safeEmit('newdataproducer', dataProducer);
        return dataProducer;
    }
    /**
     * Create a DataConsumer.
     */
    async consumeData({ dataProducerId, ordered, maxPacketLifeTime, maxRetransmits, appData }) {
        logger.debug('consumeData()');
        if (!dataProducerId || typeof dataProducerId !== 'string') {
            throw new TypeError('missing dataProducerId');
        }
        else if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        const dataProducer = this.getDataProducerById(dataProducerId);
        if (!dataProducer) {
            throw Error(`DataProducer with id "${dataProducerId}" not found`);
        }
        let type;
        let sctpStreamParameters;
        let sctpStreamId;
        // If this is not a DirectTransport, use sctpStreamParameters from the
        // DataProducer (if type 'sctp') unless they are given in method parameters.
        if (this.constructor.name !== 'DirectTransport') {
            type = 'sctp';
            sctpStreamParameters =
                utils.clone(dataProducer.sctpStreamParameters);
            // Override if given.
            if (ordered !== undefined) {
                sctpStreamParameters.ordered = ordered;
            }
            if (maxPacketLifeTime !== undefined) {
                sctpStreamParameters.maxPacketLifeTime = maxPacketLifeTime;
            }
            if (maxRetransmits !== undefined) {
                sctpStreamParameters.maxRetransmits = maxRetransmits;
            }
            // This may throw.
            sctpStreamId = this.getNextSctpStreamId();
            this.#sctpStreamIds[sctpStreamId] = 1;
            sctpStreamParameters.streamId = sctpStreamId;
        }
        // If this is a DirectTransport, sctpStreamParameters must not be used.
        else {
            type = 'direct';
            if (ordered !== undefined ||
                maxPacketLifeTime !== undefined ||
                maxRetransmits !== undefined) {
                logger.warn('consumeData() | ordered, maxPacketLifeTime and maxRetransmits are ignored when consuming data on a DirectTransport');
            }
        }
        const { label, protocol } = dataProducer;
        const reqData = {
            dataConsumerId: (0, uuid_1.v4)(),
            dataProducerId,
            type,
            sctpStreamParameters,
            label,
            protocol
        };
        const data = await this.channel.request('transport.consumeData', this.internal.transportId, reqData);
        const dataConsumer = new DataConsumer_1.DataConsumer({
            internal: {
                ...this.internal,
                dataConsumerId: reqData.dataConsumerId
            },
            data,
            channel: this.channel,
            payloadChannel: this.payloadChannel,
            appData
        });
        this.dataConsumers.set(dataConsumer.id, dataConsumer);
        dataConsumer.on('@close', () => {
            this.dataConsumers.delete(dataConsumer.id);
            if (this.#sctpStreamIds) {
                this.#sctpStreamIds[sctpStreamId] = 0;
            }
        });
        dataConsumer.on('@dataproducerclose', () => {
            this.dataConsumers.delete(dataConsumer.id);
            if (this.#sctpStreamIds) {
                this.#sctpStreamIds[sctpStreamId] = 0;
            }
        });
        // Emit observer event.
        this.#observer.safeEmit('newdataconsumer', dataConsumer);
        return dataConsumer;
    }
    /**
     * Enable 'trace' event.
     */
    async enableTraceEvent(types = []) {
        logger.debug('pause()');
        const reqData = { types };
        await this.channel.request('transport.enableTraceEvent', this.internal.transportId, reqData);
    }
    getNextSctpStreamId() {
        if (!this.#data.sctpParameters ||
            typeof this.#data.sctpParameters.MIS !== 'number') {
            throw new TypeError('missing sctpParameters.MIS');
        }
        const numStreams = this.#data.sctpParameters.MIS;
        if (!this.#sctpStreamIds) {
            this.#sctpStreamIds = Buffer.alloc(numStreams, 0);
        }
        let sctpStreamId;
        for (let idx = 0; idx < this.#sctpStreamIds.length; ++idx) {
            sctpStreamId = (this.#nextSctpStreamId + idx) % this.#sctpStreamIds.length;
            if (!this.#sctpStreamIds[sctpStreamId]) {
                this.#nextSctpStreamId = sctpStreamId + 1;
                return sctpStreamId;
            }
        }
        throw new Error('no sctpStreamId available');
    }
}
exports.Transport = Transport;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/WebRtcServer.js":
/*!*************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/WebRtcServer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebRtcServer = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const logger = new Logger_1.Logger('WebRtcServer');
class WebRtcServer extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // Internal data.
    #internal;
    // Channel instance.
    #channel;
    // Closed flag.
    #closed = false;
    // Custom app data.
    #appData;
    // Transports map.
    #webRtcTransports = new Map();
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ internal, channel, appData }) {
        super();
        logger.debug('constructor()');
        this.#internal = internal;
        this.#channel = channel;
        this.#appData = appData || {};
    }
    /**
     * WebRtcServer id.
     */
    get id() {
        return this.#internal.webRtcServerId;
    }
    /**
     * Whether the WebRtcServer is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get webRtcTransportsForTesting() {
        return this.#webRtcTransports;
    }
    /**
     * Close the WebRtcServer.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        const reqData = { webRtcServerId: this.#internal.webRtcServerId };
        this.#channel.request('worker.closeWebRtcServer', undefined, reqData)
            .catch(() => { });
        // Close every WebRtcTransport.
        for (const webRtcTransport of this.#webRtcTransports.values()) {
            webRtcTransport.listenServerClosed();
            // Emit observer event.
            this.#observer.safeEmit('webrtctransportunhandled', webRtcTransport);
        }
        this.#webRtcTransports.clear();
        this.emit('@close');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Worker was closed.
     *
     * @private
     */
    workerClosed() {
        if (this.#closed) {
            return;
        }
        logger.debug('workerClosed()');
        this.#closed = true;
        // NOTE: No need to close WebRtcTransports since they are closed by their
        // respective Router parents.
        this.#webRtcTransports.clear();
        this.safeEmit('workerclose');
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump WebRtcServer.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('webRtcServer.dump', this.#internal.webRtcServerId);
    }
    /**
     * @private
     */
    handleWebRtcTransport(webRtcTransport) {
        this.#webRtcTransports.set(webRtcTransport.id, webRtcTransport);
        // Emit observer event.
        this.#observer.safeEmit('webrtctransporthandled', webRtcTransport);
        webRtcTransport.on('@close', () => {
            this.#webRtcTransports.delete(webRtcTransport.id);
            // Emit observer event.
            this.#observer.safeEmit('webrtctransportunhandled', webRtcTransport);
        });
    }
}
exports.WebRtcServer = WebRtcServer;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/WebRtcTransport.js":
/*!****************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/WebRtcTransport.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebRtcTransport = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const Transport_1 = __webpack_require__(/*! ./Transport */ "../../node_modules/mediasoup/node/lib/Transport.js");
const logger = new Logger_1.Logger('WebRtcTransport');
class WebRtcTransport extends Transport_1.Transport {
    // WebRtcTransport data.
    #data;
    /**
     * @private
     */
    constructor(options) {
        super(options);
        logger.debug('constructor()');
        const { data } = options;
        this.#data =
            {
                iceRole: data.iceRole,
                iceParameters: data.iceParameters,
                iceCandidates: data.iceCandidates,
                iceState: data.iceState,
                iceSelectedTuple: data.iceSelectedTuple,
                dtlsParameters: data.dtlsParameters,
                dtlsState: data.dtlsState,
                dtlsRemoteCert: data.dtlsRemoteCert,
                sctpParameters: data.sctpParameters,
                sctpState: data.sctpState
            };
        this.handleWorkerNotifications();
    }
    /**
     * ICE role.
     */
    get iceRole() {
        return this.#data.iceRole;
    }
    /**
     * ICE parameters.
     */
    get iceParameters() {
        return this.#data.iceParameters;
    }
    /**
     * ICE candidates.
     */
    get iceCandidates() {
        return this.#data.iceCandidates;
    }
    /**
     * ICE state.
     */
    get iceState() {
        return this.#data.iceState;
    }
    /**
     * ICE selected tuple.
     */
    get iceSelectedTuple() {
        return this.#data.iceSelectedTuple;
    }
    /**
     * DTLS parameters.
     */
    get dtlsParameters() {
        return this.#data.dtlsParameters;
    }
    /**
     * DTLS state.
     */
    get dtlsState() {
        return this.#data.dtlsState;
    }
    /**
     * Remote certificate in PEM format.
     */
    get dtlsRemoteCert() {
        return this.#data.dtlsRemoteCert;
    }
    /**
     * SCTP parameters.
     */
    get sctpParameters() {
        return this.#data.sctpParameters;
    }
    /**
     * SCTP state.
     */
    get sctpState() {
        return this.#data.sctpState;
    }
    /**
     * Close the WebRtcTransport.
     *
     * @override
     */
    close() {
        if (this.closed) {
            return;
        }
        this.#data.iceState = 'closed';
        this.#data.iceSelectedTuple = undefined;
        this.#data.dtlsState = 'closed';
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.close();
    }
    /**
     * Router was closed.
     *
     * @private
     * @override
     */
    routerClosed() {
        if (this.closed) {
            return;
        }
        this.#data.iceState = 'closed';
        this.#data.iceSelectedTuple = undefined;
        this.#data.dtlsState = 'closed';
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.routerClosed();
    }
    /**
     * Called when closing the associated WebRtcServer.
     *
     * @private
     */
    webRtcServerClosed() {
        if (this.closed) {
            return;
        }
        this.#data.iceState = 'closed';
        this.#data.iceSelectedTuple = undefined;
        this.#data.dtlsState = 'closed';
        if (this.#data.sctpState) {
            this.#data.sctpState = 'closed';
        }
        super.listenServerClosed();
    }
    /**
     * Get WebRtcTransport stats.
     *
     * @override
     */
    async getStats() {
        logger.debug('getStats()');
        return this.channel.request('transport.getStats', this.internal.transportId);
    }
    /**
     * Provide the WebRtcTransport remote parameters.
     *
     * @override
     */
    async connect({ dtlsParameters }) {
        logger.debug('connect()');
        const reqData = { dtlsParameters };
        const data = await this.channel.request('transport.connect', this.internal.transportId, reqData);
        // Update data.
        this.#data.dtlsParameters.role = data.dtlsLocalRole;
    }
    /**
     * Restart ICE.
     */
    async restartIce() {
        logger.debug('restartIce()');
        const data = await this.channel.request('transport.restartIce', this.internal.transportId);
        const { iceParameters } = data;
        this.#data.iceParameters = iceParameters;
        return iceParameters;
    }
    handleWorkerNotifications() {
        this.channel.on(this.internal.transportId, (event, data) => {
            switch (event) {
                case 'icestatechange':
                    {
                        const iceState = data.iceState;
                        this.#data.iceState = iceState;
                        this.safeEmit('icestatechange', iceState);
                        // Emit observer event.
                        this.observer.safeEmit('icestatechange', iceState);
                        break;
                    }
                case 'iceselectedtuplechange':
                    {
                        const iceSelectedTuple = data.iceSelectedTuple;
                        this.#data.iceSelectedTuple = iceSelectedTuple;
                        this.safeEmit('iceselectedtuplechange', iceSelectedTuple);
                        // Emit observer event.
                        this.observer.safeEmit('iceselectedtuplechange', iceSelectedTuple);
                        break;
                    }
                case 'dtlsstatechange':
                    {
                        const dtlsState = data.dtlsState;
                        const dtlsRemoteCert = data.dtlsRemoteCert;
                        this.#data.dtlsState = dtlsState;
                        if (dtlsState === 'connected') {
                            this.#data.dtlsRemoteCert = dtlsRemoteCert;
                        }
                        this.safeEmit('dtlsstatechange', dtlsState);
                        // Emit observer event.
                        this.observer.safeEmit('dtlsstatechange', dtlsState);
                        break;
                    }
                case 'sctpstatechange':
                    {
                        const sctpState = data.sctpState;
                        this.#data.sctpState = sctpState;
                        this.safeEmit('sctpstatechange', sctpState);
                        // Emit observer event.
                        this.observer.safeEmit('sctpstatechange', sctpState);
                        break;
                    }
                case 'trace':
                    {
                        const trace = data;
                        this.safeEmit('trace', trace);
                        // Emit observer event.
                        this.observer.safeEmit('trace', trace);
                        break;
                    }
                default:
                    {
                        logger.error('ignoring unknown event "%s"', event);
                    }
            }
        });
    }
}
exports.WebRtcTransport = WebRtcTransport;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/Worker.js":
/*!*******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/Worker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Worker = void 0;
const process = __webpack_require__(/*! process */ "process");
const path = __webpack_require__(/*! path */ "path");
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
const uuid_1 = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-node/index.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const ortc = __webpack_require__(/*! ./ortc */ "../../node_modules/mediasoup/node/lib/ortc.js");
const Channel_1 = __webpack_require__(/*! ./Channel */ "../../node_modules/mediasoup/node/lib/Channel.js");
const PayloadChannel_1 = __webpack_require__(/*! ./PayloadChannel */ "../../node_modules/mediasoup/node/lib/PayloadChannel.js");
const Router_1 = __webpack_require__(/*! ./Router */ "../../node_modules/mediasoup/node/lib/Router.js");
const WebRtcServer_1 = __webpack_require__(/*! ./WebRtcServer */ "../../node_modules/mediasoup/node/lib/WebRtcServer.js");
// If env MEDIASOUP_WORKER_BIN is given, use it as worker binary.
// Otherwise if env MEDIASOUP_BUILDTYPE is 'Debug' use the Debug binary.
// Otherwise use the Release binary.
const workerBin = process.env.MEDIASOUP_WORKER_BIN
    ? process.env.MEDIASOUP_WORKER_BIN
    : process.env.MEDIASOUP_BUILDTYPE === 'Debug'
        ? path.join(__dirname, '..', '..', 'worker', 'out', 'Debug', 'mediasoup-worker')
        : path.join(__dirname, '..', '..', 'worker', 'out', 'Release', 'mediasoup-worker');
const logger = new Logger_1.Logger('Worker');
const workerLogger = new Logger_1.Logger('Worker');
class Worker extends EnhancedEventEmitter_1.EnhancedEventEmitter {
    // mediasoup-worker child process.
    #child;
    // Worker process PID.
    #pid;
    // Channel instance.
    #channel;
    // PayloadChannel instance.
    #payloadChannel;
    // Closed flag.
    #closed = false;
    // Died dlag.
    #died = false;
    // Custom app data.
    #appData;
    // WebRtcServers set.
    #webRtcServers = new Set();
    // Routers set.
    #routers = new Set();
    // Observer instance.
    #observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
    /**
     * @private
     */
    constructor({ logLevel, logTags, rtcMinPort, rtcMaxPort, dtlsCertificateFile, dtlsPrivateKeyFile, libwebrtcFieldTrials, appData }) {
        super();
        logger.debug('constructor()');
        let spawnBin = workerBin;
        let spawnArgs = [];
        if (process.env.MEDIASOUP_USE_VALGRIND === 'true') {
            spawnBin = process.env.MEDIASOUP_VALGRIND_BIN || 'valgrind';
            if (process.env.MEDIASOUP_VALGRIND_OPTIONS) {
                spawnArgs = spawnArgs.concat(process.env.MEDIASOUP_VALGRIND_OPTIONS.split(/\s+/));
            }
            spawnArgs.push(workerBin);
        }
        if (typeof logLevel === 'string' && logLevel) {
            spawnArgs.push(`--logLevel=${logLevel}`);
        }
        for (const logTag of (Array.isArray(logTags) ? logTags : [])) {
            if (typeof logTag === 'string' && logTag) {
                spawnArgs.push(`--logTag=${logTag}`);
            }
        }
        if (typeof rtcMinPort === 'number' && !Number.isNaN(rtcMinPort)) {
            spawnArgs.push(`--rtcMinPort=${rtcMinPort}`);
        }
        if (typeof rtcMaxPort === 'number' && !Number.isNaN(rtcMaxPort)) {
            spawnArgs.push(`--rtcMaxPort=${rtcMaxPort}`);
        }
        if (typeof dtlsCertificateFile === 'string' && dtlsCertificateFile) {
            spawnArgs.push(`--dtlsCertificateFile=${dtlsCertificateFile}`);
        }
        if (typeof dtlsPrivateKeyFile === 'string' && dtlsPrivateKeyFile) {
            spawnArgs.push(`--dtlsPrivateKeyFile=${dtlsPrivateKeyFile}`);
        }
        if (typeof libwebrtcFieldTrials === 'string' && libwebrtcFieldTrials) {
            spawnArgs.push(`--libwebrtcFieldTrials=${libwebrtcFieldTrials}`);
        }
        logger.debug('spawning worker process: %s %s', spawnBin, spawnArgs.join(' '));
        this.#child = (0, child_process_1.spawn)(
        // command
        spawnBin, 
        // args
        spawnArgs, 
        // options
        {
            env: {
                MEDIASOUP_VERSION: '3.12.4',
                // Let the worker process inherit all environment variables, useful
                // if a custom and not in the path GCC is used so the user can set
                // LD_LIBRARY_PATH environment variable for runtime.
                ...process.env
            },
            detached: false,
            // fd 0 (stdin)   : Just ignore it.
            // fd 1 (stdout)  : Pipe it for 3rd libraries that log their own stuff.
            // fd 2 (stderr)  : Same as stdout.
            // fd 3 (channel) : Producer Channel fd.
            // fd 4 (channel) : Consumer Channel fd.
            // fd 5 (channel) : Producer PayloadChannel fd.
            // fd 6 (channel) : Consumer PayloadChannel fd.
            stdio: ['ignore', 'pipe', 'pipe', 'pipe', 'pipe', 'pipe', 'pipe'],
            windowsHide: true
        });
        this.#pid = this.#child.pid;
        this.#channel = new Channel_1.Channel({
            producerSocket: this.#child.stdio[3],
            consumerSocket: this.#child.stdio[4],
            pid: this.#pid
        });
        this.#payloadChannel = new PayloadChannel_1.PayloadChannel({
            // NOTE: TypeScript does not like more than 5 fds.
            // @ts-ignore
            producerSocket: this.#child.stdio[5],
            // @ts-ignore
            consumerSocket: this.#child.stdio[6]
        });
        this.#appData = appData || {};
        let spawnDone = false;
        // Listen for 'running' notification.
        this.#channel.once(String(this.#pid), (event) => {
            if (!spawnDone && event === 'running') {
                spawnDone = true;
                logger.debug('worker process running [pid:%s]', this.#pid);
                this.emit('@success');
            }
        });
        this.#child.on('exit', (code, signal) => {
            this.#child = undefined;
            if (!spawnDone) {
                spawnDone = true;
                if (code === 42) {
                    logger.error('worker process failed due to wrong settings [pid:%s]', this.#pid);
                    this.close();
                    this.emit('@failure', new TypeError('wrong settings'));
                }
                else {
                    logger.error('worker process failed unexpectedly [pid:%s, code:%s, signal:%s]', this.#pid, code, signal);
                    this.close();
                    this.emit('@failure', new Error(`[pid:${this.#pid}, code:${code}, signal:${signal}]`));
                }
            }
            else {
                logger.error('worker process died unexpectedly [pid:%s, code:%s, signal:%s]', this.#pid, code, signal);
                this.workerDied(new Error(`[pid:${this.#pid}, code:${code}, signal:${signal}]`));
            }
        });
        this.#child.on('error', (error) => {
            this.#child = undefined;
            if (!spawnDone) {
                spawnDone = true;
                logger.error('worker process failed [pid:%s]: %s', this.#pid, error.message);
                this.close();
                this.emit('@failure', error);
            }
            else {
                logger.error('worker process error [pid:%s]: %s', this.#pid, error.message);
                this.workerDied(error);
            }
        });
        // Be ready for 3rd party worker libraries logging to stdout.
        this.#child.stdout.on('data', (buffer) => {
            for (const line of buffer.toString('utf8').split('\n')) {
                if (line) {
                    workerLogger.debug(`(stdout) ${line}`);
                }
            }
        });
        // In case of a worker bug, mediasoup will log to stderr.
        this.#child.stderr.on('data', (buffer) => {
            for (const line of buffer.toString('utf8').split('\n')) {
                if (line) {
                    workerLogger.error(`(stderr) ${line}`);
                }
            }
        });
    }
    /**
     * Worker process identifier (PID).
     */
    get pid() {
        return this.#pid;
    }
    /**
     * Whether the Worker is closed.
     */
    get closed() {
        return this.#closed;
    }
    /**
     * Whether the Worker died.
     */
    get died() {
        return this.#died;
    }
    /**
     * App custom data.
     */
    get appData() {
        return this.#appData;
    }
    /**
     * App custom data setter.
     */
    set appData(appData) {
        this.#appData = appData;
    }
    /**
     * Observer.
     */
    get observer() {
        return this.#observer;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get webRtcServersForTesting() {
        return this.#webRtcServers;
    }
    /**
     * @private
     * Just for testing purposes.
     */
    get routersForTesting() {
        return this.#routers;
    }
    /**
     * Close the Worker.
     */
    close() {
        if (this.#closed) {
            return;
        }
        logger.debug('close()');
        this.#closed = true;
        // Kill the worker process.
        if (this.#child) {
            // Remove event listeners but leave a fake 'error' hander to avoid
            // propagation.
            this.#child.removeAllListeners('exit');
            this.#child.removeAllListeners('error');
            this.#child.on('error', () => { });
            this.#child.kill('SIGTERM');
            this.#child = undefined;
        }
        // Close the Channel instance.
        this.#channel.close();
        // Close the PayloadChannel instance.
        this.#payloadChannel.close();
        // Close every Router.
        for (const router of this.#routers) {
            router.workerClosed();
        }
        this.#routers.clear();
        // Close every WebRtcServer.
        for (const webRtcServer of this.#webRtcServers) {
            webRtcServer.workerClosed();
        }
        this.#webRtcServers.clear();
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
    /**
     * Dump Worker.
     */
    async dump() {
        logger.debug('dump()');
        return this.#channel.request('worker.dump');
    }
    /**
     * Get mediasoup-worker process resource usage.
     */
    async getResourceUsage() {
        logger.debug('getResourceUsage()');
        return this.#channel.request('worker.getResourceUsage');
    }
    /**
     * Update settings.
     */
    async updateSettings({ logLevel, logTags } = {}) {
        logger.debug('updateSettings()');
        const reqData = { logLevel, logTags };
        await this.#channel.request('worker.updateSettings', undefined, reqData);
    }
    /**
     * Create a WebRtcServer.
     */
    async createWebRtcServer({ listenInfos, appData }) {
        logger.debug('createWebRtcServer()');
        if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        const reqData = {
            webRtcServerId: (0, uuid_1.v4)(),
            listenInfos
        };
        await this.#channel.request('worker.createWebRtcServer', undefined, reqData);
        const webRtcServer = new WebRtcServer_1.WebRtcServer({
            internal: { webRtcServerId: reqData.webRtcServerId },
            channel: this.#channel,
            appData
        });
        this.#webRtcServers.add(webRtcServer);
        webRtcServer.on('@close', () => this.#webRtcServers.delete(webRtcServer));
        // Emit observer event.
        this.#observer.safeEmit('newwebrtcserver', webRtcServer);
        return webRtcServer;
    }
    /**
     * Create a Router.
     */
    async createRouter({ mediaCodecs, appData } = {}) {
        logger.debug('createRouter()');
        if (appData && typeof appData !== 'object') {
            throw new TypeError('if given, appData must be an object');
        }
        // This may throw.
        const rtpCapabilities = ortc.generateRouterRtpCapabilities(mediaCodecs);
        const reqData = { routerId: (0, uuid_1.v4)() };
        await this.#channel.request('worker.createRouter', undefined, reqData);
        const data = { rtpCapabilities };
        const router = new Router_1.Router({
            internal: {
                routerId: reqData.routerId
            },
            data,
            channel: this.#channel,
            payloadChannel: this.#payloadChannel,
            appData
        });
        this.#routers.add(router);
        router.on('@close', () => this.#routers.delete(router));
        // Emit observer event.
        this.#observer.safeEmit('newrouter', router);
        return router;
    }
    workerDied(error) {
        if (this.#closed) {
            return;
        }
        logger.debug(`died() [error:${error}]`);
        this.#closed = true;
        this.#died = true;
        // Close the Channel instance.
        this.#channel.close();
        // Close the PayloadChannel instance.
        this.#payloadChannel.close();
        // Close every Router.
        for (const router of this.#routers) {
            router.workerClosed();
        }
        this.#routers.clear();
        // Close every WebRtcServer.
        for (const webRtcServer of this.#webRtcServers) {
            webRtcServer.workerClosed();
        }
        this.#webRtcServers.clear();
        this.safeEmit('died', error);
        // Emit observer event.
        this.#observer.safeEmit('close');
    }
}
exports.Worker = Worker;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/errors.js":
/*!*******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/errors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvalidStateError = exports.UnsupportedError = void 0;
/**
 * Error indicating not support for something.
 */
class UnsupportedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnsupportedError';
        if (Error.hasOwnProperty('captureStackTrace')) // Just in V8.
         {
            Error.captureStackTrace(this, UnsupportedError);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
}
exports.UnsupportedError = UnsupportedError;
/**
 * Error produced when calling a method in an invalid state.
 */
class InvalidStateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidStateError';
        if (Error.hasOwnProperty('captureStackTrace')) // Just in V8.
         {
            Error.captureStackTrace(this, InvalidStateError);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
}
exports.InvalidStateError = InvalidStateError;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSupportedRtpCapabilities = exports.createWorker = exports.observer = exports.parseScalabilityMode = exports.version = exports.types = void 0;
const Logger_1 = __webpack_require__(/*! ./Logger */ "../../node_modules/mediasoup/node/lib/Logger.js");
const EnhancedEventEmitter_1 = __webpack_require__(/*! ./EnhancedEventEmitter */ "../../node_modules/mediasoup/node/lib/EnhancedEventEmitter.js");
const Worker_1 = __webpack_require__(/*! ./Worker */ "../../node_modules/mediasoup/node/lib/Worker.js");
const utils = __webpack_require__(/*! ./utils */ "../../node_modules/mediasoup/node/lib/utils.js");
const supportedRtpCapabilities_1 = __webpack_require__(/*! ./supportedRtpCapabilities */ "../../node_modules/mediasoup/node/lib/supportedRtpCapabilities.js");
const types = __webpack_require__(/*! ./types */ "../../node_modules/mediasoup/node/lib/types.js");
exports.types = types;
/**
 * Expose mediasoup version.
 */
exports.version = '3.12.4';
/**
 * Expose parseScalabilityMode() function.
 */
var scalabilityModes_1 = __webpack_require__(/*! ./scalabilityModes */ "../../node_modules/mediasoup/node/lib/scalabilityModes.js");
Object.defineProperty(exports, "parseScalabilityMode", ({ enumerable: true, get: function () { return scalabilityModes_1.parse; } }));
const logger = new Logger_1.Logger();
const observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
exports.observer = observer;
/**
 * Create a Worker.
 */
async function createWorker({ logLevel = 'error', logTags, rtcMinPort = 10000, rtcMaxPort = 59999, dtlsCertificateFile, dtlsPrivateKeyFile, libwebrtcFieldTrials, appData } = {}) {
    logger.debug('createWorker()');
    if (appData && typeof appData !== 'object') {
        throw new TypeError('if given, appData must be an object');
    }
    const worker = new Worker_1.Worker({
        logLevel,
        logTags,
        rtcMinPort,
        rtcMaxPort,
        dtlsCertificateFile,
        dtlsPrivateKeyFile,
        libwebrtcFieldTrials,
        appData
    });
    return new Promise((resolve, reject) => {
        worker.on('@success', () => {
            // Emit observer event.
            observer.safeEmit('newworker', worker);
            resolve(worker);
        });
        worker.on('@failure', reject);
    });
}
exports.createWorker = createWorker;
/**
 * Get a cloned copy of the mediasoup supported RTP capabilities.
 */
function getSupportedRtpCapabilities() {
    return utils.clone(supportedRtpCapabilities_1.supportedRtpCapabilities);
}
exports.getSupportedRtpCapabilities = getSupportedRtpCapabilities;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/ortc.js":
/*!*****************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/ortc.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPipeConsumerRtpParameters = exports.getConsumerRtpParameters = exports.canConsume = exports.getConsumableRtpParameters = exports.getProducerRtpParametersMapping = exports.generateRouterRtpCapabilities = exports.validateSctpStreamParameters = exports.validateSctpParameters = exports.validateNumSctpStreams = exports.validateSctpCapabilities = exports.validateRtcpParameters = exports.validateRtpEncodingParameters = exports.validateRtpHeaderExtensionParameters = exports.validateRtpCodecParameters = exports.validateRtpParameters = exports.validateRtpHeaderExtension = exports.validateRtcpFeedback = exports.validateRtpCodecCapability = exports.validateRtpCapabilities = void 0;
const h264 = __webpack_require__(/*! h264-profile-level-id */ "../../node_modules/h264-profile-level-id/index.js");
const utils = __webpack_require__(/*! ./utils */ "../../node_modules/mediasoup/node/lib/utils.js");
const errors_1 = __webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js");
const supportedRtpCapabilities_1 = __webpack_require__(/*! ./supportedRtpCapabilities */ "../../node_modules/mediasoup/node/lib/supportedRtpCapabilities.js");
const scalabilityModes_1 = __webpack_require__(/*! ./scalabilityModes */ "../../node_modules/mediasoup/node/lib/scalabilityModes.js");
const DynamicPayloadTypes = [
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122, 123, 124, 125, 126, 127, 96, 97, 98, 99
];
/**
 * Validates RtpCapabilities. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpCapabilities(caps) {
    if (typeof caps !== 'object') {
        throw new TypeError('caps is not an object');
    }
    // codecs is optional. If unset, fill with an empty array.
    if (caps.codecs && !Array.isArray(caps.codecs)) {
        throw new TypeError('caps.codecs is not an array');
    }
    else if (!caps.codecs) {
        caps.codecs = [];
    }
    for (const codec of caps.codecs) {
        validateRtpCodecCapability(codec);
    }
    // headerExtensions is optional. If unset, fill with an empty array.
    if (caps.headerExtensions && !Array.isArray(caps.headerExtensions)) {
        throw new TypeError('caps.headerExtensions is not an array');
    }
    else if (!caps.headerExtensions) {
        caps.headerExtensions = [];
    }
    for (const ext of caps.headerExtensions) {
        validateRtpHeaderExtension(ext);
    }
}
exports.validateRtpCapabilities = validateRtpCapabilities;
/**
 * Validates RtpCodecCapability. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpCodecCapability(codec) {
    const MimeTypeRegex = new RegExp('^(audio|video)/(.+)', 'i');
    if (typeof codec !== 'object') {
        throw new TypeError('codec is not an object');
    }
    // mimeType is mandatory.
    if (!codec.mimeType || typeof codec.mimeType !== 'string') {
        throw new TypeError('missing codec.mimeType');
    }
    const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
    if (!mimeTypeMatch) {
        throw new TypeError('invalid codec.mimeType');
    }
    // Just override kind with media component of mimeType.
    codec.kind = mimeTypeMatch[1].toLowerCase();
    // preferredPayloadType is optional.
    if (codec.preferredPayloadType && typeof codec.preferredPayloadType !== 'number') {
        throw new TypeError('invalid codec.preferredPayloadType');
    }
    // clockRate is mandatory.
    if (typeof codec.clockRate !== 'number') {
        throw new TypeError('missing codec.clockRate');
    }
    // channels is optional. If unset, set it to 1 (just if audio).
    if (codec.kind === 'audio') {
        if (typeof codec.channels !== 'number') {
            codec.channels = 1;
        }
    }
    else {
        delete codec.channels;
    }
    // parameters is optional. If unset, set it to an empty object.
    if (!codec.parameters || typeof codec.parameters !== 'object') {
        codec.parameters = {};
    }
    for (const key of Object.keys(codec.parameters)) {
        let value = codec.parameters[key];
        if (value === undefined) {
            codec.parameters[key] = '';
            value = '';
        }
        if (typeof value !== 'string' && typeof value !== 'number') {
            throw new TypeError(`invalid codec parameter [key:${key}s, value:${value}]`);
        }
        // Specific parameters validation.
        if (key === 'apt') {
            if (typeof value !== 'number') {
                throw new TypeError('invalid codec apt parameter');
            }
        }
    }
    // rtcpFeedback is optional. If unset, set it to an empty array.
    if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) {
        codec.rtcpFeedback = [];
    }
    for (const fb of codec.rtcpFeedback) {
        validateRtcpFeedback(fb);
    }
}
exports.validateRtpCodecCapability = validateRtpCodecCapability;
/**
 * Validates RtcpFeedback. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtcpFeedback(fb) {
    if (typeof fb !== 'object') {
        throw new TypeError('fb is not an object');
    }
    // type is mandatory.
    if (!fb.type || typeof fb.type !== 'string') {
        throw new TypeError('missing fb.type');
    }
    // parameter is optional. If unset set it to an empty string.
    if (!fb.parameter || typeof fb.parameter !== 'string') {
        fb.parameter = '';
    }
}
exports.validateRtcpFeedback = validateRtcpFeedback;
/**
 * Validates RtpHeaderExtension. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpHeaderExtension(ext) {
    if (typeof ext !== 'object') {
        throw new TypeError('ext is not an object');
    }
    if (ext.kind !== 'audio' && ext.kind !== 'video') {
        throw new TypeError('invalid ext.kind');
    }
    // uri is mandatory.
    if (!ext.uri || typeof ext.uri !== 'string') {
        throw new TypeError('missing ext.uri');
    }
    // preferredId is mandatory.
    if (typeof ext.preferredId !== 'number') {
        throw new TypeError('missing ext.preferredId');
    }
    // preferredEncrypt is optional. If unset set it to false.
    if (ext.preferredEncrypt && typeof ext.preferredEncrypt !== 'boolean') {
        throw new TypeError('invalid ext.preferredEncrypt');
    }
    else if (!ext.preferredEncrypt) {
        ext.preferredEncrypt = false;
    }
    // direction is optional. If unset set it to sendrecv.
    if (ext.direction && typeof ext.direction !== 'string') {
        throw new TypeError('invalid ext.direction');
    }
    else if (!ext.direction) {
        ext.direction = 'sendrecv';
    }
}
exports.validateRtpHeaderExtension = validateRtpHeaderExtension;
/**
 * Validates RtpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpParameters(params) {
    if (typeof params !== 'object') {
        throw new TypeError('params is not an object');
    }
    // mid is optional.
    if (params.mid && typeof params.mid !== 'string') {
        throw new TypeError('params.mid is not a string');
    }
    // codecs is mandatory.
    if (!Array.isArray(params.codecs)) {
        throw new TypeError('missing params.codecs');
    }
    for (const codec of params.codecs) {
        validateRtpCodecParameters(codec);
    }
    // headerExtensions is optional. If unset, fill with an empty array.
    if (params.headerExtensions && !Array.isArray(params.headerExtensions)) {
        throw new TypeError('params.headerExtensions is not an array');
    }
    else if (!params.headerExtensions) {
        params.headerExtensions = [];
    }
    for (const ext of params.headerExtensions) {
        validateRtpHeaderExtensionParameters(ext);
    }
    // encodings is optional. If unset, fill with an empty array.
    if (params.encodings && !Array.isArray(params.encodings)) {
        throw new TypeError('params.encodings is not an array');
    }
    else if (!params.encodings) {
        params.encodings = [];
    }
    for (const encoding of params.encodings) {
        validateRtpEncodingParameters(encoding);
    }
    // rtcp is optional. If unset, fill with an empty object.
    if (params.rtcp && typeof params.rtcp !== 'object') {
        throw new TypeError('params.rtcp is not an object');
    }
    else if (!params.rtcp) {
        params.rtcp = {};
    }
    validateRtcpParameters(params.rtcp);
}
exports.validateRtpParameters = validateRtpParameters;
/**
 * Validates RtpCodecParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpCodecParameters(codec) {
    const MimeTypeRegex = new RegExp('^(audio|video)/(.+)', 'i');
    if (typeof codec !== 'object') {
        throw new TypeError('codec is not an object');
    }
    // mimeType is mandatory.
    if (!codec.mimeType || typeof codec.mimeType !== 'string') {
        throw new TypeError('missing codec.mimeType');
    }
    const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
    if (!mimeTypeMatch) {
        throw new TypeError('invalid codec.mimeType');
    }
    // payloadType is mandatory.
    if (typeof codec.payloadType !== 'number') {
        throw new TypeError('missing codec.payloadType');
    }
    // clockRate is mandatory.
    if (typeof codec.clockRate !== 'number') {
        throw new TypeError('missing codec.clockRate');
    }
    const kind = mimeTypeMatch[1].toLowerCase();
    // channels is optional. If unset, set it to 1 (just if audio).
    if (kind === 'audio') {
        if (typeof codec.channels !== 'number') {
            codec.channels = 1;
        }
    }
    else {
        delete codec.channels;
    }
    // parameters is optional. If unset, set it to an empty object.
    if (!codec.parameters || typeof codec.parameters !== 'object') {
        codec.parameters = {};
    }
    for (const key of Object.keys(codec.parameters)) {
        let value = codec.parameters[key];
        if (value === undefined) {
            codec.parameters[key] = '';
            value = '';
        }
        if (typeof value !== 'string' && typeof value !== 'number') {
            throw new TypeError(`invalid codec parameter [key:${key}s, value:${value}]`);
        }
        // Specific parameters validation.
        if (key === 'apt') {
            if (typeof value !== 'number') {
                throw new TypeError('invalid codec apt parameter');
            }
        }
    }
    // rtcpFeedback is optional. If unset, set it to an empty array.
    if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) {
        codec.rtcpFeedback = [];
    }
    for (const fb of codec.rtcpFeedback) {
        validateRtcpFeedback(fb);
    }
}
exports.validateRtpCodecParameters = validateRtpCodecParameters;
/**
 * Validates RtpHeaderExtensionParameteters. It may modify given data by adding
 * missing fields with default values. It throws if invalid.
 */
function validateRtpHeaderExtensionParameters(ext) {
    if (typeof ext !== 'object') {
        throw new TypeError('ext is not an object');
    }
    // uri is mandatory.
    if (!ext.uri || typeof ext.uri !== 'string') {
        throw new TypeError('missing ext.uri');
    }
    // id is mandatory.
    if (typeof ext.id !== 'number') {
        throw new TypeError('missing ext.id');
    }
    // encrypt is optional. If unset set it to false.
    if (ext.encrypt && typeof ext.encrypt !== 'boolean') {
        throw new TypeError('invalid ext.encrypt');
    }
    else if (!ext.encrypt) {
        ext.encrypt = false;
    }
    // parameters is optional. If unset, set it to an empty object.
    if (!ext.parameters || typeof ext.parameters !== 'object') {
        ext.parameters = {};
    }
    for (const key of Object.keys(ext.parameters)) {
        let value = ext.parameters[key];
        if (value === undefined) {
            ext.parameters[key] = '';
            value = '';
        }
        if (typeof value !== 'string' && typeof value !== 'number') {
            throw new TypeError('invalid header extension parameter');
        }
    }
}
exports.validateRtpHeaderExtensionParameters = validateRtpHeaderExtensionParameters;
/**
 * Validates RtpEncodingParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtpEncodingParameters(encoding) {
    if (typeof encoding !== 'object') {
        throw new TypeError('encoding is not an object');
    }
    // ssrc is optional.
    if (encoding.ssrc && typeof encoding.ssrc !== 'number') {
        throw new TypeError('invalid encoding.ssrc');
    }
    // rid is optional.
    if (encoding.rid && typeof encoding.rid !== 'string') {
        throw new TypeError('invalid encoding.rid');
    }
    // rtx is optional.
    if (encoding.rtx && typeof encoding.rtx !== 'object') {
        throw new TypeError('invalid encoding.rtx');
    }
    else if (encoding.rtx) {
        // RTX ssrc is mandatory if rtx is present.
        if (typeof encoding.rtx.ssrc !== 'number') {
            throw new TypeError('missing encoding.rtx.ssrc');
        }
    }
    // dtx is optional. If unset set it to false.
    if (!encoding.dtx || typeof encoding.dtx !== 'boolean') {
        encoding.dtx = false;
    }
    // scalabilityMode is optional.
    if (encoding.scalabilityMode && typeof encoding.scalabilityMode !== 'string') {
        throw new TypeError('invalid encoding.scalabilityMode');
    }
}
exports.validateRtpEncodingParameters = validateRtpEncodingParameters;
/**
 * Validates RtcpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateRtcpParameters(rtcp) {
    if (typeof rtcp !== 'object') {
        throw new TypeError('rtcp is not an object');
    }
    // cname is optional.
    if (rtcp.cname && typeof rtcp.cname !== 'string') {
        throw new TypeError('invalid rtcp.cname');
    }
    // reducedSize is optional. If unset set it to true.
    if (!rtcp.reducedSize || typeof rtcp.reducedSize !== 'boolean') {
        rtcp.reducedSize = true;
    }
}
exports.validateRtcpParameters = validateRtcpParameters;
/**
 * Validates SctpCapabilities. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateSctpCapabilities(caps) {
    if (typeof caps !== 'object') {
        throw new TypeError('caps is not an object');
    }
    // numStreams is mandatory.
    if (!caps.numStreams || typeof caps.numStreams !== 'object') {
        throw new TypeError('missing caps.numStreams');
    }
    validateNumSctpStreams(caps.numStreams);
}
exports.validateSctpCapabilities = validateSctpCapabilities;
/**
 * Validates NumSctpStreams. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateNumSctpStreams(numStreams) {
    if (typeof numStreams !== 'object') {
        throw new TypeError('numStreams is not an object');
    }
    // OS is mandatory.
    if (typeof numStreams.OS !== 'number') {
        throw new TypeError('missing numStreams.OS');
    }
    // MIS is mandatory.
    if (typeof numStreams.MIS !== 'number') {
        throw new TypeError('missing numStreams.MIS');
    }
}
exports.validateNumSctpStreams = validateNumSctpStreams;
/**
 * Validates SctpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateSctpParameters(params) {
    if (typeof params !== 'object') {
        throw new TypeError('params is not an object');
    }
    // port is mandatory.
    if (typeof params.port !== 'number') {
        throw new TypeError('missing params.port');
    }
    // OS is mandatory.
    if (typeof params.OS !== 'number') {
        throw new TypeError('missing params.OS');
    }
    // MIS is mandatory.
    if (typeof params.MIS !== 'number') {
        throw new TypeError('missing params.MIS');
    }
    // maxMessageSize is mandatory.
    if (typeof params.maxMessageSize !== 'number') {
        throw new TypeError('missing params.maxMessageSize');
    }
}
exports.validateSctpParameters = validateSctpParameters;
/**
 * Validates SctpStreamParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
function validateSctpStreamParameters(params) {
    if (typeof params !== 'object') {
        throw new TypeError('params is not an object');
    }
    // streamId is mandatory.
    if (typeof params.streamId !== 'number') {
        throw new TypeError('missing params.streamId');
    }
    // ordered is optional.
    let orderedGiven = false;
    if (typeof params.ordered === 'boolean') {
        orderedGiven = true;
    }
    else {
        params.ordered = true;
    }
    // maxPacketLifeTime is optional.
    if (params.maxPacketLifeTime && typeof params.maxPacketLifeTime !== 'number') {
        throw new TypeError('invalid params.maxPacketLifeTime');
    }
    // maxRetransmits is optional.
    if (params.maxRetransmits && typeof params.maxRetransmits !== 'number') {
        throw new TypeError('invalid params.maxRetransmits');
    }
    if (params.maxPacketLifeTime && params.maxRetransmits) {
        throw new TypeError('cannot provide both maxPacketLifeTime and maxRetransmits');
    }
    if (orderedGiven &&
        params.ordered &&
        (params.maxPacketLifeTime || params.maxRetransmits)) {
        throw new TypeError('cannot be ordered with maxPacketLifeTime or maxRetransmits');
    }
    else if (!orderedGiven && (params.maxPacketLifeTime || params.maxRetransmits)) {
        params.ordered = false;
    }
}
exports.validateSctpStreamParameters = validateSctpStreamParameters;
/**
 * Generate RTP capabilities for the Router based on the given media codecs and
 * mediasoup supported RTP capabilities.
 */
function generateRouterRtpCapabilities(mediaCodecs = []) {
    // Normalize supported RTP capabilities.
    validateRtpCapabilities(supportedRtpCapabilities_1.supportedRtpCapabilities);
    if (!Array.isArray(mediaCodecs)) {
        throw new TypeError('mediaCodecs must be an Array');
    }
    const clonedSupportedRtpCapabilities = utils.clone(supportedRtpCapabilities_1.supportedRtpCapabilities);
    const dynamicPayloadTypes = utils.clone(DynamicPayloadTypes);
    const caps = {
        codecs: [],
        headerExtensions: clonedSupportedRtpCapabilities.headerExtensions
    };
    for (const mediaCodec of mediaCodecs) {
        // This may throw.
        validateRtpCodecCapability(mediaCodec);
        const matchedSupportedCodec = clonedSupportedRtpCapabilities
            .codecs
            .find((supportedCodec) => (matchCodecs(mediaCodec, supportedCodec, { strict: false })));
        if (!matchedSupportedCodec) {
            throw new errors_1.UnsupportedError(`media codec not supported [mimeType:${mediaCodec.mimeType}]`);
        }
        // Clone the supported codec.
        const codec = utils.clone(matchedSupportedCodec);
        // If the given media codec has preferredPayloadType, keep it.
        if (typeof mediaCodec.preferredPayloadType === 'number') {
            codec.preferredPayloadType = mediaCodec.preferredPayloadType;
            // Also remove the pt from the list of available dynamic values.
            const idx = dynamicPayloadTypes.indexOf(codec.preferredPayloadType);
            if (idx > -1) {
                dynamicPayloadTypes.splice(idx, 1);
            }
        }
        // Otherwise if the supported codec has preferredPayloadType, use it.
        else if (typeof codec.preferredPayloadType === 'number') {
            // No need to remove it from the list since it's not a dynamic value.
        }
        // Otherwise choose a dynamic one.
        else {
            // Take the first available pt and remove it from the list.
            const pt = dynamicPayloadTypes.shift();
            if (!pt) {
                throw new Error('cannot allocate more dynamic codec payload types');
            }
            codec.preferredPayloadType = pt;
        }
        // Ensure there is not duplicated preferredPayloadType values.
        if (caps.codecs.some((c) => c.preferredPayloadType === codec.preferredPayloadType)) {
            throw new TypeError('duplicated codec.preferredPayloadType');
        }
        // Merge the media codec parameters.
        codec.parameters = { ...codec.parameters, ...mediaCodec.parameters };
        // Append to the codec list.
        caps.codecs.push(codec);
        // Add a RTX video codec if video.
        if (codec.kind === 'video') {
            // Take the first available pt and remove it from the list.
            const pt = dynamicPayloadTypes.shift();
            if (!pt) {
                throw new Error('cannot allocate more dynamic codec payload types');
            }
            const rtxCodec = {
                kind: codec.kind,
                mimeType: `${codec.kind}/rtx`,
                preferredPayloadType: pt,
                clockRate: codec.clockRate,
                parameters: {
                    apt: codec.preferredPayloadType
                },
                rtcpFeedback: []
            };
            // Append to the codec list.
            caps.codecs.push(rtxCodec);
        }
    }
    return caps;
}
exports.generateRouterRtpCapabilities = generateRouterRtpCapabilities;
/**
 * Get a mapping of codec payloads and encodings of the given Producer RTP
 * parameters as values expected by the Router.
 *
 * It may throw if invalid or non supported RTP parameters are given.
 */
function getProducerRtpParametersMapping(params, caps) {
    const rtpMapping = {
        codecs: [],
        encodings: []
    };
    // Match parameters media codecs to capabilities media codecs.
    const codecToCapCodec = new Map();
    for (const codec of params.codecs) {
        if (isRtxCodec(codec)) {
            continue;
        }
        // Search for the same media codec in capabilities.
        const matchedCapCodec = caps.codecs
            .find((capCodec) => (matchCodecs(codec, capCodec, { strict: true, modify: true })));
        if (!matchedCapCodec) {
            throw new errors_1.UnsupportedError(`unsupported codec [mimeType:${codec.mimeType}, payloadType:${codec.payloadType}]`);
        }
        codecToCapCodec.set(codec, matchedCapCodec);
    }
    // Match parameters RTX codecs to capabilities RTX codecs.
    for (const codec of params.codecs) {
        if (!isRtxCodec(codec)) {
            continue;
        }
        // Search for the associated media codec.
        const associatedMediaCodec = params.codecs
            .find((mediaCodec) => mediaCodec.payloadType === codec.parameters.apt);
        if (!associatedMediaCodec) {
            throw new TypeError(`missing media codec found for RTX PT ${codec.payloadType}`);
        }
        const capMediaCodec = codecToCapCodec.get(associatedMediaCodec);
        // Ensure that the capabilities media codec has a RTX codec.
        const associatedCapRtxCodec = caps.codecs
            .find((capCodec) => (isRtxCodec(capCodec) &&
            capCodec.parameters.apt === capMediaCodec.preferredPayloadType));
        if (!associatedCapRtxCodec) {
            throw new errors_1.UnsupportedError(`no RTX codec for capability codec PT ${capMediaCodec.preferredPayloadType}`);
        }
        codecToCapCodec.set(codec, associatedCapRtxCodec);
    }
    // Generate codecs mapping.
    for (const [codec, capCodec] of codecToCapCodec) {
        rtpMapping.codecs.push({
            payloadType: codec.payloadType,
            mappedPayloadType: capCodec.preferredPayloadType
        });
    }
    // Generate encodings mapping.
    let mappedSsrc = utils.generateRandomNumber();
    for (const encoding of params.encodings) {
        const mappedEncoding = {};
        mappedEncoding.mappedSsrc = mappedSsrc++;
        if (encoding.rid) {
            mappedEncoding.rid = encoding.rid;
        }
        if (encoding.ssrc) {
            mappedEncoding.ssrc = encoding.ssrc;
        }
        if (encoding.scalabilityMode) {
            mappedEncoding.scalabilityMode = encoding.scalabilityMode;
        }
        rtpMapping.encodings.push(mappedEncoding);
    }
    return rtpMapping;
}
exports.getProducerRtpParametersMapping = getProducerRtpParametersMapping;
/**
 * Generate RTP parameters to be internally used by Consumers given the RTP
 * parameters of a Producer and the RTP capabilities of the Router.
 */
function getConsumableRtpParameters(kind, params, caps, rtpMapping) {
    const consumableParams = {
        codecs: [],
        headerExtensions: [],
        encodings: [],
        rtcp: {}
    };
    for (const codec of params.codecs) {
        if (isRtxCodec(codec)) {
            continue;
        }
        const consumableCodecPt = rtpMapping.codecs
            .find((entry) => entry.payloadType === codec.payloadType)
            .mappedPayloadType;
        const matchedCapCodec = caps.codecs
            .find((capCodec) => capCodec.preferredPayloadType === consumableCodecPt);
        const consumableCodec = {
            mimeType: matchedCapCodec.mimeType,
            payloadType: matchedCapCodec.preferredPayloadType,
            clockRate: matchedCapCodec.clockRate,
            channels: matchedCapCodec.channels,
            parameters: codec.parameters,
            rtcpFeedback: matchedCapCodec.rtcpFeedback
        };
        consumableParams.codecs.push(consumableCodec);
        const consumableCapRtxCodec = caps.codecs
            .find((capRtxCodec) => (isRtxCodec(capRtxCodec) &&
            capRtxCodec.parameters.apt === consumableCodec.payloadType));
        if (consumableCapRtxCodec) {
            const consumableRtxCodec = {
                mimeType: consumableCapRtxCodec.mimeType,
                payloadType: consumableCapRtxCodec.preferredPayloadType,
                clockRate: consumableCapRtxCodec.clockRate,
                parameters: consumableCapRtxCodec.parameters,
                rtcpFeedback: consumableCapRtxCodec.rtcpFeedback
            };
            consumableParams.codecs.push(consumableRtxCodec);
        }
    }
    for (const capExt of caps.headerExtensions) {
        // Just take RTP header extension that can be used in Consumers.
        if (capExt.kind !== kind ||
            (capExt.direction !== 'sendrecv' && capExt.direction !== 'sendonly')) {
            continue;
        }
        const consumableExt = {
            uri: capExt.uri,
            id: capExt.preferredId,
            encrypt: capExt.preferredEncrypt,
            parameters: {}
        };
        consumableParams.headerExtensions.push(consumableExt);
    }
    // Clone Producer encodings since we'll mangle them.
    const consumableEncodings = utils.clone(params.encodings);
    for (let i = 0; i < consumableEncodings.length; ++i) {
        const consumableEncoding = consumableEncodings[i];
        const { mappedSsrc } = rtpMapping.encodings[i];
        // Remove useless fields.
        delete consumableEncoding.rid;
        delete consumableEncoding.rtx;
        delete consumableEncoding.codecPayloadType;
        // Set the mapped ssrc.
        consumableEncoding.ssrc = mappedSsrc;
        consumableParams.encodings.push(consumableEncoding);
    }
    consumableParams.rtcp =
        {
            cname: params.rtcp.cname,
            reducedSize: true,
            mux: true
        };
    return consumableParams;
}
exports.getConsumableRtpParameters = getConsumableRtpParameters;
/**
 * Check whether the given RTP capabilities can consume the given Producer.
 */
function canConsume(consumableParams, caps) {
    // This may throw.
    validateRtpCapabilities(caps);
    const matchingCodecs = [];
    for (const codec of consumableParams.codecs) {
        const matchedCapCodec = caps.codecs
            .find((capCodec) => matchCodecs(capCodec, codec, { strict: true }));
        if (!matchedCapCodec) {
            continue;
        }
        matchingCodecs.push(codec);
    }
    // Ensure there is at least one media codec.
    if (matchingCodecs.length === 0 || isRtxCodec(matchingCodecs[0])) {
        return false;
    }
    return true;
}
exports.canConsume = canConsume;
/**
 * Generate RTP parameters for a specific Consumer.
 *
 * It reduces encodings to just one and takes into account given RTP capabilities
 * to reduce codecs, codecs' RTCP feedback and header extensions, and also enables
 * or disables RTX.
 */
function getConsumerRtpParameters({ consumableRtpParameters, remoteRtpCapabilities, pipe, enableRtx }) {
    const consumerParams = {
        codecs: [],
        headerExtensions: [],
        encodings: [],
        rtcp: consumableRtpParameters.rtcp
    };
    for (const capCodec of remoteRtpCapabilities.codecs) {
        validateRtpCodecCapability(capCodec);
    }
    const consumableCodecs = utils.clone(consumableRtpParameters.codecs);
    let rtxSupported = false;
    for (const codec of consumableCodecs) {
        if (!enableRtx && isRtxCodec(codec)) {
            continue;
        }
        const matchedCapCodec = remoteRtpCapabilities.codecs
            .find((capCodec) => matchCodecs(capCodec, codec, { strict: true }));
        if (!matchedCapCodec) {
            continue;
        }
        codec.rtcpFeedback = matchedCapCodec.rtcpFeedback
            .filter((fb) => ((enableRtx || fb.type !== 'nack' || fb.parameter)));
        consumerParams.codecs.push(codec);
    }
    // Must sanitize the list of matched codecs by removing useless RTX codecs.
    for (let idx = consumerParams.codecs.length - 1; idx >= 0; --idx) {
        const codec = consumerParams.codecs[idx];
        if (isRtxCodec(codec)) {
            // Search for the associated media codec.
            const associatedMediaCodec = consumerParams.codecs
                .find((mediaCodec) => mediaCodec.payloadType === codec.parameters.apt);
            if (associatedMediaCodec) {
                rtxSupported = true;
            }
            else {
                consumerParams.codecs.splice(idx, 1);
            }
        }
    }
    // Ensure there is at least one media codec.
    if (consumerParams.codecs.length === 0 || isRtxCodec(consumerParams.codecs[0])) {
        throw new errors_1.UnsupportedError('no compatible media codecs');
    }
    consumerParams.headerExtensions = consumableRtpParameters.headerExtensions
        .filter((ext) => (remoteRtpCapabilities.headerExtensions
        .some((capExt) => (capExt.preferredId === ext.id &&
        capExt.uri === ext.uri))));
    // Reduce codecs' RTCP feedback. Use Transport-CC if available, REMB otherwise.
    if (consumerParams.headerExtensions.some((ext) => (ext.uri === 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01'))) {
        for (const codec of consumerParams.codecs) {
            codec.rtcpFeedback = codec.rtcpFeedback
                .filter((fb) => fb.type !== 'goog-remb');
        }
    }
    else if (consumerParams.headerExtensions.some((ext) => (ext.uri === 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time'))) {
        for (const codec of consumerParams.codecs) {
            codec.rtcpFeedback = codec.rtcpFeedback
                .filter((fb) => fb.type !== 'transport-cc');
        }
    }
    else {
        for (const codec of consumerParams.codecs) {
            codec.rtcpFeedback = codec.rtcpFeedback
                .filter((fb) => (fb.type !== 'transport-cc' &&
                fb.type !== 'goog-remb'));
        }
    }
    if (!pipe) {
        const consumerEncoding = {
            ssrc: utils.generateRandomNumber()
        };
        if (rtxSupported) {
            consumerEncoding.rtx = { ssrc: consumerEncoding.ssrc + 1 };
        }
        // If any of the consumableRtpParameters.encodings has scalabilityMode,
        // process it (assume all encodings have the same value).
        const encodingWithScalabilityMode = consumableRtpParameters.encodings.find((encoding) => encoding.scalabilityMode);
        let scalabilityMode = encodingWithScalabilityMode
            ? encodingWithScalabilityMode.scalabilityMode
            : undefined;
        // If there is simulast, mangle spatial layers in scalabilityMode.
        if (consumableRtpParameters.encodings.length > 1) {
            const { temporalLayers } = (0, scalabilityModes_1.parse)(scalabilityMode);
            scalabilityMode = `L${consumableRtpParameters.encodings.length}T${temporalLayers}`;
        }
        if (scalabilityMode) {
            consumerEncoding.scalabilityMode = scalabilityMode;
        }
        // Use the maximum maxBitrate in any encoding and honor it in the Consumer's
        // encoding.
        const maxEncodingMaxBitrate = consumableRtpParameters.encodings.reduce((maxBitrate, encoding) => (encoding.maxBitrate && encoding.maxBitrate > maxBitrate
            ? encoding.maxBitrate
            : maxBitrate), 0);
        if (maxEncodingMaxBitrate) {
            consumerEncoding.maxBitrate = maxEncodingMaxBitrate;
        }
        // Set a single encoding for the Consumer.
        consumerParams.encodings.push(consumerEncoding);
    }
    else {
        const consumableEncodings = utils.clone(consumableRtpParameters.encodings);
        const baseSsrc = utils.generateRandomNumber();
        const baseRtxSsrc = utils.generateRandomNumber();
        for (let i = 0; i < consumableEncodings.length; ++i) {
            const encoding = consumableEncodings[i];
            encoding.ssrc = baseSsrc + i;
            if (rtxSupported) {
                encoding.rtx = { ssrc: baseRtxSsrc + i };
            }
            else {
                delete encoding.rtx;
            }
            consumerParams.encodings.push(encoding);
        }
    }
    return consumerParams;
}
exports.getConsumerRtpParameters = getConsumerRtpParameters;
/**
 * Generate RTP parameters for a pipe Consumer.
 *
 * It keeps all original consumable encodings and removes support for BWE. If
 * enableRtx is false, it also removes RTX and NACK support.
 */
function getPipeConsumerRtpParameters({ consumableRtpParameters, enableRtx }) {
    const consumerParams = {
        codecs: [],
        headerExtensions: [],
        encodings: [],
        rtcp: consumableRtpParameters.rtcp
    };
    const consumableCodecs = utils.clone(consumableRtpParameters.codecs);
    for (const codec of consumableCodecs) {
        if (!enableRtx && isRtxCodec(codec)) {
            continue;
        }
        codec.rtcpFeedback = codec.rtcpFeedback
            .filter((fb) => ((fb.type === 'nack' && fb.parameter === 'pli') ||
            (fb.type === 'ccm' && fb.parameter === 'fir') ||
            (enableRtx && fb.type === 'nack' && !fb.parameter)));
        consumerParams.codecs.push(codec);
    }
    // Reduce RTP extensions by disabling transport MID and BWE related ones.
    consumerParams.headerExtensions = consumableRtpParameters.headerExtensions
        .filter((ext) => (ext.uri !== 'urn:ietf:params:rtp-hdrext:sdes:mid' &&
        ext.uri !== 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' &&
        ext.uri !== 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01'));
    const consumableEncodings = utils.clone(consumableRtpParameters.encodings);
    const baseSsrc = utils.generateRandomNumber();
    const baseRtxSsrc = utils.generateRandomNumber();
    for (let i = 0; i < consumableEncodings.length; ++i) {
        const encoding = consumableEncodings[i];
        encoding.ssrc = baseSsrc + i;
        if (enableRtx) {
            encoding.rtx = { ssrc: baseRtxSsrc + i };
        }
        else {
            delete encoding.rtx;
        }
        consumerParams.encodings.push(encoding);
    }
    return consumerParams;
}
exports.getPipeConsumerRtpParameters = getPipeConsumerRtpParameters;
function isRtxCodec(codec) {
    return /.+\/rtx$/i.test(codec.mimeType);
}
function matchCodecs(aCodec, bCodec, { strict = false, modify = false } = {}) {
    const aMimeType = aCodec.mimeType.toLowerCase();
    const bMimeType = bCodec.mimeType.toLowerCase();
    if (aMimeType !== bMimeType) {
        return false;
    }
    if (aCodec.clockRate !== bCodec.clockRate) {
        return false;
    }
    if (aCodec.channels !== bCodec.channels) {
        return false;
    }
    // Per codec special checks.
    switch (aMimeType) {
        case 'audio/multiopus':
            {
                const aNumStreams = aCodec.parameters['num_streams'];
                const bNumStreams = bCodec.parameters['num_streams'];
                if (aNumStreams !== bNumStreams) {
                    return false;
                }
                const aCoupledStreams = aCodec.parameters['coupled_streams'];
                const bCoupledStreams = bCodec.parameters['coupled_streams'];
                if (aCoupledStreams !== bCoupledStreams) {
                    return false;
                }
                break;
            }
        case 'video/h264':
        case 'video/h264-svc':
            {
                if (strict) {
                    const aPacketizationMode = aCodec.parameters['packetization-mode'] || 0;
                    const bPacketizationMode = bCodec.parameters['packetization-mode'] || 0;
                    if (aPacketizationMode !== bPacketizationMode) {
                        return false;
                    }
                    if (!h264.isSameProfile(aCodec.parameters, bCodec.parameters)) {
                        return false;
                    }
                    let selectedProfileLevelId;
                    try {
                        selectedProfileLevelId =
                            h264.generateProfileLevelIdForAnswer(aCodec.parameters, bCodec.parameters);
                    }
                    catch (error) {
                        return false;
                    }
                    if (modify) {
                        if (selectedProfileLevelId) {
                            aCodec.parameters['profile-level-id'] = selectedProfileLevelId;
                        }
                        else {
                            delete aCodec.parameters['profile-level-id'];
                        }
                    }
                }
                break;
            }
        case 'video/vp9':
            {
                if (strict) {
                    const aProfileId = aCodec.parameters['profile-id'] || 0;
                    const bProfileId = bCodec.parameters['profile-id'] || 0;
                    if (aProfileId !== bProfileId) {
                        return false;
                    }
                }
                break;
            }
    }
    return true;
}


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/scalabilityModes.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/scalabilityModes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = void 0;
const ScalabilityModeRegex = new RegExp('^[LS]([1-9]\\d{0,1})T([1-9]\\d{0,1})(_KEY)?');
function parse(scalabilityMode) {
    const match = ScalabilityModeRegex.exec(scalabilityMode || '');
    if (match) {
        return {
            spatialLayers: Number(match[1]),
            temporalLayers: Number(match[2]),
            ksvc: Boolean(match[3])
        };
    }
    else {
        return {
            spatialLayers: 1,
            temporalLayers: 1,
            ksvc: false
        };
    }
}
exports.parse = parse;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/supportedRtpCapabilities.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/supportedRtpCapabilities.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.supportedRtpCapabilities = void 0;
const supportedRtpCapabilities = {
    codecs: [
        {
            kind: 'audio',
            mimeType: 'audio/opus',
            clockRate: 48000,
            channels: 2,
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/multiopus',
            clockRate: 48000,
            channels: 4,
            // Quad channel.
            parameters: {
                'channel_mapping': '0,1,2,3',
                'num_streams': 2,
                'coupled_streams': 2
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/multiopus',
            clockRate: 48000,
            channels: 6,
            // 5.1.
            parameters: {
                'channel_mapping': '0,4,1,2,3,5',
                'num_streams': 4,
                'coupled_streams': 2
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/multiopus',
            clockRate: 48000,
            channels: 8,
            // 7.1.
            parameters: {
                'channel_mapping': '0,6,1,2,3,4,5,7',
                'num_streams': 5,
                'coupled_streams': 3
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/PCMU',
            preferredPayloadType: 0,
            clockRate: 8000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/PCMA',
            preferredPayloadType: 8,
            clockRate: 8000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/ISAC',
            clockRate: 32000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/ISAC',
            clockRate: 16000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/G722',
            preferredPayloadType: 9,
            clockRate: 8000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/iLBC',
            clockRate: 8000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/SILK',
            clockRate: 24000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/SILK',
            clockRate: 16000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/SILK',
            clockRate: 12000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/SILK',
            clockRate: 8000,
            rtcpFeedback: [
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'audio',
            mimeType: 'audio/CN',
            preferredPayloadType: 13,
            clockRate: 32000
        },
        {
            kind: 'audio',
            mimeType: 'audio/CN',
            preferredPayloadType: 13,
            clockRate: 16000
        },
        {
            kind: 'audio',
            mimeType: 'audio/CN',
            preferredPayloadType: 13,
            clockRate: 8000
        },
        {
            kind: 'audio',
            mimeType: 'audio/telephone-event',
            clockRate: 48000
        },
        {
            kind: 'audio',
            mimeType: 'audio/telephone-event',
            clockRate: 32000
        },
        {
            kind: 'audio',
            mimeType: 'audio/telephone-event',
            clockRate: 16000
        },
        {
            kind: 'audio',
            mimeType: 'audio/telephone-event',
            clockRate: 8000
        },
        {
            kind: 'video',
            mimeType: 'video/VP8',
            clockRate: 90000,
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'nack', parameter: 'pli' },
                { type: 'ccm', parameter: 'fir' },
                { type: 'goog-remb' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'video',
            mimeType: 'video/VP9',
            clockRate: 90000,
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'nack', parameter: 'pli' },
                { type: 'ccm', parameter: 'fir' },
                { type: 'goog-remb' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'video',
            mimeType: 'video/H264',
            clockRate: 90000,
            parameters: {
                'level-asymmetry-allowed': 1
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'nack', parameter: 'pli' },
                { type: 'ccm', parameter: 'fir' },
                { type: 'goog-remb' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'video',
            mimeType: 'video/H264-SVC',
            clockRate: 90000,
            parameters: {
                'level-asymmetry-allowed': 1
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'nack', parameter: 'pli' },
                { type: 'ccm', parameter: 'fir' },
                { type: 'goog-remb' },
                { type: 'transport-cc' }
            ]
        },
        {
            kind: 'video',
            mimeType: 'video/H265',
            clockRate: 90000,
            parameters: {
                'level-asymmetry-allowed': 1
            },
            rtcpFeedback: [
                { type: 'nack' },
                { type: 'nack', parameter: 'pli' },
                { type: 'ccm', parameter: 'fir' },
                { type: 'goog-remb' },
                { type: 'transport-cc' }
            ]
        }
    ],
    headerExtensions: [
        {
            kind: 'audio',
            uri: 'urn:ietf:params:rtp-hdrext:sdes:mid',
            preferredId: 1,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'urn:ietf:params:rtp-hdrext:sdes:mid',
            preferredId: 1,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id',
            preferredId: 2,
            preferredEncrypt: false,
            direction: 'recvonly'
        },
        {
            kind: 'video',
            uri: 'urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id',
            preferredId: 3,
            preferredEncrypt: false,
            direction: 'recvonly'
        },
        {
            kind: 'audio',
            uri: 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time',
            preferredId: 4,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time',
            preferredId: 4,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        // NOTE: For audio we just enable transport-wide-cc-01 when receiving media.
        {
            kind: 'audio',
            uri: 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01',
            preferredId: 5,
            preferredEncrypt: false,
            direction: 'recvonly'
        },
        {
            kind: 'video',
            uri: 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01',
            preferredId: 5,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        // NOTE: Remove this once framemarking draft becomes RFC.
        {
            kind: 'video',
            uri: 'http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07',
            preferredId: 6,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'urn:ietf:params:rtp-hdrext:framemarking',
            preferredId: 7,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'audio',
            uri: 'urn:ietf:params:rtp-hdrext:ssrc-audio-level',
            preferredId: 10,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'urn:3gpp:video-orientation',
            preferredId: 11,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'urn:ietf:params:rtp-hdrext:toffset',
            preferredId: 12,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'audio',
            uri: 'http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time',
            preferredId: 13,
            preferredEncrypt: false,
            direction: 'sendrecv'
        },
        {
            kind: 'video',
            uri: 'http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time',
            preferredId: 13,
            preferredEncrypt: false,
            direction: 'sendrecv'
        }
    ]
};
exports.supportedRtpCapabilities = supportedRtpCapabilities;


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/types.js":
/*!******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/types.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Worker */ "../../node_modules/mediasoup/node/lib/Worker.js"), exports);
__exportStar(__webpack_require__(/*! ./WebRtcServer */ "../../node_modules/mediasoup/node/lib/WebRtcServer.js"), exports);
__exportStar(__webpack_require__(/*! ./Router */ "../../node_modules/mediasoup/node/lib/Router.js"), exports);
__exportStar(__webpack_require__(/*! ./Transport */ "../../node_modules/mediasoup/node/lib/Transport.js"), exports);
__exportStar(__webpack_require__(/*! ./WebRtcTransport */ "../../node_modules/mediasoup/node/lib/WebRtcTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./PlainTransport */ "../../node_modules/mediasoup/node/lib/PlainTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./PipeTransport */ "../../node_modules/mediasoup/node/lib/PipeTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./DirectTransport */ "../../node_modules/mediasoup/node/lib/DirectTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./Producer */ "../../node_modules/mediasoup/node/lib/Producer.js"), exports);
__exportStar(__webpack_require__(/*! ./Consumer */ "../../node_modules/mediasoup/node/lib/Consumer.js"), exports);
__exportStar(__webpack_require__(/*! ./DataProducer */ "../../node_modules/mediasoup/node/lib/DataProducer.js"), exports);
__exportStar(__webpack_require__(/*! ./DataConsumer */ "../../node_modules/mediasoup/node/lib/DataConsumer.js"), exports);
__exportStar(__webpack_require__(/*! ./RtpObserver */ "../../node_modules/mediasoup/node/lib/RtpObserver.js"), exports);
__exportStar(__webpack_require__(/*! ./ActiveSpeakerObserver */ "../../node_modules/mediasoup/node/lib/ActiveSpeakerObserver.js"), exports);
__exportStar(__webpack_require__(/*! ./AudioLevelObserver */ "../../node_modules/mediasoup/node/lib/AudioLevelObserver.js"), exports);
__exportStar(__webpack_require__(/*! ./RtpParameters */ "../../node_modules/mediasoup/node/lib/RtpParameters.js"), exports);
__exportStar(__webpack_require__(/*! ./SctpParameters */ "../../node_modules/mediasoup/node/lib/SctpParameters.js"), exports);
__exportStar(__webpack_require__(/*! ./SrtpParameters */ "../../node_modules/mediasoup/node/lib/SrtpParameters.js"), exports);
__exportStar(__webpack_require__(/*! ./errors */ "../../node_modules/mediasoup/node/lib/errors.js"), exports);


/***/ }),

/***/ "../../node_modules/mediasoup/node/lib/utils.js":
/*!******************************************************!*\
  !*** ../../node_modules/mediasoup/node/lib/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateRandomNumber = exports.clone = void 0;
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
/**
 * Clones the given object/array.
 */
function clone(data) {
    if (typeof data !== 'object') {
        return {};
    }
    return JSON.parse(JSON.stringify(data));
}
exports.clone = clone;
/**
 * Generates a random positive integer.
 */
function generateRandomNumber() {
    return (0, crypto_1.randomInt)(100_000_000, 999_999_999);
}
exports.generateRandomNumber = generateRandomNumber;


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/debug/src/browser.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/debug/src/browser.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/mediasoup/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/debug/src/common.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/debug/src/common.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "../../node_modules/mediasoup/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/debug/src/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/debug/src/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "../../node_modules/mediasoup/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "../../node_modules/mediasoup/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/debug/src/node.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/debug/src/node.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/mediasoup/node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/mediasoup/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/ms/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/ms/index.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../node_modules/mime-db/index.js":
/*!*******************************************!*\
  !*** ../../node_modules/mime-db/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(/*! ./db.json */ "../../node_modules/mime-db/db.json")


/***/ }),

/***/ "../../node_modules/mime-types/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/mime-types/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(/*! mime-db */ "../../node_modules/mime-db/index.js")
var extname = (__webpack_require__(/*! path */ "path").extname)

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ "../../node_modules/negotiator/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/negotiator/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



var preferredCharsets = __webpack_require__(/*! ./lib/charset */ "../../node_modules/negotiator/lib/charset.js")
var preferredEncodings = __webpack_require__(/*! ./lib/encoding */ "../../node_modules/negotiator/lib/encoding.js")
var preferredLanguages = __webpack_require__(/*! ./lib/language */ "../../node_modules/negotiator/lib/language.js")
var preferredMediaTypes = __webpack_require__(/*! ./lib/mediaType */ "../../node_modules/negotiator/lib/mediaType.js")

/**
 * Module exports.
 * @public
 */

module.exports = Negotiator;
module.exports.Negotiator = Negotiator;

/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */

function Negotiator(request) {
  if (!(this instanceof Negotiator)) {
    return new Negotiator(request);
  }

  this.request = request;
}

Negotiator.prototype.charset = function charset(available) {
  var set = this.charsets(available);
  return set && set[0];
};

Negotiator.prototype.charsets = function charsets(available) {
  return preferredCharsets(this.request.headers['accept-charset'], available);
};

Negotiator.prototype.encoding = function encoding(available) {
  var set = this.encodings(available);
  return set && set[0];
};

Negotiator.prototype.encodings = function encodings(available) {
  return preferredEncodings(this.request.headers['accept-encoding'], available);
};

Negotiator.prototype.language = function language(available) {
  var set = this.languages(available);
  return set && set[0];
};

Negotiator.prototype.languages = function languages(available) {
  return preferredLanguages(this.request.headers['accept-language'], available);
};

Negotiator.prototype.mediaType = function mediaType(available) {
  var set = this.mediaTypes(available);
  return set && set[0];
};

Negotiator.prototype.mediaTypes = function mediaTypes(available) {
  return preferredMediaTypes(this.request.headers.accept, available);
};

// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;


/***/ }),

/***/ "../../node_modules/negotiator/lib/charset.js":
/*!****************************************************!*\
  !*** ../../node_modules/negotiator/lib/charset.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;

/**
 * Module variables.
 * @private
 */

var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Charset header.
 * @private
 */

function parseAcceptCharset(accept) {
  var accepts = accept.split(',');

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var charset = parseCharset(accepts[i].trim(), i);

    if (charset) {
      accepts[j++] = charset;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */

function parseCharset(str, i) {
  var match = simpleCharsetRegExp.exec(str);
  if (!match) return null;

  var charset = match[1];
  var q = 1;
  if (match[2]) {
    var params = match[2].split(';')
    for (var j = 0; j < params.length; j++) {
      var p = params[j].trim().split('=');
      if (p[0] === 'q') {
        q = parseFloat(p[1]);
        break;
      }
    }
  }

  return {
    charset: charset,
    q: q,
    i: i
  };
}

/**
 * Get the priority of a charset.
 * @private
 */

function getCharsetPriority(charset, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(charset, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the charset.
 * @private
 */

function specify(charset, spec, index) {
  var s = 0;
  if(spec.charset.toLowerCase() === charset.toLowerCase()){
    s |= 1;
  } else if (spec.charset !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
}

/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */

function preferredCharsets(accept, provided) {
  // RFC 2616 sec 14.2: no header = *
  var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');

  if (!provided) {
    // sorted list of all charsets
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullCharset);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getCharsetPriority(type, accepts, index);
  });

  // sorted list of accepted charsets
  return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full charset string.
 * @private
 */

function getFullCharset(spec) {
  return spec.charset;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../../node_modules/negotiator/lib/encoding.js":
/*!*****************************************************!*\
  !*** ../../node_modules/negotiator/lib/encoding.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;

/**
 * Module variables.
 * @private
 */

var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Encoding header.
 * @private
 */

function parseAcceptEncoding(accept) {
  var accepts = accept.split(',');
  var hasIdentity = false;
  var minQuality = 1;

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var encoding = parseEncoding(accepts[i].trim(), i);

    if (encoding) {
      accepts[j++] = encoding;
      hasIdentity = hasIdentity || specify('identity', encoding);
      minQuality = Math.min(minQuality, encoding.q || 1);
    }
  }

  if (!hasIdentity) {
    /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */
    accepts[j++] = {
      encoding: 'identity',
      q: minQuality,
      i: i
    };
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */

function parseEncoding(str, i) {
  var match = simpleEncodingRegExp.exec(str);
  if (!match) return null;

  var encoding = match[1];
  var q = 1;
  if (match[2]) {
    var params = match[2].split(';');
    for (var j = 0; j < params.length; j++) {
      var p = params[j].trim().split('=');
      if (p[0] === 'q') {
        q = parseFloat(p[1]);
        break;
      }
    }
  }

  return {
    encoding: encoding,
    q: q,
    i: i
  };
}

/**
 * Get the priority of an encoding.
 * @private
 */

function getEncodingPriority(encoding, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(encoding, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the encoding.
 * @private
 */

function specify(encoding, spec, index) {
  var s = 0;
  if(spec.encoding.toLowerCase() === encoding.toLowerCase()){
    s |= 1;
  } else if (spec.encoding !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
};

/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */

function preferredEncodings(accept, provided) {
  var accepts = parseAcceptEncoding(accept || '');

  if (!provided) {
    // sorted list of all encodings
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullEncoding);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getEncodingPriority(type, accepts, index);
  });

  // sorted list of accepted encodings
  return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full encoding string.
 * @private
 */

function getFullEncoding(spec) {
  return spec.encoding;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../../node_modules/negotiator/lib/language.js":
/*!*****************************************************!*\
  !*** ../../node_modules/negotiator/lib/language.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;

/**
 * Module variables.
 * @private
 */

var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Language header.
 * @private
 */

function parseAcceptLanguage(accept) {
  var accepts = accept.split(',');

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var language = parseLanguage(accepts[i].trim(), i);

    if (language) {
      accepts[j++] = language;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a language from the Accept-Language header.
 * @private
 */

function parseLanguage(str, i) {
  var match = simpleLanguageRegExp.exec(str);
  if (!match) return null;

  var prefix = match[1]
  var suffix = match[2]
  var full = prefix

  if (suffix) full += "-" + suffix;

  var q = 1;
  if (match[3]) {
    var params = match[3].split(';')
    for (var j = 0; j < params.length; j++) {
      var p = params[j].split('=');
      if (p[0] === 'q') q = parseFloat(p[1]);
    }
  }

  return {
    prefix: prefix,
    suffix: suffix,
    q: q,
    i: i,
    full: full
  };
}

/**
 * Get the priority of a language.
 * @private
 */

function getLanguagePriority(language, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(language, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the language.
 * @private
 */

function specify(language, spec, index) {
  var p = parseLanguage(language)
  if (!p) return null;
  var s = 0;
  if(spec.full.toLowerCase() === p.full.toLowerCase()){
    s |= 4;
  } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
    s |= 2;
  } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
    s |= 1;
  } else if (spec.full !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
};

/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */

function preferredLanguages(accept, provided) {
  // RFC 2616 sec 14.4: no header = *
  var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');

  if (!provided) {
    // sorted list of all languages
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullLanguage);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getLanguagePriority(type, accepts, index);
  });

  // sorted list of accepted languages
  return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full language string.
 * @private
 */

function getFullLanguage(spec) {
  return spec.full;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../../node_modules/negotiator/lib/mediaType.js":
/*!******************************************************!*\
  !*** ../../node_modules/negotiator/lib/mediaType.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;

/**
 * Module variables.
 * @private
 */

var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept header.
 * @private
 */

function parseAccept(accept) {
  var accepts = splitMediaTypes(accept);

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var mediaType = parseMediaType(accepts[i].trim(), i);

    if (mediaType) {
      accepts[j++] = mediaType;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a media type from the Accept header.
 * @private
 */

function parseMediaType(str, i) {
  var match = simpleMediaTypeRegExp.exec(str);
  if (!match) return null;

  var params = Object.create(null);
  var q = 1;
  var subtype = match[2];
  var type = match[1];

  if (match[3]) {
    var kvps = splitParameters(match[3]).map(splitKeyValuePair);

    for (var j = 0; j < kvps.length; j++) {
      var pair = kvps[j];
      var key = pair[0].toLowerCase();
      var val = pair[1];

      // get the value, unwrapping quotes
      var value = val && val[0] === '"' && val[val.length - 1] === '"'
        ? val.substr(1, val.length - 2)
        : val;

      if (key === 'q') {
        q = parseFloat(value);
        break;
      }

      // store parameter
      params[key] = value;
    }
  }

  return {
    type: type,
    subtype: subtype,
    params: params,
    q: q,
    i: i
  };
}

/**
 * Get the priority of a media type.
 * @private
 */

function getMediaTypePriority(type, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(type, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the media type.
 * @private
 */

function specify(type, spec, index) {
  var p = parseMediaType(type);
  var s = 0;

  if (!p) {
    return null;
  }

  if(spec.type.toLowerCase() == p.type.toLowerCase()) {
    s |= 4
  } else if(spec.type != '*') {
    return null;
  }

  if(spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
    s |= 2
  } else if(spec.subtype != '*') {
    return null;
  }

  var keys = Object.keys(spec.params);
  if (keys.length > 0) {
    if (keys.every(function (k) {
      return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
    })) {
      s |= 1
    } else {
      return null
    }
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s,
  }
}

/**
 * Get the preferred media types from an Accept header.
 * @public
 */

function preferredMediaTypes(accept, provided) {
  // RFC 2616 sec 14.2: no header = */*
  var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');

  if (!provided) {
    // sorted list of all types
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullType);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getMediaTypePriority(type, accepts, index);
  });

  // sorted list of accepted types
  return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full type string.
 * @private
 */

function getFullType(spec) {
  return spec.type + '/' + spec.subtype;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}

/**
 * Count the number of quotes in a string.
 * @private
 */

function quoteCount(string) {
  var count = 0;
  var index = 0;

  while ((index = string.indexOf('"', index)) !== -1) {
    count++;
    index++;
  }

  return count;
}

/**
 * Split a key value pair.
 * @private
 */

function splitKeyValuePair(str) {
  var index = str.indexOf('=');
  var key;
  var val;

  if (index === -1) {
    key = str;
  } else {
    key = str.substr(0, index);
    val = str.substr(index + 1);
  }

  return [key, val];
}

/**
 * Split an Accept header into media types.
 * @private
 */

function splitMediaTypes(accept) {
  var accepts = accept.split(',');

  for (var i = 1, j = 0; i < accepts.length; i++) {
    if (quoteCount(accepts[j]) % 2 == 0) {
      accepts[++j] = accepts[i];
    } else {
      accepts[j] += ',' + accepts[i];
    }
  }

  // trim accepts
  accepts.length = j + 1;

  return accepts;
}

/**
 * Split a string of parameters.
 * @private
 */

function splitParameters(str) {
  var parameters = str.split(';');

  for (var i = 1, j = 0; i < parameters.length; i++) {
    if (quoteCount(parameters[j]) % 2 == 0) {
      parameters[++j] = parameters[i];
    } else {
      parameters[j] += ';' + parameters[i];
    }
  }

  // trim parameters
  parameters.length = j + 1;

  for (var i = 0; i < parameters.length; i++) {
    parameters[i] = parameters[i].trim();
  }

  return parameters;
}


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/socket.io-adapter/dist/contrib/yeast.js":
/*!******************************************************************!*\
  !*** ../../node_modules/socket.io-adapter/dist/contrib/yeast.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// imported from https://github.com/unshiftio/yeast

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yeast = exports.decode = exports.encode = void 0;
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = "";
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
exports.encode = encode;
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
    let decoded = 0;
    for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
    }
    return decoded;
}
exports.decode = decode;
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return (seed = 0), (prev = now);
    return now + "." + encode(seed++);
}
exports.yeast = yeast;
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;


/***/ }),

/***/ "../../node_modules/socket.io-adapter/dist/index.js":
/*!**********************************************************!*\
  !*** ../../node_modules/socket.io-adapter/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionAwareAdapter = exports.Adapter = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
const yeast_1 = __webpack_require__(/*! ./contrib/yeast */ "../../node_modules/socket.io-adapter/dist/contrib/yeast.js");
const WebSocket = __webpack_require__(/*! ws */ "../../node_modules/ws/index.js");
const canPreComputeFrame = typeof ((_a = WebSocket === null || WebSocket === void 0 ? void 0 : WebSocket.Sender) === null || _a === void 0 ? void 0 : _a.frame) === "function";
class Adapter extends events_1.EventEmitter {
    /**
     * In-memory adapter constructor.
     *
     * @param {Namespace} nsp
     */
    constructor(nsp) {
        super();
        this.nsp = nsp;
        this.rooms = new Map();
        this.sids = new Map();
        this.encoder = nsp.server.encoder;
    }
    /**
     * To be overridden
     */
    init() { }
    /**
     * To be overridden
     */
    close() { }
    /**
     * Returns the number of Socket.IO servers in the cluster
     *
     * @public
     */
    serverCount() {
        return Promise.resolve(1);
    }
    /**
     * Adds a socket to a list of room.
     *
     * @param {SocketId}  id      the socket id
     * @param {Set<Room>} rooms   a set of rooms
     * @public
     */
    addAll(id, rooms) {
        if (!this.sids.has(id)) {
            this.sids.set(id, new Set());
        }
        for (const room of rooms) {
            this.sids.get(id).add(room);
            if (!this.rooms.has(room)) {
                this.rooms.set(room, new Set());
                this.emit("create-room", room);
            }
            if (!this.rooms.get(room).has(id)) {
                this.rooms.get(room).add(id);
                this.emit("join-room", room, id);
            }
        }
    }
    /**
     * Removes a socket from a room.
     *
     * @param {SocketId} id     the socket id
     * @param {Room}     room   the room name
     */
    del(id, room) {
        if (this.sids.has(id)) {
            this.sids.get(id).delete(room);
        }
        this._del(room, id);
    }
    _del(room, id) {
        const _room = this.rooms.get(room);
        if (_room != null) {
            const deleted = _room.delete(id);
            if (deleted) {
                this.emit("leave-room", room, id);
            }
            if (_room.size === 0 && this.rooms.delete(room)) {
                this.emit("delete-room", room);
            }
        }
    }
    /**
     * Removes a socket from all rooms it's joined.
     *
     * @param {SocketId} id   the socket id
     */
    delAll(id) {
        if (!this.sids.has(id)) {
            return;
        }
        for (const room of this.sids.get(id)) {
            this._del(room, id);
        }
        this.sids.delete(id);
    }
    /**
     * Broadcasts a packet.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @public
     */
    broadcast(packet, opts) {
        const flags = opts.flags || {};
        const packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress,
        };
        packet.nsp = this.nsp.name;
        const encodedPackets = this._encode(packet, packetOpts);
        this.apply(opts, (socket) => {
            if (typeof socket.notifyOutgoingListeners === "function") {
                socket.notifyOutgoingListeners(packet);
            }
            socket.client.writeToEngine(encodedPackets, packetOpts);
        });
    }
    /**
     * Broadcasts a packet and expects multiple acknowledgements.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @param clientCountCallback - the number of clients that received the packet
     * @param ack                 - the callback that will be called for each client response
     *
     * @public
     */
    broadcastWithAck(packet, opts, clientCountCallback, ack) {
        const flags = opts.flags || {};
        const packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress,
        };
        packet.nsp = this.nsp.name;
        // we can use the same id for each packet, since the _ids counter is common (no duplicate)
        packet.id = this.nsp._ids++;
        const encodedPackets = this._encode(packet, packetOpts);
        let clientCount = 0;
        this.apply(opts, (socket) => {
            // track the total number of acknowledgements that are expected
            clientCount++;
            // call the ack callback for each client response
            socket.acks.set(packet.id, ack);
            if (typeof socket.notifyOutgoingListeners === "function") {
                socket.notifyOutgoingListeners(packet);
            }
            socket.client.writeToEngine(encodedPackets, packetOpts);
        });
        clientCountCallback(clientCount);
    }
    _encode(packet, packetOpts) {
        const encodedPackets = this.encoder.encode(packet);
        if (canPreComputeFrame &&
            encodedPackets.length === 1 &&
            typeof encodedPackets[0] === "string") {
            // "4" being the "message" packet type in the Engine.IO protocol
            const data = Buffer.from("4" + encodedPackets[0]);
            // see https://github.com/websockets/ws/issues/617#issuecomment-283002469
            packetOpts.wsPreEncodedFrame = WebSocket.Sender.frame(data, {
                readOnly: false,
                mask: false,
                rsv1: false,
                opcode: 1,
                fin: true,
            });
        }
        return encodedPackets;
    }
    /**
     * Gets a list of sockets by sid.
     *
     * @param {Set<Room>} rooms   the explicit set of rooms to check.
     */
    sockets(rooms) {
        const sids = new Set();
        this.apply({ rooms }, (socket) => {
            sids.add(socket.id);
        });
        return Promise.resolve(sids);
    }
    /**
     * Gets the list of rooms a given socket has joined.
     *
     * @param {SocketId} id   the socket id
     */
    socketRooms(id) {
        return this.sids.get(id);
    }
    /**
     * Returns the matching socket instances
     *
     * @param opts - the filters to apply
     */
    fetchSockets(opts) {
        const sockets = [];
        this.apply(opts, (socket) => {
            sockets.push(socket);
        });
        return Promise.resolve(sockets);
    }
    /**
     * Makes the matching socket instances join the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to join
     */
    addSockets(opts, rooms) {
        this.apply(opts, (socket) => {
            socket.join(rooms);
        });
    }
    /**
     * Makes the matching socket instances leave the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to leave
     */
    delSockets(opts, rooms) {
        this.apply(opts, (socket) => {
            rooms.forEach((room) => socket.leave(room));
        });
    }
    /**
     * Makes the matching socket instances disconnect
     *
     * @param opts - the filters to apply
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(opts, close) {
        this.apply(opts, (socket) => {
            socket.disconnect(close);
        });
    }
    apply(opts, callback) {
        const rooms = opts.rooms;
        const except = this.computeExceptSids(opts.except);
        if (rooms.size) {
            const ids = new Set();
            for (const room of rooms) {
                if (!this.rooms.has(room))
                    continue;
                for (const id of this.rooms.get(room)) {
                    if (ids.has(id) || except.has(id))
                        continue;
                    const socket = this.nsp.sockets.get(id);
                    if (socket) {
                        callback(socket);
                        ids.add(id);
                    }
                }
            }
        }
        else {
            for (const [id] of this.sids) {
                if (except.has(id))
                    continue;
                const socket = this.nsp.sockets.get(id);
                if (socket)
                    callback(socket);
            }
        }
    }
    computeExceptSids(exceptRooms) {
        const exceptSids = new Set();
        if (exceptRooms && exceptRooms.size > 0) {
            for (const room of exceptRooms) {
                if (this.rooms.has(room)) {
                    this.rooms.get(room).forEach((sid) => exceptSids.add(sid));
                }
            }
        }
        return exceptSids;
    }
    /**
     * Send a packet to the other Socket.IO servers in the cluster
     * @param packet - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(packet) {
        console.warn("this adapter does not support the serverSideEmit() functionality");
    }
    /**
     * Save the client session in order to restore it upon reconnection.
     */
    persistSession(session) { }
    /**
     * Restore the session and find the packets that were missed by the client.
     * @param pid
     * @param offset
     */
    restoreSession(pid, offset) {
        return null;
    }
}
exports.Adapter = Adapter;
class SessionAwareAdapter extends Adapter {
    constructor(nsp) {
        super(nsp);
        this.nsp = nsp;
        this.sessions = new Map();
        this.packets = [];
        this.maxDisconnectionDuration =
            nsp.server.opts.connectionStateRecovery.maxDisconnectionDuration;
        const timer = setInterval(() => {
            const threshold = Date.now() - this.maxDisconnectionDuration;
            this.sessions.forEach((session, sessionId) => {
                const hasExpired = session.disconnectedAt < threshold;
                if (hasExpired) {
                    this.sessions.delete(sessionId);
                }
            });
            for (let i = this.packets.length - 1; i >= 0; i--) {
                const hasExpired = this.packets[i].emittedAt < threshold;
                if (hasExpired) {
                    this.packets.splice(0, i + 1);
                    break;
                }
            }
        }, 60 * 1000);
        // prevents the timer from keeping the process alive
        timer.unref();
    }
    persistSession(session) {
        session.disconnectedAt = Date.now();
        this.sessions.set(session.pid, session);
    }
    restoreSession(pid, offset) {
        const session = this.sessions.get(pid);
        if (!session) {
            // the session may have expired
            return null;
        }
        const hasExpired = session.disconnectedAt + this.maxDisconnectionDuration < Date.now();
        if (hasExpired) {
            // the session has expired
            this.sessions.delete(pid);
            return null;
        }
        const index = this.packets.findIndex((packet) => packet.id === offset);
        if (index === -1) {
            // the offset may be too old
            return null;
        }
        const missedPackets = [];
        for (let i = index + 1; i < this.packets.length; i++) {
            const packet = this.packets[i];
            if (shouldIncludePacket(session.rooms, packet.opts)) {
                missedPackets.push(packet.data);
            }
        }
        return Promise.resolve(Object.assign(Object.assign({}, session), { missedPackets }));
    }
    broadcast(packet, opts) {
        var _a;
        const isEventPacket = packet.type === 2;
        // packets with acknowledgement are not stored because the acknowledgement function cannot be serialized and
        // restored on another server upon reconnection
        const withoutAcknowledgement = packet.id === undefined;
        const notVolatile = ((_a = opts.flags) === null || _a === void 0 ? void 0 : _a.volatile) === undefined;
        if (isEventPacket && withoutAcknowledgement && notVolatile) {
            const id = (0, yeast_1.yeast)();
            // the offset is stored at the end of the data array, so the client knows the ID of the last packet it has
            // processed (and the format is backward-compatible)
            packet.data.push(id);
            this.packets.push({
                id,
                opts,
                data: packet.data,
                emittedAt: Date.now(),
            });
        }
        super.broadcast(packet, opts);
    }
}
exports.SessionAwareAdapter = SessionAwareAdapter;
function shouldIncludePacket(sessionRooms, opts) {
    const included = opts.rooms.size === 0 || sessionRooms.some((room) => opts.rooms.has(room));
    const notExcluded = sessionRooms.every((room) => !opts.except.has(room));
    return included && notExcluded;
}


/***/ }),

/***/ "../../node_modules/socket.io-parser/node_modules/debug/src/browser.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/socket.io-parser/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/socket.io-parser/node_modules/debug/src/common.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/socket.io-parser/node_modules/debug/src/common.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "../../node_modules/socket.io-parser/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/socket.io-parser/node_modules/debug/src/index.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/socket.io-parser/node_modules/debug/src/index.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "../../node_modules/socket.io-parser/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "../../node_modules/socket.io-parser/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../../node_modules/socket.io-parser/node_modules/debug/src/node.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/socket.io-parser/node_modules/debug/src/node.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/socket.io-parser/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "../../node_modules/socket.io-parser/node_modules/ms/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/socket.io-parser/node_modules/ms/index.js ***!
  \********************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../node_modules/socket.io/node_modules/debug/src/browser.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/socket.io/node_modules/debug/src/browser.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/socket.io/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/socket.io/node_modules/debug/src/common.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/socket.io/node_modules/debug/src/common.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "../../node_modules/socket.io/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/socket.io/node_modules/debug/src/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/socket.io/node_modules/debug/src/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "../../node_modules/socket.io/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "../../node_modules/socket.io/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../../node_modules/socket.io/node_modules/debug/src/node.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/socket.io/node_modules/debug/src/node.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "../../node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../node_modules/socket.io/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "../../node_modules/socket.io/node_modules/ms/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/socket.io/node_modules/ms/index.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../node_modules/supports-color/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/supports-color/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const tty = __webpack_require__(/*! tty */ "tty");
const hasFlag = __webpack_require__(/*! has-flag */ "../../node_modules/has-flag/index.js");

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ "./src/configure.ts":
/*!**************************!*\
  !*** ./src/configure.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LISTEN_IP: () => (/* binding */ LISTEN_IP),
/* harmony export */   LISTEN_PORT: () => (/* binding */ LISTEN_PORT),
/* harmony export */   LOG_LEVEL: () => (/* binding */ LOG_LEVEL),
/* harmony export */   MEDIA_CODECS: () => (/* binding */ MEDIA_CODECS)
/* harmony export */ });
const LISTEN_PORT = 3000;
const LISTEN_IP = '127.0.0.1';
const LOG_LEVEL = 'debug';
const MEDIA_CODECS = [
    {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2
    },
    {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000,
        parameters: {
            'x-google-start-bitrate': 1000
        }
    }
];


/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["debug"] = 0] = "debug";
    LogLevel[LogLevel["info"] = 1] = "info";
    LogLevel[LogLevel["log"] = 2] = "log";
    LogLevel[LogLevel["warn"] = 3] = "warn";
    LogLevel[LogLevel["error"] = 4] = "error";
    LogLevel[LogLevel["none"] = 5] = "none";
})(LogLevel || (LogLevel = {}));
;
const timestamp = () => {
    return (performance.now() * 1000).toFixed(0);
};
class Logger {
    static setLevel(level) {
        Logger.level = level;
    }
    static debug(message) {
        if (LogLevel.debug >= Logger.level) {
            console.debug(`[debug:${timestamp()}] ${message}`);
        }
    }
    static info(message) {
        if (LogLevel.info >= Logger.level) {
            console.info(`[info:${timestamp()}] ${message}`);
        }
    }
    static log(message) {
        if (LogLevel.log >= Logger.level) {
            console.log(`[log:${timestamp()}] ${message}`);
        }
    }
    static warn(message) {
        if (LogLevel.warn >= Logger.level) {
            console.warn(`[warn:${timestamp()}] ${message}`);
        }
    }
    static error(message) {
        if (LogLevel.error >= Logger.level) {
            console.error(`[error:${timestamp()}]`, message);
        }
    }
}
Logger.level = LogLevel.debug;


/***/ }),

/***/ "./src/message.ts":
/*!************************!*\
  !*** ./src/message.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConsumerParams: () => (/* binding */ getConsumerParams),
/* harmony export */   getTransportParams: () => (/* binding */ getTransportParams)
/* harmony export */ });
const getTransportParams = (transport) => {
    return {
        id: transport.id,
        iceParameters: transport.iceParameters,
        iceCandidates: transport.iceCandidates,
        dtlsParameters: transport.dtlsParameters
    };
};
const getConsumerParams = (producerId, consumer) => {
    return {
        producerId,
        id: consumer.id,
        kind: consumer.kind,
        rtpParameters: consumer.rtpParameters,
        type: consumer.type,
        producerPaused: consumer.producerPaused
    };
};


/***/ }),

/***/ "./src/peer.ts":
/*!*********************!*\
  !*** ./src/peer.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Peer: () => (/* binding */ Peer)
/* harmony export */ });
class Peer {
    constructor(id) {
        this.id = id;
        this._rtpCapabilities = null;
        this._joined = false;
        this.consumerIds = new Set();
        this._consumerTransportId = null;
        this._producerIds = new Set();
        this._producerTransportId = null;
    }
    get joined() {
        return this._joined;
    }
    get producerTransportId() {
        return this._producerTransportId;
    }
    get consumerTransportId() {
        return this._consumerTransportId;
    }
    // This getter must be called after join
    get rtpCapabilities() {
        return this._rtpCapabilities;
    }
    get producerIds() {
        const ids = [];
        for (const id of this._producerIds.values()) {
            ids.push(id);
        }
        return ids;
    }
    join(rtpCapabilities) {
        if (this.joined === true) {
            throw new Error(`Peer ${this.id} has already joined.`);
        }
        this._joined = true;
        this._rtpCapabilities = rtpCapabilities;
    }
    leave() {
        if (this.joined === false) {
            throw new Error(`Peer ${this.id} has not joined.`);
        }
        this._joined = false;
        this._rtpCapabilities = null;
    }
    dispose() {
        // TODO: Implement
    }
    setConsumerTransportId(id) {
        if (this._consumerTransportId !== null) {
            throw new Error(`Consumer transport is already set.`);
        }
        this._consumerTransportId = id;
    }
    setProducerTransportId(id) {
        if (this.producerTransportId !== null) {
            throw new Error(`Producer transport is already set.`);
        }
        this._producerTransportId = id;
    }
    addConsumerId(id) {
        if (this.consumerIds.has(id)) {
            throw new Error(`Consumer ${id} is already registered.`);
        }
        this.consumerIds.add(id);
    }
    addProducerId(id) {
        if (this._producerIds.has(id)) {
            throw new Error(`Producer ${id} is already registered.`);
        }
        this._producerIds.add(id);
    }
}


/***/ }),

/***/ "./src/room.ts":
/*!*********************!*\
  !*** ./src/room.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Room: () => (/* binding */ Room)
/* harmony export */ });
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configure */ "./src/configure.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/message.ts");
/* harmony import */ var _peer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peer */ "./src/peer.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Room {
    static create(id, worker) {
        return __awaiter(this, void 0, void 0, function* () {
            const router = yield worker.createRouter({
                mediaCodecs: _configure__WEBPACK_IMPORTED_MODULE_0__.MEDIA_CODECS
            });
            return new Room(id, router);
        });
    }
    constructor(id, router) {
        this.id = id;
        this.router = router;
        this.consumers = new Map();
        this.consumerTransports = new Map();
        this.peers = new Map();
        this.producers = new Map();
        this.producerTransports = new Map();
    }
    get rtpCapabilities() {
        return this.router.rtpCapabilities;
    }
    get joinnedPeerIds() {
        const ids = [];
        for (const p of this.peers.values()) {
            if (p.joined) {
                ids.push(p.id);
            }
        }
        return ids;
    }
    close() {
        // TODO: Implement
    }
    hasPeer(peerId) {
        return this.peers.has(peerId);
    }
    getPeer(peerId) {
        return this.peers.get(peerId);
    }
    mustBeInRoom(peerId) {
        if (!this.peers.has(peerId)) {
            throw new Error(`Peer ${peerId} is not found in the Room ${this.id}.`);
        }
    }
    mustNotBeInRoom(peerId) {
        if (this.peers.has(peerId)) {
            throw new Error(`Peer ${peerId} is already in the Room ${this.id}.`);
        }
    }
    enter(peerId) {
        this.mustNotBeInRoom(peerId);
        this.peers.set(peerId, new _peer__WEBPACK_IMPORTED_MODULE_2__.Peer(peerId));
    }
    exit(peerId) {
        this.mustBeInRoom(peerId);
        this.peers.get(peerId).dispose();
        this.peers.delete(peerId);
    }
    join(peerId, rtpCapabilities) {
        this.mustBeInRoom(peerId);
        this.peers.get(peerId).join(rtpCapabilities);
    }
    leave(peerId) {
        this.mustBeInRoom(peerId);
        this.peers.get(peerId).leave();
        this.peers.delete(peerId);
    }
    empty() {
        return this.peers.size === 0;
    }
    createWebRtcTransport() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.router.createWebRtcTransport({
                listenIps: [_configure__WEBPACK_IMPORTED_MODULE_0__.LISTEN_IP],
                // TODO: Configurable
                enableUdp: true,
                enableTcp: true,
                preferUdp: true
            });
        });
    }
    createProducerTransport(peerId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            const transport = yield this.createWebRtcTransport();
            // TODO: What if the peer has already left the room?
            this.producerTransports.set(transport.id, transport);
            this.peers.get(peerId).setProducerTransportId(transport.id);
            return (0,_message__WEBPACK_IMPORTED_MODULE_1__.getTransportParams)(transport);
        });
    }
    createConsumerTransport(peerId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            const transport = yield this.createWebRtcTransport();
            // TODO: What if the peer has already left the room?
            this.consumerTransports.set(transport.id, transport);
            this.peers.get(peerId).setConsumerTransportId(transport.id);
            return (0,_message__WEBPACK_IMPORTED_MODULE_1__.getTransportParams)(transport);
        });
    }
    connectProducerTransport(peerId, dtlsParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            const transportId = this.peers.get(peerId).producerTransportId;
            if (transportId === null) {
                throw new Error(`Peer ${peerId} doesn't have producer transport.`);
            }
            if (!this.producerTransports.has(transportId)) {
                throw new Error(`Producer transport ${transportId} of Peer ${peerId} is not found.`);
            }
            yield this.producerTransports.get(transportId).connect({ dtlsParameters });
        });
    }
    connectConsumerTransport(peerId, dtlsParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            const transportId = this.peers.get(peerId).consumerTransportId;
            if (transportId === null) {
                throw new Error(`Peer ${peerId} doesn't have consumer transport.`);
            }
            if (!this.consumerTransports.has(transportId)) {
                throw new Error(`Consumer transport ${transportId} of Peer ${peerId} is not found.`);
            }
            yield this.consumerTransports.get(transportId).connect({ dtlsParameters });
        });
    }
    produce(peerId, kind, rtpParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            const peer = this.peers.get(peerId);
            const transportId = peer.producerTransportId;
            if (transportId === null) {
                throw new Error(`Peer ${peerId} doesn't have consumer transport yet.`);
            }
            if (!this.producerTransports.has(transportId)) {
                throw new Error(`Producer transport ${transportId} is not found.`);
            }
            const producer = yield this.producerTransports.get(transportId).produce({
                kind,
                rtpParameters
            });
            // TODO: What if the peer has already left the room?
            this.producers.set(producer.id, producer);
            peer.addProducerId(producer.id);
            return producer.id;
        });
    }
    consume(peerId, producerId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mustBeInRoom(peerId);
            if (!this.producers.has(producerId)) {
                throw new Error(`Producer ${producerId} is not found.`);
            }
            const consumerPeer = this.peers.get(peerId);
            const transportId = consumerPeer.consumerTransportId;
            if (transportId === null) {
                throw new Error(`Consumer peer ${peerId} doesn't have consumer transport yet.`);
            }
            if (!this.consumerTransports.has(transportId)) {
                throw new Error(`Consumer transport ${transportId} is not found.`);
            }
            const consumer = yield this.consumerTransports.get(transportId).consume({
                producerId: producerId,
                rtpCapabilities: consumerPeer.rtpCapabilities,
                paused: false
            });
            // TODO: What if the peer, transport, or room is already closed?
            this.consumers.set(consumer.id, consumer);
            consumerPeer.addConsumerId(consumer.id);
            return (0,_message__WEBPACK_IMPORTED_MODULE_1__.getConsumerParams)(peerId, consumer);
        });
    }
}


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Server: () => (/* binding */ Server)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mediasoup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mediasoup */ "../../node_modules/mediasoup/node/lib/index.js");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ "../../node_modules/socket.io/wrapper.mjs");
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configure */ "./src/configure.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger */ "./src/logger.ts");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room */ "./src/room.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Server {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.info('Create servers.');
            // WebServer
            const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
            app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"](__dirname));
            const webServer = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);
            // SocketServer
            const socketServer = new socket_io__WEBPACK_IMPORTED_MODULE_3__.Server(webServer, {
                // TODO: Proper configuration
                cors: {
                    origin: '*'
                }
            });
            // Mediasoup Worker
            const worker = yield mediasoup__WEBPACK_IMPORTED_MODULE_2__.createWorker({
                logLevel: _configure__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL
            });
            const server = new Server(webServer, socketServer, worker);
            yield server.initWebServer();
            server.initSocketServer();
            return server;
        });
    }
    constructor(webServer, socketServer, worker) {
        this.worker = worker;
        this.webServer = webServer;
        this.socketServer = socketServer;
        this.peerIdToSocket = new Map();
        this.socketInfos = new Map();
        this.rooms = new Map();
    }
    close() {
        _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.info('Close servers.');
        // TODO: Implement properly
        this.worker.close();
        this.webServer.close();
        this.socketServer.close();
        for (const room of this.rooms.values()) {
            room.close();
        }
        this.rooms.clear();
    }
    initWebServer() {
        return __awaiter(this, void 0, void 0, function* () {
            _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.info('Initialize Web server.');
            const server = this.webServer;
            server.on('error', (error) => {
                // TODO: Proper error handling
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(error);
            });
            yield new Promise((resolve) => {
                server.listen(_configure__WEBPACK_IMPORTED_MODULE_4__.LISTEN_PORT, _configure__WEBPACK_IMPORTED_MODULE_4__.LISTEN_IP, () => {
                    _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.info(`Web server is running at http://${_configure__WEBPACK_IMPORTED_MODULE_4__.LISTEN_IP}:${_configure__WEBPACK_IMPORTED_MODULE_4__.LISTEN_PORT}.`);
                    resolve(undefined);
                });
            });
        });
    }
    initSocketServer() {
        _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.info('Initialize Socket server.');
        const rooms = this.rooms;
        const server = this.socketServer;
        const worker = this.worker;
        // TODO: Add types for parameters and callbacks
        server.on('connection', (socket) => {
            _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket ${socket.id} is connected.`);
            // Helpers
            // TODO: Avoid any
            const callErrorCallback = (errorback, error) => {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(error);
                errorback({ error: error.message });
            };
            const socketMustHaveEntered = (errorback) => {
                if (!this.socketInfos.has(socket)) {
                    // TODO: Handle properly
                    callErrorCallback(errorback, new Error(`Socket ${socket.id} has not entered any Room.`));
                    return false;
                }
                return true;
            };
            const socketMustNotHaveEntered = (errorback) => {
                if (this.socketInfos.has(socket)) {
                    // TODO: Handle properly
                    const { peerId, roomId } = this.socketInfos.get(socket);
                    callErrorCallback(errorback, new Error(`Socket ${socket.id} has alerady entered Room ${roomId} as Peer ${peerId}.`));
                    return false;
                }
                return true;
            };
            const roomMustExist = (roomId, errorback) => {
                if (!rooms.has(roomId)) {
                    // TODO: Proper error handling
                    callErrorCallback(errorback, new Error(`Unknown Room ${roomId}.`));
                    return false;
                }
                return true;
            };
            const peerMustBeInRoom = (roomId, peerId, errorback) => {
                // Room existence must be checked beforehand
                if (!rooms.get(roomId).hasPeer(peerId)) {
                    callErrorCallback(errorback, new Error(`Peer ${peerId} already exists in Room ${roomId}.`));
                    return false;
                }
                return true;
            };
            const peerMustNotBeInRoom = (roomId, peerId, errorback) => {
                // Room existence must be checked beforehand
                if (rooms.get(roomId).hasPeer(peerId)) {
                    callErrorCallback(errorback, new Error(`Peer ${peerId} is not in Room ${roomId}.`));
                    return false;
                }
                return true;
            };
            const exitRoom = (roomId, peerId) => {
                if (rooms.has(roomId)) {
                    const room = rooms.get(roomId);
                    if (room.hasPeer(peerId)) {
                        room.exit(peerId);
                        if (room.empty()) {
                            _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Room ${roomId} became empty then closing it.`);
                            room.close();
                            rooms.delete(roomId);
                        }
                    }
                    else {
                        // Should not happen
                        _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(new Error(`Peer ${peerId} doesn't exist in Room ${roomId}.`));
                        return;
                    }
                }
                else {
                    // Should not happen
                    _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(new Error(`Room ${roomId} doesn't exist`));
                    return;
                }
                if (this.socketInfos.has(socket)) {
                    this.socketInfos.delete(socket);
                    this.peerIdToSocket.delete(peerId);
                }
                else {
                    // Should not happen
                    _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(new Error(`SocketInfo is not found ${socket.id}.`));
                    return;
                }
            };
            // Event handlers
            socket.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket disconnect event: ${socket.id}`);
                // TODO: Check whether it is guaranteed that disconnect event
                //       is fired when disconnected.
                // TODO: Proper handling
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket ${socket.id} is dicsonnected.`);
                if (!this.socketInfos.has(socket)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                exitRoom(roomId, peerId);
            }));
            socket.on('enter', (data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket enter_room event: ${socket.id}`);
                if (!socketMustNotHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = data;
                // TODO: Validate input data
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to enter Room ${roomId}.`);
                // TODO: Consider to save peerId and roomId to socket.
                //       Clients no longer need to send peerId and roomId
                //       in the following requests.
                if (!rooms.has(roomId)) {
                    _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Room ${roomId} is not found then creating it.`);
                    rooms.set(roomId, yield _room__WEBPACK_IMPORTED_MODULE_6__.Room.create(roomId, worker));
                }
                if (!peerMustNotBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                rooms.get(roomId).enter(peerId);
                this.socketInfos.set(socket, { peerId, roomId });
                this.peerIdToSocket.set(peerId, socket);
                callback(true);
            }));
            socket.on('exit', (_data, callback) => {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket exitRoom event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to exit Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                exitRoom(roomId, peerId);
                callback(true);
            });
            socket.on('getRouterRtpCapabilities', (_data, callback) => {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket getRouterRtpCapabilities event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to get routerRtpCapabilities of Room ${roomId}.`);
                if (!roomMustExist(roomId, callback)) {
                    return;
                }
                callback(rooms.get(roomId).rtpCapabilities);
            });
            socket.on('join', (data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket join event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { rtpCapabilities } = data;
                // TODO: Validate input data
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to join Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                try {
                    rooms.get(roomId).join(peerId, rtpCapabilities);
                }
                catch (error) {
                    callErrorCallback(callback, error);
                    return;
                }
                // TODO: Return with authorized token?
                callback(true);
            }));
            socket.on('leave', (_data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket leave event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to leave Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                try {
                    rooms.get(roomId).leave(peerId);
                }
                catch (error) {
                    callErrorCallback(callback, error);
                    return;
                }
                callback(true);
            }));
            socket.on('createProducerTransport', (_data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket createProduceTransport event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to create transport for producer in Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                try {
                    callback(yield rooms.get(roomId).createProducerTransport(peerId));
                }
                catch (error) {
                    callErrorCallback(callback, error);
                    return;
                }
            }));
            socket.on('createConsumerTransport', (_data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket createConsumerTransport event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to create transport for consumer in Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                const room = rooms.get(roomId);
                try {
                    callback(yield room.createConsumerTransport(peerId));
                }
                catch (error) {
                    callErrorCallback(callback, error);
                    return;
                }
                // Consume every producers in a room except for mine
                for (const producerPeerId of room.joinnedPeerIds) {
                    if (producerPeerId === peerId) {
                        continue;
                    }
                    for (const producerId of room.getPeer(producerPeerId).producerIds) {
                        _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to consume Producer ${producerId} of Peer ${producerPeerId}.`);
                        room.consume(peerId, producerId).then((params) => {
                            if (room.hasPeer(peerId) && room.getPeer(peerId).joined &&
                                room.hasPeer(producerPeerId) && room.getPeer(producerPeerId).joined) {
                                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to emit newConsumer to client for Producer ${producerId}.`);
                                socket.emit('newConsumer', params);
                            }
                            else {
                                // TODO: Close the consumer?
                            }
                        }).catch(_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error);
                    }
                }
            }));
            socket.on('connectProducerTransport', (data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket connectProducerTransport event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { dtlsParameters } = data;
                // TODO: Validate input data
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to connect Producer transport in Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                try {
                    yield rooms.get(roomId).connectProducerTransport(peerId, dtlsParameters);
                    callback(true);
                }
                catch (error) {
                    callErrorCallback(callback, error);
                }
            }));
            socket.on('connectConsumerTransport', (data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket connectConsumerTransport event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { dtlsParameters } = data;
                // TODO: Validate input data
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to connect Consumer transport in Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) || !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                try {
                    yield rooms.get(roomId).connectConsumerTransport(peerId, dtlsParameters);
                    callback(true);
                }
                catch (error) {
                    callErrorCallback(callback, error);
                }
            }));
            socket.on('produce', (data, callback) => __awaiter(this, void 0, void 0, function* () {
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Socket produce event: ${socket.id}`);
                if (!socketMustHaveEntered(callback)) {
                    return;
                }
                const { kind, rtpParameters } = data;
                // TODO: Validate input data
                const { peerId, roomId } = this.socketInfos.get(socket);
                _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${peerId} attempts to produce in Room ${roomId}.`);
                if (!roomMustExist(roomId, callback) && !peerMustBeInRoom(roomId, peerId, callback)) {
                    return;
                }
                const room = rooms.get(roomId);
                let producerId;
                try {
                    producerId = yield room.produce(peerId, kind, rtpParameters);
                    callback({ id: producerId });
                }
                catch (error) {
                    callErrorCallback(callback, error);
                    return;
                }
                // Let remote peers consume this producer
                for (const remotePeerId of room.joinnedPeerIds) {
                    if (remotePeerId === peerId) {
                        continue;
                    }
                    if (room.getPeer(remotePeerId).consumerTransportId === null) {
                        continue;
                    }
                    _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${remotePeerId} attempts to consume Producer ${producerId} of Peer ${peerId}.`);
                    room.consume(remotePeerId, producerId).then((params) => {
                        if (room.hasPeer(remotePeerId) && room.getPeer(remotePeerId).joined &&
                            room.hasPeer(peerId) && room.getPeer(peerId).joined) {
                            _logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(`Peer ${remotePeerId} attempts to emit newConsumer to client.`);
                            this.peerIdToSocket.get(remotePeerId).emit('newConsumer', params);
                        }
                        else {
                            // TODO: Close the consumer?
                        }
                    }).catch(_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error);
                }
            }));
        });
    }
}


/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NIL: () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   parse: () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   stringify: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   v1: () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   v3: () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   v4: () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   v5: () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   validate: () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   version: () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../../node_modules/uuid/dist/esm-node/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../../node_modules/uuid/dist/esm-node/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../../node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../../node_modules/uuid/dist/esm-node/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "../../node_modules/uuid/dist/esm-node/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "../../node_modules/uuid/dist/esm-node/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "../../node_modules/uuid/dist/esm-node/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "../../node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "../../node_modules/uuid/dist/esm-node/parse.js");










/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/md5.js":
/*!****************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/md5.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/native.js":
/*!*******************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/native.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/nil.js":
/*!****************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/nil.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/parse.js":
/*!******************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/parse.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../node_modules/uuid/dist/esm-node/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/regex.js":
/*!******************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/regex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/rng.js":
/*!****************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/rng.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/sha1.js":
/*!*****************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/sha1.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/stringify.js":
/*!**********************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/stringify.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/v1.js":
/*!***************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/v1.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../../node_modules/uuid/dist/esm-node/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/v3.js":
/*!***************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/v3.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../../node_modules/uuid/dist/esm-node/md5.js");


const v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/v35.js":
/*!****************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/v35.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DNS: () => (/* binding */ DNS),
/* harmony export */   URL: () => (/* binding */ URL),
/* harmony export */   "default": () => (/* binding */ v35)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../../node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "../../node_modules/uuid/dist/esm-node/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/v4.js":
/*!***************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/v4.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "../../node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "../../node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/v5.js":
/*!***************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/v5.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../../node_modules/uuid/dist/esm-node/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/validate.js":
/*!*********************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/validate.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "../../node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-node/version.js":
/*!********************************************************!*\
  !*** ../../node_modules/uuid/dist/esm-node/version.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../../node_modules/uuid/dist/esm-node/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),

/***/ "../../node_modules/vary/index.js":
/*!****************************************!*\
  !*** ../../node_modules/vary/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = vary
module.exports.append = append

/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/

/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
 * @public
 */

function append (header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required')
  }

  if (!field) {
    throw new TypeError('field argument is required')
  }

  // get fields array
  var fields = !Array.isArray(field)
    ? parse(String(field))
    : field

  // assert on invalid field names
  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError('field argument contains an invalid header name')
    }
  }

  // existing, unspecified vary
  if (header === '*') {
    return header
  }

  // enumerate current values
  var val = header
  var vals = parse(header.toLowerCase())

  // unspecified vary
  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*'
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase()

    // append value (case-preserving)
    if (vals.indexOf(fld) === -1) {
      vals.push(fld)
      val = val
        ? val + ', ' + fields[i]
        : fields[i]
    }
  }

  return val
}

/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
 * @private
 */

function parse (header) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(header.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(header.substring(start, end))

  return list
}

/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
 * @public
 */

function vary (res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required')
  }

  // get existing header
  var val = res.getHeader('Vary') || ''
  var header = Array.isArray(val)
    ? val.join(', ')
    : String(val)

  // set new header
  if ((val = append(header, field))) {
    res.setHeader('Vary', val)
  }
}


/***/ }),

/***/ "../../node_modules/ws/index.js":
/*!**************************************!*\
  !*** ../../node_modules/ws/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const WebSocket = __webpack_require__(/*! ./lib/websocket */ "../../node_modules/ws/lib/websocket.js");

WebSocket.createWebSocketStream = __webpack_require__(/*! ./lib/stream */ "../../node_modules/ws/lib/stream.js");
WebSocket.Server = __webpack_require__(/*! ./lib/websocket-server */ "../../node_modules/ws/lib/websocket-server.js");
WebSocket.Receiver = __webpack_require__(/*! ./lib/receiver */ "../../node_modules/ws/lib/receiver.js");
WebSocket.Sender = __webpack_require__(/*! ./lib/sender */ "../../node_modules/ws/lib/sender.js");

WebSocket.WebSocket = WebSocket;
WebSocket.WebSocketServer = WebSocket.Server;

module.exports = WebSocket;


/***/ }),

/***/ "../../node_modules/ws/lib/buffer-util.js":
/*!************************************************!*\
  !*** ../../node_modules/ws/lib/buffer-util.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { EMPTY_BUFFER } = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");

/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */
function concat(list, totalLength) {
  if (list.length === 0) return EMPTY_BUFFER;
  if (list.length === 1) return list[0];

  const target = Buffer.allocUnsafe(totalLength);
  let offset = 0;

  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    target.set(buf, offset);
    offset += buf.length;
  }

  if (offset < totalLength) return target.slice(0, offset);

  return target;
}

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */
function _mask(source, mask, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
}

/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */
function _unmask(buffer, mask) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= mask[i & 3];
  }
}

/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */
function toArrayBuffer(buf) {
  if (buf.byteLength === buf.buffer.byteLength) {
    return buf.buffer;
  }

  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */
function toBuffer(data) {
  toBuffer.readOnly = true;

  if (Buffer.isBuffer(data)) return data;

  let buf;

  if (data instanceof ArrayBuffer) {
    buf = Buffer.from(data);
  } else if (ArrayBuffer.isView(data)) {
    buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  } else {
    buf = Buffer.from(data);
    toBuffer.readOnly = false;
  }

  return buf;
}

module.exports = {
  concat,
  mask: _mask,
  toArrayBuffer,
  toBuffer,
  unmask: _unmask
};

/* istanbul ignore else  */
if (!process.env.WS_NO_BUFFER_UTIL) {
  try {
    const bufferUtil = __webpack_require__(/*! bufferutil */ "bufferutil");

    module.exports.mask = function (source, mask, output, offset, length) {
      if (length < 48) _mask(source, mask, output, offset, length);
      else bufferUtil.mask(source, mask, output, offset, length);
    };

    module.exports.unmask = function (buffer, mask) {
      if (buffer.length < 32) _unmask(buffer, mask);
      else bufferUtil.unmask(buffer, mask);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}


/***/ }),

/***/ "../../node_modules/ws/lib/constants.js":
/*!**********************************************!*\
  !*** ../../node_modules/ws/lib/constants.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
  kListener: Symbol('kListener'),
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  NOOP: () => {}
};


/***/ }),

/***/ "../../node_modules/ws/lib/event-target.js":
/*!*************************************************!*\
  !*** ../../node_modules/ws/lib/event-target.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { kForOnEventAttribute, kListener } = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");

const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');

/**
 * Class representing an event.
 */
class Event {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  constructor(type) {
    this[kTarget] = null;
    this[kType] = type;
  }

  /**
   * @type {*}
   */
  get target() {
    return this[kTarget];
  }

  /**
   * @type {String}
   */
  get type() {
    return this[kType];
  }
}

Object.defineProperty(Event.prototype, 'target', { enumerable: true });
Object.defineProperty(Event.prototype, 'type', { enumerable: true });

/**
 * Class representing a close event.
 *
 * @extends Event
 */
class CloseEvent extends Event {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  constructor(type, options = {}) {
    super(type);

    this[kCode] = options.code === undefined ? 0 : options.code;
    this[kReason] = options.reason === undefined ? '' : options.reason;
    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
  }

  /**
   * @type {Number}
   */
  get code() {
    return this[kCode];
  }

  /**
   * @type {String}
   */
  get reason() {
    return this[kReason];
  }

  /**
   * @type {Boolean}
   */
  get wasClean() {
    return this[kWasClean];
  }
}

Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

/**
 * Class representing an error event.
 *
 * @extends Event
 */
class ErrorEvent extends Event {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  constructor(type, options = {}) {
    super(type);

    this[kError] = options.error === undefined ? null : options.error;
    this[kMessage] = options.message === undefined ? '' : options.message;
  }

  /**
   * @type {*}
   */
  get error() {
    return this[kError];
  }

  /**
   * @type {String}
   */
  get message() {
    return this[kMessage];
  }
}

Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

/**
 * Class representing a message event.
 *
 * @extends Event
 */
class MessageEvent extends Event {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  constructor(type, options = {}) {
    super(type);

    this[kData] = options.data === undefined ? null : options.data;
  }

  /**
   * @type {*}
   */
  get data() {
    return this[kData];
  }
}

Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */
const EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(type, handler, options = {}) {
    for (const listener of this.listeners(type)) {
      if (
        !options[kForOnEventAttribute] &&
        listener[kListener] === handler &&
        !listener[kForOnEventAttribute]
      ) {
        return;
      }
    }

    let wrapper;

    if (type === 'message') {
      wrapper = function onMessage(data, isBinary) {
        const event = new MessageEvent('message', {
          data: isBinary ? data : data.toString()
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'close') {
      wrapper = function onClose(code, message) {
        const event = new CloseEvent('close', {
          code,
          reason: message.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'error') {
      wrapper = function onError(error) {
        const event = new ErrorEvent('error', {
          error,
          message: error.message
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'open') {
      wrapper = function onOpen() {
        const event = new Event('open');

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else {
      return;
    }

    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
    wrapper[kListener] = handler;

    if (options.once) {
      this.once(type, wrapper);
    } else {
      this.on(type, wrapper);
    }
  },

  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */
  removeEventListener(type, handler) {
    for (const listener of this.listeners(type)) {
      if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
        this.removeListener(type, listener);
        break;
      }
    }
  }
};

module.exports = {
  CloseEvent,
  ErrorEvent,
  Event,
  EventTarget,
  MessageEvent
};

/**
 * Call an event listener
 *
 * @param {(Function|Object)} listener The listener to call
 * @param {*} thisArg The value to use as `this`` when calling the listener
 * @param {Event} event The event to pass to the listener
 * @private
 */
function callListener(listener, thisArg, event) {
  if (typeof listener === 'object' && listener.handleEvent) {
    listener.handleEvent.call(listener, event);
  } else {
    listener.call(thisArg, event);
  }
}


/***/ }),

/***/ "../../node_modules/ws/lib/extension.js":
/*!**********************************************!*\
  !*** ../../node_modules/ws/lib/extension.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { tokenChars } = __webpack_require__(/*! ./validation */ "../../node_modules/ws/lib/validation.js");

/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */
function push(dest, name, elem) {
  if (dest[name] === undefined) dest[name] = [elem];
  else dest[name].push(elem);
}

/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */
function parse(header) {
  const offers = Object.create(null);
  let params = Object.create(null);
  let mustUnescape = false;
  let isEscaping = false;
  let inQuotes = false;
  let extensionName;
  let paramName;
  let start = -1;
  let code = -1;
  let end = -1;
  let i = 0;

  for (; i < header.length; i++) {
    code = header.charCodeAt(i);

    if (extensionName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (
        i !== 0 &&
        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
      ) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        const name = header.slice(start, end);
        if (code === 0x2c) {
          push(offers, name, params);
          params = Object.create(null);
        } else {
          extensionName = name;
        }

        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else if (paramName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 || code === 0x09) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        push(params, header.slice(start, end), true);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        start = end = -1;
      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else {
      //
      // The value of a quoted-string after unescaping must conform to the
      // token ABNF, so only token characters are valid.
      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
      //
      if (isEscaping) {
        if (tokenChars[code] !== 1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (start === -1) start = i;
        else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x22 /* '"' */ && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 0x5c /* '\' */) {
          isEscaping = true;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
        inQuotes = true;
      } else if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
        if (end === -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        let value = header.slice(start, end);
        if (mustUnescape) {
          value = value.replace(/\\/g, '');
          mustUnescape = false;
        }
        push(params, paramName, value);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        paramName = undefined;
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
  }

  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
    throw new SyntaxError('Unexpected end of input');
  }

  if (end === -1) end = i;
  const token = header.slice(start, end);
  if (extensionName === undefined) {
    push(offers, token, params);
  } else {
    if (paramName === undefined) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ''));
    } else {
      push(params, paramName, token);
    }
    push(offers, extensionName, params);
  }

  return offers;
}

/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */
function format(extensions) {
  return Object.keys(extensions)
    .map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations)) configurations = [configurations];
      return configurations
        .map((params) => {
          return [extension]
            .concat(
              Object.keys(params).map((k) => {
                let values = params[k];
                if (!Array.isArray(values)) values = [values];
                return values
                  .map((v) => (v === true ? k : `${k}=${v}`))
                  .join('; ');
              })
            )
            .join('; ');
        })
        .join(', ');
    })
    .join(', ');
}

module.exports = { format, parse };


/***/ }),

/***/ "../../node_modules/ws/lib/limiter.js":
/*!********************************************!*\
  !*** ../../node_modules/ws/lib/limiter.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


const kDone = Symbol('kDone');
const kRun = Symbol('kRun');

/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */
class Limiter {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(concurrency) {
    this[kDone] = () => {
      this.pending--;
      this[kRun]();
    };
    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }

  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(job) {
    this.jobs.push(job);
    this[kRun]();
  }

  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [kRun]() {
    if (this.pending === this.concurrency) return;

    if (this.jobs.length) {
      const job = this.jobs.shift();

      this.pending++;
      job(this[kDone]);
    }
  }
}

module.exports = Limiter;


/***/ }),

/***/ "../../node_modules/ws/lib/permessage-deflate.js":
/*!*******************************************************!*\
  !*** ../../node_modules/ws/lib/permessage-deflate.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const zlib = __webpack_require__(/*! zlib */ "zlib");

const bufferUtil = __webpack_require__(/*! ./buffer-util */ "../../node_modules/ws/lib/buffer-util.js");
const Limiter = __webpack_require__(/*! ./limiter */ "../../node_modules/ws/lib/limiter.js");
const { kStatusCode } = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");

const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');

//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;

/**
 * permessage-deflate implementation.
 */
class PerMessageDeflate {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(options, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold =
      this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      const concurrency =
        this._options.concurrencyLimit !== undefined
          ? this._options.concurrencyLimit
          : 10;
      zlibLimiter = new Limiter(concurrency);
    }
  }

  /**
   * @type {String}
   */
  static get extensionName() {
    return 'permessage-deflate';
  }

  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const params = {};

    if (this._options.serverNoContextTakeover) {
      params.server_no_context_takeover = true;
    }
    if (this._options.clientNoContextTakeover) {
      params.client_no_context_takeover = true;
    }
    if (this._options.serverMaxWindowBits) {
      params.server_max_window_bits = this._options.serverMaxWindowBits;
    }
    if (this._options.clientMaxWindowBits) {
      params.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (this._options.clientMaxWindowBits == null) {
      params.client_max_window_bits = true;
    }

    return params;
  }

  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(configurations) {
    configurations = this.normalizeParams(configurations);

    this.params = this._isServer
      ? this.acceptAsServer(configurations)
      : this.acceptAsClient(configurations);

    return this.params;
  }

  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate) {
      this._inflate.close();
      this._inflate = null;
    }

    if (this._deflate) {
      const callback = this._deflate[kCallback];

      this._deflate.close();
      this._deflate = null;

      if (callback) {
        callback(
          new Error(
            'The deflate stream was closed while data was being processed'
          )
        );
      }
    }
  }

  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(offers) {
    const opts = this._options;
    const accepted = offers.find((params) => {
      if (
        (opts.serverNoContextTakeover === false &&
          params.server_no_context_takeover) ||
        (params.server_max_window_bits &&
          (opts.serverMaxWindowBits === false ||
            (typeof opts.serverMaxWindowBits === 'number' &&
              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
        (typeof opts.clientMaxWindowBits === 'number' &&
          !params.client_max_window_bits)
      ) {
        return false;
      }

      return true;
    });

    if (!accepted) {
      throw new Error('None of the extension offers can be accepted');
    }

    if (opts.serverNoContextTakeover) {
      accepted.server_no_context_takeover = true;
    }
    if (opts.clientNoContextTakeover) {
      accepted.client_no_context_takeover = true;
    }
    if (typeof opts.serverMaxWindowBits === 'number') {
      accepted.server_max_window_bits = opts.serverMaxWindowBits;
    }
    if (typeof opts.clientMaxWindowBits === 'number') {
      accepted.client_max_window_bits = opts.clientMaxWindowBits;
    } else if (
      accepted.client_max_window_bits === true ||
      opts.clientMaxWindowBits === false
    ) {
      delete accepted.client_max_window_bits;
    }

    return accepted;
  }

  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(response) {
    const params = response[0];

    if (
      this._options.clientNoContextTakeover === false &&
      params.client_no_context_takeover
    ) {
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    }

    if (!params.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === 'number') {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      }
    } else if (
      this._options.clientMaxWindowBits === false ||
      (typeof this._options.clientMaxWindowBits === 'number' &&
        params.client_max_window_bits > this._options.clientMaxWindowBits)
    ) {
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    }

    return params;
  }

  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        let value = params[key];

        if (value.length > 1) {
          throw new Error(`Parameter "${key}" must have only a single value`);
        }

        value = value[0];

        if (key === 'client_max_window_bits') {
          if (value !== true) {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
            value = num;
          } else if (!this._isServer) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else if (key === 'server_max_window_bits') {
          const num = +value;
          if (!Number.isInteger(num) || num < 8 || num > 15) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
          value = num;
        } else if (
          key === 'client_no_context_takeover' ||
          key === 'server_no_context_takeover'
        ) {
          if (value !== true) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else {
          throw new Error(`Unknown parameter "${key}"`);
        }

        params[key] = value;
      });
    });

    return configurations;
  }

  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._compress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(data, fin, callback) {
    const endpoint = this._isServer ? 'client' : 'server';

    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._inflate = zlib.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits
      });
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on('error', inflateOnError);
      this._inflate.on('data', inflateOnData);
    }

    this._inflate[kCallback] = callback;

    this._inflate.write(data);
    if (fin) this._inflate.write(TRAILER);

    this._inflate.flush(() => {
      const err = this._inflate[kError];

      if (err) {
        this._inflate.close();
        this._inflate = null;
        callback(err);
        return;
      }

      const data = bufferUtil.concat(
        this._inflate[kBuffers],
        this._inflate[kTotalLength]
      );

      if (this._inflate._readableState.endEmitted) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];

        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._inflate.reset();
        }
      }

      callback(null, data);
    });
  }

  /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(data, fin, callback) {
    const endpoint = this._isServer ? 'server' : 'client';

    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._deflate = zlib.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits
      });

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      this._deflate.on('data', deflateOnData);
    }

    this._deflate[kCallback] = callback;

    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      if (!this._deflate) {
        //
        // The deflate stream was closed while data was being processed.
        //
        return;
      }

      let data = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );

      if (fin) data = data.slice(0, data.length - 4);

      //
      // Ensure that the callback will not be called again in
      // `PerMessageDeflate#cleanup()`.
      //
      this._deflate[kCallback] = null;

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
        this._deflate.reset();
      }

      callback(null, data);
    });
  }
}

module.exports = PerMessageDeflate;

/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}

/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;

  if (
    this[kPerMessageDeflate]._maxPayload < 1 ||
    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
  ) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError] = new RangeError('Max payload size exceeded');
  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
  this[kError][kStatusCode] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}

/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */
function inflateOnError(err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode] = 1007;
  this[kCallback](err);
}


/***/ }),

/***/ "../../node_modules/ws/lib/receiver.js":
/*!*********************************************!*\
  !*** ../../node_modules/ws/lib/receiver.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Writable } = __webpack_require__(/*! stream */ "stream");

const PerMessageDeflate = __webpack_require__(/*! ./permessage-deflate */ "../../node_modules/ws/lib/permessage-deflate.js");
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  kStatusCode,
  kWebSocket
} = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");
const { concat, toArrayBuffer, unmask } = __webpack_require__(/*! ./buffer-util */ "../../node_modules/ws/lib/buffer-util.js");
const { isValidStatusCode, isValidUTF8 } = __webpack_require__(/*! ./validation */ "../../node_modules/ws/lib/validation.js");

const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;

/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */
class Receiver extends Writable {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  constructor(options = {}) {
    super();

    this._binaryType = options.binaryType || BINARY_TYPES[0];
    this._extensions = options.extensions || {};
    this._isServer = !!options.isServer;
    this._maxPayload = options.maxPayload | 0;
    this._skipUTF8Validation = !!options.skipUTF8Validation;
    this[kWebSocket] = undefined;

    this._bufferedBytes = 0;
    this._buffers = [];

    this._compressed = false;
    this._payloadLength = 0;
    this._mask = undefined;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._opcode = 0;

    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];

    this._state = GET_INFO;
    this._loop = false;
  }

  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(chunk, encoding, cb) {
    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

    this._bufferedBytes += chunk.length;
    this._buffers.push(chunk);
    this.startLoop(cb);
  }

  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(n) {
    this._bufferedBytes -= n;

    if (n === this._buffers[0].length) return this._buffers.shift();

    if (n < this._buffers[0].length) {
      const buf = this._buffers[0];
      this._buffers[0] = buf.slice(n);
      return buf.slice(0, n);
    }

    const dst = Buffer.allocUnsafe(n);

    do {
      const buf = this._buffers[0];
      const offset = dst.length - n;

      if (n >= buf.length) {
        dst.set(this._buffers.shift(), offset);
      } else {
        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
        this._buffers[0] = buf.slice(n);
      }

      n -= buf.length;
    } while (n > 0);

    return dst;
  }

  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(cb) {
    let err;
    this._loop = true;

    do {
      switch (this._state) {
        case GET_INFO:
          err = this.getInfo();
          break;
        case GET_PAYLOAD_LENGTH_16:
          err = this.getPayloadLength16();
          break;
        case GET_PAYLOAD_LENGTH_64:
          err = this.getPayloadLength64();
          break;
        case GET_MASK:
          this.getMask();
          break;
        case GET_DATA:
          err = this.getData(cb);
          break;
        default:
          // `INFLATING`
          this._loop = false;
          return;
      }
    } while (this._loop);

    cb(err);
  }

  /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getInfo() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    const buf = this.consume(2);

    if ((buf[0] & 0x30) !== 0x00) {
      this._loop = false;
      return error(
        RangeError,
        'RSV2 and RSV3 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_2_3'
      );
    }

    const compressed = (buf[0] & 0x40) === 0x40;

    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
      this._loop = false;
      return error(
        RangeError,
        'RSV1 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_1'
      );
    }

    this._fin = (buf[0] & 0x80) === 0x80;
    this._opcode = buf[0] & 0x0f;
    this._payloadLength = buf[1] & 0x7f;

    if (this._opcode === 0x00) {
      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (!this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          'invalid opcode 0',
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._opcode = this._fragmented;
    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
      if (this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._compressed = compressed;
    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
      if (!this._fin) {
        this._loop = false;
        return error(
          RangeError,
          'FIN must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_FIN'
        );
      }

      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (this._payloadLength > 0x7d) {
        this._loop = false;
        return error(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      }
    } else {
      this._loop = false;
      return error(
        RangeError,
        `invalid opcode ${this._opcode}`,
        true,
        1002,
        'WS_ERR_INVALID_OPCODE'
      );
    }

    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    this._masked = (buf[1] & 0x80) === 0x80;

    if (this._isServer) {
      if (!this._masked) {
        this._loop = false;
        return error(
          RangeError,
          'MASK must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_MASK'
        );
      }
    } else if (this._masked) {
      this._loop = false;
      return error(
        RangeError,
        'MASK must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_MASK'
      );
    }

    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
    else return this.haveLength();
  }

  /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength16() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    this._payloadLength = this.consume(2).readUInt16BE(0);
    return this.haveLength();
  }

  /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength64() {
    if (this._bufferedBytes < 8) {
      this._loop = false;
      return;
    }

    const buf = this.consume(8);
    const num = buf.readUInt32BE(0);

    //
    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
    // if payload length is greater than this number.
    //
    if (num > Math.pow(2, 53 - 32) - 1) {
      this._loop = false;
      return error(
        RangeError,
        'Unsupported WebSocket frame: payload length > 2^53 - 1',
        false,
        1009,
        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
      );
    }

    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
    return this.haveLength();
  }

  /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  haveLength() {
    if (this._payloadLength && this._opcode < 0x08) {
      this._totalPayloadLength += this._payloadLength;
      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
        this._loop = false;
        return error(
          RangeError,
          'Max payload size exceeded',
          false,
          1009,
          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
        );
      }
    }

    if (this._masked) this._state = GET_MASK;
    else this._state = GET_DATA;
  }

  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = false;
      return;
    }

    this._mask = this.consume(4);
    this._state = GET_DATA;
  }

  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  getData(cb) {
    let data = EMPTY_BUFFER;

    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = false;
        return;
      }

      data = this.consume(this._payloadLength);

      if (
        this._masked &&
        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
      ) {
        unmask(data, this._mask);
      }
    }

    if (this._opcode > 0x07) return this.controlMessage(data);

    if (this._compressed) {
      this._state = INFLATING;
      this.decompress(data, cb);
      return;
    }

    if (data.length) {
      //
      // This message is not compressed so its length is the sum of the payload
      // length of all fragments.
      //
      this._messageLength = this._totalPayloadLength;
      this._fragments.push(data);
    }

    return this.dataMessage();
  }

  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(data, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
      if (err) return cb(err);

      if (buf.length) {
        this._messageLength += buf.length;
        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
          return cb(
            error(
              RangeError,
              'Max payload size exceeded',
              false,
              1009,
              'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
            )
          );
        }

        this._fragments.push(buf);
      }

      const er = this.dataMessage();
      if (er) return cb(er);

      this.startLoop(cb);
    });
  }

  /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */
  dataMessage() {
    if (this._fin) {
      const messageLength = this._messageLength;
      const fragments = this._fragments;

      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];

      if (this._opcode === 2) {
        let data;

        if (this._binaryType === 'nodebuffer') {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === 'arraybuffer') {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else {
          data = fragments;
        }

        this.emit('message', data, true);
      } else {
        const buf = concat(fragments, messageLength);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          this._loop = false;
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('message', buf, false);
      }
    }

    this._state = GET_INFO;
  }

  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(data) {
    if (this._opcode === 0x08) {
      this._loop = false;

      if (data.length === 0) {
        this.emit('conclude', 1005, EMPTY_BUFFER);
        this.end();
      } else if (data.length === 1) {
        return error(
          RangeError,
          'invalid payload length 1',
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      } else {
        const code = data.readUInt16BE(0);

        if (!isValidStatusCode(code)) {
          return error(
            RangeError,
            `invalid status code ${code}`,
            true,
            1002,
            'WS_ERR_INVALID_CLOSE_CODE'
          );
        }

        const buf = data.slice(2);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('conclude', code, buf);
        this.end();
      }
    } else if (this._opcode === 0x09) {
      this.emit('ping', data);
    } else {
      this.emit('pong', data);
    }

    this._state = GET_INFO;
  }
}

module.exports = Receiver;

/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */
function error(ErrorCtor, message, prefix, statusCode, errorCode) {
  const err = new ErrorCtor(
    prefix ? `Invalid WebSocket frame: ${message}` : message
  );

  Error.captureStackTrace(err, error);
  err.code = errorCode;
  err[kStatusCode] = statusCode;
  return err;
}


/***/ }),

/***/ "../../node_modules/ws/lib/sender.js":
/*!*******************************************!*\
  !*** ../../node_modules/ws/lib/sender.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */



const net = __webpack_require__(/*! net */ "net");
const tls = __webpack_require__(/*! tls */ "tls");
const { randomFillSync } = __webpack_require__(/*! crypto */ "crypto");

const PerMessageDeflate = __webpack_require__(/*! ./permessage-deflate */ "../../node_modules/ws/lib/permessage-deflate.js");
const { EMPTY_BUFFER } = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");
const { isValidStatusCode } = __webpack_require__(/*! ./validation */ "../../node_modules/ws/lib/validation.js");
const { mask: applyMask, toBuffer } = __webpack_require__(/*! ./buffer-util */ "../../node_modules/ws/lib/buffer-util.js");

const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);

/**
 * HyBi Sender implementation.
 */
class Sender {
  /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  constructor(socket, extensions, generateMask) {
    this._extensions = extensions || {};

    if (generateMask) {
      this._generateMask = generateMask;
      this._maskBuffer = Buffer.alloc(4);
    }

    this._socket = socket;

    this._firstFragment = true;
    this._compress = false;

    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];
  }

  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */
  static frame(data, options) {
    let mask;
    let merge = false;
    let offset = 2;
    let skipMasking = false;

    if (options.mask) {
      mask = options.maskBuffer || maskBuffer;

      if (options.generateMask) {
        options.generateMask(mask);
      } else {
        randomFillSync(mask, 0, 4);
      }

      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
      offset = 6;
    }

    let dataLength;

    if (typeof data === 'string') {
      if (
        (!options.mask || skipMasking) &&
        options[kByteLength] !== undefined
      ) {
        dataLength = options[kByteLength];
      } else {
        data = Buffer.from(data);
        dataLength = data.length;
      }
    } else {
      dataLength = data.length;
      merge = options.mask && options.readOnly && !skipMasking;
    }

    let payloadLength = dataLength;

    if (dataLength >= 65536) {
      offset += 8;
      payloadLength = 127;
    } else if (dataLength > 125) {
      offset += 2;
      payloadLength = 126;
    }

    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
    if (options.rsv1) target[0] |= 0x40;

    target[1] = payloadLength;

    if (payloadLength === 126) {
      target.writeUInt16BE(dataLength, 2);
    } else if (payloadLength === 127) {
      target[2] = target[3] = 0;
      target.writeUIntBE(dataLength, 4, 6);
    }

    if (!options.mask) return [target, data];

    target[1] |= 0x80;
    target[offset - 4] = mask[0];
    target[offset - 3] = mask[1];
    target[offset - 2] = mask[2];
    target[offset - 1] = mask[3];

    if (skipMasking) return [target, data];

    if (merge) {
      applyMask(data, mask, target, offset, dataLength);
      return [target];
    }

    applyMask(data, mask, data, 0, dataLength);
    return [target, data];
  }

  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(code, data, mask, cb) {
    let buf;

    if (code === undefined) {
      buf = EMPTY_BUFFER;
    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
      throw new TypeError('First argument must be a valid error code number');
    } else if (data === undefined || !data.length) {
      buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(code, 0);
    } else {
      const length = Buffer.byteLength(data);

      if (length > 123) {
        throw new RangeError('The message must not be greater than 123 bytes');
      }

      buf = Buffer.allocUnsafe(2 + length);
      buf.writeUInt16BE(code, 0);

      if (typeof data === 'string') {
        buf.write(data, 2);
      } else {
        buf.set(data, 2);
      }
    }

    const options = {
      [kByteLength]: buf.length,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x08,
      readOnly: false,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, buf, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(buf, options), cb);
    }
  }

  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x09,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options), cb);
    }
  }

  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x0a,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options), cb);
    }
  }

  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(data, options, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
    let opcode = options.binary ? 2 : 1;
    let rsv1 = options.compress;

    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (this._firstFragment) {
      this._firstFragment = false;
      if (
        rsv1 &&
        perMessageDeflate &&
        perMessageDeflate.params[
          perMessageDeflate._isServer
            ? 'server_no_context_takeover'
            : 'client_no_context_takeover'
        ]
      ) {
        rsv1 = byteLength >= perMessageDeflate._threshold;
      }
      this._compress = rsv1;
    } else {
      rsv1 = false;
      opcode = 0;
    }

    if (options.fin) this._firstFragment = true;

    if (perMessageDeflate) {
      const opts = {
        [kByteLength]: byteLength,
        fin: options.fin,
        generateMask: this._generateMask,
        mask: options.mask,
        maskBuffer: this._maskBuffer,
        opcode,
        readOnly,
        rsv1
      };

      if (this._deflating) {
        this.enqueue([this.dispatch, data, this._compress, opts, cb]);
      } else {
        this.dispatch(data, this._compress, opts, cb);
      }
    } else {
      this.sendFrame(
        Sender.frame(data, {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1: false
        }),
        cb
      );
    }
  }

  /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(data, compress, options, cb) {
    if (!compress) {
      this.sendFrame(Sender.frame(data, options), cb);
      return;
    }

    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    this._bufferedBytes += options[kByteLength];
    this._deflating = true;
    perMessageDeflate.compress(data, options.fin, (_, buf) => {
      if (this._socket.destroyed) {
        const err = new Error(
          'The socket was closed while data was being compressed'
        );

        if (typeof cb === 'function') cb(err);

        for (let i = 0; i < this._queue.length; i++) {
          const params = this._queue[i];
          const callback = params[params.length - 1];

          if (typeof callback === 'function') callback(err);
        }

        return;
      }

      this._bufferedBytes -= options[kByteLength];
      this._deflating = false;
      options.readOnly = false;
      this.sendFrame(Sender.frame(buf, options), cb);
      this.dequeue();
    });
  }

  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    while (!this._deflating && this._queue.length) {
      const params = this._queue.shift();

      this._bufferedBytes -= params[3][kByteLength];
      Reflect.apply(params[0], this, params.slice(1));
    }
  }

  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(params) {
    this._bufferedBytes += params[3][kByteLength];
    this._queue.push(params);
  }

  /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(list, cb) {
    if (list.length === 2) {
      this._socket.cork();
      this._socket.write(list[0]);
      this._socket.write(list[1], cb);
      this._socket.uncork();
    } else {
      this._socket.write(list[0], cb);
    }
  }
}

module.exports = Sender;


/***/ }),

/***/ "../../node_modules/ws/lib/stream.js":
/*!*******************************************!*\
  !*** ../../node_modules/ws/lib/stream.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Duplex } = __webpack_require__(/*! stream */ "stream");

/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */
function emitClose(stream) {
  stream.emit('close');
}

/**
 * The listener of the `'end'` event.
 *
 * @private
 */
function duplexOnEnd() {
  if (!this.destroyed && this._writableState.finished) {
    this.destroy();
  }
}

/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */
function duplexOnError(err) {
  this.removeListener('error', duplexOnError);
  this.destroy();
  if (this.listenerCount('error') === 0) {
    // Do not suppress the throwing behavior.
    this.emit('error', err);
  }
}

/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */
function createWebSocketStream(ws, options) {
  let terminateOnDestroy = true;

  const duplex = new Duplex({
    ...options,
    autoDestroy: false,
    emitClose: false,
    objectMode: false,
    writableObjectMode: false
  });

  ws.on('message', function message(msg, isBinary) {
    const data =
      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

    if (!duplex.push(data)) ws.pause();
  });

  ws.once('error', function error(err) {
    if (duplex.destroyed) return;

    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
    //
    // - If the `'error'` event is emitted before the `'open'` event, then
    //   `ws.terminate()` is a noop as no socket is assigned.
    // - Otherwise, the error is re-emitted by the listener of the `'error'`
    //   event of the `Receiver` object. The listener already closes the
    //   connection by calling `ws.close()`. This allows a close frame to be
    //   sent to the other peer. If `ws.terminate()` is called right after this,
    //   then the close frame might not be sent.
    terminateOnDestroy = false;
    duplex.destroy(err);
  });

  ws.once('close', function close() {
    if (duplex.destroyed) return;

    duplex.push(null);
  });

  duplex._destroy = function (err, callback) {
    if (ws.readyState === ws.CLOSED) {
      callback(err);
      process.nextTick(emitClose, duplex);
      return;
    }

    let called = false;

    ws.once('error', function error(err) {
      called = true;
      callback(err);
    });

    ws.once('close', function close() {
      if (!called) callback(err);
      process.nextTick(emitClose, duplex);
    });

    if (terminateOnDestroy) ws.terminate();
  };

  duplex._final = function (callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._final(callback);
      });
      return;
    }

    // If the value of the `_socket` property is `null` it means that `ws` is a
    // client websocket and the handshake failed. In fact, when this happens, a
    // socket is never assigned to the websocket. Wait for the `'error'` event
    // that will be emitted by the websocket.
    if (ws._socket === null) return;

    if (ws._socket._writableState.finished) {
      callback();
      if (duplex._readableState.endEmitted) duplex.destroy();
    } else {
      ws._socket.once('finish', function finish() {
        // `duplex` is not destroyed here because the `'end'` event will be
        // emitted on `duplex` after this `'finish'` event. The EOF signaling
        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
        callback();
      });
      ws.close();
    }
  };

  duplex._read = function () {
    if (ws.isPaused) ws.resume();
  };

  duplex._write = function (chunk, encoding, callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._write(chunk, encoding, callback);
      });
      return;
    }

    ws.send(chunk, callback);
  };

  duplex.on('end', duplexOnEnd);
  duplex.on('error', duplexOnError);
  return duplex;
}

module.exports = createWebSocketStream;


/***/ }),

/***/ "../../node_modules/ws/lib/subprotocol.js":
/*!************************************************!*\
  !*** ../../node_modules/ws/lib/subprotocol.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { tokenChars } = __webpack_require__(/*! ./validation */ "../../node_modules/ws/lib/validation.js");

/**
 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
 *
 * @param {String} header The field value of the header
 * @return {Set} The subprotocol names
 * @public
 */
function parse(header) {
  const protocols = new Set();
  let start = -1;
  let end = -1;
  let i = 0;

  for (i; i < header.length; i++) {
    const code = header.charCodeAt(i);

    if (end === -1 && tokenChars[code] === 1) {
      if (start === -1) start = i;
    } else if (
      i !== 0 &&
      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
    ) {
      if (end === -1 && start !== -1) end = i;
    } else if (code === 0x2c /* ',' */) {
      if (start === -1) {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }

      if (end === -1) end = i;

      const protocol = header.slice(start, end);

      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }

      protocols.add(protocol);
      start = end = -1;
    } else {
      throw new SyntaxError(`Unexpected character at index ${i}`);
    }
  }

  if (start === -1 || end !== -1) {
    throw new SyntaxError('Unexpected end of input');
  }

  const protocol = header.slice(start, i);

  if (protocols.has(protocol)) {
    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
  }

  protocols.add(protocol);
  return protocols;
}

module.exports = { parse };


/***/ }),

/***/ "../../node_modules/ws/lib/validation.js":
/*!***********************************************!*\
  !*** ../../node_modules/ws/lib/validation.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
];

/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */
function isValidStatusCode(code) {
  return (
    (code >= 1000 &&
      code <= 1014 &&
      code !== 1004 &&
      code !== 1005 &&
      code !== 1006) ||
    (code >= 3000 && code <= 4999)
  );
}

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */
function _isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;

  while (i < len) {
    if ((buf[i] & 0x80) === 0) {
      // 0xxxxxxx
      i++;
    } else if ((buf[i] & 0xe0) === 0xc0) {
      // 110xxxxx 10xxxxxx
      if (
        i + 1 === len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i] & 0xfe) === 0xc0 // Overlong
      ) {
        return false;
      }

      i += 2;
    } else if ((buf[i] & 0xf0) === 0xe0) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      if (
        i + 2 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
      ) {
        return false;
      }

      i += 3;
    } else if ((buf[i] & 0xf8) === 0xf0) {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      if (
        i + 3 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i + 3] & 0xc0) !== 0x80 ||
        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
        buf[i] > 0xf4 // > U+10FFFF
      ) {
        return false;
      }

      i += 4;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  isValidStatusCode,
  isValidUTF8: _isValidUTF8,
  tokenChars
};

/* istanbul ignore else  */
if (!process.env.WS_NO_UTF_8_VALIDATE) {
  try {
    const isValidUTF8 = __webpack_require__(/*! utf-8-validate */ "utf-8-validate");

    module.exports.isValidUTF8 = function (buf) {
      return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}


/***/ }),

/***/ "../../node_modules/ws/lib/websocket-server.js":
/*!*****************************************************!*\
  !*** ../../node_modules/ws/lib/websocket-server.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */



const EventEmitter = __webpack_require__(/*! events */ "events");
const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const net = __webpack_require__(/*! net */ "net");
const tls = __webpack_require__(/*! tls */ "tls");
const { createHash } = __webpack_require__(/*! crypto */ "crypto");

const extension = __webpack_require__(/*! ./extension */ "../../node_modules/ws/lib/extension.js");
const PerMessageDeflate = __webpack_require__(/*! ./permessage-deflate */ "../../node_modules/ws/lib/permessage-deflate.js");
const subprotocol = __webpack_require__(/*! ./subprotocol */ "../../node_modules/ws/lib/subprotocol.js");
const WebSocket = __webpack_require__(/*! ./websocket */ "../../node_modules/ws/lib/websocket.js");
const { GUID, kWebSocket } = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");

const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;

/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */
class WebSocketServer extends EventEmitter {
  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */
  constructor(options, callback) {
    super();

    options = {
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null, // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      WebSocket,
      ...options
    };

    if (
      (options.port == null && !options.server && !options.noServer) ||
      (options.port != null && (options.server || options.noServer)) ||
      (options.server && options.noServer)
    ) {
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options ' +
          'must be specified'
      );
    }

    if (options.port != null) {
      this._server = http.createServer((req, res) => {
        const body = http.STATUS_CODES[426];

        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });
      this._server.listen(
        options.port,
        options.host,
        options.backlog,
        callback
      );
    } else if (options.server) {
      this._server = options.server;
    }

    if (this._server) {
      const emitConnection = this.emit.bind(this, 'connection');

      this._removeListeners = addListeners(this._server, {
        listening: this.emit.bind(this, 'listening'),
        error: this.emit.bind(this, 'error'),
        upgrade: (req, socket, head) => {
          this.handleUpgrade(req, socket, head, emitConnection);
        }
      });
    }

    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
    if (options.clientTracking) {
      this.clients = new Set();
      this._shouldEmitClose = false;
    }

    this.options = options;
    this._state = RUNNING;
  }

  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */
  address() {
    if (this.options.noServer) {
      throw new Error('The server is operating in "noServer" mode');
    }

    if (!this._server) return null;
    return this._server.address();
  }

  /**
   * Stop the server from accepting new connections and emit the `'close'` event
   * when all existing connections are closed.
   *
   * @param {Function} [cb] A one-time listener for the `'close'` event
   * @public
   */
  close(cb) {
    if (this._state === CLOSED) {
      if (cb) {
        this.once('close', () => {
          cb(new Error('The server is not running'));
        });
      }

      process.nextTick(emitClose, this);
      return;
    }

    if (cb) this.once('close', cb);

    if (this._state === CLOSING) return;
    this._state = CLOSING;

    if (this.options.noServer || this.options.server) {
      if (this._server) {
        this._removeListeners();
        this._removeListeners = this._server = null;
      }

      if (this.clients) {
        if (!this.clients.size) {
          process.nextTick(emitClose, this);
        } else {
          this._shouldEmitClose = true;
        }
      } else {
        process.nextTick(emitClose, this);
      }
    } else {
      const server = this._server;

      this._removeListeners();
      this._removeListeners = this._server = null;

      //
      // The HTTP/S server was created internally. Close it, and rely on its
      // `'close'` event.
      //
      server.close(() => {
        emitClose(this);
      });
    }
  }

  /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
  shouldHandle(req) {
    if (this.options.path) {
      const index = req.url.indexOf('?');
      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

      if (pathname !== this.options.path) return false;
    }

    return true;
  }

  /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */
  handleUpgrade(req, socket, head, cb) {
    socket.on('error', socketOnError);

    const key = req.headers['sec-websocket-key'];
    const version = +req.headers['sec-websocket-version'];

    if (req.method !== 'GET') {
      const message = 'Invalid HTTP method';
      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
      return;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      const message = 'Invalid Upgrade header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!key || !keyRegex.test(key)) {
      const message = 'Missing or invalid Sec-WebSocket-Key header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (version !== 8 && version !== 13) {
      const message = 'Missing or invalid Sec-WebSocket-Version header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!this.shouldHandle(req)) {
      abortHandshake(socket, 400);
      return;
    }

    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
    let protocols = new Set();

    if (secWebSocketProtocol !== undefined) {
      try {
        protocols = subprotocol.parse(secWebSocketProtocol);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Protocol header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
    const extensions = {};

    if (
      this.options.perMessageDeflate &&
      secWebSocketExtensions !== undefined
    ) {
      const perMessageDeflate = new PerMessageDeflate(
        this.options.perMessageDeflate,
        true,
        this.options.maxPayload
      );

      try {
        const offers = extension.parse(secWebSocketExtensions);

        if (offers[PerMessageDeflate.extensionName]) {
          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
      } catch (err) {
        const message =
          'Invalid or unacceptable Sec-WebSocket-Extensions header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    //
    // Optionally call external client verification handler.
    //
    if (this.options.verifyClient) {
      const info = {
        origin:
          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
        secure: !!(req.socket.authorized || req.socket.encrypted),
        req
      };

      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(info, (verified, code, message, headers) => {
          if (!verified) {
            return abortHandshake(socket, code || 401, message, headers);
          }

          this.completeUpgrade(
            extensions,
            key,
            protocols,
            req,
            socket,
            head,
            cb
          );
        });
        return;
      }

      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
    }

    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
  }

  /**
   * Upgrade the connection to WebSocket.
   *
   * @param {Object} extensions The accepted extensions
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Set} protocols The subprotocols
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */
  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
    //
    // Destroy the socket if the client has already sent a FIN packet.
    //
    if (!socket.readable || !socket.writable) return socket.destroy();

    if (socket[kWebSocket]) {
      throw new Error(
        'server.handleUpgrade() was called more than once with the same ' +
          'socket, possibly due to a misconfiguration'
      );
    }

    if (this._state > RUNNING) return abortHandshake(socket, 503);

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    const headers = [
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${digest}`
    ];

    const ws = new this.options.WebSocket(null);

    if (protocols.size) {
      //
      // Optionally call external protocol selection handler.
      //
      const protocol = this.options.handleProtocols
        ? this.options.handleProtocols(protocols, req)
        : protocols.values().next().value;

      if (protocol) {
        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
        ws._protocol = protocol;
      }
    }

    if (extensions[PerMessageDeflate.extensionName]) {
      const params = extensions[PerMessageDeflate.extensionName].params;
      const value = extension.format({
        [PerMessageDeflate.extensionName]: [params]
      });
      headers.push(`Sec-WebSocket-Extensions: ${value}`);
      ws._extensions = extensions;
    }

    //
    // Allow external modification/inspection of handshake headers.
    //
    this.emit('headers', headers, req);

    socket.write(headers.concat('\r\n').join('\r\n'));
    socket.removeListener('error', socketOnError);

    ws.setSocket(socket, head, {
      maxPayload: this.options.maxPayload,
      skipUTF8Validation: this.options.skipUTF8Validation
    });

    if (this.clients) {
      this.clients.add(ws);
      ws.on('close', () => {
        this.clients.delete(ws);

        if (this._shouldEmitClose && !this.clients.size) {
          process.nextTick(emitClose, this);
        }
      });
    }

    cb(ws, req);
  }
}

module.exports = WebSocketServer;

/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */
function addListeners(server, map) {
  for (const event of Object.keys(map)) server.on(event, map[event]);

  return function removeListeners() {
    for (const event of Object.keys(map)) {
      server.removeListener(event, map[event]);
    }
  };
}

/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */
function emitClose(server) {
  server._state = CLOSED;
  server.emit('close');
}

/**
 * Handle socket errors.
 *
 * @private
 */
function socketOnError() {
  this.destroy();
}

/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */
function abortHandshake(socket, code, message, headers) {
  //
  // The socket is writable unless the user destroyed or ended it before calling
  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
  // error. Handling this does not make much sense as the worst that can happen
  // is that some of the data written by the user might be discarded due to the
  // call to `socket.end()` below, which triggers an `'error'` event that in
  // turn causes the socket to be destroyed.
  //
  message = message || http.STATUS_CODES[code];
  headers = {
    Connection: 'close',
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(message),
    ...headers
  };

  socket.once('finish', socket.destroy);

  socket.end(
    `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
      Object.keys(headers)
        .map((h) => `${h}: ${headers[h]}`)
        .join('\r\n') +
      '\r\n\r\n' +
      message
  );
}

/**
 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
 * one listener for it, otherwise call `abortHandshake()`.
 *
 * @param {WebSocketServer} server The WebSocket server
 * @param {http.IncomingMessage} req The request object
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} message The HTTP response body
 * @private
 */
function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
  if (server.listenerCount('wsClientError')) {
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

    server.emit('wsClientError', err, socket, req);
  } else {
    abortHandshake(socket, code, message);
  }
}


/***/ }),

/***/ "../../node_modules/ws/lib/websocket.js":
/*!**********************************************!*\
  !*** ../../node_modules/ws/lib/websocket.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */



const EventEmitter = __webpack_require__(/*! events */ "events");
const https = __webpack_require__(/*! https */ "https");
const http = __webpack_require__(/*! http */ "http");
const net = __webpack_require__(/*! net */ "net");
const tls = __webpack_require__(/*! tls */ "tls");
const { randomBytes, createHash } = __webpack_require__(/*! crypto */ "crypto");
const { Readable } = __webpack_require__(/*! stream */ "stream");
const { URL } = __webpack_require__(/*! url */ "url");

const PerMessageDeflate = __webpack_require__(/*! ./permessage-deflate */ "../../node_modules/ws/lib/permessage-deflate.js");
const Receiver = __webpack_require__(/*! ./receiver */ "../../node_modules/ws/lib/receiver.js");
const Sender = __webpack_require__(/*! ./sender */ "../../node_modules/ws/lib/sender.js");
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  GUID,
  kForOnEventAttribute,
  kListener,
  kStatusCode,
  kWebSocket,
  NOOP
} = __webpack_require__(/*! ./constants */ "../../node_modules/ws/lib/constants.js");
const {
  EventTarget: { addEventListener, removeEventListener }
} = __webpack_require__(/*! ./event-target */ "../../node_modules/ws/lib/event-target.js");
const { format, parse } = __webpack_require__(/*! ./extension */ "../../node_modules/ws/lib/extension.js");
const { toBuffer } = __webpack_require__(/*! ./buffer-util */ "../../node_modules/ws/lib/buffer-util.js");

const closeTimeout = 30 * 1000;
const kAborted = Symbol('kAborted');
const protocolVersions = [8, 13];
const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */
class WebSocket extends EventEmitter {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(address, protocols, options) {
    super();

    this._binaryType = BINARY_TYPES[0];
    this._closeCode = 1006;
    this._closeFrameReceived = false;
    this._closeFrameSent = false;
    this._closeMessage = EMPTY_BUFFER;
    this._closeTimer = null;
    this._extensions = {};
    this._paused = false;
    this._protocol = '';
    this._readyState = WebSocket.CONNECTING;
    this._receiver = null;
    this._sender = null;
    this._socket = null;

    if (address !== null) {
      this._bufferedAmount = 0;
      this._isServer = false;
      this._redirects = 0;

      if (protocols === undefined) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        if (typeof protocols === 'object' && protocols !== null) {
          options = protocols;
          protocols = [];
        } else {
          protocols = [protocols];
        }
      }

      initAsClient(this, address, protocols, options);
    } else {
      this._isServer = true;
    }
  }

  /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }

  set binaryType(type) {
    if (!BINARY_TYPES.includes(type)) return;

    this._binaryType = type;

    //
    // Allow to change `binaryType` on the fly.
    //
    if (this._receiver) this._receiver._binaryType = type;
  }

  /**
   * @type {Number}
   */
  get bufferedAmount() {
    if (!this._socket) return this._bufferedAmount;

    return this._socket._writableState.length + this._sender._bufferedBytes;
  }

  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }

  /**
   * @type {Boolean}
   */
  get isPaused() {
    return this._paused;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return null;
  }

  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }

  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }

  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }

  /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  setSocket(socket, head, options) {
    const receiver = new Receiver({
      binaryType: this.binaryType,
      extensions: this._extensions,
      isServer: this._isServer,
      maxPayload: options.maxPayload,
      skipUTF8Validation: options.skipUTF8Validation
    });

    this._sender = new Sender(socket, this._extensions, options.generateMask);
    this._receiver = receiver;
    this._socket = socket;

    receiver[kWebSocket] = this;
    socket[kWebSocket] = this;

    receiver.on('conclude', receiverOnConclude);
    receiver.on('drain', receiverOnDrain);
    receiver.on('error', receiverOnError);
    receiver.on('message', receiverOnMessage);
    receiver.on('ping', receiverOnPing);
    receiver.on('pong', receiverOnPong);

    socket.setTimeout(0);
    socket.setNoDelay();

    if (head.length > 0) socket.unshift(head);

    socket.on('close', socketOnClose);
    socket.on('data', socketOnData);
    socket.on('end', socketOnEnd);
    socket.on('error', socketOnError);

    this._readyState = WebSocket.OPEN;
    this.emit('open');
  }

  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = WebSocket.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
      return;
    }

    if (this._extensions[PerMessageDeflate.extensionName]) {
      this._extensions[PerMessageDeflate.extensionName].cleanup();
    }

    this._receiver.removeAllListeners();
    this._readyState = WebSocket.CLOSED;
    this.emit('close', this._closeCode, this._closeMessage);
  }

  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */
  close(code, data) {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this.readyState === WebSocket.CLOSING) {
      if (
        this._closeFrameSent &&
        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
      ) {
        this._socket.end();
      }

      return;
    }

    this._readyState = WebSocket.CLOSING;
    this._sender.close(code, data, !this._isServer, (err) => {
      //
      // This error is handled by the `'error'` listener on the socket. We only
      // want to know if the close frame has been sent here.
      //
      if (err) return;

      this._closeFrameSent = true;

      if (
        this._closeFrameReceived ||
        this._receiver._writableState.errorEmitted
      ) {
        this._socket.end();
      }
    });

    //
    // Specify a timeout for the closing handshake to complete.
    //
    this._closeTimer = setTimeout(
      this._socket.destroy.bind(this._socket),
      closeTimeout
    );
  }

  /**
   * Pause the socket.
   *
   * @public
   */
  pause() {
    if (
      this.readyState === WebSocket.CONNECTING ||
      this.readyState === WebSocket.CLOSED
    ) {
      return;
    }

    this._paused = true;
    this._socket.pause();
  }

  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Resume the socket.
   *
   * @public
   */
  resume() {
    if (
      this.readyState === WebSocket.CONNECTING ||
      this.readyState === WebSocket.CLOSED
    ) {
      return;
    }

    this._paused = false;
    if (!this._receiver._writableState.needDrain) this._socket.resume();
  }

  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(data, options, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    const opts = {
      binary: typeof data !== 'string',
      mask: !this._isServer,
      compress: true,
      fin: true,
      ...options
    };

    if (!this._extensions[PerMessageDeflate.extensionName]) {
      opts.compress = false;
    }

    this._sender.send(data || EMPTY_BUFFER, opts, cb);
  }

  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this._socket) {
      this._readyState = WebSocket.CLOSING;
      this._socket.destroy();
    }
  }
}

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

[
  'binaryType',
  'bufferedAmount',
  'extensions',
  'isPaused',
  'protocol',
  'readyState',
  'url'
].forEach((property) => {
  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
});

//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
['open', 'error', 'close', 'message'].forEach((method) => {
  Object.defineProperty(WebSocket.prototype, `on${method}`, {
    enumerable: true,
    get() {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) return listener[kListener];
      }

      return null;
    },
    set(handler) {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) {
          this.removeListener(method, listener);
          break;
        }
      }

      if (typeof handler !== 'function') return;

      this.addEventListener(method, handler, {
        [kForOnEventAttribute]: true
      });
    }
  });
});

WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;

module.exports = WebSocket;

/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */
function initAsClient(websocket, address, protocols, options) {
  const opts = {
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    skipUTF8Validation: false,
    perMessageDeflate: true,
    followRedirects: false,
    maxRedirects: 10,
    ...options,
    createConnection: undefined,
    socketPath: undefined,
    hostname: undefined,
    protocol: undefined,
    timeout: undefined,
    method: 'GET',
    host: undefined,
    path: undefined,
    port: undefined
  };

  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError(
      `Unsupported protocol version: ${opts.protocolVersion} ` +
        `(supported versions: ${protocolVersions.join(', ')})`
    );
  }

  let parsedUrl;

  if (address instanceof URL) {
    parsedUrl = address;
    websocket._url = address.href;
  } else {
    try {
      parsedUrl = new URL(address);
    } catch (e) {
      throw new SyntaxError(`Invalid URL: ${address}`);
    }

    websocket._url = address;
  }

  const isSecure = parsedUrl.protocol === 'wss:';
  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
  let invalidUrlMessage;

  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
    invalidUrlMessage =
      'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
  } else if (isIpcUrl && !parsedUrl.pathname) {
    invalidUrlMessage = "The URL's pathname is empty";
  } else if (parsedUrl.hash) {
    invalidUrlMessage = 'The URL contains a fragment identifier';
  }

  if (invalidUrlMessage) {
    const err = new SyntaxError(invalidUrlMessage);

    if (websocket._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket, err);
      return;
    }
  }

  const defaultPort = isSecure ? 443 : 80;
  const key = randomBytes(16).toString('base64');
  const request = isSecure ? https.request : http.request;
  const protocolSet = new Set();
  let perMessageDeflate;

  opts.createConnection = isSecure ? tlsConnect : netConnect;
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith('[')
    ? parsedUrl.hostname.slice(1, -1)
    : parsedUrl.hostname;
  opts.headers = {
    ...opts.headers,
    'Sec-WebSocket-Version': opts.protocolVersion,
    'Sec-WebSocket-Key': key,
    Connection: 'Upgrade',
    Upgrade: 'websocket'
  };
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;

  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers['Sec-WebSocket-Extensions'] = format({
      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
    });
  }
  if (protocols.length) {
    for (const protocol of protocols) {
      if (
        typeof protocol !== 'string' ||
        !subprotocolRegex.test(protocol) ||
        protocolSet.has(protocol)
      ) {
        throw new SyntaxError(
          'An invalid or duplicated subprotocol was specified'
        );
      }

      protocolSet.add(protocol);
    }

    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
  }
  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }
  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
  }

  if (isIpcUrl) {
    const parts = opts.path.split(':');

    opts.socketPath = parts[0];
    opts.path = parts[1];
  }

  let req;

  if (opts.followRedirects) {
    if (websocket._redirects === 0) {
      websocket._originalIpc = isIpcUrl;
      websocket._originalSecure = isSecure;
      websocket._originalHostOrSocketPath = isIpcUrl
        ? opts.socketPath
        : parsedUrl.host;

      const headers = options && options.headers;

      //
      // Shallow copy the user provided options so that headers can be changed
      // without mutating the original object.
      //
      options = { ...options, headers: {} };

      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          options.headers[key.toLowerCase()] = value;
        }
      }
    } else if (websocket.listenerCount('redirect') === 0) {
      const isSameHost = isIpcUrl
        ? websocket._originalIpc
          ? opts.socketPath === websocket._originalHostOrSocketPath
          : false
        : websocket._originalIpc
        ? false
        : parsedUrl.host === websocket._originalHostOrSocketPath;

      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
        //
        // Match curl 7.77.0 behavior and drop the following headers. These
        // headers are also dropped when following a redirect to a subdomain.
        //
        delete opts.headers.authorization;
        delete opts.headers.cookie;

        if (!isSameHost) delete opts.headers.host;

        opts.auth = undefined;
      }
    }

    //
    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
    // If the `Authorization` header is set, then there is nothing to do as it
    // will take precedence.
    //
    if (opts.auth && !options.headers.authorization) {
      options.headers.authorization =
        'Basic ' + Buffer.from(opts.auth).toString('base64');
    }

    req = websocket._req = request(opts);

    if (websocket._redirects) {
      //
      // Unlike what is done for the `'upgrade'` event, no early exit is
      // triggered here if the user calls `websocket.close()` or
      // `websocket.terminate()` from a listener of the `'redirect'` event. This
      // is because the user can also call `request.destroy()` with an error
      // before calling `websocket.close()` or `websocket.terminate()` and this
      // would result in an error being emitted on the `request` object with no
      // `'error'` event listeners attached.
      //
      websocket.emit('redirect', websocket.url, req);
    }
  } else {
    req = websocket._req = request(opts);
  }

  if (opts.timeout) {
    req.on('timeout', () => {
      abortHandshake(websocket, req, 'Opening handshake has timed out');
    });
  }

  req.on('error', (err) => {
    if (req === null || req[kAborted]) return;

    req = websocket._req = null;
    emitErrorAndClose(websocket, err);
  });

  req.on('response', (res) => {
    const location = res.headers.location;
    const statusCode = res.statusCode;

    if (
      location &&
      opts.followRedirects &&
      statusCode >= 300 &&
      statusCode < 400
    ) {
      if (++websocket._redirects > opts.maxRedirects) {
        abortHandshake(websocket, req, 'Maximum redirects exceeded');
        return;
      }

      req.abort();

      let addr;

      try {
        addr = new URL(location, address);
      } catch (e) {
        const err = new SyntaxError(`Invalid URL: ${location}`);
        emitErrorAndClose(websocket, err);
        return;
      }

      initAsClient(websocket, addr, protocols, options);
    } else if (!websocket.emit('unexpected-response', req, res)) {
      abortHandshake(
        websocket,
        req,
        `Unexpected server response: ${res.statusCode}`
      );
    }
  });

  req.on('upgrade', (res, socket, head) => {
    websocket.emit('upgrade', res);

    //
    // The user may have closed the connection from a listener of the
    // `'upgrade'` event.
    //
    if (websocket.readyState !== WebSocket.CONNECTING) return;

    req = websocket._req = null;

    if (res.headers.upgrade.toLowerCase() !== 'websocket') {
      abortHandshake(websocket, socket, 'Invalid Upgrade header');
      return;
    }

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
      return;
    }

    const serverProt = res.headers['sec-websocket-protocol'];
    let protError;

    if (serverProt !== undefined) {
      if (!protocolSet.size) {
        protError = 'Server sent a subprotocol but none was requested';
      } else if (!protocolSet.has(serverProt)) {
        protError = 'Server sent an invalid subprotocol';
      }
    } else if (protocolSet.size) {
      protError = 'Server sent no subprotocol';
    }

    if (protError) {
      abortHandshake(websocket, socket, protError);
      return;
    }

    if (serverProt) websocket._protocol = serverProt;

    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

    if (secWebSocketExtensions !== undefined) {
      if (!perMessageDeflate) {
        const message =
          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
          'was requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      let extensions;

      try {
        extensions = parse(secWebSocketExtensions);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }

      const extensionNames = Object.keys(extensions);

      if (
        extensionNames.length !== 1 ||
        extensionNames[0] !== PerMessageDeflate.extensionName
      ) {
        const message = 'Server indicated an extension that was not requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      try {
        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }

      websocket._extensions[PerMessageDeflate.extensionName] =
        perMessageDeflate;
    }

    websocket.setSocket(socket, head, {
      generateMask: opts.generateMask,
      maxPayload: opts.maxPayload,
      skipUTF8Validation: opts.skipUTF8Validation
    });
  });

  req.end();
}

/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */
function emitErrorAndClose(websocket, err) {
  websocket._readyState = WebSocket.CLOSING;
  websocket.emit('error', err);
  websocket.emitClose();
}

/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */
function netConnect(options) {
  options.path = options.socketPath;
  return net.connect(options);
}

/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */
function tlsConnect(options) {
  options.path = undefined;

  if (!options.servername && options.servername !== '') {
    options.servername = net.isIP(options.host) ? '' : options.host;
  }

  return tls.connect(options);
}

/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */
function abortHandshake(websocket, stream, message) {
  websocket._readyState = WebSocket.CLOSING;

  const err = new Error(message);
  Error.captureStackTrace(err, abortHandshake);

  if (stream.setHeader) {
    stream[kAborted] = true;
    stream.abort();

    if (stream.socket && !stream.socket.destroyed) {
      //
      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
      // called after the request completed. See
      // https://github.com/websockets/ws/issues/1869.
      //
      stream.socket.destroy();
    }

    process.nextTick(emitErrorAndClose, websocket, err);
  } else {
    stream.destroy(err);
    stream.once('error', websocket.emit.bind(websocket, 'error'));
    stream.once('close', websocket.emitClose.bind(websocket));
  }
}

/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */
function sendAfterClose(websocket, data, cb) {
  if (data) {
    const length = toBuffer(data).length;

    //
    // The `_bufferedAmount` property is used only when the peer is a client and
    // the opening handshake fails. Under these circumstances, in fact, the
    // `setSocket()` method is not called, so the `_socket` and `_sender`
    // properties are set to `null`.
    //
    if (websocket._socket) websocket._sender._bufferedBytes += length;
    else websocket._bufferedAmount += length;
  }

  if (cb) {
    const err = new Error(
      `WebSocket is not open: readyState ${websocket.readyState} ` +
        `(${readyStates[websocket.readyState]})`
    );
    cb(err);
  }
}

/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */
function receiverOnConclude(code, reason) {
  const websocket = this[kWebSocket];

  websocket._closeFrameReceived = true;
  websocket._closeMessage = reason;
  websocket._closeCode = code;

  if (websocket._socket[kWebSocket] === undefined) return;

  websocket._socket.removeListener('data', socketOnData);
  process.nextTick(resume, websocket._socket);

  if (code === 1005) websocket.close();
  else websocket.close(code, reason);
}

/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */
function receiverOnDrain() {
  const websocket = this[kWebSocket];

  if (!websocket.isPaused) websocket._socket.resume();
}

/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */
function receiverOnError(err) {
  const websocket = this[kWebSocket];

  if (websocket._socket[kWebSocket] !== undefined) {
    websocket._socket.removeListener('data', socketOnData);

    //
    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
    // https://github.com/websockets/ws/issues/1940.
    //
    process.nextTick(resume, websocket._socket);

    websocket.close(err[kStatusCode]);
  }

  websocket.emit('error', err);
}

/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */
function receiverOnFinish() {
  this[kWebSocket].emitClose();
}

/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */
function receiverOnMessage(data, isBinary) {
  this[kWebSocket].emit('message', data, isBinary);
}

/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */
function receiverOnPing(data) {
  const websocket = this[kWebSocket];

  websocket.pong(data, !websocket._isServer, NOOP);
  websocket.emit('ping', data);
}

/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */
function receiverOnPong(data) {
  this[kWebSocket].emit('pong', data);
}

/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */
function resume(stream) {
  stream.resume();
}

/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */
function socketOnClose() {
  const websocket = this[kWebSocket];

  this.removeListener('close', socketOnClose);
  this.removeListener('data', socketOnData);
  this.removeListener('end', socketOnEnd);

  websocket._readyState = WebSocket.CLOSING;

  let chunk;

  //
  // The close frame might not have been received or the `'end'` event emitted,
  // for example, if the socket was destroyed due to an error. Ensure that the
  // `receiver` stream is closed after writing any remaining buffered data to
  // it. If the readable side of the socket is in flowing mode then there is no
  // buffered data as everything has been already written and `readable.read()`
  // will return `null`. If instead, the socket is paused, any possible buffered
  // data will be read as a single chunk.
  //
  if (
    !this._readableState.endEmitted &&
    !websocket._closeFrameReceived &&
    !websocket._receiver._writableState.errorEmitted &&
    (chunk = websocket._socket.read()) !== null
  ) {
    websocket._receiver.write(chunk);
  }

  websocket._receiver.end();

  this[kWebSocket] = undefined;

  clearTimeout(websocket._closeTimer);

  if (
    websocket._receiver._writableState.finished ||
    websocket._receiver._writableState.errorEmitted
  ) {
    websocket.emitClose();
  } else {
    websocket._receiver.on('error', receiverOnFinish);
    websocket._receiver.on('finish', receiverOnFinish);
  }
}

/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function socketOnData(chunk) {
  if (!this[kWebSocket]._receiver.write(chunk)) {
    this.pause();
  }
}

/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */
function socketOnEnd() {
  const websocket = this[kWebSocket];

  websocket._readyState = WebSocket.CLOSING;
  websocket._receiver.end();
  this.end();
}

/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */
function socketOnError() {
  const websocket = this[kWebSocket];

  this.removeListener('error', socketOnError);
  this.on('error', NOOP);

  if (websocket) {
    websocket._readyState = WebSocket.CLOSING;
    this.destroy();
  }
}


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:tty":
/*!***************************!*\
  !*** external "node:tty" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:tty");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "bufferutil":
/*!*****************************!*\
  !*** external "bufferutil" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
if(typeof bufferutil === 'undefined') { var e = new Error("Cannot find module 'bufferutil'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = bufferutil;

/***/ }),

/***/ "utf-8-validate":
/*!*********************************!*\
  !*** external "utf-8-validate" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
if(typeof utf-8-validate === 'undefined') { var e = new Error("Cannot find module 'utf-8-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = utf-8-validate;

/***/ }),

/***/ "../../node_modules/engine.io-parser/build/cjs/commons.js":
/*!****************************************************************!*\
  !*** ../../node_modules/engine.io-parser/build/cjs/commons.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
exports.PACKET_TYPES = PACKET_TYPES;
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
exports.ERROR_PACKET = ERROR_PACKET;


/***/ }),

/***/ "../../node_modules/engine.io-parser/build/cjs/decodePacket.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/engine.io-parser/build/cjs/decodePacket.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodePacket = void 0;
const commons_js_1 = __webpack_require__(/*! ./commons.js */ "../../node_modules/engine.io-parser/build/cjs/commons.js");
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        const buffer = Buffer.from(encodedPacket.substring(1), "base64");
        return {
            type: "message",
            data: mapBinary(buffer, binaryType)
        };
    }
    if (!commons_js_1.PACKET_TYPES_REVERSE[type]) {
        return commons_js_1.ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: commons_js_1.PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        }
        : {
            type: commons_js_1.PACKET_TYPES_REVERSE[type]
        };
};
exports.decodePacket = decodePacket;
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "arraybuffer":
            if (data instanceof ArrayBuffer) {
                // from WebSocket & binaryType "arraybuffer"
                return data;
            }
            else if (Buffer.isBuffer(data)) {
                // from HTTP long-polling
                return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
        case "nodebuffer":
        default:
            if (Buffer.isBuffer(data)) {
                // from HTTP long-polling or WebSocket & binaryType "nodebuffer" (default)
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return Buffer.from(data);
            }
    }
};


/***/ }),

/***/ "../../node_modules/engine.io-parser/build/cjs/encodePacket.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/engine.io-parser/build/cjs/encodePacket.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodePacketToBinary = exports.encodePacket = void 0;
const commons_js_1 = __webpack_require__(/*! ./commons.js */ "../../node_modules/engine.io-parser/build/cjs/commons.js");
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        return callback(supportsBinary ? data : "b" + toBuffer(data, true).toString("base64"));
    }
    // plain string
    return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
};
exports.encodePacket = encodePacket;
const toBuffer = (data, forceBufferConversion) => {
    if (Buffer.isBuffer(data) ||
        (data instanceof Uint8Array && !forceBufferConversion)) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return Buffer.from(data);
    }
    else {
        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    }
};
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
        return callback(toBuffer(packet.data, false));
    }
    (0, exports.encodePacket)(packet, true, encoded => {
        if (!TEXT_ENCODER) {
            // lazily created for compatibility with Node.js 10
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}
exports.encodePacketToBinary = encodePacketToBinary;


/***/ }),

/***/ "../../node_modules/engine.io-parser/build/cjs/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/engine.io-parser/build/cjs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacketToBinary = exports.encodePacket = exports.protocol = exports.decodePacketFromBinary = void 0;
const encodePacket_js_1 = __webpack_require__(/*! ./encodePacket.js */ "../../node_modules/engine.io-parser/build/cjs/encodePacket.js");
Object.defineProperty(exports, "encodePacket", ({ enumerable: true, get: function () { return encodePacket_js_1.encodePacket; } }));
Object.defineProperty(exports, "encodePacketToBinary", ({ enumerable: true, get: function () { return encodePacket_js_1.encodePacketToBinary; } }));
const decodePacket_js_1 = __webpack_require__(/*! ./decodePacket.js */ "../../node_modules/engine.io-parser/build/cjs/decodePacket.js");
Object.defineProperty(exports, "decodePacket", ({ enumerable: true, get: function () { return decodePacket_js_1.decodePacket; } }));
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0, encodePacket_js_1.encodePacket)(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
exports.encodePayload = encodePayload;
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
exports.decodePayload = decodePayload;
let TEXT_DECODER;
function decodePacketFromBinary(data, isBinary, binaryType) {
    if (!TEXT_DECODER) {
        // lazily created for compatibility with old browser platforms
        TEXT_DECODER = new TextDecoder();
    }
    // 48 === "0".charCodeAt(0) (OPEN packet type)
    // 54 === "6".charCodeAt(0) (NOOP packet type)
    const isPlainBinary = isBinary || data[0] < 48 || data[0] > 54;
    return (0, decodePacket_js_1.decodePacket)(isPlainBinary ? data : TEXT_DECODER.decode(data), binaryType);
}
exports.decodePacketFromBinary = decodePacketFromBinary;
exports.protocol = 4;


/***/ }),

/***/ "../../node_modules/engine.io/build/engine.io.js":
/*!*******************************************************!*\
  !*** ../../node_modules/engine.io/build/engine.io.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.protocol = exports.Transport = exports.Socket = exports.uServer = exports.parser = exports.attach = exports.listen = exports.transports = exports.Server = void 0;
const http_1 = __webpack_require__(/*! http */ "http");
const server_1 = __webpack_require__(/*! ./server */ "../../node_modules/engine.io/build/server.js");
Object.defineProperty(exports, "Server", ({ enumerable: true, get: function () { return server_1.Server; } }));
const index_1 = __webpack_require__(/*! ./transports/index */ "../../node_modules/engine.io/build/transports/index.js");
exports.transports = index_1.default;
const parser = __webpack_require__(/*! engine.io-parser */ "../../node_modules/engine.io-parser/build/cjs/index.js");
exports.parser = parser;
var userver_1 = __webpack_require__(/*! ./userver */ "../../node_modules/engine.io/build/userver.js");
Object.defineProperty(exports, "uServer", ({ enumerable: true, get: function () { return userver_1.uServer; } }));
var socket_1 = __webpack_require__(/*! ./socket */ "../../node_modules/engine.io/build/socket.js");
Object.defineProperty(exports, "Socket", ({ enumerable: true, get: function () { return socket_1.Socket; } }));
var transport_1 = __webpack_require__(/*! ./transport */ "../../node_modules/engine.io/build/transport.js");
Object.defineProperty(exports, "Transport", ({ enumerable: true, get: function () { return transport_1.Transport; } }));
exports.protocol = parser.protocol;
/**
 * Creates an http.Server exclusively used for WS upgrades.
 *
 * @param {Number} port
 * @param {Function} callback
 * @param {Object} options
 * @return {Server} websocket.io server
 * @api public
 */
function listen(port, options, fn) {
    if ("function" === typeof options) {
        fn = options;
        options = {};
    }
    const server = (0, http_1.createServer)(function (req, res) {
        res.writeHead(501);
        res.end("Not Implemented");
    });
    // create engine server
    const engine = attach(server, options);
    engine.httpServer = server;
    server.listen(port, fn);
    return engine;
}
exports.listen = listen;
/**
 * Captures upgrade requests for a http.Server.
 *
 * @param {http.Server} server
 * @param {Object} options
 * @return {Server} engine server
 * @api public
 */
function attach(server, options) {
    const engine = new server_1.Server(options);
    engine.attach(server, options);
    return engine;
}
exports.attach = attach;


/***/ }),

/***/ "../../node_modules/engine.io/build/parser-v3/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/engine.io/build/parser-v3/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// imported from https://github.com/socketio/engine.io-parser/tree/2.2.x
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodePayloadAsBinary = exports.encodePayloadAsBinary = exports.decodePayload = exports.encodePayload = exports.decodeBase64Packet = exports.decodePacket = exports.encodeBase64Packet = exports.encodePacket = exports.packets = exports.protocol = void 0;
/**
 * Module dependencies.
 */
var utf8 = __webpack_require__(/*! ./utf8 */ "../../node_modules/engine.io/build/parser-v3/utf8.js");
/**
 * Current protocol version.
 */
exports.protocol = 3;
const hasBinary = (packets) => {
    for (const packet of packets) {
        if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
            return true;
        }
    }
    return false;
};
/**
 * Packet types.
 */
exports.packets = {
    open: 0 // non-ws
    ,
    close: 1 // non-ws
    ,
    ping: 2,
    pong: 3,
    message: 4,
    upgrade: 5,
    noop: 6
};
var packetslist = Object.keys(exports.packets);
/**
 * Premade error packet.
 */
var err = { type: 'error', data: 'parser error' };
const EMPTY_BUFFER = Buffer.concat([]);
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */
function encodePacket(packet, supportsBinary, utf8encode, callback) {
    if (typeof supportsBinary === 'function') {
        callback = supportsBinary;
        supportsBinary = null;
    }
    if (typeof utf8encode === 'function') {
        callback = utf8encode;
        utf8encode = null;
    }
    if (Buffer.isBuffer(packet.data)) {
        return encodeBuffer(packet, supportsBinary, callback);
    }
    else if (packet.data && (packet.data.buffer || packet.data) instanceof ArrayBuffer) {
        return encodeBuffer({ type: packet.type, data: arrayBufferToBuffer(packet.data) }, supportsBinary, callback);
    }
    // Sending data as a utf-8 string
    var encoded = exports.packets[packet.type];
    // data fragment is optional
    if (undefined !== packet.data) {
        encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
    }
    return callback('' + encoded);
}
exports.encodePacket = encodePacket;
;
/**
 * Encode Buffer data
 */
function encodeBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
        return encodeBase64Packet(packet, callback);
    }
    var data = packet.data;
    var typeBuffer = Buffer.allocUnsafe(1);
    typeBuffer[0] = exports.packets[packet.type];
    return callback(Buffer.concat([typeBuffer, data]));
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */
function encodeBase64Packet(packet, callback) {
    var data = Buffer.isBuffer(packet.data) ? packet.data : arrayBufferToBuffer(packet.data);
    var message = 'b' + exports.packets[packet.type];
    message += data.toString('base64');
    return callback(message);
}
exports.encodeBase64Packet = encodeBase64Packet;
;
/**
 * Decodes a packet. Data also available as an ArrayBuffer if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */
function decodePacket(data, binaryType, utf8decode) {
    if (data === undefined) {
        return err;
    }
    var type;
    // String data
    if (typeof data === 'string') {
        type = data.charAt(0);
        if (type === 'b') {
            return decodeBase64Packet(data.slice(1), binaryType);
        }
        if (utf8decode) {
            data = tryDecode(data);
            if (data === false) {
                return err;
            }
        }
        if (Number(type) != type || !packetslist[type]) {
            return err;
        }
        if (data.length > 1) {
            return { type: packetslist[type], data: data.slice(1) };
        }
        else {
            return { type: packetslist[type] };
        }
    }
    // Binary data
    if (binaryType === 'arraybuffer') {
        // wrap Buffer/ArrayBuffer data into an Uint8Array
        var intArray = new Uint8Array(data);
        type = intArray[0];
        return { type: packetslist[type], data: intArray.buffer.slice(1) };
    }
    if (data instanceof ArrayBuffer) {
        data = arrayBufferToBuffer(data);
    }
    type = data[0];
    return { type: packetslist[type], data: data.slice(1) };
}
exports.decodePacket = decodePacket;
;
function tryDecode(data) {
    try {
        data = utf8.decode(data, { strict: false });
    }
    catch (e) {
        return false;
    }
    return data;
}
/**
 * Decodes a packet encoded in a base64 string.
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */
function decodeBase64Packet(msg, binaryType) {
    var type = packetslist[msg.charAt(0)];
    var data = Buffer.from(msg.slice(1), 'base64');
    if (binaryType === 'arraybuffer') {
        var abv = new Uint8Array(data.length);
        for (var i = 0; i < abv.length; i++) {
            abv[i] = data[i];
        }
        // @ts-ignore
        data = abv.buffer;
    }
    return { type: type, data: data };
}
exports.decodeBase64Packet = decodeBase64Packet;
;
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */
function encodePayload(packets, supportsBinary, callback) {
    if (typeof supportsBinary === 'function') {
        callback = supportsBinary;
        supportsBinary = null;
    }
    if (supportsBinary && hasBinary(packets)) {
        return encodePayloadAsBinary(packets, callback);
    }
    if (!packets.length) {
        return callback('0:');
    }
    function encodeOne(packet, doneCallback) {
        encodePacket(packet, supportsBinary, false, function (message) {
            doneCallback(null, setLengthHeader(message));
        });
    }
    map(packets, encodeOne, function (err, results) {
        return callback(results.join(''));
    });
}
exports.encodePayload = encodePayload;
;
function setLengthHeader(message) {
    return message.length + ':' + message;
}
/**
 * Async array map using after
 */
function map(ary, each, done) {
    const results = new Array(ary.length);
    let count = 0;
    for (let i = 0; i < ary.length; i++) {
        each(ary[i], (error, msg) => {
            results[i] = msg;
            if (++count === ary.length) {
                done(null, results);
            }
        });
    }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */
function decodePayload(data, binaryType, callback) {
    if (typeof data !== 'string') {
        return decodePayloadAsBinary(data, binaryType, callback);
    }
    if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
    }
    if (data === '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
    }
    var length = '', n, msg, packet;
    for (var i = 0, l = data.length; i < l; i++) {
        var chr = data.charAt(i);
        if (chr !== ':') {
            length += chr;
            continue;
        }
        // @ts-ignore
        if (length === '' || (length != (n = Number(length)))) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
        }
        msg = data.slice(i + 1, i + 1 + n);
        if (length != msg.length) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
        }
        if (msg.length) {
            packet = decodePacket(msg, binaryType, false);
            if (err.type === packet.type && err.data === packet.data) {
                // parser error in individual packet - ignoring payload
                return callback(err, 0, 1);
            }
            var more = callback(packet, i + n, l);
            if (false === more)
                return;
        }
        // advance cursor
        i += n;
        length = '';
    }
    if (length !== '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
    }
}
exports.decodePayload = decodePayload;
;
/**
 *
 * Converts a buffer to a utf8.js encoded string
 *
 * @api private
 */
function bufferToString(buffer) {
    var str = '';
    for (var i = 0, l = buffer.length; i < l; i++) {
        str += String.fromCharCode(buffer[i]);
    }
    return str;
}
/**
 *
 * Converts a utf8.js encoded string to a buffer
 *
 * @api private
 */
function stringToBuffer(string) {
    var buf = Buffer.allocUnsafe(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
        buf.writeUInt8(string.charCodeAt(i), i);
    }
    return buf;
}
/**
 *
 * Converts an ArrayBuffer to a Buffer
 *
 * @api private
 */
function arrayBufferToBuffer(data) {
    // data is either an ArrayBuffer or ArrayBufferView.
    var length = data.byteLength || data.length;
    var offset = data.byteOffset || 0;
    return Buffer.from(data.buffer || data, offset, length);
}
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {Buffer} encoded payload
 * @api private
 */
function encodePayloadAsBinary(packets, callback) {
    if (!packets.length) {
        return callback(EMPTY_BUFFER);
    }
    map(packets, encodeOneBinaryPacket, function (err, results) {
        return callback(Buffer.concat(results));
    });
}
exports.encodePayloadAsBinary = encodePayloadAsBinary;
;
function encodeOneBinaryPacket(p, doneCallback) {
    function onBinaryPacketEncode(packet) {
        var encodingLength = '' + packet.length;
        var sizeBuffer;
        if (typeof packet === 'string') {
            sizeBuffer = Buffer.allocUnsafe(encodingLength.length + 2);
            sizeBuffer[0] = 0; // is a string (not true binary = 0)
            for (var i = 0; i < encodingLength.length; i++) {
                sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
            }
            sizeBuffer[sizeBuffer.length - 1] = 255;
            return doneCallback(null, Buffer.concat([sizeBuffer, stringToBuffer(packet)]));
        }
        sizeBuffer = Buffer.allocUnsafe(encodingLength.length + 2);
        sizeBuffer[0] = 1; // is binary (true binary = 1)
        for (var i = 0; i < encodingLength.length; i++) {
            sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
        }
        sizeBuffer[sizeBuffer.length - 1] = 255;
        doneCallback(null, Buffer.concat([sizeBuffer, packet]));
    }
    encodePacket(p, true, true, onBinaryPacketEncode);
}
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary

 * @param {Buffer} data, callback method
 * @api public
 */
function decodePayloadAsBinary(data, binaryType, callback) {
    if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
    }
    var bufferTail = data;
    var buffers = [];
    var i;
    while (bufferTail.length > 0) {
        var strLen = '';
        var isString = bufferTail[0] === 0;
        for (i = 1;; i++) {
            if (bufferTail[i] === 255)
                break;
            // 310 = char length of Number.MAX_VALUE
            if (strLen.length > 310) {
                return callback(err, 0, 1);
            }
            strLen += '' + bufferTail[i];
        }
        bufferTail = bufferTail.slice(strLen.length + 1);
        var msgLength = parseInt(strLen, 10);
        var msg = bufferTail.slice(1, msgLength + 1);
        if (isString)
            msg = bufferToString(msg);
        buffers.push(msg);
        bufferTail = bufferTail.slice(msgLength + 1);
    }
    var total = buffers.length;
    for (i = 0; i < total; i++) {
        var buffer = buffers[i];
        callback(decodePacket(buffer, binaryType, true), i, total);
    }
}
exports.decodePayloadAsBinary = decodePayloadAsBinary;
;


/***/ }),

/***/ "../../node_modules/engine.io/build/parser-v3/utf8.js":
/*!************************************************************!*\
  !*** ../../node_modules/engine.io/build/parser-v3/utf8.js ***!
  \************************************************************/
/***/ ((module) => {

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode;
// Taken from https://mths.be/punycode
function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    var value;
    var extra;
    while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            }
            else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
            }
        }
        else {
            output.push(value);
        }
    }
    return output;
}
// Taken from https://mths.be/punycode
function ucs2encode(array) {
    var length = array.length;
    var index = -1;
    var value;
    var output = '';
    while (++index < length) {
        value = array[index];
        if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
        }
        output += stringFromCharCode(value);
    }
    return output;
}
function checkScalarValue(codePoint, strict) {
    if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
        if (strict) {
            throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
                ' is not a scalar value');
        }
        return false;
    }
    return true;
}
/*--------------------------------------------------------------------------*/
function createByte(codePoint, shift) {
    return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}
function encodeCodePoint(codePoint, strict) {
    if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
        return stringFromCharCode(codePoint);
    }
    var symbol = '';
    if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
        symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
    }
    else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
        if (!checkScalarValue(codePoint, strict)) {
            codePoint = 0xFFFD;
        }
        symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
        symbol += createByte(codePoint, 6);
    }
    else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
        symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
        symbol += createByte(codePoint, 12);
        symbol += createByte(codePoint, 6);
    }
    symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
    return symbol;
}
function utf8encode(string, opts) {
    opts = opts || {};
    var strict = false !== opts.strict;
    var codePoints = ucs2decode(string);
    var length = codePoints.length;
    var index = -1;
    var codePoint;
    var byteString = '';
    while (++index < length) {
        codePoint = codePoints[index];
        byteString += encodeCodePoint(codePoint, strict);
    }
    return byteString;
}
/*--------------------------------------------------------------------------*/
function readContinuationByte() {
    if (byteIndex >= byteCount) {
        throw Error('Invalid byte index');
    }
    var continuationByte = byteArray[byteIndex] & 0xFF;
    byteIndex++;
    if ((continuationByte & 0xC0) == 0x80) {
        return continuationByte & 0x3F;
    }
    // If we end up here, it’s not a continuation byte
    throw Error('Invalid continuation byte');
}
function decodeSymbol(strict) {
    var byte1;
    var byte2;
    var byte3;
    var byte4;
    var codePoint;
    if (byteIndex > byteCount) {
        throw Error('Invalid byte index');
    }
    if (byteIndex == byteCount) {
        return false;
    }
    // Read first byte
    byte1 = byteArray[byteIndex] & 0xFF;
    byteIndex++;
    // 1-byte sequence (no continuation bytes)
    if ((byte1 & 0x80) == 0) {
        return byte1;
    }
    // 2-byte sequence
    if ((byte1 & 0xE0) == 0xC0) {
        byte2 = readContinuationByte();
        codePoint = ((byte1 & 0x1F) << 6) | byte2;
        if (codePoint >= 0x80) {
            return codePoint;
        }
        else {
            throw Error('Invalid continuation byte');
        }
    }
    // 3-byte sequence (may include unpaired surrogates)
    if ((byte1 & 0xF0) == 0xE0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
        if (codePoint >= 0x0800) {
            return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
        }
        else {
            throw Error('Invalid continuation byte');
        }
    }
    // 4-byte sequence
    if ((byte1 & 0xF8) == 0xF0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        byte4 = readContinuationByte();
        codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
            (byte3 << 0x06) | byte4;
        if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
            return codePoint;
        }
    }
    throw Error('Invalid UTF-8 detected');
}
var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
    opts = opts || {};
    var strict = false !== opts.strict;
    byteArray = ucs2decode(byteString);
    byteCount = byteArray.length;
    byteIndex = 0;
    var codePoints = [];
    var tmp;
    while ((tmp = decodeSymbol(strict)) !== false) {
        codePoints.push(tmp);
    }
    return ucs2encode(codePoints);
}
module.exports = {
    version: '2.1.2',
    encode: utf8encode,
    decode: utf8decode
};


/***/ }),

/***/ "../../node_modules/engine.io/build/server.js":
/*!****************************************************!*\
  !*** ../../node_modules/engine.io/build/server.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Server = exports.BaseServer = void 0;
const qs = __webpack_require__(/*! querystring */ "querystring");
const url_1 = __webpack_require__(/*! url */ "url");
const base64id = __webpack_require__(/*! base64id */ "../../node_modules/base64id/lib/base64id.js");
const transports_1 = __webpack_require__(/*! ./transports */ "../../node_modules/engine.io/build/transports/index.js");
const events_1 = __webpack_require__(/*! events */ "events");
const socket_1 = __webpack_require__(/*! ./socket */ "../../node_modules/engine.io/build/socket.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const cookie_1 = __webpack_require__(/*! cookie */ "../../node_modules/engine.io/node_modules/cookie/index.js");
const ws_1 = __webpack_require__(/*! ws */ "../../node_modules/ws/index.js");
const webtransport_1 = __webpack_require__(/*! ./transports/webtransport */ "../../node_modules/engine.io/build/transports/webtransport.js");
const debug = (0, debug_1.default)("engine");
const kResponseHeaders = Symbol("responseHeaders");
const TEXT_DECODER = new TextDecoder();
function parseSessionId(handshake) {
    if (handshake.startsWith("0{")) {
        try {
            const parsed = JSON.parse(handshake.substring(1));
            if (typeof parsed.sid === "string") {
                return parsed.sid;
            }
        }
        catch (e) { }
    }
}
class BaseServer extends events_1.EventEmitter {
    /**
     * Server constructor.
     *
     * @param {Object} opts - options
     * @api public
     */
    constructor(opts = {}) {
        super();
        this.middlewares = [];
        this.clients = {};
        this.clientsCount = 0;
        this.opts = Object.assign({
            wsEngine: ws_1.Server,
            pingTimeout: 20000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 1e6,
            transports: ["polling", "websocket"],
            allowUpgrades: true,
            httpCompression: {
                threshold: 1024,
            },
            cors: false,
            allowEIO3: false,
        }, opts);
        if (opts.cookie) {
            this.opts.cookie = Object.assign({
                name: "io",
                path: "/",
                // @ts-ignore
                httpOnly: opts.cookie.path !== false,
                sameSite: "lax",
            }, opts.cookie);
        }
        if (this.opts.cors) {
            this.use(__webpack_require__(/*! cors */ "../../node_modules/cors/lib/index.js")(this.opts.cors));
        }
        if (opts.perMessageDeflate) {
            this.opts.perMessageDeflate = Object.assign({
                threshold: 1024,
            }, opts.perMessageDeflate);
        }
        this.init();
    }
    /**
     * Compute the pathname of the requests that are handled by the server
     * @param options
     * @protected
     */
    _computePath(options) {
        let path = (options.path || "/engine.io").replace(/\/$/, "");
        if (options.addTrailingSlash !== false) {
            // normalize path
            path += "/";
        }
        return path;
    }
    /**
     * Returns a list of available transports for upgrade given a certain transport.
     *
     * @return {Array}
     * @api public
     */
    upgrades(transport) {
        if (!this.opts.allowUpgrades)
            return [];
        return transports_1.default[transport].upgradesTo || [];
    }
    /**
     * Verifies a request.
     *
     * @param {http.IncomingMessage}
     * @return {Boolean} whether the request is valid
     * @api private
     */
    verify(req, upgrade, fn) {
        // transport check
        const transport = req._query.transport;
        // WebTransport does not go through the verify() method, see the onWebTransportSession() method
        if (!~this.opts.transports.indexOf(transport) ||
            transport === "webtransport") {
            debug('unknown transport "%s"', transport);
            return fn(Server.errors.UNKNOWN_TRANSPORT, { transport });
        }
        // 'Origin' header check
        const isOriginInvalid = checkInvalidHeaderChar(req.headers.origin);
        if (isOriginInvalid) {
            const origin = req.headers.origin;
            req.headers.origin = null;
            debug("origin header invalid");
            return fn(Server.errors.BAD_REQUEST, {
                name: "INVALID_ORIGIN",
                origin,
            });
        }
        // sid check
        const sid = req._query.sid;
        if (sid) {
            if (!this.clients.hasOwnProperty(sid)) {
                debug('unknown sid "%s"', sid);
                return fn(Server.errors.UNKNOWN_SID, {
                    sid,
                });
            }
            const previousTransport = this.clients[sid].transport.name;
            if (!upgrade && previousTransport !== transport) {
                debug("bad request: unexpected transport without upgrade");
                return fn(Server.errors.BAD_REQUEST, {
                    name: "TRANSPORT_MISMATCH",
                    transport,
                    previousTransport,
                });
            }
        }
        else {
            // handshake is GET only
            if ("GET" !== req.method) {
                return fn(Server.errors.BAD_HANDSHAKE_METHOD, {
                    method: req.method,
                });
            }
            if (transport === "websocket" && !upgrade) {
                debug("invalid transport upgrade");
                return fn(Server.errors.BAD_REQUEST, {
                    name: "TRANSPORT_HANDSHAKE_ERROR",
                });
            }
            if (!this.opts.allowRequest)
                return fn();
            return this.opts.allowRequest(req, (message, success) => {
                if (!success) {
                    return fn(Server.errors.FORBIDDEN, {
                        message,
                    });
                }
                fn();
            });
        }
        fn();
    }
    /**
     * Adds a new middleware.
     *
     * @example
     * import helmet from "helmet";
     *
     * engine.use(helmet());
     *
     * @param fn
     */
    use(fn) {
        this.middlewares.push(fn);
    }
    /**
     * Apply the middlewares to the request.
     *
     * @param req
     * @param res
     * @param callback
     * @protected
     */
    _applyMiddlewares(req, res, callback) {
        if (this.middlewares.length === 0) {
            debug("no middleware to apply, skipping");
            return callback();
        }
        const apply = (i) => {
            debug("applying middleware n°%d", i + 1);
            this.middlewares[i](req, res, (err) => {
                if (err) {
                    return callback(err);
                }
                if (i + 1 < this.middlewares.length) {
                    apply(i + 1);
                }
                else {
                    callback();
                }
            });
        };
        apply(0);
    }
    /**
     * Closes all clients.
     *
     * @api public
     */
    close() {
        debug("closing all open clients");
        for (let i in this.clients) {
            if (this.clients.hasOwnProperty(i)) {
                this.clients[i].close(true);
            }
        }
        this.cleanup();
        return this;
    }
    /**
     * generate a socket id.
     * Overwrite this method to generate your custom socket id
     *
     * @param {Object} request object
     * @api public
     */
    generateId(req) {
        return base64id.generateId();
    }
    /**
     * Handshakes a new client.
     *
     * @param {String} transport name
     * @param {Object} request object
     * @param {Function} closeConnection
     *
     * @api protected
     */
    async handshake(transportName, req, closeConnection) {
        const protocol = req._query.EIO === "4" ? 4 : 3; // 3rd revision by default
        if (protocol === 3 && !this.opts.allowEIO3) {
            debug("unsupported protocol version");
            this.emit("connection_error", {
                req,
                code: Server.errors.UNSUPPORTED_PROTOCOL_VERSION,
                message: Server.errorMessages[Server.errors.UNSUPPORTED_PROTOCOL_VERSION],
                context: {
                    protocol,
                },
            });
            closeConnection(Server.errors.UNSUPPORTED_PROTOCOL_VERSION);
            return;
        }
        let id;
        try {
            id = await this.generateId(req);
        }
        catch (e) {
            debug("error while generating an id");
            this.emit("connection_error", {
                req,
                code: Server.errors.BAD_REQUEST,
                message: Server.errorMessages[Server.errors.BAD_REQUEST],
                context: {
                    name: "ID_GENERATION_ERROR",
                    error: e,
                },
            });
            closeConnection(Server.errors.BAD_REQUEST);
            return;
        }
        debug('handshaking client "%s"', id);
        try {
            var transport = this.createTransport(transportName, req);
            if ("polling" === transportName) {
                transport.maxHttpBufferSize = this.opts.maxHttpBufferSize;
                transport.httpCompression = this.opts.httpCompression;
            }
            else if ("websocket" === transportName) {
                transport.perMessageDeflate = this.opts.perMessageDeflate;
            }
            if (req._query && req._query.b64) {
                transport.supportsBinary = false;
            }
            else {
                transport.supportsBinary = true;
            }
        }
        catch (e) {
            debug('error handshaking to transport "%s"', transportName);
            this.emit("connection_error", {
                req,
                code: Server.errors.BAD_REQUEST,
                message: Server.errorMessages[Server.errors.BAD_REQUEST],
                context: {
                    name: "TRANSPORT_HANDSHAKE_ERROR",
                    error: e,
                },
            });
            closeConnection(Server.errors.BAD_REQUEST);
            return;
        }
        const socket = new socket_1.Socket(id, this, transport, req, protocol);
        transport.on("headers", (headers, req) => {
            const isInitialRequest = !req._query.sid;
            if (isInitialRequest) {
                if (this.opts.cookie) {
                    headers["Set-Cookie"] = [
                        // @ts-ignore
                        (0, cookie_1.serialize)(this.opts.cookie.name, id, this.opts.cookie),
                    ];
                }
                this.emit("initial_headers", headers, req);
            }
            this.emit("headers", headers, req);
        });
        transport.onRequest(req);
        this.clients[id] = socket;
        this.clientsCount++;
        socket.once("close", () => {
            delete this.clients[id];
            this.clientsCount--;
        });
        this.emit("connection", socket);
        return transport;
    }
    async onWebTransportSession(session) {
        const timeout = setTimeout(() => {
            debug("the client failed to establish a bidirectional stream in the given period");
            session.close();
        }, this.opts.upgradeTimeout);
        const streamReader = session.incomingBidirectionalStreams.getReader();
        const result = await streamReader.read();
        if (result.done) {
            debug("session is closed");
            return;
        }
        const stream = result.value;
        const reader = stream.readable.getReader();
        // reading the first packet of the stream
        const { value, done } = await reader.read();
        if (done) {
            debug("stream is closed");
            return;
        }
        clearTimeout(timeout);
        const handshake = TEXT_DECODER.decode(value);
        // handshake is either
        // "0" => new session
        // '0{"sid":"xxxx"}' => upgrade
        if (handshake === "0") {
            const transport = new webtransport_1.WebTransport(session, stream, reader);
            // note: we cannot use "this.generateId()", because there is no "req" argument
            const id = base64id.generateId();
            debug('handshaking client "%s" (WebTransport)', id);
            const socket = new socket_1.Socket(id, this, transport, null, 4);
            this.clients[id] = socket;
            this.clientsCount++;
            socket.once("close", () => {
                delete this.clients[id];
                this.clientsCount--;
            });
            this.emit("connection", socket);
            return;
        }
        const sid = parseSessionId(handshake);
        if (!sid) {
            debug("invalid WebTransport handshake");
            return session.close();
        }
        const client = this.clients[sid];
        if (!client) {
            debug("upgrade attempt for closed client");
            session.close();
        }
        else if (client.upgrading) {
            debug("transport has already been trying to upgrade");
            session.close();
        }
        else if (client.upgraded) {
            debug("transport had already been upgraded");
            session.close();
        }
        else {
            debug("upgrading existing transport");
            const transport = new webtransport_1.WebTransport(session, stream, reader);
            client.maybeUpgrade(transport);
        }
    }
}
exports.BaseServer = BaseServer;
/**
 * Protocol errors mappings.
 */
BaseServer.errors = {
    UNKNOWN_TRANSPORT: 0,
    UNKNOWN_SID: 1,
    BAD_HANDSHAKE_METHOD: 2,
    BAD_REQUEST: 3,
    FORBIDDEN: 4,
    UNSUPPORTED_PROTOCOL_VERSION: 5,
};
BaseServer.errorMessages = {
    0: "Transport unknown",
    1: "Session ID unknown",
    2: "Bad handshake method",
    3: "Bad request",
    4: "Forbidden",
    5: "Unsupported protocol version",
};
/**
 * Exposes a subset of the http.ServerResponse interface, in order to be able to apply the middlewares to an upgrade
 * request.
 *
 * @see https://nodejs.org/api/http.html#class-httpserverresponse
 */
class WebSocketResponse {
    constructor(req, socket) {
        this.req = req;
        this.socket = socket;
        // temporarily store the response headers on the req object (see the "headers" event)
        req[kResponseHeaders] = {};
    }
    setHeader(name, value) {
        this.req[kResponseHeaders][name] = value;
    }
    getHeader(name) {
        return this.req[kResponseHeaders][name];
    }
    removeHeader(name) {
        delete this.req[kResponseHeaders][name];
    }
    write() { }
    writeHead() { }
    end() {
        // we could return a proper error code, but the WebSocket client will emit an "error" event anyway.
        this.socket.destroy();
    }
}
class Server extends BaseServer {
    /**
     * Initialize websocket server
     *
     * @api protected
     */
    init() {
        if (!~this.opts.transports.indexOf("websocket"))
            return;
        if (this.ws)
            this.ws.close();
        this.ws = new this.opts.wsEngine({
            noServer: true,
            clientTracking: false,
            perMessageDeflate: this.opts.perMessageDeflate,
            maxPayload: this.opts.maxHttpBufferSize,
        });
        if (typeof this.ws.on === "function") {
            this.ws.on("headers", (headersArray, req) => {
                // note: 'ws' uses an array of headers, while Engine.IO uses an object (response.writeHead() accepts both formats)
                // we could also try to parse the array and then sync the values, but that will be error-prone
                const additionalHeaders = req[kResponseHeaders] || {};
                delete req[kResponseHeaders];
                const isInitialRequest = !req._query.sid;
                if (isInitialRequest) {
                    this.emit("initial_headers", additionalHeaders, req);
                }
                this.emit("headers", additionalHeaders, req);
                debug("writing headers: %j", additionalHeaders);
                Object.keys(additionalHeaders).forEach((key) => {
                    headersArray.push(`${key}: ${additionalHeaders[key]}`);
                });
            });
        }
    }
    cleanup() {
        if (this.ws) {
            debug("closing webSocketServer");
            this.ws.close();
            // don't delete this.ws because it can be used again if the http server starts listening again
        }
    }
    /**
     * Prepares a request by processing the query string.
     *
     * @api private
     */
    prepare(req) {
        // try to leverage pre-existing `req._query` (e.g: from connect)
        if (!req._query) {
            req._query = ~req.url.indexOf("?") ? qs.parse((0, url_1.parse)(req.url).query) : {};
        }
    }
    createTransport(transportName, req) {
        return new transports_1.default[transportName](req);
    }
    /**
     * Handles an Engine.IO HTTP request.
     *
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     * @api public
     */
    handleRequest(req, res) {
        debug('handling "%s" http request "%s"', req.method, req.url);
        this.prepare(req);
        // @ts-ignore
        req.res = res;
        const callback = (errorCode, errorContext) => {
            if (errorCode !== undefined) {
                this.emit("connection_error", {
                    req,
                    code: errorCode,
                    message: Server.errorMessages[errorCode],
                    context: errorContext,
                });
                abortRequest(res, errorCode, errorContext);
                return;
            }
            // @ts-ignore
            if (req._query.sid) {
                debug("setting new request for existing client");
                // @ts-ignore
                this.clients[req._query.sid].transport.onRequest(req);
            }
            else {
                const closeConnection = (errorCode, errorContext) => abortRequest(res, errorCode, errorContext);
                // @ts-ignore
                this.handshake(req._query.transport, req, closeConnection);
            }
        };
        this._applyMiddlewares(req, res, (err) => {
            if (err) {
                callback(Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" });
            }
            else {
                this.verify(req, false, callback);
            }
        });
    }
    /**
     * Handles an Engine.IO HTTP Upgrade.
     *
     * @api public
     */
    handleUpgrade(req, socket, upgradeHead) {
        this.prepare(req);
        const res = new WebSocketResponse(req, socket);
        const callback = (errorCode, errorContext) => {
            if (errorCode !== undefined) {
                this.emit("connection_error", {
                    req,
                    code: errorCode,
                    message: Server.errorMessages[errorCode],
                    context: errorContext,
                });
                abortUpgrade(socket, errorCode, errorContext);
                return;
            }
            const head = Buffer.from(upgradeHead);
            upgradeHead = null;
            // some middlewares (like express-session) wait for the writeHead() call to flush their headers
            // see https://github.com/expressjs/session/blob/1010fadc2f071ddf2add94235d72224cf65159c6/index.js#L220-L244
            res.writeHead();
            // delegate to ws
            this.ws.handleUpgrade(req, socket, head, (websocket) => {
                this.onWebSocket(req, socket, websocket);
            });
        };
        this._applyMiddlewares(req, res, (err) => {
            if (err) {
                callback(Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" });
            }
            else {
                this.verify(req, true, callback);
            }
        });
    }
    /**
     * Called upon a ws.io connection.
     *
     * @param {ws.Socket} websocket
     * @api private
     */
    onWebSocket(req, socket, websocket) {
        websocket.on("error", onUpgradeError);
        if (transports_1.default[req._query.transport] !== undefined &&
            !transports_1.default[req._query.transport].prototype.handlesUpgrades) {
            debug("transport doesnt handle upgraded requests");
            websocket.close();
            return;
        }
        // get client id
        const id = req._query.sid;
        // keep a reference to the ws.Socket
        req.websocket = websocket;
        if (id) {
            const client = this.clients[id];
            if (!client) {
                debug("upgrade attempt for closed client");
                websocket.close();
            }
            else if (client.upgrading) {
                debug("transport has already been trying to upgrade");
                websocket.close();
            }
            else if (client.upgraded) {
                debug("transport had already been upgraded");
                websocket.close();
            }
            else {
                debug("upgrading existing transport");
                // transport error handling takes over
                websocket.removeListener("error", onUpgradeError);
                const transport = this.createTransport(req._query.transport, req);
                if (req._query && req._query.b64) {
                    transport.supportsBinary = false;
                }
                else {
                    transport.supportsBinary = true;
                }
                transport.perMessageDeflate = this.opts.perMessageDeflate;
                client.maybeUpgrade(transport);
            }
        }
        else {
            const closeConnection = (errorCode, errorContext) => abortUpgrade(socket, errorCode, errorContext);
            this.handshake(req._query.transport, req, closeConnection);
        }
        function onUpgradeError() {
            debug("websocket error before upgrade");
            // websocket.close() not needed
        }
    }
    /**
     * Captures upgrade requests for a http.Server.
     *
     * @param {http.Server} server
     * @param {Object} options
     * @api public
     */
    attach(server, options = {}) {
        const path = this._computePath(options);
        const destroyUpgradeTimeout = options.destroyUpgradeTimeout || 1000;
        function check(req) {
            // TODO use `path === new URL(...).pathname` in the next major release (ref: https://nodejs.org/api/url.html)
            return path === req.url.slice(0, path.length);
        }
        // cache and clean up listeners
        const listeners = server.listeners("request").slice(0);
        server.removeAllListeners("request");
        server.on("close", this.close.bind(this));
        server.on("listening", this.init.bind(this));
        // add request handler
        server.on("request", (req, res) => {
            if (check(req)) {
                debug('intercepting request for path "%s"', path);
                this.handleRequest(req, res);
            }
            else {
                let i = 0;
                const l = listeners.length;
                for (; i < l; i++) {
                    listeners[i].call(server, req, res);
                }
            }
        });
        if (~this.opts.transports.indexOf("websocket")) {
            server.on("upgrade", (req, socket, head) => {
                if (check(req)) {
                    this.handleUpgrade(req, socket, head);
                }
                else if (false !== options.destroyUpgrade) {
                    // default node behavior is to disconnect when no handlers
                    // but by adding a handler, we prevent that
                    // and if no eio thing handles the upgrade
                    // then the socket needs to die!
                    setTimeout(function () {
                        // @ts-ignore
                        if (socket.writable && socket.bytesWritten <= 0) {
                            socket.on("error", (e) => {
                                debug("error while destroying upgrade: %s", e.message);
                            });
                            return socket.end();
                        }
                    }, destroyUpgradeTimeout);
                }
            });
        }
    }
}
exports.Server = Server;
/**
 * Close the HTTP long-polling request
 *
 * @param res - the response object
 * @param errorCode - the error code
 * @param errorContext - additional error context
 *
 * @api private
 */
function abortRequest(res, errorCode, errorContext) {
    const statusCode = errorCode === Server.errors.FORBIDDEN ? 403 : 400;
    const message = errorContext && errorContext.message
        ? errorContext.message
        : Server.errorMessages[errorCode];
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        code: errorCode,
        message,
    }));
}
/**
 * Close the WebSocket connection
 *
 * @param {net.Socket} socket
 * @param {string} errorCode - the error code
 * @param {object} errorContext - additional error context
 *
 * @api private
 */
function abortUpgrade(socket, errorCode, errorContext = {}) {
    socket.on("error", () => {
        debug("ignoring error from closed connection");
    });
    if (socket.writable) {
        const message = errorContext.message || Server.errorMessages[errorCode];
        const length = Buffer.byteLength(message);
        socket.write("HTTP/1.1 400 Bad Request\r\n" +
            "Connection: close\r\n" +
            "Content-type: text/html\r\n" +
            "Content-Length: " +
            length +
            "\r\n" +
            "\r\n" +
            message);
    }
    socket.destroy();
}
/* eslint-disable */
/**
 * From https://github.com/nodejs/node/blob/v8.4.0/lib/_http_common.js#L303-L354
 *
 * True if val contains an invalid field-vchar
 *  field-value    = *( field-content / obs-fold )
 *  field-content  = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 *  field-vchar    = VCHAR / obs-text
 *
 * checkInvalidHeaderChar() is currently designed to be inlinable by v8,
 * so take care when making changes to the implementation so that the source
 * code size does not exceed v8's default max_inlined_source_size setting.
 **/
// prettier-ignore
const validHdrChars = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 // ... 255
];
function checkInvalidHeaderChar(val) {
    val += "";
    if (val.length < 1)
        return false;
    if (!validHdrChars[val.charCodeAt(0)]) {
        debug('invalid header, index 0, char "%s"', val.charCodeAt(0));
        return true;
    }
    if (val.length < 2)
        return false;
    if (!validHdrChars[val.charCodeAt(1)]) {
        debug('invalid header, index 1, char "%s"', val.charCodeAt(1));
        return true;
    }
    if (val.length < 3)
        return false;
    if (!validHdrChars[val.charCodeAt(2)]) {
        debug('invalid header, index 2, char "%s"', val.charCodeAt(2));
        return true;
    }
    if (val.length < 4)
        return false;
    if (!validHdrChars[val.charCodeAt(3)]) {
        debug('invalid header, index 3, char "%s"', val.charCodeAt(3));
        return true;
    }
    for (let i = 4; i < val.length; ++i) {
        if (!validHdrChars[val.charCodeAt(i)]) {
            debug('invalid header, index "%i", char "%s"', i, val.charCodeAt(i));
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "../../node_modules/engine.io/build/socket.js":
/*!****************************************************!*\
  !*** ../../node_modules/engine.io/build/socket.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const timers_1 = __webpack_require__(/*! timers */ "timers");
const debug = (0, debug_1.default)("engine:socket");
class Socket extends events_1.EventEmitter {
    /**
     * Client class (abstract).
     *
     * @api private
     */
    constructor(id, server, transport, req, protocol) {
        super();
        this.id = id;
        this.server = server;
        this.upgrading = false;
        this.upgraded = false;
        this.readyState = "opening";
        this.writeBuffer = [];
        this.packetsFn = [];
        this.sentCallbackFn = [];
        this.cleanupFn = [];
        this.request = req;
        this.protocol = protocol;
        // Cache IP since it might not be in the req later
        if (req) {
            if (req.websocket && req.websocket._socket) {
                this.remoteAddress = req.websocket._socket.remoteAddress;
            }
            else {
                this.remoteAddress = req.connection.remoteAddress;
            }
        }
        else {
            // TODO there is currently no way to get the IP address of the client when it connects with WebTransport
            //  see https://github.com/fails-components/webtransport/issues/114
        }
        this.checkIntervalTimer = null;
        this.upgradeTimeoutTimer = null;
        this.pingTimeoutTimer = null;
        this.pingIntervalTimer = null;
        this.setTransport(transport);
        this.onOpen();
    }
    get readyState() {
        return this._readyState;
    }
    set readyState(state) {
        debug("readyState updated from %s to %s", this._readyState, state);
        this._readyState = state;
    }
    /**
     * Called upon transport considered open.
     *
     * @api private
     */
    onOpen() {
        this.readyState = "open";
        // sends an `open` packet
        this.transport.sid = this.id;
        this.sendPacket("open", JSON.stringify({
            sid: this.id,
            upgrades: this.getAvailableUpgrades(),
            pingInterval: this.server.opts.pingInterval,
            pingTimeout: this.server.opts.pingTimeout,
            maxPayload: this.server.opts.maxHttpBufferSize,
        }));
        if (this.server.opts.initialPacket) {
            this.sendPacket("message", this.server.opts.initialPacket);
        }
        this.emit("open");
        if (this.protocol === 3) {
            // in protocol v3, the client sends a ping, and the server answers with a pong
            this.resetPingTimeout(this.server.opts.pingInterval + this.server.opts.pingTimeout);
        }
        else {
            // in protocol v4, the server sends a ping, and the client answers with a pong
            this.schedulePing();
        }
    }
    /**
     * Called upon transport packet.
     *
     * @param {Object} packet
     * @api private
     */
    onPacket(packet) {
        if ("open" !== this.readyState) {
            return debug("packet received with closed socket");
        }
        // export packet event
        debug(`received packet ${packet.type}`);
        this.emit("packet", packet);
        // Reset ping timeout on any packet, incoming data is a good sign of
        // other side's liveness
        this.resetPingTimeout(this.server.opts.pingInterval + this.server.opts.pingTimeout);
        switch (packet.type) {
            case "ping":
                if (this.transport.protocol !== 3) {
                    this.onError("invalid heartbeat direction");
                    return;
                }
                debug("got ping");
                this.sendPacket("pong");
                this.emit("heartbeat");
                break;
            case "pong":
                if (this.transport.protocol === 3) {
                    this.onError("invalid heartbeat direction");
                    return;
                }
                debug("got pong");
                this.pingIntervalTimer.refresh();
                this.emit("heartbeat");
                break;
            case "error":
                this.onClose("parse error");
                break;
            case "message":
                this.emit("data", packet.data);
                this.emit("message", packet.data);
                break;
        }
    }
    /**
     * Called upon transport error.
     *
     * @param {Error} error object
     * @api private
     */
    onError(err) {
        debug("transport error");
        this.onClose("transport error", err);
    }
    /**
     * Pings client every `this.pingInterval` and expects response
     * within `this.pingTimeout` or closes connection.
     *
     * @api private
     */
    schedulePing() {
        this.pingIntervalTimer = (0, timers_1.setTimeout)(() => {
            debug("writing ping packet - expecting pong within %sms", this.server.opts.pingTimeout);
            this.sendPacket("ping");
            this.resetPingTimeout(this.server.opts.pingTimeout);
        }, this.server.opts.pingInterval);
    }
    /**
     * Resets ping timeout.
     *
     * @api private
     */
    resetPingTimeout(timeout) {
        (0, timers_1.clearTimeout)(this.pingTimeoutTimer);
        this.pingTimeoutTimer = (0, timers_1.setTimeout)(() => {
            if (this.readyState === "closed")
                return;
            this.onClose("ping timeout");
        }, timeout);
    }
    /**
     * Attaches handlers for the given transport.
     *
     * @param {Transport} transport
     * @api private
     */
    setTransport(transport) {
        const onError = this.onError.bind(this);
        const onPacket = this.onPacket.bind(this);
        const flush = this.flush.bind(this);
        const onClose = this.onClose.bind(this, "transport close");
        this.transport = transport;
        this.transport.once("error", onError);
        this.transport.on("packet", onPacket);
        this.transport.on("drain", flush);
        this.transport.once("close", onClose);
        // this function will manage packet events (also message callbacks)
        this.setupSendCallback();
        this.cleanupFn.push(function () {
            transport.removeListener("error", onError);
            transport.removeListener("packet", onPacket);
            transport.removeListener("drain", flush);
            transport.removeListener("close", onClose);
        });
    }
    /**
     * Upgrades socket to the given transport
     *
     * @param {Transport} transport
     * @api private
     */
    maybeUpgrade(transport) {
        debug('might upgrade socket transport from "%s" to "%s"', this.transport.name, transport.name);
        this.upgrading = true;
        // set transport upgrade timer
        this.upgradeTimeoutTimer = (0, timers_1.setTimeout)(() => {
            debug("client did not complete upgrade - closing transport");
            cleanup();
            if ("open" === transport.readyState) {
                transport.close();
            }
        }, this.server.opts.upgradeTimeout);
        const onPacket = (packet) => {
            if ("ping" === packet.type && "probe" === packet.data) {
                debug("got probe ping packet, sending pong");
                transport.send([{ type: "pong", data: "probe" }]);
                this.emit("upgrading", transport);
                clearInterval(this.checkIntervalTimer);
                this.checkIntervalTimer = setInterval(check, 100);
            }
            else if ("upgrade" === packet.type && this.readyState !== "closed") {
                debug("got upgrade packet - upgrading");
                cleanup();
                this.transport.discard();
                this.upgraded = true;
                this.clearTransport();
                this.setTransport(transport);
                this.emit("upgrade", transport);
                this.flush();
                if (this.readyState === "closing") {
                    transport.close(() => {
                        this.onClose("forced close");
                    });
                }
            }
            else {
                cleanup();
                transport.close();
            }
        };
        // we force a polling cycle to ensure a fast upgrade
        const check = () => {
            if ("polling" === this.transport.name && this.transport.writable) {
                debug("writing a noop packet to polling for fast upgrade");
                this.transport.send([{ type: "noop" }]);
            }
        };
        const cleanup = () => {
            this.upgrading = false;
            clearInterval(this.checkIntervalTimer);
            this.checkIntervalTimer = null;
            (0, timers_1.clearTimeout)(this.upgradeTimeoutTimer);
            this.upgradeTimeoutTimer = null;
            transport.removeListener("packet", onPacket);
            transport.removeListener("close", onTransportClose);
            transport.removeListener("error", onError);
            this.removeListener("close", onClose);
        };
        const onError = (err) => {
            debug("client did not complete upgrade - %s", err);
            cleanup();
            transport.close();
            transport = null;
        };
        const onTransportClose = () => {
            onError("transport closed");
        };
        const onClose = () => {
            onError("socket closed");
        };
        transport.on("packet", onPacket);
        transport.once("close", onTransportClose);
        transport.once("error", onError);
        this.once("close", onClose);
    }
    /**
     * Clears listeners and timers associated with current transport.
     *
     * @api private
     */
    clearTransport() {
        let cleanup;
        const toCleanUp = this.cleanupFn.length;
        for (let i = 0; i < toCleanUp; i++) {
            cleanup = this.cleanupFn.shift();
            cleanup();
        }
        // silence further transport errors and prevent uncaught exceptions
        this.transport.on("error", function () {
            debug("error triggered by discarded transport");
        });
        // ensure transport won't stay open
        this.transport.close();
        (0, timers_1.clearTimeout)(this.pingTimeoutTimer);
    }
    /**
     * Called upon transport considered closed.
     * Possible reasons: `ping timeout`, `client error`, `parse error`,
     * `transport error`, `server close`, `transport close`
     */
    onClose(reason, description) {
        if ("closed" !== this.readyState) {
            this.readyState = "closed";
            // clear timers
            (0, timers_1.clearTimeout)(this.pingIntervalTimer);
            (0, timers_1.clearTimeout)(this.pingTimeoutTimer);
            clearInterval(this.checkIntervalTimer);
            this.checkIntervalTimer = null;
            (0, timers_1.clearTimeout)(this.upgradeTimeoutTimer);
            // clean writeBuffer in next tick, so developers can still
            // grab the writeBuffer on 'close' event
            process.nextTick(() => {
                this.writeBuffer = [];
            });
            this.packetsFn = [];
            this.sentCallbackFn = [];
            this.clearTransport();
            this.emit("close", reason, description);
        }
    }
    /**
     * Setup and manage send callback
     *
     * @api private
     */
    setupSendCallback() {
        // the message was sent successfully, execute the callback
        const onDrain = () => {
            if (this.sentCallbackFn.length > 0) {
                const seqFn = this.sentCallbackFn.splice(0, 1)[0];
                if ("function" === typeof seqFn) {
                    debug("executing send callback");
                    seqFn(this.transport);
                }
                else if (Array.isArray(seqFn)) {
                    debug("executing batch send callback");
                    const l = seqFn.length;
                    let i = 0;
                    for (; i < l; i++) {
                        if ("function" === typeof seqFn[i]) {
                            seqFn[i](this.transport);
                        }
                    }
                }
            }
        };
        this.transport.on("drain", onDrain);
        this.cleanupFn.push(() => {
            this.transport.removeListener("drain", onDrain);
        });
    }
    /**
     * Sends a message packet.
     *
     * @param {Object} data
     * @param {Object} options
     * @param {Function} callback
     * @return {Socket} for chaining
     * @api public
     */
    send(data, options, callback) {
        this.sendPacket("message", data, options, callback);
        return this;
    }
    /**
     * Alias of {@link send}.
     *
     * @param data
     * @param options
     * @param callback
     */
    write(data, options, callback) {
        this.sendPacket("message", data, options, callback);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type - packet type
     * @param {String} data
     * @param {Object} options
     * @param {Function} callback
     *
     * @api private
     */
    sendPacket(type, data, options = {}, callback) {
        if ("function" === typeof options) {
            callback = options;
            options = {};
        }
        if ("closing" !== this.readyState && "closed" !== this.readyState) {
            debug('sending packet "%s" (%s)', type, data);
            // compression is enabled by default
            options.compress = options.compress !== false;
            const packet = {
                type,
                options: options,
            };
            if (data)
                packet.data = data;
            // exports packetCreate event
            this.emit("packetCreate", packet);
            this.writeBuffer.push(packet);
            // add send callback to object, if defined
            if (callback)
                this.packetsFn.push(callback);
            this.flush();
        }
    }
    /**
     * Attempts to flush the packets buffer.
     *
     * @api private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            this.writeBuffer.length) {
            debug("flushing buffer to transport");
            this.emit("flush", this.writeBuffer);
            this.server.emit("flush", this, this.writeBuffer);
            const wbuf = this.writeBuffer;
            this.writeBuffer = [];
            if (!this.transport.supportsFraming) {
                this.sentCallbackFn.push(this.packetsFn);
            }
            else {
                this.sentCallbackFn.push.apply(this.sentCallbackFn, this.packetsFn);
            }
            this.packetsFn = [];
            this.transport.send(wbuf);
            this.emit("drain");
            this.server.emit("drain", this);
        }
    }
    /**
     * Get available upgrades for this socket.
     *
     * @api private
     */
    getAvailableUpgrades() {
        const availableUpgrades = [];
        const allUpgrades = this.server.upgrades(this.transport.name);
        let i = 0;
        const l = allUpgrades.length;
        for (; i < l; ++i) {
            const upg = allUpgrades[i];
            if (this.server.opts.transports.indexOf(upg) !== -1) {
                availableUpgrades.push(upg);
            }
        }
        return availableUpgrades;
    }
    /**
     * Closes the socket and underlying transport.
     *
     * @param {Boolean} discard - optional, discard the transport
     * @return {Socket} for chaining
     * @api public
     */
    close(discard) {
        if ("open" !== this.readyState)
            return;
        this.readyState = "closing";
        if (this.writeBuffer.length) {
            debug("there are %d remaining packets in the buffer, waiting for the 'drain' event", this.writeBuffer.length);
            this.once("drain", () => {
                debug("all packets have been sent, closing the transport");
                this.closeTransport(discard);
            });
            return;
        }
        debug("the buffer is empty, closing the transport right away", discard);
        this.closeTransport(discard);
    }
    /**
     * Closes the underlying transport.
     *
     * @param {Boolean} discard
     * @api private
     */
    closeTransport(discard) {
        debug("closing the transport (discard? %s)", discard);
        if (discard)
            this.transport.discard();
        this.transport.close(this.onClose.bind(this, "forced close"));
    }
}
exports.Socket = Socket;


/***/ }),

/***/ "../../node_modules/engine.io/build/transport.js":
/*!*******************************************************!*\
  !*** ../../node_modules/engine.io/build/transport.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transport = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
const parser_v4 = __webpack_require__(/*! engine.io-parser */ "../../node_modules/engine.io-parser/build/cjs/index.js");
const parser_v3 = __webpack_require__(/*! ./parser-v3/index */ "../../node_modules/engine.io/build/parser-v3/index.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:transport");
/**
 * Noop function.
 *
 * @api private
 */
function noop() { }
class Transport extends events_1.EventEmitter {
    /**
     * Transport constructor.
     *
     * @param {http.IncomingMessage} request
     * @api public
     */
    constructor(req) {
        super();
        this.readyState = "open";
        this.discarded = false;
        this.protocol = req._query.EIO === "4" ? 4 : 3; // 3rd revision by default
        this.parser = this.protocol === 4 ? parser_v4 : parser_v3;
    }
    get readyState() {
        return this._readyState;
    }
    set readyState(state) {
        debug("readyState updated from %s to %s (%s)", this._readyState, state, this.name);
        this._readyState = state;
    }
    /**
     * Flags the transport as discarded.
     *
     * @api private
     */
    discard() {
        this.discarded = true;
    }
    /**
     * Called with an incoming HTTP request.
     *
     * @param {http.IncomingMessage} request
     * @api protected
     */
    onRequest(req) {
        debug("setting request");
        this.req = req;
    }
    /**
     * Closes the transport.
     *
     * @api private
     */
    close(fn) {
        if ("closed" === this.readyState || "closing" === this.readyState)
            return;
        this.readyState = "closing";
        this.doClose(fn || noop);
    }
    /**
     * Called with a transport error.
     *
     * @param {String} message error
     * @param {Object} error description
     * @api protected
     */
    onError(msg, desc) {
        if (this.listeners("error").length) {
            const err = new Error(msg);
            // @ts-ignore
            err.type = "TransportError";
            // @ts-ignore
            err.description = desc;
            this.emit("error", err);
        }
        else {
            debug("ignored transport error %s (%s)", msg, desc);
        }
    }
    /**
     * Called with parsed out a packets from the data stream.
     *
     * @param {Object} packet
     * @api protected
     */
    onPacket(packet) {
        this.emit("packet", packet);
    }
    /**
     * Called with the encoded packet data.
     *
     * @param {String} data
     * @api protected
     */
    onData(data) {
        this.onPacket(this.parser.decodePacket(data));
    }
    /**
     * Called upon transport close.
     *
     * @api protected
     */
    onClose() {
        this.readyState = "closed";
        this.emit("close");
    }
}
exports.Transport = Transport;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports-uws/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports-uws/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const polling_1 = __webpack_require__(/*! ./polling */ "../../node_modules/engine.io/build/transports-uws/polling.js");
const websocket_1 = __webpack_require__(/*! ./websocket */ "../../node_modules/engine.io/build/transports-uws/websocket.js");
exports["default"] = {
    polling: polling_1.Polling,
    websocket: websocket_1.WebSocket,
};


/***/ }),

/***/ "../../node_modules/engine.io/build/transports-uws/polling.js":
/*!********************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports-uws/polling.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Polling = void 0;
const transport_1 = __webpack_require__(/*! ../transport */ "../../node_modules/engine.io/build/transport.js");
const zlib_1 = __webpack_require__(/*! zlib */ "zlib");
const accepts = __webpack_require__(/*! accepts */ "../../node_modules/accepts/index.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:polling");
const compressionMethods = {
    gzip: zlib_1.createGzip,
    deflate: zlib_1.createDeflate,
};
class Polling extends transport_1.Transport {
    /**
     * HTTP polling constructor.
     *
     * @api public.
     */
    constructor(req) {
        super(req);
        this.closeTimeout = 30 * 1000;
    }
    /**
     * Transport name
     *
     * @api public
     */
    get name() {
        return "polling";
    }
    get supportsFraming() {
        return false;
    }
    /**
     * Overrides onRequest.
     *
     * @param req
     *
     * @api private
     */
    onRequest(req) {
        const res = req.res;
        if (req.getMethod() === "get") {
            this.onPollRequest(req, res);
        }
        else if (req.getMethod() === "post") {
            this.onDataRequest(req, res);
        }
        else {
            res.writeStatus("500 Internal Server Error");
            res.end();
        }
    }
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @api private
     */
    onPollRequest(req, res) {
        if (this.req) {
            debug("request overlap");
            // assert: this.res, '.req and .res should be (un)set together'
            this.onError("overlap from client");
            res.writeStatus("500 Internal Server Error");
            res.end();
            return;
        }
        debug("setting request");
        this.req = req;
        this.res = res;
        const onClose = () => {
            this.writable = false;
            this.onError("poll connection closed prematurely");
        };
        const cleanup = () => {
            this.req = this.res = null;
        };
        req.cleanup = cleanup;
        res.onAborted(onClose);
        this.writable = true;
        this.emit("drain");
        // if we're still writable but had a pending close, trigger an empty send
        if (this.writable && this.shouldClose) {
            debug("triggering empty send to append close packet");
            this.send([{ type: "noop" }]);
        }
    }
    /**
     * The client sends a request with data.
     *
     * @api private
     */
    onDataRequest(req, res) {
        if (this.dataReq) {
            // assert: this.dataRes, '.dataReq and .dataRes should be (un)set together'
            this.onError("data request overlap from client");
            res.writeStatus("500 Internal Server Error");
            res.end();
            return;
        }
        const expectedContentLength = Number(req.headers["content-length"]);
        if (!expectedContentLength) {
            this.onError("content-length header required");
            res.writeStatus("411 Length Required").end();
            return;
        }
        if (expectedContentLength > this.maxHttpBufferSize) {
            this.onError("payload too large");
            res.writeStatus("413 Payload Too Large").end();
            return;
        }
        const isBinary = "application/octet-stream" === req.headers["content-type"];
        if (isBinary && this.protocol === 4) {
            return this.onError("invalid content");
        }
        this.dataReq = req;
        this.dataRes = res;
        let buffer;
        let offset = 0;
        const headers = {
            // text/html is required instead of text/plain to avoid an
            // unwanted download dialog on certain user-agents (GH-43)
            "Content-Type": "text/html",
        };
        this.headers(req, headers);
        for (let key in headers) {
            res.writeHeader(key, String(headers[key]));
        }
        const onEnd = (buffer) => {
            this.onData(buffer.toString());
            this.onDataRequestCleanup();
            res.cork(() => {
                res.end("ok");
            });
        };
        res.onAborted(() => {
            this.onDataRequestCleanup();
            this.onError("data request connection closed prematurely");
        });
        res.onData((arrayBuffer, isLast) => {
            const totalLength = offset + arrayBuffer.byteLength;
            if (totalLength > expectedContentLength) {
                this.onError("content-length mismatch");
                res.close(); // calls onAborted
                return;
            }
            if (!buffer) {
                if (isLast) {
                    onEnd(Buffer.from(arrayBuffer));
                    return;
                }
                buffer = Buffer.allocUnsafe(expectedContentLength);
            }
            Buffer.from(arrayBuffer).copy(buffer, offset);
            if (isLast) {
                if (totalLength != expectedContentLength) {
                    this.onError("content-length mismatch");
                    res.writeStatus("400 Content-Length Mismatch").end();
                    this.onDataRequestCleanup();
                    return;
                }
                onEnd(buffer);
                return;
            }
            offset = totalLength;
        });
    }
    /**
     * Cleanup request.
     *
     * @api private
     */
    onDataRequestCleanup() {
        this.dataReq = this.dataRes = null;
    }
    /**
     * Processes the incoming data payload.
     *
     * @param {String} encoded payload
     * @api private
     */
    onData(data) {
        debug('received "%s"', data);
        const callback = (packet) => {
            if ("close" === packet.type) {
                debug("got xhr close packet");
                this.onClose();
                return false;
            }
            this.onPacket(packet);
        };
        if (this.protocol === 3) {
            this.parser.decodePayload(data, callback);
        }
        else {
            this.parser.decodePayload(data).forEach(callback);
        }
    }
    /**
     * Overrides onClose.
     *
     * @api private
     */
    onClose() {
        if (this.writable) {
            // close pending poll request
            this.send([{ type: "noop" }]);
        }
        super.onClose();
    }
    /**
     * Writes a packet payload.
     *
     * @param {Object} packet
     * @api private
     */
    send(packets) {
        this.writable = false;
        if (this.shouldClose) {
            debug("appending close packet to payload");
            packets.push({ type: "close" });
            this.shouldClose();
            this.shouldClose = null;
        }
        const doWrite = (data) => {
            const compress = packets.some((packet) => {
                return packet.options && packet.options.compress;
            });
            this.write(data, { compress });
        };
        if (this.protocol === 3) {
            this.parser.encodePayload(packets, this.supportsBinary, doWrite);
        }
        else {
            this.parser.encodePayload(packets, doWrite);
        }
    }
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @api private
     */
    write(data, options) {
        debug('writing "%s"', data);
        this.doWrite(data, options, () => {
            this.req.cleanup();
        });
    }
    /**
     * Performs the write.
     *
     * @api private
     */
    doWrite(data, options, callback) {
        // explicit UTF-8 is required for pages not served under utf
        const isString = typeof data === "string";
        const contentType = isString
            ? "text/plain; charset=UTF-8"
            : "application/octet-stream";
        const headers = {
            "Content-Type": contentType,
        };
        const respond = (data) => {
            this.headers(this.req, headers);
            this.res.cork(() => {
                Object.keys(headers).forEach((key) => {
                    this.res.writeHeader(key, String(headers[key]));
                });
                this.res.end(data);
            });
            callback();
        };
        if (!this.httpCompression || !options.compress) {
            respond(data);
            return;
        }
        const len = isString ? Buffer.byteLength(data) : data.length;
        if (len < this.httpCompression.threshold) {
            respond(data);
            return;
        }
        const encoding = accepts(this.req).encodings(["gzip", "deflate"]);
        if (!encoding) {
            respond(data);
            return;
        }
        this.compress(data, encoding, (err, data) => {
            if (err) {
                this.res.writeStatus("500 Internal Server Error");
                this.res.end();
                callback(err);
                return;
            }
            headers["Content-Encoding"] = encoding;
            respond(data);
        });
    }
    /**
     * Compresses data.
     *
     * @api private
     */
    compress(data, encoding, callback) {
        debug("compressing");
        const buffers = [];
        let nread = 0;
        compressionMethods[encoding](this.httpCompression)
            .on("error", callback)
            .on("data", function (chunk) {
            buffers.push(chunk);
            nread += chunk.length;
        })
            .on("end", function () {
            callback(null, Buffer.concat(buffers, nread));
        })
            .end(data);
    }
    /**
     * Closes the transport.
     *
     * @api private
     */
    doClose(fn) {
        debug("closing");
        let closeTimeoutTimer;
        const onClose = () => {
            clearTimeout(closeTimeoutTimer);
            fn();
            this.onClose();
        };
        if (this.writable) {
            debug("transport writable - closing right away");
            this.send([{ type: "close" }]);
            onClose();
        }
        else if (this.discarded) {
            debug("transport discarded - closing right away");
            onClose();
        }
        else {
            debug("transport not writable - buffering orderly close");
            this.shouldClose = onClose;
            closeTimeoutTimer = setTimeout(onClose, this.closeTimeout);
        }
    }
    /**
     * Returns headers for a response.
     *
     * @param req - request
     * @param {Object} extra headers
     * @api private
     */
    headers(req, headers) {
        headers = headers || {};
        // prevent XSS warnings on IE
        // https://github.com/LearnBoost/socket.io/pull/1333
        const ua = req.headers["user-agent"];
        if (ua && (~ua.indexOf(";MSIE") || ~ua.indexOf("Trident/"))) {
            headers["X-XSS-Protection"] = "0";
        }
        this.emit("headers", headers, req);
        return headers;
    }
}
exports.Polling = Polling;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports-uws/websocket.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports-uws/websocket.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebSocket = void 0;
const transport_1 = __webpack_require__(/*! ../transport */ "../../node_modules/engine.io/build/transport.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:ws");
class WebSocket extends transport_1.Transport {
    /**
     * WebSocket transport
     *
     * @param req
     * @api public
     */
    constructor(req) {
        super(req);
        this.writable = false;
        this.perMessageDeflate = null;
    }
    /**
     * Transport name
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Advertise upgrade support.
     *
     * @api public
     */
    get handlesUpgrades() {
        return true;
    }
    /**
     * Advertise framing support.
     *
     * @api public
     */
    get supportsFraming() {
        return true;
    }
    /**
     * Writes a packet payload.
     *
     * @param {Array} packets
     * @api private
     */
    send(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const isLast = i + 1 === packets.length;
            const send = (data) => {
                const isBinary = typeof data !== "string";
                const compress = this.perMessageDeflate &&
                    Buffer.byteLength(data) > this.perMessageDeflate.threshold;
                debug('writing "%s"', data);
                this.socket.send(data, isBinary, compress);
                if (isLast) {
                    this.writable = true;
                    this.emit("drain");
                }
            };
            if (packet.options && typeof packet.options.wsPreEncoded === "string") {
                send(packet.options.wsPreEncoded);
            }
            else {
                this.parser.encodePacket(packet, this.supportsBinary, send);
            }
        }
    }
    /**
     * Closes the transport.
     *
     * @api private
     */
    doClose(fn) {
        debug("closing");
        fn && fn();
        // call fn first since socket.end() immediately emits a "close" event
        this.socket.end();
    }
}
exports.WebSocket = WebSocket;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const polling_1 = __webpack_require__(/*! ./polling */ "../../node_modules/engine.io/build/transports/polling.js");
const polling_jsonp_1 = __webpack_require__(/*! ./polling-jsonp */ "../../node_modules/engine.io/build/transports/polling-jsonp.js");
const websocket_1 = __webpack_require__(/*! ./websocket */ "../../node_modules/engine.io/build/transports/websocket.js");
const webtransport_1 = __webpack_require__(/*! ./webtransport */ "../../node_modules/engine.io/build/transports/webtransport.js");
exports["default"] = {
    polling: polling,
    websocket: websocket_1.WebSocket,
    webtransport: webtransport_1.WebTransport,
};
/**
 * Polling polymorphic constructor.
 *
 * @api private
 */
function polling(req) {
    if ("string" === typeof req._query.j) {
        return new polling_jsonp_1.JSONP(req);
    }
    else {
        return new polling_1.Polling(req);
    }
}
polling.upgradesTo = ["websocket", "webtransport"];


/***/ }),

/***/ "../../node_modules/engine.io/build/transports/polling-jsonp.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports/polling-jsonp.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONP = void 0;
const polling_1 = __webpack_require__(/*! ./polling */ "../../node_modules/engine.io/build/transports/polling.js");
const qs = __webpack_require__(/*! querystring */ "querystring");
const rDoubleSlashes = /\\\\n/g;
const rSlashes = /(\\)?\\n/g;
class JSONP extends polling_1.Polling {
    /**
     * JSON-P polling transport.
     *
     * @api public
     */
    constructor(req) {
        super(req);
        this.head = "___eio[" + (req._query.j || "").replace(/[^0-9]/g, "") + "](";
        this.foot = ");";
    }
    /**
     * Handles incoming data.
     * Due to a bug in \n handling by browsers, we expect a escaped string.
     *
     * @api private
     */
    onData(data) {
        // we leverage the qs module so that we get built-in DoS protection
        // and the fast alternative to decodeURIComponent
        data = qs.parse(data).d;
        if ("string" === typeof data) {
            // client will send already escaped newlines as \\\\n and newlines as \\n
            // \\n must be replaced with \n and \\\\n with \\n
            data = data.replace(rSlashes, function (match, slashes) {
                return slashes ? match : "\n";
            });
            super.onData(data.replace(rDoubleSlashes, "\\n"));
        }
    }
    /**
     * Performs the write.
     *
     * @api private
     */
    doWrite(data, options, callback) {
        // we must output valid javascript, not valid json
        // see: http://timelessrepo.com/json-isnt-a-javascript-subset
        const js = JSON.stringify(data)
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029");
        // prepare response
        data = this.head + js + this.foot;
        super.doWrite(data, options, callback);
    }
}
exports.JSONP = JSONP;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports/polling.js":
/*!****************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports/polling.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Polling = void 0;
const transport_1 = __webpack_require__(/*! ../transport */ "../../node_modules/engine.io/build/transport.js");
const zlib_1 = __webpack_require__(/*! zlib */ "zlib");
const accepts = __webpack_require__(/*! accepts */ "../../node_modules/accepts/index.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:polling");
const compressionMethods = {
    gzip: zlib_1.createGzip,
    deflate: zlib_1.createDeflate,
};
class Polling extends transport_1.Transport {
    /**
     * HTTP polling constructor.
     *
     * @api public.
     */
    constructor(req) {
        super(req);
        this.closeTimeout = 30 * 1000;
    }
    /**
     * Transport name
     *
     * @api public
     */
    get name() {
        return "polling";
    }
    get supportsFraming() {
        return false;
    }
    /**
     * Overrides onRequest.
     *
     * @param {http.IncomingMessage}
     * @api private
     */
    onRequest(req) {
        const res = req.res;
        if ("GET" === req.method) {
            this.onPollRequest(req, res);
        }
        else if ("POST" === req.method) {
            this.onDataRequest(req, res);
        }
        else {
            res.writeHead(500);
            res.end();
        }
    }
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @api private
     */
    onPollRequest(req, res) {
        if (this.req) {
            debug("request overlap");
            // assert: this.res, '.req and .res should be (un)set together'
            this.onError("overlap from client");
            res.writeHead(400);
            res.end();
            return;
        }
        debug("setting request");
        this.req = req;
        this.res = res;
        const onClose = () => {
            this.onError("poll connection closed prematurely");
        };
        const cleanup = () => {
            req.removeListener("close", onClose);
            this.req = this.res = null;
        };
        req.cleanup = cleanup;
        req.on("close", onClose);
        this.writable = true;
        this.emit("drain");
        // if we're still writable but had a pending close, trigger an empty send
        if (this.writable && this.shouldClose) {
            debug("triggering empty send to append close packet");
            this.send([{ type: "noop" }]);
        }
    }
    /**
     * The client sends a request with data.
     *
     * @api private
     */
    onDataRequest(req, res) {
        if (this.dataReq) {
            // assert: this.dataRes, '.dataReq and .dataRes should be (un)set together'
            this.onError("data request overlap from client");
            res.writeHead(400);
            res.end();
            return;
        }
        const isBinary = "application/octet-stream" === req.headers["content-type"];
        if (isBinary && this.protocol === 4) {
            return this.onError("invalid content");
        }
        this.dataReq = req;
        this.dataRes = res;
        let chunks = isBinary ? Buffer.concat([]) : "";
        const cleanup = () => {
            req.removeListener("data", onData);
            req.removeListener("end", onEnd);
            req.removeListener("close", onClose);
            this.dataReq = this.dataRes = chunks = null;
        };
        const onClose = () => {
            cleanup();
            this.onError("data request connection closed prematurely");
        };
        const onData = (data) => {
            let contentLength;
            if (isBinary) {
                chunks = Buffer.concat([chunks, data]);
                contentLength = chunks.length;
            }
            else {
                chunks += data;
                contentLength = Buffer.byteLength(chunks);
            }
            if (contentLength > this.maxHttpBufferSize) {
                res.writeHead(413).end();
                cleanup();
            }
        };
        const onEnd = () => {
            this.onData(chunks);
            const headers = {
                // text/html is required instead of text/plain to avoid an
                // unwanted download dialog on certain user-agents (GH-43)
                "Content-Type": "text/html",
                "Content-Length": 2,
            };
            res.writeHead(200, this.headers(req, headers));
            res.end("ok");
            cleanup();
        };
        req.on("close", onClose);
        if (!isBinary)
            req.setEncoding("utf8");
        req.on("data", onData);
        req.on("end", onEnd);
    }
    /**
     * Processes the incoming data payload.
     *
     * @param {String} encoded payload
     * @api private
     */
    onData(data) {
        debug('received "%s"', data);
        const callback = (packet) => {
            if ("close" === packet.type) {
                debug("got xhr close packet");
                this.onClose();
                return false;
            }
            this.onPacket(packet);
        };
        if (this.protocol === 3) {
            this.parser.decodePayload(data, callback);
        }
        else {
            this.parser.decodePayload(data).forEach(callback);
        }
    }
    /**
     * Overrides onClose.
     *
     * @api private
     */
    onClose() {
        if (this.writable) {
            // close pending poll request
            this.send([{ type: "noop" }]);
        }
        super.onClose();
    }
    /**
     * Writes a packet payload.
     *
     * @param {Object} packet
     * @api private
     */
    send(packets) {
        this.writable = false;
        if (this.shouldClose) {
            debug("appending close packet to payload");
            packets.push({ type: "close" });
            this.shouldClose();
            this.shouldClose = null;
        }
        const doWrite = (data) => {
            const compress = packets.some((packet) => {
                return packet.options && packet.options.compress;
            });
            this.write(data, { compress });
        };
        if (this.protocol === 3) {
            this.parser.encodePayload(packets, this.supportsBinary, doWrite);
        }
        else {
            this.parser.encodePayload(packets, doWrite);
        }
    }
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @api private
     */
    write(data, options) {
        debug('writing "%s"', data);
        this.doWrite(data, options, () => {
            this.req.cleanup();
        });
    }
    /**
     * Performs the write.
     *
     * @api private
     */
    doWrite(data, options, callback) {
        // explicit UTF-8 is required for pages not served under utf
        const isString = typeof data === "string";
        const contentType = isString
            ? "text/plain; charset=UTF-8"
            : "application/octet-stream";
        const headers = {
            "Content-Type": contentType,
        };
        const respond = (data) => {
            headers["Content-Length"] =
                "string" === typeof data ? Buffer.byteLength(data) : data.length;
            this.res.writeHead(200, this.headers(this.req, headers));
            this.res.end(data);
            callback();
        };
        if (!this.httpCompression || !options.compress) {
            respond(data);
            return;
        }
        const len = isString ? Buffer.byteLength(data) : data.length;
        if (len < this.httpCompression.threshold) {
            respond(data);
            return;
        }
        const encoding = accepts(this.req).encodings(["gzip", "deflate"]);
        if (!encoding) {
            respond(data);
            return;
        }
        this.compress(data, encoding, (err, data) => {
            if (err) {
                this.res.writeHead(500);
                this.res.end();
                callback(err);
                return;
            }
            headers["Content-Encoding"] = encoding;
            respond(data);
        });
    }
    /**
     * Compresses data.
     *
     * @api private
     */
    compress(data, encoding, callback) {
        debug("compressing");
        const buffers = [];
        let nread = 0;
        compressionMethods[encoding](this.httpCompression)
            .on("error", callback)
            .on("data", function (chunk) {
            buffers.push(chunk);
            nread += chunk.length;
        })
            .on("end", function () {
            callback(null, Buffer.concat(buffers, nread));
        })
            .end(data);
    }
    /**
     * Closes the transport.
     *
     * @api private
     */
    doClose(fn) {
        debug("closing");
        let closeTimeoutTimer;
        if (this.dataReq) {
            debug("aborting ongoing data request");
            this.dataReq.destroy();
        }
        const onClose = () => {
            clearTimeout(closeTimeoutTimer);
            fn();
            this.onClose();
        };
        if (this.writable) {
            debug("transport writable - closing right away");
            this.send([{ type: "close" }]);
            onClose();
        }
        else if (this.discarded) {
            debug("transport discarded - closing right away");
            onClose();
        }
        else {
            debug("transport not writable - buffering orderly close");
            this.shouldClose = onClose;
            closeTimeoutTimer = setTimeout(onClose, this.closeTimeout);
        }
    }
    /**
     * Returns headers for a response.
     *
     * @param {http.IncomingMessage} request
     * @param {Object} extra headers
     * @api private
     */
    headers(req, headers) {
        headers = headers || {};
        // prevent XSS warnings on IE
        // https://github.com/LearnBoost/socket.io/pull/1333
        const ua = req.headers["user-agent"];
        if (ua && (~ua.indexOf(";MSIE") || ~ua.indexOf("Trident/"))) {
            headers["X-XSS-Protection"] = "0";
        }
        this.emit("headers", headers, req);
        return headers;
    }
}
exports.Polling = Polling;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports/websocket.js":
/*!******************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports/websocket.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebSocket = void 0;
const transport_1 = __webpack_require__(/*! ../transport */ "../../node_modules/engine.io/build/transport.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:ws");
class WebSocket extends transport_1.Transport {
    /**
     * WebSocket transport
     *
     * @param {http.IncomingMessage}
     * @api public
     */
    constructor(req) {
        super(req);
        this.socket = req.websocket;
        this.socket.on("message", (data, isBinary) => {
            const message = isBinary ? data : data.toString();
            debug('received "%s"', message);
            super.onData(message);
        });
        this.socket.once("close", this.onClose.bind(this));
        this.socket.on("error", this.onError.bind(this));
        this.writable = true;
        this.perMessageDeflate = null;
    }
    /**
     * Transport name
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Advertise upgrade support.
     *
     * @api public
     */
    get handlesUpgrades() {
        return true;
    }
    /**
     * Advertise framing support.
     *
     * @api public
     */
    get supportsFraming() {
        return true;
    }
    /**
     * Writes a packet payload.
     *
     * @param {Array} packets
     * @api private
     */
    send(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const isLast = i + 1 === packets.length;
            // always creates a new object since ws modifies it
            const opts = {};
            if (packet.options) {
                opts.compress = packet.options.compress;
            }
            const onSent = (err) => {
                if (err) {
                    return this.onError("write error", err.stack);
                }
                else if (isLast) {
                    this.writable = true;
                    this.emit("drain");
                }
            };
            const send = (data) => {
                if (this.perMessageDeflate) {
                    const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                    if (len < this.perMessageDeflate.threshold) {
                        opts.compress = false;
                    }
                }
                debug('writing "%s"', data);
                this.socket.send(data, opts, onSent);
            };
            if (packet.options && typeof packet.options.wsPreEncoded === "string") {
                send(packet.options.wsPreEncoded);
            }
            else if (this._canSendPreEncodedFrame(packet)) {
                // the WebSocket frame was computed with WebSocket.Sender.frame()
                // see https://github.com/websockets/ws/issues/617#issuecomment-283002469
                this.socket._sender.sendFrame(packet.options.wsPreEncodedFrame, onSent);
            }
            else {
                this.parser.encodePacket(packet, this.supportsBinary, send);
            }
        }
    }
    /**
     * Whether the encoding of the WebSocket frame can be skipped.
     * @param packet
     * @private
     */
    _canSendPreEncodedFrame(packet) {
        var _a, _b, _c;
        return (!this.perMessageDeflate &&
            typeof ((_b = (_a = this.socket) === null || _a === void 0 ? void 0 : _a._sender) === null || _b === void 0 ? void 0 : _b.sendFrame) === "function" &&
            ((_c = packet.options) === null || _c === void 0 ? void 0 : _c.wsPreEncodedFrame) !== undefined);
    }
    /**
     * Closes the transport.
     *
     * @api private
     */
    doClose(fn) {
        debug("closing");
        this.socket.close();
        fn && fn();
    }
}
exports.WebSocket = WebSocket;


/***/ }),

/***/ "../../node_modules/engine.io/build/transports/webtransport.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/engine.io/build/transports/webtransport.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebTransport = void 0;
const transport_1 = __webpack_require__(/*! ../transport */ "../../node_modules/engine.io/build/transport.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const debug = (0, debug_1.default)("engine:webtransport");
const BINARY_HEADER = Buffer.of(54);
function shouldIncludeBinaryHeader(packet, encoded) {
    // 48 === "0".charCodeAt(0) (OPEN packet type)
    // 54 === "6".charCodeAt(0) (NOOP packet type)
    return (packet.type === "message" &&
        typeof packet.data !== "string" &&
        encoded[0] >= 48 &&
        encoded[0] <= 54);
}
/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API
 */
class WebTransport extends transport_1.Transport {
    constructor(session, stream, reader) {
        super({ _query: { EIO: "4" } });
        this.session = session;
        this.writer = stream.writable.getWriter();
        (async () => {
            let binaryFlag = false;
            while (true) {
                const { value, done } = await reader.read();
                if (done) {
                    debug("session is closed");
                    break;
                }
                debug("received chunk: %o", value);
                if (!binaryFlag && value.byteLength === 1 && value[0] === 54) {
                    binaryFlag = true;
                    continue;
                }
                this.onPacket(this.parser.decodePacketFromBinary(value, binaryFlag, "nodebuffer"));
                binaryFlag = false;
            }
        })();
        session.closed.then(() => this.onClose());
        this.writable = true;
    }
    get name() {
        return "webtransport";
    }
    get supportsFraming() {
        return true;
    }
    send(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const isLast = i + 1 === packets.length;
            this.parser.encodePacketToBinary(packet, (data) => {
                if (shouldIncludeBinaryHeader(packet, data)) {
                    debug("writing binary header");
                    this.writer.write(BINARY_HEADER);
                }
                debug("writing chunk: %o", data);
                this.writer.write(data);
                if (isLast) {
                    this.writable = true;
                    this.emit("drain");
                }
            });
        }
    }
    doClose(fn) {
        debug("closing WebTransport session");
        this.session.close();
        fn && fn();
    }
}
exports.WebTransport = WebTransport;


/***/ }),

/***/ "../../node_modules/engine.io/build/userver.js":
/*!*****************************************************!*\
  !*** ../../node_modules/engine.io/build/userver.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uServer = void 0;
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/engine.io/node_modules/debug/src/index.js");
const server_1 = __webpack_require__(/*! ./server */ "../../node_modules/engine.io/build/server.js");
const transports_uws_1 = __webpack_require__(/*! ./transports-uws */ "../../node_modules/engine.io/build/transports-uws/index.js");
const debug = (0, debug_1.default)("engine:uws");
class uServer extends server_1.BaseServer {
    init() { }
    cleanup() { }
    /**
     * Prepares a request by processing the query string.
     *
     * @api private
     */
    prepare(req, res) {
        req.method = req.getMethod().toUpperCase();
        req.url = req.getUrl();
        const params = new URLSearchParams(req.getQuery());
        req._query = Object.fromEntries(params.entries());
        req.headers = {};
        req.forEach((key, value) => {
            req.headers[key] = value;
        });
        req.connection = {
            remoteAddress: Buffer.from(res.getRemoteAddressAsText()).toString(),
        };
        res.onAborted(() => {
            debug("response has been aborted");
        });
    }
    createTransport(transportName, req) {
        return new transports_uws_1.default[transportName](req);
    }
    /**
     * Attach the engine to a µWebSockets.js server
     * @param app
     * @param options
     */
    attach(app /* : TemplatedApp */, options = {}) {
        const path = this._computePath(options);
        app
            .any(path, this.handleRequest.bind(this))
            //
            .ws(path, {
            compression: options.compression,
            idleTimeout: options.idleTimeout,
            maxBackpressure: options.maxBackpressure,
            maxPayloadLength: this.opts.maxHttpBufferSize,
            upgrade: this.handleUpgrade.bind(this),
            open: (ws) => {
                const transport = ws.getUserData().transport;
                transport.socket = ws;
                transport.writable = true;
                transport.emit("drain");
            },
            message: (ws, message, isBinary) => {
                ws.getUserData().transport.onData(isBinary ? message : Buffer.from(message).toString());
            },
            close: (ws, code, message) => {
                ws.getUserData().transport.onClose(code, message);
            },
        });
    }
    _applyMiddlewares(req, res, callback) {
        if (this.middlewares.length === 0) {
            return callback();
        }
        // needed to buffer headers until the status is computed
        req.res = new ResponseWrapper(res);
        super._applyMiddlewares(req, req.res, (err) => {
            // some middlewares (like express-session) wait for the writeHead() call to flush their headers
            // see https://github.com/expressjs/session/blob/1010fadc2f071ddf2add94235d72224cf65159c6/index.js#L220-L244
            req.res.writeHead();
            callback(err);
        });
    }
    handleRequest(res, req) {
        debug('handling "%s" http request "%s"', req.getMethod(), req.getUrl());
        this.prepare(req, res);
        req.res = res;
        const callback = (errorCode, errorContext) => {
            if (errorCode !== undefined) {
                this.emit("connection_error", {
                    req,
                    code: errorCode,
                    message: server_1.Server.errorMessages[errorCode],
                    context: errorContext,
                });
                this.abortRequest(req.res, errorCode, errorContext);
                return;
            }
            if (req._query.sid) {
                debug("setting new request for existing client");
                this.clients[req._query.sid].transport.onRequest(req);
            }
            else {
                const closeConnection = (errorCode, errorContext) => this.abortRequest(res, errorCode, errorContext);
                this.handshake(req._query.transport, req, closeConnection);
            }
        };
        this._applyMiddlewares(req, res, (err) => {
            if (err) {
                callback(server_1.Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" });
            }
            else {
                this.verify(req, false, callback);
            }
        });
    }
    handleUpgrade(res, req, context) {
        debug("on upgrade");
        this.prepare(req, res);
        req.res = res;
        const callback = async (errorCode, errorContext) => {
            if (errorCode !== undefined) {
                this.emit("connection_error", {
                    req,
                    code: errorCode,
                    message: server_1.Server.errorMessages[errorCode],
                    context: errorContext,
                });
                this.abortRequest(res, errorCode, errorContext);
                return;
            }
            const id = req._query.sid;
            let transport;
            if (id) {
                const client = this.clients[id];
                if (!client) {
                    debug("upgrade attempt for closed client");
                    res.close();
                }
                else if (client.upgrading) {
                    debug("transport has already been trying to upgrade");
                    res.close();
                }
                else if (client.upgraded) {
                    debug("transport had already been upgraded");
                    res.close();
                }
                else {
                    debug("upgrading existing transport");
                    transport = this.createTransport(req._query.transport, req);
                    client.maybeUpgrade(transport);
                }
            }
            else {
                transport = await this.handshake(req._query.transport, req, (errorCode, errorContext) => this.abortRequest(res, errorCode, errorContext));
                if (!transport) {
                    return;
                }
            }
            // calling writeStatus() triggers the flushing of any header added in a middleware
            req.res.writeStatus("101 Switching Protocols");
            res.upgrade({
                transport,
            }, req.getHeader("sec-websocket-key"), req.getHeader("sec-websocket-protocol"), req.getHeader("sec-websocket-extensions"), context);
        };
        this._applyMiddlewares(req, res, (err) => {
            if (err) {
                callback(server_1.Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" });
            }
            else {
                this.verify(req, true, callback);
            }
        });
    }
    abortRequest(res, errorCode, errorContext) {
        const statusCode = errorCode === server_1.Server.errors.FORBIDDEN
            ? "403 Forbidden"
            : "400 Bad Request";
        const message = errorContext && errorContext.message
            ? errorContext.message
            : server_1.Server.errorMessages[errorCode];
        res.writeStatus(statusCode);
        res.writeHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            code: errorCode,
            message,
        }));
    }
}
exports.uServer = uServer;
class ResponseWrapper {
    constructor(res) {
        this.res = res;
        this.statusWritten = false;
        this.headers = [];
        this.isAborted = false;
    }
    set statusCode(status) {
        if (!status) {
            return;
        }
        // FIXME: handle all status codes?
        this.writeStatus(status === 200 ? "200 OK" : "204 No Content");
    }
    writeHead(status) {
        this.statusCode = status;
    }
    setHeader(key, value) {
        if (Array.isArray(value)) {
            value.forEach((val) => {
                this.writeHeader(key, val);
            });
        }
        else {
            this.writeHeader(key, value);
        }
    }
    removeHeader() {
        // FIXME: not implemented
    }
    // needed by vary: https://github.com/jshttp/vary/blob/5d725d059b3871025cf753e9dfa08924d0bcfa8f/index.js#L134
    getHeader() { }
    writeStatus(status) {
        if (this.isAborted)
            return;
        this.res.writeStatus(status);
        this.statusWritten = true;
        this.writeBufferedHeaders();
        return this;
    }
    writeHeader(key, value) {
        if (this.isAborted)
            return;
        if (key === "Content-Length") {
            // the content length is automatically added by uWebSockets.js
            return;
        }
        if (this.statusWritten) {
            this.res.writeHeader(key, value);
        }
        else {
            this.headers.push([key, value]);
        }
    }
    writeBufferedHeaders() {
        this.headers.forEach(([key, value]) => {
            this.res.writeHeader(key, value);
        });
    }
    end(data) {
        if (this.isAborted)
            return;
        this.res.cork(() => {
            if (!this.statusWritten) {
                // status will be inferred as "200 OK"
                this.writeBufferedHeaders();
            }
            this.res.end(data);
        });
    }
    onData(fn) {
        if (this.isAborted)
            return;
        this.res.onData(fn);
    }
    onAborted(fn) {
        if (this.isAborted)
            return;
        this.res.onAborted(() => {
            // Any attempt to use the UWS response object after abort will throw!
            this.isAborted = true;
            fn();
        });
    }
    cork(fn) {
        if (this.isAborted)
            return;
        this.res.cork(fn);
    }
}


/***/ }),

/***/ "../../node_modules/socket.io-parser/build/cjs/binary.js":
/*!***************************************************************!*\
  !*** ../../node_modules/socket.io-parser/build/cjs/binary.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_js_1 = __webpack_require__(/*! ./is-binary.js */ "../../node_modules/socket.io-parser/build/cjs/is-binary.js");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if ((0, is_binary_js_1.isBinary)(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ "../../node_modules/socket.io-parser/build/cjs/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/socket.io-parser/build/cjs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const component_emitter_1 = __webpack_require__(/*! @socket.io/component-emitter */ "../../node_modules/@socket.io/component-emitter/index.mjs");
const binary_js_1 = __webpack_require__(/*! ./binary.js */ "../../node_modules/socket.io-parser/build/cjs/binary.js");
const is_binary_js_1 = __webpack_require__(/*! ./is-binary.js */ "../../node_modules/socket.io-parser/build/cjs/is-binary.js");
const debug_1 = __webpack_require__(/*! debug */ "../../node_modules/socket.io-parser/node_modules/debug/src/index.js"); // debug()
const debug = (0, debug_1.default)("socket.io-parser"); // debug()
/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
exports.protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, is_binary_js_1.hasBinary)(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = (0, binary_js_1.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends component_emitter_1.Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if ((0, is_binary_js_1.isBinary)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
exports.Decoder = Decoder;
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, binary_js_1.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),

/***/ "../../node_modules/socket.io-parser/build/cjs/is-binary.js":
/*!******************************************************************!*\
  !*** ../../node_modules/socket.io-parser/build/cjs/is-binary.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
exports.hasBinary = hasBinary;


/***/ }),

/***/ "../../node_modules/socket.io/dist/broadcast-operator.js":
/*!***************************************************************!*\
  !*** ../../node_modules/socket.io/dist/broadcast-operator.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoteSocket = exports.BroadcastOperator = void 0;
const socket_1 = __webpack_require__(/*! ./socket */ "../../node_modules/socket.io/dist/socket.js");
const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "../../node_modules/socket.io-parser/build/cjs/index.js");
class BroadcastOperator {
    constructor(adapter, rooms = new Set(), exceptRooms = new Set(), flags = {}) {
        this.adapter = adapter;
        this.rooms = rooms;
        this.exceptRooms = exceptRooms;
        this.flags = flags;
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        const rooms = new Set(this.rooms);
        if (Array.isArray(room)) {
            room.forEach((r) => rooms.add(r));
        }
        else {
            rooms.add(room);
        }
        return new BroadcastOperator(this.adapter, rooms, this.exceptRooms, this.flags);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return this.to(room);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        const exceptRooms = new Set(this.exceptRooms);
        if (Array.isArray(room)) {
            room.forEach((r) => exceptRooms.add(r));
        }
        else {
            exceptRooms.add(room);
        }
        return new BroadcastOperator(this.adapter, this.rooms, exceptRooms, this.flags);
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new BroadcastOperator instance
     */
    compress(compress) {
        const flags = Object.assign({}, this.flags, { compress });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new BroadcastOperator instance
     */
    get volatile() {
        const flags = Object.assign({}, this.flags, { volatile: true });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        const flags = Object.assign({}, this.flags, { local: true });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Adds a timeout in milliseconds for the next operation
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        const flags = Object.assign({}, this.flags, { timeout });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Emits to all clients.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients
     * io.emit("foo", "bar");
     *
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an acknowledgement expected from all connected clients
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @return Always true
     */
    emit(ev, ...args) {
        if (socket_1.RESERVED_EVENTS.has(ev)) {
            throw new Error(`"${String(ev)}" is a reserved event name`);
        }
        // set up packet object
        const data = [ev, ...args];
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: data,
        };
        const withAck = typeof data[data.length - 1] === "function";
        if (!withAck) {
            this.adapter.broadcast(packet, {
                rooms: this.rooms,
                except: this.exceptRooms,
                flags: this.flags,
            });
            return true;
        }
        const ack = data.pop();
        let timedOut = false;
        let responses = [];
        const timer = setTimeout(() => {
            timedOut = true;
            ack.apply(this, [
                new Error("operation has timed out"),
                this.flags.expectSingleResponse ? null : responses,
            ]);
        }, this.flags.timeout);
        let expectedServerCount = -1;
        let actualServerCount = 0;
        let expectedClientCount = 0;
        const checkCompleteness = () => {
            if (!timedOut &&
                expectedServerCount === actualServerCount &&
                responses.length === expectedClientCount) {
                clearTimeout(timer);
                ack.apply(this, [
                    null,
                    this.flags.expectSingleResponse ? null : responses,
                ]);
            }
        };
        this.adapter.broadcastWithAck(packet, {
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, (clientCount) => {
            // each Socket.IO server in the cluster sends the number of clients that were notified
            expectedClientCount += clientCount;
            actualServerCount++;
            checkCompleteness();
        }, (clientResponse) => {
            // each client sends an acknowledgement
            responses.push(clientResponse);
            checkCompleteness();
        });
        this.adapter.serverCount().then((serverCount) => {
            expectedServerCount = serverCount;
            checkCompleteness();
        });
        return true;
    }
    /**
     * Emits an event and waits for an acknowledgement from all clients.
     *
     * @example
     * try {
     *   const responses = await io.timeout(1000).emitWithAck("some-event");
     *   console.log(responses); // one response per client
     * } catch (e) {
     *   // some clients did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when all clients have acknowledged the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            args.push((err, responses) => {
                if (err) {
                    err.responses = responses;
                    return reject(err);
                }
                else {
                    return resolve(responses);
                }
            });
            this.emit(ev, ...args);
        });
    }
    /**
     * Gets a list of clients.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link fetchSockets} instead.
     */
    allSockets() {
        if (!this.adapter) {
            throw new Error("No adapter for this namespace, are you trying to get the list of clients of a dynamic namespace?");
        }
        return this.adapter.sockets(this.rooms);
    }
    /**
     * Returns the matching socket instances. This method works across a cluster of several Socket.IO servers.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
        return this.adapter
            .fetchSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        })
            .then((sockets) => {
            return sockets.map((socket) => {
                if (socket instanceof socket_1.Socket) {
                    // FIXME the TypeScript compiler complains about missing private properties
                    return socket;
                }
                else {
                    return new RemoteSocket(this.adapter, socket);
                }
            });
        });
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room) {
        this.adapter.addSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, Array.isArray(room) ? room : [room]);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room) {
        this.adapter.delSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, Array.isArray(room) ? room : [room]);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close = false) {
        this.adapter.disconnectSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, close);
    }
}
exports.BroadcastOperator = BroadcastOperator;
/**
 * Expose of subset of the attributes and methods of the Socket class
 */
class RemoteSocket {
    constructor(adapter, details) {
        this.id = details.id;
        this.handshake = details.handshake;
        this.rooms = new Set(details.rooms);
        this.data = details.data;
        this.operator = new BroadcastOperator(adapter, new Set([this.id]), new Set(), {
            expectSingleResponse: true, // so that remoteSocket.emit() with acknowledgement behaves like socket.emit()
        });
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * const sockets = await io.fetchSockets();
     *
     * for (const socket of sockets) {
     *   if (someCondition) {
     *     socket.timeout(1000).emit("some-event", (err) => {
     *       if (err) {
     *         // the client did not acknowledge the event in the given delay
     *       }
     *     });
     *   }
     * }
     *
     * // note: if possible, using a room instead of looping over all sockets is preferable
     * io.timeout(1000).to(someConditionRoom).emit("some-event", (err, responses) => {
     *   // ...
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        return this.operator.timeout(timeout);
    }
    emit(ev, ...args) {
        return this.operator.emit(ev, ...args);
    }
    /**
     * Joins a room.
     *
     * @param {String|Array} room - room or array of rooms
     */
    join(room) {
        return this.operator.socketsJoin(room);
    }
    /**
     * Leaves a room.
     *
     * @param {String} room
     */
    leave(room) {
        return this.operator.socketsLeave(room);
    }
    /**
     * Disconnects this client.
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return {Socket} self
     */
    disconnect(close = false) {
        this.operator.disconnectSockets(close);
        return this;
    }
}
exports.RemoteSocket = RemoteSocket;


/***/ }),

/***/ "../../node_modules/socket.io/dist/client.js":
/*!***************************************************!*\
  !*** ../../node_modules/socket.io/dist/client.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "../../node_modules/socket.io-parser/build/cjs/index.js");
const debugModule = __webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js");
const url = __webpack_require__(/*! url */ "url");
const debug = debugModule("socket.io:client");
class Client {
    /**
     * Client constructor.
     *
     * @param server instance
     * @param conn
     * @package
     */
    constructor(server, conn) {
        this.sockets = new Map();
        this.nsps = new Map();
        this.server = server;
        this.conn = conn;
        this.encoder = server.encoder;
        this.decoder = new server._parser.Decoder();
        this.id = conn.id;
        this.setup();
    }
    /**
     * @return the reference to the request that originated the Engine.IO connection
     *
     * @public
     */
    get request() {
        return this.conn.request;
    }
    /**
     * Sets up event listeners.
     *
     * @private
     */
    setup() {
        this.onclose = this.onclose.bind(this);
        this.ondata = this.ondata.bind(this);
        this.onerror = this.onerror.bind(this);
        this.ondecoded = this.ondecoded.bind(this);
        // @ts-ignore
        this.decoder.on("decoded", this.ondecoded);
        this.conn.on("data", this.ondata);
        this.conn.on("error", this.onerror);
        this.conn.on("close", this.onclose);
        this.connectTimeout = setTimeout(() => {
            if (this.nsps.size === 0) {
                debug("no namespace joined yet, close the client");
                this.close();
            }
            else {
                debug("the client has already joined a namespace, nothing to do");
            }
        }, this.server._connectTimeout);
    }
    /**
     * Connects a client to a namespace.
     *
     * @param {String} name - the namespace
     * @param {Object} auth - the auth parameters
     * @private
     */
    connect(name, auth = {}) {
        if (this.server._nsps.has(name)) {
            debug("connecting to namespace %s", name);
            return this.doConnect(name, auth);
        }
        this.server._checkNamespace(name, auth, (dynamicNspName) => {
            if (dynamicNspName) {
                this.doConnect(name, auth);
            }
            else {
                debug("creation of namespace %s was denied", name);
                this._packet({
                    type: socket_io_parser_1.PacketType.CONNECT_ERROR,
                    nsp: name,
                    data: {
                        message: "Invalid namespace",
                    },
                });
            }
        });
    }
    /**
     * Connects a client to a namespace.
     *
     * @param name - the namespace
     * @param {Object} auth - the auth parameters
     *
     * @private
     */
    doConnect(name, auth) {
        const nsp = this.server.of(name);
        nsp._add(this, auth, (socket) => {
            this.sockets.set(socket.id, socket);
            this.nsps.set(nsp.name, socket);
            if (this.connectTimeout) {
                clearTimeout(this.connectTimeout);
                this.connectTimeout = undefined;
            }
        });
    }
    /**
     * Disconnects from all namespaces and closes transport.
     *
     * @private
     */
    _disconnect() {
        for (const socket of this.sockets.values()) {
            socket.disconnect();
        }
        this.sockets.clear();
        this.close();
    }
    /**
     * Removes a socket. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket) {
        if (this.sockets.has(socket.id)) {
            const nsp = this.sockets.get(socket.id).nsp.name;
            this.sockets.delete(socket.id);
            this.nsps.delete(nsp);
        }
        else {
            debug("ignoring remove for %s", socket.id);
        }
    }
    /**
     * Closes the underlying connection.
     *
     * @private
     */
    close() {
        if ("open" === this.conn.readyState) {
            debug("forcing transport close");
            this.conn.close();
            this.onclose("forced server close");
        }
    }
    /**
     * Writes a packet to the transport.
     *
     * @param {Object} packet object
     * @param {Object} opts
     * @private
     */
    _packet(packet, opts = {}) {
        if (this.conn.readyState !== "open") {
            debug("ignoring packet write %j", packet);
            return;
        }
        const encodedPackets = opts.preEncoded
            ? packet // previous versions of the adapter incorrectly used socket.packet() instead of writeToEngine()
            : this.encoder.encode(packet);
        this.writeToEngine(encodedPackets, opts);
    }
    writeToEngine(encodedPackets, opts) {
        if (opts.volatile && !this.conn.transport.writable) {
            debug("volatile packet is discarded since the transport is not currently writable");
            return;
        }
        const packets = Array.isArray(encodedPackets)
            ? encodedPackets
            : [encodedPackets];
        for (const encodedPacket of packets) {
            this.conn.write(encodedPacket, opts);
        }
    }
    /**
     * Called with incoming transport data.
     *
     * @private
     */
    ondata(data) {
        // try/catch is needed for protocol violations (GH-1880)
        try {
            this.decoder.add(data);
        }
        catch (e) {
            debug("invalid packet format");
            this.onerror(e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        let namespace;
        let authPayload;
        if (this.conn.protocol === 3) {
            const parsed = url.parse(packet.nsp, true);
            namespace = parsed.pathname;
            authPayload = parsed.query;
        }
        else {
            namespace = packet.nsp;
            authPayload = packet.data;
        }
        const socket = this.nsps.get(namespace);
        if (!socket && packet.type === socket_io_parser_1.PacketType.CONNECT) {
            this.connect(namespace, authPayload);
        }
        else if (socket &&
            packet.type !== socket_io_parser_1.PacketType.CONNECT &&
            packet.type !== socket_io_parser_1.PacketType.CONNECT_ERROR) {
            process.nextTick(function () {
                socket._onpacket(packet);
            });
        }
        else {
            debug("invalid state (packet type: %s)", packet.type);
            this.close();
        }
    }
    /**
     * Handles an error.
     *
     * @param {Object} err object
     * @private
     */
    onerror(err) {
        for (const socket of this.sockets.values()) {
            socket._onerror(err);
        }
        this.conn.close();
    }
    /**
     * Called upon transport close.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        debug("client close with reason %s", reason);
        // ignore a potential subsequent `close` event
        this.destroy();
        // `nsps` and `sockets` are cleaned up seamlessly
        for (const socket of this.sockets.values()) {
            socket._onclose(reason, description);
        }
        this.sockets.clear();
        this.decoder.destroy(); // clean up decoder
    }
    /**
     * Cleans up event listeners.
     * @private
     */
    destroy() {
        this.conn.removeListener("data", this.ondata);
        this.conn.removeListener("error", this.onerror);
        this.conn.removeListener("close", this.onclose);
        // @ts-ignore
        this.decoder.removeListener("decoded", this.ondecoded);
        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout);
            this.connectTimeout = undefined;
        }
    }
}
exports.Client = Client;


/***/ }),

/***/ "../../node_modules/socket.io/dist/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/socket.io/dist/index.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Namespace = exports.Socket = exports.Server = void 0;
const http = __webpack_require__(/*! http */ "http");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const zlib_1 = __webpack_require__(/*! zlib */ "zlib");
const accepts = __webpack_require__(/*! accepts */ "../../node_modules/accepts/index.js");
const stream_1 = __webpack_require__(/*! stream */ "stream");
const path = __webpack_require__(/*! path */ "path");
const engine_io_1 = __webpack_require__(/*! engine.io */ "../../node_modules/engine.io/build/engine.io.js");
const client_1 = __webpack_require__(/*! ./client */ "../../node_modules/socket.io/dist/client.js");
const events_1 = __webpack_require__(/*! events */ "events");
const namespace_1 = __webpack_require__(/*! ./namespace */ "../../node_modules/socket.io/dist/namespace.js");
Object.defineProperty(exports, "Namespace", ({ enumerable: true, get: function () { return namespace_1.Namespace; } }));
const parent_namespace_1 = __webpack_require__(/*! ./parent-namespace */ "../../node_modules/socket.io/dist/parent-namespace.js");
const socket_io_adapter_1 = __webpack_require__(/*! socket.io-adapter */ "../../node_modules/socket.io-adapter/dist/index.js");
const parser = __importStar(__webpack_require__(/*! socket.io-parser */ "../../node_modules/socket.io-parser/build/cjs/index.js"));
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js"));
const socket_1 = __webpack_require__(/*! ./socket */ "../../node_modules/socket.io/dist/socket.js");
Object.defineProperty(exports, "Socket", ({ enumerable: true, get: function () { return socket_1.Socket; } }));
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "../../node_modules/socket.io/dist/typed-events.js");
const uws_1 = __webpack_require__(/*! ./uws */ "../../node_modules/socket.io/dist/uws.js");
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "../../node_modules/cors/lib/index.js"));
const debug = (0, debug_1.default)("socket.io:server");
const clientVersion = (__webpack_require__(/*! ../package.json */ "../../node_modules/socket.io/package.json").version);
const dotMapRegex = /\.map/;
/**
 * Represents a Socket.IO server.
 *
 * @example
 * import { Server } from "socket.io";
 *
 * const io = new Server();
 *
 * io.on("connection", (socket) => {
 *   console.log(`socket ${socket.id} connected`);
 *
 *   // send an event to the client
 *   socket.emit("foo", "bar");
 *
 *   socket.on("foobar", () => {
 *     // an event was received from the client
 *   });
 *
 *   // upon disconnection
 *   socket.on("disconnect", (reason) => {
 *     console.log(`socket ${socket.id} disconnected due to ${reason}`);
 *   });
 * });
 *
 * io.listen(3000);
 */
class Server extends typed_events_1.StrictEventEmitter {
    constructor(srv, opts = {}) {
        super();
        /**
         * @private
         */
        this._nsps = new Map();
        this.parentNsps = new Map();
        /**
         * A subset of the {@link parentNsps} map, only containing {@link ParentNamespace} which are based on a regular
         * expression.
         *
         * @private
         */
        this.parentNamespacesFromRegExp = new Map();
        if ("object" === typeof srv &&
            srv instanceof Object &&
            !srv.listen) {
            opts = srv;
            srv = undefined;
        }
        this.path(opts.path || "/socket.io");
        this.connectTimeout(opts.connectTimeout || 45000);
        this.serveClient(false !== opts.serveClient);
        this._parser = opts.parser || parser;
        this.encoder = new this._parser.Encoder();
        this.opts = opts;
        if (opts.connectionStateRecovery) {
            opts.connectionStateRecovery = Object.assign({
                maxDisconnectionDuration: 2 * 60 * 1000,
                skipMiddlewares: true,
            }, opts.connectionStateRecovery);
            this.adapter(opts.adapter || socket_io_adapter_1.SessionAwareAdapter);
        }
        else {
            this.adapter(opts.adapter || socket_io_adapter_1.Adapter);
        }
        opts.cleanupEmptyChildNamespaces = !!opts.cleanupEmptyChildNamespaces;
        this.sockets = this.of("/");
        if (srv || typeof srv == "number")
            this.attach(srv);
        if (this.opts.cors) {
            this._corsMiddleware = (0, cors_1.default)(this.opts.cors);
        }
    }
    get _opts() {
        return this.opts;
    }
    serveClient(v) {
        if (!arguments.length)
            return this._serveClient;
        this._serveClient = v;
        return this;
    }
    /**
     * Executes the middleware for an incoming namespace not already created on the server.
     *
     * @param name - name of incoming namespace
     * @param auth - the auth parameters
     * @param fn - callback
     *
     * @private
     */
    _checkNamespace(name, auth, fn) {
        if (this.parentNsps.size === 0)
            return fn(false);
        const keysIterator = this.parentNsps.keys();
        const run = () => {
            const nextFn = keysIterator.next();
            if (nextFn.done) {
                return fn(false);
            }
            nextFn.value(name, auth, (err, allow) => {
                if (err || !allow) {
                    return run();
                }
                if (this._nsps.has(name)) {
                    // the namespace was created in the meantime
                    debug("dynamic namespace %s already exists", name);
                    return fn(this._nsps.get(name));
                }
                const namespace = this.parentNsps.get(nextFn.value).createChild(name);
                debug("dynamic namespace %s was created", name);
                fn(namespace);
            });
        };
        run();
    }
    path(v) {
        if (!arguments.length)
            return this._path;
        this._path = v.replace(/\/$/, "");
        const escapedPath = this._path.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        this.clientPathRegex = new RegExp("^" +
            escapedPath +
            "/socket\\.io(\\.msgpack|\\.esm)?(\\.min)?\\.js(\\.map)?(?:\\?|$)");
        return this;
    }
    connectTimeout(v) {
        if (v === undefined)
            return this._connectTimeout;
        this._connectTimeout = v;
        return this;
    }
    adapter(v) {
        if (!arguments.length)
            return this._adapter;
        this._adapter = v;
        for (const nsp of this._nsps.values()) {
            nsp._initAdapter();
        }
        return this;
    }
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    listen(srv, opts = {}) {
        return this.attach(srv, opts);
    }
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    attach(srv, opts = {}) {
        if ("function" == typeof srv) {
            const msg = "You are trying to attach socket.io to an express " +
                "request handler function. Please pass a http.Server instance.";
            throw new Error(msg);
        }
        // handle a port as a string
        if (Number(srv) == srv) {
            srv = Number(srv);
        }
        if ("number" == typeof srv) {
            debug("creating http server and binding to %d", srv);
            const port = srv;
            srv = http.createServer((req, res) => {
                res.writeHead(404);
                res.end();
            });
            srv.listen(port);
        }
        // merge the options passed to the Socket.IO server
        Object.assign(opts, this.opts);
        // set engine.io path to `/socket.io`
        opts.path = opts.path || this._path;
        this.initEngine(srv, opts);
        return this;
    }
    attachApp(app /*: TemplatedApp */, opts = {}) {
        // merge the options passed to the Socket.IO server
        Object.assign(opts, this.opts);
        // set engine.io path to `/socket.io`
        opts.path = opts.path || this._path;
        // initialize engine
        debug("creating uWebSockets.js-based engine with opts %j", opts);
        const engine = new engine_io_1.uServer(opts);
        engine.attach(app, opts);
        // bind to engine events
        this.bind(engine);
        if (this._serveClient) {
            // attach static file serving
            app.get(`${this._path}/*`, (res, req) => {
                if (!this.clientPathRegex.test(req.getUrl())) {
                    req.setYield(true);
                    return;
                }
                const filename = req
                    .getUrl()
                    .replace(this._path, "")
                    .replace(/\?.*$/, "")
                    .replace(/^\//, "");
                const isMap = dotMapRegex.test(filename);
                const type = isMap ? "map" : "source";
                // Per the standard, ETags must be quoted:
                // https://tools.ietf.org/html/rfc7232#section-2.3
                const expectedEtag = '"' + clientVersion + '"';
                const weakEtag = "W/" + expectedEtag;
                const etag = req.getHeader("if-none-match");
                if (etag) {
                    if (expectedEtag === etag || weakEtag === etag) {
                        debug("serve client %s 304", type);
                        res.writeStatus("304 Not Modified");
                        res.end();
                        return;
                    }
                }
                debug("serve client %s", type);
                res.writeHeader("cache-control", "public, max-age=0");
                res.writeHeader("content-type", "application/" + (isMap ? "json" : "javascript") + "; charset=utf-8");
                res.writeHeader("etag", expectedEtag);
                const filepath = path.join(__dirname, "../client-dist/", filename);
                (0, uws_1.serveFile)(res, filepath);
            });
        }
        (0, uws_1.patchAdapter)(app);
    }
    /**
     * Initialize engine
     *
     * @param srv - the server to attach to
     * @param opts - options passed to engine.io
     * @private
     */
    initEngine(srv, opts) {
        // initialize engine
        debug("creating engine.io instance with opts %j", opts);
        this.eio = (0, engine_io_1.attach)(srv, opts);
        // attach static file serving
        if (this._serveClient)
            this.attachServe(srv);
        // Export http server
        this.httpServer = srv;
        // bind to engine events
        this.bind(this.eio);
    }
    /**
     * Attaches the static file serving.
     *
     * @param srv http server
     * @private
     */
    attachServe(srv) {
        debug("attaching client serving req handler");
        const evs = srv.listeners("request").slice(0);
        srv.removeAllListeners("request");
        srv.on("request", (req, res) => {
            if (this.clientPathRegex.test(req.url)) {
                if (this._corsMiddleware) {
                    this._corsMiddleware(req, res, () => {
                        this.serve(req, res);
                    });
                }
                else {
                    this.serve(req, res);
                }
            }
            else {
                for (let i = 0; i < evs.length; i++) {
                    evs[i].call(srv, req, res);
                }
            }
        });
    }
    /**
     * Handles a request serving of client source and map
     *
     * @param req
     * @param res
     * @private
     */
    serve(req, res) {
        const filename = req.url.replace(this._path, "").replace(/\?.*$/, "");
        const isMap = dotMapRegex.test(filename);
        const type = isMap ? "map" : "source";
        // Per the standard, ETags must be quoted:
        // https://tools.ietf.org/html/rfc7232#section-2.3
        const expectedEtag = '"' + clientVersion + '"';
        const weakEtag = "W/" + expectedEtag;
        const etag = req.headers["if-none-match"];
        if (etag) {
            if (expectedEtag === etag || weakEtag === etag) {
                debug("serve client %s 304", type);
                res.writeHead(304);
                res.end();
                return;
            }
        }
        debug("serve client %s", type);
        res.setHeader("Cache-Control", "public, max-age=0");
        res.setHeader("Content-Type", "application/" + (isMap ? "json" : "javascript") + "; charset=utf-8");
        res.setHeader("ETag", expectedEtag);
        Server.sendFile(filename, req, res);
    }
    /**
     * @param filename
     * @param req
     * @param res
     * @private
     */
    static sendFile(filename, req, res) {
        const readStream = (0, fs_1.createReadStream)(path.join(__dirname, "../client-dist/", filename));
        const encoding = accepts(req).encodings(["br", "gzip", "deflate"]);
        const onError = (err) => {
            if (err) {
                res.end();
            }
        };
        switch (encoding) {
            case "br":
                res.writeHead(200, { "content-encoding": "br" });
                readStream.pipe((0, zlib_1.createBrotliCompress)()).pipe(res);
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createBrotliCompress)(), res, onError);
                break;
            case "gzip":
                res.writeHead(200, { "content-encoding": "gzip" });
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createGzip)(), res, onError);
                break;
            case "deflate":
                res.writeHead(200, { "content-encoding": "deflate" });
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createDeflate)(), res, onError);
                break;
            default:
                res.writeHead(200);
                (0, stream_1.pipeline)(readStream, res, onError);
        }
    }
    /**
     * Binds socket.io to an engine.io instance.
     *
     * @param engine engine.io (or compatible) server
     * @return self
     */
    bind(engine) {
        this.engine = engine;
        this.engine.on("connection", this.onconnection.bind(this));
        return this;
    }
    /**
     * Called with each incoming transport connection.
     *
     * @param {engine.Socket} conn
     * @return self
     * @private
     */
    onconnection(conn) {
        debug("incoming connection with id %s", conn.id);
        const client = new client_1.Client(this, conn);
        if (conn.protocol === 3) {
            // @ts-ignore
            client.connect("/");
        }
        return this;
    }
    /**
     * Looks up a namespace.
     *
     * @example
     * // with a simple string
     * const myNamespace = io.of("/my-namespace");
     *
     * // with a regex
     * const dynamicNsp = io.of(/^\/dynamic-\d+$/).on("connection", (socket) => {
     *   const namespace = socket.nsp; // newNamespace.name === "/dynamic-101"
     *
     *   // broadcast to all clients in the given sub-namespace
     *   namespace.emit("hello");
     * });
     *
     * @param name - nsp name
     * @param fn optional, nsp `connection` ev handler
     */
    of(name, fn) {
        if (typeof name === "function" || name instanceof RegExp) {
            const parentNsp = new parent_namespace_1.ParentNamespace(this);
            debug("initializing parent namespace %s", parentNsp.name);
            if (typeof name === "function") {
                this.parentNsps.set(name, parentNsp);
            }
            else {
                this.parentNsps.set((nsp, conn, next) => next(null, name.test(nsp)), parentNsp);
                this.parentNamespacesFromRegExp.set(name, parentNsp);
            }
            if (fn) {
                // @ts-ignore
                parentNsp.on("connect", fn);
            }
            return parentNsp;
        }
        if (String(name)[0] !== "/")
            name = "/" + name;
        let nsp = this._nsps.get(name);
        if (!nsp) {
            for (const [regex, parentNamespace] of this.parentNamespacesFromRegExp) {
                if (regex.test(name)) {
                    debug("attaching namespace %s to parent namespace %s", name, regex);
                    return parentNamespace.createChild(name);
                }
            }
            debug("initializing namespace %s", name);
            nsp = new namespace_1.Namespace(this, name);
            this._nsps.set(name, nsp);
            if (name !== "/") {
                // @ts-ignore
                this.sockets.emitReserved("new_namespace", nsp);
            }
        }
        if (fn)
            nsp.on("connect", fn);
        return nsp;
    }
    /**
     * Closes server connection
     *
     * @param [fn] optional, called as `fn([err])` on error OR all conns closed
     */
    close(fn) {
        for (const socket of this.sockets.sockets.values()) {
            socket._onclose("server shutting down");
        }
        this.engine.close();
        // restore the Adapter prototype
        (0, uws_1.restoreAdapter)();
        if (this.httpServer) {
            this.httpServer.close(fn);
        }
        else {
            fn && fn();
        }
    }
    /**
     * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
     *
     * @example
     * io.use((socket, next) => {
     *   // ...
     *   next();
     * });
     *
     * @param fn - the middleware function
     */
    use(fn) {
        this.sockets.use(fn);
        return this;
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        return this.sockets.to(room);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return this.sockets.in(room);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        return this.sockets.except(room);
    }
    /**
     * Emits an event and waits for an acknowledgement from all clients.
     *
     * @example
     * try {
     *   const responses = await io.timeout(1000).emitWithAck("some-event");
     *   console.log(responses); // one response per client
     * } catch (e) {
     *   // some clients did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when all clients have acknowledged the event
     */
    emitWithAck(ev, ...args) {
        return this.sockets.emitWithAck(ev, ...args);
    }
    /**
     * Sends a `message` event to all clients.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.send("hello");
     *
     * // this is equivalent to
     * io.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        this.sockets.emit("message", ...args);
        return this;
    }
    /**
     * Sends a `message` event to all clients. Alias of {@link send}.
     *
     * @return self
     */
    write(...args) {
        this.sockets.emit("message", ...args);
        return this;
    }
    /**
     * Sends a message to the other Socket.IO servers of the cluster.
     *
     * @example
     * io.serverSideEmit("hello", "world");
     *
     * io.on("hello", (arg1) => {
     *   console.log(arg1); // prints "world"
     * });
     *
     * // acknowledgements (without binary content) are supported too:
     * io.serverSideEmit("ping", (err, responses) => {
     *  if (err) {
     *     // some servers did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per server (except the current one)
     *   }
     * });
     *
     * io.on("ping", (cb) => {
     *   cb("pong");
     * });
     *
     * @param ev - the event name
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(ev, ...args) {
        return this.sockets.serverSideEmit(ev, ...args);
    }
    /**
     * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
     *
     * @example
     * try {
     *   const responses = await io.serverSideEmitWithAck("ping");
     *   console.log(responses); // one response per server (except the current one)
     * } catch (e) {
     *   // some servers did not acknowledge the event in the given delay
     * }
     *
     * @param ev - the event name
     * @param args - an array of arguments
     *
     * @return a Promise that will be fulfilled when all servers have acknowledged the event
     */
    serverSideEmitWithAck(ev, ...args) {
        return this.sockets.serverSideEmitWithAck(ev, ...args);
    }
    /**
     * Gets a list of socket ids.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link Server#fetchSockets} instead.
     */
    allSockets() {
        return this.sockets.allSockets();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    compress(compress) {
        return this.sockets.compress(compress);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get volatile() {
        return this.sockets.volatile;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        return this.sockets.local;
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        return this.sockets.timeout(timeout);
    }
    /**
     * Returns the matching socket instances.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
        return this.sockets.fetchSockets();
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room) {
        return this.sockets.socketsJoin(room);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room) {
        return this.sockets.socketsLeave(room);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close = false) {
        return this.sockets.disconnectSockets(close);
    }
}
exports.Server = Server;
/**
 * Expose main namespace (/).
 */
const emitterMethods = Object.keys(events_1.EventEmitter.prototype).filter(function (key) {
    return typeof events_1.EventEmitter.prototype[key] === "function";
});
emitterMethods.forEach(function (fn) {
    Server.prototype[fn] = function () {
        return this.sockets[fn].apply(this.sockets, arguments);
    };
});
module.exports = (srv, opts) => new Server(srv, opts);
module.exports.Server = Server;
module.exports.Namespace = namespace_1.Namespace;
module.exports.Socket = socket_1.Socket;
var socket_2 = __webpack_require__(/*! ./socket */ "../../node_modules/socket.io/dist/socket.js");


/***/ }),

/***/ "../../node_modules/socket.io/dist/namespace.js":
/*!******************************************************!*\
  !*** ../../node_modules/socket.io/dist/namespace.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Namespace = exports.RESERVED_EVENTS = void 0;
const socket_1 = __webpack_require__(/*! ./socket */ "../../node_modules/socket.io/dist/socket.js");
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "../../node_modules/socket.io/dist/typed-events.js");
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js"));
const broadcast_operator_1 = __webpack_require__(/*! ./broadcast-operator */ "../../node_modules/socket.io/dist/broadcast-operator.js");
const debug = (0, debug_1.default)("socket.io:namespace");
exports.RESERVED_EVENTS = new Set(["connect", "connection", "new_namespace"]);
/**
 * A Namespace is a communication channel that allows you to split the logic of your application over a single shared
 * connection.
 *
 * Each namespace has its own:
 *
 * - event handlers
 *
 * ```
 * io.of("/orders").on("connection", (socket) => {
 *   socket.on("order:list", () => {});
 *   socket.on("order:create", () => {});
 * });
 *
 * io.of("/users").on("connection", (socket) => {
 *   socket.on("user:list", () => {});
 * });
 * ```
 *
 * - rooms
 *
 * ```
 * const orderNamespace = io.of("/orders");
 *
 * orderNamespace.on("connection", (socket) => {
 *   socket.join("room1");
 *   orderNamespace.to("room1").emit("hello");
 * });
 *
 * const userNamespace = io.of("/users");
 *
 * userNamespace.on("connection", (socket) => {
 *   socket.join("room1"); // distinct from the room in the "orders" namespace
 *   userNamespace.to("room1").emit("holà");
 * });
 * ```
 *
 * - middlewares
 *
 * ```
 * const orderNamespace = io.of("/orders");
 *
 * orderNamespace.use((socket, next) => {
 *   // ensure the socket has access to the "orders" namespace
 * });
 *
 * const userNamespace = io.of("/users");
 *
 * userNamespace.use((socket, next) => {
 *   // ensure the socket has access to the "users" namespace
 * });
 * ```
 */
class Namespace extends typed_events_1.StrictEventEmitter {
    /**
     * Namespace constructor.
     *
     * @param server instance
     * @param name
     */
    constructor(server, name) {
        super();
        this.sockets = new Map();
        /** @private */
        this._fns = [];
        /** @private */
        this._ids = 0;
        this.server = server;
        this.name = name;
        this._initAdapter();
    }
    /**
     * Initializes the `Adapter` for this nsp.
     * Run upon changing adapter by `Server#adapter`
     * in addition to the constructor.
     *
     * @private
     */
    _initAdapter() {
        // @ts-ignore
        this.adapter = new (this.server.adapter())(this);
    }
    /**
     * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.use((socket, next) => {
     *   // ...
     *   next();
     * });
     *
     * @param fn - the middleware function
     */
    use(fn) {
        this._fns.push(fn);
        return this;
    }
    /**
     * Executes the middleware for an incoming client.
     *
     * @param socket - the socket that will get added
     * @param fn - last fn call in the middleware
     * @private
     */
    run(socket, fn) {
        const fns = this._fns.slice(0);
        if (!fns.length)
            return fn(null);
        function run(i) {
            fns[i](socket, function (err) {
                // upon error, short-circuit
                if (err)
                    return fn(err);
                // if no middleware left, summon callback
                if (!fns[i + 1])
                    return fn(null);
                // go on to next
                run(i + 1);
            });
        }
        run(0);
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * myNamespace.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * myNamespace.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * myNamespace.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).to(room);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // disconnect all clients in the "room-101" room
     * myNamespace.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).in(room);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * myNamespace.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * myNamespace.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * myNamespace.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).except(room);
    }
    /**
     * Adds a new client.
     *
     * @return {Socket}
     * @private
     */
    async _add(client, auth, fn) {
        var _a;
        debug("adding socket to nsp %s", this.name);
        const socket = await this._createSocket(client, auth);
        if (
        // @ts-ignore
        ((_a = this.server.opts.connectionStateRecovery) === null || _a === void 0 ? void 0 : _a.skipMiddlewares) &&
            socket.recovered &&
            client.conn.readyState === "open") {
            return this._doConnect(socket, fn);
        }
        this.run(socket, (err) => {
            process.nextTick(() => {
                if ("open" !== client.conn.readyState) {
                    debug("next called after client was closed - ignoring socket");
                    socket._cleanup();
                    return;
                }
                if (err) {
                    debug("middleware error, sending CONNECT_ERROR packet to the client");
                    socket._cleanup();
                    if (client.conn.protocol === 3) {
                        return socket._error(err.data || err.message);
                    }
                    else {
                        return socket._error({
                            message: err.message,
                            data: err.data,
                        });
                    }
                }
                this._doConnect(socket, fn);
            });
        });
    }
    async _createSocket(client, auth) {
        const sessionId = auth.pid;
        const offset = auth.offset;
        if (
        // @ts-ignore
        this.server.opts.connectionStateRecovery &&
            typeof sessionId === "string" &&
            typeof offset === "string") {
            let session;
            try {
                session = await this.adapter.restoreSession(sessionId, offset);
            }
            catch (e) {
                debug("error while restoring session: %s", e);
            }
            if (session) {
                debug("connection state recovered for sid %s", session.sid);
                return new socket_1.Socket(this, client, auth, session);
            }
        }
        return new socket_1.Socket(this, client, auth);
    }
    _doConnect(socket, fn) {
        // track socket
        this.sockets.set(socket.id, socket);
        // it's paramount that the internal `onconnect` logic
        // fires before user-set events to prevent state order
        // violations (such as a disconnection before the connection
        // logic is complete)
        socket._onconnect();
        if (fn)
            fn(socket);
        // fire user-set events
        this.emitReserved("connect", socket);
        this.emitReserved("connection", socket);
    }
    /**
     * Removes a client. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket) {
        if (this.sockets.has(socket.id)) {
            this.sockets.delete(socket.id);
        }
        else {
            debug("ignoring remove for %s", socket.id);
        }
    }
    /**
     * Emits to all connected clients.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * myNamespace.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the clients
     * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @return Always true
     */
    emit(ev, ...args) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).emit(ev, ...args);
    }
    /**
     * Emits an event and waits for an acknowledgement from all clients.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * try {
     *   const responses = await myNamespace.timeout(1000).emitWithAck("some-event");
     *   console.log(responses); // one response per client
     * } catch (e) {
     *   // some clients did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when all clients have acknowledged the event
     */
    emitWithAck(ev, ...args) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).emitWithAck(ev, ...args);
    }
    /**
     * Sends a `message` event to all clients.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.send("hello");
     *
     * // this is equivalent to
     * myNamespace.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        this.emit("message", ...args);
        return this;
    }
    /**
     * Sends a `message` event to all clients. Sends a `message` event. Alias of {@link send}.
     *
     * @return self
     */
    write(...args) {
        this.emit("message", ...args);
        return this;
    }
    /**
     * Sends a message to the other Socket.IO servers of the cluster.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.serverSideEmit("hello", "world");
     *
     * myNamespace.on("hello", (arg1) => {
     *   console.log(arg1); // prints "world"
     * });
     *
     * // acknowledgements (without binary content) are supported too:
     * myNamespace.serverSideEmit("ping", (err, responses) => {
     *  if (err) {
     *     // some servers did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per server (except the current one)
     *   }
     * });
     *
     * myNamespace.on("ping", (cb) => {
     *   cb("pong");
     * });
     *
     * @param ev - the event name
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(ev, ...args) {
        if (exports.RESERVED_EVENTS.has(ev)) {
            throw new Error(`"${String(ev)}" is a reserved event name`);
        }
        args.unshift(ev);
        this.adapter.serverSideEmit(args);
        return true;
    }
    /**
     * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * try {
     *   const responses = await myNamespace.serverSideEmitWithAck("ping");
     *   console.log(responses); // one response per server (except the current one)
     * } catch (e) {
     *   // some servers did not acknowledge the event in the given delay
     * }
     *
     * @param ev - the event name
     * @param args - an array of arguments
     *
     * @return a Promise that will be fulfilled when all servers have acknowledged the event
     */
    serverSideEmitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            args.push((err, responses) => {
                if (err) {
                    err.responses = responses;
                    return reject(err);
                }
                else {
                    return resolve(responses);
                }
            });
            this.serverSideEmit(ev, ...args);
        });
    }
    /**
     * Called when a packet is received from another Socket.IO server
     *
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     *
     * @private
     */
    _onServerSideEmit(args) {
        super.emitUntyped.apply(this, args);
    }
    /**
     * Gets a list of clients.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Namespace#serverSideEmit} or
     * {@link Namespace#fetchSockets} instead.
     */
    allSockets() {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).allSockets();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).compress(compress);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return self
     */
    get volatile() {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).volatile;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the “foo” event will be broadcast to all connected clients on this node
     * myNamespace.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).local;
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).timeout(timeout);
    }
    /**
     * Returns the matching socket instances.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // return all Socket instances
     * const sockets = await myNamespace.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await myNamespace.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).fetchSockets();
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances join the "room1" room
     * myNamespace.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * myNamespace.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).socketsJoin(room);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances leave the "room1" room
     * myNamespace.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * myNamespace.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).socketsLeave(room);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * myNamespace.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * myNamespace.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close = false) {
        return new broadcast_operator_1.BroadcastOperator(this.adapter).disconnectSockets(close);
    }
}
exports.Namespace = Namespace;


/***/ }),

/***/ "../../node_modules/socket.io/dist/parent-namespace.js":
/*!*************************************************************!*\
  !*** ../../node_modules/socket.io/dist/parent-namespace.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParentNamespace = void 0;
const namespace_1 = __webpack_require__(/*! ./namespace */ "../../node_modules/socket.io/dist/namespace.js");
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js"));
const debug = (0, debug_1.default)("socket.io:parent-namespace");
/**
 * A parent namespace is a special {@link Namespace} that holds a list of child namespaces which were created either
 * with a regular expression or with a function.
 *
 * @example
 * const parentNamespace = io.of(/\/dynamic-\d+/);
 *
 * parentNamespace.on("connection", (socket) => {
 *   const childNamespace = socket.nsp;
 * }
 *
 * // will reach all the clients that are in one of the child namespaces, like "/dynamic-101"
 * parentNamespace.emit("hello", "world");
 *
 */
class ParentNamespace extends namespace_1.Namespace {
    constructor(server) {
        super(server, "/_" + ParentNamespace.count++);
        this.children = new Set();
    }
    /**
     * @private
     */
    _initAdapter() {
        const broadcast = (packet, opts) => {
            this.children.forEach((nsp) => {
                nsp.adapter.broadcast(packet, opts);
            });
        };
        // @ts-ignore FIXME is there a way to declare an inner class in TypeScript?
        this.adapter = { broadcast };
    }
    emit(ev, ...args) {
        this.children.forEach((nsp) => {
            nsp.emit(ev, ...args);
        });
        return true;
    }
    createChild(name) {
        debug("creating child namespace %s", name);
        const namespace = new namespace_1.Namespace(this.server, name);
        namespace._fns = this._fns.slice(0);
        this.listeners("connect").forEach((listener) => namespace.on("connect", listener));
        this.listeners("connection").forEach((listener) => namespace.on("connection", listener));
        this.children.add(namespace);
        if (this.server._opts.cleanupEmptyChildNamespaces) {
            const remove = namespace._remove;
            namespace._remove = (socket) => {
                remove.call(namespace, socket);
                if (namespace.sockets.size === 0) {
                    debug("closing child namespace %s", name);
                    namespace.adapter.close();
                    this.server._nsps.delete(namespace.name);
                    this.children.delete(namespace);
                }
            };
        }
        this.server._nsps.set(name, namespace);
        // @ts-ignore
        this.server.sockets.emitReserved("new_namespace", namespace);
        return namespace;
    }
    fetchSockets() {
        // note: we could make the fetchSockets() method work for dynamic namespaces created with a regex (by sending the
        // regex to the other Socket.IO servers, and returning the sockets of each matching namespace for example), but
        // the behavior for namespaces created with a function is less clear
        // note²: we cannot loop over each children namespace, because with multiple Socket.IO servers, a given namespace
        // may exist on one node but not exist on another (since it is created upon client connection)
        throw new Error("fetchSockets() is not supported on parent namespaces");
    }
}
exports.ParentNamespace = ParentNamespace;
ParentNamespace.count = 0;


/***/ }),

/***/ "../../node_modules/socket.io/dist/socket.js":
/*!***************************************************!*\
  !*** ../../node_modules/socket.io/dist/socket.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = exports.RESERVED_EVENTS = void 0;
const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "../../node_modules/socket.io-parser/build/cjs/index.js");
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js"));
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "../../node_modules/socket.io/dist/typed-events.js");
const base64id_1 = __importDefault(__webpack_require__(/*! base64id */ "../../node_modules/base64id/lib/base64id.js"));
const broadcast_operator_1 = __webpack_require__(/*! ./broadcast-operator */ "../../node_modules/socket.io/dist/broadcast-operator.js");
const debug = (0, debug_1.default)("socket.io:socket");
const RECOVERABLE_DISCONNECT_REASONS = new Set([
    "transport error",
    "transport close",
    "forced close",
    "ping timeout",
    "server shutting down",
    "forced server close",
]);
exports.RESERVED_EVENTS = new Set([
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
]);
function noop() { }
/**
 * This is the main object for interacting with a client.
 *
 * A Socket belongs to a given {@link Namespace} and uses an underlying {@link Client} to communicate.
 *
 * Within each {@link Namespace}, you can also define arbitrary channels (called "rooms") that the {@link Socket} can
 * join and leave. That provides a convenient way to broadcast to a group of socket instances.
 *
 * @example
 * io.on("connection", (socket) => {
 *   console.log(`socket ${socket.id} connected`);
 *
 *   // send an event to the client
 *   socket.emit("foo", "bar");
 *
 *   socket.on("foobar", () => {
 *     // an event was received from the client
 *   });
 *
 *   // join the room named "room1"
 *   socket.join("room1");
 *
 *   // broadcast to everyone in the room named "room1"
 *   io.to("room1").emit("hello");
 *
 *   // upon disconnection
 *   socket.on("disconnect", (reason) => {
 *     console.log(`socket ${socket.id} disconnected due to ${reason}`);
 *   });
 * });
 */
class Socket extends typed_events_1.StrictEventEmitter {
    /**
     * Interface to a `Client` for a given `Namespace`.
     *
     * @param {Namespace} nsp
     * @param {Client} client
     * @param {Object} auth
     * @package
     */
    constructor(nsp, client, auth, previousSession) {
        super();
        this.nsp = nsp;
        this.client = client;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted to the client, the data attribute and the rooms will be restored.
         */
        this.recovered = false;
        /**
         * Additional information that can be attached to the Socket instance and which will be used in the
         * {@link Server.fetchSockets()} method.
         */
        this.data = {};
        /**
         * Whether the socket is currently connected or not.
         *
         * @example
         * io.use((socket, next) => {
         *   console.log(socket.connected); // false
         *   next();
         * });
         *
         * io.on("connection", (socket) => {
         *   console.log(socket.connected); // true
         * });
         */
        this.connected = false;
        this.acks = new Map();
        this.fns = [];
        this.flags = {};
        this.server = nsp.server;
        this.adapter = this.nsp.adapter;
        if (previousSession) {
            this.id = previousSession.sid;
            this.pid = previousSession.pid;
            previousSession.rooms.forEach((room) => this.join(room));
            this.data = previousSession.data;
            previousSession.missedPackets.forEach((packet) => {
                this.packet({
                    type: socket_io_parser_1.PacketType.EVENT,
                    data: packet,
                });
            });
            this.recovered = true;
        }
        else {
            if (client.conn.protocol === 3) {
                // @ts-ignore
                this.id = nsp.name !== "/" ? nsp.name + "#" + client.id : client.id;
            }
            else {
                this.id = base64id_1.default.generateId(); // don't reuse the Engine.IO id because it's sensitive information
            }
            if (this.server._opts.connectionStateRecovery) {
                this.pid = base64id_1.default.generateId();
            }
        }
        this.handshake = this.buildHandshake(auth);
        // prevents crash when the socket receives an "error" event without listener
        this.on("error", noop);
    }
    /**
     * Builds the `handshake` BC object
     *
     * @private
     */
    buildHandshake(auth) {
        return {
            headers: this.request.headers,
            time: new Date() + "",
            address: this.conn.remoteAddress,
            xdomain: !!this.request.headers.origin,
            // @ts-ignore
            secure: !!this.request.connection.encrypted,
            issued: +new Date(),
            url: this.request.url,
            // @ts-ignore
            query: this.request._query,
            auth,
        };
    }
    /**
     * Emits to this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.emit("hello", "world");
     *
     *   // all serializable datastructures are supported (no need to call JSON.stringify)
     *   socket.emit("hello", 1, "2", { 3: ["4"], 5: Buffer.from([6]) });
     *
     *   // with an acknowledgement from the client
     *   socket.emit("hello", "world", (val) => {
     *     // ...
     *   });
     * });
     *
     * @return Always returns `true`.
     */
    emit(ev, ...args) {
        if (exports.RESERVED_EVENTS.has(ev)) {
            throw new Error(`"${String(ev)}" is a reserved event name`);
        }
        const data = [ev, ...args];
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: data,
        };
        // access last argument to see if it's an ACK callback
        if (typeof data[data.length - 1] === "function") {
            const id = this.nsp._ids++;
            debug("emitting packet with ack id %d", id);
            this.registerAckCallback(id, data.pop());
            packet.id = id;
        }
        const flags = Object.assign({}, this.flags);
        this.flags = {};
        // @ts-ignore
        if (this.nsp.server.opts.connectionStateRecovery) {
            // this ensures the packet is stored and can be transmitted upon reconnection
            this.adapter.broadcast(packet, {
                rooms: new Set([this.id]),
                except: new Set(),
                flags,
            });
        }
        else {
            this.notifyOutgoingListeners(packet);
            this.packet(packet, flags);
        }
        return true;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * io.on("connection", async (socket) => {
     *   // without timeout
     *   const response = await socket.emitWithAck("hello", "world");
     *
     *   // with a specific timeout
     *   try {
     *     const response = await socket.timeout(1000).emitWithAck("hello", "world");
     *   } catch (err) {
     *     // the client did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @return a Promise that will be fulfilled when the client acknowledges the event
     */
    emitWithAck(ev, ...args) {
        // the timeout flag is optional
        const withErr = this.flags.timeout !== undefined;
        return new Promise((resolve, reject) => {
            args.push((arg1, arg2) => {
                if (withErr) {
                    return arg1 ? reject(arg1) : resolve(arg2);
                }
                else {
                    return resolve(arg1);
                }
            });
            this.emit(ev, ...args);
        });
    }
    /**
     * @private
     */
    registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks.set(id, ack);
            return;
        }
        const timer = setTimeout(() => {
            debug("event with ack id %d has timed out after %d ms", id, timeout);
            this.acks.delete(id);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks.set(id, (...args) => {
            clearTimeout(timer);
            ack.apply(this, [null, ...args]);
        });
    }
    /**
     * Targets a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients in the “room-101” room, except this socket
     *   socket.to("room-101").emit("foo", "bar");
     *
     *   // the code above is equivalent to:
     *   io.to("room-101").except(socket.id).emit("foo", "bar");
     *
     *   // with an array of rooms (a client will be notified at most once)
     *   socket.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.to("room-101").to("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        return this.newBroadcastOperator().to(room);
    }
    /**
     * Targets a room when broadcasting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect all clients in the "room-101" room, except this socket
     *   socket.in("room-101").disconnectSockets();
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return this.newBroadcastOperator().in(room);
    }
    /**
     * Excludes a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     *   // and this socket
     *   socket.except("room-101").emit("foo", "bar");
     *
     *   // with an array of rooms
     *   socket.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.except("room-101").except("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        return this.newBroadcastOperator().except(room);
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.send("hello");
     *
     *   // this is equivalent to
     *   socket.emit("message", "hello");
     * });
     *
     * @return self
     */
    send(...args) {
        this.emit("message", ...args);
        return this;
    }
    /**
     * Sends a `message` event. Alias of {@link send}.
     *
     * @return self
     */
    write(...args) {
        this.emit("message", ...args);
        return this;
    }
    /**
     * Writes a packet.
     *
     * @param {Object} packet - packet object
     * @param {Object} opts - options
     * @private
     */
    packet(packet, opts = {}) {
        packet.nsp = this.nsp.name;
        opts.compress = false !== opts.compress;
        this.client._packet(packet, opts);
    }
    /**
     * Joins a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // join a single room
     *   socket.join("room1");
     *
     *   // join multiple rooms
     *   socket.join(["room1", "room2"]);
     * });
     *
     * @param {String|Array} rooms - room or array of rooms
     * @return a Promise or nothing, depending on the adapter
     */
    join(rooms) {
        debug("join room %s", rooms);
        return this.adapter.addAll(this.id, new Set(Array.isArray(rooms) ? rooms : [rooms]));
    }
    /**
     * Leaves a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // leave a single room
     *   socket.leave("room1");
     *
     *   // leave multiple rooms
     *   socket.leave("room1").leave("room2");
     * });
     *
     * @param {String} room
     * @return a Promise or nothing, depending on the adapter
     */
    leave(room) {
        debug("leave room %s", room);
        return this.adapter.del(this.id, room);
    }
    /**
     * Leave all rooms.
     *
     * @private
     */
    leaveAll() {
        this.adapter.delAll(this.id);
    }
    /**
     * Called by `Namespace` upon successful
     * middleware execution (ie: authorization).
     * Socket is added to namespace array before
     * call to join, so adapters can access it.
     *
     * @private
     */
    _onconnect() {
        debug("socket connected - writing packet");
        this.connected = true;
        this.join(this.id);
        if (this.conn.protocol === 3) {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT });
        }
        else {
            this.packet({
                type: socket_io_parser_1.PacketType.CONNECT,
                data: { sid: this.id, pid: this.pid },
            });
        }
    }
    /**
     * Called with each packet. Called by `Client`.
     *
     * @param {Object} packet
     * @private
     */
    _onpacket(packet) {
        debug("got packet %j", packet);
        switch (packet.type) {
            case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
        }
    }
    /**
     * Called upon event packet.
     *
     * @param {Packet} packet - packet object
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        this.dispatch(args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @param {Number} id - packet id
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function () {
            // prevent double callbacks
            if (sent)
                return;
            const args = Array.prototype.slice.call(arguments);
            debug("sending ack %j", args);
            self.packet({
                id: id,
                type: socket_io_parser_1.PacketType.ACK,
                data: args,
            });
            sent = true;
        };
    }
    /**
     * Called upon ack packet.
     *
     * @private
     */
    onack(packet) {
        const ack = this.acks.get(packet.id);
        if ("function" == typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            this.acks.delete(packet.id);
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon client disconnect packet.
     *
     * @private
     */
    ondisconnect() {
        debug("got disconnect packet");
        this._onclose("client namespace disconnect");
    }
    /**
     * Handles a client error.
     *
     * @private
     */
    _onerror(err) {
        // FIXME the meaning of the "error" event is overloaded:
        //  - it can be sent by the client (`socket.emit("error")`)
        //  - it can be emitted when the connection encounters an error (an invalid packet for example)
        //  - it can be emitted when a packet is rejected in a middleware (`socket.use()`)
        this.emitReserved("error", err);
    }
    /**
     * Called upon closing. Called by `Client`.
     *
     * @param {String} reason
     * @param description
     * @throw {Error} optional error object
     *
     * @private
     */
    _onclose(reason, description) {
        if (!this.connected)
            return this;
        debug("closing socket - reason %s", reason);
        this.emitReserved("disconnecting", reason, description);
        if (this.server._opts.connectionStateRecovery &&
            RECOVERABLE_DISCONNECT_REASONS.has(reason)) {
            debug("connection state recovery is enabled for sid %s", this.id);
            this.adapter.persistSession({
                sid: this.id,
                pid: this.pid,
                rooms: [...this.rooms],
                data: this.data,
            });
        }
        this._cleanup();
        this.nsp._remove(this);
        this.client._remove(this);
        this.connected = false;
        this.emitReserved("disconnect", reason, description);
        return;
    }
    /**
     * Makes the socket leave all the rooms it was part of and prevents it from joining any other room
     *
     * @private
     */
    _cleanup() {
        this.leaveAll();
        this.join = noop;
    }
    /**
     * Produces an `error` packet.
     *
     * @param {Object} err - error object
     *
     * @private
     */
    _error(err) {
        this.packet({ type: socket_io_parser_1.PacketType.CONNECT_ERROR, data: err });
    }
    /**
     * Disconnects this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect this socket (the connection might be kept alive for other namespaces)
     *   socket.disconnect();
     *
     *   // disconnect this socket and close the underlying connection
     *   socket.disconnect(true);
     * })
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return self
     */
    disconnect(close = false) {
        if (!this.connected)
            return this;
        if (close) {
            this.client._disconnect();
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
            this._onclose("server namespace disconnect");
        }
        return this;
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.compress(false).emit("hello");
     * });
     *
     * @param {Boolean} compress - if `true`, compresses the sending data
     * @return {Socket} self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.volatile.emit("hello"); // the client may or may not receive it
     * });
     *
     * @return {Socket} self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to every sockets but the
     * sender.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients, except this socket
     *   socket.broadcast.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get broadcast() {
        return this.newBroadcastOperator();
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients on this node, except this socket
     *   socket.local.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        return this.newBroadcastOperator().local;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the client:
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.timeout(5000).emit("my-event", (err) => {
     *     if (err) {
     *       // the client did not acknowledge the event in the given delay
     *     }
     *   });
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Dispatch incoming event to socket listeners.
     *
     * @param {Array} event - event that will get emitted
     * @private
     */
    dispatch(event) {
        debug("dispatching an event %j", event);
        this.run(event, (err) => {
            process.nextTick(() => {
                if (err) {
                    return this._onerror(err);
                }
                if (this.connected) {
                    super.emitUntyped.apply(this, event);
                }
                else {
                    debug("ignore packet received after disconnection");
                }
            });
        });
    }
    /**
     * Sets up socket middleware.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.use(([event, ...args], next) => {
     *     if (isUnauthorized(event)) {
     *       return next(new Error("unauthorized event"));
     *     }
     *     // do not forget to call next
     *     next();
     *   });
     *
     *   socket.on("error", (err) => {
     *     if (err && err.message === "unauthorized event") {
     *       socket.disconnect();
     *     }
     *   });
     * });
     *
     * @param {Function} fn - middleware function (event, next)
     * @return {Socket} self
     */
    use(fn) {
        this.fns.push(fn);
        return this;
    }
    /**
     * Executes the middleware for an incoming event.
     *
     * @param {Array} event - event that will get emitted
     * @param {Function} fn - last fn call in the middleware
     * @private
     */
    run(event, fn) {
        const fns = this.fns.slice(0);
        if (!fns.length)
            return fn(null);
        function run(i) {
            fns[i](event, function (err) {
                // upon error, short-circuit
                if (err)
                    return fn(err);
                // if no middleware left, summon callback
                if (!fns[i + 1])
                    return fn(null);
                // go on to next
                run(i + 1);
            });
        }
        run(0);
    }
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * A reference to the request that originated the underlying Engine.IO Socket.
     */
    get request() {
        return this.client.request;
    }
    /**
     * A reference to the underlying Client transport connection (Engine.IO Socket object).
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.conn.transport.name); // prints "polling" or "websocket"
     *
     *   socket.conn.once("upgrade", () => {
     *     console.log(socket.conn.transport.name); // prints "websocket"
     *   });
     * });
     */
    get conn() {
        return this.client.conn;
    }
    /**
     * Returns the rooms the socket is currently in.
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.rooms); // Set { <socket.id> }
     *
     *   socket.join("room1");
     *
     *   console.log(socket.rooms); // Set { <socket.id>, "room1" }
     * });
     */
    get rooms() {
        return this.adapter.socketRooms(this.id) || new Set();
    }
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAny((event, ...args) => {
     *     console.log(`got event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is received.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`got event ${event}`);
     *   }
     *
     *   socket.onAny(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAny(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAny();
     * });
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is sent. The event name is passed as the first argument to
     * the callback.
     *
     * Note: acknowledgements sent to the client are not included.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.prependAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is sent.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   }
     *
     *   socket.onAnyOutgoing(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAnyOutgoing(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAnyOutgoing();
     * });
     *
     * @param listener - the catch-all listener
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent (emit or broadcast)
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
    newBroadcastOperator() {
        const flags = Object.assign({}, this.flags);
        this.flags = {};
        return new broadcast_operator_1.BroadcastOperator(this.adapter, new Set(), new Set([this.id]), flags);
    }
}
exports.Socket = Socket;


/***/ }),

/***/ "../../node_modules/socket.io/dist/typed-events.js":
/*!*********************************************************!*\
  !*** ../../node_modules/socket.io/dist/typed-events.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrictEventEmitter = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */
class StrictEventEmitter extends events_1.EventEmitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on(ev, listener) {
        return super.on(ev, listener);
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once(ev, listener) {
        return super.once(ev, listener);
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit(ev, ...args) {
        return super.emit(ev, ...args);
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    emitReserved(ev, ...args) {
        return super.emit(ev, ...args);
    }
    /**
     * Emits an event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can get around the strict typing. This is useful for
     * calling `emit.apply`, which can be called as `emitUntyped.apply`.
     *
     * @param ev Event name
     * @param args Arguments to emit along with the event
     */
    emitUntyped(ev, ...args) {
        return super.emit(ev, ...args);
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners(event) {
        return super.listeners(event);
    }
}
exports.StrictEventEmitter = StrictEventEmitter;


/***/ }),

/***/ "../../node_modules/socket.io/dist/uws.js":
/*!************************************************!*\
  !*** ../../node_modules/socket.io/dist/uws.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serveFile = exports.restoreAdapter = exports.patchAdapter = void 0;
const socket_io_adapter_1 = __webpack_require__(/*! socket.io-adapter */ "../../node_modules/socket.io-adapter/dist/index.js");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "../../node_modules/socket.io/node_modules/debug/src/index.js"));
const debug = (0, debug_1.default)("socket.io:adapter-uws");
const SEPARATOR = "\x1f"; // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const { addAll, del, broadcast } = socket_io_adapter_1.Adapter.prototype;
function patchAdapter(app /* : TemplatedApp */) {
    socket_io_adapter_1.Adapter.prototype.addAll = function (id, rooms) {
        const isNew = !this.sids.has(id);
        addAll.call(this, id, rooms);
        const socket = this.nsp.sockets.get(id);
        if (!socket) {
            return;
        }
        if (socket.conn.transport.name === "websocket") {
            subscribe(this.nsp.name, socket, isNew, rooms);
            return;
        }
        if (isNew) {
            socket.conn.on("upgrade", () => {
                const rooms = this.sids.get(id);
                if (rooms) {
                    subscribe(this.nsp.name, socket, isNew, rooms);
                }
            });
        }
    };
    socket_io_adapter_1.Adapter.prototype.del = function (id, room) {
        del.call(this, id, room);
        const socket = this.nsp.sockets.get(id);
        if (socket && socket.conn.transport.name === "websocket") {
            // @ts-ignore
            const sessionId = socket.conn.id;
            // @ts-ignore
            const websocket = socket.conn.transport.socket;
            const topic = `${this.nsp.name}${SEPARATOR}${room}`;
            debug("unsubscribe connection %s from topic %s", sessionId, topic);
            websocket.unsubscribe(topic);
        }
    };
    socket_io_adapter_1.Adapter.prototype.broadcast = function (packet, opts) {
        const useFastPublish = opts.rooms.size <= 1 && opts.except.size === 0;
        if (!useFastPublish) {
            broadcast.call(this, packet, opts);
            return;
        }
        const flags = opts.flags || {};
        const basePacketOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress,
        };
        packet.nsp = this.nsp.name;
        const encodedPackets = this.encoder.encode(packet);
        const topic = opts.rooms.size === 0
            ? this.nsp.name
            : `${this.nsp.name}${SEPARATOR}${opts.rooms.keys().next().value}`;
        debug("fast publish to %s", topic);
        // fast publish for clients connected with WebSocket
        encodedPackets.forEach((encodedPacket) => {
            const isBinary = typeof encodedPacket !== "string";
            // "4" being the message type in the Engine.IO protocol, see https://github.com/socketio/engine.io-protocol
            app.publish(topic, isBinary ? encodedPacket : "4" + encodedPacket, isBinary);
        });
        this.apply(opts, (socket) => {
            if (socket.conn.transport.name !== "websocket") {
                // classic publish for clients connected with HTTP long-polling
                socket.client.writeToEngine(encodedPackets, basePacketOpts);
            }
        });
    };
}
exports.patchAdapter = patchAdapter;
function subscribe(namespaceName, socket, isNew, rooms) {
    // @ts-ignore
    const sessionId = socket.conn.id;
    // @ts-ignore
    const websocket = socket.conn.transport.socket;
    if (isNew) {
        debug("subscribe connection %s to topic %s", sessionId, namespaceName);
        websocket.subscribe(namespaceName);
    }
    rooms.forEach((room) => {
        const topic = `${namespaceName}${SEPARATOR}${room}`; // '#' can be used as wildcard
        debug("subscribe connection %s to topic %s", sessionId, topic);
        websocket.subscribe(topic);
    });
}
function restoreAdapter() {
    socket_io_adapter_1.Adapter.prototype.addAll = addAll;
    socket_io_adapter_1.Adapter.prototype.del = del;
    socket_io_adapter_1.Adapter.prototype.broadcast = broadcast;
}
exports.restoreAdapter = restoreAdapter;
const toArrayBuffer = (buffer) => {
    const { buffer: arrayBuffer, byteOffset, byteLength } = buffer;
    return arrayBuffer.slice(byteOffset, byteOffset + byteLength);
};
// imported from https://github.com/kolodziejczak-sz/uwebsocket-serve
function serveFile(res /* : HttpResponse */, filepath) {
    const { size } = (0, fs_1.statSync)(filepath);
    const readStream = (0, fs_1.createReadStream)(filepath);
    const destroyReadStream = () => !readStream.destroyed && readStream.destroy();
    const onError = (error) => {
        destroyReadStream();
        throw error;
    };
    const onDataChunk = (chunk) => {
        const arrayBufferChunk = toArrayBuffer(chunk);
        const lastOffset = res.getWriteOffset();
        const [ok, done] = res.tryEnd(arrayBufferChunk, size);
        if (!done && !ok) {
            readStream.pause();
            res.onWritable((offset) => {
                const [ok, done] = res.tryEnd(arrayBufferChunk.slice(offset - lastOffset), size);
                if (!done && ok) {
                    readStream.resume();
                }
                return ok;
            });
        }
    };
    res.onAborted(destroyReadStream);
    readStream
        .on("data", onDataChunk)
        .on("error", onError)
        .on("end", destroyReadStream);
}
exports.serveFile = serveFile;


/***/ }),

/***/ "../../node_modules/@socket.io/component-emitter/index.mjs":
/*!*****************************************************************!*\
  !*** ../../node_modules/@socket.io/component-emitter/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Emitter: () => (/* binding */ Emitter)
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "../../node_modules/mediasoup/node_modules/supports-color/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/mediasoup/node_modules/supports-color/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSupportsColor: () => (/* binding */ createSupportsColor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ "node:process");
/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:os */ "node:os");
/* harmony import */ var node_tty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:tty */ "node:tty");




// From: https://github.com/sindresorhus/has-flag/blob/main/index.js
/// function hasFlag(flag, argv = globalThis.Deno?.args ?? process.argv) {
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : node_process__WEBPACK_IMPORTED_MODULE_0__.argv) {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}

const {env} = node_process__WEBPACK_IMPORTED_MODULE_0__;

let flagForceColor;
if (
	hasFlag('no-color')
	|| hasFlag('no-colors')
	|| hasFlag('color=false')
	|| hasFlag('color=never')
) {
	flagForceColor = 0;
} else if (
	hasFlag('color')
	|| hasFlag('colors')
	|| hasFlag('color=true')
	|| hasFlag('color=always')
) {
	flagForceColor = 1;
}

function envForceColor() {
	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			return 1;
		}

		if (env.FORCE_COLOR === 'false') {
			return 0;
		}

		return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3,
	};
}

function _supportsColor(haveStream, {streamIsTTY, sniffFlags = true} = {}) {
	const noFlagForceColor = envForceColor();
	if (noFlagForceColor !== undefined) {
		flagForceColor = noFlagForceColor;
	}

	const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;

	if (forceColor === 0) {
		return 0;
	}

	if (sniffFlags) {
		if (hasFlag('color=16m')
			|| hasFlag('color=full')
			|| hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}
	}

	// Check for Azure DevOps pipelines.
	// Has to be above the `!streamIsTTY` check.
	if ('TF_BUILD' in env && 'AGENT_NAME' in env) {
		return 1;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (node_process__WEBPACK_IMPORTED_MODULE_0__.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = node_os__WEBPACK_IMPORTED_MODULE_1__.release().split('.');
		if (
			Number(osRelease[0]) >= 10
			&& Number(osRelease[2]) >= 10_586
		) {
			return Number(osRelease[2]) >= 14_931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if ('GITHUB_ACTIONS' in env) {
			return 3;
		}

		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'BUILDKITE', 'DRONE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if (env.TERM === 'xterm-kitty') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app': {
				return version >= 3 ? 3 : 2;
			}

			case 'Apple_Terminal': {
				return 2;
			}
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function createSupportsColor(stream, options = {}) {
	const level = _supportsColor(stream, {
		streamIsTTY: stream && stream.isTTY,
		...options,
	});

	return translateLevel(level);
}

const supportsColor = {
	stdout: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(1)}),
	stderr: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(2)}),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportsColor);


/***/ }),

/***/ "../../node_modules/socket.io/wrapper.mjs":
/*!************************************************!*\
  !*** ../../node_modules/socket.io/wrapper.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Namespace: () => (/* binding */ Namespace),
/* harmony export */   Server: () => (/* binding */ Server),
/* harmony export */   Socket: () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/index.js */ "../../node_modules/socket.io/dist/index.js");


const {Server, Namespace, Socket} = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__;


/***/ }),

/***/ "../../node_modules/mime-db/db.json":
/*!******************************************!*\
  !*** ../../node_modules/mime-db/db.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";

/***/ }),

/***/ "../../node_modules/socket.io/package.json":
/*!*************************************************!*\
  !*** ../../node_modules/socket.io/package.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"socket.io","version":"4.7.1","description":"node.js realtime framework server","keywords":["realtime","framework","websocket","tcp","events","socket","io"],"files":["dist/","client-dist/","wrapper.mjs","!**/*.tsbuildinfo"],"directories":{"doc":"docs/","example":"example/","lib":"lib/","test":"test/"},"type":"commonjs","main":"./dist/index.js","exports":{"types":"./dist/index.d.ts","import":"./wrapper.mjs","require":"./dist/index.js"},"types":"./dist/index.d.ts","license":"MIT","repository":{"type":"git","url":"git://github.com/socketio/socket.io"},"scripts":{"compile":"rimraf ./dist && tsc","test":"npm run format:check && npm run compile && npm run test:types && npm run test:unit","test:types":"tsd","test:unit":"nyc mocha --require ts-node/register --reporter spec --slow 200 --bail --timeout 10000 test/index.ts","format:check":"prettier --check \\"lib/**/*.ts\\" \\"test/**/*.ts\\"","format:fix":"prettier --write \\"lib/**/*.ts\\" \\"test/**/*.ts\\"","prepack":"npm run compile"},"dependencies":{"accepts":"~1.3.4","base64id":"~2.0.0","cors":"~2.8.5","debug":"~4.3.2","engine.io":"~6.5.0","socket.io-adapter":"~2.5.2","socket.io-parser":"~4.2.4"},"devDependencies":{"@types/mocha":"^9.0.0","expect.js":"0.3.1","mocha":"^10.0.0","nyc":"^15.1.0","prettier":"^2.3.2","rimraf":"^3.0.2","socket.io-client":"4.7.1","socket.io-client-v2":"npm:socket.io-client@^2.4.0","superagent":"^8.0.0","supertest":"^6.1.6","ts-node":"^10.2.1","tsd":"^0.21.0","typescript":"^4.4.2","uWebSockets.js":"github:uNetworking/uWebSockets.js#v20.30.0"},"contributors":[{"name":"Guillermo Rauch","email":"rauchg@gmail.com"},{"name":"Arnout Kazemier","email":"info@3rd-eden.com"},{"name":"Vladimir Dronnikov","email":"dronnikov@gmail.com"},{"name":"Einar Otto Stangvik","email":"einaros@gmail.com"}],"engines":{"node":">=10.0.0"},"tsd":{"directory":"test"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const run = () => __awaiter(void 0, void 0, void 0, function* () {
    yield _server__WEBPACK_IMPORTED_MODULE_0__.Server.create();
});
run();

})();

/******/ })()
;
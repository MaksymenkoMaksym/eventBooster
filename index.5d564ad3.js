function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequirefc40;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequirefc40=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("bRlFp",(function(e,t){var n=o("2bBga"),i=o("djt5d"),r=o("6zSb1"),s=o("d0EKm");var a=function e(t){var o=new r(t),a=i(r.prototype.request,o);return n.extend(a,r.prototype,o),n.extend(a,o),a.create=function(n){return e(s(t,n))},a}(o("hqlPG"));a.Axios=r,a.CanceledError=o("83xK9"),a.CancelToken=o("2sjhC"),a.isCancel=o("ksuZT"),a.VERSION=o("50GW0").version,a.toFormData=o("aewVa"),a.AxiosError=o("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=o("av9gA"),a.isAxiosError=o("gNhGc"),e.exports=a,e.exports.default=a})),o.register("2bBga",(function(e,t){var n,i=o("djt5d"),r=Object.prototype.toString,s=(n=Object.create(null),function(e){var t=r.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function l(e){return Array.isArray(e)}function c(e){return void 0===e}var u=a("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var f=a("Date"),p=a("File"),m=a("Blob"),g=a("FileList");function y(e){return"[object Function]"===r.call(e)}var v=a("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),l(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:l,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||r.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:d,isUndefined:c,isDate:f,isFile:p,isBlob:m,isFunction:y,isStream:function(e){return h(e)&&y(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,i){d(t[i])&&d(n)?t[i]=e(t[i],n):d(n)?t[i]=e({},n):l(n)?t[i]=n.slice():t[i]=n}for(var i=0,r=arguments.length;i<r;i++)_(arguments[i],n);return t},extend:function(e,t,n){return _(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var i,r,o,s={};t=t||{};do{for(r=(i=Object.getOwnPropertyNames(e)).length;r-- >0;)s[o=i[r]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:g}})),o.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}})),o.register("6zSb1",(function(e,t){var n=o("2bBga"),i=o("2RNjJ"),r=o("5Dm7L"),s=o("eQ5d8"),a=o("d0EKm"),l=o("1ZTQa"),c=o("6zj0X"),u=c.validators;function h(e){this.defaults=e,this.interceptors={request:new r,response:new r}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var o,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!r){var h=[s,void 0];for(Array.prototype.unshift.apply(h,i),h=h.concat(l),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var d=t;i.length;){var f=i.shift(),p=i.shift();try{d=f(d)}catch(e){p(e);break}}try{o=s(d)}catch(e){return Promise.reject(e)}for(;l.length;)o=o.then(l.shift(),l.shift());return o},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=l(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(a(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("2RNjJ",(function(e,t){var n=o("2bBga");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("5Dm7L",(function(e,t){var n=o("2bBga");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i})),o.register("eQ5d8",(function(e,t){var n=o("2bBga"),i=o("bhEpd"),r=o("ksuZT"),s=o("hqlPG"),a=o("83xK9");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return l(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return l(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return r(t)||(l(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("bhEpd",(function(e,t){var n=o("2bBga"),i=o("hqlPG");e.exports=function(e,t,r){var o=this||i;return n.forEach(r,(function(n){e=n.call(o,e,t)})),e}})),o.register("hqlPG",(function(e,t){var n=o("4TNnu"),i=o("2bBga"),r=o("i16eu"),s=o("121rJ"),a=o("2wfLM"),l=o("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,d={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("9VVcb")),h),transformRequest:[function(e,t){if(r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=i.isObject(e),s=t&&t["Content-Type"];if((n=i.isFileList(e))||o&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return l(n?{"files[]":e}:e,a&&new a)}return o||"application/json"===s?(u(t,"application/json"),function(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){d.headers[e]=i.merge(c)})),e.exports=d})),o.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),o.register("i16eu",(function(e,t){var n=o("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}})),o.register("121rJ",(function(e,t){var n=o("2bBga");function i(e,t,n,i,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}n.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(i,s),Object.defineProperty(r,"isAxiosError",{value:!0}),i.from=function(e,t,o,s,a,l){var c=Object.create(r);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),i.call(c,e.message,t,o,s,a),c.name=e.name,l&&Object.assign(c,l),c},e.exports=i})),o.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aewVa",(function(e,t){var n=o("ihoyg").Buffer,i=o("2bBga");e.exports=function(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,s){if(i.isPlainObject(n)||i.isArray(n)){if(-1!==r.indexOf(n))throw Error("Circular reference detected in "+s);r.push(n),i.forEach(n,(function(n,r){if(!i.isUndefined(n)){var a,l=s?s+"."+r:r;if(n&&!s&&"object"==typeof n)if(i.endsWith(r,"{}"))n=JSON.stringify(n);else if(i.endsWith(r,"[]")&&(a=i.toArray(n)))return void a.forEach((function(e){!i.isUndefined(e)&&t.append(l,o(e))}));e(n,l)}})),r.pop()}else t.append(s,o(n))}(e),t}})),o.register("ihoyg",(function(t,n){var i,r;e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var s=o("hqZtu"),a=o("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=h,r=50;const c=2147483647;function u(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let i=u(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Q(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Q(e,ArrayBuffer)||e&&Q(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Q(e,SharedArrayBuffer)||e&&Q(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return h.from(i,t,n);const r=function(e){if(h.isBuffer(e)){const t=0|y(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|y(e))}function m(e){const t=e.length<0?0:0|y(e.length),n=u(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,h.prototype),i}function y(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Q(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(e).length;default:if(r)return i?-1:X(e).length;t=(""+t).toLowerCase(),r=!0}}function _(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return S(this,t,n);case"ascii":return R(this,t,n);case"latin1":case"binary":return L(this,t,n);case"base64":return T(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function b(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function w(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=h.from(t,i)),h.isBuffer(t))return 0===t.length?-1:x(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):x(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function x(e,t,n,i,r){let o,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){n=!1;break}if(n)return o}return-1}function k(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Z(i))return s;e[n+s]=i}return s}function C(e,t,n,i){return J(X(t,e.length-n),e,n,i)}function I(e,t,n,i){return J(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function E(e,t,n,i){return J(Y(t),e,n,i)}function N(e,t,n,i){return J(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function T(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function S(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(o=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=A));return n}(i)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(Q(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Q(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=h.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Q(t,Uint8Array))r+t.length>i.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):_.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(e,t,n,i,r){if(Q(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){o=l[e],s=c[e];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return k(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return I(this,e,t,n);case"base64":return E(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function R(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function L(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function O(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function P(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,i,r,o){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function B(e,t,n,i,r){V(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function U(e,t,n,i,r){V(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function F(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function z(e,t,n,i,r){return t=+t,n>>>=0,r||F(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function j(e,t,n,i,r){return t=+t,n>>>=0,r||F(e,0,n,8),a.write(e,t,n,i,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,h.prototype),i},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},h.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return z(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return z(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,i){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},h.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!h.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=h.isBuffer(e)?e:h.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const W={};function q(e,t,n){W[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function H(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function V(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new W.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){$(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||G(t,e.length-(n+1))}(i,r,o)}function $(e,t){if("number"!=typeof e)throw new W.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,n){if(Math.floor(e)!==e)throw $(e,n),new W.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new W.ERR_BUFFER_OUT_OF_BOUNDS;throw new W.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),q("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),q("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=H(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=H(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function X(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Y(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function J(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var i,r;e(t.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),e(t.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=h(e),r=i[0],o=i[1],l=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),c=0,u=o>0?r-4:r;for(n=0;n<u;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,l[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},r=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,a=0,l=n-i;a<l;a+=s)r.push(d(e,a,a+s>l?l:a+s));1===i?(t=e[n-1],r.push(o[t>>2]+o[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return r.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,u=l.length;c<u;++c)o[c]=l[c],s[l.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var i,r,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(r=i)>>18&63]+o[r>>12&63]+o[r>>6&63]+o[63&r]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;e(t.exports,"read",(function(){return i}),(function(e){return i=e})),e(t.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},r=function(e,t,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*l-1)*Math.pow(2,r),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m}})),o.register("9VVcb",(function(e,t){var n=o("2bBga"),i=o("1TQad"),r=o("kTwUV"),s=o("2RNjJ"),a=o("1ZTQa"),l=o("9cPEm"),c=o("g3yOT"),u=o("2wfLM"),h=o("121rJ"),d=o("83xK9"),f=o("8wMQb");e.exports=function(e){return new Promise((function(t,o){var p,m=e.data,g=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+w)}var x=a(e.baseURL,e.url);function k(){if(_){var n="getAllResponseHeaders"in _?l(_.getAllResponseHeaders()):null,r={data:y&&"text"!==y&&"json"!==y?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};i((function(e){t(e),v()}),(function(e){o(e),v()}),r),_=null}}if(_.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=k:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(k)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var C=(e.withCredentials||c(x))&&e.xsrfCookieName?r.read(e.xsrfCookieName):void 0;C&&(g[e.xsrfHeaderName]=C)}"setRequestHeader"in _&&n.forEach(g,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete g[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),y&&"json"!==y&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new d:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null);var I=f(x);I&&-1===["http","https","file"].indexOf(I)?o(new h("Unsupported protocol "+I+":",h.ERR_BAD_REQUEST,e)):_.send(m)}))}})),o.register("1TQad",(function(e,t){var n=o("121rJ");e.exports=function(e,t,i){var r=i.config.validateStatus;i.status&&r&&!r(i.status)?t(new n("Request failed with status code "+i.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):e(i)}})),o.register("kTwUV",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,i,r,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(e,t){var n=o("iUwU6"),i=o("91vFE");e.exports=function(e,t){return e&&!n(t)?i(e,t):t}})),o.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("9cPEm",(function(e,t){var n=o("2bBga"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}})),o.register("g3yOT",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");function r(e){var n=e;return t&&(i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}return e=r(window.location.href),function(t){var i=n.isString(t)?r(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0}})),o.register("83xK9",(function(e,t){var n=o("121rJ");function i(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("2bBga").inherits(i,n,{__CANCEL__:!0}),e.exports=i})),o.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("1gvAv",(function(e,t){e.exports=null})),o.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("d0EKm",(function(e,t){var n=o("2bBga");e.exports=function(e,t){t=t||{};var i={};function r(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:r(void 0,e[i]):r(e[i],t[i])}function s(e){if(!n.isUndefined(t[e]))return r(void 0,t[e])}function a(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:r(void 0,e[i]):r(void 0,t[i])}function l(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,r=t(e);n.isUndefined(r)&&t!==l||(i[e]=r)})),i}})),o.register("6zj0X",(function(e,t){var n=o("50GW0").version,i=o("121rJ"),r={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};r.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(n,r,a){if(!1===e)throw new i(o(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],a=t[s];if(a){var l=e[s],c=void 0===l||a(l,s,e);if(!0!==c)throw new i("option "+s+" must be "+c,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+s,i.ERR_BAD_OPTION)}},validators:r}})),o.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),o.register("2sjhC",(function(e,t){var n=o("83xK9");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var i=this;this.promise.then((function(e){if(i._listeners){var t,n=i._listeners.length;for(t=0;t<n;t++)i._listeners[t](e);i._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){i.subscribe(e),t=e})).then(e);return n.cancel=function(){i.unsubscribe(t)},n},e((function(e){i.reason||(i.reason=new n(e),t(i.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i})),o.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("gNhGc",(function(e,t){var n=o("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("isoaK",(function(e,t){var n=o("4TNnu"),i=o("5Io6y"),r=o("1SgHS"),s=o("9GD6K");const a=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function l(e){console.log(`[dotenv][DEBUG] ${e}`)}const c={config:function(e){let t=r.resolve(n.cwd(),".env"),o="utf8";const a=Boolean(e&&e.debug),u=Boolean(e&&e.override);var h;e&&(null!=e.path&&(t="~"===(h=e.path)[0]?r.join(s.homedir(),h.slice(1)):h),null!=e.encoding&&(o=e.encoding));try{const e=c.parse(i.readFileSync(t,{encoding:o}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(n.env,t)?(!0===u&&e[t],a&&l(!0===u?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):e[t]})),{parsed:e}}catch(e){return a&&l(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,i=e.toString();for(i=i.replace(/\r\n?/gm,"\n");null!=(n=a.exec(i));){const e=n[1];let i=n[2]||"";i=i.trim();const r=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===r&&(i=i.replace(/\\n/g,"\n"),i=i.replace(/\\r/g,"\r")),t[e]=i}return t}};e.exports.config=c.config,e.exports.parse=c.parse,e.exports=c})),o.register("5Io6y",(function(e,t){})),o.register("1SgHS",(function(e,t){var n=o("4TNnu");function i(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var n,i="",r=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2))if(i.length>2){var l=i.lastIndexOf("/");if(l!==i.length-1){-1===l?(i="",r=0):r=(i=i.slice(0,l)).length-1-i.lastIndexOf("/"),o=a,s=0;continue}}else if(2===i.length||1===i.length){i="",r=0,o=a,s=0;continue}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(o+1,a):i=e.slice(o+1,a),r=a-o-1;o=a,s=0}else 46===n&&-1!==s?++s:s=-1}return i}var s={resolve:function(){for(var e,t="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=n.cwd()),a=e),i(a),0!==a.length&&(t=a+"/"+t,o=47===a.charCodeAt(0))}return t=r(t,!o),o?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(i(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return i(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];i(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(i(e),i(t),e===t)return"";if((e=s.resolve(e))===(t=s.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,o=r-n,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var l=t.length-a,c=o<l?o:l,u=-1,h=0;h<=c;++h){if(h===c){if(l>c){if(47===t.charCodeAt(a+h))return t.slice(a+h+1);if(0===h)return t.slice(a+h)}else o>c&&(47===e.charCodeAt(n+h)?u=h:0===h&&(u=0));break}var d=e.charCodeAt(n+h);if(d!==t.charCodeAt(a+h))break;47===d&&(u=h)}var f="";for(h=n+u+1;h<=r;++h)h!==r&&47!==e.charCodeAt(h)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(a+u):(a+=u,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(i(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!o){r=s;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');i(e);var n,r=0,o=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!s){r=n+1;break}}else-1===l&&(s=!1,l=n+1),a>=0&&(c===t.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=l))}return r===o?o=l:-1===o&&(o=e.length),e.slice(r,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){r=n+1;break}}else-1===o&&(s=!1,o=n+1);return-1===o?"":e.slice(r,o)},extname:function(e){i(e);for(var t=-1,n=0,r=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===r&&(o=!1,r=a+1),46===l?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){n=a+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,i=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+i:n+e+i:i}("/",e)},parse:function(e){i(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),o=47===r;o?(t.root="/",n=1):n=0;for(var s=-1,a=0,l=-1,c=!0,u=e.length-1,h=0;u>=n;--u)if(47!==(r=e.charCodeAt(u)))-1===l&&(c=!1,l=u+1),46===r?-1===s?s=u:1!==h&&(h=1):-1!==s&&(h=-1);else if(!c){a=u+1;break}return-1===s||-1===l||0===h||1===h&&s===l-1&&s===a+1?-1!==l&&(t.base=t.name=0===a&&o?e.slice(1,l):e.slice(a,l)):(0===a&&o?(t.name=e.slice(1,s),t.base=e.slice(1,l)):(t.name=e.slice(a,s),t.base=e.slice(a,l)),t.ext=e.slice(s,l)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,e.exports=s})),o.register("9GD6K",(function(t,n){var i;e(t.exports,"homedir",(function(){return i}),(function(e){return i=e})),i=function(){return"/"}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.5d564ad3.js","fLXZo":"ticket1.27a619d2.svg"}'));const s=document.getElementById("checkbox");document.querySelector(".ball");s.addEventListener("click",(()=>{s.checked?document.body.classList.add("light"):document.body.classList.remove("light"),localStorage.setItem("lightModeStatus",s.checked),document.querySelector(".theme__iqon-sun").classList.toggle("theme-iqon-hidden"),document.querySelector(".theme__iqon-moon").classList.toggle("theme-iqon-hidden")})),window.addEventListener("load",(e=>{"true"==localStorage.getItem("lightModeStatus")&&(document.querySelector(".theme__iqon-sun").classList.add("theme-iqon-hidden"),document.querySelector(".theme__iqon-moon").classList.remove("theme-iqon-hidden"),document.body.classList.add("light"),document.getElementById("checkbox").checked=!0)}));let a=document.querySelector(".orbit-spinner");window.addEventListener("load",(()=>{a.classList.add("visually-hidden")}));const l=document.querySelector(".sticky");window.onscroll=()=>{window.scrollY>500?l.classList.remove("is-hide"):window.scrollY<500&&l.classList.add("is-hide")};class c{static encode(e,t,n){if(void 0===n){for(let n=1;n<=12;n++){const i=c.encode(e,t,n),r=c.decode(i);if(r.lat==e&&r.lon==t)return i}n=12}if(e=Number(e),t=Number(t),n=Number(n),isNaN(e)||isNaN(t)||isNaN(n))throw new Error("Invalid geohash");let i=0,r=0,o=!0,s="",a=-90,l=90,u=-180,h=180;for(;s.length<n;){if(o){const e=(u+h)/2;t>=e?(i=2*i+1,u=e):(i*=2,h=e)}else{const t=(a+l)/2;e>=t?(i=2*i+1,a=t):(i*=2,l=t)}o=!o,5==++r&&(s+="0123456789bcdefghjkmnpqrstuvwxyz".charAt(i),r=0,i=0)}return s}static decode(e){const t=c.bounds(e),n=t.sw.lat,i=t.sw.lon,r=t.ne.lat,o=t.ne.lon;let s=(n+r)/2,a=(i+o)/2;return s=s.toFixed(Math.floor(2-Math.log(r-n)/Math.LN10)),a=a.toFixed(Math.floor(2-Math.log(o-i)/Math.LN10)),{lat:Number(s),lon:Number(a)}}static bounds(e){if(0==e.length)throw new Error("Invalid geohash");e=e.toLowerCase();let t=!0,n=-90,i=90,r=-180,o=180;for(let s=0;s<e.length;s++){const a=e.charAt(s),l="0123456789bcdefghjkmnpqrstuvwxyz".indexOf(a);if(-1==l)throw new Error("Invalid geohash");for(let e=4;e>=0;e--){const s=l>>e&1;if(t){const e=(r+o)/2;1==s?r=e:o=e}else{const e=(n+i)/2;1==s?n=e:i=e}t=!t}}return{sw:{lat:n,lon:r},ne:{lat:i,lon:o}}}static adjacent(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),0==e.length)throw new Error("Invalid geohash");if(-1=="nsew".indexOf(t))throw new Error("Invalid direction");const n=e.slice(-1);let i=e.slice(0,-1);const r=e.length%2;return-1!={n:["prxz","bcfguvyz"],s:["028b","0145hjnp"],e:["bcfguvyz","prxz"],w:["0145hjnp","028b"]}[t][r].indexOf(n)&&""!=i&&(i=c.adjacent(i,t)),i+"0123456789bcdefghjkmnpqrstuvwxyz".charAt({n:["p0r21436x8zb9dcf5h7kjnmqesgutwvy","bc01fg45238967deuvhjyznpkmstqrwx"],s:["14365h7k9dcfesgujnmqp0r2twvyx8zb","238967debc01fg45kmstqrwxuvhjyznp"],e:["bc01fg45238967deuvhjyznpkmstqrwx","p0r21436x8zb9dcf5h7kjnmqesgutwvy"],w:["238967debc01fg45kmstqrwxuvhjyznp","14365h7k9dcfesgujnmqp0r2twvyx8zb"]}[t][r].indexOf(n))}static neighbours(e){return{n:c.adjacent(e,"n"),ne:c.adjacent(c.adjacent(e,"n"),"e"),e:c.adjacent(e,"e"),se:c.adjacent(c.adjacent(e,"s"),"e"),s:c.adjacent(e,"s"),sw:c.adjacent(c.adjacent(e,"s"),"w"),w:c.adjacent(e,"w"),nw:c.adjacent(c.adjacent(e,"n"),"w")}}}var u=c;const h={eventList:document.querySelector(".event_list "),paginatedList:document.querySelector(".paginated__list"),itemActive:document.querySelector(".item-active"),jsModal:document.querySelector(".modal__container"),modalBuyBtn:document.querySelector(".js-buy-btn"),modalBackdrop:document.querySelector(".js-event-backdrop"),modalCloseBtn:document.querySelector(".modal__close-btn"),modalMoreBtn:document.querySelector(".modal__more-btn"),basketModal:document.querySelector(".modal-basket-backdrop"),basketQuantity:document.querySelector(".modal-basket__quantity"),basketHead:document.querySelector(".js-basket"),basketContainerHead:document.querySelector(".js-basket-head"),basketNumHead:document.querySelector(".js-basket-num-head"),basketContainer:document.querySelector(".js-basket-modal"),basketNum:document.querySelector(".js-basket-num"),basketMarkupContainer:document.querySelector(".modal-basket__name"),basketContinueBookingBtn:document.querySelector(".modal-basket__continue"),basketBuyBtn:document.querySelector(".modal-basket__buy"),basketClearBtn:document.querySelector(".modal-basket__clear"),basketBackdrop:document.querySelector(".modal-basket-backdrop"),basketTextEmpty:document.querySelector(".modal-basket__text--empty"),basketTextFull:document.querySelector(".modal-basket__text--full"),basketTextTicket:document.querySelector(".modal-basket__ticket"),basketTimerHeader:document.querySelector(".basket__timer--header"),basketTimer:document.querySelector(".basket__timer"),svgIcon:document.querySelector(".location__use"),deleteButton:document.querySelectorAll(".close__box"),miniModal:document.querySelector(".mini-modal-backdrop"),miniModalBtnCart:document.querySelector(".mini-modal__button"),miniModalBtnClose:document.querySelector(".mini-modal__close"),miniModalBackdrop:document.querySelector(".mini-modal-backdrop"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector(".search-form__input"),searchBtn:document.querySelector(".search-form__btn"),countryForm:document.querySelector("#country-form"),countryInput:document.querySelector(".country-form__input"),select:document.querySelector(".country-form__select")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var f;f=o("bRlFp"),o("isoaK").config();class p{static async fetchApiData(){return(await t(f).request(this.config)).data}static setCountry(e){this.config.params.countryCode=e}static setEndPoint(e){this.config.url=e}static setKeyword(e){this.config.params.keyword=e}static setPage(e){this.config.params.page=e}static getPage(e){return this.config.params.page}static setGeoPoint(e){this.config.params.geoPoint=e}static setPreferredCountry(e){this.config.params.preferredCountry=this.config.params.preferredCountry.push(`${e}`)}static async getById(e){const n=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=5HiPtCjBuAY9gthoMA0oQuJCLkmuGiMG`;return(await t(f).get(n)).data}constructor(){}}t(d)(p,"config",{url:"events",method:"get",baseURL:"https://app.ticketmaster.com/discovery/v2/",params:{apikey:"5HiPtCjBuAY9gthoMA0oQuJCLkmuGiMG",size:"16",page:"0",countryCode:"",keyword:" ",includeTBD:" ",includeTBA:" ",preferredCountry:"",geoPoint:""},responseType:"json"});const m={paginatedList:document.querySelector(".paginated__list")};function g(e){let t;t=e>62.5?Math.floor(62.5):e;let n,i,r=+p.config.params.page+1,o=[];if(t-r>3&&(i=r+2),r>4&&(n=r-2),n&&i){o.push('<li class="paginated__item" data-page="0">1</li>'),o.push(`<li class="paginated__item  forward__item" data-page="${n-2}">...</li>`);for(let e=n+1;e<i;e++)o.push(`<li class="paginated__item" data-page="${e-1}">${e}</li>`);o.push(`<li class="paginated__item back__item" data-page="${i}">...</li>`),o.push(`<li class="paginated__item" data-page="${t-1}">${t}</li>`)}else if(n&&!i){o.push('<li class="paginated__item" data-page="0">1</li>'),o.push(`<li class="paginated__item forward__item" data-page="${n}">...</li>`);for(let e=t-4;e<=t;e++)o.push(`<li class="paginated__item" data-page="${e-1}">${e}</li>`)}else if(!n&&i){for(let e=1;e<=5;e++)o.push(`<li class="paginated__item" data-page="${e-1}">${e}</li>`);o.push(`<li class="paginated__item back__item" data-page="${i}">...</li>`),o.push(`<li class="paginated__item" data-page="${t-1}">${t}</li>`)}else for(let e=1;e<=t;e++)o.push(`<li class="paginated__item" data-page="${e-1}">${e}</li>`);let s=o.join("");m.paginatedList.innerHTML=s;document.querySelectorAll(".paginated__item").forEach((e=>{e.textContent==r&&e.classList.add("item-active")})),m.paginatedList.addEventListener("click",y)}function y(e){"LI"===e.target.nodeName&&(p.setPage(+e.target.dataset.page),setTimeout((()=>{window.scrollTo(0,0)}),1e3),b())}const v='\n <svg class="location_icon" width="6" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M3 0C1.346 0 0 1.403 0 3.128 0 5.296 3.003 9 3.003 9S6 5.19 6 3.128C6 1.403 4.654 0 3 0Zm.905 4.044c-.25.26-.577.39-.905.39a1.25 1.25 0 0 1-.905-.39c-.5-.52-.5-1.367 0-1.887a1.246 1.246 0 0 1 1.81 0c.5.52.5 1.367 0 1.887Z"/></svg>';let _=document.querySelector(".orbit-spinner");async function b(){try{var e;_.classList.remove("visually-hidden");const t=await p.fetchApiData();_.classList.add("visually-hidden");const n=null===(e=t._embedded)||void 0===e?void 0:e.events,i=t.page.totalPages;if(!n)return _.classList.add("visually-hidden"),h.eventList.innerHTML='<h3 class="section_title">No any event found in your country</h3>',void(h.paginatedList.innerHTML="");const r=function(e){return e.map(((e,t,n)=>function(e){var t,n,i,r,o;return{id:e.id,name:e.name,localDate:e.dates.start.localDate,mobImg1x:e.images.filter((e=>e.height>151&&e.width>120)).find((e=>e.height<370&&e.width<400)).url,mobImg2x:e.images.filter((e=>e.height>151&&e.width>120)).find((e=>e.height<365)).url,tabImg1x:e.images.filter((e=>e.height>674&&e.width>534)).find((e=>e.height<1200)).url,tabImg2x:e.images.filter((e=>e.height>674&&e.width>534)).find((e=>e.height<1200)).url,descImg1x:e.images.filter((e=>e.height>674&&e.width>534)).find((e=>e.height<1200)).url,descImg2x:e.images.filter((e=>e.height>674&&e.width>534)).find((e=>e.height<1200)).url,concertHall:null!==(o=null===(t=e._embedded)||void 0===t||null===(n=t.venues)||void 0===n?void 0:n[0].name)&&void 0!==o?o:null===(i=e._embedded)||void 0===i||null===(r=i.venues)||void 0===r?void 0:r[0].address.line1}}(e)))}(n);!function(e){const t=e.map((e=>function(e){return`\n   <li class="list_item" data-id ="${e.id}">\n        <div class="event_img">\n  <picture>\n                    <source\n                      media="(min-width: 1280px)"\n                      srcset="\n                        ${e.descImg1x} 1x,\n                         ${e.descImg1x} 2x\n                      "\n                      type="image/jpg"\n                    />\n\n                    <source\n                      media="(min-width: 768px)"\n                      srcset="\n                        ${e.tabImg1x} 1x,\n                         ${e.tabImg2x} 2x\n                      "\n                      type="image/jpg"\n                    />\n\n                    <source\n                      media="(max-width: 767px)"\n                      srcset="\n                        ${e.mobImg1x} 1x,\n                         ${e.mobImg2x} 2x\n                      "\n                      type="image/jpg"\n                    />\n\n                     <img class="event__pic"\n            src="${e.mobImg1x}"\n            alt="${e.name}"\n            width="120"\n            height="151"\n          />\n                  </picture>\n        </div>\n        <h3 class="event_title">${e.name}</h3>\n        <p class="event_date">${e.localDate}</p>\n        <p class="event_location location">\n      ${v}\n        <span class="location_name">${e.concertHall}</span></p>\n      </li>\n`}(e)));h.eventList.innerHTML=t.join("")}(r),g(i)}catch(e){console.log(e)}}const w=[{name:"ALL COUNTRIES",code:"XX"},{name:"AUSTRIA",code:"AT"},{name:"AUSTRALIA",code:"AU"},{name:"BELGIUM",code:"BE"},{name:"CANADA",code:"CA"},{name:"CHINA",code:"CN"},{name:"UNITED STATES",code:"US"},{name:"UNITED KINGDOM",code:"GB"},{name:"UNITED ARAB EMIRATES",code:"AE"},{name:"UKRAINE",code:"UA"},{name:"TURKEY",code:"TR"},{name:"FRANCE",code:"FR"},{name:"SWITZERLAND",code:"CH"},{name:"CYPRUS",code:"CY"},{name:"CZECH REPUBLIC",code:"CZ"},{name:"GERMANY",code:"DE"},{name:"MALTA",code:"MT"},{name:"ANDORRA",code:"AD"},{name:"AFGHANISTAN",code:"AF"},{name:"ANTIGUA AND BARBUDA",code:"AG"},{name:"ANGUILLA",code:"AI"},{name:"ALBANIA",code:"AL"},{name:"ARMENIA",code:"AM"},{name:"NETHERLANDS ANTILLES",code:"AN"},{name:"ANGOLA",code:"AO"},{name:"ANTARCTICA",code:"AQ"},{name:"ARGENTINA",code:"AR"},{name:"AMERICAN SAMOA",code:"AS"},{name:"ARUBA",code:"AW"},{name:"AZERBAIJAN",code:"AZ"},{name:"BOSNIA AND HERZEGOVINA",code:"BA"},{name:"BARBADOS",code:"BB"},{name:"BANGLADESH",code:"BD"},{name:"BURKINA FASO",code:"BF"},{name:"BULGARIA",code:"BG"},{name:"BAHRAIN",code:"BH"},{name:"BURUNDI",code:"BI"},{name:"BENIN",code:"BJ"},{name:"SAINT BARTHELEMY",code:"BL"},{name:"BERMUDA",code:"BM"},{name:"BRUNEI DARUSSALAM",code:"BN"},{name:"BOLIVIA",code:"BO"},{name:"BRAZIL",code:"BR"},{name:"BAHAMAS",code:"BS"},{name:"BHUTAN",code:"BT"},{name:"BOTSWANA",code:"BW"},{name:"BELARUS",code:"BY"},{name:"BELIZE",code:"BZ"},{name:"COCOS (KEELING) ISLANDS",code:"CC"},{name:"CONGO, THE DEMOCRATIC REPUBLIC OF THE",code:"CD"},{name:"CENTRAL AFRICAN REPUBLIC",code:"CF"},{name:"CONGO",code:"CG"},{name:"COTE D IVOIRE",code:"CI"},{name:"COOK ISLANDS",code:"CK"},{name:"CHILE",code:"CL"},{name:"CAMEROON",code:"CM"},{name:"COLOMBIA",code:"CO"},{name:"COSTA RICA",code:"CR"},{name:"CUBA",code:"CU"},{name:"CAPE VERDE",code:"CV"},{name:"CHRISTMAS ISLAND",code:"CX"},{name:"DJIBOUTI",code:"DJ"},{name:"DENMARK",code:"DK"},{name:"DOMINICA",code:"DM"},{name:"DOMINICAN REPUBLIC",code:"DO"},{name:"ALGERIA",code:"DZ"},{name:"ECUADOR",code:"EC"},{name:"ESTONIA",code:"EE"},{name:"EGYPT",code:"EG"},{name:"ERITREA",code:"ER"},{name:"SPAIN",code:"ES"},{name:"ETHIOPIA",code:"ET"},{name:"FINLAND",code:"FI"},{name:"FIJI",code:"FJ"},{name:"FALKLAND ISLANDS (MALVINAS)",code:"FK"},{name:"MICRONESIA, FEDERATED STATES OF",code:"FM"},{name:"FAROE ISLANDS",code:"FO"},{name:"GABON",code:"GA"},{name:"GRENADA",code:"GD"},{name:"GEORGIA",code:"GE"},{name:"GHANA",code:"GH"},{name:"GIBRALTAR",code:"GI"},{name:"GREENLAND",code:"GL"},{name:"GAMBIA",code:"GM"},{name:"GUINEA",code:"GN"},{name:"EQUATORIAL GUINEA",code:"GQ"},{name:"GREECE",code:"GR"},{name:"GUATEMALA",code:"GT"},{name:"GUAM",code:"GU"},{name:"GUINEA-BISSAU",code:"GW"},{name:"GUYANA",code:"GY"},{name:"HONG KONG",code:"HK"},{name:"HONDURAS",code:"HN"},{name:"CROATIA",code:"HR"},{name:"HAITI",code:"HT"},{name:"HUNGARY",code:"HU"},{name:"INDONESIA",code:"ID"},{name:"IRELAND",code:"IE"},{name:"ISRAEL",code:"IL"},{name:"ISLE OF MAN",code:"IM"},{name:"INDIA",code:"IN"},{name:"IRAQ",code:"IQ"},{name:"IRAN, ISLAMIC REPUBLIC OF",code:"IR"},{name:"ICELAND",code:"IS"},{name:"ITALY",code:"IT"},{name:"JAMAICA",code:"JM"},{name:"JORDAN",code:"JO"},{name:"JAPAN",code:"JP"},{name:"KENYA",code:"KE"},{name:"KYRGYZSTAN",code:"KG"},{name:"CAMBODIA",code:"KH"},{name:"KIRIBATI",code:"KI"},{name:"COMOROS",code:"KM"},{name:"SAINT KITTS AND NEVIS",code:"KN"},{name:"KOREA DEMOCRATIC PEOPLES REPUBLIC OF",code:"KP"},{name:"KOREA REPUBLIC OF",code:"KR"},{name:"KUWAIT",code:"KW"},{name:"CAYMAN ISLANDS",code:"KY"},{name:"KAZAKSTAN",code:"KZ"},{name:"LAO PEOPLES DEMOCRATIC REPUBLIC",code:"LA"},{name:"LEBANON",code:"LB"},{name:"SAINT LUCIA",code:"LC"},{name:"LIECHTENSTEIN",code:"LI"},{name:"SRI LANKA",code:"LK"},{name:"LIBERIA",code:"LR"},{name:"LESOTHO",code:"LS"},{name:"LITHUANIA",code:"LT"},{name:"LUXEMBOURG",code:"LU"},{name:"LATVIA",code:"LV"},{name:"LIBYAN ARAB JAMAHIRIYA",code:"LY"},{name:"MOROCCO",code:"MA"},{name:"MONACO",code:"MC"},{name:"MOLDOVA, REPUBLIC OF",code:"MD"},{name:"MONTENEGRO",code:"ME"},{name:"SAINT MARTIN",code:"MF"},{name:"MADAGASCAR",code:"MG"},{name:"MARSHALL ISLANDS",code:"MH"},{name:"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",code:"MK"},{name:"MALI",code:"ML"},{name:"MYANMAR",code:"MM"},{name:"MONGOLIA",code:"MN"},{name:"MACAU",code:"MO"},{name:"NORTHERN MARIANA ISLANDS",code:"MP"},{name:"MAURITANIA",code:"MR"},{name:"MONTSERRAT",code:"MS"},{name:"MAURITIUS",code:"MU"},{name:"MALDIVES",code:"MV"},{name:"MALAWI",code:"MW"},{name:"MEXICO",code:"MX"},{name:"MALAYSIA",code:"MY"},{name:"MOZAMBIQUE",code:"MZ"},{name:"NAMIBIA",code:"NA"},{name:"NEW CALEDONIA",code:"NC"},{name:"NIGER",code:"NE"},{name:"NIGERIA",code:"NG"},{name:"NICARAGUA",code:"NI"},{name:"NETHERLANDS",code:"NL"},{name:"NORWAY",code:"NO"},{name:"NEPAL",code:"NP"},{name:"NAURU",code:"NR"},{name:"NIUE",code:"NU"},{name:"NEW ZEALAND",code:"NZ"},{name:"OMAN",code:"OM"},{name:"PANAMA",code:"PA"},{name:"PERU",code:"PE"},{name:"FRENCH POLYNESIA",code:"PF"},{name:"PAPUA NEW GUINEA",code:"PG"},{name:"PHILIPPINES",code:"PH"},{name:"PAKISTAN",code:"PK"},{name:"POLAND",code:"PL"},{name:"SAINT PIERRE AND MIQUELON",code:"PM"},{name:"PITCAIRN",code:"PN"},{name:"PUERTO RICO",code:"PR"},{name:"PORTUGAL",code:"PT"},{name:"PALAU",code:"PW"},{name:"PARAGUAY",code:"PY"},{name:"QATAR",code:"QA"},{name:"ROMANIA",code:"RO"},{name:"SERBIA",code:"RS"},{name:"RUSSIAN FEDERATION",code:"RU"},{name:"RWANDA",code:"RW"},{name:"SAUDI ARABIA",code:"SA"},{name:"SOLOMON ISLANDS",code:"SB"},{name:"SEYCHELLES",code:"SC"},{name:"SUDAN",code:"SD"},{name:"SWEDEN",code:"SE"},{name:"SINGAPORE",code:"SG"},{name:"SAINT HELENA",code:"SH"},{name:"SLOVENIA",code:"SI"},{name:"SLOVAKIA",code:"SK"},{name:"SIERRA LEONE",code:"SL"},{name:"SAN MARINO",code:"SM"},{name:"SENEGAL",code:"SN"},{name:"SOMALIA",code:"SO"},{name:"SURINAME",code:"SR"},{name:"SAO TOME AND PRINCIPE",code:"ST"},{name:"EL SALVADOR",code:"SV"},{name:"SYRIAN ARAB REPUBLIC",code:"SY"},{name:"SWAZILAND",code:"SZ"},{name:"TURKS AND CAICOS ISLANDS",code:"TC"},{name:"CHAD",code:"TD"},{name:"TOGO",code:"TG"},{name:"THAILAND",code:"TH"},{name:"TAJIKISTAN",code:"TJ"},{name:"TOKELAU",code:"TK"},{name:"TIMOR-LESTE",code:"TL"},{name:"TURKMENISTAN",code:"TM"},{name:"TUNISIA",code:"TN"},{name:"TONGA",code:"TO"},{name:"TRINIDAD AND TOBAGO",code:"TT"},{name:"TUVALU",code:"TV"},{name:"TAIWAN, PROVINCE OF CHINA",code:"TW"},{name:"TANZANIA, UNITED REPUBLIC OF",code:"TZ"},{name:"UGANDA",code:"UG"},{name:"URUGUAY",code:"UY"},{name:"UZBEKISTAN",code:"UZ"},{name:"HOLY SEE (VATICAN CITY STATE)",code:"VA"},{name:"SAINT VINCENT AND THE GRENADINES",code:"VC"},{name:"VENEZUELA",code:"VE"},{name:"VIRGIN ISLANDS, BRITISH",code:"VG"},{name:"VIRGIN ISLANDS, U.S.",code:"VI"},{name:"VIET NAM",code:"VN"},{name:"VANUATU",code:"VU"},{name:"WALLIS AND FUTUNA",code:"WF"},{name:"SAMOA",code:"WS"},{name:"KOSOVO",code:"XK"},{name:"YEMEN",code:"YE"},{name:"MAYOTTE",code:"YT"},{name:"SOUTH AFRICA",code:"ZA"},{name:"ZAMBIA",code:"ZM"},{name:"ZIMBABWE",code:"ZW"}];window.addEventListener("load",(function(){return h.select.innerHTML='<option value="${data.code}">${data.name}</option>',h.select.innerHTML=w.map((e=>function(e){return`<option data-value="${e.code}">${e.name}</option>`}(e))).join("")})),window.addEventListener("load",b);var x,k,C={};x=void 0===n?"undefined"==typeof window?C:window:n,k=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",_="Ask",b="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",C="Circle",I="Arrows",E="Dots",N="Pulse",T="Custom",S="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",P="Arrows",M="Dots",D="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},F=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},z=function(t){return t||(t="head"),null!==e.document[t]||(U('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?W(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,i,r,o){if(!z("body"))return!1;t||le.Notify.init({});var s=W(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),t=W(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+J,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var _="";n===l?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=_+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var w=e.document.getElementById(y.id);if(w){var x,k,C=function(){w.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof r&&r(),C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var E=function(){x=setTimeout((function(){C()}),t.timeout),k=setTimeout((function(){I()}),t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),E()})))}}if(t.showOnlyTheLastOne&&0<J)for(var N,T=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),S=0;S<T.length;S++)null!==(N=T[S]).parentNode&&N.parentNode.removeChild(N);t=W(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,o,s,l){if(!z("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=q(i),r=q(r),o=q(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",_=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(_?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,w,x="";if(t===f?(b=n.svgSize,w=h.svgColor,b||(b="110px"),w||(w="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===p?x=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?x=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(x=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+x+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var k=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),k()})),v&&_&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){k()}))}n=W(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,o,s,l,c,u,h){if(!z("body"))return!1;i||le.Confirm.init({});var d=W(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=W(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),r=q(r),s=q(s),l=q(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=w.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,x=void 0;if(t===_||t===b){v=o||"";var k=t===_||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var C=e.document.getElementById(f.id),I=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(e){var n=e.target.value;t===_&&n!==v?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===_&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(e){if(t===_&&v&&E){if((E.value||"").toString()!==v)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&E&&(x=E.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===b&&E&&(x=E.value||""),u(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),i.cssAnimationDuration)}))}i=W(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,o,s){if(!z("body"))return!1;r||le.Loading.init({});var l=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=W(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?q(u).toString().substring(0,r.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(t===x)d=H(r.svgSize,r.svgColor);else if(t===k)d=V(r.svgSize,r.svgColor);else if(t===C)d=$(r.svgSize,r.svgColor);else if(t===I)d=G(r.svgSize,r.svgColor);else if(t===E)d=K(r.svgSize,r.svgColor);else if(t===N)d=X(r.svgSize,r.svgColor);else if(t===T&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(t===T&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===T&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var v=e.document.getElementById(A.ID),_=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(_)}),s);r=W(!0,r,l)},oe=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},se=0,ae=function(t,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||le.Block.init({});var h=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=W(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=B.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var v,_=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<_.indexOf(v.tagName.toLocaleLowerCase("en")))break;var w=v.querySelectorAll("[id^="+B.ID+"]");if(1>w.length){var x="";n&&(x=n===L?V(o.svgSize,o.svgColor):n===O?$(o.svgSize,o.svgColor):n===P?G(o.svgSize,o.svgColor):n===M?K(o.svgSize,o.svgColor):n===D?X(o.svgSize,o.svgColor):H(o.svgSize,o.svgColor));var k='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+x+"</span>",C="";0<f.length&&(f=f.length>o.messageMaxLength?q(f).substring(0,o.messageMaxLength)+"...":q(f),C='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),se++;var I=e.document.createElement("div");I.id=B.ID+"-"+se,I.className=p+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=k+C;var E,N=e.getComputedStyle(v).getPropertyValue("position"),T="string"==typeof N?N.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(o.svgSize))+40,A="";S>(v.offsetHeight||0)&&(A="min-height:"+S+"px;"),E=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(T);if(j||0<A.length){if(!z("head"))return!1;j&&(R="position:relative!important;");var Y='<style id="Style-'+B.ID+"-"+se+'">'+E+"."+y+"{"+R+A+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(Y);e.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else F("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+B.ID+"]"),ee(w));clearTimeout(ne)}),l);o=W(!0,o,h)},le={Notify:{init:function(e){t=W(!0,d,e),j(Y,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(h,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=W(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,o,s){ne(v,e,t,null,n,i,r,o,s)},ask:function(e,t,n,i,r,o,s,a){ne(_,e,t,n,i,r,o,s,a)},prompt:function(e,t,n,i,r,o,s,a){ne(b,e,t,n,i,r,o,s,a)}},Loading:{init:function(e){r=W(!0,A,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(x,e,t,!0,0)},hourglass:function(e,t){re(k,e,t,!0,0)},circle:function(e,t){re(C,e,t,!0,0)},arrows:function(e,t){re(I,e,t,!0,0)},dots:function(e,t){re(E,e,t,!0,0)},pulse:function(e,t){re(N,e,t,!0,0)},custom:function(e,t){re(T,e,t,!0,0)},notiflix:function(e,t){re(S,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?q(t).substring(0,r.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else U("Where is the new message?")}(t)}},Block:{init:function(e){o=W(!0,B,e),j(oe,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,R,e,t,n)},hourglass:function(e,t,n){ae(!0,L,e,t,n)},circle:function(e,t,n){ae(!0,O,e,t,n)},arrows:function(e,t,n){ae(!0,P,e,t,n)},dots:function(e,t,n){ae(!0,M,e,t,n)},pulse:function(e,t,n){ae(!0,D,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return k(x)})):"object"==typeof C?C=k(x):x.Notiflix=k(x);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I=!1,E=!1,N="${JSCORE_VERSION}",T=function(e,t){if(!e)throw S(t)},S=function(e){return new Error("Firebase Database ("+N+") INTERNAL ASSERT FAILED: "+e)},A=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(A(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw Error();const l=r<<2|o>>4;if(i.push(l),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},L=function(e){const t=A(e);return R.encodeByteArray(t,!0)},O=function(e){return L(e).replace(/\./g,"")},P=function(e){try{return R.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return D(void 0,e)}function D(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=D(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function F(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function z(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function j(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function W(){const e=U();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function q(){return!0===I||!0===E}class H extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace($,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new H(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const $=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return JSON.parse(e)}function K(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=G(P(o[0])||""),n=G(P(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Y=function(e){const t=X(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},J=function(e){const t=X(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ee(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ne(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(ie(n)&&ie(o)){if(!ne(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ie(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function oe(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function se(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),r=1518500249):(i=s^a^l,r=1859775393):e<60?(i=s&a|l&(s|a),r=2400959708):(i=s^a^l,r=3395469782);const t=(o<<5|o>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function le(e,t){const n=new ce(e,t);return n.subscribe.bind(n)}class ce{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ue),void 0===i.error&&(i.error=ue),void 0===i.complete&&(i.complete=ue);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ue(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,T(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},fe=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e){return e&&e._delegate?e._delegate:e}class me{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new B;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ye{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ge(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=[];var _e,be;(be=_e||(_e={}))[be.DEBUG=0]="DEBUG",be[be.VERBOSE=1]="VERBOSE",be[be.INFO=2]="INFO",be[be.WARN=3]="WARN",be[be.ERROR=4]="ERROR",be[be.SILENT=5]="SILENT";const we={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},xe=_e.INFO,ke={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Ce=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ke[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Ie{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?we[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}constructor(e){this.name=e,this._logLevel=xe,this._logHandler=Ce,this._userLogHandler=null,ve.push(this)}}let Ee,Ne;const Te=new WeakMap,Se=new WeakMap,Ae=new WeakMap,Re=new WeakMap,Le=new WeakMap;let Oe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Pe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Be(this),t),De(Te.get(this))}:function(...t){return De(e.apply(Be(this),t))}:function(t,...n){const i=e.call(Be(this),t,...n);return Ae.set(i,t.sort?t.sort():[t]),De(i)}}function Me(e){return"function"==typeof e?Pe(e):(e instanceof IDBTransaction&&function(e){if(Se.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Se.set(e,t)}(e),t=e,(Ee||(Ee=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Oe):e);var t}function De(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(De(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Te.set(t,e)})).catch((()=>{})),Le.set(t,e),t}(e);if(Re.has(e))return Re.get(e);const t=Me(e);return t!==e&&(Re.set(e,t),Le.set(t,e)),t}const Be=e=>Le.get(e);function Ue(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=De(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(De(s.result),e.oldVersion,e.newVersion,De(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Fe=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],je=new Map;function We(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(je.get(t))return je.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ze.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Fe.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return je.set(t,o),o}Oe=(e=>({...e,get:(t,n,i)=>We(t,n)||e.get(t,n,i),has:(t,n)=>!!We(t,n)||e.has(t,n)}))(Oe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const He=new Ie("@firebase/app"),Ve={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},$e=new Map,Ge=new Map;function Ke(e,t){try{e.container.addComponent(t)}catch(n){He.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(Ge.has(t))return He.debug(`There were multiple attempts to register component ${t}.`),!1;Ge.set(t,e);for(const t of $e.values())Ke(t,e);return!0}function Ye(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new me("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e="[DEFAULT]"){const t=$e.get(e);if(!t)throw Je.create("no-app",{appName:e});return t}function et(e,t,n){var i;let r=null!==(i=Ve[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void He.warn(e.join(" "))}Xe(new me(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let tt=null;function nt(){return tt||(tt=Ue("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Je.create("idb-open",{originalErrorMessage:e.message})}))),tt}async function it(e,t){var n;try{const n=(await nt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,rt(e)),n.done}catch(e){if(e instanceof H)He.warn(e.message);else{const t=Je.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});He.warn(t.message)}}}function rt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=st(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),lt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=O(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new at(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function st(){return(new Date).toISOString().substring(0,10)}class at{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await nt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(rt(e))}catch(e){if(e instanceof H)He.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});He.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function lt(e){return O(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;ct="",Xe(new me("platform-logger",(e=>new qe(e)),"PRIVATE")),Xe(new me("heartbeat",(e=>new ot(e)),"PRIVATE")),et("@firebase/app","0.7.31",ct),et("@firebase/app","0.7.31","esm2017"),et("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et("firebase","9.9.3","app");function ut(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function ht(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dt=ht,ft=new V("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),pt=new Ie("@firebase/auth");function mt(e,...t){pt.logLevel<=_e.ERROR&&pt.error(`Auth (9.9.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,...t){throw bt(e,...t)}function yt(e,...t){return bt(e,...t)}function vt(e,t,n){const i=Object.assign(Object.assign({},dt()),{[t]:n});return new V("auth","Firebase",i).create(t,{appName:e.name})}function _t(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&gt(e,"argument-error"),vt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ft.create(e,...t)}function wt(e,t,...n){if(!e)throw bt(t,...n)}function xt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mt(t),new Error(t)}function kt(e,t){e||xt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map;function It(e){kt(e instanceof Function,"Expected a class definition");let t=Ct.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ct.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Nt(){return"http:"===Tt()||"https:"===Tt()}function Tt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Nt()||z()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{get(){return St()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=F()||j()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Pt=new At(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dt(e,t,n,i,r={}){return Bt(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=re(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Lt.fetch()(Ft(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Bt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ot),t);try{const t=new zt(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jt(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw jt(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw jt(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw jt(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw vt(e,a,s);gt(e,a)}}catch(t){if(t instanceof H)throw t;gt(e,"network-request-failed")}}async function Ut(e,t,n,i,r={}){const o=await Dt(e,t,n,i,r);return"mfaPendingCredential"in o&&gt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Ft(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Rt(e.config,r):`${e.config.apiScheme}://${r}`}class zt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(yt(this.auth,"network-request-failed"))),Pt.get())}))}}function jt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=yt(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return 1e3*Number(e)}function Ht(e){var t;const[n,i,r]=e.split(".");if(void 0===n||void 0===i||void 0===r)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const e=P(i);return e?JSON.parse(e):(mt("Failed to decode base64 JWT payload"),null)}catch(e){return mt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Vt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof H&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class $t{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Vt(e,async function(e,t){return Dt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));wt(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=ut(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Gt(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wt(e.idToken,"internal-error"),wt(void 0!==e.idToken,"internal-error"),wt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ht(e);return wt(t,"internal-error"),wt(void 0!==t.exp,"internal-error"),wt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Bt(e,{},(async()=>{const n=re({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Ft(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Lt.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Xt;return n&&(wt("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(wt("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(wt("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return xt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e,t){wt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Jt{async getIdToken(e){const t=await Vt(this,this.stsTokenManager.getToken(this.auth,e));return wt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=pe(e),i=await n.getIdToken(t),r=Ht(i);wt(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Wt(qt(r.auth_time)),issuedAtTime:Wt(qt(r.iat)),expirationTime:Wt(qt(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=pe(e);await Kt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Kt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vt(this,async function(e,t){return Dt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:x}=t;wt(v&&x,e,"internal-error");const k=Xt.fromJSON(this.name,x);wt("string"==typeof v,e,"internal-error"),Yt(u,e.name),Yt(h,e.name),wt("boolean"==typeof _,e,"internal-error"),wt("boolean"==typeof b,e,"internal-error"),Yt(d,e.name),Yt(f,e.name),Yt(p,e.name),Yt(m,e.name),Yt(g,e.name),Yt(y,e.name);const C=new Jt({uid:v,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new Xt;i.updateFromServerResponse(t);const r=new Jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Kt(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ut(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $t(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Qt.type="NONE";const Zt=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t,n){return`firebase:${e}:${t}:${n}`}class tn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tn(It(Zt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||It(Zt);const o=en(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Jt._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new tn(r,e,n)):new tn(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=en(this.userKey,i.apiKey,r),this.fullPersistenceKey=en("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(an(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cn(t))return"Blackberry";if(un(t))return"Webos";if(on(t))return"Safari";if((t.includes("chrome/")||sn(t))&&!t.includes("edge/"))return"Chrome";if(ln(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function rn(e=U()){return/firefox\//i.test(e)}function on(e=U()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sn(e=U()){return/crios\//i.test(e)}function an(e=U()){return/iemobile/i.test(e)}function ln(e=U()){return/android/i.test(e)}function cn(e=U()){return/blackberry/i.test(e)}function un(e=U()){return/webos/i.test(e)}function hn(e=U()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dn(){return W()&&10===document.documentMode}function fn(e=U()){return hn(e)||ln(e)||un(e)||cn(e)||/windows phone/i.test(e)||an(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(e,t=[]){let n;switch(e){case"Browser":n=nn(U());break;case"Worker":n=`${nn(U())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Kt(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pe(e):null;return t&&wt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&wt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(It(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;wt(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return wt(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vn(this),this.idTokenSubscription=new vn(this),this.beforeStateQueue=new mn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ft,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function yn(e){return pe(e)}class vn{get next(){return wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=le((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return Dt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends _n{static _fromEmailAndPassword(e,t){return new wn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new wn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ut(e,"POST","/v1/accounts:signInWithPassword",Mt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ut(e,"POST","/v1/accounts:signInWithEmailLink",Mt(e,t))}(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ut(e,"POST","/v1/accounts:signInWithEmailLink",Mt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t){return Ut(e,"POST","/v1/accounts:signInWithIdp",Mt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends _n{static _fromParams(e){const t=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ut(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new kn(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return xn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=re(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends _n{static _fromVerification(e,t){return new In({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new In({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ut(e,"POST","/v1/accounts:signInWithPhoneNumber",Mt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ut(e,"POST","/v1/accounts:signInWithPhoneNumber",Mt(e,t));if(n.temporaryProof)throw jt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ut(e,"POST","/v1/accounts:signInWithPhoneNumber",Mt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Cn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new In({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{static parseLink(e){const t=function(e){const t=oe(se(e)).link,n=t?oe(se(t)).deep_link_id:null,i=oe(se(e)).deep_link_id;return(i?oe(se(i)).link:null)||i||n||t||e}(e);try{return new En(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,s;const a=oe(se(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);wt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{static credential(e,t){return wn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=En.parseLink(t);return wt(n,"argument-error"),wn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Nn.PROVIDER_ID}}Nn.PROVIDER_ID="password",Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Tn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An extends Sn{static credential(e){return kn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com",An.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn extends Sn{static credential(e,t){return kn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Rn.GOOGLE_SIGN_IN_METHOD="google.com",Rn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends Sn{static credential(e){return kn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ln.GITHUB_SIGN_IN_METHOD="github.com",Ln.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends Sn{static credential(e,t){return kn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return On.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pn(e,t){return Ut(e,"POST","/v1/accounts:signUp",Mt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.TWITTER_SIGN_IN_METHOD="twitter.com",On.PROVIDER_ID="twitter.com";class Mn{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Jt._fromIdTokenResponse(e,n,i),o=Dn(n);return new Mn({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Dn(n);return new Mn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Dn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn extends H{static _fromErrorAndOperation(e,t,n,i){return new Bn(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Bn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Un(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t,n=!1){const i=await Vt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zn(e,t,n=!1){var i;const{auth:r}=e,o="reauthenticate";try{const i=await Vt(e,Un(r,o,t,e),n);wt(i.idToken,r,"internal-error");const s=Ht(i.idToken);wt(s,r,"internal-error");const{sub:a}=s;return wt(e.uid===a,r,"user-mismatch"),Mn._forOperation(e,o,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&gt(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t,n=!1){const i="signIn",r=await Un(e,i,t),o=await Mn._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function Wn(e,t){return jn(yn(e),t)}async function qn(e,t,n){const i=yn(e),r=await Pn(i,{returnSecureToken:!0,email:t,password:n}),o=await Mn._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function Hn(e,t,n){return Wn(pe(e),Nn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);dn()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=U();return on(e)||hn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fn(),this._shouldAllowMigration=!0}}$n.type="LOCAL";const Gn=$n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Vn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Kn.type="SESSION";const Xn=Kn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Yn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.receivers=[];class Qn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=Jn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ei(){return void 0!==Zn().WorkerGlobalScope&&"function"==typeof Zn().importScripts}class ti{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ni(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ii(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ti(e).toPromise()}(),t(await ii()))}))}))}async function ri(e,t,n){const i=ni(e,!0).put({fbase_key:t,value:n});return new ti(i).toPromise()}function oi(e,t){const n=ni(e,!0).delete(t);return new ti(n).toPromise()}class si{async _openDb(){return this.db||(this.db=await ii()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yn._getInstance(ei()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Qn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await ri(e,"__sak","1"),await oi(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ri(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ni(e,!1).get(t),i=await new ti(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>oi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ni(e,!1).getAll();return new ti(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}si.type="LOCAL";const ai=si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=yt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function ci(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ci("rcb"),new At(3e4,6e4);async function ui(e,t,n){var i;const r=await n.verify();try{let o;if(wt("string"==typeof r,e,"argument-error"),wt("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){wt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Dt(e,"POST","/v2/accounts/mfaEnrollment:start",Mt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{wt("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;wt(n,e,"missing-multi-factor-info");const s=await function(e,t){return Dt(e,"POST","/v2/accounts/mfaSignIn:start",Mt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Dt(e,"POST","/v1/accounts:sendVerificationCode",Mt(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{verifyPhoneNumber(e,t){return ui(this.auth,e,pe(t))}static credential(e,t){return In._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hi.credentialFromTaggedObject(t)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?In._fromTokenResponse(t,n):null}constructor(e){this.providerId=hi.PROVIDER_ID,this.auth=yn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e,t){return t?It(t):(wt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.PROVIDER_ID="phone",hi.PHONE_SIGN_IN_METHOD="phone";class fi extends _n{_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function pi(e){return jn(e.auth,new fi(e),e.bypassAuthState)}function mi(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),zn(n,new fi(e),e.bypassAuthState)}async function gi(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),Fn(n,new fi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pi;case"linkViaPopup":case"linkViaRedirect":return gi;case"reauthViaPopup":case"reauthViaRedirect":return mi;default:gt(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new At(2e3,1e4);async function _i(e,t,n){const i=yn(e);_t(e,t,Tn);const r=di(i,n);return new bi(i,"signInViaPopup",t,r).executeNotNull()}class bi extends yi{async executeNotNull(){const e=await this.execute();return wt(e,this.auth,"internal-error"),e}async onExecution(){kt(1===this.filter.length,"Popup operations only handle one event");const e=Jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(yt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vi.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}}bi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wi=new Map;class xi extends yi{async execute(){let e=wi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ii(t),i=Ci(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ki(e,t){wi.set(e._key(),t)}function Ci(e){return It(e._redirectPersistence)}function Ii(e){return en("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(e,t,n=!1){const i=yn(e),r=di(i,t),o=new xi(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Ni{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Si(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Si(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ti(e))}saveEventToCache(e){this.cachedEventUids.add(Ti(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ti(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Si({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ai=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ri=/^https?/;async function Li(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Dt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Oi(e))return}catch(e){}gt(e,"unauthorized-domain")}function Oi(e){const t=Et(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ri.test(n))return!1;if(Ai.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new At(3e4,6e4);function Mi(){const e=Zn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Di=null;function Bi(e){return Di=Di||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){Mi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(yt(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(r=null===(i=Zn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Zn().gapi)||void 0===o?void 0:o.load)){const t=ci("iframefcb");return Zn()[t]=()=>{gapi.load?s():n(yt(e,"network-request-failed"))},li(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Di=null,e}))}(e),Di}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new At(5e3,15e3),Fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ji(e){const t=e.config;wt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.9.3"},r=zi.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${re(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Hi(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wi),{width:i.toString(),height:r.toString(),top:o,left:s}),c=U().toLowerCase();n&&(a=sn(c)?"_blank":n),rn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=U()){var t;return hn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new qi(null);const h=window.open(t||"",a,u);wt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new qi(h)}function Vi(e,t,n,i,r,o){wt(e.config.authDomain,e,"auth-domain-config-required"),wt(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.9.3",eventId:r};if(t instanceof Tn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ee(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Sn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Rt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${re(a).slice(1)}`}const $i=class{async _openPopup(e,t,n,i){var r;kt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Hi(e,Vi(e,t,n,Et(),i),Jn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Vi(e,t,n,Et(),i),Zn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(kt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Bi(e),n=Zn().gapi;return wt(n,e,"internal-error"),t.open({where:document.body,url:ji(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fi,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=yt(e,"network-request-failed"),o=Zn().setTimeout((()=>{i(r)}),Ui.get());function s(){Zn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Ni(e);return t.register("authEvent",(t=>{wt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),gt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Li(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fn()||on()||hn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xn,this._completeRedirectFn=Ei,this._overrideRedirectResult=ki}};var Gi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi="Browser",Xe(new me("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{wt(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),wt(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:Gi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pn(Gi)},s=new gn(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(It);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Xe(new me("auth-internal",(e=>{const t=yn(e.getProvider("auth").getImmediate());return new Ki(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),et("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gi)),et("@firebase/auth","0.20.5","esm2017");var Xi=o("4TNnu");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:G(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ji(t)}}catch(e){}return new Qi},er=Zi("localStorage"),tr=Zi("sessionStorage"),nr=new Ie("@firebase/database"),ir=function(){let e=1;return function(){return e++}}(),rr=function(e){const t=de(e),n=new ae;n.update(t);const i=n.digest();return R.encodeByteArray(i)},or=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=or.apply(null,i):t+="object"==typeof i?K(i):i,t+=" "}return t};let sr=null,ar=!0;const lr=function(e,t){T(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(nr.logLevel=_e.VERBOSE,sr=nr.log.bind(nr),t&&tr.set("logging_enabled",!0)):"function"==typeof e?sr=e:(sr=null,tr.remove("logging_enabled"))},cr=function(...e){if(!0===ar&&(ar=!1,null===sr&&!0===tr.get("logging_enabled")&&lr(!0)),sr){const t=or.apply(null,e);sr(t)}},ur=function(e){return function(...t){cr(e,...t)}},hr=function(...e){const t="FIREBASE INTERNAL ERROR: "+or(...e);nr.error(t)},dr=function(...e){const t=`FIREBASE FATAL ERROR: ${or(...e)}`;throw nr.error(t),new Error(t)},fr=function(...e){const t="FIREBASE WARNING: "+or(...e);nr.warn(t)},pr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},mr=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=kr(e),i=kr(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},gr=function(e,t){return e===t?0:e<t?-1:1},yr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+K(t))},vr=function(e){if("object"!=typeof e||null===e)return K(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=K(t[i]),n+=":",n+=vr(e[t[i]]);return n+="}",n},_r=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function br(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const wr=function(e){T(!pr(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const xr=new RegExp("^-?(0*)\\d{1,10}$"),kr=function(e){if(xr.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Cr=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw fr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ir=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){fr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(cr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fr(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Tr{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Tr.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=er.get("host:"+e)||this._host}}function Rr(e,t,n){let i;if(T("string"==typeof t,"typeof type must == string"),T("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return br(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{incrementCounter(e,t=1){Q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return M(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={},Pr={};function Mr(e){const t=e.toString();return Or[t]||(Or[t]=new Lr),Or[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Cr((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(q()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ur(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Sr.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Br.forceAllow_=!0}static forceDisallow(){Br.forceDisallow_=!0}static isAvailable(){return!q()&&(!!Br.forceAllow_||!(Br.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t),i=_r(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(q())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ur(e),this.stats_=Mr(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Rr(t,"long_polling",e))}}class Ur{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||cr("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){q()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{cr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,q())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ir(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ur.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){cr("frame writing exception"),e.stack&&cr(e.stack),cr(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr=null;"undefined"!=typeof MozWebSocket?Fr=MozWebSocket:"undefined"!=typeof WebSocket&&(Fr=WebSocket);class zr{static connectionURL_(e,t,n,i,r){const o={v:"5"};return!q()&&"undefined"!=typeof location&&location.hostname&&Sr.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),Rr(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,er.set("previous_websocket_failure",!0);try{let e;if(q()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Yi}/${Xi.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Fr(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){zr.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Fr&&!zr.forceDisallow_}static previouslyFailed(){return er.isInMemoryStorage||!0===er.get("previous_websocket_failure")}markConnectionHealthy(){er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=G(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_r(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ur(this.connId),this.stats_=Mr(t),this.connURL=zr.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}}zr.responsesRequiredToBeHealthy=2,zr.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{static get ALL_TRANSPORTS(){return[Br,zr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=zr&&zr.isAvailable();let n=t&&!zr.previouslyFailed();if(e.webSocketOnly&&(t||fr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[zr];else{const e=this.transports_=[];for(const t of jr.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}jr.globalTransportInitialized_=!1;class Wr{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ir((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=yr("t",e),n=yr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=yr("t",e),n=yr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=yr("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?hr("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&fr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ir((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ir((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ur("c:"+this.id+":"),this.transportManager_=new jr(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){T(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Hr{static getInstance(){return new Vr}getInitialEvent(e){return T("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||F()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Gr(){return new $r("")}function Kr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Xr(e){return e.pieces_.length-e.pieceNum_}function Yr(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $r(e.pieces_,t)}function Jr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Qr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Zr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $r(t,0)}function eo(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof $r)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new $r(n,0)}function to(e){return e.pieceNum_>=e.pieces_.length}function no(e,t){const n=Kr(e),i=Kr(t);if(null===n)return t;if(n===i)return no(Yr(e),Yr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function io(e,t){const n=Qr(e,0),i=Qr(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=mr(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ro(e,t){if(Xr(e)!==Xr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function oo(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Xr(e)>Xr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class so{constructor(e,t){this.errorPrefix_=t,this.parts_=Qr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=fe(this.parts_[e]);ao(this)}}function ao(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+lo(e))}function lo(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Hr{static getInstance(){return new co}getInitialEvent(e){return T("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends qr{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(K(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new B,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;uo.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Q(e,"w")){const n=Z(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();fr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||J(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Y(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):hr("Unrecognized action received from server: "+K(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+uo.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},l=function(e){T(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?cr("getToken() completed but was canceled"):(cr("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new Wr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{fr(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&fr(e),a())}}}interrupt(e){cr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){cr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ee(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>vr(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new $r(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){cr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){cr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";q()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Yi.replace(/\./g,"-")]=1,F()?e["framework.cordova"]=1:j()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vr.getInstance().currentlyOnline();return ee(this.interruptReasons_)&&e}constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=uo.nextPersistentConnectionId_++,this.log_=ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!q())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");co.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Vr.getInstance().on("online",this.onOnline_,this)}}uo.nextPersistentConnectionId_=0,uo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{static Wrap(e,t){return new ho(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ho("[MIN_NAME]",e),i=new ho("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return ho.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;class mo extends fo{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,t){return mr(e.name,t.name)}isDefinedOn(e){throw S("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ho.MIN}maxPost(){return new ho("[MAX_NAME]",po)}makePost(e,t){return T("string"==typeof e,"KeyIndex indexValue must always be a string."),new ho(e,po)}toString(){return".key"}}const go=new mo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class vo{copy(e,t,n,i,r){return new vo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _o.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return _o.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:vo.RED,this.left=null!=i?i:_o.EMPTY_NODE,this.right=null!=r?r:_o.EMPTY_NODE}}vo.RED=!0,vo.BLACK=!1;class _o{insert(e,t){return new _o(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,vo.BLACK,null,null))}remove(e){return new _o(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yo(this.root_,null,this.comparator_,!0,e)}constructor(e,t=_o.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bo(e,t){return mr(e.name,t.name)}function wo(e,t){return mr(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;_o.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new vo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ko=function(e){return"number"==typeof e?"number:"+wr(e):"string:"+e},Co=function(e){if(e.isLeafNode()){const t=e.val();T("string"==typeof t||"number"==typeof t||"object"==typeof t&&Q(t,".sv"),"Priority must be a string or number.")}else T(e===xo||e.isEmpty(),"priority of unexpected type.");T(e===xo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Io,Eo,No;class To{static set __childrenNodeConstructor(e){Io=e}static get __childrenNodeConstructor(){return Io}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new To(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:To.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return to(e)?this:".priority"===Kr(e)?this.priorityNode_:To.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:To.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Kr(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(T(".priority"!==n||1===Xr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,To.__childrenNodeConstructor.EMPTY_NODE.updateChild(Yr(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ko(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?wr(this.value_):this.value_,this.lazyHash_=rr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===To.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof To.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=To.VALUE_TYPE_ORDER.indexOf(t),r=To.VALUE_TYPE_ORDER.indexOf(n);return T(i>=0,"Unknown leaf type: "+t),T(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=To.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,T(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Co(this.priorityNode_)}}To.VALUE_TYPE_ORDER=["object","boolean","number","string"];const So=new class extends fo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?mr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ho.MIN}maxPost(){return new ho("[MAX_NAME]",new To("[PRIORITY-POST]",No))}makePost(e,t){const n=Eo(e);return new ho(t,new To("[PRIORITY-POST]",n))}toString(){return".priority"}},Ao=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ao,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Lo=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new vo(a,s.node,vo.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=r(t,l),u=r(l+1,i);return s=e[l],a=n?n(s):s,new vo(a,s.node,vo.BLACK,c,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const c=r(o+1,a),u=e[o],h=n?n(u):u;l(new vo(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,vo.BLACK):(a(i,vo.BLACK),a(i,vo.RED))}return o}(new Ro(e.length));return new _o(i||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;const Po={};class Mo{static get Default(){return T(Po&&So,"ChildrenNode.ts has not been loaded"),Oo=Oo||new Mo({".priority":Po},{".priority":So}),Oo}get(e){const t=Z(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _o?t:null}hasIndex(e){return Q(this.indexSet_,e.toString())}addIndex(e,t){T(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(ho.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?Lo(n,e.getCompare()):Po;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new Mo(c,l)}addToIndexes(e,t){const n=te(this.indexes_,((n,i)=>{const r=Z(this.indexSet_,i);if(T(r,"Missing index implementation for "+i),n===Po){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(ho.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),Lo(n,r.getCompare())}return Po}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new ho(e.name,i))),r.insert(e,e.node)}}));return new Mo(n,this.indexSet_)}removeFromIndexes(e,t){const n=te(this.indexes_,(n=>{if(n===Po)return n;{const i=t.get(e.name);return i?n.remove(new ho(e.name,i)):n}}));return new Mo(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class Bo{static get EMPTY_NODE(){return Do||(Do=new Bo(new _o(wo),null,Mo.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Do}updatePriority(e){return this.children_.isEmpty()?this:new Bo(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Do:t}}getChild(e){const t=Kr(e);return null===t?this:this.getImmediateChild(t).getChild(Yr(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(T(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ho(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?Do:this.priorityNode_;return new Bo(i,o,r)}}updateChild(e,t){const n=Kr(e);if(null===n)return t;{T(".priority"!==Kr(e)||1===Xr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Yr(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(So,((o,s)=>{t[o]=s.val(e),n++,r&&Bo.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ko(this.getPriority().val())+":"),this.forEachChild(So,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":rr(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ho(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ho(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ho(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ho.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ho.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uo?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Bo(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(So),n=t.getIterator(So);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Co(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Bo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Uo=new class extends Bo{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Bo.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new _o(wo),Bo.EMPTY_NODE,Mo.Default)}};Object.defineProperties(ho,{MIN:{value:new ho("[MIN_NAME]",Bo.EMPTY_NODE)},MAX:{value:new ho("[MAX_NAME]",Uo)}}),mo.__EMPTY_NODE=Bo.EMPTY_NODE,To.__childrenNodeConstructor=Bo,xo=Uo,function(e){No=e}(Uo);function Fo(e,t=null){if(null===e)return Bo.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),T(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new To(e,Fo(t))}if(e instanceof Array){let n=Bo.EMPTY_NODE;return br(e,((t,i)=>{if(Q(e,t)&&"."!==t.substring(0,1)){const e=Fo(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Fo(t))}{const n=[];let i=!1;if(br(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Fo(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new ho(e,r)))}})),0===n.length)return Bo.EMPTY_NODE;const r=Lo(n,bo,(e=>e.name),wo);if(i){const e=Lo(n,So.getCompare());return new Bo(r,Fo(t),new Mo({".priority":e},{".priority":So}))}return new Bo(r,Fo(t),Mo.Default)}}!function(e){Eo=e}(Fo);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo extends fo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?mr(e.name,t.name):r}makePost(e,t){const n=Fo(e),i=Bo.EMPTY_NODE.updateChild(this.indexPath_,n);return new ho(t,i)}maxPost(){const e=Bo.EMPTY_NODE.updateChild(this.indexPath_,Uo);return new ho("[MAX_NAME]",e)}toString(){return Qr(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,T(!to(e)&&".priority"!==Kr(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new class extends fo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?mr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ho.MIN}maxPost(){return ho.MAX}makePost(e,t){const n=Fo(e);return new ho(t,n)}toString(){return".value"}},Wo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qo=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Wo.charAt(n%64),n=Math.floor(n/64);T(0===n,"Cannot push at time == 0");let s=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)s+=Wo.charAt(t[r]);return T(20===s.length,"nextPushId: Length should be 20."),s}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ho(e){return{type:"value",snapshotNode:e}}function Vo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function $o(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Go(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{updateChild(e,t,n,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(i).equals(n.getChild(i))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange($o(t,s)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(Vo(t,n)):o.trackChildChange(Go(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(So,((e,i)=>{t.hasChild(e)||n.trackChildChange($o(e,i))})),t.isLeafNode()||t.forEachChild(So,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Go(t,i,r))}else n.trackChildChange(Vo(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Bo.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,o){return this.matches(new ho(t,n))||(n=Bo.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Bo.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Bo.EMPTY_NODE);const r=this;return t.forEachChild(So,((e,t)=>{r.matches(new ho(e,t))||(i=i.updateImmediateChild(e,Bo.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xo.getStartPost_(e),this.endPost_=Xo.getEndPost_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{updateChild(e,t,n,i,r,o){return this.rangedFilter_.matches(new ho(t,n))||(n=Bo.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Bo.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Bo.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,o;if(i=t.withIndex(this.index_),i=i.updatePriority(Bo.EMPTY_NODE),this.reverse_){o=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else o=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let s=0,a=!1;for(;o.hasNext();){const t=o.getNext();!a&&r(e,t)<=0&&(a=!0);a&&s<this.limit_&&r(t,n)<=0?s++:i=i.updateImmediateChild(t.name,Bo.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const s=e;T(s.numChildren()===this.limit_,"");const a=new ho(t,n),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(t)){const e=s.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||s.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:o(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(Go(t,n,e)),s.updateImmediateChild(t,n);{null!=r&&r.trackChildChange($o(t,e));const n=s.updateImmediateChild(t,Bo.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(Vo(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&o(l,a)>=0?(null!=r&&(r.trackChildChange($o(l.name,l.node)),r.trackChildChange(Vo(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(l.name,Bo.EMPTY_NODE)):e}constructor(e){this.rangedFilter_=new Xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===So}copy(){const e=new Jo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=So}}function Qo(e){const t={};if(e.isDefault())return t;let n;return e.index_===So?n="$priority":e.index_===jo?n="$value":e.index_===go?n="$key":(T(e.index_ instanceof zo,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=K(n),e.startSet_&&(t.startAt=K(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+K(e.indexStartName_))),e.endSet_&&(t.endAt=K(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+K(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==So&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends qr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=es.getListenId_(e,n),s={};this.listens_[o]=s;const a=Qo(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Z(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=es.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Qo(e._queryParams),n=e._path.toString(),i=new B;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+re(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=G(s.responseText)}catch(e){fr("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&fr("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ur("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Bo.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return{value:null,children:new Map}}function is(e,t,n){if(to(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Kr(t);e.children.has(i)||e.children.set(i,ns());is(e.children.get(i),t=Yr(t),n)}}function rs(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{rs(i,new $r(t.toString()+"/"+e),n)}))}class os{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&br(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;br(e,((e,i)=>{i>0&&Q(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ir(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new os(e);const n=1e4+2e4*Math.random();Ir(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as,ls;function cs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ls=as||(as={}))[ls.OVERWRITE=0]="OVERWRITE",ls[ls.MERGE=1]="MERGE",ls[ls.ACK_USER_WRITE=2]="ACK_USER_WRITE",ls[ls.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class us{operationForChild(e){if(to(this.path)){if(null!=this.affectedTree.value)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $r(e));return new us(Gr(),t,this.revert)}}return T(Kr(this.path)===e,"operationForChild called for unrelated child."),new us(Yr(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=as.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{operationForChild(e){return to(this.path)?new hs(this.source,Gr()):new hs(this.source,Yr(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=as.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{operationForChild(e){return to(this.path)?new ds(this.source,Gr(),this.snap.getImmediateChild(e)):new ds(this.source,Yr(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=as.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{operationForChild(e){if(to(this.path)){const t=this.children.subtree(new $r(e));return t.isEmpty()?null:t.value?new ds(this.source,Gr(),t.value):new fs(this.source,Gr(),t)}return T(Kr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,Yr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=as.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(to(e))return this.isFullyInitialized()&&!this.filtered_;const t=Kr(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gs(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw S("Should only compare child_ events.");const i=new ho(t.childName,t.snapshotNode),r=new ho(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ys(e,t){return{eventCache:e,serverCache:t}}function vs(e,t,n,i){return ys(new ps(t,n,i),e.serverCache)}function _s(e,t,n,i){return ys(e.eventCache,new ps(t,n,i))}function bs(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ws(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class ks{static fromObject(e){let t=new ks(null);return br(e,((e,n)=>{t=t.set(new $r(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Gr(),value:this.value};if(to(e))return null;{const n=Kr(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Yr(e),t);if(null!=r){return{path:eo(new $r(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(to(e))return this;{const t=Kr(e),n=this.children.get(t);return null!==n?n.subtree(Yr(e)):new ks(null)}}set(e,t){if(to(e))return new ks(t,this.children);{const n=Kr(e),i=(this.children.get(n)||new ks(null)).set(Yr(e),t),r=this.children.insert(n,i);return new ks(this.value,r)}}remove(e){if(to(e))return this.children.isEmpty()?new ks(null):new ks(null,this.children);{const t=Kr(e),n=this.children.get(t);if(n){const i=n.remove(Yr(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new ks(null):new ks(this.value,r)}return this}}get(e){if(to(e))return this.value;{const t=Kr(e),n=this.children.get(t);return n?n.get(Yr(e)):null}}setTree(e,t){if(to(e))return t;{const n=Kr(e),i=(this.children.get(n)||new ks(null)).setTree(Yr(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ks(this.value,r)}}fold(e){return this.fold_(Gr(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(eo(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Gr(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(to(e))return null;{const i=Kr(e),r=this.children.get(i);return r?r.findOnPath_(Yr(e),eo(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Gr(),t)}foreachOnPath_(e,t,n){if(to(e))return this;{this.value&&n(t,this.value);const i=Kr(e),r=this.children.get(i);return r?r.foreachOnPath_(Yr(e),eo(t,i),n):new ks(null)}}foreach(e){this.foreach_(Gr(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(eo(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(xs||(xs=new _o(gr)),xs))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static empty(){return new Cs(new ks(null))}constructor(e){this.writeTree_=e}}function Is(e,t,n){if(to(t))return new Cs(new ks(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=no(r,t);return o=o.updateChild(s,n),new Cs(e.writeTree_.set(r,o))}{const i=new ks(n),r=e.writeTree_.setTree(t,i);return new Cs(r)}}}function Es(e,t,n){let i=e;return br(n,((e,n)=>{i=Is(i,eo(t,e),n)})),i}function Ns(e,t){if(to(t))return Cs.empty();{const n=e.writeTree_.setTree(t,new ks(null));return new Cs(n)}}function Ts(e,t){return null!=Ss(e,t)}function Ss(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(no(n.path,t)):null}function As(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(So,((e,n)=>{t.push(new ho(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ho(e,n.value))})),t}function Rs(e,t){if(to(t))return e;{const n=Ss(e,t);return new Cs(null!=n?new ks(n):e.writeTree_.subtree(t))}}function Ls(e){return e.writeTree_.isEmpty()}function Os(e,t){return Ps(Gr(),e.writeTree_,t)}function Ps(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(T(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ps(eo(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(eo(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e,t){return Ks(t,e)}function Ds(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));T(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&Bs(t,i.path)?r=!1:oo(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=Fs(e.allWrites,Us,Gr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ns(e.visibleWrites,i.path);else{br(i.children,(t=>{e.visibleWrites=Ns(e.visibleWrites,eo(i.path,t))}))}return!0}return!1}function Bs(e,t){if(e.snap)return oo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&oo(eo(e.path,n),t))return!0;return!1}function Us(e){return e.visible}function Fs(e,t,n){let i=Cs.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)oo(n,e)?(t=no(n,e),i=Is(i,t,o.snap)):oo(e,n)&&(t=no(e,n),i=Is(i,Gr(),o.snap.getChild(t)));else{if(!o.children)throw S("WriteRecord should have .snap or .children");if(oo(n,e))t=no(n,e),i=Es(i,t,o.children);else if(oo(e,n))if(t=no(e,n),to(t))i=Es(i,Gr(),o.children);else{const e=Z(o.children,Kr(t));if(e){const n=e.getChild(Yr(t));i=Is(i,Gr(),n)}}}}}return i}function zs(e,t,n,i,r){if(i||r){const o=Rs(e.visibleWrites,t);if(!r&&Ls(o))return n;if(r||null!=n||Ts(o,Gr())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(oo(e.path,t)||oo(t,e.path))};return Os(Fs(e.allWrites,o,t),n||Bo.EMPTY_NODE)}return null}{const i=Ss(e.visibleWrites,t);if(null!=i)return i;{const i=Rs(e.visibleWrites,t);if(Ls(i))return n;if(null!=n||Ts(i,Gr())){return Os(i,n||Bo.EMPTY_NODE)}return null}}}function js(e,t,n,i){return zs(e.writeTree,e.treePath,t,n,i)}function Ws(e,t){return function(e,t,n){let i=Bo.EMPTY_NODE;const r=Ss(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(So,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Rs(e.visibleWrites,t);return n.forEachChild(So,((e,t)=>{const n=Os(Rs(r,new $r(e)),t);i=i.updateImmediateChild(e,n)})),As(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return As(Rs(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function qs(e,t,n,i){return function(e,t,n,i,r){T(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=eo(t,n);if(Ts(e.visibleWrites,o))return null;{const t=Rs(e.visibleWrites,o);return Ls(t)?r.getChild(n):Os(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Hs(e,t){return function(e,t){return Ss(e.visibleWrites,t)}(e.writeTree,eo(e.treePath,t))}function Vs(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const l=Rs(e.visibleWrites,t),c=Ss(l,Gr());if(null!=c)a=c;else{if(null==n)return[];a=Os(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function $s(e,t,n){return function(e,t,n,i){const r=eo(t,n),o=Ss(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return Os(Rs(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Gs(e,t){return Ks(eo(e.treePath,t),e.writeTree)}function Ks(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{trackChildChange(e){const t=e.type,n=e.childName;T("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),T(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Go(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,$o(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Vo(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw S("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Go(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Js{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $s(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ws(this.viewCache_),r=Vs(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(e,t,n,i,r){const o=new Xs;let s,a;if(n.type===as.OVERWRITE){const l=n;l.source.fromUser?s=ta(e,t,l.path,l.snap,i,r,o):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!to(l.path),s=ea(e,t,l.path,l.snap,i,r,a,o))}else if(n.type===as.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,l)=>{const c=eo(n,i);na(t,Kr(c))&&(a=ta(e,a,c,l,r,o,s))})),i.foreach(((i,l)=>{const c=eo(n,i);na(t,Kr(c))||(a=ta(e,a,c,l,r,o,s))})),a}(e,t,l.path,l.children,i,r,o):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=ra(e,t,l.path,l.children,i,r,a,o))}else if(n.type===as.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=Hs(i,n))return t;{const a=new Js(i,t,r),l=t.eventCache.getNode();let c;if(to(n)||".priority"===Kr(n)){let n;if(t.serverCache.isFullyInitialized())n=js(i,ws(t));else{const e=t.serverCache.getNode();T(e instanceof Bo,"serverChildren would be complete if leaf node"),n=Ws(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const r=Kr(n);let u=$s(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,Yr(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,Bo.EMPTY_NODE,Yr(n),a,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=js(i,ws(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=Hs(i,Gr()),vs(t,c,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=Hs(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(to(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ea(e,t,n,l.getNode().getChild(n),r,o,a,s);if(to(n)){let i=new ks(null);return l.getNode().forEachChild(go,((e,t)=>{i=i.set(new $r(e),t)})),ra(e,t,n,i,r,o,a,s)}return t}{let c=new ks(null);return i.foreach(((e,t)=>{const i=eo(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),ra(e,t,n,c,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==as.LISTEN_COMPLETE)throw S("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=_s(t,o.getNode(),o.isFullyInitialized()||to(n),o.isFiltered());return Zs(e,s,n,i,Ys,r)}(e,t,n.path,i,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=bs(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Ho(bs(t)))}}(t,s,l),{viewCache:s,changes:l}}function Zs(e,t,n,i,r,o){const s=t.eventCache;if(null!=Hs(i,n))return t;{let a,l;if(to(n))if(T(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ws(t),r=Ws(i,n instanceof Bo?n:Bo.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=js(i,ws(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Kr(n);if(".priority"===c){T(1===Xr(n),"Can't have a priority with additional path components");const r=s.getNode();l=t.serverCache.getNode();const o=qs(i,n,r,l);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=Yr(n);let h;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=qs(i,n,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=$s(i,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,r,o):s.getNode()}}return vs(t,a,s.isFullyInitialized()||to(n),e.filter.filtersNodes())}}function ea(e,t,n,i,r,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(to(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Kr(n);if(!l.isCompleteForPath(n)&&Xr(n)>1)return t;const r=Yr(n),o=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,Ys,null)}const h=_s(t,c,l.isFullyInitialized()||to(n),u.filtersNodes());return Zs(e,h,n,r,new Js(r,h,o),a)}function ta(e,t,n,i,r,o,s){const a=t.eventCache;let l,c;const u=new Js(r,t,o);if(to(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=vs(t,c,!0,e.filter.filtersNodes());else{const r=Kr(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=vs(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=Yr(n),c=a.getNode().getImmediateChild(r);let h;if(to(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===Jr(o)&&e.getChild(Zr(o)).isEmpty()?e:e.updateChild(o,i):Bo.EMPTY_NODE}if(c.equals(h))l=t;else{l=vs(t,e.filter.updateChild(a.getNode(),r,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function na(e,t){return e.eventCache.isCompleteForChild(t)}function ia(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ra(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=to(n)?i:new ks(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=ia(0,t.serverCache.getNode().getImmediateChild(n),i);c=ea(e,c,new $r(n),l,r,o,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=ia(0,t.serverCache.getNode().getImmediateChild(n),i);c=ea(e,c,new $r(n),l,r,o,s,a)}})),c}class oa{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ko(n.getIndex()),r=(o=n).loadsAllData()?new Ko(o.getIndex()):o.hasLimit()?new Yo(o):new Xo(o);var o;this.processor_=function(e){return{filter:e}}(r);const s=t.serverCache,a=t.eventCache,l=i.updateFullNode(Bo.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(Bo.EMPTY_NODE,a.getNode(),null),u=new ps(l,s.isFullyInitialized(),i.filtersNodes()),h=new ps(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ys(h,u),this.eventGenerator_=new ms(this.query_)}}function sa(e,t){const n=ws(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!to(t)&&!n.getImmediateChild(Kr(t)).isEmpty())?n.getChild(t):null}function aa(e){return 0===e.eventRegistrations_.length}function la(e,t,n){const i=[];if(n){T(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ca(e,t,n,i){t.type===as.MERGE&&null!==t.source.queryId&&(T(ws(e.viewCache_),"We should always have a full cache before handling merges"),T(bs(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Qs(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,T(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),T(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),T(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ua(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ua(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),gs(e,r,"child_removed",t,i,n),gs(e,r,"child_added",t,i,n),gs(e,r,"child_moved",o,i,n),gs(e,r,"child_changed",t,i,n),gs(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha,da;class fa{constructor(){this.views=new Map}}function pa(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return T(null!=o,"SyncTree gave us an op for an invalid query."),ca(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(ca(o,t,n,i));return r}}function ma(e,t,n,i,r){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=js(n,r?i:null),o=!1;e?o=!0:i instanceof Bo?(e=Ws(n,i),o=!1):(e=Bo.EMPTY_NODE,o=!1);const s=ys(new ps(e,o,!1),new ps(i,r,!1));return new oa(t,s)}return s}function ga(e,t,n,i,r,o){const s=ma(e,t,i,r,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(So,((e,t)=>{i.push(Vo(e,t))}));return n.isFullyInitialized()&&i.push(Ho(n.getNode())),ua(e,i,n.getNode(),t)}(s,n)}function ya(e,t,n,i){const r=t._queryIdentifier,o=[];let s=[];const a=xa(e);if("default"===r)for(const[t,r]of e.views.entries())s=s.concat(la(r,n,i)),aa(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||o.push(r.query));else{const t=e.views.get(r);t&&(s=s.concat(la(t,n,i)),aa(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!xa(e)&&o.push(new(T(ha,"Reference.ts has not been loaded"),ha)(t._repo,t._path)),{removed:o,events:s}}function va(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function _a(e,t){let n=null;for(const i of e.views.values())n=n||sa(i,t);return n}function ba(e,t){if(t._queryParams.loadsAllData())return ka(e);{const n=t._queryIdentifier;return e.views.get(n)}}function wa(e,t){return null!=ba(e,t)}function xa(e){return null!=ka(e)}function ka(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=1;class Ia{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ks(null),this.pendingWriteTree_={visibleWrites:Cs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ea(e,t,n,i,r){return function(e,t,n,i,r){T(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Is(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Ma(e,new ds({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Na(e,t,n,i){!function(e,t,n,i){T(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Es(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=ks.fromObject(n);return Ma(e,new fs({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Ta(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Ds(e.pendingWriteTree_,t)){let t=new ks(null);return null!=i.snap?t=t.set(Gr(),!0):br(i.children,(e=>{t=t.set(new $r(e),!0)})),Ma(e,new us(i.path,t,n))}return[]}function Sa(e,t,n){return Ma(e,new ds({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Aa(e,t,n,i,r=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||wa(s,t))){const l=ya(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(o,((e,t)=>xa(t)));if(n&&!r){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&xa(t)){return[ka(t)]}{let e=[];return t&&(e=va(t)),br(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,o=Ua(e,i);e.listenProvider_.startListening(Ha(r),Fa(e,r),o.hashFn,o.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Ha(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(za(t));e.listenProvider_.stopListening(Ha(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=za(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Ra(e,t,n,i){const r=ja(e,i);if(null!=r){const i=Wa(r),o=i.path,s=i.queryId,a=no(o,t);return qa(e,o,new ds(cs(s),a,n))}return[]}function La(e,t,n,i=!1){const r=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=no(e,r);o=o||_a(t,n),s=s||xa(t)}));let a,l=e.syncPointTree_.get(r);if(l?(s=s||xa(l),o=o||_a(l,Gr())):(l=new fa,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)a=!0;else{a=!1,o=Bo.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=_a(t,Gr());n&&(o=o.updateImmediateChild(e,n))}))}const c=wa(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=za(t);T(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ca++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=ga(l,t,n,Ms(e.pendingWriteTree_,r),o,a);if(!c&&!s&&!i){const n=ba(l,t);u=u.concat(function(e,t,n){const i=t._path,r=Fa(e,t),o=Ua(e,n),s=e.listenProvider_.startListening(Ha(t),r,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(i);if(r)T(!xa(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!to(e)&&t&&xa(t))return[ka(t).query];{let e=[];return t&&(e=e.concat(va(t).map((e=>e.query)))),br(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ha(i),Fa(e,i))}}return s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function Oa(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=_a(n,no(e,t));if(i)return i}));return zs(i,t,r,n,!0)}function Pa(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=no(e,n);i=i||_a(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||_a(r,Gr()):(r=new fa,e.syncPointTree_=e.syncPointTree_.set(n,r));const o=null!=i,s=o?new ps(i,!0,!1):null;return function(e){return bs(e.viewCache_)}(ma(r,t,Ms(e.pendingWriteTree_,t._path),o?s.getNode():Bo.EMPTY_NODE,o))}function Ma(e,t){return Da(t,e.syncPointTree_,null,Ms(e.pendingWriteTree_,Gr()))}function Da(e,t,n,i){if(to(e.path))return Ba(e,t,n,i);{const r=t.get(Gr());null==n&&null!=r&&(n=_a(r,Gr()));let o=[];const s=Kr(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Gs(i,s);o=o.concat(Da(a,l,e,t))}return r&&(o=o.concat(pa(r,e,i,n))),o}}function Ba(e,t,n,i){const r=t.get(Gr());null==n&&null!=r&&(n=_a(r,Gr()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=Gs(i,t),l=e.operationForChild(t);l&&(o=o.concat(Ba(l,r,s,a)))})),r&&(o=o.concat(pa(r,e,i,n))),o}function Ua(e,t){const n=t.query,i=Fa(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Bo.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ja(e,n);if(i){const n=Wa(i),r=n.path,o=n.queryId,s=no(r,t);return qa(e,r,new hs(cs(o),s))}return[]}(e,n._path,i):function(e,t){return Ma(e,new hs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Aa(e,n,null,i)}}}}function Fa(e,t){const n=za(t);return e.queryToTagMap.get(n)}function za(e){return e._path.toString()+"$"+e._queryIdentifier}function ja(e,t){return e.tagToQueryMap.get(t)}function Wa(e){const t=e.indexOf("$");return T(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $r(e.substr(0,t))}}function qa(e,t,n){const i=e.syncPointTree_.get(t);T(i,"Missing sync point for query tag that we're tracking");return pa(i,n,Ms(e.pendingWriteTree_,t),null)}function Ha(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(T(da,"Reference.ts has not been loaded"),da)(e._repo,e._path):e}class Va{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Va(t)}node(){return this.node_}constructor(e){this.node_=e}}class $a{getImmediateChild(e){const t=eo(this.path_,e);return new $a(this.syncTree_,t)}node(){return Oa(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Ga=function(e,t,n){return e&&"object"==typeof e?(T(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ka(e[".sv"],t,n):"object"==typeof e[".sv"]?Xa(e[".sv"],t):void T(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ka=function(e,t,n){if("timestamp"===e)return n.timestamp;T(!1,"Unexpected server value: "+e)},Xa=function(e,t,n){e.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&T(!1,"Unexpected increment value: "+i);const r=t.node();if(T(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},Ya=function(e,t,n,i){return Qa(t,new $a(n,e),i)},Ja=function(e,t,n){return Qa(e,new Va(t),n)};function Qa(e,t,n){const i=e.getPriority().val(),r=Ga(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=Ga(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new To(o,Fo(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new To(r))),i.forEachChild(So,((e,i)=>{const r=Qa(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function el(e,t){let n=t instanceof $r?t:new $r(t),i=e,r=Kr(n);for(;null!==r;){const e=Z(i.node.children,r)||{children:{},childCount:0};i=new Za(r,i,e),n=Yr(n),r=Kr(n)}return i}function tl(e){return e.node.value}function nl(e,t){e.node.value=t,al(e)}function il(e){return e.node.childCount>0}function rl(e,t){br(e.node.children,((n,i)=>{t(new Za(n,e,i))}))}function ol(e,t,n,i){n&&!i&&t(e),rl(e,(e=>{ol(e,t,!0,i)})),n&&i&&t(e)}function sl(e){return new $r(null===e.parent?e.name:sl(e.parent)+"/"+e.name)}function al(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===tl(e)&&!il(e)}(n),r=Q(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,al(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,al(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const ll=/[\[\].#$\/\u0000-\u001F\u007F]/,cl=/[\[\].#$\u0000-\u001F\u007F]/,ul=function(e){return"string"==typeof e&&0!==e.length&&!ll.test(e)},hl=function(e){return"string"==typeof e&&0!==e.length&&!cl.test(e)},dl=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!pr(e)||e&&"object"==typeof e&&Q(e,".sv")},fl=function(e,t,n,i){i&&void 0===t||pl(he(e,"value"),t,n)},pl=function(e,t,n){const i=n instanceof $r?new so(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+lo(i));if("function"==typeof t)throw new Error(e+"contains a function "+lo(i)+" with contents = "+t.toString());if(pr(t))throw new Error(e+"contains "+t.toString()+" "+lo(i));if("string"==typeof t&&t.length>10485760/3&&fe(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+lo(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(br(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!ul(t)))throw new Error(e+" contains an invalid key ("+t+") "+lo(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=fe(a),ao(s),pl(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=fe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+lo(i)+" in addition to actual children.")}},ml=function(e,t,n,i){if(i&&void 0===t)return;const r=he(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];br(t,((e,t)=>{const i=new $r(e);if(pl(r,t,eo(n,i)),".priority"===Jr(i)&&!dl(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=Qr(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!ul(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(io);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&oo(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,o)},gl=function(e,t,n,i){if(!(i&&void 0===n||hl(n)))throw new Error(he(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},yl=function(e,t){if(".info"===Kr(t))throw new Error(e+" failed = Can't modify data under /.info/")},vl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ul(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),hl(e)}(n))throw new Error(he(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bl(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||ro(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function wl(e,t,n){bl(e,n),kl(e,(e=>ro(e,t)))}function xl(e,t,n){bl(e,n),kl(e,(e=>oo(e,t)||oo(t,e)))}function kl(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Cl(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();sr&&cr("event: "+n.toString()),Cr(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _l,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ns(),this.transactionQueueTree_=new Za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function El(e,t,n){if(e.stats_=Mr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new es(e.repoInfo_,((t,n,i,r)=>{Sl(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Al(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new uo(e.repoInfo_,t,((t,n,i,r)=>{Sl(e,t,n,i,r)}),(t=>{Al(e,t)}),(t=>{!function(e,t){br(t,((t,n)=>{Rl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Pr[n]||(Pr[n]=t()),Pr[n]}(e.repoInfo_,(()=>new ss(e.stats_,e.server_))),e.infoData_=new ts,e.infoSyncTree_=new Ia({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Sa(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),Rl(e,"connected",!1),e.serverSyncTree_=new Ia({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);xl(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Nl(e){const t=e.infoData_.getNode(new $r(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Tl(e){return(t=(t={timestamp:Nl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Sl(e,t,n,i,r){e.dataUpdateCount++;const o=new $r(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=te(n,(e=>Fo(e)));s=function(e,t,n,i){const r=ja(e,i);if(r){const i=Wa(r),o=i.path,s=i.queryId,a=no(o,t),l=ks.fromObject(n);return qa(e,o,new fs(cs(s),a,l))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=Fo(n);s=Ra(e.serverSyncTree_,o,t,r)}else if(i){const t=te(n,(e=>Fo(e)));s=function(e,t,n){const i=ks.fromObject(n);return Ma(e,new fs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=Fo(n);s=Sa(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=zl(e,o)),xl(e.eventQueue_,a,s)}function Al(e,t){Rl(e,"connected",t),!1===t&&function(e){Dl(e,"onDisconnectEvents");const t=Tl(e),n=ns();rs(e.onDisconnect_,Gr(),((i,r)=>{const o=Ya(i,r,e.serverSyncTree_,t);is(n,i,o)}));let i=[];rs(n,Gr(),((t,n)=>{i=i.concat(Sa(e.serverSyncTree_,t,n));const r=Vl(e,t);zl(e,r)})),e.onDisconnect_=ns(),xl(e.eventQueue_,Gr(),i)}(e)}function Rl(e,t,n){const i=new $r("/.info/"+t),r=Fo(n);e.infoData_.updateSnapshot(i,r);const o=Sa(e.infoSyncTree_,i,r);xl(e.eventQueue_,i,o)}function Ll(e){return e.nextWriteId_++}function Ol(e,t,n,i,r){Dl(e,"set",{path:t.toString(),value:n,priority:i});const o=Tl(e),s=Fo(n,i),a=Oa(e.serverSyncTree_,t),l=Ja(s,a,o),c=Ll(e),u=Ea(e.serverSyncTree_,t,l,c,!0);bl(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||fr("set at "+t+" failed: "+n);const s=Ta(e.serverSyncTree_,c,!o);xl(e.eventQueue_,t,s),Bl(e,r,n,i)}));const h=Vl(e,t);zl(e,h),xl(e.eventQueue_,h,[])}function Pl(e,t,n){let i;i=".info"===Kr(t._path)?Aa(e.infoSyncTree_,t,n):Aa(e.serverSyncTree_,t,n),wl(e.eventQueue_,t._path,i)}function Ml(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Dl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),cr(n,...t)}function Bl(e,t,n,i){t&&Cr((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function Ul(e,t,n){return Oa(e.serverSyncTree_,t,n)||Bo.EMPTY_NODE}function Fl(e,t=e.transactionQueueTree_){if(t||Hl(e,t),tl(t)){const n=Wl(e,t);T(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Ul(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];T(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=no(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Dl(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ta(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Hl(e,el(e.transactionQueueTree_,t)),Fl(e,e.transactionQueueTree_),xl(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Cr(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{fr("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}zl(e,t)}}),s)}(e,sl(t),n)}else il(t)&&rl(t,(t=>{Fl(e,t)}))}function zl(e,t){const n=jl(e,t),i=sl(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=no(n,l.path);let u,h=!1;if(T(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,r=r.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",r=r.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Ul(e,l.path,o);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){pl("transaction failed: Data returned ",i,l.path);let t=Fo(i);"object"==typeof i&&null!=i&&Q(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=Tl(e),c=Ja(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Ll(e),o.splice(o.indexOf(s),1),r=r.concat(Ea(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(Ta(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",r=r.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0))}xl(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;Hl(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Cr(i[e]);Fl(e,e.transactionQueueTree_)}(e,Wl(e,n),i),i}function jl(e,t){let n,i=e.transactionQueueTree_;for(n=Kr(t);null!==n&&void 0===tl(i);)i=el(i,n),n=Kr(t=Yr(t));return i}function Wl(e,t){const n=[];return ql(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ql(e,t,n){const i=tl(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);rl(t,(t=>{ql(e,t,n)}))}function Hl(e,t){const n=tl(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nl(t,n.length>0?n:void 0)}rl(t,(t=>{Hl(e,t)}))}function Vl(e,t){const n=sl(jl(e,t)),i=el(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{$l(e,t)})),$l(e,i),ol(i,(t=>{$l(e,t)})),n}function $l(e,t){const n=tl(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(T(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(T(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ta(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?nl(t,void 0):n.length=o+1,xl(e.eventQueue_,sl(t),r);for(let e=0;e<i.length;e++)Cr(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=function(e,t){const n=Kl(e),i=n.namespace;"firebase.com"===n.domain&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&fr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ar(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new $r(n.pathString)}},Kl=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):fr(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xl{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Yl{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{get key(){return to(this._path)?null:Jr(this._path)}get ref(){return new Zl(this._repo,this._path)}get _queryIdentifier(){const e=Zo(this._queryParams),t=vr(e);return"{}"===t?"default":t}get _queryObject(){return Zo(this._queryParams)}isEqual(e){if(!((e=pe(e))instanceof Ql))return!1;const t=this._repo===e._repo,n=ro(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Zl extends Ql{get parent(){const e=Zr(this._path);return null===e?null:new Zl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Jo,!1)}}class ec{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $r(e),n=nc(this.ref,e);return new ec(this._node.getChild(t),n,So)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new ec(n,nc(this.ref,t),So))))}hasChild(e){const t=new $r(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function tc(e,t){return(e=pe(e))._checkNotDeleted("ref"),void 0!==t?nc(e._root,t):e._root}function nc(e,t){var n,i,r,o;return null===Kr((e=pe(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),gl(n,i,r,o)):gl("child","path",t,!1),new Zl(e._repo,eo(e._path,t))}function ic(e,t){e=pe(e),yl("push",e._path),fl("push",t,e._path,!0);const n=Nl(e._repo),i=qo(n),r=nc(e,i),o=nc(e,i);let s;return s=null!=t?rc(o,t).then((()=>o)):Promise.resolve(o),r.then=s.then.bind(s),r.catch=s.then.bind(s,void 0),r}function rc(e,t){e=pe(e),yl("set",e._path),fl("set",t,e._path,!1);const n=new B;return Ol(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function oc(e,t){ml("update",t,e._path,!1);const n=new B;return function(e,t,n,i){Dl(e,"update",{path:t.toString(),value:n});let r=!0;const o=Tl(e),s={};if(br(n,((n,i)=>{r=!1,s[n]=Ya(eo(t,n),Fo(i),e.serverSyncTree_,o)})),r)cr("update() called with empty data.  Don't do anything."),Bl(0,i,"ok",void 0);else{const r=Ll(e),o=Na(e.serverSyncTree_,t,s,r);bl(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||fr("update at "+t+" failed: "+n);const a=Ta(e.serverSyncTree_,r,!s),l=a.length>0?zl(e,t):t;xl(e.eventQueue_,l,a),Bl(0,i,n,o)})),br(n,(n=>{const i=Vl(e,eo(t,n));zl(e,i)})),xl(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function sc(e){e=pe(e);const t=new Jl((()=>{})),n=new ac(t);return function(e,t,n){const i=Pa(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=Fo(i).withIndex(t._queryParams.getIndex());let o;if(La(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Sa(e.serverSyncTree_,t._path,r);else{const n=Fa(e.serverSyncTree_,t);o=Ra(e.serverSyncTree_,t._path,r,n)}return xl(e.eventQueue_,t._path,o),Aa(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Dl(e,"get for query "+K(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new ec(t,new Zl(e._repo,e._path),e._queryParams.getIndex())))}class ac{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Xl("value",this,new ec(e.snapshotNode,new Zl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yl(this,e,t):null}matches(e){return e instanceof ac&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}class lc{respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yl(this,e,t):null}createEvent(e,t){T(null!=e.childName,"Child events should have a childName.");const n=nc(new Zl(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Xl(e.type,this,new ec(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof lc&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}constructor(e,t){this.eventType=e,this.callbackContext=t}}function cc(e,t,n,i,r){let o;if("object"==typeof i&&(o=void 0,r=i),"function"==typeof i&&(o=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Pl(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const s=new Jl(n,o||void 0),a="value"===t?new ac(s):new lc(t,s);return function(e,t,n){let i;i=".info"===Kr(t._path)?La(e.infoSyncTree_,t,n):La(e.serverSyncTree_,t,n),wl(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Pl(e._repo,e,a)}function uc(e,t,n,i){return cc(e,"value",t,n,i)}!function(e){T(!ha,"__referenceConstructor has already been defined"),ha=e}(Zl),function(e){T(!da,"__referenceConstructor has already been defined"),da=e}(Zl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hc={};let dc=!1;function fc(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),cr("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=Gl(o,r),c=l.repoInfo;void 0!==Xi&&Xi.env&&(a=Xi.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=Gl(o,r),c=l.repoInfo):s=!l.repoInfo.secure;const u=r&&s?new Tr(Tr.OWNER):new Nr(e.name,e.options,t);vl("Invalid Firebase Database URL",l),to(l.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=hc[t.name];r||(r={},hc[t.name]=r);let o=r[e.toURLString()];o&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Il(e,dc,n,i),r[e.toURLString()]=o,o}(c,e,u,new Er(e.name,n));return new pc(h,e)}class pc{get _repo(){return this._instanceStarted||(El(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zl(this._repo,Gr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=hc[t];n&&n[e.key]===e||dr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ml(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&dr("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function mc(e=Ze(),t){return Ye(e,"database").getImmediate({identifier:t})}uo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},uo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Yi="9.9.3",Xe(new me("database",((e,{instanceIdentifier:t})=>fc(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),et("@firebase/database","0.13.5",e),et("@firebase/database","0.13.5","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var gc;Xi=o("4TNnu");const yc=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Je.create("bad-app-name",{appName:String(i)});const r=$e.get(i);if(r){if(ne(e,r.options)&&ne(n,r.config))return r;throw Je.create("duplicate-app",{appName:i})}const o=new ye(i);for(const e of Ge.values())o.addComponent(e);const s=new Qe(e,n,o);return $e.set(i,s),s}({apiKey:"AIzaSyA1qR_n73lnbDIB96TfK_yMCuERhUDCeuA",authDomain:"image-search-6ffc6.firebaseapp.com",databaseURL:"https://image-search-6ffc6-default-rtdb.europe-west1.firebasedatabase.app",projectId:"image-search-6ffc6",storageBucket:"image-search-6ffc6.appspot.com",messagingSenderId:"994814055923",appId:"1:994814055923:web:2086f5ea88785c66926e86"}),vc=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=Ze()){const t=Ye(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ye(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ne(n.getOptions(),null!=t?t:{}))return e;gt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:$i,persistence:[ai,Gn,Xn]})}(yc),_c=new Rn,bc=(new Ln,mc(yc)),wc=tc(bc),xc=null==vc||null===(gc=vc.currentUser)||void 0===gc?void 0:gc.uid,kc=document.querySelector(".js-sign-out"),Cc=document.querySelector(".js-sign"),Ic=document.querySelector("header");function Ec(){Ic.insertAdjacentHTML("beforeend",'<div class="backdrop js-auth-backdrop">\n  \x3c!-- is-hidden --\x3e\n  <div class="reg-modal animate__animated animate__zoomInDown">\n    <button type="button" class="modal__close-btn js-auth-close">\n    x\n    </button>\n    <form class="registration__form js-registration-form" id="log-form">\n      <div class="reg_textfield reg__float-label">\n        <label class="registration__label" for="email">Email</label>\n        <input\n          type="email"\n          class="registration__input"\n          id="email"\n          name="email"\n          placeholder="Write your email"\n          required\n        />\n      </div>\n      <div class="reg_textfield reg__float-label">\n        <label class="registration__label" for="password">Password</label>\n        <input\n          type="password"\n          class="registration__input input__mar"\n          id="password"\n          name="password"\n          placeholder="Write your password"\n          required\n        />\n      </div>\n      <button type="submit" class="modal__btn-sign-in js-signin-btn">\n        <span class="signin__btn-text">Sign in</span>\n      </button>\n      <button type="button" class="modal__btn-sign-up js-signup-btn">\n        <span class="signup__btn-text">Registration</span>\n      </button>\n      <button type="button" class="modal__btn-sign_google js-signup-btn-google">\n        <span class="signup__btn-text">Sign in with Google</span>\n      </button>\n    </form>\n  </div>\n</div>');const e={signUp:document.querySelector(".js-signup-btn"),signIn:document.querySelector(".js-signin-btn"),authCloseBtn:document.querySelector(".js-auth-close"),authBlock:document.querySelector(".js-auth-backdrop"),googleSignBtn:document.querySelector(".js-signup-btn-google")};e.authCloseBtn.addEventListener("click",(()=>e.authBlock.remove())),window.addEventListener("keydown",(t=>"Escape"===t.code?e.authBlock.remove():null)),e.authBlock.addEventListener("click",(t=>t.currentTarget===t.target?e.authBlock.remove():null)),e.signUp.addEventListener("click",Sc),e.signIn.addEventListener("click",Nc),e.googleSignBtn.addEventListener("click",Bc)}function Nc(){event.preventDefault();const e=document.querySelector(".js-registration-form"),n=e.password.value,i=e.email.value;Hn(vc,i,n).then((e=>{let n=e.user.uid;t(C).Notify.success(`User #${n} logged`),kc.classList.remove("js-hidden"),kc.addEventListener("click",Tc),Cc.removeEventListener("click",Ec),Cc.classList.add("js-hidden"),document.querySelector(".js-auth-backdrop").remove()})).catch((e=>{t(C).Notify.failure("User not found"),console.log(e);e.code,e.message}))}function Tc(e){var n;(n=vc,pe(n).signOut()).then((()=>{t(C).Notify.info("Sign-out successful"),kc.classList.add("js-hidden"),kc.removeEventListener("click",Tc),Cc.addEventListener("click",Ec),Cc.classList.remove("js-hidden"),Wc(),(0,Xi.off)(tc(bc,"users/"+xc))})).catch((e=>{t(C).Notify.failure(`${e.message}`)}))}async function Sc(){try{event.preventDefault();const e=document.querySelector(".js-registration-form"),n=e.password.value,i=e.email.value,r=await qn(vc,i,n);console.log(r),t(C).Notify.success("New accaunt created. Sign in please!")}catch(e){t(C).Notify.failure(`${e.code,e.message}`)}}function Ac(e,t){var n;const i=null==e||null===(n=e.currentUser)||void 0===n?void 0:n.uid;return rc(tc(bc,"users/"+i+"/"+t),null)}function Rc(){var e;const t=null==vc||null===(e=vc.currentUser)||void 0===e?void 0:e.uid;return rc(tc(bc,"users/"+t),null).then((()=>C.Notify.success("All events removed from basket")))}async function Lc(e){try{const t=e.currentUser.uid,n=await sc(nc(wc,`users/${t}`));if(n.exists())return Promise.resolve(Object.values(n.val()))}catch(e){console.log(e)}}function Oc(e){try{var t;const n=null==vc||null===(t=vc.currentUser)||void 0===t?void 0:t.uid,i=mc(yc),r=ic(nc(tc(i),"users/")).key;e.newPostKey=r;const o={};return o["users/"+n+"/"+r]=e,oc(tc(i),o).then((()=>C.Notify.success("Event added to basket"))),r}catch(e){C.Notify.failure(`${e.message}`)}}var Pc,Mc,Dc;function Bc(){_i(vc,_c).then((e=>{Rn.credentialFromResult(e).accessToken,e.user;document.querySelector(".js-auth-backdrop").remove()})).catch((e=>{e.code,e.message,e.customData.email,Rn.credentialFromError(e)}))}function Uc(e){if(!e)return;let t="",n=[],i=[];for(const t of e)n.includes(t.id)||(n.push(t.id),i.push(t));i.forEach((n=>{let i=0,{name:r,images:o,country:s,city:a,id:l,newPostKey:c}=n;var u;e.forEach((e=>{e.id===n.id&&(i+=1)})),t+=`<li class="event__item" data-id="${l}"><div class="event__container">\n    <img src=${u=o,u.filter((e=>"3_2"===e.ratio)).sort(((e,t)=>e.width>t.width?1:-1))[0].url} class="event__img"><div class="event__box">\n    <span class="event__quantity">x${i}</span>\n    </div><div class="event__thumb">\n    <p class="event__text">${r}</p>\n    <div class="location__container">\n      <svg class="location_icons" width="6" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M3 0C1.346 0 0 1.403 0 3.128 0 5.296 3.003 9 3.003 9S6 5.19 6 3.128C6 1.403 4.654 0 3 0Zm.905 4.044c-.25.26-.577.39-.905.39a1.25 1.25 0 0 1-.905-.39c-.5-.52-.5-1.367 0-1.887a1.246 1.246 0 0 1 1.81 0c.5.52.5 1.367 0 1.887Z"/></svg>\n      <p class="location__text">${a}, ${s}</p>\n      </div></div>\n      <button type="button" class="basket__button--close" data-key="${c}"> </button type="button">\n      </li>`})),h.basketMarkupContainer.innerHTML=t}Cc.addEventListener("click",Ec),Pc=e=>{if(e){Cc.classList.add("js-hidden"),kc.classList.remove("js-hidden"),kc.addEventListener("click",Tc);const e=vc.currentUser.uid;uc(tc(bc,"users/"+e),(e=>{let t=null;e.exists()&&(t=Object.values(e.val())),jc(t)}))}else Cc.addEventListener("click",Ec),Cc.classList.remove("js-hidden"),kc.classList.add("js-hidden")},pe(vc).onAuthStateChanged(Pc,Mc,Dc);async function Fc(){let e=null;vc.currentUser&&(e=await Lc(vc)),document.body.classList.toggle("no-scroll"),h.basketModal.classList.toggle("hidden"),h.basketQuantity.textContent=e?e.length:0,h.basketNum.textContent=e?e.length:0,Uc(e),h.basketBackdrop.addEventListener("click",Vc),window.addEventListener("keydown",$c),e?(h.basketContainer.classList.remove("hidden"),function(e){qc(h.basketBuyBtn),qc(h.basketClearBtn),h.basketTextFull.classList.remove("hidden"),h.basketTextEmpty.classList.add("hidden"),1!=e.length?h.basketTextTicket.textContent="tickets":h.basketTextTicket.textContent="ticket"}(e)):zc()}function zc(){Hc(h.basketBuyBtn),Hc(h.basketClearBtn),h.basketTextFull.classList.add("hidden"),h.basketTextEmpty.classList.remove("hidden"),h.basketQuantity.innerHTML="",h.basketNumHead.innerHTML="",h.basketMarkupContainer.innerHTML="",h.basketContainer.classList.contains("hidden")||h.basketContainer.classList.add("hidden"),h.basketContainerHead.classList.contains("hidden")||h.basketContainerHead.classList.add("hidden")}function jc(e){e?(Uc(e),h.basketQuantity.textContent=e.length,h.basketNum.textContent=e.length,h.basketNumHead.textContent=e.length,1!=e.length?h.basketTextTicket.textContent="tickets":h.basketTextTicket.textContent="ticket",h.basketContainerHead.classList.remove("hidden")):(zc(),h.basketContainerHead.classList.add("hidden"),Hc(h.basketBuyBtn),Hc(h.basketClearBtn))}function Wc(){h.basketQuantity.innerHTML=0,h.basketNumHead.innerHTML=0,h.basketMarkupContainer.innerHTML="",h.basketContainerHead.classList.add("hidden"),h.basketContainer.classList.add("hidden"),zc()}function qc(e){e.disabled=!1,e.style.color="#4c00fe",e.style.borderColor="#4c00fe"}function Hc(e){e.disabled=!0,e.style.color="grey",e.style.borderColor="grey"}function Vc(e){e.currentTarget===e.target&&Gc()}function $c(e){"Escape"===e.code&&Gc()}function Gc(){h.basketBackdrop.removeEventListener("click",Vc),window.removeEventListener("keydown",$c),h.basketModal.classList.toggle("hidden"),document.body.classList.toggle("no-scroll")}function Kc(e){"Escape"!==e.code&&e.currentTarget!==e.target||Yc()}function Xc(e){Yc(),ou(),Fc()}function Yc(){h.miniModal.classList.toggle("hidden"),h.miniModalBackdrop.removeEventListener("click",Kc),h.miniModalBtnClose.removeEventListener("click",Yc),h.miniModalBtnCart.removeEventListener("click",Xc),window.removeEventListener("keydown",Kc)}function Jc(e){const t={id:e.id,name:e.name,images:e.images,country:e._embedded.venues[0].country.name,city:e._embedded.venues[0].city.name,address:e._embedded.venues[0].address.line1,concertHall:e._embedded.venues[0].name};(h.modalBuyBtn=document.querySelectorAll(".js-buy-btn")).forEach((e=>{e.addEventListener("click",(()=>{if(!vc.currentUser)return void C.Notify.warning("This option only for registered users! Please register!");h.miniModal.classList.toggle("hidden"),h.miniModalBtnClose.addEventListener("click",Yc),h.miniModalBtnCart.addEventListener("click",Xc),window.addEventListener("keydown",Kc),h.miniModalBackdrop.addEventListener("click",Kc);Oc(t)}))}))}h.basketHead.addEventListener("click",Fc),h.basketMarkupContainer.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.key;Ac(vc,t).then((()=>C.Notify.success("Ticket deleted")))})),h.basketContinueBookingBtn.addEventListener("click",Gc),h.basketBuyBtn.addEventListener("click",(function(){window.open("https://next.privat24.ua/","_blank"),Gc()})),h.basketClearBtn.addEventListener("click",(function(){h.basketContainer.classList.add("hidden"),h.basketContainerHead.classList.add("hidden"),Rc(),h.basketQuantity.innerHTML=0,h.basketNumHead.innerHTML=0,h.basketMarkupContainer.innerHTML="",zc()}));var Qc;function Zc(e){return e.images.filter((e=>"3_2"===e.ratio)).sort(((e,t)=>t.width>e.width?1:-1))}function eu(e){let t=Zc(e),n="";e.dates.start.localTime&&(n=e.dates.start.localTime.slice(0,5));const i={date:e.dates.start.localDate,time:n,timezone:e.dates.timezone},r=Object.values(i).join(", ");let o;o=e.info?e.info:"No additional info avaliable.",h.jsModal.innerHTML=`\n        <div class="modal__logo"><img\n            src="${t[1].url}"\n            alt=""\n          /></div>\n      <div class="modal__data-container">\n        <div class="modal__big-logo">   \n         <img  \n            src="${t[0].url}"\n            alt=""\n          /></div>\n        <ul class="modal__list list">\n          <li class="modal__item">\n            <h3 class="modal__title">INFO</h3>\n            <p class="modal__text">${o}</p>\n          </li>\n          <li class="modal__item">\n            <h3 class="modal__title">WHEN</h3>\n            <p class="modal__text">${r}</p>\n          </li>\n          <li class="modal__item">\n            <h3 class="modal__title">WHERE</h3>\n            <p class="modal__text">${e._embedded.venues[0].name}</p>\n          </li>\n          <li class="modal__item">\n            <h3 class="modal__title">WHO</h3>\n            <p class="modal__text" id="modal__name">${e.name}</p>\n          </li>\n          <li class="modal__item">\n            <h3 class="modal__title">PRICES</h3>\n            <div class="modal__prices" data-id="${e.id}"></div>\n          </li>\n        </ul>\n      </div>`}function tu(e){const n=document.querySelector(".modal__prices");let i=e.priceRanges.map(((n,i)=>`\n      <div class="prices__box">\n<img class="prices__icon" src="${t(Qc)}" alt="Ticket icon" />\n        <p class="modal__text prices__text">\n          ${n.type} ${n.min} - ${n.max} ${n.currency}\n        </p>\n      </div>\n      <button type="button" class="prices__btn js-buy-btn center" data-index="${i}">\n        <p class="prices__btn-txt">ADD TO CART</p>\n      </button>\n      <a href="${e.url}" target="_blank" rel="noopener noreferrer"><button type="button" class="prices__btn center">\n        <p class="prices__btn-txt">BUY TICKET</p>\n      </button></a>\n  `)).join("");n.innerHTML=i}Qc=new URL(o("kyEFX").resolve("fLXZo"),import.meta.url).toString();let nu="";function iu(){const e=document.querySelector("#modal__name").textContent;ou(),p.setKeyword(e),p.setCountry(""),p.setPage(0),b()}function ru(){h.modalBackdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.body.classList.add("modal__fix-size"),h.modalCloseBtn.addEventListener("click",ou),h.modalBackdrop.addEventListener("click",su),window.addEventListener("keydown",au),h.modalMoreBtn.addEventListener("click",iu)}function ou(){h.modalBackdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.classList.remove("modal__fix-size")}function su(e){e.currentTarget===e.target&&(ou(),lu())}function au(e){"Escape"===e.code&&(ou(),lu())}function lu(){window.removeEventListener("keydown",au),h.modalBackdrop.removeEventListener("click",su),h.modalCloseBtn.removeEventListener("click",ou)}document.querySelector(".event_list").addEventListener("click",(async function(e){let t=e.target;if("UL"===e.target.nodeName)return;if("LI"!==e.target.nodeName&&"UL"!==e.target.nodeName)for(;"LI"!==t.nodeName;)t=t.parentNode;nu=t.dataset.id;let n=await p.getById(nu);eu(n),n.priceRanges?tu(n):document.querySelector(".modal__prices").innerHTML='\n      <div class="prices__box">\n        <p class="modal__text prices__text">\n          No tickets avaliable at this moment.\n        </p>\n      </div>';ru(),Jc(n)})),h.searchForm.addEventListener("submit",(function(e){e.preventDefault(),navigator.geolocation.getCurrentPosition((e=>{const t=u.encode(e.coords.latitude,e.coords.longitude,5);p.setGeoPoint(t)}));const t=h.searchForm.elements.searchQuery.value;p.setKeyword(t),b()})),h.searchForm.addEventListener("dblclick",(function(){h.searchForm.elements.searchQuery.value="",p.setKeyword("")})),h.countryForm.addEventListener("change",(function(e){e.preventDefault();const t=h.countryForm.elements.countryQuery.value;let n=w.find((e=>e.name===t)).code;"XX"===n&&(n="");p.setCountry(n),p.setPage("0"),b()})),h.countryInput.addEventListener("mouseenter",(function(){h.countryForm.elements.countryQuery.value="",p.setCountry("")}));
//# sourceMappingURL=index.5d564ad3.js.map

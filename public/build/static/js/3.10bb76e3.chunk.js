(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{100:function(e,t,n){var r=n(89);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,c=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw o}}}}},101:function(e,t,n){var r=n(102),a=n(103),o=n(89),c=n(104);e.exports=function(e){return r(e)||a(e)||o(e)||c()}},102:function(e,t,n){var r=n(90);e.exports=function(e){if(Array.isArray(e))return r(e)}},103:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},104:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},105:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},106:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="\ufffd";for(var i=Object.keys(n),u=0;u<i.length;u++){var l=i[u];e=e.replace(new RegExp(l,"g"),n[l])}return e}(e)}}},107:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},108:function(e,t,n){e.exports=n.p+"static/media/left-arrow.0946d1b8.svg"},109:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(2),c=n.n(o),i=n(31),u=n(8),l=n(95),s=n.n(l),f=function(){var e=Object(u.e)(),t=Object(u.f)(),n=s.a.parse(t.search),r=a(Object(o.useState)(parseInt(n.offset)||0),2),c=r[0],i=r[1];return Object(o.useEffect)((function(){return n.offset||i(0),function(){}}),[t.search]),Object(o.useEffect)((function(){return e.replace("".concat(t.pathname,"?offset=").concat(c)),function(){}}),[c]),[c,i]},m=n(93),p=n.n(m),d=n(108),y=n.n(d),v=function(e){var t=e.onClick,n=e.image,r=e.disabled;return c.a.createElement("div",{onClick:t,style:{display:r&&"none"}},c.a.createElement("img",{src:n,alt:"Arrow"}))},g=function(e){var t=e.currentPage,n=e.setOffset,r=e.totalPages;return c.a.createElement("div",{className:"pagination"},c.a.createElement(v,{onClick:function(){return n((function(e){return e-6}))},image:y.a,disabled:1===t}),"".concat(t," / ").concat(r),c.a.createElement(v,{onClick:function(){return n((function(e){return e+6}))},image:p.a,disabled:t===r}))},b=n(43);t.a=function(e){var t=e.query,n=e.array,r=e.col,o=e.component,u=a(f(),2),l=u[0],s=u[1],m=Object(i.useQuery)(t,{variables:{limit:6,offset:l}}),p=m.loading,d=m.error,y=m.data;if(p)return c.a.createElement(b.a,null);if(d)return c.a.createElement("div",null,"Error!");var v=y[n],h=v.records,E=v.count;return c.a.createElement("div",null,c.a.createElement("div",{className:"responsiveContainer"},h.map((function(e){return c.a.createElement("div",{className:"responsiveItem ".concat(r),key:Math.random()},c.a.createElement(o,{item:e}))}))),c.a.createElement(g,{currentPage:Math.ceil((l+1)/6),totalPages:Math.ceil(E/6),setOffset:s}))}},110:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(94),c=n.n(o),i=n(111),u=n.n(i),l=n(91);t.a=function(e){var t=e.item,n=t.mission_name,r=t.launch_date_local,o=t.launch_success,i=t.rocket,s=i.rocket_name,f=i.rocket_type,m=t.launch_site.site_name,p=t.links,d=p.wikipedia,y=p.video_link,v=p.mission_patch_small,g=new Date(r),b="".concat(g.getFullYear(),"-").concat(g.getMonth()+1,"-").concat(g.getDate(),"\n         ").concat(("0"+g.getHours()).substr(-2),":").concat(("0"+g.getMinutes()).substr(-2));return a.a.createElement("div",{className:"launchContainer"},a.a.createElement("div",{className:"launchTitle"},a.a.createElement("strong",null,n),a.a.createElement("span",null,b)),a.a.createElement("div",{className:"launchContent"},a.a.createElement("div",{className:"launchDetails"},a.a.createElement("ul",{className:"launchList"},a.a.createElement("li",null,"Rocket: ",a.a.createElement("strong",null,s)),a.a.createElement("li",null,"Rocket type: ",a.a.createElement("strong",null,f)),a.a.createElement("li",null,"Luanch site: ",a.a.createElement("strong",null,m))),a.a.createElement("div",{className:"launchLinks"},a.a.createElement("div",{className:"launchStatus",style:{backgroundColor:o?"#39a857":"#9B0000"}},o?"Successful":"Failed"),d&&a.a.createElement(l.a,{image:c.a,link:d}),y&&a.a.createElement(l.a,{image:u.a,link:y}))),v&&a.a.createElement("img",{src:v,alt:"Image",style:{height:"6em"}})))}},111:function(e,t,n){e.exports=n.p+"static/media/youtube.6a6de517.svg"},118:function(e,t,n){"use strict";n.r(t);var r=n(92),a=n(2),o=n.n(a),c=n(31),i=n(109),u=n(110);function l(){var e=Object(r.a)(["\n  query LaunchesQuery($limit: Int!, $offset: Int!) {\n   launches(limit: $limit, offset: $offset) {\n      records {\n         mission_name\n         launch_date_local\n         launch_success\n         rocket {\n            rocket_name\n            rocket_type\n         }\n         launch_site {\n            site_name\n         }\n         links {\n            wikipedia\n            video_link\n            mission_patch_small\n         }\n      }\n      count\n   }\n  }\n"]);return l=function(){return e},e}var s=Object(c.gql)(l());t.default=function(){return o.a.createElement(i.a,{array:"launches",col:"col-3",component:u.a,query:s})}},89:function(e,t,n){var r=n(90);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},90:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},91:function(e,t,n){"use strict";var r=n(2),a=n.n(r);t.a=function(e){var t=e.image,n=e.link;return a.a.createElement("a",{href:n,target:"_blank",className:"iconLink"},a.a.createElement("img",{src:t,alt:"icon"}))}},92:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},93:function(e,t,n){e.exports=n.p+"static/media/right-arrow.df33b1df.svg"},94:function(e,t,n){e.exports=n.p+"static/media/wikipedia.d68dac03.svg"},95:function(e,t,n){"use strict";var r=n(96),a=n(100),o=n(101),c=n(105),i=n(106),u=n(107);function l(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function f(e,t){return t.decode?i(e):e}function m(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){var t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var a="string"===typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var c,i=a(e.split("&"));try{for(i.s();!(c=i.n()).done;){var s=c.value,m=u(t.decode?s.replace(/\+/g," "):s,"="),p=r(m,2),y=p[0],v=p[1];v=void 0===v?null:["comma","separator"].includes(t.arrayFormat)?v:f(v,t),n(f(y,t),v,o)}}catch(x){i.e(x)}finally{i.f()}for(var g=0,b=Object.keys(o);g<b.length;g++){var h=b[g],E=o[h];if("object"===typeof E&&null!==E)for(var j=0,k=Object.keys(E);j<k.length;j++){var O=k[j];E[O]=d(E[O],t)}else o[h]=d(E,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=p,t.parse=y,t.stringify=function(e,t){if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[s(t,e),"[",a,"]"].join("")]:[[s(t,e),"[",s(a,e),"]=",s(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[s(t,e),"[]"].join("")]:[[s(t,e),"[]=",s(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[s(t,e)]:[[s(t,e),"=",s(r,e)].join("")])}}}}(t),a={},c=0,i=Object.keys(e);c<i.length;c++){var u=i[c];n(u)||(a[u]=e[u])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(n){var a=e[n];return void 0===a?"":null===a?s(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):s(n,t)+"="+s(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=u(e,"#"),a=r(n,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:y(p(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:f(c,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=m(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query),i=t.stringify(c,n);i&&(i="?".concat(i));var u=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(s(e.fragmentIdentifier,n))),"".concat(r).concat(i).concat(u)}},96:function(e,t,n){var r=n(97),a=n(98),o=n(89),c=n(99);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||c()}},97:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},98:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},99:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=3.10bb76e3.chunk.js.map
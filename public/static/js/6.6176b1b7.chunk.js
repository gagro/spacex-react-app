(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{100:function(e,t,r){var n=r(89);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}},101:function(e,t,r){var n=r(102),a=r(103),o=r(89),i=r(104);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},102:function(e,t,r){var n=r(90);e.exports=function(e){if(Array.isArray(e))return n(e)}},103:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},104:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},105:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},106:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="\ufffd";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},107:function(e,t,r){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},108:function(e,t,r){e.exports=r.p+"static/media/left-arrow.0946d1b8.svg"},109:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(2),i=r.n(o),c=r(31),u=r(8),s=r(95),l=r.n(s),f=function(){var e=Object(u.e)(),t=Object(u.f)(),r=l.a.parse(t.search),n=a(Object(o.useState)(parseInt(r.offset)||0),2),i=n[0],c=n[1];return Object(o.useEffect)((function(){return r.offset||c(0),function(){}}),[t.search]),Object(o.useEffect)((function(){return e.replace("".concat(t.pathname,"?offset=").concat(i)),function(){}}),[i]),[i,c]},m=r(93),p=r.n(m),y=r(108),d=r.n(y),g=function(e){var t=e.onClick,r=e.image,n=e.disabled;return i.a.createElement("div",{onClick:t,style:{display:n&&"none"}},i.a.createElement("img",{src:r,alt:"Arrow"}))},v=function(e){var t=e.currentPage,r=e.setOffset,n=e.totalPages;return i.a.createElement("div",{className:"pagination"},i.a.createElement(g,{onClick:function(){return r((function(e){return e-6}))},image:d.a,disabled:1===t}),"".concat(t," / ").concat(n),i.a.createElement(g,{onClick:function(){return r((function(e){return e+6}))},image:p.a,disabled:t===n}))},h=r(43);t.a=function(e){var t=e.query,r=e.array,n=e.col,o=e.component,u=a(f(),2),s=u[0],l=u[1],m=Object(c.useQuery)(t,{variables:{limit:6,offset:s}}),p=m.loading,y=m.error,d=m.data;if(p)return i.a.createElement(h.a,null);if(y)return i.a.createElement("div",null,"Error!");var g=d[r],b=g.records,E=g.count;return i.a.createElement("div",null,i.a.createElement("div",{className:"responsiveContainer"},b.map((function(e){return i.a.createElement("div",{className:"responsiveItem ".concat(n),key:Math.random()},i.a.createElement(o,{item:e}))}))),i.a.createElement(v,{currentPage:Math.ceil((s+1)/6),totalPages:Math.ceil(E/6),setOffset:l}))}},112:function(e,t,r){e.exports=r.p+"static/media/www.43e9d8b8.svg"},117:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAAS1BMVEX////MzMyZmZnHx8fExMTJycmQkJDNzc2NjY3n5+fY2Nja2trl5eXp6en29vbw8PCIiIjz8/Ovr6+8vLybm5uEhISqqqrf399+fn6aywIrAAAIDElEQVR4nO2d6WKyOhCGK4Gwbxbruf8rPSzZSSLU8DHUeX5ZLRheZ8tC+PpCEARBEARBEARBEARBEARBEARBEARBEAQ5hEZwdkvOommrskjTRJCmRVm1H6VH0z6LNCHjxd80xjdIkhbPz1CjqYqEEEMCTY7x06L641o0eeoVQREjzf+uFm1ByGsROIQU7dktPoT6Fm+wBc0u4lt9dquDUzmMYQqQI6vAKcyiOrvlQcnXMkzXP6aI8lnlI9WznBKJJYAQkp/d+mC0N7ISIS1zSwRo83IdTcntb8SKpiCGCrey9mSEpi5vhhak+AMZpNa8f1Th2b8+qH/qWiTJ5aOmZg4JKTZf0JhrVSlIcWQrD6dVzSFJyg3GIGlKoh194UhRxao1lLsdXZcivmwmLeJUXsXv4l1TSC3T+KLukSZCB5LscgqVPhFRZjxhyPb9IxolPLxn1IqDJcnl8mgvZSDpm61vUiJs6/emdQ69zJrx8/3TPaVRkEsp0UgdSJBSqFZOeCXvkM1+1y04SsghYc74L0gC28NMKs6aBDvnwaRqFXSAElfJoqXW2zxCCVIGO+eB1Eo9eZASacBzHkZv6HCQEvCTqLh+GeaP8I5bsFMeRCki2lcubCNc7mjE6YGHiZZw222nTkJ4JUTJSmAPTwhvmIeepRLhvEPaWagzHgF3jISNHMiOYzglxHcAdg7RxRC1X0XCKyGqCbidDh7TY+m/ByjRMjODW2CKFqpDagcoUaz1hoWIjNq7B0RMri1Qk+AGYU5WhleCj04ANYnU9TutlOjniV8XG1bLOL8KAj03iPXPZFZW+SPz0N1ffhev20B2OVgIs8Zy0yZyGnmgrz2I5acE4EwHryHspe8uJeh2kwBYS/A06XBbs8bMM48S2QaTYELAmwbkLXNdg6lE3b1lErVf9/PgvUL3wOoeJbrXeZEVVeCmOZ4senlmc1ZKPKJoGH9+mmWUzi8lr01iwxeeAveMdfDKY0KWymdtE7Sjd1KMkPv4UtGCxhrf6wVlDUzf6N3NKjpK6WLrcixhGa/I1dKwTyLFWahGZ0mTXHpYvsFyhi2IF1R6fS5twrZosBwyzUGEiVCLEJ6vPBFWTdnS+iJElG1R4ivRs+pYZ9LBIQTzDVg1lRhTtXzGhIio6R3WRFtpBlG09XfmEIIPC4JaMsFChHX0jAvBKufcHL37vv/83L/FOrN+EEXn0PDjrUKwMTtQQaJK3D+yEIIpYeaOqptTKL0zZ29EYGCZ8cchRL2cKIEUJEp3iFCEcCjBKiva3ZfDa35AI05gFaLxmOFZpJ6yUhGCRUxTifaxeAJlfYyyG6RnjH86hODFJaRKwtckVQi/EtHwWJS4z4fwrtfdJYRP/nPgRmotdzUhHPVE23El5o8bZhLz8c/MESN4lQ2oK85GB+w9T10IhxK1qB/mY77nY+hQ9nXsTJ+8Bwpo8q9mScPaIkOIqFsOMZVg/5XNK6S4hUzZJHIKwUaLAa3cZzYaW23UFGIxeKcSdD6JXmk7hGhij0eeAs+e1g8NISiPbbWZRVkpPkfchG4Q4gtc/iy2CzF0ov4xa0ymxM/0uuqG7ULA6W3wAWz7h0awnN5r2KoBQ4klYs6+oQ9fOYQAN5TNJyPtHxpWPr1XP6w15hwjl/Jzk2vcrizEnB+rzFFZTf2O2Xe2BEsuBJzScrcQT+qurJa+1ocIUVFeWSm5Y7aENss+xCKWGDG9Z1eChY9Lx4gdWWN+ufSqTCXy62eNHXXEz3J9phJiHPOidcT+yjLN7ErwbsNFK8v9fY2G9yzs45hX7Wvs633Og62EzWA4lOi2CAGv97lnPCKi3/Pb/M/MVEIbqfEKAW88YscI1RQuZw9qH8z8/WNWPiHgjVBtH7Ocr2qZ6q51JdaV1Ush4I1Zbh7FZiaxhPl6mc6LosdLJS4zir1xXkNc1+LVzb1bPuuslVVN/UJAnNfYNtOlGAVTrLrTeZHIUmW5lbjMTNemuU/VJAYx1Vkuc5/zH65xzOvMfW6ZDTew/o5CidQY0b3KbPiG9REmmTWyrrJo5hQC5PqI1ytm1mEiG2xlh72euM6KGd8aKuci2y5Sd4NoY73GTBUlbELAXEPlWVXnFmKIplV1iVhV56isOqsQQFfVeZY9uoWIzHWWzsrKIgTUdZbulbcFHTxKjALMLC/tlVVLs7UQUFfeutdiF96bMwz+m3/gtXesHADsWmz36vy2KHew/PSrGnPV04a7Ot9/v8ZelMrKeqmA79fw3sGznxdKAL6Dx3dP128Q+wzZlAB9T1foW+98NgH6Lj9532eouzudSuSw7/sUv1OojaKcSsSgDcJxb/g7yCyqpUnw94bbdgt4D6sS8HcLsOwf8S42JS6wf8QBu32YNaZ0DFCDtitEq4Ntb25GTJ4xYO8xIyqdgL1CvbJq+R1AgCb6rMh9qIJ5sKJELgIEbMeY4IYbMKbLOKHsoxvs7Ech9qo7RAlhGyA7GTr18UpcYvdCZT/Lw5S4xn6Wx2xFqioBuKQ0SA5osrIPMqQFES8QjQ62tXkjtwu90C7IuC+2AHdK58i989OP3jsfn6aggM/X4OATVzj4DB6O/lSmnVL0pf5MJ+ADEC8wn9O1+WrqP/Wcri98cpsEn+UnwKc7CvB5nwJ8AqwAnwkswKdEC/C54RJ8krykaZ9TilgFyClwjonk2X6ECpymrcaMmSaCdMyl1WdpoNIIzm4JgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiB/lf8B5BtlWszNgN4AAAAASUVORK5CYII="},122:function(e,t,r){"use strict";r.r(t);var n=r(92),a=r(2),o=r.n(a),i=r(31),c=r(109),u=r(117),s=r.n(u),l=r(112),f=r.n(l),m=r(91),p=function(e){var t=e.item,r=t.ship_name,n=t.ship_type,a=t.roles,i=t.weight_kg,c=t.year_built,u=t.active,l=t.url,p=t.image,y=t.missions;return o.a.createElement("div",{className:"launchContainer"},o.a.createElement("div",{className:"launchTitle"},o.a.createElement("strong",null,"".concat(r," (").concat(n,")")),o.a.createElement("div",{className:"rocketFirstLaunch"},o.a.createElement("span",null,"Year built"),c||"N/A")),o.a.createElement("div",{className:"launchContent"},o.a.createElement("div",{className:"launchDetails"},o.a.createElement("ul",{className:"launchList"},o.a.createElement("li",null,"Roles: "," ",a.map((function(e){return o.a.createElement("strong",{className:"itemList",key:e},e)}))),o.a.createElement("li",null,"Weight:",o.a.createElement("strong",null,i?"".concat(i," kg"):"N/A")),o.a.createElement("li",null,"Missions: "," ",y.map((function(e){return o.a.createElement("strong",{className:"itemList",key:e},e)})))))),o.a.createElement("img",{src:p||s.a,alt:"Image"}),o.a.createElement("div",{className:"launchLinks",style:{paddingTop:"20px"}},o.a.createElement("div",{className:"launchStatus",style:{backgroundColor:u?"#39a857":"#9B0000"}},u?"Active":"Inactive"),l&&o.a.createElement(m.a,{image:f.a,link:l})))};function y(){var e=Object(n.a)(["\n  query ShipsQuery($limit: Int!, $offset: Int!) {\n   ships(limit: $limit, offset: $offset) {\n      records {\n         ship_name\n         ship_type\n         roles\n         weight_kg\n         year_built\n         active\n         url\n         image\n         missions\n      }\n      count\n   }\n  }\n"]);return y=function(){return e},e}var d=Object(i.gql)(y());t.default=function(){return o.a.createElement(c.a,{array:"ships",col:"col-3",component:p,query:d})}},89:function(e,t,r){var n=r(90);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},90:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},91:function(e,t,r){"use strict";var n=r(2),a=r.n(n);t.a=function(e){var t=e.image,r=e.link;return a.a.createElement("a",{href:r,target:"_blank",className:"iconLink"},a.a.createElement("img",{src:t,alt:"icon"}))}},92:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return n}))},93:function(e,t,r){e.exports=r.p+"static/media/right-arrow.df33b1df.svg"},95:function(e,t,r){"use strict";var n=r(96),a=r(100),o=r(101),i=r(105),c=r(106),u=r(107);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function f(e,t){return t.decode?c(e):e}function m(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){var t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"===typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===r?r:f(r,e);n[t]=a};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var i,c=a(e.split("&"));try{for(c.s();!(i=c.n()).done;){var l=i.value,m=u(t.decode?l.replace(/\+/g," "):l,"="),p=n(m,2),d=p[0],g=p[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:f(g,t),r(f(d,t),g,o)}}catch(S){c.e(S)}finally{c.f()}for(var v=0,h=Object.keys(o);v<h.length;v++){var b=h[v],E=o[b];if("object"===typeof E&&null!==E)for(var A=0,I=Object.keys(E);A<I.length;A++){var w=I[A];E[w]=y(E[w],t)}else o[b]=y(E,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var r=o[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=d,t.stringify=function(e,t){if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(t,e),"[",a,"]"].join("")]:[[l(t,e),"[",l(a,e),"]=",l(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[l(t,e)]:[[l(t,e),"=",l(n,e)].join("")])}}}}(t),a={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(a[u]=e[u])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(r){var a=e[r];return void 0===a?"":null===a?l(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):l(r,t)+"="+l(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=u(e,"#"),a=n(r,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:d(p(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=m(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),i=Object.assign(o,e.query),c=t.stringify(i,r);c&&(c="?".concat(c));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(l(e.fragmentIdentifier,r))),"".concat(n).concat(c).concat(u)}},96:function(e,t,r){var n=r(97),a=r(98),o=r(89),i=r(99);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},97:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},98:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},99:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=6.6176b1b7.chunk.js.map
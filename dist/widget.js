!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t,e){if(!t)throw Error("API method required");if(t=t.toLowerCase(),-1===i.indexOf(t))throw Error("Method ".concat(t," is not supported"));switch(console.log("Handling API call ".concat(t),e),console.log(t),t){case"get_advertisement":Object(o.a)(e);break;default:console.warn("No handler defined for ".concat(t))}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=["get_advertisement"];!function(t){console.log("JS-Widget starting");var e=t[t["JS-Widget"]],n=e.q;if(n)for(var o=0;o<n.length;o++)r(n[o][0],n[o][1])}(window)},function(t,e,n){"use strict";function r(t){var e=document.createElement("div");for(e.innerHTML=s.a,e.getElementsByClassName("js-widget-title")[0].textContent=t.title,e.getElementsByClassName("js-widget-offer")[0].textContent=t.specialOffer,e.getElementsByClassName("js-widget-ps")[0].textContent=t.postScriptum,o=document.getElementsByTagName("body")[0];e.children.length>0;)c.push(e.children[0]),o.appendChild(e.children[0])}e.a=r;var o,i=n(2),s=n.n(i),a=n(3),c=(n.n(a),[])},function(t,e){t.exports='<div class="js-widget-dialog">\n  <div><span class="js-widget-title"></span></div>\n  <div>Try our special offer: <span class="js-widget-offer"></span></div>\n  <div>P.S: <span class="js-widget-ps"></span></div>\n</div>\n'},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=n(5)(!1),e.push([t.i,".js-widget-dialog{\n    margin: 20px;\n    padding: 5px;\n    border-radius: 15px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 5px 10px 18px rgba(0,0,0,0.3);\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(0,0,0,0.8);\n    line-height: 20px;\n}\n\nspan {\n    font-weight: bold;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t)))))," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n}).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],c=i[2],f=i[3],u={css:a,media:c,sourceMap:f};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function i(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=g(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),i(t,e),e}function f(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var f=b++;n=m||(m=a(e)),r=l.bind(null,n,f,!1),o=l.bind(null,n,f,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=d.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){if(void 0===e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),m=null,b=0,y=[],w=n(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,i.push(c)}if(t){r(o(t,e),e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete h[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire53b6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire53b6=r),(0,r.register)("dCfNN",function(t,n){var r="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,m=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?o:+e}t.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function T(){var e,n,r,o=m();if(O(o))return h(o);f=setTimeout(T,(e=o-l,n=o-c,r=t-e,d?g(r,a-n):r))}function h(e){return(f=void 0,v&&o)?x(e):(o=i=void 0,u)}function j(){var e,n=m(),r=O(n);if(o=arguments,i=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?x(e):u;if(d)return f=setTimeout(T,t),x(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},j.flush=function(){return void 0===f?u:h(m())},j}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=r("dCfNN");let i=document.querySelector(".feedback-form"),a=document.querySelector("textarea"),u=document.querySelector("input"),f="feedback-form-state";(function(){let e=localStorage.getItem(f);console.log("savedMessage:",e);let t=JSON.parse(e);e&&(a.value=t.message,u.value=t.email)})(),i.addEventListener("submit",e=>{e.preventDefault();let{elements:{email:t,message:n}}=e.currentTarget;console.log(t.value,n.value),e.currentTarget.reset(),localStorage.removeItem(f)}),i.addEventListener("input",(o&&o.__esModule?o.default:o)(function(e){e.preventDefault(),l[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(l))},500));let l={}}();
//# sourceMappingURL=03-feedback.592a9cd9.js.map
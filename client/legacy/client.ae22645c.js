function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var _={};_[i]=function(){return this};var $=Object.getPrototypeOf,w=$&&$($(O([])));w&&w!==r&&o.call(w,i)&&(_=w);var x=b.prototype=g.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:n,done:!0}}return y.prototype=x.constructor=b,b.constructor=y,y.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),s(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function h(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){}var m=function(t){return t};function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function _(t){t.forEach(y)}function $(t){return"function"==typeof t}function w(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function x(t){if(null==t)return d;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}function E(t){var e;return x(t,(function(t){return e=t}))(),e}function S(t,e,n){t.$$.on_destroy.push(x(e,n))}function j(t,e,n,r){if(t){var o=R(t,e,n,r);return t[0](o)}}function R(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function P(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=R(n,r,o,c);e.p(s,u)}}var k="undefined"!=typeof window,O=k?function(){return window.performance.now()}:function(){return Date.now()},L=k?function(t){return requestAnimationFrame(t)}:d,N=new Set;function A(t){N.forEach((function(e){e.c(t)||(N.delete(e),e.f())})),0!==N.size&&L(A)}function T(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function D(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function B(){return J(" ")}function G(){return J("")}function F(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function H(t){return Array.from(t.childNodes)}function M(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?U(e):q(e)}function K(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return J(e)}function V(t){return K(t," ")}function Y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}var W,X=new Set,Z=0;function tt(t){for(var e=5381,n=t.length;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function et(t,e,n,r,o,a,i){for(var c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=16.666/r,s="{\n",f=0;f<=1;f+=u){var l=e+(n-e)*a(f);s+=100*f+"%{".concat(i(l,1-l),"}\n")}var h=s+"100% {".concat(i(n,1-n),"}\n}"),p="__svelte_".concat(tt(h),"_").concat(c),v=t.ownerDocument;X.add(v);var d=v.__svelte_stylesheet||(v.__svelte_stylesheet=v.head.appendChild(q("style")).sheet),m=v.__svelte_rules||(v.__svelte_rules={});m[p]||(m[p]=!0,d.insertRule("@keyframes ".concat(p," ").concat(h),d.cssRules.length));var g=t.style.animation||"";return t.style.animation="".concat(g?"".concat(g,", "):"").concat(p," ").concat(r,"ms linear ").concat(o,"ms 1 both"),Z+=1,p}function nt(t,e){var n=(t.style.animation||"").split(", "),r=n.filter(e?function(t){return t.indexOf(e)<0}:function(t){return-1===t.indexOf("__svelte")}),o=n.length-r.length;o&&(t.style.animation=r.join(", "),(Z-=o)||L((function(){Z||(X.forEach((function(t){for(var e=t.__svelte_stylesheet,n=e.cssRules.length;n--;)e.deleteRule(n);t.__svelte_rules={}})),X.clear())})))}function rt(t){W=t}function ot(){if(!W)throw new Error("Function called outside component initialization");return W}function at(t){ot().$$.on_mount.push(t)}function it(t,e){ot().$$.context.set(t,e)}function ct(t){return ot().$$.context.get(t)}var ut=[],st=[],ft=[],lt=[],ht=Promise.resolve(),pt=!1;function vt(t){ft.push(t)}var dt,mt=!1,gt=new Set;function yt(){if(!mt){mt=!0;do{for(var t=0;t<ut.length;t+=1){var e=ut[t];rt(e),bt(e.$$)}for(rt(null),ut.length=0;st.length;)st.pop()();for(var n=0;n<ft.length;n+=1){var r=ft[n];gt.has(r)||(gt.add(r),r())}ft.length=0}while(ut.length);for(;lt.length;)lt.pop()();pt=!1,mt=!1,gt.clear()}}function bt(t){if(null!==t.fragment){t.update(),_(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(vt)}}function _t(t,e,n){var r,o,a;t.dispatchEvent((r="".concat(e?"intro":"outro").concat(n),(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),a))}var $t,wt=new Set;function xt(){$t={r:0,c:[],p:$t}}function Et(){$t.r||_($t.c),$t=$t.p}function St(t,e){t&&t.i&&(wt.delete(t),t.i(e))}function jt(t,e,n,r){if(t&&t.o){if(wt.has(t))return;wt.add(t),$t.c.push((function(){wt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}var Rt={duration:0};function Pt(t,e,n,r){var o=e(t,n),a=r?0:1,i=null,c=null,u=null;function s(){u&&nt(t,u)}function f(t,e){var n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function l(e){var n,r=o||Rt,l=r.delay,h=void 0===l?0:l,p=r.duration,v=void 0===p?300:p,g=r.easing,y=void 0===g?m:g,b=r.tick,$=void 0===b?d:b,w=r.css,x={start:O()+h,b:e};e||(x.group=$t,$t.r+=1),i||c?c=x:(w&&(s(),u=et(t,a,e,v,h,y,w)),e&&$(0,1),i=f(x,v),vt((function(){return _t(t,e,"start")})),n=function(e){if(c&&e>c.start&&(i=f(c,v),c=null,_t(t,i.b,"start"),w&&(s(),u=et(t,a,i.b,i.duration,0,y,o.css))),i)if(e>=i.end)$(a=i.b,1-a),_t(t,i.b,"end"),c||(i.b?s():--i.group.r||_(i.group.c)),i=null;else if(e>=i.start){var n=e-i.start;a=i.a+i.d*y(n/i.duration),$(a,1-a)}return!(!i&&!c)},0===N.size&&L(A),new Promise((function(t){N.add({c:n,f:t})})))}return{run:function(t){$(o)?(dt||(dt=Promise.resolve()).then((function(){dt=null})),dt).then((function(){o=o(),l(t)})):l(t)},end:function(){s(),i=c=null}}}function kt(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function Ot(e){return"object"===t(e)&&null!==e?e:{}}function Lt(t){t&&t.c()}function Nt(t,e){t&&t.l(e)}function At(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),vt((function(){var e=a.map(y).filter($);i?i.push.apply(i,h(e)):_(e),t.$$.on_mount=[]})),c.forEach(vt)}function Tt(t,e){var n=t.$$;null!==n.fragment&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){-1===t.$$.dirty[0]&&(ut.push(t),pt||(pt=!0,ht.then(yt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=W;rt(t);var u=e.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:i,skip_bound:!1},f=!1;if(s.ctx=n?n(t,u,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),f&&Ct(t,e)),n})):[],s.update(),f=!0,_(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var l=H(e.target);s.fragment&&s.fragment.l(l),l.forEach(I)}else s.fragment&&s.fragment.c();e.intro&&St(t.$$.fragment),At(t,e.target,e.anchor),yt()}rt(c)}var Dt=function(){function t(){p(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){Tt(this,1),this.$destroy=d}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}(),qt=[];function Ut(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=[];function o(n){if(w(t,n)&&(t=n,e)){for(var o=!qt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),qt.push(i,t)}if(o){for(var c=0;c<qt.length;c+=2)qt[c][0](qt[c+1]);qt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||d),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var Jt={};function Bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Gt(t){var e,n,r,o;return{c:function(){e=q("button"),n=J("Theme"),this.h()},l:function(t){var r=H(e=M(t,"BUTTON",{class:!0}));n=K(r,"Theme"),r.forEach(I),this.h()},h:function(){z(e,"class","svelte-r9f6lc")},m:function(t,a){C(t,e,a),T(e,n),r||(o=F(e,"click",Ft),r=!0)},p:d,i:d,o:d,d:function(t){t&&I(e),r=!1,o()}}}function Ft(){document.body.className="dark"===document.body.className?"light":"dark"}var zt=function(t){s(n,Dt);var e=Bt(n);function n(t){var r;return p(this,n),It(f(r=e.call(this)),t,null,Gt,w,{}),r}return n}();function Ht(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Mt(t){var e;return{c:function(){e=J("Hello")},l:function(t){e=K(t,"Hello")},m:function(t,n){C(t,e,n)},d:function(t){t&&I(e)}}}function Kt(t){var e,n,r,o,a,c,u,s,f,l,h,p,v,d,m,g,y,b,_;return b=new zt({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c:function(){e=q("nav"),n=q("ul"),r=q("li"),o=q("a"),a=J("Home"),u=B(),s=q("li"),f=q("a"),l=J("About"),p=B(),v=q("li"),d=q("a"),m=J("Blog"),y=B(),Lt(b.$$.fragment),this.h()},l:function(t){var i=H(e=M(t,"NAV",{class:!0})),c=H(n=M(i,"UL",{class:!0})),h=H(r=M(c,"LI",{class:!0})),g=H(o=M(h,"A",{"aria-current":!0,href:!0,class:!0}));a=K(g,"Home"),g.forEach(I),h.forEach(I),u=V(c);var _=H(s=M(c,"LI",{class:!0})),$=H(f=M(_,"A",{"aria-current":!0,href:!0,class:!0}));l=K($,"About"),$.forEach(I),_.forEach(I),p=V(c);var w=H(v=M(c,"LI",{class:!0})),x=H(d=M(w,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));m=K(x,"Blog"),x.forEach(I),w.forEach(I),c.forEach(I),y=V(i),Nt(b.$$.fragment,i),i.forEach(I),this.h()},h:function(){z(o,"aria-current",c=void 0===t[0]?"page":void 0),z(o,"href","."),z(o,"class","svelte-10jimgi"),z(r,"class","svelte-10jimgi"),z(f,"aria-current",h="about"===t[0]?"page":void 0),z(f,"href","about"),z(f,"class","svelte-10jimgi"),z(s,"class","svelte-10jimgi"),z(d,"rel","prefetch"),z(d,"aria-current",g="blog"===t[0]?"page":void 0),z(d,"href","blog"),z(d,"class","svelte-10jimgi"),z(v,"class","svelte-10jimgi"),z(n,"class","svelte-10jimgi"),z(e,"class","svelte-10jimgi")},m:function(t,i){C(t,e,i),T(e,n),T(n,r),T(r,o),T(o,a),T(n,u),T(n,s),T(s,f),T(f,l),T(n,p),T(n,v),T(v,d),T(d,m),T(e,y),At(b,e,null),_=!0},p:function(t,e){var n=i(e,1)[0];(!_||1&n&&c!==(c=void 0===t[0]?"page":void 0))&&z(o,"aria-current",c),(!_||1&n&&h!==(h="about"===t[0]?"page":void 0))&&z(f,"aria-current",h),(!_||1&n&&g!==(g="blog"===t[0]?"page":void 0))&&z(d,"aria-current",g);var r={};2&n&&(r.$$scope={dirty:n,ctx:t}),b.$set(r)},i:function(t){_||(St(b.$$.fragment,t),_=!0)},o:function(t){jt(b.$$.fragment,t),_=!1},d:function(t){t&&I(e),Tt(b)}}}function Vt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var Yt=function(t){s(n,Dt);var e=Ht(n);function n(t){var r;return p(this,n),It(f(r=e.call(this)),t,Vt,Kt,w,{segment:0}),r}return n}();function Qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Wt(t){var e,n,r,o;e=new Yt({props:{segment:t[0]}});var a=t[2].default,c=j(a,t,t[1],null);return{c:function(){Lt(e.$$.fragment),n=B(),r=q("main"),c&&c.c(),this.h()},l:function(t){Nt(e.$$.fragment,t),n=V(t);var o=H(r=M(t,"MAIN",{class:!0}));c&&c.l(o),o.forEach(I),this.h()},h:function(){z(r,"class","svelte-1ei96ub")},m:function(t,a){At(e,t,a),C(t,n,a),C(t,r,a),c&&c.m(r,null),o=!0},p:function(t,n){var r=i(n,1)[0],o={};1&r&&(o.segment=t[0]),e.$set(o),c&&c.p&&2&r&&P(c,a,t,t[1],r,null,null)},i:function(t){o||(St(e.$$.fragment,t),St(c,t),o=!0)},o:function(t){jt(e.$$.fragment,t),jt(c,t),o=!1},d:function(t){Tt(e,t),t&&I(n),t&&I(r),c&&c.d(t)}}}function Xt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Zt=function(t){s(n,Dt);var e=Qt(n);function n(t){var r;return p(this,n),It(f(r=e.call(this)),t,Xt,Wt,w,{segment:0}),r}return n}();function te(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function ee(t){var e,n,r=t[1].stack+"";return{c:function(){e=q("pre"),n=J(r)},l:function(t){var o=H(e=M(t,"PRE",{}));n=K(o,r),o.forEach(I)},m:function(t,r){C(t,e,r),T(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&Y(n,r)},d:function(t){t&&I(e)}}}function ne(t){var e,n,r,o,a,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var h=t[2]&&t[1].stack&&ee(t);return{c:function(){n=B(),r=q("h1"),o=J(t[0]),a=B(),c=q("p"),u=J(l),s=B(),h&&h.c(),f=G(),this.h()},l:function(e){Q('[data-svelte="svelte-1moakz"]',document.head).forEach(I),n=V(e);var i=H(r=M(e,"H1",{class:!0}));o=K(i,t[0]),i.forEach(I),a=V(e);var p=H(c=M(e,"P",{class:!0}));u=K(p,l),p.forEach(I),s=V(e),h&&h.l(e),f=G(),this.h()},h:function(){z(r,"class","svelte-184wp6z"),z(c,"class","svelte-184wp6z")},m:function(t,e){C(t,n,e),C(t,r,e),T(r,o),C(t,a,e),C(t,c,e),T(c,u),C(t,s,e),h&&h.m(t,e),C(t,f,e)},p:function(t,n){var r=i(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&Y(o,t[0]),2&r&&l!==(l=t[1].message+"")&&Y(u,l),t[2]&&t[1].stack?h?h.p(t,r):((h=ee(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:d,o:d,d:function(t){t&&I(n),t&&I(r),t&&I(a),t&&I(c),t&&I(s),h&&h.d(t),t&&I(f)}}}function re(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var oe=function(t){s(n,Dt);var e=te(n);function n(t){var r;return p(this,n),It(f(r=e.call(this)),t,re,ne,w,{status:0,error:1}),r}return n}();function ae(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function ie(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&Lt(e.$$.fragment),n=G()},l:function(t){e&&Nt(e.$$.fragment,t),n=G()},m:function(t,o){e&&At(e,t,o),C(t,n,o),r=!0},p:function(t,r){var c=16&r?kt(o,[Ot(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){xt();var u=e;jt(u.$$.fragment,1,0,(function(){Tt(u,1)})),Et()}a?(Lt((e=new a(i())).$$.fragment),St(e.$$.fragment,1),At(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&St(e.$$.fragment,t),r=!0)},o:function(t){e&&jt(e.$$.fragment,t),r=!1},d:function(t){t&&I(n),e&&Tt(e,t)}}}function ce(t){var e,n;return e=new oe({props:{error:t[0],status:t[1]}}),{c:function(){Lt(e.$$.fragment)},l:function(t){Nt(e.$$.fragment,t)},m:function(t,r){At(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(St(e.$$.fragment,t),n=!0)},o:function(t){jt(e.$$.fragment,t),n=!1},d:function(t){Tt(e,t)}}}function ue(t){var e,n,r,o,a=[ce,ie],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=G()},l:function(t){n.l(t),r=G()},m:function(t,n){i[e].m(t,n),C(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(xt(),jt(i[u],1,1,(function(){i[u]=null})),Et(),(n=i[e])||(n=i[e]=a[e](t)).c(),St(n,1),n.m(r.parentNode,r))},i:function(t){o||(St(n),o=!0)},o:function(t){jt(n),o=!1},d:function(t){i[e].d(t),t&&I(r)}}}function se(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[ue]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=g(o,r[a]);return e=new Zt({props:o}),{c:function(){Lt(e.$$.fragment)},l:function(t){Nt(e.$$.fragment,t)},m:function(t,r){At(e,t,r),n=!0},p:function(t,n){var o=i(n,1)[0],a=12&o?kt(r,[4&o&&{segment:t[2][0]},8&o&&Ot(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(St(e.$$.fragment,t),n=!0)},o:function(t){jt(e.$$.fragment,t),n=!1},d:function(t){Tt(e,t)}}}function fe(t,e,n){var r=e.stores,o=e.error,a=e.status,i=e.segments,c=e.level0,u=e.level1,s=void 0===u?null:u,f=e.notify;return function(t){ot().$$.after_update.push(t)}(f),it(Jt,r),t.$$set=function(t){"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,a=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,s=t.level1),"notify"in t&&n(6,f=t.notify)},[o,a,i,c,s,r,f]}var le,he=function(t){s(n,Dt);var e=ae(n);function n(t){var r;return p(this,n),It(f(r=e.call(this)),t,fe,se,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),pe=[/^\/themes\/presets\/?$/,/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],ve=[{js:function(){return Promise.all([import("./index.6932a8fa.js"),__inject_styles(["client-438ad9dc.css","index-2df480c0.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.2d11298b.js"),__inject_styles(["client-438ad9dc.css","Button-6dc817fe.css","index-d4b75f8c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./ThemeContext.9f93746c.js"),__inject_styles(["client-438ad9dc.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./ThemeToggle.9850fcd2.js"),__inject_styles(["client-438ad9dc.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./Button.9b2691e4.js"),__inject_styles(["client-438ad9dc.css","Button-6dc817fe.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.13ad6345.js"),__inject_styles(["client-438ad9dc.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.eb68eba2.js"),__inject_styles(["client-438ad9dc.css","index-fb6614c0.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].f6631d0e.js"),__inject_styles(["client-438ad9dc.css","[slug]-f9500987.css"])]).then((function(t){return t[0]}))}}],de=(le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/themes\/?$/,parts:[{i:1}]},{pattern:/^\/themes\/ThemeContext\/?$/,parts:[null,{i:2}]},{pattern:/^\/themes\/ThemeToggle\/?$/,parts:[null,{i:3}]},{pattern:/^\/themes\/Button\/?$/,parts:[null,{i:4}]},{pattern:/^\/about\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:7,params:function(t){return{slug:le(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function me(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function ge(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var ye,be=1;var _e,$e,we="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},xe={};function Ee(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=i(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],c=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(c):n[o]=c})),n}function Se(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_e))return null;var e=t.pathname.slice(_e.length);if(""===e&&(e="/"),!pe.some((function(t){return t.test(e)})))for(var n=0;n<de.length;n+=1){var r=de[n],o=r.pattern.exec(e);if(o){var a=Ee(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function je(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=ge(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Se(a);if(i)ke(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),we.pushState({id:ye},"",a.href)}}}else location.hash||e.preventDefault()}}}function Re(){return{x:pageXOffset,y:pageYOffset}}function Pe(t){if(xe[ye]=Re(),t.state){var e=Se(new URL(location.href));e?ke(e,t.state.id):location.href=location.href}else(function(t){ye=t})(be=be+1),we.replaceState({id:ye},"",location.href)}function ke(t,e,n,o){return me(this,void 0,void 0,r.mark((function a(){var i,c,u,s;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=!!e)?ye=e:(c=Re(),xe[ye]=c,ye=e=++be,xe[ye]=n?c:{x:0,y:0}),r.next=4,$e(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=xe[e],o&&(s=document.getElementById(o.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),xe[ye]=u,i||s?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return r.stop()}}),a)})))}function Oe(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var Le,Ne=null;function Ae(t){return Ne&&Ne.href===t.href?Ne.promise:en(t)}function Te(t){var e=ge(t.target);e&&"prefetch"===e.rel&&function(t){var e=Se(new URL(t,Oe(document)));if(e)Ne&&t===Ne.href||(Ne={href:t,promise:en(e)}),Ne.promise}(e.href)}function Ce(t){clearTimeout(Le),Le=setTimeout((function(){Te(t)}),20)}function Ie(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Se(new URL(t,Oe(document)));return n?(we[e.replaceState?"replaceState":"pushState"]({id:ye},"",t),ke(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var De,qe,Ue,Je,Be,Ge,Fe,ze,He,Me="undefined"!=typeof __SAPPER__&&__SAPPER__,Ke=!1,Ve=[],Ye="{}",Qe={page:function(t){var e=Ut(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Ut(null),session:Ut(Me&&Me.session)};function We(t,e){var n=t.error;return Object.assign({error:n},e)}function Xe(t){return me(this,void 0,void 0,r.mark((function e(){var n,o,a,i,c,u;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return De&&Qe.preloading.set(!0),n=Ae(t),o=qe={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,o===qe){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,Ie(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Ze(u,c,We(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ze(t,e,n){return me(this,void 0,void 0,r.mark((function o(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Qe.page.set(n),Qe.preloading.set(!1),!De){r.next=6;break}De.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:Qe.page.subscribe},preloading:{subscribe:Qe.preloading.subscribe},session:Qe.session},r.next=9,Ue;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=Qe.page.notify,De=new he({target:Ge,props:e,hydrate:!0});case 13:Ve=t,Ye=JSON.stringify(n.query),Ke=!0,Be=!1;case 17:case"end":return r.stop()}}),o)})))}function tn(t,e,n,r){if(r!==Ye)return!0;var o=Ve[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function en(t){return me(this,void 0,void 0,r.mark((function e(){var n,o,a,i,c,u,s,f,l,h,p,v,d=this;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,o=t.page,a=o.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Ue||(s=function(){return{}},Ue=Me.preloaded[0]||s.call(u,{host:o.host,path:o.path,query:o.query,params:{}},Je)),l=1,e.prev=7,h=JSON.stringify(o.query),p=n.pattern.exec(o.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return me(d,void 0,void 0,r.mark((function i(){var s,f,d,m,g,y;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=a[n],tn(n,s,p,h)&&(v=!0),c.segments[l]=a[n+1],e){r.next=5;break}return r.abrupt("return",{segment:s});case 5:if(f=l++,Be||v||!Ve[n]||Ve[n].part!==e.i){r.next=8;break}return r.abrupt("return",Ve[n]);case 8:return v=!1,r.next=11,ve[e.i].js();case 11:if(d=r.sent,m=d.default,g=d.preload,!Ke&&Me.preloaded[n+1]){r.next=25;break}if(!g){r.next=21;break}return r.next=18,g.call(u,{host:o.host,path:o.path,query:o.query,params:e.params?e.params(t.match):{}},Je);case 18:r.t0=r.sent,r.next=22;break;case 21:r.t0={};case 22:y=r.t0,r.next=26;break;case 25:y=Me.preloaded[n+1];case 26:return r.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:s,match:p,part:e.i});case 27:case"end":return r.stop()}}),i)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,f=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}Qe.session.subscribe((function(t){return me(void 0,void 0,void 0,r.mark((function e(){var n,o,a,i,c,u;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Je=t,Ke){e.next=3;break}return e.abrupt("return");case 3:return Be=!0,n=Se(new URL(location.href)),o=qe={},e.next=8,en(n);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,o===qe){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,Ie(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ze(u,c,We(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),Fe={target:document.querySelector("#sapper")},ze=Fe.target,Ge=ze,He=Me.baseUrl,_e=He,$e=Xe,"scrollRestoration"in we&&(we.scrollRestoration="manual"),addEventListener("beforeunload",(function(){we.scrollRestoration="auto"})),addEventListener("load",(function(){we.scrollRestoration="manual"})),addEventListener("click",je),addEventListener("popstate",Pe),addEventListener("touchstart",Te),addEventListener("mousemove",Ce),Me.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=Me.session,a=Me.preloaded,i=Me.status,c=Me.error;Ue||(Ue=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:Ue},level1:{props:{status:i,error:c},component:oe},segments:a},s=Ee(r);Ze([],u,{host:e,path:n,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;we.replaceState({id:be},"",n);var r=Se(new URL(location.href));if(r)return ke(r,be,!0,e)}));export{B as A,q as B,Lt as C,Q as D,V as E,Nt as F,At as G,Tt as H,at as I,J,K,j as L,P as M,h as N,it as O,Y as P,ct as Q,D as R,Dt as S,r as T,s as _,c as a,l as b,p as c,f as d,U as e,M as f,H as g,I as h,It as i,z as j,C as k,T as l,vt as m,Pt as n,F as o,i as p,xt as q,jt as r,w as s,St as t,Et as u,E as v,Ut as w,S as x,d as y,m as z};

import __inject_styles from './inject_styles.fe622066.js';
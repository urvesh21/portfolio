(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2950:function(e,t,n){Promise.resolve().then(n.t.bind(n,3222,23)),Promise.resolve().then(n.bind(n,170)),Promise.resolve().then(n.bind(n,2858)),Promise.resolve().then(n.bind(n,3184)),Promise.resolve().then(n.t.bind(n,2471,23))},3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!n[e]:a.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:o}=n;return o?a.innerHTML=o.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(l(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return g},default:function(){return _}});let r=n(1024),a=n(8533),l=r._(n(4887)),o=a._(n(2265)),i=n(1330),u=n(3453),c=n(8043),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},y=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:o="",strategy:i="afterInteractive",onError:c,stylesheets:y}=e,h=n||t;if(h&&d.has(h))return;if(s.has(t)){d.add(h),s.get(t).then(r,c);return}let g=()=>{a&&a(),d.add(h)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(l?(m.innerHTML=l.__html||"",g()):o?(m.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",g()):t&&(m.src=t,s.set(t,_)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),y&&p(y),document.body.appendChild(m)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(e))}):y(e)}function g(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:h,scripts:g,getIsSsr:m,appDir:_,nonce:b}=(0,o.useContext)(i.HeadManagerContext),v=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;v.current||(a&&e&&d.has(e)&&a(),v.current=!0)},[a,t,n]);let E=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!E.current&&("afterInteractive"===u?y(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>y(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(e))})),E.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(h?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:s,...p}]),h(g)):m&&m()?d.add(t||n):m&&!m()&&y(e)),_){if(f&&f.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let _=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},170:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(8475),l=n.n(a);t.default=e=>{let{GA_TRACKING_ID:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),strategy:"afterInteractive"}),(0,r.jsx)(l(),{id:"google-analytics",strategy:"afterInteractive",children:"\n        window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '".concat(t,"');\n        ")})]})}},2471:function(){},3184:function(e,t,n){"use strict";n.r(t),t.default={src:".//_next/static/media/github-mark-white.fd5c0afd.svg",height:96,width:98,blurWidth:0,blurHeight:0}},2858:function(e,t,n){"use strict";n.r(t),t.default={src:".//_next/static/media/linkedIN.4a98e29e.svg",height:50,width:50,blurWidth:0,blurHeight:0}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:s,props:l,_owner:i.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},8475:function(e,t,n){e.exports=n(3015)}},function(e){e.O(0,[222,971,596,744],function(){return e(e.s=2950)}),_N_E=e.O()}]);
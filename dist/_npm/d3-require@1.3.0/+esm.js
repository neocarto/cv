/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-require@1.3.0/src/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const e=new Map,n=[],t=n.map,r=n.some,o=n.hasOwnProperty,s=/^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,i=/^\d+\.\d+\.\d+(-[\w-.+]+)?$/,l=/(?:\.[^/]*|\/)$/;class a extends Error{constructor(e){super(e)}}function c(e){const n=s.exec(e);return n&&{name:n[1],version:n[2],path:n[3]}}function u(n="https://cdn.jsdelivr.net/npm/",t=["unpkg","jsdelivr","browser","main"]){if(!/\/$/.test(n))throw new Error("origin lacks trailing slash");function r(t){const r=`${n}${t.name}${t.version?`@${t.version}`:""}/package.json`;let o=e.get(r);return o||e.set(r,o=fetch(r).then((n=>{if(!n.ok)throw new a("unable to load package.json");return n.redirected&&!e.has(n.url)&&e.set(n.url,o),n.json()}))),o}return async function(e,o){if(e.startsWith(n)&&(e=e.substring(n.length)),/^(\w+:)|\/\//i.test(e))return e;if(/^[.]{0,2}\//i.test(e))return new URL(e,null==o?location:o).href;if(!e.length||/^[\s._]/.test(e)||/\s$/.test(e))throw new a("illegal name");const s=c(e);if(!s)return`${n}${e}`;if(!s.version&&null!=o&&o.startsWith(n)){const e=await r(c(o.substring(n.length)));s.version=e.dependencies&&e.dependencies[s.name]||e.peerDependencies&&e.peerDependencies[s.name]}if(s.path&&!l.test(s.path)&&(s.path+=".js"),s.path&&s.version&&i.test(s.version))return`${n}${s.name}@${s.version}/${s.path}`;const u=await r(s);return`${n}${u.name}@${u.version}/${s.path||function(e){for(const n of t){let t=e[n];if("string"==typeof t)return t.startsWith("./")&&(t=t.slice(2)),l.test(t)?t:`${t}.js`}}(u)||"index.js"}`}}a.prototype.name=a.name;var p=f(u());function f(e){const r=new Map,o=i(null);function s(e){if("string"!=typeof e)return e;let t=r.get(e);return t||r.set(e,t=new Promise(((t,r)=>{const o=document.createElement("script");o.onload=()=>{try{t(n.pop()(i(e)))}catch(e){r(new a("invalid module"))}o.remove()},o.onerror=()=>{r(new a("unable to load module")),o.remove()},o.async=!0,o.src=e,window.define=g,document.head.appendChild(o)}))),t}function i(n){return t=>Promise.resolve(e(t,n)).then(s)}function l(e){return arguments.length>1?Promise.all(t.call(arguments,o)).then(d):o(e)}return l.alias=function(n){return f(((t,r)=>t in n&&(r=null,"string"!=typeof(t=n[t]))?t:e(t,r)))},l.resolve=e,l}function d(e){const n={};for(const t of e)for(const e in t)o.call(t,e)&&(null==t[e]?Object.defineProperty(n,e,{get:h(t,e)}):n[e]=t[e]);return n}function h(e,n){return()=>e[n]}function m(e){return"exports"===(e+="")||"module"===e}function g(e,o,s){const i=arguments.length;i<2?(s=e,o=[]):i<3&&(s=o,o="string"==typeof e?[]:e),n.push(r.call(o,m)?e=>{const n={},r={exports:n};return Promise.all(t.call(o,(t=>"exports"===(t+="")?n:"module"===t?r:e(t)))).then((e=>(s.apply(null,e),r.exports)))}:e=>Promise.all(t.call(o,e)).then((e=>"function"==typeof s?s.apply(null,e):s)))}g.amd={};export{a as RequireError,p as require,f as requireFrom,u as resolveFrom};export default null;
import{B as d,C as S,D as x,s as T,E as U}from"./index-d3784472.js";const f=[];function L(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=d){let n;const s=new Set;function r(a){if(T(e,a)&&(e=a,n)){const u=!f.length;for(const i of s)i[1](),f.push(i,e);if(u){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function o(a){r(a(e))}function l(a,u=d){const i=[a,u];return s.add(i),s.size===1&&(n=t(r)||d),a(e),()=>{s.delete(i),s.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:l}}function $(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return L(n,l=>{let a=!1;const u=[];let i=0,_=d;const g=()=>{if(i)return;_();const c=t(s?u[0]:u,l);o?l(c):_=U(c)?c:d},k=r.map((c,h)=>S(c,I=>{u[h]=I,i&=~(1<<h),a&&g()},()=>{i|=1<<h}));return a=!0,g(),function(){x(k),_()}})}let w="",m="",A="";function j(e){m=e.base,w=e.assets||m}function q(e){A=e}const C="sveltekit:scroll",D="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function P(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function Y(){return{x:pageXOffset,y:pageYOffset}}function b(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...v,"":v.hover};function R(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function z(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function B(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||V(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:s}}function G(e){let t=null,n=null,s=null,r=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=b(o,"preload-code")),s===null&&(s=b(o,"preload-data")),t===null&&(t=b(o,"noscroll")),r===null&&(r=b(o,"reload")),o=R(o);return{preload_code:y[n??"off"],preload_data:y[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function E(e){const t=p(e);let n=!0;function s(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function o(l){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&l(a=u)})}return{notify:s,set:r,subscribe:o}}function O(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(await r.json()).version!==A;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:s}}function V(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function K(e){e.client}const X={url:E({}),page:E({}),navigating:p(null),updated:O()};export{D as I,v as P,C as S,B as a,G as b,Y as c,j as d,K as e,z as f,P as g,q as h,V as i,$ as j,X as s,p as w};
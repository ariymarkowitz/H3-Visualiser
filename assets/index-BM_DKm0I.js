(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const lu=!1;var Fc=Array.isArray,Ax=Array.prototype.indexOf,bh=Array.from,Cx=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Rx=Object.getOwnPropertyDescriptors,Pp=Object.prototype,Nx=Array.prototype,Eh=Object.getPrototypeOf,Af=Object.isExtensible;function Px(i){for(var e=0;e<i.length;e++)i[e]()}function Lp(){var i,e,t=new Promise((n,s)=>{i=n,e=s});return{promise:t,resolve:i,reject:e}}const sn=2,wh=4,Oc=8,ns=16,is=32,sr=64,zc=128,pi=512,ln=1024,Cn=2048,ss=4096,zn=8192,Zi=16384,Ah=32768,Wa=65536,Cf=1<<17,Dp=1<<18,aa=1<<19,Ip=1<<20,Qs=32768,uu=1<<21,Ch=1<<22,Ms=1<<23,Zs=Symbol("$state"),Lx=Symbol("legacy props"),Dx=Symbol(""),Or=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ix(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ux(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Fx(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ox(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zx(i){throw new Error("https://svelte.dev/e/effect_orphan")}function Bx(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vx(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function kx(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gx(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Hx(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Wx(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Up=1,Fp=2,Op=4,Xx=8,qx=16,Yx=1,$x=4,Zx=8,jx=16,Kx=2,tn=Symbol(),Jx="http://www.w3.org/1999/xhtml",Qx="@attach";function eg(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function tg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zp(i){return i===this.v}function ng(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Bp(i){return!ng(i,this.v)}let ig=!1;const sg=[];function rg(i,e=!1,t=!1){return oc(i,new Map,"",sg,null,t)}function oc(i,e,t,n,s=null,r=!1){if(typeof i=="object"&&i!==null){var a=e.get(i);if(a!==void 0)return a;if(i instanceof Map)return new Map(i);if(i instanceof Set)return new Set(i);if(Fc(i)){var o=Array(i.length);e.set(i,o),s!==null&&e.set(s,o);for(var l=0;l<i.length;l+=1){var c=i[l];l in i&&(o[l]=oc(c,e,t,n,null,r))}return o}if(Eh(i)===Pp){o={},e.set(i,o),s!==null&&e.set(s,o);for(var u in i)o[u]=oc(i[u],e,t,n,null,r);return o}if(i instanceof Date)return structuredClone(i);if(typeof i.toJSON=="function"&&!r)return oc(i.toJSON(),e,t,n,i)}if(i instanceof EventTarget)return i;try{return structuredClone(i)}catch{return i}}let Vn=null;function Yr(i){Vn=i}function rr(i,e=!1,t){Vn={p:Vn,i:!1,c:null,e:null,s:i,x:null,l:null}}function ar(i){var e=Vn,t=e.e;if(t!==null){e.e=null;for(var n of t)rm(n)}return i!==void 0&&(e.x=i),e.i=!0,Vn=e.p,i??{}}function Vp(){return!0}let qs=[];function kp(){var i=qs;qs=[],Px(i)}function or(i){if(qs.length===0&&!Ia){var e=qs;queueMicrotask(()=>{e===qs&&kp()})}qs.push(i)}function ag(){for(;qs.length>0;)kp()}function Gp(i){var e=gt;if(e===null)return ct.f|=Ms,i;if((e.f&Ah)===0){if((e.f&zc)===0)throw i;e.b.error(i)}else $r(i,e)}function $r(i,e){for(;e!==null;){if((e.f&zc)!==0)try{e.b.error(i);return}catch(t){i=t}e=e.parent}throw i}const fo=new Set;let Tt=null,Da=null,On=null,Xn=[],Bc=null,hu=!1,Ia=!1;class bi{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#h=0;#r=0;#c=null;#a=[];#s=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#r>0}process(e){Xn=[],Da=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const n of e)this.#n(n,t);this.is_fork||this.#l(),this.is_deferred()?(this.#i(t.effects),this.#i(t.render_effects),this.#i(t.block_effects)):(Da=this,Tt=null,Rf(t.render_effects),Rf(t.effects),Da=null,this.#c?.resolve()),On=null}#n(e,t){e.f^=ln;for(var n=e.first;n!==null;){var s=n.f,r=(s&(is|sr))!==0,a=r&&(s&ln)!==0,o=a||(s&zn)!==0||this.skipped_effects.has(n);if((n.f&zc)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!o&&n.fn!==null){r?n.f^=ln:(s&wh)!==0?t.effects.push(n):to(n)&&((n.f&ns)!==0&&t.block_effects.push(n),Ya(n));var l=n.first;if(l!==null){n=l;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)c===t.effect&&(this.#i(t.effects),this.#i(t.render_effects),this.#i(t.block_effects),t=t.parent),n=c.next,c=c.parent}}#i(e){for(const t of e)((t.f&Cn)!==0?this.#a:this.#s).push(t),this.#o(t.deps),un(t,ln)}#o(e){if(e!==null)for(const t of e)(t.f&sn)===0||(t.f&Qs)===0||(t.f^=Qs,this.#o(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),(e.f&Ms)===0&&(this.current.set(e,e.v),On?.set(e,e.v))}activate(){Tt=this,this.apply()}deactivate(){Tt===this&&(Tt=null,On=null)}flush(){if(this.activate(),Xn.length>0){if(Hp(),Tt!==null&&Tt!==this)return}else this.#h===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#l(){if(this.#r===0){for(const e of this.#e)e();this.#e.clear()}this.#h===0&&this.#u()}#u(){if(fo.size>1){this.previous.clear();var e=On,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of fo){if(r===this){t=!1;continue}const a=[];for(const[l,c]of this.current){if(r.current.has(l))if(t&&c!==r.current.get(l))r.current.set(l,c);else continue;a.push(l)}if(a.length===0)continue;const o=[...r.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var s=Xn;Xn=[];const l=new Set,c=new Map;for(const u of a)Wp(u,o,l,c);if(Xn.length>0){Tt=r,r.apply();for(const u of Xn)r.#n(u,n);r.deactivate()}Xn=s}}Tt=null,On=e}this.committed=!0,fo.delete(this)}increment(e){this.#h+=1,e&&(this.#r+=1)}decrement(e){this.#h-=1,e&&(this.#r-=1),this.revive()}revive(){for(const e of this.#a)un(e,Cn),er(e);for(const e of this.#s)un(e,ss),er(e);this.#a=[],this.#s=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#c??=Lp()).promise}static ensure(){if(Tt===null){const e=Tt=new bi;fo.add(Tt),Ia||bi.enqueue(()=>{Tt===e&&e.flush()})}return Tt}static enqueue(e){or(e)}apply(){}}function og(i){var e=Ia;Ia=!0;try{for(var t;;){if(ag(),Xn.length===0&&(Tt?.flush(),Xn.length===0))return Bc=null,t;Hp()}}finally{Ia=e}}function Hp(){var i=bs;hu=!0;var e=null;try{var t=0;for(xc(!0);Xn.length>0;){var n=bi.ensure();if(t++>1e3){var s,r;cg()}n.process(Xn),Ts.clear()}}finally{hu=!1,xc(i),Bc=null}}function cg(){try{Bx()}catch(i){$r(i,Bc)}}let Wi=null;function Rf(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(Zi|zn))===0&&to(n)&&(Wi=new Set,Ya(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?cm(n):n.fn=null),Wi?.size>0)){Ts.clear();for(const s of Wi){if((s.f&(Zi|zn))!==0)continue;const r=[s];let a=s.parent;for(;a!==null;)Wi.has(a)&&(Wi.delete(a),r.push(a)),a=a.parent;for(let o=r.length-1;o>=0;o--){const l=r[o];(l.f&(Zi|zn))===0&&Ya(l)}}Wi.clear()}}Wi=null}}function Wp(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const s of i.reactions){const r=s.f;(r&sn)!==0?Wp(s,e,t,n):(r&(Ch|ns))!==0&&(r&Cn)===0&&Xp(s,e,n)&&(un(s,Cn),er(s))}}function Xp(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const s of i.deps){if(e.includes(s))return!0;if((s.f&sn)!==0&&Xp(s,e,t))return t.set(s,!0),!0}return t.set(i,!1),!1}function er(i){for(var e=Bc=i;e.parent!==null;){e=e.parent;var t=e.f;if(hu&&e===gt&&(t&ns)!==0&&(t&Dp)===0)return;if((t&(sr|is))!==0){if((t&ln)===0)return;e.f^=ln}}Xn.push(e)}function qp(i){let e=0,t=tr(0),n;return()=>{Hc()&&(J(t),Xc(()=>(e===0&&(n=Rs(()=>i(()=>Ua(t)))),e+=1,()=>{or(()=>{e-=1,e===0&&(n?.(),n=void 0,Ua(t))})})))}}var lg=Wa|aa|zc;function ug(i,e,t){new hg(i,e,t)}class hg{parent;#e=!1;#t;#h=null;#r;#c;#a;#s=null;#n=null;#i=null;#o=null;#l=null;#u=0;#f=0;#p=!1;#d=null;#v=qp(()=>(this.#d=tr(this.#u),()=>{this.#d=null}));constructor(e,t,n){this.#t=e,this.#r=t,this.#c=n,this.parent=gt.b,this.#e=!!this.#r.pending,this.#a=qc(()=>{gt.b=this;{var s=this.#g();try{this.#s=qn(()=>n(s))}catch(r){this.error(r)}this.#f>0?this.#x():this.#e=!1}return()=>{this.#l?.remove()}},lg)}#y(){try{this.#s=qn(()=>this.#c(this.#t))}catch(e){this.error(e)}this.#e=!1}#S(){const e=this.#r.pending;e&&(this.#n=qn(()=>e(this.#t)),bi.enqueue(()=>{var t=this.#g();this.#s=this.#m(()=>(bi.ensure(),qn(()=>this.#c(t)))),this.#f>0?this.#x():(Fa(this.#n,()=>{this.#n=null}),this.#e=!1)}))}#g(){var e=this.#t;return this.#e&&(this.#l=Xa(),this.#t.before(this.#l),e=this.#l),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#r.pending}#m(e){var t=gt,n=ct,s=Vn;Ri(this.#a),Mn(this.#a),Yr(this.#a.ctx);try{return e()}catch(r){return Gp(r),null}finally{Ri(t),Mn(n),Yr(s)}}#x(){const e=this.#r.pending;this.#s!==null&&(this.#o=document.createDocumentFragment(),this.#o.append(this.#l),Rg(this.#s,this.#o)),this.#n===null&&(this.#n=qn(()=>e(this.#t)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#f+=e,this.#f===0&&(this.#e=!1,this.#n&&Fa(this.#n,()=>{this.#n=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e){this.#_(e),this.#u+=e,this.#d&&Zr(this.#d,this.#u)}get_effect_pending(){return this.#v(),J(this.#d)}error(e){var t=this.#r.onerror;let n=this.#r.failed;if(this.#p||!t&&!n)throw e;this.#s&&(bn(this.#s),this.#s=null),this.#n&&(bn(this.#n),this.#n=null),this.#i&&(bn(this.#i),this.#i=null);var s=!1,r=!1;const a=()=>{if(s){tg();return}s=!0,r&&Wx(),bi.ensure(),this.#u=0,this.#i!==null&&Fa(this.#i,()=>{this.#i=null}),this.#e=this.has_pending_snippet(),this.#s=this.#m(()=>(this.#p=!1,qn(()=>this.#c(this.#t)))),this.#f>0?this.#x():this.#e=!1};var o=ct;try{Mn(null),r=!0,t?.(e,a),r=!1}catch(l){$r(l,this.#a&&this.#a.parent)}finally{Mn(o)}n&&or(()=>{this.#i=this.#m(()=>{bi.ensure(),this.#p=!0;try{return qn(()=>{n(this.#t,()=>e,()=>a)})}catch(l){return $r(l,this.#a.parent),null}finally{this.#p=!1}})})}}function Yp(i,e,t,n){const s=Vc;if(t.length===0&&i.length===0){n(e.map(s));return}var r=Tt,a=gt,o=fg();function l(){Promise.all(t.map(c=>dg(c))).then(c=>{o();try{n([...e.map(s),...c])}catch(u){(a.f&Zi)===0&&$r(u,a)}r?.deactivate(),mc()}).catch(c=>{$r(c,a)})}i.length>0?Promise.all(i).then(()=>{o();try{return l()}finally{r?.deactivate(),mc()}}):l()}function fg(){var i=gt,e=ct,t=Vn,n=Tt;return function(r=!0){Ri(i),Mn(e),Yr(t),r&&n?.activate()}}function mc(){Ri(null),Mn(null),Yr(null)}function Vc(i){var e=sn|Cn,t=ct!==null&&(ct.f&sn)!==0?ct:null;return gt!==null&&(gt.f|=aa),{ctx:Vn,deps:null,effects:null,equals:zp,f:e,fn:i,reactions:null,rv:0,v:tn,wv:0,parent:t??gt,ac:null}}function dg(i,e){let t=gt;t===null&&Ux();var n=t.b,s=void 0,r=tr(tn),a=!ct,o=new Map;return wg(()=>{var l=Lp();s=l.promise;try{Promise.resolve(i()).then(l.resolve,l.reject).then(()=>{c===Tt&&c.committed&&c.deactivate(),mc()})}catch(f){l.reject(f),mc()}var c=Tt;if(a){var u=!n.is_pending();n.update_pending_count(1),c.increment(u),o.get(c)?.reject(Or),o.delete(c),o.set(c,l)}const h=(f,d=void 0)=>{if(c.activate(),d)d!==Or&&(r.f|=Ms,Zr(r,d));else{(r.f&Ms)!==0&&(r.f^=Ms),Zr(r,f);for(const[m,g]of o){if(o.delete(m),m===c)break;g.reject(Or)}}a&&(n.update_pending_count(-1),c.decrement(u))};l.promise.then(h,f=>h(null,f||"unknown"))}),sm(()=>{for(const l of o.values())l.reject(Or)}),new Promise(l=>{function c(u){function h(){u===s?l(r):c(s)}u.then(h,h)}c(s)})}function gs(i){const e=Vc(i);return fm(e),e}function $p(i){const e=Vc(i);return e.equals=Bp,e}function Zp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)bn(e[t])}}function pg(i){for(var e=i.parent;e!==null;){if((e.f&sn)===0)return(e.f&Zi)===0?e:null;e=e.parent}return null}function Rh(i){var e,t=gt;Ri(pg(i));try{i.f&=~Qs,Zp(i),e=xm(i)}finally{Ri(t)}return e}function jp(i){var e=Rh(i);if(i.equals(e)||(i.v=e,i.wv=pm()),!cr)if(On!==null)Hc()&&On.set(i,i.v);else{var t=(i.f&pi)===0?ss:ln;un(i,t)}}let fu=new Set;const Ts=new Map;let Kp=!1;function tr(i,e){var t={f:0,v:i,reactions:null,equals:zp,rv:0,wv:0};return t}function ft(i,e){const t=tr(i);return fm(t),t}function mg(i,e=!1,t=!0){const n=tr(i);return e||(n.equals=Bp),n}function Fe(i,e,t=!1){ct!==null&&(!Ei||(ct.f&Cf)!==0)&&Vp()&&(ct.f&(sn|ns|Ch|Cf))!==0&&!ji?.includes(i)&&Hx();let n=t?jt(e):e;return Zr(i,n)}function Zr(i,e){if(!i.equals(e)){var t=i.v;cr?Ts.set(i,e):Ts.set(i,t),i.v=e;var n=bi.ensure();n.capture(i,t),(i.f&sn)!==0&&((i.f&Cn)!==0&&Rh(i),un(i,(i.f&pi)!==0?ln:ss)),i.wv=pm(),Jp(i,Cn),gt!==null&&(gt.f&ln)!==0&&(gt.f&(is|sr))===0&&(Wn===null?Ng([i]):Wn.push(i)),!n.is_fork&&fu.size>0&&!Kp&&xg()}return e}function xg(){Kp=!1;var i=bs;xc(!0);const e=Array.from(fu);try{for(const t of e)(t.f&ln)!==0&&un(t,ss),to(t)&&Ya(t)}finally{xc(i)}fu.clear()}function Ua(i){Fe(i,i.v+1)}function Jp(i,e){var t=i.reactions;if(t!==null)for(var n=t.length,s=0;s<n;s++){var r=t[s],a=r.f,o=(a&Cn)===0;if(o&&un(r,e),(a&sn)!==0){var l=r;On?.delete(l),(a&Qs)===0&&(a&pi&&(r.f|=Qs),Jp(l,ss))}else o&&((a&ns)!==0&&Wi!==null&&Wi.add(r),er(r))}}function jt(i){if(typeof i!="object"||i===null||Zs in i)return i;const e=Eh(i);if(e!==Pp&&e!==Nx)return i;var t=new Map,n=Fc(i),s=ft(0),r=js,a=o=>{if(js===r)return o();var l=ct,c=js;Mn(null),If(r);var u=o();return Mn(l),If(c),u};return n&&t.set("length",ft(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&kx();var u=t.get(l);return u===void 0?u=a(()=>{var h=ft(c.value);return t.set(l,h),h}):Fe(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>ft(tn));t.set(l,u),Ua(s)}}else Fe(c,tn),Ua(s);return!0},get(o,l,c){if(l===Zs)return i;var u=t.get(l),h=l in o;if(u===void 0&&(!h||Br(o,l)?.writable)&&(u=a(()=>{var d=jt(h?o[l]:tn),m=ft(d);return m}),t.set(l,u)),u!==void 0){var f=J(u);return f===tn?void 0:f}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=J(u))}else if(c===void 0){var h=t.get(l),f=h?.v;if(h!==void 0&&f!==tn)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(o,l){if(l===Zs)return!0;var c=t.get(l),u=c!==void 0&&c.v!==tn||Reflect.has(o,l);if(c!==void 0||gt!==null&&(!u||Br(o,l)?.writable)){c===void 0&&(c=a(()=>{var f=u?jt(o[l]):tn,d=ft(f);return d}),t.set(l,c));var h=J(c);if(h===tn)return!1}return u},set(o,l,c,u){var h=t.get(l),f=l in o;if(n&&l==="length")for(var d=c;d<h.v;d+=1){var m=t.get(d+"");m!==void 0?Fe(m,tn):d in o&&(m=a(()=>ft(tn)),t.set(d+"",m))}if(h===void 0)(!f||Br(o,l)?.writable)&&(h=a(()=>ft(void 0)),Fe(h,jt(c)),t.set(l,h));else{f=h.v!==tn;var g=a(()=>jt(c));Fe(h,g)}var x=Reflect.getOwnPropertyDescriptor(o,l);if(x?.set&&x.set.call(u,c),!f){if(n&&typeof l=="string"){var p=t.get("length"),y=Number(l);Number.isInteger(y)&&y>=p.v&&Fe(p,y+1)}Ua(s)}return!0},ownKeys(o){J(s);var l=Reflect.ownKeys(o).filter(h=>{var f=t.get(h);return f===void 0||f.v!==tn});for(var[c,u]of t)u.v!==tn&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Gx()}})}function Nf(i){try{if(i!==null&&typeof i=="object"&&Zs in i)return i[Zs]}catch{}return i}function gg(i,e){return Object.is(Nf(i),Nf(e))}var Pf,Qp,em,tm;function _g(){if(Pf===void 0){Pf=window,Qp=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;em=Br(e,"firstChild").get,tm=Br(e,"nextSibling").get,Af(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),Af(t)&&(t.__t=void 0)}}function Xa(i=""){return document.createTextNode(i)}function nm(i){return em.call(i)}function kc(i){return tm.call(i)}function Vt(i,e){return nm(i)}function xn(i,e=1,t=!1){let n=i;for(;e--;)n=kc(n);return n}function vg(i){i.textContent=""}function yg(){return!1}function Sg(i,e){if(e){const t=document.body;i.autofocus=!0,or(()=>{document.activeElement===t&&i.focus()})}}let Lf=!1;function Mg(){Lf||(Lf=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e.__on_r?.()})},{capture:!0}))}function Gc(i){var e=ct,t=gt;Mn(null),Ri(null);try{return i()}finally{Mn(e),Ri(t)}}function Nh(i,e,t,n=t){i.addEventListener(e,()=>Gc(t));const s=i.__on_r;s?i.__on_r=()=>{s(),n(!0)}:i.__on_r=()=>n(!0),Mg()}function im(i){gt===null&&(ct===null&&zx(),Ox()),cr&&Fx()}function Tg(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Li(i,e,t){var n=gt;n!==null&&(n.f&zn)!==0&&(i|=zn);var s={ctx:Vn,deps:null,nodes_start:null,nodes_end:null,f:i|Cn|pi,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Ya(s),s.f|=Ah}catch(o){throw bn(s),o}else e!==null&&er(s);var r=s;if(t&&r.deps===null&&r.teardown===null&&r.nodes_start===null&&r.first===r.last&&(r.f&aa)===0&&(r=r.first,(i&ns)!==0&&(i&Wa)!==0&&r!==null&&(r.f|=Wa)),r!==null&&(r.parent=n,n!==null&&Tg(r,n),ct!==null&&(ct.f&sn)!==0&&(i&sr)===0)){var a=ct;(a.effects??=[]).push(r)}return s}function Hc(){return ct!==null&&!Ei}function sm(i){const e=Li(Oc,null,!1);return un(e,ln),e.teardown=i,e}function Ft(i){im();var e=gt.f,t=!ct&&(e&is)!==0&&(e&Ah)===0;if(t){var n=Vn;(n.e??=[]).push(i)}else return rm(i)}function rm(i){return Li(wh|Ip,i,!1)}function bg(i){return im(),Li(Oc|Ip,i,!0)}function Eg(i){bi.ensure();const e=Li(sr|aa,i,!0);return(t={})=>new Promise(n=>{t.outro?Fa(e,()=>{bn(e),n(void 0)}):(bn(e),n(void 0))})}function Wc(i){return Li(wh,i,!1)}function wg(i){return Li(Ch|aa,i,!0)}function Xc(i,e=0){return Li(Oc|e,i,!0)}function du(i,e=[],t=[],n=[]){Yp(n,e,t,s=>{Li(Oc,()=>i(...s.map(J)),!0)})}function qc(i,e=0){var t=Li(ns|e,i,!0);return t}function qn(i){return Li(is|aa,i,!0)}function am(i){var e=i.teardown;if(e!==null){const t=cr,n=ct;Df(!0),Mn(null);try{e.call(null)}finally{Df(t),Mn(n)}}}function om(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const s=t.ac;s!==null&&Gc(()=>{s.abort(Or)});var n=t.next;(t.f&sr)!==0?t.parent=null:bn(t,e),t=n}}function Ag(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&is)===0&&bn(e),e=t}}function bn(i,e=!0){var t=!1;(e||(i.f&Dp)!==0)&&i.nodes_start!==null&&i.nodes_end!==null&&(Cg(i.nodes_start,i.nodes_end),t=!0),om(i,e&&!t),gc(i,0),un(i,Zi);var n=i.transitions;if(n!==null)for(const r of n)r.stop();am(i);var s=i.parent;s!==null&&s.first!==null&&cm(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=i.ac=null}function Cg(i,e){for(;i!==null;){var t=i===e?null:kc(i);i.remove(),i=t}}function cm(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Fa(i,e,t=!0){var n=[];Ph(i,n,!0),lm(n,()=>{t&&bn(i),e&&e()})}function lm(i,e){var t=i.length;if(t>0){var n=()=>--t||e();for(var s of i)s.out(n)}else e()}function Ph(i,e,t){if((i.f&zn)===0){if(i.f^=zn,i.transitions!==null)for(const a of i.transitions)(a.is_global||t)&&e.push(a);for(var n=i.first;n!==null;){var s=n.next,r=(n.f&Wa)!==0||(n.f&is)!==0&&(i.f&ns)!==0;Ph(n,e,r?t:!1),n=s}}}function um(i){hm(i,!0)}function hm(i,e){if((i.f&zn)!==0){i.f^=zn,(i.f&ln)===0&&(un(i,Cn),er(i));for(var t=i.first;t!==null;){var n=t.next,s=(t.f&Wa)!==0||(t.f&is)!==0;hm(t,s?e:!1),t=n}if(i.transitions!==null)for(const r of i.transitions)(r.is_global||e)&&r.in()}}function Rg(i,e){for(var t=i.nodes_start,n=i.nodes_end;t!==null;){var s=t===n?null:kc(t);e.append(t),t=s}}let bs=!1;function xc(i){bs=i}let cr=!1;function Df(i){cr=i}let ct=null,Ei=!1;function Mn(i){ct=i}let gt=null;function Ri(i){gt=i}let ji=null;function fm(i){ct!==null&&(ji===null?ji=[i]:ji.push(i))}let gn=null,Un=0,Wn=null;function Ng(i){Wn=i}let dm=1,qa=0,js=qa;function If(i){js=i}function pm(){return++dm}function to(i){var e=i.f;if((e&Cn)!==0)return!0;if(e&sn&&(i.f&=~Qs),(e&ss)!==0){var t=i.deps;if(t!==null)for(var n=t.length,s=0;s<n;s++){var r=t[s];if(to(r)&&jp(r),r.wv>i.wv)return!0}(e&pi)!==0&&On===null&&un(i,ln)}return!1}function mm(i,e,t=!0){var n=i.reactions;if(n!==null&&!ji?.includes(i))for(var s=0;s<n.length;s++){var r=n[s];(r.f&sn)!==0?mm(r,e,!1):e===r&&(t?un(r,Cn):(r.f&ln)!==0&&un(r,ss),er(r))}}function xm(i){var e=gn,t=Un,n=Wn,s=ct,r=ji,a=Vn,o=Ei,l=js,c=i.f;gn=null,Un=0,Wn=null,ct=(c&(is|sr))===0?i:null,ji=null,Yr(i.ctx),Ei=!1,js=++qa,i.ac!==null&&(Gc(()=>{i.ac.abort(Or)}),i.ac=null);try{i.f|=uu;var u=i.fn,h=u(),f=i.deps;if(gn!==null){var d;if(gc(i,Un),f!==null&&Un>0)for(f.length=Un+gn.length,d=0;d<gn.length;d++)f[Un+d]=gn[d];else i.deps=f=gn;if(bs&&Hc()&&(i.f&pi)!==0)for(d=Un;d<f.length;d++)(f[d].reactions??=[]).push(i)}else f!==null&&Un<f.length&&(gc(i,Un),f.length=Un);if(Vp()&&Wn!==null&&!Ei&&f!==null&&(i.f&(sn|ss|Cn))===0)for(d=0;d<Wn.length;d++)mm(Wn[d],i);return s!==null&&s!==i&&(qa++,Wn!==null&&(n===null?n=Wn:n.push(...Wn))),(i.f&Ms)!==0&&(i.f^=Ms),h}catch(m){return Gp(m)}finally{i.f^=uu,gn=e,Un=t,Wn=n,ct=s,ji=r,Yr(a),Ei=o,js=l}}function Pg(i,e){let t=e.reactions;if(t!==null){var n=Ax.call(t,i);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}t===null&&(e.f&sn)!==0&&(gn===null||!gn.includes(e))&&(un(e,ss),(e.f&pi)!==0&&(e.f^=pi,e.f&=~Qs),Zp(e),gc(e,0))}function gc(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Pg(i,t[n])}function Ya(i){var e=i.f;if((e&Zi)===0){un(i,ln);var t=gt,n=bs;gt=i,bs=!0;try{(e&ns)!==0?Ag(i):om(i),am(i);var s=xm(i);i.teardown=typeof s=="function"?s:null,i.wv=dm;var r;lu&&ig&&(i.f&Cn)!==0&&i.deps}finally{bs=n,gt=t}}}async function Lg(){await Promise.resolve(),og()}function J(i){var e=i.f,t=(e&sn)!==0;if(ct!==null&&!Ei){var n=gt!==null&&(gt.f&Zi)!==0;if(!n&&!ji?.includes(i)){var s=ct.deps;if((ct.f&uu)!==0)i.rv<qa&&(i.rv=qa,gn===null&&s!==null&&s[Un]===i?Un++:gn===null?gn=[i]:gn.includes(i)||gn.push(i));else{(ct.deps??=[]).push(i);var r=i.reactions;r===null?i.reactions=[ct]:r.includes(ct)||r.push(ct)}}}if(cr){if(Ts.has(i))return Ts.get(i);if(t){var a=i,o=a.v;return((a.f&ln)===0&&a.reactions!==null||_m(a))&&(o=Rh(a)),Ts.set(a,o),o}}else if(t){if(a=i,On?.has(a))return On.get(a);to(a)&&jp(a),bs&&Hc()&&(a.f&pi)===0&&gm(a)}else if(On?.has(i))return On.get(i);if((i.f&Ms)!==0)throw i.v;return i.v}function gm(i){if(i.deps!==null){i.f^=pi;for(const e of i.deps)(e.reactions??=[]).push(i),(e.f&sn)!==0&&(e.f&pi)===0&&gm(e)}}function _m(i){if(i.v===tn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ts.has(e)||(e.f&sn)!==0&&_m(e))return!0;return!1}function Rs(i){var e=Ei;try{return Ei=!0,i()}finally{Ei=e}}const Dg=-7169;function un(i,e){i.f=i.f&Dg|e}function Ig(i){return i.endsWith("capture")&&i!=="gotpointercapture"&&i!=="lostpointercapture"}const Ug=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Fg(i){return Ug.includes(i)}const Og={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zg(i){return i=i.toLowerCase(),Og[i]??i}const Bg=["touchstart","touchmove"];function Vg(i){return Bg.includes(i)}const vm=new Set,pu=new Set;function ym(i,e,t,n={}){function s(r){if(n.capture||Pa.call(e,r),!r.cancelBubble)return Gc(()=>t?.call(this,r))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?or(()=>{e.addEventListener(i,s,n)}):e.addEventListener(i,s,n),s}function _c(i,e,t,n={}){var s=ym(e,i,t,n);return()=>{i.removeEventListener(e,s,n)}}function Yc(i){for(var e=0;e<i.length;e++)vm.add(i[e]);for(var t of pu)t(i)}let Uf=null;function Pa(i){var e=this,t=e.ownerDocument,n=i.type,s=i.composedPath?.()||[],r=s[0]||i.target;Uf=i;var a=0,o=Uf===i&&i.__root;if(o){var l=s.indexOf(o);if(l!==-1&&(e===document||e===window)){i.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(r=s[a]||i.target,r!==e){Cx(i,"currentTarget",{configurable:!0,get(){return r||t}});var u=ct,h=gt;Mn(null),Ri(null);try{for(var f,d=[];r!==null;){var m=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+n];g!=null&&(!r.disabled||i.target===r)&&g.call(r,i)}catch(x){f?d.push(x):f=x}if(i.cancelBubble||m===e||m===null)break;r=m}if(f){for(let x of d)queueMicrotask(()=>{throw x});throw f}}finally{i.__root=e,delete i.currentTarget,Mn(u),Ri(h)}}}function kg(i){var e=document.createElement("template");return e.innerHTML=i.replaceAll("<!>","<!---->"),e.content}function Gg(i,e){var t=gt;t.nodes_start===null&&(t.nodes_start=i,t.nodes_end=e)}function Ns(i,e){var t=(e&Kx)!==0,n,s=!i.startsWith("<!>");return()=>{n===void 0&&(n=kg(s?i:"<!>"+i),n=nm(n));var r=t||Qp?document.importNode(n,!0):n.cloneNode(!0);return Gg(r,r),r}}function Es(i,e){i!==null&&i.before(e)}function po(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??=i.nodeValue)&&(i.__t=t,i.nodeValue=t+"")}function Hg(i,e){return Wg(i,e)}const dr=new Map;function Wg(i,{target:e,anchor:t,props:n={},events:s,context:r,intro:a=!0}){_g();var o=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!o.has(d)){o.add(d);var m=Vg(d);e.addEventListener(d,Pa,{passive:m});var g=dr.get(d);g===void 0?(document.addEventListener(d,Pa,{passive:m}),dr.set(d,1)):dr.set(d,g+1)}}};l(bh(vm)),pu.add(l);var c=void 0,u=Eg(()=>{var h=t??e.appendChild(Xa());return ug(h,{pending:()=>{}},f=>{if(r){rr({});var d=Vn;d.c=r}s&&(n.$$events=s),c=i(f,n)||{},r&&ar()}),()=>{for(var f of o){e.removeEventListener(f,Pa);var d=dr.get(f);--d===0?(document.removeEventListener(f,Pa),dr.delete(f)):dr.set(f,d)}pu.delete(l),h!==t&&h.parentNode?.removeChild(h)}});return Xg.set(c,u),c}let Xg=new WeakMap;function mu(i,e){return e}function qg(i,e,t){for(var n=[],s=e.length,r=0;r<s;r++)Ph(e[r].e,n,!0);lm(n,()=>{var a=n.length===0&&t!==null;if(a){var o=t,l=o.parentNode;vg(l),l.append(o),i.items.clear(),Mi(i,e[0].prev,e[s-1].next)}for(var c=0;c<s;c++){var u=e[c];a||(i.items.delete(u.k),Mi(i,u.prev,u.next)),bn(u.e,!a)}i.first===e[0]&&(i.first=e[0].prev)})}function xu(i,e,t,n,s,r=null){var a=i,o={items:new Map,first:null},l=(e&Op)!==0,c=(e&Up)!==0,u=(e&Fp)!==0;if(l){var h=i;a=h.appendChild(Xa())}var f=null,d=$p(()=>{var y=t();return Fc(y)?y:y==null?[]:bh(y)}),m,g=!0;function x(){Yg(p,m,o,a,e,n),f!==null&&(m.length===0?(f.fragment?(a.before(f.fragment),f.fragment=null):um(f.effect),p.first=f.effect):Fa(f.effect,()=>{f=null}))}var p=qc(()=>{m=J(d);for(var y=m.length,M=new Set,T=Tt,A=null,E=yg(),w=0;w<y;w+=1){var L=m[w],b=n(L,w),v=g?null:o.items.get(b);v?(c&&Zr(v.v,L),u?Zr(v.i,w):v.i=w,E&&T.skipped_effects.delete(v.e)):(v=$g(g?a:null,A,L,b,w,s,e,t),g&&(v.o=!0,A===null?o.first=v:A.next=v,A=v),o.items.set(b,v)),M.add(b)}if(y===0&&r&&!f)if(g)f={fragment:null,effect:qn(()=>r(a))};else{var N=document.createDocumentFragment(),O=Xa();N.append(O),f={fragment:N,effect:qn(()=>r(O))}}if(!g)if(E){for(const[B,V]of o.items)M.has(B)||T.skipped_effects.add(V.e);T.oncommit(x),T.ondiscard(()=>{})}else x();J(d)});g=!1}function Yg(i,e,t,n,s,r){var a=(s&Xx)!==0,o=e.length,l=t.items,c=t.first,u,h=null,f,d=[],m=[],g,x,p,y;if(a)for(y=0;y<o;y+=1)g=e[y],x=r(g,y),p=l.get(x),p.a?.measure(),(f??=new Set).add(p);for(y=0;y<o;y+=1){if(g=e[y],x=r(g,y),p=l.get(x),t.first??=p,!p.o){p.o=!0;var M=h?h.next:c;Mi(t,h,p),Mi(t,p,M),ll(p,M,n),h=p,d=[],m=[],c=h.next;continue}if((p.e.f&zn)!==0&&(um(p.e),a&&(p.a?.unfix(),(f??=new Set).delete(p))),p!==c){if(u!==void 0&&u.has(p)){if(d.length<m.length){var T=m[0],A;h=T.prev;var E=d[0],w=d[d.length-1];for(A=0;A<d.length;A+=1)ll(d[A],T,n);for(A=0;A<m.length;A+=1)u.delete(m[A]);Mi(t,E.prev,w.next),Mi(t,h,E),Mi(t,w,T),c=T,h=w,y-=1,d=[],m=[]}else u.delete(p),ll(p,c,n),Mi(t,p.prev,p.next),Mi(t,p,h===null?t.first:h.next),Mi(t,h,p),h=p;continue}for(d=[],m=[];c!==null&&c.k!==x;)(c.e.f&zn)===0&&(u??=new Set).add(c),m.push(c),c=c.next;if(c===null)continue;p=c}d.push(p),h=p,c=p.next}if(c!==null||u!==void 0){for(var L=u===void 0?[]:bh(u);c!==null;)(c.e.f&zn)===0&&L.push(c),c=c.next;var b=L.length;if(b>0){var v=(s&Op)!==0&&o===0?n:null;if(a){for(y=0;y<b;y+=1)L[y].a?.measure();for(y=0;y<b;y+=1)L[y].a?.fix()}qg(t,L,v)}}a&&or(()=>{if(f!==void 0)for(p of f)p.a?.apply()}),i.first=t.first&&t.first.e,i.last=h&&h.e,h&&(h.e.next=null)}function $g(i,e,t,n,s,r,a,o){var l=(a&Up)!==0,c=(a&qx)===0,u=l?c?mg(t,!1,!1):tr(t):t,h=(a&Fp)===0?s:tr(s),f={i:h,v:u,k:n,a:null,e:null,o:!1,prev:e,next:null};try{if(i===null){var d=document.createDocumentFragment();d.append(i=Xa())}return f.e=qn(()=>r(i,u,h,o)),f.e.prev=e&&e.e,e!==null&&(e.next=f,e.e.next=f.e),f}finally{}}function ll(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,s=e?e.e.nodes_start:t,r=i.e.nodes_start;r!==null&&r!==n;){var a=kc(r);s.before(r),r=a}}function Mi(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Zg(i,e){var t=void 0,n;qc(()=>{t!==(t=e())&&(n&&(bn(n),n=null),t&&(n=qn(()=>{Wc(()=>t(i))})))})}function Sm(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(e=0;e<s;e++)i[e]&&(t=Sm(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function jg(){for(var i,e,t=0,n="",s=arguments.length;t<s;t++)(i=arguments[t])&&(e=Sm(i))&&(n&&(n+=" "),n+=e);return n}function Kg(i){return typeof i=="object"?jg(i):i??""}const Ff=[...` 	
\r\f \v\uFEFF`];function Jg(i,e,t){var n=i==null?"":""+i;if(t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var r=s.length,a=0;(a=n.indexOf(s,a))>=0;){var o=a+r;(a===0||Ff.includes(n[a-1]))&&(o===n.length||Ff.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Of(i,e=!1){var t=e?" !important;":";",n="";for(var s in i){var r=i[s];r!=null&&r!==""&&(n+=" "+s+": "+r+t)}return n}function ul(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function Qg(i,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(ul)),s&&l.push(...Object.keys(s).map(ul));var c=0,u=-1;const g=i.length;for(var h=0;h<g;h++){var f=i[h];if(o?f==="/"&&i[h-1]==="*"&&(o=!1):r?r===f&&(r=!1):f==="/"&&i[h+1]==="*"?o=!0:f==='"'||f==="'"?r=f:f==="("?a++:f===")"&&a--,!o&&r===!1&&a===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===g-1){if(u!==-1){var d=ul(i.substring(c,u).trim());if(!l.includes(d)){f!==";"&&h++;var m=i.substring(c,h).trim();t+=" "+m+";"}}c=h+1,u=-1}}}}return n&&(t+=Of(n)),s&&(t+=Of(s,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function e_(i,e,t,n,s,r){var a=i.__className;if(a!==t||a===void 0){var o=Jg(t,n,r);o==null?i.removeAttribute("class"):e?i.className=o:i.setAttribute("class",o),i.__className=t}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&i.classList.toggle(l,c)}return r}function hl(i,e={},t,n){for(var s in t){var r=t[s];e[s]!==r&&(t[s]==null?i.style.removeProperty(s):i.style.setProperty(s,r,n))}}function Mm(i,e,t,n){var s=i.__style;if(s!==e){var r=Qg(e,n);r==null?i.removeAttribute("style"):i.style.cssText=r,i.__style=e}else n&&(Array.isArray(n)?(hl(i,t?.[0],n[0]),hl(i,t?.[1],n[1],"important")):hl(i,t,n));return n}function vc(i,e,t=!1){if(i.multiple){if(e==null)return;if(!Fc(e))return eg();for(var n of i.options)n.selected=e.includes(Oa(n));return}for(n of i.options){var s=Oa(n);if(gg(s,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Tm(i){var e=new MutationObserver(()=>{vc(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),sm(()=>{e.disconnect()})}function t_(i,e,t=e){var n=new WeakSet,s=!0;Nh(i,"change",r=>{var a=r?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(a),Oa);else{var l=i.querySelector(a)??i.querySelector("option:not([disabled])");o=l&&Oa(l)}t(o),Tt!==null&&n.add(Tt)}),Wc(()=>{var r=e();if(i===document.activeElement){var a=Da??Tt;if(n.has(a))return}if(vc(i,r,s),s&&r===void 0){var o=i.querySelector(":checked");o!==null&&(r=Oa(o),t(r))}i.__value=r,s=!1}),Tm(i)}function Oa(i){return"__value"in i?i.__value:i.value}const pa=Symbol("class"),ma=Symbol("style"),bm=Symbol("is custom element"),Em=Symbol("is html");function n_(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function jr(i,e,t,n){var s=wm(i);s[e]!==(s[e]=t)&&(e==="loading"&&(i[Dx]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Am(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function i_(i,e,t,n,s=!1,r=!1){var a=wm(i),o=a[bm],l=!a[Em],c=e||{},u=i.tagName==="OPTION";for(var h in e)h in t||(t[h]=null);t.class?t.class=Kg(t.class):t[pa]&&(t.class=null),t[ma]&&(t.style??=null);var f=Am(i);for(const T in t){let A=t[T];if(u&&T==="value"&&A==null){i.value=i.__value="",c[T]=A;continue}if(T==="class"){var d=i.namespaceURI==="http://www.w3.org/1999/xhtml";e_(i,d,A,n,e?.[pa],t[pa]),c[T]=A,c[pa]=t[pa];continue}if(T==="style"){Mm(i,A,e?.[ma],t[ma]),c[T]=A,c[ma]=t[ma];continue}var m=c[T];if(!(A===m&&!(A===void 0&&i.hasAttribute(T)))){c[T]=A;var g=T[0]+T[1];if(g!=="$$")if(g==="on"){const E={},w="$$"+T;let L=T.slice(2);var x=Fg(L);if(Ig(L)&&(L=L.slice(0,-7),E.capture=!0),!x&&m){if(A!=null)continue;i.removeEventListener(L,c[w],E),c[w]=null}if(A!=null)if(x)i[`__${L}`]=A,Yc([L]);else{let b=function(v){c[T].call(this,v)};var M=b;c[w]=ym(L,i,b,E)}else x&&(i[`__${L}`]=void 0)}else if(T==="style")jr(i,T,A);else if(T==="autofocus")Sg(i,!!A);else if(!o&&(T==="__value"||T==="value"&&A!=null))i.value=i.__value=A;else if(T==="selected"&&u)n_(i,A);else{var p=T;l||(p=zg(p));var y=p==="defaultValue"||p==="defaultChecked";if(A==null&&!o&&!y)if(a[T]=null,p==="value"||p==="checked"){let E=i;const w=e===void 0;if(p==="value"){let L=E.defaultValue;E.removeAttribute(p),E.defaultValue=L,E.value=E.__value=w?L:null}else{let L=E.defaultChecked;E.removeAttribute(p),E.defaultChecked=L,E.checked=w?L:!1}}else i.removeAttribute(T);else y||f.includes(p)&&(o||typeof A!="string")?(i[p]=A,p in a&&(a[p]=tn)):typeof A!="function"&&jr(i,p,A)}}}return c}function s_(i,e,t=[],n=[],s=[],r,a=!1,o=!1){Yp(s,t,n,l=>{var c=void 0,u={},h=i.nodeName==="SELECT",f=!1;if(qc(()=>{var m=e(...l.map(J)),g=i_(i,c,m,r,a,o);f&&h&&"value"in m&&vc(i,m.value);for(let p of Object.getOwnPropertySymbols(u))m[p]||bn(u[p]);for(let p of Object.getOwnPropertySymbols(m)){var x=m[p];p.description===Qx&&(!c||x!==c[p])&&(u[p]&&bn(u[p]),u[p]=qn(()=>Zg(i,()=>x))),g[p]=x}c=g}),h){var d=i;Wc(()=>{vc(d,c.value,!0),Tm(d)})}f=!0})}function wm(i){return i.__attributes??={[bm]:i.nodeName.includes("-"),[Em]:i.namespaceURI===Jx}}var zf=new Map;function Am(i){var e=i.getAttribute("is")||i.nodeName,t=zf.get(e);if(t)return t;zf.set(e,t=[]);for(var n,s=i,r=Element.prototype;r!==s;){n=Rx(s);for(var a in n)n[a].set&&t.push(a);s=Eh(s)}return t}function Cm(i,e,t=e){var n=new WeakSet;Nh(i,"input",async s=>{var r=s?i.defaultValue:i.value;if(r=fl(i)?dl(r):r,t(r),Tt!==null&&n.add(Tt),await Lg(),r!==(r=e())){var a=i.selectionStart,o=i.selectionEnd,l=i.value.length;if(i.value=r??"",o!==null){var c=i.value.length;a===o&&o===l&&c>l?(i.selectionStart=c,i.selectionEnd=c):(i.selectionStart=a,i.selectionEnd=Math.min(o,c))}}}),Rs(e)==null&&i.value&&(t(fl(i)?dl(i.value):i.value),Tt!==null&&n.add(Tt)),Xc(()=>{var s=e();if(i===document.activeElement){var r=Da??Tt;if(n.has(r))return}fl(i)&&s===dl(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function r_(i,e,t=e){Nh(i,"change",n=>{var s=n?i.defaultChecked:i.checked;t(s)}),Rs(e)==null&&t(i.checked),Xc(()=>{var n=e();i.checked=!!n})}function fl(i){var e=i.type;return e==="number"||e==="range"}function dl(i){return i===""?null:+i}function Bf(i,e){return i===e||i?.[Zs]===e}function Vr(i={},e,t,n){return Wc(()=>{var s,r;return Xc(()=>{s=r,r=n?.()||[],Rs(()=>{i!==t(...r)&&(e(i,...r),s&&Bf(t(...s),i)&&e(null,...s))})}),()=>{or(()=>{r&&Bf(t(...r),i)&&e(null,...r)})}}),i}let mo=!1;function a_(i){var e=mo;try{return mo=!1,[i(),mo]}finally{mo=e}}const o_={get(i,e){if(!i.exclude.includes(e))return i.props[e]},set(i,e){return!1},getOwnPropertyDescriptor(i,e){if(!i.exclude.includes(e)&&e in i.props)return{enumerable:!0,configurable:!0,value:i.props[e]}},has(i,e){return i.exclude.includes(e)?!1:e in i.props},ownKeys(i){return Reflect.ownKeys(i.props).filter(e=>!i.exclude.includes(e))}};function c_(i,e,t){return new Proxy({props:i,exclude:e},o_)}function oi(i,e,t,n){var s=(t&Zx)!==0,r=(t&jx)!==0,a=n,o=!0,l=()=>(o&&(o=!1,a=r?Rs(n):n),a),c;if(s){var u=Zs in i||Lx in i;c=Br(i,e)?.set??(u&&e in i?y=>i[e]=y:void 0)}var h,f=!1;s?[h,f]=a_(()=>i[e]):h=i[e],h===void 0&&n!==void 0&&(h=l(),c&&(Vx(),c(h)));var d;if(d=()=>{var y=i[e];return y===void 0?l():(o=!0,y)},(t&$x)===0)return d;if(c){var m=i.$$legacy;return(function(y,M){return arguments.length>0?((!M||m||f)&&c(M?d():y),y):d()})}var g=!1,x=((t&Yx)!==0?Vc:$p)(()=>(g=!1,d()));s&&J(x);var p=gt;return(function(y,M){if(arguments.length>0){const T=M?J(x):s?jt(y):y;return Fe(x,T),g=!0,a!==void 0&&(a=T),y}return cr&&g||(p.f&Zi)!==0?x.v:J(x)})}function Lh(i){Vn===null&&Ix(),Ft(()=>{const e=Rs(i);if(typeof e=="function")return e})}const l_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(l_);const Dh="181",kr={ROTATE:0,DOLLY:1,PAN:2},u_=0,Vf=1,h_=2,Rm=1,f_=2,Hi=3,As=0,En=1,Xi=2,Ai=0,Gr=1,kf=2,Gf=3,Hf=4,d_=5,Ws=100,p_=101,m_=102,x_=103,g_=104,__=200,v_=201,y_=202,S_=203,gu=204,_u=205,M_=206,T_=207,b_=208,E_=209,w_=210,A_=211,C_=212,R_=213,N_=214,vu=0,yu=1,Su=2,Kr=3,Mu=4,Tu=5,bu=6,Eu=7,Nm=0,P_=1,L_=2,ws=0,D_=1,I_=2,U_=3,F_=4,O_=5,z_=6,B_=7,Pm=300,Jr=301,Qr=302,wu=303,Au=304,$c=306,Cu=1e3,qi=1001,Ru=1002,Bn=1003,V_=1004,xo=1005,Zn=1006,pl=1007,Ys=1008,ts=1009,Lm=1010,Dm=1011,$a=1012,Ih=1013,nr=1014,Yi=1015,lr=1016,Uh=1017,Fh=1018,Za=1020,Im=35902,Um=35899,Fm=1021,Om=1022,hi=1023,ja=1026,Ka=1027,zm=1028,Oh=1029,zh=1030,Bh=1031,Vh=1033,cc=33776,lc=33777,uc=33778,hc=33779,Nu=35840,Pu=35841,Lu=35842,Du=35843,Iu=36196,Uu=37492,Fu=37496,Ou=37808,zu=37809,Bu=37810,Vu=37811,ku=37812,Gu=37813,Hu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,$u=37819,Zu=37820,ju=37821,Ku=36492,Ju=36494,Qu=36495,eh=36283,th=36284,nh=36285,ih=36286,k_=3200,G_=3201,H_=0,W_=1,_s="",Yn="srgb",ea="srgb-linear",yc="linear",yt="srgb",pr=7680,Wf=519,X_=512,q_=513,Y_=514,Bm=515,$_=516,Z_=517,j_=518,K_=519,sh=35044,Xf="300 es",wi=2e3,Sc=2001;function Vm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J_(){const i=Mc("canvas");return i.style.display="block",i}const qf={};function Tc(...i){const e="THREE."+i.shift();console.log(e,...i)}function He(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ot(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ja(...i){const e=i.join(" ");e in qf||(qf[e]=!0,He(...i))}function Q_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}let ur=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yf=1234567;const za=Math.PI/180,Qa=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function kh(i,e){return(i%e+e)%e}function ev(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function tv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function nv(i,e,t,n){return Ba(i,e,1-Math.exp(-t*n))}function iv(i,e=1){return e-Math.abs(kh(i,e*2)-e)}function sv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function av(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ov(i,e){return i+Math.random()*(e-i)}function cv(i){return i*(.5-Math.random())}function lv(i){i!==void 0&&(Yf=i);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uv(i){return i*za}function hv(i){return i*Qa}function fv(i){return(i&i-1)===0&&i!==0}function dv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rh={DEG2RAD:za,RAD2DEG:Qa,generateUUID:Ki,clamp:qe,euclideanModulo:kh,mapLinear:ev,inverseLerp:tv,lerp:Ba,damp:nv,pingpong:iv,smoothstep:sv,smootherstep:rv,randInt:av,randFloat:ov,randFloatSpread:cv,seededRandom:lv,degToRad:uv,radToDeg:hv,isPowerOfTwo:fv,ceilPowerOfTwo:dv,floorPowerOfTwo:pv,setQuaternionFromProperEuler:mv,normalize:mt,denormalize:ci};let je=class km{constructor(e=0,t=0){km.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oa=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let x=l*f+c*d+u*m+h*g;x<0&&(f=-f,d=-d,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const y=Math.acos(x),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+f*o,c=c*p+d*o,u=u*p+m*o,h=h*p+g*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+m*o,h=h*p+g*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class Gm{constructor(e=0,t=0,n=0){Gm.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ml=new F,$f=new oa;let Qe=class Hm{constructor(e,t,n,s,r,a,o,l,c){Hm.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=s[0],x=s[3],p=s[6],y=s[1],M=s[4],T=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*g+o*y+l*A,r[3]=a*x+o*M+l*E,r[6]=a*p+o*T+l*w,r[1]=c*g+u*y+h*A,r[4]=c*x+u*M+h*E,r[7]=c*p+u*T+h*w,r[2]=f*g+d*y+m*A,r[5]=f*x+d*M+m*E,r[8]=f*p+d*T+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const xl=new Qe,Zf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){const i={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ea]:{primaries:e,whitePoint:n,transfer:yc,toXYZ:Zf,fromXYZ:jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Zf,fromXYZ:jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),i}const ht=xv();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mr,gv=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Mc("canvas")),mr.width=e.width,mr.height=e.height;const s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_v=0,Gh=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let vv=0;const _l=new F;let mi=class fc extends ur{constructor(e=fc.DEFAULT_IMAGE,t=fc.DEFAULT_MAPPING,n=qi,s=qi,r=Zn,a=Ys,o=hi,l=ts,c=fc.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Ki(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cu:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cu:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Pm;mi.DEFAULT_ANISOTROPY=1;let At=class Wm{constructor(e=0,t=0,n=0,s=1){Wm.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(d+1)/2,A=(p+1)/2,E=(u+f)/4,w=(h+g)/4,L=(m+x)/4;return M>T&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yv=class extends ur{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new mi(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Cs extends yv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xm extends mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sv extends mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ps=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),_o.subVectors(this.max,xa),xr.subVectors(e.a,xa),gr.subVectors(e.b,xa),_r.subVectors(e.c,xa),as.subVectors(gr,xr),os.subVectors(_r,gr),Us.subVectors(xr,_r);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-Us.z,Us.y,as.z,0,-as.x,os.z,0,-os.x,Us.z,0,-Us.x,-as.y,as.x,0,-os.y,os.x,0,-Us.y,Us.x,0];return!vl(t,xr,gr,_r,_o)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,xr,gr,_r,_o))?!1:(vo.crossVectors(as,os),t=[vo.x,vo.y,vo.z],vl(t,xr,gr,_r,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};const Fi=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,go=new Ps,xr=new F,gr=new F,_r=new F,as=new F,os=new F,Us=new F,xa=new F,_o=new F,vo=new F,Fs=new F;function vl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);const o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Mv=new Ps,ga=new F,yl=new F;let ca=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(yl)),this.expandByPoint(ga.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Oi=new F,Sl=new F,yo=new F,cs=new F,Ml=new F,So=new F,Tl=new F;class qm{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Sl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=cs.dot(this.direction),l=-cs.dot(yo),c=cs.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sl).addScaledVector(yo,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){Ml.subVectors(t,e),So.subVectors(n,e),Tl.crossVectors(Ml,So);let a=this.direction.dot(Tl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);const l=o*this.direction.dot(So.crossVectors(cs,So));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(cs));if(c<0||l+c>a)return null;const u=-o*cs.dot(Tl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Kt=class ah{constructor(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x){ah.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x)}set(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ah().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),a=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f+g*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,g=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,bv)}lookAt(e,t,n){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ls.crossVectors(n,Ln),ls.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ls.crossVectors(n,Ln)),ls.normalize(),Mo.crossVectors(Ln,ls),s[0]=ls.x,s[4]=Mo.x,s[8]=Ln.x,s[1]=ls.y,s[5]=Mo.y,s[9]=Ln.y,s[2]=ls.z,s[6]=Mo.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],M=n[7],T=n[11],A=n[15],E=s[0],w=s[4],L=s[8],b=s[12],v=s[1],N=s[5],O=s[9],B=s[13],V=s[2],W=s[6],Y=s[10],K=s[14],X=s[3],ne=s[7],re=s[11],Se=s[15];return r[0]=a*E+o*v+l*V+c*X,r[4]=a*w+o*N+l*W+c*ne,r[8]=a*L+o*O+l*Y+c*re,r[12]=a*b+o*B+l*K+c*Se,r[1]=u*E+h*v+f*V+d*X,r[5]=u*w+h*N+f*W+d*ne,r[9]=u*L+h*O+f*Y+d*re,r[13]=u*b+h*B+f*K+d*Se,r[2]=m*E+g*v+x*V+p*X,r[6]=m*w+g*N+x*W+p*ne,r[10]=m*L+g*O+x*Y+p*re,r[14]=m*b+g*B+x*K+p*Se,r[3]=y*E+M*v+T*V+A*X,r[7]=y*w+M*N+T*W+A*ne,r[11]=y*L+M*O+T*Y+A*re,r[15]=y*b+M*B+T*K+A*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+x*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=h*x*c-g*f*c+g*l*d-o*x*d-h*l*p+o*f*p,M=m*f*c-u*x*c-m*l*d+a*x*d+u*l*p-a*f*p,T=u*g*c-m*h*c+m*o*d-a*g*d-u*o*p+a*h*p,A=m*h*l-u*g*l-m*o*f+a*g*f+u*o*x-a*h*x,E=t*y+n*M+s*T+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(g*f*r-h*x*r-g*s*d+n*x*d+h*s*p-n*f*p)*w,e[2]=(o*x*r-g*l*r+g*s*c-n*x*c-o*s*p+n*l*p)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*w,e[4]=M*w,e[5]=(u*x*r-m*f*r+m*s*d-t*x*d-u*s*p+t*f*p)*w,e[6]=(m*l*r-a*x*r-m*s*c+t*x*c+a*s*p-t*l*p)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*w,e[8]=T*w,e[9]=(m*h*r-u*g*r-m*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(a*g*r-m*o*r+m*n*c-t*g*c-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=A*w,e[13]=(u*g*s-m*h*s+m*n*f-t*g*f-u*n*x+t*h*x)*w,e[14]=(m*o*s-a*g*s-m*n*l+t*g*l+a*n*x-t*o*x)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,m=r*h,g=a*u,x=a*h,p=o*h,y=l*c,M=l*u,T=l*h,A=n.x,E=n.y,w=n.z;return s[0]=(1-(g+p))*A,s[1]=(d+T)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-T)*E,s[5]=(1-(f+p))*E,s[6]=(x+y)*E,s[7]=0,s[8]=(m+M)*w,s[9]=(x-y)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vr.set(s[0],s[1],s[2]).length();const a=vr.set(s[4],s[5],s[6]).length(),o=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);const c=1/r,u=1/a,h=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=wi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(l)m=r/(a-r),g=a*r/(a-r);else if(o===wi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sc)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,g;if(l)m=1/(a-r),g=a/(a-r);else if(o===wi)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===Sc)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const vr=new F,ni=new Kt,Tv=new F(0,0,0),bv=new F(1,1,1),ls=new F,Mo=new F,Ln=new F,Kf=new Kt,Jf=new oa;let ir=class Ym{constructor(e=0,t=0,n=0,s=Ym.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ir.DEFAULT_ORDER="XYZ";class $m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Qf=new F,yr=new oa,zi=new Kt,To=new F,_a=new F,wv=new F,Av=new oa,ed=new F(1,0,0),td=new F(0,1,0),nd=new F(0,0,1),id={type:"added"},Cv={type:"removed"},Sr={type:"childadded",child:null},bl={type:"childremoved",child:null};class wn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new F,t=new ir,n=new oa,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qe}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qf.copy(e).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(_a,To,this.up):zi.lookAt(To,_a,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cv),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wn.DEFAULT_UP=new F(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new F,Bi=new F,El=new F,Vi=new F,Mr=new F,Tr=new F,sd=new F,wl=new F,Al=new F,Cl=new F,Rl=new At,Nl=new At,Pl=new At;class li{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Bi.subVectors(n,t),El.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(Bi),l=ii.dot(El),c=Bi.dot(Bi),u=Bi.dot(El),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rl.setScalar(0),Nl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Pl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Nl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Bi.subVectors(e,t),ii.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ii.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return li.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Mr.subVectors(s,n),Tr.subVectors(r,n),wl.subVectors(e,n);const l=Mr.dot(wl),c=Tr.dot(wl);if(l<=0&&c<=0)return t.copy(n);Al.subVectors(e,s);const u=Mr.dot(Al),h=Tr.dot(Al);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mr,a);Cl.subVectors(e,r);const d=Mr.dot(Cl),m=Tr.dot(Cl);if(m>=0&&d<=m)return t.copy(r);const g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Tr,o);const x=u*m-d*h;if(x<=0&&h-u>=0&&d-m>=0)return sd.subVectors(r,s),o=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(sd,o);const p=1/(x+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(Mr,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=kh(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Yn){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const n=Zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return ht.workingToColorSpace(an.copy(this),e),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(an.copy(this),t);const n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Yn){ht.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,s=an.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(bo);const n=Ba(us.h,bo.h,t),s=Ba(us.s,bo.s,t),r=Ba(us.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new et;et.NAMES=Zm;let Rv=0;class no extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Gr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==As&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==Ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hh extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new F,Eo=new je;let Nv=0,di=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}};class jm extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pv=0;const Hn=new Kt,Dl=new wn,br=new F,Dn=new Ps,va=new Ps,Zt=new F;class Rn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?Km:jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Dn.min,va.min),Dn.expandByPoint(Zt),Zt.addVectors(Dn.max,va.max),Dn.expandByPoint(Zt)):(Dn.expandByPoint(va.min),Dn.expandByPoint(va.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zt.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),Zt.add(br)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new F,l[L]=new F;const c=new F,u=new F,h=new F,f=new je,d=new je,m=new je,g=new F,x=new F;function p(L,b,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(N),x.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(N),o[L].add(g),o[b].add(g),o[v].add(g),l[L].add(x),l[b].add(x),l[v].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,b=y.length;L<b;++L){const v=y[L],N=v.start,O=v.count;for(let B=N,V=N+O;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new F,T=new F,A=new F,E=new F;function w(L){A.fromBufferAttribute(s,L),E.copy(A);const b=o[L];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),T.crossVectors(E,b);const N=T.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,N)}for(let L=0,b=y.length;L<b;++L){const v=y[L],N=v.start,O=v.count;for(let B=N,V=N+O;B<V;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),g=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new di(f,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new Kt,Os=new qm,wo=new ca,ad=new F,Ao=new F,Co=new F,Ro=new F,Il=new F,No=new F,od=new F,Po=new F;class Jn extends wn{constructor(e=new Rn,t=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),a?No.addScaledVector(Il,u):No.addScaledVector(Il.sub(t),u))}t.add(No)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(wo.containsPoint(Os.origin)===!1&&(Os.intersectSphere(wo,ad)===null||Os.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(rd.copy(r).invert(),Os.copy(e.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const x=f[m],p=a[x.materialIndex],y=Math.max(x.start,d.start),M=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let T=y,A=M;T<A;T+=3){const E=o.getX(T),w=o.getX(T+1),L=o.getX(T+2);s=Lo(this,p,e,n,c,u,h,E,w,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){const y=o.getX(x),M=o.getX(x+1),T=o.getX(x+2);s=Lo(this,a,e,n,c,u,h,y,M,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const x=f[m],p=a[x.materialIndex],y=Math.max(x.start,d.start),M=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let T=y,A=M;T<A;T+=3){const E=T,w=T+1,L=T+2;s=Lo(this,p,e,n,c,u,h,E,w,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){const y=x,M=x+1,T=x+2;s=Lo(this,a,e,n,c,u,h,y,M,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Lv(i,e,t,n,s,r,a,o){let l;if(e.side===En?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===As,o),l===null)return null;Po.copy(o),Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:i}}function Lo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ao),i.getVertexPosition(l,Co),i.getVertexPosition(c,Ro);const u=Lv(i,e,t,n,Ao,Co,Ro,od);if(u){const h=new F;li.getBarycoord(od,Ao,Co,Ro,h),s&&(u.uv=li.getInterpolatedAttribute(s,o,l,c,h,new je)),r&&(u.uv1=li.getInterpolatedAttribute(r,o,l,c,h,new je)),a&&(u.normal=li.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};li.getNormal(Ao,Co,Ro,f.normal),u.face=f,u.barycoord=h}return u}class io extends Rn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function m(g,x,p,y,M,T,A,E,w,L,b){const v=T/w,N=A/L,O=T/2,B=A/2,V=E/2,W=w+1,Y=L+1;let K=0,X=0;const ne=new F;for(let re=0;re<Y;re++){const Se=re*N-B;for(let Ie=0;Ie<W;Ie++){const Ke=Ie*v-O;ne[g]=Ke*y,ne[x]=Se*M,ne[p]=V,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[x]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ie/w),h.push(1-re/L),K+=1}}for(let re=0;re<L;re++)for(let Se=0;Se<w;Se++){const Ie=f+Se+W*re,Ke=f+Se+W*(re+1),lt=f+(Se+1)+W*(re+1),at=f+(Se+1)+W*re;l.push(Ie,Ke,at),l.push(Ke,lt,at),X+=6}o.addGroup(d,X,b),d+=X,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=ta(i[t]);for(const s in n)e[s]=n[s]}return e}function Dv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Zc={clone:ta,merge:mn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qm extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new F,cd=new je,ld=new je;class $n extends Qm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ld),t.subVectors(ld,cd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,wr=1;class Fv extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $n(Er,wr,e,t);s.layers=this.layers,this.add(s);const r=new $n(Er,wr,e,t);r.layers=this.layers,this.add(r);const a=new $n(Er,wr,e,t);a.layers=this.layers,this.add(a);const o=new $n(Er,wr,e,t);o.layers=this.layers,this.add(o);const l=new $n(Er,wr,e,t);l.layers=this.layers,this.add(l);const c=new $n(Er,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}let e0=class extends mi{constructor(e=[],t=Jr,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};class Ov extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new e0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new io(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Ai});r.uniforms.tEquirect.value=t;const a=new Jn(s,r),o=t.minFilter;return t.minFilter===Ys&&(t.minFilter=Zn),new Fv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Do extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zv={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Do;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Io extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}let Bv=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};const dn=new F;let zr=class t0{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new di(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};class Vv extends mi{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Bn,u=Bn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new F,kv=new F,Gv=new Qe;let Hs=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fl.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gv.getNormalMatrix(e),s=this.coplanarPoint(Fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const zs=new ca,Hv=new je(.5,.5),Uo=new F;class n0{constructor(e=new Hs,t=new Hs,n=new Hs,s=new Hs,r=new Hs,a=new Hs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],y=r[12],M=r[13],T=r[14],A=r[15];if(s[0].setComponents(c-a,d-u,p-m,A-y).normalize(),s[1].setComponents(c+a,d+u,p+m,A+y).normalize(),s[2].setComponents(c+o,d+h,p+g,A+M).normalize(),s[3].setComponents(c-o,d-h,p-g,A-M).normalize(),n)s[4].setComponents(l,f,x,T).normalize(),s[5].setComponents(c-l,d-f,p-x,A-T).normalize();else if(s[4].setComponents(c-l,d-f,p-x,A-T).normalize(),t===wi)s[5].setComponents(c+l,d+f,p+x,A+T).normalize();else if(t===Sc)s[5].setComponents(l,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const t=Hv.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i0 extends no{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new F,Ec=new F,ud=new Kt,ya=new qm,Fo=new ca,Ol=new F,hd=new F;class Wv extends wn{constructor(e=new Rn,t=new i0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bc.fromBufferAttribute(t,s-1),Ec.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bc.distanceTo(Ec);e.setAttribute("lineDistance",new Xt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;ud.copy(s).invert(),ya.copy(e.ray).applyMatrix4(ud);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,x=m-1;g<x;g+=c){const p=u.getX(g),y=u.getX(g+1),M=Oo(this,e,ya,l,p,y,g);M&&t.push(M)}if(this.isLineLoop){const g=u.getX(m-1),x=u.getX(d),p=Oo(this,e,ya,l,g,x,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,x=m-1;g<x;g+=c){const p=Oo(this,e,ya,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Oo(this,e,ya,l,m-1,d,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(bc.fromBufferAttribute(o,s),Ec.fromBufferAttribute(o,r),t.distanceSqToSegment(bc,Ec,Ol,hd)>n)return;Ol.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ol);if(!(c<e.near||c>e.far))return{distance:c,point:hd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const fd=new F,dd=new F;class Xv extends Wv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fd.fromBufferAttribute(t,s),dd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fd.distanceTo(dd);e.setAttribute("lineDistance",new Xt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let s0=class extends mi{constructor(e,t,n=nr,s,r,a,o=Bn,l=Bn,c,u=ja,h=1){if(u!==ja&&u!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};class r0 extends mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jc extends Rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],g=[],x=[];for(let p=0;p<u;p++){const y=p*f-a;for(let M=0;M<c;M++){const T=M*h-r;m.push(T,-y,0),g.push(0,0,1),x.push(M/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,T=y+c*(p+1),A=y+1+c*(p+1),E=y+1+c*p;d.push(M,T,E),d.push(T,A,E)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wh extends Rn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,f=new F,d=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+M*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),x.push(E+T,1-M),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=u[p][y+1],T=u[p][y],A=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(M,T,E),(p!==n-1||l<Math.PI)&&d.push(T,A,E)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qv extends Rn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new F,r=new F;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let m=f,g=f+d;m<g;m+=3)for(let x=0;x<3;x++){const p=o.getX(m+x),y=o.getX(m+(x+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),pd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),pd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function pd(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class Yv extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $v extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class a0 extends Qm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zv extends Rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jv extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class oh extends Bv{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const md=new F,zo=new F,Ar=new F,Cr=new F,zl=new F,Jv=new F,Qv=new F;class ey{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){md.subVectors(e,this.start),zo.subVectors(this.end,this.start);const n=zo.dot(zo);let r=zo.dot(md)/n;return t&&(r=qe(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Jv,n=Qv){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Ar.subVectors(c,o),Cr.subVectors(u,l),zl.subVectors(o,l);const h=Ar.dot(Ar),f=Cr.dot(Cr),d=Cr.dot(zl);if(h<=s&&f<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(h<=s)r=0,a=d/f,a=qe(a,0,1);else{const m=Ar.dot(zl);if(f<=s)a=0,r=qe(-m/h,0,1);else{const g=Ar.dot(Cr),x=h*f-g*g;x!==0?r=qe((g*d-m*f)/x,0,1):r=0,a=(g*r+d)/f,a<0?(a=0,r=qe(-m/h,0,1)):a>1&&(a=1,r=qe((g-m)/h,0,1))}}return t.copy(o).add(Ar.multiplyScalar(r)),n.copy(l).add(Cr.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ty extends Xv{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Rn;s.setAttribute("position",new Xt(t,3)),s.setAttribute("color",new Xt(n,3));const r=new i0({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new et,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny extends ur{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xd(i,e,t,n){const s=iy(n);switch(t){case Fm:return i*e;case zm:return i*e/s.components*s.byteLength;case Oh:return i*e/s.components*s.byteLength;case zh:return i*e*2/s.components*s.byteLength;case Bh:return i*e*2/s.components*s.byteLength;case Om:return i*e*3/s.components*s.byteLength;case hi:return i*e*4/s.components*s.byteLength;case Vh:return i*e*4/s.components*s.byteLength;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Du:return Math.max(i,16)*Math.max(e,8)/4;case Nu:case Lu:return Math.max(i,8)*Math.max(e,8)/2;case Iu:case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ku:case Ju:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(i){switch(i){case ts:case Lm:return{byteLength:1,components:1};case $a:case Dm:case lr:return{byteLength:2,components:1};case Uh:case Fh:return{byteLength:2,components:4};case nr:case Ih:case Yi:return{byteLength:4,components:1};case Im:case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function o0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sy(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,IS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,US=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:ry,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:cy,alphatest_fragment:ly,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:xy,bsdfs:gy,iridescence_fragment:_y,bumpmap_pars_fragment:vy,clipping_planes_fragment:yy,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:My,clipping_planes_vertex:Ty,color_fragment:by,color_pars_fragment:Ey,color_pars_vertex:wy,color_vertex:Ay,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Py,displacementmap_vertex:Ly,emissivemap_fragment:Dy,emissivemap_pars_fragment:Iy,colorspace_fragment:Uy,colorspace_pars_fragment:Fy,envmap_fragment:Oy,envmap_common_pars_fragment:zy,envmap_pars_fragment:By,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:Ky,envmap_vertex:ky,fog_vertex:Gy,fog_pars_vertex:Hy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:Zy,lights_pars_begin:jy,lights_toon_fragment:Jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:nS,lights_physical_pars_fragment:iS,lights_fragment_begin:sS,lights_fragment_maps:rS,lights_fragment_end:aS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:cS,logdepthbuf_pars_vertex:lS,logdepthbuf_vertex:uS,map_fragment:hS,map_pars_fragment:fS,map_particle_fragment:dS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:xS,morphinstance_vertex:gS,morphcolor_vertex:_S,morphnormal_vertex:vS,morphtarget_pars_vertex:yS,morphtarget_vertex:SS,normal_fragment_begin:MS,normal_fragment_maps:TS,normal_pars_fragment:bS,normal_pars_vertex:ES,normal_vertex:wS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:CS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:PS,opaque_fragment:LS,packing:DS,premultiplied_alpha_fragment:IS,project_vertex:US,dithering_fragment:FS,dithering_pars_fragment:OS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:kS,shadowmap_vertex:GS,shadowmask_pars_fragment:HS,skinbase_vertex:WS,skinning_pars_vertex:XS,skinning_vertex:qS,skinnormal_vertex:YS,specularmap_fragment:$S,specularmap_pars_fragment:ZS,tonemapping_fragment:jS,tonemapping_pars_fragment:KS,transmission_fragment:JS,transmission_pars_fragment:QS,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:aM,backgroundCube_frag:oM,cube_vert:cM,cube_frag:lM,depth_vert:uM,depth_frag:hM,distanceRGBA_vert:fM,distanceRGBA_frag:dM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:xM,linedashed_frag:gM,meshbasic_vert:_M,meshbasic_frag:vM,meshlambert_vert:yM,meshlambert_frag:SM,meshmatcap_vert:MM,meshmatcap_frag:TM,meshnormal_vert:bM,meshnormal_frag:EM,meshphong_vert:wM,meshphong_frag:AM,meshphysical_vert:CM,meshphysical_frag:RM,meshtoon_vert:NM,meshtoon_frag:PM,points_vert:LM,points_frag:DM,shadow_vert:IM,shadow_frag:UM,sprite_vert:FM,sprite_frag:OM},he={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},yn={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};yn.physical={uniforms:mn([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Bo={r:0,b:0,g:0},Bs=new ir,zM=new Kt;function BM(i,e,t,n,s,r,a){const o=new et(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function g(M){let T=!1;const A=m(M);A===null?p(o,l):A&&A.isColor&&(p(A,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,T){const A=m(T);A&&(A.isCubeTexture||A.mapping===$c)?(u===void 0&&(u=new Jn(new io(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ta(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bs.copy(T.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(Bs)),u.material.toneMapped=ht.getTransfer(A.colorSpace)!==yt,(h!==A||f!==A.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Jn(new jc(2,2),new kn({name:"BackgroundMaterial",uniforms:ta(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ht.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(Bo,Jm(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,T,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:x,dispose:y}}function VM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,N,O,B,V){let W=!1;const Y=h(B,O,N);r!==Y&&(r=Y,c(r.object)),W=d(v,B,O,V),W&&m(v,B,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,T(v,N,O,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,N,O){const B=O.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let W=V[N.id];W===void 0&&(W={},V[N.id]=W);let Y=W[B];return Y===void 0&&(Y=f(l()),W[B]=Y),Y}function f(v){const N=[],O=[],B=[];for(let V=0;V<t;V++)N[V]=0,O[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,N,O,B){const V=r.attributes,W=N.attributes;let Y=0;const K=O.getAttributes();for(const X in K)if(K[X].location>=0){const re=V[X];let Se=W[X];if(Se===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),re===void 0||re.attribute!==Se||Se&&re.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function m(v,N,O,B){const V={},W=N.attributes;let Y=0;const K=O.getAttributes();for(const X in K)if(K[X].location>=0){let re=W[X];re===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const Se={};Se.attribute=re,re&&re.data&&(Se.data=re.data),V[X]=Se,Y++}r.attributes=V,r.attributesNum=Y,r.index=B}function g(){const v=r.newAttributes;for(let N=0,O=v.length;N<O;N++)v[N]=0}function x(v){p(v,0)}function p(v,N){const O=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;O[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),V[v]!==N&&(i.vertexAttribDivisor(v,N),V[v]=N)}function y(){const v=r.newAttributes,N=r.enabledAttributes;for(let O=0,B=N.length;O<B;O++)N[O]!==v[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function M(v,N,O,B,V,W,Y){Y===!0?i.vertexAttribIPointer(v,N,O,V,W):i.vertexAttribPointer(v,N,O,B,V,W)}function T(v,N,O,B){g();const V=B.attributes,W=O.getAttributes(),Y=N.defaultAttributeValues;for(const K in W){const X=W[K];if(X.location>=0){let ne=V[K];if(ne===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){const re=ne.normalized,Se=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;const Ke=Ie.buffer,lt=Ie.type,at=Ie.bytesPerElement,Z=lt===i.INT||lt===i.UNSIGNED_INT||ne.gpuType===Ih;if(ne.isInterleavedBufferAttribute){const Q=ne.data,ve=Q.stride,We=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)p(X.location+Ce,Q.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)x(X.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ce=0;Ce<X.locationSize;Ce++)M(X.location+Ce,Se/X.locationSize,lt,re,ve*at,(We+Se/X.locationSize*Ce)*at,Z)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,ne.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<X.locationSize;Q++)x(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Q=0;Q<X.locationSize;Q++)M(X.location+Q,Se/X.locationSize,lt,re,Se*at,Se/X.locationSize*Q*at,Z)}}else if(Y!==void 0){const re=Y[K];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}y()}function A(){L();for(const v in n){const N=n[v];for(const O in N){const B=N[O];for(const V in B)u(B[V].object),delete B[V];delete N[O]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const N=n[v.id];for(const O in N){const B=N[O];for(const V in B)u(B[V].object),delete B[V];delete N[O]}delete n[v.id]}function w(v){for(const N in n){const O=n[N];if(O[v.id]===void 0)continue;const B=O[v.id];for(const V in B)u(B[V].object),delete B[V];delete O[v.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function kM(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function GM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==hi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ts&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Yi&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:A,maxSamples:E}}function HM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hs,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!x)r?u(null):c();else{const y=r?0:n,M=y*4;let T=p.clippingState||null;l.value=T,T=u(m,f,M,d);for(let A=0;A!==M;++A)T[A]=t[A];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const g=h!==null?h.length:0;let x=null;if(g!==0){if(x=l.value,m!==!0||x===null){const p=d+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let M=0,T=d;M!==g;++M,T+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(x,T),x[T+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function WM(i){let e=new WeakMap;function t(a,o){return o===wu?a.mapping=Jr:o===Au&&(a.mapping=Qr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wu||o===Au)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ov(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const vs=4,gd=[.125,.215,.35,.446,.526,.582],Xs=20,XM=256,Sa=new a0,_d=new et;let Bl=null,Vl=0,kl=0,Gl=!1;const qM=new F;class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=qM}=r;Bl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,Vl,kl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:lr,format:hi,colorSpace:ea,depthBuffer:!1},s=yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YM(r)),this._blurMaterial=ZM(r,e,t)}return s}_compileMaterial(e){const t=new Jn(new Rn,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s,r){const l=new $n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_d),h.toneMapping=ws,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new io,new Hh({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(_d),p=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):T===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const A=this._cubeSize;Rr(s,T*A,M>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jr||e.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),M=4*this._cubeSize;this._ggxMaterial=$M(this._lodMax,y,M)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=.05+c*.95,d=h*f,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-vs?n-m+vs:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Rr(r,x,p,3*g,2*g),s.setRenderTarget(r),s.render(o,Sa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Rr(e,x,p,3*g,2*g),s.setRenderTarget(e),s.render(o,Sa)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xs-1),g=r/m,x=isFinite(r)?1+Math.floor(u*g):Xs;x>Xs&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xs}`);const p=[];let y=0;for(let w=0;w<Xs;++w){const L=w/g,b=Math.exp(-L*L/2);p.push(b),w===0?y+=b:w<x&&(y+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const T=this._sizeLods[s],A=3*T*(s>M-vs?s-M+vs:0),E=4*(this._cubeSize-T);Rr(t,A,E,3*T,2*T),l.setRenderTarget(t),l.render(h,Sa)}}function YM(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+gd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-vs?l=gd[a-i+vs-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,x=2,p=1,y=new Float32Array(g*m*d),M=new Float32Array(x*m*d),T=new Float32Array(p*m*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,L=E>2?0:-1,b=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(b,g*m*E),M.set(f,x*m*E);const v=[E,E,E,E,E,E];T.set(v,p*m*E)}const A=new Rn;A.setAttribute("position",new di(y,g)),A.setAttribute("uv",new di(M,x)),A.setAttribute("faceIndex",new di(T,p)),n.push(new Jn(A,null)),s>vs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function yd(i,e,t){const n=new Cs(i,e,t);return n.texture.mapping=$c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $M(i,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ZM(i,e,t){const n=new Float32Array(Xs),s=new F(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Sd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Md(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wu||l===Au,u=l===Jr||l===Qr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vd(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new vd(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function KM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ja("WebGLRenderer: "+n+" extension not supported."),s}}}function JM(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let M=0,T=y.length;M<T;M+=3){const A=y[M+0],E=y[M+1],w=y[M+2];f.push(A,E,E,w,w,A)}}else if(m!==void 0){const y=m.array;g=m.version;for(let M=0,T=y.length/3-1;M<T;M+=3){const A=M+0,E=M+1,w=M+2;f.push(A,E,E,w,w,A)}}else return;const x=new(Vm(f)?Km:jm)(f,1);x.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,x)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function QM(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];t.update(x,n,1)}function h(f,d,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tT(i,e,t){const n=new WeakMap,s=new At;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let A=o.attributes.position.count*T,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*E*4*h),L=new Xm(w,A,E,h);L.type=Yi,L.needsUpdate=!0;const b=T*4;for(let N=0;N<h;N++){const O=p[N],B=y[N],V=M[N],W=A*E*4*N;for(let Y=0;Y<O.count;Y++){const K=Y*b;m===!0&&(s.fromBufferAttribute(O,Y),w[W+K+0]=s.x,w[W+K+1]=s.y,w[W+K+2]=s.z,w[W+K+3]=0),g===!0&&(s.fromBufferAttribute(B,Y),w[W+K+4]=s.x,w[W+K+5]=s.y,w[W+K+6]=s.z,w[W+K+7]=0),x===!0&&(s.fromBufferAttribute(V,Y),w[W+K+8]=s.x,w[W+K+9]=s.y,w[W+K+10]=s.z,w[W+K+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new je(A,E)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nT(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const c0=new mi,Td=new s0(1,1),l0=new Xm,u0=new Sv,h0=new e0,bd=[],Ed=[],wd=new Float32Array(16),Ad=new Float32Array(9),Cd=new Float32Array(4);function la(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jc(i,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function rT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function aT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function oT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Cd.set(n),i.uniformMatrix2fv(this.addr,!1,Cd),$t(t,n)}}function cT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),$t(t,n)}}function lT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),$t(t,n)}}function uT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function fT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function dT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function pT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function xT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function gT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function _T(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Td.compareFunction=Bm,r=Td):r=c0,t.setTexture2D(e||r,s)}function vT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||u0,s)}function yT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||h0,s)}function ST(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||l0,s)}function MT(i){switch(i){case 5126:return iT;case 35664:return sT;case 35665:return rT;case 35666:return aT;case 35674:return oT;case 35675:return cT;case 35676:return lT;case 5124:case 35670:return uT;case 35667:case 35671:return hT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return xT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function TT(i,e){i.uniform1fv(this.addr,e)}function bT(i,e){const t=la(e,this.size,2);i.uniform2fv(this.addr,t)}function ET(i,e){const t=la(e,this.size,3);i.uniform3fv(this.addr,t)}function wT(i,e){const t=la(e,this.size,4);i.uniform4fv(this.addr,t)}function AT(i,e){const t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function CT(i,e){const t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function RT(i,e){const t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function NT(i,e){i.uniform1iv(this.addr,e)}function PT(i,e){i.uniform2iv(this.addr,e)}function LT(i,e){i.uniform3iv(this.addr,e)}function DT(i,e){i.uniform4iv(this.addr,e)}function IT(i,e){i.uniform1uiv(this.addr,e)}function UT(i,e){i.uniform2uiv(this.addr,e)}function FT(i,e){i.uniform3uiv(this.addr,e)}function OT(i,e){i.uniform4uiv(this.addr,e)}function zT(i,e,t){const n=this.cache,s=e.length,r=Jc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||c0,r[a])}function BT(i,e,t){const n=this.cache,s=e.length,r=Jc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||u0,r[a])}function VT(i,e,t){const n=this.cache,s=e.length,r=Jc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||h0,r[a])}function kT(i,e,t){const n=this.cache,s=e.length,r=Jc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||l0,r[a])}function GT(i){switch(i){case 5126:return TT;case 35664:return bT;case 35665:return ET;case 35666:return wT;case 35674:return AT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return NT;case 35667:case 35671:return PT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return IT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class HT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}}class WT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Rd(i,e){i.seq.push(e),i.map[e.id]=e}function qT(i,e,t){const n=i.name,s=n.length;for(Hl.lastIndex=0;;){const r=Hl.exec(n),a=Hl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rd(t,c===void 0?new HT(o,i,e):new WT(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new XT(o),Rd(t,h)),t=h}}}class dc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);qT(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Nd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const YT=37297;let $T=0;function ZT(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pd=new Qe;function jT(i){ht._getMatrix(Pd,ht.workingColorSpace,i);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case yc:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ld(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ZT(i.getShaderSource(e),o)}else return r}function KT(i,e){const t=jT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JT(i,e){let t;switch(e){case D_:t="Linear";break;case I_:t="Reinhard";break;case U_:t="Cineon";break;case F_:t="ACESFilmic";break;case z_:t="AgX";break;case B_:t="Neutral";break;case O_:t="Custom";break;default:He("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new F;function QT(){ht.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function t1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function La(i){return i!==""}function Dd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(i1,r1)}const s1=new Map;function r1(i,e){let t=Ze[e];if(t===void 0){const n=s1.get(e);if(n!==void 0)t=Ze[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(a1,o1)}function o1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function l1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function h1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nm:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case L_:e="ENVMAP_BLENDING_ADD";break}return e}function f1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d1(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=c1(t),c=l1(t),u=u1(t),h=h1(t),f=f1(t),d=e1(t),m=t1(r),g=s.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(La).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(La).join(`
`),p.length>0&&(p+=`
`)):(x=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ws?JT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,KT("linearToOutputTexel",t.outputColorSpace),QT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=ch(a),a=Dd(a,t),a=Id(a,t),o=ch(o),o=Dd(o,t),o=Id(o,t),a=Ud(a),o=Ud(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+x+a,T=y+p+o,A=Nd(s,s.VERTEX_SHADER,M),E=Nd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,A),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(N){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(E)||"",W=O.trim(),Y=B.trim(),K=V.trim();let X=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,E);else{const re=Ld(s,A,"vertex"),Se=Ld(s,E,"fragment");Ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+re+`
`+Se)}else W!==""?He("WebGLProgram: Program Info Log:",W):(Y===""||K==="")&&(ne=!1);ne&&(N.diagnostics={runnable:X,programLog:W,vertexShader:{log:Y,prefix:x},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(E),L=new dc(s,g),b=n1(s,g)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,YT)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}}function g1(i,e,t,n,s,r,a){const o=new $m,l=new m1,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,v,N,O,B){const V=O.fog,W=B.geometry,Y=b.isMeshStandardMaterial?O.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),X=K&&K.mapping===$c?K.image.height:null,ne=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&He("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=re!==void 0?re.length:0;let Ie=0;W.morphAttributes.position!==void 0&&(Ie=1),W.morphAttributes.normal!==void 0&&(Ie=2),W.morphAttributes.color!==void 0&&(Ie=3);let Ke,lt,at,Z;if(ne){const _t=yn[ne];Ke=_t.vertexShader,lt=_t.fragmentShader}else Ke=b.vertexShader,lt=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),Z=l.getFragmentShaderID(b);const Q=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),We=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,tt=!!b.map,Ht=!!b.matcap,Je=!!K,te=!!b.aoMap,R=!!b.lightMap,fe=!!b.bumpMap,Ne=!!b.normalMap,$e=!!b.displacementMap,me=!!b.emissiveMap,ot=!!b.metalnessMap,we=!!b.roughnessMap,Me=b.anisotropy>0,C=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,$=b.sheen>0,ee=b.transmission>0,q=Me&&!!b.anisotropyMap,Re=C&&!!b.clearcoatMap,de=C&&!!b.clearcoatNormalMap,Le=C&&!!b.clearcoatRoughnessMap,Ae=z&&!!b.iridescenceMap,ie=z&&!!b.iridescenceThicknessMap,ce=$&&!!b.sheenColorMap,Ve=$&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,_e=!!b.specularColorMap,Ge=!!b.specularIntensityMap,P=ee&&!!b.transmissionMap,pe=ee&&!!b.thicknessMap,le=!!b.gradientMap,ue=!!b.alphaMap,se=b.alphaTest>0,j=!!b.alphaHash,Te=!!b.extensions;let Xe=ws;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const Et={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:lt,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ea,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:Ht,envMap:Je,envMapMode:Je&&K.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:R,bumpMap:fe,normalMap:Ne,displacementMap:f&&$e,emissiveMap:me,normalMapObjectSpace:Ne&&b.normalMapType===W_,normalMapTangentSpace:Ne&&b.normalMapType===H_,metalnessMap:ot,roughnessMap:we,anisotropy:Me,anisotropyMap:q,clearcoat:C,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:Le,dispersion:_,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:ce,sheenRoughnessMap:Ve,specularMap:Ue,specularColorMap:_e,specularIntensityMap:Ge,transmission:ee,transmissionMap:P,thicknessMap:pe,gradientMap:le,opaque:b.transparent===!1&&b.blending===Gr&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:se,alphaHash:j,combine:b.combine,mapUv:tt&&g(b.map.channel),aoMapUv:te&&g(b.aoMap.channel),lightMapUv:R&&g(b.lightMap.channel),bumpMapUv:fe&&g(b.bumpMap.channel),normalMapUv:Ne&&g(b.normalMap.channel),displacementMapUv:$e&&g(b.displacementMap.channel),emissiveMapUv:me&&g(b.emissiveMap.channel),metalnessMapUv:ot&&g(b.metalnessMap.channel),roughnessMapUv:we&&g(b.roughnessMap.channel),anisotropyMapUv:q&&g(b.anisotropyMap.channel),clearcoatMapUv:Re&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(b.sheenRoughnessMap.channel),specularMapUv:Ue&&g(b.specularMap.channel),specularColorMapUv:_e&&g(b.specularColorMap.channel),specularIntensityMapUv:Ge&&g(b.specularIntensityMap.channel),transmissionMapUv:P&&g(b.transmissionMap.channel),thicknessMapUv:pe&&g(b.thicknessMap.channel),alphaMapUv:ue&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ne||Me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(tt||ue),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xi,flipSided:b.side===En,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)v.push(N),v.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(y(v,b),M(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function y(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function M(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function T(b){const v=m[b.type];let N;if(v){const O=yn[v];N=Zc.clone(O.uniforms)}else N=b.uniforms;return N}function A(b,v){let N;for(let O=0,B=u.length;O<B;O++){const V=u[O];if(V.cacheKey===v){N=V,++N.usedTimes;break}}return N===void 0&&(N=new d1(i,v,b,r),u.push(N)),N}function E(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:L}}function _1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,d,m,g,x){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:x},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=x),e++,p}function o(h,f,d,m,g,x){const p=a(h,f,d,m,g,x);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,m,g,x){const p=a(h,f,d,m,g,x);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||v1),n.length>1&&n.sort(f||Od),s.length>1&&s.sort(f||Od)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function y1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new zd,i.set(n,[a])):s>=r.length?(a=new zd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function S1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new et};break;case"SpotLight":t={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function M1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let T1=0;function b1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E1(i){const e=new S1,t=M1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new Kt,a=new Kt;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,g=0,x=0,p=0,y=0,M=0,T=0,A=0,E=0,w=0;c.sort(b1);for(let b=0,v=c.length;b<v;b++){const N=c[b],O=N.color,B=N.intensity,V=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*B,h+=O.g*B,f+=O.b*B;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],B);w++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=N.shadow.matrix,y++}n.directional[d]=Y,d++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(B),Y.distance=V,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[g]=Y;const K=N.shadow;if(N.map&&(n.spotLightMap[A]=N.map,A++,K.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[g]=K.matrix,N.castShadow){const X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=W,T++}g++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(O).multiplyScalar(B),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=Y,x++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const K=N.shadow,X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=N.shadow.matrix,M++}n.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(B),Y.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=Y,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==x||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==T||L.numSpotMaps!==A||L.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,L.directionalLength=d,L.pointLength=m,L.spotLength=g,L.rectAreaLength=x,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=T,L.numSpotMaps=A,L.numLightProbes=w,n.version=T1++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0;const x=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),h++}else if(M.isSpotLight){const T=n.spot[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),d++}else if(M.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),a.identity(),r.copy(M.matrixWorld),r.premultiply(x),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(x),f++}else if(M.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function Bd(i){const e=new E1(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function w1(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Bd(i),e.set(s,[o])):r>=a.length?(o=new Bd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const A1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R1(i,e,t){let n=new n0;const s=new je,r=new je,a=new At,o=new Yv({depthPacking:G_}),l=new $v,c={},u=t.maxTextureSize,h={[As]:En,[En]:As,[Xi]:Xi},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:A1,fragmentShader:C1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Rn;m.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jn(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let p=this.type;this.render=function(E,w,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Hi&&this.type===Hi,V=p===Hi&&this.type!==Hi;for(let W=0,Y=E.length;W<Y;W++){const K=E[W],X=K.shadow;if(X===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ne=X.getFrameExtents();if(s.multiply(ne),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,X.mapSize.y=r.y)),X.map===null||B===!0||V===!0){const Se=this.type!==Hi?{minFilter:Bn,magFilter:Bn}:{};X.map!==null&&X.map.dispose(),X.map=new Cs(s.x,s.y,Se),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const re=X.getViewportCount();for(let Se=0;Se<re;Se++){const Ie=X.getViewport(Se);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a),X.updateMatrices(K,Se),n=X.getFrustum(),T(w,L,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Hi&&y(X,L),X.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(b,v,N)};function y(E,w){const L=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cs(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,L,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,L,d,g,null)}function M(E,w,L,b){let v=null;const N=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)v=N;else if(v=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=v.uuid,B=w.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let W=V[B];W===void 0&&(W=v.clone(),V[B]=W,w.addEventListener("dispose",A)),v=W}if(v.visible=w.visible,v.wireframe=w.wireframe,b===Hi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=L}return v}function T(E,w,L,b,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const B=e.update(E),V=E.material;if(Array.isArray(V)){const W=B.groups;for(let Y=0,K=W.length;Y<K;Y++){const X=W[Y],ne=V[X.materialIndex];if(ne&&ne.visible){const re=M(E,ne,b,v);E.onBeforeShadow(i,E,w,L,B,re,X),i.renderBufferDirect(L,null,B,re,E,X),E.onAfterShadow(i,E,w,L,B,re,X)}}}else if(V.visible){const W=M(E,V,b,v);E.onBeforeShadow(i,E,w,L,B,W,null),i.renderBufferDirect(L,null,B,W,E,null),E.onAfterShadow(i,E,w,L,B,W,null)}}const O=E.children;for(let B=0,V=O.length;B<V;B++)T(O[B],w,L,b,v)}function A(E){E.target.removeEventListener("dispose",A);for(const L in c){const b=c[L],v=E.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const N1={[vu]:yu,[Su]:bu,[Mu]:Eu,[Kr]:Tu,[yu]:vu,[bu]:Su,[Eu]:Mu,[Tu]:Kr};function P1(i,e){function t(){let P=!1;const pe=new At;let le=null;const ue=new At(0,0,0,0);return{setMask:function(se){le!==se&&!P&&(i.colorMask(se,se,se,se),le=se)},setLocked:function(se){P=se},setClear:function(se,j,Te,Xe,Et){Et===!0&&(se*=Xe,j*=Xe,Te*=Xe),pe.set(se,j,Te,Xe),ue.equals(pe)===!1&&(i.clearColor(se,j,Te,Xe),ue.copy(pe))},reset:function(){P=!1,le=null,ue.set(-1,0,0,0)}}}function n(){let P=!1,pe=!1,le=null,ue=null,se=null;return{setReversed:function(j){if(pe!==j){const Te=e.get("EXT_clip_control");j?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),pe=j;const Xe=se;se=null,this.setClear(Xe)}},getReversed:function(){return pe},setTest:function(j){j?Q(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(j){le!==j&&!P&&(i.depthMask(j),le=j)},setFunc:function(j){if(pe&&(j=N1[j]),ue!==j){switch(j){case vu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case Su:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Mu:i.depthFunc(i.EQUAL);break;case Tu:i.depthFunc(i.GEQUAL);break;case bu:i.depthFunc(i.GREATER);break;case Eu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=j}},setLocked:function(j){P=j},setClear:function(j){se!==j&&(pe&&(j=1-j),i.clearDepth(j),se=j)},reset:function(){P=!1,le=null,ue=null,se=null,pe=!1}}}function s(){let P=!1,pe=null,le=null,ue=null,se=null,j=null,Te=null,Xe=null,Et=null;return{setTest:function(_t){P||(_t?Q(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(_t){pe!==_t&&!P&&(i.stencilMask(_t),pe=_t)},setFunc:function(_t,xi,ei){(le!==_t||ue!==xi||se!==ei)&&(i.stencilFunc(_t,xi,ei),le=_t,ue=xi,se=ei)},setOp:function(_t,xi,ei){(j!==_t||Te!==xi||Xe!==ei)&&(i.stencilOp(_t,xi,ei),j=_t,Te=xi,Xe=ei)},setLocked:function(_t){P=_t},setClear:function(_t){Et!==_t&&(i.clearStencil(_t),Et=_t)},reset:function(){P=!1,pe=null,le=null,ue=null,se=null,j=null,Te=null,Xe=null,Et=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,y=null,M=null,T=null,A=null,E=null,w=new et(0,0,0),L=0,b=!1,v=null,N=null,O=null,B=null,V=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=K>=2);let ne=null,re={};const Se=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Ke=new At().fromArray(Se),lt=new At().fromArray(Ie);function at(P,pe,le,ue){const se=new Uint8Array(4),j=i.createTexture();i.bindTexture(P,j),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<le;Te++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(pe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return j}const Z={};Z[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Kr),fe(!1),Ne(Vf),Q(i.CULL_FACE),te(Ai);function Q(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function ve(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function We(P,pe){return h[P]!==pe?(i.bindFramebuffer(P,pe),h[P]=pe,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ce(P,pe){let le=d,ue=!1;if(P){le=f.get(pe),le===void 0&&(le=[],f.set(pe,le));const se=P.textures;if(le.length!==se.length||le[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Te=se.length;j<Te;j++)le[j]=i.COLOR_ATTACHMENT0+j;le.length=se.length,ue=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ue=!0);ue&&i.drawBuffers(le)}function tt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Ht={[Ws]:i.FUNC_ADD,[p_]:i.FUNC_SUBTRACT,[m_]:i.FUNC_REVERSE_SUBTRACT};Ht[x_]=i.MIN,Ht[g_]=i.MAX;const Je={[__]:i.ZERO,[v_]:i.ONE,[y_]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[w_]:i.SRC_ALPHA_SATURATE,[b_]:i.DST_COLOR,[M_]:i.DST_ALPHA,[S_]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[E_]:i.ONE_MINUS_DST_COLOR,[T_]:i.ONE_MINUS_DST_ALPHA,[A_]:i.CONSTANT_COLOR,[C_]:i.ONE_MINUS_CONSTANT_COLOR,[R_]:i.CONSTANT_ALPHA,[N_]:i.ONE_MINUS_CONSTANT_ALPHA};function te(P,pe,le,ue,se,j,Te,Xe,Et,_t){if(P===Ai){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),P!==d_){if(P!==x||_t!==b){if((p!==Ws||T!==Ws)&&(i.blendEquation(i.FUNC_ADD),p=Ws,T=Ws),_t)switch(P){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kf:i.blendFunc(i.ONE,i.ONE);break;case Gf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",P);break}else switch(P){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gf:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",P);break}y=null,M=null,A=null,E=null,w.set(0,0,0),L=0,x=P,b=_t}return}se=se||pe,j=j||le,Te=Te||ue,(pe!==p||se!==T)&&(i.blendEquationSeparate(Ht[pe],Ht[se]),p=pe,T=se),(le!==y||ue!==M||j!==A||Te!==E)&&(i.blendFuncSeparate(Je[le],Je[ue],Je[j],Je[Te]),y=le,M=ue,A=j,E=Te),(Xe.equals(w)===!1||Et!==L)&&(i.blendColor(Xe.r,Xe.g,Xe.b,Et),w.copy(Xe),L=Et),x=P,b=!1}function R(P,pe){P.side===Xi?ve(i.CULL_FACE):Q(i.CULL_FACE);let le=P.side===En;pe&&(le=!le),fe(le),P.blending===Gr&&P.transparent===!1?te(Ai):te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const ue=P.stencilWrite;o.setTest(ue),ue&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(P){v!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),v=P)}function Ne(P){P!==u_?(Q(i.CULL_FACE),P!==N&&(P===Vf?i.cullFace(i.BACK):P===h_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),N=P}function $e(P){P!==O&&(Y&&i.lineWidth(P),O=P)}function me(P,pe,le){P?(Q(i.POLYGON_OFFSET_FILL),(B!==pe||V!==le)&&(i.polygonOffset(pe,le),B=pe,V=le)):ve(i.POLYGON_OFFSET_FILL)}function ot(P){P?Q(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function we(P){P===void 0&&(P=i.TEXTURE0+W-1),ne!==P&&(i.activeTexture(P),ne=P)}function Me(P,pe,le){le===void 0&&(ne===null?le=i.TEXTURE0+W-1:le=ne);let ue=re[le];ue===void 0&&(ue={type:void 0,texture:void 0},re[le]=ue),(ue.type!==P||ue.texture!==pe)&&(ne!==le&&(i.activeTexture(le),ne=le),i.bindTexture(P,pe||Z[P]),ue.type=P,ue.texture=pe)}function C(){const P=re[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function $(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function ee(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function de(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Le(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Ae(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function ie(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ce(P){Ke.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function Ve(P){lt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function Ue(P,pe){let le=c.get(pe);le===void 0&&(le=new WeakMap,c.set(pe,le));let ue=le.get(P);ue===void 0&&(ue=i.getUniformBlockIndex(pe,P.name),le.set(P,ue))}function _e(P,pe){const ue=c.get(pe).get(P);l.get(pe)!==ue&&(i.uniformBlockBinding(pe,ue,P.__bindingPointIndex),l.set(pe,ue))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,re={},h={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,y=null,M=null,T=null,A=null,E=null,w=new et(0,0,0),L=0,b=!1,v=null,N=null,O=null,B=null,V=null,Ke.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ve,bindFramebuffer:We,drawBuffers:Ce,useProgram:tt,setBlending:te,setMaterial:R,setFlipSided:fe,setCullFace:Ne,setLineWidth:$e,setPolygonOffset:me,setScissorTest:ot,activeTexture:we,bindTexture:Me,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Ue,uniformBlockBinding:_e,texStorage2D:de,texStorage3D:Le,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:ce,viewport:Ve,reset:Ge}}function L1(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,_){return d?new OffscreenCanvas(C,_):Mc("canvas")}function g(C,_,z){let $=1;const ee=Me(C);if((ee.width>z||ee.height>z)&&($=z/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*ee.width),Re=Math.floor($*ee.height);h===void 0&&(h=m(q,Re));const de=_?m(q,Re):h;return de.width=q,de.height=Re,de.getContext("2d").drawImage(C,0,0,q,Re),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Re+")."),de}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,_,z,$,ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=_;if(_===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),_===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const Re=ee?yc:ht.getTransfer($);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=Re===yt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(C,_){let z;return C?_===null||_===nr||_===Za?z=i.DEPTH24_STENCIL8:_===Yi?z=i.DEPTH32F_STENCIL8:_===$a&&(z=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nr||_===Za?z=i.DEPTH_COMPONENT24:_===Yi?z=i.DEPTH_COMPONENT32F:_===$a&&(z=i.DEPTH_COMPONENT16),z}function A(C,_){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==Zn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function E(C){const _=C.target;_.removeEventListener("dispose",E),L(_),_.isVideoTexture&&u.delete(_)}function w(C){const _=C.target;_.removeEventListener("dispose",w),v(_)}function L(C){const _=n.get(C);if(_.__webglInit===void 0)return;const z=C.source,$=f.get(z);if($){const ee=$[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys($).length===0&&f.delete(z)}n.remove(C)}function b(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const z=C.source,$=f.get(z);delete $[_.__cacheKey],a.memory.textures--}function v(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let ee=0;ee<_.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=C.textures;for(let $=0,ee=z.length;$<ee;$++){const q=n.get(z[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(C)}let N=0;function O(){N=0}function B(){const C=N;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function V(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function W(C,_){const z=n.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const $=C.image;if($===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,C,_);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Y(C,_){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Z(z,C,_);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function K(C,_){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Z(z,C,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function X(C,_){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Q(z,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const ne={[Cu]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Ru]:i.MIRRORED_REPEAT},re={[Bn]:i.NEAREST,[V_]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[Ys]:i.LINEAR_MIPMAP_LINEAR},Se={[X_]:i.NEVER,[K_]:i.ALWAYS,[q_]:i.LESS,[Bm]:i.LEQUAL,[Y_]:i.EQUAL,[j_]:i.GEQUAL,[$_]:i.GREATER,[Z_]:i.NOTEQUAL};function Ie(C,_){if(_.type===Yi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zn||_.magFilter===pl||_.magFilter===xo||_.magFilter===Ys||_.minFilter===Zn||_.minFilter===pl||_.minFilter===xo||_.minFilter===Ys)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ne[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ne[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ne[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bn||_.minFilter!==xo&&_.minFilter!==Ys||_.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(C,_){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",E));const $=_.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const q=V(_);if(q!==C.__cacheKey){ee[q]===void 0&&(ee[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[q].usedTimes++;const Re=ee[C.__cacheKey];Re!==void 0&&(ee[C.__cacheKey].usedTimes--,Re.usedTimes===0&&b(_)),C.__cacheKey=q,C.__webglTexture=ee[q].texture}return z}function lt(C,_,z){return Math.floor(Math.floor(C/z)/_)}function at(C,_,z,$){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,$,_.data);else{q.sort((ie,ce)=>ie.start-ce.start);let Re=0;for(let ie=1;ie<q.length;ie++){const ce=q[Re],Ve=q[ie],Ue=ce.start+ce.count,_e=lt(Ve.start,_.width,4),Ge=lt(ce.start,_.width,4);Ve.start<=Ue+1&&_e===Ge&&lt(Ve.start+Ve.count-1,_.width,4)===_e?ce.count=Math.max(ce.count,Ve.start+Ve.count-ce.start):(++Re,q[Re]=Ve)}q.length=Re+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ie=0,ce=q.length;ie<ce;ie++){const Ve=q[ie],Ue=Math.floor(Ve.start/4),_e=Math.ceil(Ve.count/4),Ge=Ue%_.width,P=Math.floor(Ue/_.width),pe=_e,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ge,P,pe,le,z,$,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Z(C,_,z){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const ee=Ke(C,_),q=_.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+z);const Re=n.get(q);if(q.version!==Re.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const de=ht.getPrimaries(ht.workingColorSpace),Le=_.colorSpace===_s?null:ht.getPrimaries(_.colorSpace),Ae=_.colorSpace===_s||de===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=g(_.image,!1,s.maxTextureSize);ie=we(_,ie);const ce=r.convert(_.format,_.colorSpace),Ve=r.convert(_.type);let Ue=M(_.internalFormat,ce,Ve,_.colorSpace,_.isVideoTexture);Ie($,_);let _e;const Ge=_.mipmaps,P=_.isVideoTexture!==!0,pe=Re.__version===void 0||ee===!0,le=q.dataReady,ue=A(_,ie);if(_.isDepthTexture)Ue=T(_.format===Ka,_.type),pe&&(P?t.texStorage2D(i.TEXTURE_2D,1,Ue,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ce,Ve,null));else if(_.isDataTexture)if(Ge.length>0){P&&pe&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,Ge[0].width,Ge[0].height);for(let se=0,j=Ge.length;se<j;se++)_e=Ge[se],P?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,Ve,_e.data):t.texImage2D(i.TEXTURE_2D,se,Ue,_e.width,_e.height,0,ce,Ve,_e.data);_.generateMipmaps=!1}else P?(pe&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,ie.width,ie.height),le&&at(_,ie,ce,Ve)):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ce,Ve,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ue,Ge[0].width,Ge[0].height,ie.depth);for(let se=0,j=Ge.length;se<j;se++)if(_e=Ge[se],_.format!==hi)if(ce!==null)if(P){if(le)if(_.layerUpdates.size>0){const Te=xd(_e.width,_e.height,_.format,_.type);for(const Xe of _.layerUpdates){const Et=_e.data.subarray(Xe*Te/_e.data.BYTES_PER_ELEMENT,(Xe+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Xe,_e.width,_e.height,1,ce,Et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,ce,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ue,_e.width,_e.height,ie.depth,0,_e.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,ce,Ve,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ue,_e.width,_e.height,ie.depth,0,ce,Ve,_e.data)}else{P&&pe&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,Ge[0].width,Ge[0].height);for(let se=0,j=Ge.length;se<j;se++)_e=Ge[se],_.format!==hi?ce!==null?P?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ue,_e.width,_e.height,0,_e.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ce,Ve,_e.data):t.texImage2D(i.TEXTURE_2D,se,Ue,_e.width,_e.height,0,ce,Ve,_e.data)}else if(_.isDataArrayTexture)if(P){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ue,ie.width,ie.height,ie.depth),le)if(_.layerUpdates.size>0){const se=xd(ie.width,ie.height,_.format,_.type);for(const j of _.layerUpdates){const Te=ie.data.subarray(j*se/ie.data.BYTES_PER_ELEMENT,(j+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,ce,Ve,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ce,Ve,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,ce,Ve,ie.data);else if(_.isData3DTexture)P?(pe&&t.texStorage3D(i.TEXTURE_3D,ue,Ue,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ce,Ve,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,ce,Ve,ie.data);else if(_.isFramebufferTexture){if(pe)if(P)t.texStorage2D(i.TEXTURE_2D,ue,Ue,ie.width,ie.height);else{let se=ie.width,j=ie.height;for(let Te=0;Te<ue;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ue,se,j,0,ce,Ve,null),se>>=1,j>>=1}}else if(Ge.length>0){if(P&&pe){const se=Me(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ue,Ue,se.width,se.height)}for(let se=0,j=Ge.length;se<j;se++)_e=Ge[se],P?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ce,Ve,_e):t.texImage2D(i.TEXTURE_2D,se,Ue,ce,Ve,_e);_.generateMipmaps=!1}else if(P){if(pe){const se=Me(ie);t.texStorage2D(i.TEXTURE_2D,ue,Ue,se.width,se.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ve,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ce,Ve,ie);x(_)&&p($),Re.__version=q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Q(C,_,z){if(_.image.length!==6)return;const $=Ke(C,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const q=n.get(ee);if(ee.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const Re=ht.getPrimaries(ht.workingColorSpace),de=_.colorSpace===_s?null:ht.getPrimaries(_.colorSpace),Le=_.colorSpace===_s||Re===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let j=0;j<6;j++)!Ae&&!ie?ce[j]=g(_.image[j],!0,s.maxCubemapSize):ce[j]=ie?_.image[j].image:_.image[j],ce[j]=we(_,ce[j]);const Ve=ce[0],Ue=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),Ge=M(_.internalFormat,Ue,_e,_.colorSpace),P=_.isVideoTexture!==!0,pe=q.__version===void 0||$===!0,le=ee.dataReady;let ue=A(_,Ve);Ie(i.TEXTURE_CUBE_MAP,_);let se;if(Ae){P&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,Ve.width,Ve.height);for(let j=0;j<6;j++){se=ce[j].mipmaps;for(let Te=0;Te<se.length;Te++){const Xe=se[Te];_.format!==hi?Ue!==null?P?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te,0,0,Xe.width,Xe.height,Ue,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te,Ge,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te,0,0,Xe.width,Xe.height,Ue,_e,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te,Ge,Xe.width,Xe.height,0,Ue,_e,Xe.data)}}}else{if(se=_.mipmaps,P&&pe){se.length>0&&ue++;const j=Me(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(ie){P?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ce[j].width,ce[j].height,Ue,_e,ce[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,ce[j].width,ce[j].height,0,Ue,_e,ce[j].data);for(let Te=0;Te<se.length;Te++){const Et=se[Te].image[j].image;P?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te+1,0,0,Et.width,Et.height,Ue,_e,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te+1,Ge,Et.width,Et.height,0,Ue,_e,Et.data)}}else{P?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ue,_e,ce[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Ue,_e,ce[j]);for(let Te=0;Te<se.length;Te++){const Xe=se[Te];P?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te+1,0,0,Ue,_e,Xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Te+1,Ge,Ue,_e,Xe.image[j])}}}x(_)&&p(i.TEXTURE_CUBE_MAP),q.__version=ee.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ve(C,_,z,$,ee,q){const Re=r.convert(z.format,z.colorSpace),de=r.convert(z.type),Le=M(z.internalFormat,Re,de,z.colorSpace),Ae=n.get(_),ie=n.get(z);if(ie.__renderTarget=_,!Ae.__hasExternalTextures){const ce=Math.max(1,_.width>>q),Ve=Math.max(1,_.height>>q);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Le,ce,Ve,_.depth,0,Re,de,null):t.texImage2D(ee,q,Le,ce,Ve,0,Re,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,ie.__webglTexture,0,$e(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(C,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const $=_.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=T(_.stencilBuffer,ee),Re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=$e(_);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,q,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,C)}else{const $=_.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],Re=r.convert(q.format,q.colorSpace),de=r.convert(q.type),Le=M(q.internalFormat,Re,de,q.colorSpace),Ae=$e(_);z&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Le,_.width,_.height):me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const ee=$.__webglTexture,q=$e(_);if(_.depthTexture.format===ja)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ka)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function tt(C){const _=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=$}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Ce(_.__webglFramebuffer[0],C):Ce(_.__webglFramebuffer,C)}else if(z){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),We(_.__webglDepthbuffer[$],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),We(_.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,_,z){const $=n.get(C);_!==void 0&&ve($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&tt(C)}function Je(C){const _=C.texture,z=n.get(C),$=n.get(_);C.addEventListener("dispose",w);const ee=C.textures,q=C.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Le=0;Le<_.mipmaps.length;Le++)z.__webglFramebuffer[de][Le]=i.createFramebuffer()}else z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let de=0,Le=ee.length;de<Le;de++){const Ae=n.get(ee[de]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&me(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const Le=ee[de];z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Ae=r.convert(Le.format,Le.colorSpace),ie=r.convert(Le.type),ce=M(Le.internalFormat,Ae,ie,Le.colorSpace,C.isXRRenderTarget===!0),Ve=$e(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),We(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ve(z.__webglFramebuffer[de][Le],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le);else ve(z.__webglFramebuffer[de],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,Le=ee.length;de<Le;de++){const Ae=ee[de],ie=n.get(Ae);let ce=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ie.__webglTexture),Ie(ce,Ae),ve(z.__webglFramebuffer,C,Ae,i.COLOR_ATTACHMENT0+de,ce,0),x(Ae)&&p(ce)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Ie(de,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ve(z.__webglFramebuffer[Le],C,_,i.COLOR_ATTACHMENT0,de,Le);else ve(z.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,de,0);x(_)&&p(de),t.unbindTexture()}C.depthBuffer&&tt(C)}function te(C){const _=C.textures;for(let z=0,$=_.length;z<$;z++){const ee=_[z];if(x(ee)){const q=y(C),Re=n.get(ee).__webglTexture;t.bindTexture(q,Re),p(q),t.unbindTexture()}}}const R=[],fe=[];function Ne(C){if(C.samples>0){if(me(C)===!1){const _=C.textures,z=C.width,$=C.height;let ee=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(C),de=_.length>1;if(de)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Le=C.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ie=n.get(_[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,ee,i.NEAREST),l===!0&&(R.length=0,fe.length=0,R.push(i.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(q),fe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ie=n.get(_[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $e(C){return Math.min(s.maxSamples,C.samples)}function me(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ot(C){const _=a.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function we(C,_){const z=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ea&&z!==_s&&(ht.getTransfer(z)===yt?($!==hi||ee!==ts)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",z)),_}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me}function D1(i,e){function t(n,s=_s){let r;const a=ht.getTransfer(s);if(n===ts)return i.UNSIGNED_BYTE;if(n===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Im)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Um)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lm)return i.BYTE;if(n===Dm)return i.SHORT;if(n===$a)return i.UNSIGNED_SHORT;if(n===Ih)return i.INT;if(n===nr)return i.UNSIGNED_INT;if(n===Yi)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Fm)return i.ALPHA;if(n===Om)return i.RGB;if(n===hi)return i.RGBA;if(n===ja)return i.DEPTH_COMPONENT;if(n===Ka)return i.DEPTH_STENCIL;if(n===zm)return i.RED;if(n===Oh)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===Bh)return i.RG_INTEGER;if(n===Vh)return i.RGBA_INTEGER;if(n===cc||n===lc||n===uc||n===hc)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nu||n===Pu||n===Lu||n===Du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Iu||n===Uu||n===Fu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Iu||n===Uu)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===zu||n===Bu||n===Vu||n===ku||n===Gu||n===Hu||n===Wu||n===Xu||n===qu||n===Yu||n===$u||n===Zu||n===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ou)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ku)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zu)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ju)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ku||n===Ju||n===Qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ku)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===th||n===nh||n===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new r0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:I1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new jc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends ur{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const g=typeof XRWebGLBinding<"u",x=new F1,p={},y=t.getContextAttributes();let M=null,T=null;const A=[],E=[],w=new je;let L=null;const b=new $n;b.viewport=new At;const v=new $n;v.viewport=new At;const N=[b,v],O=new jv;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Ul,A[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Ul,A[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Ul,A[Z]=Q),Q.getHandSpace()};function W(Z){const Q=E.indexOf(Z.inputSource);if(Q===-1)return;const ve=A[Q];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<A.length;Z++){const Q=E[Z];Q!==null&&(E[Z]=null,A[Z].disconnect(Q))}B=null,V=null,x.reset();for(const Z in p)delete p[Z];e.setRenderTarget(M),d=null,f=null,h=null,s=null,T=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,We=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?Ka:ja,We=y.stencil?Za:nr);const tt={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Cs(f.textureWidth,f.textureHeight,{format:hi,type:ts,depthTexture:new s0(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Cs(d.framebufferWidth,d.framebufferHeight,{format:hi,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Z){for(let Q=0;Q<Z.removed.length;Q++){const ve=Z.removed[Q],We=E.indexOf(ve);We>=0&&(E[We]=null,A[We].disconnect(ve))}for(let Q=0;Q<Z.added.length;Q++){const ve=Z.added[Q];let We=E.indexOf(ve);if(We===-1){for(let tt=0;tt<A.length;tt++)if(tt>=E.length){E.push(ve),We=tt;break}else if(E[tt]===null){E[tt]=ve,We=tt;break}if(We===-1)break}const Ce=A[We];Ce&&Ce.connect(ve)}}const X=new F,ne=new F;function re(Z,Q,ve){X.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const We=X.distanceTo(ne),Ce=Q.projectionMatrix.elements,tt=ve.projectionMatrix.elements,Ht=Ce[14]/(Ce[10]-1),Je=Ce[14]/(Ce[10]+1),te=(Ce[9]+1)/Ce[5],R=(Ce[9]-1)/Ce[5],fe=(Ce[8]-1)/Ce[0],Ne=(tt[8]+1)/tt[0],$e=Ht*fe,me=Ht*Ne,ot=We/(-fe+Ne),we=ot*-fe;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(ot),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=Ht+ot,C=Je+ot,_=$e-we,z=me+(We-we),$=te*Je/C*Me,ee=R*Je/C*Me;Z.projectionMatrix.makePerspective(_,z,$,ee,Me,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,ve=Z.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),O.near=v.near=b.near=Q,O.far=v.far=b.far=ve,(B!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,V=O.far),O.layers.mask=Z.layers.mask|6,b.layers.mask=O.layers.mask&3,v.layers.mask=O.layers.mask&5;const We=Z.parent,Ce=O.cameras;Se(O,We);for(let tt=0;tt<Ce.length;tt++)Se(Ce[tt],We);Ce.length===2?re(O,b,v):O.projectionMatrix.copy(b.projectionMatrix),Ie(Z,O,We)};function Ie(Z,Q,ve){ve===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Ke=null;function lt(Z,Q){if(u=Q.getViewerPose(c||a),m=Q,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let We=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,We=!0);for(let Je=0;Je<ve.length;Je++){const te=ve[Je];let R=null;if(d!==null)R=d.getViewport(te);else{const Ne=h.getViewSubImage(f,te);R=Ne.viewport,Je===0&&(e.setRenderTargetTextures(T,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(T))}let fe=N[Je];fe===void 0&&(fe=new $n,fe.layers.enable(Je),fe.viewport=new At,N[Je]=fe),fe.matrix.fromArray(te.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(te.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(R.x,R.y,R.width,R.height),Je===0&&(O.matrix.copy(fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),We===!0&&O.cameras.push(fe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Je=h.getDepthInformation(ve[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,s.renderState)}if(Ce&&Ce.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Je=0;Je<ve.length;Je++){const te=ve[Je].camera;if(te){let R=p[te];R||(R=new r0,p[te]=R);const fe=h.getCameraImage(te);R.sourceTexture=fe}}}}for(let ve=0;ve<A.length;ve++){const We=E[ve],Ce=A[ve];We!==null&&Ce!==void 0&&Ce.update(We,Q,c||a)}Ke&&Ke(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const at=new o0;at.setAnimationLoop(lt),this.setAnimationLoop=function(Z){Ke=Z},this.dispose=function(){}}}const Vs=new ir,z1=new Kt;function B1(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Jm(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),h(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,T)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,M):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===En&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===En&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,T=y.envMapRotation;M&&(x.envMap.value=M,Vs.copy(T),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),x.envMapRotation.value.setFromMatrix4(z1.makeRotationFromEuler(Vs)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,M){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=M*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V1(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const T=M.program;n.uniformBlockBinding(y,T)}function c(y,M){let T=s[y.id];T===void 0&&(m(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",x));const A=M.program;n.updateUBOMapping(y,A);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const M=h();y.__bindingPointIndex=M;const T=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],T=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=T.length;E<w;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let b=0,v=L.length;b<v;b++){const N=L[b];if(d(N,E,b,A)===!0){const O=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let W=0;W<B.length;W++){const Y=B[W],K=g(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+V,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):(Y.toArray(N.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,T,A){const E=y.value,w=M+"_"+T;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const L=A[w];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[w]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(y){const M=y.uniforms;let T=0;const A=16;for(let w=0,L=M.length;w<L;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,N=b.length;v<N;v++){const O=b[v],B=Array.isArray(O.value)?O.value:[O.value];for(let V=0,W=B.length;V<W;V++){const Y=B[V],K=g(Y),X=T%A,ne=X%K.boundary,re=X+ne;T+=ne,re!==0&&A-re<K.storage&&(T+=A-re),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=K.storage}}}const E=T%A;return E>0&&(T+=A-E),y.__size=T,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){const M=y.target;M.removeEventListener("dispose",x);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const k1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ki=null;function G1(){return ki===null&&(ki=new Vv(k1,32,32,zh,lr),ki.minFilter=Zn,ki.magFilter=Zn,ki.wrapS=qi,ki.wrapT=qi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class H1{constructor(e={}){const{canvas:t=J_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Set([Vh,Bh,Oh]),g=new Set([ts,nr,$a,Za,Uh,Fh]),x=new Uint32Array(4),p=new Int32Array(4);let y=null,M=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ws,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=Yn;let L=0,b=0,v=null,N=-1,O=null;const B=new At,V=new At;let W=null;const Y=new et(0);let K=0,X=t.width,ne=t.height,re=1,Se=null,Ie=null;const Ke=new At(0,0,X,ne),lt=new At(0,0,X,ne);let at=!1;const Z=new n0;let Q=!1,ve=!1;const We=new Kt,Ce=new F,tt=new At,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function te(){return v===null?re:1}let R=n;function fe(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Te,!1),R===null){const I="webgl2";if(R=fe(I,S),R===null)throw fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let Ne,$e,me,ot,we,Me,C,_,z,$,ee,q,Re,de,Le,Ae,ie,ce,Ve,Ue,_e,Ge,P,pe;function le(){Ne=new KM(R),Ne.init(),Ge=new D1(R,Ne),$e=new GM(R,Ne,e,Ge),me=new P1(R,Ne),$e.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),ot=new eT(R),we=new _1,Me=new L1(R,Ne,me,we,$e,Ge,ot),C=new WM(E),_=new jM(E),z=new sy(R),P=new VM(R,z),$=new JM(R,z,ot,P),ee=new nT(R,$,z,ot),Ve=new tT(R,$e,Me),Ae=new HM(we),q=new g1(E,C,_,Ne,$e,P,Ae),Re=new B1(E,we),de=new y1,Le=new w1(Ne),ce=new BM(E,C,_,me,ee,d,l),ie=new R1(E,ee,$e),pe=new V1(R,ot,$e,me),Ue=new kM(R,Ne,ot),_e=new QM(R,Ne,ot),ot.programs=q.programs,E.capabilities=$e,E.extensions=Ne,E.properties=we,E.renderLists=de,E.shadowMap=ie,E.state=me,E.info=ot}le();const ue=new O1(E,R);this.xr=ue,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=Ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(X,ne,!1))},this.getSize=function(S){return S.set(X,ne)},this.setSize=function(S,I,k=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,ne=I,t.width=Math.floor(S*re),t.height=Math.floor(I*re),k===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*re,ne*re).floor()},this.setDrawingBufferSize=function(S,I,k){X=S,ne=I,re=k,t.width=Math.floor(S*k),t.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(Ke)},this.setViewport=function(S,I,k,G){S.isVector4?Ke.set(S.x,S.y,S.z,S.w):Ke.set(S,I,k,G),me.viewport(B.copy(Ke).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(lt)},this.setScissor=function(S,I,k,G){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,I,k,G),me.scissor(V.copy(lt).multiplyScalar(re).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(S){me.setScissorTest(at=S)},this.setOpaqueSort=function(S){Se=S},this.setTransparentSort=function(S){Ie=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,k=!0){let G=0;if(S){let U=!1;if(v!==null){const oe=v.texture.format;U=m.has(oe)}if(U){const oe=v.texture.type,xe=g.has(oe),be=ce.getClearColor(),ye=ce.getClearAlpha(),Be=be.r,ke=be.g,Pe=be.b;xe?(x[0]=Be,x[1]=ke,x[2]=Pe,x[3]=ye,R.clearBufferuiv(R.COLOR,0,x)):(p[0]=Be,p[1]=ke,p[2]=Pe,p[3]=ye,R.clearBufferiv(R.COLOR,0,p))}else G|=R.COLOR_BUFFER_BIT}I&&(G|=R.DEPTH_BUFFER_BIT),k&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ce.dispose(),de.dispose(),Le.dispose(),we.dispose(),C.dispose(),_.dispose(),ee.dispose(),P.dispose(),pe.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",yf),ue.removeEventListener("sessionend",Sf),Ds.stop()};function se(S){S.preventDefault(),Tc("WebGLRenderer: Context Lost."),w=!0}function j(){Tc("WebGLRenderer: Context Restored."),w=!1;const S=ot.autoReset,I=ie.enabled,k=ie.autoUpdate,G=ie.needsUpdate,U=ie.type;le(),ot.autoReset=S,ie.enabled=I,ie.autoUpdate=k,ie.needsUpdate=G,ie.type=U}function Te(S){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xe(S){const I=S.target;I.removeEventListener("dispose",Xe),Et(I)}function Et(S){_t(S),we.remove(S)}function _t(S){const I=we.get(S).programs;I!==void 0&&(I.forEach(function(k){q.releaseProgram(k)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,G,U,oe){I===null&&(I=Ht);const xe=U.isMesh&&U.matrixWorld.determinant()<0,be=Sx(S,I,k,G,U);me.setMaterial(G,xe);let ye=k.index,Be=1;if(G.wireframe===!0){if(ye=$.getWireframeAttribute(k),ye===void 0)return;Be=2}const ke=k.drawRange,Pe=k.attributes.position;let nt=ke.start*Be,vt=(ke.start+ke.count)*Be;oe!==null&&(nt=Math.max(nt,oe.start*Be),vt=Math.min(vt,(oe.start+oe.count)*Be)),ye!==null?(nt=Math.max(nt,0),vt=Math.min(vt,ye.count)):Pe!=null&&(nt=Math.max(nt,0),vt=Math.min(vt,Pe.count));const Dt=vt-nt;if(Dt<0||Dt===1/0)return;P.setup(U,G,be,k,ye);let It,Mt=Ue;if(ye!==null&&(It=z.get(ye),Mt=_e,Mt.setIndex(It)),U.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*te()),Mt.setMode(R.LINES)):Mt.setMode(R.TRIANGLES);else if(U.isLine){let De=G.linewidth;De===void 0&&(De=1),me.setLineWidth(De*te()),U.isLineSegments?Mt.setMode(R.LINES):U.isLineLoop?Mt.setMode(R.LINE_LOOP):Mt.setMode(R.LINE_STRIP)}else U.isPoints?Mt.setMode(R.POINTS):U.isSprite&&Mt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Mt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const De=U._multiDrawStarts,Pt=U._multiDrawCounts,ut=U._multiDrawCount,Nn=ye?z.get(ye).bytesPerElement:1,fr=we.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<ut;Pn++)fr.setValue(R,"_gl_DrawID",Pn),Mt.render(De[Pn]/Nn,Pt[Pn])}else if(U.isInstancedMesh)Mt.renderInstances(nt,Dt,U.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pt=Math.min(k.instanceCount,De);Mt.renderInstances(nt,Dt,Pt)}else Mt.render(nt,Dt)};function xi(S,I,k){S.transparent===!0&&S.side===Xi&&S.forceSinglePass===!1?(S.side=En,S.needsUpdate=!0,ho(S,I,k),S.side=As,S.needsUpdate=!0,ho(S,I,k),S.side=Xi):ho(S,I,k)}this.compile=function(S,I,k=null){k===null&&(k=S),M=Le.get(k),M.init(I),A.push(M),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),S!==k&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),M.setupLights();const G=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const be=oe[xe];xi(be,k,U),G.add(be)}else xi(oe,k,U),G.add(oe)}),M=A.pop(),G},this.compileAsync=function(S,I,k=null){const G=this.compile(S,I,k);return new Promise(U=>{function oe(){if(G.forEach(function(xe){we.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){U(S);return}setTimeout(oe,10)}Ne.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ei=null;function yx(S){ei&&ei(S)}function yf(){Ds.stop()}function Sf(){Ds.start()}const Ds=new o0;Ds.setAnimationLoop(yx),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(S){ei=S,ue.setAnimationLoop(S),S===null?Ds.stop():Ds.start()},ue.addEventListener("sessionstart",yf),ue.addEventListener("sessionend",Sf),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,I,v),M=Le.get(S,A.length),M.init(I),A.push(M),We.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(We,wi,I.reversedDepth),ve=this.localClippingEnabled,Q=Ae.init(this.clippingPlanes,ve),y=de.get(S,T.length),y.init(),T.push(y),ue.enabled===!0&&ue.isPresenting===!0){const oe=E.xr.getDepthSensingMesh();oe!==null&&ol(oe,I,-1/0,E.sortObjects)}ol(S,I,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Se,Ie),Je=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Je&&ce.addToRenderList(y,S),this.info.render.frame++,Q===!0&&Ae.beginShadows();const k=M.state.shadowsArray;ie.render(k,S,I),Q===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,U=y.transmissive;if(M.setupLights(),I.isArrayCamera){const oe=I.cameras;if(U.length>0)for(let xe=0,be=oe.length;xe<be;xe++){const ye=oe[xe];Tf(G,U,S,ye)}Je&&ce.render(S);for(let xe=0,be=oe.length;xe<be;xe++){const ye=oe[xe];Mf(y,S,ye,ye.viewport)}}else U.length>0&&Tf(G,U,S,I),Je&&ce.render(S),Mf(y,S,I);v!==null&&b===0&&(Me.updateMultisampleRenderTarget(v),Me.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(E,S,I),P.resetDefaultState(),N=-1,O=null,A.pop(),A.length>0?(M=A[A.length-1],Q===!0&&Ae.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function ol(S,I,k,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){G&&tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(We);const xe=ee.update(S),be=S.material;be.visible&&y.push(S,xe,be,k,tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const xe=ee.update(S),be=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),tt.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),tt.copy(xe.boundingSphere.center)),tt.applyMatrix4(S.matrixWorld).applyMatrix4(We)),Array.isArray(be)){const ye=xe.groups;for(let Be=0,ke=ye.length;Be<ke;Be++){const Pe=ye[Be],nt=be[Pe.materialIndex];nt&&nt.visible&&y.push(S,xe,nt,k,tt.z,Pe)}}else be.visible&&y.push(S,xe,be,k,tt.z,null)}}const oe=S.children;for(let xe=0,be=oe.length;xe<be;xe++)ol(oe[xe],I,k,G)}function Mf(S,I,k,G){const{opaque:U,transmissive:oe,transparent:xe}=S;M.setupLightsView(k),Q===!0&&Ae.setGlobalState(E.clippingPlanes,k),G&&me.viewport(B.copy(G)),U.length>0&&uo(U,I,k),oe.length>0&&uo(oe,I,k),xe.length>0&&uo(xe,I,k),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Tf(S,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[G.id]===void 0&&(M.state.transmissionRenderTarget[G.id]=new Cs(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?lr:ts,minFilter:Ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const oe=M.state.transmissionRenderTarget[G.id],xe=G.viewport||B;oe.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);const be=E.getRenderTarget(),ye=E.getActiveCubeFace(),Be=E.getActiveMipmapLevel();E.setRenderTarget(oe),E.getClearColor(Y),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),Je&&ce.render(k);const ke=E.toneMapping;E.toneMapping=ws;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),Q===!0&&Ae.setGlobalState(E.clippingPlanes,G),uo(S,k,G),Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let vt=0,Dt=I.length;vt<Dt;vt++){const It=I[vt],{object:Mt,geometry:De,material:Pt,group:ut}=It;if(Pt.side===Xi&&Mt.layers.test(G.layers)){const Nn=Pt.side;Pt.side=En,Pt.needsUpdate=!0,bf(Mt,k,G,De,Pt,ut),Pt.side=Nn,Pt.needsUpdate=!0,nt=!0}}nt===!0&&(Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe))}E.setRenderTarget(be,ye,Be),E.setClearColor(Y,K),Pe!==void 0&&(G.viewport=Pe),E.toneMapping=ke}function uo(S,I,k){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,oe=S.length;U<oe;U++){const xe=S[U],{object:be,geometry:ye,group:Be}=xe;let ke=xe.material;ke.allowOverride===!0&&G!==null&&(ke=G),be.layers.test(k.layers)&&bf(be,I,k,ye,ke,Be)}}function bf(S,I,k,G,U,oe){S.onBeforeRender(E,I,k,G,U,oe),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(E,I,k,G,S,oe),U.transparent===!0&&U.side===Xi&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,E.renderBufferDirect(k,I,G,U,S,oe),U.side=As,U.needsUpdate=!0,E.renderBufferDirect(k,I,G,U,S,oe),U.side=Xi):E.renderBufferDirect(k,I,G,U,S,oe),S.onAfterRender(E,I,k,G,U,oe)}function ho(S,I,k){I.isScene!==!0&&(I=Ht);const G=we.get(S),U=M.state.lights,oe=M.state.shadowsArray,xe=U.state.version,be=q.getParameters(S,U.state,oe,I,k),ye=q.getProgramCacheKey(be);let Be=G.programs;G.environment=S.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(S.isMeshStandardMaterial?_:C).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Xe),Be=new Map,G.programs=Be);let ke=Be.get(ye);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===xe)return wf(S,be),ke}else be.uniforms=q.getUniforms(S),S.onBeforeCompile(be,E),ke=q.acquireProgram(be,ye),Be.set(ye,ke),G.uniforms=be.uniforms;const Pe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Ae.uniform),wf(S,be),G.needsLights=Tx(S),G.lightsStateVersion=xe,G.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Ef(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=dc.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function wf(S,I){const k=we.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Sx(S,I,k,G,U){I.isScene!==!0&&(I=Ht),Me.resetTextureUnits();const oe=I.fog,xe=G.isMeshStandardMaterial?I.environment:null,be=v===null?E.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:ea,ye=(G.isMeshStandardMaterial?_:C).get(G.envMap||xe),Be=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!k.morphAttributes.position,nt=!!k.morphAttributes.normal,vt=!!k.morphAttributes.color;let Dt=ws;G.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Dt=E.toneMapping);const It=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Mt=It!==void 0?It.length:0,De=we.get(G),Pt=M.state.lights;if(Q===!0&&(ve===!0||S!==O)){const fn=S===O&&G.id===N;Ae.setState(G,S,fn)}let ut=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Pt.state.version||De.outputColorSpace!==be||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==ye||G.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ae.numPlanes||De.numIntersection!==Ae.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ke||De.morphTargets!==Pe||De.morphNormals!==nt||De.morphColors!==vt||De.toneMapping!==Dt||De.morphTargetsCount!==Mt)&&(ut=!0):(ut=!0,De.__version=G.version);let Nn=De.currentProgram;ut===!0&&(Nn=ho(G,I,U));let fr=!1,Pn=!1,da=!1;const Lt=Nn.getUniforms(),_n=De.uniforms;if(me.useProgram(Nn.program)&&(fr=!0,Pn=!0,da=!0),G.id!==N&&(N=G.id,Pn=!0),fr||O!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Lt.setValue(R,"projectionMatrix",S.projectionMatrix),Lt.setValue(R,"viewMatrix",S.matrixWorldInverse);const vn=Lt.map.cameraPosition;vn!==void 0&&vn.setValue(R,Ce.setFromMatrixPosition(S.matrixWorld)),$e.logarithmicDepthBuffer&&Lt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,Pn=!0,da=!0)}if(U.isSkinnedMesh){Lt.setOptional(R,U,"bindMatrix"),Lt.setOptional(R,U,"bindMatrixInverse");const fn=U.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Lt.setValue(R,"boneTexture",fn.boneTexture,Me))}U.isBatchedMesh&&(Lt.setOptional(R,U,"batchingTexture"),Lt.setValue(R,"batchingTexture",U._matricesTexture,Me),Lt.setOptional(R,U,"batchingIdTexture"),Lt.setValue(R,"batchingIdTexture",U._indirectTexture,Me),Lt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Lt.setValue(R,"batchingColorTexture",U._colorsTexture,Me));const Gn=k.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Ve.update(U,k,Nn),(Pn||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,Lt.setValue(R,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=ye,_n.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(_n.envMapIntensity.value=I.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=G1()),Pn&&(Lt.setValue(R,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&Mx(_n,da),oe&&G.fog===!0&&Re.refreshFogUniforms(_n,oe),Re.refreshMaterialUniforms(_n,G,re,ne,M.state.transmissionRenderTarget[S.id]),dc.upload(R,Ef(De),_n,Me)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(dc.upload(R,Ef(De),_n,Me),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(R,"center",U.center),Lt.setValue(R,"modelViewMatrix",U.modelViewMatrix),Lt.setValue(R,"normalMatrix",U.normalMatrix),Lt.setValue(R,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const fn=G.uniformsGroups;for(let vn=0,cl=fn.length;vn<cl;vn++){const Is=fn[vn];pe.update(Is,Nn),pe.bind(Is,Nn)}}return Nn}function Mx(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Tx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,I,k){const G=we.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),we.get(S.texture).__webglTexture=I,we.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const k=we.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const bx=R.createFramebuffer();this.setRenderTarget=function(S,I=0,k=0){v=S,L=I,b=k;let G=!0,U=null,oe=!1,xe=!1;if(S){const ye=we.get(S);if(ye.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(ye.__webglFramebuffer===void 0)Me.setupRenderTarget(S);else if(ye.__hasExternalTextures)Me.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pe=S.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&we.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const ke=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?U=ke[I][k]:U=ke[I],oe=!0):S.samples>0&&Me.useMultisampledRTT(S)===!1?U=we.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[k]:U=ke,B.copy(S.viewport),V.copy(S.scissor),W=S.scissorTest}else B.copy(Ke).multiplyScalar(re).floor(),V.copy(lt).multiplyScalar(re).floor(),W=at;if(k!==0&&(U=bx),me.bindFramebuffer(R.FRAMEBUFFER,U)&&G&&me.drawBuffers(S,U),me.viewport(B),me.scissor(V),me.setScissorTest(W),oe){const ye=we.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,k)}else if(xe){const ye=I;for(let Be=0;Be<S.textures.length;Be++){const ke=we.get(S.textures[Be]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Be,ke.__webglTexture,k,ye)}}else if(S!==null&&k!==0){const ye=we.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ye.__webglTexture,k)}N=-1},this.readRenderTargetPixels=function(S,I,k,G,U,oe,xe,be=0){if(!(S&&S.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){me.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Be=S.textures[be],ke=Be.format,Pe=Be.type;if(!$e.textureFormatReadable(ke)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Pe)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&k>=0&&k<=S.height-U&&(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be),R.readPixels(I,k,G,U,Ge.convert(ke),Ge.convert(Pe),oe))}finally{const Be=v!==null?we.get(v).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,I,k,G,U,oe,xe,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(I>=0&&I<=S.width-G&&k>=0&&k<=S.height-U){me.bindFramebuffer(R.FRAMEBUFFER,ye);const Be=S.textures[be],ke=Be.format,Pe=Be.type;if(!$e.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,nt),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be),R.readPixels(I,k,G,U,Ge.convert(ke),Ge.convert(Pe),0);const vt=v!==null?we.get(v).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,vt);const Dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Q_(R,Dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,nt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(nt),R.deleteSync(Dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,k=0){const G=Math.pow(2,-k),U=Math.floor(S.image.width*G),oe=Math.floor(S.image.height*G),xe=I!==null?I.x:0,be=I!==null?I.y:0;Me.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,xe,be,U,oe),me.unbindTexture()};const Ex=R.createFramebuffer(),wx=R.createFramebuffer();this.copyTextureToTexture=function(S,I,k=null,G=null,U=0,oe=null){oe===null&&(U!==0?(Ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let xe,be,ye,Be,ke,Pe,nt,vt,Dt;const It=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(k!==null)xe=k.max.x-k.min.x,be=k.max.y-k.min.y,ye=k.isBox3?k.max.z-k.min.z:1,Be=k.min.x,ke=k.min.y,Pe=k.isBox3?k.min.z:0;else{const Gn=Math.pow(2,-U);xe=Math.floor(It.width*Gn),be=Math.floor(It.height*Gn),S.isDataArrayTexture?ye=It.depth:S.isData3DTexture?ye=Math.floor(It.depth*Gn):ye=1,Be=0,ke=0,Pe=0}G!==null?(nt=G.x,vt=G.y,Dt=G.z):(nt=0,vt=0,Dt=0);const Mt=Ge.convert(I.format),De=Ge.convert(I.type);let Pt;I.isData3DTexture?(Me.setTexture3D(I,0),Pt=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Me.setTexture2DArray(I,0),Pt=R.TEXTURE_2D_ARRAY):(Me.setTexture2D(I,0),Pt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=R.getParameter(R.UNPACK_ROW_LENGTH),Nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fr=R.getParameter(R.UNPACK_SKIP_PIXELS),Pn=R.getParameter(R.UNPACK_SKIP_ROWS),da=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,It.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,It.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe);const Lt=S.isDataArrayTexture||S.isData3DTexture,_n=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Gn=we.get(S),fn=we.get(I),vn=we.get(Gn.__renderTarget),cl=we.get(fn.__renderTarget);me.bindFramebuffer(R.READ_FRAMEBUFFER,vn.__webglFramebuffer),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,cl.__webglFramebuffer);for(let Is=0;Is<ye;Is++)Lt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.get(S).__webglTexture,U,Pe+Is),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.get(I).__webglTexture,oe,Dt+Is)),R.blitFramebuffer(Be,ke,xe,be,nt,vt,xe,be,R.DEPTH_BUFFER_BIT,R.NEAREST);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||we.has(S)){const Gn=we.get(S),fn=we.get(I);me.bindFramebuffer(R.READ_FRAMEBUFFER,Ex),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,wx);for(let vn=0;vn<ye;vn++)Lt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gn.__webglTexture,U,Pe+vn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gn.__webglTexture,U),_n?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fn.__webglTexture,oe,Dt+vn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fn.__webglTexture,oe),U!==0?R.blitFramebuffer(Be,ke,xe,be,nt,vt,xe,be,R.COLOR_BUFFER_BIT,R.NEAREST):_n?R.copyTexSubImage3D(Pt,oe,nt,vt,Dt+vn,Be,ke,xe,be):R.copyTexSubImage2D(Pt,oe,nt,vt,Be,ke,xe,be);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else _n?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Pt,oe,nt,vt,Dt,xe,be,ye,Mt,De,It.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Pt,oe,nt,vt,Dt,xe,be,ye,Mt,It.data):R.texSubImage3D(Pt,oe,nt,vt,Dt,xe,be,ye,Mt,De,It):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,oe,nt,vt,xe,be,Mt,De,It.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,oe,nt,vt,It.width,It.height,Mt,It.data):R.texSubImage2D(R.TEXTURE_2D,oe,nt,vt,xe,be,Mt,De,It);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fr),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,da),oe===0&&I.generateMipmaps&&R.generateMipmap(Pt),me.unbindTexture()},this.initRenderTarget=function(S){we.get(S).__webglFramebuffer===void 0&&Me.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Me.setTextureCube(S,0):S.isData3DTexture?Me.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Me.setTexture2DArray(S,0):Me.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){L=0,b=0,v=null,me.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function Ct(i,e){return{re:i,im:e}}function kt(i,e){return Ct(i.re*e.re-i.im*e.im,i.re*e.im+i.im*e.re)}function Sn(i,e){return Ct(i.re+e.re,i.im+e.im)}function lh(i,e){return Ct(i.re+e,i.im)}function Wr(i,e){return Ct(i.re-e.re,i.im-e.im)}function Vd(i,e){return Ct(i.re-e,i.im)}function uh(i){return Ct(-i.re,-i.im)}function ua(i){return Math.sqrt(i.re*i.re+i.im*i.im)}function Ks(i){return i.re*i.re+i.im*i.im}function W1(i,e){return i.re*e.re+i.im*e.im}function fi(i,e){const t=Ks(e);return Ct((i.re*e.re+i.im*e.im)/t,(e.re*i.im-e.im*i.re)/t)}function hh(i,e){return Ct(i.re*e,i.im*e)}function X1(i,e){return Ct(i.re/e,i.im/e)}function q1(i){const e=ua(i);return Ct(i.re/e,i.im/e)}function Y1(i){return kt(i,i)}function kd(i){if(i.im===0&&i.re<=0)return Ct(0,Math.sqrt(-i.re));const e=ua(i),t=Math.sqrt(e/((i.re+e)**2+i.im**2));return Ct((i.re+e)*t,i.im*t)}function Gd(i,e=0){return Math.abs(i.re-1)<=e&&Math.abs(i.im)<=e}function wc(i,e=0){return Math.abs(i.re)<=e&&Math.abs(i.im)<=e}function $1(i,e){return i.re===e.re&&i.im===e.im}function ko(i){return Ct(i.re,i.im)}function Hd(i,e){const t=ua(i),n=Math.atan2(i.im,i.re)*e,s=t**e;return Ct(s*Math.cos(n),s*Math.sin(n))}function fh(i,e){return[Sn(kt(i[0],e[0]),kt(i[1],e[2])),Sn(kt(i[0],e[1]),kt(i[1],e[3])),Sn(kt(i[2],e[0]),kt(i[3],e[2])),Sn(kt(i[2],e[1]),kt(i[3],e[3]))]}function Xh(i){return Wr(kt(i[0],i[3]),kt(i[1],i[2]))}function Z1(i){return Sn(i[0],i[3])}function j1(i){return ua(Xh(i))<1e-10}function f0(i){const e=Xh(i);return[fi(i[3],e),fi(uh(i[1]),e),fi(uh(i[2]),e),fi(i[0],e)]}function K1(){return[Ct(1,0),Ct(0,0),Ct(0,0),Ct(1,0)]}function J1(i){return[ko(i[0]),ko(i[1]),ko(i[2]),ko(i[3])]}function Q1(i){Ks(Z1(i))-4*ua(Xh(i))<1e-8&&(i=J1(i),i[3].re+=1e-4);const e=X1(Wr(i[0],i[3]),2),t=kd(Sn(Y1(e),kt(i[1],i[2])));Ks(Sn(e,t))<Ks(Wr(e,t))&&(t.re=-t.re,t.im=-t.im);const n=fi(i[1],Sn(e,t)),s=fi(i[2],Sn(e,t)),r=fi(kt(i[1],i[2]),Sn(e,t)),a=Sn(i[0],r),o=Wr(i[3],r),l=kd(lh(kt(n,s),1)),c=q1(l);return{U:[c,kt(c,n),kt(c,uh(s)),c],eig1:a,eig2:o}}function eb(i,e){const{U:t,eig1:n,eig2:s}=Q1(i);return fh(f0(t),fh(tb(Hd(n,e),Hd(s,e)),t))}function tb(i,e){return[i,Ct(0,0),Ct(0,0),e]}function St(i,e){if(e!==void 0){if(typeof i!="number")throw new Error("Can't convert to complex number");return Ct(i,e)}else if(typeof i=="object"){if(Array.isArray(i))return Ct(i[0],i[1]);if("re"in i&&"im"in i)return i}else if(typeof i=="number")return Ct(i,0);throw new Error("Can't convert to complex number")}function nb(i,e=0){return Gd(i[0],e)&&wc(i[1],e)&&wc(i[2],e)&&Gd(i[3],e)}function ib(i,e){if(!wc(i[3-e])){if(e===0)return fi(lh(kt(i[1],i[2]),1),i[3]);if(e===1)return fi(Vd(kt(i[0],i[3]),1),i[2]);if(e===2)return fi(Vd(kt(i[0],i[3]),1),i[1]);if(e===3)return fi(lh(kt(i[1],i[2]),1),i[0]);throw new Error("Index is out of range")}}function rs(i,e,t){return{x:i,y:e,z:t}}function sb(i,e){i.x+=e.x,i.y+=e.y,i.z+=e.z}function rb(i,e){return rs(i.x+e.x,i.y+e.y,i.z+e.z)}function Wl(i,e){return rs(i.x-e.x,i.y-e.y,i.z-e.z)}function ab(i,e){return rs(i.x*e,i.y*e,i.z*e)}function ob(i,e){return i.x/=e,i.y/=e,i.z/=e,i}function Xl(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function cb(i){return i.x*i.x+i.y*i.y+i.z*i.z}function Wd(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return rs(i.x/e,i.y/e,i.z/e)}function lb(i,e){return Math.sqrt((i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2)}function ub(i,e){return(i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2}function hb(i){return rs(i.x,i.y,i.z)}function Xd(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function fb(i,e){return rs(i.y*e.z-i.z*e.y,i.z*e.x-i.x*e.z,i.x*e.y-i.y*e.x)}function na(i,e,t,n){return{r:i,i:e,j:t,k:n}}function db(i,e,t,n,s){i.r=e,i.i=t,i.j=n,i.k=s}function dh(i){return i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k}function pb(i){return Math.sqrt(i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k)}function mb(i){xb(i,pb(i))}function xb(i,e){i.r/=e,i.i/=e,i.j/=e,i.k/=e}function gb(i,e){const t=dh(e);return na((i.r*e.r+i.i*e.i+i.j*e.j+i.k*e.k)/t,(-i.r*e.i+i.i*e.r-i.j*e.k+i.k*e.j)/t,(-i.r*e.j+i.i*e.k+i.j*e.r-i.k*e.i)/t,(-i.r*e.k-i.i*e.j+i.j*e.i+i.k*e.r)/t)}function _b(i,e,t){if(Xd(i,e)===1)return na(1,0,0,0);const s=fb(i,e),r=na(Xl(i)*Xl(e)+Xd(i,e),s.x,s.y,s.z);mb(r);const a=Math.acos(r.r)*t,o=Xl(s),l=Math.sin(a)/o;return db(r,Math.cos(a),s.x*l,s.y*l,s.z*l),r}function vb(i,e){const t=e.i*e.i,n=e.j*e.j,s=e.k*e.k,r=e.r*e.i,a=e.r*e.j,o=e.r*e.k,l=e.i*e.k,c=e.i*e.j,u=e.j*e.k;return rs(i.x*(1-2*(n+s))+i.y*2*(c-o)+i.z*2*(l+a),i.x*2*(c+o)+i.y*(1-2*(t+s))+i.z*2*(u-r),i.x*2*(l-a)+i.y*2*(u+r)+i.z*(1-2*(t+n)))}const yb=/^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/,Sb=/^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|(?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag2>i))\s*$/;var Mb=Ns("<input/>");function Tb(i,e){rr(e,!0);let t=oi(e,"onchange",3,g=>{}),n=oi(e,"onfocus",3,()=>{}),s=c_(e,["$$slots","$$events","$$legacy","onchange","onfocus"]),r=ft(""),a=ft("");function o(g){return g===""?!0:yb.test(g)}function l(g){if(g==="")return St(0);const x=Sb.exec(g);if(!x||!x.groups)return St(0);const p=x.groups;if(p.re){const M=(p.re_sign==="-"?-1:1)*parseFloat(p.re)||0;if(!p.has_imag)return St(M);const T=p.im_sign==="-"?-1:1;if(!p.im)return St(M,T);const A=T*parseFloat(p.im)||0;return St(M,A)}if(p.has_imag2){const y=p.im_sign2==="-"?-1:1;if(!p.im2)return St(0,y);const M=y*parseFloat(p.im2)||0;return St(0,M)}return St(0)}function c(){if(!o(J(r))){Fe(r,J(a),!0);return}Fe(a,J(r),!0);const g=l(J(r));g?t()(new CustomEvent("change",{detail:g})):t()(new CustomEvent("change",{detail:void 0}))}function u(g){const x=Math.min(2,g.toString().split(".")[1]?.length||0);return g.toFixed(x)}function h(g,x=!1){const p=x?y=>y.toString():u;return wc(g)?"0":g.re===0?`${p(g.im)}i`:g.im===0?p(g.re):`${p(g.re)}${g.im>=0?"+":"-"}${p(Math.abs(g.im))}i`}function f(g){Fe(r,h(g),!0),Fe(a,J(r),!0)}var d={set:f},m=Mb();return s_(m,()=>({type:"text",oninput:c,onfocus:n(),...s}),void 0,void 0,void 0,void 0,!0),Cm(m,()=>J(r),g=>Fe(r,g)),Es(i,m),ar(d)}var bb=Ns('<div class="matrix-input-container svelte-1hm4t7x"><div class="matrix-bracket svelte-1hm4t7x"></div> <div class="matrix-input svelte-1hm4t7x"></div> <div class="matrix-bracket svelte-1hm4t7x"></div></div>');function Eb(i,e){rr(e,!0);let t=oi(e,"oneltchange",3,d=>{}),n=oi(e,"onfocus",3,d=>{}),s=oi(e,"onkeydown",3,d=>{}),r=jt(new Array(4)),a=ft(void 0);const o=d=>{d.forEach((m,g)=>{r[g].set(m)})},l=(d,m)=>{r[d].set(m)};function c(d,m){s()(new CustomEvent("keydown",{detail:{index:d,key:m.key}}))}var u={set:o,setEntry:l},h=bb(),f=xn(Vt(h),2);return xu(f,20,()=>[0,1,2,3],mu,(d,m,g)=>{Vr(Tb(d,{onfocus:()=>{Fe(a,g,!0),n()(new CustomEvent("focus",{detail:g}))},onblur:()=>{J(a)===g&&Fe(a,void 0)},onchange:x=>{t()(new CustomEvent("change",{detail:{index:g,value:x.detail}}))},onkeydown:x=>c(g,x)}),(x,p)=>r[p]=x,x=>r?.[x],()=>[g])}),Es(i,h),ar(u)}const wb={name:"Dark",ui:{background:"#000",textColor:"#eee",border:"rgba(255, 255, 255, 0.6)",focusBorder:"#fff",thickBorder:"#fff",lightBorder:"rgba(255, 255, 255, 0.3)",githubImage:"github-mark-white.svg"},canvas:{foreground:"#aaaaaa",isometryColors:[["#ff0000","#ff6666"],["#3366ff","#5588ff"]],axisColors:["#990000","#007700","#3333cc"]}},Go={VERTEX:"vertex"},Rt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},so=["x","y","z","w"];function qd(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Yd={};function ph(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.warn(e,...i)}function qt(...i){const e="THREE."+i.shift();console.error(e,...i)}function mh(...i){const e=i.join(" ");e in Yd||(Yd[e]=!0,Ye(...i))}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $d=1234567;const d0=Math.PI/180,p0=180/Math.PI;function Xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function qh(i,e){return(i%e+e)%e}function Ab(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cb(i,e,t){return i!==e?(t-i)/(e-i):0}function Va(i,e,t){return(1-t)*i+t*e}function Rb(i,e,t,n){return Va(i,e,1-Math.exp(-t*n))}function Nb(i,e=1){return e-Math.abs(qh(i,e*2)-e)}function Pb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Db(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ib(i,e){return i+Math.random()*(e-i)}function Ub(i){return i*(.5-Math.random())}function Fb(i){i!==void 0&&($d=i);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ob(i){return i*d0}function zb(i){return i*p0}function Bb(i){return(i&i-1)===0&&i!==0}function Vb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gb(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*u,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hb={DEG2RAD:d0,RAD2DEG:p0,generateUUID:Xr,clamp:it,euclideanModulo:qh,mapLinear:Ab,inverseLerp:Cb,lerp:Va,damp:Rb,pingpong:Nb,smoothstep:Pb,smootherstep:Lb,randInt:Db,randFloat:Ib,randFloatSpread:Ub,seededRandom:Fb,degToRad:Ob,radToDeg:zb,isPowerOfTwo:Bb,ceilPowerOfTwo:Vb,floorPowerOfTwo:kb,setQuaternionFromProperEuler:Gb,normalize:xt,denormalize:ui},m0=1,Wb=2,xh=0,Yh=300,x0=301,Xb=302,Zd=1e3,Ho=1001,jd=1002,ia=1003,gh=1006,g0=1008,qb=1009,Yb=1013,_0=1014,$b=1015,Zb=1016,jb=1023,Kd=1026,Kb=1027,Jd=0,Jb=1,Ac="",ai="srgb",Qd="srgb-linear",ep="linear",ka="srgb",Cc=35044,$s=2e3,Rc=2001;class Di{constructor(e,t,n,s,r,a,o,l,c){Di.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=s[0],x=s[3],p=s[6],y=s[1],M=s[4],T=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*g+o*y+l*A,r[3]=a*x+o*M+l*E,r[6]=a*p+o*T+l*w,r[1]=c*g+u*y+h*A,r[4]=c*x+u*M+h*E,r[7]=c*p+u*T+h*w,r[2]=f*g+d*y+m*A,r[5]=f*x+d*M+m*E,r[8]=f*p+d*T+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Di,tp=new Di().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),np=new Di().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qb(){const i={enabled:!0,workingColorSpace:Qd,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ka&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ka&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ac?ep:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qd]:{primaries:e,whitePoint:n,transfer:ep,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:n,transfer:ka,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),i}const Wt=Qb();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $h{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=qh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yl(a,r,e+1/3),this.g=Yl(a,r,e),this.b=Yl(a,r,e-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(e,t=ai){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=v0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Wt.workingToColorSpace(cn.copy(this),e),Math.round(it(cn.r*255,0,255))*65536+Math.round(it(cn.g*255,0,255))*256+Math.round(it(cn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ai){Wt.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Wo);const n=Va(fs.h,Wo.h,t),s=Va(fs.s,Wo.s,t),r=Va(fs.l,Wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new $h;$h.NAMES=v0;class Zh{constructor(e,t,n,s){Zh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}class y0{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let x=l*f+c*d+u*m+h*g;x<0&&(f=-f,d=-d,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const y=Math.acos(x),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+f*o,c=c*p+d*o,u=u*p+m*o,h=h*p+g*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+m*o,h=h*p+g*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Oe{constructor(e=0,t=0,n=0){Oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new Oe,ip=new y0;class Ni{constructor(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x){Ni.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x)}set(e,t,n,s,r,a,o,l,c,u,h,f,d,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ni().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f+g*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,g=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,t,n){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),ds.crossVectors(n,In),ds.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ds.crossVectors(n,In)),ds.normalize(),Xo.crossVectors(In,ds),s[0]=ds.x,s[4]=Xo.x,s[8]=In.x,s[1]=ds.y,s[5]=Xo.y,s[9]=In.y,s[2]=ds.z,s[6]=Xo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],M=n[7],T=n[11],A=n[15],E=s[0],w=s[4],L=s[8],b=s[12],v=s[1],N=s[5],O=s[9],B=s[13],V=s[2],W=s[6],Y=s[10],K=s[14],X=s[3],ne=s[7],re=s[11],Se=s[15];return r[0]=a*E+o*v+l*V+c*X,r[4]=a*w+o*N+l*W+c*ne,r[8]=a*L+o*O+l*Y+c*re,r[12]=a*b+o*B+l*K+c*Se,r[1]=u*E+h*v+f*V+d*X,r[5]=u*w+h*N+f*W+d*ne,r[9]=u*L+h*O+f*Y+d*re,r[13]=u*b+h*B+f*K+d*Se,r[2]=m*E+g*v+x*V+p*X,r[6]=m*w+g*N+x*W+p*ne,r[10]=m*L+g*O+x*Y+p*re,r[14]=m*b+g*B+x*K+p*Se,r[3]=y*E+M*v+T*V+A*X,r[7]=y*w+M*N+T*W+A*ne,r[11]=y*L+M*O+T*Y+A*re,r[15]=y*b+M*B+T*K+A*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+x*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=h*x*c-g*f*c+g*l*d-o*x*d-h*l*p+o*f*p,M=m*f*c-u*x*c-m*l*d+a*x*d+u*l*p-a*f*p,T=u*g*c-m*h*c+m*o*d-a*g*d-u*o*p+a*h*p,A=m*h*l-u*g*l-m*o*f+a*g*f+u*o*x-a*h*x,E=t*y+n*M+s*T+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(g*f*r-h*x*r-g*s*d+n*x*d+h*s*p-n*f*p)*w,e[2]=(o*x*r-g*l*r+g*s*c-n*x*c-o*s*p+n*l*p)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*w,e[4]=M*w,e[5]=(u*x*r-m*f*r+m*s*d-t*x*d-u*s*p+t*f*p)*w,e[6]=(m*l*r-a*x*r-m*s*c+t*x*c+a*s*p-t*l*p)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*w,e[8]=T*w,e[9]=(m*h*r-u*g*r-m*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(a*g*r-m*o*r+m*n*c-t*g*c-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=A*w,e[13]=(u*g*s-m*h*s+m*n*f-t*g*f-u*n*x+t*h*x)*w,e[14]=(m*o*s-a*g*s-m*n*l+t*g*l+a*n*x-t*o*x)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,m=r*h,g=a*u,x=a*h,p=o*h,y=l*c,M=l*u,T=l*h,A=n.x,E=n.y,w=n.z;return s[0]=(1-(g+p))*A,s[1]=(d+T)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-T)*E,s[5]=(1-(f+p))*E,s[6]=(x+y)*E,s[7]=0,s[8]=(m+M)*w,s[9]=(x-y)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Nr.set(s[0],s[1],s[2]).length();const a=Nr.set(s[4],s[5],s[6]).length(),o=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);const c=1/r,u=1/a,h=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$s,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(l)m=r/(a-r),g=a*r/(a-r);else if(o===$s)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rc)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$s,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,g;if(l)m=1/(a-r),g=a/(a-r);else if(o===$s)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===Rc)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nr=new Oe,si=new Ni,eE=new Oe(0,0,0),tE=new Oe(1,1,1),ds=new Oe,Xo=new Oe,In=new Oe;class jn{constructor(e=0,t=0){jn.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(e=0,t=0,n=0,s=1){Pi.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(d+1)/2,A=(p+1)/2,E=(u+f)/4,w=(h+g)/4,L=(m+x)/4;return M>T&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function jh(i,e=0){let t=3735928559^e,n=1103547991^e;if(i instanceof Array)for(let s=0,r;s<i.length;s++)r=i[s],t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);else for(let s=0,r;s<i.length;s++)r=i.charCodeAt(s),t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);return t=Math.imul(t^t>>>16,2246822507),t^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}const S0=i=>jh(i),nE=i=>jh(i),M0=(...i)=>jh(i);function Nc(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix2===!0?"mat2":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Kh(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new $h(...e):t==="vec2"?new jn(...e):t==="vec3"?new Oe(...e):t==="vec4"?new Pi(...e):t==="mat2"?new Zh(...e):t==="mat3"?new Di(...e):t==="mat4"?new Ni(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?sE(e[0]):null}function iE(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function sE(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}class Jh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rE={analyze:"setup",generate:"analyze"};let aE=0,ze=class extends Jh{static get type(){return"Node"}constructor(e=null){super(),this.nodeType=e,this.updateType=Rt.NONE,this.updateBeforeType=Rt.NONE,this.updateAfterType=Rt.NONE,this.uuid=Hb.generateUUID(),this.version=0,this.name="",this.global=!1,this.parents=!1,this.isNode=!0,this._beforeNodes=null,this._cacheKey=null,this._cacheKeyVersion=0,Object.defineProperty(this,"id",{value:aE++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this),this}onFrameUpdate(e){return this.onUpdate(e,Rt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,Rt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,Rt.OBJECT)}onReference(e){return this.updateReference=e.bind(this),this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of this._getChildren())yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}_getChildren(e=new Set){const t=[];e.add(this);for(const n of Object.getOwnPropertyNames(this)){const s=this[n];if(!(n.startsWith("_")===!0||e.has(s))){if(Array.isArray(s)===!0)for(let r=0;r<s.length;r++){const a=s[r];a&&a.isNode===!0&&t.push({property:n,index:r,childNode:a})}else if(s&&s.isNode===!0)t.push({property:n,childNode:s});else if(s&&Object.getPrototypeOf(s)===Object.prototype)for(const r in s){if(r.startsWith("_")===!0)continue;const a=s[r];a&&a.isNode===!0&&t.push({property:n,index:r,childNode:a})}}}return t}getCacheKey(e=!1,t=null){if(e=e||this.version!==this._cacheKeyVersion,e===!0||this._cacheKey===null){t===null&&(t=new Set);const n=[];for(const{property:s,childNode:r}of this._getChildren(t))n.push(S0(s.slice(0,-4)),r.getCacheKey(e,t));this._cacheKey=M0(nE(n),this.customCacheKey()),this._cacheKeyVersion=this.version}return this._cacheKey}customCacheKey(){return this.id}getScope(){return this}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getMemberType(){return"void"}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}getArrayCount(){return null}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return t.outputNode||null}analyze(e,t=null){const n=e.increaseUsage(this);if(this.parents===!0){const s=e.getDataFromNode(this,"any");s.stages=s.stages||{},s.stages[e.shaderStage]=s.stages[e.shaderStage]||[],s.stages[e.shaderStage].push(t)}if(n===1){const s=e.getNodeProperties(this);for(const r of Object.values(s))r&&r.isNode===!0&&r.build(e,this)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){Ye("Abstract function.")}updateAfter(){Ye("Abstract function.")}update(){Ye("Abstract function.")}before(e){return this._beforeNodes===null&&(this._beforeNodes=[]),this._beforeNodes.push(e),this}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);if(this._beforeNodes!==null){const l=this._beforeNodes;this._beforeNodes=null;for(const c of l)c.build(e,t);this._beforeNodes=l}const s=e.getDataFromNode(this);s.buildStages=s.buildStages||{},s.buildStages[e.buildStage]=!0;const r=rE[e.buildStage];if(r&&s.buildStages[r]!==!0){const l=e.getBuildStage();e.setBuildStage(r),this.build(e),e.setBuildStage(l)}e.addNode(this),e.addChain(this);let a=null;const o=e.getBuildStage();if(o==="setup"){this.updateReference(e);const l=e.getNodeProperties(this);if(l.initialized!==!0){l.initialized=!0,l.outputNode=this.setup(e)||l.outputNode||null;for(const c of Object.values(l))if(c&&c.isNode===!0){if(c.parents===!0){const u=e.getNodeProperties(c);u.parents=u.parents||[],u.parents.push(this)}c.build(e)}}a=l.outputNode}else if(o==="analyze")this.analyze(e,t);else if(o==="generate"){if(this.generate.length<2){const c=this.getNodeType(e),u=e.getDataFromNode(this);a=u.snippet,a===void 0?u.generated===void 0?(u.generated=!0,a=this.generate(e)||"",u.snippet=a):(Ye("Node: Recursion detected.",this),a="/* Recursion detected. */"):u.flowCodes!==void 0&&e.context.nodeBlock!==void 0&&e.addFlowCodeHierarchy(this,e.context.nodeBlock),a=e.format(a,c,t)}else a=this.generate(e,t)||"";a===""&&t!==null&&t!=="void"&&t!=="OutputType"&&(qt(`TSL: Invalid generated code, expected a "${t}".`),a=e.generateConst(t))}return e.removeChain(this),e.addSequentialNode(this),a}getSerializeChildren(){return this._getChildren()}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:a}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=a.toJSON(e.meta).uuid):n[s]=a.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const a=e.inputNodes[n][r];s[r]=t[a]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.7,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}if(s){const o=a(e.textures),l=a(e.images),c=a(e.nodes);o.length>0&&(r.textures=o),l.length>0&&(r.images=l),c.length>0&&(r.nodes=c)}return r}};class hn extends ze{static get type(){return"TempNode"}constructor(e=null){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const a=super.build(e,s),o=e.getVarFromNode(this,null,s),l=e.getPropertyName(o);return e.addLineFlowCode(`${l} = ${a}`,this),r.snippet=a,r.propertyName=l,e.format(r.propertyName,s,t)}}return super.build(e,t)}}class ro extends ze{static get type(){return"ArrayElementNode"}constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.indexNode.getNodeType(e),n=this.node.build(e),s=this.indexNode.build(e,!e.isVector(t)&&e.isInteger(t)?t:"uint");return`${n}[ ${s} ]`}}class T0 extends ze{static get type(){return"ConvertNode"}constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}class oE extends hn{static get type(){return"JoinNode"}constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=e.getTypeLength(n),r=this.nodes,a=e.getComponentType(n),o=[];let l=0;for(const u of r){if(l>=s){qt(`TSL: Length of parameters exceeds maximum length of function '${n}()' type.`);break}let h=u.getNodeType(e),f=e.getTypeLength(h),d;if(l+f>s&&(qt(`TSL: Length of '${n}()' data exceeds maximum length of output type.`),f=s-l,h=e.getTypeFromLength(f)),l+=f,d=u.build(e,h),e.getComponentType(h)!==a){const g=e.getTypeFromLength(f,a);d=e.format(d,h,g)}o.push(d)}const c=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(c,n,t)}}const cE=so.join("");class lE extends ze{static get type(){return"SplitNode"}constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(so.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}getScope(){return this.node.getScope()}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let a=null;this.getVectorLength()>=s&&(a=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const l=n.build(e,a);this.components.length===s&&this.components===cE.slice(0,this.components.length)?r=e.format(l,a,t):r=e.format(`${l}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}class uE extends hn{static get type(){return"SetNode"}constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),a=e.getComponentType(s.getNodeType(e)),o=e.getTypeFromLength(n.length,a),l=s.build(e,o),c=t.build(e,r),u=e.getTypeLength(r),h=[];for(let f=0;f<u;f++){const d=so[f];d===n[0]?(h.push(l),f+=n.length-1):h.push(c+"."+d)}return`${e.getType(r)}( ${h.join(", ")} )`}}class hE extends hn{static get type(){return"FlipNode"}constructor(e,t){super(),this.sourceNode=e,this.components=t}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{components:t,sourceNode:n}=this,s=this.getNodeType(e),r=n.build(e),a=e.getVarFromNode(this),o=e.getPropertyName(a);e.addLineFlowCode(o+" = "+r,this);const l=e.getTypeLength(s),c=[];let u=0;for(let h=0;h<l;h++){const f=so[h];f===t[u]?(c.push("1.0 - "+(o+"."+f)),u++):c.push(o+"."+f)}return`${e.getType(s)}( ${c.join(", ")} )`}}class Qh extends ze{static get type(){return"InputNode"}constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Nc(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Nc(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=iE(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Kh(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){Ye("Abstract function.")}}const sp=/float|u?int/;class Ii extends Qh{static get type(){return"ConstNode"}constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return sp.test(n)&&sp.test(t)?e.generateConst(t,this.value):e.format(this.generateConst(e),n,t)}}class fE extends ze{static get type(){return"MemberNode"}constructor(e,t){super(),this.structNode=e,this.property=t,this.isMemberNode=!0}hasMember(e){return this.structNode.isMemberNode&&this.structNode.hasMember(e)===!1?!1:this.structNode.getMemberType(e,this.property)!=="void"}getNodeType(e){return this.hasMember(e)===!1?"float":this.structNode.getMemberType(e,this.property)}getMemberType(e,t){if(this.hasMember(e)===!1)return"float";const n=this.getNodeType(e);return e.getStructTypeNode(n).getMemberType(e,t)}generate(e){if(this.hasMember(e)===!1){Ye(`TSL: Member "${this.property}" does not exist in struct.`);const n=this.getNodeType(e);return e.generateConst(n)}return this.structNode.build(e)+"."+this.property}}let dE=null;const _h=new Map;function H(i,e){if(_h.has(i)){Ye(`TSL: Redefinition of method chaining '${i}'.`);return}if(typeof e!="function")throw new Error(`THREE.TSL: Node element ${i} is not a function`);_h.set(i,e),i!=="assign"&&(ze.prototype[i]=function(...t){return this.isStackNode?this.addToStack(e(...t)):e(this,...t)},ze.prototype[i+"Assign"]=function(...t){return this.isStackNode?this.assign(t[0],e(...t)):this.assign(e(this,...t))})}const pE=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),rp=i=>pE(i).split("").sort().join("");ze.prototype.assign=function(...i){if(this.isStackNode!==!0)return qt("TSL: No stack defined for assign operation. Make sure the assign is inside a Fn()."),this;{const e=_h.get("assign");return this.addToStack(e(...i))}};ze.prototype.toVarIntent=function(){return this};ze.prototype.get=function(i){return new fE(this,i)};const Ga={};function qo(i,e,t){Ga[i]=Ga[e]=Ga[t]={get(){this._cache=this._cache||{};let a=this._cache[i];return a===void 0&&(a=new lE(this,i),this._cache[i]=a),a},set(a){this[i].assign(ae(a))}};const n=i.toUpperCase(),s=e.toUpperCase(),r=t.toUpperCase();ze.prototype["set"+n]=ze.prototype["set"+s]=ze.prototype["set"+r]=function(a){const o=rp(i);return new uE(this,o,ae(a))},ze.prototype["flip"+n]=ze.prototype["flip"+s]=ze.prototype["flip"+r]=function(){const a=rp(i);return new hE(this,a)}}const gi=["x","y","z","w"],_i=["r","g","b","a"],vi=["s","t","p","q"];for(let i=0;i<4;i++){let e=gi[i],t=_i[i],n=vi[i];qo(e,t,n);for(let s=0;s<4;s++){e=gi[i]+gi[s],t=_i[i]+_i[s],n=vi[i]+vi[s],qo(e,t,n);for(let r=0;r<4;r++){e=gi[i]+gi[s]+gi[r],t=_i[i]+_i[s]+_i[r],n=vi[i]+vi[s]+vi[r],qo(e,t,n);for(let a=0;a<4;a++)e=gi[i]+gi[s]+gi[r]+gi[a],t=_i[i]+_i[s]+_i[r]+_i[a],n=vi[i]+vi[s]+vi[r]+vi[a],qo(e,t,n)}}}for(let i=0;i<32;i++)Ga[i]={get(){this._cache=this._cache||{};let e=this._cache[i];return e===void 0&&(e=new ro(this,new Ii(i,"uint")),this._cache[i]=e),e},set(e){this[i].assign(ae(e))}};Object.defineProperties(ze.prototype,Ga);const ap=new WeakMap,mE=function(i,e=null){const t=Nc(i);return t==="node"?i:e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string"?ae(vh(i,e)):t==="shader"?i.isFn?i:rt(i):i},xE=function(i,e=null){for(const t in i)i[t]=ae(i[t],e);return i},gE=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=ae(i[n],e);return i},b0=function(i,e=null,t=null,n=null){function s(u){return n!==null?(u=ae(Object.assign(u,n)),n.intent===!0&&(u=u.toVarIntent())):u=ae(u),u}let r,a=e,o,l;function c(u){let h;return a?h=/[a-z]/i.test(a)?a+"()":a:h=i.type,o!==void 0&&u.length<o?(qt(`TSL: "${h}" parameter length is less than minimum required.`),u.concat(new Array(o-u.length).fill(0))):l!==void 0&&u.length>l?(qt(`TSL: "${h}" parameter length exceeds limit.`),u.slice(0,l)):u}return e===null?r=(...u)=>s(new i(...Ha(c(u)))):t!==null?(t=ae(t),r=(...u)=>s(new i(e,...Ha(c(u)),t))):r=(...u)=>s(new i(e,...Ha(c(u)))),r.setParameterLength=(...u)=>(u.length===1?o=l=u[0]:u.length===2&&([o,l]=u),r),r.setName=u=>(a=u,r),r},_E=function(i,...e){return ae(new i(...Ha(e)))};class vE extends ze{constructor(e,t){super(),this.shaderNode=e,this.rawInputs=t,this.isShaderCallNodeInternal=!0}getNodeType(e){return this.shaderNode.nodeType||this.getOutputNode(e).getNodeType(e)}getElementType(e){return this.getOutputNode(e).getElementType(e)}getMemberType(e,t){return this.getOutputNode(e).getMemberType(e,t)}call(e){const{shaderNode:t,rawInputs:n}=this,s=e.getNodeProperties(t),r=e.getClosestSubBuild(t.subBuilds)||"",a=r||"default";if(s[a])return s[a];const o=e.subBuildFn,l=e.fnCall;e.subBuildFn=r,e.fnCall=this;let c=null;if(t.layout){let u=ap.get(e.constructor);u===void 0&&(u=new WeakMap,ap.set(e.constructor,u));let h=u.get(t);h===void 0&&(h=ae(e.buildFunctionNode(t)),u.set(t,h)),e.addInclude(h);const f=n?yE(n):null;c=ae(h.call(f))}else{const u=new Proxy(e,{get:(g,x,p)=>{let y;return Symbol.iterator===x?y=function*(){yield void 0}:y=Reflect.get(g,x,p),y}}),h=n?SE(n):null,f=Array.isArray(n)?n.length>0:n!==null,d=t.jsFunc,m=f||d.length>1?d(h,u):d(u);c=ae(m)}return e.subBuildFn=o,e.fnCall=l,t.once&&(s[a]=c),c}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}getOutputNode(e){const t=e.getNodeProperties(this),n=e.getSubBuildOutput(this);return t[n]=t[n]||this.setupOutput(e),t[n].subBuild=e.getClosestSubBuild(this),t[n]}build(e,t=null){let n=null;const s=e.getBuildStage(),r=e.getNodeProperties(this),a=e.getSubBuildOutput(this),o=this.getOutputNode(e),l=e.fnCall;if(e.fnCall=this,s==="setup"){const c=e.getSubBuildProperty("initialized",this);if(r[c]!==!0&&(r[c]=!0,r[a]=this.getOutputNode(e),r[a].build(e),this.shaderNode.subBuilds))for(const u of e.chaining){const h=e.getDataFromNode(u,"any");h.subBuilds=h.subBuilds||new Set;for(const f of this.shaderNode.subBuilds)h.subBuilds.add(f)}n=r[a]}else s==="analyze"?o.build(e,t):s==="generate"&&(n=o.build(e,t)||"");return e.fnCall=l,n}}function yE(i){let e;return sf(i),i[0]&&(i[0].isNode||Object.getPrototypeOf(i[0])!==Object.prototype)?e=[...i]:e=i[0],e}function SE(i){let e=0;return sf(i),new Proxy(i,{get:(t,n,s)=>{let r;if(n==="length")return r=i.length,r;if(Symbol.iterator===n)r=function*(){for(const a of i)yield ae(a)};else{if(i.length>0)if(Object.getPrototypeOf(i[0])===Object.prototype){const a=i[0];a[n]===void 0?r=a[e++]:r=Reflect.get(a,n,s)}else i[0]instanceof ze&&(i[n]===void 0?r=i[e++]:r=Reflect.get(i,n,s));else r=Reflect.get(t,n,s);r=ae(r)}return r}})}class ME extends ze{constructor(e,t){super(t),this.jsFunc=e,this.layout=null,this.global=!0,this.once=!1}setLayout(e){return this.layout=e,this}getLayout(){return this.layout}call(e=null){return new vE(this,e)}setup(){return this.call()}}const TE=[!1,!0],bE=[0,1,2,3],EE=[-1,-2],E0=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],ef=new Map;for(const i of TE)ef.set(i,new Ii(i));const tf=new Map;for(const i of bE)tf.set(i,new Ii(i,"uint"));const nf=new Map([...tf].map(i=>new Ii(i.value,"int")));for(const i of EE)nf.set(i,new Ii(i,"int"));const Qc=new Map([...nf].map(i=>new Ii(i.value)));for(const i of E0)Qc.set(i,new Ii(i));for(const i of E0)Qc.set(-i,new Ii(-i));const el={bool:ef,uint:tf,ints:nf,float:Qc},op=new Map([...ef,...Qc]),vh=(i,e)=>op.has(i)?op.get(i):i.isNode===!0?i:new Ii(i,e),Gt=function(i,e=null){return(...t)=>{for(const s of t)if(s===void 0)return qt(`TSL: Invalid parameter for the type "${i}".`),ae(new Ii(0,i));if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>{const r=typeof s;return r!=="object"&&r!=="function"}))&&(t=[Kh(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return Yo(e.get(t[0]));if(t.length===1){const s=vh(t[0],i);return s.nodeType===i?Yo(s):Yo(new T0(s,i))}const n=t.map(s=>vh(s));return Yo(new oE(n,i))}},wE=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function AE(i,e){return new ME(i,e)}const ae=(i,e=null)=>mE(i,e),Yo=(i,e=null)=>ae(i,e).toVarIntent(),sf=(i,e=null)=>new xE(i,e),Ha=(i,e=null)=>new gE(i,e),Ut=(i,e=null,t=null,n=null)=>new b0(i,e,t,n),Ls=(i,...e)=>new _E(i,...e),ge=(i,e=null,t=null,n={})=>new b0(i,e,t,{...n,intent:!0});let CE=0;class RE extends ze{constructor(e,t=null){super();let n=null;t!==null&&(typeof t=="object"?n=t.return:(typeof t=="string"?n=t:qt("TSL: Invalid layout type."),t=null)),this.shaderNode=new AE(e,n),t!==null&&this.setLayout(t),this.isFn=!0}setLayout(e){const t=this.shaderNode.nodeType;if(typeof e.inputs!="object"){const n={name:"fn"+CE++,type:t,inputs:[]};for(const s in e)s!=="return"&&n.inputs.push({name:s,type:e[s]});e=n}return this.shaderNode.setLayout(e),this}getNodeType(e){return this.shaderNode.getNodeType(e)||"float"}call(...e){const t=this.shaderNode.call(e);return this.shaderNode.nodeType==="void"&&t.toStack(),t.toVarIntent()}once(e=null){return this.shaderNode.once=!0,this.shaderNode.subBuilds=e,this}generate(e){const t=this.getNodeType(e);return qt('TSL: "Fn()" was declared but not invoked. Try calling it like "Fn()( ...params )".'),e.generateConst(t)}}function rt(i,e=null){const t=new RE(i,e);return new Proxy(()=>{},{apply(n,s,r){return t.call(...r)},get(n,s,r){return Reflect.get(t,s,r)},set(n,s,r,a){return Reflect.set(t,s,r,a)}})}const NE=(...i)=>dE.If(...i);function PE(i){return i}H("toStack",PE);const LE=new Gt("color"),An=new Gt("float",el.float),sa=new Gt("int",el.ints),DE=new Gt("uint",el.uint),IE=new Gt("bool",el.bool),ha=new Gt("vec2"),UE=new Gt("ivec2"),FE=new Gt("uvec2"),OE=new Gt("bvec2"),pt=new Gt("vec3"),zE=new Gt("ivec3"),BE=new Gt("uvec3"),VE=new Gt("bvec3"),es=new Gt("vec4"),kE=new Gt("ivec4"),GE=new Gt("uvec4"),HE=new Gt("bvec4"),w0=new Gt("mat2"),ao=new Gt("mat3"),WE=new Gt("mat4");H("toColor",LE);H("toFloat",An);H("toInt",sa);H("toUint",DE);H("toBool",IE);H("toVec2",ha);H("toIVec2",UE);H("toUVec2",FE);H("toBVec2",OE);H("toVec3",pt);H("toIVec3",zE);H("toUVec3",BE);H("toBVec3",VE);H("toVec4",es);H("toIVec4",kE);H("toUVec4",GE);H("toBVec4",HE);H("toMat2",w0);H("toMat3",ao);H("toMat4",WE);const XE=Ut(ro).setParameterLength(2),qE=(i,e)=>ae(new T0(ae(i),e));H("element",XE);H("convert",qE);H("append",i=>(Ye("TSL: .append() has been renamed to .toStack()."),i));class YE extends hn{static get type(){return"AssignNode"}constructor(e,t){super(),this.targetNode=e,this.sourceNode=t,this.isAssignNode=!0}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return so.join("").slice(0,n)!==t.components}return!1}setup(e){const{targetNode:t,sourceNode:n}=this,s=t.getScope(),r=e.getNodeProperties(s);r.assign=!0;const a=e.getNodeProperties(this);a.sourceNode=n,a.targetNode=t.context({assign:!0})}generate(e,t){const{targetNode:n,sourceNode:s}=e.getNodeProperties(this),r=this.needsSplitAssign(e),a=n.build(e),o=n.getNodeType(e),l=s.build(e,o),c=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const f=e.getVarFromNode(this,null,o),d=e.getPropertyName(f);e.addLineFlowCode(`${d} = ${l}`,this);const m=n.node,x=m.node.context({assign:!0}).build(e);for(let p=0;p<m.components.length;p++){const y=m.components[p];e.addLineFlowCode(`${x}.${y} = ${d}[ ${p} ]`,this)}t!=="void"&&(h=a)}else h=`${a} = ${l}`,(t==="void"||c==="void")&&(e.addLineFlowCode(h,this),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const $E=Ut(YE).setParameterLength(2);H("assign",$E);class cp extends hn{static get type(){return"ArrayNode"}constructor(e,t,n=null){super(e),this.count=t,this.values=n,this.isArrayNode=!0}getArrayCount(){return this.count}getNodeType(e){return this.nodeType===null&&(this.nodeType=this.values[0].getNodeType(e)),this.nodeType}getElementType(e){return this.getNodeType(e)}generate(e){const t=this.getNodeType(e);return e.generateArray(t,this.count,this.values)}}const ZE=(...i)=>{let e;if(i.length===1){const t=i[0];e=new cp(null,t.length,t)}else{const t=i[0],n=i[1];e=new cp(t,n)}return ae(e)};H("toArray",(i,e)=>ZE(Array(e).fill(i)));class A0 extends ze{static get type(){return"UniformGroupNode"}constructor(e,t=!1,n=1){super("string"),this.name=e,this.shared=t,this.order=n,this.isUniformGroup=!0}serialize(e){super.serialize(e),e.name=this.name,e.version=this.version,e.shared=this.shared}deserialize(e){super.deserialize(e),this.name=e.name,this.version=e.version,this.shared=e.shared}}const jE=i=>new A0(i),C0=(i,e=0)=>new A0(i,!0,e),ra=C0("render"),KE=jE("object");class oo extends Qh{static get type(){return"UniformNode"}constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=KE}setName(e){return this.name=e,this}label(e){return Ye('TSL: "label()" has been deprecated. Use "setName()" instead.'),this.setName(e)}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){return e=e.bind(this),super.onUpdate(n=>{const s=e(n,this);s!==void 0&&(this.value=s)},t)}getInputType(e){let t=super.getInputType(e);return t==="bool"&&(t="uint"),t}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const a=r.getInputType(e),o=e.getUniformFromNode(r,a,e.shaderStage,this.name||e.context.nodeName),l=e.getPropertyName(o);e.context.nodeName!==void 0&&delete e.context.nodeName;let c=l;if(n==="bool"){const u=e.getDataFromNode(this);let h=u.propertyName;if(h===void 0){const f=e.getVarFromNode(this,null,"bool");h=e.getPropertyName(f),u.propertyName=h,c=e.format(l,a,n),e.addLineFlowCode(`${h} = ${c}`,this)}c=h}return e.format(c,n,t)}}const Jt=(i,e)=>{const t=wE(e||i);return t===i&&(i=Kh(t)),i=i&&i.isNode===!0?i.node&&i.node.value||i.value:i,ae(new oo(i,t))};class R0 extends ze{static get type(){return"PropertyNode"}constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0,this.global=!0}customCacheKey(){return S0(this.type+":"+(this.name||"")+":"+(this.varying?"1":"0"))}getHash(e){return this.name||super.getHash(e)}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const JE=(i,e)=>ae(new R0(i,e)),lp=Ls(R0,"vec4","Output");class QE extends hn{static get type(){return"FunctionCallNode"}constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}getMemberType(e,t){return this.functionNode.getMemberType(e,t)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters,a=(l,c)=>{const u=c.type,h=u==="pointer";let f;return h?f="&"+l.build(e):f=l.build(e,u),f};if(Array.isArray(r)){if(r.length>s.length)qt("TSL: The number of provided parameters exceeds the expected number of inputs in 'Fn()'."),r.length=s.length;else if(r.length<s.length)for(qt("TSL: The number of provided parameters is less than the expected number of inputs in 'Fn()'.");r.length<s.length;)r.push(An(0));for(let l=0;l<r.length;l++)t.push(a(r[l],s[l]))}else for(const l of s){const c=r[l.name];c!==void 0?t.push(a(c,l)):(qt(`TSL: Input '${l.name}' not found in 'Fn()'.`),t.push(a(An(0),l)))}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const e3=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Ha(e):sf(e[0]),new QE(ae(i),e));H("call",e3);const t3={"==":"equal","!=":"notEqual","<":"lessThan",">":"greaterThan","<=":"lessThanEqual",">=":"greaterThanEqual","%":"mod"};class Nt extends hn{static get type(){return"OperatorNode"}constructor(e,t,n,...s){if(super(),s.length>0){let r=new Nt(e,t,n);for(let a=0;a<s.length-1;a++)r=new Nt(e,r,s[a]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n,this.isOperatorNode=!0}getOperatorMethod(e,t){return e.getMethod(t3[this.op],t)}getNodeType(e,t=null){const n=this.op,s=this.aNode,r=this.bNode,a=s.getNodeType(e),o=r?r.getNodeType(e):null;if(a==="void"||o==="void")return t||"void";if(n==="%")return a;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(a);if(n==="!"||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="=="||n==="!="||n==="<"||n===">"||n==="<="||n===">="){const l=Math.max(e.getTypeLength(a),e.getTypeLength(o));return l>1?`bvec${l}`:"bool"}else{if(e.isMatrix(a)){if(o==="float")return a;if(e.isVector(o))return e.getVectorFromMatrix(a);if(e.isMatrix(o))return a}else if(e.isMatrix(o)){if(a==="float")return o;if(e.isVector(a))return e.getVectorFromMatrix(o)}return e.getTypeLength(o)>e.getTypeLength(a)?o:a}}generate(e,t){const n=this.op,{aNode:s,bNode:r}=this,a=this.getNodeType(e,t);let o=null,l=null;a!=="void"?(o=s.getNodeType(e),l=r?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="||n==="!="?e.isVector(o)?l=o:e.isVector(l)?o=l:o!==l&&(o=l="float"):n===">>"||n==="<<"?(o=a,l=e.changeComponentType(l,"uint")):n==="%"?(o=a,l=e.isInteger(o)&&e.isInteger(l)?l:o):e.isMatrix(o)?l==="float"?l="float":e.isVector(l)?l=e.getVectorFromMatrix(o):e.isMatrix(l)||(o=l=a):e.isMatrix(l)?o==="float"?o="float":e.isVector(o)?o=e.getVectorFromMatrix(l):o=l=a:o=l=a):o=l=a;const c=s.build(e,o),u=r?r.build(e,l):null,h=e.getFunctionOperator(n);if(t!=="void"){const f=e.renderer.coordinateSystem===$s;if(n==="=="||n==="!="||n==="<"||n===">"||n==="<="||n===">=")return f?e.isVector(o)?e.format(`${this.getOperatorMethod(e,t)}( ${c}, ${u} )`,a,t):e.format(`( ${c} ${n} ${u} )`,a,t):e.format(`( ${c} ${n} ${u} )`,a,t);if(n==="%")return e.isInteger(l)?e.format(`( ${c} % ${u} )`,a,t):e.format(`${this.getOperatorMethod(e,a)}( ${c}, ${u} )`,a,t);if(n==="!"||n==="~")return e.format(`(${n}${c})`,o,t);if(h)return e.format(`${h}( ${c}, ${u} )`,a,t);if(e.isMatrix(o)&&l==="float")return e.format(`( ${u} ${n} ${c} )`,a,t);if(o==="float"&&e.isMatrix(l))return e.format(`${c} ${n} ${u}`,a,t);{let d=`( ${c} ${n} ${u} )`;return!f&&a==="bool"&&e.isVector(o)&&e.isVector(l)&&(d=`all${d}`),e.format(d,a,t)}}else if(o!=="void")return h?e.format(`${h}( ${c}, ${u} )`,a,t):e.isMatrix(o)&&l==="float"?e.format(`${u} ${n} ${c}`,a,t):e.format(`${c} ${n} ${u}`,a,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const n3=ge(Nt,"+").setParameterLength(2,1/0).setName("add"),yh=ge(Nt,"-").setParameterLength(2,1/0).setName("sub"),fa=ge(Nt,"*").setParameterLength(2,1/0).setName("mul"),N0=ge(Nt,"/").setParameterLength(2,1/0).setName("div"),rf=ge(Nt,"%").setParameterLength(2).setName("mod"),P0=ge(Nt,"==").setParameterLength(2).setName("equal"),i3=ge(Nt,"!=").setParameterLength(2).setName("notEqual"),s3=ge(Nt,"<").setParameterLength(2).setName("lessThan"),r3=ge(Nt,">").setParameterLength(2).setName("greaterThan"),a3=ge(Nt,"<=").setParameterLength(2).setName("lessThanEqual"),o3=ge(Nt,">=").setParameterLength(2).setName("greaterThanEqual"),c3=ge(Nt,"&&").setParameterLength(2,1/0).setName("and"),l3=ge(Nt,"||").setParameterLength(2,1/0).setName("or"),u3=ge(Nt,"!").setParameterLength(1).setName("not"),h3=ge(Nt,"^^").setParameterLength(2).setName("xor"),f3=ge(Nt,"&").setParameterLength(2).setName("bitAnd"),d3=ge(Nt,"~").setParameterLength(1).setName("bitNot"),p3=ge(Nt,"|").setParameterLength(2).setName("bitOr"),m3=ge(Nt,"^").setParameterLength(2).setName("bitXor"),x3=ge(Nt,"<<").setParameterLength(2).setName("shiftLeft"),g3=ge(Nt,">>").setParameterLength(2).setName("shiftRight"),_3=rt(([i])=>(i.addAssign(1),i)),v3=rt(([i])=>(i.subAssign(1),i)),y3=rt(([i])=>{const e=sa(i).toConst();return i.addAssign(1),e}),S3=rt(([i])=>{const e=sa(i).toConst();return i.subAssign(1),e});H("add",n3);H("sub",yh);H("mul",fa);H("div",N0);H("mod",rf);H("equal",P0);H("notEqual",i3);H("lessThan",s3);H("greaterThan",r3);H("lessThanEqual",a3);H("greaterThanEqual",o3);H("and",c3);H("or",l3);H("not",u3);H("xor",h3);H("bitAnd",f3);H("bitNot",d3);H("bitOr",p3);H("bitXor",m3);H("shiftLeft",x3);H("shiftRight",g3);H("incrementBefore",_3);H("decrementBefore",v3);H("increment",y3);H("decrement",S3);const M3=(i,e)=>(Ye('TSL: "modInt()" is deprecated. Use "mod( int( ... ) )" instead.'),rf(sa(i),sa(e)));H("modInt",M3);class D extends hn{static get type(){return"MathNode"}constructor(e,t,n=null,s=null){if(super(),(e===D.MAX||e===D.MIN)&&arguments.length>3){let r=new D(e,t,n);for(let a=2;a<arguments.length-1;a++)r=new D(e,r,arguments[a]);t=r,n=arguments[arguments.length-1],s=null}this.method=e,this.aNode=t,this.bNode=n,this.cNode=s,this.isMathNode=!0}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),a=e.isMatrix(n)?0:e.getTypeLength(n),o=e.isMatrix(s)?0:e.getTypeLength(s);return r>a&&r>o?t:a>o?n:o>r?s:t}getNodeType(e){const t=this.method;return t===D.LENGTH||t===D.DISTANCE||t===D.DOT?"float":t===D.CROSS?"vec3":t===D.ALL||t===D.ANY?"bool":t===D.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):this.getInputType(e)}setup(e){const{aNode:t,bNode:n,method:s}=this;let r=null;if(s===D.ONE_MINUS)r=yh(1,t);else if(s===D.RECIPROCAL)r=N0(1,t);else if(s===D.DIFFERENCE)r=af(yh(t,n));else if(s===D.TRANSFORM_DIRECTION){let a=t,o=n;e.isMatrix(a.getNodeType(e))?o=es(pt(o),0):a=es(pt(a),0);const l=fa(a,o).xyz;r=L0(l)}return r!==null?r:super.setup(e)}generate(e,t){if(e.getNodeProperties(this).outputNode)return super.generate(e,t);let s=this.method;const r=this.getNodeType(e),a=this.getInputType(e),o=this.aNode,l=this.bNode,c=this.cNode,u=e.renderer.coordinateSystem;if(s===D.NEGATE)return e.format("( - "+o.build(e,a)+" )",r,t);{const h=[];return s===D.CROSS?h.push(o.build(e,r),l.build(e,r)):u===$s&&s===D.STEP?h.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":a),l.build(e,a)):u===$s&&(s===D.MIN||s===D.MAX)?h.push(o.build(e,a),l.build(e,e.getTypeLength(l.getNodeType(e))===1?"float":a)):s===D.REFRACT?h.push(o.build(e,a),l.build(e,a),c.build(e,"float")):s===D.MIX?h.push(o.build(e,a),l.build(e,a),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":a)):(u===Rc&&s===D.ATAN&&l!==null&&(s="atan2"),e.shaderStage!=="fragment"&&(s===D.DFDX||s===D.DFDY)&&(Ye(`TSL: '${s}' is not supported in the ${e.shaderStage} stage.`),s="/*"+s+"*/"),h.push(o.build(e,a)),l!==null&&h.push(l.build(e,a)),c!==null&&h.push(c.build(e,a))),e.format(`${e.getMethod(s,r)}( ${h.join(", ")} )`,r,t)}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}D.ALL="all";D.ANY="any";D.RADIANS="radians";D.DEGREES="degrees";D.EXP="exp";D.EXP2="exp2";D.LOG="log";D.LOG2="log2";D.SQRT="sqrt";D.INVERSE_SQRT="inversesqrt";D.FLOOR="floor";D.CEIL="ceil";D.NORMALIZE="normalize";D.FRACT="fract";D.SIN="sin";D.COS="cos";D.TAN="tan";D.ASIN="asin";D.ACOS="acos";D.ATAN="atan";D.ABS="abs";D.SIGN="sign";D.LENGTH="length";D.NEGATE="negate";D.ONE_MINUS="oneMinus";D.DFDX="dFdx";D.DFDY="dFdy";D.ROUND="round";D.RECIPROCAL="reciprocal";D.TRUNC="trunc";D.FWIDTH="fwidth";D.TRANSPOSE="transpose";D.DETERMINANT="determinant";D.INVERSE="inverse";D.EQUALS="equals";D.MIN="min";D.MAX="max";D.STEP="step";D.REFLECT="reflect";D.DISTANCE="distance";D.DIFFERENCE="difference";D.DOT="dot";D.CROSS="cross";D.POW="pow";D.TRANSFORM_DIRECTION="transformDirection";D.MIX="mix";D.CLAMP="clamp";D.REFRACT="refract";D.SMOOTHSTEP="smoothstep";D.FACEFORWARD="faceforward";const T3=An(Math.PI),b3=ge(D,D.ALL).setParameterLength(1),E3=ge(D,D.ANY).setParameterLength(1),w3=ge(D,D.RADIANS).setParameterLength(1),A3=ge(D,D.DEGREES).setParameterLength(1),C3=ge(D,D.EXP).setParameterLength(1),R3=ge(D,D.EXP2).setParameterLength(1),N3=ge(D,D.LOG).setParameterLength(1),P3=ge(D,D.LOG2).setParameterLength(1),L3=ge(D,D.SQRT).setParameterLength(1),D3=ge(D,D.INVERSE_SQRT).setParameterLength(1),I3=ge(D,D.FLOOR).setParameterLength(1),U3=ge(D,D.CEIL).setParameterLength(1),L0=ge(D,D.NORMALIZE).setParameterLength(1),Pc=ge(D,D.FRACT).setParameterLength(1),D0=ge(D,D.SIN).setParameterLength(1),F3=ge(D,D.COS).setParameterLength(1),O3=ge(D,D.TAN).setParameterLength(1),z3=ge(D,D.ASIN).setParameterLength(1),B3=ge(D,D.ACOS).setParameterLength(1),I0=ge(D,D.ATAN).setParameterLength(1,2),af=ge(D,D.ABS).setParameterLength(1),U0=ge(D,D.SIGN).setParameterLength(1),V3=ge(D,D.LENGTH).setParameterLength(1),k3=ge(D,D.NEGATE).setParameterLength(1),G3=ge(D,D.ONE_MINUS).setParameterLength(1),H3=ge(D,D.DFDX).setParameterLength(1),W3=ge(D,D.DFDY).setParameterLength(1),X3=ge(D,D.ROUND).setParameterLength(1),q3=ge(D,D.RECIPROCAL).setParameterLength(1),Y3=ge(D,D.TRUNC).setParameterLength(1),$3=ge(D,D.FWIDTH).setParameterLength(1),Z3=ge(D,D.TRANSPOSE).setParameterLength(1),j3=ge(D,D.DETERMINANT).setParameterLength(1),K3=ge(D,D.INVERSE).setParameterLength(1),J3=(i,e)=>(Ye('TSL: "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"'),P0(i,e)),Q3=ge(D,D.MIN).setParameterLength(2,1/0),ew=ge(D,D.MAX).setParameterLength(2,1/0),tw=ge(D,D.STEP).setParameterLength(2),nw=ge(D,D.REFLECT).setParameterLength(2),iw=ge(D,D.DISTANCE).setParameterLength(2),sw=ge(D,D.DIFFERENCE).setParameterLength(2),tl=ge(D,D.DOT).setParameterLength(2),rw=ge(D,D.CROSS).setParameterLength(2),F0=ge(D,D.POW).setParameterLength(2),aw=i=>fa(i,i),ow=i=>fa(i,i,i),cw=i=>fa(i,i,i,i),lw=ge(D,D.TRANSFORM_DIRECTION).setParameterLength(2),uw=i=>fa(U0(i),F0(af(i),1/3)),O0=i=>tl(i,i),of=ge(D,D.MIX).setParameterLength(3),z0=(i,e=0,t=1)=>ae(new D(D.CLAMP,ae(i),ae(e),ae(t))),hw=i=>z0(i),fw=ge(D,D.REFRACT).setParameterLength(3),cf=ge(D,D.SMOOTHSTEP).setParameterLength(3),dw=ge(D,D.FACEFORWARD).setParameterLength(3),pw=rt(([i])=>{const n=43758.5453,s=tl(i.xy,ha(12.9898,78.233)),r=rf(s,T3);return Pc(D0(r).mul(n))}),mw=(i,e,t)=>of(e,t,i),xw=(i,e,t)=>cf(e,t,i),gw=(i,e)=>tw(e,i),_w=(i,e)=>(Ye('TSL: "atan2" is overloaded. Use "atan" instead.'),I0(i,e));H("all",b3);H("any",E3);H("equals",J3);H("radians",w3);H("degrees",A3);H("exp",C3);H("exp2",R3);H("log",N3);H("log2",P3);H("sqrt",L3);H("inverseSqrt",D3);H("floor",I3);H("ceil",U3);H("normalize",L0);H("fract",Pc);H("sin",D0);H("cos",F3);H("tan",O3);H("asin",z3);H("acos",B3);H("atan",I0);H("abs",af);H("sign",U0);H("length",V3);H("lengthSq",O0);H("negate",k3);H("oneMinus",G3);H("dFdx",H3);H("dFdy",W3);H("round",X3);H("reciprocal",q3);H("trunc",Y3);H("fwidth",$3);H("atan2",_w);H("min",Q3);H("max",ew);H("step",gw);H("reflect",nw);H("distance",iw);H("dot",tl);H("cross",rw);H("pow",F0);H("pow2",aw);H("pow3",ow);H("pow4",cw);H("transformDirection",lw);H("mix",mw);H("clamp",z0);H("refract",fw);H("smoothstep",xw);H("faceForward",dw);H("difference",sw);H("saturate",hw);H("cbrt",uw);H("transpose",Z3);H("determinant",j3);H("inverse",K3);H("rand",pw);class vw extends ze{static get type(){return"ConditionalNode"}constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const{ifNode:t,elseNode:n}=e.getNodeProperties(this);if(t===void 0)return e.flowBuildStage(this,"setup"),this.getNodeType(e);const s=t.getNodeType(e);if(n!==null){const r=n.getNodeType(e);if(e.getTypeLength(r)>e.getTypeLength(s))return r}return s}setup(e){const t=this.condNode,n=this.ifNode.isolate(),s=this.elseNode?this.elseNode.isolate():null,r=e.context.nodeBlock;e.getDataFromNode(n).parentNodeBlock=r,s!==null&&(e.getDataFromNode(s).parentNodeBlock=r);const a=e.context.uniformFlow,o=e.getNodeProperties(this);o.condNode=t,o.ifNode=a?n:n.context({nodeBlock:n}),o.elseNode=s?a?s:s.context({nodeBlock:s}):null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:a,elseNode:o}=e.getNodeProperties(this),l=e.currentFunctionNode,c=t!=="void",u=c?JE(n).build(e):"";s.nodeProperty=u;const h=r.build(e,"bool");if(e.context.uniformFlow&&o!==null){const m=a.build(e,n),g=o.build(e,n),x=e.getTernary(h,m,g);return e.format(x,n,t)}e.addFlowCode(`
${e.tab}if ( ${h} ) {

`).addFlowTab();let d=a.build(e,n);if(d&&(c?d=u+" = "+d+";":(d="return "+d+";",l===null&&(Ye("TSL: Return statement used in an inline 'Fn()'. Define a layout struct to allow return values."),d="// "+d))),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+"}"),o!==null){e.addFlowCode(` else {

`).addFlowTab();let m=o.build(e,n);m&&(c?m=u+" = "+m+";":(m="return "+m+";",l===null&&(Ye("TSL: Return statement used in an inline 'Fn()'. Define a layout struct to allow return values."),m="// "+m))),e.removeFlowTab().addFlowCode(e.tab+"	"+m+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(u,n,t)}}const lf=Ut(vw).setParameterLength(2,3);H("select",lf);class yw extends ze{static get type(){return"ContextNode"}constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.value=t}getScope(){return this.node.getScope()}getNodeType(e){return this.node.getNodeType(e)}getMemberType(e,t){return this.node.getMemberType(e,t)}analyze(e){const t=e.addContext(this.value);this.node.build(e),e.setContext(t)}setup(e){const t=e.addContext(this.value);this.node.build(e),e.setContext(t)}generate(e,t){const n=e.addContext(this.value),s=this.node.build(e,t);return e.setContext(n),s}}const uf=Ut(yw).setParameterLength(1,2),Sw=i=>uf(i,{uniformFlow:!0}),B0=(i,e)=>uf(i,{nodeName:e});function Mw(i,e){return Ye('TSL: "label()" has been deprecated. Use "setName()" instead.'),B0(i,e)}H("context",uf);H("label",Mw);H("uniformFlow",Sw);H("setName",B0);class Tw extends ze{static get type(){return"VarNode"}constructor(e,t=null,n=!1){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0,this.readOnly=n,this.parents=!0,this.intent=!1}setIntent(e){return this.intent=e,this}getIntent(){return this.intent}getMemberType(e,t){return this.node.getMemberType(e,t)}getElementType(e){return this.node.getElementType(e)}getNodeType(e){return this.node.getNodeType(e)}getArrayCount(e){return this.node.getArrayCount(e)}isAssign(e){let n=e.getNodeProperties(this).assign;return n!==!0&&this.node.isShaderCallNodeInternal&&this.node.shaderNode.getLayout()===null&&e.fnCall&&e.fnCall.shaderNode&&e.getDataFromNode(this.node.shaderNode).hasLoop&&(n=!0),n}build(...e){const t=e[0];return this._hasStack(t)===!1&&t.buildStage==="setup"&&(t.context.nodeLoop||t.context.nodeBlock)&&t.getBaseStack().addToStack(this),this.intent===!0&&this.isAssign(t)!==!0?this.node.build(...e):super.build(...e)}generate(e){const{node:t,name:n,readOnly:s}=this,{renderer:r}=e,a=r.backend.isWebGPUBackend===!0;let o=!1,l=!1;s&&(o=e.isDeterministic(t),l=a?s:o);const c=this.getNodeType(e);if(c=="void")return this.intent!==!0&&qt('TSL: ".toVar()" can not be used with void type.'),t.build(e);const u=e.getVectorType(c),h=t.build(e,u),f=e.getVarFromNode(this,n,u,void 0,l),d=e.getPropertyName(f);let m=d;if(l)if(a)m=o?`const ${d}`:`let ${d}`;else{const g=t.getArrayCount(e);m=`const ${e.getVar(f.type,d,g)}`}return e.addLineFlowCode(`${m} = ${h}`,this),d}_hasStack(e){return e.getDataFromNode(this).stack!==void 0}}const hf=Ut(Tw),bw=(i,e=null)=>hf(i,e).toStack(),Ew=(i,e=null)=>hf(i,e,!0).toStack(),ww=i=>hf(i).setIntent(!0).toStack();H("toVar",bw);H("toConst",Ew);H("toVarIntent",ww);class Aw extends ze{static get type(){return"SubBuild"}constructor(e,t,n=null){super(n),this.node=e,this.name=t,this.isSubBuildNode=!0}getNodeType(e){if(this.nodeType!==null)return this.nodeType;e.addSubBuild(this.name);const t=this.node.getNodeType(e);return e.removeSubBuild(),t}build(e,...t){e.addSubBuild(this.name);const n=this.node.build(e,...t);return e.removeSubBuild(),n}}const Cw=(i,e,t=null)=>ae(new Aw(ae(i),e,t));class Rw extends ze{static get type(){return"VaryingNode"}constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0,this.interpolationType=null,this.interpolationSampling=null,this.global=!0}setInterpolation(e,t=null){return this.interpolationType=e,this.interpolationSampling=t,this}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e),a=this.interpolationType,o=this.interpolationSampling;t.varying=n=e.getVaryingFromNode(this,s,r,a,o),t.node=Cw(this.node,"VERTEX")}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e),e.flowNodeFromShaderStage(Go.VERTEX,this.node)}analyze(e){this.setupVarying(e),e.flowNodeFromShaderStage(Go.VERTEX,this.node)}generate(e){const t=e.getSubBuildProperty("property",e.currentStack),n=e.getNodeProperties(this),s=this.setupVarying(e);if(n[t]===void 0){const r=this.getNodeType(e),a=e.getPropertyName(s,Go.VERTEX);e.flowNodeFromShaderStage(Go.VERTEX,n.node,r,a),n[t]=a}return e.getPropertyName(s)}}const hr=Ut(Rw).setParameterLength(1,2),Nw=i=>hr(i);H("toVarying",hr);H("toVertexStage",Nw);H("varying",(...i)=>(Ye("TSL: .varying() has been renamed to .toVarying()."),hr(...i)));H("vertexStage",(...i)=>(Ye("TSL: .vertexStage() has been renamed to .toVertexStage()."),hr(...i)));const Pw=rt(([i])=>{const e=i.mul(.9478672986).add(.0521327014).pow(2.4),t=i.mul(.0773993808),n=i.lessThanEqual(.04045);return of(e,t,n)}).setLayout({name:"sRGBTransferEOTF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Lw=rt(([i])=>{const e=i.pow(.41666).mul(1.055).sub(.055),t=i.mul(12.92),n=i.lessThanEqual(.0031308);return of(e,t,n)}).setLayout({name:"sRGBTransferOETF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),ff="WorkingColorSpace",Dw="OutputColorSpace";class V0 extends hn{static get type(){return"ColorSpaceNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this.source=t,this.target=n}resolveColorSpace(e,t){return t===ff?Wt.workingColorSpace:t===Dw?e.context.outputColorSpace||e.renderer.outputColorSpace:t}setup(e){const{colorNode:t}=this,n=this.resolveColorSpace(e,this.source),s=this.resolveColorSpace(e,this.target);let r=t;return Wt.enabled===!1||n===s||!n||!s||(Wt.getTransfer(n)===ka&&(r=es(Pw(r.rgb),r.a)),Wt.getPrimaries(n)!==Wt.getPrimaries(s)&&(r=es(ao(Wt._getMatrix(new Di,n,s)).mul(r.rgb),r.a)),Wt.getTransfer(s)===ka&&(r=es(Lw(r.rgb),r.a))),r}}const Iw=(i,e)=>ae(new V0(ae(i),ff,e)),k0=(i,e)=>ae(new V0(ae(i),e,ff));H("workingToColorSpace",Iw);H("colorSpaceToWorking",k0);let Uw=class extends ro{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}};class Fw extends ze{static get type(){return"ReferenceBaseNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.updateType=Rt.OBJECT}setGroup(e){return this.group=e,this}element(e){return ae(new Uw(this,ae(e)))}setNodeType(e){const t=Jt(null,e);this.group!==null&&t.setGroup(this.group),this.node=t}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}class Ow extends Fw{static get type(){return"RendererReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.renderer=n,this.setGroup(ra)}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const zw=(i,e,t=null)=>ae(new Ow(i,e,t));class Bw extends hn{static get type(){return"ToneMappingNode"}constructor(e,t=kw,n=null){super("vec3"),this._toneMapping=e,this.exposureNode=t,this.colorNode=n}customCacheKey(){return M0(this._toneMapping)}setToneMapping(e){return this._toneMapping=e,this}getToneMapping(){return this._toneMapping}setup(e){const t=this.colorNode||e.context.color,n=this._toneMapping;if(n===xh)return t;let s=null;const r=e.renderer.library.getToneMappingFunction(n);return r!==null?s=es(r(t.rgb,this.exposureNode),t.a):(qt("ToneMappingNode: Unsupported Tone Mapping configuration.",n),s=t),s}}const Vw=(i,e,t)=>ae(new Bw(i,ae(e),ae(t))),kw=zw("toneMappingExposure","float");H("toneMapping",(i,e,t)=>Vw(e,t,i));const Bt=new Oe,$o=new jn;let Gw=0;class Hw{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=$b,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}const pn=new Oe;class df{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ph("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Hw(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new df(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ph("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ww{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=Xr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}class Xw extends Qh{static get type(){return"BufferAttributeNode"}constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Cc,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,a=this.bufferOffset,o=n.isInterleavedBuffer===!0?n:new Ww(n,r),l=new df(o,s,a);o.setUsage(this.usage),this.attribute=l,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=hr(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const qw=(i,e=null,t=0,n=0)=>ae(new Xw(i,e,t,n));H("toAttribute",i=>qw(i.value));class Yw extends ze{static get type(){return"ComputeNode"}constructor(e,t){super("void"),this.isComputeNode=!0,this.computeNode=e,this.workgroupSize=t,this.count=null,this.version=1,this.name="",this.updateBeforeType=Rt.OBJECT,this.onInitFunction=null}setCount(e){return this.count=e,this}getCount(){return this.count}dispose(){this.dispatchEvent({type:"dispose"})}setName(e){return this.name=e,this}label(e){return Ye('TSL: "label()" has been deprecated. Use "setName()" instead.'),this.setName(e)}onInit(e){return this.onInitFunction=e,this}updateBefore({renderer:e}){e.compute(this)}setup(e){const t=this.computeNode.build(e);if(t){const n=e.getNodeProperties(this);n.outputComputeNode=t.outputNode,t.outputNode=null}return t}generate(e,t){const{shaderStage:n}=e;if(n==="compute"){const s=this.computeNode.build(e,"void");s!==""&&e.addLineFlowCode(s,this)}else{const r=e.getNodeProperties(this).outputComputeNode;if(r)return r.build(e,t)}}}const G0=(i,e=[64])=>{(e.length===0||e.length>3)&&qt("TSL: compute() workgroupSize must have 1, 2, or 3 elements");for(let t=0;t<e.length;t++){const n=e[t];(typeof n!="number"||n<=0||!Number.isInteger(n))&&qt(`TSL: compute() workgroupSize element at index [ ${t} ] must be a positive integer`)}for(;e.length<3;)e.push(1);return ae(new Yw(ae(i),e))},$w=(i,e,t)=>G0(i,t).setCount(e);H("compute",$w);H("computeKernel",G0);class Zw extends ze{static get type(){return"IsolateNode"}constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isIsolateNode=!0}getNodeType(e){const t=e.getCache(),n=e.getCacheFromNode(this,this.parent);e.setCache(n);const s=this.node.getNodeType(e);return e.setCache(t),s}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,this.parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}setParent(e){return this.parent=e,this}getParent(){return this.parent}}const H0=i=>new Zw(ae(i));function jw(i,e=!0){return Ye('TSL: "cache()" has been deprecated. Use "isolate()" instead.'),H0(i).setParent(e)}H("cache",jw);H("isolate",H0);class Kw extends ze{static get type(){return"BypassNode"}constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t,this),this.outputNode.build(e)}}const Jw=Ut(Kw).setParameterLength(2);H("bypass",Jw);class W0 extends ze{static get type(){return"RemapNode"}constructor(e,t,n,s=An(0),r=An(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:a}=this;let o=e.sub(t).div(n.sub(t));return a===!0&&(o=o.clamp()),o.mul(r.sub(s)).add(s)}}const Qw=Ut(W0,null,null,{doClamp:!1}).setParameterLength(3,5),eA=Ut(W0).setParameterLength(3,5);H("remap",Qw);H("remapClamp",eA);class tA extends ze{static get type(){return"ExpressionNode"}constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s,this);else return e.format(s,n,t)}}const Lc=Ut(tA).setParameterLength(1,2),nA=i=>(i?lf(i,Lc("discard")):Lc("discard")).toStack();H("discard",nA);class iA extends hn{static get type(){return"RenderOutputNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this._toneMapping=t,this.outputColorSpace=n,this.isRenderOutputNode=!0}setToneMapping(e){return this._toneMapping=e,this}getToneMapping(){return this._toneMapping}setup({context:e}){let t=this.colorNode||e.color;const n=(this._toneMapping!==null?this._toneMapping:e.toneMapping)||xh,s=(this.outputColorSpace!==null?this.outputColorSpace:e.outputColorSpace)||Ac;return n!==xh&&(t=t.toneMapping(n)),s!==Ac&&s!==Wt.workingColorSpace&&(t=t.workingToColorSpace(s)),t}}const sA=(i,e=null,t=null)=>ae(new iA(ae(i),e,t));H("renderOutput",sA);class rA extends hn{static get type(){return"DebugNode"}constructor(e,t=null){super(),this.node=e,this.callback=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){return this.node.build(e)}analyze(e){return this.node.build(e)}generate(e){const t=this.callback,n=this.node.build(e),s="--- TSL debug - "+e.shaderStage+" shader ---",r="-".repeat(s.length);let a="";return a+="// #"+s+`#
`,a+=e.flow.code.replace(/^\t/mg,"")+`
`,a+="/* ... */ "+n+` /* ... */
`,a+="// #"+r+`#
`,t!==null?t(e,a):ph(a),n}}const aA=(i,e=null)=>ae(new rA(ae(i),e)).toStack();H("debug",aA);class oA{constructor(){this._renderer=null,this.currentFrame=null}get nodeFrame(){return this._renderer._nodes.nodeFrame}setRenderer(e){return this._renderer=e,this}getRenderer(){return this._renderer}init(){}begin(){}finish(){}inspect(){}computeAsync(){}beginCompute(){}finishCompute(){}beginRender(){}finishRender(){}copyTextureToTexture(){}copyFramebufferToTexture(){}}class cA extends ze{static get type(){return"InspectorNode"}constructor(e,t="",n=null){super(),this.node=e,this.name=t,this.callback=n,this.updateType=Rt.FRAME,this.isInspectorNode=!0}getName(){return this.name||this.node.name}update(e){e.renderer.inspector.inspect(this)}getNodeType(e){return this.node.getNodeType(e)}setup(e){let t=this.node;return e.context.inspector===!0&&this.callback!==null&&(t=this.callback(t)),e.renderer.backend.isWebGPUBackend!==!0&&e.renderer.inspector.constructor!==oA&&mh('TSL: ".toInspector()" is only available with WebGPU.'),t}}function lA(i,e="",t=null){return i=ae(i),i.before(new cA(i,e,t))}H("toInspector",lA);class uA extends ze{static get type(){return"AttributeNode"}constructor(e,t=null){super(t),this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=this.nodeType;if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),a=e.getTypeFromAttribute(r),o=e.getAttribute(t,a);return e.shaderStage==="vertex"?e.format(o.name,a,n):hr(this).build(e,n)}else return Ye(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}serialize(e){super.serialize(e),e.global=this.global,e._attributeName=this._attributeName}deserialize(e){super.deserialize(e),this.global=e.global,this._attributeName=e._attributeName}}const pf=(i,e=null)=>ae(new uA(i,e));class Fn extends ze{static get type(){return"IndexNode"}constructor(e){super("uint"),this.scope=e,this.isIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===Fn.VERTEX)s=e.getVertexIndex();else if(n===Fn.INSTANCE)s=e.getInstanceIndex();else if(n===Fn.DRAW)s=e.getDrawIndex();else if(n===Fn.INVOCATION_LOCAL)s=e.getInvocationLocalIndex();else if(n===Fn.INVOCATION_SUBGROUP)s=e.getInvocationSubgroupIndex();else if(n===Fn.SUBGROUP)s=e.getSubgroupIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=hr(this).build(e,t),r}}Fn.VERTEX="vertex";Fn.INSTANCE="instance";Fn.SUBGROUP="subgroup";Fn.INVOCATION_LOCAL="invocationLocal";Fn.INVOCATION_SUBGROUP="invocationSubgroup";Fn.DRAW="draw";class X0{constructor(e=new Oe(1/0,1/0,1/0),t=new Oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),jo.subVectors(this.max,Ma),Pr.subVectors(e.a,Ma),Lr.subVectors(e.b,Ma),Dr.subVectors(e.c,Ma),ps.subVectors(Lr,Pr),ms.subVectors(Dr,Lr),ks.subVectors(Pr,Dr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-ks.z,ks.y,ps.z,0,-ps.x,ms.z,0,-ms.x,ks.z,0,-ks.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-ks.y,ks.x,0];return!Zl(t,Pr,Lr,Dr,jo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Pr,Lr,Dr,jo))?!1:(Ko.crossVectors(ps,ms),t=[Ko.x,Ko.y,Ko.z],Zl(t,Pr,Lr,Dr,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new Oe,new Oe,new Oe,new Oe,new Oe,new Oe,new Oe,new Oe],ri=new Oe,Zo=new X0,Pr=new Oe,Lr=new Oe,Dr=new Oe,ps=new Oe,ms=new Oe,ks=new Oe,Ma=new Oe,jo=new Oe,Ko=new Oe,Gs=new Oe;function Zl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gs.fromArray(i,r);const o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),u=n.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hA=new X0,Ta=new Oe,jl=new Oe;class fA{constructor(e=new Oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hA.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(jl)),this.expandByPoint(Ta.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const up=new fA;class bt extends ze{static get type(){return"Object3DNode"}constructor(e,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Rt.OBJECT,this.uniformNode=new oo(null)}getNodeType(){const e=this.scope;if(e===bt.WORLD_MATRIX)return"mat4";if(e===bt.POSITION||e===bt.VIEW_POSITION||e===bt.DIRECTION||e===bt.SCALE)return"vec3";if(e===bt.RADIUS)return"float"}update(e){const t=this.object3d,n=this.uniformNode,s=this.scope;if(s===bt.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===bt.POSITION)n.value=n.value||new Oe,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===bt.SCALE)n.value=n.value||new Oe,n.value.setFromMatrixScale(t.matrixWorld);else if(s===bt.DIRECTION)n.value=n.value||new Oe,t.getWorldDirection(n.value);else if(s===bt.VIEW_POSITION){const r=e.camera;n.value=n.value||new Oe,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}else if(s===bt.RADIUS){const r=e.object.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),up.copy(r.boundingSphere).applyMatrix4(t.matrixWorld),n.value=up.radius}}generate(e){const t=this.scope;return t===bt.WORLD_MATRIX?this.uniformNode.nodeType="mat4":t===bt.POSITION||t===bt.VIEW_POSITION||t===bt.DIRECTION||t===bt.SCALE?this.uniformNode.nodeType="vec3":t===bt.RADIUS&&(this.uniformNode.nodeType="float"),this.uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}bt.WORLD_MATRIX="worldMatrix";bt.POSITION="position";bt.SCALE="scale";bt.VIEW_POSITION="viewPosition";bt.DIRECTION="direction";bt.RADIUS="radius";class q0 extends oo{static get type(){return"BufferNode"}constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const dA=(i,e,t)=>ae(new q0(i,e,t));class pA extends ro{static get type(){return"UniformArrayElementNode"}constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}generate(e){const t=super.generate(e),n=this.getNodeType(),s=this.node.getPaddedType();return e.format(t,s,n)}}class mA extends q0{static get type(){return"UniformArrayNode"}constructor(e,t=null){super(null),this.array=e,this.elementType=t===null?Nc(e[0]):t,this.paddedType=this.getPaddedType(),this.updateType=Rt.RENDER,this.isArrayBufferNode=!0}getNodeType(){return this.paddedType}getElementType(){return this.elementType}getPaddedType(){const e=this.elementType;let t="vec4";return e==="mat2"?t="mat2":/mat/.test(e)===!0?t="mat4":e.charAt(0)==="i"?t="ivec4":e.charAt(0)==="u"&&(t="uvec4"),t}update(){const{array:e,value:t}=this,n=this.elementType;if(n==="float"||n==="int"||n==="uint")for(let s=0;s<e.length;s++){const r=s*4;t[r]=e[s]}else if(n==="color")for(let s=0;s<e.length;s++){const r=s*4,a=e[s];t[r]=a.r,t[r+1]=a.g,t[r+2]=a.b||0}else if(n==="mat2")for(let s=0;s<e.length;s++){const r=s*4,a=e[s];t[r]=a.elements[0],t[r+1]=a.elements[1],t[r+2]=a.elements[2],t[r+3]=a.elements[3]}else if(n==="mat3")for(let s=0;s<e.length;s++){const r=s*16,a=e[s];t[r]=a.elements[0],t[r+1]=a.elements[1],t[r+2]=a.elements[2],t[r+4]=a.elements[3],t[r+5]=a.elements[4],t[r+6]=a.elements[5],t[r+8]=a.elements[6],t[r+9]=a.elements[7],t[r+10]=a.elements[8],t[r+15]=1}else if(n==="mat4")for(let s=0;s<e.length;s++){const r=s*16,a=e[s];for(let o=0;o<a.elements.length;o++)t[r+o]=a.elements[o]}else for(let s=0;s<e.length;s++){const r=s*4,a=e[s];t[r]=a.x,t[r+1]=a.y,t[r+2]=a.z||0,t[r+3]=a.w||0}}setup(e){const t=this.array.length,n=this.elementType;let s=Float32Array;const r=this.paddedType,a=e.getTypeLength(r);return n.charAt(0)==="i"&&(s=Int32Array),n.charAt(0)==="u"&&(s=Uint32Array),this.value=new s(t*a),this.bufferCount=t,this.bufferType=r,super.setup(e)}element(e){return ae(new pA(this,ae(e)))}}const Y0=(i,e)=>ae(new mA(i,e));class xA extends ze{constructor(e){super("float"),this.name=e,this.isBuiltinNode=!0}generate(){return this.name}}const gA=Ut(xA).setParameterLength(1);let ba,Ea;class wt extends ze{static get type(){return"ScreenNode"}constructor(e){super(),this.scope=e,this._output=null,this.isViewportNode=!0}getNodeType(){return this.scope===wt.DPR?"float":this.scope===wt.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=Rt.NONE;return(this.scope===wt.SIZE||this.scope===wt.VIEWPORT||this.scope===wt.DPR)&&(e=Rt.RENDER),this.updateType=e,e}update({renderer:e}){const t=e.getRenderTarget();this.scope===wt.VIEWPORT?t!==null?Ea.copy(t.viewport):(e.getViewport(Ea),Ea.multiplyScalar(e.getPixelRatio())):this.scope===wt.DPR?this._output.value=e.getPixelRatio():t!==null?(ba.width=t.width,ba.height=t.height):e.getDrawingBufferSize(ba)}setup(){const e=this.scope;let t=null;return e===wt.SIZE?t=Jt(ba||(ba=new jn)):e===wt.VIEWPORT?t=Jt(Ea||(Ea=new Pi)):e===wt.DPR?t=Jt(1):t=ha($0.div(hp)),this._output=t,t}generate(e){if(this.scope===wt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(hp).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}wt.COORDINATE="coordinate";wt.VIEWPORT="viewport";wt.SIZE="size";wt.UV="uv";wt.DPR="dpr";const mf=Ls(wt,wt.UV),hp=Ls(wt,wt.SIZE),$0=Ls(wt,wt.COORDINATE),Z0=Ls(wt,wt.VIEWPORT);Z0.zw;Z0.xy;const _A=Jt(0,"uint").setName("u_cameraIndex").setGroup(C0("cameraIndex")).toVarying("v_cameraIndex"),wa=Jt("float").setName("cameraNear").setGroup(ra).onRenderUpdate(({camera:i})=>i.near),Aa=Jt("float").setName("cameraFar").setGroup(ra).onRenderUpdate(({camera:i})=>i.far),co=rt(({camera:i})=>{let e;if(i.isArrayCamera&&i.cameras.length>0){const t=[];for(const s of i.cameras)t.push(s.matrixWorldInverse);e=Y0(t).setGroup(ra).setName("cameraViewMatrices").element(i.isMultiViewCamera?gA("gl_ViewID_OVR"):_A).toConst("cameraViewMatrix")}else e=Jt("mat4").setName("cameraViewMatrix").setGroup(ra).onRenderUpdate(({camera:t})=>t.matrixWorldInverse);return e}).once()();class fp extends bt{static get type(){return"ModelNode"}constructor(e){super(e)}update(e){this.object3d=e.object,super.update(e)}}const vA=Ls(fp,fp.WORLD_MATRIX),yA=Jt(new Di).onObjectUpdate(({object:i},e)=>e.value.getNormalMatrix(i.matrixWorld)),SA=rt(i=>i.renderer.overrideNodes.modelViewMatrix||MA).once()().toVar("modelViewMatrix"),MA=co.mul(vA),Ci=rt(i=>i.context.setupPositionView().toVarying("v_positionView"),"vec3").once(["POSITION"])(),j0=rt(i=>{let e;return i.camera.isOrthographicCamera?e=pt(0,0,1):e=Ci.negate().toVarying("v_positionViewDirection").normalize(),e.toVar("positionViewDirection")},"vec3").once(["POSITION"])();class TA extends ze{static get type(){return"FrontFacingNode"}constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){if(e.shaderStage!=="fragment")return"true";const{material:t}=e;return t.side===m0?"false":e.getFrontFacing()}}const bA=Ls(TA),K0=An(bA).mul(2).sub(1),nl=rt(([i],{material:e})=>{const t=e.side;return t===m0?i=i.mul(-1):t===Wb&&(i=i.mul(K0)),i}),EA=pf("normal","vec3"),wA=rt(i=>i.geometry.hasAttribute("normal")===!1?(Ye('TSL: Vertex attribute "normal" not found on geometry.'),pt(0,1,0)):EA,"vec3").once()().toVar("normalLocal"),AA=Ci.dFdx().cross(Ci.dFdy()).normalize().toVar("normalFlat"),CA=rt(i=>{let e;return i.material.flatShading===!0?e=AA:e=J0(wA).toVarying("v_normalViewGeometry").normalize(),e},"vec3").once()().toVar("normalViewGeometry"),Qn=rt(({subBuildFn:i,material:e,context:t})=>{let n;return i==="NORMAL"||i==="VERTEX"?(n=CA,e.flatShading!==!0&&(n=nl(n))):n=t.setupNormal().context({getUV:null}),n},"vec3").once(["NORMAL","VERTEX"])().toVar("normalView"),RA=Qn.transformDirection(co).toVar("normalWorld"),NA=rt(({subBuildFn:i,context:e})=>{let t;return i==="NORMAL"||i==="VERTEX"?t=Qn:t=e.setupClearcoatNormal().context({getUV:null}),t},"vec3").once(["NORMAL","VERTEX"])().toVar("clearcoatNormalView"),J0=rt(([i],e)=>{const t=e.renderer.overrideNodes.modelNormalViewMatrix;if(t!==null)return t.transformDirection(i);const n=yA.mul(i);return co.transformDirection(n)});rt(()=>(Ye('TSL: "transformedNormalView" is deprecated. Use "normalView" instead.'),Qn)).once(["NORMAL","VERTEX"])();rt(()=>(Ye('TSL: "transformedNormalWorld" is deprecated. Use "normalWorld" instead.'),RA)).once(["NORMAL","VERTEX"])();rt(()=>(Ye('TSL: "transformedClearcoatNormalView" is deprecated. Use "clearcoatNormalView" instead.'),NA)).once(["NORMAL","VERTEX"])();class PA extends oo{static get type(){return"MaxMipLevelNode"}constructor(e){super(0),this._textureNode=e,this.updateType=Rt.FRAME}get textureNode(){return this._textureNode}get texture(){return this._textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const LA=Ut(PA).setParameterLength(1),il=(i=0)=>pf("uv"+(i>0?i:""),"vec2");class DA extends ze{static get type(){return"TextureSizeNode"}constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode===null?"0":this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const dp=Ut(DA).setParameterLength(1,2);let Ir;class IA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=qd("canvas")),Ir.width=e.width,Ir.height=e.height;const s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qd("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UA=0;class xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?IA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let FA=0;const Jl=new Oe;class Kn extends Jh{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,n=Ho,s=Ho,r=gh,a=g0,o=jb,l=qb,c=Kn.DEFAULT_ANISOTROPY,u=Ac){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Xr(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jn(0,0),this.repeat=new jn(1,1),this.center=new jn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Di,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Ho:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Ho:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Yh;Kn.DEFAULT_ANISOTROPY=1;const Q0=new Kn;class sl extends oo{static get type(){return"TextureNode"}constructor(e=Q0,t=null,n=null,s=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.biasNode=s,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.offsetNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Rt.NONE,this.referenceNode=null,this._value=e,this._matrixUniform=null,this._flipYUniform=null,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===_0?"uvec4":this.value.type===Yb?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return il(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){return this._matrixUniform===null&&(this._matrixUniform=Jt(this.value.matrix)),this._matrixUniform.mul(pt(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this}setupUV(e,t){return e.isFlipY()&&(this._flipYUniform===null&&(this._flipYUniform=Jt(!1)),t=t.toVar(),this.sampler?t=this._flipYUniform.select(t.flipY(),t):t=this._flipYUniform.select(t.setY(sa(dp(this,this.levelNode).y).sub(t.y).sub(1)),t)),t}setup(e){const t=e.getNodeProperties(this);t.referenceNode=this.referenceNode;const n=this.value;if(!n||n.isTexture!==!0)throw new Error("THREE.TSL: `texture( value )` function expects a valid instance of THREE.Texture().");const s=rt(()=>{let a=this.uvNode;return(a===null||e.context.forceUVContext===!0)&&e.context.getUV&&(a=e.context.getUV(this,e)),a||(a=this.getDefaultUV()),this.updateMatrix===!0&&(a=this.getTransformedUV(a)),a=this.setupUV(e,a),this.updateType=this._matrixUniform!==null||this._flipYUniform!==null?Rt.OBJECT:Rt.NONE,a})();let r=this.levelNode;r===null&&e.context.getTextureLevel&&(r=e.context.getTextureLevel(this)),t.uvNode=s,t.levelNode=r,t.biasNode=this.biasNode,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode,t.offsetNode=this.offsetNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateOffset(e,t){return t.build(e,"ivec2")}generateSnippet(e,t,n,s,r,a,o,l,c){const u=this.value;let h;return r?h=e.generateTextureBias(u,t,n,r,a,c):l?h=e.generateTextureGrad(u,t,n,l,a,c):o?h=e.generateTextureCompare(u,t,n,o,a,c):this.sampler===!1?h=e.generateTextureLoad(u,t,n,s,a,c):s?h=e.generateTextureLevel(u,t,n,s,a,c):h=e.generateTexture(u,t,n,a,c),h}generate(e,t){const n=this.value,s=e.getNodeProperties(this),r=super.generate(e,"property");if(/^sampler/.test(t))return r+"_sampler";if(e.isReference(t))return r;{const a=e.getDataFromNode(this);let o=a.propertyName;if(o===void 0){const{uvNode:u,levelNode:h,biasNode:f,compareNode:d,depthNode:m,gradNode:g,offsetNode:x}=s,p=this.generateUV(e,u),y=h?h.build(e,"float"):null,M=f?f.build(e,"float"):null,T=m?m.build(e,"int"):null,A=d?d.build(e,"float"):null,E=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,w=x?this.generateOffset(e,x):null,L=e.getVarFromNode(this);o=e.getPropertyName(L);const b=this.generateSnippet(e,r,p,y,M,T,A,E,w);e.addLineFlowCode(`${o} = ${b}`,this),a.snippet=b,a.propertyName=o}let l=o;const c=this.getNodeType(e);return e.needsToWorkingColorSpace(n)&&(l=k0(Lc(l,c),n.colorSpace).setup(e).build(e,c)),e.format(l,c,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){return Ye("TextureNode: .uv() has been renamed. Use .sample() instead."),this.sample(e)}sample(e){const t=this.clone();return t.uvNode=ae(e),t.referenceNode=this.getBase(),ae(t)}load(e){return this.sample(e).setSampler(!1)}blur(e){const t=this.clone();t.biasNode=ae(e).mul(LA(t)),t.referenceNode=this.getBase();const n=t.value;return t.generateMipmaps===!1&&(n&&n.generateMipmaps===!1||n.minFilter===ia||n.magFilter===ia)&&(Ye("TSL: texture().blur() requires mipmaps and sampling. Use .generateMipmaps=true and .minFilter/.magFilter=THREE.LinearFilter in the Texture."),t.biasNode=null),ae(t)}level(e){const t=this.clone();return t.levelNode=ae(e),t.referenceNode=this.getBase(),ae(t)}size(e){return dp(this,e)}bias(e){const t=this.clone();return t.biasNode=ae(e),t.referenceNode=this.getBase(),ae(t)}getBase(){return this.referenceNode?this.referenceNode.getBase():this}compare(e){const t=this.clone();return t.compareNode=ae(e),t.referenceNode=this.getBase(),ae(t)}grad(e,t){const n=this.clone();return n.gradNode=[ae(e),ae(t)],n.referenceNode=this.getBase(),ae(n)}depth(e){const t=this.clone();return t.depthNode=ae(e),t.referenceNode=this.getBase(),ae(t)}offset(e){const t=this.clone();return t.offsetNode=ae(e),t.referenceNode=this.getBase(),ae(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid,e.sampler=this.sampler,e.updateMatrix=this.updateMatrix,e.updateType=this.updateType}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value],this.sampler=e.sampler,this.updateMatrix=e.updateMatrix,this.updateType=e.updateType}update(){const e=this.value,t=this._matrixUniform;t!==null&&(t.value=e.matrix),e.matrixAutoUpdate===!0&&e.updateMatrix();const n=this._flipYUniform;n!==null&&(n.value=e.image instanceof ImageBitmap&&e.flipY===!0||e.isRenderTargetTexture===!0||e.isFramebufferTexture===!0||e.isDepthTexture===!0)}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode,this.biasNode);return e.sampler=this.sampler,e.depthNode=this.depthNode,e.compareNode=this.compareNode,e.gradNode=this.gradNode,e.offsetNode=this.offsetNode,e}}const OA=Ut(sl).setParameterLength(1,4).setName("texture"),zA=(i=Q0,e=null,t=null,n=null)=>{let s;return i&&i.isTextureNode===!0?(s=ae(i.clone()),s.referenceNode=i.getBase(),e!==null&&(s.uvNode=ae(e)),t!==null&&(s.levelNode=ae(t)),n!==null&&(s.biasNode=ae(n))):s=OA(i,e,t,n),s};class BA extends Kn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=ia,this.minFilter=ia,this.generateMipmaps=!1,this.needsUpdate=!0}}const Ur=new jn;class VA extends sl{static get type(){return"ViewportTextureNode"}constructor(e=mf,t=null,n=null){let s=null;n===null?(s=new BA,s.minFilter=g0,n=s):s=n,super(n,e,t),this.generateMipmaps=!1,this.defaultFramebuffer=s,this.isOutputTextureNode=!0,this.updateBeforeType=Rt.FRAME,this._cacheTextures=new WeakMap}getTextureForReference(e=null){let t,n;if(this.referenceNode?(t=this.referenceNode.defaultFramebuffer,n=this.referenceNode._cacheTextures):(t=this.defaultFramebuffer,n=this._cacheTextures),e===null)return t;if(n.has(e)===!1){const s=t.clone();n.set(e,s)}return n.get(e)}updateReference(e){const t=e.renderer.getRenderTarget();return this.value=this.getTextureForReference(t),this.value}updateBefore(e){const t=e.renderer,n=t.getRenderTarget();n===null?t.getDrawingBufferSize(Ur):Ur.set(n.width,n.height);const s=this.getTextureForReference(n);(s.image.width!==Ur.width||s.image.height!==Ur.height)&&(s.image.width=Ur.width,s.image.height=Ur.height,s.needsUpdate=!0);const r=s.generateMipmaps;s.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(s),s.generateMipmaps=r}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}class gf extends Kn{constructor(e,t,n=_0,s,r,a,o=ia,l=ia,c,u=Kd,h=1){if(u!==Kd&&u!==Kb)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}let Jo=null;class kA extends VA{static get type(){return"ViewportDepthTextureNode"}constructor(e=mf,t=null){Jo===null&&(Jo=new gf),super(e,t,Jo)}getTextureForReference(){return Jo}}const GA=Ut(kA).setParameterLength(0,2);class Tn extends ze{static get type(){return"ViewportDepthNode"}constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===Tn.DEPTH_BASE?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===Tn.DEPTH_BASE)n!==null&&(s=tx().assign(n));else if(t===Tn.DEPTH)e.isPerspectiveCamera?s=HA(Ci.z,wa,Aa):s=pc(Ci.z,wa,Aa);else if(t===Tn.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=ex(n,wa,Aa);s=pc(r,wa,Aa)}else s=n;else s=pc(Ci.z,wa,Aa);return s}}Tn.DEPTH_BASE="depthBase";Tn.DEPTH="depth";Tn.LINEAR_DEPTH="linearDepth";const pc=(i,e,t)=>i.add(e).div(e.sub(t)),HA=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),ex=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t)),tx=Ut(Tn,Tn.DEPTH_BASE),WA=Ls(Tn,Tn.DEPTH),XA=Ut(Tn,Tn.LINEAR_DEPTH).setParameterLength(0,1);GA();WA.assign=i=>tx(i);const Ql=new Oe,qA=new Oe,YA=new Di;class $A{constructor(e=new Oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ql.subVectors(n,t).cross(qA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||YA.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pp=new Ni,mp=new y0;class lo{constructor(e=0,t=0,n=0,s=lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lo.DEFAULT_ORDER="XYZ";class nx extends Jh{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gh,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pi(0,0,e,t),this.scissorTest=!1,this.viewport=new Pi(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Kn(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:gh,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}new $A;new Oe;new Oe;new Oe;new Ni;new Oe(0,0,-1);new Pi;new Oe;new Oe;new Pi;new jn;const ZA=new nx;mf.flipX();ZA.depthTexture=new gf(1,1);const xp=new lo,eu=new Ni,jA=Jt(0).onReference(({material:i})=>i).onObjectUpdate(({material:i})=>i.refractionRatio),KA=Jt(new Ni).onReference(function(i){return i.material}).onObjectUpdate(function({material:i,scene:e}){const t=e.environment!==null&&i.envMap===null?e.environmentRotation:i.envMapRotation;return t?(xp.copy(t),eu.makeRotationFromEuler(xp)):eu.identity(),eu}),JA=j0.negate().reflect(Qn),QA=j0.negate().refract(Qn,jA),e2=JA.transformDirection(co).toVar("reflectVector"),t2=QA.transformDirection(co).toVar("reflectVector");class n2 extends Kn{constructor(e=[],t=x0,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}const i2=new n2;class s2 extends sl{static get type(){return"CubeTextureNode"}constructor(e,t=null,n=null,s=null){super(e,t,n,s),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){const e=this.value;return e.mapping===x0?e2:e.mapping===Xb?t2:(qt('CubeTextureNode: Mapping "%s" not supported.',e.mapping),pt(0,0,0))}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return(e.renderer.coordinateSystem===Rc||!n.isRenderTargetTexture)&&(t=pt(t.x.negate(),t.yz)),KA.mul(t)}generateUV(e,t){return t.build(e,this.sampler===!0?"vec3":"ivec3")}}const r2=Ut(s2).setParameterLength(1,4).setName("cubeTexture"),a2=(i=i2,e=null,t=null,n=null)=>{let s;return i&&i.isCubeTextureNode===!0?(s=ae(i.clone()),s.referenceNode=i,e!==null&&(s.uvNode=ae(e)),t!==null&&(s.levelNode=ae(t)),n!==null&&(s.biasNode=ae(n))):s=r2(i,e,t,n),s};class o2 extends ro{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class ix extends ze{static get type(){return"ReferenceNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.name=null,this.updateType=Rt.OBJECT}element(e){return ae(new o2(this,ae(e)))}setGroup(e){return this.group=e,this}setName(e){return this.name=e,this}label(e){return Ye('TSL: "label()" has been deprecated. Use "setName()" instead.'),this.setName(e)}setNodeType(e){let t=null;this.count!==null?t=dA(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Y0(null,e):e==="texture"?t=zA(null):e==="cubeTexture"?t=a2(null):t=Jt(null,e),this.group!==null&&t.setGroup(this.group),this.name!==null&&t.setName(this.name),this.node=t}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Dc=(i,e,t)=>ae(new ix(i,e,t));class c2 extends ix{static get type(){return"MaterialReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.material=n,this.isMaterialReferenceNode=!0}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const l2=(i,e,t=null)=>ae(new c2(i,e,t)),sx=il(),u2=Ci.dFdx(),h2=Ci.dFdy(),rx=sx.dFdx(),ax=sx.dFdy(),ox=Qn,cx=h2.cross(ox),lx=ox.cross(u2),Sh=cx.mul(rx.x).add(lx.mul(ax.x)),Mh=cx.mul(rx.y).add(lx.mul(ax.y)),gp=Sh.dot(Sh).max(Mh.dot(Mh)),ux=gp.equal(0).select(0,gp.inverseSqrt()),f2=Sh.mul(ux).toVar("tangentViewFrame"),d2=Mh.mul(ux).toVar("bitangentViewFrame"),hx=rt(i=>(i.geometry.hasAttribute("tangent")===!1&&i.geometry.computeTangents(),pf("tangent","vec4")))(),p2=hx.xyz.toVar("tangentLocal"),fx=rt(({subBuildFn:i,geometry:e,material:t})=>{let n;return i==="VERTEX"||e.hasAttribute("tangent")?n=SA.mul(es(p2,0)).xyz.toVarying("v_tangentView").normalize():n=f2,t.flatShading!==!0&&(n=nl(n)),n},"vec3").once(["NORMAL","VERTEX"])().toVar("tangentView"),m2=rt(([i,e],{subBuildFn:t,material:n})=>{let s=i.mul(hx.w).xyz;return t==="NORMAL"&&n.flatShading!==!0&&(s=s.toVarying(e)),s}).once(["NORMAL"]),x2=rt(({subBuildFn:i,geometry:e,material:t})=>{let n;return i==="VERTEX"||e.hasAttribute("tangent")?n=m2(Qn.cross(fx),"v_bitangentView").normalize():n=d2,t.flatShading!==!0&&(n=nl(n)),n},"vec3").once(["NORMAL","VERTEX"])().toVar("bitangentView"),g2=ao(fx,x2,Qn).toVar("TBNViewMatrix");class _2 extends hn{static get type(){return"NormalMapNode"}constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Jd}setup({material:e}){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);if(n!==null){let a=n;e.flatShading===!0&&(a=nl(a)),s=pt(s.xy.mul(a),s.z)}let r=null;return t===Jb?r=J0(s):t===Jd?r=g2.mul(s).normalize():(qt(`NodeMaterial: Unsupported normal map type: ${t}`),r=Qn),r}}const _p=Ut(_2).setParameterLength(1,2),v2=rt(({textureNode:i,bumpScale:e})=>{const t=s=>i.isolate().context({getUV:r=>s(r.uvNode||il()),forceUVContext:!0}),n=An(t(s=>s));return ha(An(t(s=>s.add(s.dFdx()))).sub(n),An(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),y2=rt(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),a=t,o=r.cross(a),l=a.cross(s),c=s.dot(o).mul(K0),u=c.sign().mul(n.x.mul(o).add(n.y.mul(l)));return c.abs().mul(t).sub(u).normalize()});class S2 extends hn{static get type(){return"BumpMapNode"}constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=v2({textureNode:this.textureNode,bumpScale:e});return y2({surf_pos:Ci,surf_norm:Qn,dHdxy:t})}}const M2=Ut(S2).setParameterLength(1,2),vp=new Map;class Ee extends ze{static get type(){return"MaterialNode"}constructor(e){super(),this.scope=e}getCache(e,t){let n=vp.get(e);return n===void 0&&(n=l2(e,t),vp.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===Ee.COLOR){const r=t.color!==void 0?this.getColor(n):pt();t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===Ee.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===Ee.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=An(1);else if(n===Ee.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularIntensityMap&&t.specularIntensityMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r}else if(n===Ee.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===Ee.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===Ee.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===Ee.EMISSIVE){const r=this.getFloat("emissiveIntensity"),a=this.getColor(n).mul(r);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=a.mul(this.getTexture(n)):s=a}else if(n===Ee.NORMAL)t.normalMap?(s=_p(this.getTexture("normal"),this.getCache("normalScale","vec2")),s.normalMapType=t.normalMapType):t.bumpMap?s=M2(this.getTexture("bump").r,this.getFloat("bumpScale")):s=Qn;else if(n===Ee.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===Ee.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===Ee.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=_p(this.getTexture(n),this.getCache(n+"Scale","vec2")):s=Qn;else if(n===Ee.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===Ee.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===Ee.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=w0(Ca.x,Ca.y,Ca.y.negate(),Ca.x).mul(r.rg.mul(2).sub(ha(1)).normalize().mul(r.b))}else s=Ca;else if(n===Ee.IRIDESCENCE_THICKNESS){const r=Dc("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const a=Dc("0","float",t.iridescenceThicknessRange);s=r.sub(a).mul(this.getTexture(n).g).add(a)}else s=r}else if(n===Ee.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===Ee.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===Ee.IOR)s=this.getFloat(n);else if(n===Ee.LIGHT_MAP)s=this.getTexture(n).rgb.mul(this.getFloat("lightMapIntensity"));else if(n===Ee.AO)s=this.getTexture(n).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);else if(n===Ee.LINE_DASH_OFFSET)s=t.dashOffset?this.getFloat(n):An(0);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}Ee.ALPHA_TEST="alphaTest";Ee.COLOR="color";Ee.OPACITY="opacity";Ee.SHININESS="shininess";Ee.SPECULAR="specular";Ee.SPECULAR_STRENGTH="specularStrength";Ee.SPECULAR_INTENSITY="specularIntensity";Ee.SPECULAR_COLOR="specularColor";Ee.REFLECTIVITY="reflectivity";Ee.ROUGHNESS="roughness";Ee.METALNESS="metalness";Ee.NORMAL="normal";Ee.CLEARCOAT="clearcoat";Ee.CLEARCOAT_ROUGHNESS="clearcoatRoughness";Ee.CLEARCOAT_NORMAL="clearcoatNormal";Ee.EMISSIVE="emissive";Ee.ROTATION="rotation";Ee.SHEEN="sheen";Ee.SHEEN_ROUGHNESS="sheenRoughness";Ee.ANISOTROPY="anisotropy";Ee.IRIDESCENCE="iridescence";Ee.IRIDESCENCE_IOR="iridescenceIOR";Ee.IRIDESCENCE_THICKNESS="iridescenceThickness";Ee.IOR="ior";Ee.TRANSMISSION="transmission";Ee.THICKNESS="thickness";Ee.ATTENUATION_DISTANCE="attenuationDistance";Ee.ATTENUATION_COLOR="attenuationColor";Ee.LINE_SCALE="scale";Ee.LINE_DASH_SIZE="dashSize";Ee.LINE_GAP_SIZE="gapSize";Ee.LINE_WIDTH="linewidth";Ee.LINE_DASH_OFFSET="dashOffset";Ee.POINT_SIZE="size";Ee.DISPERSION="dispersion";Ee.LIGHT_MAP="light";Ee.AO="ao";const Ca=Jt(new jn).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});rt(([i])=>Pc(An(52.9829189).mul(Pc(tl(i,ha(.06711056,.00583715)))))).setLayout({name:"interleavedGradientNoise",type:"float",inputs:[{name:"position",type:"vec2"}]});class $i extends ze{static get type(){return"EventNode"}constructor(e,t){super("void"),this.eventType=e,this.callback=t,e===$i.OBJECT?this.updateType=Rt.OBJECT:e===$i.MATERIAL?this.updateType=Rt.RENDER:e===$i.BEFORE_OBJECT?this.updateBeforeType=Rt.OBJECT:e===$i.BEFORE_MATERIAL&&(this.updateBeforeType=Rt.RENDER)}update(e){this.callback(e)}updateBefore(e){this.callback(e)}}$i.OBJECT="object";$i.MATERIAL="material";$i.BEFORE_OBJECT="beforeObject";$i.BEFORE_MATERIAL="beforeMaterial";const Ra=new lo,tu=new Ni;class ys extends ze{static get type(){return"SceneNode"}constructor(e=ys.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ys.BACKGROUND_BLURRINESS?s=Dc("backgroundBlurriness","float",n):t===ys.BACKGROUND_INTENSITY?s=Dc("backgroundIntensity","float",n):t===ys.BACKGROUND_ROTATION?s=Jt("mat4").setName("backgroundRotation").setGroup(ra).onRenderUpdate(()=>{const r=n.background;return r!==null&&r.isTexture&&r.mapping!==Yh?(Ra.copy(n.backgroundRotation),Ra.x*=-1,Ra.y*=-1,Ra.z*=-1,tu.makeRotationFromEuler(Ra)):tu.identity(),tu}):qt("SceneNode: Unknown scope:",t),s}}ys.BACKGROUND_BLURRINESS="backgroundBlurriness";ys.BACKGROUND_INTENSITY="backgroundIntensity";ys.BACKGROUND_ROTATION="backgroundRotation";rt(({texture:i,uv:e})=>{const n=pt().toVar();return NE(e.x.lessThan(1e-4),()=>{n.assign(pt(1,0,0))}).ElseIf(e.y.lessThan(1e-4),()=>{n.assign(pt(0,1,0))}).ElseIf(e.z.lessThan(1e-4),()=>{n.assign(pt(0,0,1))}).ElseIf(e.x.greaterThan(1-1e-4),()=>{n.assign(pt(-1,0,0))}).ElseIf(e.y.greaterThan(1-1e-4),()=>{n.assign(pt(0,-1,0))}).ElseIf(e.z.greaterThan(1-1e-4),()=>{n.assign(pt(0,0,-1))}).Else(()=>{const r=i.sample(e.add(pt(-.01,0,0))).r.sub(i.sample(e.add(pt(.01,0,0))).r),a=i.sample(e.add(pt(0,-.01,0))).r.sub(i.sample(e.add(pt(0,.01,0))).r),o=i.sample(e.add(pt(0,0,-.01))).r.sub(i.sample(e.add(pt(0,0,.01))).r);n.assign(pt(r,a,o))}),n.normalize()});const Qo=new jn;class T2 extends sl{static get type(){return"PassTextureNode"}constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class yp extends T2{static get type(){return"PassMultipleTextureNode"}constructor(e,t,n=!1){super(e,null),this.textureName=t,this.previousTexture=n}updateTexture(){this.value=this.previousTexture?this.passNode.getPreviousTexture(this.textureName):this.passNode.getTexture(this.textureName)}setup(e){return this.updateTexture(),super.setup(e)}clone(){const e=new this.constructor(this.passNode,this.textureName,this.previousTexture);return e.uvNode=this.uvNode,e.levelNode=this.levelNode,e.biasNode=this.biasNode,e.sampler=this.sampler,e.depthNode=this.depthNode,e.compareNode=this.compareNode,e.gradNode=this.gradNode,e.offsetNode=this.offsetNode,e}}class rl extends hn{static get type(){return"PassNode"}constructor(e,t,n,s={}){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this.options=s,this._pixelRatio=1,this._width=1,this._height=1;const r=new gf;r.isRenderTargetTexture=!0,r.name="depth";const a=new nx(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zb,...s});a.texture.name="output",a.depthTexture=r,this.renderTarget=a,this._textures={output:a.texture,depth:r},this._textureNodes={},this._linearDepthNodes={},this._viewZNodes={},this._previousTextures={},this._previousTextureNodes={},this._cameraNear=Jt(0),this._cameraFar=Jt(0),this._mrt=null,this._layers=null,this._resolutionScale=1,this._viewport=null,this._scissor=null,this.isPassNode=!0,this.updateBeforeType=Rt.FRAME,this.global=!0}setResolutionScale(e){return this._resolutionScale=e,this}getResolutionScale(){return this._resolutionScale}setResolution(e){return Ye("PassNode: .setResolution() is deprecated. Use .setResolutionScale() instead."),this.setResolutionScale(e)}getResolution(){return Ye("PassNode: .getResolution() is deprecated. Use .getResolutionScale() instead."),this.getResolutionScale()}setLayers(e){return this._layers=e,this}getLayers(){return this._layers}setMRT(e){return this._mrt=e,this}getMRT(){return this._mrt}getTexture(e){let t=this._textures[e];return t===void 0&&(t=this.renderTarget.texture.clone(),t.name=e,this._textures[e]=t,this.renderTarget.textures.push(t)),t}getPreviousTexture(e){let t=this._previousTextures[e];return t===void 0&&(t=this.getTexture(e).clone(),this._previousTextures[e]=t),t}toggleTexture(e){const t=this._previousTextures[e];if(t!==void 0){const n=this._textures[e],s=this.renderTarget.textures.indexOf(n);this.renderTarget.textures[s]=t,this._textures[e]=t,this._previousTextures[e]=n,this._textureNodes[e].updateTexture(),this._previousTextureNodes[e].updateTexture()}}getTextureNode(e="output"){let t=this._textureNodes[e];return t===void 0&&(t=ae(new yp(this,e)),t.updateTexture(),this._textureNodes[e]=t),t}getPreviousTextureNode(e="output"){let t=this._previousTextureNodes[e];return t===void 0&&(this._textureNodes[e]===void 0&&this.getTextureNode(e),t=ae(new yp(this,e,!0)),t.updateTexture(),this._previousTextureNodes[e]=t),t}getViewZNode(e="depth"){let t=this._viewZNodes[e];if(t===void 0){const n=this._cameraNear,s=this._cameraFar;this._viewZNodes[e]=t=ex(this.getTextureNode(e),n,s)}return t}getLinearDepthNode(e="depth"){let t=this._linearDepthNodes[e];if(t===void 0){const n=this._cameraNear,s=this._cameraFar,r=this.getViewZNode(e);this._linearDepthNodes[e]=t=pc(r,n,s)}return t}async compileAsync(e){const t=e.getRenderTarget(),n=e.getMRT();e.setRenderTarget(this.renderTarget),e.setMRT(this._mrt),await e.compileAsync(this.scene,this.camera),e.setRenderTarget(t),e.setMRT(n)}setup({renderer:e}){return this.renderTarget.samples=this.options.samples===void 0?e.samples:this.options.samples,this.renderTarget.texture.type=e.getColorBufferType(),this.scope===rl.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n}=this;let s,r;const a=t.getOutputRenderTarget();a&&a.isXRRenderTarget===!0?(r=1,s=t.xr.getCamera(),t.xr.updateCamera(s),Qo.set(a.width,a.height)):(s=this.camera,r=t.getPixelRatio(),t.getSize(Qo)),this._pixelRatio=r,this.setSize(Qo.width,Qo.height);const o=t.getRenderTarget(),l=t.getMRT(),c=t.autoClear,u=s.layers.mask;this._cameraNear.value=s.near,this._cameraFar.value=s.far,this._layers!==null&&(s.layers.mask=this._layers.mask);for(const f in this._previousTextures)this.toggleTexture(f);t.setRenderTarget(this.renderTarget),t.setMRT(this._mrt),t.autoClear=!0;const h=n.name;n.name=this.name?this.name:n.name,t.render(n,s),n.name=h,t.setRenderTarget(o),t.setMRT(l),t.autoClear=c,s.layers.mask=u}setSize(e,t){this._width=e,this._height=t;const n=Math.floor(this._width*this._pixelRatio*this._resolutionScale),s=Math.floor(this._height*this._pixelRatio*this._resolutionScale);this.renderTarget.setSize(n,s),this._scissor!==null&&this.renderTarget.scissor.copy(this._scissor),this._viewport!==null&&this.renderTarget.viewport.copy(this._viewport)}setScissor(e,t,n,s){e===null?this._scissor=null:(this._scissor===null&&(this._scissor=new Pi),e.isVector4?this._scissor.copy(e):this._scissor.set(e,t,n,s),this._scissor.multiplyScalar(this._pixelRatio*this._resolutionScale).floor())}setViewport(e,t,n,s){e===null?this._viewport=null:(this._viewport===null&&(this._viewport=new Pi),e.isVector4?this._viewport.copy(e):this._viewport.set(e,t,n,s),this._viewport.multiplyScalar(this._pixelRatio*this._resolutionScale).floor())}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}rl.COLOR="color";rl.DEPTH="depth";pt(1.6605,-.1246,-.0182),pt(-.5876,1.1329,-.1006),pt(-.0728,-.0083,1.1187);pt(.6274,.0691,.0164),pt(.3293,.9195,.088),pt(.0433,.0113,.8956);function dx(i){let e;const t=i.context.getViewZ;return t!==void 0&&(e=t(this)),(e||Ci.z).negate()}rt(([i,e],t)=>{const n=dx(t);return cf(i,e,n)});rt(([i],e)=>{const t=dx(e);return i.mul(i,t,t).negate().exp().oneMinus()});rt(([i,e])=>es(e.toFloat().mix(lp.rgb,i.toVec3()),lp.a));class b2 extends ze{constructor(e){super(),this.scope=e}generate(e){const{scope:t}=this,{renderer:n}=e;n.backend.isWebGLBackend===!0?e.addFlowCode(`	// ${t}Barrier 
`):e.addLineFlowCode(`${t}Barrier()`,this)}}Ut(b2);class Ui extends ze{static get type(){return"AtomicFunctionNode"}constructor(e,t,n){super("uint"),this.method=e,this.pointerNode=t,this.valueNode=n,this.parents=!0}getInputType(e){return this.pointerNode.getNodeType(e)}getNodeType(e){return this.getInputType(e)}generate(e){const t=e.getNodeProperties(this),n=t.parents,s=this.method,r=this.getNodeType(e),a=this.getInputType(e),o=this.pointerNode,l=this.valueNode,c=[];c.push(`&${o.build(e,a)}`),l!==null&&c.push(l.build(e,a));const u=`${e.getMethod(s,r)}( ${c.join(", ")} )`;if(n?n.length===1&&n[0].isStackNode===!0:!1)e.addLineFlowCode(u,this);else return t.constNode===void 0&&(t.constNode=Lc(u,r).toConst()),t.constNode.build(e)}}Ui.ATOMIC_LOAD="atomicLoad";Ui.ATOMIC_STORE="atomicStore";Ui.ATOMIC_ADD="atomicAdd";Ui.ATOMIC_SUB="atomicSub";Ui.ATOMIC_MAX="atomicMax";Ui.ATOMIC_MIN="atomicMin";Ui.ATOMIC_AND="atomicAnd";Ui.ATOMIC_OR="atomicOr";Ui.ATOMIC_XOR="atomicXor";Ut(Ui);class st extends hn{static get type(){return"SubgroupFunctionNode"}constructor(e,t=null,n=null){super(),this.method=e,this.aNode=t,this.bNode=n}getInputType(e){const t=this.aNode?this.aNode.getNodeType(e):null,n=this.bNode?this.bNode.getNodeType(e):null,s=e.isMatrix(t)?0:e.getTypeLength(t),r=e.isMatrix(n)?0:e.getTypeLength(n);return s>r?t:n}getNodeType(e){const t=this.method;return t===st.SUBGROUP_ELECT?"bool":t===st.SUBGROUP_BALLOT?"uvec4":this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),a=this.aNode,o=this.bNode,l=[];if(n===st.SUBGROUP_BROADCAST||n===st.SUBGROUP_SHUFFLE||n===st.QUAD_BROADCAST){const u=o.getNodeType(e);l.push(a.build(e,s),o.build(e,u==="float"?"int":s))}else n===st.SUBGROUP_SHUFFLE_XOR||n===st.SUBGROUP_SHUFFLE_DOWN||n===st.SUBGROUP_SHUFFLE_UP?l.push(a.build(e,s),o.build(e,"uint")):(a!==null&&l.push(a.build(e,r)),o!==null&&l.push(o.build(e,r)));const c=l.length===0?"()":`( ${l.join(", ")} )`;return e.format(`${e.getMethod(n,s)}${c}`,s,t)}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}st.SUBGROUP_ELECT="subgroupElect";st.SUBGROUP_BALLOT="subgroupBallot";st.SUBGROUP_ADD="subgroupAdd";st.SUBGROUP_INCLUSIVE_ADD="subgroupInclusiveAdd";st.SUBGROUP_EXCLUSIVE_AND="subgroupExclusiveAdd";st.SUBGROUP_MUL="subgroupMul";st.SUBGROUP_INCLUSIVE_MUL="subgroupInclusiveMul";st.SUBGROUP_EXCLUSIVE_MUL="subgroupExclusiveMul";st.SUBGROUP_AND="subgroupAnd";st.SUBGROUP_OR="subgroupOr";st.SUBGROUP_XOR="subgroupXor";st.SUBGROUP_MIN="subgroupMin";st.SUBGROUP_MAX="subgroupMax";st.SUBGROUP_ALL="subgroupAll";st.SUBGROUP_ANY="subgroupAny";st.SUBGROUP_BROADCAST_FIRST="subgroupBroadcastFirst";st.QUAD_SWAP_X="quadSwapX";st.QUAD_SWAP_Y="quadSwapY";st.QUAD_SWAP_DIAGONAL="quadSwapDiagonal";st.SUBGROUP_BROADCAST="subgroupBroadcast";st.SUBGROUP_SHUFFLE="subgroupShuffle";st.SUBGROUP_SHUFFLE_XOR="subgroupShuffleXor";st.SUBGROUP_SHUFFLE_UP="subgroupShuffleUp";st.SUBGROUP_SHUFFLE_DOWN="subgroupShuffleDown";st.QUAD_BROADCAST="quadBroadcast";rt(([i=il()],{renderer:e,material:t})=>{const n=O0(i.mul(2).sub(1));let s;if(t.alphaToCoverage&&e.currentSamples>0){const r=An(n.fwidth()).toVar();s=cf(r.oneMinus(),r.add(1),n).oneMinus()}else s=lf(n.greaterThan(1),0,1);return s});const E2={name:"Light",ui:{background:"white",textColor:"#0d0d0d",border:"rgba(0, 0, 0, 0.6)",focusBorder:"rgb(0, 135, 255)",thickBorder:"rgba(0, 0, 0, 0.8)",lightBorder:"rgba(0, 0, 0, 0.2)",githubImage:"github-mark.svg"},canvas:{foreground:"#000000",isometryColors:[["#ff0000","#cc0000"],["#0000ff","#0000cc"]],axisColors:["#ff9999","#66ff66","#9999ff"]}},eo=[E2,wb];let px=ft(jt(eo[0]));function Ss(){return J(px)}function w2(i){const e=eo.find(t=>t.name===i)??eo[0];Fe(px,e,!0),A2(e)}function A2(i){const e=document.documentElement;e.style.setProperty("--bgColor",i.ui.background),e.style.setProperty("--textColor",i.ui.textColor),e.style.setProperty("--borderColor",i.ui.border),e.style.setProperty("--focusBorderColor",i.ui.focusBorder),e.style.setProperty("--thickBorderColor",i.ui.thickBorder),e.style.setProperty("--isometry1Color",i.canvas.isometryColors[0][0]),e.style.setProperty("--isometry2Color",i.canvas.isometryColors[1][0])}const C2=typeof window<"u"?window:void 0;function R2(i){let e=i.activeElement;for(;e?.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}class N2{#e;#t;constructor(e={}){const{window:t=C2,document:n=t?.document}=e;t!==void 0&&(this.#e=n,this.#t=qp(s=>{const r=_c(t,"focusin",s),a=_c(t,"focusout",s);return()=>{r(),a()}}))}get current(){return this.#t?.(),this.#e?R2(this.#e):null}}new N2;function P2(i){return typeof i=="function"}function Sp(i,e){if(P2(i)){const n=i();return n===void 0?e:n}return i===void 0?e:i}function L2(i,e){switch(i){case"post":Ft(e);break;case"pre":bg(e);break}}function mx(i,e,t,n={}){const{lazy:s=!1}=n;let r=!s,a=Array.isArray(i)?[]:void 0;L2(e,()=>{const o=Array.isArray(i)?i.map(c=>c()):i();if(!r){r=!0,a=o;return}const l=Rs(()=>t(o,a));return a=o,l})}function xx(i,e,t){mx(i,"post",e,t)}function D2(i,e,t){mx(i,"pre",e,t)}xx.pre=D2;function Na(i,e,t,n){Ft(()=>{const s=Sp(i);if(s==null)return;const r=Sp(e);if(Array.isArray(r))for(const a of r)Ft(()=>_c(s,a,t,n));else return _c(s,r,t,n)})}function I2(i){Ft(()=>()=>{i()})}function U2(i=()=>{}){let e,t;const n=a=>{t=requestAnimationFrame(n);const o=e;if(e=a,o===void 0)return;const l=a-o;l>=0&&i(l)},s=()=>{t!==void 0&&(cancelAnimationFrame(t),t=void 0,e=void 0)},r=()=>{t===void 0&&n(performance.now())};return I2(s),Object.freeze({start:r,stop:s})}function F2(i,e){let t=ft(i);return{get(){return J(t)},set(n){e(J(t),n)||Fe(t,n)}}}var O2=Ns('<div class="plane-input svelte-1cep8g"><canvas class="plane-input-canvas svelte-1cep8g"></canvas></div>');function z2(i,e){rr(e,!0);let t=oi(e,"onchange",3,()=>{}),n=ft(0),s=ft(0),r=ft(jt(St(0))),a=ft(jt(St(0))),o=ft(jt({dragging:!1})),l;Ft(()=>{const v=window.devicePixelRatio||1;Fe(n,l.clientWidth*v),Fe(s,l.clientHeight*v)}),Ft(()=>{l.width=J(n),l.height=J(s)});function c(v){Fe(r,v,!0),Fe(a,v,!0)}const u=-3,h=3,f=-3,d=3;function m(v,N,O){const B=(v.re-u)/(h-u)*N,V=O-(v.im-f)/(d-f)*O;return{x:B,y:V}}function g(v,N,O,B){const V=v/O*(h-u)+u,W=(B-N)/B*(d-f)+f;return St(V,W)}let x,p=gs(()=>Wr(J(a),J(r)));const y=U2(v=>M(v,x));Ft(()=>{x=[l,J(n),J(s),Ss(),J(a),J(p)],y.start()});function M(v,[N,O,B,V,W,Y]){const X=1-Math.exp(-v/90);$1(J(r),W)||t()(J(r)),Ks(Y)<1e-4?(Fe(r,W,!0),y.stop()):Fe(r,Sn(J(r),hh(Y,X)),!0),T(N,O,B,V)}function T(v,N,O,B){const V=v.getContext("2d");if(!v||!V)return;V.clearRect(0,0,N,O);const W=m(St(0,0),N,O);V.beginPath(),V.strokeStyle=B.ui.lightBorder,V.lineWidth=1*window.devicePixelRatio,V.moveTo(0,W.y),V.lineTo(N,W.y),V.moveTo(W.x,0),V.lineTo(W.x,O),V.stroke();const Y=m(J(r),N,O);V.beginPath(),V.fillStyle=B.ui.textColor,V.arc(Y.x,Y.y,3*window.devicePixelRatio,0,2*Math.PI),V.fill()}let A=ft(!1);Na(window,"keydown",v=>{v.key==="Shift"&&Fe(A,!0)}),Na(window,"keyup",v=>{v.key==="Shift"&&Fe(A,!1)}),Na(window,["blur","visibilitychange"],()=>{Fe(A,!1)});function E(v){Fe(o,{dragging:!0,mouse:{x:v.clientX,y:v.clientY},startValue:J(r)},!0)}Ft(()=>{if(J(o).dragging===!1)return;let v=J(o),N=gs(()=>{const V=l.getBoundingClientRect(),W=(v.mouse.x-V.left)*window.devicePixelRatio,Y=(v.mouse.y-V.top)*window.devicePixelRatio;return g(W,Y,l.width,l.height)}),O=ft(void 0);Ft(()=>{if(J(A)){let V=Rs(()=>J(O));const W=Math.abs(J(N).re-v.startValue.re),Y=Math.abs(J(N).im-v.startValue.im);V==="x"&&W>.3&&(V=void 0),V==="y"&&Y>.3&&(V=void 0),V||Fe(O,W>Y?"x":"y",!0)}else Fe(O,void 0)});let B=gs(()=>J(A)?J(O)==="x"?St(J(N).re,v.startValue.im):St(v.startValue.re,J(N).im):J(N));Ft(()=>{Fe(a,J(B),!0)}),Na(window,"mousemove",V=>{v.mouse={x:V.clientX,y:V.clientY}}),Na(window,"mouseup",()=>{Fe(o,{dragging:!1},!0)})}),Lh(()=>{const v=new ResizeObserver(()=>{const N=window.devicePixelRatio||1;Fe(n,l.clientWidth*N),Fe(s,l.clientHeight*N)});return v.observe(l,{box:"device-pixel-content-box"}),()=>{v.disconnect()}});var w={setValue:c},L=O2(),b=Vt(L);return b.__mousedown=E,Vr(b,v=>l=v,()=>l),Es(i,L),ar(w)}Yc(["mousedown"]);var B2=Ns('<div class="number-input svelte-1pzowlr"><input type="text" class="svelte-1pzowlr"/> <div class="number-input-buttons svelte-1pzowlr"><button type="button" aria-label="Increment" class="number-input-up svelte-1pzowlr"><i class="svelte-1pzowlr"></i></button> <button type="button" aria-label="Decrement" class="number-input-down svelte-1pzowlr"><i class="svelte-1pzowlr"></i></button></div></div>');function V2(i,e){rr(e,!0);let t=oi(e,"min",3,1),n=oi(e,"max",3,100),s=oi(e,"init",19,t),r=oi(e,"valid",3,w=>!0),a=oi(e,"onchange",3,w=>{}),o=ft(jt(s().toString())),l=ft(jt(s().toString())),c=ft(jt(s()));const u=w=>w!==J(c)?(Fe(c,w,!0),Fe(o,w.toString(),!0),!0):!1;function h(w){u(w)&&a()(new CustomEvent("change",{detail:w}))}function f(){for(let w=J(c)+1;w<=n();w++)if(r()(w)){h(w);return}}function d(){for(let w=J(c)-1;w>=t();w--)if(r()(w)){h(w);return}}function m(){if(!g(J(o))){Fe(o,J(l),!0);return}Fe(l,J(o),!0),x(J(o))&&(Fe(c,Number(J(o)),!0),a()(new CustomEvent("change",{detail:J(c)})))}function g(w){if(w==="")return!0;if(/^(0|[1-9]\d*)$/.test(w)){const L=Number(w);if((t()<=0||L>0)&&L<=n())return!0}return!1}function x(w){if(w==="")return!1;const L=Number(w);return t()<=L&&n()>=L&&r()(L)}var p={set:u},y=B2(),M=Vt(y);M.__input=m;var T=xn(M,2),A=Vt(T);A.__click=f;var E=xn(A,2);return E.__click=d,Cm(M,()=>J(o),w=>Fe(o,w)),Es(i,y),ar(p)}Yc(["input","click"]);const nu={type:"change"},_f={type:"start"},vf={type:"end"},Mp=1e-6,dt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},ec=new je,xs=new je,k2=new F,tc=new F,iu=new F,Fr=new oa,Tp=new F,nc=new F,su=new F,ic=new F;class G2 extends ny{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.target=new F,this.state=dt.NONE,this.keyState=dt.NONE,this._lastPosition=new F,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new F,this._movePrev=new je,this._moveCurr=new je,this._lastAxis=new F,this._zoomStart=new je,this._zoomEnd=new je,this._panStart=new je,this._panEnd=new je,this._pointers=[],this._pointerPositions={},this._onPointerMove=W2.bind(this),this._onPointerDown=H2.bind(this),this._onPointerUp=X2.bind(this),this._onPointerCancel=q2.bind(this),this._onContextMenu=Q2.bind(this),this._onMouseWheel=J2.bind(this),this._onKeyDown=$2.bind(this),this._onKeyUp=Y2.bind(this),this._onTouchStart=eC.bind(this),this._onTouchMove=tC.bind(this),this._onTouchEnd=nC.bind(this),this._onMouseDown=Z2.bind(this),this._onMouseMove=j2.bind(this),this._onMouseUp=K2.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Mp&&(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Mp||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=dt.NONE,this.keyState=dt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(xs.copy(this._panEnd).sub(this._panStart),xs.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;xs.x*=e,xs.y*=t}xs.multiplyScalar(this._eye.length()*this.panSpeed),tc.copy(this._eye).cross(this.object.up).setLength(xs.x),tc.add(k2.copy(this.object.up).setLength(xs.y)),this.object.position.add(tc),this.target.add(tc),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(xs.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){ic.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=ic.length();e?(this._eye.copy(this.object.position).sub(this.target),Tp.copy(this._eye).normalize(),nc.copy(this.object.up).normalize(),su.crossVectors(nc,Tp).normalize(),nc.setLength(this._moveCurr.y-this._movePrev.y),su.setLength(this._moveCurr.x-this._movePrev.x),ic.copy(nc.add(su)),iu.crossVectors(ic,this._eye).normalize(),e*=this.rotateSpeed,Fr.setFromAxisAngle(iu,e),this._eye.applyQuaternion(Fr),this.object.up.applyQuaternion(Fr),this._lastAxis.copy(iu),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Fr.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Fr),this.object.up.applyQuaternion(Fr)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===dt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=rh.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=rh.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return ec.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),ec}_getMouseOnCircle(e,t){return ec.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),ec}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function H2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function W2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function X2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function q2(i){this._removePointer(i)}function Y2(){this.enabled!==!1&&(this.keyState=dt.NONE,window.addEventListener("keydown",this._onKeyDown))}function $2(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===dt.NONE&&(i.code===this.keys[dt.ROTATE]&&!this.noRotate?this.keyState=dt.ROTATE:i.code===this.keys[dt.ZOOM]&&!this.noZoom?this.keyState=dt.ZOOM:i.code===this.keys[dt.PAN]&&!this.noPan&&(this.keyState=dt.PAN)))}function Z2(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:this.state=dt.ZOOM;break;case kr.ROTATE:this.state=dt.ROTATE;break;case kr.PAN:this.state=dt.PAN;break;default:this.state=dt.NONE}const t=this.keyState!==dt.NONE?this.keyState:this.state;t===dt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===dt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===dt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(_f)}function j2(i){const e=this.keyState!==dt.NONE?this.keyState:this.state;e===dt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===dt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===dt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function K2(){this.state=dt.NONE,this.dispatchEvent(vf)}function J2(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(_f),this.dispatchEvent(vf)}}function Q2(i){this.enabled!==!1&&i.preventDefault()}function eC(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=dt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=dt.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(_f)}function tC(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const s=(i.pageX+e.x)/2,r=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function nC(i){switch(this._pointers.length){case 0:this.state=dt.NONE;break;case 1:this.state=dt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=dt.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(vf)}const iC={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class al{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sC=new a0(-1,1,1,-1,0,1);class rC extends Rn{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const aC=new rC;class oC{constructor(e){this._mesh=new Jn(aC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gx extends al{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zc.clone(e.uniforms),this.material=new kn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new oC(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ic extends al{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _x extends al{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cC{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new je);this._width=n.width,this._height=n.height,t=new Cs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:lr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gx(iC),this.copyPass.material.blending=Ai,this.clock=new Kv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ic!==void 0&&(a instanceof Ic?n=!0:a instanceof _x&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bp extends al{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const lC={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new je(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};yn.line={uniforms:Zc.merge([he.common,he.fog,he.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class vx extends kn{constructor(e){super({type:"LineMaterial",uniforms:Zc.clone(yn.line.uniforms),vertexShader:yn.line.vertexShader,fragmentShader:yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ep=new Ps,sc=new F;class Th extends Zv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Xt(e,3)),this.setAttribute("uv",new Xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new oh(t,6,1);return this.setAttribute("instanceStart",new zr(n,3,0)),this.setAttribute("instanceEnd",new zr(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new oh(t,6,1);return this.setAttribute("instanceColorStart",new zr(n,3,0)),this.setAttribute("instanceColorEnd",new zr(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new qv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ep.setFromBufferAttribute(t),this.boundingBox.union(Ep))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sc)),sc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const ru=new At,wp=new F,Ap=new F,Qt=new At,en=new At,yi=new At,au=new F,ou=new Kt,nn=new ey,Cp=new F,rc=new Ps,ac=new ca,Si=new At;let Ti,Js;function Rp(i,e,t){return Si.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Si.multiplyScalar(1/Si.w),Si.x=Js/t.width,Si.y=Js/t.height,Si.applyMatrix4(i.projectionMatrixInverse),Si.multiplyScalar(1/Si.w),Math.abs(Math.max(Si.x,Si.y))}function uC(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){nn.start.fromBufferAttribute(s,o),nn.end.fromBufferAttribute(r,o),nn.applyMatrix4(t);const c=new F,u=new F;Ti.distanceSqToSegment(nn.start,nn.end,u,c),u.distanceTo(c)<Js*.5&&e.push({point:u,pointOnLine:c,distance:Ti.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function hC(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),h=-e.near;Ti.at(1,yi),yi.w=1,yi.applyMatrix4(e.matrixWorldInverse),yi.applyMatrix4(n),yi.multiplyScalar(1/yi.w),yi.x*=r.x/2,yi.y*=r.y/2,yi.z=0,au.copy(yi),ou.multiplyMatrices(e.matrixWorldInverse,a);for(let f=0,d=u;f<d;f++){if(Qt.fromBufferAttribute(l,f),en.fromBufferAttribute(c,f),Qt.w=1,en.w=1,Qt.applyMatrix4(ou),en.applyMatrix4(ou),Qt.z>h&&en.z>h)continue;if(Qt.z>h){const M=Qt.z-en.z,T=(Qt.z-h)/M;Qt.lerp(en,T)}else if(en.z>h){const M=en.z-Qt.z,T=(en.z-h)/M;en.lerp(Qt,T)}Qt.applyMatrix4(n),en.applyMatrix4(n),Qt.multiplyScalar(1/Qt.w),en.multiplyScalar(1/en.w),Qt.x*=r.x/2,Qt.y*=r.y/2,en.x*=r.x/2,en.y*=r.y/2,nn.start.copy(Qt),nn.start.z=0,nn.end.copy(en),nn.end.z=0;const g=nn.closestPointToPointParameter(au,!0);nn.at(g,Cp);const x=rh.lerp(Qt.z,en.z,g),p=x>=-1&&x<=1,y=au.distanceTo(Cp)<Js*.5;if(p&&y){nn.start.fromBufferAttribute(l,f),nn.end.fromBufferAttribute(c,f),nn.start.applyMatrix4(a),nn.end.applyMatrix4(a);const M=new F,T=new F;Ti.distanceSqToSegment(nn.start,nn.end,T,M),t.push({point:T,pointOnLine:M,distance:Ti.origin.distanceTo(T),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class fC extends Jn{constructor(e=new Th,t=new vx({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)wp.fromBufferAttribute(t,a),Ap.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+wp.distanceTo(Ap);const r=new oh(s,2,1);return e.setAttribute("instanceDistanceStart",new zr(r,1,0)),e.setAttribute("instanceDistanceEnd",new zr(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ti=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Js=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ac.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Js*.5;else{const h=Math.max(s.near,ac.distanceToPoint(Ti.origin));c=Rp(s,h,l.resolution)}if(ac.radius+=c,Ti.intersectsSphere(ac)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),rc.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Js*.5;else{const h=Math.max(s.near,rc.distanceToPoint(Ti.origin));u=Rp(s,h,l.resolution)}rc.expandByScalar(u),Ti.intersectsBox(rc)!==!1&&(n?uC(this,t):hC(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ru),this.material.uniforms.resolution.value.set(ru.z,ru.w))}}function cu(i){return gb(na(i[1].re,i[1].im,i[0].re,i[0].im),na(i[3].re,i[3].im,i[2].re,i[2].im))}function Uc(i){const e=i.r*i.r+i.i*i.i,t=i.j*i.j+i.k*i.k,n=e+t+2*Math.sqrt(t)+1;return rs(i.r*2/n,-i.i*2/n,(e+t-1)/n)}function Np(i){const e=Ks(i),t=e+1;return rs(i.re*2/t,-i.im*2/t,(e-1)/t)}function dC(i,e){const t=(dh(i)-dh(e))/2,n=Ct(i.r,i.i),s=Ct(i.r-e.r,i.i-e.i),r=Ks(s),a=W1(s,n),o=(t-a)/r,l=Sn(hh(s,o),n),c=Math.sqrt((i.r-l.re)**2+(i.i-l.im)**2+i.j**2+i.k**2),u=hh(s,c/ua(s)),h=Sn(l,u),f=Wr(l,u);return[h,f]}function pC(i,e,t,n){const s=Uc(i),r=Uc(e),[a,o]=dC(i,e),l=Np(a),c=Np(o),u=rb(l,c),h=cb(u);if(isNaN(h)||h<1e-10){const M=ob(Wl(r,s),t-1);n.push(s.x,s.y,s.z);const T=hb(s);for(let A=1;A<t-1;A++)sb(T,M),n.push(T.x,T.y,T.z,T.x,T.y,T.z);n.push(r.x,r.y,r.z);return}const f=ab(u,(1+ub(l,c)/h)/2),d=Wl(s,f),m=Wl(r,f),g=Wd(d),x=Wd(m),p=_b(g,x,1/(t-1));let y=d;n.push(s.x,s.y,s.z);for(let M=1;M<t-1;M++){y=vb(y,p);const T=y.x+f.x,A=y.y+f.y,E=y.z+f.z;n.push(T,A,E,T,A,E)}n.push(r.x,r.y,r.z)}class mC{origin=na(0,0,1,0);mesh;geometry;generators=[];depth=0;colors=[];minSize=.015;#e=ft();get uniforms(){return J(this.#e)}set uniforms(e){Fe(this.#e,e,!0)}#t=ft(!1);get ready(){return J(this.#t)}set ready(e){Fe(this.#t,e,!0)}constructor(e,t){const n=new vx({vertexColors:!0,linewidth:2,resolution:new je(e,t),worldUnits:!1});n.onBeforeCompile=s=>{const r=s.fragmentShader.indexOf("#include <premultiplied_alpha_fragment>"),a=s.fragmentShader.slice(0,r),o=s.fragmentShader.slice(r);s.fragmentShader=`
        uniform vec3 fadeColor;
        uniform float fadeNear;
        uniform float fadeFar;
        uniform float fadeStrength;
      `+a+`
          float blend = (gl_FragCoord.z / gl_FragCoord.w - fadeNear)/(fadeFar - fadeNear) * fadeStrength;
          gl_FragColor = mix(gl_FragColor, vec4(fadeColor, alpha), blend);
      `+o},n.uniforms.fadeColor={value:void 0},n.uniforms.fadeNear={type:"f",value:void 0},n.uniforms.fadeFar={type:"f",value:void 0},n.uniforms.fadeStrength={type:"f",value:void 0},Ft(()=>{if(!this.uniforms){this.ready=!1;return}n.uniforms.fadeColor.value=this.uniforms.fadeColor,n.uniforms.fadeNear.value=this.uniforms.fadeNear,n.uniforms.fadeFar.value=this.uniforms.fadeFar,n.uniforms.fadeStrength.value=this.uniforms.fadeStrength}),this.geometry=new Th,Ft(()=>{!this.uniforms||this.ready||(this.mesh=new fC(this.geometry,n),this.ready=!0)})}setGeometry(e,t,n,s=K1()){this.generators=e.map(o=>[o,f0(o)]).flat(),this.depth=n,this.colors=t;const r={vertexColors:[],vertices:[],lineColors:[],lines:[]},a=cu(s);this._tree(0,1,void 0,a,s,Uc(a),r),this.geometry&&this.geometry.dispose(),this.geometry=new Th,this.geometry.setPositions(r.lines),this.geometry.setColors(r.lineColors),this.mesh&&(this.mesh.geometry=this.geometry)}_tree(e,t,n,s,r,a,o){if(!(e>=this.depth||t<this.minSize)&&!(e>0&&nb(r,1e-4)))for(let l=0;l<this.generators.length;l++){if(this.inverse(l)===n)continue;const c=fh(r,this.generators[l]),u=cu(c),h=Uc(cu(c)),f=lb(a,h),d=Math.floor(Math.min(Math.max(f*100,2),10)),m=new et(this.colors[l]).toArray();o.vertexColors.push(m[0],m[1],m[2]),o.vertices.push(h.x,h.y,h.z);for(let g=0;g<d*2-2;g++)o.lineColors.push(m[0],m[1],m[2]);pC(s,u,d,o.lines),this._tree(e+1,f,l,u,c,h,o)}}inverse(e){return e%2?e-1:e+1}}var xC=Ns('<canvas class="tree-canvas"></canvas>');function gC(i,e){rr(e,!0);let t=0;Ft(()=>{e.animateIso||J(l)(e.gens,e.colors,e.depth)});let n=window.devicePixelRatio,s,r,a,o=F2(void 0,(h,f)=>h===f||h!==void 0&&f!==void 0&&h.equals(f)),l=ft(()=>{}),c=ft(void 0);Ft(()=>{const h=o.get();!J(c)||!h||(J(c).uniforms={fadeColor:new et(Ss().ui.background).toArray(),fadeNear:h.length()-1,fadeFar:h.length()+1,fadeStrength:.7})}),Lh(()=>{let h=!0;const f=()=>h=!0,d={outline:{vertex_shader:`
        uniform float offset;
        void main() {
          vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );
          gl_Position = projectionMatrix * pos;
        }
        `,fragment_shader:`
        uniform vec4 color;
        void main() {
          gl_FragColor = color;
        }
        `}};r=new H1({antialias:!0,canvas:s}),r.setSize(e.width,e.height,!1),r.setPixelRatio(n),r.setClearColor(16777215),Ft(()=>{r.setClearColor(Ss().ui.background),f()}),r.autoClear=!1;const m=new Io,g=new Io,x=new Io,p=new Io,y=new $n(45,e.width/e.height,.1,1e3);y.position.set(0,3,0),y.up.set(1,0,0);const M=new G2(y,r.domElement);M.noPan=!0,M.rotateSpeed=2;const T=new ty(1);T.setColors(new et(16751001),new et(6750054),new et(10066431)),m.add(T),Ft(()=>{const Ie=Ss().canvas.axisColors.map(Ke=>new et(Ke));T.setColors(Ie[0],Ie[1],Ie[2]),f()});const A=new Wh(1,128,64),E=new Hh({color:0}),w=new Jn(A,E);g.add(w),x.add(w.clone());const L={offset:{value:.01},color:{value:new At(0,0,0,1)}},b=d.outline,v=new kn({uniforms:L,vertexShader:b.vertex_shader,fragmentShader:b.fragment_shader});Ft(()=>{const Ie=new et(Ss().canvas.foreground);v.uniforms.color.value=[Ie.r,Ie.g,Ie.b,1],f()});const N=new Jn(A,v);p.add(N);const O=new bp(m,y),B=new bp(p,y);B.clear=!1;const V=new Ic(g,y),W=new Ic(x,y);V.inverse=!0;const Y=new _x,K=new gx(lC);K.renderToScreen=!0;const X=r.getPixelRatio();K.material.uniforms.resolution.value.x=1/(e.width*X),K.material.uniforms.resolution.value.y=1/(e.height*X);const ne=new cC(r);ne.renderTarget1.stencilBuffer=!0,ne.renderTarget2.stencilBuffer=!0,ne.addPass(O),ne.addPass(W),ne.addPass(V),ne.addPass(B),ne.addPass(Y),ne.addPass(K),a=requestAnimationFrame(Se),M.addEventListener("change",f),Fe(c,new mC(e.width,e.height),!0),Fe(l,(Ie,Ke,lt,at)=>{J(c)&&(J(c).setGeometry(Ie,Ke,lt,at),f())}),Ft(()=>{if(J(c)&&J(c).ready){if(!J(c).mesh)throw new Error("Mesh is undefined");m.add(J(c).mesh)}}),Ft(()=>{J(c)&&J(c).uniforms&&f()});let re;function Se(Ie){a=requestAnimationFrame(Se),M.update();const Ke=y.position.clone();if(o.set(Ke),e.animateIso&&(h=!0),h){if(e.animateIso){if(re){const at=Ie-re;t=(t+at/4e3)%1}else t=0;const lt=eb(e.animateIso,t);J(l)(e.gens,e.colors,e.depth,lt),re=Ie}else h=!1,re=void 0;v.uniforms.offset.value=.003*Ke.length(),ne.render()}}return()=>{a&&cancelAnimationFrame(a),M.removeEventListener("change",f)}});var u=xC();Vr(u,h=>s=h,()=>s),du(()=>{Mm(u,`width: 100%; max-width: ${e.width}px; max-height: ${e.height}px`),jr(u,"width",e.width*n),jr(u,"height",e.height*n)}),Es(i,u),ar()}var _C=Ns('<div class="sidebar-row svelte-1n46o8q"><input type="checkbox" class="svelte-1n46o8q"/> <div class="combined-elements svelte-1n46o8q"><!></div></div>'),vC=Ns("<option> </option>"),yC=Ns('<main class="svelte-1n46o8q"><div class="render-container svelte-1n46o8q"><!></div> <div class="sidebar svelte-1n46o8q"><div class="sidebar-row svelte-1n46o8q">Depth<!></div> <!> <div class="sidebar-row svelte-1n46o8q"><div class="row-center svelte-1n46o8q"><!></div></div> <div class="sidebar-row svelte-1n46o8q"><button> </button></div> <div class="sidebar-row svelte-1n46o8q">Theme <select></select></div> <div class="sidebar-row svelte-1n46o8q"><button> </button> <button> </button></div></div> <a href="https://github.com/ariymarkowitz/H3-Visualiser" class="github svelte-1n46o8q" draggable="false" target="_blank" rel="noopener noreferrer"><img alt="Link to GitHub" width="40" height="40" draggable="false"/></a></main>');function SC(i,e){rr(e,!0);let t=ft(jt(eo[0].name));Ft(()=>w2(J(t)));let n,s=jt(Array(2)),r,a=jt(Array(2)),o=jt([!1,!1]),l=gs(()=>[Ss().canvas.isometryColors[0],Ss().canvas.isometryColors[1]]),c=gs(()=>[0,1].map(te=>({m:a[te],c:J(l)[te]})).filter((te,R)=>te.m!==void 0&&!j1(te.m)&&o[R])),u=gs(()=>J(c).map(te=>te.m)),h=gs(()=>J(c).map(te=>te.c.map(R=>new et(R))).flat()),f=ft(5),d=ft(void 0),m=ft(!1);xx(()=>rg([J(f),a,o]),()=>{Fe(m,!1)});function g(te){const R=te.get("d");let fe=R?parseInt(R):void 0;fe=fe&&Number.isInteger(fe)&&fe>=1?fe:void 0;const Ne=te.get("a"),$e=Ne?Ne.split(" ").map(Number):void 0;let me;$e?.every(Number.isFinite)&&(me=Array.from({length:4},(z,$)=>({re:$e[2*$],im:$e[2*$+1]})));const ot=te.get("showa");me&&ot==="1"&&(o[0]=!0);const we=te.get("b"),Me=we?we.split(" ").map(Number):void 0;let C;Me?.every(Number.isFinite)&&(C=Array.from({length:4},(z,$)=>({re:Me[2*$],im:Me[2*$+1]})));const _=te.get("showb");return C&&_==="1"&&(o[1]=!0),{depth:fe,matrix1:me,matrix2:C}}function x(){let te=new URLSearchParams;te.append("d",J(f).toString());let[R,fe]=a;const Ne=R?.flatMap(ot=>[ot.re,ot.im])?.join(" ");Ne&&te.append("a",Ne);const $e=fe?.flatMap(ot=>[ot.re,ot.im])?.join(" ");$e&&te.append("b",$e),Ne&&te.append("showa",o[0]?"1":"0"),$e&&te.append("showb",o[1]?"1":"0");const me=new URL(window.location.href);navigator.clipboard.writeText(`${me.origin}${me.pathname}?${te}`).then(()=>Fe(m,!0))}Lh(()=>{const te=g(new URLSearchParams(window.location.search));n.set(te.depth?te.depth:10),te.matrix1&&E(0,te.matrix1),te.matrix2&&E(1,te.matrix2)});let p=ft(0),y=gs(()=>[void 0,...a][J(p)]);function M(te,R){s[te].set(R)}function T(te,R,fe){s[te].setEntry(R,fe)}function A(te){r.setValue(te)}function E(te,R){if(a[te]=R,M(te,R),J(d)?.id===te){const fe=R[J(d).elt];A(fe)}}function w(te,R,fe){a[te]===void 0&&(a[te]=[St(0),St(0),St(0),St(0)]),a[te][R]=fe,T(te,R,fe),te===J(d)?.id&&R===J(d).elt&&A(fe)}function L(te,R,fe=St(0)){a[te]===void 0&&(a[te]=[St(0),St(0),St(0),St(0)]),a[te][R]=fe,te===J(d)?.id&&R===J(d).elt&&A(fe)}function b(te){if(J(d)===void 0)return;const{id:R,elt:fe}=J(d);a[R]||(a[R]=[St(0),St(0),St(0),St(0)]);let Ne=a[R];Ne[fe]=te,T(R,fe,te)}function v(te,R){if(Fe(d,R===void 0?void 0:{id:te,elt:R},!0),J(d)){const fe=a[J(d).id]?.[J(d).elt]||St(0);A(fe)}}function N(te,R){if(!a[te])return;let fe=a[te];const Ne=ib(fe,R);Ne&&w(te,R,Ne)}var O=yC(),B=Vt(O),V=Vt(B);gC(V,{get animateIso(){return J(y)},width:800,height:800,get gens(){return J(u)},get colors(){return J(h)},get depth(){return J(f)}});var W=xn(B,2),Y=Vt(W),K=xn(Vt(Y));Vr(V2(K,{onchange:te=>Fe(f,te.detail,!0),get init(){return J(f)},min:1,max:20}),te=>n=te,()=>n);var X=xn(Y,2);xu(X,16,()=>[0,1],mu,(te,R,fe)=>{var Ne=_C(),$e=Vt(Ne);jr($e,"name",`isometry${fe+1}`);var me=xn($e);me.nodeValue=`Isometry ${fe+1} `;var ot=xn(me),we=Vt(ot);Vr(Eb(we,{onfocus:Me=>v(fe,Me.detail),oneltchange:Me=>L(fe,Me.detail.index,Me.detail.value),onkeydown:Me=>{Me.detail.key==="d"&&N(fe,Me.detail.index)}}),(Me,C)=>s[C]=Me,Me=>s?.[Me],()=>[fe]),r_($e,()=>o[fe],Me=>o[fe]=Me),Es(te,Ne)});var ne=xn(X,2),re=Vt(ne),Se=Vt(re);Vr(z2(Se,{onchange:te=>b(te)}),te=>r=te,()=>r);var Ie=xn(ne,2),Ke=Vt(Ie);Ke.__click=x;var lt=Vt(Ke),at=xn(Ie,2),Z=xn(Vt(at));xu(Z,21,()=>Object.values(eo),mu,(te,R)=>{var fe=vC(),Ne=Vt(fe),$e={};du(()=>{po(Ne,J(R).name),$e!==($e=J(R).name)&&(fe.__value=J(R).name)}),Es(te,fe)});var Q=xn(at,2),ve=Vt(Q);ve.__click=()=>Fe(p,J(p)===1?0:1,!0);var We=Vt(ve),Ce=xn(ve,2);Ce.__click=()=>Fe(p,J(p)===2?0:2,!0);var tt=Vt(Ce),Ht=xn(W,2),Je=Vt(Ht);du(te=>{Ke.disabled=J(m),po(lt,J(m)?"URL reference copied":"Copy URL reference"),po(We,J(p)===1?"Stop animation":"Animate! (1)"),po(tt,J(p)===2?"Stop animation":"Animate! (2)"),jr(Je,"src",te)},[()=>Ss().ui.githubImage]),t_(Z,()=>J(t),te=>Fe(t,te)),Es(i,O),ar()}Yc(["click"]);Hg(SC,{target:document.getElementById("app")});

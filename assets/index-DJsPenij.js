(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const nh=!1;var jl=Array.isArray,ih=Array.prototype.indexOf,Ur=Array.prototype.includes,ka=Array.from,rh=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,sh=Object.getOwnPropertyDescriptors,ah=Object.prototype,oh=Array.prototype,rf=Object.getPrototypeOf,wc=Object.isExtensible;const lh=()=>{};function ch(n){for(var e=0;e<n.length;e++)n[e]()}function sf(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Ft=2,Ir=4,Va=8,Zl=1<<24,Bn=16,Dn=32,Ei=64,Xo=128,_n=512,Mt=1024,Ut=2048,kn=4096,Vt=8192,sn=16384,er=32768,qo=1<<25,xs=65536,Yo=1<<17,uh=1<<18,Wr=1<<19,fh=1<<20,Fn=1<<25,Ki=65536,Aa=1<<21,_s=1<<22,Mi=1<<23,Xi=Symbol("$state"),dh=Symbol("legacy props"),hh=Symbol(""),Jn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},af=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function ph(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function mh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function xh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function _h(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Sh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Mh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Eh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Th(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ah=1,wh=2,of=4,Ch=8,Rh=16,Ph=1,Dh=4,Lh=8,Uh=16,Ih=2,bt=Symbol(),lf="http://www.w3.org/1999/xhtml",Nh="@attach";function Fh(){console.warn("https://svelte.dev/e/derived_inert")}function Oh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Bh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function cf(n){return n===this.v}function zh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function uf(n){return!zh(n,this.v)}let kh=!1,$t=null;function Nr(n){$t=n}function tr(n,e=!1,t){$t={p:$t,i:!1,c:null,e:null,s:n,x:null,r:je,l:null}}function nr(n){var e=$t,t=e.e;if(t!==null){e.e=null;for(var i of t)Lf(i)}return e.i=!0,$t=e.p,{}}function ff(){return!0}let Vi=[];function df(){var n=Vi;Vi=[],ch(n)}function ii(n){if(Vi.length===0&&!ls){var e=Vi;queueMicrotask(()=>{e===Vi&&df()})}Vi.push(n)}function Vh(){for(;Vi.length>0;)df()}function hf(n){var e=je;if(e===null)return Ke.f|=Mi,n;if((e.f&er)===0&&(e.f&Ir)===0)throw n;vi(n,e)}function vi(n,e){for(;e!==null;){if((e.f&Xo)!==0){if((e.f&er)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}const Gh=-7169;function _t(n,e){n.f=n.f&Gh|e}function Kl(n){(n.f&_n)!==0||n.deps===null?_t(n,Mt):_t(n,kn)}function pf(n){if(n!==null)for(const e of n)(e.f&Ft)===0||(e.f&Ki)===0||(e.f^=Ki,pf(e.deps))}function mf(n,e,t){(n.f&Ut)!==0?e.add(n):(n.f&kn)!==0&&t.add(n),pf(n.deps),_t(n,Mt)}let Us=!1;function Hh(n){var e=Us;try{return Us=!1,[n(),Us]}finally{Us=e}}const Di=new Set;let Ve=null,wn=null,jo=null,ls=!1,no=!1,Tr=null,xa=null;var Cc=0;let Wh=1;class Ti{id=Wh++;current=new Map;previous=new Map;#t=new Set;#f=new Set;#i=new Set;#l=new Map;#n=new Map;#a=null;#e=[];#r=[];#o=new Set;#c=new Set;#s=new Map;#d=new Set;is_fork=!1;#p=!1;#h=new Set;#u(){return this.is_fork||this.#n.size>0}#_(){for(const i of this.#h)for(const r of i.#n.keys()){for(var e=!1,t=r;t.parent!==null;){if(this.#s.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(e){this.#s.has(e)||this.#s.set(e,{d:[],m:[]}),this.#d.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#s.get(e);if(i){this.#s.delete(e);for(var r of i.d)_t(r,Ut),t(r);for(r of i.m)_t(r,kn),t(r)}this.#d.add(e)}#m(){if(Cc++>1e3&&(Di.delete(this),qh()),!this.#u()){for(const o of this.#o)this.#c.delete(o),_t(o,Ut),this.schedule(o);for(const o of this.#c)_t(o,kn),this.schedule(o)}const e=this.#e;this.#e=[],this.apply();var t=Tr=[],i=[],r=xa=[];for(const o of e)try{this.#g(o,t,i)}catch(l){throw gf(o),l}if(Ve=null,r.length>0){var s=Ti.ensure();for(const o of r)s.schedule(o)}if(Tr=null,xa=null,this.#u()||this.#_()){this.#x(i),this.#x(t);for(const[o,l]of this.#s)_f(o,l)}else{this.#l.size===0&&Di.delete(this),this.#o.clear(),this.#c.clear();for(const o of this.#t)o(this);this.#t.clear(),Rc(i),Rc(t),this.#a?.resolve()}var a=Ve;if(this.#e.length>0){const o=a??=this;o.#e.push(...this.#e.filter(l=>!o.#e.includes(l)))}a!==null&&(Di.add(a),a.#m())}#g(e,t,i){e.f^=Mt;for(var r=e.first;r!==null;){var s=r.f,a=(s&(Dn|Ei))!==0,o=a&&(s&Mt)!==0,l=o||(s&Vt)!==0||this.#s.has(r);if(!l&&r.fn!==null){a?r.f^=Mt:(s&Ir)!==0?t.push(r):Cs(r)&&((s&Bn)!==0&&this.#c.add(r),Or(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#x(e){for(var t=0;t<e.length;t+=1)mf(e[t],this.#o,this.#c)}capture(e,t,i=!1){e.v!==bt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Mi)===0&&(this.current.set(e,[t,i]),wn?.set(e,t)),this.is_fork||(e.v=t)}activate(){Ve=this}deactivate(){Ve=null,wn=null}flush(){try{no=!0,Ve=this,this.#m()}finally{Cc=0,jo=null,Tr=null,xa=null,no=!1,Ve=null,wn=null,qi.clear()}}discard(){for(const e of this.#f)e(this);this.#f.clear(),this.#i.clear(),Di.delete(this)}register_created_effect(e){this.#r.push(e)}#v(){for(const u of Di){var e=u.id<this.id,t=[];for(const[f,[d,m]]of this.current){if(u.current.has(f)){var i=u.current.get(f)[0];if(e&&d!==i)u.current.set(f,[d,m]);else continue}t.push(f)}var r=[...u.current.keys()].filter(f=>!this.current.has(f));if(r.length===0)e&&u.discard();else if(t.length>0){if(e)for(const f of this.#d)u.unskip_effect(f,d=>{(d.f&(Bn|_s))!==0?u.schedule(d):u.#x([d])});u.activate();var s=new Set,a=new Map;for(var o of t)xf(o,r,s,a);a=new Map;var l=[...u.current.keys()].filter(f=>this.current.has(f)?this.current.get(f)[0]!==f:!0);for(const f of this.#r)(f.f&(sn|Vt|Yo))===0&&$l(f,l,a)&&((f.f&(_s|Bn))!==0?(_t(f,Ut),u.schedule(f)):u.#o.add(f));if(u.#e.length>0){u.apply();for(var c of u.#e)u.#g(c,[],[]);u.#e=[]}u.deactivate()}}for(const u of Di)u.#h.has(this)&&(u.#h.delete(this),u.#h.size===0&&!u.#u()&&(u.activate(),u.#m()))}increment(e,t){let i=this.#l.get(t)??0;if(this.#l.set(t,i+1),e){let r=this.#n.get(t)??0;this.#n.set(t,r+1)}}decrement(e,t,i){let r=this.#l.get(t)??0;if(r===1?this.#l.delete(t):this.#l.set(t,r-1),e){let s=this.#n.get(t)??0;s===1?this.#n.delete(t):this.#n.set(t,s-1)}this.#p||i||(this.#p=!0,ii(()=>{this.#p=!1,this.flush()}))}transfer_effects(e,t){for(const i of e)this.#o.add(i);for(const i of t)this.#c.add(i);e.clear(),t.clear()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#f.add(e)}on_fork_commit(e){this.#i.add(e)}run_fork_commit_callbacks(){for(const e of this.#i)e(this);this.#i.clear()}settled(){return(this.#a??=sf()).promise}static ensure(){if(Ve===null){const e=Ve=new Ti;no||(Di.add(Ve),ls||ii(()=>{Ve===e&&e.flush()}))}return Ve}apply(){{wn=null;return}}schedule(e){if(jo=e,e.b?.is_pending&&(e.f&(Ir|Va|Zl))!==0&&(e.f&er)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(Tr!==null&&t===je&&(Ke===null||(Ke.f&Ft)===0))return;if((i&(Ei|Dn))!==0){if((i&Mt)===0)return;t.f^=Mt}}this.#e.push(t)}}function Xh(n){var e=ls;ls=!0;try{for(var t;;){if(Vh(),Ve===null)return t;Ve.flush()}}finally{ls=e}}function qh(){try{Sh()}catch(n){vi(n,jo)}}let Kn=null;function Rc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(sn|Vt))===0&&Cs(i)&&(Kn=new Set,Or(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Ff(i),Kn?.size>0)){qi.clear();for(const r of Kn){if((r.f&(sn|Vt))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Kn.has(a)&&(Kn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(sn|Vt))===0&&Or(l)}}Kn.clear()}}Kn=null}}function xf(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&Ft)!==0?xf(r,e,t,i):(s&(_s|Bn))!==0&&(s&Ut)===0&&$l(r,e,i)&&(_t(r,Ut),Jl(r))}}function $l(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ur.call(e,r))return!0;if((r.f&Ft)!==0&&$l(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Jl(n){Ve.schedule(n)}function _f(n,e){if(!((n.f&Dn)!==0&&(n.f&Mt)!==0)){(n.f&Ut)!==0?e.d.push(n):(n.f&kn)!==0&&e.m.push(n),_t(n,Mt);for(var t=n.first;t!==null;)_f(t,e),t=t.next}}function gf(n){_t(n,Mt);for(var e=n.first;e!==null;)gf(e),e=e.next}function vf(n){let e=0,t=$i(0),i;return()=>{tc()&&(ee(t),qa(()=>(e===0&&(i=ir(()=>n(()=>cs(t)))),e+=1,()=>{ii(()=>{e-=1,e===0&&(i?.(),i=void 0,cs(t))})})))}}var Yh=xs|Wr;function jh(n,e,t,i){new Zh(n,e,t,i)}class Zh{parent;is_pending=!1;transform_error;#t;#f=null;#i;#l;#n;#a=null;#e=null;#r=null;#o=null;#c=0;#s=0;#d=!1;#p=new Set;#h=new Set;#u=null;#_=vf(()=>(this.#u=$i(this.#c),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#i=t,this.#l=s=>{var a=je;a.b=this,a.f|=Xo,i(s)},this.parent=je.b,this.transform_error=r??this.parent?.transform_error??(s=>s),this.#n=Uf(()=>{this.#v()},Yh)}#m(){try{this.#a=dn(()=>this.#l(this.#t))}catch(e){this.error(e)}}#g(e){const t=this.#i.failed;t&&(this.#r=dn(()=>{t(this.#t,()=>e,()=>()=>{})}))}#x(){const e=this.#i.pending;e&&(this.is_pending=!0,this.#e=dn(()=>e(this.#t)),ii(()=>{var t=this.#o=document.createDocumentFragment(),i=us();t.append(i),this.#a=this.#b(()=>dn(()=>this.#l(i))),this.#s===0&&(this.#t.before(t),this.#o=null,Cr(this.#e,()=>{this.#e=null}),this.#S(Ve))}))}#v(){try{if(this.is_pending=this.has_pending_snippet(),this.#s=0,this.#c=0,this.#a=dn(()=>{this.#l(this.#t)}),this.#s>0){var e=this.#o=document.createDocumentFragment();kf(this.#a,e);const t=this.#i.pending;this.#e=dn(()=>t(this.#t))}else this.#S(Ve)}catch(t){this.error(t)}}#S(e){this.is_pending=!1,e.transfer_effects(this.#p,this.#h)}defer_effect(e){mf(e,this.#p,this.#h)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#i.pending}#b(e){var t=je,i=Ke,r=$t;Vn(this.#n),vn(this.#n),Nr(this.#n.ctx);try{return Ti.ensure(),e()}catch(s){return hf(s),null}finally{Vn(t),vn(i),Nr(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#s+=e,this.#s===0&&(this.#S(t),this.#e&&Cr(this.#e,()=>{this.#e=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#c+=e,!(!this.#u||this.#d)&&(this.#d=!0,ii(()=>{this.#d=!1,this.#u&&Fr(this.#u,this.#c)}))}get_effect_pending(){return this.#_(),ee(this.#u)}error(e){if(!this.#i.onerror&&!this.#i.failed)throw e;Ve?.is_fork?(this.#a&&Ve.skip_effect(this.#a),this.#e&&Ve.skip_effect(this.#e),this.#r&&Ve.skip_effect(this.#r),Ve.on_fork_commit(()=>{this.#y(e)})):this.#y(e)}#y(e){this.#a&&(jt(this.#a),this.#a=null),this.#e&&(jt(this.#e),this.#e=null),this.#r&&(jt(this.#r),this.#r=null);var t=this.#i.onerror;let i=this.#i.failed;var r=!1,s=!1;const a=()=>{if(r){Bh();return}r=!0,s&&Th(),this.#r!==null&&Cr(this.#r,()=>{this.#r=null}),this.#b(()=>{this.#v()})},o=l=>{try{s=!0,t?.(l,a),s=!1}catch(c){vi(c,this.#n&&this.#n.parent)}i&&(this.#r=this.#b(()=>{try{return dn(()=>{var c=je;c.b=this,c.f|=Xo,i(this.#t,()=>l,()=>a)})}catch(c){return vi(c,this.#n.parent),null}}))};ii(()=>{var l;try{l=this.transform_error(e)}catch(c){vi(c,this.#n&&this.#n.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>vi(c,this.#n&&this.#n.parent)):o(l)})}}function Sf(n,e,t,i){const r=Ga;var s=n.filter(d=>!d.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=je,o=Kh(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function c(d){o();try{i(d)}catch(m){(a.f&sn)===0&&vi(m,a)}wa()}if(t.length===0){l.then(()=>c(e.map(r)));return}var u=bf();function f(){Promise.all(t.map(d=>$h(d))).then(d=>c([...e.map(r),...d])).catch(d=>vi(d,a)).finally(()=>u())}l?l.then(()=>{o(),f(),wa()}):f()}function Kh(){var n=je,e=Ke,t=$t,i=Ve;return function(s=!0){Vn(n),vn(e),Nr(t),s&&(n.f&sn)===0&&(i?.activate(),i?.apply())}}function wa(n=!0){Vn(null),vn(null),Nr(null),n&&Ve?.deactivate()}function bf(){var n=je,e=n.b,t=Ve,i=e.is_rendered();return e.update_pending_count(1,t),t.increment(i,n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(i,n,r)}}function Ga(n){var e=Ft|Ut;return je!==null&&(je.f|=Wr),{ctx:$t,deps:null,effects:null,equals:cf,f:e,fn:n,reactions:null,rv:0,v:bt,wv:0,parent:je,ac:null}}function $h(n,e,t){let i=je;i===null&&mh();var r=void 0,s=$i(bt),a=!Ke,o=new Map;return dp(()=>{var l=je,c=sf();r=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).finally(wa)}catch(m){c.reject(m),wa()}var u=Ve;if(a){if((l.f&er)!==0)var f=bf();if(i.b.is_rendered())o.get(u)?.reject(Jn),o.delete(u);else{for(const m of o.values())m.reject(Jn);o.clear()}o.set(u,c)}const d=(m,x=void 0)=>{if(f){var _=x===Jn;f(_)}if(!(x===Jn||(l.f&sn)!==0)){if(u.activate(),x)s.f|=Mi,Fr(s,x);else{(s.f&Mi)!==0&&(s.f^=Mi),Fr(s,m);for(const[p,h]of o){if(o.delete(p),p===u)break;h.reject(Jn)}}u.deactivate()}};c.promise.then(d,m=>d(null,m||"unknown"))}),Df(()=>{for(const l of o.values())l.reject(Jn)}),new Promise(l=>{function c(u){function f(){u===r?l(s):c(r)}u.then(f,f)}c(r)})}function $n(n){const e=Ga(n);return Vf(e),e}function Mf(n){const e=Ga(n);return e.equals=uf,e}function Jh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)jt(e[t])}}function Ql(n){var e,t=je,i=n.parent;if(!ai&&i!==null&&(i.f&(sn|Vt))!==0)return Fh(),n.v;Vn(i);try{n.f&=~Ki,Jh(n),e=Xf(n)}finally{Vn(t)}return e}function yf(n){var e=Ql(n);if(!n.equals(e)&&(n.wv=Hf(),(!Ve?.is_fork||n.deps===null)&&(Ve!==null?Ve.capture(n,e,!0):n.v=e,n.deps===null))){_t(n,Mt);return}ai||(wn!==null?(tc()||Ve?.is_fork)&&wn.set(n,e):Kl(n))}function Qh(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(Jn),e.teardown=lh,e.ac=null,gs(e,0),nc(e))}function Ef(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&Or(e)}let Zo=new Set;const qi=new Map;let Tf=!1;function $i(n,e){var t={f:0,v:n,reactions:null,equals:cf,rv:0,wv:0};return t}function ft(n,e){const t=$i(n);return Vf(t),t}function ep(n,e=!1,t=!0){const i=$i(n);return e||(i.equals=uf),i}function Qe(n,e,t=!1){Ke!==null&&(!Cn||(Ke.f&Yo)!==0)&&ff()&&(Ke.f&(Ft|Bn|_s|Yo))!==0&&(gn===null||!Ur.call(gn,n))&&Eh();let i=t?kt(e):e;return Fr(n,i,xa)}function Fr(n,e,t=null){if(!n.equals(e)){qi.set(n,ai?e:n.v);var i=Ti.ensure();if(i.capture(n,e),(n.f&Ft)!==0){const r=n;(n.f&Ut)!==0&&Ql(r),wn===null&&Kl(r)}n.wv=Hf(),Af(n,Ut,t),je!==null&&(je.f&Mt)!==0&&(je.f&(Dn|Ei))===0&&(fn===null?mp([n]):fn.push(n)),!i.is_fork&&Zo.size>0&&!Tf&&tp()}return e}function tp(){Tf=!1;for(const n of Zo)(n.f&Mt)!==0&&_t(n,kn),Cs(n)&&Or(n);Zo.clear()}function cs(n){Qe(n,n.v+1)}function Af(n,e,t){var i=n.reactions;if(i!==null)for(var r=i.length,s=0;s<r;s++){var a=i[s],o=a.f,l=(o&Ut)===0;if(l&&_t(a,e),(o&Ft)!==0){var c=a;wn?.delete(c),(o&Ki)===0&&(o&_n&&(je===null||(je.f&Aa)===0)&&(a.f|=Ki),Af(c,kn,t))}else if(l){var u=a;(o&Bn)!==0&&Kn!==null&&Kn.add(u),t!==null?t.push(u):Jl(u)}}}function kt(n){if(typeof n!="object"||n===null||Xi in n)return n;const e=rf(n);if(e!==ah&&e!==oh)return n;var t=new Map,i=jl(n),r=ft(0),s=Yi,a=o=>{if(Yi===s)return o();var l=Ke,c=Yi;vn(null),Ic(s);var u=o();return vn(l),Ic(c),u};return i&&t.set("length",ft(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Mh();var u=t.get(l);return u===void 0?a(()=>{var f=ft(c.value);return t.set(l,f),f}):Qe(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>ft(bt));t.set(l,u),cs(r)}}else Qe(c,bt),cs(r);return!0},get(o,l,c){if(l===Xi)return n;var u=t.get(l),f=l in o;if(u===void 0&&(!f||wr(o,l)?.writable)&&(u=a(()=>{var m=kt(f?o[l]:bt),x=ft(m);return x}),t.set(l,u)),u!==void 0){var d=ee(u);return d===bt?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=ee(u))}else if(c===void 0){var f=t.get(l),d=f?.v;if(f!==void 0&&d!==bt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){if(l===Xi)return!0;var c=t.get(l),u=c!==void 0&&c.v!==bt||Reflect.has(o,l);if(c!==void 0||je!==null&&(!u||wr(o,l)?.writable)){c===void 0&&(c=a(()=>{var d=u?kt(o[l]):bt,m=ft(d);return m}),t.set(l,c));var f=ee(c);if(f===bt)return!1}return u},set(o,l,c,u){var f=t.get(l),d=l in o;if(i&&l==="length")for(var m=c;m<f.v;m+=1){var x=t.get(m+"");x!==void 0?Qe(x,bt):m in o&&(x=a(()=>ft(bt)),t.set(m+"",x))}if(f===void 0)(!d||wr(o,l)?.writable)&&(f=a(()=>ft(void 0)),Qe(f,kt(c)),t.set(l,f));else{d=f.v!==bt;var _=a(()=>kt(c));Qe(f,_)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p?.set&&p.set.call(u,c),!d){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&Qe(h,E+1)}cs(r)}return!0},ownKeys(o){ee(r);var l=Reflect.ownKeys(o).filter(f=>{var d=t.get(f);return d===void 0||d.v!==bt});for(var[c,u]of t)u.v!==bt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){yh()}})}function Pc(n){try{if(n!==null&&typeof n=="object"&&Xi in n)return n[Xi]}catch{}return n}function np(n,e){return Object.is(Pc(n),Pc(e))}var Dc,wf,Cf,Rf;function ip(){if(Dc===void 0){Dc=window,wf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Cf=wr(e,"firstChild").get,Rf=wr(e,"nextSibling").get,wc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),wc(t)&&(t.__t=void 0)}}function us(n=""){return document.createTextNode(n)}function Pf(n){return Cf.call(n)}function Ha(n){return Rf.call(n)}function Dt(n,e){return Pf(n)}function Xt(n,e=1,t=!1){let i=n;for(;e--;)i=Ha(i);return i}function rp(n){n.textContent=""}function sp(){return!1}function ap(n,e,t){return document.createElementNS(lf,n,void 0)}function op(n,e){if(e){const t=document.body;n.autofocus=!0,ii(()=>{document.activeElement===t&&n.focus()})}}let Lc=!1;function lp(){Lc||(Lc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Wa(n){var e=Ke,t=je;vn(null),Vn(null);try{return n()}finally{vn(e),Vn(t)}}function ec(n,e,t,i=t){n.addEventListener(e,()=>Wa(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),lp()}function cp(n){je===null&&(Ke===null&&vh(),gh()),ai&&_h()}function up(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Gn(n,e){var t=je;t!==null&&(t.f&Vt)!==0&&(n|=Vt);var i={ctx:$t,deps:null,nodes:null,f:n|Ut|_n,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Ve?.register_created_effect(i);var r=i;if((n&Ir)!==0)Tr!==null?Tr.push(i):Ti.ensure().schedule(i);else if(e!==null){try{Or(i)}catch(a){throw jt(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Wr)===0&&(r=r.first,(n&Bn)!==0&&(n&xs)!==0&&r!==null&&(r.f|=xs))}if(r!==null&&(r.parent=t,t!==null&&up(r,t),Ke!==null&&(Ke.f&Ft)!==0&&(n&Ei)===0)){var s=Ke;(s.effects??=[]).push(r)}return i}function tc(){return Ke!==null&&!Cn}function Df(n){const e=Gn(Va,null);return _t(e,Mt),e.teardown=n,e}function an(n){cp();var e=je.f,t=!Ke&&(e&Dn)!==0&&(e&er)===0;if(t){var i=$t;(i.e??=[]).push(n)}else return Lf(n)}function Lf(n){return Gn(Ir|fh,n)}function fp(n){Ti.ensure();const e=Gn(Ei|Wr,n);return(t={})=>new Promise(i=>{t.outro?Cr(e,()=>{jt(e),i(void 0)}):(jt(e),i(void 0))})}function Xa(n){return Gn(Ir,n)}function dp(n){return Gn(_s|Wr,n)}function qa(n,e=0){return Gn(Va|e,n)}function rs(n,e=[],t=[],i=[]){Sf(i,e,t,r=>{Gn(Va,()=>n(...r.map(ee)))})}function Uf(n,e=0){var t=Gn(Bn|e,n);return t}function If(n,e=0){var t=Gn(Zl|e,n);return t}function dn(n){return Gn(Dn|Wr,n)}function Nf(n){var e=n.teardown;if(e!==null){const t=ai,i=Ke;Uc(!0),vn(null);try{e.call(null)}finally{Uc(t),vn(i)}}}function nc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&Wa(()=>{r.abort(Jn)});var i=t.next;(t.f&Ei)!==0?t.parent=null:jt(t,e),t=i}}function hp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Dn)===0&&jt(e),e=t}}function jt(n,e=!0){var t=!1;(e||(n.f&uh)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(pp(n.nodes.start,n.nodes.end),t=!0),_t(n,qo),nc(n,e&&!t),gs(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Nf(n),n.f^=qo,n.f|=sn;var r=n.parent;r!==null&&r.first!==null&&Ff(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function pp(n,e){for(;n!==null;){var t=n===e?null:Ha(n);n.remove(),n=t}}function Ff(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Cr(n,e,t=!0){var i=[];Of(n,i,!0);var r=()=>{t&&jt(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Of(n,e,t){if((n.f&Vt)===0){n.f^=Vt;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&Ei)===0){var a=(r.f&xs)!==0||(r.f&Dn)!==0&&(n.f&Bn)!==0;Of(r,e,a?t:!1)}r=s}}}function Bf(n){zf(n,!0)}function zf(n,e){if((n.f&Vt)!==0){n.f^=Vt,(n.f&Mt)===0&&(_t(n,Ut),Ti.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&xs)!==0||(t.f&Dn)!==0;zf(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function kf(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ha(t);e.append(t),t=r}}let _a=!1,ai=!1;function Uc(n){ai=n}let Ke=null,Cn=!1;function vn(n){Ke=n}let je=null;function Vn(n){je=n}let gn=null;function Vf(n){Ke!==null&&(gn===null?gn=[n]:gn.push(n))}let qt=null,rn=0,fn=null;function mp(n){fn=n}let Gf=1,Gi=0,Yi=Gi;function Ic(n){Yi=n}function Hf(){return++Gf}function Cs(n){var e=n.f;if((e&Ut)!==0)return!0;if(e&Ft&&(n.f&=~Ki),(e&kn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(Cs(s)&&yf(s),s.wv>n.wv)return!0}(e&_n)!==0&&wn===null&&_t(n,Mt)}return!1}function Wf(n,e,t=!0){var i=n.reactions;if(i!==null&&!(gn!==null&&Ur.call(gn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&Ft)!==0?Wf(s,e,!1):e===s&&(t?_t(s,Ut):(s.f&Mt)!==0&&_t(s,kn),Jl(s))}}function Xf(n){var e=qt,t=rn,i=fn,r=Ke,s=gn,a=$t,o=Cn,l=Yi,c=n.f;qt=null,rn=0,fn=null,Ke=(c&(Dn|Ei))===0?n:null,gn=null,Nr(n.ctx),Cn=!1,Yi=++Gi,n.ac!==null&&(Wa(()=>{n.ac.abort(Jn)}),n.ac=null);try{n.f|=Aa;var u=n.fn,f=u();n.f|=er;var d=n.deps,m=Ve?.is_fork;if(qt!==null){var x;if(m||gs(n,rn),d!==null&&rn>0)for(d.length=rn+qt.length,x=0;x<qt.length;x++)d[rn+x]=qt[x];else n.deps=d=qt;if(tc()&&(n.f&_n)!==0)for(x=rn;x<d.length;x++)(d[x].reactions??=[]).push(n)}else!m&&d!==null&&rn<d.length&&(gs(n,rn),d.length=rn);if(ff()&&fn!==null&&!Cn&&d!==null&&(n.f&(Ft|kn|Ut))===0)for(x=0;x<fn.length;x++)Wf(fn[x],n);if(r!==null&&r!==n){if(Gi++,r.deps!==null)for(let _=0;_<t;_+=1)r.deps[_].rv=Gi;if(e!==null)for(const _ of e)_.rv=Gi;fn!==null&&(i===null?i=fn:i.push(...fn))}return(n.f&Mi)!==0&&(n.f^=Mi),f}catch(_){return hf(_)}finally{n.f^=Aa,qt=e,rn=t,fn=i,Ke=r,gn=s,Nr(a),Cn=o,Yi=l}}function xp(n,e){let t=e.reactions;if(t!==null){var i=ih.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&Ft)!==0&&(qt===null||!Ur.call(qt,e))){var s=e;(s.f&_n)!==0&&(s.f^=_n,s.f&=~Ki),s.v!==bt&&Kl(s),Qh(s),gs(s,0)}}function gs(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)xp(n,t[i])}function Or(n){var e=n.f;if((e&sn)===0){_t(n,Mt);var t=je,i=_a;je=n,_a=!0;try{(e&(Bn|Zl))!==0?hp(n):nc(n),Nf(n);var r=Xf(n);n.teardown=typeof r=="function"?r:null,n.wv=Gf;var s;nh&&kh&&(n.f&Ut)!==0&&n.deps}finally{_a=i,je=t}}}async function _p(){await Promise.resolve(),Xh()}function ee(n){var e=n.f,t=(e&Ft)!==0;if(Ke!==null&&!Cn){var i=je!==null&&(je.f&sn)!==0;if(!i&&(gn===null||!Ur.call(gn,n))){var r=Ke.deps;if((Ke.f&Aa)!==0)n.rv<Gi&&(n.rv=Gi,qt===null&&r!==null&&r[rn]===n?rn++:qt===null?qt=[n]:qt.push(n));else{(Ke.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[Ke]:Ur.call(s,Ke)||s.push(Ke)}}}if(ai&&qi.has(n))return qi.get(n);if(t){var a=n;if(ai){var o=a.v;return((a.f&Mt)===0&&a.reactions!==null||Yf(a))&&(o=Ql(a)),qi.set(a,o),o}var l=(a.f&_n)===0&&!Cn&&Ke!==null&&(_a||(Ke.f&_n)!==0),c=(a.f&er)===0;Cs(a)&&(l&&(a.f|=_n),yf(a)),l&&!c&&(Ef(a),qf(a))}if(wn?.has(n))return wn.get(n);if((n.f&Mi)!==0)throw n.v;return n.v}function qf(n){if(n.f|=_n,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Ft)!==0&&(e.f&_n)===0&&(Ef(e),qf(e))}function Yf(n){if(n.v===bt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(qi.has(e)||(e.f&Ft)!==0&&Yf(e))return!0;return!1}function ir(n){var e=Cn;try{return Cn=!0,n()}finally{Cn=e}}function gp(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const vp=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Sp(n){return vp.includes(n)}const bp={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Mp(n){return n=n.toLowerCase(),bp[n]??n}const yp=["touchstart","touchmove"];function Ep(n){return yp.includes(n)}const ss=Symbol("events"),jf=new Set,Ko=new Set;function Zf(n,e,t,i={}){function r(s){if(i.capture||$o.call(e,s),!s.cancelBubble)return Wa(()=>t?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ii(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Ca(n,e,t,i={}){var r=Zf(e,n,t,i);return()=>{n.removeEventListener(e,r,i)}}function ji(n,e,t){(e[ss]??={})[n]=t}function Ya(n){for(var e=0;e<n.length;e++)jf.add(n[e]);for(var t of Ko)t(n)}let Nc=null;function $o(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;Nc=n;var a=0,o=Nc===n&&n[ss];if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n[ss]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){rh(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=Ke,f=je;vn(null),Vn(null);try{for(var d,m=[];s!==null;){var x=s.assignedSlot||s.parentNode||s.host||null;try{var _=s[ss]?.[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(p){d?m.push(p):d=p}if(n.cancelBubble||x===e||x===null)break;s=x}if(d){for(let p of m)queueMicrotask(()=>{throw p});throw d}}finally{n[ss]=e,delete n.currentTarget,vn(u),Vn(f)}}}const Tp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Ap(n){return Tp?.createHTML(n)??n}function wp(n){var e=ap("template");return e.innerHTML=Ap(n.replaceAll("<!>","<!---->")),e.content}function Cp(n,e){var t=je;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function ci(n,e){var t=(e&Ih)!==0,i,r=!n.startsWith("<!>");return()=>{i===void 0&&(i=wp(r?n:"<!>"+n),i=Pf(i));var s=t||wf?document.importNode(i,!0):i.cloneNode(!0);return Cp(s,s),s}}function ei(n,e){n!==null&&n.before(e)}function Is(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=`${t}`)}function Rp(n,e){return Pp(n,e)}const Ns=new Map;function Pp(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0,transformError:o}){ip();var l=void 0,c=fp(()=>{var u=t??e.appendChild(us());jh(u,{pending:()=>{}},m=>{tr({});var x=$t;s&&(x.c=s),r&&(i.$$events=r),l=n(m,i)||{},nr()},o);var f=new Set,d=m=>{for(var x=0;x<m.length;x++){var _=m[x];if(!f.has(_)){f.add(_);var p=Ep(_);for(const y of[e,document]){var h=Ns.get(y);h===void 0&&(h=new Map,Ns.set(y,h));var E=h.get(_);E===void 0?(y.addEventListener(_,$o,{passive:p}),h.set(_,1)):h.set(_,E+1)}}}};return d(ka(jf)),Ko.add(d),()=>{for(var m of f)for(const p of[e,document]){var x=Ns.get(p),_=x.get(m);--_==0?(p.removeEventListener(m,$o),x.delete(m),x.size===0&&Ns.delete(p)):x.set(m,_)}Ko.delete(d),u!==t&&u.parentNode?.removeChild(u)}});return Dp.set(l,c),l}let Dp=new WeakMap;function ga(n,e){return e}function Lp(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];Cr(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var d=n.outrogroups;Jo(n,ka(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;rp(u),u.append(c),n.items.clear()}Jo(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(s)}function Jo(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<e.length;r++){var s=e[r];if(i?.has(s)){s.f|=Fn;const a=document.createDocumentFragment();kf(s,a)}else jt(e[r],t)}}var Fc;function va(n,e,t,i,r,s=null){var a=n,o=new Map,l=(e&of)!==0;if(l){var c=n;a=c.appendChild(us())}var u=null,f=Mf(()=>{var y=t();return jl(y)?y:y==null?[]:ka(y)}),d,m=new Map,x=!0;function _(y){(E.effect.f&sn)===0&&(E.pending.delete(y),E.fallback=u,Up(E,d,a,e,i),u!==null&&(d.length===0?(u.f&Fn)===0?Bf(u):(u.f^=Fn,as(u,null,a)):Cr(u,()=>{u=null})))}function p(y){E.pending.delete(y)}var h=Uf(()=>{d=ee(f);for(var y=d.length,T=new Set,C=Ve,b=sp(),w=0;w<y;w+=1){var L=d[w],M=i(L,w),S=x?null:o.get(M);S?(S.v&&Fr(S.v,L),S.i&&Fr(S.i,w),b&&C.unskip_effect(S.e)):(S=Ip(o,x?a:Fc??=us(),L,M,w,r,e,t),x||(S.e.f|=Fn),o.set(M,S)),T.add(M)}if(y===0&&s&&!u&&(x?u=dn(()=>s(a)):(u=dn(()=>s(Fc??=us())),u.f|=Fn)),y>T.size&&xh(),!x)if(m.set(C,T),b){for(const[P,O]of o)T.has(P)||C.skip_effect(O.e);C.oncommit(_),C.ondiscard(p)}else _(C);ee(f)}),E={effect:h,items:o,pending:m,outrogroups:null,fallback:u};x=!1}function Zr(n){for(;n!==null&&(n.f&Dn)===0;)n=n.next;return n}function Up(n,e,t,i,r){var s=(i&Ch)!==0,a=e.length,o=n.items,l=Zr(n.effect.first),c,u=null,f,d=[],m=[],x,_,p,h;if(s)for(h=0;h<a;h+=1)x=e[h],_=r(x,h),p=o.get(_).e,(p.f&Fn)===0&&(p.nodes?.a?.measure(),(f??=new Set).add(p));for(h=0;h<a;h+=1){if(x=e[h],_=r(x,h),p=o.get(_).e,n.outrogroups!==null)for(const S of n.outrogroups)S.pending.delete(p),S.done.delete(p);if((p.f&Vt)!==0&&(Bf(p),s&&(p.nodes?.a?.unfix(),(f??=new Set).delete(p))),(p.f&Fn)!==0)if(p.f^=Fn,p===l)as(p,null,t);else{var E=u?u.next:l;p===n.effect.last&&(n.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),ui(n,u,p),ui(n,p,E),as(p,E,t),u=p,d=[],m=[],l=Zr(u.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(d.length<m.length){var y=m[0],T;u=y.prev;var C=d[0],b=d[d.length-1];for(T=0;T<d.length;T+=1)as(d[T],y,t);for(T=0;T<m.length;T+=1)c.delete(m[T]);ui(n,C.prev,b.next),ui(n,u,C),ui(n,b,y),l=y,u=b,h-=1,d=[],m=[]}else c.delete(p),as(p,l,t),ui(n,p.prev,p.next),ui(n,p,u===null?n.effect.first:u.next),ui(n,u,p),u=p;continue}for(d=[],m=[];l!==null&&l!==p;)(c??=new Set).add(l),m.push(l),l=Zr(l.next);if(l===null)continue}(p.f&Fn)===0&&d.push(p),u=p,l=Zr(p.next)}if(n.outrogroups!==null){for(const S of n.outrogroups)S.pending.size===0&&(Jo(n,ka(S.done)),n.outrogroups?.delete(S));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var w=[];if(c!==void 0)for(p of c)(p.f&Vt)===0&&w.push(p);for(;l!==null;)(l.f&Vt)===0&&l!==n.fallback&&w.push(l),l=Zr(l.next);var L=w.length;if(L>0){var M=(i&of)!==0&&a===0?t:null;if(s){for(h=0;h<L;h+=1)w[h].nodes?.a?.measure();for(h=0;h<L;h+=1)w[h].nodes?.a?.fix()}Lp(n,w,M)}}s&&ii(()=>{if(f!==void 0)for(p of f)p.nodes?.a?.apply()})}function Ip(n,e,t,i,r,s,a,o){var l=(a&Ah)!==0?(a&Rh)===0?ep(t,!1,!1):$i(t):null,c=(a&wh)!==0?$i(r):null;return{v:l,i:c,e:dn(()=>(s(e,l??t,c??r,o),()=>{n.delete(i)}))}}function as(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Fn)===0?e.nodes.start:t;i!==null;){var a=Ha(i);if(s.before(i),i===r)return;i=a}}function ui(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Np(n,e){var t=void 0,i;If(()=>{t!==(t=e())&&(i&&(jt(i),i=null),t&&(i=dn(()=>{Xa(()=>t(n))})))})}function Kf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Kf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Fp(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Kf(n))&&(i&&(i+=" "),i+=e);return i}function Op(n){return typeof n=="object"?Fp(n):n??""}const Oc=[...` 	
\r\f \v\uFEFF`];function Bp(n,e,t){var i=n==null?"":""+n;if(t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||Oc.includes(i[a-1]))&&(o===i.length||Oc.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Bc(n,e=!1){var t=e?" !important;":";",i="";for(var r of Object.keys(n)){var s=n[r];s!=null&&s!==""&&(i+=" "+r+": "+s+t)}return i}function io(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function zp(n,e){if(e){var t="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(io)),r&&l.push(...Object.keys(r).map(io));var c=0,u=-1;const _=n.length;for(var f=0;f<_;f++){var d=n[f];if(o?d==="/"&&n[f-1]==="*"&&(o=!1):s?s===d&&(s=!1):d==="/"&&n[f+1]==="*"?o=!0:d==='"'||d==="'"?s=d:d==="("?a++:d===")"&&a--,!o&&s===!1&&a===0){if(d===":"&&u===-1)u=f;else if(d===";"||f===_-1){if(u!==-1){var m=io(n.substring(c,u).trim());if(!l.includes(m)){d!==";"&&f++;var x=n.substring(c,f).trim();t+=" "+x+";"}}c=f+1,u=-1}}}}return i&&(t+=Bc(i)),r&&(t+=Bc(r,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function kp(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=Bp(t,i,s);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n.__className=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function ro(n,e={},t,i){for(var r in t){var s=t[r];e[r]!==s&&(t[r]==null?n.style.removeProperty(r):n.style.setProperty(r,s,i))}}function $f(n,e,t,i){var r=n.__style;if(r!==e){var s=zp(e,i);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}else i&&(Array.isArray(i)?(ro(n,t?.[0],i[0]),ro(n,t?.[1],i[1],"important")):ro(n,t,i));return i}function Ra(n,e,t=!1){if(n.multiple){if(e==null)return;if(!jl(e))return Oh();for(var i of n.options)i.selected=e.includes(fs(i));return}for(i of n.options){var r=fs(i);if(np(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Jf(n){var e=new MutationObserver(()=>{Ra(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Df(()=>{e.disconnect()})}function Vp(n,e,t=e){var i=new WeakSet,r=!0;ec(n,"change",s=>{var a=s?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(a),fs);else{var l=n.querySelector(a)??n.querySelector("option:not([disabled])");o=l&&fs(l)}t(o),n.__value=o,Ve!==null&&i.add(Ve)}),Xa(()=>{var s=e();if(n===document.activeElement){var a=Ve;if(i.has(a))return}if(Ra(n,s,r),r&&s===void 0){var o=n.querySelector(":checked");o!==null&&(s=fs(o),t(s))}n.__value=s,r=!1}),Jf(n)}function fs(n){return"__value"in n?n.__value:n.value}const Kr=Symbol("class"),$r=Symbol("style"),Qf=Symbol("is custom element"),ed=Symbol("is html"),Gp=af?"option":"OPTION",Hp=af?"select":"SELECT";function Wp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Br(n,e,t,i){var r=td(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[hh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&nd(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Xp(n,e,t,i,r=!1,s=!1){var a=td(n),o=a[Qf],l=!a[ed],c=e||{},u=n.nodeName===Gp;for(var f in e)f in t||(t[f]=null);t.class?t.class=Op(t.class):t[Kr]&&(t.class=null),t[$r]&&(t.style??=null);var d=nd(n);for(const T in t){let C=t[T];if(u&&T==="value"&&C==null){n.value=n.__value="",c[T]=C;continue}if(T==="class"){var m=n.namespaceURI==="http://www.w3.org/1999/xhtml";kp(n,m,C,i,e?.[Kr],t[Kr]),c[T]=C,c[Kr]=t[Kr];continue}if(T==="style"){$f(n,C,e?.[$r],t[$r]),c[T]=C,c[$r]=t[$r];continue}var x=c[T];if(!(C===x&&!(C===void 0&&n.hasAttribute(T)))){c[T]=C;var _=T[0]+T[1];if(_!=="$$")if(_==="on"){const b={},w="$$"+T;let L=T.slice(2);var p=Sp(L);if(gp(L)&&(L=L.slice(0,-7),b.capture=!0),!p&&x){if(C!=null)continue;n.removeEventListener(L,c[w],b),c[w]=null}if(p)ji(L,n,C),Ya([L]);else if(C!=null){let M=function(S){c[T].call(this,S)};var y=M;c[w]=Zf(L,n,M,b)}}else if(T==="style")Br(n,T,C);else if(T==="autofocus")op(n,!!C);else if(!o&&(T==="__value"||T==="value"&&C!=null))n.value=n.__value=C;else if(T==="selected"&&u)Wp(n,C);else{var h=T;l||(h=Mp(h));var E=h==="defaultValue"||h==="defaultChecked";if(C==null&&!o&&!E)if(a[T]=null,h==="value"||h==="checked"){let b=n;const w=e===void 0;if(h==="value"){let L=b.defaultValue;b.removeAttribute(h),b.defaultValue=L,b.value=b.__value=w?L:null}else{let L=b.defaultChecked;b.removeAttribute(h),b.defaultChecked=L,b.checked=w?L:!1}}else n.removeAttribute(T);else E||d.includes(h)&&(o||typeof C!="string")?(n[h]=C,h in a&&(a[h]=bt)):typeof C!="function"&&Br(n,h,C)}}}return c}function qp(n,e,t=[],i=[],r=[],s,a=!1,o=!1){Sf(r,t,i,l=>{var c=void 0,u={},f=n.nodeName===Hp,d=!1;if(If(()=>{var x=e(...l.map(ee)),_=Xp(n,c,x,s,a,o);d&&f&&"value"in x&&Ra(n,x.value);for(let h of Object.getOwnPropertySymbols(u))x[h]||jt(u[h]);for(let h of Object.getOwnPropertySymbols(x)){var p=x[h];h.description===Nh&&(!c||p!==c[h])&&(u[h]&&jt(u[h]),u[h]=dn(()=>Np(n,()=>p))),_[h]=p}c=_}),f){var m=n;Xa(()=>{Ra(m,c.value,!0),Jf(m)})}d=!0})}function td(n){return n.__attributes??={[Qf]:n.nodeName.includes("-"),[ed]:n.namespaceURI===lf}}var zc=new Map;function nd(n){var e=n.getAttribute("is")||n.nodeName,t=zc.get(e);if(t)return t;zc.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=sh(r);for(var a in i)i[a].set&&t.push(a);r=rf(r)}return t}function id(n,e,t=e){var i=new WeakSet;ec(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=so(n)?ao(s):s,t(s),Ve!==null&&i.add(Ve),await _p(),s!==(s=e())){var a=n.selectionStart,o=n.selectionEnd,l=n.value.length;if(n.value=s??"",o!==null){var c=n.value.length;a===o&&o===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=a,n.selectionEnd=Math.min(o,c))}}}),ir(e)==null&&n.value&&(t(so(n)?ao(n.value):n.value),Ve!==null&&i.add(Ve)),qa(()=>{var r=e();if(n===document.activeElement){var s=Ve;if(i.has(s))return}so(n)&&r===ao(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Yp(n,e,t=e){ec(n,"change",i=>{var r=i?n.defaultChecked:n.checked;t(r)}),ir(e)==null&&t(n.checked),qa(()=>{var i=e();n.checked=!!i})}function so(n){var e=n.type;return e==="number"||e==="range"}function ao(n){return n===""?null:+n}function kc(n,e){return n===e||n?.[Xi]===e}function rd(n={},e,t,i){var r=$t.r,s=je;return Xa(()=>{var a,o;return qa(()=>{a=o,o=[],ir(()=>{n!==t(...o)&&(e(n,...o),a&&kc(t(...a),n)&&e(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&qo;)l=l.parent;const c=()=>{o&&kc(t(...o),n)&&e(null,...o)},u=l.teardown;l.teardown=()=>{c(),u?.()}}}),n}const jp={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function Zp(n,e,t){return new Proxy({props:n,exclude:e},jp)}function ds(n,e,t,i){var r=(t&Lh)!==0,s=(t&Uh)!==0,a=i,o=!0,l=()=>(o&&(o=!1,a=s?ir(i):i),a);let c;if(r){var u=Xi in n||dh in n;c=wr(n,e)?.set??(u&&e in n?E=>n[e]=E:void 0)}var f,d=!1;r?[f,d]=Hh(()=>n[e]):f=n[e],f===void 0&&i!==void 0&&(f=l(),c&&(bh(),c(f)));var m;if(m=()=>{var E=n[e];return E===void 0?l():(o=!0,E)},(t&Dh)===0)return m;if(c){var x=n.$$legacy;return(function(E,y){return arguments.length>0?((!y||x||d)&&c(y?m():E),E):m()})}var _=!1,p=((t&Ph)!==0?Ga:Mf)(()=>(_=!1,m()));r&&ee(p);var h=je;return(function(E,y){if(arguments.length>0){const T=y?ee(p):r?kt(E):E;return Qe(p,T),_=!0,a!==void 0&&(a=T),E}return ai&&_||(h.f&sn)!==0?p.v:ee(p)})}function sd(n){$t===null&&ph(),an(()=>{const e=ir(n);if(typeof e=="function")return e})}const Kp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Kp);function tt(n,e=0){return{re:n,im:e}}function wt(n,e){return tt(n.re*e.re-n.im*e.im,n.re*e.im+n.im*e.re)}function mn(n,e){return tt(n.re+e.re,n.im+e.im)}function Hi(n,e){return tt(n.re-e.re,n.im-e.im)}function Vc(n){return tt(-n.re,-n.im)}function ad(n,e){return n.re*e.re+n.im*e.im}function Ji(n){return ad(n,n)}function ic(n){return Math.hypot(n.re,n.im)}function Ar(n,e){const t=Ji(e);return tt((n.re*e.re+n.im*e.im)/t,(e.re*n.im-e.im*n.re)/t)}function Rr(n,e){return tt(n.re*e,n.im*e)}function $p(n,e){return tt(n.re/e,n.im/e)}function Jp(n){if(n.im===0&&n.re<=0)return tt(0,Math.sqrt(-n.re));const e=ic(n),t=Math.sqrt(.5/(e+n.re));return tt((n.re+e)*t,n.im*t)}function Qp(n){return wt(n,n)}function Gc(n,e=0){return Math.abs(n.re-1)<=e&&Math.abs(n.im)<=e}function Pa(n,e=0){return Math.abs(n.re)<=e&&Math.abs(n.im)<=e}function od(n,e){return n.re===e.re&&n.im===e.im}function ld(n,e){return n===void 0||e===void 0?n===e:od(n,e)}function Fs(n,e){const t=ic(n),i=Math.atan2(n.im,n.re)*e,r=t**e;return tt(r*Math.cos(i),r*Math.sin(i))}function em(n,e){return[mn(wt(n[0],e[0]),wt(n[1],e[2])),mn(wt(n[0],e[1]),wt(n[1],e[3])),mn(wt(n[2],e[0]),wt(n[3],e[2])),mn(wt(n[2],e[1]),wt(n[3],e[3]))]}function rc(n){return Hi(wt(n[0],n[3]),wt(n[1],n[2]))}function tm(n){return mn(n[0],n[3])}function nm(n){return Ji(rc(n))<1e-20}function im(n){const e=rc(n);return[Ar(n[3],e),Ar(Vc(n[1]),e),Ar(Vc(n[2]),e),Ar(n[0],e)]}function Qo(){return[tt(1,0),tt(0,0),tt(0,0),tt(1,0)]}function rm(n,e){const t=$p(tm(n),2),i=Hi(Qp(t),rc(n)),r=Jp(i);let s,a;if(Ji(r)<=1e-14*Ji(t))s=Rr(Fs(t,e-1),e),a=Rr(Fs(t,e),1-e);else{const o=Fs(mn(t,r),e),l=Fs(Hi(t,r),e);s=Ar(Hi(o,l),Rr(r,2)),a=Hi(o,wt(s,mn(t,r)))}return[mn(wt(s,n[0]),a),wt(s,n[1]),wt(s,n[2]),mn(wt(s,n[3]),a)]}function sm(n,e=0){return Gc(n[0],e)&&Pa(n[1],e)&&Pa(n[2],e)&&Gc(n[3],e)}function am(n,e){if(Pa(n[3-e]))return;const t=e===0||e===3,i=t?wt(n[1],n[2]):wt(n[0],n[3]);return Ar(tt(i.re+(t?1:-1),i.im),n[3-e])}function rr(n,e,t){return{x:n,y:e,z:t}}function oo(n,e){return rr(n.x+e.x,n.y+e.y,n.z+e.z)}function Os(n,e){return rr(n.x-e.x,n.y-e.y,n.z-e.z)}function el(n,e){return rr(n.x*e,n.y*e,n.z*e)}function Sa(n){return n.x*n.x+n.y*n.y+n.z*n.z}function cd(n){return Math.sqrt(Sa(n))}function Hc(n){return el(n,1/cd(n))}function ud(n,e){return(n.x-e.x)**2+(n.y-e.y)**2+(n.z-e.z)**2}function om(n,e){return Math.sqrt(ud(n,e))}function lm(n,e){return n.x*e.x+n.y*e.y+n.z*e.z}function cm(n,e){return rr(n.y*e.z-n.z*e.y,n.z*e.x-n.x*e.z,n.x*e.y-n.y*e.x)}function vs(n,e,t,i){return{r:n,i:e,j:t,k:i}}function tl(n){return n.r*n.r+n.i*n.i+n.j*n.j+n.k*n.k}function um(n,e){const t=tl(e);return vs((n.r*e.r+n.i*e.i+n.j*e.j+n.k*e.k)/t,(-n.r*e.i+n.i*e.r-n.j*e.k+n.k*e.j)/t,(-n.r*e.j+n.i*e.k+n.j*e.r-n.k*e.i)/t,(-n.r*e.k-n.i*e.j+n.j*e.i+n.k*e.r)/t)}function fm(n,e,t){const i=lm(n,e);if(i===1)return vs(1,0,0,0);const r=cm(n,e),s=Math.acos(i)*t/2,a=Math.sin(s)/cd(r);return vs(Math.cos(s),r.x*a,r.y*a,r.z*a)}function dm(n,e){const t=e.i*e.i,i=e.j*e.j,r=e.k*e.k,s=e.r*e.i,a=e.r*e.j,o=e.r*e.k,l=e.i*e.k,c=e.i*e.j,u=e.j*e.k;return rr(n.x*(1-2*(i+r))+n.y*2*(c-o)+n.z*2*(l+a),n.x*2*(c+o)+n.y*(1-2*(t+r))+n.z*2*(u-s),n.x*2*(l-a)+n.y*2*(u+s)+n.z*(1-2*(t+i)))}function sc(n){let e,t=!1;return an(()=>{const i=n.read();t&&n.equal(i,e)||(e=i,t=!0,n.sync(i))}),{emit(i){e=i,n.write(i)}}}const hm={reject:{kind:"reject"},accept:{kind:"accept"},emit:n=>({kind:"emit",value:n})};function fd(n){let e=ft(""),t="";return{get text(){return ee(e)},set text(i){Qe(e,i,!0)},set(i){Qe(e,i,!0),t=i},validate(){const i=n.parse(ee(e),hm);if(i.kind==="reject"){Qe(e,t,!0);return}t=ee(e),i.kind==="emit"&&n.onEmit(i.value)}}}const pm=/^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/,mm=/^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|(?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag2>i))\s*$/;var xm=ci("<input/>");function _m(n,e){tr(e,!0);let t=ds(e,"value",31,()=>kt(tt(0))),i=Zp(e,["$$slots","$$events","$$legacy","value"]);function r(f,d){const m=f==="-"?-1:1;return d?m*parseFloat(d):m}function s(f){if(f==="")return tt(0);const d=mm.exec(f);if(!d||!d.groups)return tt(0);const m=d.groups;if(m.re){const x=r(m.re_sign,m.re);return m.has_imag?tt(x,r(m.im_sign,m.im)):tt(x)}return m.has_imag2?tt(0,r(m.im_sign2,m.im2)):tt(0)}function a(f){const d=Math.min(2,f.toString().split(".")[1]?.length||0);return f.toFixed(d)}function o(f){return Pa(f)?"0":f.re===0?`${a(f.im)}i`:f.im===0?a(f.re):`${a(f.re)}${f.im>=0?"+":"-"}${a(Math.abs(f.im))}i`}const l=fd({parse:(f,{reject:d,emit:m})=>f!==""&&!pm.test(f)?d:m(s(f)),onEmit:f=>c.emit(f)}),c=sc({read:()=>t(),write:f=>{t(f)},equal:ld,sync:f=>l.set(f===void 0?"":o(f))});var u=xm();qp(u,()=>({type:"text",oninput:l.validate,...i}),void 0,void 0,void 0,void 0,!0),id(u,()=>l.text,f=>l.text=f),ei(n,u),nr()}var gm=ci('<div class="matrix-input-container svelte-1hm4t7x"><div class="matrix-bracket svelte-1hm4t7x"></div> <div class="matrix-input svelte-1hm4t7x"></div> <div class="matrix-bracket svelte-1hm4t7x"></div></div>');function vm(n,e){tr(e,!0);let t=ds(e,"value",15);var i=gm(),r=Xt(Dt(i),2);va(r,20,()=>[0,1,2,3],ga,(s,a)=>{_m(s,{onfocus:()=>e.onfocus?.(a),onkeydown:o=>e.onkeydown?.({index:a,key:o.key}),get value(){return t()[a]},set value(o){t(t()[a]=o,!0)}})}),ei(n,i),nr()}const Sm={name:"Dark",ui:{background:"#000",textColor:"#eee",border:"rgba(255, 255, 255, 0.6)",focusBorder:"#fff",thickBorder:"#fff",lightBorder:"rgba(255, 255, 255, 0.3)",githubImage:"github-mark-white.svg"},canvas:{foreground:"#aaaaaa",isometryColors:[["#ff0000","#ff6666"],["#3366ff","#5588ff"]],axisColors:["#990000","#007700","#3333cc"]}},bm={name:"Light",ui:{background:"white",textColor:"#0d0d0d",border:"rgba(0, 0, 0, 0.6)",focusBorder:"rgb(0, 135, 255)",thickBorder:"rgba(0, 0, 0, 0.8)",lightBorder:"rgba(0, 0, 0, 0.2)",githubImage:"github-mark.svg"},canvas:{foreground:"#000000",isometryColors:[["#ff0000","#cc0000"],["#0000ff","#0000cc"]],axisColors:["#ff9999","#66ff66","#9999ff"]}},Ss=[bm,Sm];let dd=ft(kt(Ss[0]));function bs(){return ee(dd)}const Mm={"--ui-background":n=>n.ui.background,"--ui-textColor":n=>n.ui.textColor,"--ui-border":n=>n.ui.border,"--ui-focusBorder":n=>n.ui.focusBorder,"--ui-thickBorder":n=>n.ui.thickBorder,"--isometry-1":n=>n.canvas.isometryColors[0][0],"--isometry-2":n=>n.canvas.isometryColors[1][0]};function ym(n){const e=Ss.find(i=>i.name===n)??Ss[0];Qe(dd,e,!0);const t=document.documentElement.style;for(const[i,r]of Object.entries(Mm))t.setProperty(i,r(e))}const Em=typeof window<"u"?window:void 0;function Tm(n){let e=n.activeElement;for(;e?.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}class Am{#t;#f;constructor(e={}){const{window:t=Em,document:i=t?.document}=e;t!==void 0&&(this.#t=i,this.#f=vf(r=>{const s=Ca(t,"focusin",r),a=Ca(t,"focusout",r);return()=>{s(),a()}}))}get current(){return this.#f?.(),this.#t?Tm(this.#t):null}}new Am;function wm(n){return typeof n=="function"}function Wc(n,e){if(wm(n)){const i=n();return i===void 0?e:i}return n===void 0?e:n}function hs(n,e,t,i){an(()=>{const r=Wc(n);if(r==null)return;const s=Wc(e);if(Array.isArray(s))for(const a of s)an(()=>Ca(r,a,t,i));else return Ca(r,s,t,i)})}function Cm(n){an(()=>()=>{n()})}function Rm(n){let e,t;const i=a=>{t=requestAnimationFrame(i);const o=e;e=a,o!==void 0&&n(a-o)},r=()=>{t!==void 0&&(cancelAnimationFrame(t),t=void 0)},s=()=>{t===void 0&&(e=void 0,i(performance.now()))};return Cm(r),{start:s,stop:r}}function Pm(n){let e=ft(kt({dragging:!1}));hs(window,"mousemove",i=>{ee(e).dragging&&(ee(e).mouse={x:i.clientX,y:i.clientY})}),hs(window,"mouseup",()=>{ee(e).dragging&&Qe(e,{dragging:!1},!0)});function t(i){Qe(e,{dragging:!0,mouse:{x:i.clientX,y:i.clientY},data:n.onStart(i)},!0)}return{get state(){return ee(e)},start:t}}function Dm(){let n=ft(!1);return hs(window,"keydown",e=>{e.key==="Shift"&&Qe(n,!0)}),hs(window,"keyup",e=>{e.key==="Shift"&&Qe(n,!1)}),hs(window,["blur","visibilitychange"],()=>{Qe(n,!1)}),{get down(){return ee(n)}}}function Lm(n,e){let t=ft(n);return an(()=>{const i=ir(()=>ee(t));Qe(t,e(i))}),{get value(){return ee(t)}}}var Um=ci('<div class="plane-input svelte-1cep8g"><canvas class="plane-input-canvas svelte-1cep8g"></canvas></div>');function Im(n,e){tr(e,!0);let t=ft(0),i=ft(0),r=ft(kt(tt(0))),s=ft(kt(tt(0))),a;function o(){const b=window.devicePixelRatio||1;Qe(t,a.clientWidth*b),Qe(i,a.clientHeight*b),a.width=ee(t),a.height=ee(i)}const l=sc({read:()=>e.value,write:b=>{b!==void 0&&e.onchange?.(b)},equal:ld,sync:b=>{const w=b??tt(0);Qe(r,w,!0),Qe(s,w,!0)}}),c=3,u=90,f=.3;function d(b,w,L){return{x:(b.re+c)/(2*c)*w,y:L-(b.im+c)/(2*c)*L}}function m(b,w,L,M){return tt(b/L*2*c-c,(M-w)/M*2*c-c)}const x=Rm(b=>{const w=1-Math.exp(-b/u),L=Hi(ee(s),ee(r));Ji(L)<1e-5?(Qe(r,ee(s),!0),x.stop()):Qe(r,mn(ee(r),Rr(L,w)),!0),l.emit(ee(r))});an(()=>{od(ee(r),ee(s))||x.start()}),an(()=>{_(a,ee(t),ee(i),ee(r),bs())});function _(b,w,L,M,S){const P=b.getContext("2d");if(!P)return;P.clearRect(0,0,w,L);const O=d(tt(0,0),w,L);P.beginPath(),P.strokeStyle=S.ui.lightBorder,P.lineWidth=1*window.devicePixelRatio,P.moveTo(0,O.y),P.lineTo(w,O.y),P.moveTo(O.x,0),P.lineTo(O.x,L),P.stroke();const z=d(M,w,L);P.beginPath(),P.fillStyle=S.ui.textColor,P.arc(z.x,z.y,3*window.devicePixelRatio,0,2*Math.PI),P.fill()}const p=Dm(),h=Pm({onStart:()=>({startValue:ee(r)})}),E=$n(()=>{if(!h.state.dragging)return;const{mouse:b}=h.state,w=a.getBoundingClientRect(),L=(b.x-w.left)*window.devicePixelRatio,M=(b.y-w.top)*window.devicePixelRatio;return m(L,M,a.width,a.height)}),y=Lm(void 0,b=>{if(!h.state.dragging||!p.down||!ee(E))return;const w=h.state.data.startValue,L=Math.abs(ee(E).re-w.re),M=Math.abs(ee(E).im-w.im);return b==="x"&&M<=f||b==="y"&&L<=f?b:L>M?"x":"y"});an(()=>{if(!h.state.dragging||!ee(E))return;const b=h.state.data.startValue;Qe(s,y.value==="x"?tt(ee(E).re,b.im):y.value==="y"?tt(b.re,ee(E).im):ee(E),!0)}),sd(()=>{o();const b=new ResizeObserver(o);return b.observe(a,{box:"device-pixel-content-box"}),()=>b.disconnect()});var T=Um(),C=Dt(T);rd(C,b=>a=b,()=>a),ji("mousedown",C,function(...b){h.start?.apply(this,b)}),ei(n,T),nr()}Ya(["mousedown"]);var Nm=ci('<div class="number-input svelte-1pzowlr"><input type="text" class="svelte-1pzowlr"/> <div class="number-input-buttons svelte-1pzowlr"><button type="button" aria-label="Increment" class="number-input-up svelte-1pzowlr"><i class="svelte-1pzowlr"></i></button> <button type="button" aria-label="Decrement" class="number-input-down svelte-1pzowlr"><i class="svelte-1pzowlr"></i></button></div></div>');function Fm(n,e){tr(e,!0);let t=ds(e,"min",3,1),i=ds(e,"max",3,100),r=ds(e,"value",15);const s=fd({parse:(m,{accept:x,reject:_,emit:p})=>{if(m==="")return x;if(!/^(0|[1-9]\d*)$/.test(m))return _;const h=Number(m);return h>i()?_:h>=t()?p(h):x},onEmit:m=>a.emit(m)}),a=sc({read:()=>r(),write:m=>{r(m)},equal:(m,x)=>m===x,sync:m=>s.set(m.toString())});function o(m){const x=r()+m;x>=t()&&x<=i()&&r(x)}var l=Nm(),c=Dt(l),u=Xt(c,2),f=Dt(u),d=Xt(f,2);ji("input",c,function(...m){s.validate?.apply(this,m)}),id(c,()=>s.text,m=>s.text=m),ji("click",f,()=>o(1)),ji("click",d,()=>o(-1)),ei(n,l),nr()}Ya(["input","click"]);const ac="181",Pr={ROTATE:0,DOLLY:1,PAN:2},Om=0,Xc=1,Bm=2,hd=1,zm=2,Zn=3,Ai=0,Zt=1,Qn=2,zn=0,Dr=1,qc=2,Yc=3,jc=4,km=5,zi=100,Vm=101,Gm=102,Hm=103,Wm=104,Xm=200,qm=201,Ym=202,jm=203,nl=204,il=205,Zm=206,Km=207,$m=208,Jm=209,Qm=210,e0=211,t0=212,n0=213,i0=214,rl=0,sl=1,al=2,zr=3,ol=4,ll=5,cl=6,ul=7,pd=0,r0=1,s0=2,yi=0,a0=1,o0=2,l0=3,c0=4,u0=5,f0=6,d0=7,md=300,kr=301,Vr=302,fl=303,dl=304,ja=306,hl=1e3,ti=1001,pl=1002,on=1003,h0=1004,Bs=1005,xn=1006,lo=1007,Wi=1008,oi=1009,xd=1010,_d=1011,Ms=1012,oc=1013,Qi=1014,ni=1015,sr=1016,lc=1017,cc=1018,ys=1020,gd=35902,vd=35899,Sd=1021,bd=1022,Rn=1023,Es=1026,Ts=1027,Md=1028,uc=1029,fc=1030,dc=1031,hc=1033,ba=33776,Ma=33777,ya=33778,Ea=33779,ml=35840,xl=35841,_l=35842,gl=35843,vl=36196,Sl=37492,bl=37496,Ml=37808,yl=37809,El=37810,Tl=37811,Al=37812,wl=37813,Cl=37814,Rl=37815,Pl=37816,Dl=37817,Ll=37818,Ul=37819,Il=37820,Nl=37821,Fl=36492,Ol=36494,Bl=36495,zl=36283,kl=36284,Vl=36285,Gl=36286,p0=3200,m0=3201,x0=0,_0=1,gi="",hn="srgb",Gr="srgb-linear",Da="linear",st="srgb",lr=7680,Zc=519,g0=512,v0=513,S0=514,yd=515,b0=516,M0=517,y0=518,E0=519,Hl=35044,Kc="300 es",On=2e3,La=2001;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=Ua("canvas");return n.style.display="block",n}const $c={};function Ia(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ue(...n){const e="THREE."+n.shift();console.warn(e,...n)}function gt(...n){const e="THREE."+n.shift();console.error(e,...n)}function As(...n){const e=n.join(" ");e in $c||($c[e]=!0,Ue(...n))}function A0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const ps=Math.PI/180,ws=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Fe(n,e,t){return Math.max(e,Math.min(t,n))}function pc(n,e){return(n%e+e)%e}function w0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function C0(n,e,t){return n!==e?(t-n)/(e-n):0}function ms(n,e,t){return(1-t)*n+t*e}function R0(n,e,t,i){return ms(n,e,1-Math.exp(-t*i))}function P0(n,e=1){return e-Math.abs(pc(n,e*2)-e)}function D0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function L0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function U0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function I0(n,e){return n+Math.random()*(e-n)}function N0(n){return n*(.5-Math.random())}function F0(n){n!==void 0&&(Jc=n);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O0(n){return n*ps}function B0(n){return n*ws}function z0(n){return(n&n-1)===0&&n!==0}function k0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function V0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function G0(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wl={DEG2RAD:ps,RAD2DEG:ws,generateUUID:ri,clamp:Fe,euclideanModulo:pc,mapLinear:w0,inverseLerp:C0,lerp:ms,damp:R0,pingpong:P0,smoothstep:D0,smootherstep:L0,randInt:U0,randFloat:I0,randFloatSpread:N0,seededRandom:F0,degToRad:O0,radToDeg:B0,isPowerOfTwo:z0,ceilPowerOfTwo:k0,floorPowerOfTwo:V0,setQuaternionFromProperEuler:G0,normalize:nt,denormalize:Tn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==x){let p=l*d+c*m+u*x+f*_;p<0&&(d=-d,m=-m,x=-x,_=-_,p=-p);let h=1-o;if(p<.9995){const E=Math.acos(p),y=Math.sin(E);h=Math.sin(h*E)/y,o=Math.sin(o*E)/y,l=l*h+d*o,c=c*h+m*o,u=u*h+x*o,f=f*h+_*o}else{l=l*h+d*o,c=c*h+m*o,u=u*h+x*o,f=f*h+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new N,Qc=new Xr;class Be{constructor(e,t,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],_=r[0],p=r[3],h=r[6],E=r[1],y=r[4],T=r[7],C=r[2],b=r[5],w=r[8];return s[0]=a*_+o*E+l*C,s[3]=a*p+o*y+l*b,s[6]=a*h+o*T+l*w,s[1]=c*_+u*E+f*C,s[4]=c*p+u*y+f*b,s[7]=c*h+u*T+f*w,s[2]=d*_+m*E+x*C,s[5]=d*p+m*y+x*b,s[8]=d*h+m*T+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Be,eu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H0(){const n={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Da:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gr]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const Je=H0();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cr;class W0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cr===void 0&&(cr=Ua("canvas")),cr.width=e.width,cr.height=e.height;const r=cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X0=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fo(r[a].image)):s.push(fo(r[a]))}else s=fo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let q0=0;const ho=new N;class Gt extends ar{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=ti,r=ti,s=xn,a=Wi,o=Rn,l=oi,c=Gt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ri(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=md;Gt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(m+1)/2,C=(h+1)/2,b=(u+d)/4,w=(f+_)/4,L=(x+p)/4;return y>T&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=w/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-x)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Gt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Y0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Td extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j0 extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),ks.subVectors(this.max,Jr),ur.subVectors(e.a,Jr),fr.subVectors(e.b,Jr),dr.subVectors(e.c,Jr),fi.subVectors(fr,ur),di.subVectors(dr,fr),Li.subVectors(ur,dr);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Li.z,Li.y,fi.z,0,-fi.x,di.z,0,-di.x,Li.z,0,-Li.x,-fi.y,fi.x,0,-di.y,di.x,0,-Li.y,Li.x,0];return!po(t,ur,fr,dr,ks)||(t=[1,0,0,0,1,0,0,0,1],!po(t,ur,fr,dr,ks))?!1:(Vs.crossVectors(fi,di),t=[Vs.x,Vs.y,Vs.z],po(t,ur,fr,dr,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,zs=new Ci,ur=new N,fr=new N,dr=new N,fi=new N,di=new N,Li=new N,Jr=new N,ks=new N,Vs=new N,Ui=new N;function po(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Z0=new Ci,Qr=new N,mo=new N;class qr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Z0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(mo)),this.expandByPoint(Qr.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wn=new N,xo=new N,Gs=new N,hi=new N,_o=new N,Hs=new N,go=new N;class Ad{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xo.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(xo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=hi.dot(this.direction),l=-hi.dot(Gs),c=hi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xo).addScaledVector(Gs,d),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){_o.subVectors(t,e),Hs.subVectors(i,e),go.crossVectors(_o,Hs);let a=this.direction.dot(go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(hi,Hs));if(l<0)return null;const c=o*this.direction.dot(_o.cross(hi));if(c<0||l+c>a)return null;const u=-o*hi.dot(go);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,_=c*f;t[0]=d+_*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,$0)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),pi.crossVectors(i,tn),pi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),pi.crossVectors(i,tn)),pi.normalize(),Ws.crossVectors(tn,pi),r[0]=pi.x,r[4]=Ws.x,r[8]=tn.x,r[1]=pi.y,r[5]=Ws.y,r[9]=tn.y,r[2]=pi.z,r[6]=Ws.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],_=i[6],p=i[10],h=i[14],E=i[3],y=i[7],T=i[11],C=i[15],b=r[0],w=r[4],L=r[8],M=r[12],S=r[1],P=r[5],O=r[9],z=r[13],Y=r[2],W=r[6],q=r[10],$=r[14],G=r[3],te=r[7],ne=r[11],ve=r[15];return s[0]=a*b+o*S+l*Y+c*G,s[4]=a*w+o*P+l*W+c*te,s[8]=a*L+o*O+l*q+c*ne,s[12]=a*M+o*z+l*$+c*ve,s[1]=u*b+f*S+d*Y+m*G,s[5]=u*w+f*P+d*W+m*te,s[9]=u*L+f*O+d*q+m*ne,s[13]=u*M+f*z+d*$+m*ve,s[2]=x*b+_*S+p*Y+h*G,s[6]=x*w+_*P+p*W+h*te,s[10]=x*L+_*O+p*q+h*ne,s[14]=x*M+_*z+p*$+h*ve,s[3]=E*b+y*S+T*Y+C*G,s[7]=E*w+y*P+T*W+C*te,s[11]=E*L+y*O+T*q+C*ne,s[15]=E*M+y*z+T*$+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],_=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],_=e[13],p=e[14],h=e[15],E=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,y=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,T=u*_*c-x*f*c+x*o*m-a*_*m-u*o*h+a*f*h,C=x*f*l-u*_*l-x*o*d+a*_*d+u*o*p-a*f*p,b=t*E+i*y+r*T+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=E*w,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*w,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*h+i*l*h)*w,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*w,e[4]=y*w,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*w,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*w,e[8]=T*w,e[9]=(x*f*s-u*_*s-x*i*m+t*_*m+u*i*h-t*f*h)*w,e[10]=(a*_*s-x*o*s+x*i*c-t*_*c-a*i*h+t*o*h)*w,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*w,e[12]=C*w,e[13]=(u*_*r-x*f*r+x*i*d-t*_*d-u*i*p+t*f*p)*w,e[14]=(x*o*r-a*_*r-x*i*l+t*_*l+a*i*p-t*o*p)*w,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,_=a*u,p=a*f,h=o*f,E=l*c,y=l*u,T=l*f,C=i.x,b=i.y,w=i.z;return r[0]=(1-(_+h))*C,r[1]=(m+T)*C,r[2]=(x-y)*C,r[3]=0,r[4]=(m-T)*b,r[5]=(1-(d+h))*b,r[6]=(p+E)*b,r[7]=0,r[8]=(x+y)*w,r[9]=(p-E)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const a=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const c=1/s,u=1/a,f=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=On,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let x,_;if(l)x=s/(a-s),_=a*s/(a-s);else if(o===On)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===La)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=On,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,_;if(l)x=1/(a-s),_=a/(a-s);else if(o===On)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===La)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new N,yn=new vt,K0=new N(0,0,0),$0=new N(1,1,1),pi=new N,Ws=new N,tn=new N,nu=new vt,iu=new Xr;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J0=0;const ru=new N,pr=new Xr,Xn=new vt,Xs=new N,es=new N,Q0=new N,ex=new Xr,su=new N(1,0,0),au=new N(0,1,0),ou=new N(0,0,1),lu={type:"added"},tx={type:"removed"},mr={type:"childadded",child:null},vo={type:"childremoved",child:null};class Kt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new N,t=new li,i=new Xr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(es,Xs,this.up):Xn.lookAt(Xs,es,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Xn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),mr.child=e,this.dispatchEvent(mr),mr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new N(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new N,qn=new N,So=new N,Yn=new N,xr=new N,_r=new N,cu=new N,bo=new N,Mo=new N,yo=new N,Eo=new ot,To=new ot,Ao=new ot;class An{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),qn.subVectors(i,t),So.subVectors(e,t);const a=En.dot(En),o=En.dot(qn),l=En.dot(So),c=qn.dot(qn),u=qn.dot(So),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Eo.setScalar(0),To.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Eo,s.x),a.addScaledVector(To,s.y),a.addScaledVector(Ao,s.z),a}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),qn.subVectors(e,t),En.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,i),_r.subVectors(s,i),bo.subVectors(e,i);const l=xr.dot(bo),c=_r.dot(bo);if(l<=0&&c<=0)return t.copy(i);Mo.subVectors(e,r);const u=xr.dot(Mo),f=_r.dot(Mo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(xr,a);yo.subVectors(e,s);const m=xr.dot(yo),x=_r.dot(yo);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(_r,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return cu.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(cu,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(xr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=pc(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wo(a,s,e+1/3),this.g=wo(a,s,e),this.b=wo(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=Cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Je.workingToColorSpace(Nt.copy(this),e),Math.round(Fe(Nt.r*255,0,255))*65536+Math.round(Fe(Nt.g*255,0,255))*256+Math.round(Fe(Nt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=hn){Je.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(qs);const i=ms(mi.h,qs.h,t),r=ms(mi.s,qs.s,t),s=ms(mi.l,qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ze;Ze.NAMES=Cd;let nx=0;class Rs extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Dr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xc extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new N,Ys=new Oe;let ix=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hl,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}}class Rd extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pd extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rx=0;const un=new vt,Co=new Kt,gr=new N,nn=new Ci,ts=new Ci,At=new N;class Jt extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Pd:Rd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(nn.min,ts.min),nn.expandByPoint(At),At.addVectors(nn.max,ts.max),nn.expandByPoint(At)):(nn.expandByPoint(ts.min),nn.expandByPoint(ts.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),At.add(gr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new N,l[L]=new N;const c=new N,u=new N,f=new N,d=new Oe,m=new Oe,x=new Oe,_=new N,p=new N;function h(L,M,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),u.sub(c),f.sub(c),m.sub(d),x.sub(d);const P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(P),o[L].add(_),o[M].add(_),o[S].add(_),l[L].add(p),l[M].add(p),l[S].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,M=E.length;L<M;++L){const S=E[L],P=S.start,O=S.count;for(let z=P,Y=P+O;z<Y;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new N,T=new N,C=new N,b=new N;function w(L){C.fromBufferAttribute(r,L),b.copy(C);const M=o[L];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),T.crossVectors(b,M);const P=T.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,M=E.length;L<M;++L){const S=E[L],P=S.start,O=S.count;for(let z=P,Y=P+O;z<Y;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new Pn(d,u,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new vt,Ii=new Ad,js=new qr,fu=new N,Zs=new N,Ks=new N,$s=new N,Ro=new N,Js=new N,du=new N,Qs=new N;class Sn extends Kt{constructor(e=new Jt,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ro.fromBufferAttribute(f,e),a?Js.addScaledVector(Ro,u):Js.addScaledVector(Ro.sub(t),u))}t.add(Js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(js.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(js,fu)===null||Ii.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(uu.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(uu),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,C=y;T<C;T+=3){const b=o.getX(T),w=o.getX(T+1),L=o.getX(T+2);r=ea(this,h,e,i,c,u,f,b,w,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const E=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);r=ea(this,a,e,i,c,u,f,E,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,C=y;T<C;T+=3){const b=T,w=T+1,L=T+2;r=ea(this,h,e,i,c,u,f,b,w,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const E=p,y=p+1,T=p+2;r=ea(this,a,e,i,c,u,f,E,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function sx(n,e,t,i,r,s,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ai,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function ea(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Zs),n.getVertexPosition(l,Ks),n.getVertexPosition(c,$s);const u=sx(n,e,t,i,Zs,Ks,$s,du);if(u){const f=new N;An.getBarycoord(du,Zs,Ks,$s,f),r&&(u.uv=An.getInterpolatedAttribute(r,o,l,c,f,new Oe)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,l,c,f,new Oe)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};An.getNormal(Zs,Ks,$s,d.normal),u.face=d,u.barycoord=f}return u}class Ps extends Jt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function x(_,p,h,E,y,T,C,b,w,L,M){const S=T/w,P=C/L,O=T/2,z=C/2,Y=b/2,W=w+1,q=L+1;let $=0,G=0;const te=new N;for(let ne=0;ne<q;ne++){const ve=ne*P-z;for(let Ge=0;Ge<W;Ge++){const xe=Ge*S-O;te[_]=xe*E,te[p]=ve*y,te[h]=Y,c.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[h]=b>0?1:-1,u.push(te.x,te.y,te.z),f.push(Ge/w),f.push(1-ne/L),$+=1}}for(let ne=0;ne<L;ne++)for(let ve=0;ve<w;ve++){const Ge=d+ve+W*ne,xe=d+ve+W*(ne+1),De=d+(ve+1)+W*(ne+1),ze=d+(ve+1)+W*ne;l.push(Ge,xe,ze),l.push(xe,De,ze),G+=6}o.addGroup(m,G,M),m+=G,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const r in i)e[r]=i[r]}return e}function ax(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Za={clone:Hr,merge:zt};var ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ox,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ld extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,hu=new Oe,pu=new Oe;class pn extends Ld{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,hu,pu),t.subVectors(pu,hu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,Sr=1;class cx extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(vr,Sr,e,t);r.layers=this.layers,this.add(r);const s=new pn(vr,Sr,e,t);s.layers=this.layers,this.add(s);const a=new pn(vr,Sr,e,t);a.layers=this.layers,this.add(a);const o=new pn(vr,Sr,e,t);o.layers=this.layers,this.add(o);const l=new pn(vr,Sr,e,t);l.layers=this.layers,this.add(l);const c=new pn(vr,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ud extends Gt{constructor(e=[],t=kr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ux extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ud(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:zn});s.uniforms.tEquirect.value=t;const a=new Sn(r,s),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=xn),new cx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ta extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class na extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new N;class Si{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Si(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hx extends Gt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=on,u=on,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Do=new N,px=new N,mx=new Be;class Bi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Do.subVectors(i,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Do),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mx.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new qr,xx=new Oe(.5,.5),ia=new N;class Id{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],m=s[7],x=s[8],_=s[9],p=s[10],h=s[11],E=s[12],y=s[13],T=s[14],C=s[15];if(r[0].setComponents(c-a,m-u,h-x,C-E).normalize(),r[1].setComponents(c+a,m+u,h+x,C+E).normalize(),r[2].setComponents(c+o,m+f,h+_,C+y).normalize(),r[3].setComponents(c-o,m-f,h-_,C-y).normalize(),i)r[4].setComponents(l,d,p,T).normalize(),r[5].setComponents(c-l,m-d,h-p,C-T).normalize();else if(r[4].setComponents(c-l,m-d,h-p,C-T).normalize(),t===On)r[5].setComponents(c+l,m+d,h+p,C+T).normalize();else if(t===La)r[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=xx.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ia.x=r.normal.x>0?e.max.x:e.min.x,ia.y=r.normal.y>0?e.max.y:e.min.y,ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nd extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Na=new N,Fa=new N,mu=new vt,ns=new Ad,ra=new qr,Lo=new N,xu=new N;class _x extends Kt{constructor(e=new Jt,t=new Nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Na.fromBufferAttribute(t,r-1),Fa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Na.distanceTo(Fa);e.setAttribute("lineDistance",new yt(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;mu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(mu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let _=m,p=x-1;_<p;_+=c){const h=u.getX(_),E=u.getX(_+1),y=sa(this,e,ns,l,h,E,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(x-1),p=u.getX(m),h=sa(this,e,ns,l,_,p,x-1);h&&t.push(h)}}else{const m=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let _=m,p=x-1;_<p;_+=c){const h=sa(this,e,ns,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){const _=sa(this,e,ns,l,x-1,m,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sa(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,s),t.distanceSqToSegment(Na,Fa,Lo,xu)>i)return;Lo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Lo);if(!(c<e.near||c>e.far))return{distance:c,point:xu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const _u=new N,gu=new N;class gx extends _x{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_u.fromBufferAttribute(t,r),gu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_u.distanceTo(gu);e.setAttribute("lineDistance",new yt(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fd extends Gt{constructor(e,t,i=Qi,r,s,a,o=on,l=on,c,u=Es,f=1){if(u!==Es&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Od extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends Jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],_=[],p=[];for(let h=0;h<u;h++){const E=h*d-a;for(let y=0;y<c;y++){const T=y*f-s;x.push(T,-E,0),_.push(0,0,1),p.push(y/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const y=E+c*h,T=E+c*(h+1),C=E+1+c*(h+1),b=E+1+c*h;m.push(y,T,b),m.push(T,C,b)}this.setIndex(m),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends Jt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new N,d=new N,m=[],x=[],_=[],p=[];for(let h=0;h<=i;h++){const E=[],y=h/i;let T=0;h===0&&a===0?T=.5/t:h===i&&l===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){const b=C/t;f.x=-e*Math.cos(r+b*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+b*s)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(b+T,1-y),E.push(c++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const y=u[h][E+1],T=u[h][E],C=u[h+1][E],b=u[h+1][E+1];(h!==0||a>0)&&m.push(y,T,b),(h!==i-1||l<Math.PI)&&m.push(T,C,b)}this.setIndex(m),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vx extends Jt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new N,s=new N;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,m=f.count;for(let x=d,_=d+m;x<_;x+=3)for(let p=0;p<3;p++){const h=o.getX(x+p),E=o.getX(x+(p+1)%3);r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,E),vu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),vu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new yt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function vu(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Sx extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bx extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bd extends Ld{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends Jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class yx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Xl extends dx{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Su=new N,aa=new N,br=new N,Mr=new N,Uo=new N,Tx=new N,Ax=new N;class wx{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Su.subVectors(e,this.start),aa.subVectors(this.end,this.start);const i=aa.dot(aa);let s=aa.dot(Su)/i;return t&&(s=Fe(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Tx,i=Ax){const r=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,u=e.end;br.subVectors(c,o),Mr.subVectors(u,l),Uo.subVectors(o,l);const f=br.dot(br),d=Mr.dot(Mr),m=Mr.dot(Uo);if(f<=r&&d<=r)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,a=m/d,a=Fe(a,0,1);else{const x=br.dot(Uo);if(d<=r)a=0,s=Fe(-x/f,0,1);else{const _=br.dot(Mr),p=f*d-_*_;p!==0?s=Fe((_*m-x*d)/p,0,1):s=0,a=(_*s+m)/d,a<0?(a=0,s=Fe(-x/f,0,1)):a>1&&(a=1,s=Fe((_-x)/f,0,1))}}return t.copy(o).add(br.multiplyScalar(s)),i.copy(l).add(Mr.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Cx extends gx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Jt;r.setAttribute("position",new yt(t,3)),r.setAttribute("color",new yt(i,3));const s=new Nd({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ze,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rx extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ue("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bu(n,e,t,i){const r=Px(i);switch(t){case Sd:return n*e;case Md:return n*e/r.components*r.byteLength;case uc:return n*e/r.components*r.byteLength;case fc:return n*e*2/r.components*r.byteLength;case dc:return n*e*2/r.components*r.byteLength;case bd:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case hc:return n*e*4/r.components*r.byteLength;case ba:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(e,8)/2;case vl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Px(n){switch(n){case oi:case xd:return{byteLength:1,components:1};case Ms:case _d:case sr:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case Qi:case oc:case ni:return{byteLength:4,components:1};case gd:case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);function zd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){const x=f[d],_=f[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t_=`#define PI 3.141592653589793
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
} // validated`,n_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i_=`vec3 transformedNormal = objectNormal;
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
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,__=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,P_=`uniform sampler2D dfgLUT;
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
}`,D_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V_=`#if defined( USE_POINTS_UV )
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
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,j_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,$g=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,rv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,av=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Lx,alphahash_pars_fragment:Ux,alphamap_fragment:Ix,alphamap_pars_fragment:Nx,alphatest_fragment:Fx,alphatest_pars_fragment:Ox,aomap_fragment:Bx,aomap_pars_fragment:zx,batching_pars_vertex:kx,batching_vertex:Vx,begin_vertex:Gx,beginnormal_vertex:Hx,bsdfs:Wx,iridescence_fragment:Xx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:Kx,color_fragment:$x,color_pars_fragment:Jx,color_pars_vertex:Qx,color_vertex:e_,common:t_,cube_uv_reflection_fragment:n_,defaultnormal_vertex:i_,displacementmap_pars_vertex:r_,displacementmap_vertex:s_,emissivemap_fragment:a_,emissivemap_pars_fragment:o_,colorspace_fragment:l_,colorspace_pars_fragment:c_,envmap_fragment:u_,envmap_common_pars_fragment:f_,envmap_pars_fragment:d_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:E_,envmap_vertex:p_,fog_vertex:m_,fog_pars_vertex:x_,fog_fragment:__,fog_pars_fragment:g_,gradientmap_pars_fragment:v_,lightmap_pars_fragment:S_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:M_,lights_pars_begin:y_,lights_toon_fragment:T_,lights_toon_pars_fragment:A_,lights_phong_fragment:w_,lights_phong_pars_fragment:C_,lights_physical_fragment:R_,lights_physical_pars_fragment:P_,lights_fragment_begin:D_,lights_fragment_maps:L_,lights_fragment_end:U_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:O_,map_fragment:B_,map_pars_fragment:z_,map_particle_fragment:k_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:H_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:q_,morphtarget_pars_vertex:Y_,morphtarget_vertex:j_,normal_fragment_begin:Z_,normal_fragment_maps:K_,normal_pars_fragment:$_,normal_pars_vertex:J_,normal_vertex:Q_,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:rg,opaque_fragment:sg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:xg,skinbase_vertex:_g,skinning_pars_vertex:gg,skinning_vertex:vg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:Mg,tonemapping_fragment:yg,tonemapping_pars_fragment:Eg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:wg,uv_pars_vertex:Cg,uv_vertex:Rg,worldpos_vertex:Pg,background_vert:Dg,background_frag:Lg,backgroundCube_vert:Ug,backgroundCube_frag:Ig,cube_vert:Ng,cube_frag:Fg,depth_vert:Og,depth_frag:Bg,distanceRGBA_vert:zg,distanceRGBA_frag:kg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Hg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:jg,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:$g,meshnormal_frag:Jg,meshphong_vert:Qg,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:rv,points_vert:sv,points_frag:av,shadow_vert:ov,shadow_frag:lv,sprite_vert:cv,sprite_frag:uv},oe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Yt={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yt.physical={uniforms:zt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const oa={r:0,b:0,g:0},Fi=new li,fv=new vt;function dv(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?t:e).get(T)),T}function _(y){let T=!1;const C=x(y);C===null?h(o,l):C&&C.isColor&&(h(C,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,T){const C=x(T);C&&(C.isCubeTexture||C.mapping===ja)?(u===void 0&&(u=new Sn(new Ps(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Hr(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(T.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(Fi)),u.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,(f!==C||d!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Sn(new Ka(2,2),new ln({name:"BackgroundMaterial",uniforms:Hr(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,T){y.getRGB(oa,Dd(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,T,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:_,addToRenderList:p,dispose:E}}function hv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,P,O,z,Y){let W=!1;const q=f(z,O,P);s!==q&&(s=q,c(s.object)),W=m(S,z,O,Y),W&&x(S,z,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,T(S,P,O,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,P,O){const z=O.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let W=Y[P.id];W===void 0&&(W={},Y[P.id]=W);let q=W[z];return q===void 0&&(q=d(l()),W[z]=q),q}function d(S){const P=[],O=[],z=[];for(let Y=0;Y<t;Y++)P[Y]=0,O[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,P,O,z){const Y=s.attributes,W=P.attributes;let q=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){const ne=Y[G];let ve=W[G];if(ve===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==z}function x(S,P,O,z){const Y={},W=P.attributes;let q=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){let ne=W[G];ne===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),Y[G]=ve,q++}s.attributes=Y,s.attributesNum=q,s.index=z}function _(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function p(S){h(S,0)}function h(S,P){const O=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;O[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Y[S]!==P&&(n.vertexAttribDivisor(S,P),Y[S]=P)}function E(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==S[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function y(S,P,O,z,Y,W,q){q===!0?n.vertexAttribIPointer(S,P,O,Y,W):n.vertexAttribPointer(S,P,O,z,Y,W)}function T(S,P,O,z){_();const Y=z.attributes,W=O.getAttributes(),q=P.defaultAttributeValues;for(const $ in W){const G=W[$];if(G.location>=0){let te=Y[$];if(te===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const ne=te.normalized,ve=te.itemSize,Ge=e.get(te);if(Ge===void 0)continue;const xe=Ge.buffer,De=Ge.type,ze=Ge.bytesPerElement,H=De===n.INT||De===n.UNSIGNED_INT||te.gpuType===oc;if(te.isInterleavedBufferAttribute){const Z=te.data,de=Z.stride,Ee=te.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)h(G.location+be,Z.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<G.locationSize;be++)p(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let be=0;be<G.locationSize;be++)y(G.location+be,ve/G.locationSize,De,ne,de*ze,(Ee+ve/G.locationSize*be)*ze,H)}else{if(te.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)h(G.location+Z,te.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,ve/G.locationSize,De,ne,ve*ze,ve/G.locationSize*Z*ze,H)}}else if(q!==void 0){const ne=q[$];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(G.location,ne);break;case 3:n.vertexAttrib3fv(G.location,ne);break;case 4:n.vertexAttrib4fv(G.location,ne);break;default:n.vertexAttrib1fv(G.location,ne)}}}}E()}function C(){L();for(const S in i){const P=i[S];for(const O in P){const z=P[O];for(const Y in z)u(z[Y].object),delete z[Y];delete P[O]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const z=P[O];for(const Y in z)u(z[Y].object),delete z[Y];delete P[O]}delete i[S.id]}function w(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const z=O[S.id];for(const Y in z)u(z[Y].object),delete z[Y];delete O[S.id]}}function L(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function pv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*d[_];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==oi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:C,maxSamples:b}}function xv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,y=E*4;let T=h.clippingState||null;l.value=T,T=u(x,d,y,m);for(let C=0;C!==y;++C)T[C]=t[C];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const h=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,T=m;y!==_;++y,T+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function _v(n){let e=new WeakMap;function t(a,o){return o===fl?a.mapping=kr:o===dl&&(a.mapping=Vr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fl||o===dl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ux(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const bi=4,Mu=[.125,.215,.35,.446,.526,.582],ki=20,gv=256,is=new Bd,yu=new Ze;let Io=null,No=0,Fo=0,Oo=!1;const vv=new N;class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=vv}=s;Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,No,Fo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:sr,format:Rn,colorSpace:Gr,depthBuffer:!1},r=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=Mv(s,e,t),this._ggxMaterial=bv(s,e,t)}return r}_compileMaterial(e){const t=new Sn(new Jt,e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,i,r,s){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(yu),f.toneMapping=yi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Ps,new xc({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let h=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,h=!0):(p.color.copy(yu),h=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):T===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;yr(r,T*C,y>2?C:0,C,C),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===kr||e.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;yr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,m=f*d,{_lodMax:x}=this,_=this._sizeLods[i],p=3*_*(i>x-bi?i-x+bi:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,yr(s,p,h,3*_,2*_),r.setRenderTarget(s),r.render(o,is),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,yr(e,p,h,3*_,2*_),r.setRenderTarget(e),r.render(o,is)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):ki;p>ki&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const h=[];let E=0;for(let w=0;w<ki;++w){const L=w/_,M=Math.exp(-L*L/2);h.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-i;const T=this._sizeLods[r],C=3*T*(r>y-bi?r-y+bi:0),b=4*(this._cubeSize-T);yr(t,C,b,3*T,2*T),l.setRenderTarget(t),l.render(f,is)}}function Sv(n){const e=[],t=[],i=[];let r=n;const s=n-bi+1+Mu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-bi?l=Mu[a-n+bi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,_=3,p=2,h=1,E=new Float32Array(_*x*m),y=new Float32Array(p*x*m),T=new Float32Array(h*x*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,L=b>2?0:-1,M=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];E.set(M,_*x*b),y.set(d,p*x*b);const S=[b,b,b,b,b,b];T.set(S,h*x*b)}const C=new Jt;C.setAttribute("position",new Pn(E,_)),C.setAttribute("uv",new Pn(y,p)),C.setAttribute("faceIndex",new Pn(T,h)),i.push(new Sn(C,null)),r>bi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tu(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bv(n,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mv(n,e,t){const i=new Float32Array(ki),r=new N(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Au(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function wu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===fl||l===dl,u=l===kr||l===Vr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Eu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Eu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ev(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&As("WebGLRenderer: "+i+" extension not supported."),r}}}function Tv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let y=0,T=E.length;y<T;y+=3){const C=E[y+0],b=E[y+1],w=E[y+2];d.push(C,b,b,w,w,C)}}else if(x!==void 0){const E=x.array;_=x.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const C=y+0,b=y+1,w=y+2;d.push(C,b,b,w,w,C)}}else return;const p=new(Ed(d)?Pd:Rd)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Av(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,d*a,x),t.update(m,i,x))}function u(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,x);let p=0;for(let h=0;h<x;h++)p+=m[h];t.update(p,i,1)}function f(d,m,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,x);let h=0;for(let E=0;E<x;E++)h+=m[E]*_[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:gt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cv(n,e,t){const i=new WeakMap,r=new ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;x===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let C=o.attributes.position.count*T,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*b*4*f),L=new Td(w,C,b,f);L.type=ni,L.needsUpdate=!0;const M=T*4;for(let P=0;P<f;P++){const O=h[P],z=E[P],Y=y[P],W=C*b*4*P;for(let q=0;q<O.count;q++){const $=q*M;x===!0&&(r.fromBufferAttribute(O,q),w[W+$+0]=r.x,w[W+$+1]=r.y,w[W+$+2]=r.z,w[W+$+3]=0),_===!0&&(r.fromBufferAttribute(z,q),w[W+$+4]=r.x,w[W+$+5]=r.y,w[W+$+6]=r.z,w[W+$+7]=0),p===!0&&(r.fromBufferAttribute(Y,q),w[W+$+8]=r.x,w[W+$+9]=r.y,w[W+$+10]=r.z,w[W+$+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new Oe(C,b)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const _=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const kd=new Gt,Cu=new Fd(1,1),Vd=new Td,Gd=new j0,Hd=new Ud,Ru=[],Pu=[],Du=new Float32Array(16),Lu=new Float32Array(9),Uu=new Float32Array(4);function Yr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function Iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),Tt(t,i)}}function Nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Tt(t,i)}}function Fv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Tt(t,i)}}function Ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Xv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=yd,s=Cu):s=kd,t.setTexture2D(e||s,r)}function qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gd,r)}function Yv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hd,r)}function jv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vd,r)}function Zv(n){switch(n){case 5126:return Pv;case 35664:return Dv;case 35665:return Lv;case 35666:return Uv;case 35674:return Iv;case 35675:return Nv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return kv;case 5125:return Vv;case 36294:return Gv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return jv}}function Kv(n,e){n.uniform1fv(this.addr,e)}function $v(n,e){const t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Jv(n,e){const t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Qv(n,e){const t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function eS(n,e){const t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tS(n,e){const t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nS(n,e){const t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iS(n,e){n.uniform1iv(this.addr,e)}function rS(n,e){n.uniform2iv(this.addr,e)}function sS(n,e){n.uniform3iv(this.addr,e)}function aS(n,e){n.uniform4iv(this.addr,e)}function oS(n,e){n.uniform1uiv(this.addr,e)}function lS(n,e){n.uniform2uiv(this.addr,e)}function cS(n,e){n.uniform3uiv(this.addr,e)}function uS(n,e){n.uniform4uiv(this.addr,e)}function fS(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kd,s[a])}function dS(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gd,s[a])}function hS(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hd,s[a])}function pS(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vd,s[a])}function mS(n){switch(n){case 5126:return Kv;case 35664:return $v;case 35665:return Jv;case 35666:return Qv;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return aS;case 5125:return oS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return pS}}class xS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}}class _S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}}class gS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Iu(n,e){n.seq.push(e),n.map[e.id]=e}function vS(n,e,t){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),a=Bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Iu(t,c===void 0?new xS(o,n,e):new _S(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new gS(o),Iu(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);vS(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Nu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const SS=37297;let bS=0;function MS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Fu=new Be;function yS(n){Je._getMatrix(Fu,Je.workingColorSpace,n);const e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Da:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ou(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+MS(n.getShaderSource(e),o)}else return s}function ES(n,e){const t=yS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TS(n,e){let t;switch(e){case a0:t="Linear";break;case o0:t="Reinhard";break;case l0:t="Cineon";break;case c0:t="ACESFilmic";break;case f0:t="AgX";break;case d0:t="Neutral";break;case u0:t="Custom";break;default:Ue("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new N;function AS(){Je.getLuminanceCoefficients(la);const n=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function CS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function os(n){return n!==""}function Bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(PS,LS)}const DS=new Map;function LS(n,e){let t=ke[e];if(t===void 0){const i=DS.get(e);if(i!==void 0)t=ke[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(US,IS)}function IS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function FS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case kr:case Vr:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Vr&&(e="ENVMAP_MODE_REFRACTION"),e}function BS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case r0:e="ENVMAP_BLENDING_MIX";break;case s0:e="ENVMAP_BLENDING_ADD";break}return e}function zS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=NS(t),c=FS(t),u=OS(t),f=BS(t),d=zS(t),m=wS(t),x=CS(s),_=r.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(os).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(os).join(`
`),h.length>0&&(h+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),h=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ke.tonemapping_pars_fragment:"",t.toneMapping!==yi?TS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ES("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=ql(a),a=Bu(a,t),a=zu(a,t),o=ql(o),o=Bu(o,t),o=zu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+p+a,T=E+h+o,C=Nu(r,r.VERTEX_SHADER,y),b=Nu(r,r.FRAGMENT_SHADER,T);r.attachShader(_,C),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(C)||"",Y=r.getShaderInfoLog(b)||"",W=O.trim(),q=z.trim(),$=Y.trim();let G=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,b);else{const ne=Ou(r,C,"vertex"),ve=Ou(r,b,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ne+`
`+ve)}else W!==""?Ue("WebGLProgram: Program Info Log:",W):(q===""||$==="")&&(te=!1);te&&(P.diagnostics={runnable:G,programLog:W,vertexShader:{log:q,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(C),r.deleteShader(b),L=new Ta(r,_),M=RS(r,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,SS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let VS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HS(e),t.set(e,i)),i}}class HS{constructor(e){this.id=VS++,this.code=e,this.usedTimes=0}}function WS(n,e,t,i,r,s,a){const o=new wd,l=new GS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,P,O,z){const Y=O.fog,W=z.geometry,q=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),G=$&&$.mapping===ja?$.image.height:null,te=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&Ue("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=ne!==void 0?ne.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let xe,De,ze,H;if(te){const it=Yt[te];xe=it.vertexShader,De=it.fragmentShader}else xe=M.vertexShader,De=M.fragmentShader,l.update(M),ze=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,We=!!M.map,Ct=!!M.matcap,He=!!$,ut=!!M.aoMap,R=!!M.lightMap,Xe=!!M.bumpMap,qe=!!M.normalMap,lt=!!M.displacementMap,_e=!!M.emissiveMap,dt=!!M.metalnessMap,ye=!!M.roughnessMap,Ne=M.anisotropy>0,A=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,X=M.sheen>0,K=M.transmission>0,V=Ne&&!!M.anisotropyMap,Se=A&&!!M.clearcoatMap,le=A&&!!M.clearcoatNormalMap,Te=A&&!!M.clearcoatRoughnessMap,ge=F&&!!M.iridescenceMap,J=F&&!!M.iridescenceThicknessMap,re=X&&!!M.sheenColorMap,Re=X&&!!M.sheenRoughnessMap,we=!!M.specularMap,fe=!!M.specularColorMap,Le=!!M.specularIntensityMap,D=K&&!!M.transmissionMap,ce=K&&!!M.thicknessMap,se=!!M.gradientMap,ae=!!M.alphaMap,Q=M.alphaTest>0,j=!!M.alphaHash,pe=!!M.extensions;let Ie=yi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const ct={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:xe,fragmentShader:De,defines:M.defines,customVertexShaderID:ze,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Gr,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:Ct,envMap:He,envMapMode:He&&$.mapping,envMapCubeUVHeight:G,aoMap:ut,lightMap:R,bumpMap:Xe,normalMap:qe,displacementMap:d&&lt,emissiveMap:_e,normalMapObjectSpace:qe&&M.normalMapType===_0,normalMapTangentSpace:qe&&M.normalMapType===x0,metalnessMap:dt,roughnessMap:ye,anisotropy:Ne,anisotropyMap:V,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:g,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:J,sheen:X,sheenColorMap:re,sheenRoughnessMap:Re,specularMap:we,specularColorMap:fe,specularIntensityMap:Le,transmission:K,transmissionMap:D,thicknessMap:ce,gradientMap:se,opaque:M.transparent===!1&&M.blending===Dr&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:Q,alphaHash:j,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:ut&&_(M.aoMap.channel),lightMapUv:R&&_(M.lightMap.channel),bumpMapUv:Xe&&_(M.bumpMap.channel),normalMapUv:qe&&_(M.normalMap.channel),displacementMapUv:lt&&_(M.displacementMap.channel),emissiveMapUv:_e&&_(M.emissiveMap.channel),metalnessMapUv:dt&&_(M.metalnessMap.channel),roughnessMapUv:ye&&_(M.roughnessMap.channel),anisotropyMapUv:V&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Le&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:ae&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qe||Ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(We||ae),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){const S=x[M.type];let P;if(S){const O=Yt[S];P=Za.clone(O.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let O=0,z=u.length;O<z;O++){const Y=u[O];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new kS(n,S,M,s),u.push(P)),P}function b(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:L}}function XS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function qS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,x,_,p){const h=a(f,d,m,x,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,_,p){const h=a(f,d,m,x,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||qS),i.length>1&&i.sort(d||Gu),r.length>1&&r.sort(d||Gu)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function YS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Hu,n.set(i,[a])):r>=s.length?(a=new Hu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function jS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function ZS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KS=0;function $S(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JS(n){const e=new jS,t=ZS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new vt,a=new vt;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,x=0,_=0,p=0,h=0,E=0,y=0,T=0,C=0,b=0,w=0;c.sort($S);for(let M=0,S=c.length;M<S;M++){const P=c[M],O=P.color,z=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*z,f+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],z);w++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,G=t.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=P.shadow.matrix,E++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;const $=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=$.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=W,T++}_++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=q,p++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const $=P.shadow,G=t.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=P.shadow.matrix,y++}i.point[x]=q,x++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(z),q.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==m||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==h||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==T||L.numSpotMaps!==C||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,L.directionalLength=m,L.pointLength=x,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=h,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=T,L.numSpotMaps=C,L.numLightProbes=w,i.version=KS++)}function l(c,u){let f=0,d=0,m=0,x=0,_=0;const p=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const y=c[h];if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(y.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Wu(n){const e=new JS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function QS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wu(n),e.set(r,[o])):s>=a.length?(o=new Wu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
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
}`;function nb(n,e,t){let i=new Id;const r=new Oe,s=new Oe,a=new ot,o=new Sx({depthPacking:m0}),l=new bx,c={},u=t.maxTextureSize,f={[Ai]:Zt,[Zt]:Ai,[Qn]:Qn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Jt;x.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let h=this.type;this.render=function(b,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==Zn&&this.type===Zn,Y=h===Zn&&this.type!==Zn;for(let W=0,q=b.length;W<q;W++){const $=b[W],G=$.shadow;if(G===void 0){Ue("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const te=G.getFrameExtents();if(r.multiply(te),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||z===!0||Y===!0){const ve=this.type!==Zn?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new wi(r.x,r.y,ve),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ne=G.getViewportCount();for(let ve=0;ve<ne;ve++){const Ge=G.getViewport(ve);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),O.viewport(a),G.updateMatrices($,ve),i=G.getFrustum(),T(w,L,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&E(G,L),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,S,P)};function E(b,w){const L=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wi(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,L,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,L,m,_,null)}function y(b,w,L,M){let S=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=S.uuid,z=w.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let W=Y[z];W===void 0&&(W=S.clone(),Y[z]=W,w.addEventListener("dispose",C)),S=W}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Zn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=L}return S}function T(b,w,L,M,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Zn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const z=e.update(b),Y=b.material;if(Array.isArray(Y)){const W=z.groups;for(let q=0,$=W.length;q<$;q++){const G=W[q],te=Y[G.materialIndex];if(te&&te.visible){const ne=y(b,te,M,S);b.onBeforeShadow(n,b,w,L,z,ne,G),n.renderBufferDirect(L,null,z,ne,b,G),b.onAfterShadow(n,b,w,L,z,ne,G)}}}else if(Y.visible){const W=y(b,Y,M,S);b.onBeforeShadow(n,b,w,L,z,W,null),n.renderBufferDirect(L,null,z,W,b,null),b.onAfterShadow(n,b,w,L,z,W,null)}}const O=b.children;for(let z=0,Y=O.length;z<Y;z++)T(O[z],w,L,M,S)}function C(b){b.target.removeEventListener("dispose",C);for(const L in c){const M=c[L],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ib={[rl]:sl,[al]:cl,[ol]:ul,[zr]:ll,[sl]:rl,[cl]:al,[ul]:ol,[ll]:zr};function rb(n,e){function t(){let D=!1;const ce=new ot;let se=null;const ae=new ot(0,0,0,0);return{setMask:function(Q){se!==Q&&!D&&(n.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){D=Q},setClear:function(Q,j,pe,Ie,ct){ct===!0&&(Q*=Ie,j*=Ie,pe*=Ie),ce.set(Q,j,pe,Ie),ae.equals(ce)===!1&&(n.clearColor(Q,j,pe,Ie),ae.copy(ce))},reset:function(){D=!1,se=null,ae.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,se=null,ae=null,Q=null;return{setReversed:function(j){if(ce!==j){const pe=e.get("EXT_clip_control");j?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ce=j;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return ce},setTest:function(j){j?Z(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(j){se!==j&&!D&&(n.depthMask(j),se=j)},setFunc:function(j){if(ce&&(j=ib[j]),ae!==j){switch(j){case rl:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=j}},setLocked:function(j){D=j},setClear:function(j){Q!==j&&(ce&&(j=1-j),n.clearDepth(j),Q=j)},reset:function(){D=!1,se=null,ae=null,Q=null,ce=!1}}}function r(){let D=!1,ce=null,se=null,ae=null,Q=null,j=null,pe=null,Ie=null,ct=null;return{setTest:function(it){D||(it?Z(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(it){ce!==it&&!D&&(n.stencilMask(it),ce=it)},setFunc:function(it,Ln,bn){(se!==it||ae!==Ln||Q!==bn)&&(n.stencilFunc(it,Ln,bn),se=it,ae=Ln,Q=bn)},setOp:function(it,Ln,bn){(j!==it||pe!==Ln||Ie!==bn)&&(n.stencilOp(it,Ln,bn),j=it,pe=Ln,Ie=bn)},setLocked:function(it){D=it},setClear:function(it){ct!==it&&(n.clearStencil(it),ct=it)},reset:function(){D=!1,ce=null,se=null,ae=null,Q=null,j=null,pe=null,Ie=null,ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],x=null,_=!1,p=null,h=null,E=null,y=null,T=null,C=null,b=null,w=new Ze(0,0,0),L=0,M=!1,S=null,P=null,O=null,z=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=$>=2);let te=null,ne={};const ve=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),xe=new ot().fromArray(ve),De=new ot().fromArray(Ge);function ze(D,ce,se,ae){const Q=new Uint8Array(4),j=n.createTexture();n.bindTexture(D,j),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<se;pe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ce+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return j}const H={};H[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(zr),Xe(!1),qe(Xc),Z(n.CULL_FACE),ut(zn);function Z(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function de(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ee(D,ce){return f[D]!==ce?(n.bindFramebuffer(D,ce),f[D]=ce,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(D,ce){let se=m,ae=!1;if(D){se=d.get(ce),se===void 0&&(se=[],d.set(ce,se));const Q=D.textures;if(se.length!==Q.length||se[0]!==n.COLOR_ATTACHMENT0){for(let j=0,pe=Q.length;j<pe;j++)se[j]=n.COLOR_ATTACHMENT0+j;se.length=Q.length,ae=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ae=!0);ae&&n.drawBuffers(se)}function We(D){return x!==D?(n.useProgram(D),x=D,!0):!1}const Ct={[zi]:n.FUNC_ADD,[Vm]:n.FUNC_SUBTRACT,[Gm]:n.FUNC_REVERSE_SUBTRACT};Ct[Hm]=n.MIN,Ct[Wm]=n.MAX;const He={[Xm]:n.ZERO,[qm]:n.ONE,[Ym]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[Qm]:n.SRC_ALPHA_SATURATE,[$m]:n.DST_COLOR,[Zm]:n.DST_ALPHA,[jm]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[Jm]:n.ONE_MINUS_DST_COLOR,[Km]:n.ONE_MINUS_DST_ALPHA,[e0]:n.CONSTANT_COLOR,[t0]:n.ONE_MINUS_CONSTANT_COLOR,[n0]:n.CONSTANT_ALPHA,[i0]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(D,ce,se,ae,Q,j,pe,Ie,ct,it){if(D===zn){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),D!==km){if(D!==p||it!==M){if((h!==zi||T!==zi)&&(n.blendEquation(n.FUNC_ADD),h=zi,T=zi),it)switch(D){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",D);break}else switch(D){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yc:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",D);break}E=null,y=null,C=null,b=null,w.set(0,0,0),L=0,p=D,M=it}return}Q=Q||ce,j=j||se,pe=pe||ae,(ce!==h||Q!==T)&&(n.blendEquationSeparate(Ct[ce],Ct[Q]),h=ce,T=Q),(se!==E||ae!==y||j!==C||pe!==b)&&(n.blendFuncSeparate(He[se],He[ae],He[j],He[pe]),E=se,y=ae,C=j,b=pe),(Ie.equals(w)===!1||ct!==L)&&(n.blendColor(Ie.r,Ie.g,Ie.b,ct),w.copy(Ie),L=ct),p=D,M=!1}function R(D,ce){D.side===Qn?de(n.CULL_FACE):Z(n.CULL_FACE);let se=D.side===Zt;ce&&(se=!se),Xe(se),D.blending===Dr&&D.transparent===!1?ut(zn):ut(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ae=D.stencilWrite;o.setTest(ae),ae&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function qe(D){D!==Om?(Z(n.CULL_FACE),D!==P&&(D===Xc?n.cullFace(n.BACK):D===Bm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),P=D}function lt(D){D!==O&&(q&&n.lineWidth(D),O=D)}function _e(D,ce,se){D?(Z(n.POLYGON_OFFSET_FILL),(z!==ce||Y!==se)&&(n.polygonOffset(ce,se),z=ce,Y=se)):de(n.POLYGON_OFFSET_FILL)}function dt(D){D?Z(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function ye(D){D===void 0&&(D=n.TEXTURE0+W-1),te!==D&&(n.activeTexture(D),te=D)}function Ne(D,ce,se){se===void 0&&(te===null?se=n.TEXTURE0+W-1:se=te);let ae=ne[se];ae===void 0&&(ae={type:void 0,texture:void 0},ne[se]=ae),(ae.type!==D||ae.texture!==ce)&&(te!==se&&(n.activeTexture(se),te=se),n.bindTexture(D,ce||H[D]),ae.type=D,ae.texture=ce)}function A(){const D=ne[te];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function X(){try{n.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function K(){try{n.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(){try{n.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ge(){try{n.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{n.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function re(D){xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function Re(D){De.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),De.copy(D))}function we(D,ce){let se=c.get(ce);se===void 0&&(se=new WeakMap,c.set(ce,se));let ae=se.get(D);ae===void 0&&(ae=n.getUniformBlockIndex(ce,D.name),se.set(D,ae))}function fe(D,ce){const ae=c.get(ce).get(D);l.get(ce)!==ae&&(n.uniformBlockBinding(ce,ae,D.__bindingPointIndex),l.set(ce,ae))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ne={},f={},d=new WeakMap,m=[],x=null,_=!1,p=null,h=null,E=null,y=null,T=null,C=null,b=null,w=new Ze(0,0,0),L=0,M=!1,S=null,P=null,O=null,z=null,Y=null,xe.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:de,bindFramebuffer:Ee,drawBuffers:be,useProgram:We,setBlending:ut,setMaterial:R,setFlipSided:Xe,setCullFace:qe,setLineWidth:lt,setPolygonOffset:_e,setScissorTest:dt,activeTexture:ye,bindTexture:Ne,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ge,texImage3D:J,updateUBOMapping:we,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Te,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:re,viewport:Re,reset:Le}}function sb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,g){return m?new OffscreenCanvas(A,g):Ua("canvas")}function _(A,g,F){let X=1;const K=Ne(A);if((K.width>F||K.height>F)&&(X=F/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const V=Math.floor(X*K.width),Se=Math.floor(X*K.height);f===void 0&&(f=x(V,Se));const le=g?x(V,Se):f;return le.width=V,le.height=Se,le.getContext("2d").drawImage(A,0,0,V,Se),Ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+Se+")."),le}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,g,F,X,K=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=g;if(g===n.RED&&(F===n.FLOAT&&(V=n.R32F),F===n.HALF_FLOAT&&(V=n.R16F),F===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.R8UI),F===n.UNSIGNED_SHORT&&(V=n.R16UI),F===n.UNSIGNED_INT&&(V=n.R32UI),F===n.BYTE&&(V=n.R8I),F===n.SHORT&&(V=n.R16I),F===n.INT&&(V=n.R32I)),g===n.RG&&(F===n.FLOAT&&(V=n.RG32F),F===n.HALF_FLOAT&&(V=n.RG16F),F===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RG8UI),F===n.UNSIGNED_SHORT&&(V=n.RG16UI),F===n.UNSIGNED_INT&&(V=n.RG32UI),F===n.BYTE&&(V=n.RG8I),F===n.SHORT&&(V=n.RG16I),F===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGB8UI),F===n.UNSIGNED_SHORT&&(V=n.RGB16UI),F===n.UNSIGNED_INT&&(V=n.RGB32UI),F===n.BYTE&&(V=n.RGB8I),F===n.SHORT&&(V=n.RGB16I),F===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),F===n.UNSIGNED_INT&&(V=n.RGBA32UI),F===n.BYTE&&(V=n.RGBA8I),F===n.SHORT&&(V=n.RGBA16I),F===n.INT&&(V=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),g===n.RGBA){const Se=K?Da:Je.getTransfer(X);F===n.FLOAT&&(V=n.RGBA32F),F===n.HALF_FLOAT&&(V=n.RGBA16F),F===n.UNSIGNED_BYTE&&(V=Se===st?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function T(A,g){let F;return A?g===null||g===Qi||g===ys?F=n.DEPTH24_STENCIL8:g===ni?F=n.DEPTH32F_STENCIL8:g===Ms&&(F=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Qi||g===ys?F=n.DEPTH_COMPONENT24:g===ni?F=n.DEPTH_COMPONENT32F:g===Ms&&(F=n.DEPTH_COMPONENT16),F}function C(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==xn?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function b(A){const g=A.target;g.removeEventListener("dispose",b),L(g),g.isVideoTexture&&u.delete(g)}function w(A){const g=A.target;g.removeEventListener("dispose",w),S(g)}function L(A){const g=i.get(A);if(g.__webglInit===void 0)return;const F=A.source,X=d.get(F);if(X){const K=X[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(A),Object.keys(X).length===0&&d.delete(F)}i.remove(A)}function M(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const F=A.source,X=d.get(F);delete X[g.__cacheKey],a.memory.textures--}function S(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let K=0;K<g.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[X][K]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let X=0,K=F.length;X<K;X++){const V=i.get(F[X]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(F[X])}i.remove(A)}let P=0;function O(){P=0}function z(){const A=P;return A>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function Y(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function W(A,g){const F=i.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const X=A.image;if(X===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function q(A,g){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){H(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function $(A,g){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){H(F,A,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function G(A,g){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Z(F,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const te={[hl]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},ne={[on]:n.NEAREST,[h0]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},ve={[g0]:n.NEVER,[E0]:n.ALWAYS,[v0]:n.LESS,[yd]:n.LEQUAL,[S0]:n.EQUAL,[y0]:n.GEQUAL,[b0]:n.GREATER,[M0]:n.NOTEQUAL};function Ge(A,g){if(g.type===ni&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===xn||g.magFilter===lo||g.magFilter===Bs||g.magFilter===Wi||g.minFilter===xn||g.minFilter===lo||g.minFilter===Bs||g.minFilter===Wi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,te[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,te[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,te[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ne[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===on||g.minFilter!==Bs&&g.minFilter!==Wi||g.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function xe(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",b));const X=g.source;let K=d.get(X);K===void 0&&(K={},d.set(X,K));const V=Y(g);if(V!==A.__cacheKey){K[V]===void 0&&(K[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[V].usedTimes++;const Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&M(g)),A.__cacheKey=V,A.__webglTexture=K[V].texture}return F}function De(A,g,F){return Math.floor(Math.floor(A/F)/g)}function ze(A,g,F,X){const V=A.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,X,g.data);else{V.sort((J,re)=>J.start-re.start);let Se=0;for(let J=1;J<V.length;J++){const re=V[Se],Re=V[J],we=re.start+re.count,fe=De(Re.start,g.width,4),Le=De(re.start,g.width,4);Re.start<=we+1&&fe===Le&&De(Re.start+Re.count-1,g.width,4)===fe?re.count=Math.max(re.count,Re.start+Re.count-re.start):(++Se,V[Se]=Re)}V.length=Se+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),ge=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let J=0,re=V.length;J<re;J++){const Re=V[J],we=Math.floor(Re.start/4),fe=Math.ceil(Re.count/4),Le=we%g.width,D=Math.floor(we/g.width),ce=fe,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Le,D,ce,se,F,X,g.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function H(A,g,F){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const K=xe(A,g),V=g.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+F);const Se=i.get(V);if(V.version!==Se.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const le=Je.getPrimaries(Je.workingColorSpace),Te=g.colorSpace===gi?null:Je.getPrimaries(g.colorSpace),ge=g.colorSpace===gi||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let J=_(g.image,!1,r.maxTextureSize);J=ye(g,J);const re=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let we=y(g.internalFormat,re,Re,g.colorSpace,g.isVideoTexture);Ge(X,g);let fe;const Le=g.mipmaps,D=g.isVideoTexture!==!0,ce=Se.__version===void 0||K===!0,se=V.dataReady,ae=C(g,J);if(g.isDepthTexture)we=T(g.format===Ts,g.type),ce&&(D?t.texStorage2D(n.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,re,Re,null));else if(g.isDataTexture)if(Le.length>0){D&&ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,Le[0].width,Le[0].height);for(let Q=0,j=Le.length;Q<j;Q++)fe=Le[Q],D?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,re,Re,fe.data):t.texImage2D(n.TEXTURE_2D,Q,we,fe.width,fe.height,0,re,Re,fe.data);g.generateMipmaps=!1}else D?(ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,J.width,J.height),se&&ze(g,J,re,Re)):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,re,Re,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,we,Le[0].width,Le[0].height,J.depth);for(let Q=0,j=Le.length;Q<j;Q++)if(fe=Le[Q],g.format!==Rn)if(re!==null)if(D){if(se)if(g.layerUpdates.size>0){const pe=bu(fe.width,fe.height,g.format,g.type);for(const Ie of g.layerUpdates){const ct=fe.data.subarray(Ie*pe/fe.data.BYTES_PER_ELEMENT,(Ie+1)*pe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ie,fe.width,fe.height,1,re,ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,J.depth,re,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,we,fe.width,fe.height,J.depth,0,fe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,J.depth,re,Re,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,we,fe.width,fe.height,J.depth,0,re,Re,fe.data)}else{D&&ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,Le[0].width,Le[0].height);for(let Q=0,j=Le.length;Q<j;Q++)fe=Le[Q],g.format!==Rn?re!==null?D?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,re,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,we,fe.width,fe.height,0,fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,re,Re,fe.data):t.texImage2D(n.TEXTURE_2D,Q,we,fe.width,fe.height,0,re,Re,fe.data)}else if(g.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,we,J.width,J.height,J.depth),se)if(g.layerUpdates.size>0){const Q=bu(J.width,J.height,g.format,g.type);for(const j of g.layerUpdates){const pe=J.data.subarray(j*Q/J.data.BYTES_PER_ELEMENT,(j+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,re,Re,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,Re,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,re,Re,J.data);else if(g.isData3DTexture)D?(ce&&t.texStorage3D(n.TEXTURE_3D,ae,we,J.width,J.height,J.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,Re,J.data)):t.texImage3D(n.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,re,Re,J.data);else if(g.isFramebufferTexture){if(ce)if(D)t.texStorage2D(n.TEXTURE_2D,ae,we,J.width,J.height);else{let Q=J.width,j=J.height;for(let pe=0;pe<ae;pe++)t.texImage2D(n.TEXTURE_2D,pe,we,Q,j,0,re,Re,null),Q>>=1,j>>=1}}else if(Le.length>0){if(D&&ce){const Q=Ne(Le[0]);t.texStorage2D(n.TEXTURE_2D,ae,we,Q.width,Q.height)}for(let Q=0,j=Le.length;Q<j;Q++)fe=Le[Q],D?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,re,Re,fe):t.texImage2D(n.TEXTURE_2D,Q,we,re,Re,fe);g.generateMipmaps=!1}else if(D){if(ce){const Q=Ne(J);t.texStorage2D(n.TEXTURE_2D,ae,we,Q.width,Q.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,Re,J)}else t.texImage2D(n.TEXTURE_2D,0,we,re,Re,J);p(g)&&h(X),Se.__version=V.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Z(A,g,F){if(g.image.length!==6)return;const X=xe(A,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const V=i.get(K);if(K.version!==V.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const Se=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===gi?null:Je.getPrimaries(g.colorSpace),Te=g.colorSpace===gi||Se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!ge&&!J?re[j]=_(g.image[j],!0,r.maxCubemapSize):re[j]=J?g.image[j].image:g.image[j],re[j]=ye(g,re[j]);const Re=re[0],we=s.convert(g.format,g.colorSpace),fe=s.convert(g.type),Le=y(g.internalFormat,we,fe,g.colorSpace),D=g.isVideoTexture!==!0,ce=V.__version===void 0||X===!0,se=K.dataReady;let ae=C(g,Re);Ge(n.TEXTURE_CUBE_MAP,g);let Q;if(ge){D&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Le,Re.width,Re.height);for(let j=0;j<6;j++){Q=re[j].mipmaps;for(let pe=0;pe<Q.length;pe++){const Ie=Q[pe];g.format!==Rn?we!==null?D?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Le,Ie.width,Ie.height,0,Ie.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,Ie.width,Ie.height,we,fe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Le,Ie.width,Ie.height,0,we,fe,Ie.data)}}}else{if(Q=g.mipmaps,D&&ce){Q.length>0&&ae++;const j=Ne(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Le,j.width,j.height)}for(let j=0;j<6;j++)if(J){D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,we,fe,re[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,re[j].width,re[j].height,0,we,fe,re[j].data);for(let pe=0;pe<Q.length;pe++){const ct=Q[pe].image[j].image;D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,ct.width,ct.height,we,fe,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Le,ct.width,ct.height,0,we,fe,ct.data)}}else{D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,fe,re[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,we,fe,re[j]);for(let pe=0;pe<Q.length;pe++){const Ie=Q[pe];D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,we,fe,Ie.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Le,we,fe,Ie.image[j])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),V.__version=K.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function de(A,g,F,X,K,V){const Se=s.convert(F.format,F.colorSpace),le=s.convert(F.type),Te=y(F.internalFormat,Se,le,F.colorSpace),ge=i.get(g),J=i.get(F);if(J.__renderTarget=g,!ge.__hasExternalTextures){const re=Math.max(1,g.width>>V),Re=Math.max(1,g.height>>V);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,V,Te,re,Re,g.depth,0,Se,le,null):t.texImage2D(K,V,Te,re,Re,0,Se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),_e(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,J.__webglTexture,0,lt(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,J.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(A,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const X=g.depthTexture,K=X&&X.isDepthTexture?X.type:null,V=T(g.stencilBuffer,K),Se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=lt(g);_e(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,V,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,A)}else{const X=g.textures;for(let K=0;K<X.length;K++){const V=X[K],Se=s.convert(V.format,V.colorSpace),le=s.convert(V.type),Te=y(V.internalFormat,Se,le,V.colorSpace),ge=lt(g);F&&_e(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,Te,g.width,g.height):_e(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const K=X.__webglTexture,V=lt(g);if(g.depthTexture.format===Es)_e(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===Ts)_e(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(A){const g=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=X}if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=A.texture.mipmaps;X&&X.length>0?be(g.__webglFramebuffer[0],A):be(g.__webglFramebuffer,A)}else if(F){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ee(g.__webglDepthbuffer[X],A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ee(g.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(A,g,F){const X=i.get(A);g!==void 0&&de(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&We(A)}function He(A){const g=A.texture,F=i.get(A),X=i.get(g);A.addEventListener("dispose",w);const K=A.textures,V=A.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Te=0;Te<g.mipmaps.length;Te++)F.__webglFramebuffer[le][Te]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let le=0,Te=K.length;le<Te;le++){const ge=i.get(K[le]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const Te=K[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const ge=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),re=y(Te.internalFormat,ge,J,Te.colorSpace,A.isXRRenderTarget===!0),Re=lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,re,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)de(F.__webglFramebuffer[le][Te],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else de(F.__webglFramebuffer[le],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,Te=K.length;le<Te;le++){const ge=K[le],J=i.get(ge);let re=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),Ge(re,ge),de(F.__webglFramebuffer,A,ge,n.COLOR_ATTACHMENT0+le,re,0),p(ge)&&h(re)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,X.__webglTexture),Ge(le,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)de(F.__webglFramebuffer[Te],A,g,n.COLOR_ATTACHMENT0,le,Te);else de(F.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,le,0);p(g)&&h(le),t.unbindTexture()}A.depthBuffer&&We(A)}function ut(A){const g=A.textures;for(let F=0,X=g.length;F<X;F++){const K=g[F];if(p(K)){const V=E(A),Se=i.get(K).__webglTexture;t.bindTexture(V,Se),h(V),t.unbindTexture()}}}const R=[],Xe=[];function qe(A){if(A.samples>0){if(_e(A)===!1){const g=A.textures,F=A.width,X=A.height;let K=n.COLOR_BUFFER_BIT;const V=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(A),le=g.length>1;if(le)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const J=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,K,n.NEAREST),l===!0&&(R.length=0,Xe.length=0,R.push(n.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(R.push(V),Xe.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const J=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function _e(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function dt(A){const g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ye(A,g){const F=A.colorSpace,X=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Gr&&F!==gi&&(Je.getTransfer(F)===st?(X!==Rn||K!==oi)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",F)),g}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function ab(n,e){function t(i,r=gi){let s;const a=Je.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xd)return n.BYTE;if(i===_d)return n.SHORT;if(i===Ms)return n.UNSIGNED_SHORT;if(i===oc)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===Sd)return n.ALPHA;if(i===bd)return n.RGB;if(i===Rn)return n.RGBA;if(i===Es)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===uc)return n.RED_INTEGER;if(i===fc)return n.RG;if(i===dc)return n.RG_INTEGER;if(i===hc)return n.RGBA_INTEGER;if(i===ba||i===Ma||i===ya||i===Ea)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===xl||i===_l||i===gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===Sl||i===bl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===Sl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===yl||i===El||i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Pl||i===Dl||i===Ll||i===Ul||i===Il||i===Nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Ol||i===Bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fl)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===kl||i===Vl||i===Gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
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

}`;class cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:ob,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ub extends ar{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const _=typeof XRWebGLBinding<"u",p=new cb,h={},E=t.getContextAttributes();let y=null,T=null;const C=[],b=[],w=new Oe;let L=null;const M=new pn;M.viewport=new ot;const S=new pn;S.viewport=new ot;const P=[M,S],O=new yx;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=C[H];return Z===void 0&&(Z=new Po,C[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=C[H];return Z===void 0&&(Z=new Po,C[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=C[H];return Z===void 0&&(Z=new Po,C[H]=Z),Z.getHandSpace()};function W(H){const Z=b.indexOf(H.inputSource);if(Z===-1)return;const de=C[Z];de!==void 0&&(de.update(H.inputSource,H.frame,c||a),de.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let H=0;H<C.length;H++){const Z=b[H];Z!==null&&(b[H]=null,C[H].disconnect(Z))}z=null,Y=null,p.reset();for(const H in h)delete h[H];e.setRenderTarget(y),m=null,d=null,f=null,r=null,T=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ee=null,be=null;E.depth&&(be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?Ts:Es,Ee=E.stencil?ys:Qi);const We={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new wi(d.textureWidth,d.textureHeight,{format:Rn,type:oi,depthTexture:new Fd(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new wi(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(H){for(let Z=0;Z<H.removed.length;Z++){const de=H.removed[Z],Ee=b.indexOf(de);Ee>=0&&(b[Ee]=null,C[Ee].disconnect(de))}for(let Z=0;Z<H.added.length;Z++){const de=H.added[Z];let Ee=b.indexOf(de);if(Ee===-1){for(let We=0;We<C.length;We++)if(We>=b.length){b.push(de),Ee=We;break}else if(b[We]===null){b[We]=de,Ee=We;break}if(Ee===-1)break}const be=C[Ee];be&&be.connect(de)}}const G=new N,te=new N;function ne(H,Z,de){G.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const Ee=G.distanceTo(te),be=Z.projectionMatrix.elements,We=de.projectionMatrix.elements,Ct=be[14]/(be[10]-1),He=be[14]/(be[10]+1),ut=(be[9]+1)/be[5],R=(be[9]-1)/be[5],Xe=(be[8]-1)/be[0],qe=(We[8]+1)/We[0],lt=Ct*Xe,_e=Ct*qe,dt=Ee/(-Xe+qe),ye=dt*-Xe;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ye),H.translateZ(dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),be[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ne=Ct+dt,A=He+dt,g=lt-ye,F=_e+(Ee-ye),X=ut*He/A*Ne,K=R*He/A*Ne;H.projectionMatrix.makePerspective(g,F,X,K,Ne,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ve(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Z=H.near,de=H.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=S.near=M.near=Z,O.far=S.far=M.far=de,(z!==O.near||Y!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,Y=O.far),O.layers.mask=H.layers.mask|6,M.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Ee=H.parent,be=O.cameras;ve(O,Ee);for(let We=0;We<be.length;We++)ve(be[We],Ee);be.length===2?ne(O,M,S):O.projectionMatrix.copy(M.projectionMatrix),Ge(H,O,Ee)};function Ge(H,Z,de){de===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ws*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(H){return h[H]};let xe=null;function De(H,Z){if(u=Z.getViewerPose(c||a),x=Z,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ee=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Ee=!0);for(let He=0;He<de.length;He++){const ut=de[He];let R=null;if(m!==null)R=m.getViewport(ut);else{const qe=f.getViewSubImage(d,ut);R=qe.viewport,He===0&&(e.setRenderTargetTextures(T,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(T))}let Xe=P[He];Xe===void 0&&(Xe=new pn,Xe.layers.enable(He),Xe.viewport=new ot,P[He]=Xe),Xe.matrix.fromArray(ut.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ut.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(R.x,R.y,R.width,R.height),He===0&&(O.matrix.copy(Xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ee===!0&&O.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const He=f.getDepthInformation(de[0]);He&&He.isValid&&He.texture&&p.init(He,r.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let He=0;He<de.length;He++){const ut=de[He].camera;if(ut){let R=h[ut];R||(R=new Od,h[ut]=R);const Xe=f.getCameraImage(ut);R.sourceTexture=Xe}}}}for(let de=0;de<C.length;de++){const Ee=b[de],be=C[de];Ee!==null&&be!==void 0&&be.update(Ee,Z,c||a)}xe&&xe(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const ze=new zd;ze.setAnimationLoop(De),this.setAnimationLoop=function(H){xe=H},this.dispose=function(){}}}const Oi=new li,fb=new vt;function db(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Dd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,y,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Zt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Zt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h),y=E.envMap,T=E.envMapRotation;y&&(p.envMap.value=y,Oi.copy(T),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(Oi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const T=y.program;i.uniformBlockBinding(E,T)}function c(E,y){let T=r[E.id];T===void 0&&(x(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",p));const C=y.program;i.updateUBOMapping(E,C);const b=e.render.frame;s[E.id]!==b&&(d(E),s[E.id]=b)}function u(E){const y=f();E.__bindingPointIndex=y;const T=n.createBuffer(),C=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],T=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,w=T.length;b<w;b++){const L=Array.isArray(T[b])?T[b]:[T[b]];for(let M=0,S=L.length;M<S;M++){const P=L[M];if(m(P,b,M,C)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<z.length;W++){const q=z[W],$=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,y,T,C){const b=E.value,w=y+"_"+T;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const L=C[w];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[w]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function x(E){const y=E.uniforms;let T=0;const C=16;for(let w=0,L=y.length;w<L;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,P=M.length;S<P;S++){const O=M[S],z=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=z.length;Y<W;Y++){const q=z[Y],$=_(q),G=T%C,te=G%$.boundary,ne=G+te;T+=te,ne!==0&&C-ne<$.storage&&(T+=C-ne),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=$.storage}}}const b=T%C;return b>0&&(T+=C-b),E.__size=T,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const pb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let jn=null;function mb(){return jn===null&&(jn=new hx(pb,32,32,fc,sr),jn.minFilter=xn,jn.magFilter=xn,jn.wrapS=ti,jn.wrapT=ti,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class xb{constructor(e={}){const{canvas:t=T0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=new Set([hc,dc,uc]),_=new Set([oi,Qi,Ms,ys,lc,cc]),p=new Uint32Array(4),h=new Int32Array(4);let E=null,y=null;const T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let w=!1;this._outputColorSpace=hn;let L=0,M=0,S=null,P=-1,O=null;const z=new ot,Y=new ot;let W=null;const q=new Ze(0);let $=0,G=t.width,te=t.height,ne=1,ve=null,Ge=null;const xe=new ot(0,0,G,te),De=new ot(0,0,G,te);let ze=!1;const H=new Id;let Z=!1,de=!1;const Ee=new vt,be=new N,We=new ot,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ut(){return S===null?ne:1}let R=i;function Xe(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){const U="webgl2";if(R=Xe(U,v),R===null)throw Xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let qe,lt,_e,dt,ye,Ne,A,g,F,X,K,V,Se,le,Te,ge,J,re,Re,we,fe,Le,D,ce;function se(){qe=new Ev(R),qe.init(),Le=new ab(R,qe),lt=new mv(R,qe,e,Le),_e=new rb(R,qe),lt.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),dt=new wv(R),ye=new XS,Ne=new sb(R,qe,_e,ye,lt,Le,dt),A=new _v(b),g=new yv(b),F=new Dx(R),D=new hv(R,F),X=new Tv(R,F,dt,D),K=new Rv(R,X,F,dt),Re=new Cv(R,lt,Ne),ge=new xv(ye),V=new WS(b,A,g,qe,lt,D,ge),Se=new db(b,ye),le=new YS,Te=new QS(qe),re=new dv(b,A,g,_e,K,m,l),J=new nb(b,K,lt),ce=new hb(R,dt,lt,_e),we=new pv(R,qe,dt),fe=new Av(R,qe,dt),dt.programs=V.programs,b.capabilities=lt,b.extensions=qe,b.properties=ye,b.renderLists=le,b.shadowMap=J,b.state=_e,b.info=dt}se();const ae=new ub(b,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(v){v!==void 0&&(ne=v,this.setSize(G,te,!1))},this.getSize=function(v){return v.set(G,te)},this.setSize=function(v,U,B=!0){if(ae.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,te=U,t.width=Math.floor(v*ne),t.height=Math.floor(U*ne),B===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(G*ne,te*ne).floor()},this.setDrawingBufferSize=function(v,U,B){G=v,te=U,ne=B,t.width=Math.floor(v*B),t.height=Math.floor(U*B),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(z)},this.getViewport=function(v){return v.copy(xe)},this.setViewport=function(v,U,B,k){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,U,B,k),_e.viewport(z.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,U,B,k){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,U,B,k),_e.scissor(Y.copy(De).multiplyScalar(ne).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(v){_e.setScissorTest(ze=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Ge=v},this.getClearColor=function(v){return v.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,B=!0){let k=0;if(v){let I=!1;if(S!==null){const ie=S.texture.format;I=x.has(ie)}if(I){const ie=S.texture.type,ue=_.has(ie),me=re.getClearColor(),he=re.getClearAlpha(),Ce=me.r,Pe=me.g,Me=me.b;ue?(p[0]=Ce,p[1]=Pe,p[2]=Me,p[3]=he,R.clearBufferuiv(R.COLOR,0,p)):(h[0]=Ce,h[1]=Pe,h[2]=Me,h[3]=he,R.clearBufferiv(R.COLOR,0,h))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),B&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),re.dispose(),le.dispose(),Te.dispose(),ye.dispose(),A.dispose(),g.dispose(),K.dispose(),D.dispose(),ce.dispose(),V.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Sc),ae.removeEventListener("sessionend",bc),Ri.stop()};function Q(v){v.preventDefault(),Ia("WebGLRenderer: Context Lost."),w=!0}function j(){Ia("WebGLRenderer: Context Restored."),w=!1;const v=dt.autoReset,U=J.enabled,B=J.autoUpdate,k=J.needsUpdate,I=J.type;se(),dt.autoReset=v,J.enabled=U,J.autoUpdate=B,J.needsUpdate=k,J.type=I}function pe(v){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ie(v){const U=v.target;U.removeEventListener("dispose",Ie),ct(U)}function ct(v){it(v),ye.remove(v)}function it(v){const U=ye.get(v).programs;U!==void 0&&(U.forEach(function(B){V.releaseProgram(B)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,B,k,I,ie){U===null&&(U=Ct);const ue=I.isMesh&&I.matrixWorld.determinant()<0,me=Kd(v,U,B,k,I);_e.setMaterial(k,ue);let he=B.index,Ce=1;if(k.wireframe===!0){if(he=X.getWireframeAttribute(B),he===void 0)return;Ce=2}const Pe=B.drawRange,Me=B.attributes.position;let Ye=Pe.start*Ce,rt=(Pe.start+Pe.count)*Ce;ie!==null&&(Ye=Math.max(Ye,ie.start*Ce),rt=Math.min(rt,(ie.start+ie.count)*Ce)),he!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,he.count)):Me!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Me.count));const mt=rt-Ye;if(mt<0||mt===1/0)return;D.setup(I,k,me,B,he);let xt,at=we;if(he!==null&&(xt=F.get(he),at=fe,at.setIndex(xt)),I.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*ut()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(I.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*ut()),I.isLineSegments?at.setMode(R.LINES):I.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else I.isPoints?at.setMode(R.POINTS):I.isSprite&&at.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))at.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ae=I._multiDrawStarts,ht=I._multiDrawCounts,$e=I._multiDrawCount,Qt=he?F.get(he).bytesPerElement:1,or=ye.get(k).currentProgram.getUniforms();for(let en=0;en<$e;en++)or.setValue(R,"_gl_DrawID",en),at.render(Ae[en]/Qt,ht[en])}else if(I.isInstancedMesh)at.renderInstances(Ye,mt,I.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ht=Math.min(B.instanceCount,Ae);at.renderInstances(Ye,mt,ht)}else at.render(Ye,mt)};function Ln(v,U,B){v.transparent===!0&&v.side===Qn&&v.forceSinglePass===!1?(v.side=Zt,v.needsUpdate=!0,Ls(v,U,B),v.side=Ai,v.needsUpdate=!0,Ls(v,U,B),v.side=Qn):Ls(v,U,B)}this.compile=function(v,U,B=null){B===null&&(B=v),y=Te.get(B),y.init(U),C.push(y),B.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(y.pushLight(I),I.castShadow&&y.pushShadow(I))}),v!==B&&v.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(y.pushLight(I),I.castShadow&&y.pushShadow(I))}),y.setupLights();const k=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const me=ie[ue];Ln(me,B,I),k.add(me)}else Ln(ie,B,I),k.add(ie)}),y=C.pop(),k},this.compileAsync=function(v,U,B=null){const k=this.compile(v,U,B);return new Promise(I=>{function ie(){if(k.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){I(v);return}setTimeout(ie,10)}qe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let bn=null;function Zd(v){bn&&bn(v)}function Sc(){Ri.stop()}function bc(){Ri.start()}const Ri=new zd;Ri.setAnimationLoop(Zd),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(v){bn=v,ae.setAnimationLoop(v),v===null?Ri.stop():Ri.start()},ae.addEventListener("sessionstart",Sc),ae.addEventListener("sessionend",bc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,U,S),y=Te.get(v,C.length),y.init(U),C.push(y),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(Ee,On,U.reversedDepth),de=this.localClippingEnabled,Z=ge.init(this.clippingPlanes,de),E=le.get(v,T.length),E.init(),T.push(E),ae.enabled===!0&&ae.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&eo(ie,U,-1/0,b.sortObjects)}eo(v,U,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(ve,Ge),He=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,He&&re.addToRenderList(E,v),this.info.render.frame++,Z===!0&&ge.beginShadows();const B=y.state.shadowsArray;J.render(B,v,U),Z===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=E.opaque,I=E.transmissive;if(y.setupLights(),U.isArrayCamera){const ie=U.cameras;if(I.length>0)for(let ue=0,me=ie.length;ue<me;ue++){const he=ie[ue];yc(k,I,v,he)}He&&re.render(v);for(let ue=0,me=ie.length;ue<me;ue++){const he=ie[ue];Mc(E,v,he,he.viewport)}}else I.length>0&&yc(k,I,v,U),He&&re.render(v),Mc(E,v,U);S!==null&&M===0&&(Ne.updateMultisampleRenderTarget(S),Ne.updateRenderTargetMipmap(S)),v.isScene===!0&&v.onAfterRender(b,v,U),D.resetDefaultState(),P=-1,O=null,C.pop(),C.length>0?(y=C[C.length-1],Z===!0&&ge.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function eo(v,U,B,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||H.intersectsSprite(v)){k&&We.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);const ue=K.update(v),me=v.material;me.visible&&E.push(v,ue,me,B,We.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||H.intersectsObject(v))){const ue=K.update(v),me=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),We.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),We.copy(ue.boundingSphere.center)),We.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)),Array.isArray(me)){const he=ue.groups;for(let Ce=0,Pe=he.length;Ce<Pe;Ce++){const Me=he[Ce],Ye=me[Me.materialIndex];Ye&&Ye.visible&&E.push(v,ue,Ye,B,We.z,Me)}}else me.visible&&E.push(v,ue,me,B,We.z,null)}}const ie=v.children;for(let ue=0,me=ie.length;ue<me;ue++)eo(ie[ue],U,B,k)}function Mc(v,U,B,k){const{opaque:I,transmissive:ie,transparent:ue}=v;y.setupLightsView(B),Z===!0&&ge.setGlobalState(b.clippingPlanes,B),k&&_e.viewport(z.copy(k)),I.length>0&&Ds(I,U,B),ie.length>0&&Ds(ie,U,B),ue.length>0&&Ds(ue,U,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function yc(v,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[k.id]===void 0&&(y.state.transmissionRenderTarget[k.id]=new wi(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?sr:oi,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ie=y.state.transmissionRenderTarget[k.id],ue=k.viewport||z;ie.setSize(ue.z*b.transmissionResolutionScale,ue.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),he=b.getActiveCubeFace(),Ce=b.getActiveMipmapLevel();b.setRenderTarget(ie),b.getClearColor(q),$=b.getClearAlpha(),$<1&&b.setClearColor(16777215,.5),b.clear(),He&&re.render(B);const Pe=b.toneMapping;b.toneMapping=yi;const Me=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),Z===!0&&ge.setGlobalState(b.clippingPlanes,k),Ds(v,B,k),Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,mt=U.length;rt<mt;rt++){const xt=U[rt],{object:at,geometry:Ae,material:ht,group:$e}=xt;if(ht.side===Qn&&at.layers.test(k.layers)){const Qt=ht.side;ht.side=Zt,ht.needsUpdate=!0,Ec(at,B,k,Ae,ht,$e),ht.side=Qt,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie))}b.setRenderTarget(me,he,Ce),b.setClearColor(q,$),Me!==void 0&&(k.viewport=Me),b.toneMapping=Pe}function Ds(v,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,ie=v.length;I<ie;I++){const ue=v[I],{object:me,geometry:he,group:Ce}=ue;let Pe=ue.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),me.layers.test(B.layers)&&Ec(me,U,B,he,Pe,Ce)}}function Ec(v,U,B,k,I,ie){v.onBeforeRender(b,U,B,k,I,ie),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(b,U,B,k,v,ie),I.transparent===!0&&I.side===Qn&&I.forceSinglePass===!1?(I.side=Zt,I.needsUpdate=!0,b.renderBufferDirect(B,U,k,I,v,ie),I.side=Ai,I.needsUpdate=!0,b.renderBufferDirect(B,U,k,I,v,ie),I.side=Qn):b.renderBufferDirect(B,U,k,I,v,ie),v.onAfterRender(b,U,B,k,I,ie)}function Ls(v,U,B){U.isScene!==!0&&(U=Ct);const k=ye.get(v),I=y.state.lights,ie=y.state.shadowsArray,ue=I.state.version,me=V.getParameters(v,I.state,ie,U,B),he=V.getProgramCacheKey(me);let Ce=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?g:A).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Ie),Ce=new Map,k.programs=Ce);let Pe=Ce.get(he);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===ue)return Ac(v,me),Pe}else me.uniforms=V.getUniforms(v),v.onBeforeCompile(me,b),Pe=V.acquireProgram(me,he),Ce.set(he,Pe),k.uniforms=me.uniforms;const Me=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=ge.uniform),Ac(v,me),k.needsLights=Jd(v),k.lightsStateVersion=ue,k.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function Tc(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Ta.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Ac(v,U){const B=ye.get(v);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Kd(v,U,B,k,I){U.isScene!==!0&&(U=Ct),Ne.resetTextureUnits();const ie=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,me=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Gr,he=(k.isMeshStandardMaterial?g:A).get(k.envMap||ue),Ce=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let mt=yi;k.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(mt=b.toneMapping);const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=xt!==void 0?xt.length:0,Ae=ye.get(k),ht=y.state.lights;if(Z===!0&&(de===!0||v!==O)){const Ot=v===O&&k.id===P;ge.setState(k,v,Ot)}let $e=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ht.state.version||Ae.outputColorSpace!==me||I.isBatchedMesh&&Ae.batching===!1||!I.isBatchedMesh&&Ae.batching===!0||I.isBatchedMesh&&Ae.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ae.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ae.instancing===!1||!I.isInstancedMesh&&Ae.instancing===!0||I.isSkinnedMesh&&Ae.skinning===!1||!I.isSkinnedMesh&&Ae.skinning===!0||I.isInstancedMesh&&Ae.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ae.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ae.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ae.instancingMorph===!1&&I.morphTexture!==null||Ae.envMap!==he||k.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ge.numPlanes||Ae.numIntersection!==ge.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Pe||Ae.morphTargets!==Me||Ae.morphNormals!==Ye||Ae.morphColors!==rt||Ae.toneMapping!==mt||Ae.morphTargetsCount!==at)&&($e=!0):($e=!0,Ae.__version=k.version);let Qt=Ae.currentProgram;$e===!0&&(Qt=Ls(k,U,I));let or=!1,en=!1,jr=!1;const pt=Qt.getUniforms(),Ht=Ae.uniforms;if(_e.useProgram(Qt.program)&&(or=!0,en=!0,jr=!0),k.id!==P&&(P=k.id,en=!0),or||O!==v){_e.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",v.projectionMatrix),pt.setValue(R,"viewMatrix",v.matrixWorldInverse);const Wt=pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(R,be.setFromMatrixPosition(v.matrixWorld)),lt.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),O!==v&&(O=v,en=!0,jr=!0)}if(I.isSkinnedMesh){pt.setOptional(R,I,"bindMatrix"),pt.setOptional(R,I,"bindMatrixInverse");const Ot=I.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),pt.setValue(R,"boneTexture",Ot.boneTexture,Ne))}I.isBatchedMesh&&(pt.setOptional(R,I,"batchingTexture"),pt.setValue(R,"batchingTexture",I._matricesTexture,Ne),pt.setOptional(R,I,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",I._indirectTexture,Ne),pt.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",I._colorsTexture,Ne));const cn=B.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Re.update(I,B,Qt),(en||Ae.receiveShadow!==I.receiveShadow)&&(Ae.receiveShadow=I.receiveShadow,pt.setValue(R,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ht.envMap.value=he,Ht.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=mb()),en&&(pt.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&$d(Ht,jr),ie&&k.fog===!0&&Se.refreshFogUniforms(Ht,ie),Se.refreshMaterialUniforms(Ht,k,ne,te,y.state.transmissionRenderTarget[v.id]),Ta.upload(R,Tc(Ae),Ht,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ta.upload(R,Tc(Ae),Ht,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(R,"center",I.center),pt.setValue(R,"modelViewMatrix",I.modelViewMatrix),pt.setValue(R,"normalMatrix",I.normalMatrix),pt.setValue(R,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ot=k.uniformsGroups;for(let Wt=0,to=Ot.length;Wt<to;Wt++){const Pi=Ot[Wt];ce.update(Pi,Qt),ce.bind(Pi,Qt)}}return Qt}function $d(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Jd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(v,U,B){const k=ye.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ye.get(v.texture).__webglTexture=U,ye.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const B=ye.get(v);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Qd=R.createFramebuffer();this.setRenderTarget=function(v,U=0,B=0){S=v,L=U,M=B;let k=!0,I=null,ie=!1,ue=!1;if(v){const he=ye.get(v);if(he.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(he.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(he.__hasExternalTextures)Ne.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Me=v.depthTexture;if(he.__boundDepthTexture!==Me){if(Me!==null&&ye.has(Me)&&(v.width!==Me.image.width||v.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);const Pe=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?I=Pe[U][B]:I=Pe[U],ie=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?I=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[B]:I=Pe,z.copy(v.viewport),Y.copy(v.scissor),W=v.scissorTest}else z.copy(xe).multiplyScalar(ne).floor(),Y.copy(De).multiplyScalar(ne).floor(),W=ze;if(B!==0&&(I=Qd),_e.bindFramebuffer(R.FRAMEBUFFER,I)&&k&&_e.drawBuffers(v,I),_e.viewport(z),_e.scissor(Y),_e.setScissorTest(W),ie){const he=ye.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,B)}else if(ue){const he=U;for(let Ce=0;Ce<v.textures.length;Ce++){const Pe=ye.get(v.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,B,he)}}else if(v!==null&&B!==0){const he=ye.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,he.__webglTexture,B)}P=-1},this.readRenderTargetPixels=function(v,U,B,k,I,ie,ue,me=0){if(!(v&&v.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he){_e.bindFramebuffer(R.FRAMEBUFFER,he);try{const Ce=v.textures[me],Pe=Ce.format,Me=Ce.type;if(!lt.textureFormatReadable(Pe)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Me)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&B>=0&&B<=v.height-I&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,B,k,I,Le.convert(Pe),Le.convert(Me),ie))}finally{const Ce=S!==null?ye.get(S).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,U,B,k,I,ie,ue,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he)if(U>=0&&U<=v.width-k&&B>=0&&B<=v.height-I){_e.bindFramebuffer(R.FRAMEBUFFER,he);const Ce=v.textures[me],Pe=Ce.format,Me=Ce.type;if(!lt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.bufferData(R.PIXEL_PACK_BUFFER,ie.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,B,k,I,Le.convert(Pe),Le.convert(Me),0);const rt=S!==null?ye.get(S).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,rt);const mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await A0(R,mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ie),R.deleteBuffer(Ye),R.deleteSync(mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,B=0){const k=Math.pow(2,-B),I=Math.floor(v.image.width*k),ie=Math.floor(v.image.height*k),ue=U!==null?U.x:0,me=U!==null?U.y:0;Ne.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ue,me,I,ie),_e.unbindTexture()};const eh=R.createFramebuffer(),th=R.createFramebuffer();this.copyTextureToTexture=function(v,U,B=null,k=null,I=0,ie=null){ie===null&&(I!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=I,I=0):ie=0);let ue,me,he,Ce,Pe,Me,Ye,rt,mt;const xt=v.isCompressedTexture?v.mipmaps[ie]:v.image;if(B!==null)ue=B.max.x-B.min.x,me=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Pe=B.min.y,Me=B.isBox3?B.min.z:0;else{const cn=Math.pow(2,-I);ue=Math.floor(xt.width*cn),me=Math.floor(xt.height*cn),v.isDataArrayTexture?he=xt.depth:v.isData3DTexture?he=Math.floor(xt.depth*cn):he=1,Ce=0,Pe=0,Me=0}k!==null?(Ye=k.x,rt=k.y,mt=k.z):(Ye=0,rt=0,mt=0);const at=Le.convert(U.format),Ae=Le.convert(U.type);let ht;U.isData3DTexture?(Ne.setTexture3D(U,0),ht=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),ht=R.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),ht=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=R.getParameter(R.UNPACK_ROW_LENGTH),Qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),or=R.getParameter(R.UNPACK_SKIP_PIXELS),en=R.getParameter(R.UNPACK_SKIP_ROWS),jr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me);const pt=v.isDataArrayTexture||v.isData3DTexture,Ht=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const cn=ye.get(v),Ot=ye.get(U),Wt=ye.get(cn.__renderTarget),to=ye.get(Ot.__renderTarget);_e.bindFramebuffer(R.READ_FRAMEBUFFER,Wt.__webglFramebuffer),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,to.__webglFramebuffer);for(let Pi=0;Pi<he;Pi++)pt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,I,Me+Pi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ie,mt+Pi)),R.blitFramebuffer(Ce,Pe,ue,me,Ye,rt,ue,me,R.DEPTH_BUFFER_BIT,R.NEAREST);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||ye.has(v)){const cn=ye.get(v),Ot=ye.get(U);_e.bindFramebuffer(R.READ_FRAMEBUFFER,eh),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,th);for(let Wt=0;Wt<he;Wt++)pt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,cn.__webglTexture,I,Me+Wt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,cn.__webglTexture,I),Ht?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,ie,mt+Wt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,ie),I!==0?R.blitFramebuffer(Ce,Pe,ue,me,Ye,rt,ue,me,R.COLOR_BUFFER_BIT,R.NEAREST):Ht?R.copyTexSubImage3D(ht,ie,Ye,rt,mt+Wt,Ce,Pe,ue,me):R.copyTexSubImage2D(ht,ie,Ye,rt,Ce,Pe,ue,me);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ht?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(ht,ie,Ye,rt,mt,ue,me,he,at,Ae,xt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(ht,ie,Ye,rt,mt,ue,me,he,at,xt.data):R.texSubImage3D(ht,ie,Ye,rt,mt,ue,me,he,at,Ae,xt):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ie,Ye,rt,ue,me,at,Ae,xt.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ie,Ye,rt,xt.width,xt.height,at,xt.data):R.texSubImage2D(R.TEXTURE_2D,ie,Ye,rt,ue,me,at,Ae,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,or),R.pixelStorei(R.UNPACK_SKIP_ROWS,en),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jr),ie===0&&U.generateMipmaps&&R.generateMipmap(ht),_e.unbindTexture()},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),_e.unbindTexture()},this.resetState=function(){L=0,M=0,S=null,_e.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const zo={type:"change"},gc={type:"start"},vc={type:"end"},Xu=1e-6,et={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},ca=new Oe,_i=new Oe,_b=new N,ua=new N,ko=new N,Er=new Xr,qu=new N,fa=new N,Vo=new N,da=new N;class gb extends Rx{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.target=new N,this.state=et.NONE,this.keyState=et.NONE,this._lastPosition=new N,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new N,this._movePrev=new Oe,this._moveCurr=new Oe,this._lastAxis=new N,this._zoomStart=new Oe,this._zoomEnd=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._pointers=[],this._pointerPositions={},this._onPointerMove=Sb.bind(this),this._onPointerDown=vb.bind(this),this._onPointerUp=bb.bind(this),this._onPointerCancel=Mb.bind(this),this._onContextMenu=Rb.bind(this),this._onMouseWheel=Cb.bind(this),this._onKeyDown=Eb.bind(this),this._onKeyUp=yb.bind(this),this._onTouchStart=Pb.bind(this),this._onTouchMove=Db.bind(this),this._onTouchEnd=Lb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._onMouseUp=wb.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Xu&&(this.dispatchEvent(zo),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Xu||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(zo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=et.NONE,this.keyState=et.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(zo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(_i.copy(this._panEnd).sub(this._panStart),_i.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;_i.x*=e,_i.y*=t}_i.multiplyScalar(this._eye.length()*this.panSpeed),ua.copy(this._eye).cross(this.object.up).setLength(_i.x),ua.add(_b.copy(this.object.up).setLength(_i.y)),this.object.position.add(ua),this.target.add(ua),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(_i.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){da.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=da.length();e?(this._eye.copy(this.object.position).sub(this.target),qu.copy(this._eye).normalize(),fa.copy(this.object.up).normalize(),Vo.crossVectors(fa,qu).normalize(),fa.setLength(this._moveCurr.y-this._movePrev.y),Vo.setLength(this._moveCurr.x-this._movePrev.x),da.copy(fa.add(Vo)),ko.crossVectors(da,this._eye).normalize(),e*=this.rotateSpeed,Er.setFromAxisAngle(ko,e),this._eye.applyQuaternion(Er),this.object.up.applyQuaternion(Er),this._lastAxis.copy(ko),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Er.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Er),this.object.up.applyQuaternion(Er)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===et.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Wl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Wl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return ca.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),ca}_getMouseOnCircle(e,t){return ca.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),ca}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function vb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n))}function Sb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function bb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchEnd(n):this._onMouseUp(),this._removePointer(n),this._pointers.length===0&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function Mb(n){this._removePointer(n)}function yb(){this.enabled!==!1&&(this.keyState=et.NONE,window.addEventListener("keydown",this._onKeyDown))}function Eb(n){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===et.NONE&&(n.code===this.keys[et.ROTATE]&&!this.noRotate?this.keyState=et.ROTATE:n.code===this.keys[et.ZOOM]&&!this.noZoom?this.keyState=et.ZOOM:n.code===this.keys[et.PAN]&&!this.noPan&&(this.keyState=et.PAN)))}function Tb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:this.state=et.ZOOM;break;case Pr.ROTATE:this.state=et.ROTATE;break;case Pr.PAN:this.state=et.PAN;break;default:this.state=et.NONE}const t=this.keyState!==et.NONE?this.keyState:this.state;t===et.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr)):t===et.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._zoomEnd.copy(this._zoomStart)):t===et.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(gc)}function Ab(n){const e=this.keyState!==et.NONE?this.keyState:this.state;e===et.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY))):e===et.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY)):e===et.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY))}function wb(){this.state=et.NONE,this.dispatchEvent(vc)}function Cb(n){if(this.enabled!==!1&&this.noZoom!==!0){switch(n.preventDefault(),n.deltaMode){case 2:this._zoomStart.y-=n.deltaY*.025;break;case 1:this._zoomStart.y-=n.deltaY*.01;break;default:this._zoomStart.y-=n.deltaY*25e-5;break}this.dispatchEvent(gc),this.dispatchEvent(vc)}}function Rb(n){this.enabled!==!1&&n.preventDefault()}function Pb(n){if(this._trackPointer(n),this._pointers.length===1)this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);else{this.state=et.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,r=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,r)),this._panEnd.copy(this._panStart)}this.dispatchEvent(gc)}function Db(n){if(this._trackPointer(n),this._pointers.length===1)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY));else{const e=this._getSecondPointerPosition(n),t=n.pageX-e.x,i=n.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+i*i);const r=(n.pageX+e.x)/2,s=(n.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(r,s))}}function Lb(n){switch(this._pointers.length){case 0:this.state=et.NONE;break;case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=et.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==n.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(vc)}const Ub={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ib=new Bd(-1,1,1,-1,0,1);class Nb extends Jt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}}const Fb=new Nb;class Ob{constructor(e){this._mesh=new Sn(Fb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wd extends Qa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Za.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ob(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Oa extends Qa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Xd extends Qa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Bb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Oe);this._width=i.width,this._height=i.height,t=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wd(Ub),this.copyPass.material.blending=zn,this.clock=new Ex}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(a instanceof Oa?i=!0:a instanceof Xd&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yu extends Qa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const zb={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

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

		}`};oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yt.line={uniforms:Za.merge([oe.common,oe.fog,oe.line]),vertexShader:`
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
		`};class qd extends ln{constructor(e){super({type:"LineMaterial",uniforms:Za.clone(Yt.line.uniforms),vertexShader:Yt.line.vertexShader,fragmentShader:Yt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ju=new Ci,ha=new N;class Yl extends Mx{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new yt(e,3)),this.setAttribute("uv",new yt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Xl(t,6,1);return this.setAttribute("instanceStart",new Si(i,3,0)),this.setAttribute("instanceEnd",new Si(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Xl(t,6,1);return this.setAttribute("instanceColorStart",new Si(i,3,0)),this.setAttribute("instanceColorEnd",new Si(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new vx(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ju.setFromBufferAttribute(t),this.boundingBox.union(ju))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ha.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ha)),ha.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ha));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Go=new ot,Zu=new N,Ku=new N,Rt=new ot,Pt=new ot,Un=new ot,Ho=new N,Wo=new vt,Lt=new wx,$u=new N,pa=new Ci,ma=new qr,In=new ot;let Nn,Zi;function Ju(n,e,t){return In.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),In.multiplyScalar(1/In.w),In.x=Zi/t.width,In.y=Zi/t.height,In.applyMatrix4(n.projectionMatrixInverse),In.multiplyScalar(1/In.w),Math.abs(Math.max(In.x,In.y))}function kb(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,l=a;o<l;o++){Lt.start.fromBufferAttribute(r,o),Lt.end.fromBufferAttribute(s,o),Lt.applyMatrix4(t);const c=new N,u=new N;Nn.distanceSqToSegment(Lt.start,Lt.end,u,c),u.distanceTo(c)<Zi*.5&&e.push({point:u,pointOnLine:c,distance:Nn.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Vb(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),f=-e.near;Nn.at(1,Un),Un.w=1,Un.applyMatrix4(e.matrixWorldInverse),Un.applyMatrix4(i),Un.multiplyScalar(1/Un.w),Un.x*=s.x/2,Un.y*=s.y/2,Un.z=0,Ho.copy(Un),Wo.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=u;d<m;d++){if(Rt.fromBufferAttribute(l,d),Pt.fromBufferAttribute(c,d),Rt.w=1,Pt.w=1,Rt.applyMatrix4(Wo),Pt.applyMatrix4(Wo),Rt.z>f&&Pt.z>f)continue;if(Rt.z>f){const y=Rt.z-Pt.z,T=(Rt.z-f)/y;Rt.lerp(Pt,T)}else if(Pt.z>f){const y=Pt.z-Rt.z,T=(Pt.z-f)/y;Pt.lerp(Rt,T)}Rt.applyMatrix4(i),Pt.applyMatrix4(i),Rt.multiplyScalar(1/Rt.w),Pt.multiplyScalar(1/Pt.w),Rt.x*=s.x/2,Rt.y*=s.y/2,Pt.x*=s.x/2,Pt.y*=s.y/2,Lt.start.copy(Rt),Lt.start.z=0,Lt.end.copy(Pt),Lt.end.z=0;const _=Lt.closestPointToPointParameter(Ho,!0);Lt.at(_,$u);const p=Wl.lerp(Rt.z,Pt.z,_),h=p>=-1&&p<=1,E=Ho.distanceTo($u)<Zi*.5;if(h&&E){Lt.start.fromBufferAttribute(l,d),Lt.end.fromBufferAttribute(c,d),Lt.start.applyMatrix4(a),Lt.end.applyMatrix4(a);const y=new N,T=new N;Nn.distanceSqToSegment(Lt.start,Lt.end,T,y),t.push({point:T,pointOnLine:y,distance:Nn.origin.distanceTo(T),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class Gb extends Sn{constructor(e=new Yl,t=new qd({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Zu.fromBufferAttribute(t,a),Ku.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Zu.distanceTo(Ku);const s=new Xl(r,2,1);return e.setAttribute("instanceDistanceStart",new Si(s,1,0)),e.setAttribute("instanceDistanceEnd",new Si(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Nn=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Zi=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ma.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=Zi*.5;else{const f=Math.max(r.near,ma.distanceToPoint(Nn.origin));c=Ju(r,f,l.resolution)}if(ma.radius+=c,Nn.intersectsSphere(ma)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),pa.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=Zi*.5;else{const f=Math.max(r.near,pa.distanceToPoint(Nn.origin));u=Ju(r,f,l.resolution)}pa.expandByScalar(u),Nn.intersectsBox(pa)!==!1&&(i?kb(this,t):Vb(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Go),this.material.uniforms.resolution.value.set(Go.z,Go.w))}}function Qu(n){return um(vs(n[1].re,n[1].im,n[0].re,n[0].im),vs(n[3].re,n[3].im,n[2].re,n[2].im))}function Ba(n){const e=n.r*n.r+n.i*n.i,t=n.j*n.j+n.k*n.k,i=e+t+2*Math.sqrt(t)+1;return rr(n.r*2/i,-n.i*2/i,(e+t-1)/i)}function ef(n){const e=Ji(n),t=e+1;return rr(n.re*2/t,-n.im*2/t,(e-1)/t)}function Hb(n,e){const t=(tl(n)-tl(e))/2,i=tt(n.r,n.i),r=tt(n.r-e.r,n.i-e.i),s=Ji(r),a=ad(r,i),o=(t-a)/s,l=mn(Rr(r,o),i),c=Math.sqrt((n.r-l.re)**2+(n.i-l.im)**2+n.j**2+n.k**2),u=Rr(r,c/ic(r)),f=mn(l,u),d=Hi(l,u);return[f,d]}function tf(n,e){n.push(e.x,e.y,e.z)}function nf(n,e){n.push(e.x,e.y,e.z,e.x,e.y,e.z)}function Wb(n,e,t,i){const r=Ba(n),s=Ba(e),[a,o]=Hb(n,e),l=ef(a),c=ef(o),u=oo(l,c),f=Sa(u),d=Sa(l)+Sa(c),m=isNaN(f)||f<1e-10*d;if(tf(i,r),m){const x=el(Os(s,r),1/(t-1));let _=r;for(let p=1;p<t-1;p++)_=oo(_,x),nf(i,_)}else{const x=el(u,(1+ud(l,c)/f)/2),_=fm(Hc(Os(r,x)),Hc(Os(s,x)),1/(t-1));let p=Os(r,x);for(let h=1;h<t-1;h++)p=dm(p,_),nf(i,oo(p,x))}tf(i,s)}class Xb{mesh;geometry;material;generators=[];depth=0;minSize=.015;constructor(e,t){this.material=new qd({vertexColors:!0,linewidth:2,resolution:new Oe(e,t),worldUnits:!1}),this.material.onBeforeCompile=i=>{const r=i.fragmentShader.indexOf("#include <premultiplied_alpha_fragment>"),s=i.fragmentShader.slice(0,r),a=i.fragmentShader.slice(r);i.fragmentShader=`
        uniform vec3 fadeColor;
        uniform float fadeNear;
        uniform float fadeFar;
        uniform float fadeStrength;
      `+s+`
          float blend = (gl_FragCoord.z / gl_FragCoord.w - fadeNear)/(fadeFar - fadeNear) * fadeStrength;
          gl_FragColor = mix(gl_FragColor, vec4(fadeColor, alpha), blend);
      `+a},Object.assign(this.material.uniforms,{fadeColor:{value:[0,0,0]},fadeNear:{value:0},fadeFar:{value:0},fadeStrength:{value:0}}),this.geometry=new Yl,this.mesh=new Gb(this.geometry,this.material)}setUniforms(e){for(const[t,i]of Object.entries(e))this.material.uniforms[t].value=i}setGeometry(e,t,i,r=Qo()){this.generators=e.flatMap((o,l)=>{const[c,u]=t[l];return[{matrix:o,color:[c.r,c.g,c.b]},{matrix:im(o),color:[u.r,u.g,u.b]}]}),this.depth=i;const s={lineColors:[],lines:[]},a=Qu(r);this.#t(0,1,void 0,a,r,Ba(a),s),this.geometry.dispose(),this.geometry=new Yl,this.geometry.setPositions(s.lines),this.geometry.setColors(s.lineColors),this.mesh.geometry=this.geometry}#t(e,t,i,r,s,a,o){if(!(e>=this.depth||t<this.minSize)&&!(e>0&&sm(s,1e-4)))for(let l=0;l<this.generators.length;l++){if((l^1)===i)continue;const c=this.generators[l],u=em(s,c.matrix),f=Qu(u),d=Ba(f),m=om(a,d),x=Math.floor(Math.min(Math.max(m*100,2),10)),[_,p,h]=c.color;for(let E=0;E<x*2-2;E++)o.lineColors.push(_,p,h);Wb(r,f,x,o.lines),this.#t(e+1,m,l,f,u,d,o)}}dispose(){this.geometry.dispose(),this.material.dispose()}}const qb=`
    uniform float offset;
    void main() {
      vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );
      gl_Position = projectionMatrix * pos;
    }
  `,Yb=`
    uniform vec4 color;
    void main() {
      gl_FragColor = color;
    }
  `;var jb=ci('<canvas class="tree-canvas"></canvas>');function Zb(n,e){tr(e,!0);let t=$n(()=>e.rawColors.map(l=>l.map(c=>new Ze(c)))),i=window.devicePixelRatio,r,s=ft(void 0),a=ft(void 0);an(()=>{ee(s)&&!e.animateIso&&ee(s).updateTree(e.gens,ee(t),e.depth)}),an(()=>{!ee(s)||!ee(a)||(ee(s).tree.setUniforms({fadeColor:new Ze(bs().ui.background).toArray(),fadeNear:ee(a).length()-1,fadeFar:ee(a).length()+1,fadeStrength:.7}),ee(s).markDirty())}),an(()=>{if(!ee(s))return;const l=bs();ee(s).renderer.setClearColor(l.ui.background);const[c,u,f]=l.canvas.axisColors.map(m=>new Ze(m));ee(s).axis.setColors(c,u,f);const d=new Ze(l.canvas.foreground);ee(s).matShader.uniforms.color.value=[d.r,d.g,d.b,1],ee(s).markDirty()}),sd(()=>{let l=!0;const c=()=>l=!0,u=new xb({antialias:!0,canvas:r});u.setSize(e.width,e.height,!1),u.setPixelRatio(i),u.autoClear=!1;const f=new na,d=new na,m=new na,x=new na,_=new pn(45,e.width/e.height,.1,1e3);_.position.set(0,3,0),_.up.set(1,0,0);const p=new gb(_,u.domElement);p.noPan=!0,p.rotateSpeed=2;const h=new Cx(1);f.add(h);const E=new _c(1,128,64),y=new xc({color:0}),T=new Sn(E,y);d.add(T),m.add(T.clone());const C=new ln({uniforms:{offset:{value:.01},color:{value:new ot(0,0,0,1)}},vertexShader:qb,fragmentShader:Yb});x.add(new Sn(E,C));const b=new Yu(f,_),w=new Yu(x,_);w.clear=!1;const L=new Oa(d,_),M=new Oa(m,_);L.inverse=!0;const S=new Xd,P=new Wd(zb);P.renderToScreen=!0;const O=u.getPixelRatio();P.material.uniforms.resolution.value.x=1/(e.width*O),P.material.uniforms.resolution.value.y=1/(e.height*O);const z=new Bb(u);z.renderTarget1.stencilBuffer=!0,z.renderTarget2.stencilBuffer=!0,z.addPass(b),z.addPass(M),z.addPass(L),z.addPass(w),z.addPass(S),z.addPass(P);const Y=new Xb(e.width,e.height);f.add(Y.mesh);const W=(ne,ve,Ge,xe)=>{Y.setGeometry(ne,ve,Ge,xe),c()};p.addEventListener("change",c);let q=0,$,G=requestAnimationFrame(te);function te(ne){G=requestAnimationFrame(te),p.update(),(!ee(a)||!ee(a).equals(_.position))&&Qe(a,_.position.clone()),e.animateIso?(q=$===void 0?0:(q+(ne-$)/4e3)%1,$=ne,W(e.gens,ee(t),e.depth,rm(e.animateIso,q)),l=!0):$=void 0,l&&(C.uniforms.offset.value=.003*_.position.length(),z.render(),l=!!e.animateIso)}return Qe(s,{renderer:u,axis:h,matShader:C,tree:Y,markDirty:c,updateTree:W},!0),()=>{cancelAnimationFrame(G),p.removeEventListener("change",c),Y.dispose(),E.dispose(),y.dispose(),C.dispose();for(const ne of z.passes)ne.dispose();u.dispose()}});var o=jb();rd(o,l=>r=l,()=>r),rs(()=>{$f(o,`width: 100%; max-width: ${e.width}px; max-height: ${e.height}px`),Br(o,"width",e.width*i),Br(o,"height",e.height*i)}),ei(n,o),nr()}const za=[{m:"a",show:"showa"},{m:"b",show:"showb"}],Yd=1,jd=20,Kb=10;function $b(n){if(!n)return;const e=n.split(" ").map(Number);if(!(e.length!==8||!e.every(Number.isFinite)))return Array.from({length:4},(t,i)=>({re:e[2*i],im:e[2*i+1]}))}function Jb(){const n=new URLSearchParams(window.location.search),e=Number(n.get("d")),t=[Qo(),Qo()],i=[!1,!1];for(let r=0;r<2;r++){const s=$b(n.get(za[r].m));s&&(t[r]=s,i[r]=n.get(za[r].show)==="1")}return{depth:Number.isInteger(e)&&e>=Yd&&e<=jd?e:Kb,matrices:t,showIso:i}}function Qb(n){const e=new URLSearchParams;e.append("d",n.depth.toString());for(let i=0;i<2;i++)n.showIso[i]&&(e.append(za[i].m,n.matrices[i].flatMap(r=>[r.re,r.im]).join(" ")),e.append(za[i].show,"1"));const t=new URL(window.location.href);return`${t.origin}${t.pathname}?${e}`}var eM=ci('<div class="sidebar-row svelte-1n46o8q"><input type="checkbox" class="svelte-1n46o8q"/> <!></div>'),tM=ci("<option> </option>"),nM=ci("<button> </button>"),iM=ci('<main class="svelte-1n46o8q"><div class="render-container svelte-1n46o8q"><!></div> <div class="sidebar svelte-1n46o8q"><div class="sidebar-row svelte-1n46o8q">Depth<!></div> <!> <div class="sidebar-row svelte-1n46o8q"><div class="row-center svelte-1n46o8q"><!></div></div> <div class="sidebar-row svelte-1n46o8q"><button> </button></div> <div class="sidebar-row svelte-1n46o8q">Theme <select></select></div> <div class="sidebar-row svelte-1n46o8q"></div></div> <a href="https://github.com/ariymarkowitz/H3-Visualiser" class="github svelte-1n46o8q" draggable="false" target="_blank" rel="noopener noreferrer"><img alt="Link to GitHub" width="40" height="40" draggable="false"/></a></main>');function rM(n,e){tr(e,!0);let t=ft(kt(Ss[0].name));an(()=>ym(ee(t)));const i=Jb();let r=ft(kt(i.depth)),s=kt(i.matrices),a=kt(i.showIso),o=$n(()=>[0,1].filter(xe=>a[xe]&&!nm(s[xe]))),l=$n(()=>ee(o).map(xe=>s[xe])),c=$n(()=>ee(o).map(xe=>bs().canvas.isometryColors[xe])),u=ft(void 0),f=$n(()=>{if(ee(u))return s[ee(u).id][ee(u).elt]});function d(xe){ee(u)&&(s[ee(u).id][ee(u).elt]=xe)}let m=$n(()=>Qb({depth:ee(r),matrices:s,showIso:a})),x=ft(void 0),_=$n(()=>ee(x)===ee(m));function p(){const xe=ee(m);navigator.clipboard.writeText(xe).then(()=>Qe(x,xe,!0))}let h=ft(void 0),E=$n(()=>ee(h)===void 0?void 0:s[ee(h)]);function y(xe){Qe(h,ee(h)===xe?void 0:xe,!0)}function T(xe,De){const ze=am(s[xe],De);ze&&(s[xe][De]=ze)}var C=iM(),b=Dt(C),w=Dt(b);Zb(w,{get animateIso(){return ee(E)},width:800,height:800,get gens(){return ee(l)},get rawColors(){return ee(c)},get depth(){return ee(r)}});var L=Xt(b,2),M=Dt(L),S=Xt(Dt(M));Fm(S,{get min(){return Yd},get max(){return jd},get value(){return ee(r)},set value(xe){Qe(r,xe,!0)}});var P=Xt(M,2);va(P,16,()=>[0,1],ga,(xe,De)=>{var ze=eM(),H=Dt(ze),Z=Xt(H),de=Xt(Z);vm(de,{onfocus:Ee=>Qe(u,{id:De,elt:Ee},!0),onkeydown:Ee=>{Ee.key==="d"&&T(De,Ee.index)},get value(){return s[De]},set value(Ee){s[De]=Ee}}),rs(()=>{Br(H,"name",`isometry${De+1}`),Is(Z,`Isometry ${De+1} `)}),Yp(H,()=>a[De],Ee=>a[De]=Ee),ei(xe,ze)});var O=Xt(P,2),z=Dt(O),Y=Dt(z);Im(Y,{get value(){return ee(f)},onchange:d});var W=Xt(O,2),q=Dt(W),$=Dt(q),G=Xt(W,2),te=Xt(Dt(G));va(te,21,()=>Ss,ga,(xe,De)=>{var ze=tM(),H=Dt(ze),Z={};rs(()=>{Is(H,ee(De).name),Z!==(Z=ee(De).name)&&(ze.__value=ee(De).name)}),ei(xe,ze)});var ne=Xt(G,2);va(ne,20,()=>[0,1],ga,(xe,De)=>{var ze=nM(),H=Dt(ze);rs(()=>Is(H,ee(h)===De?"Stop animation":`Animate! (${De+1})`)),ji("click",ze,()=>y(De)),ei(xe,ze)});var ve=Xt(L,2),Ge=Dt(ve);rs(xe=>{q.disabled=ee(_),Is($,ee(_)?"URL reference copied":"Copy URL reference"),Br(Ge,"src",xe)},[()=>bs().ui.githubImage]),ji("click",q,p),Vp(te,()=>ee(t),xe=>Qe(t,xe)),ei(n,C),nr()}Ya(["click"]);Rp(rM,{target:document.getElementById("app")});

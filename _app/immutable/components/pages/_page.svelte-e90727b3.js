var Fl=Object.defineProperty;var Ul=(i,e,t)=>e in i?Fl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ln=(i,e,t)=>(Ul(i,typeof e!="symbol"?e+"":e,t),t);import{S as ri,i as si,s as ai,k as Oe,l as Be,m as We,h as Pe,n as ye,b as Tn,J as be,L as Rt,B as Mt,D as kr,M as Gr,K as Ai,N as Yi,o as Qs,C as $s,O as _t,P as Nr,Q as $o,R as ha,T as fa,U as Mn,w as Bt,a as ft,x as kt,c as dt,y as Gt,V as Sn,f as Lt,t as Dt,z as Vt,q as Wn,r as Xn,W as zl,X as da,Y as pa,Z as Ol,E as Bl,u as ma,_ as kl,$ as Gl}from"../../chunks/index-e2188b86.js";import{w as Ci,d as Vl}from"../../chunks/index-1d176bfa.js";import{_ as Hl}from"../../chunks/preload-helper-41c905a7.js";function Qe(i,e){return{re:i,im:e}}function yt(i,e){return Qe(i.re*e.re-i.im*e.im,i.re*e.im+i.im*e.re)}function Ht(i,e){return Qe(i.re+e.re,i.im+e.im)}function Wl(i,e){return Qe(i.re+e,i.im)}function Zi(i,e){return Qe(i.re-e.re,i.im-e.im)}function Os(i){return Qe(-i.re,-i.im)}function Ni(i){return Math.sqrt(i.re*i.re+i.im*i.im)}function wi(i){return i.re*i.re+i.im*i.im}function Xl(i,e){return i.re*e.re+i.im*e.im}function Zn(i,e){const t=wi(e);return Qe((i.re*e.re+i.im*e.im)/t,(e.re*i.im-e.im*i.re)/t)}function ga(i,e){return Qe(i.re*e,i.im*e)}function ql(i,e){return Qe(i.re/e,i.im/e)}function jl(i){const e=Ni(i);return Qe(i.re/e,i.im/e)}function Yl(i){return yt(i,i)}function _a(i){if(i.im===0&&i.re<=0)return Qe(0,Math.sqrt(-i.re));const e=Ni(i),t=Math.sqrt(e/((i.re+e)**2+i.im**2));return Qe((i.re+e)*t,i.im*t)}function xa(i,e=0){return Math.abs(i.re-1)<=e&&Math.abs(i.im)<=e}function va(i,e=0){return Math.abs(i.re)<=e&&Math.abs(i.im)<=e}function rr(i){return Qe(i.re,i.im)}function ya(i,e){const t=Ni(i),n=Math.atan2(i.im,i.re)*e,r=t**e;return Qe(r*Math.cos(n),r*Math.sin(n))}function Bs(i,e){return[Ht(yt(i[0],e[0]),yt(i[1],e[2])),Ht(yt(i[0],e[1]),yt(i[1],e[3])),Ht(yt(i[2],e[0]),yt(i[3],e[2])),Ht(yt(i[2],e[1]),yt(i[3],e[3]))]}function ea(i){return Zi(yt(i[0],i[3]),yt(i[1],i[2]))}function Zl(i){return Ht(i[0],i[3])}function Jl(i){return Ni(ea(i))<1e-10}function el(i){const e=ea(i);return[Zn(i[3],e),Zn(Os(i[1]),e),Zn(Os(i[2]),e),Zn(i[0],e)]}function Kl(){return[Qe(1,0),Qe(0,0),Qe(0,0),Qe(1,0)]}function Ql(i){return[rr(i[0]),rr(i[1]),rr(i[2]),rr(i[3])]}function $l(i){wi(Zl(i))-4*Ni(ea(i))<1e-8&&(i=Ql(i),i[3].re+=1e-4);const e=ql(Zi(i[0],i[3]),2),t=_a(Ht(Yl(e),yt(i[1],i[2])));wi(Ht(e,t))<wi(Zi(e,t))&&(t.re=-t.re,t.im=-t.im);const n=Zn(i[1],Ht(e,t)),r=Zn(i[2],Ht(e,t)),s=Zn(yt(i[1],i[2]),Ht(e,t)),o=Ht(i[0],s),a=Zi(i[3],s),c=_a(Wl(yt(n,r),1)),l=jl(c);return{U:[l,yt(l,n),yt(l,Os(r)),l],eig1:o,eig2:a}}function ec(i,e){const{U:t,eig1:n,eig2:r}=$l(i);return Bs(el(t),Bs(tc(ya(n,e),ya(r,e)),t))}function tc(i,e){return[i,Qe(0,0),Qe(0,0),e]}function vn(i,e){if(e!==void 0){if(typeof i!="number")throw new Error("Can't convert to complex number");return Qe(i,e)}else if(typeof i=="object"){if(Array.isArray(i))return Qe(i[0],i[1]);if("re"in i&&"im"in i)return i}else if(typeof i=="number")return Qe(i,0);throw new Error("Can't convert to complex number")}function nc(i,e=0){return xa(i[0],e)&&va(i[1],e)&&va(i[2],e)&&xa(i[3],e)}function An(i,e,t){return{x:i,y:e,z:t}}function ic(i,e){i.x+=e.x,i.y+=e.y,i.z+=e.z}function rc(i,e){return An(i.x+e.x,i.y+e.y,i.z+e.z)}function Kr(i,e){return An(i.x-e.x,i.y-e.y,i.z-e.z)}function sc(i,e){return An(i.x*e,i.y*e,i.z*e)}function ac(i,e){return i.x/=e,i.y/=e,i.z/=e,i}function Qr(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function oc(i){return i.x*i.x+i.y*i.y+i.z*i.z}function Ma(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return An(i.x/e,i.y/e,i.z/e)}function lc(i,e){return Math.sqrt((i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2)}function cc(i,e){return(i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2}function uc(i){return An(i.x,i.y,i.z)}function Sa(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function hc(i,e){return An(i.y*e.z-i.z*e.y,i.z*e.x-i.x*e.z,i.x*e.y-i.y*e.x)}function Li(i,e,t,n){return{r:i,i:e,j:t,k:n}}function fc(i,e,t,n,r){i.r=e,i.i=t,i.j=n,i.k=r}function ks(i){return i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k}function dc(i){return Math.sqrt(i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k)}function pc(i){mc(i,dc(i))}function mc(i,e){i.r/=e,i.i/=e,i.j/=e,i.k/=e}function gc(i,e){const t=ks(e);return Li((i.r*e.r+i.i*e.i+i.j*e.j+i.k*e.k)/t,(-i.r*e.i+i.i*e.r-i.j*e.k+i.k*e.j)/t,(-i.r*e.j+i.i*e.k+i.j*e.r-i.k*e.i)/t,(-i.r*e.k-i.i*e.j+i.j*e.i+i.k*e.r)/t)}function _c(i,e,t){if(Sa(i,e)===1)return Li(1,0,0,0);const r=hc(i,e),s=Li(Qr(i)*Qr(e)+Sa(i,e),r.x,r.y,r.z);pc(s);const o=Math.acos(s.r)*t,a=Qr(r),c=Math.sin(o)/a;return fc(s,Math.cos(o),r.x*c,r.y*c,r.z*c),s}function xc(i,e){const t=e.i*e.i,n=e.j*e.j,r=e.k*e.k,s=e.r*e.i,o=e.r*e.j,a=e.r*e.k,c=e.i*e.k,l=e.i*e.j,h=e.j*e.k;return An(i.x*(1-2*(n+r))+i.y*2*(l-a)+i.z*2*(c+o),i.x*2*(l+a)+i.y*(1-2*(t+r))+i.z*2*(h-s),i.x*2*(c-o)+i.y*2*(h+s)+i.z*(1-2*(t+n)))}function vc(i){let e,t,n,r;return{c(){e=Oe("div"),t=Oe("div"),this.h()},l(s){e=Be(s,"DIV",{class:!0});var o=We(e);t=Be(o,"DIV",{class:!0}),We(t).forEach(Pe),o.forEach(Pe),this.h()},h(){ye(t,"class","plane-input-point svelte-1ss91bd"),ye(e,"class","plane-input svelte-1ss91bd")},m(s,o){Tn(s,e,o),be(e,t),i[11](t),i[12](e),n||(r=[Rt(e,"mousedown",i[5]),Rt(e,"mousemove",i[6])],n=!0)},p:Mt,i:Mt,o:Mt,d(s){s&&Pe(e),i[11](null),i[12](null),n=!1,kr(r)}}}function yc(i,e,t){let n,r=Mt,s=()=>(r(),r=$s(p,z=>t(8,n=z)),p),o,a;i.$$.on_destroy.push(()=>r());const c=Gr();let l,h;function f(){return h?h.offsetWidth:100}function u(){return h?h.offsetHeight:100}let m=Ci({x:0,y:0});Ai(i,m,z=>t(10,a=z));let g=Ci({x:0,y:0});Ai(i,g,z=>t(9,o=z));const p={set(z,B=!1){B||Yi(m,a=z,a),Yi(g,o=z,o)},subscribe:m.subscribe,update(z,B=!1){m.update(I=>{const P=z(I);return B||Yi(g,o=P,o),P})}};s();let d,x;function b(z){if(d===void 0){requestAnimationFrame(b),d=z;return}const B=Math.exp(-(z-d)/100);m.update(({x:I,y:P})=>{const V={x:B*I+(1-B)*o.x,y:B*P+(1-B)*o.y};return Math.abs(V.x-o.x)<1e-4&&(V.x=o.x),Math.abs(V.y-o.y)<1e-4&&(V.y=o.y),c("change",V),V}),d=z}function y(z){return{x:(z.x/6+1/2)*f(),y:(z.y/6+1/2)*u()}}function _(z){return{x:6*(z.x/f()-1/2),y:6*(z.y/u()-1/2)}}let S=!1;function L(z){S=!0,v(z)}function A(){S=!1}function v(z){S&&p.set(_({x:z.offsetX,y:z.offsetY}),!0)}Qs(()=>(document.addEventListener("mouseup",A),()=>{document.removeEventListener("mouseup",A)}));function T(z){_t[z?"unshift":"push"](()=>{l=z,t(1,l),t(8,n)})}function D(z){_t[z?"unshift":"push"](()=>{h=z,t(2,h)})}return i.$$.update=()=>{if(i.$$.dirty&1664&&(a.x==o.x&&a.y==o.y?d=void 0:(cancelAnimationFrame(x),t(7,x=requestAnimationFrame(z=>b(z))))),i.$$.dirty&258&&l){const{x:z,y:B}=y(n);t(1,l.style.left=`${z-2}px`,l),t(1,l.style.top=`${B-2}px`,l)}},[p,l,h,m,g,L,v,x,n,o,a,T,D]}class Mc extends ri{constructor(e){super(),si(this,e,yc,vc,ai,{pos:0})}get pos(){return this.$$.ctx[0]}}function Sc(i,e){return ba(i,e),{update(t){ba(i,t)}}}function ba(i,e,t="--"){for(const n in e)try{i.style.setProperty(`${t}${n}`,e[n].toString())}catch{i.style.removeProperty(`${t}${n}`)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="149",$r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bc=0,wa=1,wc=2,tl=1,Ec=2,qi=3,Fn=0,Xt=1,Rn=2,Nn=0,Ei=1,Ea=2,Ta=3,Aa=4,Tc=5,Si=100,Ac=101,Cc=102,Ca=103,La=104,Lc=200,Dc=201,Pc=202,Rc=203,nl=204,il=205,Ic=206,Nc=207,Fc=208,Uc=209,zc=210,Oc=0,Bc=1,kc=2,Gs=3,Gc=4,Vc=5,Hc=6,Wc=7,rl=0,Xc=1,qc=2,wn=0,jc=1,Yc=2,Zc=3,Jc=4,Kc=5,sl=300,Di=301,Pi=302,Vs=303,Hs=304,Vr=306,Ws=1e3,nn=1001,Xs=1002,Tt=1003,Da=1004,es=1005,Jt=1006,Qc=1007,Qi=1008,ni=1009,$c=1010,eu=1011,al=1012,tu=1013,Jn=1014,Kn=1015,$i=1016,nu=1017,iu=1018,Ti=1020,ru=1021,rn=1023,su=1024,au=1025,$n=1026,Ri=1027,ou=1028,lu=1029,cu=1030,uu=1031,hu=1033,ts=33776,ns=33777,is=33778,rs=33779,Pa=35840,Ra=35841,Ia=35842,Na=35843,fu=36196,Fa=37492,Ua=37496,za=37808,Oa=37809,Ba=37810,ka=37811,Ga=37812,Va=37813,Ha=37814,Wa=37815,Xa=37816,qa=37817,ja=37818,Ya=37819,Za=37820,Ja=37821,ss=36492,du=36283,Ka=36284,Qa=36285,$a=36286,ii=3e3,Ke=3001,pu=3200,mu=3201,gu=0,_u=1,hn="srgb",er="srgb-linear",as=7680,xu=519,qs=35044,eo="300 es",js=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let to=1234567;const Ji=Math.PI/180,Fr=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function na(i,e){return(i%e+e)%e}function vu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function yu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ki(i,e,t){return(1-t)*i+t*e}function Mu(i,e,t,n){return Ki(i,e,1-Math.exp(-t*n))}function Su(i,e=1){return e-Math.abs(na(i,e*2)-e)}function bu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tu(i,e){return i+Math.random()*(e-i)}function Au(i){return i*(.5-Math.random())}function Cu(i){i!==void 0&&(to=i);let e=to+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lu(i){return i*Ji}function Du(i){return i*Fr}function Ys(i){return(i&i-1)===0&&i!==0}function Pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ru(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Iu=Object.freeze({__proto__:null,DEG2RAD:Ji,RAD2DEG:Fr,ceilPowerOfTwo:Pu,clamp:At,damp:Mu,degToRad:Lu,denormalize:bn,euclideanModulo:na,floorPowerOfTwo:Ur,generateUUID:En,inverseLerp:yu,isPowerOfTwo:Ys,lerp:Ki,mapLinear:vu,normalize:Ye,pingpong:Su,radToDeg:Du,randFloat:Tu,randFloatSpread:Au,randInt:Eu,seededRandom:Cu,setQuaternionFromProperEuler:Ru,smootherstep:wu,smoothstep:bu});class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],p=r[0],d=r[3],x=r[6],b=r[1],y=r[4],_=r[7],S=r[2],L=r[5],A=r[8];return s[0]=o*p+a*b+c*S,s[3]=o*d+a*y+c*L,s[6]=o*x+a*_+c*A,s[1]=l*p+h*b+f*S,s[4]=l*d+h*y+f*L,s[7]=l*x+h*_+f*A,s[2]=u*p+m*b+g*S,s[5]=u*d+m*y+g*L,s[8]=u*x+m*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,m=l*s-o*c,g=t*f+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*l-h*n)*p,e[2]=(a*n-r*o)*p,e[3]=u*p,e[4]=(h*t-r*c)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new Wt;function ol(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ls={[hn]:{[er]:ei},[er]:{[hn]:Rr}},bt={legacyMode:!0,get workingColorSpace(){return er},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ls[e]&&ls[e][t]!==void 0){const n=ls[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},$t={h:0,s:0,l:0},sr={h:0,s:0,l:0};function cs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ar(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=na(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=cs(o,s,e+1/3),this.g=cs(o,s,e),this.b=cs(o,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=hn){const n=ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return bt.fromWorkingColorSpace(ar(this,st),e),At(st.r*255,0,255)<<16^At(st.g*255,0,255)<<8^At(st.b*255,0,255)<<0}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(ar(this,st),t);const n=st.r,r=st.g,s=st.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(ar(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=hn){return bt.fromWorkingColorSpace(ar(this,st),e),e!==hn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(sr);const n=Ki($t.h,sr.h,t),r=Ki($t.s,sr.s,t),s=Ki($t.l,sr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=ll;let li;class cl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=zr("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ul{constructor(e=null){this.isSource=!0,this.uuid=En(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(us(r[o].image)):s.push(us(r[o]))}else s=us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;class qt extends oi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=nn,r=nn,s=Jt,o=Qi,a=rn,c=ni,l=qt.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=En(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=sl;qt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],g=c[9],p=c[2],d=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(m+1)/2,S=(x+1)/2,L=(h+u)/4,A=(f+p)/4,v=(g+d)/4;return y>_&&y>S?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=L/n,s=A/n):_>S?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=L/r,s=v/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=A/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(f-p)/b,this.z=(u-h)/b,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Un extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new qt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hl extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==u||l!==m||h!==g){let d=1-a;const x=c*u+l*m+h*g+f*p,b=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const S=Math.sqrt(y),L=Math.atan2(S,x*b);d=Math.sin(d*L)/S,a=Math.sin(a*L)/S}const _=a*b;if(c=c*d+u*_,l=l*d+m*_,h=h*d+g*_,f=f*d+p*_,d===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*m-l*u,e[t+1]=c*g+h*u+l*f-a*m,e[t+2]=l*g+h*m+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),f=a(s/2),u=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"YZX":this._x=u*h*f+l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f-u*m*g;break;case"XZY":this._x=u*h*f-l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,h=c*n+a*t-s*r,f=c*r+s*n-o*t,u=-s*t-o*n-a*r;return this.x=l*c+u*-s+h*-a-f*-o,this.y=h*c+u*-o+f*-s-l*-a,this.z=f*c+u*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new R,no=new Fi;class zn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],f=e[c+1],u=e[c+2];h<t&&(t=h),f<n&&(n=f),u<r&&(r=u),h>s&&(s=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),f=e.getY(c),u=e.getZ(c);h<t&&(t=h),f<n&&(n=f),u<r&&(r=u),h>s&&(s=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Gn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),or.subVectors(this.max,Bi),ci.subVectors(e.a,Bi),ui.subVectors(e.b,Bi),hi.subVectors(e.c,Bi),Cn.subVectors(ui,ci),Ln.subVectors(hi,ui),Vn.subVectors(ci,hi);let t=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Vn.y,Vn.x,0];return!ds(t,ci,ui,hi,or)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,ci,ui,hi,or))?!1:(lr.crossVectors(Cn,Ln),t=[lr.x,lr.y,lr.z],ds(t,ci,ui,hi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new R,new R,new R,new R,new R,new R,new R,new R],Gn=new R,fs=new zn,ci=new R,ui=new R,hi=new R,Cn=new R,Ln=new R,Vn=new R,Bi=new R,or=new R,lr=new R,Hn=new R;function ds(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Hn.fromArray(i,s);const a=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Uu=new zn,ki=new R,ps=new R;class Ui{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(ps)),this.expandByPoint(ki.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new R,ms=new R,cr=new R,Dn=new R,gs=new R,ur=new R,_s=new R;class fl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ms.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=Dn.dot(this.direction),c=-Dn.dot(cr),l=Dn.lengthSq(),h=Math.abs(1-o*o);let f,u,m,g;if(h>0)if(f=o*c-a,u=o*a-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const p=1/h;f*=p,u*=p,m=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(cr).multiplyScalar(u).add(ms),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){gs.subVectors(t,e),ur.subVectors(n,e),_s.crossVectors(gs,ur);let o=this.direction.dot(_s),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const c=a*this.direction.dot(ur.crossVectors(Dn,ur));if(c<0)return null;const l=a*this.direction.dot(gs.cross(Dn));if(l<0||c+l>o)return null;const h=-a*Dn.dot(_s);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,h,f,u,m,g,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=f,x[14]=u,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=u-p*l,t[9]=-a*c,t[2]=p-u*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,m=c*f,g=l*h,p=l*f;t[0]=u+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=p+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,m=c*f,g=l*h,p=l*f;t[0]=u-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=p-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+p,t[1]=c*f,t[5]=p*l+u,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=p-u*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+g,t[10]=u-p*f}else if(e.order==="XZY"){const u=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+p,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=p*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,Ou)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Pn.crossVectors(n,zt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Pn.crossVectors(n,zt)),Pn.normalize(),hr.crossVectors(zt,Pn),r[0]=Pn.x,r[4]=hr.x,r[8]=zt.x,r[1]=Pn.y,r[5]=hr.y,r[9]=zt.y,r[2]=Pn.z,r[6]=hr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],p=n[6],d=n[10],x=n[14],b=n[3],y=n[7],_=n[11],S=n[15],L=r[0],A=r[4],v=r[8],T=r[12],D=r[1],z=r[5],B=r[9],I=r[13],P=r[2],V=r[6],Q=r[10],te=r[14],O=r[3],$=r[7],Z=r[11],pe=r[15];return s[0]=o*L+a*D+c*P+l*O,s[4]=o*A+a*z+c*V+l*$,s[8]=o*v+a*B+c*Q+l*Z,s[12]=o*T+a*I+c*te+l*pe,s[1]=h*L+f*D+u*P+m*O,s[5]=h*A+f*z+u*V+m*$,s[9]=h*v+f*B+u*Q+m*Z,s[13]=h*T+f*I+u*te+m*pe,s[2]=g*L+p*D+d*P+x*O,s[6]=g*A+p*z+d*V+x*$,s[10]=g*v+p*B+d*Q+x*Z,s[14]=g*T+p*I+d*te+x*pe,s[3]=b*L+y*D+_*P+S*O,s[7]=b*A+y*z+_*V+S*$,s[11]=b*v+y*B+_*Q+S*Z,s[15]=b*T+y*I+_*te+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],m=e[14],g=e[3],p=e[7],d=e[11],x=e[15];return g*(+s*c*f-r*l*f-s*a*u+n*l*u+r*a*m-n*c*m)+p*(+t*c*m-t*l*u+s*o*u-r*o*m+r*l*h-s*c*h)+d*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*h-n*l*h)+x*(-r*a*h-t*c*f+t*a*u+r*o*f-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],m=e[11],g=e[12],p=e[13],d=e[14],x=e[15],b=f*d*l-p*u*l+p*c*m-a*d*m-f*c*x+a*u*x,y=g*u*l-h*d*l-g*c*m+o*d*m+h*c*x-o*u*x,_=h*p*l-g*f*l+g*a*m-o*p*m-h*a*x+o*f*x,S=g*f*c-h*p*c-g*a*u+o*p*u+h*a*d-o*f*d,L=t*b+n*y+r*_+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=b*A,e[1]=(p*u*s-f*d*s-p*r*m+n*d*m+f*r*x-n*u*x)*A,e[2]=(a*d*s-p*c*s+p*r*l-n*d*l-a*r*x+n*c*x)*A,e[3]=(f*c*s-a*u*s-f*r*l+n*u*l+a*r*m-n*c*m)*A,e[4]=y*A,e[5]=(h*d*s-g*u*s+g*r*m-t*d*m-h*r*x+t*u*x)*A,e[6]=(g*c*s-o*d*s-g*r*l+t*d*l+o*r*x-t*c*x)*A,e[7]=(o*u*s-h*c*s+h*r*l-t*u*l-o*r*m+t*c*m)*A,e[8]=_*A,e[9]=(g*f*s-h*p*s-g*n*m+t*p*m+h*n*x-t*f*x)*A,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*x+t*a*x)*A,e[11]=(h*a*s-o*f*s-h*n*l+t*f*l+o*n*m-t*a*m)*A,e[12]=S*A,e[13]=(h*p*r-g*f*r+g*n*u-t*p*u-h*n*d+t*f*d)*A,e[14]=(g*a*r-o*p*r-g*n*c+t*p*c+o*n*d-t*a*d)*A,e[15]=(o*f*r-h*a*r+h*n*c-t*f*c-o*n*u+t*a*u)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,m=s*h,g=s*f,p=o*h,d=o*f,x=a*f,b=c*l,y=c*h,_=c*f,S=n.x,L=n.y,A=n.z;return r[0]=(1-(p+x))*S,r[1]=(m+_)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(m-_)*L,r[5]=(1-(u+x))*L,r[6]=(d+b)*L,r[7]=0,r[8]=(g+y)*A,r[9]=(d-b)*A,r[10]=(1-(u+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=fi.set(r[0],r[1],r[2]).length();const o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const l=1/s,h=1/o,f=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),h=1/(o-s),f=(t+e)*c,u=(n+r)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new R,en=new at,zu=new R(0,0,0),Ou=new R(1,1,1),Pn=new R,hr=new R,zt=new R,io=new at,ro=new Fi;class Hr{constructor(e=0,t=0,n=0,r=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const so=new R,di=new Fi,gn=new at,fr=new R,Gi=new R,ku=new R,Gu=new Fi,ao=new R(1,0,0),oo=new R(0,1,0),lo=new R(0,0,1),Vu={type:"added"},co={type:"removed"};class It extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new R,t=new Hr,n=new Fi,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Wt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return so.copy(e).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Gi,fr,this.up):gn.lookAt(fr,Gi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(gn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(co)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(co)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new R(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new R,_n=new R,xs=new R,xn=new R,pi=new R,mi=new R,uo=new R,vs=new R,ys=new R,Ms=new R;class yn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){tn.subVectors(r,t),_n.subVectors(n,t),xs.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(xs),l=_n.dot(_n),h=_n.dot(xs),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const u=1/f,m=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,xn),c.set(0,0),c.addScaledVector(s,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),_n.subVectors(e,t),tn.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return yn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;pi.subVectors(r,n),mi.subVectors(s,n),vs.subVectors(e,n);const c=pi.dot(vs),l=mi.dot(vs);if(c<=0&&l<=0)return t.copy(n);ys.subVectors(e,r);const h=pi.dot(ys),f=mi.dot(ys);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(pi,o);Ms.subVectors(e,s);const m=pi.dot(Ms),g=mi.dot(Ms);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(mi,a);const d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return uo.subVectors(s,r),a=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(uo,a);const x=1/(d+p+u);return o=p*x,a=u*x,t.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hu=0;class nr extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Ei,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ia extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new R,dr=new Ae;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class pl extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wu=0;const Zt=new at,Ss=new It,gi=new R,Ot=new zn,Vi=new zn,ht=new R;class jt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ol(e)?ml:pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ot.min,Vi.min),Ot.expandByPoint(ht),ht.addVectors(Ot.max,Vi.max),Ot.expandByPoint(ht)):(Ot.expandByPoint(Vi.min),Ot.expandByPoint(Vi.max))}Ot.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ht.fromBufferAttribute(a,l),c&&(gi.fromBufferAttribute(e,l),ht.add(gi)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new R,h[D]=new R;const f=new R,u=new R,m=new R,g=new Ae,p=new Ae,d=new Ae,x=new R,b=new R;function y(D,z,B){f.fromArray(r,D*3),u.fromArray(r,z*3),m.fromArray(r,B*3),g.fromArray(o,D*2),p.fromArray(o,z*2),d.fromArray(o,B*2),u.sub(f),m.sub(f),p.sub(g),d.sub(g);const I=1/(p.x*d.y-d.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(I),b.copy(m).multiplyScalar(p.x).addScaledVector(u,-d.x).multiplyScalar(I),l[D].add(x),l[z].add(x),l[B].add(x),h[D].add(b),h[z].add(b),h[B].add(b))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let D=0,z=_.length;D<z;++D){const B=_[D],I=B.start,P=B.count;for(let V=I,Q=I+P;V<Q;V+=3)y(n[V+0],n[V+1],n[V+2])}const S=new R,L=new R,A=new R,v=new R;function T(D){A.fromArray(s,D*3),v.copy(A);const z=l[D];S.copy(z),S.sub(A.multiplyScalar(A.dot(z))).normalize(),L.crossVectors(v,z);const I=L.dot(h[D])<0?-1:1;c[D*4]=S.x,c[D*4+1]=S.y,c[D*4+2]=S.z,c[D*4+3]=I}for(let D=0,z=_.length;D<z;++D){const B=_[D],I=B.start,P=B.count;for(let V=I,Q=I+P;V<Q;V+=3)T(n[V+0]),T(n[V+1]),T(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,f=new R;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),p=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let x=0;x<h;x++)u[g++]=l[m++]}return new sn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new at,_i=new fl,bs=new Ui,Hi=new R,Wi=new R,Xi=new R,ws=new R,pr=new R,mr=new Ae,gr=new Ae,_r=new Ae,Es=new R,xr=new R;class Qt extends It{constructor(e=new jt,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(ws.fromBufferAttribute(f,e),o?pr.addScaledVector(ws,h):pr.addScaledVector(ws.sub(t),h))}t.add(pr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),e.ray.intersectsSphere(bs)===!1)||(ho.copy(s).invert(),_i.copy(e.ray).applyMatrix4(ho),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,f=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,u.start),b=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=x,_=b;y<_;y+=3){const S=a.getX(y),L=a.getX(y+1),A=a.getX(y+2);o=vr(this,d,e,_i,l,h,S,L,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=m,d=g;p<d;p+=3){const x=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);o=vr(this,r,e,_i,l,h,x,b,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,u.start),b=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let y=x,_=b;y<_;y+=3){const S=y,L=y+1,A=y+2;o=vr(this,d,e,_i,l,h,S,L,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=m,d=g;p<d;p+=3){const x=p,b=p+1,y=p+2;o=vr(this,r,e,_i,l,h,x,b,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Xu(i,e,t,n,r,s,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Fn,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function vr(i,e,t,n,r,s,o,a,c){i.getVertexPosition(o,Hi),i.getVertexPosition(a,Wi),i.getVertexPosition(c,Xi);const l=Xu(i,e,t,n,Hi,Wi,Xi,Es);if(l){r&&(mr.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,c),l.uv=yn.getUV(Es,Hi,Wi,Xi,mr,gr,_r,new Ae)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,c),l.uv2=yn.getUV(Es,Hi,Wi,Xi,mr,gr,_r,new Ae));const h={a:o,b:a,c,normal:new R,materialIndex:0};yn.getNormal(Hi,Wi,Xi,h.normal),l.face=h}return l}class ir extends jt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function g(p,d,x,b,y,_,S,L,A,v,T){const D=_/A,z=S/v,B=_/2,I=S/2,P=L/2,V=A+1,Q=v+1;let te=0,O=0;const $=new R;for(let Z=0;Z<Q;Z++){const pe=Z*z-I;for(let N=0;N<V;N++){const K=N*D-B;$[p]=K*b,$[d]=pe*y,$[x]=P,l.push($.x,$.y,$.z),$[p]=0,$[d]=0,$[x]=L>0?1:-1,h.push($.x,$.y,$.z),f.push(N/A),f.push(1-Z/v),te+=1}}for(let Z=0;Z<v;Z++)for(let pe=0;pe<A;pe++){const N=u+pe+V*Z,K=u+pe+V*(Z+1),ae=u+(pe+1)+V*(Z+1),ne=u+(pe+1)+V*Z;c.push(N,K,ne),c.push(K,ae,ne),O+=6}a.addGroup(m,O,T),m+=O,u+=te}}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function qu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gl(i){return i.getRenderTarget()===null&&i.outputEncoding===Ke?hn:er}const Wr={clone:Ii,merge:Et};var ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _l extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends _l{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,vi=1;class Zu extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Kt(xi,vi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Kt(xi,vi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Kt(xi,vi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Kt(xi,vi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Kt(xi,vi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Kt(xi,vi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class xl extends qt{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Nn});s.uniforms.tEquirect.value=t;const o=new Qt(r,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Jt),new Zu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ts=new R,Ku=new R,Qu=new Wt;class qn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ts.subVectors(n,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Ui,yr=new R;class vl{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,o=new qn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],f=n[7],u=n[8],m=n[9],g=n[10],p=n[11],d=n[12],x=n[13],b=n[14],y=n[15];return t[0].setComponents(a-r,f-c,p-u,y-d).normalize(),t[1].setComponents(a+r,f+c,p+u,y+d).normalize(),t[2].setComponents(a+s,f+l,p+m,y+x).normalize(),t[3].setComponents(a-s,f-l,p-m,y-x).normalize(),t[4].setComponents(a-o,f-h,p-g,y-b).normalize(),t[5].setComponents(a+o,f+h,p+g,y+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $u(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const f=l.array,u=l.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,u),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){const u=h.array,m=h.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,u):(t?i.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:c}}class ra extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,m=[],g=[],p=[],d=[];for(let x=0;x<h;x++){const b=x*u-o;for(let y=0;y<l;y++){const _=y*f-s;g.push(_,-b,0),p.push(0,0,1),d.push(y/a),d.push(1-x/c)}}for(let x=0;x<c;x++)for(let b=0;b<a;b++){const y=b+l*x,_=b+l*(x+1),S=b+1+l*(x+1),L=b+1+l*x;m.push(y,_,L),m.push(_,S,L)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(d,2))}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah="vec3 transformed = vec3( position );",oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ch=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,Oh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Hh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Jh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ff=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,od=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ld=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xd=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sd=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:eh,alphamap_pars_fragment:th,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:rh,aomap_pars_fragment:sh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:uh,clipping_planes_fragment:hh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:dh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:xh,common:vh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Mh,displacementmap_pars_vertex:Sh,displacementmap_vertex:bh,emissivemap_fragment:wh,emissivemap_pars_fragment:Eh,encodings_fragment:Th,encodings_pars_fragment:Ah,envmap_fragment:Ch,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Dh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:Hh,envmap_vertex:Rh,fog_vertex:Ih,fog_pars_vertex:Nh,fog_fragment:Fh,fog_pars_fragment:Uh,gradientmap_pars_fragment:zh,lightmap_fragment:Oh,lightmap_pars_fragment:Bh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Vh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:jh,lights_physical_fragment:Yh,lights_physical_pars_fragment:Zh,lights_fragment_begin:Jh,lights_fragment_maps:Kh,lights_fragment_end:Qh,logdepthbuf_fragment:$h,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphcolor_vertex:uf,morphnormal_vertex:hf,morphtarget_pars_vertex:ff,morphtarget_vertex:df,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:bf,output_fragment:wf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:If,shadowmap_vertex:Nf,shadowmask_pars_fragment:Ff,skinbase_vertex:Uf,skinning_pars_vertex:zf,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:kf,specularmap_pars_fragment:Gf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Hf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:jf,uv_vertex:Yf,uv2_pars_fragment:Zf,uv2_pars_vertex:Jf,uv2_vertex:Kf,worldpos_vertex:Qf,background_vert:$f,background_frag:ed,backgroundCube_vert:td,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:sd,depth_frag:ad,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:ud,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:_d,meshmatcap_frag:xd,meshnormal_vert:vd,meshnormal_frag:yd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:bd,meshphysical_frag:wd,meshtoon_vert:Ed,meshtoon_frag:Td,points_vert:Ad,points_frag:Cd,shadow_vert:Ld,shadow_frag:Dd,sprite_vert:Pd,sprite_frag:Rd},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},Pt={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Pt.physical={uniforms:Et([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Mr={r:0,b:0,g:0};function Id(i,e,t,n,r,s,o){const a=new ke(0);let c=s===!0?0:1,l,h,f=null,u=0,m=null;function g(d,x){let b=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const _=i.xr,S=_.getSession&&_.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Vr)?(h===void 0&&(h=new Qt(new ir(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ii(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=y.encoding!==Ke,(f!==y||u!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new ra(2,2),new an({name:"BackgroundMaterial",uniforms:Ii(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=y.encoding!==Ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,x){d.getRGB(Mr,gl(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:g}}function Nd(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,h=!1;function f(P,V,Q,te,O){let $=!1;if(o){const Z=p(te,Q,V);l!==Z&&(l=Z,m(l.object)),$=x(P,te,Q,O),$&&b(P,te,Q,O)}else{const Z=V.wireframe===!0;(l.geometry!==te.id||l.program!==Q.id||l.wireframe!==Z)&&(l.geometry=te.id,l.program=Q.id,l.wireframe=Z,$=!0)}O!==null&&t.update(O,34963),($||h)&&(h=!1,v(P,V,Q,te),O!==null&&i.bindBuffer(34963,t.get(O).buffer))}function u(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,V,Q){const te=Q.wireframe===!0;let O=a[P.id];O===void 0&&(O={},a[P.id]=O);let $=O[V.id];$===void 0&&($={},O[V.id]=$);let Z=$[te];return Z===void 0&&(Z=d(u()),$[te]=Z),Z}function d(P){const V=[],Q=[],te=[];for(let O=0;O<r;O++)V[O]=0,Q[O]=0,te[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:te,object:P,attributes:{},index:null}}function x(P,V,Q,te){const O=l.attributes,$=V.attributes;let Z=0;const pe=Q.getAttributes();for(const N in pe)if(pe[N].location>=0){const ae=O[N];let ne=$[N];if(ne===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ae===void 0||ae.attribute!==ne||ne&&ae.data!==ne.data)return!0;Z++}return l.attributesNum!==Z||l.index!==te}function b(P,V,Q,te){const O={},$=V.attributes;let Z=0;const pe=Q.getAttributes();for(const N in pe)if(pe[N].location>=0){let ae=$[N];ae===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const ne={};ne.attribute=ae,ae&&ae.data&&(ne.data=ae.data),O[N]=ne,Z++}l.attributes=O,l.attributesNum=Z,l.index=te}function y(){const P=l.newAttributes;for(let V=0,Q=P.length;V<Q;V++)P[V]=0}function _(P){S(P,0)}function S(P,V){const Q=l.newAttributes,te=l.enabledAttributes,O=l.attributeDivisors;Q[P]=1,te[P]===0&&(i.enableVertexAttribArray(P),te[P]=1),O[P]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),O[P]=V)}function L(){const P=l.newAttributes,V=l.enabledAttributes;for(let Q=0,te=V.length;Q<te;Q++)V[Q]!==P[Q]&&(i.disableVertexAttribArray(Q),V[Q]=0)}function A(P,V,Q,te,O,$){n.isWebGL2===!0&&(Q===5124||Q===5125)?i.vertexAttribIPointer(P,V,Q,O,$):i.vertexAttribPointer(P,V,Q,te,O,$)}function v(P,V,Q,te){if(n.isWebGL2===!1&&(P.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const O=te.attributes,$=Q.getAttributes(),Z=V.defaultAttributeValues;for(const pe in $){const N=$[pe];if(N.location>=0){let K=O[pe];if(K===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const ae=K.normalized,ne=K.itemSize,G=t.get(K);if(G===void 0)continue;const U=G.buffer,J=G.type,se=G.bytesPerElement;if(K.isInterleavedBufferAttribute){const re=K.data,Se=re.stride,me=K.offset;if(re.isInstancedInterleavedBuffer){for(let _e=0;_e<N.locationSize;_e++)S(N.location+_e,re.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<N.locationSize;_e++)_(N.location+_e);i.bindBuffer(34962,U);for(let _e=0;_e<N.locationSize;_e++)A(N.location+_e,ne/N.locationSize,J,ae,Se*se,(me+ne/N.locationSize*_e)*se)}else{if(K.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)S(N.location+re,K.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let re=0;re<N.locationSize;re++)_(N.location+re);i.bindBuffer(34962,U);for(let re=0;re<N.locationSize;re++)A(N.location+re,ne/N.locationSize,J,ae,ne*se,ne/N.locationSize*re*se)}}else if(Z!==void 0){const ae=Z[pe];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(N.location,ae);break;case 3:i.vertexAttrib3fv(N.location,ae);break;case 4:i.vertexAttrib4fv(N.location,ae);break;default:i.vertexAttrib1fv(N.location,ae)}}}}L()}function T(){B();for(const P in a){const V=a[P];for(const Q in V){const te=V[Q];for(const O in te)g(te[O].object),delete te[O];delete V[Q]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;const V=a[P.id];for(const Q in V){const te=V[Q];for(const O in te)g(te[O].object),delete te[O];delete V[Q]}delete a[P.id]}function z(P){for(const V in a){const Q=a[V];if(Q[P.id]===void 0)continue;const te=Q[P.id];for(const O in te)g(te[O].object),delete te[O];delete Q[P.id]}}function B(){I(),h=!0,l!==c&&(l=c,m(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:B,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:_,disableUnusedAttributes:L}}function Fd(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,h){i.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,f){if(f===0)return;let u,m;if(r)u=i,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,f),t.update(h,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Ud(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),u=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),x=i.getParameter(36348),b=i.getParameter(36349),y=u>0,_=o||e.has("OES_texture_float"),S=y&&_,L=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:L}}function zd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new qn,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,x=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{const b=s?0:n,y=b*4;let _=x.clippingState||null;c.value=_,_=h(g,u,y,m);for(let S=0;S!==y;++S)_[S]=t[S];x.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const x=m+p*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<x)&&(d=new Float32Array(x));for(let y=0,_=m;y!==p;++y,_+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(d,_),d[_+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Od(i){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=Di:a===Hs&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vs||a===Hs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ju(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ml extends _l{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,fo=[.125,.215,.35,.446,.526,.582],Yn=20,As=new Ml,po=new ke;let Cs=null;const jn=(1+Math.sqrt(5))/2,Mi=1/jn,mo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,jn,Mi),new R(0,jn,-Mi),new R(Mi,0,jn),new R(-Mi,0,jn),new R(jn,Mi,0),new R(-jn,Mi,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Cs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs),e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:$i,format:rn,encoding:ii,depthBuffer:!1},r=_o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bd(s)),this._blurMaterial=kd(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r){const a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(po),h.toneMapping=wn,h.autoClear=!1;const m=new ia({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Qt(new ir,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(po),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):b===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const y=this._cubeSize;Sr(r,b*y,x>2?y:0,y,y),h.setRenderTarget(r),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Sr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mo[(r-1)%mo.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Qt(this._lodPlanes[r],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),p=s/g,d=isFinite(s)?1+Math.floor(h*p):Yn;d>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const x=[];let b=0;for(let A=0;A<Yn;++A){const v=A/p,T=Math.exp(-v*v/2);x.push(T),A===0?b+=T:A<d&&(b+=2*T)}for(let A=0;A<x.length;A++)x[A]=x[A]/b;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=x,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const _=this._sizeLods[r],S=3*_*(r>y-bi?r-y+bi:0),L=4*(this._cubeSize-_);Sr(t,S,L,3*_,2*_),c.setRenderTarget(t),c.render(f,As)}}function Bd(i){const e=[],t=[],n=[];let r=i;const s=i-bi+1+fo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-bi?c=fo[o-i+bi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,p=3,d=2,x=1,b=new Float32Array(p*g*m),y=new Float32Array(d*g*m),_=new Float32Array(x*g*m);for(let L=0;L<m;L++){const A=L%3*2/3-1,v=L>2?0:-1,T=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];b.set(T,p*g*L),y.set(u,d*g*L);const D=[L,L,L,L,L,L];_.set(D,x*g*L)}const S=new jt;S.setAttribute("position",new sn(b,p)),S.setAttribute("uv",new sn(y,d)),S.setAttribute("faceIndex",new sn(_,x)),e.push(S),r>bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _o(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kd(i,e,t){const n=new Float32Array(Yn),r=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function xo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function vo(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function Gd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vs||c===Hs,h=c===Di||c===Pi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new go(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new go(i));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hd(i,e,t,n){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)e.update(u[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function l(f){const u=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let y=0,_=b.length;y<_;y+=3){const S=b[y+0],L=b[y+1],A=b[y+2];u.push(S,L,L,A,A,S)}}else{const b=g.array;p=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const S=y+0,L=y+1,A=y+2;u.push(S,L,L,A,A,S)}}const d=new(ol(u)?ml:pl)(u,1);d.version=p;const x=s.get(f);x&&e.remove(x),s.set(f,d)}function h(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Wd(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,m){i.drawElements(s,m,a,u*c),t.update(m,s,1)}function f(u,m,g){if(g===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,u*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function Xd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qd(i,e){return i[0]-e[0]}function jd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Yd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(h);if(d===void 0||d.count!==p){let V=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();const y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let T=0;y===!0&&(T=1),_===!0&&(T=2),S===!0&&(T=3);let D=h.attributes.position.count*T,z=1;D>e.maxTextureSize&&(z=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const B=new Float32Array(D*z*4*p),I=new hl(B,D,z,p);I.type=Kn,I.needsUpdate=!0;const P=T*4;for(let Q=0;Q<p;Q++){const te=L[Q],O=A[Q],$=v[Q],Z=D*z*4*Q;for(let pe=0;pe<te.count;pe++){const N=pe*P;y===!0&&(o.fromBufferAttribute(te,pe),B[Z+N+0]=o.x,B[Z+N+1]=o.y,B[Z+N+2]=o.z,B[Z+N+3]=0),_===!0&&(o.fromBufferAttribute(O,pe),B[Z+N+4]=o.x,B[Z+N+5]=o.y,B[Z+N+6]=o.z,B[Z+N+7]=0),S===!0&&(o.fromBufferAttribute($,pe),B[Z+N+8]=o.x,B[Z+N+9]=o.y,B[Z+N+10]=o.z,B[Z+N+11]=$.itemSize===4?o.w:1)}}d={count:p,texture:I,size:new Ae(D,z)},s.set(h,d),h.addEventListener("dispose",V)}let x=0;for(let y=0;y<m.length;y++)x+=m[y];const b=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",m),u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let _=0;_<g;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<g;_++){const S=p[_];S[0]=_,S[1]=m[_]}p.sort(jd);for(let _=0;_<8;_++)_<g&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(qd);const d=h.morphAttributes.position,x=h.morphAttributes.normal;let b=0;for(let _=0;_<8;_++){const S=a[_],L=S[0],A=S[1];L!==Number.MAX_SAFE_INTEGER&&A?(d&&h.getAttribute("morphTarget"+_)!==d[L]&&h.setAttribute("morphTarget"+_,d[L]),x&&h.getAttribute("morphNormal"+_)!==x[L]&&h.setAttribute("morphNormal"+_,x[L]),r[_]=A,b+=A):(d&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),x&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const y=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Zd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Sl=new qt,bl=new hl,wl=new Fu,El=new xl,yo=[],Mo=[],So=new Float32Array(16),bo=new Float32Array(9),wo=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=yo[r];if(s===void 0&&(s=new Float32Array(r),yo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;wo.set(n),i.uniformMatrix2fv(this.addr,!1,wo),ct(t,n)}}function tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),ct(t,n)}}function np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;So.set(n),i.uniformMatrix4fv(this.addr,!1,So),ct(t,n)}}function ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Sl,r)}function fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wl,r)}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||El,r)}function pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bl,r)}function mp(i){switch(i){case 5126:return Jd;case 35664:return Kd;case 35665:return Qd;case 35666:return $d;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return sp;case 35669:case 35673:return ap;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,e){i.uniform1fv(this.addr,e)}function _p(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function xp(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function vp(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function yp(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mp(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sp(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bp(i,e){i.uniform1iv(this.addr,e)}function wp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function Tp(i,e){i.uniform4iv(this.addr,e)}function Ap(i,e){i.uniform1uiv(this.addr,e)}function Cp(i,e){i.uniform2uiv(this.addr,e)}function Lp(i,e){i.uniform3uiv(this.addr,e)}function Dp(i,e){i.uniform4uiv(this.addr,e)}function Pp(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sl,s[o])}function Rp(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wl,s[o])}function Ip(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||El,s[o])}function Np(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bl,s[o])}function Fp(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return xp;case 35666:return vp;case 35674:return yp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return bp;case 35667:case 35671:return wp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Cp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Np}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=mp(t.type)}}class zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fp(t.type)}}class Op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function Eo(i,e){i.seq.push(e),i.map[e.id]=e}function Bp(i,e,t){const n=i.name,r=n.length;for(Ls.lastIndex=0;;){const s=Ls.exec(n),o=Ls.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Eo(t,l===void 0?new Up(a,i,e):new zp(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Op(a),Eo(t,f)),t=f}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function To(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let kp=0;function Gp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vp(i){switch(i){case ii:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ao(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gp(i.getShaderSource(e),o)}else return r}function Hp(i,e){const t=Vp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Wp(i,e){let t;switch(e){case jc:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case Jc:t="ACESFilmic";break;case Kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jp(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ji(i){return i!==""}function Co(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(i){return i.replace(Yp,Zp)}function Zp(i,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zs(t)}const Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(i){return i.replace(Jp,Kp)}function Kp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Po(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Pi:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function em(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function tm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xc:e="ENVMAP_BLENDING_MIX";break;case qc:e="ENVMAP_BLENDING_ADD";break}return e}function nm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function im(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qp(t),l=$p(t),h=em(t),f=tm(t),u=nm(t),m=t.isWebGL2?"":Xp(t),g=qp(s),p=r.createProgram();let d,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(ji).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(ji).join(`
`),x.length>0&&(x+=`
`)):(d=[Po(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),x=[m,Po(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Le.tonemapping_pars_fragment:"",t.toneMapping!==wn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Hp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),o=Zs(o),o=Co(o,t),o=Lo(o,t),a=Zs(a),a=Co(a,t),a=Lo(a,t),o=Do(o),a=Do(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=b+d+o,_=b+x+a,S=To(r,35633,y),L=To(r,35632,_);if(r.attachShader(p,S),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(L).trim();let B=!0,I=!0;if(r.getProgramParameter(p,35714)===!1){B=!1;const P=Ao(r,S,"vertex"),V=Ao(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+P+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:B,programLog:T,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:x}})}r.deleteShader(S),r.deleteShader(L);let A;this.getUniforms=function(){return A===void 0&&(A=new Ir(r,p)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=jp(r,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=L,this}let rm=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new am(e),t.set(e,n)),n}}class am{constructor(e){this.id=rm++,this.code=e,this.usedTimes=0}}function om(i,e,t,n,r,s,o){const a=new dl,c=new sm,l=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,D,z,B){const I=z.fog,P=B.geometry,V=v.isMeshStandardMaterial?z.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),te=Q&&Q.mapping===Vr?Q.image.height:null,O=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=$!==void 0?$.length:0;let pe=0;P.morphAttributes.position!==void 0&&(pe=1),P.morphAttributes.normal!==void 0&&(pe=2),P.morphAttributes.color!==void 0&&(pe=3);let N,K,ae,ne;if(O){const Se=Pt[O];N=Se.vertexShader,K=Se.fragmentShader}else N=v.vertexShader,K=v.fragmentShader,c.update(v),ae=c.getVertexShaderID(v),ne=c.getFragmentShaderID(v);const G=i.getRenderTarget(),U=v.alphaTest>0,J=v.clearcoat>0,se=v.iridescence>0;return{isWebGL2:h,shaderID:O,shaderName:v.type,vertexShader:N,fragmentShader:K,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:u,outputEncoding:G===null?i.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:ii,map:!!v.map,matcap:!!v.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:te,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===_u,tangentSpaceNormalMap:v.normalMapType===gu,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:J,clearcoatMap:J&&!!v.clearcoatMap,clearcoatRoughnessMap:J&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!v.clearcoatNormalMap,iridescence:se,iridescenceMap:se&&!!v.iridescenceMap,iridescenceThicknessMap:se&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ei,alphaMap:!!v.alphaMap,alphaTest:U,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!P.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:wn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Xt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(T,v),b(T,v),T.push(i.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function y(v){const T=g[v.type];let D;if(T){const z=Pt[T];D=Wr.clone(z.uniforms)}else D=v.uniforms;return D}function _(v,T){let D;for(let z=0,B=l.length;z<B;z++){const I=l[z];if(I.cacheKey===T){D=I,++D.usedTimes;break}}return D===void 0&&(D=new im(i,T,v,s),l.push(D)),D}function S(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function L(v){c.remove(v)}function A(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:_,releaseProgram:S,releaseShaderCache:L,programs:l,dispose:A}}function lm(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ro(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Io(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,u,m,g,p,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=u,x.material=m,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=p,x.group=d),e++,x}function a(f,u,m,g,p,d){const x=o(f,u,m,g,p,d);m.transmission>0?n.push(x):m.transparent===!0?r.push(x):t.push(x)}function c(f,u,m,g,p,d){const x=o(f,u,m,g,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,u){t.length>1&&t.sort(f||cm),n.length>1&&n.sort(u||Ro),r.length>1&&r.sort(u||Ro)}function h(){for(let f=e,u=i.length;f<u;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function um(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Io,i.set(n,[o])):r>=s.length?(o=new Io,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ke};break;case"SpotLight":t={position:new R,direction:new R,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dm=0;function pm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mm(i,e){const t=new hm,n=fm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new R);const s=new R,o=new at,a=new at;function c(h,f){let u=0,m=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let p=0,d=0,x=0,b=0,y=0,_=0,S=0,L=0,A=0,v=0;h.sort(pm);const T=f!==!0?Math.PI:1;for(let z=0,B=h.length;z<B;z++){const I=h[z],P=I.color,V=I.intensity,Q=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=P.r*V*T,m+=P.g*V*T,g+=P.b*V*T;else if(I.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],V);else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const $=I.shadow,Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.directionalShadow[p]=Z,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=I.shadow.matrix,_++}r.directional[p]=O,p++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(P).multiplyScalar(V*T),O.distance=Q,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[x]=O;const $=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&v++),r.spotLightMatrix[x]=$.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.spotShadow[x]=Z,r.spotShadowMap[x]=te,L++}x++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(P).multiplyScalar(V),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[b]=O,b++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*T),O.distance=I.distance,O.decay=I.decay,I.castShadow){const $=I.shadow,Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,r.pointShadow[d]=Z,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=I.shadow.matrix,S++}r.point[d]=O,d++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(V*T),O.groundColor.copy(I.groundColor).multiplyScalar(V*T),r.hemi[y]=O,y++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==y||D.numDirectionalShadows!==_||D.numPointShadows!==S||D.numSpotShadows!==L||D.numSpotMaps!==A)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=b,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=L+A-v,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=d,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=y,D.numDirectionalShadows=_,D.numPointShadows=S,D.numSpotShadows=L,D.numSpotMaps=A,r.version=dm++)}function l(h,f){let u=0,m=0,g=0,p=0,d=0;const x=f.matrixWorldInverse;for(let b=0,y=h.length;b<y;b++){const _=h[b];if(_.isDirectionalLight){const S=r.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),u++}else if(_.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(_.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),a.identity(),o.copy(_.matrixWorld),o.premultiply(x),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),m++}else if(_.isHemisphereLight){const S=r.hemi[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(x),d++}}}return{setup:c,setupView:l,state:r}}function No(i,e){const t=new mm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new No(i,e),t.set(s,[c])):o>=a.length?(c=new No(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class _m extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
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
}`;function Mm(i,e,t){let n=new vl;const r=new Ae,s=new Ae,o=new $e,a=new _m({depthPacking:mu}),c=new xm,l={},h=t.maxTextureSize,f={[Fn]:Xt,[Xt]:Fn,[Rn]:Rn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:vm,fragmentShader:ym}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Qt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl,this.render=function(_,S,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Nn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,B=_.length;z<B;z++){const I=_[z],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const V=P.getFrameExtents();if(r.multiply(V),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,P.mapSize.y=s.y)),P.map===null){const te=this.type!==qi?{minFilter:Tt,magFilter:Tt}:{};P.map=new Un(r.x,r.y,te),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const Q=P.getViewportCount();for(let te=0;te<Q;te++){const O=P.getViewport(te);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),D.viewport(o),P.updateMatrices(I,te),n=P.getFrustum(),y(S,L,P.camera,I,this.type)}P.isPointLightShadow!==!0&&this.type===qi&&x(P,L),P.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(A,v,T)};function x(_,S){const L=e.update(p);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Un(r.x,r.y)),u.uniforms.shadow_pass.value=_.map.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(S,null,L,u,p,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(S,null,L,m,p,null)}function b(_,S,L,A,v,T){let D=null;const z=L.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(z!==void 0)D=z;else if(D=L.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const B=D.uuid,I=S.uuid;let P=l[B];P===void 0&&(P={},l[B]=P);let V=P[I];V===void 0&&(V=D.clone(),P[I]=V),D=V}return D.visible=S.visible,D.wireframe=S.wireframe,T===qi?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:f[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=A,D.farDistance=v),D}function y(_,S,L,A,v){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&v===qi)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld);const z=e.update(_),B=_.material;if(Array.isArray(B)){const I=z.groups;for(let P=0,V=I.length;P<V;P++){const Q=I[P],te=B[Q.materialIndex];if(te&&te.visible){const O=b(_,te,A,L.near,L.far,v);i.renderBufferDirect(L,null,z,O,_,Q)}}}else if(B.visible){const I=b(_,B,A,L.near,L.far,v);i.renderBufferDirect(L,null,z,I,_,null)}}const D=_.children;for(let z=0,B=D.length;z<B;z++)y(D[z],S,L,A,v)}}function Sm(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const H=new $e;let ee=null;const fe=new $e(0,0,0,0);return{setMask:function(xe){ee!==xe&&!C&&(i.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){C=xe},setClear:function(xe,Ne,et,tt,on){on===!0&&(xe*=tt,Ne*=tt,et*=tt),H.set(xe,Ne,et,tt),fe.equals(H)===!1&&(i.clearColor(xe,Ne,et,tt),fe.copy(H))},reset:function(){C=!1,ee=null,fe.set(-1,0,0,0)}}}function s(){let C=!1,H=null,ee=null,fe=null;return{setTest:function(xe){xe?U(2929):J(2929)},setMask:function(xe){H!==xe&&!C&&(i.depthMask(xe),H=xe)},setFunc:function(xe){if(ee!==xe){switch(xe){case Oc:i.depthFunc(512);break;case Bc:i.depthFunc(519);break;case kc:i.depthFunc(513);break;case Gs:i.depthFunc(515);break;case Gc:i.depthFunc(514);break;case Vc:i.depthFunc(518);break;case Hc:i.depthFunc(516);break;case Wc:i.depthFunc(517);break;default:i.depthFunc(515)}ee=xe}},setLocked:function(xe){C=xe},setClear:function(xe){fe!==xe&&(i.clearDepth(xe),fe=xe)},reset:function(){C=!1,H=null,ee=null,fe=null}}}function o(){let C=!1,H=null,ee=null,fe=null,xe=null,Ne=null,et=null,tt=null,on=null;return{setTest:function(je){C||(je?U(2960):J(2960))},setMask:function(je){H!==je&&!C&&(i.stencilMask(je),H=je)},setFunc:function(je,Yt,xt){(ee!==je||fe!==Yt||xe!==xt)&&(i.stencilFunc(je,Yt,xt),ee=je,fe=Yt,xe=xt)},setOp:function(je,Yt,xt){(Ne!==je||et!==Yt||tt!==xt)&&(i.stencilOp(je,Yt,xt),Ne=je,et=Yt,tt=xt)},setLocked:function(je){C=je},setClear:function(je){on!==je&&(i.clearStencil(je),on=je)},reset:function(){C=!1,H=null,ee=null,fe=null,xe=null,Ne=null,et=null,tt=null,on=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,f=new WeakMap;let u={},m={},g=new WeakMap,p=[],d=null,x=!1,b=null,y=null,_=null,S=null,L=null,A=null,v=null,T=!1,D=null,z=null,B=null,I=null,P=null;const V=i.getParameter(35661);let Q=!1,te=0;const O=i.getParameter(7938);O.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(O)[1]),Q=te>=1):O.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Q=te>=2);let $=null,Z={};const pe=i.getParameter(3088),N=i.getParameter(2978),K=new $e().fromArray(pe),ae=new $e().fromArray(N);function ne(C,H,ee){const fe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(C,xe),i.texParameteri(C,10241,9728),i.texParameteri(C,10240,9728);for(let Ne=0;Ne<ee;Ne++)i.texImage2D(H+Ne,0,6408,1,1,0,6408,5121,fe);return xe}const G={};G[3553]=ne(3553,3553,1),G[34067]=ne(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),U(2929),c.setFunc(Gs),Ce(!1),He(wa),U(2884),Xe(Nn);function U(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function J(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function se(C,H){return m[C]!==H?(i.bindFramebuffer(C,H),m[C]=H,n&&(C===36009&&(m[36160]=H),C===36160&&(m[36009]=H)),!0):!1}function re(C,H){let ee=p,fe=!1;if(C)if(ee=g.get(H),ee===void 0&&(ee=[],g.set(H,ee)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(ee.length!==xe.length||ee[0]!==36064){for(let Ne=0,et=xe.length;Ne<et;Ne++)ee[Ne]=36064+Ne;ee.length=xe.length,fe=!0}}else ee[0]!==36064&&(ee[0]=36064,fe=!0);else ee[0]!==1029&&(ee[0]=1029,fe=!0);fe&&(t.isWebGL2?i.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Se(C){return d!==C?(i.useProgram(C),d=C,!0):!1}const me={[Si]:32774,[Ac]:32778,[Cc]:32779};if(n)me[Ca]=32775,me[La]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(me[Ca]=C.MIN_EXT,me[La]=C.MAX_EXT)}const _e={[Lc]:0,[Dc]:1,[Pc]:768,[nl]:770,[zc]:776,[Fc]:774,[Ic]:772,[Rc]:769,[il]:771,[Uc]:775,[Nc]:773};function Xe(C,H,ee,fe,xe,Ne,et,tt){if(C===Nn){x===!0&&(J(3042),x=!1);return}if(x===!1&&(U(3042),x=!0),C!==Tc){if(C!==b||tt!==T){if((y!==Si||L!==Si)&&(i.blendEquation(32774),y=Si,L=Si),tt)switch(C){case Ei:i.blendFuncSeparate(1,771,1,771);break;case Ea:i.blendFunc(1,1);break;case Ta:i.blendFuncSeparate(0,769,0,1);break;case Aa:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ei:i.blendFuncSeparate(770,771,1,771);break;case Ea:i.blendFunc(770,1);break;case Ta:i.blendFuncSeparate(0,769,0,1);break;case Aa:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,S=null,A=null,v=null,b=C,T=tt}return}xe=xe||H,Ne=Ne||ee,et=et||fe,(H!==y||xe!==L)&&(i.blendEquationSeparate(me[H],me[xe]),y=H,L=xe),(ee!==_||fe!==S||Ne!==A||et!==v)&&(i.blendFuncSeparate(_e[ee],_e[fe],_e[Ne],_e[et]),_=ee,S=fe,A=Ne,v=et),b=C,T=!1}function qe(C,H){C.side===Rn?J(2884):U(2884);let ee=C.side===Xt;H&&(ee=!ee),Ce(ee),C.blending===Ei&&C.transparent===!1?Xe(Nn):Xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const fe=C.stencilWrite;l.setTest(fe),fe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Re(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?U(32926):J(32926)}function Ce(C){D!==C&&(C?i.frontFace(2304):i.frontFace(2305),D=C)}function He(C){C!==bc?(U(2884),C!==z&&(C===wa?i.cullFace(1029):C===wc?i.cullFace(1028):i.cullFace(1032))):J(2884),z=C}function Ze(C){C!==B&&(Q&&i.lineWidth(C),B=C)}function Re(C,H,ee){C?(U(32823),(I!==H||P!==ee)&&(i.polygonOffset(H,ee),I=H,P=ee)):J(32823)}function Nt(C){C?U(3089):J(3089)}function Ct(C){C===void 0&&(C=33984+V-1),$!==C&&(i.activeTexture(C),$=C)}function E(C,H,ee){ee===void 0&&($===null?ee=33984+V-1:ee=$);let fe=Z[ee];fe===void 0&&(fe={type:void 0,texture:void 0},Z[ee]=fe),(fe.type!==C||fe.texture!==H)&&($!==ee&&(i.activeTexture(ee),$=ee),i.bindTexture(C,H||G[C]),fe.type=C,fe.texture=H)}function M(){const C=Z[$];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ge(C){ae.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ae.copy(C))}function we(C,H){let ee=f.get(H);ee===void 0&&(ee=new WeakMap,f.set(H,ee));let fe=ee.get(C);fe===void 0&&(fe=i.getUniformBlockIndex(H,C.name),ee.set(C,fe))}function Ve(C,H){const fe=f.get(H).get(C);h.get(H)!==fe&&(i.uniformBlockBinding(H,fe,C.__bindingPointIndex),h.set(H,fe))}function Je(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,Z={},m={},g=new WeakMap,p=[],d=null,x=!1,b=null,y=null,_=null,S=null,L=null,A=null,v=null,T=!1,D=null,z=null,B=null,I=null,P=null,K.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:U,disable:J,bindFramebuffer:se,drawBuffers:re,useProgram:Se,setBlending:Xe,setMaterial:qe,setFlipSided:Ce,setCullFace:He,setLineWidth:Ze,setPolygonOffset:Re,setScissorTest:Nt,activeTexture:Ct,bindTexture:E,unbindTexture:M,compressedTexImage2D:W,compressedTexImage3D:ie,texImage2D:de,texImage3D:q,updateUBOMapping:we,uniformBlockBinding:Ve,texStorage2D:Y,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:ue,compressedTexSubImage2D:Ee,compressedTexSubImage3D:he,scissor:ce,viewport:ge,reset:Je}}function bm(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return x?new OffscreenCanvas(E,M):zr("canvas")}function y(E,M,W,ie){let oe=1;if((E.width>ie||E.height>ie)&&(oe=ie/Math.max(E.width,E.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ue=M?Ur:Math.floor,Ee=ue(oe*E.width),he=ue(oe*E.height);p===void 0&&(p=b(Ee,he));const Y=W?b(Ee,he):p;return Y.width=Ee,Y.height=he,Y.getContext("2d").drawImage(E,0,0,Ee,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+he+")."),Y}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function _(E){return Ys(E.width)&&Ys(E.height)}function S(E){return a?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Tt&&E.minFilter!==Jt}function L(E,M){return E.generateMipmaps&&M&&E.minFilter!==Tt&&E.minFilter!==Jt}function A(E){i.generateMipmap(E)}function v(E,M,W,ie,oe=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue=M;return M===6403&&(W===5126&&(ue=33326),W===5131&&(ue=33325),W===5121&&(ue=33321)),M===33319&&(W===5126&&(ue=33328),W===5131&&(ue=33327),W===5121&&(ue=33323)),M===6408&&(W===5126&&(ue=34836),W===5131&&(ue=34842),W===5121&&(ue=ie===Ke&&oe===!1?35907:32856),W===32819&&(ue=32854),W===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function T(E,M,W){return L(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Tt&&E.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function D(E){return E===Tt||E===Da||E===es?9728:9729}function z(E){const M=E.target;M.removeEventListener("dispose",z),I(M),M.isVideoTexture&&g.delete(M)}function B(E){const M=E.target;M.removeEventListener("dispose",B),V(M)}function I(E){const M=n.get(E);if(M.__webglInit===void 0)return;const W=E.source,ie=d.get(W);if(ie){const oe=ie[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&P(E),Object.keys(ie).length===0&&d.delete(W)}n.remove(E)}function P(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const W=E.source,ie=d.get(W);delete ie[M.__cacheKey],o.memory.textures--}function V(E){const M=E.texture,W=n.get(E),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(W.__webglFramebuffer[oe]),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[oe]);else{if(i.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let oe=0;oe<W.__webglColorRenderbuffer.length;oe++)W.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[oe]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let oe=0,ue=M.length;oe<ue;oe++){const Ee=n.get(M[oe]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(E)}let Q=0;function te(){Q=0}function O(){const E=Q;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Q+=1,E}function $(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function Z(E,M){const W=n.get(E);if(E.isVideoTexture&&Nt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,E,M);return}}t.bindTexture(3553,W.__webglTexture,33984+M)}function pe(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){J(W,E,M);return}t.bindTexture(35866,W.__webglTexture,33984+M)}function N(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){J(W,E,M);return}t.bindTexture(32879,W.__webglTexture,33984+M)}function K(E,M){const W=n.get(E);if(E.version>0&&W.__version!==E.version){se(W,E,M);return}t.bindTexture(34067,W.__webglTexture,33984+M)}const ae={[Ws]:10497,[nn]:33071,[Xs]:33648},ne={[Tt]:9728,[Da]:9984,[es]:9986,[Jt]:9729,[Qc]:9985,[Qi]:9987};function G(E,M,W){if(W?(i.texParameteri(E,10242,ae[M.wrapS]),i.texParameteri(E,10243,ae[M.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,ae[M.wrapR]),i.texParameteri(E,10240,ne[M.magFilter]),i.texParameteri(E,10241,ne[M.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(M.wrapS!==nn||M.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,D(M.magFilter)),i.texParameteri(E,10241,D(M.minFilter)),M.minFilter!==Tt&&M.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Tt||M.minFilter!==es&&M.minFilter!==Qi||M.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function U(E,M){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",z));const ie=M.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const ue=$(M);if(ue!==E.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[ue].usedTimes++;const Ee=oe[E.__cacheKey];Ee!==void 0&&(oe[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(M)),E.__cacheKey=ue,E.__webglTexture=oe[ue].texture}return W}function J(E,M,W){let ie=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=35866),M.isData3DTexture&&(ie=32879);const oe=U(E,M),ue=M.source;t.bindTexture(ie,E.__webglTexture,33984+W);const Ee=n.get(ue);if(ue.version!==Ee.__version||oe===!0){t.activeTexture(33984+W),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const he=S(M)&&_(M.image)===!1;let Y=y(M.image,he,!1,h);Y=Ct(M,Y);const ve=_(Y)||a,de=s.convert(M.format,M.encoding);let q=s.convert(M.type),ce=v(M.internalFormat,de,q,M.encoding,M.isVideoTexture);G(ie,M,ve);let ge;const we=M.mipmaps,Ve=a&&M.isVideoTexture!==!0,Je=Ee.__version===void 0||oe===!0,C=T(M,Y,ve);if(M.isDepthTexture)ce=6402,a?M.type===Kn?ce=36012:M.type===Jn?ce=33190:M.type===Ti?ce=35056:ce=33189:M.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$n&&ce===6402&&M.type!==al&&M.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Jn,q=s.convert(M.type)),M.format===Ri&&ce===6402&&(ce=34041,M.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ti,q=s.convert(M.type))),Je&&(Ve?t.texStorage2D(3553,1,ce,Y.width,Y.height):t.texImage2D(3553,0,ce,Y.width,Y.height,0,de,q,null));else if(M.isDataTexture)if(we.length>0&&ve){Ve&&Je&&t.texStorage2D(3553,C,ce,we[0].width,we[0].height);for(let H=0,ee=we.length;H<ee;H++)ge=we[H],Ve?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,de,q,ge.data):t.texImage2D(3553,H,ce,ge.width,ge.height,0,de,q,ge.data);M.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,C,ce,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,de,q,Y.data)):t.texImage2D(3553,0,ce,Y.width,Y.height,0,de,q,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(35866,C,ce,we[0].width,we[0].height,Y.depth);for(let H=0,ee=we.length;H<ee;H++)ge=we[H],M.format!==rn?de!==null?Ve?t.compressedTexSubImage3D(35866,H,0,0,0,ge.width,ge.height,Y.depth,de,ge.data,0,0):t.compressedTexImage3D(35866,H,ce,ge.width,ge.height,Y.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,H,0,0,0,ge.width,ge.height,Y.depth,de,q,ge.data):t.texImage3D(35866,H,ce,ge.width,ge.height,Y.depth,0,de,q,ge.data)}else{Ve&&Je&&t.texStorage2D(3553,C,ce,we[0].width,we[0].height);for(let H=0,ee=we.length;H<ee;H++)ge=we[H],M.format!==rn?de!==null?Ve?t.compressedTexSubImage2D(3553,H,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(3553,H,ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,de,q,ge.data):t.texImage2D(3553,H,ce,ge.width,ge.height,0,de,q,ge.data)}else if(M.isDataArrayTexture)Ve?(Je&&t.texStorage3D(35866,C,ce,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,de,q,Y.data)):t.texImage3D(35866,0,ce,Y.width,Y.height,Y.depth,0,de,q,Y.data);else if(M.isData3DTexture)Ve?(Je&&t.texStorage3D(32879,C,ce,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,de,q,Y.data)):t.texImage3D(32879,0,ce,Y.width,Y.height,Y.depth,0,de,q,Y.data);else if(M.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(3553,C,ce,Y.width,Y.height);else{let H=Y.width,ee=Y.height;for(let fe=0;fe<C;fe++)t.texImage2D(3553,fe,ce,H,ee,0,de,q,null),H>>=1,ee>>=1}}else if(we.length>0&&ve){Ve&&Je&&t.texStorage2D(3553,C,ce,we[0].width,we[0].height);for(let H=0,ee=we.length;H<ee;H++)ge=we[H],Ve?t.texSubImage2D(3553,H,0,0,de,q,ge):t.texImage2D(3553,H,ce,de,q,ge);M.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,C,ce,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,de,q,Y)):t.texImage2D(3553,0,ce,de,q,Y);L(M,ve)&&A(ie),Ee.__version=ue.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function se(E,M,W){if(M.image.length!==6)return;const ie=U(E,M),oe=M.source;t.bindTexture(34067,E.__webglTexture,33984+W);const ue=n.get(oe);if(oe.version!==ue.__version||ie===!0){t.activeTexture(33984+W),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!Ee&&!he?Y[H]=y(M.image[H],!1,!0,l):Y[H]=he?M.image[H].image:M.image[H],Y[H]=Ct(M,Y[H]);const ve=Y[0],de=_(ve)||a,q=s.convert(M.format,M.encoding),ce=s.convert(M.type),ge=v(M.internalFormat,q,ce,M.encoding),we=a&&M.isVideoTexture!==!0,Ve=ue.__version===void 0||ie===!0;let Je=T(M,ve,de);G(34067,M,de);let C;if(Ee){we&&Ve&&t.texStorage2D(34067,Je,ge,ve.width,ve.height);for(let H=0;H<6;H++){C=Y[H].mipmaps;for(let ee=0;ee<C.length;ee++){const fe=C[ee];M.format!==rn?q!==null?we?t.compressedTexSubImage2D(34069+H,ee,0,0,fe.width,fe.height,q,fe.data):t.compressedTexImage2D(34069+H,ee,ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+H,ee,0,0,fe.width,fe.height,q,ce,fe.data):t.texImage2D(34069+H,ee,ge,fe.width,fe.height,0,q,ce,fe.data)}}}else{C=M.mipmaps,we&&Ve&&(C.length>0&&Je++,t.texStorage2D(34067,Je,ge,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(he){we?t.texSubImage2D(34069+H,0,0,0,Y[H].width,Y[H].height,q,ce,Y[H].data):t.texImage2D(34069+H,0,ge,Y[H].width,Y[H].height,0,q,ce,Y[H].data);for(let ee=0;ee<C.length;ee++){const xe=C[ee].image[H].image;we?t.texSubImage2D(34069+H,ee+1,0,0,xe.width,xe.height,q,ce,xe.data):t.texImage2D(34069+H,ee+1,ge,xe.width,xe.height,0,q,ce,xe.data)}}else{we?t.texSubImage2D(34069+H,0,0,0,q,ce,Y[H]):t.texImage2D(34069+H,0,ge,q,ce,Y[H]);for(let ee=0;ee<C.length;ee++){const fe=C[ee];we?t.texSubImage2D(34069+H,ee+1,0,0,q,ce,fe.image[H]):t.texImage2D(34069+H,ee+1,ge,q,ce,fe.image[H])}}}L(M,de)&&A(34067),ue.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function re(E,M,W,ie,oe){const ue=s.convert(W.format,W.encoding),Ee=s.convert(W.type),he=v(W.internalFormat,ue,Ee,W.encoding);n.get(M).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,he,M.width,M.height,M.depth,0,ue,Ee,null):t.texImage2D(oe,0,he,M.width,M.height,0,ue,Ee,null)),t.bindFramebuffer(36160,E),Re(M)?u.framebufferTexture2DMultisampleEXT(36160,ie,oe,n.get(W).__webglTexture,0,Ze(M)):(oe===3553||oe>=34069&&oe<=34074)&&i.framebufferTexture2D(36160,ie,oe,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(E,M,W){if(i.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(W||Re(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Kn?ie=36012:oe.type===Jn&&(ie=33190));const ue=Ze(M);Re(M)?u.renderbufferStorageMultisampleEXT(36161,ue,ie,M.width,M.height):i.renderbufferStorageMultisample(36161,ue,ie,M.width,M.height)}else i.renderbufferStorage(36161,ie,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Ze(M);W&&Re(M)===!1?i.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):Re(M)?u.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ie.length;oe++){const ue=ie[oe],Ee=s.convert(ue.format,ue.encoding),he=s.convert(ue.type),Y=v(ue.internalFormat,Ee,he,ue.encoding),ve=Ze(M);W&&Re(M)===!1?i.renderbufferStorageMultisample(36161,ve,Y,M.width,M.height):Re(M)?u.renderbufferStorageMultisampleEXT(36161,ve,Y,M.width,M.height):i.renderbufferStorage(36161,Y,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function me(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,oe=Ze(M);if(M.depthTexture.format===$n)Re(M)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,oe):i.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===Ri)Re(M)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,oe):i.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function _e(E){const M=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,E)}else if(W){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Se(M.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Se(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Xe(E,M,W){const ie=n.get(E);M!==void 0&&re(ie.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&_e(E)}function qe(E){const M=E.texture,W=n.get(E),ie=n.get(M);E.addEventListener("dispose",B),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const oe=E.isWebGLCubeRenderTarget===!0,ue=E.isWebGLMultipleRenderTargets===!0,Ee=_(E)||a;if(oe){W.__webglFramebuffer=[];for(let he=0;he<6;he++)W.__webglFramebuffer[he]=i.createFramebuffer()}else{if(W.__webglFramebuffer=i.createFramebuffer(),ue)if(r.drawBuffers){const he=E.texture;for(let Y=0,ve=he.length;Y<ve;Y++){const de=n.get(he[Y]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Re(E)===!1){const he=ue?M:[M];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const ve=he[Y];W.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,W.__webglColorRenderbuffer[Y]);const de=s.convert(ve.format,ve.encoding),q=s.convert(ve.type),ce=v(ve.internalFormat,de,q,ve.encoding,E.isXRRenderTarget===!0),ge=Ze(E);i.renderbufferStorageMultisample(36161,ge,ce,E.width,E.height),i.framebufferRenderbuffer(36160,36064+Y,36161,W.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,ie.__webglTexture),G(34067,M,Ee);for(let he=0;he<6;he++)re(W.__webglFramebuffer[he],E,M,36064,34069+he);L(M,Ee)&&A(34067),t.unbindTexture()}else if(ue){const he=E.texture;for(let Y=0,ve=he.length;Y<ve;Y++){const de=he[Y],q=n.get(de);t.bindTexture(3553,q.__webglTexture),G(3553,de,Ee),re(W.__webglFramebuffer,E,de,36064+Y,3553),L(de,Ee)&&A(3553)}t.unbindTexture()}else{let he=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?he=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),G(he,M,Ee),re(W.__webglFramebuffer,E,M,36064,he),L(M,Ee)&&A(he),t.unbindTexture()}E.depthBuffer&&_e(E)}function Ce(E){const M=_(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,oe=W.length;ie<oe;ie++){const ue=W[ie];if(L(ue,M)){const Ee=E.isWebGLCubeRenderTarget?34067:3553,he=n.get(ue).__webglTexture;t.bindTexture(Ee,he),A(Ee),t.unbindTexture()}}}function He(E){if(a&&E.samples>0&&Re(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ie=E.height;let oe=16384;const ue=[],Ee=E.stencilBuffer?33306:36096,he=n.get(E),Y=E.isWebGLMultipleRenderTargets===!0;if(Y)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){ue.push(36064+ve),E.depthBuffer&&ue.push(Ee);const de=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(oe|=256),E.stencilBuffer&&(oe|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[ve]),de===!0&&(i.invalidateFramebuffer(36008,[Ee]),i.invalidateFramebuffer(36009,[Ee])),Y){const q=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,q,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,oe,9728),m&&i.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,he.__webglColorRenderbuffer[ve]);const de=n.get(M[ve]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,de,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function Ze(E){return Math.min(f,E.samples)}function Re(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(E){const M=o.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function Ct(E,M){const W=E.encoding,ie=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===js||W!==ii&&(W===Ke?a===!1?e.has("EXT_sRGB")===!0&&ie===rn?(E.format=js,E.minFilter=Jt,E.generateMipmaps=!1):M=cl.sRGBToLinear(M):(ie!==rn||oe!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),M}this.allocateTextureUnit=O,this.resetTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=pe,this.setTexture3D=N,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Re}function wm(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===ni)return 5121;if(s===nu)return 32819;if(s===iu)return 32820;if(s===$c)return 5120;if(s===eu)return 5122;if(s===al)return 5123;if(s===tu)return 5124;if(s===Jn)return 5125;if(s===Kn)return 5126;if(s===$i)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ru)return 6406;if(s===rn)return 6408;if(s===su)return 6409;if(s===au)return 6410;if(s===$n)return 6402;if(s===Ri)return 34041;if(s===js)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ou)return 6403;if(s===lu)return 36244;if(s===cu)return 33319;if(s===uu)return 33320;if(s===hu)return 36249;if(s===ts||s===ns||s===is||s===rs)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ts)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ts)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pa||s===Ra||s===Ia||s===Na)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Na)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fa||s===Ua)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fa)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ua)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===za||s===Oa||s===Ba||s===ka||s===Ga||s===Va||s===Ha||s===Wa||s===Xa||s===qa||s===ja||s===Ya||s===Za||s===Ja)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===za)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ba)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ka)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ga)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Va)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ha)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ja)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ya)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Za)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ja)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ss)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ss)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===du||s===Ka||s===Qa||s===$a)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ss)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ka)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Em extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),x=this._getHandJoint(l,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Am extends qt{constructor(e,t,n,r,s,o,a,c,l,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$n&&(n=Jn),n===void 0&&h===Ri&&(n=Ti),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1}}class Cm extends oi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,g=null;const p=t.getContextAttributes();let d=null,x=null;const b=[],y=[],_=new Set,S=new Map,L=new Kt;L.layers.enable(1),L.viewport=new $e;const A=new Kt;A.layers.enable(2),A.viewport=new $e;const v=[L,A],T=new Em;T.layers.enable(1),T.layers.enable(2);let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let K=b[N];return K===void 0&&(K=new Ds,b[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=b[N];return K===void 0&&(K=new Ds,b[N]=K),K.getGripSpace()},this.getHand=function(N){let K=b[N];return K===void 0&&(K=new Ds,b[N]=K),K.getHandSpace()};function B(N){const K=y.indexOf(N.inputSource);if(K===-1)return;const ae=b[K];ae!==void 0&&ae.dispatchEvent({type:N.type,data:N.inputSource})}function I(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",P);for(let N=0;N<b.length;N++){const K=y[N];K!==null&&(y[N]=null,b[N].disconnect(K))}D=null,z=null,e.setRenderTarget(d),m=null,u=null,f=null,r=null,x=null,pe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",I),r.addEventListener("inputsourceschange",P),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),x=new Un(m.framebufferWidth,m.framebufferHeight,{format:rn,type:ni,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let K=null,ae=null,ne=null;p.depth&&(ne=p.stencil?35056:33190,K=p.stencil?Ri:$n,ae=p.stencil?Ti:Jn);const G={colorFormat:32856,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(G),r.updateRenderState({layers:[u]}),x=new Un(u.textureWidth,u.textureHeight,{format:rn,type:ni,depthTexture:new Am(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const U=e.properties.get(x);U.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(N){for(let K=0;K<N.removed.length;K++){const ae=N.removed[K],ne=y.indexOf(ae);ne>=0&&(y[ne]=null,b[ne].disconnect(ae))}for(let K=0;K<N.added.length;K++){const ae=N.added[K];let ne=y.indexOf(ae);if(ne===-1){for(let U=0;U<b.length;U++)if(U>=y.length){y.push(ae),ne=U;break}else if(y[U]===null){y[U]=ae,ne=U;break}if(ne===-1)break}const G=b[ne];G&&G.connect(ae)}}const V=new R,Q=new R;function te(N,K,ae){V.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ae.matrixWorld);const ne=V.distanceTo(Q),G=K.projectionMatrix.elements,U=ae.projectionMatrix.elements,J=G[14]/(G[10]-1),se=G[14]/(G[10]+1),re=(G[9]+1)/G[5],Se=(G[9]-1)/G[5],me=(G[8]-1)/G[0],_e=(U[8]+1)/U[0],Xe=J*me,qe=J*_e,Ce=ne/(-me+_e),He=Ce*-me;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(He),N.translateZ(Ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ze=J+Ce,Re=se+Ce,Nt=Xe-He,Ct=qe+(ne-He),E=re*se/Re*Ze,M=Se*se/Re*Ze;N.projectionMatrix.makePerspective(Nt,Ct,E,M,Ze,Re)}function O(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;T.near=A.near=L.near=N.near,T.far=A.far=L.far=N.far,(D!==T.near||z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,z=T.far);const K=N.parent,ae=T.cameras;O(T,K);for(let G=0;G<ae.length;G++)O(ae[G],K);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),N.matrix.copy(T.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ne=N.children;for(let G=0,U=ne.length;G<U;G++)ne[G].updateMatrixWorld(!0);ae.length===2?te(T,L,A):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(N){c=N,u!==null&&(u.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return _};let $=null;function Z(N,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ne=!1;ae.length!==T.cameras.length&&(T.cameras.length=0,ne=!0);for(let G=0;G<ae.length;G++){const U=ae[G];let J=null;if(m!==null)J=m.getViewport(U);else{const re=f.getViewSubImage(u,U);J=re.viewport,G===0&&(e.setRenderTargetTextures(x,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(x))}let se=v[G];se===void 0&&(se=new Kt,se.layers.enable(G),se.viewport=new $e,v[G]=se),se.matrix.fromArray(U.transform.matrix),se.projectionMatrix.fromArray(U.projectionMatrix),se.viewport.set(J.x,J.y,J.width,J.height),G===0&&T.matrix.copy(se.matrix),ne===!0&&T.cameras.push(se)}}for(let ae=0;ae<b.length;ae++){const ne=y[ae],G=b[ae];ne!==null&&G!==void 0&&G.update(ne,K,l||o)}if($&&$(N,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ae=null;for(const ne of _)K.detectedPlanes.has(ne)||(ae===null&&(ae=[]),ae.push(ne));if(ae!==null)for(const ne of ae)_.delete(ne),S.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of K.detectedPlanes)if(!_.has(ne))_.add(ne),S.set(ne,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const G=S.get(ne);ne.lastChangedTime>G&&(S.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const pe=new yl;pe.setAnimationLoop(Z),this.setAnimationLoop=function(N){$=N},this.dispose=function(){}}}function Lm(i,e){function t(p,d){d.color.getRGB(p.fogColor.value,gl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,b,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&u(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,x,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const _=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,x,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=b*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Dm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(b,y){const _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=r[b.id];_===void 0&&(g(b),_=h(b),r[b.id]=_,b.addEventListener("dispose",d));const S=y.program;n.updateUBOMapping(b,S);const L=e.render.frame;s[b.id]!==L&&(u(b),s[b.id]=L)}function h(b){const y=f();b.__bindingPointIndex=y;const _=i.createBuffer(),S=b.__size,L=b.usage;return i.bindBuffer(35345,_),i.bufferData(35345,S,L),i.bindBuffer(35345,null),i.bindBufferBase(35345,y,_),_}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=r[b.id],_=b.uniforms,S=b.__cache;i.bindBuffer(35345,y);for(let L=0,A=_.length;L<A;L++){const v=_[L];if(m(v,L,S)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let B=0;B<D.length;B++){const I=D[B],P=p(I);typeof I=="number"?(v.__data[0]=I,i.bufferSubData(35345,T+z,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,z),z+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,v.__data)}}i.bindBuffer(35345,null)}function m(b,y,_){const S=b.value;if(_[y]===void 0){if(typeof S=="number")_[y]=S;else{const L=Array.isArray(S)?S:[S],A=[];for(let v=0;v<L.length;v++)A.push(L[v].clone());_[y]=A}return!0}else if(typeof S=="number"){if(_[y]!==S)return _[y]=S,!0}else{const L=Array.isArray(_[y])?_[y]:[_[y]],A=Array.isArray(S)?S:[S];for(let v=0;v<L.length;v++){const T=L[v];if(T.equals(A[v])===!1)return T.copy(A[v]),!0}}return!1}function g(b){const y=b.uniforms;let _=0;const S=16;let L=0;for(let A=0,v=y.length;A<v;A++){const T=y[A],D={boundary:0,storage:0},z=Array.isArray(T.value)?T.value:[T.value];for(let B=0,I=z.length;B<I;B++){const P=z[B],V=p(P);D.boundary+=V.boundary,D.storage+=V.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=_,A>0){L=_%S;const B=S-L;L!==0&&B-D.boundary<0&&(_+=S-L,T.__offset=_)}_+=D.storage}return L=_%S,L>0&&(_+=S-L),b.__size=_,b.__cache={},this}function p(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function d(b){const y=b.target;y.removeEventListener("dispose",d);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function x(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:x}}function Pm(){const i=zr("canvas");return i.style.display="block",i}function Tl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Pm(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let f=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ii,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,b=0,y=null,_=-1,S=null;const L=new $e,A=new $e;let v=null,T=e.width,D=e.height,z=1,B=null,I=null;const P=new $e(0,0,T,D),V=new $e(0,0,T,D);let Q=!1;const te=new vl;let O=!1,$=!1,Z=null;const pe=new at,N=new Ae,K=new R,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?z:1}let G=t;function U(w,k){for(let X=0;X<w.length;X++){const F=w[X],j=e.getContext(F,k);if(j!==null)return j}return null}try{const w={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ta}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",we,!1),G===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),G=U(k,w),G===null)throw U(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,se,re,Se,me,_e,Xe,qe,Ce,He,Ze,Re,Nt,Ct,E,M,W,ie,oe,ue,Ee,he,Y,ve;function de(){J=new Vd(G),se=new Ud(G,J,i),J.init(se),he=new wm(G,J,se),re=new Sm(G,J,se),Se=new Xd,me=new lm,_e=new bm(G,J,re,me,se,he,Se),Xe=new Od(p),qe=new Gd(p),Ce=new $u(G,se),Y=new Nd(G,J,Ce,se),He=new Hd(G,Ce,Se,Y),Ze=new Zd(G,He,Ce,Se),oe=new Yd(G,se,_e),M=new zd(me),Re=new om(p,Xe,qe,J,se,Y,M),Nt=new Lm(p,me),Ct=new um,E=new gm(J,se),ie=new Id(p,Xe,qe,re,Ze,h,o),W=new Mm(p,Ze,se),ve=new Dm(G,Se,se,re),ue=new Fd(G,J,Se,se),Ee=new Wd(G,J,Se,se),Se.programs=Re.programs,p.capabilities=se,p.extensions=J,p.properties=me,p.renderLists=Ct,p.shadowMap=W,p.state=re,p.info=Se}de();const q=new Cm(p,G);this.xr=q,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(T,D,!1))},this.getSize=function(w){return w.set(T,D)},this.setSize=function(w,k,X){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,D=k,e.width=Math.floor(w*z),e.height=Math.floor(k*z),X!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(T*z,D*z).floor()},this.setDrawingBufferSize=function(w,k,X){T=w,D=k,z=X,e.width=Math.floor(w*X),e.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,k,X,F){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,k,X,F),re.viewport(L.copy(P).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,k,X,F){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,k,X,F),re.scissor(A.copy(V).multiplyScalar(z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){re.setScissorTest(Q=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,k=!0,X=!0){let F=0;w&&(F|=16384),k&&(F|=256),X&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",we,!1),Ct.dispose(),E.dispose(),me.dispose(),Xe.dispose(),qe.dispose(),Ze.dispose(),Y.dispose(),ve.dispose(),Re.dispose(),q.dispose(),q.removeEventListener("sessionstart",fe),q.removeEventListener("sessionend",xe),Z&&(Z.dispose(),Z=null),Ne.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Se.autoReset,k=W.enabled,X=W.autoUpdate,F=W.needsUpdate,j=W.type;de(),Se.autoReset=w,W.enabled=k,W.autoUpdate=X,W.needsUpdate=F,W.type=j}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const k=w.target;k.removeEventListener("dispose",Ve),Je(k)}function Je(w){C(w),me.remove(w)}function C(w){const k=me.get(w).programs;k!==void 0&&(k.forEach(function(X){Re.releaseProgram(X)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,F,j,Me){k===null&&(k=ae);const Te=j.isMesh&&j.matrixWorld.determinant()<0,De=Pl(w,k,X,F,j);re.setMaterial(F,Te);let Ie=X.index,Ge=1;F.wireframe===!0&&(Ie=He.getWireframeAttribute(X),Ge=2);const Fe=X.drawRange,Ue=X.attributes.position;let nt=Fe.start*Ge,Ft=(Fe.start+Fe.count)*Ge;Me!==null&&(nt=Math.max(nt,Me.start*Ge),Ft=Math.min(Ft,(Me.start+Me.count)*Ge)),Ie!==null?(nt=Math.max(nt,0),Ft=Math.min(Ft,Ie.count)):Ue!=null&&(nt=Math.max(nt,0),Ft=Math.min(Ft,Ue.count));const dn=Ft-nt;if(dn<0||dn===1/0)return;Y.setup(j,F,De,X,Ie);let On,it=ue;if(Ie!==null&&(On=Ce.get(Ie),it=Ee,it.setIndex(On)),j.isMesh)F.wireframe===!0?(re.setLineWidth(F.wireframeLinewidth*ne()),it.setMode(1)):it.setMode(4);else if(j.isLine){let ze=F.linewidth;ze===void 0&&(ze=1),re.setLineWidth(ze*ne()),j.isLineSegments?it.setMode(1):j.isLineLoop?it.setMode(2):it.setMode(3)}else j.isPoints?it.setMode(0):j.isSprite&&it.setMode(4);if(j.isInstancedMesh)it.renderInstances(nt,dn,j.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,jr=Math.min(X.instanceCount,ze);it.renderInstances(nt,dn,jr)}else it.render(nt,dn)},this.compile=function(w,k){function X(F,j,Me){F.transparent===!0&&F.side===Rn&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,xt(F,j,Me),F.side=Fn,F.needsUpdate=!0,xt(F,j,Me),F.side=Rn):xt(F,j,Me)}u=E.get(w),u.init(),g.push(u),w.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights(p.physicallyCorrectLights),w.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let Me=0;Me<j.length;Me++){const Te=j[Me];X(Te,w,F)}else X(j,w,F)}),g.pop(),u=null};let H=null;function ee(w){H&&H(w)}function fe(){Ne.stop()}function xe(){Ne.start()}const Ne=new yl;Ne.setAnimationLoop(ee),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(w){H=w,q.setAnimationLoop(w),w===null?Ne.stop():Ne.start()},q.addEventListener("sessionstart",fe),q.addEventListener("sessionend",xe),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,k,y),u=E.get(w,g.length),u.init(),g.push(u),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(pe),$=this.localClippingEnabled,O=M.init(this.clippingPlanes,$),f=Ct.get(w,m.length),f.init(),m.push(f),et(w,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(B,I),O===!0&&M.beginShadows();const X=u.state.shadowsArray;if(W.render(X,w,k),O===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,w),u.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const F=k.cameras;for(let j=0,Me=F.length;j<Me;j++){const Te=F[j];tt(f,w,Te,Te.viewport)}}else tt(f,w,k);y!==null&&(_e.updateMultisampleRenderTarget(y),_e.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(p,w,k),Y.resetDefaultState(),_=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function et(w,k,X,F){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){F&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const Te=Ze.update(w),De=w.material;De.visible&&f.push(w,Te,De,X,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Se.render.frame&&(w.skeleton.update(),w.skeleton.frame=Se.render.frame),!w.frustumCulled||te.intersectsObject(w))){F&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const Te=Ze.update(w),De=w.material;if(Array.isArray(De)){const Ie=Te.groups;for(let Ge=0,Fe=Ie.length;Ge<Fe;Ge++){const Ue=Ie[Ge],nt=De[Ue.materialIndex];nt&&nt.visible&&f.push(w,Te,nt,X,K.z,Ue)}}else De.visible&&f.push(w,Te,De,X,K.z,null)}}const Me=w.children;for(let Te=0,De=Me.length;Te<De;Te++)et(Me[Te],k,X,F)}function tt(w,k,X,F){const j=w.opaque,Me=w.transmissive,Te=w.transparent;u.setupLightsView(X),O===!0&&M.setGlobalState(p.clippingPlanes,X),Me.length>0&&on(j,k,X),F&&re.viewport(L.copy(F)),j.length>0&&je(j,k,X),Me.length>0&&je(Me,k,X),Te.length>0&&je(Te,k,X),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function on(w,k,X){const F=se.isWebGL2;Z===null&&(Z=new Un(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?$i:ni,minFilter:Qi,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(N),F?Z.setSize(N.x,N.y):Z.setSize(Ur(N.x),Ur(N.y));const j=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const Me=p.toneMapping;p.toneMapping=wn,je(w,k,X),p.toneMapping=Me,_e.updateMultisampleRenderTarget(Z),_e.updateRenderTargetMipmap(Z),p.setRenderTarget(j)}function je(w,k,X){const F=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Me=w.length;j<Me;j++){const Te=w[j],De=Te.object,Ie=Te.geometry,Ge=F===null?Te.material:F,Fe=Te.group;De.layers.test(X.layers)&&Yt(De,k,X,Ie,Ge,Fe)}}function Yt(w,k,X,F,j,Me){w.onBeforeRender(p,k,X,F,j,Me),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(p,k,X,F,w,Me),j.transparent===!0&&j.side===Rn&&j.forceSinglePass===!1?(j.side=Xt,j.needsUpdate=!0,p.renderBufferDirect(X,k,F,j,w,Me),j.side=Fn,j.needsUpdate=!0,p.renderBufferDirect(X,k,F,j,w,Me),j.side=Rn):p.renderBufferDirect(X,k,F,j,w,Me),w.onAfterRender(p,k,X,F,j,Me)}function xt(w,k,X){k.isScene!==!0&&(k=ae);const F=me.get(w),j=u.state.lights,Me=u.state.shadowsArray,Te=j.state.version,De=Re.getParameters(w,j.state,Me,k,X),Ie=Re.getProgramCacheKey(De);let Ge=F.programs;F.environment=w.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(w.isMeshStandardMaterial?qe:Xe).get(w.envMap||F.environment),Ge===void 0&&(w.addEventListener("dispose",Ve),Ge=new Map,F.programs=Ge);let Fe=Ge.get(Ie);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===Te)return la(w,De),Fe}else De.uniforms=Re.getUniforms(w),w.onBuild(X,De,p),w.onBeforeCompile(De,p),Fe=Re.acquireProgram(De,Ie),Ge.set(Ie,Fe),F.uniforms=De.uniforms;const Ue=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=M.uniform),la(w,De),F.needsLights=Il(w),F.lightsStateVersion=Te,F.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.directionalShadowMap.value=j.state.directionalShadowMap,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotShadowMap.value=j.state.spotShadowMap,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMap.value=j.state.pointShadowMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix);const nt=Fe.getUniforms(),Ft=Ir.seqWithValue(nt.seq,Ue);return F.currentProgram=Fe,F.uniformsList=Ft,Fe}function la(w,k){const X=me.get(w);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Pl(w,k,X,F,j){k.isScene!==!0&&(k=ae),_e.resetTextureUnits();const Me=k.fog,Te=F.isMeshStandardMaterial?k.environment:null,De=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ii,Ie=(F.isMeshStandardMaterial?qe:Xe).get(F.envMap||Te),Ge=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!F.normalMap&&!!X.attributes.tangent,Ue=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,Ft=!!X.morphAttributes.color,dn=F.toneMapped?p.toneMapping:wn,On=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=On!==void 0?On.length:0,ze=me.get(F),jr=u.state.lights;if(O===!0&&($===!0||w!==S)){const Ut=w===S&&F.id===_;M.setState(F,w,Ut)}let ut=!1;F.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==jr.state.version||ze.outputEncoding!==De||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ie||F.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==M.numPlanes||ze.numIntersection!==M.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==Fe||ze.morphTargets!==Ue||ze.morphNormals!==nt||ze.morphColors!==Ft||ze.toneMapping!==dn||se.isWebGL2===!0&&ze.morphTargetsCount!==it)&&(ut=!0):(ut=!0,ze.__version=F.version);let Bn=ze.currentProgram;ut===!0&&(Bn=xt(F,k,j));let ca=!1,Oi=!1,Yr=!1;const St=Bn.getUniforms(),kn=ze.uniforms;if(re.useProgram(Bn.program)&&(ca=!0,Oi=!0,Yr=!0),F.id!==_&&(_=F.id,Oi=!0),ca||S!==w){if(St.setValue(G,"projectionMatrix",w.projectionMatrix),se.logarithmicDepthBuffer&&St.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Oi=!0,Yr=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Ut=St.map.cameraPosition;Ut!==void 0&&Ut.setValue(G,K.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&St.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&St.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){St.setOptional(G,j,"bindMatrix"),St.setOptional(G,j,"bindMatrixInverse");const Ut=j.skeleton;Ut&&(se.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),St.setValue(G,"boneTexture",Ut.boneTexture,_e),St.setValue(G,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zr=X.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&se.isWebGL2===!0)&&oe.update(j,X,F,Bn),(Oi||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,St.setValue(G,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(kn.envMap.value=Ie,kn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Oi&&(St.setValue(G,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&Rl(kn,Yr),Me&&F.fog===!0&&Nt.refreshFogUniforms(kn,Me),Nt.refreshMaterialUniforms(kn,F,z,D,Z),Ir.upload(G,ze.uniformsList,kn,_e)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ir.upload(G,ze.uniformsList,kn,_e),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&St.setValue(G,"center",j.center),St.setValue(G,"modelViewMatrix",j.modelViewMatrix),St.setValue(G,"normalMatrix",j.normalMatrix),St.setValue(G,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ut=F.uniformsGroups;for(let Jr=0,Nl=Ut.length;Jr<Nl;Jr++)if(se.isWebGL2){const ua=Ut[Jr];ve.update(ua,Bn),ve.bind(ua,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function Rl(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,k,X){me.get(w.texture).__webglTexture=k,me.get(w.depthTexture).__webglTexture=X;const F=me.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const X=me.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){y=w,x=k,b=X;let F=!0,j=null,Me=!1,Te=!1;if(w){const Ie=me.get(w);Ie.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),F=!1):Ie.__webglFramebuffer===void 0?_e.setupRenderTarget(w):Ie.__hasExternalTextures&&_e.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const Fe=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Fe[k],Me=!0):se.isWebGL2&&w.samples>0&&_e.useMultisampledRTT(w)===!1?j=me.get(w).__webglMultisampledFramebuffer:j=Fe,L.copy(w.viewport),A.copy(w.scissor),v=w.scissorTest}else L.copy(P).multiplyScalar(z).floor(),A.copy(V).multiplyScalar(z).floor(),v=Q;if(re.bindFramebuffer(36160,j)&&se.drawBuffers&&F&&re.drawBuffers(w,j),re.viewport(L),re.scissor(A),re.setScissorTest(v),Me){const Ie=me.get(w.texture);G.framebufferTexture2D(36160,36064,34069+k,Ie.__webglTexture,X)}else if(Te){const Ie=me.get(w.texture),Ge=k||0;G.framebufferTextureLayer(36160,36064,Ie.__webglTexture,X||0,Ge)}_=-1},this.readRenderTargetPixels=function(w,k,X,F,j,Me,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){re.bindFramebuffer(36160,De);try{const Ie=w.texture,Ge=Ie.format,Fe=Ie.type;if(Ge!==rn&&he.convert(Ge)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Fe===$i&&(J.has("EXT_color_buffer_half_float")||se.isWebGL2&&J.has("EXT_color_buffer_float"));if(Fe!==ni&&he.convert(Fe)!==G.getParameter(35738)&&!(Fe===Kn&&(se.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-F&&X>=0&&X<=w.height-j&&G.readPixels(k,X,F,j,he.convert(Ge),he.convert(Fe),Me)}finally{const Ie=y!==null?me.get(y).__webglFramebuffer:null;re.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(w,k,X=0){const F=Math.pow(2,-X),j=Math.floor(k.image.width*F),Me=Math.floor(k.image.height*F);_e.setTexture2D(k,0),G.copyTexSubImage2D(3553,X,0,0,w.x,w.y,j,Me),re.unbindTexture()},this.copyTextureToTexture=function(w,k,X,F=0){const j=k.image.width,Me=k.image.height,Te=he.convert(X.format),De=he.convert(X.type);_e.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?G.texSubImage2D(3553,F,w.x,w.y,j,Me,Te,De,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(3553,F,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):G.texSubImage2D(3553,F,w.x,w.y,Te,De,k.image),F===0&&X.generateMipmaps&&G.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=w.max.x-w.min.x+1,Te=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,Ie=he.convert(F.format),Ge=he.convert(F.type);let Fe;if(F.isData3DTexture)_e.setTexture3D(F,0),Fe=32879;else if(F.isDataArrayTexture)_e.setTexture2DArray(F,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Ue=G.getParameter(3314),nt=G.getParameter(32878),Ft=G.getParameter(3316),dn=G.getParameter(3315),On=G.getParameter(32877),it=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,it.width),G.pixelStorei(32878,it.height),G.pixelStorei(3316,w.min.x),G.pixelStorei(3315,w.min.y),G.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Fe,j,k.x,k.y,k.z,Me,Te,De,Ie,Ge,it.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,j,k.x,k.y,k.z,Me,Te,De,Ie,it.data)):G.texSubImage3D(Fe,j,k.x,k.y,k.z,Me,Te,De,Ie,Ge,it),G.pixelStorei(3314,Ue),G.pixelStorei(32878,nt),G.pixelStorei(3316,Ft),G.pixelStorei(3315,dn),G.pixelStorei(32877,On),j===0&&F.generateMipmaps&&G.generateMipmap(Fe),re.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),re.unbindTexture()},this.resetState=function(){x=0,b=0,y=null,re.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Rm extends Tl{}Rm.prototype.isWebGL1Renderer=!0;class wr extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new R;class In{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new In(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new R,Uo=new R,zo=new at,Ps=new fl,Er=new Ui;class Nm extends It{constructor(e=new jt,t=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Fo.fromBufferAttribute(t,r-1),Uo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Fo.distanceTo(Uo);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Er.radius+=s,e.ray.intersectsSphere(Er)===!1)return;zo.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(zo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,f=new R,u=new R,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let y=x,_=b-1;y<_;y+=m){const S=g.getX(y),L=g.getX(y+1);if(l.fromBufferAttribute(d,S),h.fromBufferAttribute(d,L),Ps.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),b=Math.min(d.count,o.start+o.count);for(let y=x,_=b-1;y<_;y+=m){if(l.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),Ps.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Oo=new R,Bo=new R;class Fm extends Nm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Oo.fromBufferAttribute(t,r),Bo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oo.distanceTo(Bo);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aa extends jt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new R,u=new R,m=[],g=[],p=[],d=[];for(let x=0;x<=n;x++){const b=[],y=x/n;let _=0;x==0&&o==0?_=.5/t:x==n&&c==Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const L=S/t;f.x=-e*Math.cos(r+L*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+L*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),p.push(u.x,u.y,u.z),d.push(L+_,1-y),b.push(l++)}h.push(b)}for(let x=0;x<n;x++)for(let b=0;b<t;b++){const y=h[x][b+1],_=h[x][b],S=h[x+1][b],L=h[x+1][b+1];(x!==0||o>0)&&m.push(y,_,L),(x!==n-1||c<Math.PI)&&m.push(_,S,L)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(d,2))}static fromJSON(e){return new aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Um extends jt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new R,s=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,m=f.count;for(let g=u,p=u+m;g<p;g+=3)for(let d=0;d<3;d++){const x=a.getX(g+d),b=a.getX(g+(d+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,b),ko(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),ko(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ot(t,3))}}}function ko(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class zm extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Om{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Go();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Go(){return(typeof performance>"u"?Date:performance).now()}class Js extends Im{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Vo=new R,Tr=new R;class Bm{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vo.subVectors(e,this.start),Tr.subVectors(this.end,this.start);const n=Tr.dot(Tr);let s=Tr.dot(Vo)/n;return t&&(s=At(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class km extends Fm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new jt;r.setAttribute("position",new ot(t,3)),r.setAttribute("color",new ot(n,3));const s=new Al({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);const Rs={type:"change"},Is={type:"start"},Ns={type:"end"};class Gm extends oi{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.target=new R;const s=1e-6,o=new R;let a=1,c=r.NONE,l=r.NONE,h=0,f=0,u=0;const m=new R,g=new Ae,p=new Ae,d=new R,x=new Ae,b=new Ae,y=new Ae,_=new Ae,S=[],L={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const U=n.domElement.getBoundingClientRect(),J=n.domElement.ownerDocument.documentElement;n.screen.left=U.left+window.pageXOffset-J.clientLeft,n.screen.top=U.top+window.pageYOffset-J.clientTop,n.screen.width=U.width,n.screen.height=U.height};const A=function(){const U=new Ae;return function(se,re){return U.set((se-n.screen.left)/n.screen.width,(re-n.screen.top)/n.screen.height),U}}(),v=function(){const U=new Ae;return function(se,re){return U.set((se-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-re))/n.screen.width),U}}();this.rotateCamera=function(){const U=new R,J=new Fi,se=new R,re=new R,Se=new R,me=new R;return function(){me.set(p.x-g.x,p.y-g.y,0);let Xe=me.length();Xe?(m.copy(n.object.position).sub(n.target),se.copy(m).normalize(),re.copy(n.object.up).normalize(),Se.crossVectors(re,se).normalize(),re.setLength(p.y-g.y),Se.setLength(p.x-g.x),me.copy(re.add(Se)),U.crossVectors(me,m).normalize(),Xe*=n.rotateSpeed,J.setFromAxisAngle(U,Xe),m.applyQuaternion(J),n.object.up.applyQuaternion(J),d.copy(U),u=Xe):!n.staticMoving&&u&&(u*=Math.sqrt(1-n.dynamicDampingFactor),m.copy(n.object.position).sub(n.target),J.setFromAxisAngle(d,u),m.applyQuaternion(J),n.object.up.applyQuaternion(J)),g.copy(p)}}(),this.zoomCamera=function(){let U;c===r.TOUCH_ZOOM_PAN?(U=h/f,h=f,n.object.isPerspectiveCamera?m.multiplyScalar(U):n.object.isOrthographicCamera?(n.object.zoom/=U,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(U=1+(b.y-x.y)*n.zoomSpeed,U!==1&&U>0&&(n.object.isPerspectiveCamera?m.multiplyScalar(U):n.object.isOrthographicCamera?(n.object.zoom/=U,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?x.copy(b):x.y+=(b.y-x.y)*this.dynamicDampingFactor)},this.panCamera=function(){const U=new Ae,J=new R,se=new R;return function(){if(U.copy(_).sub(y),U.lengthSq()){if(n.object.isOrthographicCamera){const Se=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,me=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;U.x*=Se,U.y*=me}U.multiplyScalar(m.length()*n.panSpeed),se.copy(m).cross(n.object.up).setLength(U.x),se.add(J.copy(n.object.up).setLength(U.y)),n.object.position.add(se),n.target.add(se),n.staticMoving?y.copy(_):y.add(U.subVectors(_,y).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(m.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,m.setLength(n.maxDistance)),x.copy(b)),m.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,m.setLength(n.minDistance)),x.copy(b)))},this.update=function(){m.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,m),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(Rs),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>s||a!==n.object.zoom)&&(n.dispatchEvent(Rs),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),m.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Rs),o.copy(n.object.position),a=n.object.zoom};function T(U){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",z)),K(U),U.pointerType==="touch"?$(U):V(U))}function D(U){n.enabled!==!1&&(U.pointerType==="touch"?Z(U):Q(U))}function z(U){n.enabled!==!1&&(U.pointerType==="touch"?pe(U):te(),ae(U),S.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",z)))}function B(U){ae(U)}function I(U){n.enabled!==!1&&(window.removeEventListener("keydown",I),l===r.NONE&&(U.code===n.keys[r.ROTATE]&&!n.noRotate?l=r.ROTATE:U.code===n.keys[r.ZOOM]&&!n.noZoom?l=r.ZOOM:U.code===n.keys[r.PAN]&&!n.noPan&&(l=r.PAN)))}function P(){n.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",I))}function V(U){if(c===r.NONE)switch(U.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const J=l!==r.NONE?l:c;J===r.ROTATE&&!n.noRotate?(p.copy(v(U.pageX,U.pageY)),g.copy(p)):J===r.ZOOM&&!n.noZoom?(x.copy(A(U.pageX,U.pageY)),b.copy(x)):J===r.PAN&&!n.noPan&&(y.copy(A(U.pageX,U.pageY)),_.copy(y)),n.dispatchEvent(Is)}function Q(U){const J=l!==r.NONE?l:c;J===r.ROTATE&&!n.noRotate?(g.copy(p),p.copy(v(U.pageX,U.pageY))):J===r.ZOOM&&!n.noZoom?b.copy(A(U.pageX,U.pageY)):J===r.PAN&&!n.noPan&&_.copy(A(U.pageX,U.pageY))}function te(){c=r.NONE,n.dispatchEvent(Ns)}function O(U){if(n.enabled!==!1&&n.noZoom!==!0){switch(U.preventDefault(),U.deltaMode){case 2:x.y-=U.deltaY*.025;break;case 1:x.y-=U.deltaY*.01;break;default:x.y-=U.deltaY*25e-5;break}n.dispatchEvent(Is),n.dispatchEvent(Ns)}}function $(U){switch(ne(U),S.length){case 1:c=r.TOUCH_ROTATE,p.copy(v(S[0].pageX,S[0].pageY)),g.copy(p);break;default:c=r.TOUCH_ZOOM_PAN;const J=S[0].pageX-S[1].pageX,se=S[0].pageY-S[1].pageY;f=h=Math.sqrt(J*J+se*se);const re=(S[0].pageX+S[1].pageX)/2,Se=(S[0].pageY+S[1].pageY)/2;y.copy(A(re,Se)),_.copy(y);break}n.dispatchEvent(Is)}function Z(U){switch(ne(U),S.length){case 1:g.copy(p),p.copy(v(U.pageX,U.pageY));break;default:const J=G(U),se=U.pageX-J.x,re=U.pageY-J.y;f=Math.sqrt(se*se+re*re);const Se=(U.pageX+J.x)/2,me=(U.pageY+J.y)/2;_.copy(A(Se,me));break}}function pe(U){switch(S.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,p.copy(v(U.pageX,U.pageY)),g.copy(p);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let J=0;J<S.length;J++)if(S[J].pointerId!==U.pointerId){const se=L[S[J].pointerId];p.copy(v(se.x,se.y)),g.copy(p);break}break}n.dispatchEvent(Ns)}function N(U){n.enabled!==!1&&U.preventDefault()}function K(U){S.push(U)}function ae(U){delete L[U.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==U.pointerId){S.splice(J,1);return}}function ne(U){let J=L[U.pointerId];J===void 0&&(J=new Ae,L[U.pointerId]=J),J.set(U.pageX,U.pageY)}function G(U){const J=U.pointerId===S[0].pointerId?S[1]:S[0];return L[J.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",O),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",z),window.removeEventListener("keydown",I),window.removeEventListener("keyup",P)},this.domElement.addEventListener("contextmenu",N),this.domElement.addEventListener("pointerdown",T),this.domElement.addEventListener("pointercancel",B),this.domElement.addEventListener("wheel",O,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",P),this.handleResize(),this.update()}}const Vm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class qr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hm=new Ml(-1,1,1,-1,0,1),oa=new jt;oa.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));oa.setAttribute("uv",new ot([0,2,0,0,2,0],2));class Wm{constructor(e){this._mesh=new Qt(oa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cl extends qr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wr.clone(e.uniforms),this.material=new an({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Or extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Ll extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ae);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cl(Vm),this.clock=new Om}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(o instanceof Or?n=!0:o instanceof Ll&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ho extends qr{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const qm={uniforms:{tDiffuse:{value:null},resolution:{value:new Ae(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},jm={name:"Dark",ui:{background:"#000",textColor:"#eee",border:"rgba(255, 255, 255, 0.6)",focusBorder:"#fff",thickBorder:"#fff",githubImage:"github-mark-white.svg"},canvas:{foreground:"#aaaaaa",isometryColors:[["#ff0000","#ff6666"],["#3366ff","#5588ff"]],axisColors:["#990000","#007700","#3333cc"]}},Ym={name:"Light",ui:{background:"white",textColor:"#0d0d0d",border:"rgba(0, 0, 0, 0.6)",focusBorder:"rgb(0, 135, 255)",thickBorder:"rgba(0, 0, 0, 0.8)",githubImage:"github-mark.svg"},canvas:{foreground:"#000000",isometryColors:[["#ff0000","#cc0000"],["#0000ff","#0000cc"]],axisColors:["#ff9999","#66ff66","#9999ff"]}},tr=[Ym,jm],Qn=Ci(tr[0]),Zm=Vl(Qn,i=>({bgColor:i.ui.background,borderColor:i.ui.border,focusBorderColor:i.ui.focusBorder,textColor:i.ui.textColor,thickBorderColor:i.ui.thickBorder,isometry1Color:i.canvas.isometryColors[0][0],isometry2Color:i.canvas.isometryColors[1][0]}));le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pt.line={uniforms:Wr.merge([le.common,le.fog,le.line]),vertexShader:`
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

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

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

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

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

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Dl extends an{constructor(e){super({type:"LineMaterial",uniforms:Wr.clone(Pt.line.uniforms),vertexShader:Pt.line.vertexShader,fragmentShader:Pt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Wo=new zn,Ar=new R;class Ks extends zm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ot(e,3)),this.setAttribute("uv",new ot(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Js(t,6,1);return this.setAttribute("instanceStart",new In(n,3,0)),this.setAttribute("instanceEnd",new In(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Js(t,6,1);return this.setAttribute("instanceColorStart",new In(n,3,0)),this.setAttribute("instanceColorEnd",new In(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Um(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Wo.setFromBufferAttribute(t),this.boundingBox.union(Wo))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ar.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ar)),Ar.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ar));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Xo=new R,qo=new R,pt=new $e,mt=new $e,cn=new $e,Fs=new R,Us=new at,gt=new Bm,jo=new R,Cr=new zn,Lr=new Ui,un=new $e;let fn,ti;function Yo(i,e,t){return un.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),un.multiplyScalar(1/un.w),un.x=ti/t.width,un.y=ti/t.height,un.applyMatrix4(i.projectionMatrixInverse),un.multiplyScalar(1/un.w),Math.abs(Math.max(un.x,un.y))}function Jm(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,c=o;a<c;a++){gt.start.fromBufferAttribute(r,a),gt.end.fromBufferAttribute(s,a),gt.applyMatrix4(t);const l=new R,h=new R;fn.distanceSqToSegment(gt.start,gt.end,h,l),h.distanceTo(l)<ti*.5&&e.push({point:h,pointOnLine:l,distance:fn.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv2:null})}}function Km(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;fn.at(1,cn),cn.w=1,cn.applyMatrix4(e.matrixWorldInverse),cn.applyMatrix4(n),cn.multiplyScalar(1/cn.w),cn.x*=s.x/2,cn.y*=s.y/2,cn.z=0,Fs.copy(cn),Us.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,m=h;u<m;u++){if(pt.fromBufferAttribute(c,u),mt.fromBufferAttribute(l,u),pt.w=1,mt.w=1,pt.applyMatrix4(Us),mt.applyMatrix4(Us),pt.z>f&&mt.z>f)continue;if(pt.z>f){const y=pt.z-mt.z,_=(pt.z-f)/y;pt.lerp(mt,_)}else if(mt.z>f){const y=mt.z-pt.z,_=(mt.z-f)/y;mt.lerp(pt,_)}pt.applyMatrix4(n),mt.applyMatrix4(n),pt.multiplyScalar(1/pt.w),mt.multiplyScalar(1/mt.w),pt.x*=s.x/2,pt.y*=s.y/2,mt.x*=s.x/2,mt.y*=s.y/2,gt.start.copy(pt),gt.start.z=0,gt.end.copy(mt),gt.end.z=0;const p=gt.closestPointToPointParameter(Fs,!0);gt.at(p,jo);const d=Iu.lerp(pt.z,mt.z,p),x=d>=-1&&d<=1,b=Fs.distanceTo(jo)<ti*.5;if(x&&b){gt.start.fromBufferAttribute(c,u),gt.end.fromBufferAttribute(l,u),gt.start.applyMatrix4(o),gt.end.applyMatrix4(o);const y=new R,_=new R;fn.distanceSqToSegment(gt.start,gt.end,_,y),t.push({point:_,pointOnLine:y,distance:fn.origin.distanceTo(_),object:i,face:null,faceIndex:u,uv:null,uv2:null})}}}class Qm extends Qt{constructor(e=new Ks,t=new Dl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Xo.fromBufferAttribute(t,o),qo.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Xo.distanceTo(qo);const s=new Js(r,2,1);return e.setAttribute("instanceDistanceStart",new In(s,1,0)),e.setAttribute("instanceDistanceEnd",new In(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;fn=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;ti=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Lr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=ti*.5;else{const f=Math.max(r.near,Lr.distanceToPoint(fn.origin));l=Yo(r,f,c.resolution)}if(Lr.radius+=l,fn.intersectsSphere(Lr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Cr.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=ti*.5;else{const f=Math.max(r.near,Cr.distanceToPoint(fn.origin));h=Yo(r,f,c.resolution)}Cr.expandByScalar(h),fn.intersectsBox(Cr)!==!1&&(n?Jm(this,t):Km(this,r,t))}}function zs(i){return gc(Li(i[1].re,i[1].im,i[0].re,i[0].im),Li(i[3].re,i[3].im,i[2].re,i[2].im))}function Br(i){const e=i.r*i.r+i.i*i.i,t=i.j*i.j+i.k*i.k,n=e+t+2*Math.sqrt(t)+1;return An(i.r*2/n,-i.i*2/n,(e+t-1)/n)}function Zo(i){const e=wi(i),t=e+1;return An(i.re*2/t,-i.im*2/t,(e-1)/t)}function $m(i,e){const t=(ks(i)-ks(e))/2,n=Qe(i.r,i.i),r=Qe(i.r-e.r,i.i-e.i),s=wi(r),o=Xl(r,n),a=(t-o)/s,c=Ht(ga(r,a),n),l=Math.sqrt((i.r-c.re)**2+(i.i-c.im)**2+i.j**2+i.k**2),h=ga(r,l/Ni(r)),f=Ht(c,h),u=Zi(c,h);return[f,u]}function eg(i,e,t,n){const r=Br(i),s=Br(e),[o,a]=$m(i,e),c=Zo(o),l=Zo(a),h=rc(c,l),f=oc(h);if(isNaN(f)||f<1e-10){const y=ac(Kr(s,r),t-1);n.push(r.x,r.y,r.z);const _=uc(r);for(let S=1;S<t-1;S++)ic(_,y),n.push(_.x,_.y,_.z,_.x,_.y,_.z);n.push(s.x,s.y,s.z);return}const u=sc(h,(1+cc(c,l)/f)/2),m=Kr(r,u),g=Kr(s,u),p=Ma(m),d=Ma(g),x=_c(p,d,1/(t-1));let b=m;n.push(r.x,r.y,r.z);for(let y=1;y<t-1;y++){b=xc(b,x);const _=b.x+u.x,S=b.y+u.y,L=b.z+u.z;n.push(_,S,L,_,S,L)}n.push(s.x,s.y,s.z)}function tg(i,e){const t=i.subscribe(n=>{n!==void 0&&(e(n),t())});return t}class ng{constructor(e,t){ln(this,"origin",Li(0,0,1,0));ln(this,"mesh");ln(this,"geometry");ln(this,"generators",[]);ln(this,"depth",0);ln(this,"colors",[]);ln(this,"minSize",.015);ln(this,"uniforms",Ci());ln(this,"ready",Ci(!1));const n=new Dl({vertexColors:!0,linewidth:2,resolution:new Ae(e,t),worldUnits:!1});n.onBeforeCompile=r=>{const s=r.fragmentShader.indexOf("#include <premultiplied_alpha_fragment>"),o=r.fragmentShader.slice(0,s),a=r.fragmentShader.slice(s);r.fragmentShader=`
        uniform vec3 fadeColor;
        uniform float fadeNear;
        uniform float fadeFar;
        uniform float fadeStrength;
      `+o+`
          float blend = (gl_FragCoord.z / gl_FragCoord.w - fadeNear)/(fadeFar - fadeNear) * fadeStrength;
          gl_FragColor = mix(gl_FragColor, vec4(fadeColor, alpha), blend);
      `+a},n.uniforms.fadeColor={value:void 0},n.uniforms.fadeNear={type:"f",value:void 0},n.uniforms.fadeFar={type:"f",value:void 0},n.uniforms.fadeStrength={type:"f",value:void 0},this.uniforms.subscribe(r=>{r&&(n.uniforms.fadeColor.value=r.fadeColor,n.uniforms.fadeNear.value=r.fadeNear,n.uniforms.fadeFar.value=r.fadeFar,n.uniforms.fadeStrength.value=r.fadeStrength)}),this.geometry=new Ks,tg(this.uniforms,()=>{this.mesh=new Qm(this.geometry,n),this.ready.set(!0)})}onReady(e){const t=this.ready.subscribe(n=>{n&&(e(),t())})}setGeometry(e,t,n,r=Kl()){this.generators=e.map(a=>[a,el(a)]).flat(),this.depth=n,this.colors=t;const s={vertexColors:[],vertices:[],lineColors:[],lines:[]},o=zs(r);this._tree(0,1,void 0,o,r,Br(o),s),this.geometry.dispose(),this.geometry=new Ks,this.geometry.setPositions(s.lines),this.geometry.setColors(s.lineColors),this.mesh&&(this.mesh.geometry=this.geometry)}_tree(e,t,n,r,s,o,a){if(!(e>=this.depth||t<this.minSize)&&!(e>0&&nc(s,1e-4)))for(let c=0;c<this.generators.length;c++){if(this.inverse(c)===n)continue;const l=Bs(s,this.generators[c]),h=zs(l),f=Br(zs(l)),u=lc(o,f),m=Math.floor(Math.min(Math.max(u*100,2),10)),g=new ke(this.colors[c]).toArray();a.vertexColors.push(g[0],g[1],g[2]),a.vertices.push(f.x,f.y,f.z);for(let p=0;p<m*2-2;p++)a.lineColors.push(g[0],g[1],g[2]);eg(r,h,m,a.lines),this._tree(e+1,u,c,h,l,f,a)}}inverse(e){return e%2?e-1:e+1}}function ig(i,e=(t,n)=>t===n){const t=Ci(i);let n=i;return{subscribe:t.subscribe,set(r){n&&e(n,r)||(n=r,t.set(r))}}}function rg(i){let e,t,n,r;return{c(){e=Oe("canvas"),this.h()},l(s){e=Be(s,"CANVAS",{class:!0,style:!0,width:!0,height:!0}),We(e).forEach(Pe),this.h()},h(){ye(e,"class","tree-canvas"),ye(e,"style",t=`width: 100%; max-width: ${i[0]}px; max-height: ${i[1]}px`),ye(e,"width",n=i[0]*i[4]),ye(e,"height",r=i[1]*i[4])},m(s,o){Tn(s,e,o),i[13](e)},p(s,[o]){o&3&&t!==(t=`width: 100%; max-width: ${s[0]}px; max-height: ${s[1]}px`)&&ye(e,"style",t),o&1&&n!==(n=s[0]*s[4])&&ye(e,"width",n),o&2&&r!==(r=s[1]*s[4])&&ye(e,"height",r)},i:Mt,o:Mt,d(s){s&&Pe(e),i[13](null)}}}function sg(i,e,t){let n,r,s,o=Mt,a=()=>(o(),o=$s(y,A=>t(17,s=A)),y);Ai(i,Qn,A=>t(12,r=A)),i.$$.on_destroy.push(()=>o());let{width:c}=e,{height:l}=e,{depth:h}=e,{gens:f=[]}=e,{colors:u=[]}=e,{animateIso:m=void 0}=e,g=0,p=window.devicePixelRatio,d,x,b,y,_=ig(void 0,(A,v)=>A.equals(v));Ai(i,_,A=>t(11,n=A));let S;Qs(()=>{let A=!0;const v=()=>A=!0,T={outline:{vertex_shader:`
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
        `}};x=new Tl({antialias:!0,canvas:d}),x.setSize(c,l,!1),x.setPixelRatio(p),x.setClearColor(16777215),Qn.subscribe(qe=>{x.setClearColor(qe.ui.background),v()}),x.autoClear=!1;const D=new wr,z=new wr,B=new wr,I=new wr,P=new Kt(45,c/l,.1,1e3);P.position.set(0,3,0),P.up.set(1,0,0);const V=new Gm(P,x.domElement);V.noPan=!0,V.rotateSpeed=2;const Q=new km(1);Q.setColors(new ke(16751001),new ke(6750054),new ke(10066431)),D.add(Q),Qn.subscribe(qe=>{const Ce=qe.canvas.axisColors.map(He=>new ke(He));Q.setColors(Ce[0],Ce[1],Ce[2]),v()});const te=new aa(1,128,64),O=new ia({color:0}),$=new Qt(te,O);z.add($),B.add($.clone());const Z={offset:{type:"f",value:.01},color:{value:new $e(0,0,0,1)}},pe=T.outline,N=new an({uniforms:Z,vertexShader:pe.vertex_shader,fragmentShader:pe.fragment_shader});Qn.subscribe(qe=>{const Ce=new ke(qe.canvas.foreground);N.uniforms.color.value=[Ce.r,Ce.g,Ce.b,1],v()});const K=new Qt(te,N);I.add(K);const ae=new Ho(D,P),ne=new Ho(I,P);ne.clear=!1;const G=new Or(z,P),U=new Or(B,P);G.inverse=!0;const J=new Ll,se=new Cl(qm);se.renderToScreen=!0;const re=x.getPixelRatio();se.material.uniforms.resolution.value.x=1/(c*re),se.material.uniforms.resolution.value.y=1/(l*re);const Se=new Xm(x);Se.renderTarget1.stencilBuffer=!0,Se.renderTarget2.stencilBuffer=!0,Se.addPass(ae),Se.addPass(U),Se.addPass(G),Se.addPass(ne),Se.addPass(J),Se.addPass(se),b=requestAnimationFrame(Xe),V.addEventListener("change",v);let me=new ng(c,l);a(t(2,y=me.uniforms)),t(10,S=(qe,Ce,He,Ze)=>{me.setGeometry(qe,Ce,He,Ze),v()}),me.onReady(()=>{if(!me.mesh)throw new Error("Mesh is undefined");D.add(me.mesh)}),me.uniforms.subscribe(v);let _e;function Xe(qe){if(b=requestAnimationFrame(Xe),V.update(),_.set(P.position.clone()),m&&(A=!0),A){if(m){if(_e){const He=qe-_e;g=(g+He/4e3)%1}else g=0;const Ce=ec(m,g);S(f,u,h,Ce),_e=qe}else A=!1,_e=void 0;N.uniforms.offset.value=.003*n.length(),Se.render()}}return()=>{b&&cancelAnimationFrame(b),V.removeEventListener("change",v)}});function L(A){_t[A?"unshift":"push"](()=>{d=A,t(3,d)})}return i.$$set=A=>{"width"in A&&t(0,c=A.width),"height"in A&&t(1,l=A.height),"depth"in A&&t(6,h=A.depth),"gens"in A&&t(7,f=A.gens),"colors"in A&&t(8,u=A.colors),"animateIso"in A&&t(9,m=A.animateIso)},i.$$.update=()=>{i.$$.dirty&1984&&S&&!m&&S(f,u,h),i.$$.dirty&6148&&y&&n&&Yi(y,s={fadeColor:new ke(r.ui.background).toArray(),fadeNear:n.length()-1,fadeFar:n.length()+1,fadeStrength:.7},s)},[c,l,y,d,p,_,h,f,u,m,S,n,r,L]}class ag extends ri{constructor(e){super(),si(this,e,sg,rg,ai,{width:0,height:1,depth:6,gens:7,colors:8,animateIso:9})}}function og(i){let e;return{c(){e=Oe("span"),this.h()},l(t){e=Be(t,"SPAN",{class:!0}),We(e).forEach(Pe),this.h()},h(){ye(e,"class","latex svelte-19rek1j")},m(t,n){Tn(t,e,n),i[3](e)},p:Mt,i:Mt,o:Mt,d(t){t&&Pe(e),i[3](null)}}}function lg(i,e,t){let{text:n}=e,r;Qs(async()=>{t(2,r=await(await Hl(()=>import("../../chunks/katex-676fb29d.js"),[],import.meta.url)).default)});let s;function o(a){_t[a?"unshift":"push"](()=>{s=a,t(0,s)})}return i.$$set=a=>{"text"in a&&t(1,n=a.text)},i.$$.update=()=>{i.$$.dirty&7&&s&&r&&r.render(n,s)},[s,n,r,o]}class Dr extends ri{constructor(e){super(),si(this,e,lg,og,ai,{text:1})}}function cg(i){let e,t,n,r;return{c(){e=Oe("input"),this.h()},l(s){e=Be(s,"INPUT",{class:!0,type:!0}),this.h()},h(){ye(e,"class",t=i[3].class),ye(e,"type","text")},m(s,o){Tn(s,e,o),Nr(e,i[0]),n||(r=[Rt(e,"input",i[7]),Rt(e,"input",$o(i[1])),Rt(e,"focus",i[2])],n=!0)},p(s,[o]){o&8&&t!==(t=s[3].class)&&ye(e,"class",t),o&1&&e.value!==s[0]&&Nr(e,s[0])},i:Mt,o:Mt,d(s){s&&Pe(e),n=!1,kr(r)}}}const ug=/^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/,hg=/^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|((?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+))?\s*(?<has_imag2>i))\s*$/;function fg(i){return ug.test(i)}function dg(i,e,t){let{value:n=""}=e,{state:r=c(n)}=e;function s(u){t(5,r=u),t(4,n=`${u.re.toFixed(2)}${u.im>=0?"+":"-"}${Math.abs(u.im).toFixed(2)}i`)}let o;function a(u){const m=u.target.value;fg(o)?(t(4,n=m),t(5,r=c(n))):t(0,o=n)}function c(u){if(u==="")return vn(0);const m=hg.exec(u);if(!m||!m.groups)return vn(0);const g=m.groups;if(g.re){const d=(g.re_sign==="-"?-1:1)*parseFloat(g.re)||0;if(!g.has_imag)return vn(d);const x=g.im_sign==="-"?-1:1;if(!g.im)return vn(d,x);const b=x*parseFloat(g.im)||0;return vn(d,b)}if(g.has_imag2){const p=g.im_sign2==="-"?-1:1;if(!g.im2)return vn(0,p);const d=p*parseFloat(g.im2)||0;return vn(0,d)}return vn(0)}const l=Gr();function h(){l("focus")}function f(){o=this.value,t(0,o),t(4,n)}return i.$$set=u=>{t(3,e=ha(ha({},e),fa(u))),"value"in u&&t(4,n=u.value),"state"in u&&t(5,r=u.state)},i.$$.update=()=>{i.$$.dirty&16&&t(0,o=n)},e=fa(e),[o,a,h,e,n,r,s,f]}class Pr extends ri{constructor(e){super(),si(this,e,dg,cg,ai,{value:4,state:5,setState:6})}get setState(){return this.$$.ctx[6]}}function pg(i){let e,t,n,r,s,o,a,c,l,h,f,u,m,g;function p(A){i[12](A)}let d={};i[4]!==void 0&&(d.state=i[4]),n=new Pr({props:d}),i[11](n),_t.push(()=>Mn(n,"state",p)),n.$on("focus",i[13]);function x(A){i[15](A)}let b={};i[5]!==void 0&&(b.state=i[5]),o=new Pr({props:b}),i[14](o),_t.push(()=>Mn(o,"state",x)),o.$on("focus",i[16]);function y(A){i[18](A)}let _={};i[6]!==void 0&&(_.state=i[6]),l=new Pr({props:_}),i[17](l),_t.push(()=>Mn(l,"state",y)),l.$on("focus",i[19]);function S(A){i[21](A)}let L={};return i[7]!==void 0&&(L.state=i[7]),u=new Pr({props:L}),i[20](u),_t.push(()=>Mn(u,"state",S)),u.$on("focus",i[22]),{c(){e=Oe("div"),t=Oe("div"),Bt(n.$$.fragment),s=ft(),Bt(o.$$.fragment),c=ft(),Bt(l.$$.fragment),f=ft(),Bt(u.$$.fragment),this.h()},l(A){e=Be(A,"DIV",{class:!0});var v=We(e);t=Be(v,"DIV",{class:!0});var T=We(t);kt(n.$$.fragment,T),s=dt(T),kt(o.$$.fragment,T),c=dt(T),kt(l.$$.fragment,T),f=dt(T),kt(u.$$.fragment,T),T.forEach(Pe),v.forEach(Pe),this.h()},h(){ye(t,"class","matrix-input svelte-175mkfe"),ye(e,"class","matrix-input-container svelte-175mkfe")},m(A,v){Tn(A,e,v),be(e,t),Gt(n,t,null),be(t,s),Gt(o,t,null),be(t,c),Gt(l,t,null),be(t,f),Gt(u,t,null),g=!0},p(A,[v]){const T={};!r&&v&16&&(r=!0,T.state=A[4],Sn(()=>r=!1)),n.$set(T);const D={};!a&&v&32&&(a=!0,D.state=A[5],Sn(()=>a=!1)),o.$set(D);const z={};!h&&v&64&&(h=!0,z.state=A[6],Sn(()=>h=!1)),l.$set(z);const B={};!m&&v&128&&(m=!0,B.state=A[7],Sn(()=>m=!1)),u.$set(B)},i(A){g||(Lt(n.$$.fragment,A),Lt(o.$$.fragment,A),Lt(l.$$.fragment,A),Lt(u.$$.fragment,A),g=!0)},o(A){Dt(n.$$.fragment,A),Dt(o.$$.fragment,A),Dt(l.$$.fragment,A),Dt(u.$$.fragment,A),g=!1},d(A){A&&Pe(e),i[11](null),Vt(n),i[14](null),Vt(o),i[17](null),Vt(l),i[20](null),Vt(u)}}}function mg(i,e,t){let n,r,s,o,a,{state:c=void 0}=e,l,h,f,u;function m(B,I){n[B].setState(I)}const g=Gr();function p(B){g("focus",{target:n[B],state:c?c[B]:void 0})}function d(B){_t[B?"unshift":"push"](()=>{r=B,t(0,r)})}function x(B){l=B,t(4,l)}const b=()=>p(0);function y(B){_t[B?"unshift":"push"](()=>{s=B,t(1,s)})}function _(B){h=B,t(5,h)}const S=()=>p(1);function L(B){_t[B?"unshift":"push"](()=>{o=B,t(2,o)})}function A(B){f=B,t(6,f)}const v=()=>p(2);function T(B){_t[B?"unshift":"push"](()=>{a=B,t(3,a)})}function D(B){u=B,t(7,u)}const z=()=>p(3);return i.$$set=B=>{"state"in B&&t(9,c=B.state)},i.$$.update=()=>{i.$$.dirty&15&&(n=[r,s,o,a]),i.$$.dirty&240&&(l&&h&&f&&u?t(9,c=[l,h,f,u]):t(9,c=void 0))},[r,s,o,a,l,h,f,u,p,c,m,d,x,b,y,_,S,L,A,v,T,D,z]}class Jo extends ri{constructor(e){super(),si(this,e,mg,pg,ai,{state:9,setField:10})}get setField(){return this.$$.ctx[10]}}function gg(i){let e,t,n,r,s,o,a,c,l,h,f;return{c(){e=Oe("div"),t=Oe("input"),n=ft(),r=Oe("div"),s=Oe("div"),o=Oe("i"),a=ft(),c=Oe("div"),l=Oe("i"),this.h()},l(u){e=Be(u,"DIV",{class:!0});var m=We(e);t=Be(m,"INPUT",{type:!0,class:!0}),n=dt(m),r=Be(m,"DIV",{class:!0});var g=We(r);s=Be(g,"DIV",{class:!0});var p=We(s);o=Be(p,"I",{class:!0}),We(o).forEach(Pe),p.forEach(Pe),a=dt(g),c=Be(g,"DIV",{class:!0});var d=We(c);l=Be(d,"I",{class:!0}),We(l).forEach(Pe),d.forEach(Pe),g.forEach(Pe),m.forEach(Pe),this.h()},h(){ye(t,"type","text"),ye(t,"class","svelte-jh3nii"),ye(o,"class","svelte-jh3nii"),ye(s,"class","input-up svelte-jh3nii"),ye(l,"class","svelte-jh3nii"),ye(c,"class","input-down svelte-jh3nii"),ye(r,"class","input-buttons svelte-jh3nii"),ye(e,"class","input svelte-jh3nii")},m(u,m){Tn(u,e,m),be(e,t),Nr(t,i[0]),be(e,n),be(e,r),be(r,s),be(s,o),be(r,a),be(r,c),be(c,l),h||(f=[Rt(t,"input",i[11]),Rt(t,"input",$o(i[3])),Rt(s,"click",i[1]),Rt(c,"click",i[2])],h=!0)},p(u,[m]){m&1&&t.value!==u[0]&&Nr(t,u[0])},i:Mt,o:Mt,d(u){u&&Pe(e),h=!1,kr(f)}}}function _g(i,e,t){const n=Gr();let{min:r=1}=e,{max:s=100}=e,{valid:o=()=>!0}=e,{init:a=r}=e,{state:c=a}=e,{value:l=a.toString()}=e,h=c,f;const u=_=>{c!==_&&(n("change",{state:_}),t(5,c=_),t(4,l=_.toString()))};function m(_){return x(_)?(t(4,l=_),b(_)&&(n("change",{state:Number(_)}),t(5,c=Number(_))),!0):!1}function g(){for(let _=h+1;_<=s;_++)if(o(_)){u(_);return}}function p(){for(let _=h-1;_>=r;_--)if(o(_)){u(_);return}}function d(_){const S=_.target.value;m(S)||(_.target.value=l)}function x(_){if(_==="")return!0;if(/^(0|[1-9]\d*)$/.test(_)){const S=Number(_);if((r<=0||S>0)&&S<=s)return!0}return!1}function b(_){if(_==="")return!1;const S=Number(_);return r<=S&&s>=S&&o(S)}function y(){f=this.value,t(0,f),t(4,l)}return i.$$set=_=>{"min"in _&&t(6,r=_.min),"max"in _&&t(7,s=_.max),"valid"in _&&t(8,o=_.valid),"init"in _&&t(9,a=_.init),"state"in _&&t(5,c=_.state),"value"in _&&t(4,l=_.value)},i.$$.update=()=>{i.$$.dirty&16&&t(0,f=l),i.$$.dirty&16&&l!==""&&(h=Number(l))},[f,g,p,d,l,c,r,s,o,a,u,y]}class xg extends ri{constructor(e){super(),si(this,e,_g,gg,ai,{min:6,max:7,valid:8,init:9,state:5,value:4,set:10})}get set(){return this.$$.ctx[10]}}function Ko(i,e,t){const n=i.slice();return n[29]=e[t],n[31]=t,n}function vg(i){let e,t,n;function r(o){i[16](o)}let s={width:800,height:800,gens:i[8],colors:i[9],depth:i[7]};return i[11]!==void 0&&(s.animateIso=i[11]),e=new ag({props:s}),_t.push(()=>Mn(e,"animateIso",r)),{c(){Bt(e.$$.fragment)},l(o){kt(e.$$.fragment,o)},m(o,a){Gt(e,o,a),n=!0},p(o,a){const c={};a[0]&256&&(c.gens=o[8]),a[0]&512&&(c.colors=o[9]),a[0]&128&&(c.depth=o[7]),!t&&a[0]&2048&&(t=!0,c.animateIso=o[11],Sn(()=>t=!1)),e.$set(c)},i(o){n||(Lt(e.$$.fragment,o),n=!0)},o(o){Dt(e.$$.fragment,o),n=!1},d(o){Vt(e,o)}}}function Qo(i){let e,t=i[29].name+"",n;return{c(){e=Oe("option"),n=Wn(t),this.h()},l(r){e=Be(r,"OPTION",{});var s=We(e);n=Xn(s,t),s.forEach(Pe),this.h()},h(){e.__value=i[29].name,e.value=e.__value},m(r,s){Tn(r,e,s),be(e,n)},p:Mt,d(r){r&&Pe(e)}}}function yg(i){let e,t,n,r,s,o,a,c,l,h,f,u,m,g,p,d,x,b,y,_,S,L,A,v,T,D,z,B,I,P,V,Q,te,O,$,Z,pe,N,K,ae,ne,G,U,J,se=i[5]===1?"Stop animation":"Animate! (1)",re,Se,me,_e=i[5]===2?"Stop animation":"Animate! (2)",Xe,qe,Ce,He,Ze,Re,Nt,Ct,E=vg(i);function M(q){i[17](q)}let W={min:1,max:20,init:10};i[7]!==void 0&&(W.state=i[7]),l=new xg({props:W}),_t.push(()=>Mn(l,"state",M)),d=new Dr({props:{text:"\\left[\\rule{0cm}{3em}\\right."}});function ie(q){i[19](q)}let oe={};i[1]!==void 0&&(oe.state=i[1]),b=new Jo({props:oe}),_t.push(()=>Mn(b,"state",ie)),b.$on("focus",i[20]),S=new Dr({props:{text:"\\left.\\rule{0cm}{3em}\\right]"}}),z=new Dr({props:{text:"\\left[\\rule{0cm}{3em}\\right."}});function ue(q){i[22](q)}let Ee={};i[2]!==void 0&&(Ee.state=i[2]),I=new Jo({props:Ee}),_t.push(()=>Mn(I,"state",ue)),I.$on("focus",i[23]),Q=new Dr({props:{text:"\\left.\\rule{0cm}{3em}\\right]"}});function he(q){i[24](q)}let Y={};i[10]!==void 0&&(Y.pos=i[10]),Z=new Mc({props:Y}),_t.push(()=>Mn(Z,"pos",he)),Z.$on("change",i[14]);let ve=Object.values(tr),de=[];for(let q=0;q<ve.length;q+=1)de[q]=Qo(Ko(i,ve,q));return{c(){t=ft(),n=Oe("div"),r=Oe("div"),E&&E.c(),s=ft(),o=Oe("div"),a=Oe("div"),c=Wn("Depth"),Bt(l.$$.fragment),f=ft(),u=Oe("div"),m=Oe("input"),g=Wn(`Isometry 1
      `),p=Oe("div"),Bt(d.$$.fragment),x=ft(),Bt(b.$$.fragment),_=ft(),Bt(S.$$.fragment),L=ft(),A=Oe("div"),v=Oe("input"),T=Wn(`Isometry 2
      `),D=Oe("div"),Bt(z.$$.fragment),B=ft(),Bt(I.$$.fragment),V=ft(),Bt(Q.$$.fragment),te=ft(),O=Oe("div"),$=Oe("div"),Bt(Z.$$.fragment),N=ft(),K=Oe("div"),ae=Wn("Theme "),ne=Oe("select");for(let q=0;q<de.length;q+=1)de[q].c();G=ft(),U=Oe("div"),J=Oe("button"),re=Wn(se),Se=ft(),me=Oe("button"),Xe=Wn(_e),qe=ft(),Ce=Oe("a"),He=Oe("img"),this.h()},l(q){t=dt(q),n=Be(q,"DIV",{class:!0});var ce=We(n);r=Be(ce,"DIV",{class:!0});var ge=We(r);E&&E.l(ge),ge.forEach(Pe),s=dt(ce),o=Be(ce,"DIV",{class:!0});var we=We(o);a=Be(we,"DIV",{class:!0});var Ve=We(a);c=Xn(Ve,"Depth"),kt(l.$$.fragment,Ve),Ve.forEach(Pe),f=dt(we),u=Be(we,"DIV",{class:!0});var Je=We(u);m=Be(Je,"INPUT",{type:!0,name:!0,class:!0}),g=Xn(Je,`Isometry 1
      `),p=Be(Je,"DIV",{class:!0});var C=We(p);kt(d.$$.fragment,C),x=dt(C),kt(b.$$.fragment,C),_=dt(C),kt(S.$$.fragment,C),C.forEach(Pe),Je.forEach(Pe),L=dt(we),A=Be(we,"DIV",{class:!0});var H=We(A);v=Be(H,"INPUT",{type:!0,name:!0,class:!0}),T=Xn(H,`Isometry 2
      `),D=Be(H,"DIV",{class:!0});var ee=We(D);kt(z.$$.fragment,ee),B=dt(ee),kt(I.$$.fragment,ee),V=dt(ee),kt(Q.$$.fragment,ee),ee.forEach(Pe),H.forEach(Pe),te=dt(we),O=Be(we,"DIV",{class:!0});var fe=We(O);$=Be(fe,"DIV",{class:!0});var xe=We($);kt(Z.$$.fragment,xe),xe.forEach(Pe),fe.forEach(Pe),N=dt(we),K=Be(we,"DIV",{class:!0});var Ne=We(K);ae=Xn(Ne,"Theme "),ne=Be(Ne,"SELECT",{});var et=We(ne);for(let xt=0;xt<de.length;xt+=1)de[xt].l(et);et.forEach(Pe),Ne.forEach(Pe),G=dt(we),U=Be(we,"DIV",{class:!0});var tt=We(U);J=Be(tt,"BUTTON",{});var on=We(J);re=Xn(on,se),on.forEach(Pe),Se=dt(tt),me=Be(tt,"BUTTON",{});var je=We(me);Xe=Xn(je,_e),je.forEach(Pe),tt.forEach(Pe),we.forEach(Pe),qe=dt(ce),Ce=Be(ce,"A",{href:!0,class:!0,draggable:!0,target:!0,rel:!0});var Yt=We(Ce);He=Be(Yt,"IMG",{src:!0,alt:!0,width:!0,height:!0,draggable:!0}),Yt.forEach(Pe),ce.forEach(Pe),this.h()},h(){ye(r,"class","render-container svelte-8eu7mk"),ye(a,"class","sidebar-row svelte-8eu7mk"),ye(m,"type","checkbox"),ye(m,"name","isometry1"),ye(m,"class","svelte-8eu7mk"),ye(p,"class","combined-elements svelte-8eu7mk"),ye(u,"class","sidebar-row svelte-8eu7mk"),ye(v,"type","checkbox"),ye(v,"name","isometry2"),ye(v,"class","svelte-8eu7mk"),ye(D,"class","combined-elements svelte-8eu7mk"),ye(A,"class","sidebar-row svelte-8eu7mk"),ye($,"class","row-center svelte-8eu7mk"),ye(O,"class","sidebar-row svelte-8eu7mk"),i[0]===void 0&&zl(()=>i[25].call(ne)),ye(K,"class","sidebar-row svelte-8eu7mk"),ye(U,"class","sidebar-row svelte-8eu7mk"),ye(o,"class","sidebar svelte-8eu7mk"),da(He.src,Ze=i[6].ui.githubImage)||ye(He,"src",Ze),ye(He,"alt","Link to GitHub"),ye(He,"width","40"),ye(He,"height","40"),ye(He,"draggable","false"),ye(Ce,"href","https://github.com/ariymarkowitz/H3-Visualiser"),ye(Ce,"class","github svelte-8eu7mk"),ye(Ce,"draggable","false"),ye(Ce,"target","_blank"),ye(Ce,"rel","noopener noreferrer"),ye(n,"class","container svelte-8eu7mk")},m(q,ce){Tn(q,t,ce),Tn(q,n,ce),be(n,r),E&&E.m(r,null),be(n,s),be(n,o),be(o,a),be(a,c),Gt(l,a,null),be(o,f),be(o,u),be(u,m),m.checked=i[3],be(u,g),be(u,p),Gt(d,p,null),be(p,x),Gt(b,p,null),be(p,_),Gt(S,p,null),be(o,L),be(o,A),be(A,v),v.checked=i[4],be(A,T),be(A,D),Gt(z,D,null),be(D,B),Gt(I,D,null),be(D,V),Gt(Q,D,null),be(o,te),be(o,O),be(O,$),Gt(Z,$,null),be(o,N),be(o,K),be(K,ae),be(K,ne);for(let ge=0;ge<de.length;ge+=1)de[ge].m(ne,null);pa(ne,i[0]),be(o,G),be(o,U),be(U,J),be(J,re),be(U,Se),be(U,me),be(me,Xe),be(n,qe),be(n,Ce),be(Ce,He),Re=!0,Nt||(Ct=[Ol(e=Sc.call(null,document.body,i[12])),Rt(m,"change",i[18]),Rt(v,"change",i[21]),Rt(ne,"change",i[25]),Rt(J,"click",i[26]),Rt(me,"click",i[27])],Nt=!0)},p(q,ce){e&&Bl(e.update)&&ce[0]&4096&&e.update.call(null,q[12]),E.p(q,ce);const ge={};!h&&ce[0]&128&&(h=!0,ge.state=q[7],Sn(()=>h=!1)),l.$set(ge),ce[0]&8&&(m.checked=q[3]);const we={};!y&&ce[0]&2&&(y=!0,we.state=q[1],Sn(()=>y=!1)),b.$set(we),ce[0]&16&&(v.checked=q[4]);const Ve={};!P&&ce[0]&4&&(P=!0,Ve.state=q[2],Sn(()=>P=!1)),I.$set(Ve);const Je={};if(!pe&&ce[0]&1024&&(pe=!0,Je.pos=q[10],Sn(()=>pe=!1)),Z.$set(Je),ce&0){ve=Object.values(tr);let C;for(C=0;C<ve.length;C+=1){const H=Ko(q,ve,C);de[C]?de[C].p(H,ce):(de[C]=Qo(H),de[C].c(),de[C].m(ne,null))}for(;C<de.length;C+=1)de[C].d(1);de.length=ve.length}ce[0]&1&&pa(ne,q[0]),(!Re||ce[0]&32)&&se!==(se=q[5]===1?"Stop animation":"Animate! (1)")&&ma(re,se),(!Re||ce[0]&32)&&_e!==(_e=q[5]===2?"Stop animation":"Animate! (2)")&&ma(Xe,_e),(!Re||ce[0]&64&&!da(He.src,Ze=q[6].ui.githubImage))&&ye(He,"src",Ze)},i(q){Re||(Lt(E),Lt(l.$$.fragment,q),Lt(d.$$.fragment,q),Lt(b.$$.fragment,q),Lt(S.$$.fragment,q),Lt(z.$$.fragment,q),Lt(I.$$.fragment,q),Lt(Q.$$.fragment,q),Lt(Z.$$.fragment,q),Re=!0)},o(q){Dt(E),Dt(l.$$.fragment,q),Dt(d.$$.fragment,q),Dt(b.$$.fragment,q),Dt(S.$$.fragment,q),Dt(z.$$.fragment,q),Dt(I.$$.fragment,q),Dt(Q.$$.fragment,q),Dt(Z.$$.fragment,q),Re=!1},d(q){q&&Pe(t),q&&Pe(n),E&&E.d(),Vt(l),Vt(d),Vt(b),Vt(S),Vt(z),Vt(I),Vt(Q),Vt(Z),kl(de,q),Nt=!1,kr(Ct)}}}function Mg(i,e,t){let n,r,s=Mt,o=()=>(s(),s=$s(y,O=>t(28,r=O)),y),a,c;Ai(i,Qn,O=>t(6,a=O)),Ai(i,Zm,O=>t(12,c=O)),i.$$.on_destroy.push(()=>s());let l,h,f,u,m=!0,g=!0,p=[],d=[],x;function b(O,$){t(15,x={element:$.detail.target,state:$.detail.state})}let y;function _(O){x&&x.element.setState(vn(O.detail.x,O.detail.y))}let S=0;function L(O){n=O,t(11,n),t(1,f),t(2,u),t(5,S)}function A(O){h=O,t(7,h)}function v(){m=this.checked,t(3,m)}function T(O){f=O,t(1,f)}const D=O=>b(0,O);function z(){g=this.checked,t(4,g)}function B(O){u=O,t(2,u)}const I=O=>b(1,O);function P(O){y=O,o(t(10,y))}function V(){l=Gl(this),t(0,l)}const Q=()=>t(5,S=S===1?0:1),te=()=>t(5,S=S===2?0:2);return i.$$.update=()=>{if(i.$$.dirty[0]&1){const O=tr.find($=>$.name===l)||tr[0];Qn.set(O)}if(i.$$.dirty[0]&94){const O=[m,g],$=[a.canvas.isometryColors[0],a.canvas.isometryColors[1]],Z=[f,u],pe=[0,1].map(N=>({m:Z[N],c:$[N]})).filter((N,K)=>N.m!==void 0&&!Jl(N.m)&&O[K]);t(8,p=pe.map(N=>N.m)),t(9,d=pe.map(N=>N.c.map(K=>new ke(K))).flat())}i.$$.dirty[0]&32768&&x!=null&&x.state&&Yi(y,r={x:x.state.re,y:x.state.im},r),i.$$.dirty[0]&38&&t(11,n=[void 0,f,u][S])},[l,f,u,m,g,S,a,h,p,d,y,n,c,b,_,x,L,A,v,T,D,z,B,I,P,V,Q,te]}class Tg extends ri{constructor(e){super(),si(this,e,Mg,yg,ai,{},null,[-1,-1])}}export{Tg as default};

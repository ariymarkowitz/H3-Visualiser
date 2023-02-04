var Uh=Object.defineProperty;var Gh=(i,e,t)=>e in i?Uh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ji=(i,e,t)=>(Gh(i,typeof e!="symbol"?e+"":e,t),t);import{S as ur,i as hr,s as dr,k as lt,l as ct,m as pt,h as et,n as Xe,b as _i,J as qe,L as Pn,B as rn,D as ba,M as wa,K as us,N as aa,o as ru,C as su,O as Xt,P as ha,Q as au,R as O0,T as U0,U as Li,w as vn,a as Kt,x as xn,c as Jt,y as _n,V as Ri,f as ln,t as cn,z as yn,q as ts,r as ns,W as Hh,X as G0,Y as Vh,E as Wh,Z as qh,_ as Xh}from"../../chunks/index-e915f37f.js";import{w as Oo,d as jh}from"../../chunks/index-ab1a2b14.js";function tn(i,e){return{re:i,im:e}}function Yn(i,e){return tn(i.re*e.re-i.im*e.im,i.re*e.im+i.im*e.re)}function Rr(i,e){return tn(i.re+e.re,i.im+e.im)}function ou(i,e){return tn(i.re-e.re,i.im-e.im)}function H0(i){return tn(-i.re,-i.im)}function l0(i){return Math.sqrt(i.re*i.re+i.im*i.im)}function lu(i){return i.re*i.re+i.im*i.im}function Yh(i,e){return i.re*e.re+i.im*e.im}function Ss(i,e){const t=l0(e);return tn((i.re*e.re+i.im*e.im)/t,(e.re*i.im-e.im*i.re)/t)}function V0(i,e){return tn(i.re*e,i.im*e)}function W0(i,e=0){return Math.abs(i.re-1)<=e&&Math.abs(i.im)<=e}function q0(i,e=0){return Math.abs(i.re)<=e&&Math.abs(i.im)<=e}function Zh(i,e){return[Rr(Yn(i[0],e[0]),Yn(i[1],e[2])),Rr(Yn(i[0],e[1]),Yn(i[1],e[3])),Rr(Yn(i[2],e[0]),Yn(i[3],e[2])),Rr(Yn(i[2],e[1]),Yn(i[3],e[3]))]}function cu(i){return ou(Yn(i[0],i[3]),Yn(i[1],i[2]))}function $h(i){return l0(cu(i))<1e-10}function Kh(i){const e=cu(i);return[Ss(i[3],e),Ss(H0(i[1]),e),Ss(H0(i[2]),e),Ss(i[0],e)]}function Jh(){return[tn(1,0),tn(0,0),tn(0,0),tn(1,0)]}function hi(i,e){if(e!==void 0){if(typeof i!="number")throw new Error("Can't convert to complex number");return tn(i,e)}else if(typeof i=="object"){if(Array.isArray(i))return tn(i[0],i[1]);if("re"in i&&"im"in i)return i}else if(typeof i=="number")return tn(i,0);throw new Error("Can't convert to complex number")}function Qh(i,e=0){return W0(i[0],e)&&q0(i[1],e)&&q0(i[2],e)&&W0(i[3],e)}function Qn(i,e,t){return{x:i,y:e,z:t}}function ed(i,e){i.x+=e.x,i.y+=e.y,i.z+=e.z}function td(i,e){return Qn(i.x+e.x,i.y+e.y,i.z+e.z)}function Fa(i,e){return Qn(i.x-e.x,i.y-e.y,i.z-e.z)}function nd(i,e){return Qn(i.x*e,i.y*e,i.z*e)}function id(i,e){return i.x/=e,i.y/=e,i.z/=e,i}function Oa(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function rd(i){return i.x*i.x+i.y*i.y+i.z*i.z}function X0(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return Qn(i.x/e,i.y/e,i.z/e)}function sd(i,e){return Math.sqrt((i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2)}function ad(i,e){return(i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2}function od(i){return Qn(i.x,i.y,i.z)}function j0(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function ld(i,e){return Qn(i.y*e.z-i.z*e.y,i.z*e.x-i.x*e.z,i.x*e.y-i.y*e.x)}function Nr(i,e,t,n){return{r:i,i:e,j:t,k:n}}function cd(i,e,t,n,r){i.r=e,i.i=t,i.j=n,i.k=r}function Uo(i){return i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k}function ud(i){return Math.sqrt(i.r*i.r+i.i*i.i+i.j*i.j+i.k*i.k)}function hd(i){dd(i,ud(i))}function dd(i,e){i.r/=e,i.i/=e,i.j/=e,i.k/=e}function fd(i,e){const t=Uo(e);return Nr((i.r*e.r+i.i*e.i+i.j*e.j+i.k*e.k)/t,(-i.r*e.i+i.i*e.r-i.j*e.k+i.k*e.j)/t,(-i.r*e.j+i.i*e.k+i.j*e.r-i.k*e.i)/t,(-i.r*e.k-i.i*e.j+i.j*e.i+i.k*e.r)/t)}function md(i,e,t){if(j0(i,e)===1)return Nr(1,0,0,0);const r=ld(i,e),s=Nr(Oa(i)*Oa(e)+j0(i,e),r.x,r.y,r.z);hd(s);const a=Math.acos(s.r)*t,o=Oa(r),l=Math.sin(a)/o;return cd(s,Math.cos(a),r.x*l,r.y*l,r.z*l),s}function pd(i,e){const t=e.i*e.i,n=e.j*e.j,r=e.k*e.k,s=e.r*e.i,a=e.r*e.j,o=e.r*e.k,l=e.i*e.k,c=e.i*e.j,u=e.j*e.k;return Qn(i.x*(1-2*(n+r))+i.y*2*(c-o)+i.z*2*(l+a),i.x*2*(c+o)+i.y*(1-2*(t+r))+i.z*2*(u-s),i.x*2*(l-a)+i.y*2*(u+s)+i.z*(1-2*(t+n)))}function gd(i){let e,t,n,r;return{c(){e=lt("div"),t=lt("div"),this.h()},l(s){e=ct(s,"DIV",{class:!0});var a=pt(e);t=ct(a,"DIV",{class:!0}),pt(t).forEach(et),a.forEach(et),this.h()},h(){Xe(t,"class","plane-input-point svelte-1ss91bd"),Xe(e,"class","plane-input svelte-1ss91bd")},m(s,a){_i(s,e,a),qe(e,t),i[11](t),i[12](e),n||(r=[Pn(e,"mousedown",i[5]),Pn(e,"mousemove",i[6])],n=!0)},p:rn,i:rn,o:rn,d(s){s&&et(e),i[11](null),i[12](null),n=!1,ba(r)}}}function vd(i,e,t){let n,r=rn,s=()=>(r(),r=su(m,G=>t(8,n=G)),m),a,o;i.$$.on_destroy.push(()=>r());const l=wa();let c,u;function d(){return u?u.offsetWidth:100}function h(){return u?u.offsetHeight:100}let g=Oo({x:0,y:0});us(i,g,G=>t(10,o=G));let x=Oo({x:0,y:0});us(i,x,G=>t(9,a=G));const m={set(G,W=!1){W||aa(g,o=G,o),aa(x,a=G,a)},subscribe:g.subscribe,update(G,W=!1){g.update(N=>{const B=G(N);return W||aa(x,a=B,a),B})}};s();let p,y;function T(G){if(p===void 0){requestAnimationFrame(T),p=G;return}const W=Math.exp(-(G-p)/100);g.update(({x:N,y:B})=>{const Z={x:W*N+(1-W)*a.x,y:W*B+(1-W)*a.y};return Math.abs(Z.x-a.x)<1e-4&&(Z.x=a.x),Math.abs(Z.y-a.y)<1e-4&&(Z.y=a.y),l("change",Z),Z}),p=G}function w(G){return{x:(G.x/6+1/2)*d(),y:(G.y/6+1/2)*h()}}function b(G){return{x:6*(G.x/d()-1/2),y:6*(G.y/h()-1/2)}}let E=!1;function z(G){E=!0,M(G)}function k(){E=!1}function M(G){E&&m.set(b({x:G.offsetX,y:G.offsetY}),!0)}ru(()=>(document.addEventListener("mouseup",k),()=>{document.removeEventListener("mouseup",k)}));function D(G){Xt[G?"unshift":"push"](()=>{c=G,t(1,c),t(8,n)})}function F(G){Xt[G?"unshift":"push"](()=>{u=G,t(2,u)})}return i.$$.update=()=>{if(i.$$.dirty&1664&&(o.x==a.x&&o.y==a.y?p=void 0:(cancelAnimationFrame(y),t(7,y=requestAnimationFrame(G=>T(G))))),i.$$.dirty&258&&c){const{x:G,y:W}=w(n);t(1,c.style.left=`${G-2}px`,c),t(1,c.style.top=`${W-2}px`,c)}},[m,c,u,g,x,z,M,y,n,a,o,D,F]}class xd extends ur{constructor(e){super(),hr(this,e,vd,gd,dr,{pos:0})}get pos(){return this.$$.ctx[0]}}function _d(i,e){return Y0(i,e),{update(t){Y0(i,t)}}}function Y0(i,e,t="--"){for(const n in e)try{i.style.setProperty(`${t}${n}`,e[n].toString())}catch{i.style.removeProperty(`${t}${n}`)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const c0="149",Ua={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yd=0,Z0=1,bd=2,uu=1,wd=2,is=3,Ni=0,Sn=1,Pi=2,Ii=0,zr=1,$0=2,K0=3,J0=4,Sd=5,Lr=100,Md=101,Td=102,Q0=103,el=104,Ad=200,Ed=201,Cd=202,Dd=203,hu=204,du=205,Ld=206,Rd=207,Pd=208,zd=209,kd=210,Id=0,Nd=1,Bd=2,Go=3,Fd=4,Od=5,Ud=6,Gd=7,fu=0,Hd=1,Vd=2,pi=0,Wd=1,qd=2,Xd=3,jd=4,Yd=5,mu=300,Br=301,Fr=302,Ho=303,Vo=304,Sa=306,Wo=1e3,Hn=1001,qo=1002,Qt=1003,tl=1004,Ga=1005,Dn=1006,Zd=1007,hs=1008,lr=1009,$d=1010,Kd=1011,pu=1012,Jd=1013,nr=1014,ir=1015,ds=1016,Qd=1017,ef=1018,kr=1020,tf=1021,Vn=1023,nf=1024,rf=1025,sr=1026,Or=1027,sf=1028,af=1029,of=1030,lf=1031,cf=1033,Ha=33776,Va=33777,Wa=33778,qa=33779,nl=35840,il=35841,rl=35842,sl=35843,uf=36196,al=37492,ol=37496,ll=37808,cl=37809,ul=37810,hl=37811,dl=37812,fl=37813,ml=37814,pl=37815,gl=37816,vl=37817,xl=37818,_l=37819,yl=37820,bl=37821,Xa=36492,hf=36283,wl=36284,Sl=36285,Ml=36286,cr=3e3,mt=3001,df=3200,ff=3201,mf=0,pf=1,Zn="srgb",fs="srgb-linear",ja=7680,gf=519,Xo=35044,Tl="300 es",jo=1035;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const as=Math.PI/180,da=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function u0(i,e){return(i%e+e)%e}function vf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function xf(i,e,t){return i!==e?(t-i)/(e-i):0}function os(i,e,t){return(1-t)*i+t*e}function _f(i,e,t,n){return os(i,e,1-Math.exp(-t*n))}function yf(i,e=1){return e-Math.abs(u0(i,e*2)-e)}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mf(i,e){return i+Math.random()*(e-i)}function Tf(i){return i*(.5-Math.random())}function Af(i){i!==void 0&&(Al=i);let e=Al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*as}function Cf(i){return i*da}function Yo(i){return(i&i-1)===0&&i!==0}function Df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),g=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rf=Object.freeze({__proto__:null,DEG2RAD:as,RAD2DEG:da,ceilPowerOfTwo:Df,clamp:en,damp:_f,degToRad:Ef,denormalize:mi,euclideanModulo:u0,floorPowerOfTwo:fa,generateUUID:gi,inverseLerp:xf,isPowerOfTwo:Yo,lerp:os,mapLinear:vf,normalize:ut,pingpong:yf,radToDeg:Cf,randFloat:Mf,randFloatSpread:Tf,randInt:Sf,seededRandom:Af,setQuaternionFromProperEuler:Lf,smootherstep:wf,smoothstep:bf});class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(){wn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],g=n[5],x=n[8],m=r[0],p=r[3],y=r[6],T=r[1],w=r[4],b=r[7],E=r[2],z=r[5],k=r[8];return s[0]=a*m+o*T+l*E,s[3]=a*p+o*w+l*z,s[6]=a*y+o*b+l*k,s[1]=c*m+u*T+d*E,s[4]=c*p+u*w+d*z,s[7]=c*y+u*b+d*k,s[2]=h*m+g*T+x*E,s[5]=h*p+g*w+x*z,s[8]=h*y+g*b+x*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,g=c*s-a*l,x=t*d+n*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=d*m,e[1]=(r*c-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=g*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new wn;function gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Za={[Zn]:{[fs]:ar},[fs]:{[Zn]:oa}},Yt={legacyMode:!0,get workingColorSpace(){return fs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Za[e]&&Za[e][t]!==void 0){const n=Za[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},Fn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function $a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ts(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=u0(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$a(a,s,e+1/3),this.g=$a(a,s,e),this.b=$a(a,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Yt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Yt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Yt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Yt.fromWorkingColorSpace(Ts(this,Lt),e),en(Lt.r*255,0,255)<<16^en(Lt.g*255,0,255)<<8^en(Lt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ts(this,Lt),t);const n=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ts(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Zn){return Yt.fromWorkingColorSpace(Ts(this,Lt),e),e!==Zn?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Fn),Fn.h+=e,Fn.s+=t,Fn.l+=n,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ms);const n=os(Fn.h,Ms.h,t),r=os(Fn.s,Ms.s,t),s=os(Fn.l,Ms.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=vu;let pr;class xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=ma("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _u{constructor(e=null){this.isSource=!0,this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ka(r[a].image)):s.push(Ka(r[a]))}else s=Ka(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class Mn extends fr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Hn,r=Hn,s=Dn,a=hs,o=Vn,l=lr,c=Mn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=gi(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=mu;Mn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],g=l[5],x=l[9],m=l[2],p=l[6],y=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-m)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+m)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(g+1)/2,E=(y+1)/2,z=(u+h)/4,k=(d+m)/4,M=(x+p)/4;return w>b&&w>E?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=z/n,s=k/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=z/r,s=M/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=k/s,r=M/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-x)*(p-x)+(d-m)*(d-m)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(d-m)/T,this.z=(h-u)/T,this.w=Math.acos((c+g+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bi extends fr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yu extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zf extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],g=s[a+1],x=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=g,e[t+2]=x,e[t+3]=m;return}if(d!==m||l!==h||c!==g||u!==x){let p=1-o;const y=l*h+c*g+u*x+d*m,T=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const E=Math.sqrt(w),z=Math.atan2(E,y*T);p=Math.sin(p*z)/E,o=Math.sin(o*z)/E}const b=o*T;if(l=l*p+h*b,c=c*p+g*b,u=u*p+x*b,d=d*p+m*b,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+u*d+l*g-c*h,e[t+1]=l*x+u*h+c*d-o*g,e[t+2]=c*x+u*g+o*h-l*d,e[t+3]=u*x-o*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*g*x,this._y=c*g*d-h*u*x,this._z=c*u*x+h*g*d,this._w=c*u*d-h*g*x;break;case"YXZ":this._x=h*u*d+c*g*x,this._y=c*g*d-h*u*x,this._z=c*u*x-h*g*d,this._w=c*u*d+h*g*x;break;case"ZXY":this._x=h*u*d-c*g*x,this._y=c*g*d+h*u*x,this._z=c*u*x+h*g*d,this._w=c*u*d-h*g*x;break;case"ZYX":this._x=h*u*d-c*g*x,this._y=c*g*d+h*u*x,this._z=c*u*x-h*g*d,this._w=c*u*d+h*g*x;break;case"YZX":this._x=h*u*d+c*g*x,this._y=c*g*d+h*u*x,this._z=c*u*x-h*g*d,this._w=c*u*d-h*g*x;break;case"XZY":this._x=h*u*d-c*g*x,this._y=c*g*d-h*u*x,this._z=c*u*x+h*g*d,this._w=c*u*d+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,d=l*r+s*n-a*t,h=-s*t-a*n-o*r;return this.x=c*l+h*-s+u*-o-d*-a,this.y=u*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new U,El=new Hr;class Gi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<r&&(r=h),u>s&&(s=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<r&&(r=h),u>s&&(s=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Yi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox),Qa.applyMatrix4(e.matrixWorld),this.union(Qa);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),As.subVectors(this.max,Yr),gr.subVectors(e.a,Yr),vr.subVectors(e.b,Yr),xr.subVectors(e.c,Yr),Mi.subVectors(vr,gr),Ti.subVectors(xr,vr),Zi.subVectors(gr,xr);let t=[0,-Mi.z,Mi.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,Mi.z,0,-Mi.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-Mi.y,Mi.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!eo(t,gr,vr,xr,As)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,gr,vr,xr,As))?!1:(Es.crossVectors(Mi,Ti),t=[Es.x,Es.y,Es.z],eo(t,gr,vr,xr,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new U,new U,new U,new U,new U,new U,new U,new U],Yi=new U,Qa=new Gi,gr=new U,vr=new U,xr=new U,Mi=new U,Ti=new U,Zi=new U,Yr=new U,As=new U,Es=new U,$i=new U;function eo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$i.fromArray(i,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=n.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kf=new Gi,Zr=new U,to=new U;class Vr{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(to)),this.expandByPoint(Zr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new U,no=new U,Cs=new U,Ai=new U,io=new U,Ds=new U,ro=new U;class bu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){no.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Ai.dot(this.direction),l=-Ai.dot(Cs),c=Ai.lengthSq(),u=Math.abs(1-a*a);let d,h,g,x;if(u>0)if(d=a*l-o,h=a*o-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const m=1/u;d*=m,h*=m,g=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Cs).multiplyScalar(h).add(no),g}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){io.subVectors(t,e),Ds.subVectors(n,e),ro.crossVectors(io,Ds);let a=this.direction.dot(ro),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(Ai,Ds));if(l<0)return null;const c=o*this.direction.dot(io.cross(Ai));if(c<0||l+c>a)return null;const u=-o*Ai.dot(ro);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,d,h,g,x,m,p){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=d,y[14]=h,y[3]=g,y[7]=x,y[11]=m,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,g=a*d,x=o*u,m=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=g+x*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=x+g*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,g=l*d,x=c*u,m=c*d;t[0]=h+m*o,t[4]=x*o-g,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-x,t[6]=m+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,g=l*d,x=c*u,m=c*d;t[0]=h-m*o,t[4]=-a*d,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*u,t[9]=m-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,g=a*d,x=o*u,m=o*d;t[0]=l*u,t[4]=x*c-g,t[8]=h*c+m,t[1]=l*d,t[5]=m*c+h,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,x=o*l,m=o*c;t[0]=l*u,t[4]=m-h*d,t[8]=x*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*d+x,t[10]=h-m*d}else if(e.order==="XZY"){const h=a*l,g=a*c,x=o*l,m=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+m,t[5]=a*u,t[9]=g*d-x,t[2]=x*d-g,t[6]=o*u,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Nf)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ei.crossVectors(n,pn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ei.crossVectors(n,pn)),Ei.normalize(),Ls.crossVectors(pn,Ei),r[0]=Ei.x,r[4]=Ls.x,r[8]=pn.x,r[1]=Ei.y,r[5]=Ls.y,r[9]=pn.y,r[2]=Ei.z,r[6]=Ls.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],g=n[13],x=n[2],m=n[6],p=n[10],y=n[14],T=n[3],w=n[7],b=n[11],E=n[15],z=r[0],k=r[4],M=r[8],D=r[12],F=r[1],G=r[5],W=r[9],N=r[13],B=r[2],Z=r[6],ne=r[10],ae=r[14],$=r[3],ce=r[7],ee=r[11],Se=r[15];return s[0]=a*z+o*F+l*B+c*$,s[4]=a*k+o*G+l*Z+c*ce,s[8]=a*M+o*W+l*ne+c*ee,s[12]=a*D+o*N+l*ae+c*Se,s[1]=u*z+d*F+h*B+g*$,s[5]=u*k+d*G+h*Z+g*ce,s[9]=u*M+d*W+h*ne+g*ee,s[13]=u*D+d*N+h*ae+g*Se,s[2]=x*z+m*F+p*B+y*$,s[6]=x*k+m*G+p*Z+y*ce,s[10]=x*M+m*W+p*ne+y*ee,s[14]=x*D+m*N+p*ae+y*Se,s[3]=T*z+w*F+b*B+E*$,s[7]=T*k+w*G+b*Z+E*ce,s[11]=T*M+w*W+b*ne+E*ee,s[15]=T*D+w*N+b*ae+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],g=e[14],x=e[3],m=e[7],p=e[11],y=e[15];return x*(+s*l*d-r*c*d-s*o*h+n*c*h+r*o*g-n*l*g)+m*(+t*l*g-t*c*h+s*a*h-r*a*g+r*c*u-s*l*u)+p*(+t*c*d-t*o*g-s*a*d+n*a*g+s*o*u-n*c*u)+y*(-r*o*u-t*l*d+t*o*h+r*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],g=e[11],x=e[12],m=e[13],p=e[14],y=e[15],T=d*p*c-m*h*c+m*l*g-o*p*g-d*l*y+o*h*y,w=x*h*c-u*p*c-x*l*g+a*p*g+u*l*y-a*h*y,b=u*m*c-x*d*c+x*o*g-a*m*g-u*o*y+a*d*y,E=x*d*l-u*m*l-x*o*h+a*m*h+u*o*p-a*d*p,z=t*T+n*w+r*b+s*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=T*k,e[1]=(m*h*s-d*p*s-m*r*g+n*p*g+d*r*y-n*h*y)*k,e[2]=(o*p*s-m*l*s+m*r*c-n*p*c-o*r*y+n*l*y)*k,e[3]=(d*l*s-o*h*s-d*r*c+n*h*c+o*r*g-n*l*g)*k,e[4]=w*k,e[5]=(u*p*s-x*h*s+x*r*g-t*p*g-u*r*y+t*h*y)*k,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*y-t*l*y)*k,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*g+t*l*g)*k,e[8]=b*k,e[9]=(x*d*s-u*m*s-x*n*g+t*m*g+u*n*y-t*d*y)*k,e[10]=(a*m*s-x*o*s+x*n*c-t*m*c-a*n*y+t*o*y)*k,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*g-t*o*g)*k,e[12]=E*k,e[13]=(u*m*r-x*d*r+x*n*h-t*m*h-u*n*p+t*d*p)*k,e[14]=(x*o*r-a*m*r-x*n*l+t*m*l+a*n*p-t*o*p)*k,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*h+t*o*h)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,g=s*u,x=s*d,m=a*u,p=a*d,y=o*d,T=l*c,w=l*u,b=l*d,E=n.x,z=n.y,k=n.z;return r[0]=(1-(m+y))*E,r[1]=(g+b)*E,r[2]=(x-w)*E,r[3]=0,r[4]=(g-b)*z,r[5]=(1-(h+y))*z,r[6]=(p+T)*z,r[7]=0,r[8]=(x+w)*k,r[9]=(p-T)*k,r[10]=(1-(h+m))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const a=_r.set(r[4],r[5],r[6]).length(),o=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/a,d=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),h=-(a+s)/(a-s),g=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),d=(t+e)*l,h=(n+r)*c,g=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new U,On=new Rt,If=new U(0,0,0),Nf=new U(1,1,1),Ei=new U,Ls=new U,pn=new U,Cl=new Rt,Dl=new Hr;class Ma{constructor(e=0,t=0,n=0,r=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bf=0;const Ll=new U,yr=new Hr,oi=new Rt,Rs=new U,$r=new U,Ff=new U,Of=new Hr,Rl=new U(1,0,0),Pl=new U(0,1,0),zl=new U(0,0,1),Uf={type:"added"},kl={type:"removed"};class hn extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new U,t=new Ma,n=new Hr,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new wn}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt($r,Rs,this.up):oi.lookAt(Rs,$r,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(oi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(kl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}hn.DEFAULT_UP=new U(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new U,li=new U,so=new U,ci=new U,br=new U,wr=new U,Il=new U,ao=new U,oo=new U,lo=new U;class fi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Un.subVectors(r,t),li.subVectors(n,t),so.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(li),l=Un.dot(so),c=li.dot(li),u=li.dot(so),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,g=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ci),l.set(0,0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),li.subVectors(e,t),Un.cross(li).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fi.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;br.subVectors(r,n),wr.subVectors(s,n),ao.subVectors(e,n);const l=br.dot(ao),c=wr.dot(ao);if(l<=0&&c<=0)return t.copy(n);oo.subVectors(e,r);const u=br.dot(oo),d=wr.dot(oo);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(br,a);lo.subVectors(e,s);const g=br.dot(lo),x=wr.dot(lo);if(x>=0&&g<=x)return t.copy(s);const m=g*c-l*x;if(m<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(wr,o);const p=u*x-g*d;if(p<=0&&d-u>=0&&g-x>=0)return Il.subVectors(s,r),o=(d-u)/(d-u+(g-x)),t.copy(r).addScaledVector(Il,o);const y=1/(p+m+h);return a=m*y,o=h*y,t.copy(n).addScaledVector(br,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gf=0;class xs extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=zr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class h0 extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,Ps=new je;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Su extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mu extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hf=0;const Cn=new Rt,co=new hn,Sr=new U,gn=new Gi,Kr=new Gi,Ut=new U;class Tn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?Mu:Su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(gn.min,Kr.min),gn.expandByPoint(Ut),Ut.addVectors(gn.max,Kr.max),gn.expandByPoint(Ut)):(gn.expandByPoint(Kr.min),gn.expandByPoint(Kr.max))}gn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),Ut.add(Sr)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new U,u[F]=new U;const d=new U,h=new U,g=new U,x=new je,m=new je,p=new je,y=new U,T=new U;function w(F,G,W){d.fromArray(r,F*3),h.fromArray(r,G*3),g.fromArray(r,W*3),x.fromArray(a,F*2),m.fromArray(a,G*2),p.fromArray(a,W*2),h.sub(d),g.sub(d),m.sub(x),p.sub(x);const N=1/(m.x*p.y-p.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(N),T.copy(g).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(N),c[F].add(y),c[G].add(y),c[W].add(y),u[F].add(T),u[G].add(T),u[W].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,G=b.length;F<G;++F){const W=b[F],N=W.start,B=W.count;for(let Z=N,ne=N+B;Z<ne;Z+=3)w(n[Z+0],n[Z+1],n[Z+2])}const E=new U,z=new U,k=new U,M=new U;function D(F){k.fromArray(s,F*3),M.copy(k);const G=c[F];E.copy(G),E.sub(k.multiplyScalar(k.dot(G))).normalize(),z.crossVectors(M,G);const N=z.dot(u[F])<0?-1:1;l[F*4]=E.x,l[F*4+1]=E.y,l[F*4+2]=E.z,l[F*4+3]=N}for(let F=0,G=b.length;F<G;++F){const W=b[F],N=W.start,B=W.count;for(let Z=N,ne=N+B;Z<ne;Z+=3)D(n[Z+0]),D(n[Z+1]),D(n[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let g=0,x=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?g=l[m]*o.data.stride+o.offset:g=l[m]*u;for(let y=0;y<u;y++)h[x++]=c[g++]}return new Wn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],g=e(h,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,g=d.length;h<g;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Rt,Mr=new bu,uo=new Vr,Jr=new U,Qr=new U,es=new U,ho=new U,zs=new U,ks=new je,Is=new je,Ns=new je,fo=new U,Bs=new U;class zn extends hn{constructor(e=new Tn,t=new h0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ho.fromBufferAttribute(d,e),a?zs.addScaledVector(ho,u):zs.addScaledVector(ho.sub(t),u))}t.add(zs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),e.ray.intersectsSphere(uo)===!1)||(Nl.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Nl),n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let w=y,b=T;w<b;w+=3){const E=o.getX(w),z=o.getX(w+1),k=o.getX(w+2);a=Fs(this,p,e,Mr,c,u,E,z,k),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);a=Fs(this,r,e,Mr,c,u,y,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let w=y,b=T;w<b;w+=3){const E=w,z=w+1,k=w+2;a=Fs(this,p,e,Mr,c,u,E,z,k),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=m,T=m+1,w=m+2;a=Fs(this,r,e,Mr,c,u,y,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Vf(i,e,t,n,r,s,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Ni,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:i}}function Fs(i,e,t,n,r,s,a,o,l){i.getVertexPosition(a,Jr),i.getVertexPosition(o,Qr),i.getVertexPosition(l,es);const c=Vf(i,e,t,n,Jr,Qr,es,fo);if(c){r&&(ks.fromBufferAttribute(r,a),Is.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),c.uv=fi.getUV(fo,Jr,Qr,es,ks,Is,Ns,new je)),s&&(ks.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,l),c.uv2=fi.getUV(fo,Jr,Qr,es,ks,Is,Ns,new je));const u={a,b:o,c:l,normal:new U,materialIndex:0};fi.getNormal(Jr,Qr,es,u.normal),c.face=u}return c}class _s extends Tn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function x(m,p,y,T,w,b,E,z,k,M,D){const F=b/k,G=E/M,W=b/2,N=E/2,B=z/2,Z=k+1,ne=M+1;let ae=0,$=0;const ce=new U;for(let ee=0;ee<ne;ee++){const Se=ee*G-N;for(let H=0;H<Z;H++){const se=H*F-W;ce[m]=se*T,ce[p]=Se*w,ce[y]=B,c.push(ce.x,ce.y,ce.z),ce[m]=0,ce[p]=0,ce[y]=z>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(H/k),d.push(1-ee/M),ae+=1}}for(let ee=0;ee<M;ee++)for(let Se=0;Se<k;Se++){const H=h+Se+Z*ee,se=h+Se+Z*(ee+1),ge=h+(Se+1)+Z*(ee+1),ue=h+(Se+1)+Z*ee;l.push(H,se,ue),l.push(se,ge,ue),$+=6}o.addGroup(g,$,D),g+=$,h+=ae}}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ur(i[t]);for(const r in n)e[r]=n[r]}return e}function Wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tu(i){return i.getRenderTarget()===null&&i.outputEncoding===mt?Zn:fs}const Ta={clone:Ur,merge:$t};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Au extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends Au{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Ar=1;class jf extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ln(Tr,Ar,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ln(Tr,Ar,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ln(Tr,Ar,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ln(Tr,Ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ln(Tr,Ar,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ln(Tr,Ar,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Eu extends Mn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yf extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Eu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _s(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ii});s.uniforms.tEquirect.value=t;const a=new zn(r,s),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=Dn),new jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const mo=new U,Zf=new U,$f=new wn;class Qi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mo.subVectors(n,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$f.getNormalMatrix(e),r=this.coplanarPoint(mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Vr,Os=new U;class Cu{constructor(e=new Qi,t=new Qi,n=new Qi,r=new Qi,s=new Qi,a=new Qi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],T=n[14],w=n[15];return t[0].setComponents(o-r,d-l,m-h,w-p).normalize(),t[1].setComponents(o+r,d+l,m+h,w+p).normalize(),t[2].setComponents(o+s,d+c,m+g,w+y).normalize(),t[3].setComponents(o-s,d-c,m-g,w-y).normalize(),t[4].setComponents(o-a,d-u,m-x,w-T).normalize(),t[5].setComponents(o+a,d+u,m+x,w+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Os.x=r.normal.x>0?e.max.x:e.min.x,Os.y=r.normal.y>0?e.max.y:e.min.y,Os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,h=c.usage,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,g=u.updateRange;i.bindBuffer(d,c),g.count===-1?i.bufferSubData(d,0,h):(t?i.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):i.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class d0 extends Tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,g=[],x=[],m=[],p=[];for(let y=0;y<u;y++){const T=y*h-a;for(let w=0;w<c;w++){const b=w*d-s;x.push(b,-T,0),m.push(0,0,1),p.push(w/o),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let T=0;T<o;T++){const w=T+c*y,b=T+c*(y+1),E=T+1+c*(y+1),z=T+1+c*y;g.push(w,b,z),g.push(b,E,z)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(p,2))}static fromJSON(e){return new d0(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm="vec3 transformed = vec3( position );",sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
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
}`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Gm=`#if defined( USE_ENVMAP )
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,jm=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,_1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,S1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,Ye={alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:em,alphatest_pars_fragment:tm,aomap_fragment:nm,aomap_pars_fragment:im,begin_vertex:rm,beginnormal_vertex:sm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:hm,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:mm,color_pars_vertex:pm,color_vertex:gm,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:bm,emissivemap_fragment:wm,emissivemap_pars_fragment:Sm,encodings_fragment:Mm,encodings_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Em,envmap_pars_fragment:Cm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Gm,envmap_vertex:Lm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:zm,fog_pars_fragment:km,gradientmap_pars_fragment:Im,lightmap_fragment:Nm,lightmap_pars_fragment:Bm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Um,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:qm,lights_physical_fragment:Xm,lights_physical_pars_fragment:jm,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:$m,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:ep,map_fragment:tp,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:rp,metalnessmap_fragment:sp,metalnessmap_pars_fragment:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:up,normal_fragment_begin:hp,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:mp,normal_vertex:pp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:yp,output_fragment:bp,packing:wp,premultiplied_alpha_fragment:Sp,project_vertex:Mp,dithering_fragment:Tp,dithering_pars_fragment:Ap,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Lp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Pp,skinbase_vertex:zp,skinning_pars_vertex:kp,skinning_vertex:Ip,skinnormal_vertex:Np,specularmap_fragment:Bp,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:Up,transmission_fragment:Gp,transmission_pars_fragment:Hp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:qp,uv2_pars_fragment:Xp,uv2_pars_vertex:jp,uv2_vertex:Yp,worldpos_vertex:Zp,background_vert:$p,background_frag:Kp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:r1,distanceRGBA_frag:s1,equirect_vert:a1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:h1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:m1,meshmatcap_frag:p1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:_1,meshphysical_vert:y1,meshphysical_frag:b1,meshtoon_vert:w1,meshtoon_frag:S1,points_vert:M1,points_frag:T1,shadow_vert:A1,shadow_frag:E1,sprite_vert:C1,sprite_frag:D1},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wn},uv2Transform:{value:new wn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wn}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wn}}},un={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new wn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};un.physical={uniforms:$t([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Us={r:0,b:0,g:0};function L1(i,e,t,n,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,d=null,h=0,g=null;function x(p,y){let T=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w));const b=i.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?m(o,l):w&&w.isColor&&(m(w,1),T=!0),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Sa)?(u===void 0&&(u=new zn(new _s(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ur(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,k,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=w.encoding!==mt,(d!==w||h!==w.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new zn(new d0(2,2),new qn({name:"BackgroundMaterial",uniforms:Ur(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=w.encoding!==mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,g=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,y){p.getRGB(Us,Tu(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(p,y=1){o.set(p),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:x}}function R1(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(B,Z,ne,ae,$){let ce=!1;if(a){const ee=m(ae,ne,Z);c!==ee&&(c=ee,g(c.object)),ce=y(B,ae,ne,$),ce&&T(B,ae,ne,$)}else{const ee=Z.wireframe===!0;(c.geometry!==ae.id||c.program!==ne.id||c.wireframe!==ee)&&(c.geometry=ae.id,c.program=ne.id,c.wireframe=ee,ce=!0)}$!==null&&t.update($,34963),(ce||u)&&(u=!1,M(B,Z,ne,ae),$!==null&&i.bindBuffer(34963,t.get($).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function m(B,Z,ne){const ae=ne.wireframe===!0;let $=o[B.id];$===void 0&&($={},o[B.id]=$);let ce=$[Z.id];ce===void 0&&(ce={},$[Z.id]=ce);let ee=ce[ae];return ee===void 0&&(ee=p(h()),ce[ae]=ee),ee}function p(B){const Z=[],ne=[],ae=[];for(let $=0;$<r;$++)Z[$]=0,ne[$]=0,ae[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ne,attributeDivisors:ae,object:B,attributes:{},index:null}}function y(B,Z,ne,ae){const $=c.attributes,ce=Z.attributes;let ee=0;const Se=ne.getAttributes();for(const H in Se)if(Se[H].location>=0){const ge=$[H];let ue=ce[H];if(ue===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ae}function T(B,Z,ne,ae){const $={},ce=Z.attributes;let ee=0;const Se=ne.getAttributes();for(const H in Se)if(Se[H].location>=0){let ge=ce[H];ge===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(ge=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(ge=B.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),$[H]=ue,ee++}c.attributes=$,c.attributesNum=ee,c.index=ae}function w(){const B=c.newAttributes;for(let Z=0,ne=B.length;Z<ne;Z++)B[Z]=0}function b(B){E(B,0)}function E(B,Z){const ne=c.newAttributes,ae=c.enabledAttributes,$=c.attributeDivisors;ne[B]=1,ae[B]===0&&(i.enableVertexAttribArray(B),ae[B]=1),$[B]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),$[B]=Z)}function z(){const B=c.newAttributes,Z=c.enabledAttributes;for(let ne=0,ae=Z.length;ne<ae;ne++)Z[ne]!==B[ne]&&(i.disableVertexAttribArray(ne),Z[ne]=0)}function k(B,Z,ne,ae,$,ce){n.isWebGL2===!0&&(ne===5124||ne===5125)?i.vertexAttribIPointer(B,Z,ne,$,ce):i.vertexAttribPointer(B,Z,ne,ae,$,ce)}function M(B,Z,ne,ae){if(n.isWebGL2===!1&&(B.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const $=ae.attributes,ce=ne.getAttributes(),ee=Z.defaultAttributeValues;for(const Se in ce){const H=ce[Se];if(H.location>=0){let se=$[Se];if(se===void 0&&(Se==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),Se==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),se!==void 0){const ge=se.normalized,ue=se.itemSize,j=t.get(se);if(j===void 0)continue;const V=j.buffer,ie=j.type,me=j.bytesPerElement;if(se.isInterleavedBufferAttribute){const ve=se.data,Ve=ve.stride,Le=se.offset;if(ve.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)E(H.location+Re,ve.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Re=0;Re<H.locationSize;Re++)b(H.location+Re);i.bindBuffer(34962,V);for(let Re=0;Re<H.locationSize;Re++)k(H.location+Re,ue/H.locationSize,ie,ge,Ve*me,(Le+ue/H.locationSize*Re)*me)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)E(H.location+ve,se.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<H.locationSize;ve++)b(H.location+ve);i.bindBuffer(34962,V);for(let ve=0;ve<H.locationSize;ve++)k(H.location+ve,ue/H.locationSize,ie,ge,ue*me,ue/H.locationSize*ve*me)}}else if(ee!==void 0){const ge=ee[Se];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(H.location,ge);break;case 3:i.vertexAttrib3fv(H.location,ge);break;case 4:i.vertexAttrib4fv(H.location,ge);break;default:i.vertexAttrib1fv(H.location,ge)}}}}z()}function D(){W();for(const B in o){const Z=o[B];for(const ne in Z){const ae=Z[ne];for(const $ in ae)x(ae[$].object),delete ae[$];delete Z[ne]}delete o[B]}}function F(B){if(o[B.id]===void 0)return;const Z=o[B.id];for(const ne in Z){const ae=Z[ne];for(const $ in ae)x(ae[$].object),delete ae[$];delete Z[ne]}delete o[B.id]}function G(B){for(const Z in o){const ne=o[Z];if(ne[B.id]===void 0)continue;const ae=ne[B.id];for(const $ in ae)x(ae[$].object),delete ae[$];delete ne[B.id]}}function W(){N(),u=!0,c!==l&&(c=l,g(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:N,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:b,disableUnusedAttributes:z}}function P1(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function z1(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(k){if(k==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(34930),h=i.getParameter(35660),g=i.getParameter(3379),x=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),y=i.getParameter(36348),T=i.getParameter(36349),w=h>0,b=a||e.has("OES_texture_float"),E=w&&b,z=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:z}}function k1(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Qi,o=new wn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||n!==0||r;return r=h,n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,g){const x=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,y=i.get(d);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const T=s?0:n,w=T*4;let b=y.clippingState||null;l.value=b,b=u(x,h,w,g);for(let E=0;E!==w;++E)b[E]=t[E];y.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,g,x){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,x!==!0||p===null){const y=g+m*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<y)&&(p=new Float32Array(y));for(let w=0,b=g;w!==m;++w,b+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function I1(i){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=Br:o===Vo&&(a.mapping=Fr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ho||o===Vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yf(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lu extends Au{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pr=4,Bl=[.125,.215,.35,.446,.526,.582],tr=20,po=new Lu,Fl=new tt;let go=null;const er=(1+Math.sqrt(5))/2,Cr=1/er,Ol=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,er,Cr),new U(0,er,-Cr),new U(Cr,0,er),new U(-Cr,0,er),new U(er,Cr,0),new U(-er,Cr,0)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){go=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ds,format:Vn,encoding:cr,depthBuffer:!1},r=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N1(s)),this._blurMaterial=B1(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,r){const o=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Fl),u.toneMapping=pi,u.autoClear=!1;const g=new h0({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),x=new zn(new _s,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Fl),m=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(o.up.set(0,l[y],0),o.lookAt(c[y],0,0)):T===1?(o.up.set(0,0,l[y]),o.lookAt(0,c[y],0)):(o.up.set(0,l[y],0),o.lookAt(0,0,c[y]));const w=this._cubeSize;Gs(r,T*w,y>2?w:0,w,w),u.setRenderTarget(r),m&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Br||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(r-1)%Ol.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*tr-1),m=s/x,p=isFinite(s)?1+Math.floor(u*m):tr;p>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${tr}`);const y=[];let T=0;for(let k=0;k<tr;++k){const M=k/m,D=Math.exp(-M*M/2);y.push(D),k===0?T+=D:k<p&&(T+=2*D)}for(let k=0;k<y.length;k++)y[k]=y[k]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=y,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-n;const b=this._sizeLods[r],E=3*b*(r>w-Pr?r-w+Pr:0),z=4*(this._cubeSize-b);Gs(t,E,z,3*b,2*b),l.setRenderTarget(t),l.render(d,po)}}function N1(i){const e=[],t=[],n=[];let r=i;const s=i-Pr+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Pr?l=Bl[a-i+Pr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,m=3,p=2,y=1,T=new Float32Array(m*x*g),w=new Float32Array(p*x*g),b=new Float32Array(y*x*g);for(let z=0;z<g;z++){const k=z%3*2/3-1,M=z>2?0:-1,D=[k,M,0,k+2/3,M,0,k+2/3,M+1,0,k,M,0,k+2/3,M+1,0,k,M+1,0];T.set(D,m*x*z),w.set(h,p*x*z);const F=[z,z,z,z,z,z];b.set(F,y*x*z)}const E=new Tn;E.setAttribute("position",new Wn(T,m)),E.setAttribute("uv",new Wn(w,p)),E.setAttribute("faceIndex",new Wn(b,y)),e.push(E),r>Pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function B1(i,e,t){const n=new Float32Array(tr),r=new U(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:f0(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Hl(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:f0(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Vl(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:f0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function f0(){return`

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
	`}function F1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Vo,u=l===Br||l===Fr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ul(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Ul(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function O1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function U1(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],34962);const g=d.morphAttributes;for(const x in g){const m=g[x];for(let p=0,y=m.length;p<y;p++)e.update(m[p],34962)}}function c(d){const h=[],g=d.index,x=d.attributes.position;let m=0;if(g!==null){const T=g.array;m=g.version;for(let w=0,b=T.length;w<b;w+=3){const E=T[w+0],z=T[w+1],k=T[w+2];h.push(E,z,z,k,k,E)}}else{const T=x.array;m=x.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const E=w+0,z=w+1,k=w+2;h.push(E,z,z,k,k,E)}}const p=new(gu(h)?Mu:Su)(h,1);p.version=m;const y=s.get(d);y&&e.remove(y),s.set(d,p)}function u(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function G1(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,g){i.drawElements(s,g,o,h*l),t.update(g,s,1)}function d(h,g,x){if(x===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,h*l,x),t.update(g,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function H1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function V1(i,e){return i[0]-e[0]}function W1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q1(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,h){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let Z=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,z=u.morphAttributes.position||[],k=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let D=0;w===!0&&(D=1),b===!0&&(D=2),E===!0&&(D=3);let F=u.attributes.position.count*D,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const W=new Float32Array(F*G*4*m),N=new yu(W,F,G,m);N.type=ir,N.needsUpdate=!0;const B=D*4;for(let ne=0;ne<m;ne++){const ae=z[ne],$=k[ne],ce=M[ne],ee=F*G*4*ne;for(let Se=0;Se<ae.count;Se++){const H=Se*B;w===!0&&(a.fromBufferAttribute(ae,Se),W[ee+H+0]=a.x,W[ee+H+1]=a.y,W[ee+H+2]=a.z,W[ee+H+3]=0),b===!0&&(a.fromBufferAttribute($,Se),W[ee+H+4]=a.x,W[ee+H+5]=a.y,W[ee+H+6]=a.z,W[ee+H+7]=0),E===!0&&(a.fromBufferAttribute(ce,Se),W[ee+H+8]=a.x,W[ee+H+9]=a.y,W[ee+H+10]=a.z,W[ee+H+11]=ce.itemSize===4?a.w:1)}}p={count:m,texture:N,size:new je(F,G)},s.set(u,p),u.addEventListener("dispose",Z)}let y=0;for(let w=0;w<g.length;w++)y+=g[w];const T=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",g),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const x=g===void 0?0:g.length;let m=n[u.id];if(m===void 0||m.length!==x){m=[];for(let b=0;b<x;b++)m[b]=[b,0];n[u.id]=m}for(let b=0;b<x;b++){const E=m[b];E[0]=b,E[1]=g[b]}m.sort(W1);for(let b=0;b<8;b++)b<x&&m[b][1]?(o[b][0]=m[b][0],o[b][1]=m[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(V1);const p=u.morphAttributes.position,y=u.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const E=o[b],z=E[0],k=E[1];z!==Number.MAX_SAFE_INTEGER&&k?(p&&u.getAttribute("morphTarget"+b)!==p[z]&&u.setAttribute("morphTarget"+b,p[z]),y&&u.getAttribute("morphNormal"+b)!==y[z]&&u.setAttribute("morphNormal"+b,y[z]),r[b]=k,T+=k):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),y&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const w=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function X1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ru=new Mn,Pu=new yu,zu=new zf,ku=new Eu,Wl=[],ql=[],Xl=new Float32Array(16),jl=new Float32Array(9),Yl=new Float32Array(4);function Wr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Z1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function $1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function K1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),kt(t,n)}}function J1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),kt(t,n)}}function Q1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),kt(t,n)}}function eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ru,r)}function cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zu,r)}function ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ku,r)}function hg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pu,r)}function dg(i){switch(i){case 5126:return j1;case 35664:return Y1;case 35665:return Z1;case 35666:return $1;case 35674:return K1;case 35675:return J1;case 35676:return Q1;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(i,e){i.uniform1fv(this.addr,e)}function mg(i,e){const t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){const t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function gg(i,e){const t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){const t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xg(i,e){const t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _g(i,e){const t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yg(i,e){i.uniform1iv(this.addr,e)}function bg(i,e){i.uniform2iv(this.addr,e)}function wg(i,e){i.uniform3iv(this.addr,e)}function Sg(i,e){i.uniform4iv(this.addr,e)}function Mg(i,e){i.uniform1uiv(this.addr,e)}function Tg(i,e){i.uniform2uiv(this.addr,e)}function Ag(i,e){i.uniform3uiv(this.addr,e)}function Eg(i,e){i.uniform4uiv(this.addr,e)}function Cg(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ru,s[a])}function Dg(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zu,s[a])}function Lg(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ku,s[a])}function Rg(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pu,s[a])}function Pg(i){switch(i){case 5126:return fg;case 35664:return mg;case 35665:return pg;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Sg;case 5125:return Mg;case 36294:return Tg;case 36295:return Ag;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Rg}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dg(t.type)}}class kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pg(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){const n=i.name,r=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),a=vo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zl(t,c===void 0?new zg(o,i,e):new kg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ig(o),Zl(t,d)),t=d}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ng(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function $l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Bg=0;function Fg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Og(i){switch(i){case cr:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fg(i.getShaderSource(e),a)}else return r}function Ug(i,e){const t=Og(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gg(i,e){let t;switch(e){case Wd:t="Linear";break;case qd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case jd:t="ACESFilmic";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rs(i){return i!==""}function Jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(qg,Xg)}function Xg(i,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zo(t)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(jg,Yg)}function Yg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function $g(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Br:case Fr:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Vd:e="ENVMAP_BLENDING_ADD";break}return e}function Qg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e4(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zg(t),c=$g(t),u=Kg(t),d=Jg(t),h=Qg(t),g=t.isWebGL2?"":Hg(t),x=Vg(s),m=r.createProgram();let p,y,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(rs).join(`
`),p.length>0&&(p+=`
`),y=[g,x].filter(rs).join(`
`),y.length>0&&(y+=`
`)):(p=[tc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),y=[g,tc(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==pi?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,Ug("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=Zo(a),a=Jl(a,t),a=Ql(a,t),o=Zo(o),o=Jl(o,t),o=Ql(o,t),a=ec(a),o=ec(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=T+p+a,b=T+y+o,E=$l(r,35633,w),z=$l(r,35632,b);if(r.attachShader(m,E),r.attachShader(m,z),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const D=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(E).trim(),G=r.getShaderInfoLog(z).trim();let W=!0,N=!0;if(r.getProgramParameter(m,35714)===!1){W=!1;const B=Kl(r,E,"vertex"),Z=Kl(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+D+`
`+B+`
`+Z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:W,programLog:D,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:y}})}r.deleteShader(E),r.deleteShader(z);let k;this.getUniforms=function(){return k===void 0&&(k=new la(r,m)),k};let M;return this.getAttributes=function(){return M===void 0&&(M=Wg(r,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=z,this}let t4=0;class n4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i4(e),t.set(e,n)),n}}class i4{constructor(e){this.id=t4++,this.code=e,this.usedTimes=0}}function r4(i,e,t,n,r,s,a){const o=new wu,l=new n4,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,D,F,G,W){const N=G.fog,B=W.geometry,Z=M.isMeshStandardMaterial?G.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),ae=ne&&ne.mapping===Sa?ne.image.height:null,$=x[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=ce!==void 0?ce.length:0;let Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let H,se,ge,ue;if($){const Ve=un[$];H=Ve.vertexShader,se=Ve.fragmentShader}else H=M.vertexShader,se=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const j=i.getRenderTarget(),V=M.alphaTest>0,ie=M.clearcoat>0,me=M.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:M.type,vertexShader:H,fragmentShader:se,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?i.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:cr,map:!!M.map,matcap:!!M.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:ae,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===pf,tangentSpaceNormalMap:M.normalMapType===mf,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===mt,clearcoat:ie,clearcoatMap:ie&&!!M.clearcoatMap,clearcoatRoughnessMap:ie&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!M.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!M.iridescenceMap,iridescenceThicknessMap:me&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===zr,alphaMap:!!M.alphaMap,alphaTest:V,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!B.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:pi,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pi,flipSided:M.side===Sn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)D.push(F),D.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(y(D,M),T(D,M),D.push(i.outputEncoding)),D.push(M.customProgramCacheKey),D.join()}function y(M,D){M.push(D.precision),M.push(D.outputEncoding),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.combine),M.push(D.vertexUvs),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function T(M,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.map&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.lightMap&&o.enable(7),D.aoMap&&o.enable(8),D.emissiveMap&&o.enable(9),D.bumpMap&&o.enable(10),D.normalMap&&o.enable(11),D.objectSpaceNormalMap&&o.enable(12),D.tangentSpaceNormalMap&&o.enable(13),D.clearcoat&&o.enable(14),D.clearcoatMap&&o.enable(15),D.clearcoatRoughnessMap&&o.enable(16),D.clearcoatNormalMap&&o.enable(17),D.iridescence&&o.enable(18),D.iridescenceMap&&o.enable(19),D.iridescenceThicknessMap&&o.enable(20),D.displacementMap&&o.enable(21),D.specularMap&&o.enable(22),D.roughnessMap&&o.enable(23),D.metalnessMap&&o.enable(24),D.gradientMap&&o.enable(25),D.alphaMap&&o.enable(26),D.alphaTest&&o.enable(27),D.vertexColors&&o.enable(28),D.vertexAlphas&&o.enable(29),D.vertexUvs&&o.enable(30),D.vertexTangents&&o.enable(31),D.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.physicallyCorrectLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.specularIntensityMap&&o.enable(15),D.specularColorMap&&o.enable(16),D.transmission&&o.enable(17),D.transmissionMap&&o.enable(18),D.thicknessMap&&o.enable(19),D.sheen&&o.enable(20),D.sheenColorMap&&o.enable(21),D.sheenRoughnessMap&&o.enable(22),D.decodeVideoTexture&&o.enable(23),D.opaque&&o.enable(24),M.push(o.mask)}function w(M){const D=x[M.type];let F;if(D){const G=un[D];F=Ta.clone(G.uniforms)}else F=M.uniforms;return F}function b(M,D){let F;for(let G=0,W=c.length;G<W;G++){const N=c[G];if(N.cacheKey===D){F=N,++F.usedTimes;break}}return F===void 0&&(F=new e4(i,D,M,s),c.push(F)),F}function E(M){if(--M.usedTimes===0){const D=c.indexOf(M);c[D]=c[c.length-1],c.pop(),M.destroy()}}function z(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:E,releaseShaderCache:z,programs:c,dispose:k}}function s4(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function a4(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,h,g,x,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:g,groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=g,y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function o(d,h,g,x,m,p){const y=a(d,h,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):t.push(y)}function l(d,h,g,x,m,p){const y=a(d,h,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function c(d,h){t.length>1&&t.sort(d||a4),n.length>1&&n.sort(h||nc),r.length>1&&r.sort(h||nc)}function u(){for(let d=e,h=i.length;d<h;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function o4(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ic,i.set(n,[a])):r>=s.length?(a=new ic,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function l4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function c4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let u4=0;function h4(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d4(i,e){const t=new l4,n=c4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new Rt,o=new Rt;function l(u,d){let h=0,g=0,x=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let m=0,p=0,y=0,T=0,w=0,b=0,E=0,z=0,k=0,M=0;u.sort(h4);const D=d!==!0?Math.PI:1;for(let G=0,W=u.length;G<W;G++){const N=u[G],B=N.color,Z=N.intensity,ne=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*Z*D,g+=B.g*Z*D,x+=B.b*Z*D;else if(N.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(N.sh.coefficients[$],Z);else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*D),N.castShadow){const ce=N.shadow,ee=n.get(N);ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,r.directionalShadow[m]=ee,r.directionalShadowMap[m]=ae,r.directionalShadowMatrix[m]=N.shadow.matrix,b++}r.directional[m]=$,m++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(B).multiplyScalar(Z*D),$.distance=ne,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,r.spot[y]=$;const ce=N.shadow;if(N.map&&(r.spotLightMap[k]=N.map,k++,ce.updateMatrices(N),N.castShadow&&M++),r.spotLightMatrix[y]=ce.matrix,N.castShadow){const ee=n.get(N);ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,r.spotShadow[y]=ee,r.spotShadowMap[y]=ae,z++}y++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(B).multiplyScalar(Z),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=$,T++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*D),$.distance=N.distance,$.decay=N.decay,N.castShadow){const ce=N.shadow,ee=n.get(N);ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,ee.shadowCameraNear=ce.camera.near,ee.shadowCameraFar=ce.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=ae,r.pointShadowMatrix[p]=N.shadow.matrix,E++}r.point[p]=$,p++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(Z*D),$.groundColor.copy(N.groundColor).multiplyScalar(Z*D),r.hemi[w]=$,w++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=x;const F=r.hash;(F.directionalLength!==m||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==T||F.hemiLength!==w||F.numDirectionalShadows!==b||F.numPointShadows!==E||F.numSpotShadows!==z||F.numSpotMaps!==k)&&(r.directional.length=m,r.spot.length=y,r.rectArea.length=T,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=z+k-M,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=M,F.directionalLength=m,F.pointLength=p,F.spotLength=y,F.rectAreaLength=T,F.hemiLength=w,F.numDirectionalShadows=b,F.numPointShadows=E,F.numSpotShadows=z,F.numSpotMaps=k,r.version=u4++)}function c(u,d){let h=0,g=0,x=0,m=0,p=0;const y=d.matrixWorldInverse;for(let T=0,w=u.length;T<w;T++){const b=u[T];if(b.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(y),h++}else if(b.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(y),x++}else if(b.isRectAreaLight){const E=r.rectArea[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),o.identity(),a.copy(b.matrixWorld),a.premultiply(y),o.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const E=r.point[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(y),p++}}}return{setup:l,setupView:c,state:r}}function rc(i,e){const t=new d4(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f4(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new rc(i,e),t.set(s,[l])):a>=o.length?(l=new rc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class m4 extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p4 extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v4=`uniform sampler2D shadow_pass;
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
}`;function x4(i,e,t){let n=new Cu;const r=new je,s=new je,a=new bt,o=new m4({depthPacking:ff}),l=new p4,c={},u=t.maxTextureSize,d={[Ni]:Sn,[Sn]:Ni,[Pi]:Pi},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:g4,fragmentShader:v4}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new Tn;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new zn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu,this.render=function(b,E,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const k=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ii),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let G=0,W=b.length;G<W;G++){const N=b[G],B=N.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null){const ae=this.type!==is?{minFilter:Qt,magFilter:Qt}:{};B.map=new Bi(r.x,r.y,ae),B.map.texture.name=N.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ne=B.getViewportCount();for(let ae=0;ae<ne;ae++){const $=B.getViewport(ae);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),F.viewport(a),B.updateMatrices(N,ae),n=B.getFrustum(),w(E,z,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===is&&y(B,z),B.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(k,M,D)};function y(b,E){const z=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,z,h,m,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,z,g,m,null)}function T(b,E,z,k,M,D){let F=null;const G=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(G!==void 0)F=G;else if(F=z.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=F.uuid,N=E.uuid;let B=c[W];B===void 0&&(B={},c[W]=B);let Z=B[N];Z===void 0&&(Z=F.clone(),B[N]=Z),F=Z}return F.visible=E.visible,F.wireframe=E.wireframe,D===is?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:d[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,z.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(z.matrixWorld),F.nearDistance=k,F.farDistance=M),F}function w(b,E,z,k,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===is)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const G=e.update(b),W=b.material;if(Array.isArray(W)){const N=G.groups;for(let B=0,Z=N.length;B<Z;B++){const ne=N[B],ae=W[ne.materialIndex];if(ae&&ae.visible){const $=T(b,ae,k,z.near,z.far,M);i.renderBufferDirect(z,null,G,$,b,ne)}}}else if(W.visible){const N=T(b,W,k,z.near,z.far,M);i.renderBufferDirect(z,null,G,N,b,null)}}const F=b.children;for(let G=0,W=F.length;G<W;G++)w(F[G],E,z,k,M)}}function _4(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const J=new bt;let pe=null;const Te=new bt(0,0,0,0);return{setMask:function(Ce){pe!==Ce&&!O&&(i.colorMask(Ce,Ce,Ce,Ce),pe=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,ot,Ft,Wt,Vi){Vi===!0&&(Ce*=Wt,ot*=Wt,Ft*=Wt),J.set(Ce,ot,Ft,Wt),Te.equals(J)===!1&&(i.clearColor(Ce,ot,Ft,Wt),Te.copy(J))},reset:function(){O=!1,pe=null,Te.set(-1,0,0,0)}}}function s(){let O=!1,J=null,pe=null,Te=null;return{setTest:function(Ce){Ce?V(2929):ie(2929)},setMask:function(Ce){J!==Ce&&!O&&(i.depthMask(Ce),J=Ce)},setFunc:function(Ce){if(pe!==Ce){switch(Ce){case Id:i.depthFunc(512);break;case Nd:i.depthFunc(519);break;case Bd:i.depthFunc(513);break;case Go:i.depthFunc(515);break;case Fd:i.depthFunc(514);break;case Od:i.depthFunc(518);break;case Ud:i.depthFunc(516);break;case Gd:i.depthFunc(517);break;default:i.depthFunc(515)}pe=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Te!==Ce&&(i.clearDepth(Ce),Te=Ce)},reset:function(){O=!1,J=null,pe=null,Te=null}}}function a(){let O=!1,J=null,pe=null,Te=null,Ce=null,ot=null,Ft=null,Wt=null,Vi=null;return{setTest:function(vt){O||(vt?V(2960):ie(2960))},setMask:function(vt){J!==vt&&!O&&(i.stencilMask(vt),J=vt)},setFunc:function(vt,ii,En){(pe!==vt||Te!==ii||Ce!==En)&&(i.stencilFunc(vt,ii,En),pe=vt,Te=ii,Ce=En)},setOp:function(vt,ii,En){(ot!==vt||Ft!==ii||Wt!==En)&&(i.stencilOp(vt,ii,En),ot=vt,Ft=ii,Wt=En)},setLocked:function(vt){O=vt},setClear:function(vt){Vi!==vt&&(i.clearStencil(vt),Vi=vt)},reset:function(){O=!1,J=null,pe=null,Te=null,Ce=null,ot=null,Ft=null,Wt=null,Vi=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let h={},g={},x=new WeakMap,m=[],p=null,y=!1,T=null,w=null,b=null,E=null,z=null,k=null,M=null,D=!1,F=null,G=null,W=null,N=null,B=null;const Z=i.getParameter(35661);let ne=!1,ae=0;const $=i.getParameter(7938);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),ne=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ne=ae>=2);let ce=null,ee={};const Se=i.getParameter(3088),H=i.getParameter(2978),se=new bt().fromArray(Se),ge=new bt().fromArray(H);function ue(O,J,pe){const Te=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(O,Ce),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let ot=0;ot<pe;ot++)i.texImage2D(J+ot,0,6408,1,1,0,6408,5121,Te);return Ce}const j={};j[3553]=ue(3553,3553,1),j[34067]=ue(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(2929),l.setFunc(Go),wt(!1),Dt(Z0),V(2884),dt(Ii);function V(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function me(O,J){return g[O]!==J?(i.bindFramebuffer(O,J),g[O]=J,n&&(O===36009&&(g[36160]=J),O===36160&&(g[36009]=J)),!0):!1}function ve(O,J){let pe=m,Te=!1;if(O)if(pe=x.get(J),pe===void 0&&(pe=[],x.set(J,pe)),O.isWebGLMultipleRenderTargets){const Ce=O.texture;if(pe.length!==Ce.length||pe[0]!==36064){for(let ot=0,Ft=Ce.length;ot<Ft;ot++)pe[ot]=36064+ot;pe.length=Ce.length,Te=!0}}else pe[0]!==36064&&(pe[0]=36064,Te=!0);else pe[0]!==1029&&(pe[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ve(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const Le={[Lr]:32774,[Md]:32778,[Td]:32779};if(n)Le[Q0]=32775,Le[el]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Le[Q0]=O.MIN_EXT,Le[el]=O.MAX_EXT)}const Re={[Ad]:0,[Ed]:1,[Cd]:768,[hu]:770,[kd]:776,[Pd]:774,[Ld]:772,[Dd]:769,[du]:771,[zd]:775,[Rd]:773};function dt(O,J,pe,Te,Ce,ot,Ft,Wt){if(O===Ii){y===!0&&(ie(3042),y=!1);return}if(y===!1&&(V(3042),y=!0),O!==Sd){if(O!==T||Wt!==D){if((w!==Lr||z!==Lr)&&(i.blendEquation(32774),w=Lr,z=Lr),Wt)switch(O){case zr:i.blendFuncSeparate(1,771,1,771);break;case $0:i.blendFunc(1,1);break;case K0:i.blendFuncSeparate(0,769,0,1);break;case J0:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zr:i.blendFuncSeparate(770,771,1,771);break;case $0:i.blendFunc(770,1);break;case K0:i.blendFuncSeparate(0,769,0,1);break;case J0:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,E=null,k=null,M=null,T=O,D=Wt}return}Ce=Ce||J,ot=ot||pe,Ft=Ft||Te,(J!==w||Ce!==z)&&(i.blendEquationSeparate(Le[J],Le[Ce]),w=J,z=Ce),(pe!==b||Te!==E||ot!==k||Ft!==M)&&(i.blendFuncSeparate(Re[pe],Re[Te],Re[ot],Re[Ft]),b=pe,E=Te,k=ot,M=Ft),T=O,D=!1}function Nt(O,J){O.side===Pi?ie(2884):V(2884);let pe=O.side===Sn;J&&(pe=!pe),wt(pe),O.blending===zr&&O.transparent===!1?dt(Ii):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Te=O.stencilWrite;c.setTest(Te),Te&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?V(32926):ie(32926)}function wt(O){F!==O&&(O?i.frontFace(2304):i.frontFace(2305),F=O)}function Dt(O){O!==yd?(V(2884),O!==G&&(O===Z0?i.cullFace(1029):O===bd?i.cullFace(1028):i.cullFace(1032))):ie(2884),G=O}function st(O){O!==W&&(ne&&i.lineWidth(O),W=O)}function ke(O,J,pe){O?(V(32823),(N!==J||B!==pe)&&(i.polygonOffset(J,pe),N=J,B=pe)):ie(32823)}function Ae(O){O?V(3089):ie(3089)}function at(O){O===void 0&&(O=33984+Z-1),ce!==O&&(i.activeTexture(O),ce=O)}function L(O,J,pe){pe===void 0&&(ce===null?pe=33984+Z-1:pe=ce);let Te=ee[pe];Te===void 0&&(Te={type:void 0,texture:void 0},ee[pe]=Te),(Te.type!==O||Te.texture!==J)&&(ce!==pe&&(i.activeTexture(pe),ce=pe),i.bindTexture(O,J||j[O]),Te.type=O,Te.texture=J)}function A(){const O=ee[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){se.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function Pe(O){ge.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function it(O,J){let pe=d.get(J);pe===void 0&&(pe=new WeakMap,d.set(J,pe));let Te=pe.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(J,O.name),pe.set(O,Te))}function gt(O,J){const Te=d.get(J).get(O);u.get(J)!==Te&&(i.uniformBlockBinding(J,Te,O.__bindingPointIndex),u.set(J,Te))}function Bt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,ee={},g={},x=new WeakMap,m=[],p=null,y=!1,T=null,w=null,b=null,E=null,z=null,k=null,M=null,D=!1,F=null,G=null,W=null,N=null,B=null,se.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:V,disable:ie,bindFramebuffer:me,drawBuffers:ve,useProgram:Ve,setBlending:dt,setMaterial:Nt,setFlipSided:wt,setCullFace:Dt,setLineWidth:st,setPolygonOffset:ke,setScissorTest:Ae,activeTexture:at,bindTexture:L,unbindTexture:A,compressedTexImage2D:K,compressedTexImage3D:de,texImage2D:Fe,texImage3D:Ee,updateUBOMapping:it,uniformBlockBinding:gt,texStorage2D:re,texStorage3D:De,texSubImage2D:le,texSubImage3D:ye,compressedTexSubImage2D:Be,compressedTexSubImage3D:we,scissor:Oe,viewport:Pe,reset:Bt}}function y4(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let m;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return y?new OffscreenCanvas(L,A):ma("canvas")}function w(L,A,K,de){let le=1;if((L.width>de||L.height>de)&&(le=de/Math.max(L.width,L.height)),le<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ye=A?fa:Math.floor,Be=ye(le*L.width),we=ye(le*L.height);m===void 0&&(m=T(Be,we));const re=K?T(Be,we):m;return re.width=Be,re.height=we,re.getContext("2d").drawImage(L,0,0,Be,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Be+"x"+we+")."),re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return Yo(L.width)&&Yo(L.height)}function E(L){return o?!1:L.wrapS!==Hn||L.wrapT!==Hn||L.minFilter!==Qt&&L.minFilter!==Dn}function z(L,A){return L.generateMipmaps&&A&&L.minFilter!==Qt&&L.minFilter!==Dn}function k(L){i.generateMipmap(L)}function M(L,A,K,de,le=!1){if(o===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ye=A;return A===6403&&(K===5126&&(ye=33326),K===5131&&(ye=33325),K===5121&&(ye=33321)),A===33319&&(K===5126&&(ye=33328),K===5131&&(ye=33327),K===5121&&(ye=33323)),A===6408&&(K===5126&&(ye=34836),K===5131&&(ye=34842),K===5121&&(ye=de===mt&&le===!1?35907:32856),K===32819&&(ye=32854),K===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function D(L,A,K){return z(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==Qt&&L.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function F(L){return L===Qt||L===tl||L===Ga?9728:9729}function G(L){const A=L.target;A.removeEventListener("dispose",G),N(A),A.isVideoTexture&&x.delete(A)}function W(L){const A=L.target;A.removeEventListener("dispose",W),Z(A)}function N(L){const A=n.get(L);if(A.__webglInit===void 0)return;const K=L.source,de=p.get(K);if(de){const le=de[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&B(L),Object.keys(de).length===0&&p.delete(K)}n.remove(L)}function B(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const K=L.source,de=p.get(K);delete de[A.__cacheKey],a.memory.textures--}function Z(L){const A=L.texture,K=n.get(L),de=n.get(A);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)i.deleteFramebuffer(K.__webglFramebuffer[le]),K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[le]);else{if(i.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let le=0;le<K.__webglColorRenderbuffer.length;le++)K.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[le]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let le=0,ye=A.length;le<ye;le++){const Be=n.get(A[le]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),a.memory.textures--),n.remove(A[le])}n.remove(A),n.remove(L)}let ne=0;function ae(){ne=0}function $(){const L=ne;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),ne+=1,L}function ce(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function ee(L,A){const K=n.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(K,L,A);return}}t.bindTexture(3553,K.__webglTexture,33984+A)}function Se(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ie(K,L,A);return}t.bindTexture(35866,K.__webglTexture,33984+A)}function H(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ie(K,L,A);return}t.bindTexture(32879,K.__webglTexture,33984+A)}function se(L,A){const K=n.get(L);if(L.version>0&&K.__version!==L.version){me(K,L,A);return}t.bindTexture(34067,K.__webglTexture,33984+A)}const ge={[Wo]:10497,[Hn]:33071,[qo]:33648},ue={[Qt]:9728,[tl]:9984,[Ga]:9986,[Dn]:9729,[Zd]:9985,[hs]:9987};function j(L,A,K){if(K?(i.texParameteri(L,10242,ge[A.wrapS]),i.texParameteri(L,10243,ge[A.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,ge[A.wrapR]),i.texParameteri(L,10240,ue[A.magFilter]),i.texParameteri(L,10241,ue[A.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(A.wrapS!==Hn||A.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,F(A.magFilter)),i.texParameteri(L,10241,F(A.minFilter)),A.minFilter!==Qt&&A.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qt||A.minFilter!==Ga&&A.minFilter!==hs||A.type===ir&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function V(L,A){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",G));const de=A.source;let le=p.get(de);le===void 0&&(le={},p.set(de,le));const ye=ce(A);if(ye!==L.__cacheKey){le[ye]===void 0&&(le[ye]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),le[ye].usedTimes++;const Be=le[L.__cacheKey];Be!==void 0&&(le[L.__cacheKey].usedTimes--,Be.usedTimes===0&&B(A)),L.__cacheKey=ye,L.__webglTexture=le[ye].texture}return K}function ie(L,A,K){let de=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=35866),A.isData3DTexture&&(de=32879);const le=V(L,A),ye=A.source;t.bindTexture(de,L.__webglTexture,33984+K);const Be=n.get(ye);if(ye.version!==Be.__version||le===!0){t.activeTexture(33984+K),i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const we=E(A)&&b(A.image)===!1;let re=w(A.image,we,!1,u);re=at(A,re);const De=b(re)||o,Fe=s.convert(A.format,A.encoding);let Ee=s.convert(A.type),Oe=M(A.internalFormat,Fe,Ee,A.encoding,A.isVideoTexture);j(de,A,De);let Pe;const it=A.mipmaps,gt=o&&A.isVideoTexture!==!0,Bt=Be.__version===void 0||le===!0,O=D(A,re,De);if(A.isDepthTexture)Oe=6402,o?A.type===ir?Oe=36012:A.type===nr?Oe=33190:A.type===kr?Oe=35056:Oe=33189:A.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===sr&&Oe===6402&&A.type!==pu&&A.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=nr,Ee=s.convert(A.type)),A.format===Or&&Oe===6402&&(Oe=34041,A.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=kr,Ee=s.convert(A.type))),Bt&&(gt?t.texStorage2D(3553,1,Oe,re.width,re.height):t.texImage2D(3553,0,Oe,re.width,re.height,0,Fe,Ee,null));else if(A.isDataTexture)if(it.length>0&&De){gt&&Bt&&t.texStorage2D(3553,O,Oe,it[0].width,it[0].height);for(let J=0,pe=it.length;J<pe;J++)Pe=it[J],gt?t.texSubImage2D(3553,J,0,0,Pe.width,Pe.height,Fe,Ee,Pe.data):t.texImage2D(3553,J,Oe,Pe.width,Pe.height,0,Fe,Ee,Pe.data);A.generateMipmaps=!1}else gt?(Bt&&t.texStorage2D(3553,O,Oe,re.width,re.height),t.texSubImage2D(3553,0,0,0,re.width,re.height,Fe,Ee,re.data)):t.texImage2D(3553,0,Oe,re.width,re.height,0,Fe,Ee,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&Bt&&t.texStorage3D(35866,O,Oe,it[0].width,it[0].height,re.depth);for(let J=0,pe=it.length;J<pe;J++)Pe=it[J],A.format!==Vn?Fe!==null?gt?t.compressedTexSubImage3D(35866,J,0,0,0,Pe.width,Pe.height,re.depth,Fe,Pe.data,0,0):t.compressedTexImage3D(35866,J,Oe,Pe.width,Pe.height,re.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(35866,J,0,0,0,Pe.width,Pe.height,re.depth,Fe,Ee,Pe.data):t.texImage3D(35866,J,Oe,Pe.width,Pe.height,re.depth,0,Fe,Ee,Pe.data)}else{gt&&Bt&&t.texStorage2D(3553,O,Oe,it[0].width,it[0].height);for(let J=0,pe=it.length;J<pe;J++)Pe=it[J],A.format!==Vn?Fe!==null?gt?t.compressedTexSubImage2D(3553,J,0,0,Pe.width,Pe.height,Fe,Pe.data):t.compressedTexImage2D(3553,J,Oe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(3553,J,0,0,Pe.width,Pe.height,Fe,Ee,Pe.data):t.texImage2D(3553,J,Oe,Pe.width,Pe.height,0,Fe,Ee,Pe.data)}else if(A.isDataArrayTexture)gt?(Bt&&t.texStorage3D(35866,O,Oe,re.width,re.height,re.depth),t.texSubImage3D(35866,0,0,0,0,re.width,re.height,re.depth,Fe,Ee,re.data)):t.texImage3D(35866,0,Oe,re.width,re.height,re.depth,0,Fe,Ee,re.data);else if(A.isData3DTexture)gt?(Bt&&t.texStorage3D(32879,O,Oe,re.width,re.height,re.depth),t.texSubImage3D(32879,0,0,0,0,re.width,re.height,re.depth,Fe,Ee,re.data)):t.texImage3D(32879,0,Oe,re.width,re.height,re.depth,0,Fe,Ee,re.data);else if(A.isFramebufferTexture){if(Bt)if(gt)t.texStorage2D(3553,O,Oe,re.width,re.height);else{let J=re.width,pe=re.height;for(let Te=0;Te<O;Te++)t.texImage2D(3553,Te,Oe,J,pe,0,Fe,Ee,null),J>>=1,pe>>=1}}else if(it.length>0&&De){gt&&Bt&&t.texStorage2D(3553,O,Oe,it[0].width,it[0].height);for(let J=0,pe=it.length;J<pe;J++)Pe=it[J],gt?t.texSubImage2D(3553,J,0,0,Fe,Ee,Pe):t.texImage2D(3553,J,Oe,Fe,Ee,Pe);A.generateMipmaps=!1}else gt?(Bt&&t.texStorage2D(3553,O,Oe,re.width,re.height),t.texSubImage2D(3553,0,0,0,Fe,Ee,re)):t.texImage2D(3553,0,Oe,Fe,Ee,re);z(A,De)&&k(de),Be.__version=ye.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function me(L,A,K){if(A.image.length!==6)return;const de=V(L,A),le=A.source;t.bindTexture(34067,L.__webglTexture,33984+K);const ye=n.get(le);if(le.version!==ye.__version||de===!0){t.activeTexture(33984+K),i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,re=[];for(let J=0;J<6;J++)!Be&&!we?re[J]=w(A.image[J],!1,!0,c):re[J]=we?A.image[J].image:A.image[J],re[J]=at(A,re[J]);const De=re[0],Fe=b(De)||o,Ee=s.convert(A.format,A.encoding),Oe=s.convert(A.type),Pe=M(A.internalFormat,Ee,Oe,A.encoding),it=o&&A.isVideoTexture!==!0,gt=ye.__version===void 0||de===!0;let Bt=D(A,De,Fe);j(34067,A,Fe);let O;if(Be){it&&gt&&t.texStorage2D(34067,Bt,Pe,De.width,De.height);for(let J=0;J<6;J++){O=re[J].mipmaps;for(let pe=0;pe<O.length;pe++){const Te=O[pe];A.format!==Vn?Ee!==null?it?t.compressedTexSubImage2D(34069+J,pe,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(34069+J,pe,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(34069+J,pe,0,0,Te.width,Te.height,Ee,Oe,Te.data):t.texImage2D(34069+J,pe,Pe,Te.width,Te.height,0,Ee,Oe,Te.data)}}}else{O=A.mipmaps,it&&gt&&(O.length>0&&Bt++,t.texStorage2D(34067,Bt,Pe,re[0].width,re[0].height));for(let J=0;J<6;J++)if(we){it?t.texSubImage2D(34069+J,0,0,0,re[J].width,re[J].height,Ee,Oe,re[J].data):t.texImage2D(34069+J,0,Pe,re[J].width,re[J].height,0,Ee,Oe,re[J].data);for(let pe=0;pe<O.length;pe++){const Ce=O[pe].image[J].image;it?t.texSubImage2D(34069+J,pe+1,0,0,Ce.width,Ce.height,Ee,Oe,Ce.data):t.texImage2D(34069+J,pe+1,Pe,Ce.width,Ce.height,0,Ee,Oe,Ce.data)}}else{it?t.texSubImage2D(34069+J,0,0,0,Ee,Oe,re[J]):t.texImage2D(34069+J,0,Pe,Ee,Oe,re[J]);for(let pe=0;pe<O.length;pe++){const Te=O[pe];it?t.texSubImage2D(34069+J,pe+1,0,0,Ee,Oe,Te.image[J]):t.texImage2D(34069+J,pe+1,Pe,Ee,Oe,Te.image[J])}}}z(A,Fe)&&k(34067),ye.__version=le.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ve(L,A,K,de,le){const ye=s.convert(K.format,K.encoding),Be=s.convert(K.type),we=M(K.internalFormat,ye,Be,K.encoding);n.get(A).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,we,A.width,A.height,A.depth,0,ye,Be,null):t.texImage2D(le,0,we,A.width,A.height,0,ye,Be,null)),t.bindFramebuffer(36160,L),ke(A)?h.framebufferTexture2DMultisampleEXT(36160,de,le,n.get(K).__webglTexture,0,st(A)):(le===3553||le>=34069&&le<=34074)&&i.framebufferTexture2D(36160,de,le,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(L,A,K){if(i.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(K||ke(A)){const le=A.depthTexture;le&&le.isDepthTexture&&(le.type===ir?de=36012:le.type===nr&&(de=33190));const ye=st(A);ke(A)?h.renderbufferStorageMultisampleEXT(36161,ye,de,A.width,A.height):i.renderbufferStorageMultisample(36161,ye,de,A.width,A.height)}else i.renderbufferStorage(36161,de,A.width,A.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const de=st(A);K&&ke(A)===!1?i.renderbufferStorageMultisample(36161,de,35056,A.width,A.height):ke(A)?h.renderbufferStorageMultisampleEXT(36161,de,35056,A.width,A.height):i.renderbufferStorage(36161,34041,A.width,A.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0;le<de.length;le++){const ye=de[le],Be=s.convert(ye.format,ye.encoding),we=s.convert(ye.type),re=M(ye.internalFormat,Be,we,ye.encoding),De=st(A);K&&ke(A)===!1?i.renderbufferStorageMultisample(36161,De,re,A.width,A.height):ke(A)?h.renderbufferStorageMultisampleEXT(36161,De,re,A.width,A.height):i.renderbufferStorage(36161,re,A.width,A.height)}}i.bindRenderbuffer(36161,null)}function Le(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);const de=n.get(A.depthTexture).__webglTexture,le=st(A);if(A.depthTexture.format===sr)ke(A)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,le):i.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===Or)ke(A)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,le):i.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function Re(L){const A=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Le(A.__webglFramebuffer,L)}else if(K){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=i.createRenderbuffer(),Ve(A.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ve(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function dt(L,A,K){const de=n.get(L);A!==void 0&&ve(de.__webglFramebuffer,L,L.texture,36064,3553),K!==void 0&&Re(L)}function Nt(L){const A=L.texture,K=n.get(L),de=n.get(A);L.addEventListener("dispose",W),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=A.version,a.memory.textures++);const le=L.isWebGLCubeRenderTarget===!0,ye=L.isWebGLMultipleRenderTargets===!0,Be=b(L)||o;if(le){K.__webglFramebuffer=[];for(let we=0;we<6;we++)K.__webglFramebuffer[we]=i.createFramebuffer()}else{if(K.__webglFramebuffer=i.createFramebuffer(),ye)if(r.drawBuffers){const we=L.texture;for(let re=0,De=we.length;re<De;re++){const Fe=n.get(we[re]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&ke(L)===!1){const we=ye?A:[A];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let re=0;re<we.length;re++){const De=we[re];K.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(36161,K.__webglColorRenderbuffer[re]);const Fe=s.convert(De.format,De.encoding),Ee=s.convert(De.type),Oe=M(De.internalFormat,Fe,Ee,De.encoding,L.isXRRenderTarget===!0),Pe=st(L);i.renderbufferStorageMultisample(36161,Pe,Oe,L.width,L.height),i.framebufferRenderbuffer(36160,36064+re,36161,K.__webglColorRenderbuffer[re])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,de.__webglTexture),j(34067,A,Be);for(let we=0;we<6;we++)ve(K.__webglFramebuffer[we],L,A,36064,34069+we);z(A,Be)&&k(34067),t.unbindTexture()}else if(ye){const we=L.texture;for(let re=0,De=we.length;re<De;re++){const Fe=we[re],Ee=n.get(Fe);t.bindTexture(3553,Ee.__webglTexture),j(3553,Fe,Be),ve(K.__webglFramebuffer,L,Fe,36064+re,3553),z(Fe,Be)&&k(3553)}t.unbindTexture()}else{let we=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?we=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,de.__webglTexture),j(we,A,Be),ve(K.__webglFramebuffer,L,A,36064,we),z(A,Be)&&k(we),t.unbindTexture()}L.depthBuffer&&Re(L)}function wt(L){const A=b(L)||o,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,le=K.length;de<le;de++){const ye=K[de];if(z(ye,A)){const Be=L.isWebGLCubeRenderTarget?34067:3553,we=n.get(ye).__webglTexture;t.bindTexture(Be,we),k(Be),t.unbindTexture()}}}function Dt(L){if(o&&L.samples>0&&ke(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,de=L.height;let le=16384;const ye=[],Be=L.stencilBuffer?33306:36096,we=n.get(L),re=L.isWebGLMultipleRenderTargets===!0;if(re)for(let De=0;De<A.length;De++)t.bindFramebuffer(36160,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+De,36161,null),t.bindFramebuffer(36160,we.__webglFramebuffer),i.framebufferTexture2D(36009,36064+De,3553,null,0);t.bindFramebuffer(36008,we.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,we.__webglFramebuffer);for(let De=0;De<A.length;De++){ye.push(36064+De),L.depthBuffer&&ye.push(Be);const Fe=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(Fe===!1&&(L.depthBuffer&&(le|=256),L.stencilBuffer&&(le|=1024)),re&&i.framebufferRenderbuffer(36008,36064,36161,we.__webglColorRenderbuffer[De]),Fe===!0&&(i.invalidateFramebuffer(36008,[Be]),i.invalidateFramebuffer(36009,[Be])),re){const Ee=n.get(A[De]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ee,0)}i.blitFramebuffer(0,0,K,de,0,0,K,de,le,9728),g&&i.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),re)for(let De=0;De<A.length;De++){t.bindFramebuffer(36160,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+De,36161,we.__webglColorRenderbuffer[De]);const Fe=n.get(A[De]).__webglTexture;t.bindFramebuffer(36160,we.__webglFramebuffer),i.framebufferTexture2D(36009,36064+De,3553,Fe,0)}t.bindFramebuffer(36009,we.__webglMultisampledFramebuffer)}}function st(L){return Math.min(d,L.samples)}function ke(L){const A=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ae(L){const A=a.render.frame;x.get(L)!==A&&(x.set(L,A),L.update())}function at(L,A){const K=L.encoding,de=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===jo||K!==cr&&(K===mt?o===!1?e.has("EXT_sRGB")===!0&&de===Vn?(L.format=jo,L.minFilter=Dn,L.generateMipmaps=!1):A=xu.sRGBToLinear(A):(de!==Vn||le!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),A}this.allocateTextureUnit=$,this.resetTextureUnits=ae,this.setTexture2D=ee,this.setTexture2DArray=Se,this.setTexture3D=H,this.setTextureCube=se,this.rebindTextures=dt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ke}function b4(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===lr)return 5121;if(s===Qd)return 32819;if(s===ef)return 32820;if(s===$d)return 5120;if(s===Kd)return 5122;if(s===pu)return 5123;if(s===Jd)return 5124;if(s===nr)return 5125;if(s===ir)return 5126;if(s===ds)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===tf)return 6406;if(s===Vn)return 6408;if(s===nf)return 6409;if(s===rf)return 6410;if(s===sr)return 6402;if(s===Or)return 34041;if(s===jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sf)return 6403;if(s===af)return 36244;if(s===of)return 33319;if(s===lf)return 33320;if(s===cf)return 36249;if(s===Ha||s===Va||s===Wa||s===qa)if(a===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nl||s===il||s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===al||s===ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===al)return a===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ol)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ll||s===cl||s===ul||s===hl||s===dl||s===fl||s===ml||s===pl||s===gl||s===vl||s===xl||s===_l||s===yl||s===bl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ll)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ul)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ml)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_l)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bl)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Xa)return a===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===hf||s===wl||s===Sl||s===Ml)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ml)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class w4 extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hs extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S4={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),y=this._getHandJoint(c,m);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=p.radius),y.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S4)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class M4 extends Mn{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:sr,u!==sr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===sr&&(n=nr),n===void 0&&u===Or&&(n=kr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1}}class T4 extends fr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,g=null,x=null;const m=t.getContextAttributes();let p=null,y=null;const T=[],w=[],b=new Set,E=new Map,z=new Ln;z.layers.enable(1),z.viewport=new bt;const k=new Ln;k.layers.enable(2),k.viewport=new bt;const M=[z,k],D=new w4;D.layers.enable(1),D.layers.enable(2);let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let se=T[H];return se===void 0&&(se=new xo,T[H]=se),se.getTargetRaySpace()},this.getControllerGrip=function(H){let se=T[H];return se===void 0&&(se=new xo,T[H]=se),se.getGripSpace()},this.getHand=function(H){let se=T[H];return se===void 0&&(se=new xo,T[H]=se),se.getHandSpace()};function W(H){const se=w.indexOf(H.inputSource);if(se===-1)return;const ge=T[se];ge!==void 0&&ge.dispatchEvent({type:H.type,data:H.inputSource})}function N(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",B);for(let H=0;H<T.length;H++){const se=w[H];se!==null&&(w[H]=null,T[H].disconnect(se))}F=null,G=null,e.setRenderTarget(p),g=null,h=null,d=null,r=null,y=null,Se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",N),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:g}),y=new Bi(g.framebufferWidth,g.framebufferHeight,{format:Vn,type:lr,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let se=null,ge=null,ue=null;m.depth&&(ue=m.stencil?35056:33190,se=m.stencil?Or:sr,ge=m.stencil?kr:nr);const j={colorFormat:32856,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(j),r.updateRenderState({layers:[h]}),y=new Bi(h.textureWidth,h.textureHeight,{format:Vn,type:lr,depthTexture:new M4(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const V=e.properties.get(y);V.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(H){for(let se=0;se<H.removed.length;se++){const ge=H.removed[se],ue=w.indexOf(ge);ue>=0&&(w[ue]=null,T[ue].disconnect(ge))}for(let se=0;se<H.added.length;se++){const ge=H.added[se];let ue=w.indexOf(ge);if(ue===-1){for(let V=0;V<T.length;V++)if(V>=w.length){w.push(ge),ue=V;break}else if(w[V]===null){w[V]=ge,ue=V;break}if(ue===-1)break}const j=T[ue];j&&j.connect(ge)}}const Z=new U,ne=new U;function ae(H,se,ge){Z.setFromMatrixPosition(se.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);const ue=Z.distanceTo(ne),j=se.projectionMatrix.elements,V=ge.projectionMatrix.elements,ie=j[14]/(j[10]-1),me=j[14]/(j[10]+1),ve=(j[9]+1)/j[5],Ve=(j[9]-1)/j[5],Le=(j[8]-1)/j[0],Re=(V[8]+1)/V[0],dt=ie*Le,Nt=ie*Re,wt=ue/(-Le+Re),Dt=wt*-Le;se.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Dt),H.translateZ(wt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const st=ie+wt,ke=me+wt,Ae=dt-Dt,at=Nt+(ue-Dt),L=ve*me/ke*st,A=Ve*me/ke*st;H.projectionMatrix.makePerspective(Ae,at,L,A,st,ke)}function $(H,se){se===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(se.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;D.near=k.near=z.near=H.near,D.far=k.far=z.far=H.far,(F!==D.near||G!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,G=D.far);const se=H.parent,ge=D.cameras;$(D,se);for(let j=0;j<ge.length;j++)$(ge[j],se);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),H.matrix.copy(D.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ue=H.children;for(let j=0,V=ue.length;j<V;j++)ue[j].updateMatrixWorld(!0);ge.length===2?ae(D,z,k):D.projectionMatrix.copy(z.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.getPlanes=function(){return b};let ce=null;function ee(H,se){if(u=se.getViewerPose(c||a),x=se,u!==null){const ge=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let ue=!1;ge.length!==D.cameras.length&&(D.cameras.length=0,ue=!0);for(let j=0;j<ge.length;j++){const V=ge[j];let ie=null;if(g!==null)ie=g.getViewport(V);else{const ve=d.getViewSubImage(h,V);ie=ve.viewport,j===0&&(e.setRenderTargetTextures(y,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(y))}let me=M[j];me===void 0&&(me=new Ln,me.layers.enable(j),me.viewport=new bt,M[j]=me),me.matrix.fromArray(V.transform.matrix),me.projectionMatrix.fromArray(V.projectionMatrix),me.viewport.set(ie.x,ie.y,ie.width,ie.height),j===0&&D.matrix.copy(me.matrix),ue===!0&&D.cameras.push(me)}}for(let ge=0;ge<T.length;ge++){const ue=w[ge],j=T[ge];ue!==null&&j!==void 0&&j.update(ue,se,c||a)}if(ce&&ce(H,se),se.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let ge=null;for(const ue of b)se.detectedPlanes.has(ue)||(ge===null&&(ge=[]),ge.push(ue));if(ge!==null)for(const ue of ge)b.delete(ue),E.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of se.detectedPlanes)if(!b.has(ue))b.add(ue),E.set(ue,se.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const j=E.get(ue);ue.lastChangedTime>j&&(E.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}x=null}const Se=new Du;Se.setAnimationLoop(ee),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}function A4(i,e){function t(m,p){p.color.getRGB(m.fogColor.value,Tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,T,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,y,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let T;p.map?T=p.map:p.specularMap?T=p.specularMap:p.displacementMap?T=p.displacementMap:p.normalMap?T=p.normalMap:p.bumpMap?T=p.bumpMap:p.roughnessMap?T=p.roughnessMap:p.metalnessMap?T=p.metalnessMap:p.alphaMap?T=p.alphaMap:p.emissiveMap?T=p.emissiveMap:p.clearcoatMap?T=p.clearcoatMap:p.clearcoatNormalMap?T=p.clearcoatNormalMap:p.clearcoatRoughnessMap?T=p.clearcoatRoughnessMap:p.iridescenceMap?T=p.iridescenceMap:p.iridescenceThicknessMap?T=p.iridescenceThicknessMap:p.specularIntensityMap?T=p.specularIntensityMap:p.specularColorMap?T=p.specularColorMap:p.transmissionMap?T=p.transmissionMap:p.thicknessMap?T=p.thicknessMap:p.sheenColorMap?T=p.sheenColorMap:p.sheenRoughnessMap&&(T=p.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function E4(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(T,w){const b=w.program;n.uniformBlockBinding(T,b)}function c(T,w){let b=r[T.id];b===void 0&&(x(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",p));const E=w.program;n.updateUBOMapping(T,E);const z=e.render.frame;s[T.id]!==z&&(h(T),s[T.id]=z)}function u(T){const w=d();T.__bindingPointIndex=w;const b=i.createBuffer(),E=T.__size,z=T.usage;return i.bindBuffer(35345,b),i.bufferData(35345,E,z),i.bindBuffer(35345,null),i.bindBufferBase(35345,w,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],b=T.uniforms,E=T.__cache;i.bindBuffer(35345,w);for(let z=0,k=b.length;z<k;z++){const M=b[z];if(g(M,z,E)===!0){const D=M.__offset,F=Array.isArray(M.value)?M.value:[M.value];let G=0;for(let W=0;W<F.length;W++){const N=F[W],B=m(N);typeof N=="number"?(M.__data[0]=N,i.bufferSubData(35345,D+G,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=N.elements[0],M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=N.elements[0],M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=N.elements[0]):(N.toArray(M.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,D,M.__data)}}i.bindBuffer(35345,null)}function g(T,w,b){const E=T.value;if(b[w]===void 0){if(typeof E=="number")b[w]=E;else{const z=Array.isArray(E)?E:[E],k=[];for(let M=0;M<z.length;M++)k.push(z[M].clone());b[w]=k}return!0}else if(typeof E=="number"){if(b[w]!==E)return b[w]=E,!0}else{const z=Array.isArray(b[w])?b[w]:[b[w]],k=Array.isArray(E)?E:[E];for(let M=0;M<z.length;M++){const D=z[M];if(D.equals(k[M])===!1)return D.copy(k[M]),!0}}return!1}function x(T){const w=T.uniforms;let b=0;const E=16;let z=0;for(let k=0,M=w.length;k<M;k++){const D=w[k],F={boundary:0,storage:0},G=Array.isArray(D.value)?D.value:[D.value];for(let W=0,N=G.length;W<N;W++){const B=G[W],Z=m(B);F.boundary+=Z.boundary,F.storage+=Z.storage}if(D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,k>0){z=b%E;const W=E-z;z!==0&&W-F.boundary<0&&(b+=E-z,D.__offset=b)}b+=F.storage}return z=b%E,z>0&&(b+=E-z),T.__size=b,T.__cache={},this}function m(T){const w={boundary:0,storage:0};return typeof T=="number"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){const w=T.target;w.removeEventListener("dispose",p);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}function C4(){const i=ma("canvas");return i.style.display="block",i}function Iu(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:C4(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let d=null,h=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=cr,this.physicallyCorrectLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const m=this;let p=!1,y=0,T=0,w=null,b=-1,E=null;const z=new bt,k=new bt;let M=null,D=e.width,F=e.height,G=1,W=null,N=null;const B=new bt(0,0,D,F),Z=new bt(0,0,D,F);let ne=!1;const ae=new Cu;let $=!1,ce=!1,ee=null;const Se=new Rt,H=new je,se=new U,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return w===null?G:1}let j=t;function V(C,Y){for(let Q=0;Q<C.length;Q++){const X=C[Q],te=e.getContext(X,Y);if(te!==null)return te}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${c0}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",it,!1),j===null){const Y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Y.shift(),j=V(Y,C),j===null)throw V(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ie,me,ve,Ve,Le,Re,dt,Nt,wt,Dt,st,ke,Ae,at,L,A,K,de,le,ye,Be,we,re,De;function Fe(){ie=new O1(j),me=new z1(j,ie,i),ie.init(me),we=new b4(j,ie,me),ve=new _4(j,ie,me),Ve=new H1,Le=new s4,Re=new y4(j,ie,ve,Le,me,we,Ve),dt=new I1(m),Nt=new F1(m),wt=new Kf(j,me),re=new R1(j,ie,wt,me),Dt=new U1(j,wt,Ve,re),st=new X1(j,Dt,wt,Ve),le=new q1(j,me,Re),A=new k1(Le),ke=new r4(m,dt,Nt,ie,me,re,A),Ae=new A4(m,Le),at=new o4,L=new f4(ie,me),de=new L1(m,dt,Nt,ve,st,u,a),K=new x4(m,st,me),De=new E4(j,Ve,me,ve),ye=new P1(j,ie,Ve,me),Be=new G1(j,ie,Ve,me),Ve.programs=ke.programs,m.capabilities=me,m.extensions=ie,m.properties=Le,m.renderLists=at,m.shadowMap=K,m.state=ve,m.info=Ve}Fe();const Ee=new T4(m,j);this.xr=Ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(D,F,!1))},this.getSize=function(C){return C.set(D,F)},this.setSize=function(C,Y,Q){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,F=Y,e.width=Math.floor(C*G),e.height=Math.floor(Y*G),Q!==!1&&(e.style.width=C+"px",e.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(D*G,F*G).floor()},this.setDrawingBufferSize=function(C,Y,Q){D=C,F=Y,G=Q,e.width=Math.floor(C*Q),e.height=Math.floor(Y*Q),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(B)},this.setViewport=function(C,Y,Q,X){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,Y,Q,X),ve.viewport(z.copy(B).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,Y,Q,X){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,Y,Q,X),ve.scissor(k.copy(Z).multiplyScalar(G).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){ve.setScissorTest(ne=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(C=!0,Y=!0,Q=!0){let X=0;C&&(X|=16384),Y&&(X|=256),Q&&(X|=1024),j.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",it,!1),at.dispose(),L.dispose(),Le.dispose(),dt.dispose(),Nt.dispose(),st.dispose(),re.dispose(),De.dispose(),ke.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Te),Ee.removeEventListener("sessionend",Ce),ee&&(ee.dispose(),ee=null),ot.stop()};function Oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Ve.autoReset,Y=K.enabled,Q=K.autoUpdate,X=K.needsUpdate,te=K.type;Fe(),Ve.autoReset=C,K.enabled=Y,K.autoUpdate=Q,K.needsUpdate=X,K.type=te}function it(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const Y=C.target;Y.removeEventListener("dispose",gt),Bt(Y)}function Bt(C){O(C),Le.remove(C)}function O(C){const Y=Le.get(C).programs;Y!==void 0&&(Y.forEach(function(Q){ke.releaseProgram(Q)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,Q,X,te,Ie){Y===null&&(Y=ge);const He=te.isMesh&&te.matrixWorld.determinant()<0,Ze=Nh(C,Y,Q,X,te);ve.setMaterial(X,He);let $e=Q.index,rt=1;X.wireframe===!0&&($e=Dt.getWireframeAttribute(Q),rt=2);const Ke=Q.drawRange,Je=Q.attributes.position;let Mt=Ke.start*rt,fn=(Ke.start+Ke.count)*rt;Ie!==null&&(Mt=Math.max(Mt,Ie.start*rt),fn=Math.min(fn,(Ie.start+Ie.count)*rt)),$e!==null?(Mt=Math.max(Mt,0),fn=Math.min(fn,$e.count)):Je!=null&&(Mt=Math.max(Mt,0),fn=Math.min(fn,Je.count));const ri=fn-Mt;if(ri<0||ri===1/0)return;re.setup(te,X,Ze,Q,$e);let Wi,Tt=ye;if($e!==null&&(Wi=wt.get($e),Tt=Be,Tt.setIndex(Wi)),te.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*ue()),Tt.setMode(1)):Tt.setMode(4);else if(te.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),ve.setLineWidth(Qe*ue()),te.isLineSegments?Tt.setMode(1):te.isLineLoop?Tt.setMode(2):Tt.setMode(3)}else te.isPoints?Tt.setMode(0):te.isSprite&&Tt.setMode(4);if(te.isInstancedMesh)Tt.renderInstances(Mt,ri,te.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ka=Math.min(Q.instanceCount,Qe);Tt.renderInstances(Mt,ri,ka)}else Tt.render(Mt,ri)},this.compile=function(C,Y){function Q(X,te,Ie){X.transparent===!0&&X.side===Pi&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,En(X,te,Ie),X.side=Ni,X.needsUpdate=!0,En(X,te,Ie),X.side=Pi):En(X,te,Ie)}h=L.get(C),h.init(),x.push(h),C.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(m.physicallyCorrectLights),C.traverse(function(X){const te=X.material;if(te)if(Array.isArray(te))for(let Ie=0;Ie<te.length;Ie++){const He=te[Ie];Q(He,C,X)}else Q(te,C,X)}),x.pop(),h=null};let J=null;function pe(C){J&&J(C)}function Te(){ot.stop()}function Ce(){ot.start()}const ot=new Du;ot.setAnimationLoop(pe),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){J=C,Ee.setAnimationLoop(C),C===null?ot.stop():ot.start()},Ee.addEventListener("sessionstart",Te),Ee.addEventListener("sessionend",Ce),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,Y,w),h=L.get(C,x.length),h.init(),x.push(h),Se.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ae.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,$=A.init(this.clippingPlanes,ce),d=at.get(C,g.length),d.init(),g.push(d),Ft(C,Y,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(W,N),$===!0&&A.beginShadows();const Q=h.state.shadowsArray;if(K.render(Q,C,Y),$===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(d,C),h.setupLights(m.physicallyCorrectLights),Y.isArrayCamera){const X=Y.cameras;for(let te=0,Ie=X.length;te<Ie;te++){const He=X[te];Wt(d,C,He,He.viewport)}}else Wt(d,C,Y);w!==null&&(Re.updateMultisampleRenderTarget(w),Re.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(m,C,Y),re.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ft(C,Y,Q,X){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ae.intersectsSprite(C)){X&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const He=st.update(C),Ze=C.material;Ze.visible&&d.push(C,He,Ze,Q,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ve.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ve.render.frame),!C.frustumCulled||ae.intersectsObject(C))){X&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const He=st.update(C),Ze=C.material;if(Array.isArray(Ze)){const $e=He.groups;for(let rt=0,Ke=$e.length;rt<Ke;rt++){const Je=$e[rt],Mt=Ze[Je.materialIndex];Mt&&Mt.visible&&d.push(C,He,Mt,Q,se.z,Je)}}else Ze.visible&&d.push(C,He,Ze,Q,se.z,null)}}const Ie=C.children;for(let He=0,Ze=Ie.length;He<Ze;He++)Ft(Ie[He],Y,Q,X)}function Wt(C,Y,Q,X){const te=C.opaque,Ie=C.transmissive,He=C.transparent;h.setupLightsView(Q),$===!0&&A.setGlobalState(m.clippingPlanes,Q),Ie.length>0&&Vi(te,Y,Q),X&&ve.viewport(z.copy(X)),te.length>0&&vt(te,Y,Q),Ie.length>0&&vt(Ie,Y,Q),He.length>0&&vt(He,Y,Q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Vi(C,Y,Q){const X=me.isWebGL2;ee===null&&(ee=new Bi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?ds:lr,minFilter:hs,samples:X&&s===!0?4:0})),m.getDrawingBufferSize(H),X?ee.setSize(H.x,H.y):ee.setSize(fa(H.x),fa(H.y));const te=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const Ie=m.toneMapping;m.toneMapping=pi,vt(C,Y,Q),m.toneMapping=Ie,Re.updateMultisampleRenderTarget(ee),Re.updateRenderTargetMipmap(ee),m.setRenderTarget(te)}function vt(C,Y,Q){const X=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Ie=C.length;te<Ie;te++){const He=C[te],Ze=He.object,$e=He.geometry,rt=X===null?He.material:X,Ke=He.group;Ze.layers.test(Q.layers)&&ii(Ze,Y,Q,$e,rt,Ke)}}function ii(C,Y,Q,X,te,Ie){C.onBeforeRender(m,Y,Q,X,te,Ie),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(m,Y,Q,X,C,Ie),te.transparent===!0&&te.side===Pi&&te.forceSinglePass===!1?(te.side=Sn,te.needsUpdate=!0,m.renderBufferDirect(Q,Y,X,te,C,Ie),te.side=Ni,te.needsUpdate=!0,m.renderBufferDirect(Q,Y,X,te,C,Ie),te.side=Pi):m.renderBufferDirect(Q,Y,X,te,C,Ie),C.onAfterRender(m,Y,Q,X,te,Ie)}function En(C,Y,Q){Y.isScene!==!0&&(Y=ge);const X=Le.get(C),te=h.state.lights,Ie=h.state.shadowsArray,He=te.state.version,Ze=ke.getParameters(C,te.state,Ie,Y,Q),$e=ke.getProgramCacheKey(Ze);let rt=X.programs;X.environment=C.isMeshStandardMaterial?Y.environment:null,X.fog=Y.fog,X.envMap=(C.isMeshStandardMaterial?Nt:dt).get(C.envMap||X.environment),rt===void 0&&(C.addEventListener("dispose",gt),rt=new Map,X.programs=rt);let Ke=rt.get($e);if(Ke!==void 0){if(X.currentProgram===Ke&&X.lightsStateVersion===He)return N0(C,Ze),Ke}else Ze.uniforms=ke.getUniforms(C),C.onBuild(Q,Ze,m),C.onBeforeCompile(Ze,m),Ke=ke.acquireProgram(Ze,$e),rt.set($e,Ke),X.uniforms=Ze.uniforms;const Je=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=A.uniform),N0(C,Ze),X.needsLights=Fh(C),X.lightsStateVersion=He,X.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMap.value=te.state.directionalShadowMap,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotShadowMap.value=te.state.spotShadowMap,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMap.value=te.state.pointShadowMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix);const Mt=Ke.getUniforms(),fn=la.seqWithValue(Mt.seq,Je);return X.currentProgram=Ke,X.uniformsList=fn,Ke}function N0(C,Y){const Q=Le.get(C);Q.outputEncoding=Y.outputEncoding,Q.instancing=Y.instancing,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function Nh(C,Y,Q,X,te){Y.isScene!==!0&&(Y=ge),Re.resetTextureUnits();const Ie=Y.fog,He=X.isMeshStandardMaterial?Y.environment:null,Ze=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:cr,$e=(X.isMeshStandardMaterial?Nt:dt).get(X.envMap||He),rt=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ke=!!X.normalMap&&!!Q.attributes.tangent,Je=!!Q.morphAttributes.position,Mt=!!Q.morphAttributes.normal,fn=!!Q.morphAttributes.color,ri=X.toneMapped?m.toneMapping:pi,Wi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=Wi!==void 0?Wi.length:0,Qe=Le.get(X),ka=h.state.lights;if($===!0&&(ce===!0||C!==E)){const mn=C===E&&X.id===b;A.setState(X,C,mn)}let Ot=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ka.state.version||Qe.outputEncoding!==Ze||te.isInstancedMesh&&Qe.instancing===!1||!te.isInstancedMesh&&Qe.instancing===!0||te.isSkinnedMesh&&Qe.skinning===!1||!te.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==$e||X.fog===!0&&Qe.fog!==Ie||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==A.numPlanes||Qe.numIntersection!==A.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==Ke||Qe.morphTargets!==Je||Qe.morphNormals!==Mt||Qe.morphColors!==fn||Qe.toneMapping!==ri||me.isWebGL2===!0&&Qe.morphTargetsCount!==Tt)&&(Ot=!0):(Ot=!0,Qe.__version=X.version);let qi=Qe.currentProgram;Ot===!0&&(qi=En(X,Y,te));let B0=!1,jr=!1,Ia=!1;const jt=qi.getUniforms(),Xi=Qe.uniforms;if(ve.useProgram(qi.program)&&(B0=!0,jr=!0,Ia=!0),X.id!==b&&(b=X.id,jr=!0),B0||E!==C){if(jt.setValue(j,"projectionMatrix",C.projectionMatrix),me.logarithmicDepthBuffer&&jt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,jr=!0,Ia=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const mn=jt.map.cameraPosition;mn!==void 0&&mn.setValue(j,se.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&jt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||te.isSkinnedMesh)&&jt.setValue(j,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){jt.setOptional(j,te,"bindMatrix"),jt.setOptional(j,te,"bindMatrixInverse");const mn=te.skeleton;mn&&(me.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),jt.setValue(j,"boneTexture",mn.boneTexture,Re),jt.setValue(j,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=Q.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&me.isWebGL2===!0)&&le.update(te,Q,X,qi),(jr||Qe.receiveShadow!==te.receiveShadow)&&(Qe.receiveShadow=te.receiveShadow,jt.setValue(j,"receiveShadow",te.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xi.envMap.value=$e,Xi.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),jr&&(jt.setValue(j,"toneMappingExposure",m.toneMappingExposure),Qe.needsLights&&Bh(Xi,Ia),Ie&&X.fog===!0&&Ae.refreshFogUniforms(Xi,Ie),Ae.refreshMaterialUniforms(Xi,X,G,F,ee),la.upload(j,Qe.uniformsList,Xi,Re)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(la.upload(j,Qe.uniformsList,Xi,Re),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&jt.setValue(j,"center",te.center),jt.setValue(j,"modelViewMatrix",te.modelViewMatrix),jt.setValue(j,"normalMatrix",te.normalMatrix),jt.setValue(j,"modelMatrix",te.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const mn=X.uniformsGroups;for(let Ba=0,Oh=mn.length;Ba<Oh;Ba++)if(me.isWebGL2){const F0=mn[Ba];De.update(F0,qi),De.bind(F0,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function Bh(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Fh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,Y,Q){Le.get(C.texture).__webglTexture=Y,Le.get(C.depthTexture).__webglTexture=Q;const X=Le.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Q===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const Q=Le.get(C);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,Q=0){w=C,y=Y,T=Q;let X=!0,te=null,Ie=!1,He=!1;if(C){const $e=Le.get(C);$e.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),X=!1):$e.__webglFramebuffer===void 0?Re.setupRenderTarget(C):$e.__hasExternalTextures&&Re.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(He=!0);const Ke=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=Ke[Y],Ie=!0):me.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?te=Le.get(C).__webglMultisampledFramebuffer:te=Ke,z.copy(C.viewport),k.copy(C.scissor),M=C.scissorTest}else z.copy(B).multiplyScalar(G).floor(),k.copy(Z).multiplyScalar(G).floor(),M=ne;if(ve.bindFramebuffer(36160,te)&&me.drawBuffers&&X&&ve.drawBuffers(C,te),ve.viewport(z),ve.scissor(k),ve.setScissorTest(M),Ie){const $e=Le.get(C.texture);j.framebufferTexture2D(36160,36064,34069+Y,$e.__webglTexture,Q)}else if(He){const $e=Le.get(C.texture),rt=Y||0;j.framebufferTextureLayer(36160,36064,$e.__webglTexture,Q||0,rt)}b=-1},this.readRenderTargetPixels=function(C,Y,Q,X,te,Ie,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){ve.bindFramebuffer(36160,Ze);try{const $e=C.texture,rt=$e.format,Ke=$e.type;if(rt!==Vn&&we.convert(rt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ke===ds&&(ie.has("EXT_color_buffer_half_float")||me.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ke!==lr&&we.convert(Ke)!==j.getParameter(35738)&&!(Ke===ir&&(me.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-X&&Q>=0&&Q<=C.height-te&&j.readPixels(Y,Q,X,te,we.convert(rt),we.convert(Ke),Ie)}finally{const $e=w!==null?Le.get(w).__webglFramebuffer:null;ve.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(C,Y,Q=0){const X=Math.pow(2,-Q),te=Math.floor(Y.image.width*X),Ie=Math.floor(Y.image.height*X);Re.setTexture2D(Y,0),j.copyTexSubImage2D(3553,Q,0,0,C.x,C.y,te,Ie),ve.unbindTexture()},this.copyTextureToTexture=function(C,Y,Q,X=0){const te=Y.image.width,Ie=Y.image.height,He=we.convert(Q.format),Ze=we.convert(Q.type);Re.setTexture2D(Q,0),j.pixelStorei(37440,Q.flipY),j.pixelStorei(37441,Q.premultiplyAlpha),j.pixelStorei(3317,Q.unpackAlignment),Y.isDataTexture?j.texSubImage2D(3553,X,C.x,C.y,te,Ie,He,Ze,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(3553,X,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,He,Y.mipmaps[0].data):j.texSubImage2D(3553,X,C.x,C.y,He,Ze,Y.image),X===0&&Q.generateMipmaps&&j.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,Q,X,te=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,Ze=C.max.z-C.min.z+1,$e=we.convert(X.format),rt=we.convert(X.type);let Ke;if(X.isData3DTexture)Re.setTexture3D(X,0),Ke=32879;else if(X.isDataArrayTexture)Re.setTexture2DArray(X,0),Ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,X.flipY),j.pixelStorei(37441,X.premultiplyAlpha),j.pixelStorei(3317,X.unpackAlignment);const Je=j.getParameter(3314),Mt=j.getParameter(32878),fn=j.getParameter(3316),ri=j.getParameter(3315),Wi=j.getParameter(32877),Tt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;j.pixelStorei(3314,Tt.width),j.pixelStorei(32878,Tt.height),j.pixelStorei(3316,C.min.x),j.pixelStorei(3315,C.min.y),j.pixelStorei(32877,C.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(Ke,te,Y.x,Y.y,Y.z,Ie,He,Ze,$e,rt,Tt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ke,te,Y.x,Y.y,Y.z,Ie,He,Ze,$e,Tt.data)):j.texSubImage3D(Ke,te,Y.x,Y.y,Y.z,Ie,He,Ze,$e,rt,Tt),j.pixelStorei(3314,Je),j.pixelStorei(32878,Mt),j.pixelStorei(3316,fn),j.pixelStorei(3315,ri),j.pixelStorei(32877,Wi),te===0&&X.generateMipmaps&&j.generateMipmap(Ke),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){y=0,T=0,w=null,ve.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class D4 extends Iu{}D4.prototype.isWebGL1Renderer=!0;class Vs extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class L4{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new U;class zi{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nu extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new U,ac=new U,oc=new Rt,_o=new bu,Ws=new Vr;class R4 extends hn{constructor(e=new Tn,t=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)sc.fromBufferAttribute(t,r-1),ac.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=sc.distanceTo(ac);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;oc.copy(r).invert(),_o.copy(e.ray).applyMatrix4(oc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,d=new U,h=new U,g=this.isLineSegments?2:1,x=n.index,p=n.attributes.position;if(x!==null){const y=Math.max(0,a.start),T=Math.min(x.count,a.start+a.count);for(let w=y,b=T-1;w<b;w+=g){const E=x.getX(w),z=x.getX(w+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,z),_o.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let w=y,b=T-1;w<b;w+=g){if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),_o.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const lc=new U,cc=new U;class P4 extends R4{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)lc.fromBufferAttribute(t,r),cc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+lc.distanceTo(cc);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m0 extends Tn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new U,h=new U,g=[],x=[],m=[],p=[];for(let y=0;y<=n;y++){const T=[],w=y/n;let b=0;y==0&&a==0?b=.5/t:y==n&&l==Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const z=E/t;d.x=-e*Math.cos(r+z*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(r+z*s)*Math.sin(a+w*o),x.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),p.push(z+b,1-w),T.push(c++)}u.push(T)}for(let y=0;y<n;y++)for(let T=0;T<t;T++){const w=u[y][T+1],b=u[y][T],E=u[y+1][T],z=u[y+1][T+1];(y!==0||a>0)&&g.push(w,b,z),(y!==n-1||l<Math.PI)&&g.push(b,E,z)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(p,2))}static fromJSON(e){return new m0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class z4 extends Tn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,g=d.count;for(let x=h,m=h+g;x<m;x+=3)for(let p=0;p<3;p++){const y=o.getX(x+p),T=o.getX(x+(p+1)%3);r.fromBufferAttribute(a,y),s.fromBufferAttribute(a,T),uc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,d),uc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pt(t,3))}}}function uc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class k4 extends Tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class I4{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hc(){return(typeof performance>"u"?Date:performance).now()}class $o extends L4{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const dc=new U,qs=new U;class N4{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dc.subVectors(e,this.start),qs.subVectors(this.end,this.start);const n=qs.dot(qs);let s=qs.dot(dc)/n;return t&&(s=en(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class B4 extends P4{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Tn;r.setAttribute("position",new Pt(t,3)),r.setAttribute("color",new Pt(n,3));const s=new Nu({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new tt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:c0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=c0);const yo={type:"change"},bo={type:"start"},wo={type:"end"};class F4 extends fr{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Ua.ROTATE,MIDDLE:Ua.DOLLY,RIGHT:Ua.PAN},this.target=new U;const s=1e-6,a=new U;let o=1,l=r.NONE,c=r.NONE,u=0,d=0,h=0;const g=new U,x=new je,m=new je,p=new U,y=new je,T=new je,w=new je,b=new je,E=[],z={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const V=n.domElement.getBoundingClientRect(),ie=n.domElement.ownerDocument.documentElement;n.screen.left=V.left+window.pageXOffset-ie.clientLeft,n.screen.top=V.top+window.pageYOffset-ie.clientTop,n.screen.width=V.width,n.screen.height=V.height};const k=function(){const V=new je;return function(me,ve){return V.set((me-n.screen.left)/n.screen.width,(ve-n.screen.top)/n.screen.height),V}}(),M=function(){const V=new je;return function(me,ve){return V.set((me-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-ve))/n.screen.width),V}}();this.rotateCamera=function(){const V=new U,ie=new Hr,me=new U,ve=new U,Ve=new U,Le=new U;return function(){Le.set(m.x-x.x,m.y-x.y,0);let dt=Le.length();dt?(g.copy(n.object.position).sub(n.target),me.copy(g).normalize(),ve.copy(n.object.up).normalize(),Ve.crossVectors(ve,me).normalize(),ve.setLength(m.y-x.y),Ve.setLength(m.x-x.x),Le.copy(ve.add(Ve)),V.crossVectors(Le,g).normalize(),dt*=n.rotateSpeed,ie.setFromAxisAngle(V,dt),g.applyQuaternion(ie),n.object.up.applyQuaternion(ie),p.copy(V),h=dt):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),g.copy(n.object.position).sub(n.target),ie.setFromAxisAngle(p,h),g.applyQuaternion(ie),n.object.up.applyQuaternion(ie)),x.copy(m)}}(),this.zoomCamera=function(){let V;l===r.TOUCH_ZOOM_PAN?(V=u/d,u=d,n.object.isPerspectiveCamera?g.multiplyScalar(V):n.object.isOrthographicCamera?(n.object.zoom/=V,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(V=1+(T.y-y.y)*n.zoomSpeed,V!==1&&V>0&&(n.object.isPerspectiveCamera?g.multiplyScalar(V):n.object.isOrthographicCamera?(n.object.zoom/=V,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?y.copy(T):y.y+=(T.y-y.y)*this.dynamicDampingFactor)},this.panCamera=function(){const V=new je,ie=new U,me=new U;return function(){if(V.copy(b).sub(w),V.lengthSq()){if(n.object.isOrthographicCamera){const Ve=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Le=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;V.x*=Ve,V.y*=Le}V.multiplyScalar(g.length()*n.panSpeed),me.copy(g).cross(n.object.up).setLength(V.x),me.add(ie.copy(n.object.up).setLength(V.y)),n.object.position.add(me),n.target.add(me),n.staticMoving?w.copy(b):w.add(V.subVectors(b,w).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(g.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,g.setLength(n.maxDistance)),y.copy(T)),g.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,g.setLength(n.minDistance)),y.copy(T)))},this.update=function(){g.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,g),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),a.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(yo),a.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(a.distanceToSquared(n.object.position)>s||o!==n.object.zoom)&&(n.dispatchEvent(yo),a.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),g.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(yo),a.copy(n.object.position),o=n.object.zoom};function D(V){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",F),n.domElement.addEventListener("pointerup",G)),se(V),V.pointerType==="touch"?ce(V):Z(V))}function F(V){n.enabled!==!1&&(V.pointerType==="touch"?ee(V):ne(V))}function G(V){n.enabled!==!1&&(V.pointerType==="touch"?Se(V):ae(),ge(V),E.length===0&&(n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",F),n.domElement.removeEventListener("pointerup",G)))}function W(V){ge(V)}function N(V){n.enabled!==!1&&(window.removeEventListener("keydown",N),c===r.NONE&&(V.code===n.keys[r.ROTATE]&&!n.noRotate?c=r.ROTATE:V.code===n.keys[r.ZOOM]&&!n.noZoom?c=r.ZOOM:V.code===n.keys[r.PAN]&&!n.noPan&&(c=r.PAN)))}function B(){n.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",N))}function Z(V){if(l===r.NONE)switch(V.button){case n.mouseButtons.LEFT:l=r.ROTATE;break;case n.mouseButtons.MIDDLE:l=r.ZOOM;break;case n.mouseButtons.RIGHT:l=r.PAN;break}const ie=c!==r.NONE?c:l;ie===r.ROTATE&&!n.noRotate?(m.copy(M(V.pageX,V.pageY)),x.copy(m)):ie===r.ZOOM&&!n.noZoom?(y.copy(k(V.pageX,V.pageY)),T.copy(y)):ie===r.PAN&&!n.noPan&&(w.copy(k(V.pageX,V.pageY)),b.copy(w)),n.dispatchEvent(bo)}function ne(V){const ie=c!==r.NONE?c:l;ie===r.ROTATE&&!n.noRotate?(x.copy(m),m.copy(M(V.pageX,V.pageY))):ie===r.ZOOM&&!n.noZoom?T.copy(k(V.pageX,V.pageY)):ie===r.PAN&&!n.noPan&&b.copy(k(V.pageX,V.pageY))}function ae(){l=r.NONE,n.dispatchEvent(wo)}function $(V){if(n.enabled!==!1&&n.noZoom!==!0){switch(V.preventDefault(),V.deltaMode){case 2:y.y-=V.deltaY*.025;break;case 1:y.y-=V.deltaY*.01;break;default:y.y-=V.deltaY*25e-5;break}n.dispatchEvent(bo),n.dispatchEvent(wo)}}function ce(V){switch(ue(V),E.length){case 1:l=r.TOUCH_ROTATE,m.copy(M(E[0].pageX,E[0].pageY)),x.copy(m);break;default:l=r.TOUCH_ZOOM_PAN;const ie=E[0].pageX-E[1].pageX,me=E[0].pageY-E[1].pageY;d=u=Math.sqrt(ie*ie+me*me);const ve=(E[0].pageX+E[1].pageX)/2,Ve=(E[0].pageY+E[1].pageY)/2;w.copy(k(ve,Ve)),b.copy(w);break}n.dispatchEvent(bo)}function ee(V){switch(ue(V),E.length){case 1:x.copy(m),m.copy(M(V.pageX,V.pageY));break;default:const ie=j(V),me=V.pageX-ie.x,ve=V.pageY-ie.y;d=Math.sqrt(me*me+ve*ve);const Ve=(V.pageX+ie.x)/2,Le=(V.pageY+ie.y)/2;b.copy(k(Ve,Le));break}}function Se(V){switch(E.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,m.copy(M(V.pageX,V.pageY)),x.copy(m);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let ie=0;ie<E.length;ie++)if(E[ie].pointerId!==V.pointerId){const me=z[E[ie].pointerId];m.copy(M(me.x,me.y)),x.copy(m);break}break}n.dispatchEvent(wo)}function H(V){n.enabled!==!1&&V.preventDefault()}function se(V){E.push(V)}function ge(V){delete z[V.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie].pointerId==V.pointerId){E.splice(ie,1);return}}function ue(V){let ie=z[V.pointerId];ie===void 0&&(ie=new je,z[V.pointerId]=ie),ie.set(V.pageX,V.pageY)}function j(V){const ie=V.pointerId===E[0].pointerId?E[1]:E[0];return z[ie.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",F),n.domElement.removeEventListener("pointerup",G),window.removeEventListener("keydown",N),window.removeEventListener("keyup",B)},this.domElement.addEventListener("contextmenu",H),this.domElement.addEventListener("pointerdown",D),this.domElement.addEventListener("pointercancel",W),this.domElement.addEventListener("wheel",$,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",B),this.handleResize(),this.update()}}const Bu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ea{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const O4=new Lu(-1,1,1,-1,0,1),p0=new Tn;p0.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3));p0.setAttribute("uv",new Pt([0,2,0,0,2,0],2));class U4{constructor(e){this._mesh=new zn(p0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,O4)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Fu extends Ea{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ta.clone(e.uniforms),this.material=new qn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new U4(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pa extends Ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Ou extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G4{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new je);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fu(Bu),this.clock=new I4}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pa!==void 0&&(a instanceof pa?n=!0:a instanceof Ou&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fc extends Ea{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const H4={name:"Dark",ui:{background:"#000",textColor:"#eee",border:"rgba(255, 255, 255, 0.6)",focusBorder:"#fff",thickBorder:"#fff"},canvas:{foreground:"#aaaaaa",isometryColors:[["#ff0000","#ff6666"],["#3366ff","#5588ff"]],axisColors:["#990000","#007700","#3333cc"]}},V4={name:"Light",ui:{background:"white",textColor:"#0d0d0d",border:"rgba(0, 0, 0, 0.6)",focusBorder:"rgb(0, 135, 255)",thickBorder:"rgba(0, 0, 0, 0.8)"},canvas:{foreground:"#000000",isometryColors:[["#ff0000","#cc0000"],["#0000ff","#0000cc"]],axisColors:["#ff9999","#66ff66","#9999ff"]}},ms=[V4,H4],rr=Oo(ms[0]),W4=jh(rr,i=>({bgColor:i.ui.background,borderColor:i.ui.border,focusBorderColor:i.ui.focusBorder,textColor:i.ui.textColor,thickBorderColor:i.ui.thickBorder,isometry1Color:i.canvas.isometryColors[0][0],isometry2Color:i.canvas.isometryColors[1][0]}));_e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};un.line={uniforms:Ta.merge([_e.common,_e.fog,_e.line]),vertexShader:`
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
		`};class Uu extends qn{constructor(e){super({type:"LineMaterial",uniforms:Ta.clone(un.line.uniforms),vertexShader:un.line.vertexShader,fragmentShader:un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const mc=new Gi,Xs=new U;class Ko extends k4{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Pt(e,3)),this.setAttribute("uv",new Pt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new $o(t,6,1);return this.setAttribute("instanceStart",new zi(n,3,0)),this.setAttribute("instanceEnd",new zi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new $o(t,6,1);return this.setAttribute("instanceColorStart",new zi(n,3,0)),this.setAttribute("instanceColorEnd",new zi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new z4(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),mc.setFromBufferAttribute(t),this.boundingBox.union(mc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Xs.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xs)),Xs.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Xs));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const pc=new U,gc=new U,Gt=new bt,Ht=new bt,Xn=new bt,So=new U,Mo=new Rt,Vt=new N4,vc=new U,js=new Gi,Ys=new Vr,jn=new bt;let Kn,or;function xc(i,e,t){return jn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),jn.multiplyScalar(1/jn.w),jn.x=or/t.width,jn.y=or/t.height,jn.applyMatrix4(i.projectionMatrixInverse),jn.multiplyScalar(1/jn.w),Math.abs(Math.max(jn.x,jn.y))}function q4(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,l=a;o<l;o++){Vt.start.fromBufferAttribute(r,o),Vt.end.fromBufferAttribute(s,o),Vt.applyMatrix4(t);const c=new U,u=new U;Kn.distanceSqToSegment(Vt.start,Vt.end,u,c),u.distanceTo(c)<or*.5&&e.push({point:u,pointOnLine:c,distance:Kn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv2:null})}}function X4(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),d=-e.near;Kn.at(1,Xn),Xn.w=1,Xn.applyMatrix4(e.matrixWorldInverse),Xn.applyMatrix4(n),Xn.multiplyScalar(1/Xn.w),Xn.x*=s.x/2,Xn.y*=s.y/2,Xn.z=0,So.copy(Xn),Mo.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,g=u;h<g;h++){if(Gt.fromBufferAttribute(l,h),Ht.fromBufferAttribute(c,h),Gt.w=1,Ht.w=1,Gt.applyMatrix4(Mo),Ht.applyMatrix4(Mo),Gt.z>d&&Ht.z>d)continue;if(Gt.z>d){const w=Gt.z-Ht.z,b=(Gt.z-d)/w;Gt.lerp(Ht,b)}else if(Ht.z>d){const w=Ht.z-Gt.z,b=(Ht.z-d)/w;Ht.lerp(Gt,b)}Gt.applyMatrix4(n),Ht.applyMatrix4(n),Gt.multiplyScalar(1/Gt.w),Ht.multiplyScalar(1/Ht.w),Gt.x*=s.x/2,Gt.y*=s.y/2,Ht.x*=s.x/2,Ht.y*=s.y/2,Vt.start.copy(Gt),Vt.start.z=0,Vt.end.copy(Ht),Vt.end.z=0;const m=Vt.closestPointToPointParameter(So,!0);Vt.at(m,vc);const p=Rf.lerp(Gt.z,Ht.z,m),y=p>=-1&&p<=1,T=So.distanceTo(vc)<or*.5;if(y&&T){Vt.start.fromBufferAttribute(l,h),Vt.end.fromBufferAttribute(c,h),Vt.start.applyMatrix4(a),Vt.end.applyMatrix4(a);const w=new U,b=new U;Kn.distanceSqToSegment(Vt.start,Vt.end,b,w),t.push({point:b,pointOnLine:w,distance:Kn.origin.distanceTo(b),object:i,face:null,faceIndex:h,uv:null,uv2:null})}}}class j4 extends zn{constructor(e=new Ko,t=new Uu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)pc.fromBufferAttribute(t,a),gc.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+pc.distanceTo(gc);const s=new $o(r,2,1);return e.setAttribute("instanceDistanceStart",new zi(s,1,0)),e.setAttribute("instanceDistanceEnd",new zi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Kn=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;or=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Ys.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=or*.5;else{const d=Math.max(r.near,Ys.distanceToPoint(Kn.origin));c=xc(r,d,l.resolution)}if(Ys.radius+=c,Kn.intersectsSphere(Ys)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),js.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=or*.5;else{const d=Math.max(r.near,js.distanceToPoint(Kn.origin));u=xc(r,d,l.resolution)}js.expandByScalar(u),Kn.intersectsBox(js)!==!1&&(n?q4(this,t):X4(this,r,t))}}function _c(i){return fd(Nr(i[1].re,i[1].im,i[0].re,i[0].im),Nr(i[3].re,i[3].im,i[2].re,i[2].im))}function Jo(i){const e=i.r*i.r+i.i*i.i,t=i.j*i.j+i.k*i.k,n=e+t+2*Math.sqrt(t)+1;return Qn(i.r*2/n,-i.i*2/n,(e+t-1)/n)}function yc(i){const e=lu(i),t=e+1;return Qn(i.re*2/t,-i.im*2/t,(e-1)/t)}function Y4(i,e){const t=(Uo(i)-Uo(e))/2,n=tn(i.r,i.i),r=tn(i.r-e.r,i.i-e.i),s=lu(r),a=Yh(r,n),o=(t-a)/s,l=Rr(V0(r,o),n),c=Math.sqrt((i.r-l.re)**2+(i.i-l.im)**2+i.j**2+i.k**2),u=V0(r,c/l0(r)),d=Rr(l,u),h=ou(l,u);return[d,h]}function Z4(i,e,t,n){const r=Jo(i),s=Jo(e),[a,o]=Y4(i,e),l=yc(a),c=yc(o),u=td(l,c),d=rd(u);if(isNaN(d)||d<1e-10){const w=id(Fa(s,r),t-1);n.push(r.x,r.y,r.z);const b=od(r);for(let E=1;E<t-1;E++)ed(b,w),n.push(b.x,b.y,b.z,b.x,b.y,b.z);n.push(s.x,s.y,s.z);return}const h=nd(u,(1+ad(l,c)/d)/2),g=Fa(r,h),x=Fa(s,h),m=X0(g),p=X0(x),y=md(m,p,1/(t-1));let T=g;n.push(r.x,r.y,r.z);for(let w=1;w<t-1;w++){T=pd(T,y);const b=T.x+h.x,E=T.y+h.y,z=T.z+h.z;n.push(b,E,z,b,E,z)}n.push(s.x,s.y,s.z)}class $4{constructor(e,t){ji(this,"mesh");ji(this,"geometry");ji(this,"generators",[]);ji(this,"depth",0);ji(this,"colors",[]);ji(this,"minSize",.015);const n=new Uu({vertexColors:!0,linewidth:2,resolution:new je(e,t),worldUnits:!1});n.onBeforeCompile=r=>{const s=r.fragmentShader.indexOf("#include <premultiplied_alpha_fragment>"),a=r.fragmentShader.slice(0,s),o=r.fragmentShader.slice(s);r.fragmentShader=`
        uniform vec3 fadeColor;
        uniform float fadeNear;
        uniform float fadeFar;
        uniform float fadeStrength;
      `+a+`
          float blend = (gl_FragCoord.z / gl_FragCoord.w - fadeNear)/(fadeFar - fadeNear) * fadeStrength;
          gl_FragColor = mix(gl_FragColor, vec4(fadeColor, alpha), blend);
      `+o},n.uniforms.fadeColor={value:[1,1,1]},n.uniforms.fadeNear={type:"f",value:.5},n.uniforms.fadeFar={type:"f",value:2},n.uniforms.fadeStrength={type:"f",value:.5},this.geometry=new Ko,this.mesh=new j4(this.geometry,n)}setGeometry(e,t,n){this.generators=e.map(s=>[s,Kh(s)]).flat(),this.depth=n,this.colors=t;const r={vertexColors:[],vertices:[],lineColors:[],lines:[]};this._tree(0,1,void 0,Nr(0,0,1,0),Jh(),Qn(0,0,1),r),this.geometry=new Ko,this.geometry.setPositions(r.lines),this.geometry.setColors(r.lineColors),this.mesh.geometry=this.geometry}_tree(e,t,n,r,s,a,o){if(!(e>=this.depth||t<this.minSize)&&!(e>0&&Qh(s,1e-4)))for(let l=0;l<this.generators.length;l++){if(this.inverse(l)===n)continue;const c=Zh(s,this.generators[l]),u=_c(c),d=Jo(_c(c)),h=sd(a,d),g=Math.floor(Math.min(Math.max(h*100,2),10)),x=new tt(this.colors[l]).toArray();o.vertexColors.push(x[0],x[1],x[2]),o.vertices.push(d.x,d.y,d.z);for(let m=0;m<g*2-2;m++)o.lineColors.push(x[0],x[1],x[2]);Z4(r,u,g,o.lines),this._tree(e+1,h,l,u,c,d,o)}}inverse(e){return e%2?e-1:e+1}}function K4(i){let e,t,n,r;return{c(){e=lt("canvas"),this.h()},l(s){e=ct(s,"CANVAS",{class:!0,style:!0,width:!0,height:!0}),pt(e).forEach(et),this.h()},h(){Xe(e,"class","tree-canvas"),Xe(e,"style",t=`width: 100%; max-width: ${i[0]}px; max-height: ${i[1]}px`),Xe(e,"width",n=i[0]*i[3]),Xe(e,"height",r=i[1]*i[3])},m(s,a){_i(s,e,a),i[8](e)},p(s,[a]){a&3&&t!==(t=`width: 100%; max-width: ${s[0]}px; max-height: ${s[1]}px`)&&Xe(e,"style",t),a&1&&n!==(n=s[0]*s[3])&&Xe(e,"width",n),a&2&&r!==(r=s[1]*s[3])&&Xe(e,"height",r)},i:rn,o:rn,d(s){s&&et(e),i[8](null)}}}function J4(i,e,t){let n;us(i,rr,m=>t(11,n=m));let{width:r}=e,{height:s}=e,{depth:a}=e,{gens:o=[]}=e,{colors:l=[]}=e,c=window.devicePixelRatio,u,d,h,g;ru(()=>{let m=!0;const p=()=>m=!0,y={outline:{vertex_shader:`
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
        `}};d=new Iu({antialias:!0,canvas:u}),d.setSize(r,s,!1),d.setPixelRatio(c),d.setClearColor(16777215),rr.subscribe(j=>{d.setClearColor(j.ui.background),p()}),d.autoClear=!1;const T=new Vs,w=new Vs,b=new Vs,E=new Vs,z=new Ln(45,r/s,.1,1e3);z.position.set(0,3,0),z.up.set(1,0,0);const k=new F4(z,d.domElement);k.noPan=!0,k.rotateSpeed=2;const M=new B4(1);M.setColors(new tt(16751001),new tt(6750054),new tt(10066431)),T.add(M),rr.subscribe(j=>{const V=j.canvas.axisColors.map(ie=>new tt(ie));M.setColors(V[0],V[1],V[2]),p()});const D=new m0(1,128,64),F=new h0({color:0}),G=new zn(D,F);w.add(G),b.add(G.clone());const W={offset:{type:"f",value:.01},color:{value:new bt(0,0,0,1)}},N=y.outline,B=new qn({uniforms:W,vertexShader:N.vertex_shader,fragmentShader:N.fragment_shader});rr.subscribe(j=>{const V=new tt(j.canvas.foreground);B.uniforms.color.value=[V.r,V.g,V.b,1],p()});const Z=new zn(D,B);E.add(Z);const ne=new fc(T,z),ae=new fc(E,z);ae.clear=!1;const $=new pa(w,z),ce=new pa(b,z);$.inverse=!0;const ee=new Ou,Se=new Fu(Bu);Se.renderToScreen=!0;const H=new G4(d);H.renderTarget1.stencilBuffer=!0,H.renderTarget2.stencilBuffer=!0,H.addPass(ne),H.addPass(ce),H.addPass($),H.addPass(ae),H.addPass(ee),H.addPass(Se),h=requestAnimationFrame(ue),k.addEventListener("change",p);let se=new $4(r,s);ge(),t(7,g=(j,V,ie)=>{se.setGeometry(j,V,ie),T.add(se.mesh),p()});function ge(){const j=se.mesh.material;j.uniforms.fadeColor.value=new tt(n.ui.background).toArray(),j.uniforms.fadeNear.value=z.position.length()-1,j.uniforms.fadeFar.value=z.position.length()+1,j.uniforms.fadeStrength.value=.7}function ue(){h=requestAnimationFrame(ue),k.update(),m&&(B.uniforms.offset.value=.003*z.position.length(),ge(),H.render(),m=!1)}return()=>{h&&cancelAnimationFrame(h),k.removeEventListener("change",p)}});function x(m){Xt[m?"unshift":"push"](()=>{u=m,t(2,u)})}return i.$$set=m=>{"width"in m&&t(0,r=m.width),"height"in m&&t(1,s=m.height),"depth"in m&&t(4,a=m.depth),"gens"in m&&t(5,o=m.gens),"colors"in m&&t(6,l=m.colors)},i.$$.update=()=>{i.$$.dirty&240&&g&&g(o,l,a)},[r,s,u,c,a,o,l,g,x]}class Q4 extends ur{constructor(e){super(),hr(this,e,J4,K4,dr,{width:0,height:1,depth:4,gens:5,colors:6})}}class bn{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new bn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class kn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new kn(t,bn.range(this,e))}}class fe{constructor(e,t){this.position=void 0;var n="KaTeX parse error: "+e,r,s=t&&t.loc;if(s&&s.start<=s.end){var a=s.lexer.input;r=s.start;var o=s.end;r===a.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=a.slice(r,o).replace(/[^]/g,"$&̲"),c;r>15?c="…"+a.slice(r-15,r):c=a.slice(0,r);var u;o+15<a.length?u=a.slice(o,o+15)+"…":u=a.slice(o),n+=c+l+u}var d=new Error(n);return d.name="ParseError",d.__proto__=fe.prototype,d.position=r,d}}fe.prototype.__proto__=Error.prototype;var e2=function(e,t){return e.indexOf(t)!==-1},t2=function(e,t){return e===void 0?t:e},n2=/([A-Z])/g,i2=function(e){return e.replace(n2,"-$1").toLowerCase()},r2={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},s2=/[&><"']/g;function a2(i){return String(i).replace(s2,e=>r2[e])}var Gu=function i(e){return e.type==="ordgroup"||e.type==="color"?e.body.length===1?i(e.body[0]):e:e.type==="font"?i(e.body):e},o2=function(e){var t=Gu(e);return t.type==="mathord"||t.type==="textord"||t.type==="atom"},l2=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e},c2=function(e){var t=/^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);return t!=null?t[1]:"_relative"},Ue={contains:e2,deflt:t2,escape:a2,hyphenate:i2,getBaseElem:Gu,isCharacterBox:o2,protocolFromUrl:c2},ca={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function u2(i){if(i.default)return i.default;var e=i.type,t=Array.isArray(e)?e[0]:e;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class g0{constructor(e){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t in ca)if(ca.hasOwnProperty(t)){var n=ca[t];this[t]=e[t]!==void 0?n.processor?n.processor(e[t]):e[t]:u2(n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new fe("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){e.url&&!e.protocol&&(e.protocol=Ue.protocolFromUrl(e.url));var t=typeof this.trust=="function"?this.trust(e):this.trust;return Boolean(t)}}class Ci{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return $n[h2[this.id]]}sub(){return $n[d2[this.id]]}fracNum(){return $n[f2[this.id]]}fracDen(){return $n[m2[this.id]]}cramp(){return $n[p2[this.id]]}text(){return $n[g2[this.id]]}isTight(){return this.size>=2}}var v0=0,ga=1,Ir=2,vi=3,ps=4,In=5,Gr=6,nn=7,$n=[new Ci(v0,0,!1),new Ci(ga,0,!0),new Ci(Ir,1,!1),new Ci(vi,1,!0),new Ci(ps,2,!1),new Ci(In,2,!0),new Ci(Gr,3,!1),new Ci(nn,3,!0)],h2=[ps,In,ps,In,Gr,nn,Gr,nn],d2=[In,In,In,In,nn,nn,nn,nn],f2=[Ir,vi,ps,In,Gr,nn,Gr,nn],m2=[vi,vi,In,In,nn,nn,nn,nn],p2=[ga,ga,vi,vi,In,In,nn,nn],g2=[v0,ga,Ir,vi,Ir,vi,Ir,vi],ze={DISPLAY:$n[v0],TEXT:$n[Ir],SCRIPT:$n[ps],SCRIPTSCRIPT:$n[Gr]},Qo=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function v2(i){for(var e=0;e<Qo.length;e++)for(var t=Qo[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var ua=[];Qo.forEach(i=>i.blocks.forEach(e=>ua.push(...e)));function Hu(i){for(var e=0;e<ua.length;e+=2)if(i>=ua[e]&&i<=ua[e+1])return!0;return!1}var Dr=80,x2=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},_2=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},y2=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},b2=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},w2=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},S2=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},M2=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},T2=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=x2(t,Dr);break;case"sqrtSize1":r=_2(t,Dr);break;case"sqrtSize2":r=y2(t,Dr);break;case"sqrtSize3":r=b2(t,Dr);break;case"sqrtSize4":r=w2(t,Dr);break;case"sqrtTall":r=M2(t,Dr,n)}return r},A2=function(e,t){switch(e){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},bc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},E2=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class ys{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return Ue.contains(this.classes,e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){var e=t=>t.toText();return this.children.map(e).join("")}}var Jn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Zs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},wc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function C2(i,e){Jn[i]=e}function x0(i,e,t){if(!Jn[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=Jn[e][n];if(!r&&i[0]in wc&&(n=wc[i[0]].charCodeAt(0),r=Jn[e][n]),!r&&t==="text"&&Hu(n)&&(r=Jn[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var To={};function D2(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!To[e]){var t=To[e]={cssEmPerMu:Zs.quad[e]/18};for(var n in Zs)Zs.hasOwnProperty(n)&&(t[n]=Zs[n][e])}return To[e]}var L2=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Sc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Mc=function(e,t){return t.size<2?e:L2[e-1][t.size-1]};class di{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||di.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Sc[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return new di(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Mc(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Sc[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Mc(di.BASESIZE,e);return this.size===t&&this.textSize===di.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==di.BASESIZE?["sizing","reset-size"+this.size,"size"+di.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=D2(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}di.BASESIZE=6;var e0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},R2={ex:!0,em:!0,mu:!0},Vu=function(e){return typeof e!="string"&&(e=e.unit),e in e0||e in R2||e==="ex"},yt=function(e,t){var n;if(e.unit in e0)n=e0[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new fe("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},xe=function(e){return+e.toFixed(4)+"em"},Fi=function(e){return e.filter(t=>t).join(" ")},Wu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},qu=function(e){var t=document.createElement(e);t.className=Fi(this.classes);for(var n in this.style)this.style.hasOwnProperty(n)&&(t.style[n]=this.style[n]);for(var r in this.attributes)this.attributes.hasOwnProperty(r)&&t.setAttribute(r,this.attributes[r]);for(var s=0;s<this.children.length;s++)t.appendChild(this.children[s].toNode());return t},Xu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+Ue.escape(Fi(this.classes))+'"');var n="";for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=Ue.hyphenate(r)+":"+this.style[r]+";");n&&(t+=' style="'+Ue.escape(n)+'"');for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&(t+=" "+s+'="'+Ue.escape(this.attributes[s])+'"');t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+e+">",t};class bs{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Wu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return Ue.contains(this.classes,e)}toNode(){return qu.call(this,"span")}toMarkup(){return Xu.call(this,"span")}}class _0{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Wu.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return Ue.contains(this.classes,e)}toNode(){return qu.call(this,"a")}toMarkup(){return Xu.call(this,"a")}}class P2{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.style=n}hasClass(e){return Ue.contains(this.classes,e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var t in this.style)this.style.hasOwnProperty(t)&&(e.style[t]=this.style[t]);return e}toMarkup(){var e="<img  src='"+this.src+" 'alt='"+this.alt+"' ",t="";for(var n in this.style)this.style.hasOwnProperty(n)&&(t+=Ue.hyphenate(n)+":"+this.style[n]+";");return t&&(e+=' style="'+Ue.escape(t)+'"'),e+="'/>",e}}var z2={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Nn{constructor(e,t,n,r,s,a,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=s||0,this.width=a||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=v2(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=z2[this.text])}hasClass(e){return Ue.contains(this.classes,e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=xe(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Fi(this.classes));for(var n in this.style)this.style.hasOwnProperty(n)&&(t=t||document.createElement("span"),t.style[n]=this.style[n]);return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=Ue.escape(Fi(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=Ue.hyphenate(r)+":"+this.style[r]+";");n&&(e=!0,t+=' style="'+Ue.escape(n)+'"');var s=Ue.escape(this.text);return e?(t+=">",t+=s,t+="</span>",t):s}}class yi{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+"='"+this.attributes[t]+"'");e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Oi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",bc[this.pathName]),t}toMarkup(){return this.alternate?"<path d='"+this.alternate+"'/>":"<path d='"+bc[this.pathName]+"'/>"}}class t0{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+"='"+this.attributes[t]+"'");return e+="/>",e}}function Tc(i){if(i instanceof Nn)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function k2(i){if(i instanceof bs)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var I2={bin:1,close:1,inner:1,open:1,punct:1,rel:1},N2={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},ft={math:{},text:{}};function f(i,e,t,n,r,s){ft[i][r]={font:e,group:t,replace:n},s&&n&&(ft[i][n]=ft[i][r])}var v="math",oe="text",_="main",R="ams",xt="accent-token",Me="bin",sn="close",qr="inner",Ne="mathord",Ct="op-token",An="open",Ca="punct",P="rel",Si="spacing",I="textord";f(v,_,P,"≡","\\equiv",!0);f(v,_,P,"≺","\\prec",!0);f(v,_,P,"≻","\\succ",!0);f(v,_,P,"∼","\\sim",!0);f(v,_,P,"⊥","\\perp");f(v,_,P,"⪯","\\preceq",!0);f(v,_,P,"⪰","\\succeq",!0);f(v,_,P,"≃","\\simeq",!0);f(v,_,P,"∣","\\mid",!0);f(v,_,P,"≪","\\ll",!0);f(v,_,P,"≫","\\gg",!0);f(v,_,P,"≍","\\asymp",!0);f(v,_,P,"∥","\\parallel");f(v,_,P,"⋈","\\bowtie",!0);f(v,_,P,"⌣","\\smile",!0);f(v,_,P,"⊑","\\sqsubseteq",!0);f(v,_,P,"⊒","\\sqsupseteq",!0);f(v,_,P,"≐","\\doteq",!0);f(v,_,P,"⌢","\\frown",!0);f(v,_,P,"∋","\\ni",!0);f(v,_,P,"∝","\\propto",!0);f(v,_,P,"⊢","\\vdash",!0);f(v,_,P,"⊣","\\dashv",!0);f(v,_,P,"∋","\\owns");f(v,_,Ca,".","\\ldotp");f(v,_,Ca,"⋅","\\cdotp");f(v,_,I,"#","\\#");f(oe,_,I,"#","\\#");f(v,_,I,"&","\\&");f(oe,_,I,"&","\\&");f(v,_,I,"ℵ","\\aleph",!0);f(v,_,I,"∀","\\forall",!0);f(v,_,I,"ℏ","\\hbar",!0);f(v,_,I,"∃","\\exists",!0);f(v,_,I,"∇","\\nabla",!0);f(v,_,I,"♭","\\flat",!0);f(v,_,I,"ℓ","\\ell",!0);f(v,_,I,"♮","\\natural",!0);f(v,_,I,"♣","\\clubsuit",!0);f(v,_,I,"℘","\\wp",!0);f(v,_,I,"♯","\\sharp",!0);f(v,_,I,"♢","\\diamondsuit",!0);f(v,_,I,"ℜ","\\Re",!0);f(v,_,I,"♡","\\heartsuit",!0);f(v,_,I,"ℑ","\\Im",!0);f(v,_,I,"♠","\\spadesuit",!0);f(v,_,I,"§","\\S",!0);f(oe,_,I,"§","\\S");f(v,_,I,"¶","\\P",!0);f(oe,_,I,"¶","\\P");f(v,_,I,"†","\\dag");f(oe,_,I,"†","\\dag");f(oe,_,I,"†","\\textdagger");f(v,_,I,"‡","\\ddag");f(oe,_,I,"‡","\\ddag");f(oe,_,I,"‡","\\textdaggerdbl");f(v,_,sn,"⎱","\\rmoustache",!0);f(v,_,An,"⎰","\\lmoustache",!0);f(v,_,sn,"⟯","\\rgroup",!0);f(v,_,An,"⟮","\\lgroup",!0);f(v,_,Me,"∓","\\mp",!0);f(v,_,Me,"⊖","\\ominus",!0);f(v,_,Me,"⊎","\\uplus",!0);f(v,_,Me,"⊓","\\sqcap",!0);f(v,_,Me,"∗","\\ast");f(v,_,Me,"⊔","\\sqcup",!0);f(v,_,Me,"◯","\\bigcirc",!0);f(v,_,Me,"∙","\\bullet",!0);f(v,_,Me,"‡","\\ddagger");f(v,_,Me,"≀","\\wr",!0);f(v,_,Me,"⨿","\\amalg");f(v,_,Me,"&","\\And");f(v,_,P,"⟵","\\longleftarrow",!0);f(v,_,P,"⇐","\\Leftarrow",!0);f(v,_,P,"⟸","\\Longleftarrow",!0);f(v,_,P,"⟶","\\longrightarrow",!0);f(v,_,P,"⇒","\\Rightarrow",!0);f(v,_,P,"⟹","\\Longrightarrow",!0);f(v,_,P,"↔","\\leftrightarrow",!0);f(v,_,P,"⟷","\\longleftrightarrow",!0);f(v,_,P,"⇔","\\Leftrightarrow",!0);f(v,_,P,"⟺","\\Longleftrightarrow",!0);f(v,_,P,"↦","\\mapsto",!0);f(v,_,P,"⟼","\\longmapsto",!0);f(v,_,P,"↗","\\nearrow",!0);f(v,_,P,"↩","\\hookleftarrow",!0);f(v,_,P,"↪","\\hookrightarrow",!0);f(v,_,P,"↘","\\searrow",!0);f(v,_,P,"↼","\\leftharpoonup",!0);f(v,_,P,"⇀","\\rightharpoonup",!0);f(v,_,P,"↙","\\swarrow",!0);f(v,_,P,"↽","\\leftharpoondown",!0);f(v,_,P,"⇁","\\rightharpoondown",!0);f(v,_,P,"↖","\\nwarrow",!0);f(v,_,P,"⇌","\\rightleftharpoons",!0);f(v,R,P,"≮","\\nless",!0);f(v,R,P,"","\\@nleqslant");f(v,R,P,"","\\@nleqq");f(v,R,P,"⪇","\\lneq",!0);f(v,R,P,"≨","\\lneqq",!0);f(v,R,P,"","\\@lvertneqq");f(v,R,P,"⋦","\\lnsim",!0);f(v,R,P,"⪉","\\lnapprox",!0);f(v,R,P,"⊀","\\nprec",!0);f(v,R,P,"⋠","\\npreceq",!0);f(v,R,P,"⋨","\\precnsim",!0);f(v,R,P,"⪹","\\precnapprox",!0);f(v,R,P,"≁","\\nsim",!0);f(v,R,P,"","\\@nshortmid");f(v,R,P,"∤","\\nmid",!0);f(v,R,P,"⊬","\\nvdash",!0);f(v,R,P,"⊭","\\nvDash",!0);f(v,R,P,"⋪","\\ntriangleleft");f(v,R,P,"⋬","\\ntrianglelefteq",!0);f(v,R,P,"⊊","\\subsetneq",!0);f(v,R,P,"","\\@varsubsetneq");f(v,R,P,"⫋","\\subsetneqq",!0);f(v,R,P,"","\\@varsubsetneqq");f(v,R,P,"≯","\\ngtr",!0);f(v,R,P,"","\\@ngeqslant");f(v,R,P,"","\\@ngeqq");f(v,R,P,"⪈","\\gneq",!0);f(v,R,P,"≩","\\gneqq",!0);f(v,R,P,"","\\@gvertneqq");f(v,R,P,"⋧","\\gnsim",!0);f(v,R,P,"⪊","\\gnapprox",!0);f(v,R,P,"⊁","\\nsucc",!0);f(v,R,P,"⋡","\\nsucceq",!0);f(v,R,P,"⋩","\\succnsim",!0);f(v,R,P,"⪺","\\succnapprox",!0);f(v,R,P,"≆","\\ncong",!0);f(v,R,P,"","\\@nshortparallel");f(v,R,P,"∦","\\nparallel",!0);f(v,R,P,"⊯","\\nVDash",!0);f(v,R,P,"⋫","\\ntriangleright");f(v,R,P,"⋭","\\ntrianglerighteq",!0);f(v,R,P,"","\\@nsupseteqq");f(v,R,P,"⊋","\\supsetneq",!0);f(v,R,P,"","\\@varsupsetneq");f(v,R,P,"⫌","\\supsetneqq",!0);f(v,R,P,"","\\@varsupsetneqq");f(v,R,P,"⊮","\\nVdash",!0);f(v,R,P,"⪵","\\precneqq",!0);f(v,R,P,"⪶","\\succneqq",!0);f(v,R,P,"","\\@nsubseteqq");f(v,R,Me,"⊴","\\unlhd");f(v,R,Me,"⊵","\\unrhd");f(v,R,P,"↚","\\nleftarrow",!0);f(v,R,P,"↛","\\nrightarrow",!0);f(v,R,P,"⇍","\\nLeftarrow",!0);f(v,R,P,"⇏","\\nRightarrow",!0);f(v,R,P,"↮","\\nleftrightarrow",!0);f(v,R,P,"⇎","\\nLeftrightarrow",!0);f(v,R,P,"△","\\vartriangle");f(v,R,I,"ℏ","\\hslash");f(v,R,I,"▽","\\triangledown");f(v,R,I,"◊","\\lozenge");f(v,R,I,"Ⓢ","\\circledS");f(v,R,I,"®","\\circledR");f(oe,R,I,"®","\\circledR");f(v,R,I,"∡","\\measuredangle",!0);f(v,R,I,"∄","\\nexists");f(v,R,I,"℧","\\mho");f(v,R,I,"Ⅎ","\\Finv",!0);f(v,R,I,"⅁","\\Game",!0);f(v,R,I,"‵","\\backprime");f(v,R,I,"▲","\\blacktriangle");f(v,R,I,"▼","\\blacktriangledown");f(v,R,I,"■","\\blacksquare");f(v,R,I,"⧫","\\blacklozenge");f(v,R,I,"★","\\bigstar");f(v,R,I,"∢","\\sphericalangle",!0);f(v,R,I,"∁","\\complement",!0);f(v,R,I,"ð","\\eth",!0);f(oe,_,I,"ð","ð");f(v,R,I,"╱","\\diagup");f(v,R,I,"╲","\\diagdown");f(v,R,I,"□","\\square");f(v,R,I,"□","\\Box");f(v,R,I,"◊","\\Diamond");f(v,R,I,"¥","\\yen",!0);f(oe,R,I,"¥","\\yen",!0);f(v,R,I,"✓","\\checkmark",!0);f(oe,R,I,"✓","\\checkmark");f(v,R,I,"ℶ","\\beth",!0);f(v,R,I,"ℸ","\\daleth",!0);f(v,R,I,"ℷ","\\gimel",!0);f(v,R,I,"ϝ","\\digamma",!0);f(v,R,I,"ϰ","\\varkappa");f(v,R,An,"┌","\\@ulcorner",!0);f(v,R,sn,"┐","\\@urcorner",!0);f(v,R,An,"└","\\@llcorner",!0);f(v,R,sn,"┘","\\@lrcorner",!0);f(v,R,P,"≦","\\leqq",!0);f(v,R,P,"⩽","\\leqslant",!0);f(v,R,P,"⪕","\\eqslantless",!0);f(v,R,P,"≲","\\lesssim",!0);f(v,R,P,"⪅","\\lessapprox",!0);f(v,R,P,"≊","\\approxeq",!0);f(v,R,Me,"⋖","\\lessdot");f(v,R,P,"⋘","\\lll",!0);f(v,R,P,"≶","\\lessgtr",!0);f(v,R,P,"⋚","\\lesseqgtr",!0);f(v,R,P,"⪋","\\lesseqqgtr",!0);f(v,R,P,"≑","\\doteqdot");f(v,R,P,"≓","\\risingdotseq",!0);f(v,R,P,"≒","\\fallingdotseq",!0);f(v,R,P,"∽","\\backsim",!0);f(v,R,P,"⋍","\\backsimeq",!0);f(v,R,P,"⫅","\\subseteqq",!0);f(v,R,P,"⋐","\\Subset",!0);f(v,R,P,"⊏","\\sqsubset",!0);f(v,R,P,"≼","\\preccurlyeq",!0);f(v,R,P,"⋞","\\curlyeqprec",!0);f(v,R,P,"≾","\\precsim",!0);f(v,R,P,"⪷","\\precapprox",!0);f(v,R,P,"⊲","\\vartriangleleft");f(v,R,P,"⊴","\\trianglelefteq");f(v,R,P,"⊨","\\vDash",!0);f(v,R,P,"⊪","\\Vvdash",!0);f(v,R,P,"⌣","\\smallsmile");f(v,R,P,"⌢","\\smallfrown");f(v,R,P,"≏","\\bumpeq",!0);f(v,R,P,"≎","\\Bumpeq",!0);f(v,R,P,"≧","\\geqq",!0);f(v,R,P,"⩾","\\geqslant",!0);f(v,R,P,"⪖","\\eqslantgtr",!0);f(v,R,P,"≳","\\gtrsim",!0);f(v,R,P,"⪆","\\gtrapprox",!0);f(v,R,Me,"⋗","\\gtrdot");f(v,R,P,"⋙","\\ggg",!0);f(v,R,P,"≷","\\gtrless",!0);f(v,R,P,"⋛","\\gtreqless",!0);f(v,R,P,"⪌","\\gtreqqless",!0);f(v,R,P,"≖","\\eqcirc",!0);f(v,R,P,"≗","\\circeq",!0);f(v,R,P,"≜","\\triangleq",!0);f(v,R,P,"∼","\\thicksim");f(v,R,P,"≈","\\thickapprox");f(v,R,P,"⫆","\\supseteqq",!0);f(v,R,P,"⋑","\\Supset",!0);f(v,R,P,"⊐","\\sqsupset",!0);f(v,R,P,"≽","\\succcurlyeq",!0);f(v,R,P,"⋟","\\curlyeqsucc",!0);f(v,R,P,"≿","\\succsim",!0);f(v,R,P,"⪸","\\succapprox",!0);f(v,R,P,"⊳","\\vartriangleright");f(v,R,P,"⊵","\\trianglerighteq");f(v,R,P,"⊩","\\Vdash",!0);f(v,R,P,"∣","\\shortmid");f(v,R,P,"∥","\\shortparallel");f(v,R,P,"≬","\\between",!0);f(v,R,P,"⋔","\\pitchfork",!0);f(v,R,P,"∝","\\varpropto");f(v,R,P,"◀","\\blacktriangleleft");f(v,R,P,"∴","\\therefore",!0);f(v,R,P,"∍","\\backepsilon");f(v,R,P,"▶","\\blacktriangleright");f(v,R,P,"∵","\\because",!0);f(v,R,P,"⋘","\\llless");f(v,R,P,"⋙","\\gggtr");f(v,R,Me,"⊲","\\lhd");f(v,R,Me,"⊳","\\rhd");f(v,R,P,"≂","\\eqsim",!0);f(v,_,P,"⋈","\\Join");f(v,R,P,"≑","\\Doteq",!0);f(v,R,Me,"∔","\\dotplus",!0);f(v,R,Me,"∖","\\smallsetminus");f(v,R,Me,"⋒","\\Cap",!0);f(v,R,Me,"⋓","\\Cup",!0);f(v,R,Me,"⩞","\\doublebarwedge",!0);f(v,R,Me,"⊟","\\boxminus",!0);f(v,R,Me,"⊞","\\boxplus",!0);f(v,R,Me,"⋇","\\divideontimes",!0);f(v,R,Me,"⋉","\\ltimes",!0);f(v,R,Me,"⋊","\\rtimes",!0);f(v,R,Me,"⋋","\\leftthreetimes",!0);f(v,R,Me,"⋌","\\rightthreetimes",!0);f(v,R,Me,"⋏","\\curlywedge",!0);f(v,R,Me,"⋎","\\curlyvee",!0);f(v,R,Me,"⊝","\\circleddash",!0);f(v,R,Me,"⊛","\\circledast",!0);f(v,R,Me,"⋅","\\centerdot");f(v,R,Me,"⊺","\\intercal",!0);f(v,R,Me,"⋒","\\doublecap");f(v,R,Me,"⋓","\\doublecup");f(v,R,Me,"⊠","\\boxtimes",!0);f(v,R,P,"⇢","\\dashrightarrow",!0);f(v,R,P,"⇠","\\dashleftarrow",!0);f(v,R,P,"⇇","\\leftleftarrows",!0);f(v,R,P,"⇆","\\leftrightarrows",!0);f(v,R,P,"⇚","\\Lleftarrow",!0);f(v,R,P,"↞","\\twoheadleftarrow",!0);f(v,R,P,"↢","\\leftarrowtail",!0);f(v,R,P,"↫","\\looparrowleft",!0);f(v,R,P,"⇋","\\leftrightharpoons",!0);f(v,R,P,"↶","\\curvearrowleft",!0);f(v,R,P,"↺","\\circlearrowleft",!0);f(v,R,P,"↰","\\Lsh",!0);f(v,R,P,"⇈","\\upuparrows",!0);f(v,R,P,"↿","\\upharpoonleft",!0);f(v,R,P,"⇃","\\downharpoonleft",!0);f(v,_,P,"⊶","\\origof",!0);f(v,_,P,"⊷","\\imageof",!0);f(v,R,P,"⊸","\\multimap",!0);f(v,R,P,"↭","\\leftrightsquigarrow",!0);f(v,R,P,"⇉","\\rightrightarrows",!0);f(v,R,P,"⇄","\\rightleftarrows",!0);f(v,R,P,"↠","\\twoheadrightarrow",!0);f(v,R,P,"↣","\\rightarrowtail",!0);f(v,R,P,"↬","\\looparrowright",!0);f(v,R,P,"↷","\\curvearrowright",!0);f(v,R,P,"↻","\\circlearrowright",!0);f(v,R,P,"↱","\\Rsh",!0);f(v,R,P,"⇊","\\downdownarrows",!0);f(v,R,P,"↾","\\upharpoonright",!0);f(v,R,P,"⇂","\\downharpoonright",!0);f(v,R,P,"⇝","\\rightsquigarrow",!0);f(v,R,P,"⇝","\\leadsto");f(v,R,P,"⇛","\\Rrightarrow",!0);f(v,R,P,"↾","\\restriction");f(v,_,I,"‘","`");f(v,_,I,"$","\\$");f(oe,_,I,"$","\\$");f(oe,_,I,"$","\\textdollar");f(v,_,I,"%","\\%");f(oe,_,I,"%","\\%");f(v,_,I,"_","\\_");f(oe,_,I,"_","\\_");f(oe,_,I,"_","\\textunderscore");f(v,_,I,"∠","\\angle",!0);f(v,_,I,"∞","\\infty",!0);f(v,_,I,"′","\\prime");f(v,_,I,"△","\\triangle");f(v,_,I,"Γ","\\Gamma",!0);f(v,_,I,"Δ","\\Delta",!0);f(v,_,I,"Θ","\\Theta",!0);f(v,_,I,"Λ","\\Lambda",!0);f(v,_,I,"Ξ","\\Xi",!0);f(v,_,I,"Π","\\Pi",!0);f(v,_,I,"Σ","\\Sigma",!0);f(v,_,I,"Υ","\\Upsilon",!0);f(v,_,I,"Φ","\\Phi",!0);f(v,_,I,"Ψ","\\Psi",!0);f(v,_,I,"Ω","\\Omega",!0);f(v,_,I,"A","Α");f(v,_,I,"B","Β");f(v,_,I,"E","Ε");f(v,_,I,"Z","Ζ");f(v,_,I,"H","Η");f(v,_,I,"I","Ι");f(v,_,I,"K","Κ");f(v,_,I,"M","Μ");f(v,_,I,"N","Ν");f(v,_,I,"O","Ο");f(v,_,I,"P","Ρ");f(v,_,I,"T","Τ");f(v,_,I,"X","Χ");f(v,_,I,"¬","\\neg",!0);f(v,_,I,"¬","\\lnot");f(v,_,I,"⊤","\\top");f(v,_,I,"⊥","\\bot");f(v,_,I,"∅","\\emptyset");f(v,R,I,"∅","\\varnothing");f(v,_,Ne,"α","\\alpha",!0);f(v,_,Ne,"β","\\beta",!0);f(v,_,Ne,"γ","\\gamma",!0);f(v,_,Ne,"δ","\\delta",!0);f(v,_,Ne,"ϵ","\\epsilon",!0);f(v,_,Ne,"ζ","\\zeta",!0);f(v,_,Ne,"η","\\eta",!0);f(v,_,Ne,"θ","\\theta",!0);f(v,_,Ne,"ι","\\iota",!0);f(v,_,Ne,"κ","\\kappa",!0);f(v,_,Ne,"λ","\\lambda",!0);f(v,_,Ne,"μ","\\mu",!0);f(v,_,Ne,"ν","\\nu",!0);f(v,_,Ne,"ξ","\\xi",!0);f(v,_,Ne,"ο","\\omicron",!0);f(v,_,Ne,"π","\\pi",!0);f(v,_,Ne,"ρ","\\rho",!0);f(v,_,Ne,"σ","\\sigma",!0);f(v,_,Ne,"τ","\\tau",!0);f(v,_,Ne,"υ","\\upsilon",!0);f(v,_,Ne,"ϕ","\\phi",!0);f(v,_,Ne,"χ","\\chi",!0);f(v,_,Ne,"ψ","\\psi",!0);f(v,_,Ne,"ω","\\omega",!0);f(v,_,Ne,"ε","\\varepsilon",!0);f(v,_,Ne,"ϑ","\\vartheta",!0);f(v,_,Ne,"ϖ","\\varpi",!0);f(v,_,Ne,"ϱ","\\varrho",!0);f(v,_,Ne,"ς","\\varsigma",!0);f(v,_,Ne,"φ","\\varphi",!0);f(v,_,Me,"∗","*",!0);f(v,_,Me,"+","+");f(v,_,Me,"−","-",!0);f(v,_,Me,"⋅","\\cdot",!0);f(v,_,Me,"∘","\\circ",!0);f(v,_,Me,"÷","\\div",!0);f(v,_,Me,"±","\\pm",!0);f(v,_,Me,"×","\\times",!0);f(v,_,Me,"∩","\\cap",!0);f(v,_,Me,"∪","\\cup",!0);f(v,_,Me,"∖","\\setminus",!0);f(v,_,Me,"∧","\\land");f(v,_,Me,"∨","\\lor");f(v,_,Me,"∧","\\wedge",!0);f(v,_,Me,"∨","\\vee",!0);f(v,_,I,"√","\\surd");f(v,_,An,"⟨","\\langle",!0);f(v,_,An,"∣","\\lvert");f(v,_,An,"∥","\\lVert");f(v,_,sn,"?","?");f(v,_,sn,"!","!");f(v,_,sn,"⟩","\\rangle",!0);f(v,_,sn,"∣","\\rvert");f(v,_,sn,"∥","\\rVert");f(v,_,P,"=","=");f(v,_,P,":",":");f(v,_,P,"≈","\\approx",!0);f(v,_,P,"≅","\\cong",!0);f(v,_,P,"≥","\\ge");f(v,_,P,"≥","\\geq",!0);f(v,_,P,"←","\\gets");f(v,_,P,">","\\gt",!0);f(v,_,P,"∈","\\in",!0);f(v,_,P,"","\\@not");f(v,_,P,"⊂","\\subset",!0);f(v,_,P,"⊃","\\supset",!0);f(v,_,P,"⊆","\\subseteq",!0);f(v,_,P,"⊇","\\supseteq",!0);f(v,R,P,"⊈","\\nsubseteq",!0);f(v,R,P,"⊉","\\nsupseteq",!0);f(v,_,P,"⊨","\\models");f(v,_,P,"←","\\leftarrow",!0);f(v,_,P,"≤","\\le");f(v,_,P,"≤","\\leq",!0);f(v,_,P,"<","\\lt",!0);f(v,_,P,"→","\\rightarrow",!0);f(v,_,P,"→","\\to");f(v,R,P,"≱","\\ngeq",!0);f(v,R,P,"≰","\\nleq",!0);f(v,_,Si," ","\\ ");f(v,_,Si," ","\\space");f(v,_,Si," ","\\nobreakspace");f(oe,_,Si," ","\\ ");f(oe,_,Si," "," ");f(oe,_,Si," ","\\space");f(oe,_,Si," ","\\nobreakspace");f(v,_,Si,null,"\\nobreak");f(v,_,Si,null,"\\allowbreak");f(v,_,Ca,",",",");f(v,_,Ca,";",";");f(v,R,Me,"⊼","\\barwedge",!0);f(v,R,Me,"⊻","\\veebar",!0);f(v,_,Me,"⊙","\\odot",!0);f(v,_,Me,"⊕","\\oplus",!0);f(v,_,Me,"⊗","\\otimes",!0);f(v,_,I,"∂","\\partial",!0);f(v,_,Me,"⊘","\\oslash",!0);f(v,R,Me,"⊚","\\circledcirc",!0);f(v,R,Me,"⊡","\\boxdot",!0);f(v,_,Me,"△","\\bigtriangleup");f(v,_,Me,"▽","\\bigtriangledown");f(v,_,Me,"†","\\dagger");f(v,_,Me,"⋄","\\diamond");f(v,_,Me,"⋆","\\star");f(v,_,Me,"◃","\\triangleleft");f(v,_,Me,"▹","\\triangleright");f(v,_,An,"{","\\{");f(oe,_,I,"{","\\{");f(oe,_,I,"{","\\textbraceleft");f(v,_,sn,"}","\\}");f(oe,_,I,"}","\\}");f(oe,_,I,"}","\\textbraceright");f(v,_,An,"{","\\lbrace");f(v,_,sn,"}","\\rbrace");f(v,_,An,"[","\\lbrack",!0);f(oe,_,I,"[","\\lbrack",!0);f(v,_,sn,"]","\\rbrack",!0);f(oe,_,I,"]","\\rbrack",!0);f(v,_,An,"(","\\lparen",!0);f(v,_,sn,")","\\rparen",!0);f(oe,_,I,"<","\\textless",!0);f(oe,_,I,">","\\textgreater",!0);f(v,_,An,"⌊","\\lfloor",!0);f(v,_,sn,"⌋","\\rfloor",!0);f(v,_,An,"⌈","\\lceil",!0);f(v,_,sn,"⌉","\\rceil",!0);f(v,_,I,"\\","\\backslash");f(v,_,I,"∣","|");f(v,_,I,"∣","\\vert");f(oe,_,I,"|","\\textbar",!0);f(v,_,I,"∥","\\|");f(v,_,I,"∥","\\Vert");f(oe,_,I,"∥","\\textbardbl");f(oe,_,I,"~","\\textasciitilde");f(oe,_,I,"\\","\\textbackslash");f(oe,_,I,"^","\\textasciicircum");f(v,_,P,"↑","\\uparrow",!0);f(v,_,P,"⇑","\\Uparrow",!0);f(v,_,P,"↓","\\downarrow",!0);f(v,_,P,"⇓","\\Downarrow",!0);f(v,_,P,"↕","\\updownarrow",!0);f(v,_,P,"⇕","\\Updownarrow",!0);f(v,_,Ct,"∐","\\coprod");f(v,_,Ct,"⋁","\\bigvee");f(v,_,Ct,"⋀","\\bigwedge");f(v,_,Ct,"⨄","\\biguplus");f(v,_,Ct,"⋂","\\bigcap");f(v,_,Ct,"⋃","\\bigcup");f(v,_,Ct,"∫","\\int");f(v,_,Ct,"∫","\\intop");f(v,_,Ct,"∬","\\iint");f(v,_,Ct,"∭","\\iiint");f(v,_,Ct,"∏","\\prod");f(v,_,Ct,"∑","\\sum");f(v,_,Ct,"⨂","\\bigotimes");f(v,_,Ct,"⨁","\\bigoplus");f(v,_,Ct,"⨀","\\bigodot");f(v,_,Ct,"∮","\\oint");f(v,_,Ct,"∯","\\oiint");f(v,_,Ct,"∰","\\oiiint");f(v,_,Ct,"⨆","\\bigsqcup");f(v,_,Ct,"∫","\\smallint");f(oe,_,qr,"…","\\textellipsis");f(v,_,qr,"…","\\mathellipsis");f(oe,_,qr,"…","\\ldots",!0);f(v,_,qr,"…","\\ldots",!0);f(v,_,qr,"⋯","\\@cdots",!0);f(v,_,qr,"⋱","\\ddots",!0);f(v,_,I,"⋮","\\varvdots");f(v,_,xt,"ˊ","\\acute");f(v,_,xt,"ˋ","\\grave");f(v,_,xt,"¨","\\ddot");f(v,_,xt,"~","\\tilde");f(v,_,xt,"ˉ","\\bar");f(v,_,xt,"˘","\\breve");f(v,_,xt,"ˇ","\\check");f(v,_,xt,"^","\\hat");f(v,_,xt,"⃗","\\vec");f(v,_,xt,"˙","\\dot");f(v,_,xt,"˚","\\mathring");f(v,_,Ne,"","\\@imath");f(v,_,Ne,"","\\@jmath");f(v,_,I,"ı","ı");f(v,_,I,"ȷ","ȷ");f(oe,_,I,"ı","\\i",!0);f(oe,_,I,"ȷ","\\j",!0);f(oe,_,I,"ß","\\ss",!0);f(oe,_,I,"æ","\\ae",!0);f(oe,_,I,"œ","\\oe",!0);f(oe,_,I,"ø","\\o",!0);f(oe,_,I,"Æ","\\AE",!0);f(oe,_,I,"Œ","\\OE",!0);f(oe,_,I,"Ø","\\O",!0);f(oe,_,xt,"ˊ","\\'");f(oe,_,xt,"ˋ","\\`");f(oe,_,xt,"ˆ","\\^");f(oe,_,xt,"˜","\\~");f(oe,_,xt,"ˉ","\\=");f(oe,_,xt,"˘","\\u");f(oe,_,xt,"˙","\\.");f(oe,_,xt,"¸","\\c");f(oe,_,xt,"˚","\\r");f(oe,_,xt,"ˇ","\\v");f(oe,_,xt,"¨",'\\"');f(oe,_,xt,"˝","\\H");f(oe,_,xt,"◯","\\textcircled");var ju={"--":!0,"---":!0,"``":!0,"''":!0};f(oe,_,I,"–","--",!0);f(oe,_,I,"–","\\textendash");f(oe,_,I,"—","---",!0);f(oe,_,I,"—","\\textemdash");f(oe,_,I,"‘","`",!0);f(oe,_,I,"‘","\\textquoteleft");f(oe,_,I,"’","'",!0);f(oe,_,I,"’","\\textquoteright");f(oe,_,I,"“","``",!0);f(oe,_,I,"“","\\textquotedblleft");f(oe,_,I,"”","''",!0);f(oe,_,I,"”","\\textquotedblright");f(v,_,I,"°","\\degree",!0);f(oe,_,I,"°","\\degree");f(oe,_,I,"°","\\textdegree",!0);f(v,_,I,"£","\\pounds");f(v,_,I,"£","\\mathsterling",!0);f(oe,_,I,"£","\\pounds");f(oe,_,I,"£","\\textsterling",!0);f(v,R,I,"✠","\\maltese");f(oe,R,I,"✠","\\maltese");var Ac='0123456789/@."';for(var Ao=0;Ao<Ac.length;Ao++){var Ec=Ac.charAt(Ao);f(v,_,I,Ec,Ec)}var Cc='0123456789!@*()-=+";:?/.,';for(var Eo=0;Eo<Cc.length;Eo++){var Dc=Cc.charAt(Eo);f(oe,_,I,Dc,Dc)}var va="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Co=0;Co<va.length;Co++){var $s=va.charAt(Co);f(v,_,Ne,$s,$s),f(oe,_,I,$s,$s)}f(v,R,I,"C","ℂ");f(oe,R,I,"C","ℂ");f(v,R,I,"H","ℍ");f(oe,R,I,"H","ℍ");f(v,R,I,"N","ℕ");f(oe,R,I,"N","ℕ");f(v,R,I,"P","ℙ");f(oe,R,I,"P","ℙ");f(v,R,I,"Q","ℚ");f(oe,R,I,"Q","ℚ");f(v,R,I,"R","ℝ");f(oe,R,I,"R","ℝ");f(v,R,I,"Z","ℤ");f(oe,R,I,"Z","ℤ");f(v,_,Ne,"h","ℎ");f(oe,_,Ne,"h","ℎ");var Ge="";for(var an=0;an<va.length;an++){var Et=va.charAt(an);Ge=String.fromCharCode(55349,56320+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56372+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56424+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56580+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56736+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56788+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56840+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56944+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),an<26&&(Ge=String.fromCharCode(55349,56632+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge),Ge=String.fromCharCode(55349,56476+an),f(v,_,Ne,Et,Ge),f(oe,_,I,Et,Ge))}Ge=String.fromCharCode(55349,56668);f(v,_,Ne,"k",Ge);f(oe,_,I,"k",Ge);for(var Ki=0;Ki<10;Ki++){var Di=Ki.toString();Ge=String.fromCharCode(55349,57294+Ki),f(v,_,Ne,Di,Ge),f(oe,_,I,Di,Ge),Ge=String.fromCharCode(55349,57314+Ki),f(v,_,Ne,Di,Ge),f(oe,_,I,Di,Ge),Ge=String.fromCharCode(55349,57324+Ki),f(v,_,Ne,Di,Ge),f(oe,_,I,Di,Ge),Ge=String.fromCharCode(55349,57334+Ki),f(v,_,Ne,Di,Ge),f(oe,_,I,Di,Ge)}var n0="ÐÞþ";for(var Do=0;Do<n0.length;Do++){var Ks=n0.charAt(Do);f(v,_,Ne,Ks,Ks),f(oe,_,I,Ks,Ks)}var Js=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["","",""],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Lc=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],B2=function(e,t){var n=e.charCodeAt(0),r=e.charCodeAt(1),s=(n-55296)*1024+(r-56320)+65536,a=t==="math"?0:1;if(119808<=s&&s<120484){var o=Math.floor((s-119808)/26);return[Js[o][2],Js[o][a]]}else if(120782<=s&&s<=120831){var l=Math.floor((s-120782)/10);return[Lc[l][2],Lc[l][a]]}else{if(s===120485||s===120486)return[Js[0][2],Js[0][a]];if(120486<s&&s<120782)return["",""];throw new fe("Unsupported character: "+e)}},Da=function(e,t,n){return ft[n][e]&&ft[n][e].replace&&(e=ft[n][e].replace),{value:e,metrics:x0(e,t,n)}},Gn=function(e,t,n,r,s){var a=Da(e,t,n),o=a.metrics;e=a.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new Nn(e,o.height,o.depth,c,o.skew,o.width,s)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new Nn(e,0,0,0,0,0,s);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var u=r.getColor();u&&(l.style.color=u)}return l},F2=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&Da(e,"Main-Bold",t).metrics?Gn(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||ft[t][e].font==="main"?Gn(e,"Main-Regular",t,n,r):Gn(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},O2=function(e,t,n,r,s){return s!=="textord"&&Da(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},U2=function(e,t,n){var r=e.mode,s=e.text,a=["mord"],o=r==="math"||r==="text"&&t.font,l=o?t.font:t.fontFamily;if(s.charCodeAt(0)===55349){var[c,u]=B2(s,r);return Gn(s,c,r,t,a.concat(u))}else if(l){var d,h;if(l==="boldsymbol"){var g=O2(s,r,t,a,n);d=g.fontName,h=[g.fontClass]}else o?(d=$u[l].fontName,h=[l]):(d=Qs(l,t.fontWeight,t.fontShape),h=[l,t.fontWeight,t.fontShape]);if(Da(s,d,r).metrics)return Gn(s,d,r,t,a.concat(h));if(ju.hasOwnProperty(s)&&d.slice(0,10)==="Typewriter"){for(var x=[],m=0;m<s.length;m++)x.push(Gn(s[m],d,r,t,a.concat(h)));return Zu(x)}}if(n==="mathord")return Gn(s,"Math-Italic",r,t,a.concat(["mathnormal"]));if(n==="textord"){var p=ft[r][s]&&ft[r][s].font;if(p==="ams"){var y=Qs("amsrm",t.fontWeight,t.fontShape);return Gn(s,y,r,t,a.concat("amsrm",t.fontWeight,t.fontShape))}else if(p==="main"||!p){var T=Qs("textrm",t.fontWeight,t.fontShape);return Gn(s,T,r,t,a.concat(t.fontWeight,t.fontShape))}else{var w=Qs(p,t.fontWeight,t.fontShape);return Gn(s,w,r,t,a.concat(w,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},G2=(i,e)=>{if(Fi(i.classes)!==Fi(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize)return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n in i.style)if(i.style.hasOwnProperty(n)&&i.style[n]!==e.style[n])return!1;for(var r in e.style)if(e.style.hasOwnProperty(r)&&i.style[r]!==e.style[r])return!1;return!0},H2=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof Nn&&n instanceof Nn&&G2(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},y0=function(e){for(var t=0,n=0,r=0,s=0;s<e.children.length;s++){var a=e.children[s];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},on=function(e,t,n,r){var s=new bs(e,t,n,r);return y0(s),s},Yu=(i,e,t,n)=>new bs(i,e,t,n),V2=function(e,t,n){var r=on([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=xe(r.height),r.maxFontSize=1,r},W2=function(e,t,n,r){var s=new _0(e,t,n,r);return y0(s),s},Zu=function(e){var t=new ys(e);return y0(t),t},q2=function(e,t){return e instanceof ys?on([],[e],t):e},X2=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,s=r,a=1;a<t.length;a++){var o=-t[a].shift-s-t[a].elem.depth,l=o-(t[a-1].elem.height+t[a-1].elem.depth);s=s+o,n.push({type:"kern",size:l}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var u=e.positionData,d=0;d<e.children.length;d++){var h=e.children[d];u-=h.type==="kern"?h.size:h.elem.height+h.elem.depth}c=u}else if(e.positionType==="bottom")c=-e.positionData;else{var g=e.children[0];if(g.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-g.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-g.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},j2=function(e,t){for(var{children:n,depth:r}=X2(e),s=0,a=0;a<n.length;a++){var o=n[a];if(o.type==="elem"){var l=o.elem;s=Math.max(s,l.maxFontSize,l.height)}}s+=2;var c=on(["pstrut"],[]);c.style.height=xe(s);for(var u=[],d=r,h=r,g=r,x=0;x<n.length;x++){var m=n[x];if(m.type==="kern")g+=m.size;else{var p=m.elem,y=m.wrapperClasses||[],T=m.wrapperStyle||{},w=on(y,[c,p],void 0,T);w.style.top=xe(-s-g-p.depth),m.marginLeft&&(w.style.marginLeft=m.marginLeft),m.marginRight&&(w.style.marginRight=m.marginRight),u.push(w),g+=p.height+p.depth}d=Math.min(d,g),h=Math.max(h,g)}var b=on(["vlist"],u);b.style.height=xe(h);var E;if(d<0){var z=on([],[]),k=on(["vlist"],[z]);k.style.height=xe(-d);var M=on(["vlist-s"],[new Nn("​")]);E=[on(["vlist-r"],[b,M]),on(["vlist-r"],[k])]}else E=[on(["vlist-r"],[b])];var D=on(["vlist-t"],E);return E.length===2&&D.classes.push("vlist-t2"),D.height=h,D.depth=-d,D},Y2=(i,e)=>{var t=on(["mspace"],[],e),n=yt(i,e);return t.style.marginRight=xe(n),t},Qs=function(e,t,n){var r="";switch(e){case"amsrm":r="AMS";break;case"textrm":r="Main";break;case"textsf":r="SansSerif";break;case"texttt":r="Typewriter";break;default:r=e}var s;return t==="textbf"&&n==="textit"?s="BoldItalic":t==="textbf"?s="Bold":t==="textit"?s="Italic":s="Regular",r+"-"+s},$u={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ku={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Z2=function(e,t){var[n,r,s]=Ku[e],a=new Oi(n),o=new yi([a],{width:xe(r),height:xe(s),style:"width:"+xe(r),viewBox:"0 0 "+1e3*r+" "+1e3*s,preserveAspectRatio:"xMinYMin"}),l=Yu(["overlay"],[o],t);return l.height=s,l.style.height=xe(s),l.style.width=xe(r),l},q={fontMap:$u,makeSymbol:Gn,mathsym:F2,makeSpan:on,makeSvgSpan:Yu,makeLineSpan:V2,makeAnchor:W2,makeFragment:Zu,wrapFragment:q2,makeVList:j2,makeOrd:U2,makeGlue:Y2,staticSvg:Z2,svgData:Ku,tryCombineChars:H2},_t={number:3,unit:"mu"},Ji={number:4,unit:"mu"},ui={number:5,unit:"mu"},$2={mord:{mop:_t,mbin:Ji,mrel:ui,minner:_t},mop:{mord:_t,mop:_t,mrel:ui,minner:_t},mbin:{mord:Ji,mop:Ji,mopen:Ji,minner:Ji},mrel:{mord:ui,mop:ui,mopen:ui,minner:ui},mopen:{},mclose:{mop:_t,mbin:Ji,mrel:ui,minner:_t},mpunct:{mord:_t,mop:_t,mrel:ui,mopen:_t,mclose:_t,mpunct:_t,minner:_t},minner:{mord:_t,mop:_t,mbin:Ji,mrel:ui,mopen:_t,mpunct:_t,minner:_t}},K2={mord:{mop:_t},mop:{mord:_t,mop:_t},mbin:{},mrel:{},mopen:{},mclose:{mop:_t},mpunct:{},minner:{mop:_t}},Ju={},xa={},_a={};function be(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:s,mathmlBuilder:a}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)Ju[t[l]]=o;e&&(s&&(xa[e]=s),a&&(_a[e]=a))}function mr(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;be({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var ya=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},St=function(e){return e.type==="ordgroup"?e.body:[e]},bi=q.makeSpan,J2=["leftmost","mbin","mopen","mrel","mop","mpunct"],Q2=["rightmost","mrel","mclose","mpunct"],e3={display:ze.DISPLAY,text:ze.TEXT,script:ze.SCRIPT,scriptscript:ze.SCRIPTSCRIPT},t3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},It=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var s=[],a=0;a<e.length;a++){var o=nt(e[a],t);if(o instanceof ys){var l=o.children;s.push(...l)}else s.push(o)}if(q.tryCombineChars(s),!n)return s;var c=t;if(e.length===1){var u=e[0];u.type==="sizing"?c=t.havingSize(u.size):u.type==="styling"&&(c=t.havingStyle(e3[u.style]))}var d=bi([r[0]||"leftmost"],[],t),h=bi([r[1]||"rightmost"],[],t),g=n==="root";return Rc(s,(x,m)=>{var p=m.classes[0],y=x.classes[0];p==="mbin"&&Ue.contains(Q2,y)?m.classes[0]="mord":y==="mbin"&&Ue.contains(J2,p)&&(x.classes[0]="mord")},{node:d},h,g),Rc(s,(x,m)=>{var p=i0(m),y=i0(x),T=p&&y?x.hasClass("mtight")?K2[p][y]:$2[p][y]:null;if(T)return q.makeGlue(T,c)},{node:d},h,g),s},Rc=function i(e,t,n,r,s){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],l=Qu(o);if(l){i(l.children,t,n,null,s);continue}var c=!o.hasClass("mspace");if(c){var u=t(o,n.node);u&&(n.insertAfter?n.insertAfter(u):(e.unshift(u),a++))}c?n.node=o:s&&o.hasClass("newline")&&(n.node=bi(["leftmost"])),n.insertAfter=(d=>h=>{e.splice(d+1,0,h),a++})(a)}r&&e.pop()},Qu=function(e){return e instanceof ys||e instanceof _0||e instanceof bs&&e.hasClass("enclosing")?e:null},n3=function i(e,t){var n=Qu(e);if(n){var r=n.children;if(r.length){if(t==="right")return i(r[r.length-1],"right");if(t==="left")return i(r[0],"left")}}return e},i0=function(e,t){return e?(t&&(e=n3(e,t)),t3[e.classes[0]]||null):null},gs=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return bi(t.concat(n))},nt=function(e,t,n){if(!e)return bi();if(xa[e.type]){var r=xa[e.type](e,t);if(n&&t.size!==n.size){r=bi(t.sizingClasses(n),[r],t);var s=t.sizeMultiplier/n.sizeMultiplier;r.height*=s,r.depth*=s}return r}else throw new fe("Got group of unknown type: '"+e.type+"'")};function ea(i,e){var t=bi(["base"],i,e),n=bi(["strut"]);return n.style.height=xe(t.height+t.depth),t.depth&&(n.style.verticalAlign=xe(-t.depth)),t.children.unshift(n),t}function r0(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=It(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var s=[],a=[],o=0;o<n.length;o++)if(a.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,a.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(s.push(ea(a,e)),a=[])}else n[o].hasClass("newline")&&(a.pop(),a.length>0&&(s.push(ea(a,e)),a=[]),s.push(n[o]));a.length>0&&s.push(ea(a,e));var c;t?(c=ea(It(t,e,!0)),c.classes=["tag"],s.push(c)):r&&s.push(r);var u=bi(["katex-html"],s);if(u.setAttribute("aria-hidden","true"),c){var d=c.children[0];d.style.height=xe(u.height+u.depth),u.depth&&(d.style.verticalAlign=xe(-u.depth))}return u}function eh(i){return new ys(i)}class Rn{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Fi(this.classes));for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=Ue.escape(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+Ue.escape(Fi(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class ls{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Ue.escape(this.toText())}toText(){return this.text}}class i3{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",xe(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+xe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var he={MathNode:Rn,TextNode:ls,SpaceNode:i3,newDocumentFragment:eh},Bn=function(e,t,n){return ft[t][e]&&ft[t][e].replace&&e.charCodeAt(0)!==55349&&!(ju.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=ft[t][e].replace),new he.TextNode(e)},b0=function(e){return e.length===1?e[0]:new he.MathNode("mrow",e)},w0=function(e,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var n=t.font;if(!n||n==="mathnormal")return null;var r=e.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var s=e.text;if(Ue.contains(["\\imath","\\jmath"],s))return null;ft[r][s]&&ft[r][s].replace&&(s=ft[r][s].replace);var a=q.fontMap[n].fontName;return x0(s,a,r)?q.fontMap[n].variant:null},dn=function(e,t,n){if(e.length===1){var r=ht(e[0],t);return n&&r instanceof Rn&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var s=[],a,o=0;o<e.length;o++){var l=ht(e[o],t);if(l instanceof Rn&&a instanceof Rn){if(l.type==="mtext"&&a.type==="mtext"&&l.getAttribute("mathvariant")===a.getAttribute("mathvariant")){a.children.push(...l.children);continue}else if(l.type==="mn"&&a.type==="mn"){a.children.push(...l.children);continue}else if(l.type==="mi"&&l.children.length===1&&a.type==="mn"){var c=l.children[0];if(c instanceof ls&&c.text==="."){a.children.push(...l.children);continue}}else if(a.type==="mi"&&a.children.length===1){var u=a.children[0];if(u instanceof ls&&u.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var d=l.children[0];d instanceof ls&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),s.pop())}}}s.push(l),a=l}return s},Ui=function(e,t,n){return b0(dn(e,t,n))},ht=function(e,t){if(!e)return new he.MathNode("mrow");if(_a[e.type]){var n=_a[e.type](e,t);return n}else throw new fe("Got group of unknown type: '"+e.type+"'")};function Pc(i,e,t,n,r){var s=dn(i,t),a;s.length===1&&s[0]instanceof Rn&&Ue.contains(["mrow","mtable"],s[0].type)?a=s[0]:a=new he.MathNode("mrow",s);var o=new he.MathNode("annotation",[new he.TextNode(e)]);o.setAttribute("encoding","application/x-tex");var l=new he.MathNode("semantics",[a,o]),c=new he.MathNode("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var u=r?"katex":"katex-mathml";return q.makeSpan([u],[c])}var th=function(e){return new di({style:e.displayMode?ze.DISPLAY:ze.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},nh=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=q.makeSpan(n,[e])}return e},r3=function(e,t,n){var r=th(n),s;if(n.output==="mathml")return Pc(e,t,r,n.displayMode,!0);if(n.output==="html"){var a=r0(e,r);s=q.makeSpan(["katex"],[a])}else{var o=Pc(e,t,r,n.displayMode,!1),l=r0(e,r);s=q.makeSpan(["katex"],[o,l])}return nh(s,n)},s3=function(e,t,n){var r=th(n),s=r0(e,r),a=q.makeSpan(["katex"],[s]);return nh(a,n)},a3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},o3=function(e){var t=new he.MathNode("mo",[new he.TextNode(a3[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},l3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},c3=function(e){return e.type==="ordgroup"?e.body.length:1},u3=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if(Ue.contains(["widehat","widecheck","widetilde","utilde"],l)){var c=e,u=c3(c.base),d,h,g;if(u>5)l==="widehat"||l==="widecheck"?(d=420,o=2364,g=.42,h=l+"4"):(d=312,o=2340,g=.34,h="tilde4");else{var x=[1,1,2,2,3,3][u];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][x],d=[0,239,300,360,420][x],g=[0,.24,.3,.3,.36,.42][x],h=l+x):(o=[0,600,1033,2339,2340][x],d=[0,260,286,306,312][x],g=[0,.26,.286,.3,.306,.34][x],h="tilde"+x)}var m=new Oi(h),p=new yi([m],{width:"100%",height:xe(g),viewBox:"0 0 "+o+" "+d,preserveAspectRatio:"none"});return{span:q.makeSvgSpan([],[p],t),minWidth:0,height:g}}else{var y=[],T=l3[l],[w,b,E]=T,z=E/1e3,k=w.length,M,D;if(k===1){var F=T[3];M=["hide-tail"],D=[F]}else if(k===2)M=["halfarrow-left","halfarrow-right"],D=["xMinYMin","xMaxYMin"];else if(k===3)M=["brace-left","brace-center","brace-right"],D=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+k+" children.");for(var G=0;G<k;G++){var W=new Oi(w[G]),N=new yi([W],{width:"400em",height:xe(z),viewBox:"0 0 "+o+" "+E,preserveAspectRatio:D[G]+" slice"}),B=q.makeSvgSpan([M[G]],[N],t);if(k===1)return{span:B,minWidth:b,height:z};B.style.height=xe(z),y.push(B)}return{span:q.makeSpan(["stretchy"],y,t),minWidth:b,height:z}}}var{span:r,minWidth:s,height:a}=n();return r.height=a,r.style.height=xe(a),s>0&&(r.style.minWidth=xe(s)),r},h3=function(e,t,n,r,s){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=q.makeSpan(["stretchy",t],[],s),t==="fbox"){var l=s.color&&s.getColor();l&&(a.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new t0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new t0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new yi(c,{width:"100%",height:xe(o)});a=q.makeSvgSpan([],[u],s)}return a.height=o,a.style.height=xe(o),a},wi={encloseSpan:h3,mathMLnode:o3,svgSpan:u3};function We(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function S0(i){var e=La(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function La(i){return i&&(i.type==="atom"||N2.hasOwnProperty(i.type))?i:null}var M0=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=We(i.base,"accent"),t=n.base,i.base=t,r=k2(nt(i,e)),i.base=n):(n=We(i,"accent"),t=n.base);var s=nt(t,e.havingCrampedStyle()),a=n.isShifty&&Ue.isCharacterBox(t),o=0;if(a){var l=Ue.getBaseElem(t),c=nt(l,e.havingCrampedStyle());o=Tc(c).skew}var u=n.label==="\\c",d=u?s.height+s.depth:Math.min(s.height,e.fontMetrics().xHeight),h;if(n.isStretchy)h=wi.svgSpan(n,e),h=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"elem",elem:h,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+xe(2*o)+")",marginLeft:xe(2*o)}:void 0}]},e);else{var g,x;n.label==="\\vec"?(g=q.staticSvg("vec",e),x=q.svgData.vec[1]):(g=q.makeOrd({mode:n.mode,text:n.label},e,"textord"),g=Tc(g),g.italic=0,x=g.width,u&&(d+=g.depth)),h=q.makeSpan(["accent-body"],[g]);var m=n.label==="\\textcircled";m&&(h.classes.push("accent-full"),d=s.height);var p=o;m||(p-=x/2),h.style.left=xe(p),n.label==="\\textcircled"&&(h.style.top=".2em"),h=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:-d},{type:"elem",elem:h}]},e)}var y=q.makeSpan(["mord","accent"],[h],e);return r?(r.children[0]=y,r.height=Math.max(y.height,r.height),r.classes[0]="mord",r):y},ih=(i,e)=>{var t=i.isStretchy?wi.mathMLnode(i.label):new he.MathNode("mo",[Bn(i.label,i.mode)]),n=new he.MathNode("mover",[ht(i.base,e),t]);return n.setAttribute("accent","true"),n},d3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));be({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=ya(e[0]),n=!d3.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:M0,mathmlBuilder:ih});be({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:M0,mathmlBuilder:ih});be({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=nt(i.base,e),n=wi.svgSpan(i,e),r=i.label==="\\utilde"?.12:0,s=q.makeVList({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]},e);return q.makeSpan(["mord","accentunder"],[s],e)},mathmlBuilder:(i,e)=>{var t=wi.mathMLnode(i.label),n=new he.MathNode("munder",[ht(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var ta=i=>{var e=new he.MathNode("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};be({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=q.wrapFragment(nt(i.body,n,e),e),s=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(s+"-arrow-pad");var a;i.below&&(n=e.havingStyle(t.sub()),a=q.wrapFragment(nt(i.below,n,e),e),a.classes.push(s+"-arrow-pad"));var o=wi.svgSpan(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var u;if(a){var d=-e.fontMetrics().axisHeight+a.height+.5*o.height+.111;u=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l},{type:"elem",elem:a,shift:d}]},e)}else u=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l}]},e);return u.children[0].children[0].children[1].classes.push("svg-align"),q.makeSpan(["mrel","x-arrow"],[u],e)},mathmlBuilder(i,e){var t=wi.mathMLnode(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=ta(ht(i.body,e));if(i.below){var s=ta(ht(i.below,e));n=new he.MathNode("munderover",[t,s,r])}else n=new he.MathNode("mover",[t,r])}else if(i.below){var a=ta(ht(i.below,e));n=new he.MathNode("munder",[t,a])}else n=ta(),n=new he.MathNode("mover",[t,n]);return n}});var f3=q.makeSpan;function rh(i,e){var t=It(i.body,e,!0);return f3([i.mclass],t,e)}function sh(i,e){var t,n=dn(i.body,e);return i.mclass==="minner"?t=new he.MathNode("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new he.MathNode("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new he.MathNode("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}be({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:St(r),isCharacterBox:Ue.isCharacterBox(r)}},htmlBuilder:rh,mathmlBuilder:sh});var Ra=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};be({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:Ra(e[0]),body:St(e[1]),isCharacterBox:Ue.isCharacterBox(e[1])}}});be({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],s=e[0],a;n!=="\\stackrel"?a=Ra(r):a="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:St(r)},l={type:"supsub",mode:s.mode,base:o,sup:n==="\\underset"?null:s,sub:n==="\\underset"?s:null};return{type:"mclass",mode:t.mode,mclass:a,body:[l],isCharacterBox:Ue.isCharacterBox(l)}},htmlBuilder:rh,mathmlBuilder:sh});be({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:Ra(e[0]),body:St(e[0])}},htmlBuilder(i,e){var t=It(i.body,e,!0),n=q.makeSpan([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=dn(i.body,e),n=new he.MathNode("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var m3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},zc=()=>({type:"styling",body:[],mode:"math",style:"display"}),kc=i=>i.type==="textord"&&i.text==="@",p3=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function g3(i,e,t){var n=m3[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),s={type:"atom",text:n,mode:"math",family:"rel"},a=t.callFunction("\\Big",[s],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,a,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function v3(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new fe("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],s=0;s<e.length;s++){for(var a=e[s],o=zc(),l=0;l<a.length;l++)if(!kc(a[l]))o.body.push(a[l]);else{n.push(o),l+=1;var c=S0(a[l]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(c)>-1))if("<>AV".indexOf(c)>-1)for(var d=0;d<2;d++){for(var h=!0,g=l+1;g<a.length;g++){if(p3(a[g],c)){h=!1,l=g;break}if(kc(a[g]))throw new fe("Missing a "+c+" character to complete a CD arrow.",a[g]);u[d].body.push(a[g])}if(h)throw new fe("Missing a "+c+" character to complete a CD arrow.",a[l])}else throw new fe('Expected one of "<>AV=|." after @',a[l]);var x=g3(c,u,i),m={type:"styling",body:[x],mode:"math",style:"display"};n.push(m),o=zc()}s%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var p=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:p,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}be({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=q.wrapFragment(nt(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=xe(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new he.MathNode("mrow",[ht(i.label,e)]);return t=new he.MathNode("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new he.MathNode("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});be({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=q.wrapFragment(nt(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new he.MathNode("mrow",[ht(i.fragment,e)])}});be({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=We(e[0],"ordgroup"),r=n.body,s="",a=0;a<r.length;a++){var o=We(r[a],"textord");s+=o.text}var l=parseInt(s),c;if(isNaN(l))throw new fe("\\@char has non-numeric argument "+s);if(l<0||l>=1114111)throw new fe("\\@char with invalid code point "+s);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var ah=(i,e)=>{var t=It(i.body,e.withColor(i.color),!1);return q.makeFragment(t)},oh=(i,e)=>{var t=dn(i.body,e.withColor(i.color)),n=new he.MathNode("mstyle",t);return n.setAttribute("mathcolor",i.color),n};be({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=We(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:St(r)}},htmlBuilder:ah,mathmlBuilder:oh});be({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=We(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var s=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:s}},htmlBuilder:ah,mathmlBuilder:oh});be({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,s=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:s,size:r&&We(r,"size").value}},htmlBuilder(i,e){var t=q.makeSpan(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=xe(yt(i.size,e)))),t},mathmlBuilder(i,e){var t=new he.MathNode("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",xe(yt(i.size,e)))),t}});var s0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},lh=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new fe("Expected a control sequence",i);return e},x3=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},ch=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};be({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(s0[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=s0[n.text]),We(e.parseFunction(),"internal");throw new fe("Invalid token after macro prefix",n)}});be({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new fe("Expected a control sequence",n);for(var s=0,a,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){a=e.gullet.future(),o[s].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new fe('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==s+1)throw new fe('Argument number "'+n.text+'" out of order');s++,o.push([])}else{if(n.text==="EOF")throw new fe("Expected a macro definition");o[s].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return a&&l.unshift(a),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:s,delimiters:o},t===s0[t]),{type:"internal",mode:e.mode}}});be({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=lh(e.gullet.popToken());e.gullet.consumeSpaces();var r=x3(e);return ch(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});be({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=lh(e.gullet.popToken()),r=e.gullet.popToken(),s=e.gullet.popToken();return ch(e,n,s,t==="\\\\globalfuture"),e.gullet.pushToken(s),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var ss=function(e,t,n){var r=ft.math[e]&&ft.math[e].replace,s=x0(r||e,t,n);if(!s)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return s},T0=function(e,t,n,r){var s=n.havingBaseStyle(t),a=q.makeSpan(r.concat(s.sizingClasses(n)),[e],n),o=s.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=s.sizeMultiplier,a},uh=function(e,t,n){var r=t.havingBaseStyle(n),s=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=xe(s),e.height-=s,e.depth+=s},_3=function(e,t,n,r,s,a){var o=q.makeSymbol(e,"Main-Regular",s,r),l=T0(o,t,r,a);return n&&uh(l,r,t),l},y3=function(e,t,n,r){return q.makeSymbol(e,"Size"+t+"-Regular",n,r)},hh=function(e,t,n,r,s,a){var o=y3(e,t,s,r),l=T0(q.makeSpan(["delimsizing","size"+t],[o],r),ze.TEXT,r,a);return n&&uh(l,r,ze.TEXT),l},Lo=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var s=q.makeSpan(["delimsizinginner",r],[q.makeSpan([],[q.makeSymbol(e,t,n)])]);return{type:"elem",elem:s}},Ro=function(e,t,n){var r=Jn["Size4-Regular"][e.charCodeAt(0)]?Jn["Size4-Regular"][e.charCodeAt(0)][4]:Jn["Size1-Regular"][e.charCodeAt(0)][4],s=new Oi("inner",A2(e,Math.round(1e3*t))),a=new yi([s],{width:xe(r),height:xe(t),style:"width:"+xe(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=q.makeSvgSpan([],[a],n);return o.height=t,o.style.height=xe(t),o.style.width=xe(r),{type:"elem",elem:o}},a0=.008,na={type:"kern",size:-1*a0},b3=["|","\\lvert","\\rvert","\\vert"],w3=["\\|","\\lVert","\\rVert","\\Vert"],dh=function(e,t,n,r,s,a){var o,l,c,u,d="",h=0;o=c=u=e,l=null;var g="Size1-Regular";e==="\\uparrow"?c=u="⏐":e==="\\Uparrow"?c=u="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",u="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",u="\\Downarrow"):Ue.contains(b3,e)?(c="∣",d="vert",h=333):Ue.contains(w3,e)?(c="∥",d="doublevert",h=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",u="⎣",g="Size4-Regular",d="lbrack",h=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",u="⎦",g="Size4-Regular",d="rbrack",h=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",u="⎣",g="Size4-Regular",d="lfloor",h=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=u="⎢",g="Size4-Regular",d="lceil",h=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",u="⎦",g="Size4-Regular",d="rfloor",h=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=u="⎥",g="Size4-Regular",d="rceil",h=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",u="⎝",g="Size4-Regular",d="lparen",h=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",u="⎠",g="Size4-Regular",d="rparen",h=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",u="⎩",c="⎪",g="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",u="⎭",c="⎪",g="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",u="⎩",c="⎪",g="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",u="⎭",c="⎪",g="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",u="⎭",c="⎪",g="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",u="⎩",c="⎪",g="Size4-Regular");var x=ss(o,g,s),m=x.height+x.depth,p=ss(c,g,s),y=p.height+p.depth,T=ss(u,g,s),w=T.height+T.depth,b=0,E=1;if(l!==null){var z=ss(l,g,s);b=z.height+z.depth,E=2}var k=m+w+b,M=Math.max(0,Math.ceil((t-k)/(E*y))),D=k+M*E*y,F=r.fontMetrics().axisHeight;n&&(F*=r.sizeMultiplier);var G=D/2-F,W=[];if(d.length>0){var N=D-m-w,B=Math.round(D*1e3),Z=E2(d,Math.round(N*1e3)),ne=new Oi(d,Z),ae=(h/1e3).toFixed(3)+"em",$=(B/1e3).toFixed(3)+"em",ce=new yi([ne],{width:ae,height:$,viewBox:"0 0 "+h+" "+B}),ee=q.makeSvgSpan([],[ce],r);ee.height=B/1e3,ee.style.width=ae,ee.style.height=$,W.push({type:"elem",elem:ee})}else{if(W.push(Lo(u,g,s)),W.push(na),l===null){var Se=D-m-w+2*a0;W.push(Ro(c,Se,r))}else{var H=(D-m-w-b)/2+2*a0;W.push(Ro(c,H,r)),W.push(na),W.push(Lo(l,g,s)),W.push(na),W.push(Ro(c,H,r))}W.push(na),W.push(Lo(o,g,s))}var se=r.havingBaseStyle(ze.TEXT),ge=q.makeVList({positionType:"bottom",positionData:G,children:W},se);return T0(q.makeSpan(["delimsizing","mult"],[ge],se),ze.TEXT,r,a)},Po=80,zo=.08,ko=function(e,t,n,r,s){var a=T2(e,r,n),o=new Oi(e,a),l=new yi([o],{width:"400em",height:xe(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return q.makeSvgSpan(["hide-tail"],[l],s)},S3=function(e,t){var n=t.havingBaseSizing(),r=gh("\\surd",e*n.sizeMultiplier,ph,n),s=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l=0,c=0,u=0,d;return r.type==="small"?(u=1e3+1e3*a+Po,e<1?s=1:e<1.4&&(s=.7),l=(1+a+zo)/s,c=(1+a)/s,o=ko("sqrtMain",l,u,a,t),o.style.minWidth="0.853em",d=.833/s):r.type==="large"?(u=(1e3+Po)*cs[r.size],c=(cs[r.size]+a)/s,l=(cs[r.size]+a+zo)/s,o=ko("sqrtSize"+r.size,l,u,a,t),o.style.minWidth="1.02em",d=1/s):(l=e+a+zo,c=e+a,u=Math.floor(1e3*e+a)+Po,o=ko("sqrtTall",l,u,a,t),o.style.minWidth="0.742em",d=1.056),o.height=c,o.style.height=xe(l),{span:o,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*s}},fh=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],M3=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],mh=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],cs=[0,1.2,1.8,2.4,3],T3=function(e,t,n,r,s){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),Ue.contains(fh,e)||Ue.contains(mh,e))return hh(e,t,!1,n,r,s);if(Ue.contains(M3,e))return dh(e,cs[t],!1,n,r,s);throw new fe("Illegal delimiter: '"+e+"'")},A3=[{type:"small",style:ze.SCRIPTSCRIPT},{type:"small",style:ze.SCRIPT},{type:"small",style:ze.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],E3=[{type:"small",style:ze.SCRIPTSCRIPT},{type:"small",style:ze.SCRIPT},{type:"small",style:ze.TEXT},{type:"stack"}],ph=[{type:"small",style:ze.SCRIPTSCRIPT},{type:"small",style:ze.SCRIPT},{type:"small",style:ze.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],C3=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},gh=function(e,t,n,r){for(var s=Math.min(2,3-r.style.size),a=s;a<n.length&&n[a].type!=="stack";a++){var o=ss(e,C3(n[a]),"math"),l=o.height+o.depth;if(n[a].type==="small"){var c=r.havingBaseStyle(n[a].style);l*=c.sizeMultiplier}if(l>t)return n[a]}return n[n.length-1]},vh=function(e,t,n,r,s,a){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;Ue.contains(mh,e)?o=A3:Ue.contains(fh,e)?o=ph:o=E3;var l=gh(e,t,o,r);return l.type==="small"?_3(e,l.style,n,r,s,a):l.type==="large"?hh(e,l.size,n,r,s,a):dh(e,t,n,r,s,a)},D3=function(e,t,n,r,s,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,u=Math.max(t-o,n+o),d=Math.max(u/500*l,2*u-c);return vh(e,d,!0,r,s,a)},xi={sqrtImage:S3,sizedDelim:T3,sizeToMaxHeight:cs,customSizedDelim:vh,leftRightDelim:D3},Ic={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},L3=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Pa(i,e){var t=La(i);if(t&&Ue.contains(L3,t.text))return t;throw t?new fe("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new fe("Invalid delimiter type '"+i.type+"'",i)}be({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=Pa(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:Ic[i.funcName].size,mclass:Ic[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?q.makeSpan([i.mclass]):xi.sizedDelim(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(Bn(i.delim,i.mode));var t=new he.MathNode("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=xe(xi.sizeToMaxHeight[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function Nc(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}be({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new fe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Pa(e[0],i).text,color:t}}});be({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Pa(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var s=We(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:s.delim,rightColor:s.color}},htmlBuilder:(i,e)=>{Nc(i);for(var t=It(i.body,e,!0,["mopen","mclose"]),n=0,r=0,s=!1,a=0;a<t.length;a++)t[a].isMiddle?s=!0:(n=Math.max(t[a].height,n),r=Math.max(t[a].depth,r));n*=e.sizeMultiplier,r*=e.sizeMultiplier;var o;if(i.left==="."?o=gs(e,["mopen"]):o=xi.leftRightDelim(i.left,n,r,e,i.mode,["mopen"]),t.unshift(o),s)for(var l=1;l<t.length;l++){var c=t[l],u=c.isMiddle;u&&(t[l]=xi.leftRightDelim(u.delim,n,r,u.options,i.mode,[]))}var d;if(i.right===".")d=gs(e,["mclose"]);else{var h=i.rightColor?e.withColor(i.rightColor):e;d=xi.leftRightDelim(i.right,n,r,h,i.mode,["mclose"])}return t.push(d),q.makeSpan(["minner"],t,e)},mathmlBuilder:(i,e)=>{Nc(i);var t=dn(i.body,e);if(i.left!=="."){var n=new he.MathNode("mo",[Bn(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new he.MathNode("mo",[Bn(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return b0(t)}});be({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Pa(e[0],i);if(!i.parser.leftrightDepth)throw new fe("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;if(i.delim===".")t=gs(e,[]);else{t=xi.sizedDelim(i.delim,1,e,i.mode,[]);var n={delim:i.delim,options:e};t.isMiddle=n}return t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?Bn("|","text"):Bn(i.delim,i.mode),n=new he.MathNode("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var A0=(i,e)=>{var t=q.wrapFragment(nt(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,s,a=0,o=Ue.isCharacterBox(i.body);if(n==="sout")s=q.makeSpan(["stretchy","sout"]),s.height=e.fontMetrics().defaultRuleThickness/r,a=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=yt({number:.6,unit:"pt"},e),c=yt({number:.35,unit:"ex"},e),u=e.havingBaseSizing();r=r/u.sizeMultiplier;var d=t.height+t.depth+l+c;t.style.paddingLeft=xe(d/2+l);var h=Math.floor(1e3*d*r),g=S2(h),x=new yi([new Oi("phase",g)],{width:"400em",height:xe(h/1e3),viewBox:"0 0 400000 "+h,preserveAspectRatio:"xMinYMin slice"});s=q.makeSvgSpan(["hide-tail"],[x],e),s.style.height=xe(d),a=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var m=0,p=0,y=0;/box/.test(n)?(y=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),m=e.fontMetrics().fboxsep+(n==="colorbox"?0:y),p=m):n==="angl"?(y=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),m=4*y,p=Math.max(0,.25-t.depth)):(m=o?.2:0,p=m),s=wi.encloseSpan(t,n,m,p,e),/fbox|boxed|fcolorbox/.test(n)?(s.style.borderStyle="solid",s.style.borderWidth=xe(y)):n==="angl"&&y!==.049&&(s.style.borderTopWidth=xe(y),s.style.borderRightWidth=xe(y)),a=t.depth+p,i.backgroundColor&&(s.style.backgroundColor=i.backgroundColor,i.borderColor&&(s.style.borderColor=i.borderColor))}var T;if(i.backgroundColor)T=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:a},{type:"elem",elem:t,shift:0}]},e);else{var w=/cancel|phase/.test(n)?["svg-align"]:[];T=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:s,shift:a,wrapperClasses:w}]},e)}return/cancel/.test(n)&&(T.height=t.height,T.depth=t.depth),/cancel/.test(n)&&!o?q.makeSpan(["mord","cancel-lap"],[T],e):q.makeSpan(["mord"],[T],e)},E0=(i,e)=>{var t=0,n=new he.MathNode(i.label.indexOf("colorbox")>-1?"mpadded":"menclose",[ht(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+r+"em solid "+String(i.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};be({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,s=We(e[0],"color-token").color,a=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,body:a}},htmlBuilder:A0,mathmlBuilder:E0});be({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,s=We(e[0],"color-token").color,a=We(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,borderColor:s,body:o}},htmlBuilder:A0,mathmlBuilder:E0});be({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});be({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:A0,mathmlBuilder:E0});be({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var xh={};function ei(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:s,mathmlBuilder:a}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)xh[t[l]]=o;s&&(xa[e]=s),a&&(_a[e]=a)}var _h={};function S(i,e){_h[i]=e}function Bc(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var za=i=>{var e=i.parser.settings;if(!e.displayMode)throw new fe("{"+i.envName+"} can be used only in display mode.")};function C0(i){if(i.indexOf("ed")===-1)return i.indexOf("*")===-1}function Hi(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:s,arraystretch:a,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:u,maxNumCols:d,leqno:h}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!a){var g=i.gullet.expandMacroAsText("\\arraystretch");if(g==null)a=1;else if(a=parseFloat(g),!a||a<0)throw new fe("Invalid \\arraystretch: "+g)}i.gullet.beginGroup();var x=[],m=[x],p=[],y=[],T=l!=null?[]:void 0;function w(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function b(){T&&(i.gullet.macros.get("\\df@tag")?(T.push(i.subparse([new kn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):T.push(Boolean(l)&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),y.push(Bc(i));;){var E=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup(),E={type:"ordgroup",mode:i.mode,body:E},t&&(E={type:"styling",mode:i.mode,style:t,body:[E]}),x.push(E);var z=i.fetch().text;if(z==="&"){if(d&&x.length===d){if(c||o)throw new fe("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(z==="\\end"){b(),x.length===1&&E.type==="styling"&&E.body[0].body.length===0&&(m.length>1||!u)&&m.pop(),y.length<m.length+1&&y.push([]);break}else if(z==="\\\\"){i.consume();var k=void 0;i.gullet.future().text!==" "&&(k=i.parseSizeGroup(!0)),p.push(k?k.value:null),b(),y.push(Bc(i)),x=[],m.push(x),w()}else throw new fe("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:a,body:m,cols:s,rowGaps:p,hskipBeforeAndAfter:n,hLinesBeforeRow:y,colSeparationType:o,tags:T,leqno:h}}function D0(i){return i.slice(0,1)==="d"?"display":"text"}var ti=function(e,t){var n,r,s=e.body.length,a=e.hLinesBeforeRow,o=0,l=new Array(s),c=[],u=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,h=5*d;if(e.colSeparationType&&e.colSeparationType==="small"){var g=t.havingStyle(ze.SCRIPT).sizeMultiplier;h=.2778*(g/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?yt({number:3,unit:"ex"},t):12*d,m=3*d,p=e.arraystretch*x,y=.7*p,T=.3*p,w=0;function b(st){for(var ke=0;ke<st.length;++ke)ke>0&&(w+=.25),c.push({pos:w,isDashed:st[ke]})}for(b(a[0]),n=0;n<e.body.length;++n){var E=e.body[n],z=y,k=T;o<E.length&&(o=E.length);var M=new Array(E.length);for(r=0;r<E.length;++r){var D=nt(E[r],t);k<D.depth&&(k=D.depth),z<D.height&&(z=D.height),M[r]=D}var F=e.rowGaps[n],G=0;F&&(G=yt(F,t),G>0&&(G+=T,k<G&&(k=G),G=0)),e.addJot&&(k+=m),M.height=z,M.depth=k,w+=z,M.pos=w,w+=k+G,l[n]=M,b(a[n+1])}var W=w/2+t.fontMetrics().axisHeight,N=e.cols||[],B=[],Z,ne,ae=[];if(e.tags&&e.tags.some(st=>st))for(n=0;n<s;++n){var $=l[n],ce=$.pos-W,ee=e.tags[n],Se=void 0;ee===!0?Se=q.makeSpan(["eqn-num"],[],t):ee===!1?Se=q.makeSpan([],[],t):Se=q.makeSpan([],It(ee,t,!0),t),Se.depth=$.depth,Se.height=$.height,ae.push({type:"elem",elem:Se,shift:ce})}for(r=0,ne=0;r<o||ne<N.length;++r,++ne){for(var H=N[ne]||{},se=!0;H.type==="separator";){if(se||(Z=q.makeSpan(["arraycolsep"],[]),Z.style.width=xe(t.fontMetrics().doubleRuleSep),B.push(Z)),H.separator==="|"||H.separator===":"){var ge=H.separator==="|"?"solid":"dashed",ue=q.makeSpan(["vertical-separator"],[],t);ue.style.height=xe(w),ue.style.borderRightWidth=xe(u),ue.style.borderRightStyle=ge,ue.style.margin="0 "+xe(-u/2);var j=w-W;j&&(ue.style.verticalAlign=xe(-j)),B.push(ue)}else throw new fe("Invalid separator type: "+H.separator);ne++,H=N[ne]||{},se=!1}if(!(r>=o)){var V=void 0;(r>0||e.hskipBeforeAndAfter)&&(V=Ue.deflt(H.pregap,h),V!==0&&(Z=q.makeSpan(["arraycolsep"],[]),Z.style.width=xe(V),B.push(Z)));var ie=[];for(n=0;n<s;++n){var me=l[n],ve=me[r];if(ve){var Ve=me.pos-W;ve.depth=me.depth,ve.height=me.height,ie.push({type:"elem",elem:ve,shift:Ve})}}ie=q.makeVList({positionType:"individualShift",children:ie},t),ie=q.makeSpan(["col-align-"+(H.align||"c")],[ie]),B.push(ie),(r<o-1||e.hskipBeforeAndAfter)&&(V=Ue.deflt(H.postgap,h),V!==0&&(Z=q.makeSpan(["arraycolsep"],[]),Z.style.width=xe(V),B.push(Z)))}}if(l=q.makeSpan(["mtable"],B),c.length>0){for(var Le=q.makeLineSpan("hline",t,u),Re=q.makeLineSpan("hdashline",t,u),dt=[{type:"elem",elem:l,shift:0}];c.length>0;){var Nt=c.pop(),wt=Nt.pos-W;Nt.isDashed?dt.push({type:"elem",elem:Re,shift:wt}):dt.push({type:"elem",elem:Le,shift:wt})}l=q.makeVList({positionType:"individualShift",children:dt},t)}if(ae.length===0)return q.makeSpan(["mord"],[l],t);var Dt=q.makeVList({positionType:"individualShift",children:ae},t);return Dt=q.makeSpan(["tag"],[Dt],t),q.makeFragment([l,Dt])},R3={c:"center ",l:"left ",r:"right "},ni=function(e,t){for(var n=[],r=new he.MathNode("mtd",[],["mtr-glue"]),s=new he.MathNode("mtd",[],["mml-eqn-num"]),a=0;a<e.body.length;a++){for(var o=e.body[a],l=[],c=0;c<o.length;c++)l.push(new he.MathNode("mtd",[ht(o[c],t)]));e.tags&&e.tags[a]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(s):l.push(s)),n.push(new he.MathNode("mtr",l))}var u=new he.MathNode("mtable",n),d=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",xe(d));var h="",g="";if(e.cols&&e.cols.length>0){var x=e.cols,m="",p=!1,y=0,T=x.length;x[0].type==="separator"&&(h+="top ",y=1),x[x.length-1].type==="separator"&&(h+="bottom ",T-=1);for(var w=y;w<T;w++)x[w].type==="align"?(g+=R3[x[w].align],p&&(m+="none "),p=!0):x[w].type==="separator"&&p&&(m+=x[w].separator==="|"?"solid ":"dashed ",p=!1);u.setAttribute("columnalign",g.trim()),/[sd]/.test(m)&&u.setAttribute("columnlines",m.trim())}if(e.colSeparationType==="align"){for(var b=e.cols||[],E="",z=1;z<b.length;z++)E+=z%2?"0em ":"1em ";u.setAttribute("columnspacing",E.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var k="",M=e.hLinesBeforeRow;h+=M[0].length>0?"left ":"",h+=M[M.length-1].length>0?"right ":"";for(var D=1;D<M.length-1;D++)k+=M[D].length===0?"none ":M[D][0]?"dashed ":"solid ";return/[sd]/.test(k)&&u.setAttribute("rowlines",k.trim()),h!==""&&(u=new he.MathNode("menclose",[u]),u.setAttribute("notation",h.trim())),e.arraystretch&&e.arraystretch<1&&(u=new he.MathNode("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},yh=function(e,t){e.envName.indexOf("ed")===-1&&za(e);var n=[],r=e.envName.indexOf("at")>-1?"alignat":"align",s=e.envName==="split",a=Hi(e.parser,{cols:n,addJot:!0,autoTag:s?void 0:C0(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:s?2:void 0,leqno:e.parser.settings.leqno},"display"),o,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var u="",d=0;d<t[0].body.length;d++){var h=We(t[0].body[d],"textord");u+=h.text}o=Number(u),l=o*2}var g=!l;a.body.forEach(function(y){for(var T=1;T<y.length;T+=2){var w=We(y[T],"styling"),b=We(w.body[0],"ordgroup");b.body.unshift(c)}if(g)l<y.length&&(l=y.length);else{var E=y.length/2;if(o<E)throw new fe("Too many math in a row: "+("expected "+o+", but got "+E),y[0])}});for(var x=0;x<l;++x){var m="r",p=0;x%2===1?m="l":x>0&&g&&(p=1),n[x]={type:"align",align:m,pregap:p,postgap:0}}return a.colSeparationType=g?"align":"alignat",a};ei({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=La(e[0]),n=t?[e[0]]:We(e[0],"ordgroup").body,r=n.map(function(a){var o=S0(a),l=o.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new fe("Unknown column alignment: "+l,a)}),s={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Hi(i.parser,s,D0(i.envName))},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,"lcr".indexOf(t)===-1)throw new fe("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var s=Hi(i.parser,n,D0(i.envName)),a=Math.max(0,...s.body.map(o=>o.length));return s.cols=new Array(a).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[s],left:e[0],right:e[1],rightColor:void 0}:s},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=Hi(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=La(e[0]),n=t?[e[0]]:We(e[0],"ordgroup").body,r=n.map(function(a){var o=S0(a),l=o.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new fe("Unknown column alignment: "+l,a)});if(r.length>1)throw new fe("{subarray} can contain only one column");var s={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5};if(s=Hi(i.parser,s,"script"),s.body.length>0&&s.body[0].length>1)throw new fe("{subarray} can contain only one column");return s},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Hi(i.parser,e,D0(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.indexOf("r")>-1?".":"\\{",right:i.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:yh,htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){Ue.contains(["gather","gather*"],i.envName)&&za(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:C0(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return Hi(i.parser,e,"display")},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:yh,htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){za(i);var e={autoTag:C0(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return Hi(i.parser,e,"display")},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["CD"],props:{numArgs:0},handler(i){return za(i),v3(i.parser)},htmlBuilder:ti,mathmlBuilder:ni});S("\\nonumber","\\gdef\\@eqnsw{0}");S("\\notag","\\nonumber");be({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new fe(i.funcName+" valid only within array environment")}});var Fc=xh;be({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new fe("Invalid environment name",r);for(var s="",a=0;a<r.body.length;++a)s+=We(r.body[a],"textord").text;if(n==="\\begin"){if(!Fc.hasOwnProperty(s))throw new fe("No such environment: "+s,r);var o=Fc[s],{args:l,optArgs:c}=t.parseArguments("\\begin{"+s+"}",o),u={mode:t.mode,envName:s,parser:t},d=o.handler(u,l,c);t.expect("\\end",!1);var h=t.nextToken,g=We(t.parseFunction(),"environment");if(g.name!==s)throw new fe("Mismatch: \\begin{"+s+"} matched by \\end{"+g.name+"}",h);return d}return{type:"environment",mode:t.mode,name:s,nameGroup:r}}});var bh=(i,e)=>{var t=i.font,n=e.withFont(t);return nt(i.body,n)},wh=(i,e)=>{var t=i.font,n=e.withFont(t);return ht(i.body,n)},Oc={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};be({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=ya(e[0]),s=n;return s in Oc&&(s=Oc[s]),{type:"font",mode:t.mode,font:s.slice(1),body:r}},htmlBuilder:bh,mathmlBuilder:wh});be({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0],r=Ue.isCharacterBox(n);return{type:"mclass",mode:t.mode,mclass:Ra(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:r}}});be({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:s}=t,a=t.parseExpression(!0,r),o="math"+n.slice(1);return{type:"font",mode:s,font:o,body:{type:"ordgroup",mode:t.mode,body:a}}},htmlBuilder:bh,mathmlBuilder:wh});var Sh=(i,e)=>{var t=e;return i==="display"?t=t.id>=ze.SCRIPT.id?t.text():ze.DISPLAY:i==="text"&&t.size===ze.DISPLAY.size?t=ze.TEXT:i==="script"?t=ze.SCRIPT:i==="scriptscript"&&(t=ze.SCRIPTSCRIPT),t},L0=(i,e)=>{var t=Sh(i.size,e.style),n=t.fracNum(),r=t.fracDen(),s;s=e.havingStyle(n);var a=nt(i.numer,s,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;a.height=a.height<o?o:a.height,a.depth=a.depth<l?l:a.depth}s=e.havingStyle(r);var c=nt(i.denom,s,e),u,d,h;i.hasBarLine?(i.barSize?(d=yt(i.barSize,e),u=q.makeLineSpan("frac-line",e,d)):u=q.makeLineSpan("frac-line",e),d=u.height,h=u.height):(u=null,d=0,h=e.fontMetrics().defaultRuleThickness);var g,x,m;t.size===ze.DISPLAY.size||i.size==="display"?(g=e.fontMetrics().num1,d>0?x=3*h:x=7*h,m=e.fontMetrics().denom1):(d>0?(g=e.fontMetrics().num2,x=h):(g=e.fontMetrics().num3,x=3*h),m=e.fontMetrics().denom2);var p;if(u){var T=e.fontMetrics().axisHeight;g-a.depth-(T+.5*d)<x&&(g+=x-(g-a.depth-(T+.5*d))),T-.5*d-(c.height-m)<x&&(m+=x-(T-.5*d-(c.height-m)));var w=-(T-.5*d);p=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:m},{type:"elem",elem:u,shift:w},{type:"elem",elem:a,shift:-g}]},e)}else{var y=g-a.depth-(c.height-m);y<x&&(g+=.5*(x-y),m+=.5*(x-y)),p=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:m},{type:"elem",elem:a,shift:-g}]},e)}s=e.havingStyle(t),p.height*=s.sizeMultiplier/e.sizeMultiplier,p.depth*=s.sizeMultiplier/e.sizeMultiplier;var b;t.size===ze.DISPLAY.size?b=e.fontMetrics().delim1:t.size===ze.SCRIPTSCRIPT.size?b=e.havingStyle(ze.SCRIPT).fontMetrics().delim2:b=e.fontMetrics().delim2;var E,z;return i.leftDelim==null?E=gs(e,["mopen"]):E=xi.customSizedDelim(i.leftDelim,b,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?z=q.makeSpan([]):i.rightDelim==null?z=gs(e,["mclose"]):z=xi.customSizedDelim(i.rightDelim,b,!0,e.havingStyle(t),i.mode,["mclose"]),q.makeSpan(["mord"].concat(s.sizingClasses(e)),[E,q.makeSpan(["mfrac"],[p]),z],e)},R0=(i,e)=>{var t=new he.MathNode("mfrac",[ht(i.numer,e),ht(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=yt(i.barSize,e);t.setAttribute("linethickness",xe(n))}var r=Sh(i.size,e.style);if(r.size!==e.style.size){t=new he.MathNode("mstyle",[t]);var s=r.size===ze.DISPLAY.size?"true":"false";t.setAttribute("displaystyle",s),t.setAttribute("scriptlevel","0")}if(i.leftDelim!=null||i.rightDelim!=null){var a=[];if(i.leftDelim!=null){var o=new he.MathNode("mo",[new he.TextNode(i.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),a.push(o)}if(a.push(t),i.rightDelim!=null){var l=new he.MathNode("mo",[new he.TextNode(i.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),a.push(l)}return b0(a)}return t};be({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],s=e[1],a,o=null,l=null,c="auto";switch(n){case"\\dfrac":case"\\frac":case"\\tfrac":a=!0;break;case"\\\\atopfrac":a=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":a=!1,o="(",l=")";break;case"\\\\bracefrac":a=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":a=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\dfrac":case"\\dbinom":c="display";break;case"\\tfrac":case"\\tbinom":c="text";break}return{type:"genfrac",mode:t.mode,continued:!1,numer:r,denom:s,hasBarLine:a,leftDelim:o,rightDelim:l,size:c,barSize:null}},htmlBuilder:L0,mathmlBuilder:R0});be({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],s=e[1];return{type:"genfrac",mode:t.mode,continued:!0,numer:r,denom:s,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});be({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var Uc=["display","text","script","scriptscript"],Gc=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};be({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],s=ya(e[0]),a=s.type==="atom"&&s.family==="open"?Gc(s.text):null,o=ya(e[1]),l=o.type==="atom"&&o.family==="close"?Gc(o.text):null,c=We(e[2],"size"),u,d=null;c.isBlank?u=!0:(d=c.value,u=d.number>0);var h="auto",g=e[3];if(g.type==="ordgroup"){if(g.body.length>0){var x=We(g.body[0],"textord");h=Uc[Number(x.text)]}}else g=We(g,"textord"),h=Uc[Number(g.text)];return{type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:u,barSize:d,leftDelim:a,rightDelim:l,size:h}},htmlBuilder:L0,mathmlBuilder:R0});be({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:We(e[0],"size").value,token:r}}});be({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],s=l2(We(e[1],"infix").size),a=e[2],o=s.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:a,continued:!1,hasBarLine:o,barSize:s,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:L0,mathmlBuilder:R0});var Mh=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?nt(i.sup,e.havingStyle(t.sup()),e):nt(i.sub,e.havingStyle(t.sub()),e),r=We(i.base,"horizBrace")):r=We(i,"horizBrace");var s=nt(r.base,e.havingBaseStyle(ze.DISPLAY)),a=wi.svgSpan(r,e),o;if(r.isOver?(o=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]},e),o.children[0].children[0].children[1].classes.push("svg-align")):(o=q.makeVList({positionType:"bottom",positionData:s.depth+.1+a.height,children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]},e),o.children[0].children[0].children[0].classes.push("svg-align")),n){var l=q.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e);r.isOver?o=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]},e):o=q.makeVList({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]},e)}return q.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e)},P3=(i,e)=>{var t=wi.mathMLnode(i.label);return new he.MathNode(i.isOver?"mover":"munder",[ht(i.base,e),t])};be({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:/^\\over/.test(n),base:e[0]}},htmlBuilder:Mh,mathmlBuilder:P3});be({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=We(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:St(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=It(i.body,e,!1);return q.makeAnchor(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Ui(i.body,e);return t instanceof Rn||(t=new Rn("mrow",[t])),t.setAttribute("href",i.href),t}});be({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=We(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],s=0;s<n.length;s++){var a=n[s];a==="~"&&(a="\\textasciitilde"),r.push({type:"textord",mode:"text",text:a})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:St(o)}}});be({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:St(e[0])}},htmlBuilder(i,e){var t=It(i.body,e,!1);return q.makeFragment(t)},mathmlBuilder(i,e){return new he.MathNode("mrow",dn(i.body,e))}});be({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,s=We(e[0],"raw").string,a=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=s,o={command:"\\htmlClass",class:s};break;case"\\htmlId":l.id=s,o={command:"\\htmlId",id:s};break;case"\\htmlStyle":l.style=s,o={command:"\\htmlStyle",style:s};break;case"\\htmlData":{for(var c=s.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length!==2)throw new fe("Error parsing key-value for \\htmlData");l["data-"+d[0].trim()]=d[1].trim()}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:St(a)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=It(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=q.makeSpan(n,t,e);for(var s in i.attributes)s!=="class"&&i.attributes.hasOwnProperty(s)&&r.setAttribute(s,i.attributes[s]);return r},mathmlBuilder:(i,e)=>Ui(i.body,e)});be({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:St(e[0]),mathml:St(e[1])}},htmlBuilder:(i,e)=>{var t=It(i.html,e,!1);return q.makeFragment(t)},mathmlBuilder:(i,e)=>Ui(i.mathml,e)});var Io=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new fe("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!Vu(n))throw new fe("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};be({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},s={number:.9,unit:"em"},a={number:0,unit:"em"},o="";if(t[0])for(var l=We(t[0],"raw").string,c=l.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length===2){var h=d[1].trim();switch(d[0].trim()){case"alt":o=h;break;case"width":r=Io(h);break;case"height":s=Io(h);break;case"totalheight":a=Io(h);break;default:throw new fe("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var g=We(e[0],"url").url;return o===""&&(o=g,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:g})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:s,totalheight:a,src:g}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=yt(i.height,e),n=0;i.totalheight.number>0&&(n=yt(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=yt(i.width,e));var s={height:xe(t+n)};r>0&&(s.width=xe(r)),n>0&&(s.verticalAlign=xe(-n));var a=new P2(i.src,i.alt,s);return a.height=t,a.depth=n,a},mathmlBuilder:(i,e)=>{var t=new he.MathNode("mglyph",[]);t.setAttribute("alt",i.alt);var n=yt(i.height,e),r=0;if(i.totalheight.number>0&&(r=yt(i.totalheight,e)-n,t.setAttribute("valign",xe(-r))),t.setAttribute("height",xe(n+r)),i.width.number>0){var s=yt(i.width,e);t.setAttribute("width",xe(s))}return t.setAttribute("src",i.src),t}});be({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=We(e[0],"size");if(t.settings.strict){var s=n[1]==="m",a=r.value.unit==="mu";s?(a||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):a&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return q.makeGlue(i.dimension,e)},mathmlBuilder(i,e){var t=yt(i.dimension,e);return new he.SpaceNode(t)}});be({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=q.makeSpan([],[nt(i.body,e)]),t=q.makeSpan(["inner"],[t],e)):t=q.makeSpan(["inner"],[nt(i.body,e)]);var n=q.makeSpan(["fix"],[]),r=q.makeSpan([i.alignment],[t,n],e),s=q.makeSpan(["strut"]);return s.style.height=xe(r.height+r.depth),r.depth&&(s.style.verticalAlign=xe(-r.depth)),r.children.unshift(s),r=q.makeSpan(["thinbox"],[r],e),q.makeSpan(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new he.MathNode("mpadded",[ht(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});be({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var s=t==="\\("?"\\)":"$",a=n.parseExpression(!1,s);return n.expect(s),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",body:a}}});be({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new fe("Mismatched "+i.funcName)}});var Hc=(i,e)=>{switch(e.style.size){case ze.DISPLAY.size:return i.display;case ze.TEXT.size:return i.text;case ze.SCRIPT.size:return i.script;case ze.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};be({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:St(e[0]),text:St(e[1]),script:St(e[2]),scriptscript:St(e[3])}},htmlBuilder:(i,e)=>{var t=Hc(i,e),n=It(t,e,!1);return q.makeFragment(n)},mathmlBuilder:(i,e)=>{var t=Hc(i,e);return Ui(t,e)}});var Th=(i,e,t,n,r,s,a)=>{i=q.makeSpan([],[i]);var o=t&&Ue.isCharacterBox(t),l,c;if(e){var u=nt(e,n.havingStyle(r.sup()),n);c={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-u.depth)}}if(t){var d=nt(t,n.havingStyle(r.sub()),n);l={elem:d,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-d.height)}}var h;if(c&&l){var g=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+a;h=q.makeVList({positionType:"bottom",positionData:g,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:xe(-s)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:xe(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else if(l){var x=i.height-a;h=q.makeVList({positionType:"top",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:xe(-s)},{type:"kern",size:l.kern},{type:"elem",elem:i}]},n)}else if(c){var m=i.depth+a;h=q.makeVList({positionType:"bottom",positionData:m,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:xe(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else return i;var p=[h];if(l&&s!==0&&!o){var y=q.makeSpan(["mspace"],[],n);y.style.marginRight=xe(s),p.unshift(y)}return q.makeSpan(["mop","op-limits"],p,n)},Ah=["\\smallint"],Xr=(i,e)=>{var t,n,r=!1,s;i.type==="supsub"?(t=i.sup,n=i.sub,s=We(i.base,"op"),r=!0):s=We(i,"op");var a=e.style,o=!1;a.size===ze.DISPLAY.size&&s.symbol&&!Ue.contains(Ah,s.name)&&(o=!0);var l;if(s.symbol){var c=o?"Size2-Regular":"Size1-Regular",u="";if((s.name==="\\oiint"||s.name==="\\oiiint")&&(u=s.name.slice(1),s.name=u==="oiint"?"\\iint":"\\iiint"),l=q.makeSymbol(s.name,c,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),u.length>0){var d=l.italic,h=q.staticSvg(u+"Size"+(o?"2":"1"),e);l=q.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:h,shift:o?.08:0}]},e),s.name="\\"+u,l.classes.unshift("mop"),l.italic=d}}else if(s.body){var g=It(s.body,e,!0);g.length===1&&g[0]instanceof Nn?(l=g[0],l.classes[0]="mop"):l=q.makeSpan(["mop"],g,e)}else{for(var x=[],m=1;m<s.name.length;m++)x.push(q.mathsym(s.name[m],s.mode,e));l=q.makeSpan(["mop"],x,e)}var p=0,y=0;return(l instanceof Nn||s.name==="\\oiint"||s.name==="\\oiiint")&&!s.suppressBaseShift&&(p=(l.height-l.depth)/2-e.fontMetrics().axisHeight,y=l.italic),r?Th(l,t,n,e,a,y,p):(p&&(l.style.position="relative",l.style.top=xe(p)),l)},ws=(i,e)=>{var t;if(i.symbol)t=new Rn("mo",[Bn(i.name,i.mode)]),Ue.contains(Ah,i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new Rn("mo",dn(i.body,e));else{t=new Rn("mi",[new ls(i.name.slice(1))]);var n=new Rn("mo",[Bn("⁡","text")]);i.parentIsSupSub?t=new Rn("mrow",[t,n]):t=eh([t,n])}return t},z3={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};be({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=z3[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Xr,mathmlBuilder:ws});be({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:St(n)}},htmlBuilder:Xr,mathmlBuilder:ws});var k3={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};be({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Xr,mathmlBuilder:ws});be({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Xr,mathmlBuilder:ws});be({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=k3[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Xr,mathmlBuilder:ws});var Eh=(i,e)=>{var t,n,r=!1,s;i.type==="supsub"?(t=i.sup,n=i.sub,s=We(i.base,"operatorname"),r=!0):s=We(i,"operatorname");var a;if(s.body.length>0){for(var o=s.body.map(d=>{var h=d.text;return typeof h=="string"?{type:"textord",mode:d.mode,text:h}:d}),l=It(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var u=l[c];u instanceof Nn&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}a=q.makeSpan(["mop"],l,e)}else a=q.makeSpan(["mop"],[],e);return r?Th(a,t,n,e,e.style,0,0):a},I3=(i,e)=>{for(var t=dn(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var s=t[r];if(!(s instanceof he.SpaceNode))if(s instanceof he.MathNode)switch(s.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var a=s.children[0];s.children.length===1&&a instanceof he.TextNode?a.text=a.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(u=>u.toText()).join("");t=[new he.TextNode(o)]}var l=new he.MathNode("mi",t);l.setAttribute("mathvariant","normal");var c=new he.MathNode("mo",[Bn("⁡","text")]);return i.parentIsSupSub?new he.MathNode("mrow",[l,c]):he.newDocumentFragment([l,c])};be({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:St(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Eh,mathmlBuilder:I3});S("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");mr({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?q.makeFragment(It(i.body,e,!1)):q.makeSpan(["mord"],It(i.body,e,!0),e)},mathmlBuilder(i,e){return Ui(i.body,e,!0)}});be({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=nt(i.body,e.havingCrampedStyle()),n=q.makeLineSpan("overline-line",e),r=e.fontMetrics().defaultRuleThickness,s=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]},e);return q.makeSpan(["mord","overline"],[s],e)},mathmlBuilder(i,e){var t=new he.MathNode("mo",[new he.TextNode("‾")]);t.setAttribute("stretchy","true");var n=new he.MathNode("mover",[ht(i.body,e),t]);return n.setAttribute("accent","true"),n}});be({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:St(n)}},htmlBuilder:(i,e)=>{var t=It(i.body,e.withPhantom(),!1);return q.makeFragment(t)},mathmlBuilder:(i,e)=>{var t=dn(i.body,e);return new he.MathNode("mphantom",t)}});be({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"hphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=q.makeSpan([],[nt(i.body,e.withPhantom())]);if(t.height=0,t.depth=0,t.children)for(var n=0;n<t.children.length;n++)t.children[n].height=0,t.children[n].depth=0;return t=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e),q.makeSpan(["mord"],[t],e)},mathmlBuilder:(i,e)=>{var t=dn(St(i.body),e),n=new he.MathNode("mphantom",t),r=new he.MathNode("mpadded",[n]);return r.setAttribute("height","0px"),r.setAttribute("depth","0px"),r}});be({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=q.makeSpan(["inner"],[nt(i.body,e.withPhantom())]),n=q.makeSpan(["fix"],[]);return q.makeSpan(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=dn(St(i.body),e),n=new he.MathNode("mphantom",t),r=new he.MathNode("mpadded",[n]);return r.setAttribute("width","0px"),r}});be({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=We(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=nt(i.body,e),n=yt(i.dy,e);return q.makeVList({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(i,e){var t=new he.MathNode("mpadded",[ht(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});be({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});be({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],s=We(e[0],"size"),a=We(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&We(r,"size").value,width:s.value,height:a.value}},htmlBuilder(i,e){var t=q.makeSpan(["mord","rule"],[],e),n=yt(i.width,e),r=yt(i.height,e),s=i.shift?yt(i.shift,e):0;return t.style.borderRightWidth=xe(n),t.style.borderTopWidth=xe(r),t.style.bottom=xe(s),t.width=n,t.height=r+s,t.depth=-s,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=yt(i.width,e),n=yt(i.height,e),r=i.shift?yt(i.shift,e):0,s=e.color&&e.getColor()||"black",a=new he.MathNode("mspace");a.setAttribute("mathbackground",s),a.setAttribute("width",xe(t)),a.setAttribute("height",xe(n));var o=new he.MathNode("mpadded",[a]);return r>=0?o.setAttribute("height",xe(r)):(o.setAttribute("height",xe(r)),o.setAttribute("depth",xe(-r))),o.setAttribute("voffset",xe(r)),o}});function Ch(i,e,t){for(var n=It(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,s=0;s<n.length;s++){var a=n[s].classes.indexOf("sizing");a<0?Array.prototype.push.apply(n[s].classes,e.sizingClasses(t)):n[s].classes[a+1]==="reset-size"+e.size&&(n[s].classes[a+1]="reset-size"+t.size),n[s].height*=r,n[s].depth*=r}return q.makeFragment(n)}var Vc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],N3=(i,e)=>{var t=e.havingSize(i.size);return Ch(i.body,t,e)};be({type:"sizing",names:Vc,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,s=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:Vc.indexOf(n)+1,body:s}},htmlBuilder:N3,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=dn(i.body,t),r=new he.MathNode("mstyle",n);return r.setAttribute("mathsize",xe(t.sizeMultiplier)),r}});be({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,s=!1,a=t[0]&&We(t[0],"ordgroup");if(a)for(var o="",l=0;l<a.body.length;++l){var c=a.body[l];if(o=c.text,o==="t")r=!0;else if(o==="b")s=!0;else{r=!1,s=!1;break}}else r=!0,s=!0;var u=e[0];return{type:"smash",mode:n.mode,body:u,smashHeight:r,smashDepth:s}},htmlBuilder:(i,e)=>{var t=q.makeSpan([],[nt(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0,t.children))for(var n=0;n<t.children.length;n++)t.children[n].height=0;if(i.smashDepth&&(t.depth=0,t.children))for(var r=0;r<t.children.length;r++)t.children[r].depth=0;var s=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e);return q.makeSpan(["mord"],[s],e)},mathmlBuilder:(i,e)=>{var t=new he.MathNode("mpadded",[ht(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});be({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],s=e[0];return{type:"sqrt",mode:n.mode,body:s,index:r}},htmlBuilder(i,e){var t=nt(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=q.wrapFragment(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,s=r;e.style.id<ze.TEXT.id&&(s=e.fontMetrics().xHeight);var a=r+s/4,o=t.height+t.depth+a+r,{span:l,ruleWidth:c,advanceWidth:u}=xi.sqrtImage(o,e),d=l.height-c;d>t.height+t.depth+a&&(a=(a+d-t.height-t.depth)/2);var h=l.height-t.height-a-c;t.style.paddingLeft=xe(u);var g=q.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+h)},{type:"elem",elem:l},{type:"kern",size:c}]},e);if(i.index){var x=e.havingStyle(ze.SCRIPTSCRIPT),m=nt(i.index,x,e),p=.6*(g.height-g.depth),y=q.makeVList({positionType:"shift",positionData:-p,children:[{type:"elem",elem:m}]},e),T=q.makeSpan(["root"],[y]);return q.makeSpan(["mord","sqrt"],[T,g],e)}else return q.makeSpan(["mord","sqrt"],[g],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new he.MathNode("mroot",[ht(t,e),ht(n,e)]):new he.MathNode("msqrt",[ht(t,e)])}});var Wc={display:ze.DISPLAY,text:ze.TEXT,script:ze.SCRIPT,scriptscript:ze.SCRIPTSCRIPT};be({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,s=r.parseExpression(!0,t),a=n.slice(1,n.length-5);return{type:"styling",mode:r.mode,style:a,body:s}},htmlBuilder(i,e){var t=Wc[i.style],n=e.havingStyle(t).withFont("");return Ch(i.body,n,e)},mathmlBuilder(i,e){var t=Wc[i.style],n=e.havingStyle(t),r=dn(i.body,n),s=new he.MathNode("mstyle",r),a={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=a[i.style];return s.setAttribute("scriptlevel",o[0]),s.setAttribute("displaystyle",o[1]),s}});var B3=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===ze.DISPLAY.size||n.alwaysHandleSupSub);return r?Xr:null}else if(n.type==="operatorname"){var s=n.alwaysHandleSupSub&&(t.style.size===ze.DISPLAY.size||n.limits);return s?Eh:null}else{if(n.type==="accent")return Ue.isCharacterBox(n.base)?M0:null;if(n.type==="horizBrace"){var a=!e.sub;return a===n.isOver?Mh:null}else return null}else return null};mr({type:"supsub",htmlBuilder(i,e){var t=B3(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:s}=i,a=nt(n,e),o,l,c=e.fontMetrics(),u=0,d=0,h=n&&Ue.isCharacterBox(n);if(r){var g=e.havingStyle(e.style.sup());o=nt(r,g,e),h||(u=a.height-g.fontMetrics().supDrop*g.sizeMultiplier/e.sizeMultiplier)}if(s){var x=e.havingStyle(e.style.sub());l=nt(s,x,e),h||(d=a.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var m;e.style===ze.DISPLAY?m=c.sup1:e.style.cramped?m=c.sup3:m=c.sup2;var p=e.sizeMultiplier,y=xe(.5/c.ptPerEm/p),T=null;if(l){var w=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");(a instanceof Nn||w)&&(T=xe(-a.italic))}var b;if(o&&l){u=Math.max(u,m,o.depth+.25*c.xHeight),d=Math.max(d,c.sub2);var E=c.defaultRuleThickness,z=4*E;if(u-o.depth-(l.height-d)<z){d=z-(u-o.depth)+l.height;var k=.8*c.xHeight-(u-o.depth);k>0&&(u+=k,d-=k)}var M=[{type:"elem",elem:l,shift:d,marginRight:y,marginLeft:T},{type:"elem",elem:o,shift:-u,marginRight:y}];b=q.makeVList({positionType:"individualShift",children:M},e)}else if(l){d=Math.max(d,c.sub1,l.height-.8*c.xHeight);var D=[{type:"elem",elem:l,marginLeft:T,marginRight:y}];b=q.makeVList({positionType:"shift",positionData:d,children:D},e)}else if(o)u=Math.max(u,m,o.depth+.25*c.xHeight),b=q.makeVList({positionType:"shift",positionData:-u,children:[{type:"elem",elem:o,marginRight:y}]},e);else throw new Error("supsub must have either sup or sub.");var F=i0(a,"right")||"mord";return q.makeSpan([F],[a,q.makeSpan(["msupsub"],[b])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var s=[ht(i.base,e)];i.sub&&s.push(ht(i.sub,e)),i.sup&&s.push(ht(i.sup,e));var a;if(t)a=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===ze.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===ze.DISPLAY||c.limits)?a="munderover":a="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===ze.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===ze.DISPLAY)?a="munder":a="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===ze.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===ze.DISPLAY)?a="mover":a="msup"}return new he.MathNode(a,s)}});mr({type:"atom",htmlBuilder(i,e){return q.mathsym(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new he.MathNode("mo",[Bn(i.text,i.mode)]);if(i.family==="bin"){var n=w0(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var Dh={mi:"italic",mn:"normal",mtext:"normal"};mr({type:"mathord",htmlBuilder(i,e){return q.makeOrd(i,e,"mathord")},mathmlBuilder(i,e){var t=new he.MathNode("mi",[Bn(i.text,i.mode,e)]),n=w0(i,e)||"italic";return n!==Dh[t.type]&&t.setAttribute("mathvariant",n),t}});mr({type:"textord",htmlBuilder(i,e){return q.makeOrd(i,e,"textord")},mathmlBuilder(i,e){var t=Bn(i.text,i.mode,e),n=w0(i,e)||"normal",r;return i.mode==="text"?r=new he.MathNode("mtext",[t]):/[0-9]/.test(i.text)?r=new he.MathNode("mn",[t]):i.text==="\\prime"?r=new he.MathNode("mo",[t]):r=new he.MathNode("mi",[t]),n!==Dh[r.type]&&r.setAttribute("mathvariant",n),r}});var No={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Bo={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};mr({type:"spacing",htmlBuilder(i,e){if(Bo.hasOwnProperty(i.text)){var t=Bo[i.text].className||"";if(i.mode==="text"){var n=q.makeOrd(i,e,"textord");return n.classes.push(t),n}else return q.makeSpan(["mspace",t],[q.mathsym(i.text,i.mode,e)],e)}else{if(No.hasOwnProperty(i.text))return q.makeSpan(["mspace",No[i.text]],[],e);throw new fe('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(Bo.hasOwnProperty(i.text))t=new he.MathNode("mtext",[new he.TextNode(" ")]);else{if(No.hasOwnProperty(i.text))return new he.MathNode("mspace");throw new fe('Unknown type of space "'+i.text+'"')}return t}});var qc=()=>{var i=new he.MathNode("mtd",[]);return i.setAttribute("width","50%"),i};mr({type:"tag",mathmlBuilder(i,e){var t=new he.MathNode("mtable",[new he.MathNode("mtr",[qc(),new he.MathNode("mtd",[Ui(i.body,e)]),qc(),new he.MathNode("mtd",[Ui(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Xc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},jc={"\\textbf":"textbf","\\textmd":"textmd"},F3={"\\textit":"textit","\\textup":"textup"},Yc=(i,e)=>{var t=i.font;return t?Xc[t]?e.withTextFontFamily(Xc[t]):jc[t]?e.withTextFontWeight(jc[t]):e.withTextFontShape(F3[t]):e};be({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:St(r),font:n}},htmlBuilder(i,e){var t=Yc(i,e),n=It(i.body,t,!0);return q.makeSpan(["mord","text"],n,t)},mathmlBuilder(i,e){var t=Yc(i,e);return Ui(i.body,t)}});be({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=nt(i.body,e),n=q.makeLineSpan("underline-line",e),r=e.fontMetrics().defaultRuleThickness,s=q.makeVList({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]},e);return q.makeSpan(["mord","underline"],[s],e)},mathmlBuilder(i,e){var t=new he.MathNode("mo",[new he.TextNode("‾")]);t.setAttribute("stretchy","true");var n=new he.MathNode("munder",[ht(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});be({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=nt(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return q.makeVList({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(i,e){return new he.MathNode("mpadded",[ht(i.body,e)],["vcenter"])}});be({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new fe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=Zc(i),n=[],r=e.havingStyle(e.style.text()),s=0;s<t.length;s++){var a=t[s];a==="~"&&(a="\\textasciitilde"),n.push(q.makeSymbol(a,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return q.makeSpan(["mord","text"].concat(r.sizingClasses(e)),q.tryCombineChars(n),r)},mathmlBuilder(i,e){var t=new he.TextNode(Zc(i)),n=new he.MathNode("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var Zc=i=>i.body.replace(/ /g,i.star?"␣":" "),ki=Ju,Lh=`[ \r
	]`,O3="\\\\[a-zA-Z@]+",U3="\\\\[^\uD800-\uDFFF]",G3="("+O3+")"+Lh+"*",H3=`\\\\(
|[ \r	]+
?)[ \r	]*`,o0="[̀-ͯ]",V3=new RegExp(o0+"+$"),W3="("+Lh+"+)|"+(H3+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(o0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(o0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+G3)+("|"+U3+")");class $c{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(W3,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new kn("EOF",new bn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new fe("Unexpected character: '"+e[t]+"'",new kn(e[t],new bn(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var s=e.indexOf(`
`,this.tokenRegex.lastIndex);return s===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=s+1,this.lex()}return new kn(r,new bn(this,t,this.tokenRegex.lastIndex))}}class q3{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new fe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var s=this.undefStack[this.undefStack.length-1];s&&!s.hasOwnProperty(e)&&(s[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var X3=_h;S("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});S("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});S("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});S("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});S("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});S("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");S("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var Kc={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};S("\\char",function(i){var e=i.popToken(),t,n="";if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new fe("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=Kc[e.text],n==null||n>=t)throw new fe("Invalid base-"+t+" digit "+e.text);for(var r;(r=Kc[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var P0=(i,e,t)=>{var n=i.consumeArg().tokens;if(n.length!==1)throw new fe("\\newcommand's first argument must be a macro name");var r=n[0].text,s=i.isDefined(r);if(s&&!e)throw new fe("\\newcommand{"+r+"} attempting to redefine "+(r+"; use \\renewcommand"));if(!s&&!t)throw new fe("\\renewcommand{"+r+"} when command "+r+" does not yet exist; use \\newcommand");var a=0;if(n=i.consumeArg().tokens,n.length===1&&n[0].text==="["){for(var o="",l=i.expandNextToken();l.text!=="]"&&l.text!=="EOF";)o+=l.text,l=i.expandNextToken();if(!o.match(/^\s*[0-9]+\s*$/))throw new fe("Invalid number of arguments: "+o);a=parseInt(o),n=i.consumeArg().tokens}return i.macros.set(r,{tokens:n,numArgs:a}),""};S("\\newcommand",i=>P0(i,!1,!0));S("\\renewcommand",i=>P0(i,!0,!1));S("\\providecommand",i=>P0(i,!0,!0));S("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});S("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});S("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),ki[t],ft.math[t],ft.text[t]),""});S("\\bgroup","{");S("\\egroup","}");S("~","\\nobreakspace");S("\\lq","`");S("\\rq","'");S("\\aa","\\r a");S("\\AA","\\r A");S("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");S("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");S("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");S("ℬ","\\mathscr{B}");S("ℰ","\\mathscr{E}");S("ℱ","\\mathscr{F}");S("ℋ","\\mathscr{H}");S("ℐ","\\mathscr{I}");S("ℒ","\\mathscr{L}");S("ℳ","\\mathscr{M}");S("ℛ","\\mathscr{R}");S("ℭ","\\mathfrak{C}");S("ℌ","\\mathfrak{H}");S("ℨ","\\mathfrak{Z}");S("\\Bbbk","\\Bbb{k}");S("·","\\cdotp");S("\\llap","\\mathllap{\\textrm{#1}}");S("\\rlap","\\mathrlap{\\textrm{#1}}");S("\\clap","\\mathclap{\\textrm{#1}}");S("\\mathstrut","\\vphantom{(}");S("\\underbar","\\underline{\\text{#1}}");S("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');S("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");S("\\ne","\\neq");S("≠","\\neq");S("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");S("∉","\\notin");S("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");S("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");S("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");S("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");S("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");S("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");S("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");S("⟂","\\perp");S("‼","\\mathclose{!\\mkern-0.8mu!}");S("∌","\\notni");S("⌜","\\ulcorner");S("⌝","\\urcorner");S("⌞","\\llcorner");S("⌟","\\lrcorner");S("©","\\copyright");S("®","\\textregistered");S("️","\\textregistered");S("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');S("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');S("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');S("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');S("\\vdots","\\mathord{\\varvdots\\rule{0pt}{15pt}}");S("⋮","\\vdots");S("\\varGamma","\\mathit{\\Gamma}");S("\\varDelta","\\mathit{\\Delta}");S("\\varTheta","\\mathit{\\Theta}");S("\\varLambda","\\mathit{\\Lambda}");S("\\varXi","\\mathit{\\Xi}");S("\\varPi","\\mathit{\\Pi}");S("\\varSigma","\\mathit{\\Sigma}");S("\\varUpsilon","\\mathit{\\Upsilon}");S("\\varPhi","\\mathit{\\Phi}");S("\\varPsi","\\mathit{\\Psi}");S("\\varOmega","\\mathit{\\Omega}");S("\\substack","\\begin{subarray}{c}#1\\end{subarray}");S("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");S("\\boxed","\\fbox{$\\displaystyle{#1}$}");S("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");S("\\implies","\\DOTSB\\;\\Longrightarrow\\;");S("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");var Jc={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};S("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in Jc?e=Jc[t]:(t.slice(0,4)==="\\not"||t in ft.math&&Ue.contains(["bin","rel"],ft.math[t].group))&&(e="\\dotsb"),e});var z0={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};S("\\dotso",function(i){var e=i.future().text;return e in z0?"\\ldots\\,":"\\ldots"});S("\\dotsc",function(i){var e=i.future().text;return e in z0&&e!==","?"\\ldots\\,":"\\ldots"});S("\\cdots",function(i){var e=i.future().text;return e in z0?"\\@cdots\\,":"\\@cdots"});S("\\dotsb","\\cdots");S("\\dotsm","\\cdots");S("\\dotsi","\\!\\cdots");S("\\dotsx","\\ldots\\,");S("\\DOTSI","\\relax");S("\\DOTSB","\\relax");S("\\DOTSX","\\relax");S("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");S("\\,","\\tmspace+{3mu}{.1667em}");S("\\thinspace","\\,");S("\\>","\\mskip{4mu}");S("\\:","\\tmspace+{4mu}{.2222em}");S("\\medspace","\\:");S("\\;","\\tmspace+{5mu}{.2777em}");S("\\thickspace","\\;");S("\\!","\\tmspace-{3mu}{.1667em}");S("\\negthinspace","\\!");S("\\negmedspace","\\tmspace-{4mu}{.2222em}");S("\\negthickspace","\\tmspace-{5mu}{.277em}");S("\\enspace","\\kern.5em ");S("\\enskip","\\hskip.5em\\relax");S("\\quad","\\hskip1em\\relax");S("\\qquad","\\hskip2em\\relax");S("\\tag","\\@ifstar\\tag@literal\\tag@paren");S("\\tag@paren","\\tag@literal{({#1})}");S("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new fe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});S("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");S("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");S("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");S("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");S("\\newline","\\\\\\relax");S("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Rh=xe(Jn["Main-Regular"]["T".charCodeAt(0)][1]-.7*Jn["Main-Regular"]["A".charCodeAt(0)][1]);S("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Rh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");S("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Rh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");S("\\hspace","\\@ifstar\\@hspacer\\@hspace");S("\\@hspace","\\hskip #1\\relax");S("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");S("\\ordinarycolon",":");S("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");S("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');S("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');S("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');S("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');S("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');S("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');S("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');S("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');S("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');S("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');S("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');S("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');S("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');S("∷","\\dblcolon");S("∹","\\eqcolon");S("≔","\\coloneqq");S("≕","\\eqqcolon");S("⩴","\\Coloneqq");S("\\ratio","\\vcentcolon");S("\\coloncolon","\\dblcolon");S("\\colonequals","\\coloneqq");S("\\coloncolonequals","\\Coloneqq");S("\\equalscolon","\\eqqcolon");S("\\equalscoloncolon","\\Eqqcolon");S("\\colonminus","\\coloneq");S("\\coloncolonminus","\\Coloneq");S("\\minuscolon","\\eqcolon");S("\\minuscoloncolon","\\Eqcolon");S("\\coloncolonapprox","\\Colonapprox");S("\\coloncolonsim","\\Colonsim");S("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");S("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");S("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");S("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");S("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");S("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");S("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");S("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");S("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");S("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");S("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");S("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");S("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");S("\\nleqq","\\html@mathml{\\@nleqq}{≰}");S("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");S("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");S("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");S("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");S("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");S("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");S("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");S("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");S("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");S("\\imath","\\html@mathml{\\@imath}{ı}");S("\\jmath","\\html@mathml{\\@jmath}{ȷ}");S("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");S("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");S("⟦","\\llbracket");S("⟧","\\rrbracket");S("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");S("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");S("⦃","\\lBrace");S("⦄","\\rBrace");S("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");S("⦵","\\minuso");S("\\darr","\\downarrow");S("\\dArr","\\Downarrow");S("\\Darr","\\Downarrow");S("\\lang","\\langle");S("\\rang","\\rangle");S("\\uarr","\\uparrow");S("\\uArr","\\Uparrow");S("\\Uarr","\\Uparrow");S("\\N","\\mathbb{N}");S("\\R","\\mathbb{R}");S("\\Z","\\mathbb{Z}");S("\\alef","\\aleph");S("\\alefsym","\\aleph");S("\\Alpha","\\mathrm{A}");S("\\Beta","\\mathrm{B}");S("\\bull","\\bullet");S("\\Chi","\\mathrm{X}");S("\\clubs","\\clubsuit");S("\\cnums","\\mathbb{C}");S("\\Complex","\\mathbb{C}");S("\\Dagger","\\ddagger");S("\\diamonds","\\diamondsuit");S("\\empty","\\emptyset");S("\\Epsilon","\\mathrm{E}");S("\\Eta","\\mathrm{H}");S("\\exist","\\exists");S("\\harr","\\leftrightarrow");S("\\hArr","\\Leftrightarrow");S("\\Harr","\\Leftrightarrow");S("\\hearts","\\heartsuit");S("\\image","\\Im");S("\\infin","\\infty");S("\\Iota","\\mathrm{I}");S("\\isin","\\in");S("\\Kappa","\\mathrm{K}");S("\\larr","\\leftarrow");S("\\lArr","\\Leftarrow");S("\\Larr","\\Leftarrow");S("\\lrarr","\\leftrightarrow");S("\\lrArr","\\Leftrightarrow");S("\\Lrarr","\\Leftrightarrow");S("\\Mu","\\mathrm{M}");S("\\natnums","\\mathbb{N}");S("\\Nu","\\mathrm{N}");S("\\Omicron","\\mathrm{O}");S("\\plusmn","\\pm");S("\\rarr","\\rightarrow");S("\\rArr","\\Rightarrow");S("\\Rarr","\\Rightarrow");S("\\real","\\Re");S("\\reals","\\mathbb{R}");S("\\Reals","\\mathbb{R}");S("\\Rho","\\mathrm{P}");S("\\sdot","\\cdot");S("\\sect","\\S");S("\\spades","\\spadesuit");S("\\sub","\\subset");S("\\sube","\\subseteq");S("\\supe","\\supseteq");S("\\Tau","\\mathrm{T}");S("\\thetasym","\\vartheta");S("\\weierp","\\wp");S("\\Zeta","\\mathrm{Z}");S("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");S("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");S("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");S("\\bra","\\mathinner{\\langle{#1}|}");S("\\ket","\\mathinner{|{#1}\\rangle}");S("\\braket","\\mathinner{\\langle{#1}\\rangle}");S("\\Bra","\\left\\langle#1\\right|");S("\\Ket","\\left|#1\\right\\rangle");var Ph=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,s=e.consumeArg().tokens,a=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=d=>h=>{i&&(h.macros.set("|",a),r.length&&h.macros.set("\\|",o));var g=d;if(!d&&r.length){var x=h.future();x.text==="|"&&(h.popToken(),g=!0)}return{tokens:g?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,u=e.expandTokens([...s,...c,...t]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};S("\\bra@ket",Ph(!1));S("\\bra@set",Ph(!0));S("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");S("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");S("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");S("\\angln","{\\angl n}");S("\\blue","\\textcolor{##6495ed}{#1}");S("\\orange","\\textcolor{##ffa500}{#1}");S("\\pink","\\textcolor{##ff00af}{#1}");S("\\red","\\textcolor{##df0030}{#1}");S("\\green","\\textcolor{##28ae7b}{#1}");S("\\gray","\\textcolor{gray}{#1}");S("\\purple","\\textcolor{##9d38bd}{#1}");S("\\blueA","\\textcolor{##ccfaff}{#1}");S("\\blueB","\\textcolor{##80f6ff}{#1}");S("\\blueC","\\textcolor{##63d9ea}{#1}");S("\\blueD","\\textcolor{##11accd}{#1}");S("\\blueE","\\textcolor{##0c7f99}{#1}");S("\\tealA","\\textcolor{##94fff5}{#1}");S("\\tealB","\\textcolor{##26edd5}{#1}");S("\\tealC","\\textcolor{##01d1c1}{#1}");S("\\tealD","\\textcolor{##01a995}{#1}");S("\\tealE","\\textcolor{##208170}{#1}");S("\\greenA","\\textcolor{##b6ffb0}{#1}");S("\\greenB","\\textcolor{##8af281}{#1}");S("\\greenC","\\textcolor{##74cf70}{#1}");S("\\greenD","\\textcolor{##1fab54}{#1}");S("\\greenE","\\textcolor{##0d923f}{#1}");S("\\goldA","\\textcolor{##ffd0a9}{#1}");S("\\goldB","\\textcolor{##ffbb71}{#1}");S("\\goldC","\\textcolor{##ff9c39}{#1}");S("\\goldD","\\textcolor{##e07d10}{#1}");S("\\goldE","\\textcolor{##a75a05}{#1}");S("\\redA","\\textcolor{##fca9a9}{#1}");S("\\redB","\\textcolor{##ff8482}{#1}");S("\\redC","\\textcolor{##f9685d}{#1}");S("\\redD","\\textcolor{##e84d39}{#1}");S("\\redE","\\textcolor{##bc2612}{#1}");S("\\maroonA","\\textcolor{##ffbde0}{#1}");S("\\maroonB","\\textcolor{##ff92c6}{#1}");S("\\maroonC","\\textcolor{##ed5fa6}{#1}");S("\\maroonD","\\textcolor{##ca337c}{#1}");S("\\maroonE","\\textcolor{##9e034e}{#1}");S("\\purpleA","\\textcolor{##ddd7ff}{#1}");S("\\purpleB","\\textcolor{##c6b9fc}{#1}");S("\\purpleC","\\textcolor{##aa87ff}{#1}");S("\\purpleD","\\textcolor{##7854ab}{#1}");S("\\purpleE","\\textcolor{##543b78}{#1}");S("\\mintA","\\textcolor{##f5f9e8}{#1}");S("\\mintB","\\textcolor{##edf2df}{#1}");S("\\mintC","\\textcolor{##e0e5cc}{#1}");S("\\grayA","\\textcolor{##f6f7f7}{#1}");S("\\grayB","\\textcolor{##f0f1f2}{#1}");S("\\grayC","\\textcolor{##e3e5e6}{#1}");S("\\grayD","\\textcolor{##d6d8da}{#1}");S("\\grayE","\\textcolor{##babec2}{#1}");S("\\grayF","\\textcolor{##888d93}{#1}");S("\\grayG","\\textcolor{##626569}{#1}");S("\\grayH","\\textcolor{##3b3e40}{#1}");S("\\grayI","\\textcolor{##21242c}{#1}");S("\\kaBlue","\\textcolor{##314453}{#1}");S("\\kaGreen","\\textcolor{##71B307}{#1}");var zh={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class j3{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new q3(X3,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new $c(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new kn("EOF",n.loc)),this.pushTokens(r),t.range(n,"")}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),s,a=0,o=0;do{if(s=this.popToken(),t.push(s),s.text==="{")++a;else if(s.text==="}"){if(--a,a===-1)throw new fe("Extra }",s)}else if(s.text==="EOF")throw new fe("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",s);if(e&&n)if((a===0||a===1&&e[o]==="{")&&s.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:s}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new fe("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var s=this.popToken();if(n[r]!==s.text)throw new fe("Use of the macro doesn't match its definition",s)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new fe("Undefined control sequence: "+n);return this.pushToken(t),t}if(this.expansionCount++,this.expansionCount>this.settings.maxExpand)throw new fe("Too many expansions: infinite loop or need to increase maxExpand setting");var s=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){s=s.slice();for(var o=s.length-1;o>=0;--o){var l=s[o];if(l.text==="#"){if(o===0)throw new fe("Incomplete placeholder at end of macro body",l);if(l=s[--o],l.text==="#")s.splice(o+1,1);else if(/^[1-9]$/.test(l.text))s.splice(o,2,...a[+l.text-1]);else throw new fe("Not a valid argument number",l)}}}return this.pushTokens(s),s}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;){var e=this.expandOnce();if(e instanceof kn)return e.treatAsRelax&&(e.text="\\relax"),this.stack.pop()}throw new Error}expandMacro(e){return this.macros.has(e)?this.expandTokens([new kn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;){var r=this.expandOnce(!0);r instanceof kn&&(r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(this.stack.pop()))}return t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var s=0;if(r.indexOf("#")!==-1)for(var a=r.replace(/##/g,"");a.indexOf("#"+(s+1))!==-1;)++s;for(var o=new $c(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var u={tokens:l,numArgs:s};return u}return r}isDefined(e){return this.macros.has(e)||ki.hasOwnProperty(e)||ft.math.hasOwnProperty(e)||ft.text.hasOwnProperty(e)||zh.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:ki.hasOwnProperty(e)&&!ki[e].primitive}}var Qc=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ia=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Fo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},eu={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class vs{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new j3(e,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new fe("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new kn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(vs.endOfExpression.indexOf(r.text)!==-1||t&&r.text===t||e&&ki[r.text]&&ki[r.text].infix)break;var s=this.parseAtom(t);if(s){if(s.type==="internal")continue}else break;n.push(s)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++)if(e[r].type==="infix"){if(t!==-1)throw new fe("only one infix operator per group",e[r].token);t=r,n=e[r].replaceWith}if(t!==-1&&n){var s,a,o=e.slice(0,t),l=e.slice(t+1);o.length===1&&o[0].type==="ordgroup"?s=o[0]:s={type:"ordgroup",mode:this.mode,body:o},l.length===1&&l[0].type==="ordgroup"?a=l[0]:a={type:"ordgroup",mode:this.mode,body:l};var c;return n==="\\\\abovefrac"?c=this.callFunction(n,[s,e[t],a],[]):c=this.callFunction(n,[s,a],[]),[c]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r=this.parseGroup(e);if(!r)throw new fe("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},s={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return s}parseAtom(e){var t=this.parseGroup("atom",e);if(this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var s=this.fetch();if(s.text==="\\limits"||s.text==="\\nolimits"){if(t&&t.type==="op"){var a=s.text==="\\limits";t.limits=a,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=s.text==="\\limits");else throw new fe("Limit controls must follow a math operator",s);this.consume()}else if(s.text==="^"){if(n)throw new fe("Double superscript",s);n=this.handleSupSubscript("superscript")}else if(s.text==="_"){if(r)throw new fe("Double subscript",s);r=this.handleSupSubscript("subscript")}else if(s.text==="'"){if(n)throw new fe("Double superscript",s);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(ia[s.text]){var c=ia[s.text],u=Qc.test(s.text);for(this.consume();;){var d=this.fetch().text;if(!ia[d]||Qc.test(d)!==u)break;this.consume(),c+=ia[d]}var h=new vs(c,this.settings).parse();u?r={type:"ordgroup",mode:"math",body:h}:n={type:"ordgroup",mode:"math",body:h}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,s=ki[r];if(!s)return null;if(this.consume(),t&&t!=="atom"&&!s.allowedInArgument)throw new fe("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!s.allowedInText)throw new fe("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&s.allowedInMath===!1)throw new fe("Can't use function '"+r+"' in math mode",n);var{args:a,optArgs:o}=this.parseArguments(r,s);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,s){var a={funcName:e,parser:this,token:r,breakOnTokenText:s},o=ki[e];if(o&&o.handler)return o.handler(a,t,n);throw new fe("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],s=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],l=a<t.numOptionalArgs;(t.primitive&&o==null||t.type==="sqrt"&&a===1&&s[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)s.push(c);else if(c!=null)r.push(c);else throw new fe("Null argument, please report this as a bug")}return{args:r,optArgs:s}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text"}:null}case"raw":{var s=this.parseStringGroup("raw",n);return s!=null?{type:"raw",mode:"text",string:s.text}:null}case"primitive":{if(n)throw new fe("A primitive argument cannot be optional");var a=this.parseGroup(e);if(a==null)throw new fe("Expected group as "+e,this.fetch());return a}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new fe("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",s;(s=this.fetch()).text!=="EOF";)r+=s.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,s="",a;(a=this.fetch()).text!=="EOF"&&e.test(s+a.text);)r=a,s+=r.text,this.consume();if(s==="")throw new fe("Invalid "+t+": '"+n.text+"'",n);return n.range(r,s)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new fe("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new fe("Invalid size: '"+t.text+"'",t);var s={number:+(r[1]+r[2]),unit:r[3]};if(!Vu(s))throw new fe("Invalid unit: '"+s.unit+"'",t);return{type:"size",mode:this.mode,value:s,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var s=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var a={type:"ordgroup",mode:this.mode,loc:n.loc,body:s};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,s;if(r==="{"||r==="\\begingroup"){this.consume();var a=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,a),l=this.fetch();this.expect(a),this.gullet.endGroup(),s={type:"ordgroup",mode:this.mode,loc:bn.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(s=this.parseFunction(t,e)||this.parseSymbol(),s==null&&r[0]==="\\"&&!zh.hasOwnProperty(r)){if(this.settings.throwOnError)throw new fe("Undefined control sequence: "+r,n);s=this.formatUnsupportedCmd(r),this.consume()}return s}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n],s=r.text;s==="-"&&e[n+1].text==="-"&&(n+1<t&&e[n+2].text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:bn.range(r,e[n+2]),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:bn.range(r,e[n+1]),text:"--"}),t-=1)),(s==="'"||s==="`")&&e[n+1].text===s&&(e.splice(n,2,{type:"textord",mode:"text",loc:bn.range(r,e[n+1]),text:s+s}),t-=1)}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new fe(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}eu.hasOwnProperty(t[0])&&!ft[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=eu[t[0]]+t.slice(1));var s=V3.exec(t);s&&(t=t.substring(0,s.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var a;if(ft[this.mode][t]){this.settings.strict&&this.mode==="math"&&n0.indexOf(t)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=ft[this.mode][t].group,l=bn.range(e),c;if(I2.hasOwnProperty(o)){var u=o;c={type:"atom",mode:this.mode,family:u,loc:l,text:t}}else c={type:o,mode:this.mode,loc:l,text:t};a=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Hu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),a={type:"textord",mode:"text",loc:bn.range(e),text:t};else return null;if(this.consume(),s)for(var d=0;d<s[0].length;d++){var h=s[0][d];if(!Fo[h])throw new fe("Unknown accent ' "+h+"'",e);var g=Fo[h][this.mode]||Fo[h].text;if(!g)throw new fe("Accent "+h+" unsupported in "+this.mode+" mode",e);a={type:"accent",mode:this.mode,loc:bn.range(e),label:g,isStretchy:!1,isShifty:!0,base:a}}return a}}vs.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var k0=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new vs(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new fe("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new kn("\\df@tag")])}]}return r},kh=function(e,t,n){t.textContent="";var r=I0(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),kh=function(){throw new fe("KaTeX doesn't work in quirks mode.")});var Y3=function(e,t){var n=I0(e,t).toMarkup();return n},Z3=function(e,t){var n=new g0(t);return k0(e,n)},Ih=function(e,t,n){if(n.throwOnError||!(e instanceof fe))throw e;var r=q.makeSpan(["katex-error"],[new Nn(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},I0=function(e,t){var n=new g0(t);try{var r=k0(e,n);return r3(r,e,n)}catch(s){return Ih(s,e,n)}},$3=function(e,t){var n=new g0(t);try{var r=k0(e,n);return s3(r,e,n)}catch(s){return Ih(s,e,n)}},K3={version:"0.16.4",render:kh,renderToString:Y3,ParseError:fe,SETTINGS_SCHEMA:ca,__parse:Z3,__renderToDomTree:I0,__renderToHTMLTree:$3,__setFontMetrics:C2,__defineSymbol:f,__defineMacro:S,__domTree:{Span:bs,Anchor:_0,SymbolNode:Nn,SvgNode:yi,PathNode:Oi,LineNode:t0}};function J3(i){let e;return{c(){e=lt("span"),this.h()},l(t){e=ct(t,"SPAN",{class:!0}),pt(e).forEach(et),this.h()},h(){Xe(e,"class","latex svelte-19rek1j")},m(t,n){_i(t,e,n),i[2](e)},p:rn,i:rn,o:rn,d(t){t&&et(e),i[2](null)}}}function Q3(i,e,t){let{text:n}=e,r;function s(a){Xt[a?"unshift":"push"](()=>{r=a,t(0,r)})}return i.$$set=a=>{"text"in a&&t(1,n=a.text)},i.$$.update=()=>{i.$$.dirty&3&&r&&K3.render(n,r)},[r,n,s]}class ra extends ur{constructor(e){super(),hr(this,e,Q3,J3,dr,{text:1})}}function ev(i){let e,t,n,r;return{c(){e=lt("input"),this.h()},l(s){e=ct(s,"INPUT",{class:!0,type:!0}),this.h()},h(){Xe(e,"class",t=i[3].class),Xe(e,"type","text")},m(s,a){_i(s,e,a),ha(e,i[0]),n||(r=[Pn(e,"input",i[7]),Pn(e,"input",au(i[1])),Pn(e,"focus",i[2])],n=!0)},p(s,[a]){a&8&&t!==(t=s[3].class)&&Xe(e,"class",t),a&1&&e.value!==s[0]&&ha(e,s[0])},i:rn,o:rn,d(s){s&&et(e),n=!1,ba(r)}}}const tv=/^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/,nv=/^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|((?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+))?\s*(?<has_imag2>i))\s*$/;function iv(i){return tv.test(i)}function rv(i,e,t){let{value:n=""}=e,{state:r=l(n)}=e;function s(h){t(5,r=h),t(4,n=`${h.re.toFixed(2)}${h.im>=0?"+":"-"}${Math.abs(h.im).toFixed(2)}i`)}let a;function o(h){const g=h.target.value;iv(a)?(t(4,n=g),t(5,r=l(n))):t(0,a=n)}function l(h){if(h==="")return hi(0);const g=nv.exec(h);if(!g||!g.groups)return hi(0);const x=g.groups;if(x.re){const p=(x.re_sign==="-"?-1:1)*parseFloat(x.re)||0;if(!x.has_imag)return hi(p);const y=x.im_sign==="-"?-1:1;if(!x.im)return hi(p,y);const T=y*parseFloat(x.im)||0;return hi(p,T)}if(x.has_imag2){const m=x.im_sign2==="-"?-1:1;if(!x.im2)return hi(0,m);const p=m*parseFloat(x.im2)||0;return hi(0,p)}return hi(0)}const c=wa();function u(){c("focus")}function d(){a=this.value,t(0,a),t(4,n)}return i.$$set=h=>{t(3,e=O0(O0({},e),U0(h))),"value"in h&&t(4,n=h.value),"state"in h&&t(5,r=h.state)},i.$$.update=()=>{i.$$.dirty&16&&t(0,a=n)},e=U0(e),[a,o,u,e,n,r,s,d]}class sa extends ur{constructor(e){super(),hr(this,e,rv,ev,dr,{value:4,state:5,setState:6})}get setState(){return this.$$.ctx[6]}}function sv(i){let e,t,n,r,s,a,o,l,c,u,d,h,g,x;function m(k){i[12](k)}let p={};i[4]!==void 0&&(p.state=i[4]),n=new sa({props:p}),i[11](n),Xt.push(()=>Li(n,"state",m)),n.$on("focus",i[13]);function y(k){i[15](k)}let T={};i[5]!==void 0&&(T.state=i[5]),a=new sa({props:T}),i[14](a),Xt.push(()=>Li(a,"state",y)),a.$on("focus",i[16]);function w(k){i[18](k)}let b={};i[6]!==void 0&&(b.state=i[6]),c=new sa({props:b}),i[17](c),Xt.push(()=>Li(c,"state",w)),c.$on("focus",i[19]);function E(k){i[21](k)}let z={};return i[7]!==void 0&&(z.state=i[7]),h=new sa({props:z}),i[20](h),Xt.push(()=>Li(h,"state",E)),h.$on("focus",i[22]),{c(){e=lt("div"),t=lt("div"),vn(n.$$.fragment),s=Kt(),vn(a.$$.fragment),l=Kt(),vn(c.$$.fragment),d=Kt(),vn(h.$$.fragment),this.h()},l(k){e=ct(k,"DIV",{class:!0});var M=pt(e);t=ct(M,"DIV",{class:!0});var D=pt(t);xn(n.$$.fragment,D),s=Jt(D),xn(a.$$.fragment,D),l=Jt(D),xn(c.$$.fragment,D),d=Jt(D),xn(h.$$.fragment,D),D.forEach(et),M.forEach(et),this.h()},h(){Xe(t,"class","matrix-input svelte-175mkfe"),Xe(e,"class","matrix-input-container svelte-175mkfe")},m(k,M){_i(k,e,M),qe(e,t),_n(n,t,null),qe(t,s),_n(a,t,null),qe(t,l),_n(c,t,null),qe(t,d),_n(h,t,null),x=!0},p(k,[M]){const D={};!r&&M&16&&(r=!0,D.state=k[4],Ri(()=>r=!1)),n.$set(D);const F={};!o&&M&32&&(o=!0,F.state=k[5],Ri(()=>o=!1)),a.$set(F);const G={};!u&&M&64&&(u=!0,G.state=k[6],Ri(()=>u=!1)),c.$set(G);const W={};!g&&M&128&&(g=!0,W.state=k[7],Ri(()=>g=!1)),h.$set(W)},i(k){x||(ln(n.$$.fragment,k),ln(a.$$.fragment,k),ln(c.$$.fragment,k),ln(h.$$.fragment,k),x=!0)},o(k){cn(n.$$.fragment,k),cn(a.$$.fragment,k),cn(c.$$.fragment,k),cn(h.$$.fragment,k),x=!1},d(k){k&&et(e),i[11](null),yn(n),i[14](null),yn(a),i[17](null),yn(c),i[20](null),yn(h)}}}function av(i,e,t){let n,r,s,a,o,{state:l=void 0}=e,c,u,d,h;function g(W,N){n[W].setState(N)}const x=wa();function m(W){x("focus",{target:n[W],state:l?l[W]:void 0})}function p(W){Xt[W?"unshift":"push"](()=>{r=W,t(0,r)})}function y(W){c=W,t(4,c)}const T=()=>m(0);function w(W){Xt[W?"unshift":"push"](()=>{s=W,t(1,s)})}function b(W){u=W,t(5,u)}const E=()=>m(1);function z(W){Xt[W?"unshift":"push"](()=>{a=W,t(2,a)})}function k(W){d=W,t(6,d)}const M=()=>m(2);function D(W){Xt[W?"unshift":"push"](()=>{o=W,t(3,o)})}function F(W){h=W,t(7,h)}const G=()=>m(3);return i.$$set=W=>{"state"in W&&t(9,l=W.state)},i.$$.update=()=>{i.$$.dirty&15&&(n=[r,s,a,o]),i.$$.dirty&240&&(c&&u&&d&&h?t(9,l=[c,u,d,h]):t(9,l=void 0))},[r,s,a,o,c,u,d,h,m,l,g,p,y,T,w,b,E,z,k,M,D,F,G]}class tu extends ur{constructor(e){super(),hr(this,e,av,sv,dr,{state:9,setField:10})}get setField(){return this.$$.ctx[10]}}function ov(i){let e,t,n,r,s,a,o,l,c,u,d;return{c(){e=lt("div"),t=lt("input"),n=Kt(),r=lt("div"),s=lt("div"),a=lt("i"),o=Kt(),l=lt("div"),c=lt("i"),this.h()},l(h){e=ct(h,"DIV",{class:!0});var g=pt(e);t=ct(g,"INPUT",{type:!0,class:!0}),n=Jt(g),r=ct(g,"DIV",{class:!0});var x=pt(r);s=ct(x,"DIV",{class:!0});var m=pt(s);a=ct(m,"I",{class:!0}),pt(a).forEach(et),m.forEach(et),o=Jt(x),l=ct(x,"DIV",{class:!0});var p=pt(l);c=ct(p,"I",{class:!0}),pt(c).forEach(et),p.forEach(et),x.forEach(et),g.forEach(et),this.h()},h(){Xe(t,"type","text"),Xe(t,"class","svelte-jh3nii"),Xe(a,"class","svelte-jh3nii"),Xe(s,"class","input-up svelte-jh3nii"),Xe(c,"class","svelte-jh3nii"),Xe(l,"class","input-down svelte-jh3nii"),Xe(r,"class","input-buttons svelte-jh3nii"),Xe(e,"class","input svelte-jh3nii")},m(h,g){_i(h,e,g),qe(e,t),ha(t,i[0]),qe(e,n),qe(e,r),qe(r,s),qe(s,a),qe(r,o),qe(r,l),qe(l,c),u||(d=[Pn(t,"input",i[11]),Pn(t,"input",au(i[3])),Pn(s,"click",i[1]),Pn(l,"click",i[2])],u=!0)},p(h,[g]){g&1&&t.value!==h[0]&&ha(t,h[0])},i:rn,o:rn,d(h){h&&et(e),u=!1,ba(d)}}}function lv(i,e,t){const n=wa();let{min:r=1}=e,{max:s=100}=e,{valid:a=()=>!0}=e,{init:o=r}=e,{state:l=o}=e,{value:c=o.toString()}=e,u=l,d;const h=b=>{l!==b&&(n("change",{state:b}),t(5,l=b),t(4,c=b.toString()))};function g(b){return y(b)?(t(4,c=b),T(b)&&(n("change",{state:Number(b)}),t(5,l=Number(b))),!0):!1}function x(){for(let b=u+1;b<=s;b++)if(a(b)){h(b);return}}function m(){for(let b=u-1;b>=r;b--)if(a(b)){h(b);return}}function p(b){const E=b.target.value;g(E)||(b.target.value=c)}function y(b){if(b==="")return!0;if(/^(0|[1-9]\d*)$/.test(b)){const E=Number(b);if((r<=0||E>0)&&E<=s)return!0}return!1}function T(b){if(b==="")return!1;const E=Number(b);return r<=E&&s>=E&&a(E)}function w(){d=this.value,t(0,d),t(4,c)}return i.$$set=b=>{"min"in b&&t(6,r=b.min),"max"in b&&t(7,s=b.max),"valid"in b&&t(8,a=b.valid),"init"in b&&t(9,o=b.init),"state"in b&&t(5,l=b.state),"value"in b&&t(4,c=b.value)},i.$$.update=()=>{i.$$.dirty&16&&t(0,d=c),i.$$.dirty&16&&c!==""&&(u=Number(c))},[d,x,m,p,c,l,r,s,a,o,h,w]}class cv extends ur{constructor(e){super(),hr(this,e,lv,ov,dr,{min:6,max:7,valid:8,init:9,state:5,value:4,set:10})}get set(){return this.$$.ctx[10]}}function nu(i,e,t){const n=i.slice();return n[24]=e[t],n[26]=t,n}function uv(i){let e,t;return e=new Q4({props:{width:800,height:800,gens:i[6],colors:i[7],depth:i[5]}}),{c(){vn(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,r){_n(e,n,r),t=!0},p(n,r){const s={};r&64&&(s.gens=n[6]),r&128&&(s.colors=n[7]),r&32&&(s.depth=n[5]),e.$set(s)},i(n){t||(ln(e.$$.fragment,n),t=!0)},o(n){cn(e.$$.fragment,n),t=!1},d(n){yn(e,n)}}}function iu(i){let e,t=i[24].name+"",n;return{c(){e=lt("option"),n=ts(t),this.h()},l(r){e=ct(r,"OPTION",{});var s=pt(e);n=ns(s,t),s.forEach(et),this.h()},h(){e.__value=i[24].name,e.value=e.__value},m(r,s){_i(r,e,s),qe(e,n)},p:rn,d(r){r&&et(e)}}}function hv(i){let e,t,n,r,s,a,o,l,c,u,d,h,g,x,m,p,y,T,w,b,E,z,k,M,D,F,G,W,N,B,Z,ne,ae,$,ce,ee,Se,H,se,ge,ue,j,V,ie,me=uv(i);function ve(Ae){i[14](Ae)}let Ve={min:1,max:20,init:10};i[5]!==void 0&&(Ve.state=i[5]),c=new cv({props:Ve}),Xt.push(()=>Li(c,"state",ve)),p=new ra({props:{text:"\\left[\\rule{0cm}{3em}\\right."}});function Le(Ae){i[16](Ae)}let Re={};i[1]!==void 0&&(Re.state=i[1]),T=new tu({props:Re}),Xt.push(()=>Li(T,"state",Le)),T.$on("focus",i[17]),E=new ra({props:{text:"\\left.\\rule{0cm}{3em}\\right]"}}),G=new ra({props:{text:"\\left[\\rule{0cm}{3em}\\right."}});function dt(Ae){i[19](Ae)}let Nt={};i[2]!==void 0&&(Nt.state=i[2]),N=new tu({props:Nt}),Xt.push(()=>Li(N,"state",dt)),N.$on("focus",i[20]),ne=new ra({props:{text:"\\left.\\rule{0cm}{3em}\\right]"}});function wt(Ae){i[21](Ae)}let Dt={};i[8]!==void 0&&(Dt.pos=i[8]),ee=new xd({props:Dt}),Xt.push(()=>Li(ee,"pos",wt)),ee.$on("change",i[11]);let st=Object.values(ms),ke=[];for(let Ae=0;Ae<st.length;Ae+=1)ke[Ae]=iu(nu(i,st,Ae));return{c(){t=Kt(),n=lt("div"),r=lt("div"),me&&me.c(),s=Kt(),a=lt("div"),o=lt("div"),l=ts("Depth"),vn(c.$$.fragment),d=Kt(),h=lt("div"),g=lt("input"),x=ts(`Isometry 1
      `),m=lt("div"),vn(p.$$.fragment),y=Kt(),vn(T.$$.fragment),b=Kt(),vn(E.$$.fragment),z=Kt(),k=lt("div"),M=lt("input"),D=ts(`Isometry 2
      `),F=lt("div"),vn(G.$$.fragment),W=Kt(),vn(N.$$.fragment),Z=Kt(),vn(ne.$$.fragment),ae=Kt(),$=lt("div"),ce=lt("div"),vn(ee.$$.fragment),H=Kt(),se=lt("div"),ge=ts("Theme "),ue=lt("select");for(let Ae=0;Ae<ke.length;Ae+=1)ke[Ae].c();this.h()},l(Ae){t=Jt(Ae),n=ct(Ae,"DIV",{class:!0});var at=pt(n);r=ct(at,"DIV",{class:!0});var L=pt(r);me&&me.l(L),L.forEach(et),s=Jt(at),a=ct(at,"DIV",{class:!0});var A=pt(a);o=ct(A,"DIV",{class:!0});var K=pt(o);l=ns(K,"Depth"),xn(c.$$.fragment,K),K.forEach(et),d=Jt(A),h=ct(A,"DIV",{class:!0});var de=pt(h);g=ct(de,"INPUT",{type:!0,name:!0,class:!0}),x=ns(de,`Isometry 1
      `),m=ct(de,"DIV",{class:!0});var le=pt(m);xn(p.$$.fragment,le),y=Jt(le),xn(T.$$.fragment,le),b=Jt(le),xn(E.$$.fragment,le),le.forEach(et),de.forEach(et),z=Jt(A),k=ct(A,"DIV",{class:!0});var ye=pt(k);M=ct(ye,"INPUT",{type:!0,name:!0,class:!0}),D=ns(ye,`Isometry 2
      `),F=ct(ye,"DIV",{class:!0});var Be=pt(F);xn(G.$$.fragment,Be),W=Jt(Be),xn(N.$$.fragment,Be),Z=Jt(Be),xn(ne.$$.fragment,Be),Be.forEach(et),ye.forEach(et),ae=Jt(A),$=ct(A,"DIV",{class:!0});var we=pt($);ce=ct(we,"DIV",{class:!0});var re=pt(ce);xn(ee.$$.fragment,re),re.forEach(et),we.forEach(et),H=Jt(A),se=ct(A,"DIV",{class:!0});var De=pt(se);ge=ns(De,"Theme "),ue=ct(De,"SELECT",{});var Fe=pt(ue);for(let Ee=0;Ee<ke.length;Ee+=1)ke[Ee].l(Fe);Fe.forEach(et),De.forEach(et),A.forEach(et),at.forEach(et),this.h()},h(){Xe(r,"class","render-container svelte-1werfvq"),Xe(o,"class","sidebar-row svelte-1werfvq"),Xe(g,"type","checkbox"),Xe(g,"name","isometry1"),Xe(g,"class","svelte-1werfvq"),Xe(m,"class","combined-elements svelte-1werfvq"),Xe(h,"class","sidebar-row svelte-1werfvq"),Xe(M,"type","checkbox"),Xe(M,"name","isometry2"),Xe(M,"class","svelte-1werfvq"),Xe(F,"class","combined-elements svelte-1werfvq"),Xe(k,"class","sidebar-row svelte-1werfvq"),Xe(ce,"class","centering svelte-1werfvq"),Xe($,"class","sidebar-row svelte-1werfvq"),i[0]===void 0&&Hh(()=>i[22].call(ue)),Xe(se,"class","sidebar-row svelte-1werfvq"),Xe(a,"class","sidebar svelte-1werfvq"),Xe(n,"class","container svelte-1werfvq")},m(Ae,at){_i(Ae,t,at),_i(Ae,n,at),qe(n,r),me&&me.m(r,null),qe(n,s),qe(n,a),qe(a,o),qe(o,l),_n(c,o,null),qe(a,d),qe(a,h),qe(h,g),g.checked=i[3],qe(h,x),qe(h,m),_n(p,m,null),qe(m,y),_n(T,m,null),qe(m,b),_n(E,m,null),qe(a,z),qe(a,k),qe(k,M),M.checked=i[4],qe(k,D),qe(k,F),_n(G,F,null),qe(F,W),_n(N,F,null),qe(F,Z),_n(ne,F,null),qe(a,ae),qe(a,$),qe($,ce),_n(ee,ce,null),qe(a,H),qe(a,se),qe(se,ge),qe(se,ue);for(let L=0;L<ke.length;L+=1)ke[L].m(ue,null);G0(ue,i[0]),j=!0,V||(ie=[Vh(e=_d.call(null,document.body,i[9])),Pn(g,"change",i[15]),Pn(M,"change",i[18]),Pn(ue,"change",i[22])],V=!0)},p(Ae,[at]){e&&Wh(e.update)&&at&512&&e.update.call(null,Ae[9]),me.p(Ae,at);const L={};!u&&at&32&&(u=!0,L.state=Ae[5],Ri(()=>u=!1)),c.$set(L),at&8&&(g.checked=Ae[3]);const A={};!w&&at&2&&(w=!0,A.state=Ae[1],Ri(()=>w=!1)),T.$set(A),at&16&&(M.checked=Ae[4]);const K={};!B&&at&4&&(B=!0,K.state=Ae[2],Ri(()=>B=!1)),N.$set(K);const de={};if(!Se&&at&256&&(Se=!0,de.pos=Ae[8],Ri(()=>Se=!1)),ee.$set(de),at&0){st=Object.values(ms);let le;for(le=0;le<st.length;le+=1){const ye=nu(Ae,st,le);ke[le]?ke[le].p(ye,at):(ke[le]=iu(ye),ke[le].c(),ke[le].m(ue,null))}for(;le<ke.length;le+=1)ke[le].d(1);ke.length=st.length}at&1&&G0(ue,Ae[0])},i(Ae){j||(ln(me),ln(c.$$.fragment,Ae),ln(p.$$.fragment,Ae),ln(T.$$.fragment,Ae),ln(E.$$.fragment,Ae),ln(G.$$.fragment,Ae),ln(N.$$.fragment,Ae),ln(ne.$$.fragment,Ae),ln(ee.$$.fragment,Ae),j=!0)},o(Ae){cn(me),cn(c.$$.fragment,Ae),cn(p.$$.fragment,Ae),cn(T.$$.fragment,Ae),cn(E.$$.fragment,Ae),cn(G.$$.fragment,Ae),cn(N.$$.fragment,Ae),cn(ne.$$.fragment,Ae),cn(ee.$$.fragment,Ae),j=!1},d(Ae){Ae&&et(t),Ae&&et(n),me&&me.d(),yn(c),yn(p),yn(T),yn(E),yn(G),yn(N),yn(ne),yn(ee),qh(ke,Ae),V=!1,ba(ie)}}}function dv(i,e,t){let n,r=rn,s=()=>(r(),r=su(T,N=>t(23,n=N)),T),a,o;us(i,rr,N=>t(13,a=N)),us(i,W4,N=>t(9,o=N)),i.$$.on_destroy.push(()=>r());let l,c,u,d,h=!0,g=!0,x=[],m=[],p;function y(N,B){t(12,p={element:B.detail.target,state:B.detail.state})}let T;function w(N){p&&p.element.setState(hi(N.detail.x,N.detail.y))}function b(N){c=N,t(5,c)}function E(){h=this.checked,t(3,h)}function z(N){u=N,t(1,u)}const k=N=>y(0,N);function M(){g=this.checked,t(4,g)}function D(N){d=N,t(2,d)}const F=N=>y(1,N);function G(N){T=N,s(t(8,T))}function W(){l=Xh(this),t(0,l)}return i.$$.update=()=>{if(i.$$.dirty&1){const N=ms.find(B=>B.name===l)||ms[0];rr.set(N)}if(i.$$.dirty&8222){const N=[h,g],B=[a.canvas.isometryColors[0],a.canvas.isometryColors[1]],Z=[u,d],ne=[0,1].map(ae=>({m:Z[ae],c:B[ae]})).filter((ae,$)=>ae.m!==void 0&&!$h(ae.m)&&N[$]);t(6,x=ne.map(ae=>ae.m)),t(7,m=ne.map(ae=>ae.c.map($=>new tt($))).flat())}i.$$.dirty&4096&&p!=null&&p.state&&aa(T,n={x:p.state.re,y:p.state.im},n)},[l,u,d,h,g,c,x,m,T,o,y,w,p,a,b,E,z,k,M,D,F,G,W]}class gv extends ur{constructor(e){super(),hr(this,e,dv,hv,dr,{})}}export{gv as default};

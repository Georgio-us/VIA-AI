(function(){
const t=document.createElement("link").relList;
if(t&&t.supports&&t.supports("modulepreload"))return;
for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);
new MutationObserver(l=>{
for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}
).observe(document,{
childList:!0,subtree:!0}
);
function n(l){
const o={
}
;
return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}
function r(l){
if(l.ep)return;
l.ep=!0;
const o=n(l);
fetch(l.href,o)}
}
)();
function gc(e){
return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}
var eu={
exports:{
}
}
,pl={
}
,tu={
exports:{
}
}
,D={
}
;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),vc=Symbol.for("react.portal"),yc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),bi=Symbol.iterator;
function _c(e){
return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}
var nu={
isMounted:function(){
return!1}
,enqueueForceUpdate:function(){
}
,enqueueReplaceState:function(){
}
,enqueueSetState:function(){
}
}
,ru=Object.assign,lu={
}
;
function yn(e,t,n){
this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}
yn.prototype.isReactComponent={
}
;
yn.prototype.setState=function(e,t){
if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,e,t,"setState")}
;
yn.prototype.forceUpdate=function(e){
this.updater.enqueueForceUpdate(this,e,"forceUpdate")}
;
function ou(){
}
ou.prototype=yn.prototype;
function Go(e,t,n){
this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}
var Jo=Go.prototype=new ou;
Jo.constructor=Go;
ru(Jo,yn.prototype);
Jo.isPureReactComponent=!0;
var Qi=Array.isArray,iu=Object.prototype.hasOwnProperty,qo={
current:null}
,su={
key:!0,ref:!0,__self:!0,__source:!0}
;
function uu(e,t,n){
var r,l={
}
,o=null,i=null;
if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)iu.call(t,r)&&!su.hasOwnProperty(r)&&(l[r]=t[r]);
var u=arguments.length-2;
if(u===1)l.children=n;
else if(1<u){
for(var a=Array(u),d=0;
d<u;
d++)a[d]=arguments[d+2];
l.children=a}
if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);
return{
$$typeof:ur,type:e,key:o,ref:i,props:l,_owner:qo.current}
}
function Pc(e,t){
return{
$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}
}
function ei(e){
return typeof e=="object"&&e!==null&&e.$$typeof===ur}
function Mc(e){
var t={
"=":"=0",":":"=2"}
;
return"$"+e.replace(/[=:]/g,function(n){
return t[n]}
)}
var Yi=/\/+/g;
function zl(e,t){
return typeof e=="object"&&e!==null&&e.key!=null?Mc(""+e.key):t.toString(36)}
function Lr(e,t,n,r,l){
var o=typeof e;
(o==="undefined"||o==="boolean")&&(e=null);
var i=!1;
if(e===null)i=!0;
else switch(o){
case"string":case"number":i=!0;
break;
case"object":switch(e.$$typeof){
case ur:case vc:i=!0}
}
if(i)return i=e,l=l(i),e=r===""?"."+zl(i,0):r,Qi(l)?(n="",e!=null&&(n=e.replace(Yi,"$&/")+"/"),Lr(l,t,n,"",function(d){
return d}
)):l!=null&&(ei(l)&&(l=Pc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Yi,"$&/")+"/")+e)),t.push(l)),1;
if(i=0,r=r===""?".":r+":",Qi(e))for(var u=0;
u<e.length;
u++){
o=e[u];
var a=r+zl(o,u);
i+=Lr(o,t,n,a,l)}
else if(a=_c(e),typeof a=="function")for(e=a.call(e),u=0;
!(o=e.next()).done;
)o=o.value,a=r+zl(o,u++),i+=Lr(o,t,n,a,l);
else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");
return i}
function mr(e,t,n){
if(e==null)return e;
var r=[],l=0;
return Lr(e,r,"","",function(o){
return t.call(n,o,l++)}
),r}
function zc(e){
if(e._status===-1){
var t=e._result;
t=t(),t.then(function(n){
(e._status===0||e._status===-1)&&(e._status=1,e._result=n)}
,function(n){
(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}
),e._status===-1&&(e._status=0,e._result=t)}
if(e._status===1)return e._result.default;
throw e._result}
var fe={
current:null}
,Tr={
transition:null}
,Lc={
ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:qo}
;
function au(){
throw Error("act(...) is not supported in production builds of React.")}
D.Children={
map:mr,forEach:function(e,t,n){
mr(e,function(){
t.apply(this,arguments)}
,n)}
,count:function(e){
var t=0;
return mr(e,function(){
t++}
),t}
,toArray:function(e){
return mr(e,function(t){
return t}
)||[]}
,only:function(e){
if(!ei(e))throw Error("React.Children.only expected to receive a single React element child.");
return e}
}
;
D.Component=yn;
D.Fragment=yc;
D.Profiler=wc;
D.PureComponent=Go;
D.StrictMode=xc;
D.Suspense=jc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;
D.act=au;
D.cloneElement=function(e,t,n){
if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");
var r=ru({
}
,e.props),l=e.key,o=e.ref,i=e._owner;
if(t!=null){
if(t.ref!==void 0&&(o=t.ref,i=qo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;
for(a in t)iu.call(t,a)&&!su.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}
var a=arguments.length-2;
if(a===1)r.children=n;
else if(1<a){
u=Array(a);
for(var d=0;
d<a;
d++)u[d]=arguments[d+2];
r.children=u}
return{
$$typeof:ur,type:e.type,key:l,ref:o,props:r,_owner:i}
}
;
D.createContext=function(e){
return e={
$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}
,e.Provider={
$$typeof:kc,_context:e}
,e.Consumer=e}
;
D.createElement=uu;
D.createFactory=function(e){
var t=uu.bind(null,e);
return t.type=e,t}
;
D.createRef=function(){
return{
current:null}
}
;
D.forwardRef=function(e){
return{
$$typeof:Nc,render:e}
}
;
D.isValidElement=ei;
D.lazy=function(e){
return{
$$typeof:Ec,_payload:{
_status:-1,_result:e}
,_init:zc}
}
;
D.memo=function(e,t){
return{
$$typeof:Cc,type:e,compare:t===void 0?null:t}
}
;
D.startTransition=function(e){
var t=Tr.transition;
Tr.transition={
}
;
try{
e()}
finally{
Tr.transition=t}
}
;
D.unstable_act=au;
D.useCallback=function(e,t){
return fe.current.useCallback(e,t)}
;
D.useContext=function(e){
return fe.current.useContext(e)}
;
D.useDebugValue=function(){
}
;
D.useDeferredValue=function(e){
return fe.current.useDeferredValue(e)}
;
D.useEffect=function(e,t){
return fe.current.useEffect(e,t)}
;
D.useId=function(){
return fe.current.useId()}
;
D.useImperativeHandle=function(e,t,n){
return fe.current.useImperativeHandle(e,t,n)}
;
D.useInsertionEffect=function(e,t){
return fe.current.useInsertionEffect(e,t)}
;
D.useLayoutEffect=function(e,t){
return fe.current.useLayoutEffect(e,t)}
;
D.useMemo=function(e,t){
return fe.current.useMemo(e,t)}
;
D.useReducer=function(e,t,n){
return fe.current.useReducer(e,t,n)}
;
D.useRef=function(e){
return fe.current.useRef(e)}
;
D.useState=function(e){
return fe.current.useState(e)}
;
D.useSyncExternalStore=function(e,t,n){
return fe.current.useSyncExternalStore(e,t,n)}
;
D.useTransition=function(){
return fe.current.useTransition()}
;
D.version="18.3.1";
tu.exports=D;
var J=tu.exports;
const Tc=gc(J);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=J,Dc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Ic=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={
key:!0,ref:!0,__self:!0,__source:!0}
;
function cu(e,t,n){
var r,l={
}
,o=null,i=null;
n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);
for(r in t)$c.call(t,r)&&!Fc.hasOwnProperty(r)&&(l[r]=t[r]);
if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);
return{
$$typeof:Dc,type:e,key:o,ref:i,props:l,_owner:Ic.current}
}
pl.Fragment=Oc;
pl.jsx=cu;
pl.jsxs=cu;
eu.exports=pl;
var s=eu.exports,ro={
}
,du={
exports:{
}
}
,Ce={
}
,fu={
exports:{
}
}
,pu={
}
;
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){
function t(j,z){
var T=j.length;
j.push(z);
e:for(;
0<T;
){
var W=T-1>>>1,Z=j[W];
if(0<l(Z,z))j[W]=z,j[T]=Z,T=W;
else break e}
}
function n(j){
return j.length===0?null:j[0]}
function r(j){
if(j.length===0)return null;
var z=j[0],T=j.pop();
if(T!==z){
j[0]=T;
e:for(var W=0,Z=j.length,Bt=Z>>>1;
W<Bt;
){
var Ye=2*(W+1)-1,Sn=j[Ye],Ue=Ye+1,Wt=j[Ue];
if(0>l(Sn,T))Ue<Z&&0>l(Wt,Sn)?(j[W]=Wt,j[Ue]=T,W=Ue):(j[W]=Sn,j[Ye]=T,W=Ye);
else if(Ue<Z&&0>l(Wt,T))j[W]=Wt,j[Ue]=T,W=Ue;
else break e}
}
return z}
function l(j,z){
var T=j.sortIndex-z.sortIndex;
return T!==0?T:j.id-z.id}
if(typeof performance=="object"&&typeof performance.now=="function"){
var o=performance;
e.unstable_now=function(){
return o.now()}
}
else{
var i=Date,u=i.now();
e.unstable_now=function(){
return i.now()-u}
}
var a=[],d=[],g=1,h=null,m=3,w=!1,k=!1,v=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;
typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
function p(j){
for(var z=n(d);
z!==null;
){
if(z.callback===null)r(d);
else if(z.startTime<=j)r(d),z.sortIndex=z.expirationTime,t(a,z);
else break;
z=n(d)}
}
function y(j){
if(v=!1,p(j),!k)if(n(a)!==null)k=!0,it(N);
else{
var z=n(d);
z!==null&&kn(y,z.startTime-j)}
}
function N(j,z){
k=!1,v&&(v=!1,f(P),P=-1),w=!0;
var T=m;
try{
for(p(z),h=n(a);
h!==null&&(!(h.expirationTime>z)||j&&!xe());
){
var W=h.callback;
if(typeof W=="function"){
h.callback=null,m=h.priorityLevel;
var Z=W(h.expirationTime<=z);
z=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(a)&&r(a),p(z)}
else r(a);
h=n(a)}
if(h!==null)var Bt=!0;
else{
var Ye=n(d);
Ye!==null&&kn(y,Ye.startTime-z),Bt=!1}
return Bt}
finally{
h=null,m=T,w=!1}
}
var _=!1,E=null,P=-1,B=5,R=-1;
function xe(){
return!(e.unstable_now()-R<B)}
function _t(){
if(E!==null){
var j=e.unstable_now();
R=j;
var z=!0;
try{
z=E(!0,j)}
finally{
z?Pt():(_=!1,E=null)}
}
else _=!1}
var Pt;
if(typeof c=="function")Pt=function(){
c(_t)}
;
else if(typeof MessageChannel<"u"){
var pr=new MessageChannel,Ml=pr.port2;
pr.port1.onmessage=_t,Pt=function(){
Ml.postMessage(null)}
}
else Pt=function(){
L(_t,0)}
;
function it(j){
E=j,_||(_=!0,Pt())}
function kn(j,z){
P=L(function(){
j(e.unstable_now())}
,z)}
e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){
j.callback=null}
,e.unstable_continueExecution=function(){
k||w||(k=!0,it(N))}
,e.unstable_forceFrameRate=function(j){
0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5}
,e.unstable_getCurrentPriorityLevel=function(){
return m}
,e.unstable_getFirstCallbackNode=function(){
return n(a)}
,e.unstable_next=function(j){
switch(m){
case 1:case 2:case 3:var z=3;
break;
default:z=m}
var T=m;
m=z;
try{
return j()}
finally{
m=T}
}
,e.unstable_pauseExecution=function(){
}
,e.unstable_requestPaint=function(){
}
,e.unstable_runWithPriority=function(j,z){
switch(j){
case 1:case 2:case 3:case 4:case 5:break;
default:j=3}
var T=m;
m=j;
try{
return z()}
finally{
m=T}
}
,e.unstable_scheduleCallback=function(j,z,T){
var W=e.unstable_now();
switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?W+T:W):T=W,j){
case 1:var Z=-1;
break;
case 2:Z=250;
break;
case 5:Z=1073741823;
break;
case 4:Z=1e4;
break;
default:Z=5e3}
return Z=T+Z,j={
id:g++,callback:z,priorityLevel:j,startTime:T,expirationTime:Z,sortIndex:-1}
,T>W?(j.sortIndex=T,t(d,j),n(a)===null&&j===n(d)&&(v?(f(P),P=-1):v=!0,kn(y,T-W))):(j.sortIndex=Z,t(a,j),k||w||(k=!0,it(N))),j}
,e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(j){
var z=m;
return function(){
var T=m;
m=z;
try{
return j.apply(this,arguments)}
finally{
m=T}
}
}
}
)(pu);
fu.exports=pu;
var Vc=fu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=J,je=Vc;
function x(e){
for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;
n<arguments.length;
n++)t+="&args[]="+encodeURIComponent(arguments[n]);
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var mu=new Set,bn={
}
;
function Ut(e,t){
dn(e,t),dn(e+"Capture",t)}
function dn(e,t){
for(bn[e]=t,e=0;
e<t.length;
e++)mu.add(t[e])}
var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=Object.prototype.hasOwnProperty,Uc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ki={
}
,Xi={
}
;
function Ac(e){
return lo.call(Xi,e)?!0:lo.call(Ki,e)?!1:Uc.test(e)?Xi[e]=!0:(Ki[e]=!0,!1)}
function Bc(e,t,n,r){
if(n!==null&&n.type===0)return!1;
switch(typeof t){
case"function":case"symbol":return!0;
case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");
default:return!1}
}
function Wc(e,t,n,r){
if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;
if(r)return!1;
if(n!==null)switch(n.type){
case 3:return!t;
case 4:return t===!1;
case 5:return isNaN(t);
case 6:return isNaN(t)||1>t}
return!1}
function pe(e,t,n,r,l,o,i){
this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}
var oe={
}
;
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){
oe[e]=new pe(e,0,!1,e,null,!1,!1)}
);
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
var t=e[0];
oe[t]=new pe(t,1,!1,e[1],null,!1,!1)}
);
["contentEditable","draggable","spellCheck","value"].forEach(function(e){
oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)}
);
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){
oe[e]=new pe(e,2,!1,e,null,!1,!1)}
);
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){
oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)}
);
["checked","multiple","muted","selected"].forEach(function(e){
oe[e]=new pe(e,3,!0,e,null,!1,!1)}
);
["capture","download"].forEach(function(e){
oe[e]=new pe(e,4,!1,e,null,!1,!1)}
);
["cols","rows","size","span"].forEach(function(e){
oe[e]=new pe(e,6,!1,e,null,!1,!1)}
);
["rowSpan","start"].forEach(function(e){
oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)}
);
var ti=/[\-:]([a-z])/g;
function ni(e){
return e[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){
var t=e.replace(ti,ni);
oe[t]=new pe(t,1,!1,e,null,!1,!1)}
);
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){
var t=e.replace(ti,ni);
oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}
);
["xml:base","xml:lang","xml:space"].forEach(function(e){
var t=e.replace(ti,ni);
oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}
);
["tabIndex","crossOrigin"].forEach(function(e){
oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)}
);
oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src","href","action","formAction"].forEach(function(e){
oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)}
);
function ri(e,t,n,r){
var l=oe.hasOwnProperty(t)?oe[t]:null;
(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wc(t,n,l,r)&&(n=null),r||l===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}
var ot=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),li=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),oi=Symbol.for("react.forward_ref"),io=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),ii=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),vu=Symbol.for("react.offscreen"),Zi=Symbol.iterator;
function jn(e){
return e===null||typeof e!="object"?null:(e=Zi&&e[Zi]||e["@@iterator"],typeof e=="function"?e:null)}
var Y=Object.assign,Ll;
function Tn(e){
if(Ll===void 0)try{
throw Error()}
catch(n){
var t=n.stack.trim().match(/\n( *(at )?)/);
Ll=t&&t[1]||""}
return`
`+Ll+e}
var Tl=!1;
function Rl(e,t){
if(!e||Tl)return"";
Tl=!0;
var n=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{
if(t)if(t=function(){
throw Error()}
,Object.defineProperty(t.prototype,"props",{
set:function(){
throw Error()}
}
),typeof Reflect=="object"&&Reflect.construct){
try{
Reflect.construct(t,[])}
catch(d){
var r=d}
Reflect.construct(e,[],t)}
else{
try{
t.call()}
catch(d){
r=d}
e.call(t.prototype)}
else{
try{
throw Error()}
catch(d){
r=d}
e()}
}
catch(d){
if(d&&r&&typeof d.stack=="string"){
for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;
1<=i&&0<=u&&l[i]!==o[u];
)u--;
for(;
1<=i&&0<=u;
i--,u--)if(l[i]!==o[u]){
if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){
var a=`
`+l[i].replace(" at new "," at ");
return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}
while(1<=i&&0<=u);
break}
}
}
finally{
Tl=!1,Error.prepareStackTrace=n}
return(e=e?e.displayName||e.name:"")?Tn(e):""}
function bc(e){
switch(e.tag){
case 5:return Tn(e.type);
case 16:return Tn("Lazy");
case 13:return Tn("Suspense");
case 19:return Tn("SuspenseList");
case 0:case 2:case 15:return e=Rl(e.type,!1),e;
case 11:return e=Rl(e.type.render,!1),e;
case 1:return e=Rl(e.type,!0),e;
default:return""}
}
function uo(e){
if(e==null)return null;
if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;
switch(e){
case Yt:return"Fragment";
case Qt:return"Portal";
case oo:return"Profiler";
case li:return"StrictMode";
case io:return"Suspense";
case so:return"SuspenseList"}
if(typeof e=="object")switch(e.$$typeof){
case gu:return(e.displayName||"Context")+".Consumer";
case hu:return(e._context.displayName||"Context")+".Provider";
case oi:var t=e.render;
return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;
case ii:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";
case ut:t=e._payload,e=e._init;
try{
return uo(e(t))}
catch{
}
}
return null}
function Qc(e){
var t=e.type;
switch(e.tag){
case 24:return"Cache";
case 9:return(t.displayName||"Context")+".Consumer";
case 10:return(t._context.displayName||"Context")+".Provider";
case 18:return"DehydratedFragment";
case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");
case 7:return"Fragment";
case 5:return t;
case 4:return"Portal";
case 3:return"Root";
case 6:return"Text";
case 16:return uo(t);
case 8:return t===li?"StrictMode":"Mode";
case 22:return"Offscreen";
case 12:return"Profiler";
case 21:return"Scope";
case 13:return"Suspense";
case 19:return"SuspenseList";
case 25:return"TracingMarker";
case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;
if(typeof t=="string")return t}
return null}
function St(e){
switch(typeof e){
case"boolean":case"number":case"string":case"undefined":return e;
case"object":return e;
default:return""}
}
function yu(e){
var t=e.type;
return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}
function Yc(e){
var t=yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];
if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){
var l=n.get,o=n.set;
return Object.defineProperty(e,t,{
configurable:!0,get:function(){
return l.call(this)}
,set:function(i){
r=""+i,o.call(this,i)}
}
),Object.defineProperty(e,t,{
enumerable:n.enumerable}
),{
getValue:function(){
return r}
,setValue:function(i){
r=""+i}
,stopTracking:function(){
e._valueTracker=null,delete e[t]}
}
}
}
function gr(e){
e._valueTracker||(e._valueTracker=Yc(e))}
function xu(e){
if(!e)return!1;
var t=e._valueTracker;
if(!t)return!0;
var n=t.getValue(),r="";
return e&&(r=yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}
function Br(e){
if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;
try{
return e.activeElement||e.body}
catch{
return e.body}
}
function ao(e,t){
var n=t.checked;
return Y({
}
,t,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked}
)}
function Gi(e,t){
var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;
n=St(t.value!=null?t.value:n),e._wrapperState={
initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}
}
function wu(e,t){
t=t.checked,t!=null&&ri(e,"checked",t,!1)}
function co(e,t){
wu(e,t);
var n=St(t.value),r=t.type;
if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);
else if(r==="submit"||r==="reset"){
e.removeAttribute("value");
return}
t.hasOwnProperty("value")?fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&fo(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}
function Ji(e,t,n){
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){
var r=t.type;
if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;
t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}
n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}
function fo(e,t,n){
(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}
var Rn=Array.isArray;
function ln(e,t,n,r){
if(e=e.options,t){
t={
}
;
for(var l=0;
l<n.length;
l++)t["$"+n[l]]=!0;
for(n=0;
n<e.length;
n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}
else{
for(n=""+St(n),t=null,l=0;
l<e.length;
l++){
if(e[l].value===n){
e[l].selected=!0,r&&(e[l].defaultSelected=!0);
return}
t!==null||e[l].disabled||(t=e[l])}
t!==null&&(t.selected=!0)}
}
function po(e,t){
if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));
return Y({
}
,t,{
value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue}
)}
function qi(e,t){
var n=t.value;
if(n==null){
if(n=t.children,t=t.defaultValue,n!=null){
if(t!=null)throw Error(x(92));
if(Rn(n)){
if(1<n.length)throw Error(x(93));
n=n[0]}
t=n}
t==null&&(t=""),n=t}
e._wrapperState={
initialValue:St(n)}
}
function ku(e,t){
var n=St(t.value),r=St(t.defaultValue);
n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}
function es(e){
var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}
function Su(e){
switch(e){
case"svg":return"http://www.w3.org/2000/svg";
case"math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}
}
function mo(e,t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}
var vr,Nu=function(e){
return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){
MSApp.execUnsafeLocalFunction(function(){
return e(t,n,r,l)}
)}
:e}
(function(e,t){
if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;
else{
for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;
e.firstChild;
)e.removeChild(e.firstChild);
for(;
t.firstChild;
)e.appendChild(t.firstChild)}
}
);
function Qn(e,t){
if(t){
var n=e.firstChild;
if(n&&n===e.lastChild&&n.nodeType===3){
n.nodeValue=t;
return}
}
e.textContent=t}
var $n={
animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0}
,Kc=["Webkit","ms","Moz","O"];
Object.keys($n).forEach(function(e){
Kc.forEach(function(t){
t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]}
)}
);
function ju(e,t,n){
return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}
function Cu(e,t){
e=e.style;
for(var n in t)if(t.hasOwnProperty(n)){
var r=n.indexOf("--")===0,l=ju(n,t[n],r);
n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}
}
var Xc=Y({
menuitem:!0}
,{
area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
);
function ho(e,t){
if(t){
if(Xc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));
if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(x(60));
if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}
if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}
}
function go(e,t){
if(e.indexOf("-")===-1)return typeof t.is=="string";
switch(e){
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0}
}
var vo=null;
function si(e){
return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}
var yo=null,on=null,sn=null;
function ts(e){
if(e=dr(e)){
if(typeof yo!="function")throw Error(x(280));
var t=e.stateNode;
t&&(t=yl(t),yo(e.stateNode,e.type,t))}
}
function Eu(e){
on?sn?sn.push(e):sn=[e]:on=e}
function _u(){
if(on){
var e=on,t=sn;
if(sn=on=null,ts(e),t)for(e=0;
e<t.length;
e++)ts(t[e])}
}
function Pu(e,t){
return e(t)}
function Mu(){
}
var Dl=!1;
function zu(e,t,n){
if(Dl)return e(t,n);
Dl=!0;
try{
return Pu(e,t,n)}
finally{
Dl=!1,(on!==null||sn!==null)&&(Mu(),_u())}
}
function Yn(e,t){
var n=e.stateNode;
if(n===null)return null;
var r=yl(n);
if(r===null)return null;
n=r[t];
e:switch(t){
case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;
break e;
default:e=!1}
if(e)return null;
if(n&&typeof n!="function")throw Error(x(231,t,typeof n));
return n}
var xo=!1;
if(tt)try{
var Cn={
}
;
Object.defineProperty(Cn,"passive",{
get:function(){
xo=!0}
}
),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}
catch{
xo=!1}
function Zc(e,t,n,r,l,o,i,u,a){
var d=Array.prototype.slice.call(arguments,3);
try{
t.apply(n,d)}
catch(g){
this.onError(g)}
}
var In=!1,Wr=null,br=!1,wo=null,Gc={
onError:function(e){
In=!0,Wr=e}
}
;
function Jc(e,t,n,r,l,o,i,u,a){
In=!1,Wr=null,Zc.apply(Gc,arguments)}
function qc(e,t,n,r,l,o,i,u,a){
if(Jc.apply(this,arguments),In){
if(In){
var d=Wr;
In=!1,Wr=null}
else throw Error(x(198));
br||(br=!0,wo=d)}
}
function At(e){
var t=e,n=e;
if(e.alternate)for(;
t.return;
)t=t.return;
else{
e=t;
do t=e,t.flags&4098&&(n=t.return),e=t.return;
while(e)}
return t.tag===3?n:null}
function Lu(e){
if(e.tag===13){
var t=e.memoizedState;
if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}
return null}
function ns(e){
if(At(e)!==e)throw Error(x(188))}
function ed(e){
var t=e.alternate;
if(!t){
if(t=At(e),t===null)throw Error(x(188));
return t!==e?null:e}
for(var n=e,r=t;
;
){
var l=n.return;
if(l===null)break;
var o=l.alternate;
if(o===null){
if(r=l.return,r!==null){
n=r;
continue}
break}
if(l.child===o.child){
for(o=l.child;
o;
){
if(o===n)return ns(l),e;
if(o===r)return ns(l),t;
o=o.sibling}
throw Error(x(188))}
if(n.return!==r.return)n=l,r=o;
else{
for(var i=!1,u=l.child;
u;
){
if(u===n){
i=!0,n=l,r=o;
break}
if(u===r){
i=!0,r=l,n=o;
break}
u=u.sibling}
if(!i){
for(u=o.child;
u;
){
if(u===n){
i=!0,n=o,r=l;
break}
if(u===r){
i=!0,r=o,n=l;
break}
u=u.sibling}
if(!i)throw Error(x(189))}
}
if(n.alternate!==r)throw Error(x(190))}
if(n.tag!==3)throw Error(x(188));
return n.stateNode.current===n?e:t}
function Tu(e){
return e=ed(e),e!==null?Ru(e):null}
function Ru(e){
if(e.tag===5||e.tag===6)return e;
for(e=e.child;
e!==null;
){
var t=Ru(e);
if(t!==null)return t;
e=e.sibling}
return null}
var Du=je.unstable_scheduleCallback,rs=je.unstable_cancelCallback,td=je.unstable_shouldYield,nd=je.unstable_requestPaint,X=je.unstable_now,rd=je.unstable_getCurrentPriorityLevel,ui=je.unstable_ImmediatePriority,Ou=je.unstable_UserBlockingPriority,Qr=je.unstable_NormalPriority,ld=je.unstable_LowPriority,$u=je.unstable_IdlePriority,ml=null,be=null;
function od(e){
if(be&&typeof be.onCommitFiberRoot=="function")try{
be.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}
catch{
}
}
var Fe=Math.clz32?Math.clz32:ud,id=Math.log,sd=Math.LN2;
function ud(e){
return e>>>=0,e===0?32:31-(id(e)/sd|0)|0}
var yr=64,xr=4194304;
function Dn(e){
switch(e&-e){
case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 1073741824;
default:return e}
}
function Yr(e,t){
var n=e.pendingLanes;
if(n===0)return 0;
var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;
if(i!==0){
var u=i&~l;
u!==0?r=Dn(u):(o&=i,o!==0&&(r=Dn(o)))}
else i=n&~l,i!==0?r=Dn(i):o!==0&&(r=Dn(o));
if(r===0)return 0;
if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;
if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;
0<t;
)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;
return r}
function ad(e,t){
switch(e){
case 1:case 2:case 4:return t+250;
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
default:return-1}
}
function cd(e,t){
for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;
0<o;
){
var i=31-Fe(o),u=1<<i,a=l[i];
a===-1?(!(u&n)||u&r)&&(l[i]=ad(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}
}
function ko(e){
return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}
function Iu(){
var e=yr;
return yr<<=1,!(yr&4194240)&&(yr=64),e}
function Ol(e){
for(var t=[],n=0;
31>n;
n++)t.push(e);
return t}
function ar(e,t,n){
e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}
function dd(e,t){
var n=e.pendingLanes&~t;
e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;
var r=e.eventTimes;
for(e=e.expirationTimes;
0<n;
){
var l=31-Fe(n),o=1<<l;
t[l]=0,r[l]=-1,e[l]=-1,n&=~o}
}
function ai(e,t){
var n=e.entangledLanes|=t;
for(e=e.entanglements;
n;
){
var r=31-Fe(n),l=1<<r;
l&t|e[r]&t&&(e[r]|=t),n&=~l}
}
var I=0;
function Fu(e){
return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}
var Vu,ci,Hu,Uu,Au,So=!1,wr=[],mt=null,ht=null,gt=null,Kn=new Map,Xn=new Map,ct=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ls(e,t){
switch(e){
case"focusin":case"focusout":mt=null;
break;
case"dragenter":case"dragleave":ht=null;
break;
case"mouseover":case"mouseout":gt=null;
break;
case"pointerover":case"pointerout":Kn.delete(t.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}
}
function En(e,t,n,r,l,o){
return e===null||e.nativeEvent!==o?(e={
blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]}
,t!==null&&(t=dr(t),t!==null&&ci(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}
function pd(e,t,n,r,l){
switch(t){
case"focusin":return mt=En(mt,e,t,n,r,l),!0;
case"dragenter":return ht=En(ht,e,t,n,r,l),!0;
case"mouseover":return gt=En(gt,e,t,n,r,l),!0;
case"pointerover":var o=l.pointerId;
return Kn.set(o,En(Kn.get(o)||null,e,t,n,r,l)),!0;
case"gotpointercapture":return o=l.pointerId,Xn.set(o,En(Xn.get(o)||null,e,t,n,r,l)),!0}
return!1}
function Bu(e){
var t=Lt(e.target);
if(t!==null){
var n=At(t);
if(n!==null){
if(t=n.tag,t===13){
if(t=Lu(n),t!==null){
e.blockedOn=t,Au(e.priority,function(){
Hu(n)}
);
return}
}
else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){
e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
return}
}
}
e.blockedOn=null}
function Rr(e){
if(e.blockedOn!==null)return!1;
for(var t=e.targetContainers;
0<t.length;
){
var n=No(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);
if(n===null){
n=e.nativeEvent;
var r=new n.constructor(n.type,n);
vo=r,n.target.dispatchEvent(r),vo=null}
else return t=dr(n),t!==null&&ci(t),e.blockedOn=n,!1;
t.shift()}
return!0}
function os(e,t,n){
Rr(e)&&n.delete(t)}
function md(){
So=!1,mt!==null&&Rr(mt)&&(mt=null),ht!==null&&Rr(ht)&&(ht=null),gt!==null&&Rr(gt)&&(gt=null),Kn.forEach(os),Xn.forEach(os)}
function _n(e,t){
e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,md)))}
function Zn(e){
function t(l){
return _n(l,e)}
if(0<wr.length){
_n(wr[0],e);
for(var n=1;
n<wr.length;
n++){
var r=wr[n];
r.blockedOn===e&&(r.blockedOn=null)}
}
for(mt!==null&&_n(mt,e),ht!==null&&_n(ht,e),gt!==null&&_n(gt,e),Kn.forEach(t),Xn.forEach(t),n=0;
n<ct.length;
n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);
for(;
0<ct.length&&(n=ct[0],n.blockedOn===null);
)Bu(n),n.blockedOn===null&&ct.shift()}
var un=ot.ReactCurrentBatchConfig,Kr=!0;
function hd(e,t,n,r){
var l=I,o=un.transition;
un.transition=null;
try{
I=1,di(e,t,n,r)}
finally{
I=l,un.transition=o}
}
function gd(e,t,n,r){
var l=I,o=un.transition;
un.transition=null;
try{
I=4,di(e,t,n,r)}
finally{
I=l,un.transition=o}
}
function di(e,t,n,r){
if(Kr){
var l=No(e,t,n,r);
if(l===null)bl(e,t,r,Xr,n),ls(e,r);
else if(pd(l,e,t,n,r))r.stopPropagation();
else if(ls(e,r),t&4&&-1<fd.indexOf(e)){
for(;
l!==null;
){
var o=dr(l);
if(o!==null&&Vu(o),o=No(e,t,n,r),o===null&&bl(e,t,r,Xr,n),o===l)break;
l=o}
l!==null&&r.stopPropagation()}
else bl(e,t,r,null,n)}
}
var Xr=null;
function No(e,t,n,r){
if(Xr=null,e=si(r),e=Lt(e),e!==null)if(t=At(e),t===null)e=null;
else if(n=t.tag,n===13){
if(e=Lu(t),e!==null)return e;
e=null}
else if(n===3){
if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;
e=null}
else t!==e&&(e=null);
return Xr=e,null}
function Wu(e){
switch(e){
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
case"message":switch(rd()){
case ui:return 1;
case Ou:return 4;
case Qr:case ld:return 16;
case $u:return 536870912;
default:return 16}
default:return 16}
}
var ft=null,fi=null,Dr=null;
function bu(){
if(Dr)return Dr;
var e,t=fi,n=t.length,r,l="value"in ft?ft.value:ft.textContent,o=l.length;
for(e=0;
e<n&&t[e]===l[e];
e++);
var i=n-e;
for(r=1;
r<=i&&t[n-r]===l[o-r];
r++);
return Dr=l.slice(e,1<r?1-r:void 0)}
function Or(e){
var t=e.keyCode;
return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}
function kr(){
return!0}
function is(){
return!1}
function Ee(e){
function t(n,r,l,o,i){
this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;
for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);
return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:is,this.isPropagationStopped=is,this}
return Y(t.prototype,{
preventDefault:function(){
this.defaultPrevented=!0;
var n=this.nativeEvent;
n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)}
,stopPropagation:function(){
var n=this.nativeEvent;
n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)}
,persist:function(){
}
,isPersistent:kr}
),t}
var xn={
eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){
return e.timeStamp||Date.now()}
,defaultPrevented:0,isTrusted:0}
,pi=Ee(xn),cr=Y({
}
,xn,{
view:0,detail:0}
),vd=Ee(cr),$l,Il,Pn,hl=Y({
}
,cr,{
screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget}
,movementX:function(e){
return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?($l=e.screenX-Pn.screenX,Il=e.screenY-Pn.screenY):Il=$l=0,Pn=e),$l)}
,movementY:function(e){
return"movementY"in e?e.movementY:Il}
}
),ss=Ee(hl),yd=Y({
}
,hl,{
dataTransfer:0}
),xd=Ee(yd),wd=Y({
}
,cr,{
relatedTarget:0}
),Fl=Ee(wd),kd=Y({
}
,xn,{
animationName:0,elapsedTime:0,pseudoElement:0}
),Sd=Ee(kd),Nd=Y({
}
,xn,{
clipboardData:function(e){
return"clipboardData"in e?e.clipboardData:window.clipboardData}
}
),jd=Ee(Nd),Cd=Y({
}
,xn,{
data:0}
),us=Ee(Cd),Ed={
Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"}
,_d={
8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"}
,Pd={
Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
;
function Md(e){
var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}
function mi(){
return Md}
var zd=Y({
}
,cr,{
key:function(e){
if(e.key){
var t=Ed[e.key]||e.key;
if(t!=="Unidentified")return t}
return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""}
,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){
return e.type==="keypress"?Or(e):0}
,keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0}
,which:function(e){
return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}
}
),Ld=Ee(zd),Td=Y({
}
,hl,{
pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}
),as=Ee(Td),Rd=Y({
}
,cr,{
touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}
),Dd=Ee(Rd),Od=Y({
}
,xn,{
propertyName:0,elapsedTime:0,pseudoElement:0}
),$d=Ee(Od),Id=Y({
}
,hl,{
deltaX:function(e){
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0}
,deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0}
,deltaZ:0,deltaMode:0}
),Fd=Ee(Id),Vd=[9,13,27,32],hi=tt&&"CompositionEvent"in window,Fn=null;
tt&&"documentMode"in document&&(Fn=document.documentMode);
var Hd=tt&&"TextEvent"in window&&!Fn,Qu=tt&&(!hi||Fn&&8<Fn&&11>=Fn),cs=String.fromCharCode(32),ds=!1;
function Yu(e,t){
switch(e){
case"keyup":return Vd.indexOf(t.keyCode)!==-1;
case"keydown":return t.keyCode!==229;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1}
}
function Ku(e){
return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}
var Kt=!1;
function Ud(e,t){
switch(e){
case"compositionend":return Ku(t);
case"keypress":return t.which!==32?null:(ds=!0,cs);
case"textInput":return e=t.data,e===cs&&ds?null:e;
default:return null}
}
function Ad(e,t){
if(Kt)return e==="compositionend"||!hi&&Yu(e,t)?(e=bu(),Dr=fi=ft=null,Kt=!1,e):null;
switch(e){
case"paste":return null;
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){
if(t.char&&1<t.char.length)return t.char;
if(t.which)return String.fromCharCode(t.which)}
return null;
case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;
default:return null}
}
var Bd={
color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
;
function fs(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t==="input"?!!Bd[e.type]:t==="textarea"}
function Xu(e,t,n,r){
Eu(r),t=Zr(t,"onChange"),0<t.length&&(n=new pi("onChange","change",null,n,r),e.push({
event:n,listeners:t}
))}
var Vn=null,Gn=null;
function Wd(e){
ia(e,0)}
function gl(e){
var t=Gt(e);
if(xu(t))return e}
function bd(e,t){
if(e==="change")return t}
var Zu=!1;
if(tt){
var Vl;
if(tt){
var Hl="oninput"in document;
if(!Hl){
var ps=document.createElement("div");
ps.setAttribute("oninput","return;"),Hl=typeof ps.oninput=="function"}
Vl=Hl}
else Vl=!1;
Zu=Vl&&(!document.documentMode||9<document.documentMode)}
function ms(){
Vn&&(Vn.detachEvent("onpropertychange",Gu),Gn=Vn=null)}
function Gu(e){
if(e.propertyName==="value"&&gl(Gn)){
var t=[];
Xu(t,Gn,e,si(e)),zu(Wd,t)}
}
function Qd(e,t,n){
e==="focusin"?(ms(),Vn=t,Gn=n,Vn.attachEvent("onpropertychange",Gu)):e==="focusout"&&ms()}
function Yd(e){
if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Gn)}
function Kd(e,t){
if(e==="click")return gl(t)}
function Xd(e,t){
if(e==="input"||e==="change")return gl(t)}
function Zd(e,t){
return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}
var He=typeof Object.is=="function"?Object.is:Zd;
function Jn(e,t){
if(He(e,t))return!0;
if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;
var n=Object.keys(e),r=Object.keys(t);
if(n.length!==r.length)return!1;
for(r=0;
r<n.length;
r++){
var l=n[r];
if(!lo.call(t,l)||!He(e[l],t[l]))return!1}
return!0}
function hs(e){
for(;
e&&e.firstChild;
)e=e.firstChild;
return e}
function gs(e,t){
var n=hs(e);
e=0;
for(var r;
n;
){
if(n.nodeType===3){
if(r=e+n.textContent.length,e<=t&&r>=t)return{
node:n,offset:t-e}
;
e=r}
e:{
for(;
n;
){
if(n.nextSibling){
n=n.nextSibling;
break e}
n=n.parentNode}
n=void 0}
n=hs(n)}
}
function Ju(e,t){
return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}
function qu(){
for(var e=window,t=Br();
t instanceof e.HTMLIFrameElement;
){
try{
var n=typeof t.contentWindow.location.href=="string"}
catch{
n=!1}
if(n)e=t.contentWindow;
else break;
t=Br(e.document)}
return t}
function gi(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}
function Gd(e){
var t=qu(),n=e.focusedElem,r=e.selectionRange;
if(t!==n&&n&&n.ownerDocument&&Ju(n.ownerDocument.documentElement,n)){
if(r!==null&&gi(n)){
if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);
else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){
e=e.getSelection();
var l=n.textContent.length,o=Math.min(r.start,l);
r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=gs(n,o);
var i=gs(n,r);
l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}
}
for(t=[],e=n;
e=e.parentNode;
)e.nodeType===1&&t.push({
element:e,left:e.scrollLeft,top:e.scrollTop}
);
for(typeof n.focus=="function"&&n.focus(),n=0;
n<t.length;
n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}
}
var Jd=tt&&"documentMode"in document&&11>=document.documentMode,Xt=null,jo=null,Hn=null,Co=!1;
function vs(e,t,n){
var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
Co||Xt==null||Xt!==Br(r)||(r=Xt,"selectionStart"in r&&gi(r)?r={
start:r.selectionStart,end:r.selectionEnd}
:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={
anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}
),Hn&&Jn(Hn,r)||(Hn=r,r=Zr(jo,"onSelect"),0<r.length&&(t=new pi("onSelect","select",null,t,n),e.push({
event:t,listeners:r}
),t.target=Xt)))}
function Sr(e,t){
var n={
}
;
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
var Zt={
animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")}
,Ul={
}
,ea={
}
;
tt&&(ea=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);
function vl(e){
if(Ul[e])return Ul[e];
if(!Zt[e])return e;
var t=Zt[e],n;
for(n in t)if(t.hasOwnProperty(n)&&n in ea)return Ul[e]=t[n];
return e}
var ta=vl("animationend"),na=vl("animationiteration"),ra=vl("animationstart"),la=vl("transitionend"),oa=new Map,ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e,t){
oa.set(e,t),Ut(t,[e])}
for(var Al=0;
Al<ys.length;
Al++){
var Bl=ys[Al],qd=Bl.toLowerCase(),ef=Bl[0].toUpperCase()+Bl.slice(1);
jt(qd,"on"+ef)}
jt(ta,"onAnimationEnd");
jt(na,"onAnimationIteration");
jt(ra,"onAnimationStart");
jt("dblclick","onDoubleClick");
jt("focusin","onFocus");
jt("focusout","onBlur");
jt(la,"onTransitionEnd");
dn("onMouseEnter",["mouseout","mouseover"]);
dn("onMouseLeave",["mouseout","mouseover"]);
dn("onPointerEnter",["pointerout","pointerover"]);
dn("onPointerLeave",["pointerout","pointerover"]);
Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));
Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);
Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function xs(e,t,n){
var r=e.type||"unknown-event";
e.currentTarget=n,qc(r,t,void 0,e),e.currentTarget=null}
function ia(e,t){
t=(t&4)!==0;
for(var n=0;
n<e.length;
n++){
var r=e[n],l=r.event;
r=r.listeners;
e:{
var o=void 0;
if(t)for(var i=r.length-1;
0<=i;
i--){
var u=r[i],a=u.instance,d=u.currentTarget;
if(u=u.listener,a!==o&&l.isPropagationStopped())break e;
xs(l,u,d),o=a}
else for(i=0;
i<r.length;
i++){
if(u=r[i],a=u.instance,d=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;
xs(l,u,d),o=a}
}
}
if(br)throw e=wo,br=!1,wo=null,e}
function H(e,t){
var n=t[zo];
n===void 0&&(n=t[zo]=new Set);
var r=e+"__bubble";
n.has(r)||(sa(t,e,2,!1),n.add(r))}
function Wl(e,t,n){
var r=0;
t&&(r|=4),sa(n,e,r,t)}
var Nr="_reactListening"+Math.random().toString(36).slice(2);
function qn(e){
if(!e[Nr]){
e[Nr]=!0,mu.forEach(function(n){
n!=="selectionchange"&&(tf.has(n)||Wl(n,!1,e),Wl(n,!0,e))}
);
var t=e.nodeType===9?e:e.ownerDocument;
t===null||t[Nr]||(t[Nr]=!0,Wl("selectionchange",!1,t))}
}
function sa(e,t,n,r){
switch(Wu(t)){
case 1:var l=hd;
break;
case 4:l=gd;
break;
default:l=di}
n=l.bind(null,t,n,e),l=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{
capture:!0,passive:l}
):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{
passive:l}
):e.addEventListener(t,n,!1)}
function bl(e,t,n,r,l){
var o=r;
if(!(t&1)&&!(t&2)&&r!==null)e:for(;
;
){
if(r===null)return;
var i=r.tag;
if(i===3||i===4){
var u=r.stateNode.containerInfo;
if(u===l||u.nodeType===8&&u.parentNode===l)break;
if(i===4)for(i=r.return;
i!==null;
){
var a=i.tag;
if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;
i=i.return}
for(;
u!==null;
){
if(i=Lt(u),i===null)return;
if(a=i.tag,a===5||a===6){
r=o=i;
continue e}
u=u.parentNode}
}
r=r.return}
zu(function(){
var d=o,g=si(n),h=[];
e:{
var m=oa.get(e);
if(m!==void 0){
var w=pi,k=e;
switch(e){
case"keypress":if(Or(n)===0)break e;
case"keydown":case"keyup":w=Ld;
break;
case"focusin":k="focus",w=Fl;
break;
case"focusout":k="blur",w=Fl;
break;
case"beforeblur":case"afterblur":w=Fl;
break;
case"click":if(n.button===2)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ss;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=xd;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Dd;
break;
case ta:case na:case ra:w=Sd;
break;
case la:w=$d;
break;
case"scroll":w=vd;
break;
case"wheel":w=Fd;
break;
case"copy":case"cut":case"paste":w=jd;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=as}
var v=(t&4)!==0,L=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;
v=[];
for(var c=d,p;
c!==null;
){
p=c;
var y=p.stateNode;
if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Yn(c,f),y!=null&&v.push(er(c,y,p)))),L)break;
c=c.return}
0<v.length&&(m=new w(m,k,null,n,g),h.push({
event:m,listeners:v}
))}
}
if(!(t&7)){
e:{
if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==vo&&(k=n.relatedTarget||n.fromElement)&&(Lt(k)||k[nt]))break e;
if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?Lt(k):null,k!==null&&(L=At(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){
if(v=ss,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=as,y="onPointerLeave",f="onPointerEnter",c="pointer"),L=w==null?m:Gt(w),p=k==null?m:Gt(k),m=new v(y,c+"leave",w,n,g),m.target=L,m.relatedTarget=p,y=null,Lt(g)===d&&(v=new v(f,c+"enter",k,n,g),v.target=p,v.relatedTarget=L,y=v),L=y,w&&k)t:{
for(v=w,f=k,c=0,p=v;
p;
p=bt(p))c++;
for(p=0,y=f;
y;
y=bt(y))p++;
for(;
0<c-p;
)v=bt(v),c--;
for(;
0<p-c;
)f=bt(f),p--;
for(;
c--;
){
if(v===f||f!==null&&v===f.alternate)break t;
v=bt(v),f=bt(f)}
v=null}
else v=null;
w!==null&&ws(h,m,w,v,!1),k!==null&&L!==null&&ws(h,L,k,v,!0)}
}
e:{
if(m=d?Gt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=bd;
else if(fs(m))if(Zu)N=Xd;
else{
N=Yd;
var _=Qd}
else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Kd);
if(N&&(N=N(e,d))){
Xu(h,N,n,g);
break e}
_&&_(e,m,d),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&fo(m,"number",m.value)}
switch(_=d?Gt(d):window,e){
case"focusin":(fs(_)||_.contentEditable==="true")&&(Xt=_,jo=d,Hn=null);
break;
case"focusout":Hn=jo=Xt=null;
break;
case"mousedown":Co=!0;
break;
case"contextmenu":case"mouseup":case"dragend":Co=!1,vs(h,n,g);
break;
case"selectionchange":if(Jd)break;
case"keydown":case"keyup":vs(h,n,g)}
var E;
if(hi)e:{
switch(e){
case"compositionstart":var P="onCompositionStart";
break e;
case"compositionend":P="onCompositionEnd";
break e;
case"compositionupdate":P="onCompositionUpdate";
break e}
P=void 0}
else Kt?Yu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");
P&&(Qu&&n.locale!=="ko"&&(Kt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Kt&&(E=bu()):(ft=g,fi="value"in ft?ft.value:ft.textContent,Kt=!0)),_=Zr(d,P),0<_.length&&(P=new us(P,e,null,n,g),h.push({
event:P,listeners:_}
),E?P.data=E:(E=Ku(n),E!==null&&(P.data=E)))),(E=Hd?Ud(e,n):Ad(e,n))&&(d=Zr(d,"onBeforeInput"),0<d.length&&(g=new us("onBeforeInput","beforeinput",null,n,g),h.push({
event:g,listeners:d}
),g.data=E))}
ia(h,t)}
)}
function er(e,t,n){
return{
instance:e,listener:t,currentTarget:n}
}
function Zr(e,t){
for(var n=t+"Capture",r=[];
e!==null;
){
var l=e,o=l.stateNode;
l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(er(e,o,l)),o=Yn(e,t),o!=null&&r.push(er(e,o,l))),e=e.return}
return r}
function bt(e){
if(e===null)return null;
do e=e.return;
while(e&&e.tag!==5);
return e||null}
function ws(e,t,n,r,l){
for(var o=t._reactName,i=[];
n!==null&&n!==r;
){
var u=n,a=u.alternate,d=u.stateNode;
if(a!==null&&a===r)break;
u.tag===5&&d!==null&&(u=d,l?(a=Yn(n,o),a!=null&&i.unshift(er(n,a,u))):l||(a=Yn(n,o),a!=null&&i.push(er(n,a,u)))),n=n.return}
i.length!==0&&e.push({
event:t,listeners:i}
)}
var nf=/\r\n?/g,rf=/\u0000|\uFFFD/g;
function ks(e){
return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(rf,"")}
function jr(e,t,n){
if(t=ks(t),ks(e)!==t&&n)throw Error(x(425))}
function Gr(){
}
var Eo=null,_o=null;
function Po(e,t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}
var Mo=typeof setTimeout=="function"?setTimeout:void 0,lf=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(e){
return Ss.resolve(null).then(e).catch(sf)}
:Mo;
function sf(e){
setTimeout(function(){
throw e}
)}
function Ql(e,t){
var n=t,r=0;
do{
var l=n.nextSibling;
if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){
if(r===0){
e.removeChild(l),Zn(t);
return}
r--}
else n!=="$"&&n!=="$?"&&n!=="$!"||r++;
n=l}
while(n);
Zn(t)}
function vt(e){
for(;
e!=null;
e=e.nextSibling){
var t=e.nodeType;
if(t===1||t===3)break;
if(t===8){
if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null}
}
return e}
function Ns(e){
e=e.previousSibling;
for(var t=0;
e;
){
if(e.nodeType===8){
var n=e.data;
if(n==="$"||n==="$!"||n==="$?"){
if(t===0)return e;
t--}
else n==="/$"&&t++}
e=e.previousSibling}
return null}
var wn=Math.random().toString(36).slice(2),We="__reactFiber$"+wn,tr="__reactProps$"+wn,nt="__reactContainer$"+wn,zo="__reactEvents$"+wn,uf="__reactListeners$"+wn,af="__reactHandles$"+wn;
function Lt(e){
var t=e[We];
if(t)return t;
for(var n=e.parentNode;
n;
){
if(t=n[nt]||n[We]){
if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ns(e);
e!==null;
){
if(n=e[We])return n;
e=Ns(e)}
return t}
e=n,n=e.parentNode}
return null}
function dr(e){
return e=e[We]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}
function Gt(e){
if(e.tag===5||e.tag===6)return e.stateNode;
throw Error(x(33))}
function yl(e){
return e[tr]||null}
var Lo=[],Jt=-1;
function Ct(e){
return{
current:e}
}
function U(e){
0>Jt||(e.current=Lo[Jt],Lo[Jt]=null,Jt--)}
function V(e,t){
Jt++,Lo[Jt]=e.current,e.current=t}
var Nt={
}
,ae=Ct(Nt),ge=Ct(!1),$t=Nt;
function fn(e,t){
var n=e.type.contextTypes;
if(!n)return Nt;
var r=e.stateNode;
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;
var l={
}
,o;
for(o in n)l[o]=t[o];
return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}
function ve(e){
return e=e.childContextTypes,e!=null}
function Jr(){
U(ge),U(ae)}
function js(e,t,n){
if(ae.current!==Nt)throw Error(x(168));
V(ae,t),V(ge,n)}
function ua(e,t,n){
var r=e.stateNode;
if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;
r=r.getChildContext();
for(var l in r)if(!(l in t))throw Error(x(108,Qc(e)||"Unknown",l));
return Y({
}
,n,r)}
function qr(e){
return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,$t=ae.current,V(ae,e),V(ge,ge.current),!0}
function Cs(e,t,n){
var r=e.stateNode;
if(!r)throw Error(x(169));
n?(e=ua(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,U(ge),U(ae),V(ae,e)):U(ge),V(ge,n)}
var Ge=null,xl=!1,Yl=!1;
function aa(e){
Ge===null?Ge=[e]:Ge.push(e)}
function cf(e){
xl=!0,aa(e)}
function Et(){
if(!Yl&&Ge!==null){
Yl=!0;
var e=0,t=I;
try{
var n=Ge;
for(I=1;
e<n.length;
e++){
var r=n[e];
do r=r(!0);
while(r!==null)}
Ge=null,xl=!1}
catch(l){
throw Ge!==null&&(Ge=Ge.slice(e+1)),Du(ui,Et),l}
finally{
I=t,Yl=!1}
}
return null}
var qt=[],en=0,el=null,tl=0,_e=[],Pe=0,It=null,Je=1,qe="";
function Mt(e,t){
qt[en++]=tl,qt[en++]=el,el=e,tl=t}
function ca(e,t,n){
_e[Pe++]=Je,_e[Pe++]=qe,_e[Pe++]=It,It=e;
var r=Je;
e=qe;
var l=32-Fe(r)-1;
r&=~(1<<l),n+=1;
var o=32-Fe(t)+l;
if(30<o){
var i=l-l%5;
o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Je=1<<32-Fe(t)+l|n<<l|r,qe=o+e}
else Je=1<<o|n<<l|r,qe=e}
function vi(e){
e.return!==null&&(Mt(e,1),ca(e,1,0))}
function yi(e){
for(;
e===el;
)el=qt[--en],qt[en]=null,tl=qt[--en],qt[en]=null;
for(;
e===It;
)It=_e[--Pe],_e[Pe]=null,qe=_e[--Pe],_e[Pe]=null,Je=_e[--Pe],_e[Pe]=null}
var Ne=null,Se=null,A=!1,Ie=null;
function da(e,t){
var n=Me(5,null,null,0);
n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}
function Es(e,t){
switch(e.tag){
case 5:var n=e.type;
return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Se=vt(t.firstChild),!0):!1;
case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Se=null,!0):!1;
case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{
id:Je,overflow:qe}
:null,e.memoizedState={
dehydrated:t,treeContext:n,retryLane:1073741824}
,n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Se=null,!0):!1;
default:return!1}
}
function To(e){
return(e.mode&1)!==0&&(e.flags&128)===0}
function Ro(e){
if(A){
var t=Se;
if(t){
var n=t;
if(!Es(e,t)){
if(To(e))throw Error(x(418));
t=vt(n.nextSibling);
var r=Ne;
t&&Es(e,t)?da(r,n):(e.flags=e.flags&-4097|2,A=!1,Ne=e)}
}
else{
if(To(e))throw Error(x(418));
e.flags=e.flags&-4097|2,A=!1,Ne=e}
}
}
function _s(e){
for(e=e.return;
e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;
)e=e.return;
Ne=e}
function Cr(e){
if(e!==Ne)return!1;
if(!A)return _s(e),A=!0,!1;
var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=Se)){
if(To(e))throw fa(),Error(x(418));
for(;
t;
)da(e,t),t=vt(t.nextSibling)}
if(_s(e),e.tag===13){
if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));
e:{
for(e=e.nextSibling,t=0;
e;
){
if(e.nodeType===8){
var n=e.data;
if(n==="/$"){
if(t===0){
Se=vt(e.nextSibling);
break e}
t--}
else n!=="$"&&n!=="$!"&&n!=="$?"||t++}
e=e.nextSibling}
Se=null}
}
else Se=Ne?vt(e.stateNode.nextSibling):null;
return!0}
function fa(){
for(var e=Se;
e;
)e=vt(e.nextSibling)}
function pn(){
Se=Ne=null,A=!1}
function xi(e){
Ie===null?Ie=[e]:Ie.push(e)}
var df=ot.ReactCurrentBatchConfig;
function Mn(e,t,n){
if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){
if(n._owner){
if(n=n._owner,n){
if(n.tag!==1)throw Error(x(309));
var r=n.stateNode}
if(!r)throw Error(x(147,e));
var l=r,o=""+e;
return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){
var u=l.refs;
i===null?delete u[o]:u[o]=i}
,t._stringRef=o,t)}
if(typeof e!="string")throw Error(x(284));
if(!n._owner)throw Error(x(290,e))}
return e}
function Er(e,t){
throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}
function Ps(e){
var t=e._init;
return t(e._payload)}
function pa(e){
function t(f,c){
if(e){
var p=f.deletions;
p===null?(f.deletions=[c],f.flags|=16):p.push(c)}
}
function n(f,c){
if(!e)return null;
for(;
c!==null;
)t(f,c),c=c.sibling;
return null}
function r(f,c){
for(f=new Map;
c!==null;
)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;
return f}
function l(f,c){
return f=kt(f,c),f.index=0,f.sibling=null,f}
function o(f,c,p){
return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}
function i(f){
return e&&f.alternate===null&&(f.flags|=2),f}
function u(f,c,p,y){
return c===null||c.tag!==6?(c=eo(p,f.mode,y),c.return=f,c):(c=l(c,p),c.return=f,c)}
function a(f,c,p,y){
var N=p.type;
return N===Yt?g(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ut&&Ps(N)===c.type)?(y=l(c,p.props),y.ref=Mn(f,c,p),y.return=f,y):(y=Ar(p.type,p.key,p.props,null,f.mode,y),y.ref=Mn(f,c,p),y.return=f,y)}
function d(f,c,p,y){
return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=to(p,f.mode,y),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}
function g(f,c,p,y,N){
return c===null||c.tag!==7?(c=Ot(p,f.mode,y,N),c.return=f,c):(c=l(c,p),c.return=f,c)}
function h(f,c,p){
if(typeof c=="string"&&c!==""||typeof c=="number")return c=eo(""+c,f.mode,p),c.return=f,c;
if(typeof c=="object"&&c!==null){
switch(c.$$typeof){
case hr:return p=Ar(c.type,c.key,c.props,null,f.mode,p),p.ref=Mn(f,null,c),p.return=f,p;
case Qt:return c=to(c,f.mode,p),c.return=f,c;
case ut:var y=c._init;
return h(f,y(c._payload),p)}
if(Rn(c)||jn(c))return c=Ot(c,f.mode,p,null),c.return=f,c;
Er(f,c)}
return null}
function m(f,c,p,y){
var N=c!==null?c.key:null;
if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:u(f,c,""+p,y);
if(typeof p=="object"&&p!==null){
switch(p.$$typeof){
case hr:return p.key===N?a(f,c,p,y):null;
case Qt:return p.key===N?d(f,c,p,y):null;
case ut:return N=p._init,m(f,c,N(p._payload),y)}
if(Rn(p)||jn(p))return N!==null?null:g(f,c,p,y,null);
Er(f,p)}
return null}
function w(f,c,p,y,N){
if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,u(c,f,""+y,N);
if(typeof y=="object"&&y!==null){
switch(y.$$typeof){
case hr:return f=f.get(y.key===null?p:y.key)||null,a(c,f,y,N);
case Qt:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,N);
case ut:var _=y._init;
return w(f,c,p,_(y._payload),N)}
if(Rn(y)||jn(y))return f=f.get(p)||null,g(c,f,y,N,null);
Er(c,y)}
return null}
function k(f,c,p,y){
for(var N=null,_=null,E=c,P=c=0,B=null;
E!==null&&P<p.length;
P++){
E.index>P?(B=E,E=null):B=E.sibling;
var R=m(f,E,p[P],y);
if(R===null){
E===null&&(E=B);
break}
e&&E&&R.alternate===null&&t(f,E),c=o(R,c,P),_===null?N=R:_.sibling=R,_=R,E=B}
if(P===p.length)return n(f,E),A&&Mt(f,P),N;
if(E===null){
for(;
P<p.length;
P++)E=h(f,p[P],y),E!==null&&(c=o(E,c,P),_===null?N=E:_.sibling=E,_=E);
return A&&Mt(f,P),N}
for(E=r(f,E);
P<p.length;
P++)B=w(E,f,P,p[P],y),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?P:B.key),c=o(B,c,P),_===null?N=B:_.sibling=B,_=B);
return e&&E.forEach(function(xe){
return t(f,xe)}
),A&&Mt(f,P),N}
function v(f,c,p,y){
var N=jn(p);
if(typeof N!="function")throw Error(x(150));
if(p=N.call(p),p==null)throw Error(x(151));
for(var _=N=null,E=c,P=c=0,B=null,R=p.next();
E!==null&&!R.done;
P++,R=p.next()){
E.index>P?(B=E,E=null):B=E.sibling;
var xe=m(f,E,R.value,y);
if(xe===null){
E===null&&(E=B);
break}
e&&E&&xe.alternate===null&&t(f,E),c=o(xe,c,P),_===null?N=xe:_.sibling=xe,_=xe,E=B}
if(R.done)return n(f,E),A&&Mt(f,P),N;
if(E===null){
for(;
!R.done;
P++,R=p.next())R=h(f,R.value,y),R!==null&&(c=o(R,c,P),_===null?N=R:_.sibling=R,_=R);
return A&&Mt(f,P),N}
for(E=r(f,E);
!R.done;
P++,R=p.next())R=w(E,f,P,R.value,y),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?P:R.key),c=o(R,c,P),_===null?N=R:_.sibling=R,_=R);
return e&&E.forEach(function(_t){
return t(f,_t)}
),A&&Mt(f,P),N}
function L(f,c,p,y){
if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){
switch(p.$$typeof){
case hr:e:{
for(var N=p.key,_=c;
_!==null;
){
if(_.key===N){
if(N=p.type,N===Yt){
if(_.tag===7){
n(f,_.sibling),c=l(_,p.props.children),c.return=f,f=c;
break e}
}
else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ut&&Ps(N)===_.type){
n(f,_.sibling),c=l(_,p.props),c.ref=Mn(f,_,p),c.return=f,f=c;
break e}
n(f,_);
break}
else t(f,_);
_=_.sibling}
p.type===Yt?(c=Ot(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Ar(p.type,p.key,p.props,null,f.mode,y),y.ref=Mn(f,c,p),y.return=f,f=y)}
return i(f);
case Qt:e:{
for(_=p.key;
c!==null;
){
if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){
n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;
break e}
else{
n(f,c);
break}
else t(f,c);
c=c.sibling}
c=to(p,f.mode,y),c.return=f,f=c}
return i(f);
case ut:return _=p._init,L(f,c,_(p._payload),y)}
if(Rn(p))return k(f,c,p,y);
if(jn(p))return v(f,c,p,y);
Er(f,p)}
return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=eo(p,f.mode,y),c.return=f,f=c),i(f)):n(f,c)}
return L}
var mn=pa(!0),ma=pa(!1),nl=Ct(null),rl=null,tn=null,wi=null;
function ki(){
wi=tn=rl=null}
function Si(e){
var t=nl.current;
U(nl),e._currentValue=t}
function Do(e,t,n){
for(;
e!==null;
){
var r=e.alternate;
if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;
e=e.return}
}
function an(e,t){
rl=e,wi=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}
function Le(e){
var t=e._currentValue;
if(wi!==e)if(e={
context:e,memoizedValue:t,next:null}
,tn===null){
if(rl===null)throw Error(x(308));
tn=e,rl.dependencies={
lanes:0,firstContext:e}
}
else tn=tn.next=e;
return t}
var Tt=null;
function Ni(e){
Tt===null?Tt=[e]:Tt.push(e)}
function ha(e,t,n,r){
var l=t.interleaved;
return l===null?(n.next=n,Ni(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}
function rt(e,t){
e.lanes|=t;
var n=e.alternate;
for(n!==null&&(n.lanes|=t),n=e,e=e.return;
e!==null;
)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;
return n.tag===3?n.stateNode:null}
var at=!1;
function ji(e){
e.updateQueue={
baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
pending:null,interleaved:null,lanes:0}
,effects:null}
}
function ga(e,t){
e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={
baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects}
)}
function et(e,t){
return{
eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}
}
function yt(e,t,n){
var r=e.updateQueue;
if(r===null)return null;
if(r=r.shared,$&2){
var l=r.pending;
return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}
return l=r.interleaved,l===null?(t.next=t,Ni(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}
function $r(e,t,n){
if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){
var r=t.lanes;
r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}
}
function Ms(e,t){
var n=e.updateQueue,r=e.alternate;
if(r!==null&&(r=r.updateQueue,n===r)){
var l=null,o=null;
if(n=n.firstBaseUpdate,n!==null){
do{
var i={
eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null}
;
o===null?l=o=i:o=o.next=i,n=n.next}
while(n!==null);
o===null?l=o=t:o=o.next=t}
else l=o=t;
n={
baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects}
,e.updateQueue=n;
return}
e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}
function ll(e,t,n,r){
var l=e.updateQueue;
at=!1;
var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;
if(u!==null){
l.shared.pending=null;
var a=u,d=a.next;
a.next=null,i===null?o=d:i.next=d,i=a;
var g=e.alternate;
g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==i&&(u===null?g.firstBaseUpdate=d:u.next=d,g.lastBaseUpdate=a))}
if(o!==null){
var h=l.baseState;
i=0,g=d=a=null,u=o;
do{
var m=u.lane,w=u.eventTime;
if((r&m)===m){
g!==null&&(g=g.next={
eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null}
);
e:{
var k=e,v=u;
switch(m=t,w=n,v.tag){
case 1:if(k=v.payload,typeof k=="function"){
h=k.call(w,h,m);
break e}
h=k;
break e;
case 3:k.flags=k.flags&-65537|128;
case 0:if(k=v.payload,m=typeof k=="function"?k.call(w,h,m):k,m==null)break e;
h=Y({
}
,h,m);
break e;
case 2:at=!0}
}
u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}
else w={
eventTime:w,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null}
,g===null?(d=g=w,a=h):g=g.next=w,i|=m;
if(u=u.next,u===null){
if(u=l.shared.pending,u===null)break;
m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}
}
while(1);
if(g===null&&(a=h),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){
l=t;
do i|=l.lane,l=l.next;
while(l!==t)}
else o===null&&(l.shared.lanes=0);
Vt|=i,e.lanes=i,e.memoizedState=h}
}
function zs(e,t,n){
if(e=t.effects,t.effects=null,e!==null)for(t=0;
t<e.length;
t++){
var r=e[t],l=r.callback;
if(l!==null){
if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));
l.call(r)}
}
}
var fr={
}
,Qe=Ct(fr),nr=Ct(fr),rr=Ct(fr);
function Rt(e){
if(e===fr)throw Error(x(174));
return e}
function Ci(e,t){
switch(V(rr,t),V(nr,e),V(Qe,fr),e=t.nodeType,e){
case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mo(null,"");
break;
default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mo(t,e)}
U(Qe),V(Qe,t)}
function hn(){
U(Qe),U(nr),U(rr)}
function va(e){
Rt(rr.current);
var t=Rt(Qe.current),n=mo(t,e.type);
t!==n&&(V(nr,e),V(Qe,n))}
function Ei(e){
nr.current===e&&(U(Qe),U(nr))}
var b=Ct(0);
function ol(e){
for(var t=e;
t!==null;
){
if(t.tag===13){
var n=t.memoizedState;
if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}
else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){
if(t.flags&128)return t}
else if(t.child!==null){
t.child.return=t,t=t.child;
continue}
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return null;
t=t.return}
t.sibling.return=t.return,t=t.sibling}
return null}
var Kl=[];
function _i(){
for(var e=0;
e<Kl.length;
e++)Kl[e]._workInProgressVersionPrimary=null;
Kl.length=0}
var Ir=ot.ReactCurrentDispatcher,Xl=ot.ReactCurrentBatchConfig,Ft=0,Q=null,q=null,te=null,il=!1,Un=!1,lr=0,ff=0;
function ie(){
throw Error(x(321))}
function Pi(e,t){
if(t===null)return!1;
for(var n=0;
n<t.length&&n<e.length;
n++)if(!He(e[n],t[n]))return!1;
return!0}
function Mi(e,t,n,r,l,o){
if(Ft=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?gf:vf,e=n(r,l),Un){
o=0;
do{
if(Un=!1,lr=0,25<=o)throw Error(x(301));
o+=1,te=q=null,t.updateQueue=null,Ir.current=yf,e=n(r,l)}
while(Un)}
if(Ir.current=sl,t=q!==null&&q.next!==null,Ft=0,te=q=Q=null,il=!1,t)throw Error(x(300));
return e}
function zi(){
var e=lr!==0;
return lr=0,e}
function Be(){
var e={
memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
;
return te===null?Q.memoizedState=te=e:te=te.next=e,te}
function Te(){
if(q===null){
var e=Q.alternate;
e=e!==null?e.memoizedState:null}
else e=q.next;
var t=te===null?Q.memoizedState:te.next;
if(t!==null)te=t,q=e;
else{
if(e===null)throw Error(x(310));
q=e,e={
memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null}
,te===null?Q.memoizedState=te=e:te=te.next=e}
return te}
function or(e,t){
return typeof t=="function"?t(e):t}
function Zl(e){
var t=Te(),n=t.queue;
if(n===null)throw Error(x(311));
n.lastRenderedReducer=e;
var r=q,l=r.baseQueue,o=n.pending;
if(o!==null){
if(l!==null){
var i=l.next;
l.next=o.next,o.next=i}
r.baseQueue=l=o,n.pending=null}
if(l!==null){
o=l.next,r=r.baseState;
var u=i=null,a=null,d=o;
do{
var g=d.lane;
if((Ft&g)===g)a!==null&&(a=a.next={
lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}
),r=d.hasEagerState?d.eagerState:e(r,d.action);
else{
var h={
lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}
;
a===null?(u=a=h,i=r):a=a.next=h,Q.lanes|=g,Vt|=g}
d=d.next}
while(d!==null&&d!==o);
a===null?i=r:a.next=u,He(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}
if(e=n.interleaved,e!==null){
l=e;
do o=l.lane,Q.lanes|=o,Vt|=o,l=l.next;
while(l!==e)}
else l===null&&(n.lanes=0);
return[t.memoizedState,n.dispatch]}
function Gl(e){
var t=Te(),n=t.queue;
if(n===null)throw Error(x(311));
n.lastRenderedReducer=e;
var r=n.dispatch,l=n.pending,o=t.memoizedState;
if(l!==null){
n.pending=null;
var i=l=l.next;
do o=e(o,i.action),i=i.next;
while(i!==l);
He(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}
return[o,r]}
function ya(){
}
function xa(e,t){
var n=Q,r=Te(),l=t(),o=!He(r.memoizedState,l);
if(o&&(r.memoizedState=l,he=!0),r=r.queue,Li(Sa.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){
if(n.flags|=2048,ir(9,ka.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(x(349));
Ft&30||wa(n,t,l)}
return l}
function wa(e,t,n){
e.flags|=16384,e={
getSnapshot:t,value:n}
,t=Q.updateQueue,t===null?(t={
lastEffect:null,stores:null}
,Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}
function ka(e,t,n,r){
t.value=n,t.getSnapshot=r,Na(t)&&ja(e)}
function Sa(e,t,n){
return n(function(){
Na(t)&&ja(e)}
)}
function Na(e){
var t=e.getSnapshot;
e=e.value;
try{
var n=t();
return!He(e,n)}
catch{
return!0}
}
function ja(e){
var t=rt(e,1);
t!==null&&Ve(t,e,1,-1)}
function Ls(e){
var t=Be();
return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e}
,t.queue=e,e=e.dispatch=hf.bind(null,Q,e),[t.memoizedState,e]}
function ir(e,t,n,r){
return e={
tag:e,create:t,destroy:n,deps:r,next:null}
,t=Q.updateQueue,t===null?(t={
lastEffect:null,stores:null}
,Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}
function Ca(){
return Te().memoizedState}
function Fr(e,t,n,r){
var l=Be();
Q.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}
function wl(e,t,n,r){
var l=Te();
r=r===void 0?null:r;
var o=void 0;
if(q!==null){
var i=q.memoizedState;
if(o=i.destroy,r!==null&&Pi(r,i.deps)){
l.memoizedState=ir(t,n,o,r);
return}
}
Q.flags|=e,l.memoizedState=ir(1|t,n,o,r)}
function Ts(e,t){
return Fr(8390656,8,e,t)}
function Li(e,t){
return wl(2048,8,e,t)}
function Ea(e,t){
return wl(4,2,e,t)}
function _a(e,t){
return wl(4,4,e,t)}
function Pa(e,t){
if(typeof t=="function")return e=e(),t(e),function(){
t(null)}
;
if(t!=null)return e=e(),t.current=e,function(){
t.current=null}
}
function Ma(e,t,n){
return n=n!=null?n.concat([e]):null,wl(4,4,Pa.bind(null,t,e),n)}
function Ti(){
}
function za(e,t){
var n=Te();
t=t===void 0?null:t;
var r=n.memoizedState;
return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}
function La(e,t){
var n=Te();
t=t===void 0?null:t;
var r=n.memoizedState;
return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}
function Ta(e,t,n){
return Ft&21?(He(n,t)||(n=Iu(),Q.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}
function pf(e,t){
var n=I;
I=n!==0&&4>n?n:4,e(!0);
var r=Xl.transition;
Xl.transition={
}
;
try{
e(!1),t()}
finally{
I=n,Xl.transition=r}
}
function Ra(){
return Te().memoizedState}
function mf(e,t,n){
var r=wt(e);
if(n={
lane:r,action:n,hasEagerState:!1,eagerState:null,next:null}
,Da(e))Oa(t,n);
else if(n=ha(e,t,n,r),n!==null){
var l=de();
Ve(n,e,r,l),$a(n,t,r)}
}
function hf(e,t,n){
var r=wt(e),l={
lane:r,action:n,hasEagerState:!1,eagerState:null,next:null}
;
if(Da(e))Oa(t,l);
else{
var o=e.alternate;
if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{
var i=t.lastRenderedState,u=o(i,n);
if(l.hasEagerState=!0,l.eagerState=u,He(u,i)){
var a=t.interleaved;
a===null?(l.next=l,Ni(t)):(l.next=a.next,a.next=l),t.interleaved=l;
return}
}
catch{
}
finally{
}
n=ha(e,t,l,r),n!==null&&(l=de(),Ve(n,e,r,l),$a(n,t,r))}
}
function Da(e){
var t=e.alternate;
return e===Q||t!==null&&t===Q}
function Oa(e,t){
Un=il=!0;
var n=e.pending;
n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}
function $a(e,t,n){
if(n&4194240){
var r=t.lanes;
r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}
}
var sl={
readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1}
,gf={
readContext:Le,useCallback:function(e,t){
return Be().memoizedState=[e,t===void 0?null:t],e}
,useContext:Le,useEffect:Ts,useImperativeHandle:function(e,t,n){
return n=n!=null?n.concat([e]):null,Fr(4194308,4,Pa.bind(null,t,e),n)}
,useLayoutEffect:function(e,t){
return Fr(4194308,4,e,t)}
,useInsertionEffect:function(e,t){
return Fr(4,2,e,t)}
,useMemo:function(e,t){
var n=Be();
return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e}
,useReducer:function(e,t,n){
var r=Be();
return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}
,r.queue=e,e=e.dispatch=mf.bind(null,Q,e),[r.memoizedState,e]}
,useRef:function(e){
var t=Be();
return e={
current:e}
,t.memoizedState=e}
,useState:Ls,useDebugValue:Ti,useDeferredValue:function(e){
return Be().memoizedState=e}
,useTransition:function(){
var e=Ls(!1),t=e[0];
return e=pf.bind(null,e[1]),Be().memoizedState=e,[t,e]}
,useMutableSource:function(){
}
,useSyncExternalStore:function(e,t,n){
var r=Q,l=Be();
if(A){
if(n===void 0)throw Error(x(407));
n=n()}
else{
if(n=t(),ne===null)throw Error(x(349));
Ft&30||wa(r,t,n)}
l.memoizedState=n;
var o={
value:n,getSnapshot:t}
;
return l.queue=o,Ts(Sa.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,ka.bind(null,r,o,n,t),void 0,null),n}
,useId:function(){
var e=Be(),t=ne.identifierPrefix;
if(A){
var n=qe,r=Je;
n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}
else n=ff++,t=":"+t+"r"+n.toString(32)+":";
return e.memoizedState=t}
,unstable_isNewReconciler:!1}
,vf={
readContext:Le,useCallback:za,useContext:Le,useEffect:Li,useImperativeHandle:Ma,useInsertionEffect:Ea,useLayoutEffect:_a,useMemo:La,useReducer:Zl,useRef:Ca,useState:function(){
return Zl(or)}
,useDebugValue:Ti,useDeferredValue:function(e){
var t=Te();
return Ta(t,q.memoizedState,e)}
,useTransition:function(){
var e=Zl(or)[0],t=Te().memoizedState;
return[e,t]}
,useMutableSource:ya,useSyncExternalStore:xa,useId:Ra,unstable_isNewReconciler:!1}
,yf={
readContext:Le,useCallback:za,useContext:Le,useEffect:Li,useImperativeHandle:Ma,useInsertionEffect:Ea,useLayoutEffect:_a,useMemo:La,useReducer:Gl,useRef:Ca,useState:function(){
return Gl(or)}
,useDebugValue:Ti,useDeferredValue:function(e){
var t=Te();
return q===null?t.memoizedState=e:Ta(t,q.memoizedState,e)}
,useTransition:function(){
var e=Gl(or)[0],t=Te().memoizedState;
return[e,t]}
,useMutableSource:ya,useSyncExternalStore:xa,useId:Ra,unstable_isNewReconciler:!1}
;
function Oe(e,t){
if(e&&e.defaultProps){
t=Y({
}
,t),e=e.defaultProps;
for(var n in e)t[n]===void 0&&(t[n]=e[n]);
return t}
return t}
function Oo(e,t,n,r){
t=e.memoizedState,n=n(r,t),n=n==null?t:Y({
}
,t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}
var kl={
isMounted:function(e){
return(e=e._reactInternals)?At(e)===e:!1}
,enqueueSetState:function(e,t,n){
e=e._reactInternals;
var r=de(),l=wt(e),o=et(r,l);
o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,l),t!==null&&(Ve(t,e,l,r),$r(t,e,l))}
,enqueueReplaceState:function(e,t,n){
e=e._reactInternals;
var r=de(),l=wt(e),o=et(r,l);
o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,l),t!==null&&(Ve(t,e,l,r),$r(t,e,l))}
,enqueueForceUpdate:function(e,t){
e=e._reactInternals;
var n=de(),r=wt(e),l=et(n,r);
l.tag=2,t!=null&&(l.callback=t),t=yt(e,l,r),t!==null&&(Ve(t,e,r,n),$r(t,e,r))}
}
;
function Rs(e,t,n,r,l,o,i){
return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,o):!0}
function Ia(e,t,n){
var r=!1,l=Nt,o=t.contextType;
return typeof o=="object"&&o!==null?o=Le(o):(l=ve(t)?$t:ae.current,r=t.contextTypes,o=(r=r!=null)?fn(e,l):Nt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}
function Ds(e,t,n,r){
e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}
function $o(e,t,n,r){
var l=e.stateNode;
l.props=n,l.state=e.memoizedState,l.refs={
}
,ji(e);
var o=t.contextType;
typeof o=="object"&&o!==null?l.context=Le(o):(o=ve(t)?$t:ae.current,l.context=fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}
function gn(e,t){
try{
var n="",r=t;
do n+=bc(r),r=r.return;
while(r);
var l=n}
catch(o){
l=`
Error generating stack: `+o.message+`
`+o.stack}
return{
value:e,source:t,stack:l,digest:null}
}
function Jl(e,t,n){
return{
value:e,source:null,stack:n??null,digest:t??null}
}
function Io(e,t){
try{
console.error(t.value)}
catch(n){
setTimeout(function(){
throw n}
)}
}
var xf=typeof WeakMap=="function"?WeakMap:Map;
function Fa(e,t,n){
n=et(-1,n),n.tag=3,n.payload={
element:null}
;
var r=t.value;
return n.callback=function(){
al||(al=!0,Yo=r),Io(e,t)}
,n}
function Va(e,t,n){
n=et(-1,n),n.tag=3;
var r=e.type.getDerivedStateFromError;
if(typeof r=="function"){
var l=t.value;
n.payload=function(){
return r(l)}
,n.callback=function(){
Io(e,t)}
}
var o=e.stateNode;
return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){
Io(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));
var i=t.stack;
this.componentDidCatch(t.value,{
componentStack:i!==null?i:""}
)}
),n}
function Os(e,t,n){
var r=e.pingCache;
if(r===null){
r=e.pingCache=new xf;
var l=new Set;
r.set(t,l)}
else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));
l.has(n)||(l.add(n),e=Rf.bind(null,e,t,n),t.then(e,e))}
function $s(e){
do{
var t;
if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;
e=e.return}
while(e!==null);
return null}
function Is(e,t,n,r,l){
return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}
var wf=ot.ReactCurrentOwner,he=!1;
function ce(e,t,n,r){
t.child=e===null?ma(t,null,n,r):mn(t,e.child,n,r)}
function Fs(e,t,n,r,l){
n=n.render;
var o=t.ref;
return an(t,l),r=Mi(e,t,n,r,o,l),n=zi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(A&&n&&vi(t),t.flags|=1,ce(e,t,r,l),t.child)}
function Vs(e,t,n,r,l){
if(e===null){
var o=n.type;
return typeof o=="function"&&!Hi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ha(e,t,o,r,l)):(e=Ar(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}
if(o=e.child,!(e.lanes&l)){
var i=o.memoizedProps;
if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return lt(e,t,l)}
return t.flags|=1,e=kt(o,r),e.ref=t.ref,e.return=t,t.child=e}
function Ha(e,t,n,r,l){
if(e!==null){
var o=e.memoizedProps;
if(Jn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(he=!0);
else return t.lanes=e.lanes,lt(e,t,l)}
return Fo(e,t,n,r,l)}
function Ua(e,t,n){
var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;
if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,V(rn,ke),ke|=n;
else{
if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={
baseLanes:e,cachePool:null,transitions:null}
,t.updateQueue=null,V(rn,ke),ke|=e,null;
t.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,r=o!==null?o.baseLanes:n,V(rn,ke),ke|=r}
else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(rn,ke),ke|=r;
return ce(e,t,l,n),t.child}
function Aa(e,t){
var n=t.ref;
(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}
function Fo(e,t,n,r,l){
var o=ve(n)?$t:ae.current;
return o=fn(t,o),an(t,l),n=Mi(e,t,n,r,o,l),r=zi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(A&&r&&vi(t),t.flags|=1,ce(e,t,n,l),t.child)}
function Hs(e,t,n,r,l){
if(ve(n)){
var o=!0;
qr(t)}
else o=!1;
if(an(t,l),t.stateNode===null)Vr(e,t),Ia(t,n,r),$o(t,n,r,l),r=!0;
else if(e===null){
var i=t.stateNode,u=t.memoizedProps;
i.props=u;
var a=i.context,d=n.contextType;
typeof d=="object"&&d!==null?d=Le(d):(d=ve(n)?$t:ae.current,d=fn(t,d));
var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";
h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==d)&&Ds(t,i,r,d),at=!1;
var m=t.memoizedState;
i.state=m,ll(t,r,i,l),a=t.memoizedState,u!==r||m!==a||ge.current||at?(typeof g=="function"&&(Oo(t,n,g,r),a=t.memoizedState),(u=at||Rs(t,n,u,r,m,a,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}
else{
i=t.stateNode,ga(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Oe(t.type,u),i.props=d,h=t.pendingProps,m=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=ve(n)?$t:ae.current,a=fn(t,a));
var w=n.getDerivedStateFromProps;
(g=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==h||m!==a)&&Ds(t,i,r,a),at=!1,m=t.memoizedState,i.state=m,ll(t,r,i,l);
var k=t.memoizedState;
u!==h||m!==k||ge.current||at?(typeof w=="function"&&(Oo(t,n,w,r),k=t.memoizedState),(d=at||Rs(t,n,d,r,m,k,a)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}
return Vo(e,t,n,r,o,l)}
function Vo(e,t,n,r,l,o){
Aa(e,t);
var i=(t.flags&128)!==0;
if(!r&&!i)return l&&Cs(t,n,!1),lt(e,t,o);
r=t.stateNode,wf.current=t;
var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();
return t.flags|=1,e!==null&&i?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,u,o)):ce(e,t,u,o),t.memoizedState=r.state,l&&Cs(t,n,!0),t.child}
function Ba(e){
var t=e.stateNode;
t.pendingContext?js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&js(e,t.context,!1),Ci(e,t.containerInfo)}
function Us(e,t,n,r,l){
return pn(),xi(l),t.flags|=256,ce(e,t,n,r),t.child}
var Ho={
dehydrated:null,treeContext:null,retryLane:0}
;
function Uo(e){
return{
baseLanes:e,cachePool:null,transitions:null}
}
function Wa(e,t,n){
var r=t.pendingProps,l=b.current,o=!1,i=(t.flags&128)!==0,u;
if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(b,l&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={
mode:"hidden",children:i}
,!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=jl(i,r,0,null),e=Ot(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Ho,e):Ri(t,i));
if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return kf(e,t,i,r,u,l,n);
if(o){
o=r.fallback,i=t.mode,l=e.child,u=l.sibling;
var a={
mode:"hidden",children:r.children}
;
return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=kt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=kt(u,o):(o=Ot(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Uo(n):{
baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions}
,o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Ho,r}
return o=e.child,e=o.sibling,r=kt(o,{
mode:"visible",children:r.children}
),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}
function Ri(e,t){
return t=jl({
mode:"visible",children:t}
,e.mode,0,null),t.return=e,e.child=t}
function _r(e,t,n,r){
return r!==null&&xi(r),mn(t,e.child,null,n),e=Ri(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}
function kf(e,t,n,r,l,o,i){
if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(x(422))),_r(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=jl({
mode:"visible",children:r.children}
,l,0,null),o=Ot(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,i),t.child.memoizedState=Uo(i),t.memoizedState=Ho,o);
if(!(t.mode&1))return _r(e,t,i,null);
if(l.data==="$!"){
if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;
return r=u,o=Error(x(419)),r=Jl(o,r,void 0),_r(e,t,i,r)}
if(u=(i&e.childLanes)!==0,he||u){
if(r=ne,r!==null){
switch(i&-i){
case 4:l=2;
break;
case 16:l=8;
break;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;
break;
case 536870912:l=268435456;
break;
default:l=0}
l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,rt(e,l),Ve(r,e,l,-1))}
return Vi(),r=Jl(Error(x(421))),_r(e,t,i,r)}
return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=vt(l.nextSibling),Ne=t,A=!0,Ie=null,e!==null&&(_e[Pe++]=Je,_e[Pe++]=qe,_e[Pe++]=It,Je=e.id,qe=e.overflow,It=t),t=Ri(t,r.children),t.flags|=4096,t)}
function As(e,t,n){
e.lanes|=t;
var r=e.alternate;
r!==null&&(r.lanes|=t),Do(e.return,t,n)}
function ql(e,t,n,r,l){
var o=e.memoizedState;
o===null?e.memoizedState={
isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}
:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}
function ba(e,t,n){
var r=t.pendingProps,l=r.revealOrder,o=r.tail;
if(ce(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;
else{
if(e!==null&&e.flags&128)e:for(e=t.child;
e!==null;
){
if(e.tag===13)e.memoizedState!==null&&As(e,n,t);
else if(e.tag===19)As(e,n,t);
else if(e.child!==null){
e.child.return=e,e=e.child;
continue}
if(e===t)break e;
for(;
e.sibling===null;
){
if(e.return===null||e.return===t)break e;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
r&=1}
if(V(b,r),!(t.mode&1))t.memoizedState=null;
else switch(l){
case"forwards":for(n=t.child,l=null;
n!==null;
)e=n.alternate,e!==null&&ol(e)===null&&(l=n),n=n.sibling;
n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,o);
break;
case"backwards":for(n=null,l=t.child,t.child=null;
l!==null;
){
if(e=l.alternate,e!==null&&ol(e)===null){
t.child=l;
break}
e=l.sibling,l.sibling=n,n=l,l=e}
ql(t,!0,n,null,o);
break;
case"together":ql(t,!1,null,null,void 0);
break;
default:t.memoizedState=null}
return t.child}
function Vr(e,t){
!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}
function lt(e,t,n){
if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;
if(e!==null&&t.child!==e.child)throw Error(x(153));
if(t.child!==null){
for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;
e.sibling!==null;
)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;
n.sibling=null}
return t.child}
function Sf(e,t,n){
switch(t.tag){
case 3:Ba(t),pn();
break;
case 5:va(t);
break;
case 1:ve(t.type)&&qr(t);
break;
case 4:Ci(t,t.stateNode.containerInfo);
break;
case 10:var r=t.type._context,l=t.memoizedProps.value;
V(nl,r._currentValue),r._currentValue=l;
break;
case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?Wa(e,t,n):(V(b,b.current&1),e=lt(e,t,n),e!==null?e.sibling:null);
V(b,b.current&1);
break;
case 19:if(r=(n&t.childLanes)!==0,e.flags&128){
if(r)return ba(e,t,n);
t.flags|=128}
if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(b,b.current),r)break;
return null;
case 22:case 23:return t.lanes=0,Ua(e,t,n)}
return lt(e,t,n)}
var Qa,Ao,Ya,Ka;
Qa=function(e,t){
for(var n=t.child;
n!==null;
){
if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);
else if(n.tag!==4&&n.child!==null){
n.child.return=n,n=n.child;
continue}
if(n===t)break;
for(;
n.sibling===null;
){
if(n.return===null||n.return===t)return;
n=n.return}
n.sibling.return=n.return,n=n.sibling}
}
;
Ao=function(){
}
;
Ya=function(e,t,n,r){
var l=e.memoizedProps;
if(l!==r){
e=t.stateNode,Rt(Qe.current);
var o=null;
switch(n){
case"input":l=ao(e,l),r=ao(e,r),o=[];
break;
case"select":l=Y({
}
,l,{
value:void 0}
),r=Y({
}
,r,{
value:void 0}
),o=[];
break;
case"textarea":l=po(e,l),r=po(e,r),o=[];
break;
default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}
ho(n,r);
var i;
n=null;
for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){
var u=l[d];
for(i in u)u.hasOwnProperty(i)&&(n||(n={
}
),n[i]="")}
else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));
for(d in r){
var a=r[d];
if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){
for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={
}
),n[i]="");
for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={
}
),n[i]=a[i])}
else n||(o||(o=[]),o.push(d,n)),n=a;
else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&H("scroll",e),o||u===a||(o=[])):(o=o||[]).push(d,a))}
n&&(o=o||[]).push("style",n);
var d=o;
(t.updateQueue=d)&&(t.flags|=4)}
}
;
Ka=function(e,t,n,r){
n!==r&&(t.flags|=4)}
;
function zn(e,t){
if(!A)switch(e.tailMode){
case"hidden":t=e.tail;
for(var n=null;
t!==null;
)t.alternate!==null&&(n=t),t=t.sibling;
n===null?e.tail=null:n.sibling=null;
break;
case"collapsed":n=e.tail;
for(var r=null;
n!==null;
)n.alternate!==null&&(r=n),n=n.sibling;
r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}
}
function se(e){
var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;
if(t)for(var l=e.child;
l!==null;
)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;
else for(l=e.child;
l!==null;
)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;
return e.subtreeFlags|=r,e.childLanes=n,t}
function Nf(e,t,n){
var r=t.pendingProps;
switch(yi(t),t.tag){
case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;
case 1:return ve(t.type)&&Jr(),se(t),null;
case 3:return r=t.stateNode,hn(),U(ge),U(ae),_i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Zo(Ie),Ie=null))),Ao(e,t),se(t),null;
case 5:Ei(t);
var l=Rt(rr.current);
if(n=t.type,e!==null&&t.stateNode!=null)Ya(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);
else{
if(!r){
if(t.stateNode===null)throw Error(x(166));
return se(t),null}
if(e=Rt(Qe.current),Cr(t)){
r=t.stateNode,n=t.type;
var o=t.memoizedProps;
switch(r[We]=t,r[tr]=o,e=(t.mode&1)!==0,n){
case"dialog":H("cancel",r),H("close",r);
break;
case"iframe":case"object":case"embed":H("load",r);
break;
case"video":case"audio":for(l=0;
l<On.length;
l++)H(On[l],r);
break;
case"source":H("error",r);
break;
case"img":case"image":case"link":H("error",r),H("load",r);
break;
case"details":H("toggle",r);
break;
case"input":Gi(r,o),H("invalid",r);
break;
case"select":r._wrapperState={
wasMultiple:!!o.multiple}
,H("invalid",r);
break;
case"textarea":qi(r,o),H("invalid",r)}
ho(n,o),l=null;
for(var i in o)if(o.hasOwnProperty(i)){
var u=o[i];
i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,u,e),l=["children",""+u]):bn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&H("scroll",r)}
switch(n){
case"input":gr(r),Ji(r,o,!0);
break;
case"textarea":gr(r),es(r);
break;
case"select":case"option":break;
default:typeof o.onClick=="function"&&(r.onclick=Gr)}
r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}
else{
i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{
is:r.is}
):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[tr]=r,Qa(e,t,!1,!1),t.stateNode=e;
e:{
switch(i=go(n,r),n){
case"dialog":H("cancel",e),H("close",e),l=r;
break;
case"iframe":case"object":case"embed":H("load",e),l=r;
break;
case"video":case"audio":for(l=0;
l<On.length;
l++)H(On[l],e);
l=r;
break;
case"source":H("error",e),l=r;
break;
case"img":case"image":case"link":H("error",e),H("load",e),l=r;
break;
case"details":H("toggle",e),l=r;
break;
case"input":Gi(e,r),l=ao(e,r),H("invalid",e);
break;
case"option":l=r;
break;
case"select":e._wrapperState={
wasMultiple:!!r.multiple}
,l=Y({
}
,r,{
value:void 0}
),H("invalid",e);
break;
case"textarea":qi(e,r),l=po(e,r),H("invalid",e);
break;
default:l=r}
ho(n,l),u=l;
for(o in u)if(u.hasOwnProperty(o)){
var a=u[o];
o==="style"?Cu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Nu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qn(e,a):typeof a=="number"&&Qn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&H("scroll",e):a!=null&&ri(e,o,a,i))}
switch(n){
case"input":gr(e),Ji(e,r,!1);
break;
case"textarea":gr(e),es(e);
break;
case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));
break;
case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);
break;
default:typeof l.onClick=="function"&&(e.onclick=Gr)}
switch(n){
case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;
break e;
case"img":r=!0;
break e;
default:r=!1}
}
r&&(t.flags|=4)}
t.ref!==null&&(t.flags|=512,t.flags|=2097152)}
return se(t),null;
case 6:if(e&&t.stateNode!=null)Ka(e,t,e.memoizedProps,r);
else{
if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));
if(n=Rt(rr.current),Rt(Qe.current),Cr(t)){
if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){
case 3:jr(r.nodeValue,n,(e.mode&1)!==0);
break;
case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}
o&&(t.flags|=4)}
else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}
return se(t),null;
case 13:if(U(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){
if(A&&Se!==null&&t.mode&1&&!(t.flags&128))fa(),pn(),t.flags|=98560,o=!1;
else if(o=Cr(t),r!==null&&r.dehydrated!==null){
if(e===null){
if(!o)throw Error(x(318));
if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));
o[We]=t}
else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;
se(t),o=!1}
else Ie!==null&&(Zo(Ie),Ie=null),o=!0;
if(!o)return t.flags&65536?t:null}
return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?ee===0&&(ee=3):Vi())),t.updateQueue!==null&&(t.flags|=4),se(t),null);
case 4:return hn(),Ao(e,t),e===null&&qn(t.stateNode.containerInfo),se(t),null;
case 10:return Si(t.type._context),se(t),null;
case 17:return ve(t.type)&&Jr(),se(t),null;
case 19:if(U(b),o=t.memoizedState,o===null)return se(t),null;
if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)zn(o,!1);
else{
if(ee!==0||e!==null&&e.flags&128)for(e=t.child;
e!==null;
){
if(i=ol(e),i!==null){
for(t.flags|=128,zn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;
n!==null;
)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{
lanes:e.lanes,firstContext:e.firstContext}
),n=n.sibling;
return V(b,b.current&1|2),t.child}
e=e.sibling}
o.tail!==null&&X()>vn&&(t.flags|=128,r=!0,zn(o,!1),t.lanes=4194304)}
else{
if(!r)if(e=ol(i),e!==null){
if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return se(t),null}
else 2*X()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,zn(o,!1),t.lanes=4194304);
o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}
return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=b.current,V(b,r?n&1|2:n&1),t):(se(t),null);
case 22:case 23:return Fi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;
case 24:return null;
case 25:return null}
throw Error(x(156,t.tag))}
function jf(e,t){
switch(yi(t),t.tag){
case 1:return ve(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
case 3:return hn(),U(ge),U(ae),_i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;
case 5:return Ei(t),null;
case 13:if(U(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){
if(t.alternate===null)throw Error(x(340));
pn()}
return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
case 19:return U(b),null;
case 4:return hn(),null;
case 10:return Si(t.type._context),null;
case 22:case 23:return Fi(),null;
case 24:return null;
default:return null}
}
var Pr=!1,ue=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,C=null;
function nn(e,t){
var n=e.ref;
if(n!==null)if(typeof n=="function")try{
n(null)}
catch(r){
K(e,t,r)}
else n.current=null}
function Bo(e,t,n){
try{
n()}
catch(r){
K(e,t,r)}
}
var Bs=!1;
function Ef(e,t){
if(Eo=Kr,e=qu(),gi(e)){
if("selectionStart"in e)var n={
start:e.selectionStart,end:e.selectionEnd}
;
else e:{
n=(n=e.ownerDocument)&&n.defaultView||window;
var r=n.getSelection&&n.getSelection();
if(r&&r.rangeCount!==0){
n=r.anchorNode;
var l=r.anchorOffset,o=r.focusNode;
r=r.focusOffset;
try{
n.nodeType,o.nodeType}
catch{
n=null;
break e}
var i=0,u=-1,a=-1,d=0,g=0,h=e,m=null;
t:for(;
;
){
for(var w;
h!==n||l!==0&&h.nodeType!==3||(u=i+l),h!==o||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;
)m=h,h=w;
for(;
;
){
if(h===e)break t;
if(m===n&&++d===l&&(u=i),m===o&&++g===r&&(a=i),(w=h.nextSibling)!==null)break;
h=m,m=h.parentNode}
h=w}
n=u===-1||a===-1?null:{
start:u,end:a}
}
else n=null}
n=n||{
start:0,end:0}
}
else n=null;
for(_o={
focusedElem:e,selectionRange:n}
,Kr=!1,C=t;
C!==null;
)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;
else for(;
C!==null;
){
t=C;
try{
var k=t.alternate;
if(t.flags&1024)switch(t.tag){
case 0:case 11:case 15:break;
case 1:if(k!==null){
var v=k.memoizedProps,L=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Oe(t.type,v),L);
f.__reactInternalSnapshotBeforeUpdate=c}
break;
case 3:var p=t.stateNode.containerInfo;
p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);
break;
case 5:case 6:case 4:case 17:break;
default:throw Error(x(163))}
}
catch(y){
K(t,t.return,y)}
if(e=t.sibling,e!==null){
e.return=t.return,C=e;
break}
C=t.return}
return k=Bs,Bs=!1,k}
function An(e,t,n){
var r=t.updateQueue;
if(r=r!==null?r.lastEffect:null,r!==null){
var l=r=r.next;
do{
if((l.tag&e)===e){
var o=l.destroy;
l.destroy=void 0,o!==void 0&&Bo(t,n,o)}
l=l.next}
while(l!==r)}
}
function Sl(e,t){
if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){
var n=t=t.next;
do{
if((n.tag&e)===e){
var r=n.create;
n.destroy=r()}
n=n.next}
while(n!==t)}
}
function Wo(e){
var t=e.ref;
if(t!==null){
var n=e.stateNode;
switch(e.tag){
case 5:e=n;
break;
default:e=n}
typeof t=="function"?t(e):t.current=e}
}
function Xa(e){
var t=e.alternate;
t!==null&&(e.alternate=null,Xa(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[tr],delete t[zo],delete t[uf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}
function Za(e){
return e.tag===5||e.tag===3||e.tag===4}
function Ws(e){
e:for(;
;
){
for(;
e.sibling===null;
){
if(e.return===null||Za(e.return))return null;
e=e.return}
for(e.sibling.return=e.return,e=e.sibling;
e.tag!==5&&e.tag!==6&&e.tag!==18;
){
if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,e=e.child}
if(!(e.flags&2))return e.stateNode}
}
function bo(e,t,n){
var r=e.tag;
if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));
else if(r!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;
e!==null;
)bo(e,t,n),e=e.sibling}
function Qo(e,t,n){
var r=e.tag;
if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);
else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;
e!==null;
)Qo(e,t,n),e=e.sibling}
var re=null,$e=!1;
function st(e,t,n){
for(n=n.child;
n!==null;
)Ga(e,t,n),n=n.sibling}
function Ga(e,t,n){
if(be&&typeof be.onCommitFiberUnmount=="function")try{
be.onCommitFiberUnmount(ml,n)}
catch{
}
switch(n.tag){
case 5:ue||nn(n,t);
case 6:var r=re,l=$e;
re=null,st(e,t,n),re=r,$e=l,re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));
break;
case 18:re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Zn(e)):Ql(re,n.stateNode));
break;
case 4:r=re,l=$e,re=n.stateNode.containerInfo,$e=!0,st(e,t,n),re=r,$e=l;
break;
case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){
l=r=r.next;
do{
var o=l,i=o.destroy;
o=o.tag,i!==void 0&&(o&2||o&4)&&Bo(n,t,i),l=l.next}
while(l!==r)}
st(e,t,n);
break;
case 1:if(!ue&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{
r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}
catch(u){
K(n,t,u)}
st(e,t,n);
break;
case 21:st(e,t,n);
break;
case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,st(e,t,n),ue=r):st(e,t,n);
break;
default:st(e,t,n)}
}
function bs(e){
var t=e.updateQueue;
if(t!==null){
e.updateQueue=null;
var n=e.stateNode;
n===null&&(n=e.stateNode=new Cf),t.forEach(function(r){
var l=Of.bind(null,e,r);
n.has(r)||(n.add(r),r.then(l,l))}
)}
}
function Re(e,t){
var n=t.deletions;
if(n!==null)for(var r=0;
r<n.length;
r++){
var l=n[r];
try{
var o=e,i=t,u=i;
e:for(;
u!==null;
){
switch(u.tag){
case 5:re=u.stateNode,$e=!1;
break e;
case 3:re=u.stateNode.containerInfo,$e=!0;
break e;
case 4:re=u.stateNode.containerInfo,$e=!0;
break e}
u=u.return}
if(re===null)throw Error(x(160));
Ga(o,i,l),re=null,$e=!1;
var a=l.alternate;
a!==null&&(a.return=null),l.return=null}
catch(d){
K(l,t,d)}
}
if(t.subtreeFlags&12854)for(t=t.child;
t!==null;
)Ja(t,e),t=t.sibling}
function Ja(e,t){
var n=e.alternate,r=e.flags;
switch(e.tag){
case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){
try{
An(3,e,e.return),Sl(3,e)}
catch(v){
K(e,e.return,v)}
try{
An(5,e,e.return)}
catch(v){
K(e,e.return,v)}
}
break;
case 1:Re(t,e),Ae(e),r&512&&n!==null&&nn(n,n.return);
break;
case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){
var l=e.stateNode;
try{
Qn(l,"")}
catch(v){
K(e,e.return,v)}
}
if(r&4&&(l=e.stateNode,l!=null)){
var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;
if(e.updateQueue=null,a!==null)try{
u==="input"&&o.type==="radio"&&o.name!=null&&wu(l,o),go(u,i);
var d=go(u,o);
for(i=0;
i<a.length;
i+=2){
var g=a[i],h=a[i+1];
g==="style"?Cu(l,h):g==="dangerouslySetInnerHTML"?Nu(l,h):g==="children"?Qn(l,h):ri(l,g,h,d)}
switch(u){
case"input":co(l,o);
break;
case"textarea":ku(l,o);
break;
case"select":var m=l._wrapperState.wasMultiple;
l._wrapperState.wasMultiple=!!o.multiple;
var w=o.value;
w!=null?ln(l,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?ln(l,!!o.multiple,o.defaultValue,!0):ln(l,!!o.multiple,o.multiple?[]:"",!1))}
l[tr]=o}
catch(v){
K(e,e.return,v)}
}
break;
case 6:if(Re(t,e),Ae(e),r&4){
if(e.stateNode===null)throw Error(x(162));
l=e.stateNode,o=e.memoizedProps;
try{
l.nodeValue=o}
catch(v){
K(e,e.return,v)}
}
break;
case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{
Zn(t.containerInfo)}
catch(v){
K(e,e.return,v)}
break;
case 4:Re(t,e),Ae(e);
break;
case 13:Re(t,e),Ae(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||($i=X())),r&4&&bs(e);
break;
case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||g,Re(t,e),ue=d):Re(t,e),Ae(e),r&8192){
if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(C=e,g=e.child;
g!==null;
){
for(h=C=g;
C!==null;
){
switch(m=C,w=m.child,m.tag){
case 0:case 11:case 14:case 15:An(4,m,m.return);
break;
case 1:nn(m,m.return);
var k=m.stateNode;
if(typeof k.componentWillUnmount=="function"){
r=m,n=m.return;
try{
t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}
catch(v){
K(r,n,v)}
}
break;
case 5:nn(m,m.return);
break;
case 22:if(m.memoizedState!==null){
Ys(h);
continue}
}
w!==null?(w.return=m,C=w):Ys(h)}
g=g.sibling}
e:for(g=null,h=e;
;
){
if(h.tag===5){
if(g===null){
g=h;
try{
l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ju("display",i))}
catch(v){
K(e,e.return,v)}
}
}
else if(h.tag===6){
if(g===null)try{
h.stateNode.nodeValue=d?"":h.memoizedProps}
catch(v){
K(e,e.return,v)}
}
else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){
h.child.return=h,h=h.child;
continue}
if(h===e)break e;
for(;
h.sibling===null;
){
if(h.return===null||h.return===e)break e;
g===h&&(g=null),h=h.return}
g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}
}
break;
case 19:Re(t,e),Ae(e),r&4&&bs(e);
break;
case 21:break;
default:Re(t,e),Ae(e)}
}
function Ae(e){
var t=e.flags;
if(t&2){
try{
e:{
for(var n=e.return;
n!==null;
){
if(Za(n)){
var r=n;
break e}
n=n.return}
throw Error(x(160))}
switch(r.tag){
case 5:var l=r.stateNode;
r.flags&32&&(Qn(l,""),r.flags&=-33);
var o=Ws(e);
Qo(e,o,l);
break;
case 3:case 4:var i=r.stateNode.containerInfo,u=Ws(e);
bo(e,u,i);
break;
default:throw Error(x(161))}
}
catch(a){
K(e,e.return,a)}
e.flags&=-3}
t&4096&&(e.flags&=-4097)}
function _f(e,t,n){
C=e,qa(e)}
function qa(e,t,n){
for(var r=(e.mode&1)!==0;
C!==null;
){
var l=C,o=l.child;
if(l.tag===22&&r){
var i=l.memoizedState!==null||Pr;
if(!i){
var u=l.alternate,a=u!==null&&u.memoizedState!==null||ue;
u=Pr;
var d=ue;
if(Pr=i,(ue=a)&&!d)for(C=l;
C!==null;
)i=C,a=i.child,i.tag===22&&i.memoizedState!==null?Ks(l):a!==null?(a.return=i,C=a):Ks(l);
for(;
o!==null;
)C=o,qa(o),o=o.sibling;
C=l,Pr=u,ue=d}
Qs(e)}
else l.subtreeFlags&8772&&o!==null?(o.return=l,C=o):Qs(e)}
}
function Qs(e){
for(;
C!==null;
){
var t=C;
if(t.flags&8772){
var n=t.alternate;
try{
if(t.flags&8772)switch(t.tag){
case 0:case 11:case 15:ue||Sl(5,t);
break;
case 1:var r=t.stateNode;
if(t.flags&4&&!ue)if(n===null)r.componentDidMount();
else{
var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);
r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}
var o=t.updateQueue;
o!==null&&zs(t,o,r);
break;
case 3:var i=t.updateQueue;
if(i!==null){
if(n=null,t.child!==null)switch(t.child.tag){
case 5:n=t.child.stateNode;
break;
case 1:n=t.child.stateNode}
zs(t,i,n)}
break;
case 5:var u=t.stateNode;
if(n===null&&t.flags&4){
n=u;
var a=t.memoizedProps;
switch(t.type){
case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();
break;
case"img":a.src&&(n.src=a.src)}
}
break;
case 6:break;
case 4:break;
case 12:break;
case 13:if(t.memoizedState===null){
var d=t.alternate;
if(d!==null){
var g=d.memoizedState;
if(g!==null){
var h=g.dehydrated;
h!==null&&Zn(h)}
}
}
break;
case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(x(163))}
ue||t.flags&512&&Wo(t)}
catch(m){
K(t,t.return,m)}
}
if(t===e){
C=null;
break}
if(n=t.sibling,n!==null){
n.return=t.return,C=n;
break}
C=t.return}
}
function Ys(e){
for(;
C!==null;
){
var t=C;
if(t===e){
C=null;
break}
var n=t.sibling;
if(n!==null){
n.return=t.return,C=n;
break}
C=t.return}
}
function Ks(e){
for(;
C!==null;
){
var t=C;
try{
switch(t.tag){
case 0:case 11:case 15:var n=t.return;
try{
Sl(4,t)}
catch(a){
K(t,n,a)}
break;
case 1:var r=t.stateNode;
if(typeof r.componentDidMount=="function"){
var l=t.return;
try{
r.componentDidMount()}
catch(a){
K(t,l,a)}
}
var o=t.return;
try{
Wo(t)}
catch(a){
K(t,o,a)}
break;
case 5:var i=t.return;
try{
Wo(t)}
catch(a){
K(t,i,a)}
}
}
catch(a){
K(t,t.return,a)}
if(t===e){
C=null;
break}
var u=t.sibling;
if(u!==null){
u.return=t.return,C=u;
break}
C=t.return}
}
var Pf=Math.ceil,ul=ot.ReactCurrentDispatcher,Di=ot.ReactCurrentOwner,ze=ot.ReactCurrentBatchConfig,$=0,ne=null,G=null,le=0,ke=0,rn=Ct(0),ee=0,sr=null,Vt=0,Nl=0,Oi=0,Bn=null,me=null,$i=0,vn=1/0,Ze=null,al=!1,Yo=null,xt=null,Mr=!1,pt=null,cl=0,Wn=0,Ko=null,Hr=-1,Ur=0;
function de(){
return $&6?X():Hr!==-1?Hr:Hr=X()}
function wt(e){
return e.mode&1?$&2&&le!==0?le&-le:df.transition!==null?(Ur===0&&(Ur=Iu()),Ur):(e=I,e!==0||(e=window.event,e=e===void 0?16:Wu(e.type)),e):1}
function Ve(e,t,n,r){
if(50<Wn)throw Wn=0,Ko=null,Error(x(185));
ar(e,n,r),(!($&2)||e!==ne)&&(e===ne&&(!($&2)&&(Nl|=n),ee===4&&dt(e,le)),ye(e,r),n===1&&$===0&&!(t.mode&1)&&(vn=X()+500,xl&&Et()))}
function ye(e,t){
var n=e.callbackNode;
cd(e,t);
var r=Yr(e,e===ne?le:0);
if(r===0)n!==null&&rs(n),e.callbackNode=null,e.callbackPriority=0;
else if(t=r&-r,e.callbackPriority!==t){
if(n!=null&&rs(n),t===1)e.tag===0?cf(Xs.bind(null,e)):aa(Xs.bind(null,e)),of(function(){
!($&6)&&Et()}
),n=null;
else{
switch(Fu(r)){
case 1:n=ui;
break;
case 4:n=Ou;
break;
case 16:n=Qr;
break;
case 536870912:n=$u;
break;
default:n=Qr}
n=sc(n,ec.bind(null,e))}
e.callbackPriority=t,e.callbackNode=n}
}
function ec(e,t){
if(Hr=-1,Ur=0,$&6)throw Error(x(327));
var n=e.callbackNode;
if(cn()&&e.callbackNode!==n)return null;
var r=Yr(e,e===ne?le:0);
if(r===0)return null;
if(r&30||r&e.expiredLanes||t)t=dl(e,r);
else{
t=r;
var l=$;
$|=2;
var o=nc();
(ne!==e||le!==t)&&(Ze=null,vn=X()+500,Dt(e,t));
do try{
Lf();
break}
catch(u){
tc(e,u)}
while(1);
ki(),ul.current=o,$=l,G!==null?t=0:(ne=null,le=0,t=ee)}
if(t!==0){
if(t===2&&(l=ko(e),l!==0&&(r=l,t=Xo(e,l))),t===1)throw n=sr,Dt(e,0),dt(e,r),ye(e,X()),n;
if(t===6)dt(e,r);
else{
if(l=e.current.alternate,!(r&30)&&!Mf(l)&&(t=dl(e,r),t===2&&(o=ko(e),o!==0&&(r=o,t=Xo(e,o))),t===1))throw n=sr,Dt(e,0),dt(e,r),ye(e,X()),n;
switch(e.finishedWork=l,e.finishedLanes=r,t){
case 0:case 1:throw Error(x(345));
case 2:zt(e,me,Ze);
break;
case 3:if(dt(e,r),(r&130023424)===r&&(t=$i+500-X(),10<t)){
if(Yr(e,0)!==0)break;
if(l=e.suspendedLanes,(l&r)!==r){
de(),e.pingedLanes|=e.suspendedLanes&l;
break}
e.timeoutHandle=Mo(zt.bind(null,e,me,Ze),t);
break}
zt(e,me,Ze);
break;
case 4:if(dt(e,r),(r&4194240)===r)break;
for(t=e.eventTimes,l=-1;
0<r;
){
var i=31-Fe(r);
o=1<<i,i=t[i],i>l&&(l=i),r&=~o}
if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){
e.timeoutHandle=Mo(zt.bind(null,e,me,Ze),r);
break}
zt(e,me,Ze);
break;
case 5:zt(e,me,Ze);
break;
default:throw Error(x(329))}
}
}
return ye(e,X()),e.callbackNode===n?ec.bind(null,e):null}
function Xo(e,t){
var n=Bn;
return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=me,me=n,t!==null&&Zo(t)),e}
function Zo(e){
me===null?me=e:me.push.apply(me,e)}
function Mf(e){
for(var t=e;
;
){
if(t.flags&16384){
var n=t.updateQueue;
if(n!==null&&(n=n.stores,n!==null))for(var r=0;
r<n.length;
r++){
var l=n[r],o=l.getSnapshot;
l=l.value;
try{
if(!He(o(),l))return!1}
catch{
return!1}
}
}
if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;
else{
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return!0;
t=t.return}
t.sibling.return=t.return,t=t.sibling}
}
return!0}
function dt(e,t){
for(t&=~Oi,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;
0<t;
){
var n=31-Fe(t),r=1<<n;
e[n]=-1,t&=~r}
}
function Xs(e){
if($&6)throw Error(x(327));
cn();
var t=Yr(e,0);
if(!(t&1))return ye(e,X()),null;
var n=dl(e,t);
if(e.tag!==0&&n===2){
var r=ko(e);
r!==0&&(t=r,n=Xo(e,r))}
if(n===1)throw n=sr,Dt(e,0),dt(e,t),ye(e,X()),n;
if(n===6)throw Error(x(345));
return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,me,Ze),ye(e,X()),null}
function Ii(e,t){
var n=$;
$|=1;
try{
return e(t)}
finally{
$=n,$===0&&(vn=X()+500,xl&&Et())}
}
function Ht(e){
pt!==null&&pt.tag===0&&!($&6)&&cn();
var t=$;
$|=1;
var n=ze.transition,r=I;
try{
if(ze.transition=null,I=1,e)return e()}
finally{
I=r,ze.transition=n,$=t,!($&6)&&Et()}
}
function Fi(){
ke=rn.current,U(rn)}
function Dt(e,t){
e.finishedWork=null,e.finishedLanes=0;
var n=e.timeoutHandle;
if(n!==-1&&(e.timeoutHandle=-1,lf(n)),G!==null)for(n=G.return;
n!==null;
){
var r=n;
switch(yi(r),r.tag){
case 1:r=r.type.childContextTypes,r!=null&&Jr();
break;
case 3:hn(),U(ge),U(ae),_i();
break;
case 5:Ei(r);
break;
case 4:hn();
break;
case 13:U(b);
break;
case 19:U(b);
break;
case 10:Si(r.type._context);
break;
case 22:case 23:Fi()}
n=n.return}
if(ne=e,G=e=kt(e.current,null),le=ke=t,ee=0,sr=null,Oi=Nl=Vt=0,me=Bn=null,Tt!==null){
for(t=0;
t<Tt.length;
t++)if(n=Tt[t],r=n.interleaved,r!==null){
n.interleaved=null;
var l=r.next,o=n.pending;
if(o!==null){
var i=o.next;
o.next=l,r.next=i}
n.pending=r}
Tt=null}
return e}
function tc(e,t){
do{
var n=G;
try{
if(ki(),Ir.current=sl,il){
for(var r=Q.memoizedState;
r!==null;
){
var l=r.queue;
l!==null&&(l.pending=null),r=r.next}
il=!1}
if(Ft=0,te=q=Q=null,Un=!1,lr=0,Di.current=null,n===null||n.return===null){
ee=1,sr=t,G=null;
break}
e:{
var o=e,i=n.return,u=n,a=t;
if(t=le,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){
var d=a,g=u,h=g.tag;
if(!(g.mode&1)&&(h===0||h===11||h===15)){
var m=g.alternate;
m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}
var w=$s(i);
if(w!==null){
w.flags&=-257,Is(w,i,u,o,t),w.mode&1&&Os(o,d,t),t=w,a=d;
var k=t.updateQueue;
if(k===null){
var v=new Set;
v.add(a),t.updateQueue=v}
else k.add(a);
break e}
else{
if(!(t&1)){
Os(o,d,t),Vi();
break e}
a=Error(x(426))}
}
else if(A&&u.mode&1){
var L=$s(i);
if(L!==null){
!(L.flags&65536)&&(L.flags|=256),Is(L,i,u,o,t),xi(gn(a,u));
break e}
}
o=a=gn(a,u),ee!==4&&(ee=2),Bn===null?Bn=[o]:Bn.push(o),o=i;
do{
switch(o.tag){
case 3:o.flags|=65536,t&=-t,o.lanes|=t;
var f=Fa(o,a,t);
Ms(o,f);
break e;
case 1:u=a;
var c=o.type,p=o.stateNode;
if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){
o.flags|=65536,t&=-t,o.lanes|=t;
var y=Va(o,u,t);
Ms(o,y);
break e}
}
o=o.return}
while(o!==null)}
lc(n)}
catch(N){
t=N,G===n&&n!==null&&(G=n=n.return);
continue}
break}
while(1)}
function nc(){
var e=ul.current;
return ul.current=sl,e===null?sl:e}
function Vi(){
(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(Vt&268435455)&&!(Nl&268435455)||dt(ne,le)}
function dl(e,t){
var n=$;
$|=2;
var r=nc();
(ne!==e||le!==t)&&(Ze=null,Dt(e,t));
do try{
zf();
break}
catch(l){
tc(e,l)}
while(1);
if(ki(),$=n,ul.current=r,G!==null)throw Error(x(261));
return ne=null,le=0,ee}
function zf(){
for(;
G!==null;
)rc(G)}
function Lf(){
for(;
G!==null&&!td();
)rc(G)}
function rc(e){
var t=ic(e.alternate,e,ke);
e.memoizedProps=e.pendingProps,t===null?lc(e):G=t,Di.current=null}
function lc(e){
var t=e;
do{
var n=t.alternate;
if(e=t.return,t.flags&32768){
if(n=jf(n,t),n!==null){
n.flags&=32767,G=n;
return}
if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;
else{
ee=6,G=null;
return}
}
else if(n=Nf(n,t,ke),n!==null){
G=n;
return}
if(t=t.sibling,t!==null){
G=t;
return}
G=t=e}
while(t!==null);
ee===0&&(ee=5)}
function zt(e,t,n){
var r=I,l=ze.transition;
try{
ze.transition=null,I=1,Tf(e,t,n,r)}
finally{
ze.transition=l,I=r}
return null}
function Tf(e,t,n,r){
do cn();
while(pt!==null);
if($&6)throw Error(x(327));
n=e.finishedWork;
var l=e.finishedLanes;
if(n===null)return null;
if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));
e.callbackNode=null,e.callbackPriority=0;
var o=n.lanes|n.childLanes;
if(dd(e,o),e===ne&&(G=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,sc(Qr,function(){
return cn(),null}
)),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){
o=ze.transition,ze.transition=null;
var i=I;
I=1;
var u=$;
$|=4,Di.current=null,Ef(e,n),Ja(n,e),Gd(_o),Kr=!!Eo,_o=Eo=null,e.current=n,_f(n),nd(),$=u,I=i,ze.transition=o}
else e.current=n;
if(Mr&&(Mr=!1,pt=e,cl=l),o=e.pendingLanes,o===0&&(xt=null),od(n.stateNode),ye(e,X()),t!==null)for(r=e.onRecoverableError,n=0;
n<t.length;
n++)l=t[n],r(l.value,{
componentStack:l.stack,digest:l.digest}
);
if(al)throw al=!1,e=Yo,Yo=null,e;
return cl&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===Ko?Wn++:(Wn=0,Ko=e):Wn=0,Et(),null}
function cn(){
if(pt!==null){
var e=Fu(cl),t=ze.transition,n=I;
try{
if(ze.transition=null,I=16>e?16:e,pt===null)var r=!1;
else{
if(e=pt,pt=null,cl=0,$&6)throw Error(x(331));
var l=$;
for($|=4,C=e.current;
C!==null;
){
var o=C,i=o.child;
if(C.flags&16){
var u=o.deletions;
if(u!==null){
for(var a=0;
a<u.length;
a++){
var d=u[a];
for(C=d;
C!==null;
){
var g=C;
switch(g.tag){
case 0:case 11:case 15:An(8,g,o)}
var h=g.child;
if(h!==null)h.return=g,C=h;
else for(;
C!==null;
){
g=C;
var m=g.sibling,w=g.return;
if(Xa(g),g===d){
C=null;
break}
if(m!==null){
m.return=w,C=m;
break}
C=w}
}
}
var k=o.alternate;
if(k!==null){
var v=k.child;
if(v!==null){
k.child=null;
do{
var L=v.sibling;
v.sibling=null,v=L}
while(v!==null)}
}
C=o}
}
if(o.subtreeFlags&2064&&i!==null)i.return=o,C=i;
else e:for(;
C!==null;
){
if(o=C,o.flags&2048)switch(o.tag){
case 0:case 11:case 15:An(9,o,o.return)}
var f=o.sibling;
if(f!==null){
f.return=o.return,C=f;
break e}
C=o.return}
}
var c=e.current;
for(C=c;
C!==null;
){
i=C;
var p=i.child;
if(i.subtreeFlags&2064&&p!==null)p.return=i,C=p;
else e:for(i=c;
C!==null;
){
if(u=C,u.flags&2048)try{
switch(u.tag){
case 0:case 11:case 15:Sl(9,u)}
}
catch(N){
K(u,u.return,N)}
if(u===i){
C=null;
break e}
var y=u.sibling;
if(y!==null){
y.return=u.return,C=y;
break e}
C=u.return}
}
if($=l,Et(),be&&typeof be.onPostCommitFiberRoot=="function")try{
be.onPostCommitFiberRoot(ml,e)}
catch{
}
r=!0}
return r}
finally{
I=n,ze.transition=t}
}
return!1}
function Zs(e,t,n){
t=gn(n,t),t=Fa(e,t,1),e=yt(e,t,1),t=de(),e!==null&&(ar(e,1,t),ye(e,t))}
function K(e,t,n){
if(e.tag===3)Zs(e,e,n);
else for(;
t!==null;
){
if(t.tag===3){
Zs(t,e,n);
break}
else if(t.tag===1){
var r=t.stateNode;
if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){
e=gn(n,e),e=Va(t,e,1),t=yt(t,e,1),e=de(),t!==null&&(ar(t,1,e),ye(t,e));
break}
}
t=t.return}
}
function Rf(e,t,n){
var r=e.pingCache;
r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>X()-$i?Dt(e,0):Oi|=n),ye(e,t)}
function oc(e,t){
t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);
var n=de();
e=rt(e,t),e!==null&&(ar(e,t,n),ye(e,n))}
function Df(e){
var t=e.memoizedState,n=0;
t!==null&&(n=t.retryLane),oc(e,n)}
function Of(e,t){
var n=0;
switch(e.tag){
case 13:var r=e.stateNode,l=e.memoizedState;
l!==null&&(n=l.retryLane);
break;
case 19:r=e.stateNode;
break;
default:throw Error(x(314))}
r!==null&&r.delete(t),oc(e,n)}
var ic;
ic=function(e,t,n){
if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;
else{
if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Sf(e,t,n);
he=!!(e.flags&131072)}
else he=!1,A&&t.flags&1048576&&ca(t,tl,t.index);
switch(t.lanes=0,t.tag){
case 2:var r=t.type;
Vr(e,t),e=t.pendingProps;
var l=fn(t,ae.current);
an(t,n),l=Mi(null,t,r,e,l,n);
var o=zi();
return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,qr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ji(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,$o(t,r,e,n),t=Vo(null,t,r,!0,o,n)):(t.tag=0,A&&o&&vi(t),ce(null,t,l,n),t=t.child),t;
case 16:r=t.elementType;
e:{
switch(Vr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Oe(r,e),l){
case 0:t=Fo(null,t,r,e,n);
break e;
case 1:t=Hs(null,t,r,e,n);
break e;
case 11:t=Fs(null,t,r,e,n);
break e;
case 14:t=Vs(null,t,r,Oe(r.type,e),n);
break e}
throw Error(x(306,r,""))}
return t;
case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fo(e,t,r,l,n);
case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Hs(e,t,r,l,n);
case 3:e:{
if(Ba(t),e===null)throw Error(x(387));
r=t.pendingProps,o=t.memoizedState,l=o.element,ga(e,t),ll(t,r,null,n);
var i=t.memoizedState;
if(r=i.element,o.isDehydrated)if(o={
element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions}
,t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){
l=gn(Error(x(423)),t),t=Us(e,t,r,n,l);
break e}
else if(r!==l){
l=gn(Error(x(424)),t),t=Us(e,t,r,n,l);
break e}
else for(Se=vt(t.stateNode.containerInfo.firstChild),Ne=t,A=!0,Ie=null,n=ma(t,null,r,n),t.child=n;
n;
)n.flags=n.flags&-3|4096,n=n.sibling;
else{
if(pn(),r===l){
t=lt(e,t,n);
break e}
ce(e,t,r,n)}
t=t.child}
return t;
case 5:return va(t),e===null&&Ro(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Po(r,l)?i=null:o!==null&&Po(r,o)&&(t.flags|=32),Aa(e,t),ce(e,t,i,n),t.child;
case 6:return e===null&&Ro(t),null;
case 13:return Wa(e,t,n);
case 4:return Ci(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ce(e,t,r,n),t.child;
case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fs(e,t,r,l,n);
case 7:return ce(e,t,t.pendingProps,n),t.child;
case 8:return ce(e,t,t.pendingProps.children,n),t.child;
case 12:return ce(e,t,t.pendingProps.children,n),t.child;
case 10:e:{
if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,V(nl,r._currentValue),r._currentValue=i,o!==null)if(He(o.value,i)){
if(o.children===l.children&&!ge.current){
t=lt(e,t,n);
break e}
}
else for(o=t.child,o!==null&&(o.return=t);
o!==null;
){
var u=o.dependencies;
if(u!==null){
i=o.child;
for(var a=u.firstContext;
a!==null;
){
if(a.context===r){
if(o.tag===1){
a=et(-1,n&-n),a.tag=2;
var d=o.updateQueue;
if(d!==null){
d=d.shared;
var g=d.pending;
g===null?a.next=a:(a.next=g.next,g.next=a),d.pending=a}
}
o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Do(o.return,n,t),u.lanes|=n;
break}
a=a.next}
}
else if(o.tag===10)i=o.type===t.type?null:o.child;
else if(o.tag===18){
if(i=o.return,i===null)throw Error(x(341));
i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Do(i,n,t),i=o.sibling}
else i=o.child;
if(i!==null)i.return=o;
else for(i=o;
i!==null;
){
if(i===t){
i=null;
break}
if(o=i.sibling,o!==null){
o.return=i.return,i=o;
break}
i=i.return}
o=i}
ce(e,t,l.children,n),t=t.child}
return t;
case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Le(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;
case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Vs(e,t,r,l,n);
case 15:return Ha(e,t,t.type,t.pendingProps,n);
case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Vr(e,t),t.tag=1,ve(r)?(e=!0,qr(t)):e=!1,an(t,n),Ia(t,r,l),$o(t,r,l,n),Vo(null,t,r,!0,e,n);
case 19:return ba(e,t,n);
case 22:return Ua(e,t,n)}
throw Error(x(156,t.tag))}
;
function sc(e,t){
return Du(e,t)}
function $f(e,t,n,r){
this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function Me(e,t,n,r){
return new $f(e,t,n,r)}
function Hi(e){
return e=e.prototype,!(!e||!e.isReactComponent)}
function If(e){
if(typeof e=="function")return Hi(e)?1:0;
if(e!=null){
if(e=e.$$typeof,e===oi)return 11;
if(e===ii)return 14}
return 2}
function kt(e,t){
var n=e.alternate;
return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{
lanes:t.lanes,firstContext:t.firstContext}
,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}
function Ar(e,t,n,r,l,o){
var i=2;
if(r=e,typeof e=="function")Hi(e)&&(i=1);
else if(typeof e=="string")i=5;
else e:switch(e){
case Yt:return Ot(n.children,l,o,t);
case li:i=8,l|=8;
break;
case oo:return e=Me(12,n,t,l|2),e.elementType=oo,e.lanes=o,e;
case io:return e=Me(13,n,t,l),e.elementType=io,e.lanes=o,e;
case so:return e=Me(19,n,t,l),e.elementType=so,e.lanes=o,e;
case vu:return jl(n,l,o,t);
default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){
case hu:i=10;
break e;
case gu:i=9;
break e;
case oi:i=11;
break e;
case ii:i=14;
break e;
case ut:i=16,r=null;
break e}
throw Error(x(130,e==null?e:typeof e,""))}
return t=Me(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}
function Ot(e,t,n,r){
return e=Me(7,e,r,t),e.lanes=n,e}
function jl(e,t,n,r){
return e=Me(22,e,r,t),e.elementType=vu,e.lanes=n,e.stateNode={
isHidden:!1}
,e}
function eo(e,t,n){
return e=Me(6,e,null,t),e.lanes=n,e}
function to(e,t,n){
return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={
containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation}
,t}
function Ff(e,t,n,r,l){
this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}
function Ui(e,t,n,r,l,o,i,u,a){
return e=new Ff(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={
element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null}
,ji(o),e}
function Vf(e,t,n){
var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
return{
$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}
}
function uc(e){
if(!e)return Nt;
e=e._reactInternals;
e:{
if(At(e)!==e||e.tag!==1)throw Error(x(170));
var t=e;
do{
switch(t.tag){
case 3:t=t.stateNode.context;
break e;
case 1:if(ve(t.type)){
t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e}
}
t=t.return}
while(t!==null);
throw Error(x(171))}
if(e.tag===1){
var n=e.type;
if(ve(n))return ua(e,n,t)}
return t}
function ac(e,t,n,r,l,o,i,u,a){
return e=Ui(n,r,!0,e,l,o,i,u,a),e.context=uc(null),n=e.current,r=de(),l=wt(n),o=et(r,l),o.callback=t??null,yt(n,o,l),e.current.lanes=l,ar(e,l,r),ye(e,r),e}
function Cl(e,t,n,r){
var l=t.current,o=de(),i=wt(l);
return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(o,i),t.payload={
element:e}
,r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(l,t,i),e!==null&&(Ve(e,l,i,o),$r(e,l,i)),i}
function fl(e){
if(e=e.current,!e.child)return null;
switch(e.child.tag){
case 5:return e.child.stateNode;
default:return e.child.stateNode}
}
function Gs(e,t){
if(e=e.memoizedState,e!==null&&e.dehydrated!==null){
var n=e.retryLane;
e.retryLane=n!==0&&n<t?n:t}
}
function Ai(e,t){
Gs(e,t),(e=e.alternate)&&Gs(e,t)}
function Hf(){
return null}
var cc=typeof reportError=="function"?reportError:function(e){
console.error(e)}
;
function Bi(e){
this._internalRoot=e}
El.prototype.render=Bi.prototype.render=function(e){
var t=this._internalRoot;
if(t===null)throw Error(x(409));
Cl(e,t,null,null)}
;
El.prototype.unmount=Bi.prototype.unmount=function(){
var e=this._internalRoot;
if(e!==null){
this._internalRoot=null;
var t=e.containerInfo;
Ht(function(){
Cl(null,e,null,null)}
),t[nt]=null}
}
;
function El(e){
this._internalRoot=e}
El.prototype.unstable_scheduleHydration=function(e){
if(e){
var t=Uu();
e={
blockedOn:null,target:e,priority:t}
;
for(var n=0;
n<ct.length&&t!==0&&t<ct[n].priority;
n++);
ct.splice(n,0,e),n===0&&Bu(e)}
}
;
function Wi(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}
function _l(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}
function Js(){
}
function Uf(e,t,n,r,l){
if(l){
if(typeof r=="function"){
var o=r;
r=function(){
var d=fl(i);
o.call(d)}
}
var i=ac(t,r,e,0,null,!1,!1,"",Js);
return e._reactRootContainer=i,e[nt]=i.current,qn(e.nodeType===8?e.parentNode:e),Ht(),i}
for(;
l=e.lastChild;
)e.removeChild(l);
if(typeof r=="function"){
var u=r;
r=function(){
var d=fl(a);
u.call(d)}
}
var a=Ui(e,0,!1,null,null,!1,!1,"",Js);
return e._reactRootContainer=a,e[nt]=a.current,qn(e.nodeType===8?e.parentNode:e),Ht(function(){
Cl(t,a,n,r)}
),a}
function Pl(e,t,n,r,l){
var o=n._reactRootContainer;
if(o){
var i=o;
if(typeof l=="function"){
var u=l;
l=function(){
var a=fl(i);
u.call(a)}
}
Cl(t,i,e,l)}
else i=Uf(n,t,e,l,r);
return fl(i)}
Vu=function(e){
switch(e.tag){
case 3:var t=e.stateNode;
if(t.current.memoizedState.isDehydrated){
var n=Dn(t.pendingLanes);
n!==0&&(ai(t,n|1),ye(t,X()),!($&6)&&(vn=X()+500,Et()))}
break;
case 13:Ht(function(){
var r=rt(e,1);
if(r!==null){
var l=de();
Ve(r,e,1,l)}
}
),Ai(e,1)}
}
;
ci=function(e){
if(e.tag===13){
var t=rt(e,134217728);
if(t!==null){
var n=de();
Ve(t,e,134217728,n)}
Ai(e,134217728)}
}
;
Hu=function(e){
if(e.tag===13){
var t=wt(e),n=rt(e,t);
if(n!==null){
var r=de();
Ve(n,e,t,r)}
Ai(e,t)}
}
;
Uu=function(){
return I}
;
Au=function(e,t){
var n=I;
try{
return I=e,t()}
finally{
I=n}
}
;
yo=function(e,t,n){
switch(t){
case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){
for(n=e;
n.parentNode;
)n=n.parentNode;
for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;
t<n.length;
t++){
var r=n[t];
if(r!==e&&r.form===e.form){
var l=yl(r);
if(!l)throw Error(x(90));
xu(r),co(r,l)}
}
}
break;
case"textarea":ku(e,n);
break;
case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}
}
;
Pu=Ii;
Mu=Ht;
var Af={
usingClientEntryPoint:!1,Events:[dr,Gt,yl,Eu,_u,Ii]}
,Ln={
findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"}
,Bf={
bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){
return e=Tu(e),e===null?null:e.stateNode}
,findFiberByHostInstance:Ln.findFiberByHostInstance||Hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"}
;
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!zr.isDisabled&&zr.supportsFiber)try{
ml=zr.inject(Bf),be=zr}
catch{
}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;
Ce.createPortal=function(e,t){
var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
if(!Wi(t))throw Error(x(200));
return Vf(e,t,null,n)}
;
Ce.createRoot=function(e,t){
if(!Wi(e))throw Error(x(299));
var n=!1,r="",l=cc;
return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ui(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,qn(e.nodeType===8?e.parentNode:e),new Bi(t)}
;
Ce.findDOMNode=function(e){
if(e==null)return null;
if(e.nodeType===1)return e;
var t=e._reactInternals;
if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));
return e=Tu(t),e=e===null?null:e.stateNode,e}
;
Ce.flushSync=function(e){
return Ht(e)}
;
Ce.hydrate=function(e,t,n){
if(!_l(t))throw Error(x(200));
return Pl(null,e,t,!0,n)}
;
Ce.hydrateRoot=function(e,t,n){
if(!Wi(e))throw Error(x(405));
var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=cc;
if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ac(t,null,e,1,n??null,l,!1,o,i),e[nt]=t.current,qn(e),r)for(e=0;
e<r.length;
e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);
return new El(t)}
;
Ce.render=function(e,t,n){
if(!_l(t))throw Error(x(200));
return Pl(null,e,t,!1,n)}
;
Ce.unmountComponentAtNode=function(e){
if(!_l(e))throw Error(x(40));
return e._reactRootContainer?(Ht(function(){
Pl(null,null,e,!1,function(){
e._reactRootContainer=null,e[nt]=null}
)}
),!0):!1}
;
Ce.unstable_batchedUpdates=Ii;
Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){
if(!_l(n))throw Error(x(200));
if(e==null||e._reactInternals===void 0)throw Error(x(38));
return Pl(e,t,n,!1,r)}
;
Ce.version="18.3.1-next-f1338f8080-20240426";
function dc(){
if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)}
catch(e){
console.error(e)}
}
dc(),du.exports=Ce;
var Wf=du.exports,qs=Wf;
ro.createRoot=qs.createRoot,ro.hydrateRoot=qs.hydrateRoot;
const De=[{
id:"website",title:"Разработка",description:"Чтобы клиент нашёл ваш продукт или услугу, нужен инструмент цифрового присутствия. Выберите подходящий формат.",options:[{
id:"corporate_site",label:"Корпоративный сайт",color:"blue"}
,{
id:"landing_page",label:"Лендинг-пейдж",color:"blue",recommended:!0}
,{
id:"catalog",label:"Каталог товаров",color:"blue",recommended:!0}
,{
id:"web_service",label:"Веб-сервис",color:"blue"}
]}
,{
id:"marketing",title:"Маркетинг",description:"Чтобы сайт, лендинг или каталог действительно приносил клиентов, его нужно продвигать. Выберите каналы маркетинга.",options:[{
id:"seo",label:"SEO",color:"red"}
,{
id:"google_ads",label:"Google Ads",color:"red",recommended:!0}
,{
id:"meta_ads",label:"Meta Ads",color:"red",recommended:!0}
,{
id:"social_media",label:"Соцсети",color:"red"}
],allowMultiple:!0}
,{
id:"crm",title:"CRM",description:"Когда поток клиентов запущен, важно автоматизировать их обработку. Выберите, что нужно от CRM.",options:[{
id:"automation",label:"Автоматизация",color:"yellow"}
,{
id:"integration",label:"Интеграция",color:"yellow",recommended:!0}
,{
id:"setup",label:"Настройка",color:"yellow",recommended:!0}
,{
id:"training",label:"Обучение",color:"yellow"}
],allowMultiple:!0}
],no={
corporate_site:{
title:"Корпоративный сайт",description:"Профессиональный многостраничный сайт для представления вашей компании",technologies:["React/Next.js","WordPress","Tilda"],features:["Адаптивный дизайн","SEO-оптимизация","Система управления контентом","Интеграция с аналитикой"],deliverables:["Дизайн-макеты","Верстка и программирование","Настройка хостинга","Обучение управлению"]}
,landing_page:{
title:"Лендинг-пейдж",description:"Одностраничный сайт для конверсии посетителей в клиентов",technologies:["Tilda","Webflow","Custom HTML/CSS"],features:["Конверсионный дизайн","A/B тестирование","Интеграция с CRM","Формы заявок"],deliverables:["UX/UI дизайн","Копирайтинг","Верстка","Настройка аналитики"]}
,catalog:{
title:"Каталог товаров",description:"Интернет-магазин или каталог с системой управления товарами",technologies:["WooCommerce","Shopify","Custom E-commerce"],features:["Система фильтрации","Корзина и оплата","Управление складом","Интеграция с 1С"],deliverables:["Настройка каталога","Система заказов","Платежные системы","Обучение администрированию"]}
,web_service:{
title:"Веб-сервис",description:"Специализированное веб-приложение для решения бизнес-задач",technologies:["React","Node.js","Python/Django","Cloud Solutions"],features:["Пользовательские роли","API интеграции","База данных","Безопасность"],deliverables:["Техническое задание","Разработка MVP","Тестирование","Деплой и поддержка"]}
,seo:{
title:"SEO-оптимизация",description:"Техническая и контентная оптимизация для поисковых систем",technologies:["Google Search Console","Яндекс.Вебмастер","Screaming Frog","GTM"],features:["Техническая оптимизация","Семантическое ядро","Контент-стратегия","Линкбилдинг"],deliverables:["SEO-аудит","Семантическое ядро","Техническая оптимизация","Контент-план"]}
,google_ads:{
title:"Google Ads",description:"Настройка и ведение рекламных кампаний в Google",technologies:["Google Ads","Google Analytics","Google Tag Manager","Keyword Planner"],features:["Поисковая реклама","Медийная реклама","Ремаркетинг","Оптимизация ставок"],deliverables:["Стратегия кампаний","Настройка аккаунта","Создание объявлений","Еженедельные отчеты"]}
,meta_ads:{
title:"Meta Ads (Facebook/Instagram)",description:"Таргетированная реклама в социальных сетях Meta",technologies:["Meta Business Manager","Facebook Pixel","Instagram API","Creative Hub"],features:["Таргетинг по интересам","Lookalike аудитории","Ретаргетинг","Креативы"],deliverables:["Настройка пикселя","Создание аудиторий","Дизайн креативов","Отчеты по конверсиям"]}
,social_media:{
title:"Соцсети",description:"Комплексное продвижение в социальных медиа",technologies:["Buffer","Hootsuite","Canva","Instagram Creator Studio"],features:["Контент-стратегия","Дизайн постов","Сообщество","Influencer маркетинг"],deliverables:["SMM-стратегия","Контент-план","Дизайн-макеты","Управление сообществом"]}
,automation:{
title:"Автоматизация",description:"Настройка автоматических процессов обработки клиентов",technologies:["Zapier","Make.com","Bitrix24","amoCRM"],features:["Email-воронки","Чат-боты","Автоответчики","Скоринг лидов"],deliverables:["Карта процессов","Настройка автоматизации","Email-последовательности","Тестирование"]}
,integration:{
title:"Интеграция",description:"Подключение CRM к внешним сервисам и системам",technologies:["REST API","Webhooks","Zapier","1С:Коннектор"],features:["Интеграция с сайтом","Подключение к 1С","Email-маркетинг","Аналитика"],deliverables:["API-интеграции","Синхронизация данных","Настройка уведомлений","Документация"]}
,setup:{
title:"Настройка",description:"Полная настройка CRM-системы под ваши бизнес-процессы",technologies:["Битрикс24","amoCRM","Salesforce","HubSpot"],features:["Воронка продаж","Поля и этапы","Права доступа","Отчетность"],deliverables:["Настройка воронок","Создание полей","Настройка ролей","Обучение команды"]}
,training:{
title:"Обучение",description:"Обучение команды работе с CRM и процессами продаж",technologies:["Zoom","Loom","Confluence","Google Workspace"],features:["Индивидуальные занятия","Групповые тренинги","Видео-курсы","Практические задания"],deliverables:["Программа обучения","Видео-инструкции","Практические занятия","Сертификация"]}
}
,bf=({
text:e,onComplete:t,delay:n=15}
)=>{
const[r,l]=J.useState(""),[o,i]=J.useState(0);
return J.useEffect(()=>{
l(""),i(0)}
,[e]),J.useEffect(()=>{
if(o<e.length){
const u=setTimeout(()=>{
l(a=>a+e[o]),i(a=>a+1)}
,n);
return()=>clearTimeout(u)}
else if(t){
const u=setTimeout(t,600);
return()=>clearTimeout(u)}
}
,[o,e,n,t]),s.jsx("p",{
className:"typing-text text-left text-base leading-relaxed text-gray-300",children:r}
)}
,Qf=({
stage:e,stageIndex:t,isActive:n,isCompleted:r,selections:l,onOptionSelect:o,isOptionSelected:i,showDescription:u,showOptions:a,onDescriptionComplete:d,canContinue:g,onContinue:h}
)=>{
const m={
0:"from-blue-400 to-blue-600",1:"from-red-400 to-red-600",2:"from-yellow-400 to-yellow-600"}
,w=v=>({
0:{
gradient:"from-blue-500 to-blue-700",border:"border-blue-500/30",bg:"bg-blue-500/10",accent:"text-blue-400"}
,1:{
gradient:"from-red-500 to-red-700",border:"border-red-500/30",bg:"bg-red-500/10",accent:"text-red-400"}
,2:{
gradient:"from-yellow-500 to-yellow-700",border:"border-yellow-500/30",bg:"bg-yellow-500/10",accent:"text-yellow-400"}
}
)[v],k={
0:s.jsx("svg",{
className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{
strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}
)}
),1:s.jsx("svg",{
className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{
strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M7 4h10"}
)}
),2:s.jsx("svg",{
className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{
strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}
)}
)}
;
return s.jsx("div",{
className:"stage-row mb-8",children:s.jsxs("div",{
className:`
        bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500
        ${r?"border-white/20 bg-white/8":n?`${w(t).border} bg-white/8`:"border-white/10"}
      `,children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("div",{className:`
              w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500
              ${
r?`bg-gradient-to-br ${m[t]} shadow-lg`:n?`bg-gradient-to-br ${m[t]} shadow-lg`:"bg-gray-800/50 border border-gray-600/30"}
            `,children:s.jsx("div",{className:`${
r||n?"text-white":"text-gray-500"}
`,children:k[t]})}),s.jsxs("div",{children:[s.jsx("h3",{className:`text-2xl font-bold transition-all duration-500 ${
r||n?"text-white":"text-gray-500"}
`,children:e.title}),s.jsx("div",{className:`text-sm font-medium ${
r?"text-green-400":n?w(t).accent:"text-gray-500"}
`,children:r?"Завершено":n?"Активно":"Ожидание"})]})]}),s.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
r?"bg-green-500 text-white":n?`bg-gradient-to-br ${m[t]} text-white`:"bg-gray-600 text-gray-300"}
`,children:t+1})]}),n&&s.jsxs("div",{className:"space-y-6",children:[u&&s.jsx("div",{className:"bg-white/5 rounded-lg p-6 border border-white/10",children:s.jsx(bf,{text:e.description,onComplete:d})}),a&&s.jsxs("div",{className:"space-y-6",children:[s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:e.options.map(v=>s.jsx("div",{className:`
                        relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer backdrop-blur-sm
                        hover:scale-105 hover:shadow-lg transform group
                        ${
i(v)?`bg-gradient-to-br from-${v.color}-500/20 to-${v.color}-700/20 border-${v.color}-400 shadow-lg ring-2 ring-white/20`:v.recommended?`bg-${v.color}-500/15 border-${v.color}-400/50 hover:bg-${v.color}-500/25 hover:border-${v.color}-400 animate-pulse-subtle`:`bg-${v.color}-500/10 border-${v.color}-500/30 hover:bg-${v.color}-500/20 hover:border-${v.color}-400`}
                      `,onClick:()=>o(v),style:{animation:"fadeInUp 0.5s ease-out"},children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:`font-semibold group-hover:text-white/90 ${
v.recommended,"text-white"}
`,children:[v.label,v.recommended&&s.jsx("span",{className:`ml-2 text-xs px-2 py-1 rounded-full bg-${
v.color}
-500/30 text-${
v.color}
-300 font-medium`,children:"Рекомендуем"})]}),e.allowMultiple&&i(v)&&s.jsx("div",{className:"w-5 h-5 bg-green-500 rounded-full flex items-center justify-center",children:s.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})})]})},v.id))}),e.allowMultiple&&s.jsx("div",{className:"flex justify-center pt-4",children:s.jsxs("button",{onClick:h,disabled:!g(),className:`
                        px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 
                        transform hover:scale-105 relative overflow-hidden backdrop-blur-sm
                        ${
g()?`bg-gradient-to-r ${m[t]} hover:shadow-lg border border-white/20`:"bg-gray-600/50 border-gray-500/30 cursor-not-allowed opacity-50"}
                      `,children:[s.jsxs("span",{className:"relative z-10 flex items-center",children:[t===De.length-1?"Завершить":"Продолжить",s.jsx("svg",{className:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),g()&&s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"})]})})]})]}),r&&s.jsx("div",{className:"space-y-4",children:s.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4",children:e.description}),s.jsx("div",{className:"flex flex-wrap gap-2",children:l.map((v,L)=>s.jsx("div",{className:`
                      px-3 py-2 rounded-lg border-2 backdrop-blur-sm
                      bg-gradient-to-br from-${
v.color}
-500 to-${
v.color}
-700 
                      border-${
v.color}
-400 shadow-lg ring-1 ring-white/20
                    `,children:s.jsxs("span",{className:"text-white text-sm font-semibold flex items-center",children:[v.label,s.jsx("svg",{className:"w-4 h-4 ml-2 text-green-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})]})},`${
v.id}
-${
L}
`))})]})})]})})},Yf=()=>{const[e,t]=J.useState(0),[n,r]=J.useState(!1),[l,o]=J.useState(!1),[i,u]=J.useState({website:null,marketing:[],crm:[]}),[a,d]=J.useState(!1),[g,h]=J.useState(!1),[m,w]=J.useState(!1),[k,v]=J.useState(!1),[L,f]=J.useState(new Set),[c,p]=J.useState("standard"),[y,N]=J.useState(.25),[_,E]=J.useState(!1),P={development:{name:"Web Development",basePrice:8e3,description:"Custom website or web application with modern design and functionality",features:["Responsive design for all devices","Content management system","SEO optimization","Performance optimization","Basic analytics setup"]},marketing:{name:"Digital Marketing",basePrice:5e3,description:"Comprehensive marketing strategy and campaign execution",features:["Marketing strategy development","Google Ads & Facebook campaigns","Content creation and management","Analytics and reporting","Monthly optimization"]},crm:{name:"CRM & Automation",basePrice:4e3,description:"Customer relationship management and process automation",features:["CRM system setup and customization","Workflow automation","Email marketing integration","Lead scoring and nurturing","Training and documentation"]},consulting:{name:"Strategy Consulting",basePrice:3e3,description:"Strategic guidance for digital transformation",features:["Digital strategy assessment","Technology roadmap","Process optimization plan","Team training recommendations","Implementation support"]}},B={rush:1.5,standard:1,flexible:.9,planning:.8},R=["Simple","Standard","Advanced","Enterprise"],xe=["2-4 weeks","4-8 weeks","8-12 weeks","12-20 weeks"],_t=["1.0x","1.5x","2.0x","3.0x"],Pt=()=>{let S=0,M=0;L.forEach(F=>{const we=P[F];S+=we.basePrice,M+=2});const O=1+y*2;return S*=O,M*=O,S*=B[c],{totalPrice:L.size>0?Math.round(S):0,totalDuration:L.size>0?Math.round(M):0}},{totalPrice:pr,totalDuration:Ml}=Pt(),it=S=>{const M=new Set(L);M.has(S)?M.delete(S):M.add(S),f(M)},kn=S=>{p(S)},j=S=>{E(!0);const M=F=>{const we=F.target.closest(".calculator-dropdown").querySelector(".complexity-slider");if(!we)return;const Ke=we.getBoundingClientRect();let Xe=(F.clientX-Ke.left)/Ke.width;Xe=Math.max(0,Math.min(1,Xe)),N(Xe)},O=()=>{E(!1),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",O),S.preventDefault()},z=()=>{r(!0)},T=()=>{o(!0)},W=S=>{const M=De[e];M.allowMultiple?u(O=>{const F=O[M.id];return F.some(Ke=>Ke.id===S.id)?{...O,[M.id]:F.filter(Ke=>Ke.id!==S.id)}:{...O,[M.id]:[...F,S]}}):(u(O=>({...O,[M.id]:S})),setTimeout(()=>{e<De.length-1&&(t(O=>O+1),r(!0),o(!1))},1e3))},Z=()=>{const S=De[e];(S.allowMultiple?i[S.id].length>0:i[S.id]!==null)&&(e<De.length-1?(t(O=>O+1),r(!0),o(!1)):d(!0))},Bt=()=>{w(!0)},Ye=()=>{h(!0)},Sn=()=>{if(g)h(!1),w(!0);else if(m)w(!1),d(!0);else if(a){d(!1);const S=De.length-1;t(S),r(!1),o(!0)}else if(l&&!n)o(!1),r(!0);else if(n&&e>0){t(M=>M-1),r(!1),o(!0);const S=De[e];S&&u(M=>({...M,[S.id]:S.allowMultiple?[]:null}))}else n&&e===0&&(r(!1),o(!1))},Ue=()=>{t(0),r(!1),o(!1),u({website:null,marketing:[],crm:[]}),d(!1),h(!1),w(!1)},Wt=S=>{var O;const M=De[e];return M.allowMultiple?i[M.id].some(F=>F.id===S.id):((O=i[M.id])==null?void 0:O.id)===S.id},fc=()=>{const S=De[e];return S.allowMultiple?i[S.id].length>0:i[S.id]!==null},pc=S=>{const M=i[S];return Array.isArray(M)?M:M?[M]:[]},mc=S=>{const M=De[S],O=i[M.id];return M.allowMultiple?Array.isArray(O)&&O.length>0:O!==null},hc=()=>{const S=[];if(i.website&&S.push({category:"Разработка",color:"blue",icon:s.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),solutions:[no[i.website.id]]}),i.marketing.length>0){const M=i.marketing.map(O=>no[O.id]);S.push({category:"Маркетинг",color:"red",icon:s.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M7 4h10"})}),solutions:M})}if(i.crm.length>0){const M=i.crm.map(O=>no[O.id]);S.push({category:"CRM",color:"yellow",icon:s.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),solutions:M})}return S};return s.jsxs("div",{className:"min-h-200px text-white relative overflow-hidden",style:{},children:[s.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,backgroundSize:"50px 50px",animation:"grid-move 20s linear infinite"}}),s.jsx("div",{className:"absolute w-12 h-12 top-60 right-8 border border-red-500/20 rounded-full",style:{animation:"pulse-glow 3s ease-in-out infinite"}}),s.jsx("style",{jsx:!0,children:`
        @keyframes fadeInRight {
          from {
 opacity: 0;
 transform: translateX(-20px);
 }
          to {
 opacity: 1;
 transform: translateX(0);
 }
        }
        
        @keyframes fadeInUp {
          from {
 opacity: 0;
 transform: translateY(20px);
 }
          to {
 opacity: 1;
 transform: translateY(0);
 }
        }
        
        @keyframes grid-move {
          0% {
 background-position: 0 0;
 }
          100% {
 background-position: 50px 50px;
 }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
 box-shadow: 0 0 5px rgba(239, 68, 68, 0.3);
 }
          50% {
 box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
 }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
 opacity: 1;
 box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
 }
          50% {
 opacity: 0.9;
 box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
 }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .typing-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
        }
        
        /* AI Assistant Styles */
        .glow-container {
          position: relative;
          display: inline-block;
        }
        
        .robot-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #eab308 50%, #ef4444 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }
        
        .robot-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, #3b82f6, #eab308, #ef4444, #3b82f6);
          animation: rotate-glow 3s linear infinite;
          z-index: -1;
        }
        
        .robot-icon::after {
          content: '';
          position: absolute;
          inset: 3px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          border-radius: 50%;
          z-index: -1;
        }
        
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid;
          border-radius: 50%;
          animation: pulse-expand 3s ease-in-out infinite;
        }
        
        .pulse-ring:nth-child(1) {
          animation-delay: 0s;
          animation-duration: 3s;
        }
        
        .pulse-ring:nth-child(2) {
          animation-delay: 1s;
          animation-duration: 3s;
        }
        
        .pulse-ring:nth-child(3) {
          animation-delay: 2s;
          animation-duration: 3s;
        }
        
    
        @keyframes rotate-glow {
          0% {
 transform: rotate(0deg);
 }
          100% {
 transform: rotate(360deg);
 }
        }
        
        @keyframes pulse-expand {
          0% {
            width: 96px;
            height: 96px;
            opacity: 0.8;
            border-color: rgba(59, 130, 246, 0.8);
            border-radius: 50%;
          }
          33% {
            border-color: rgba(234, 179, 8, 0.6);
            opacity: 0.6;
          }
          66% {
            border-color: rgba(239, 68, 68, 0.4);
            opacity: 0.3;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
            border-color: rgba(239, 68, 68, 0);
            border-radius: 50%;
          }
        }
        
        .floating-particles {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--particle-color);
          border-radius: 50%;
          opacity: 0.6;
          animation: float-around 8s infinite ease-in-out;
        }
        
        .particle-1 {
 --particle-color: #3b82f6;
 top: 20%;
 left: 15%;
 animation-delay: 0s;
 }
        .particle-2 {
 --particle-color: #eab308;
 top: 30%;
 right: 20%;
 animation-delay: 1s;
 }
        .particle-3 {
 --particle-color: #ef4444;
 bottom: 25%;
 left: 20%;
 animation-delay: 2s;
 }
        .particle-4 {
 --particle-color: #3b82f6;
 bottom: 35%;
 right: 15%;
 animation-delay: 3s;
 }
        .particle-5 {
 --particle-color: #eab308;
 top: 15%;
 right: 30%;
 animation-delay: 4s;
 }
        .particle-6 {
 --particle-color: #ef4444;
 bottom: 20%;
 right: 35%;
 animation-delay: 5s;
 }
        
        @keyframes float-around {
          0%, 100% {
 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          25% {
 
            transform: translateY(-20px) translateX(15px) scale(1.3);
            opacity: 0.9;
          }
          50% {
 
            transform: translateY(-10px) translateX(-10px) scale(0.8);
            opacity: 0.4;
          }
          75% {
 
            transform: translateY(-25px) translateX(20px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        .try-button {
          background: transparent;
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .try-button:hover {
          transform: scale(1.05);
        }
        
        .calculator-button {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .calculator-button:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(234, 179, 8, 0.3);
          transform: translateY(-2px);
        }
        
        .calculator-dropdown {
          animation: slideDown 0.5s ease-out;
          max-height: 3000px;
          opacity: 1;
        }
        
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            max-height: 3000px;
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .service-cardy {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .service-cardy.selected {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .service-cardy.development.selected {
          border-color: #3b82f6;
          background: #eff6ff;
        }
        
        .service-cardy.marketing.selected {
          border-color: #ef4444;
          background: #fef2f2;
        }
        
        .service-cardy.crm.selected {
          border-color: #eab308;
          background: #fefce8;
        }
        
        .service-cardy.consulting.selected {
          border-color: #10b981;
          background: #f0fdf4;
        }
        
        .service-cardy:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .service-icon {
          transition: all 0.3s ease;
        }
        
        .service-card.selected .service-icon {
          transform: scale(1.1);
        }
        
        .complexity-slider {
          background: #e2e8f0;
          border-radius: 12px;
          height: 8px;
          position: relative;
          overflow: hidden;
        }
        
        .complexity-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #eab308, #ef4444);
          border-radius: 12px;
          transition: width 0.3s ease;
        }
        
        .complexity-thumb {
          width: 24px;
          height: 24px;
          background: #ffffff;
          border: 3px solid #3b82f6;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          cursor: grab;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
        }
        
        .complexity-thumb:hover {
          transform: translateX(-50%) translateY(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        
        .complexity-thumb:active {
          cursor: grabbing;
          transform: translateX(-50%) translateY(-50%) scale(1.05);
        }
        
        .timeline-option {
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .timeline-option.selected {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
          transform: scale(1.02);
        }
        
        .timeline-option:hover:not(.selected) {
          border-color: #3b82f6;
          background: #eff6ff;
        }
      `}),s.jsx("div",{className:"relative z-10 p-8",children:s.jsxs("div",{className:"max-w-6xl mx-auto",children:[(n||e>0)&&s.jsxs("div",{className:"fixed top-6 left-6 z-50 flex space-x-4",children:[s.jsxs("button",{onClick:Ue,className:"flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-300 hover:text-red-200 transition-all duration-300 backdrop-blur-sm",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),s.jsx("span",{className:"text-sm font-medium",children:"Выйти"})]}),(e>0||l)&&s.jsxs("button",{onClick:Sn,className:"flex items-center space-x-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/30 rounded-lg text-gray-300 hover:text-gray-200 transition-all duration-300 backdrop-blur-sm",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"text-sm font-medium",children:"Назад"})]})]}),e===0&&!n&&s.jsxs("div",{className:"relative min-h-[400px]",children:[s.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[s.jsx("div",{className:"floating-particles particle-1"}),s.jsx("div",{className:"floating-particles particle-2"}),s.jsx("div",{className:"floating-particles particle-3"}),s.jsx("div",{className:"floating-particles particle-4"}),s.jsx("div",{className:"floating-particles particle-5"}),s.jsx("div",{className:"floating-particles particle-6"})]}),s.jsxs("h4",{className:"absolute top-0 left-0 text-lg font-medium text-gray-300 mb-4",children:["Wondering where to start?",s.jsx("br",{}),s.jsx("span",{className:"text-transparent bg-clip-text font-semibold",style:{background:"linear-gradient(135deg, #3b82f6 0%, #eab308 50%, #ef4444 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Ask our AI assistant"})]}),s.jsxs("div",{className:"text-center pt-16 pb-8",children:[s.jsxs("div",{className:"glow-container relative inline-block",children:[s.jsx("div",{className:"pulse-ring"}),s.jsx("div",{className:"pulse-ring"}),s.jsx("div",{className:"pulse-ring"}),s.jsx("div",{className:"robot-icon w-24 h-24 mx-auto relative z-10 cursor-pointer",onClick:z,children:s.jsx("svg",{className:"w-12 h-12 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L18 4H6L3 7V9H4V15H3V17H5V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V17H13V20C13 21.1 13.9 22 15 22H17C18.1 22 19 21.1 19 20V17H21V15H20V9H21ZM18 15H6V9H18V15ZM8 11C8 10.4 8.4 10 9 10S10 10.4 10 11S9.6 12 9 12S8 11.6 8 11ZM14 11C14 10.4 14.4 10 15 10S16 10.4 16 11S15.6 12 15 12S14 11.6 14 11Z"})})})]}),s.jsx("div",{className:"mt-8",children:s.jsx("button",{className:"try-button px-8 py-4 rounded-xl font-semibold text-white text-lg relative group",onClick:z,children:s.jsx("span",{className:"relative z-10",children:"Try Me"})})})]}),s.jsxs("div",{className:"absolute bottom-0 right-0 text-right",children:[s.jsxs("p",{className:"text-sm text-gray-400 mb-3",children:["Or, you can use our manual",s.jsx("br",{}),"calculator as well"]}),s.jsxs("button",{className:"calculator-button px-4 py-3 rounded-lg text-sm text-gray-300 flex items-center space-x-2",onClick:()=>v(!k),children:[s.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM6.5 7.5H9.5V9H6.5V7.5ZM6.5 10.5H9.5V12H6.5V10.5ZM6.5 13.5H9.5V15H6.5V13.5ZM10.5 7.5H13.5V9H10.5V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM14.5 7.5H17.5V9H14.5V7.5ZM14.5 10.5H17.5V12H14.5V10.5ZM14.5 13.5H17.5V17.5H14.5V13.5ZM6.5 16H13.5V17.5H6.5V16Z"})}),s.jsx("span",{children:"Manual calculator"}),s.jsx("svg",{className:`w-4 h-4 ml-1 transition-transform duration-300 ${
k?"rotate-180":""}
`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]})]})]}),k&&e===0&&!n&&s.jsx("div",{className:"calculator-dropdown mt-8 overflow-hidden",children:s.jsx("div",{className:"bg-white backdrop-blur-lg rounded-2xl p-12 transition-all duration-500 ease-out transform",style:{boxShadow:"0 32px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"},children:s.jsxs("div",{className:"max-w-6xl mx-auto relative",children:[s.jsxs("div",{className:"mb-12",children:[s.jsxs("div",{className:"flex items-center mb-8",children:[s.jsxs("div",{className:"w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-25"}),"1"]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:"Choose Your Services"}),s.jsx("p",{className:"text-gray-600",children:"Select the digital solutions your business needs"})]})]}),s.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[s.jsxs("div",{className:`service-cardy development rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
L.has("development")?"bg-blue-50 border-blue-500 transform -translate-y-2 shadow-lg":"bg-gray-50 border-gray-200 hover:border-blue-500 hover:-translate-y-1"}
 border-2`,onClick:()=>it("development"),children:[s.jsx("div",{className:`w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
L.has("development")?"scale-110":""}
`,children:s.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Web Development"}),s.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Custom websites & platforms"}),s.jsx("div",{className:"text-xs text-blue-600 font-medium",children:"€3,000 - €25,000"})]}),s.jsxs("div",{className:`service-cardy marketing rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
L.has("marketing")?"bg-red-50 border-red-500 transform -translate-y-2 shadow-lg":"bg-gray-50 border-gray-200 hover:border-red-500 hover:-translate-y-1"}
 border-2`,onClick:()=>it("marketing"),children:[s.jsx("div",{className:`w-12 h-12 mx-auto mb-4 bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
L.has("marketing")?"scale-110":""}
`,children:s.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"})})}),s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Digital Marketing"}),s.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Ads, SEO & campaigns"}),s.jsx("div",{className:"text-xs text-red-600 font-medium",children:"€2,000 - €15,000"})]}),s.jsxs("div",{className:`service-cardy crm rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
L.has("crm")?"bg-yellow-50 border-yellow-500 transform -translate-y-2 shadow-lg":"bg-gray-50 border-gray-200 hover:border-yellow-500 hover:-translate-y-1"}
 border-2`,onClick:()=>it("crm"),children:[s.jsx("div",{className:`w-12 h-12 mx-auto mb-4 bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
L.has("crm")?"scale-110":""}
`,children:s.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"CRM & Automation"}),s.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Process optimization"}),s.jsx("div",{className:"text-xs text-yellow-600 font-medium",children:"€1,500 - €10,000"})]}),s.jsxs("div",{className:`service-cardy consulting rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
L.has("consulting")?"bg-green-50 border-green-500 transform -translate-y-2 shadow-lg":"bg-gray-50 border-gray-200 hover:border-green-500 hover:-translate-y-1"}
 border-2`,onClick:()=>it("consulting"),children:[s.jsx("div",{className:`w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
L.has("consulting")?"scale-110":""}
`,children:s.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Strategy Consulting"}),s.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Digital transformation"}),s.jsx("div",{className:"text-xs text-green-600 font-medium",children:"€1,000 - €8,000"})]})]})]}),s.jsxs("div",{className:"mb-12",children:[s.jsxs("div",{className:"flex items-center mb-8",children:[s.jsx("div",{className:"w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold mr-4",children:"2"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:"Project Complexity"}),s.jsx("p",{className:"text-gray-600",children:"How complex should your solution be?"})]})]}),s.jsxs("div",{className:"bg-gray-50 rounded-xl p-8",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[s.jsx("span",{children:"Simple"}),s.jsx("span",{children:"Standard"}),s.jsx("span",{children:"Advanced"}),s.jsx("span",{children:"Enterprise"})]}),s.jsxs("div",{className:"complexity-slider relative bg-gray-200 rounded-full h-2",children:[s.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full transition-all duration-300",style:{width:`${
y*100}
%`}}),s.jsx("div",{className:"w-6 h-6 bg-white border-3 border-blue-500 rounded-full absolute top-1/2 cursor-grab shadow-lg transition-all duration-200 hover:scale-110",style:{left:`${
y*100}
%`,transform:"translateX(-50%) translateY(-50%)"},onMouseDown:j})]})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-4 text-center",children:[s.jsxs("div",{className:"bg-white rounded-lg p-4 border",children:[s.jsx("div",{className:"text-sm font-medium text-gray-900 mb-1",children:"Current Level"}),s.jsx("div",{className:"text-lg font-bold text-blue-600",children:R[Math.floor(y*3.99)]})]}),s.jsxs("div",{className:"bg-white rounded-lg p-4 border",children:[s.jsx("div",{className:"text-sm font-medium text-gray-900 mb-1",children:"Estimated Time"}),s.jsx("div",{className:"text-lg font-bold text-gray-900",children:xe[Math.floor(y*3.99)]})]}),s.jsxs("div",{className:"bg-white rounded-lg p-4 border",children:[s.jsx("div",{className:"text-sm font-medium text-gray-900 mb-1",children:"Complexity Factor"}),s.jsx("div",{className:"text-lg font-bold text-gray-900",children:_t[Math.floor(y*3.99)]})]})]})]})]}),s.jsxs("div",{className:"mb-12",children:[s.jsxs("div",{className:"flex items-center mb-8",children:[s.jsx("div",{className:"w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold mr-4",children:"3"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:"Project Timeline"}),s.jsx("p",{className:"text-gray-600",children:"When do you need your project completed?"})]})]}),s.jsx("div",{className:"grid md:grid-cols-4 gap-4",children:[{id:"rush",label:"Rush",time:"1-2 weeks",cost:"+50% cost",color:"text-red-600"},{id:"standard",label:"Standard",time:"3-6 weeks",cost:"Normal pricing",color:"text-gray-600"},{id:"flexible",label:"Flexible",time:"6-10 weeks",cost:"-10% cost",color:"text-green-600"},{id:"planning",label:"Planning Phase",time:"Future project",cost:"-20% cost",color:"text-green-600"}].map(S=>s.jsxs("div",{className:`rounded-lg p-4 text-center cursor-pointer transition-all duration-300 border-2 ${
c===S.id?"bg-blue-500 text-white border-blue-500 scale-102":"bg-gray-100 hover:bg-blue-50 border-gray-200 hover:border-blue-500"}
`,onClick:()=>kn(S.id),children:[s.jsx("div",{className:`font-semibold mb-1 ${
c===S.id?"text-white":"text-gray-900"}
`,children:S.label}),s.jsx("div",{className:`text-sm mb-2 ${
c===S.id?"text-blue-100":"text-gray-600"}
`,children:S.time}),s.jsx("div",{className:`text-xs font-medium ${
c===S.id?"text-white":S.color}
`,children:S.cost})]},S.id))})]}),s.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-8 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"}),s.jsxs("div",{className:"flex items-center mb-6",children:[s.jsx("div",{className:"w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4",children:s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:"Your Custom Estimate"}),s.jsx("p",{className:"text-gray-600",children:"Based on your selections"})]})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[s.jsxs("div",{className:"bg-white rounded-xl p-6 text-center border-2 border-gray-100",children:[s.jsx("div",{className:"text-sm font-medium text-gray-600 mb-2",children:"Total Investment"}),s.jsxs("div",{className:"text-3xl font-bold text-gray-900 mb-1",children:["€",pr.toLocaleString()]}),s.jsx("div",{className:"text-sm text-gray-500",children:"Estimated range"})]}),s.jsxs("div",{className:"bg-white rounded-xl p-6 text-center border-2 border-gray-100",children:[s.jsx("div",{className:"text-sm font-medium text-gray-600 mb-2",children:"Project Duration"}),s.jsxs("div",{className:"text-3xl font-bold text-blue-600 mb-1",children:[Ml," weeks"]}),s.jsx("div",{className:"text-sm text-gray-500",children:"Including revisions"})]}),s.jsxs("div",{className:"bg-white rounded-xl p-6 text-center border-2 border-gray-100",children:[s.jsx("div",{className:"text-sm font-medium text-gray-600 mb-2",children:"Services Selected"}),s.jsx("div",{className:"text-3xl font-bold text-green-600 mb-1",children:L.size}),s.jsx("div",{className:"text-sm text-gray-500",children:"Digital solutions"})]})]}),s.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[s.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Your Digital Package Includes:"}),s.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:L.size===0?s.jsx("div",{className:"text-gray-400 italic",children:"Select services above to see what's included"}):Array.from(L).map(S=>{const M=P[S];return s.jsxs("div",{className:"bg-white rounded-lg p-4 border",children:[s.jsx("div",{className:"font-semibold text-gray-900 mb-2",children:M.name}),s.jsx("div",{className:"text-sm text-gray-600 mb-3",children:M.description}),s.jsx("ul",{className:"text-xs text-gray-500 space-y-1",children:M.features.map((O,F)=>s.jsxs("li",{children:["• ",O]},F))})]},S)})})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[s.jsx("button",{className:"flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg",children:s.jsxs("span",{className:"flex items-center justify-center",children:["Get Detailed Proposal",s.jsx("svg",{className:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})]})}),s.jsx("button",{onClick:()=>v(!1),className:"flex-1 py-4 px-6 rounded-lg font-semibold text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300",children:"Close Calculator"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold text-gray-900",children:"150+"}),s.jsx("div",{className:"text-xs text-gray-500",children:"Projects Completed"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold text-gray-900",children:"48h"}),s.jsx("div",{className:"text-xs text-gray-500",children:"Response Time"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold text-gray-900",children:"98%"}),s.jsx("div",{className:"text-xs text-gray-500",children:"Client Satisfaction"})]})]})]})]})})}),(n||e>0)&&s.jsxs("div",{className:"mindmap-container space-y-8",children:[s.jsx("h2",{className:"text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Ваше цифровое древо"}),De.map((S,M)=>{const O=M===e,F=M<e||M===e&&a,we=pc(S.id);return M<=e||mc(M)?s.jsx(Qf,{stage:S,stageIndex:M,isActive:O&&!a,isCompleted:F,selections:we,onOptionSelect:W,isOptionSelected:Wt,showDescription:n&&O,showOptions:l&&O,onDescriptionComplete:T,canContinue:fc,onContinue:Z},S.id):null})]}),a&&!g&&!m&&s.jsxs("div",{className:"text-center space-y-8 mt-16",children:[s.jsxs("div",{className:"inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm mb-6",children:[s.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"}),"Древо решений готово"]}),s.jsx("h2",{className:"text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent",children:"Ваша цифровая экосистема сформирована!"}),s.jsx("p",{className:"text-lg text-gray-300 mb-8 max-w-2xl mx-auto",children:"Полная архитектура для вашего бизнеса готова. Посмотрим детальный план реализации?"}),s.jsxs("button",{onClick:Bt,className:`px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold text-white 
                         hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 
                         relative overflow-hidden backdrop-blur-sm border border-white/20 group`,children:[s.jsx("span",{className:"relative z-10",children:"Показать детальный план"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"})]})]}),m&&!g&&s.jsxs("div",{className:"space-y-8 mt-8",children:[s.jsxs("div",{className:"text-center space-y-6 mb-12",children:[s.jsxs("div",{className:"inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium backdrop-blur-sm",children:[s.jsx("span",{className:"w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"}),"Ваш персональный пакет решений"]}),s.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Вот что мы для вас подготовили"}),s.jsx("p",{className:"text-lg text-gray-300 max-w-3xl mx-auto",children:"На основе ваших выборов наш ИИ-консультант составил детальный план реализации проекта с конкретными технологиями и решениями"})]}),s.jsx("div",{className:"space-y-12 max-w-6xl mx-auto",children:hc().map((S,M)=>{const F={blue:{gradient:"from-blue-500 to-blue-700",border:"border-blue-500/30",bg:"bg-blue-500/10",accent:"text-blue-400"},red:{gradient:"from-red-500 to-red-700",border:"border-red-500/30",bg:"bg-red-500/10",accent:"text-red-400"},yellow:{gradient:"from-yellow-500 to-yellow-700",border:"border-yellow-500/30",bg:"bg-yellow-500/10",accent:"text-yellow-400"}}[S.color];return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:`
                        flex items-center space-x-4 p-6 rounded-xl border-2 backdrop-blur-sm
                        ${
F.bg}
 ${
F.border}
                      `,children:[s.jsx("div",{className:`
                          w-16 h-16 rounded-xl flex items-center justify-center
                          bg-gradient-to-br ${
F.gradient}
 shadow-lg
                        `,children:s.jsx("div",{className:"text-white",children:S.icon})}),s.jsxs("div",{children:[s.jsx("h3",{className:`text-3xl font-bold ${
F.accent}
 mb-1`,children:S.category}),s.jsx("p",{className:"text-gray-300",children:S.solutions.length===1?"1 решение":`${
S.solutions.length}
 решения`})]}),s.jsx("div",{className:"flex-1"}),s.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold bg-gradient-to-br ${
F.gradient}
 text-white`,children:M+1})]}),s.jsx("div",{className:"grid gap-6",children:S.solutions.map((we,Ke)=>s.jsxs("div",{className:`
                              bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300
                              hover:bg-white/8 ${
F.border}
 hover:border-opacity-50
                            `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-6",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-2xl font-bold text-white mb-2",children:we.title}),s.jsx("p",{className:"text-gray-300 text-base leading-relaxed",children:we.description})]}),s.jsx("div",{className:`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${
F.gradient}
`,children:s.jsx("span",{className:"text-white font-bold text-lg",children:S.solutions.length===1?"●":Ke+1})})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[s.jsxs("div",{children:[s.jsx("h5",{className:`text-sm font-semibold ${
F.accent}
 mb-3 uppercase tracking-wide`,children:"Технологии"}),s.jsx("div",{className:"space-y-2",children:we.technologies.map((Xe,Nn)=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("div",{className:`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
F.gradient}
`}),s.jsx("span",{className:"text-gray-300 text-sm",children:Xe})]},Nn))})]}),s.jsxs("div",{children:[s.jsx("h5",{className:`text-sm font-semibold ${
F.accent}
 mb-3 uppercase tracking-wide`,children:"Возможности"}),s.jsx("div",{className:"space-y-2",children:we.features.map((Xe,Nn)=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("div",{className:`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
F.gradient}
`}),s.jsx("span",{className:"text-gray-300 text-sm",children:Xe})]},Nn))})]}),s.jsxs("div",{children:[s.jsx("h5",{className:`text-sm font-semibold ${
F.accent}
 mb-3 uppercase tracking-wide`,children:"Что получите"}),s.jsx("div",{className:"space-y-2",children:we.deliverables.map((Xe,Nn)=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("div",{className:`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
F.gradient}
`}),s.jsx("span",{className:"text-gray-300 text-sm",children:Xe})]},Nn))})]})]})]},Ke))})]},M)})}),s.jsxs("div",{className:"text-center space-y-6 mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 backdrop-blur-sm",children:[s.jsx("h3",{className:"text-2xl font-bold text-white",children:"Готовы начать реализацию?"}),s.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Наша команда экспертов готова воплотить этот план в жизнь. Отправьте запрос, и мы свяжемся с вами в течение 24 часов для обсуждения деталей и сроков."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[s.jsxs("button",{onClick:Ye,className:`px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white 
                             hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 
                             relative overflow-hidden backdrop-blur-sm border border-white/20 group`,children:[s.jsxs("span",{className:"relative z-10 flex items-center",children:["Отправить запрос",s.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"})]}),s.jsx("button",{onClick:()=>w(!1),className:`px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white 
                             hover:bg-white/20 transition-all duration-300 transform hover:scale-105`,children:"Изменить выбор"})]})]})]}),g&&s.jsxs("div",{className:"text-center space-y-8",children:[s.jsxs("div",{className:"inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm mb-6",children:[s.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"}),"Запрос отправлен"]}),s.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4",children:"Спасибо!"}),s.jsx("p",{className:"text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"Ваш запрос отправлен. Мы проанализируем ваше цифровое древо и свяжемся с вами в ближайшее время."}),s.jsx("button",{onClick:Ue,className:`px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-white 
                         hover:bg-white/20 transition-all duration-300 transform hover:scale-105`,children:"Создать новое древо"})]})]})})]})};ro.createRoot(document.getElementById("react-root")).render(s.jsx(Tc.StrictMode,{children:s.jsx(Yf,{})}));

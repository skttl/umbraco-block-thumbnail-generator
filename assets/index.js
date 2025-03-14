(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Y=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),et=new WeakMap;let pt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&et.set(e,t))}return t}toString(){return this.cssText}};const $t=i=>new pt(typeof i=="string"?i:i+"",void 0,X),q=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new pt(e,i,X)},_t=(i,t)=>{if(Y)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=I.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},rt=Y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return $t(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:xt,getOwnPropertyDescriptor:St,getOwnPropertyNames:At,getOwnPropertySymbols:Ct,getPrototypeOf:Et}=Object,v=globalThis,st=v.trustedTypes,kt=st?st.emptyScript:"",F=v.reactiveElementPolyfillSupport,R=(i,t)=>i,H={toAttribute(i,t){switch(t){case Boolean:i=i?kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Q=(i,t)=>!wt(i,t),it={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&xt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=St(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,r=[...At(e),...Ct(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(rt(s))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:H).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:H;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Q)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[R("elementProperties")]=new Map,C[R("finalized")]=new Map,F==null||F({ReactiveElement:C}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,N=T.trustedTypes,ot=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,ut="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+b,Pt=`<${gt}>`,A=document,z=()=>A.createComment(""),D=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,Ot=i=>tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",V=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,w=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),x=Ut(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,S=A.createTreeWalker(A,129);function mt(i,t){if(!tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Rt=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=U;for(let l=0;l<e;l++){const a=i[l];let h,d,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===U?d[1]==="!--"?n=nt:d[1]!==void 0?n=at:d[2]!==void 0?(ft.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=w):d[3]!==void 0&&(n=w):n===w?d[0]===">"?(n=s??U,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?w:d[3]==='"'?dt:lt):n===dt||n===lt?n=w:n===nt||n===at?n=U:(n=w,s=void 0);const m=n===w&&i[l+1].startsWith("/>")?" ":"";o+=n===U?a+Pt:c>=0?(r.push(h),a.slice(0,c)+ut+a.slice(c)+b+m):a+b+(c===-2?l:m)}return[mt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class L{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[h,d]=Rt(t,e);if(this.el=L.createElement(h,r),S.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ut)){const g=d[n++],m=s.getAttribute(c).split(b),p=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:p[2],strings:m,ctor:p[1]==="."?zt:p[1]==="?"?Dt:p[1]==="@"?Lt:Z}),s.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(ft.test(s.tagName)){const c=s.textContent.split(b),g=c.length-1;if(g>0){s.textContent=N?N.emptyScript:"";for(let m=0;m<g;m++)s.append(c[m],z()),S.nextNode(),a.push({type:2,index:++o});s.append(c[g],z())}}}else if(s.nodeType===8)if(s.data===gt)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:o}),c+=b.length-1}o++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function k(i,t,e=i,r){var n,l;if(t===E)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=k(i,s._$AS(i,t.values),s,r)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);S.currentNode=s;let o=S.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new B(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new Bt(o,this,t)),this._$AV.push(h),a=r[++l]}n!==(a==null?void 0:a.index)&&(o=S.nextNode(),n++)}return S.currentNode=A,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=L.createElement(mt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Tt(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new L(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new B(this.O(z()),this.O(z()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=k(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const l=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=k(this,l[r+a],e,a),h===E&&(h=this._$AH[a]),n||(n=!D(h)||h!==this._$AH[a]),h===u?t=u:t!==u&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Dt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Lt extends Z{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??u)===E)return;const r=this._$AH,s=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const K=T.litHtmlPolyfillSupport;K==null||K(L,B),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const It=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new B(t.insertBefore(z(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};var ht;y._$litElement$=!0,y.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:y});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:Q},Nt=(i=Ht,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.P(n,void 0,i),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function bt(i){return(t,e)=>typeof e=="object"?Nt(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(i){return bt({...i,state:!0,attribute:!1})}var jt=Object.getOwnPropertyDescriptor,Mt=(i,t,e,r)=>{for(var s=r>1?void 0:r?jt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(s)||s);return s};let G=class extends y{constructor(){super(...arguments),this.canvas=null,this.ctx=null}firstUpdated(){const i=this.renderRoot.querySelector("#canvas");if(i){this.canvas=i;const r=i.getContext("2d");r&&(this.ctx=r)}const t=this.renderRoot.querySelector("#dropZone"),e=this.renderRoot.querySelector("#fileInput");t&&(t.addEventListener("dragover",r=>this.handleDragOver(r)),t.addEventListener("dragleave",r=>this.handleDragLeave(r)),t.addEventListener("drop",r=>this.handleDrop(r)),t.addEventListener("click",()=>e==null?void 0:e.click())),e&&e.addEventListener("change",r=>{var o;const s=(o=r.target.files)==null?void 0:o[0];s&&this.handleFile(s)}),window.addEventListener("paste",r=>{var o;const s=(o=r.clipboardData)==null?void 0:o.items;if(s){for(let n=0;n<s.length;n++)if(s[n].type.indexOf("image")!==-1){const l=s[n].getAsFile();if(l){this.handleFile(l);break}}}})}handleDragOver(i){i.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.add("dragover")}handleDragLeave(i){i.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.remove("dragover")}handleDrop(i){var r;i.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.remove("dragover");const e=(r=i.dataTransfer)==null?void 0:r.files[0];e&&e.type.startsWith("image/")&&this.handleFile(e)}handleFile(i){if(!i)return;const t=new FileReader;t.onload=e=>{var s;const r=new Image;r.onload=()=>{if(this.canvas&&this.ctx){const o=this.renderRoot.querySelector("#dropZone");o==null||o.classList.add("has-image");const n=document.createElement("canvas"),l=n.getContext("2d");if(l){n.width=r.width,n.height=r.height,l.drawImage(r,0,0);const a=[],d=l.getImageData(0,0,r.width,r.height).data;for(let p=0;p<r.width;p++){const f=(p+0*r.width)*4;a.push({r:d[f],g:d[f+1],b:d[f+2]});const _=(p+(r.height-1)*r.width)*4;a.push({r:d[_],g:d[_+1],b:d[_+2]})}for(let p=0;p<r.height;p++){const f=(0+p*r.width)*4;a.push({r:d[f],g:d[f+1],b:d[f+2]});const _=(r.width-1+p*r.width)*4;a.push({r:d[_],g:d[_+1],b:d[_+2]})}const c=new Map;a.forEach(p=>{const f=`#${p.r.toString(16).padStart(2,"0")}${p.g.toString(16).padStart(2,"0")}${p.b.toString(16).padStart(2,"0")}`;c.set(f,(c.get(f)||0)+1)});let g="#ffffff",m=0;c.forEach((p,f)=>{p>m&&(m=p,g=f)}),this.dispatchEvent(new CustomEvent("image-loaded",{detail:{image:r,backgroundColor:g},bubbles:!0,composed:!0}))}}},r.src=(s=e.target)==null?void 0:s.result},t.readAsDataURL(i)}render(){return x`
      <div id="dropZone">
        <canvas id="canvas"></canvas>
        <div class="dropzone-text">
          <p>Drop image here, paste from clipboard, or click to upload</p>
          <input type="file" id="fileInput" accept="image/*" style="display: none;">
        </div>
      </div>
    `}};G.styles=q`
    :host {
      display: block;
      width: 100%;
    }
    #dropZone {
      width: 100%;
      aspect-ratio: 8/5;
      border: 2px dashed var(--primary);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
      background: var(--background);
    }
    #dropZone:hover {
      border-color: var(--primary-light);
      background: var(--background-dark);
    }
    #dropZone.dragover {
      border-color: var(--accent);
      background: color-mix(in srgb, var(--accent) 10%, transparent);
    }
    #dropZone.has-image {
      border-style: solid;
      border-color: var(--primary);
    }
    #dropZone.has-image:hover {
      border-color: var(--primary-light);
    }
    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    #dropZone.has-image canvas {
      opacity: 1;
    }
    #dropZone.has-image .dropzone-text {
      opacity: 0;
      background: color-mix(in srgb, var(--background) 95%, transparent);
      margin: 20px;
      padding: 16px 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    #dropZone.has-image:hover .dropzone-text {
      opacity: 0.98;
    }
    .dropzone-text {
      font-size: 16px;
      color: var(--primary-dark);
      text-align: center;
      padding: 20px;
      user-select: none;
      position: relative;
      z-index: 1;
      transition: all 0.2s ease;
      border-radius: 4px;
      text-wrap: balance;
    }

    @media (prefers-color-scheme: dark) {
      #dropZone {
        border-color: var(--primary-light);
        background: var(--background);
      }
      #dropZone:hover {
        border-color: var(--primary);
        background: var(--background-dark);
      }
      #dropZone.dragover {
        border-color: var(--accent);
        background: color-mix(in srgb, var(--accent) 5%, transparent);
      }
      #dropZone.has-image {
        border-color: var(--primary-light);
      }
      #dropZone.has-image:hover {
        border-color: var(--primary);
      }
      .dropzone-text {
        color: var(--primary-dark);
      }
      #dropZone.has-image .dropzone-text {
        background: color-mix(in srgb, var(--background) 95%, transparent);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  `;G=Mt([W("umbthumb-upload-area")],G);var qt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,vt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Zt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&qt(t,e,s),s};let j=class extends y{constructor(){super(...arguments),this.settings={enableCustomBg:!1,bgColor:"#ffffff",enableTint:!1,tintColor:"#000000",padding:0,detectedBgColor:"#ffffff"}}dispatchSettingsChange(i){this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:i},bubbles:!0,composed:!0}))}firstUpdated(){const i=this.renderRoot.querySelector("#enableCustomBg"),t=this.renderRoot.querySelector("#bgColor"),e=this.renderRoot.querySelector("#enableTint"),r=this.renderRoot.querySelector("#tintColor"),s=this.renderRoot.querySelector("#padding");i&&t&&(i.addEventListener("change",()=>{this.settings={...this.settings,enableCustomBg:i.checked},t.disabled=!i.checked,this.dispatchSettingsChange(this.settings)}),t.addEventListener("input",()=>{this.settings={...this.settings,bgColor:t.value},this.dispatchSettingsChange(this.settings)})),e&&r&&(e.addEventListener("change",()=>{this.settings={...this.settings,enableTint:e.checked},r.disabled=!e.checked,this.dispatchSettingsChange(this.settings)}),r.addEventListener("input",()=>{this.settings={...this.settings,tintColor:r.value},this.dispatchSettingsChange(this.settings)})),s&&s.addEventListener("input",()=>{this.settings={...this.settings,padding:parseInt(s.value)};const o=s.nextElementSibling;o&&(o.textContent=`${s.value}%`),this.dispatchSettingsChange(this.settings)})}render(){return x`
      <div class="color-controls">
        <div class="control-group">
          <div class="control-row">
            <input type="checkbox" id="enableCustomBg" .checked=${this.settings.enableCustomBg}>
            <label for="enableCustomBg">Custom Background</label>
            <input type="color" id="bgColor" .value=${this.settings.enableCustomBg?this.settings.bgColor:this.settings.detectedBgColor||"#ffffff"} ?disabled=${!this.settings.enableCustomBg}>
          </div>
          <div class="control-row">
            <input type="checkbox" id="enableTint" .checked=${this.settings.enableTint}>
            <label for="enableTint">Enable Tint</label>
            <input type="color" id="tintColor" .value=${this.settings.tintColor} ?disabled=${!this.settings.enableTint}>
          </div>
        </div>
        <div class="control-group">
          <div class="control-row padding-row">
            <label for="padding">Padding:</label>
            <input type="range" id="padding" min="0" max="50" .value=${this.settings.padding}>
            <span class="range-value">${this.settings.padding}%</span>
          </div>
        </div>
      </div>
    `}};j.styles=q`
    :host {
      display: block;
      width: 100%;
    }
    .color-controls {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      background: rgba(0, 0, 0, 0.03);
      border-radius: 6px;
    }
    .control-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 12px;
    }
    .control-row.padding-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .control-row:not(.padding-row) label {
      order: 2;
    }
    .control-row:not(.padding-row) input[type="checkbox"] {
      order: 1;
    }
    .control-row:not(.padding-row) input[type="color"] {
      order: 3;
      margin-left: auto;
    }
    label {
      font-size: 14px;
      color: var(--primary-dark);
      user-select: none;
      font-weight: 400;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin: 0;
      accent-color: var(--primary);
      cursor: pointer;
    }
    input[type="color"] {
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: none;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: 2px solid var(--primary);
      border-radius: 4px;
    }
    input[type="range"] {
      flex: 1;
      height: 6px;
      -webkit-appearance: none;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      cursor: pointer;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary-dark);
      cursor: pointer;
      transition: background 0.2s ease;
    }
    input[type="range"]::-webkit-slider-thumb:hover {
      background: var(--primary);
    }
    .range-value {
      min-width: 48px;
      font-size: 14px;
      color: var(--primary-dark);
      font-variant-numeric: tabular-nums;
      text-align: right;
    }

    @media (prefers-color-scheme: dark) {
      .control-group {
        background: rgba(255, 255, 255, 0.03);
      }
      label {
        color: var(--primary-dark);
      }
      input[type="range"] {
        background: rgba(255, 255, 255, 0.1);
      }
      input[type="range"]::-webkit-slider-thumb {
        background: var(--primary);
      }
      input[type="range"]::-webkit-slider-thumb:hover {
        background: var(--primary-light);
      }
      input[type="color"]::-webkit-color-swatch {
        border-color: var(--primary-light);
      }
      .range-value {
        color: var(--primary-dark);
      }
    }
  `;vt([bt({type:Object})],j.prototype,"settings",2);j=vt([W("umbthumb-color-controls")],j);var Wt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,yt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ft(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Wt(t,e,s),s};let M=class extends y{constructor(){super(...arguments),this.fileSizes={png:0,jpg:0,webp:0}}updateFileSizes(i){this.fileSizes={...i}}handleDownload(i){this.dispatchEvent(new CustomEvent("download-image",{detail:{format:i},bubbles:!0,composed:!0}))}render(){return x`
      <div class="download-controls">
        <div class="control-group">
          <div class="download-group">
            <div class="download-buttons">
              <button @click=${()=>this.handleDownload("png")}>
                PNG
                ${this.fileSizes.png?x`<span class="file-size">(${this.fileSizes.png} KB)</span>`:""}
              </button>
              <button @click=${()=>this.handleDownload("jpg")}>
                JPG
                ${this.fileSizes.jpg?x`<span class="file-size">(${this.fileSizes.jpg} KB)</span>`:""}
              </button>
              <button @click=${()=>this.handleDownload("webp")}>
                WEBP
                ${this.fileSizes.webp?x`<span class="file-size">(${this.fileSizes.webp} KB)</span>`:""}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};M.styles=q`
    :host {
      display: block;
      width: 100%;
    }
    .download-controls {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }
    .download-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    label {
      font-size: 14px;
      color: var(--primary-dark);
      user-select: none;
      font-weight: 400;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }
    .download-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #ffffff;
      background-color: var(--primary-dark);
    }
    button:hover {
      background-color: var(--primary);
    }
    button:focus {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
    button:active {
      transform: translateY(1px);
    }
    .file-size {
      font-size: 12px;
      color: var(--primary-dark);
      font-variant-numeric: tabular-nums;
    }

    @media (prefers-color-scheme: dark) {
      label {
        color: var(--primary-dark);
      }
      button {
        background-color: var(--primary);
        color: #ffffff;
      }
      button:hover {
        background-color: var(--primary-light);
      }
      button:focus {
        outline-color: var(--primary-light);
      }
      .file-size {
        color: var(--primary-dark);
      }
    }

    @media (forced-colors: active) {
      button {
        border: 1px solid ButtonText;
      }
    }
  `;yt([P()],M.prototype,"fileSizes",2);M=yt([W("umbthumb-download-controls")],M);var Vt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,O=(i,t,e,r)=>{for(var s=r>1?void 0:r?Kt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Vt(t,e,s),s};let $=class extends y{constructor(){super(),this.settings={enableCustomBg:!1,bgColor:"#ffffff",enableTint:!1,tintColor:"#000000",padding:0},this.detectedBgColor="#ffffff",this.currentImage=null,this.fileSizes={png:0,jpg:0,webp:0},this.uploadArea=null,this.loadSettings()}loadSettings(){try{const i=JSON.parse(localStorage.getItem("imageUploaderSettings")||"{}");this.settings={enableCustomBg:i.enableCustomBg??!1,bgColor:i.bgColor??"#ffffff",enableTint:i.enableTint??!1,tintColor:i.tintColor??"#000000",padding:i.padding??0}}catch(i){console.error("Failed to load settings:",i)}}saveSettings(){localStorage.setItem("imageUploaderSettings",JSON.stringify(this.settings))}handleImageLoaded(i){this.currentImage=i.detail.image;const t=this.renderRoot.querySelector("#controls");t&&(t.style.display="flex"),i.detail.backgroundColor&&(this.detectedBgColor=i.detail.backgroundColor,this.settings={...this.settings,enableCustomBg:!0,bgColor:i.detail.backgroundColor}),this.redrawCanvas(),this.updateDownloadSizes()}handleSettingsChanged(i){this.settings=i.detail.settings,this.saveSettings(),this.redrawCanvas(),this.updateDownloadSizes()}handleDownloadImage(i){this.downloadImage(i.detail.format)}redrawCanvas(){var c,g;const i=(g=(c=this.uploadArea)==null?void 0:c.shadowRoot)==null?void 0:g.querySelector("canvas"),t=i==null?void 0:i.getContext("2d");if(!i||!t||!this.currentImage)return;i.parentElement&&(i.width=400,i.height=250);const r=this.settings.padding/100,s=this.currentImage.width/this.currentImage.height;let o=i.width,n=i.height;s>o/n?n=o/s:o=n*s;const l=(i.width-o)/2+o*r,a=(i.height-n)/2+n*r,h=o*(1-2*r),d=n*(1-2*r);t.fillStyle=this.settings.enableCustomBg?this.settings.bgColor:this.detectedBgColor,t.fillRect(0,0,i.width,i.height),t.drawImage(this.currentImage,l,a,h,d),this.settings.enableTint&&(t.fillStyle=this.settings.tintColor,t.globalCompositeOperation="color",t.fillRect(0,0,i.width,i.height),t.globalCompositeOperation="source-over")}async updateDownloadSizes(){var s,o;const i=(o=(s=this.uploadArea)==null?void 0:s.shadowRoot)==null?void 0:o.querySelector("canvas");if(!i)return;const t=["png","jpg","webp"],e={png:"image/png",jpg:"image/jpeg",webp:"image/webp"};for(const n of t){const l=e[n],a=await new Promise(h=>i.toBlob(d=>h(d),l));this.fileSizes[n]=Math.round(a.size/1024)}const r=this.renderRoot.querySelector("umbthumb-download-controls");r&&r.updateFileSizes(this.fileSizes)}downloadImage(i){var r,s;const t=(s=(r=this.uploadArea)==null?void 0:r.shadowRoot)==null?void 0:s.querySelector("canvas");if(!t)return;const e={png:"image/png",jpg:"image/jpeg",webp:"image/webp"}[i];e&&t.toBlob(o=>{if(!o)return;const n=URL.createObjectURL(o),l=document.createElement("a");l.href=n,l.download=`image.${i}`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(n)},e)}firstUpdated(){this.uploadArea=this.renderRoot.querySelector("umbthumb-upload-area")}render(){return x`
      <umbthumb-upload-area @image-loaded=${this.handleImageLoaded}></umbthumb-upload-area>
      <div class="controls" id="controls">
        <umbthumb-color-controls 
          .settings=${{...this.settings,detectedBgColor:this.detectedBgColor}}
          @settings-changed=${this.handleSettingsChanged}
        ></umbthumb-color-controls>
        <umbthumb-download-controls
          .fileSizes=${this.fileSizes}
          @download-image=${this.handleDownloadImage}
        ></umbthumb-download-controls>
      </div>
    `}};$.styles=q`
    :host {
      display: block;
      width: 400px;
    }
    .controls {
      display: none;
      margin-top: 10px;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      border-radius: 8px;
      background: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    @media (prefers-color-scheme: dark) {
      .controls {
        background: rgb(0, 0, 0, 0.05);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  `;O([P()],$.prototype,"settings",2);O([P()],$.prototype,"detectedBgColor",2);O([P()],$.prototype,"currentImage",2);O([P()],$.prototype,"fileSizes",2);O([P()],$.prototype,"uploadArea",2);$=O([W("umbthumb-image-uploader")],$);

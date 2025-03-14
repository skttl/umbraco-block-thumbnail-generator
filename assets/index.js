(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,J=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),X=new WeakMap;let ht=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new ht(typeof r=="string"?r:r+"",void 0,G),B=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ht(e,r,G)},$t=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=I.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:_t,getOwnPropertyDescriptor:wt,getOwnPropertyNames:xt,getOwnPropertySymbols:At,getPrototypeOf:Ct}=Object,b=globalThis,et=b.trustedTypes,St=et?et.emptyScript:"",Z=b.reactiveElementPolyfillSupport,k=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Q=(r,t)=>!yt(r,t),st={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=wt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,i=[...xt(e),...At(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:D;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Q)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[k("elementProperties")]=new Map,C[k("finalized")]=new Map,Z==null||Z({ReactiveElement:C}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,L=O.trustedTypes,it=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,ct="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+m,Et=`<${pt}>`,w=document,U=()=>w.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",Y=Array.isArray,Pt=r=>Y(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",F=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,y=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,kt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=kt(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),lt=new WeakMap,_=w.createTreeWalker(w,129);function gt(r,t){if(!Y(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Ot=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=P;for(let l=0;l<e;l++){const a=r[l];let h,c,d=-1,u=0;for(;u<a.length&&(n.lastIndex=u,c=n.exec(a),c!==null);)u=n.lastIndex,n===P?c[1]==="!--"?n=rt:c[1]!==void 0?n=ot:c[2]!==void 0?(ut.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=y):c[3]!==void 0&&(n=y):n===y?c[0]===">"?(n=s??P,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?y:c[3]==='"'?at:nt):n===at||n===nt?n=y:n===rt||n===ot?n=P:(n=y,s=void 0);const f=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===P?a+Et:d>=0?(i.push(h),a.slice(0,d)+ct+a.slice(d)+m+f):a+m+(d===-2?l:f)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[h,c]=Ot(t,e);if(this.el=R.createElement(h,i),_.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=_.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(ct)){const u=c[n++],f=s.getAttribute(d).split(m),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:M[2],strings:f,ctor:M[1]==="."?Tt:M[1]==="?"?Rt:M[1]==="@"?zt:j}),s.removeAttribute(d)}else d.startsWith(m)&&(a.push({type:6,index:o}),s.removeAttribute(d));if(ut.test(s.tagName)){const d=s.textContent.split(m),u=d.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let f=0;f<u;f++)s.append(d[f],U()),_.nextNode(),a.push({type:2,index:++o});s.append(d[u],U())}}}else if(s.nodeType===8)if(s.data===pt)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:o}),d+=m.length-1}o++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,l;if(t===S)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??w).importNode(e,!0);_.currentNode=s;let o=_.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new z(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new Mt(o,this,t)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=_.nextNode(),n++)}return _.currentNode=w,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=R.createElement(gt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Ut(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new R(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new z(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const l=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=E(this,l[i+a],e,a),h===S&&(h=this._$AH[a]),n||(n=!T(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Rt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class zt extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===S)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const W=O.litHtmlPolyfillSupport;W==null||W(R,z),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.2.1");const It=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new z(t.insertBefore(U(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var dt;$._$litElement$=!0,$.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:$});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:$});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Q},Lt=(r=Dt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function ft(r){return(t,e)=>typeof e=="object"?Lt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(r){return ft({...r,state:!0,attribute:!1})}var Ht=Object.getOwnPropertyDescriptor,Nt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ht(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let K=class extends ${constructor(){super(...arguments),this.canvas=null,this.ctx=null,this.currentImage=null}firstUpdated(){const r=this.renderRoot.querySelector("#canvas");if(r){this.canvas=r,r.width=400,r.height=250;const i=r.getContext("2d",{alpha:!0,willReadFrequently:!0});i&&(this.ctx=i,i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high")}const t=this.renderRoot.querySelector("#dropZone"),e=this.renderRoot.querySelector("#fileInput");t&&(t.addEventListener("dragover",i=>this.handleDragOver(i)),t.addEventListener("dragleave",i=>this.handleDragLeave(i)),t.addEventListener("drop",i=>this.handleDrop(i)),t.addEventListener("click",()=>e==null?void 0:e.click())),e&&e.addEventListener("change",i=>{var o;const s=(o=i.target.files)==null?void 0:o[0];s&&this.handleFile(s)}),window.addEventListener("paste",i=>{var o;const s=(o=i.clipboardData)==null?void 0:o.items;if(s){for(let n=0;n<s.length;n++)if(s[n].type.indexOf("image")!==-1){const l=s[n].getAsFile();if(l){this.handleFile(l);break}}}})}handleDragOver(r){r.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.add("dragover")}handleDragLeave(r){r.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.remove("dragover")}handleDrop(r){var i;r.preventDefault();const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.remove("dragover");const e=(i=r.dataTransfer)==null?void 0:i.files[0];e&&e.type.startsWith("image/")&&this.handleFile(e)}updateCanvas(r){if(this.canvas&&this.ctx){this.currentImage=r;const t=this.renderRoot.querySelector("#dropZone");t==null||t.classList.add("has-image");const e=r.width/r.height,i=this.canvas.width,s=this.canvas.height;let o=i,n=s,l=0,a=0;(this.getAttribute("fit-mode")||"width")==="width"?(o=i,n=o/e,a=n>s?0:(s-n)/2):(n=s,o=n*e,l=o>i?0:(i-o)/2),this.ctx.clearRect(0,0,i,s),this.ctx.drawImage(r,l,a,o,n)}}static get observedAttributes(){return["fit-mode"]}attributeChangedCallback(r,t,e){r==="fit-mode"&&t!==e&&this.currentImage&&this.updateCanvas(this.currentImage)}handleFile(r){const t=this.renderRoot.querySelector("#dropZone"),e=new FileReader;e.onload=i=>{var o;const s=new Image;s.onload=()=>{this.canvas&&this.ctx&&(this.currentImage=s,t==null||t.classList.add("has-image"),this.updateCanvas(s),this.dispatchEvent(new CustomEvent("image-loaded",{detail:{image:s}})))},s.src=(o=i.target)==null?void 0:o.result},e.readAsDataURL(r)}render(){return v`
      <div id="dropZone">
        <canvas id="canvas"></canvas>
        <div class="dropzone-text">
          <p>Drop image here, paste from clipboard, or click to upload</p>
        </div>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
      </div>
    `}};K.styles=B`
    :host {
      display: block;
      width: 400px;
      height: 250px;
    }
    #dropZone {
      width: 100%;
      height: 100%;
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
      border-color: var(--primary);
      background: var(--background-dark);
    }
    #dropZone.dragover {
      border-color: var(--accent);
      background: color-mix(in srgb, var(--accent) 10%, transparent);
    }
    #dropZone.has-image {
      border-style: solid;
      border-color: var(--primary-dark);
    }
    #dropZone.has-image:hover {
      border-color: var(--primary);
    }
    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
      z-index: 0;
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
      border-radius: 4px;
      pointer-events: none;
    }
    #dropZone.has-image:hover .dropzone-text {
      opacity: 0.98;
      pointer-events: auto;
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
      pointer-events: none;
    }

    @media (prefers-color-scheme: dark) {
      #dropZone {
        border-color: var(--primary-dark);
        background: var(--background-dark);
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
        border-color: var(--primary-dark);
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
  `;K=Nt([q("umbthumb-upload-area")],K);var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,mt=(r,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Bt(t,e,s),s};let H=class extends ${constructor(){super(...arguments),this.settings={enableCustomBg:!1,bgColor:"#ffffff",enableTint:!1,tintColor:"#000000",padding:0,fitMode:"width"}}handleFitModeChange(r){const e=r.target.value;this.settings={...this.settings,fitMode:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}handleCustomBgChange(r){const e=r.target.checked;this.settings={...this.settings,enableCustomBg:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}handleBgColorChange(r){const e=r.target.value;this.settings={...this.settings,bgColor:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}handleTintChange(r){const e=r.target.checked;this.settings={...this.settings,enableTint:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}handleTintColorChange(r){const e=r.target.value;this.settings={...this.settings,tintColor:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}handlePaddingChange(r){const e=r.target.valueAsNumber;this.settings={...this.settings,padding:e},this.dispatchEvent(new CustomEvent("settings-changed",{detail:{settings:this.settings},bubbles:!0,composed:!0}))}render(){return v`
      <div class="control-group">
        <div class="control-row">
          <label for="fitMode">Fit Mode</label>
          <select id="fitMode" @change=${this.handleFitModeChange}>
            <option value="width" ?selected=${this.settings.fitMode==="width"}>Fit to Width</option>
            <option value="height" ?selected=${this.settings.fitMode==="height"}>Fit to Height</option>
          </select>
        </div>
      </div>
      <div class="control-group">
        <div class="control-row">
          <label>
            <input type="checkbox" ?checked=${this.settings.enableCustomBg} @change=${this.handleCustomBgChange}>
            Custom Background
          </label>
          <input type="color" .value=${this.settings.bgColor} @change=${this.handleBgColorChange} ?disabled=${!this.settings.enableCustomBg}>
        </div>
      </div>
      <div class="control-group">
        <div class="control-row">
          <label>
            <input type="checkbox" ?checked=${this.settings.enableTint} @change=${this.handleTintChange}>
            Tint Image
          </label>
          <input type="color" .value=${this.settings.tintColor} @change=${this.handleTintColorChange} ?disabled=${!this.settings.enableTint}>
        </div>
        ${this.settings.enableTint?v`
          <div class="control-row">
            <label for="padding">Tint Amount</label>
            <input type="range" id="padding" min="0" max="100" .value=${this.settings.padding} @input=${this.handlePaddingChange}>
          </div>
        `:""}
      </div>
    `}};H.styles=B`
    :host {
      display: block;
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;
    }
    .control-group:last-child {
      margin-bottom: 0;
    }
    .control-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .control-row label {
      flex: 1;
      color: var(--primary-dark);
      font-size: 14px;
    }
    .control-row input[type="color"] {
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .control-row input[type="range"] {
      flex: 1;
    }
    select {
      font-family: var(--font-family);
      font-size: 14px;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid var(--primary-dark);
      background: var(--background);
      color: var(--primary-dark);
      cursor: pointer;
      width: 100%;
    }
    select:hover {
      border-color: var(--primary);
    }
    select:focus {
      outline: none;
      border-color: var(--accent);
    }

    @media (prefers-color-scheme: dark) {
      .control-row label {
        color: var(--primary-dark);
      }
      select {
        background: var(--background-dark);
        border-color: var(--primary-dark);
        color: var(--primary-dark);
      }
      select:hover {
        border-color: var(--primary);
      }
    }
  `;mt([ft({type:Object})],H.prototype,"settings",2);H=mt([q("umbthumb-color-controls")],H);var qt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,vt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&qt(t,e,s),s};let N=class extends ${constructor(){super(...arguments),this.fileSizes={png:0,jpg:0,webp:0}}updateFileSizes(r){this.fileSizes={...r}}handleDownload(r){this.dispatchEvent(new CustomEvent("download-image",{detail:{format:r},bubbles:!0,composed:!0}))}render(){return v`
      <div class="download-controls">
        <div class="control-group">
          <div class="download-group">
            <div class="download-buttons">
              <button @click=${()=>this.handleDownload("png")}>
                PNG
                ${this.fileSizes.png?v`<span class="file-size">(${this.fileSizes.png} KB)</span>`:""}
              </button>
              <button @click=${()=>this.handleDownload("jpg")}>
                JPG
                ${this.fileSizes.jpg?v`<span class="file-size">(${this.fileSizes.jpg} KB)</span>`:""}
              </button>
              <button @click=${()=>this.handleDownload("webp")}>
                WEBP
                ${this.fileSizes.webp?v`<span class="file-size">(${this.fileSizes.webp} KB)</span>`:""}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};N.styles=B`
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
  `;vt([x()],N.prototype,"fileSizes",2);N=vt([q("umbthumb-download-controls")],N);var Ft=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,A=(r,t,e,i)=>{for(var s=i>1?void 0:i?Wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ft(t,e,s),s};let g=class extends ${constructor(){super(),this.settings={enableCustomBg:!1,bgColor:"#ffffff",enableTint:!1,tintColor:"#000000",padding:0,fitMode:"width"},this.detectedBgColor="#ffffff",this.currentImage=null,this.fileSizes={png:0,jpg:0,webp:0},this.uploadArea=null,this.hasImage=!1,this.loadSettings()}loadSettings(){try{const r=JSON.parse(localStorage.getItem("imageUploaderSettings")||"{}");this.settings={enableCustomBg:r.enableCustomBg??!1,bgColor:r.bgColor??"#ffffff",enableTint:r.enableTint??!1,tintColor:r.tintColor??"#000000",padding:r.padding??0,fitMode:r.fitMode??"width"}}catch(r){console.error("Failed to load settings:",r)}}saveSettings(){localStorage.setItem("imageUploaderSettings",JSON.stringify(this.settings))}handleImageLoaded(r){this.currentImage=r.detail.image,this.hasImage=!0;const t=this.renderRoot.querySelector(".controls");t&&t.classList.add("visible"),r.detail.backgroundColor&&(this.detectedBgColor=r.detail.backgroundColor,this.settings={...this.settings,enableCustomBg:!0,bgColor:r.detail.backgroundColor}),this.redrawCanvas(),this.updateDownloadSizes()}handleSettingsChanged(r){this.settings=r.detail.settings,this.saveSettings(),this.redrawCanvas(),this.updateDownloadSizes()}handleDownload(r){this.downloadImage(r.detail.format)}redrawCanvas(){var c,d;const r=(d=(c=this.uploadArea)==null?void 0:c.shadowRoot)==null?void 0:d.querySelector("canvas"),t=r==null?void 0:r.getContext("2d");if(!r||!t||!this.currentImage)return;t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",r.width=400,r.height=250;const e=this.settings.padding/100,i=this.currentImage.width/this.currentImage.height;let s=r.width,o=r.height;this.settings.fitMode==="width"?(s=r.width,o=s/i):(o=r.height,s=o*i);const n=s*(1-2*e),l=o*(1-2*e);let a=(r.width-n)/2,h=(r.height-l)/2;l>r.height&&(h=0),n>r.width&&(a=0),t.fillStyle=this.settings.enableCustomBg?this.settings.bgColor:this.detectedBgColor,t.fillRect(0,0,r.width,r.height),t.drawImage(this.currentImage,a,h,n,l),this.settings.enableTint&&(t.fillStyle=this.settings.tintColor,t.globalCompositeOperation="color",t.fillRect(0,0,r.width,r.height),t.globalCompositeOperation="source-over")}async updateDownloadSizes(){var s,o;const r=(o=(s=this.uploadArea)==null?void 0:s.shadowRoot)==null?void 0:o.querySelector("canvas");if(!r)return;const t=["png","jpg","webp"],e={png:"image/png",jpg:"image/jpeg",webp:"image/webp"};for(const n of t){const l=e[n],a=await new Promise(h=>r.toBlob(c=>h(c),l));this.fileSizes[n]=Math.round(a.size/1024)}const i=this.renderRoot.querySelector("umbthumb-download-controls");i&&i.updateFileSizes(this.fileSizes)}downloadImage(r){var i,s;const t=(s=(i=this.uploadArea)==null?void 0:i.shadowRoot)==null?void 0:s.querySelector("canvas");if(!t)return;const e={png:"image/png",jpg:"image/jpeg",webp:"image/webp"}[r];e&&t.toBlob(o=>{if(!o)return;const n=URL.createObjectURL(o),l=document.createElement("a");l.href=n,l.download=`image.${r}`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(n)},e)}firstUpdated(){this.uploadArea=this.renderRoot.querySelector("umbthumb-upload-area")}render(){return v`
      <umbthumb-upload-area
        @image-loaded=${this.handleImageLoaded}
        fit-mode=${this.settings.fitMode}
      ></umbthumb-upload-area>
      <div class="controls ${this.hasImage?"visible":""}">
        <umbthumb-color-controls
          .settings=${this.settings}
          @settings-changed=${this.handleSettingsChanged}
        ></umbthumb-color-controls>
        <umbthumb-download-controls
          .hasImage=${this.hasImage}
          @download-clicked=${this.handleDownload}
        ></umbthumb-download-controls>
      </div>
    `}};g.styles=B`
    :host {
      display: block;
      width: 400px;
    }
    .controls {
      display: none;
      margin-top: 10px;
      gap: 10px;
      flex-direction: column;
      align-items: stretch;
      padding: 15px;
      border-radius: 8px;
      background: var(--background-dark);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .controls.visible {
      display: flex;
    }

    @media (prefers-color-scheme: dark) {
      .controls {
        background: var(--background-dark);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  `;A([x()],g.prototype,"settings",2);A([x()],g.prototype,"detectedBgColor",2);A([x()],g.prototype,"currentImage",2);A([x()],g.prototype,"fileSizes",2);A([x()],g.prototype,"uploadArea",2);A([x()],g.prototype,"hasImage",2);g=A([q("umbthumb-image-uploader")],g);

var jt=Object.defineProperty;var ue=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Ae=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&Ae(e,n,t[n]);if(ue)for(var n of ue(t))Be.call(t,n)&&Ae(e,n,t[n]);return e};var Ue=(e,t)=>{var n={};for(var r in e)We.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ue)for(var r of ue(e))t.indexOf(r)<0&&Be.call(e,r)&&(n[r]=e[r]);return n};const Ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ft();const Mt="modulepreload",je={},It="/",Ce=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${It}${r}`,r in je)return;je[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Mt,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((u,c)=>{l.addEventListener("load",u),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var ne,h,ft,Y,pt,Fe,ht,_e={},dt=[],Vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function L(e,t){for(var n in t)e[n]=t[n];return e}function vt(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var r,i,o,l={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?ne.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return Q(e,l,r,i,null)}function Q(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ft:i};return i==null&&h.vnode!=null&&h.vnode(o),o}function zt(){return{current:null}}function E(e){return e.children}function S(e,t){this.props=e,this.context=t}function M(e,t){if(t==null)return e.__?M(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?M(e):null}function mt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return mt(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!fe.__r++||Fe!==h.debounceRendering)&&((Fe=h.debounceRendering)||pt)(fe)}function fe(){for(var e;fe.__r=Y.length;)e=Y.sort(function(t,n){return t.__v.__b-n.__v.__b}),Y=[],e.some(function(t){var n,r,i,o,l,u;t.__d&&(l=(o=(n=t).__v).__e,(u=n.__P)&&(r=[],(i=L({},o)).__v=o.__v+1,$e(u,o,i,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l==null?M(o):l,o.__h),Pt(r,o),o.__e!=l&&mt(o)))})}function yt(e,t,n,r,i,o,l,u,c,_){var a,v,f,s,d,P,g,b=r&&r.__k||dt,x=b.length;for(n.__k=[],a=0;a<t.length;a++)if((s=n.__k[a]=(s=t[a])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?Q(null,s,null,null,s):Array.isArray(s)?Q(E,{children:s},null,null,null):s.__b>0?Q(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(f=b[a])===null||f&&s.key==f.key&&s.type===f.type)b[a]=void 0;else for(v=0;v<x;v++){if((f=b[v])&&s.key==f.key&&s.type===f.type){b[v]=void 0;break}f=null}$e(e,s,f=f||_e,i,o,l,u,c,_),d=s.__e,(v=s.ref)&&f.ref!=v&&(g||(g=[]),f.ref&&g.push(f.ref,null,s),g.push(v,s.__c||d,s)),d!=null?(P==null&&(P=d),typeof s.type=="function"&&s.__k===f.__k?s.__d=c=gt(s,c,e):c=bt(e,s,f,b,d,c),typeof n.type=="function"&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=M(f))}for(n.__e=P,a=x;a--;)b[a]!=null&&(typeof n.type=="function"&&b[a].__e!=null&&b[a].__e==n.__d&&(n.__d=M(r,a+1)),xt(b[a],b[a]));if(g)for(a=0;a<g.length;a++)kt(g[a],g[++a],g[++a])}function gt(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?gt(r,t,n):bt(n,r,r,i,r.__e,t));return t}function H(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){H(n,t)}):t.push(e)),t}function bt(e,t,n,r,i,o){var l,u,c;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),l=null;else{for(u=o,c=0;(u=u.nextSibling)&&c<r.length;c+=2)if(u==i)break e;e.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function Kt(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||pe(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||pe(e,o,t[o],n[o],r)}function Me(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Vt.test(t)?n:n+"px"}function pe(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Me(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Me(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Ve:Ie,o):e.removeEventListener(t,o?Ve:Ie,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ie(e){this.l[e.type+!1](h.event?h.event(e):e)}function Ve(e){this.l[e.type+!0](h.event?h.event(e):e)}function $e(e,t,n,r,i,o,l,u,c){var _,a,v,f,s,d,P,g,b,x,A,C=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,u=t.__e=n.__e,t.__h=null,o=[u]),(_=h.__b)&&_(t);try{e:if(typeof C=="function"){if(g=t.props,b=(_=C.contextType)&&r[_.__c],x=_?b?b.props.value:_.__:r,n.__c?P=(a=t.__c=n.__c).__=a.__E:("prototype"in C&&C.prototype.render?t.__c=a=new C(g,x):(t.__c=a=new S(g,x),a.constructor=C,a.render=Jt),b&&b.sub(a),a.props=g,a.state||(a.state={}),a.context=x,a.__n=r,v=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),C.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=L({},a.__s)),L(a.__s,C.getDerivedStateFromProps(g,a.__s))),f=a.props,s=a.state,v)C.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(C.getDerivedStateFromProps==null&&g!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,x),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,x)===!1||t.__v===n.__v){a.props=g,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,x),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,s,d)})}a.context=x,a.props=g,a.state=a.__s,(_=h.__r)&&_(t),a.__d=!1,a.__v=t,a.__P=e,_=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(r=L(L({},r),a.getChildContext())),v||a.getSnapshotBeforeUpdate==null||(d=a.getSnapshotBeforeUpdate(f,s)),A=_!=null&&_.type===E&&_.key==null?_.props.children:_,yt(e,Array.isArray(A)?A:[A],t,n,r,i,o,l,u,c),a.base=t.__e,t.__h=null,a.__h.length&&l.push(a),P&&(a.__E=a.__=null),a.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=qt(n.__e,t,n,r,i,o,l,c);(_=h.diffed)&&_(t)}catch(U){t.__v=null,(c||o!=null)&&(t.__e=u,t.__h=!!c,o[o.indexOf(u)]=null),h.__e(U,t,n)}}function Pt(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}function qt(e,t,n,r,i,o,l,u){var c,_,a,v=n.props,f=t.props,s=t.type,d=0;if(s==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((c=o[d])&&"setAttribute"in c==!!s&&(s?c.localName===s:c.nodeType===3)){e=c,o[d]=null;break}}if(e==null){if(s===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,f.is&&f),o=null,u=!1}if(s===null)v===f||u&&e.data===f||(e.data=f);else{if(o=o&&ne.call(e.childNodes),_=(v=n.props||_e).dangerouslySetInnerHTML,a=f.dangerouslySetInnerHTML,!u){if(o!=null)for(v={},d=0;d<e.attributes.length;d++)v[e.attributes[d].name]=e.attributes[d].value;(a||_)&&(a&&(_&&a.__html==_.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(Kt(e,f,v,i,u),a)t.__k=[];else if(d=t.props.children,yt(e,Array.isArray(d)?d:[d],t,n,r,i&&s!=="foreignObject",o,l,o?o[0]:n.__k&&M(n,0),u),o!=null)for(d=o.length;d--;)o[d]!=null&&vt(o[d]);u||("value"in f&&(d=f.value)!==void 0&&(d!==e.value||s==="progress"&&!d||s==="option"&&d!==v.value)&&pe(e,"value",d,v.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==e.checked&&pe(e,"checked",d,v.checked,!1))}return e}function kt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){h.__e(r,n)}}function xt(e,t,n){var r,i;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||kt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&xt(r[i],t,typeof e.type!="function");n||e.__e==null||vt(e.__e),e.__e=e.__d=void 0}function Jt(e,t,n){return this.constructor(e,n)}function I(e,t,n){var r,i,o;h.__&&h.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],$e(t,e=(!r&&n||t).__k=p(E,null,[e]),i||_e,_e,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?ne.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Pt(o,e)}function wt(e,t){I(e,t,wt)}function Gt(e,t,n){var r,i,o,l=L({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:l[o]=t[o];return arguments.length>2&&(l.children=arguments.length>3?ne.call(arguments,2):n),Q(e.type,l,r||e.key,i||e.ref,null)}function re(e,t){var n={__c:t="__cC"+ht++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(ge)},this.sub=function(l){i.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),u&&u.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ne=dt.slice,h={__e:function(e,t,n,r){for(var i,o,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(u){e=u}throw e}},ft=0,S.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ge(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},S.prototype.render=E,Y=[],pt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fe.__r=0,ht=0;var K,w,ze,V=0,Ct=[],Ke=h.__b,qe=h.__r,Je=h.diffed,Ge=h.__c,Ze=h.unmount;function oe(e,t){h.__h&&h.__h(w,e,V||t),V=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Se(e){return V=1,$t(St,e)}function $t(e,t,n){var r=oe(K++,2);return r.t=e,r.__c||(r.__=[n?n(t):St(void 0,t),function(i){var o=r.t(r.__[0],i);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=w),r.__}function ie(e,t){var n=oe(K++,3);!h.__s&&Oe(n.__H,t)&&(n.__=e,n.__H=t,w.__H.__h.push(n))}function Ee(e,t){var n=oe(K++,4);!h.__s&&Oe(n.__H,t)&&(n.__=e,n.__H=t,w.__h.push(n))}function te(e){return V=5,z(function(){return{current:e}},[])}function Zt(e,t,n){V=6,Ee(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function z(e,t){var n=oe(K++,7);return Oe(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ne(e,t){return V=8,z(function(){return e},t)}function T(e){var t=w.context[e.__c],n=oe(K++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(w)),t.props.value):e.__}function Yt(e,t){h.useDebugValue&&h.useDebugValue(t?t(e):e)}function Qt(){for(var e;e=Ct.shift();)if(e.__P)try{e.__H.__h.forEach(se),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){w=null,Ke&&Ke(e)},h.__r=function(e){qe&&qe(e),K=0;var t=(w=e.__c).__H;t&&(t.__h.forEach(se),t.__h.forEach(be),t.__h=[])},h.diffed=function(e){Je&&Je(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ct.push(t)!==1&&ze===h.requestAnimationFrame||((ze=h.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),Ye&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);Ye&&(r=requestAnimationFrame(i))})(Qt)),w=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(r){return!r.__||be(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],h.__e(r,n.__v)}}),Ge&&Ge(e,t)},h.unmount=function(e){Ze&&Ze(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{se(r)}catch(i){t=i}}),t&&h.__e(t,n.__v))};var Ye=typeof requestAnimationFrame=="function";function se(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function be(e){var t=w;e.__c=e.__(),w=t}function Oe(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function St(e,t){return typeof t=="function"?t(e):t}function Et(e,t){for(var n in t)e[n]=t[n];return e}function Pe(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function ke(e){this.props=e}function Xt(e,t){function n(i){var o=this.props.ref,l=o==i.ref;return!l&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!l:Pe(this.props,i)}function r(i){return this.shouldComponentUpdate=n,p(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ke.prototype=new S).isPureReactComponent=!0,ke.prototype.shouldComponentUpdate=function(e,t){return Pe(this.props,e)||Pe(this.state,t)};var Qe=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Qe&&Qe(e)};var en=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Re(e){function t(n){var r=Et({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=en,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Xe=function(e,t){return e==null?null:H(H(e).map(t))},Nt={map:Xe,forEach:Xe,count:function(e){return e?H(e).length:0},only:function(e){var t=H(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:H},tn=h.__e;h.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}tn(e,t,n,r)};var et=h.unmount;function X(){this.__u=0,this.t=null,this.__b=null}function Ot(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function nn(e){var t,n,r;function i(o){if(t||(t=e()).then(function(l){n=l.default||l},function(l){r=l}),r)throw r;if(!n)throw t;return p(n,o)}return i.displayName="Lazy",i.__f=!0,i}function Z(){this.u=null,this.o=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),et&&et(e)},(X.prototype=new S).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Ot(r.__v),o=!1,l=function(){o||(o=!0,n.__R=null,i?i(u):u())};n.__R=l;var u=function(){if(!--r.__u){if(r.state.__e){var _=r.state.__e;r.__v.__k[0]=function v(f,s,d){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(P){return v(P,s,d)}),f.__c&&f.__c.__P===s&&(f.__e&&d.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=d)),f}(_,_.__c.__P,_.__c.__O)}var a;for(r.setState({__e:r.__b=null});a=r.t.pop();)a.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(l,l)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(l,u,c){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),l.__c.__H=null),(l=Et({},l)).__c!=null&&(l.__c.__P===c&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(_){return o(_,u,c)})),l}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&p(E,null,e.fallback);return i&&(i.__h=null),[p(E,null,t.__e?null:e.children),i]};var tt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function rn(e){return this.getChildContext=function(){return e.context},e.children}function on(e){var t=this,n=e.i;t.componentWillUnmount=function(){I(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),I(p(rn,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ln(e,t){return p(on,{__v:e,i:t})}(Z.prototype=new S).__e=function(e){var t=this,n=Ot(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),tt(t,e,r)):i()};n?n(o):o()}},Z.prototype.render=function(e){this.u=null,this.o=new Map;var t=H(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Z.prototype.componentDidUpdate=Z.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){tt(e,n,t)})};var Rt=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,an=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,un=typeof document!="undefined",cn=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function sn(e,t,n){return t.__k==null&&(t.textContent=""),I(e,t),typeof n=="function"&&n(),e?e.__c:null}function _n(e,t,n){return wt(e,t),typeof n=="function"&&n(),e?e.__c:null}S.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(S.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var nt=h.event;function fn(){}function pn(){return this.cancelBubble}function hn(){return this.defaultPrevented}h.event=function(e){return nt&&(e=nt(e)),e.persist=fn,e.isPropagationStopped=pn,e.isDefaultPrevented=hn,e.nativeEvent=e};var Lt,rt={configurable:!0,get:function(){return this.class}},ot=h.vnode;h.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var l=n[o];un&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&l==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===!0?l="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!cn(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&an.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),r[o]=l)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=H(n.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=H(n.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),e.props=r,n.class!=n.className&&(rt.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",rt))}e.$$typeof=Rt,ot&&ot(e)};var it=h.__r;h.__r=function(e){it&&it(e),Lt=e.__c};var dn={ReactCurrentDispatcher:{current:{readContext:function(e){return Lt.__n[e.__c].props.value}}}};function vn(e){return p.bind(null,e)}function ve(e){return!!e&&e.$$typeof===Rt}function mn(e){return ve(e)?Gt.apply(null,arguments):e}function yn(e){return!!e.__k&&(I(null,e),!0)}function gn(e){return e&&(e.base||e.nodeType===1&&e)||null}var bn=function(e,t){return e(t)},Pn=function(e,t){return e(t)},me={useState:Se,useReducer:$t,useEffect:ie,useLayoutEffect:Ee,useRef:te,useImperativeHandle:Zt,useMemo:z,useCallback:Ne,useContext:T,useDebugValue:Yt,version:"17.0.2",Children:Nt,render:sn,hydrate:_n,unmountComponentAtNode:yn,createPortal:ln,createElement:p,createContext:re,createFactory:vn,cloneElement:mn,createRef:zt,Fragment:E,isValidElement:ve,findDOMNode:gn,Component:S,PureComponent:ke,memo:Xt,forwardRef:Re,flushSync:Pn,unstable_batchedUpdates:bn,StrictMode:E,Suspense:X,SuspenseList:Z,lazy:nn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dn};function xe(e,t){return xe=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xe(e,t)}function kn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xe(e,t)}var xn=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=[]),t.length!==n.length||t.some(function(r,i){return!Object.is(r,n[i])})},lt={error:null},wn=function(e){kn(t,e);function t(){for(var r,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=e.call.apply(e,[this].concat(o))||this,r.state=lt,r.resetErrorBoundary=function(){for(var u,c=arguments.length,_=new Array(c),a=0;a<c;a++)_[a]=arguments[a];r.props.onReset==null||(u=r.props).onReset.apply(u,_),r.reset()},r}t.getDerivedStateFromError=function(i){return{error:i}};var n=t.prototype;return n.reset=function(){this.setState(lt)},n.componentDidCatch=function(i,o){var l,u;(l=(u=this.props).onError)==null||l.call(u,i,o)},n.componentDidUpdate=function(i,o){var l=this.state.error,u=this.props.resetKeys;if(l!==null&&o.error!==null&&xn(i.resetKeys,u)){var c,_;(c=(_=this.props).onResetKeysChange)==null||c.call(_,i.resetKeys,u),this.reset()}},n.render=function(){var i=this.state.error,o=this.props,l=o.fallbackRender,u=o.FallbackComponent,c=o.fallback;if(i!==null){var _={error:i,resetErrorBoundary:this.resetErrorBoundary};if(ve(c))return c;if(typeof l=="function")return l(_);if(u)return p(u,_);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(S);function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var F;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(F||(F={}));var at=function(e){return e},ut="beforeunload",Cn="hashchange",$n="popstate";function Sn(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var m=D(r.location.hash.substr(1)),y=m.pathname,k=y===void 0?"/":y,$=m.search,O=$===void 0?"":$,R=m.hash,G=R===void 0?"":R,W=i.state||{};return[W.idx,at({pathname:k,search:O,hash:G,state:W.usr||null,key:W.key||"default"})]}var l=null;function u(){if(l)s.call(l),l=null;else{var m=F.Pop,y=o(),k=y[0],$=y[1];if(s.length){if(k!=null){var O=a-k;O&&(l={action:m,location:$,retry:function(){J(O*-1)}},J(O))}}else A(m)}}r.addEventListener($n,u),r.addEventListener(Cn,function(){var m=o(),y=m[1];ee(y)!==ee(v)&&u()});var c=F.Pop,_=o(),a=_[0],v=_[1],f=st(),s=st();a==null&&(a=0,i.replaceState(he({},i.state,{idx:a}),""));function d(){var m=document.querySelector("base"),y="";if(m&&m.getAttribute("href")){var k=r.location.href,$=k.indexOf("#");y=$===-1?k:k.slice(0,$)}return y}function P(m){return d()+"#"+(typeof m=="string"?m:ee(m))}function g(m,y){return y===void 0&&(y=null),at(he({pathname:v.pathname,hash:"",search:""},typeof m=="string"?D(m):m,{state:y,key:En()}))}function b(m,y){return[{usr:m.state,key:m.key,idx:y},P(m)]}function x(m,y,k){return!s.length||(s.call({action:m,location:y,retry:k}),!1)}function A(m){c=m;var y=o();a=y[0],v=y[1],f.call({action:c,location:v})}function C(m,y){var k=F.Push,$=g(m,y);function O(){C(m,y)}if(x(k,$,O)){var R=b($,a+1),G=R[0],W=R[1];try{i.pushState(G,"",W)}catch{r.location.assign(W)}A(k)}}function U(m,y){var k=F.Replace,$=g(m,y);function O(){U(m,y)}if(x(k,$,O)){var R=b($,a),G=R[0],W=R[1];i.replaceState(G,"",W),A(k)}}function J(m){i.go(m)}var Ut={get action(){return c},get location(){return v},createHref:P,push:C,replace:U,go:J,back:function(){J(-1)},forward:function(){J(1)},listen:function(y){return f.push(y)},block:function(y){var k=s.push(y);return s.length===1&&r.addEventListener(ut,ct),function(){k(),s.length||r.removeEventListener(ut,ct)}}};return Ut}function ct(e){e.preventDefault(),e.returnValue=""}function st(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function En(){return Math.random().toString(36).substr(2,8)}function ee(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function D(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(e,t){if(!e)throw new Error(t)}const Le=re(null),He=re(null),le=re({outlet:null,matches:[]});function Nn(e){let{to:t,replace:n,state:r}=e;q()||N(!1);let i=Ht();return ie(()=>{i(t,{replace:n,state:r})}),null}function On(e){return An(e.context)}function j(e){N(!1)}function Rn(e){let{basename:t="/",children:n=null,location:r,navigationType:i=F.Pop,navigator:o,static:l=!1}=e;q()&&N(!1);let u=Bt(t),c=z(()=>({basename:u,navigator:o,static:l}),[u,o,l]);typeof r=="string"&&(r=D(r));let{pathname:_="/",search:a="",hash:v="",state:f=null,key:s="default"}=r,d=z(()=>{let P=Wt(_,u);return P==null?null:{pathname:P,search:a,hash:v,state:f,key:s}},[u,_,a,v,f,s]);return d==null?null:p(Le.Provider,{value:c},p(He.Provider,{children:n,value:{location:d,navigationType:i}}))}function Ln(e){let{children:t,location:n}=e;return Wn(we(t),n)}function Hn(e){q()||N(!1);let{basename:t,navigator:n}=T(Le),{hash:r,pathname:i,search:o}=Te(e),l=i;if(t!=="/"){let u=er(e),c=u!=null&&u.endsWith("/");l=i==="/"?t+(c?"/":""):B([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function q(){return T(He)!=null}function ae(){return q()||N(!1),T(He).location}function Ht(){q()||N(!1);let{basename:e,navigator:t}=T(Le),{matches:n}=T(le),{pathname:r}=ae(),i=JSON.stringify(n.map(u=>u.pathnameBase)),o=te(!1);return ie(()=>{o.current=!0}),Ne(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){t.go(u);return}let _=At(u,JSON.parse(i),r);e!=="/"&&(_.pathname=B([e,_.pathname])),(c.replace?t.replace:t.push)(_,c.state)},[e,t,i,r])}const Tn=re(null);function An(e){let t=T(le).outlet;return t&&p(Tn.Provider,{value:e},t)}function Te(e){let{matches:t}=T(le),{pathname:n}=ae(),r=JSON.stringify(t.map(i=>i.pathnameBase));return z(()=>At(e,JSON.parse(r),n),[e,r,n])}function Wn(e,t){q()||N(!1);let{matches:n}=T(le),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=ae(),u;if(t){var c;let f=typeof t=="string"?D(t):t;o==="/"||((c=f.pathname)==null?void 0:c.startsWith(o))||N(!1),u=f}else u=l;let _=u.pathname||"/",a=o==="/"?_:_.slice(o.length)||"/",v=Bn(e,{pathname:a});return Jn(v&&v.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:B([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:B([o,f.pathnameBase])})),n)}function we(e){let t=[];return Nt.forEach(e,n=>{if(!ve(n))return;if(n.type===E){t.push.apply(t,we(n.props.children));return}n.type!==j&&N(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=we(n.props.children)),t.push(r)}),t}function Bn(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?D(t):t,i=Wt(r.pathname||"/",n);if(i==null)return null;let o=Tt(e);Dn(o);let l=null;for(let u=0;l==null&&u<o.length;++u)l=qn(o[u],i);return l}function Tt(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||N(!1),l.relativePath=l.relativePath.slice(r.length));let u=B([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&N(!1),Tt(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:zn(u,i.index),routesMeta:c})}),t}function Dn(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kn(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Un=/^:\w+$/,jn=3,Fn=2,Mn=1,In=10,Vn=-2,_t=e=>e==="*";function zn(e,t){let n=e.split("/"),r=n.length;return n.some(_t)&&(r+=Vn),t&&(r+=Fn),n.filter(i=>!_t(i)).reduce((i,o)=>i+(Un.test(o)?jn:o===""?Mn:In),r)}function Kn(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qn(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let u=n[l],c=l===n.length-1,_=i==="/"?t:t.slice(i.length)||"/",a=Gn({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},_);if(!a)return null;Object.assign(r,a.params);let v=u.route;o.push({params:r,pathname:B([i,a.pathname]),pathnameBase:Bt(B([i,a.pathnameBase])),route:v}),a.pathnameBase!=="/"&&(i=B([i,a.pathnameBase]))}return o}function Jn(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>p(le.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Gn(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zn(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((_,a,v)=>{if(a==="*"){let f=u[v]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return _[a]=Yn(u[v]||""),_},{}),pathname:o,pathnameBase:l,pattern:e}}function Zn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,u)=>(r.push(u),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Yn(e,t){try{return decodeURIComponent(e)}catch{return e}}function Qn(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?D(e):e;return{pathname:n?n.startsWith("/")?n:Xn(n,t):t,search:tr(r),hash:nr(i)}}function Xn(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function At(e,t,n){let r=typeof e=="string"?D(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let u=t.length-1;if(i.startsWith("..")){let c=i.split("/");for(;c[0]==="..";)c.shift(),u-=1;r.pathname=c.join("/")}o=u>=0?t[u]:"/"}let l=Qn(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function er(e){return e===""||e.pathname===""?"/":typeof e=="string"?D(e).pathname:e.pathname}function Wt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const B=e=>e.join("/").replace(/\/\/+/g,"/"),Bt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function Dt(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const rr=["onClick","reloadDocument","replace","state","target","to"],or=["aria-current","caseSensitive","className","end","style","to","children"];function ir(e){let{basename:t,children:n,window:r}=e,i=te();i.current==null&&(i.current=Sn({window:r}));let o=i.current,[l,u]=Se({action:o.action,location:o.location});return Ee(()=>o.listen(u),[o]),p(Rn,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function lr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ar=Re(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:u,to:c}=t,_=Dt(t,rr),a=Hn(c),v=cr(c,{replace:o,state:l,target:u});function f(s){r&&r(s),!s.defaultPrevented&&!i&&v(s)}return p("a",de({},_,{href:a,onClick:f,ref:n,target:u}))}),ur=Re(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:u,to:c,children:_}=t,a=Dt(t,or),v=ae(),f=Te(c),s=v.pathname,d=f.pathname;i||(s=s.toLowerCase(),d=d.toLowerCase());let P=s===d||!l&&s.startsWith(d)&&s.charAt(d.length)==="/",g=P?r:void 0,b;typeof o=="function"?b=o({isActive:P}):b=[o,P?"active":null].filter(Boolean).join(" ");let x=typeof u=="function"?u({isActive:P}):u;return p(ar,de({},a,{"aria-current":g,className:b,ref:n,style:x,to:c}),typeof _=="function"?_({isActive:P}):_)});function cr(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Ht(),l=ae(),u=Te(e);return Ne(c=>{if(c.button===0&&(!n||n==="_self")&&!lr(c)){c.preventDefault();let _=!!r||ee(l)===ee(u);o(e,{replace:_,state:i})}},[l,o,u,r,i,n,e])}var sr="/assets/Placeholder.f3b3891c.webp";const _r=({className:e="",children:t})=>p("h1",{className:`${e} text-[20vmin] min-h-screen flex flex-col items-center justify-center relative drop-shadow-sm shadow-black`},t);const fr=()=>(ie(()=>{document.title="Rik den Breejen"},[]),p(E,null,p(_r,{className:"min-h-[unset] sm:min-h-screen mt-12 mb-auto sm:my-0"},p("div",null,p("p",{className:"text-[5vmin]"},"Hello!"),p("p",null,"I'm Rik!")),p("div",{className:"hero-action move-down font-extrabold text-[10vmin] hidden sm:block","aria-label":"Go down"},"\u2193")),p("div",{className:"w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:flex children:justify-center children:items-center sm:mb-20 sm:flex-nowrap sm:children:w-auto md:gap-8"},p("div",{className:""},p("img",{className:"w-full h-fit aspect-square object-cover rounded-full max-w-[10rem] sm:max-w-[15rem]",src:sr})),p("div",{className:"hero-short"},"Hello, this website is still work in progress! ",p("br",null),"Stay tuned!"),p("div",{className:"hero-long"},"Hello, this website is still work in progress! ",p("br",null),"Stay tuned!")))),ce=n=>{var r=n,{className:e}=r,t=Ue(r,["className"]);return p(ur,De({className:"bg-secondary hover:bg-active hover:active:bg-light hover:active:text-zinc-600 current-page:bg-dark text-center p-2 rounded-lg w-full md:basis-full shadow-lg"},t))},pr=()=>{const e=te(),t=te(),[n,r]=Se([]);return ie(()=>{const i=t.current,o=e.current;if(r([e.current,t.current]),!i||!o)return null;o.style.paddingBottom=i.offsetHeight+"px";const l=new ResizeObserver(c=>{o.style.paddingBottom=c[0].target.offsetHeight+"px"}),u=new ResizeObserver(c=>{const _=c[0].target;i.style.paddingRight=_.offsetWidth-_.clientWidth+"px"});return l.observe(i),u.observe(o),()=>{l.disconnect(),u.disconnect()}},[t.current,e.current]),p("div",{className:"flex flex-1 justify-between flex-col relative"},p("main",{ref:e,className:"flex-1 flex flex-col overflow-y-auto items-center"},p(On,{context:n})),p("div",{ref:t,className:"absolute bottom-0 w-full text-white"},p("nav",{"aria-label":"primary",role:"navigation",className:"py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around"},p(ce,{to:"/"},"Home"),p(ce,{to:"/Projects"},"Projects"),p(ce,{to:"/Timeline"},"Timeline"),p(ce,{to:"/Contact"},"Contact"))))},hr=me.lazy(()=>Ce(()=>import("./index.ff4484c7.js"),[])),dr=me.lazy(()=>Ce(()=>import("./index.9bd70643.js"),[])),vr=me.lazy(()=>Ce(()=>import("./index.06f1bbfa.js"),[])),ye=({element:e})=>p(wn,null,p(X,{fallback:p(E,null)},e));I(p(me.StrictMode,null,p(ir,null,p(Ln,null,p(j,{path:"/",element:p(pr,null)},p(j,{index:!0,element:p(fr,null)}),p(j,{path:"*",element:p(Nn,{replace:!0,to:"/"})}),p(j,{path:"Projects",element:p(ye,{element:p(hr,null)})}),p(j,{path:"Timeline",element:p(ye,{element:p(dr,null)})}),p(j,{path:"Contact",element:p(ye,{element:p(vr,null)})}))))),document.getElementById("react-root"));export{_r as P,E as d,p as v,ie as y};

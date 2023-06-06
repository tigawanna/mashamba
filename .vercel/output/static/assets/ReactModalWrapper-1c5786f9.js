import{j as je,a as Z}from"./jsx-runtime-6a3157d9.js";import{r as Me,g as ze,b as Ke,a as te}from"./index-e76fa941.js";import{r as Ve}from"./client-16dedf8a.js";import{A as Ye}from"./index-60c67a20.js";import{I as Ge}from"./index-b8d29899.js";var ne={},Je={get exports(){return ne},set exports(t){ne=t}},U={},oe={},Qe={get exports(){return oe},set exports(t){oe=t}},Xe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ze=Xe,et=Ze;function Te(){}function Re(){}Re.resetWarningCache=Te;var tt=function(){function t(o,l,d,y,a,m){if(m!==et){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Re,resetWarningCache:Te};return r.PropTypes=r,r};Qe.exports=tt();var re={},nt={get exports(){return re},set exports(t){re=t}},R={},z={},ot={get exports(){return z},set exports(t){z=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",o="contents",l=/input|select|textarea|button|object|iframe/;function d(c,v){return v.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function y(c){var v=c.offsetWidth<=0&&c.offsetHeight<=0;if(v&&!c.innerHTML)return!0;try{var b=window.getComputedStyle(c),E=b.getPropertyValue("display");return v?E!==o&&d(c,b):E===r}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var v=c,b=c.getRootNode&&c.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function m(c,v){var b=c.nodeName.toLowerCase(),E=l.test(b)&&!c.disabled||b==="a"&&c.href||v;return E&&a(c)}function p(c){var v=c.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&m(c,!b)}function h(c){var v=[].slice.call(c.querySelectorAll("*"),0).reduce(function(b,E){return b.concat(E.shadowRoot?h(E.shadowRoot):[E])},[]);return v.filter(p)}t.exports=e.default})(ot,z);Object.defineProperty(R,"__esModule",{value:!0});R.resetState=it;R.log=st;R.handleBlur=K;R.handleFocus=V;R.markForFocusLater=ut;R.returnFocus=ft;R.popWithoutFocus=ct;R.setupScopedFocus=dt;R.teardownScopedFocus=pt;var rt=z,at=lt(rt);function lt(t){return t&&t.__esModule?t:{default:t}}var I=[],k=null,pe=!1;function it(){I=[]}function st(){}function K(){pe=!0}function V(){if(pe){if(pe=!1,!k)return;setTimeout(function(){if(!k.contains(document.activeElement)){var t=(0,at.default)(k)[0]||k;t.focus()}},0)}}function ut(){I.push(document.activeElement)}function ft(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{I.length!==0&&(e=I.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function ct(){I.length>0&&I.pop()}function dt(t){k=t,window.addEventListener?(window.addEventListener("blur",K,!1),document.addEventListener("focus",V,!0)):(window.attachEvent("onBlur",K),document.attachEvent("onFocus",V))}function pt(){k=null,window.addEventListener?(window.removeEventListener("blur",K),document.removeEventListener("focus",V)):(window.detachEvent("onBlur",K),document.detachEvent("onFocus",V))}var ae={},vt={get exports(){return ae},set exports(t){ae=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var r=z,o=l(r);function l(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function y(a,m){var p=(0,o.default)(a);if(!p.length){m.preventDefault();return}var h=void 0,c=m.shiftKey,v=p[0],b=p[p.length-1],E=d();if(a===E){if(!c)return;h=b}if(b===E&&!c&&(h=v),v===E&&c&&(h=b),h){m.preventDefault(),h.focus();return}var P=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=P!=null&&P[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var W=p.indexOf(E);if(W>-1&&(W+=c?-1:1),h=p[W],typeof h>"u"){m.preventDefault(),h=c?b:v,h.focus();return}m.preventDefault(),h.focus()}}t.exports=e.default})(vt,ae);var N={},mt=function(){},ht=mt,T={},ve={},bt={get exports(){return ve},set exports(t){ve=t}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=r:window.ExecutionEnvironment=r})()})(bt);Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var yt=ve,gt=Ot(yt);function Ot(t){return t&&t.__esModule?t:{default:t}}var ue=gt.default,_t=ue.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=ue.canUseDOM?window.NodeList:{};T.canUseDOM=ue.canUseDOM;T.default=_t;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Mt;N.log=Tt;N.assertNodeList=Ne;N.setElement=Rt;N.validateElement=me;N.hide=Nt;N.show=Pt;N.documentNotReadyOrSSRTesting=At;var Ct=ht,Et=wt(Ct),St=T;function wt(t){return t&&t.__esModule?t:{default:t}}var w=null;function Mt(){w&&(w.removeAttribute?w.removeAttribute("aria-hidden"):w.length!=null?w.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(w).forEach(function(t){return t.removeAttribute("aria-hidden")})),w=null}function Tt(){}function Ne(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Rt(t){var e=t;if(typeof e=="string"&&St.canUseDOM){var r=document.querySelectorAll(e);Ne(r,e),e=r}return w=e||w,w}function me(t){var e=t||w;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Et.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Nt(t){var e=!0,r=!1,o=void 0;try{for(var l=me(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var y=d.value;y.setAttribute("aria-hidden","true")}}catch(a){r=!0,o=a}finally{try{!e&&l.return&&l.return()}finally{if(r)throw o}}}function Pt(t){var e=!0,r=!1,o=void 0;try{for(var l=me(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var y=d.value;y.removeAttribute("aria-hidden")}}catch(a){r=!0,o=a}finally{try{!e&&l.return&&l.return()}finally{if(r)throw o}}}function At(){w=null}var H={};Object.defineProperty(H,"__esModule",{value:!0});H.resetState=Dt;H.log=xt;var B={},j={};function ye(t,e){t.classList.remove(e)}function Dt(){var t=document.getElementsByTagName("html")[0];for(var e in B)ye(t,B[e]);var r=document.body;for(var o in j)ye(r,j[o]);B={},j={}}function xt(){}var Ft=function(e,r){return e[r]||(e[r]=0),e[r]+=1,r},Lt=function(e,r){return e[r]&&(e[r]-=1),r},Ut=function(e,r,o){o.forEach(function(l){Ft(r,l),e.add(l)})},Wt=function(e,r,o){o.forEach(function(l){Lt(r,l),r[l]===0&&e.remove(l)})};H.add=function(e,r){return Ut(e.classList,e.nodeName.toLowerCase()=="html"?B:j,r.split(" "))};H.remove=function(e,r){return Wt(e.classList,e.nodeName.toLowerCase()=="html"?B:j,r.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=It;q.resetState=Ht;function kt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Pe=function t(){var e=this;kt(this,t),this.register=function(r){e.openInstances.indexOf(r)===-1&&(e.openInstances.push(r),e.emit("register"))},this.deregister=function(r){var o=e.openInstances.indexOf(r);o!==-1&&(e.openInstances.splice(o,1),e.emit("deregister"))},this.subscribe=function(r){e.subscribers.push(r)},this.emit=function(r){e.subscribers.forEach(function(o){return o(r,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Pe;function It(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Ht(){le=new Pe}q.default=le;var he={};Object.defineProperty(he,"__esModule",{value:!0});he.resetState=jt;he.log=zt;var qt=q,$t=Bt(qt);function Bt(t){return t&&t.__esModule?t:{default:t}}var C=void 0,M=void 0,L=[];function jt(){for(var t=[C,M],e=0;e<t.length;e++){var r=t[e];r&&r.parentNode&&r.parentNode.removeChild(r)}C=M=null,L=[]}function zt(){console.log("bodyTrap ----------"),console.log(L.length);for(var t=[C,M],e=0;e<t.length;e++){var r=t[e],o=r||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function ge(){L.length!==0&&L[L.length-1].focusContent()}function Kt(t,e){!C&&!M&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",ge),M=C.cloneNode(),M.addEventListener("focus",ge)),L=e,L.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(C.parentElement&&C.parentElement.removeChild(C),M.parentElement&&M.parentElement.removeChild(M))}$t.default.subscribe(Kt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(f){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[n]=g[n])}return f},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(u,g){for(var n=0;n<g.length;n++){var i=g[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}return function(u,g,n){return g&&f(u.prototype,g),n&&f(u,n),u}}(),d=Me,y=oe,a=J(y),m=R,p=fe(m),h=ae,c=J(h),v=N,b=fe(v),E=H,P=fe(E),$=T,W=J($),Le=q,be=J(Le);function fe(f){if(f&&f.__esModule)return f;var u={};if(f!=null)for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(u[g]=f[g]);return u.default=f,u}function J(f){return f&&f.__esModule?f:{default:f}}function Ue(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function We(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function ke(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var ce={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ie=function(u){return u.code==="Tab"||u.keyCode===9},He=function(u){return u.code==="Escape"||u.keyCode===27},Q=0,de=function(f){ke(u,f);function u(g){Ue(this,u);var n=We(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,g));return n.setOverlayRef=function(i){n.overlay=i,n.props.overlayRef&&n.props.overlayRef(i)},n.setContentRef=function(i){n.content=i,n.props.contentRef&&n.props.contentRef(i)},n.afterClose=function(){var i=n.props,_=i.appElement,S=i.ariaHideApp,O=i.htmlOpenClassName,D=i.bodyOpenClassName,x=i.parentSelector,X=x&&x().ownerDocument||document;D&&P.remove(X.body,D),O&&P.remove(X.getElementsByTagName("html")[0],O),S&&Q>0&&(Q-=1,Q===0&&b.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(p.returnFocus(n.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),be.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(p.setupScopedFocus(n.node),p.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var i=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:i},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(i){Ie(i)&&(0,c.default)(n.content,i),n.props.shouldCloseOnEsc&&He(i)&&(i.stopPropagation(),n.requestClose(i))},n.handleOverlayOnClick=function(i){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(i):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(i){!n.props.shouldCloseOnOverlayClick&&i.target==n.overlay&&i.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(i){return n.ownerHandlesClose()&&n.props.onRequestClose(i)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(i,_){var S=(typeof _>"u"?"undefined":o(_))==="object"?_:{base:ce[i],afterOpen:ce[i]+"--after-open",beforeClose:ce[i]+"--before-close"},O=S.base;return n.state.afterOpen&&(O=O+" "+S.afterOpen),n.state.beforeClose&&(O=O+" "+S.beforeClose),typeof _=="string"&&_?O+" "+_:O},n.attributesFromObject=function(i,_){return Object.keys(_).reduce(function(S,O){return S[i+"-"+O]=_[O],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,i){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,i=n.appElement,_=n.ariaHideApp,S=n.htmlOpenClassName,O=n.bodyOpenClassName,D=n.parentSelector,x=D&&D().ownerDocument||document;O&&P.add(x.body,O),S&&P.add(x.getElementsByTagName("html")[0],S),_&&(Q+=1,b.hide(i)),be.default.register(this)}},{key:"render",value:function(){var n=this.props,i=n.id,_=n.className,S=n.overlayClassName,O=n.defaultStyles,D=n.children,x=_?{}:O.content,X=S?{}:O.overlay;if(this.shouldBeClosed())return null;var qe={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:r({},X,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},$e=r({id:i,ref:this.setContentRef,style:r({},x,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Be=this.props.contentElement($e,D);return this.props.overlayElement(qe,Be)}}]),u}(d.Component);de.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},de.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(W.default),a.default.instanceOf($.SafeHTMLCollection),a.default.instanceOf($.SafeNodeList),a.default.arrayOf(a.default.instanceOf(W.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=de,t.exports=e.default})(nt,re);function Ae(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function De(t){function e(r){var o=this.constructor.getDerivedStateFromProps(t,r);return o??null}this.setState(e.bind(this))}function xe(t,e){try{var r=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,o)}finally{this.props=r,this.state=o}}Ae.__suppressDeprecationWarning=!0;De.__suppressDeprecationWarning=!0;xe.__suppressDeprecationWarning=!0;function Vt(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var r=null,o=null,l=null;if(typeof e.componentWillMount=="function"?r="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),r!==null||o!==null||l!==null){var d=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+y+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ae,e.componentWillReceiveProps=De),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=xe;var a=e.componentDidUpdate;e.componentDidUpdate=function(p,h,c){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,p,h,v)}}return t}const Yt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Vt},Symbol.toStringTag,{value:"Module"})),Gt=ze(Yt);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var Oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Jt=function(){function t(e,r){for(var o=0;o<r.length;o++){var l=r[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),Fe=Me,ie=Y(Fe),Qt=Ve,se=Y(Qt),Xt=oe,s=Y(Xt),Zt=re,_e=Y(Zt),en=N,tn=on(en),A=T,Ce=Y(A),nn=Gt;function on(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function Y(t){return t&&t.__esModule?t:{default:t}}function rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ee(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function an(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ln=U.portalClassName="ReactModalPortal",sn=U.bodyOpenClassName="ReactModal__Body--open",F=A.canUseDOM&&se.default.createPortal!==void 0,Se=function(e){return document.createElement(e)},we=function(){return F?se.default.createPortal:se.default.unstable_renderSubtreeIntoContainer};function ee(t){return t()}var G=function(t){an(e,t);function e(){var r,o,l,d;rn(this,e);for(var y=arguments.length,a=Array(y),m=0;m<y;m++)a[m]=arguments[m];return d=(o=(l=Ee(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(a))),l),l.removePortal=function(){!F&&se.default.unmountComponentAtNode(l.node);var p=ee(l.props.parentSelector);p&&p.contains(l.node)?p.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(p){l.portal=p},l.renderPortal=function(p){var h=we(),c=h(l,ie.default.createElement(_e.default,Oe({defaultStyles:e.defaultStyles},p)),l.node);l.portalRef(c)},o),Ee(l,d)}return Jt(e,[{key:"componentDidMount",value:function(){if(A.canUseDOM){F||(this.node=Se("div")),this.node.className=this.props.portalClassName;var o=ee(this.props.parentSelector);o.appendChild(this.node),!F&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var l=ee(o.parentSelector),d=ee(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(o,l,d){if(A.canUseDOM){var y=this.props,a=y.isOpen,m=y.portalClassName;o.portalClassName!==m&&(this.node.className=m);var p=d.prevParent,h=d.nextParent;h!==p&&(p.removeChild(this.node),h.appendChild(this.node)),!(!o.isOpen&&!a)&&!F&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!A.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,l=Date.now(),d=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||l+this.props.closeTimeoutMS);d?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!A.canUseDOM||!F)return null;!this.node&&F&&(this.node=Se("div"));var o=we();return o(ie.default.createElement(_e.default,Oe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){tn.setElement(o)}}]),e}(Fe.Component);G.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.oneOfType([s.default.instanceOf(Ce.default),s.default.instanceOf(A.SafeHTMLCollection),s.default.instanceOf(A.SafeNodeList),s.default.arrayOf(s.default.instanceOf(Ce.default))]),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func};G.defaultProps={isOpen:!1,portalClassName:ln,bodyOpenClassName:sn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,r){return ie.default.createElement("div",e,r)},contentElement:function(e,r){return ie.default.createElement("div",e,r)}};G.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,nn.polyfill)(G);U.default=G;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=U,o=l(r);function l(d){return d&&d.__esModule?d:{default:d}}e.default=o.default,t.exports=e.default})(Je,ne);const un=Ke(ne),hn=({open:t,closeModal:e,closebutton:r=!0,styles:o,child:l,deps:d,responsive:y=!0})=>{const{isMobile:a}=fn(),m=(h,c)=>a&&y?c:h,p={overlay:{position:"fixed",zIndex:9999999,top:m((o==null?void 0:o.overlay_top)??"0%","0%"),left:m((o==null?void 0:o.overlay_left)??"15%","0%"),right:m((o==null?void 0:o.overlay_right)??"15%","0%"),bottom:m((o==null?void 0:o.overlay_bottom)??"5%","0%"),backgroundColor:(o==null?void 0:o.overlay_bg_color)??"rgba(255, 255, 255, 0.75)",overflow:"hidden"},content:{position:"absolute",top:m((o==null?void 0:o.content_top)??"0%","0%"),left:m((o==null?void 0:o.content_left)??"15%","0%"),right:m((o==null?void 0:o.content_right)??"15%","0%"),bottom:m((o==null?void 0:o.content_bottom)??"10%","10%"),overflow:"hidden",WebkitOverflowScrolling:"touch",border:(o==null?void 0:o.content_border)??"",borderRadius:(o==null?void 0:o.content_border_radius)??"0%",outline:"none",backgroundColor:(o==null?void 0:o.content_bg_color)??""}};return je(un,{isOpen:t,onRequestClose:e,shouldCloseOnOverlayClick:!0,appElement:document.getElementById("root"),style:p,contentLabel:"Modal",children:[r?Z("button",{type:"button",onClick:h=>h.stopPropagation(),className:"w-full flex justify-end",children:Z(Ge.Provider,{value:{size:"25"},children:Z(Ye,{onClick:e})})}):null,Z("div",{onClick:h=>h.stopPropagation(),className:"h-full w-full",children:te.isValidElement(l)?te.cloneElement(l,{deps:d,open:t}):l})]})},fn=()=>{const[t,e]=te.useState(window.innerWidth);function r(){e(window.innerWidth)}te.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]);const o=t<=700;return{width:t,isMobile:o}};export{hn as default};
(self.webpackChunkautorizadores_app=self.webpackChunkautorizadores_app||[]).push([[333],{3214:R=>{R.exports=function(m,C){return Array.prototype.slice.call(m,C)}},1627:(R,k,m)=>{"use strict";var C=m(4233);R.exports=function(f,u,p){!f||C(function(){f.apply(p||null,u||[])})}},7604:(R,k,m)=>{"use strict";var C=m(3214),x=m(1627);R.exports=function(u,p){var D=p||{},_={};return void 0===u&&(u={}),u.on=function(O,E){return _[O]?_[O].push(E):_[O]=[E],u},u.once=function(O,E){return E._once=!0,u.on(O,E),u},u.off=function(O,E){var A=arguments.length;if(1===A)delete _[O];else if(0===A)_={};else{var $=_[O];if(!$)return u;$.splice($.indexOf(E),1)}return u},u.emit=function(){var O=C(arguments);return u.emitterSnapshot(O.shift()).apply(this,O)},u.emitterSnapshot=function(O){var E=(_[O]||[]).slice(0);return function(){var A=C(arguments),$=this||u;if("error"===O&&!1!==D.throws&&!E.length)throw 1===A.length?A[0]:A;return E.forEach(function(B){D.async?x(B,A,$):B.apply($,A),B._once&&u.off(O,B)}),u}},u}},7225:(R,k,m)=>{"use strict";var C=m(5728),x=m(4139),f=global.document,u=function _(v,M,w,g){return v.addEventListener(M,w,g)},p=function E(v,M,w,g){return v.removeEventListener(M,w,g)},D=[];function J(v,M,w){var g=function G(v,M,w){var g,c;for(g=0;g<D.length;g++)if((c=D[g]).element===v&&c.type===M&&c.fn===w)return g}(v,M,w);if(g){var c=D[g].wrapper;return D.splice(g,1),c}}global.addEventListener||(u=function O(v,M,w){return v.attachEvent("on"+M,function B(v,M,w){var g=J(v,M,w)||function W(v,M,w){return function(c){var s=c||global.event;s.target=s.target||s.srcElement,s.preventDefault=s.preventDefault||function(){s.returnValue=!1},s.stopPropagation=s.stopPropagation||function(){s.cancelBubble=!0},s.which=s.which||s.keyCode,w.call(v,s)}}(v,0,w);return D.push({wrapper:g,element:v,type:M,fn:w}),g}(v,M,w))},p=function A(v,M,w){var g=J(v,M,w);if(g)return v.detachEvent("on"+M,g)}),R.exports={add:u,remove:p,fabricate:function $(v,M,w){var g=-1===x.indexOf(M)?function s(){return new C(M,{detail:w})}():function c(){var e;return f.createEvent?(e=f.createEvent("Event")).initEvent(M,!0,!0):f.createEventObject&&(e=f.createEventObject()),e}();v.dispatchEvent?v.dispatchEvent(g):v.fireEvent("on"+M,g)}}},4139:R=>{"use strict";var k=[],m="",C=/^on/;for(m in global)C.test(m)&&k.push(m.slice(2));R.exports=k},5728:R=>{var k=global.CustomEvent;R.exports=function m(){try{var C=new k("cat",{detail:{foo:"bar"}});return"cat"===C.type&&"bar"===C.detail.foo}catch(x){}return!1}()?k:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(x,f){var u=document.createEvent("CustomEvent");return f?u.initCustomEvent(x,f.bubbles,f.cancelable,f.detail):u.initCustomEvent(x,!1,!1,void 0),u}:function(x,f){var u=document.createEventObject();return u.type=x,f?(u.bubbles=Boolean(f.bubbles),u.cancelable=Boolean(f.cancelable),u.detail=f.detail):(u.bubbles=!1,u.cancelable=!1,u.detail=void 0),u}},1832:R=>{"use strict";var k={};function x(p){var D=k[p];return D?D.lastIndex=0:k[p]=D=new RegExp("(?:^|\\s)"+p+"(?:\\s|$)","g"),D}R.exports={add:function f(p,D){var _=p.className;_.length?x(D).test(_)||(p.className+=" "+D):p.className=D},rm:function u(p,D){p.className=p.className.replace(x(D)," ").trim()}}},9721:(R,k,m)=>{"use strict";var C=m(7604),x=m(7225),f=m(1832),u=document,p=u.documentElement;function _(e,r,n,i){global.navigator.pointerEnabled?x[r](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],i):global.navigator.msPointerEnabled?x[r](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],i):(x[r](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],i),x[r](e,n,i))}function O(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var r=e.button;return void 0!==r?1&r?1:2&r?3:4&r?2:0:void 0}function E(e){var r=e.getBoundingClientRect();return{left:r.left+A("scrollLeft","pageXOffset"),top:r.top+A("scrollTop","pageYOffset")}}function A(e,r){return void 0!==global[r]?global[r]:p.clientHeight?p[e]:u.body[e]}function $(e,r,n){var o,i=(e=e||{}).className||"";return e.className+=" gu-hide",o=u.elementFromPoint(r,n),e.className=i,o}function W(){return!1}function B(){return!0}function J(e){return e.width||e.right-e.left}function G(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===u?null:e.parentNode}function M(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||w(e)}function w(e){return!(!e||"false"===e.contentEditable)&&("true"===e.contentEditable||w(v(e)))}function g(e){return e.nextElementSibling||function r(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function s(e,r){var n=function c(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(r),i={pageX:"clientX",pageY:"clientY"};return e in i&&!(e in n)&&i[e]in n&&(e=i[e]),n[e]}R.exports=function D(e,r){var n=arguments.length;1===n&&!1===Array.isArray(e)&&(r=e,e=[]);var i,o,h,T,Y,L,K,I,F,y,Q,ee,V=null,l=r||{};void 0===l.moves&&(l.moves=B),void 0===l.accepts&&(l.accepts=B),void 0===l.invalid&&(l.invalid=Se),void 0===l.containers&&(l.containers=e||[]),void 0===l.isContainer&&(l.isContainer=W),void 0===l.copy&&(l.copy=!1),void 0===l.copySortSource&&(l.copySortSource=!1),void 0===l.revertOnSpill&&(l.revertOnSpill=!1),void 0===l.removeOnSpill&&(l.removeOnSpill=!1),void 0===l.direction&&(l.direction="vertical"),void 0===l.ignoreInputTextSelection&&(l.ignoreInputTextSelection=!0),void 0===l.mirrorContainer&&(l.mirrorContainer=u.body);var S=C({containers:l.containers,start:we,end:fe,cancel:pe,remove:me,destroy:Me,canMove:De,dragging:!1});return!0===l.removeOnSpill&&S.on("over",xe).on("out",Oe),ue(),S;function te(t){return-1!==S.containers.indexOf(t)||l.isContainer(t)}function ue(t){var a=t?"remove":"add";_(p,a,"mousedown",ye),_(p,a,"mouseup",ie)}function re(t){_(p,t?"remove":"add","mousemove",Ce)}function le(t){var a=t?"remove":"add";x[a](p,"selectstart",ce),x[a](p,"click",ce)}function Me(){ue(!0),ie({})}function ce(t){ee&&t.preventDefault()}function ye(t){if(L=t.clientX,K=t.clientY,1===O(t)&&!t.metaKey&&!t.ctrlKey){var d=t.target,b=ne(d);!b||(ee=b,re(),"mousedown"===t.type&&(M(d)?d.focus():t.preventDefault()))}}function Ce(t){if(ee){if(0===O(t))return void ie({});if(!(void 0!==t.clientX&&Math.abs(t.clientX-L)<=(l.slideFactorX||0)&&void 0!==t.clientY&&Math.abs(t.clientY-K)<=(l.slideFactorY||0))){if(l.ignoreInputTextSelection){var a=s("clientX",t)||0,d=s("clientY",t)||0;if(M(u.elementFromPoint(a,d)))return}var N=ee;re(!0),le(),fe(),de(N);var P=E(h);T=s("pageX",t)-P.left,Y=s("pageY",t)-P.top,f.add(y||h,"gu-transit"),_e(),se(t)}}}function ne(t){if(!(S.dragging&&i||te(t))){for(var a=t;v(t)&&!1===te(v(t));)if(l.invalid(t,a)||!(t=v(t)))return;var d=v(t);if(d&&!l.invalid(t,a)&&l.moves(t,d,a,g(t)))return{item:t,source:d}}}function De(t){return!!ne(t)}function we(t){var a=ne(t);a&&de(a)}function de(t){Ie(t.item,t.source)&&(y=t.item.cloneNode(!0),S.emit("cloned",y,t.item,"copy")),o=t.source,h=t.item,I=F=g(t.item),S.dragging=!0,S.emit("drag",h,o)}function Se(){return!1}function fe(){if(S.dragging){var t=y||h;he(t,v(t))}}function ve(){ee=!1,re(!0),le(!0)}function ie(t){if(ve(),S.dragging){var a=y||h,d=s("clientX",t)||0,b=s("clientY",t)||0,P=ge($(i,d,b),d,b);P&&(y&&l.copySortSource||!y||P!==o)?he(a,P):l.removeOnSpill?me():pe()}}function he(t,a){var d=v(t);y&&l.copySortSource&&a===o&&d.removeChild(h),ae(a)?S.emit("cancel",t,o,o):S.emit("drop",t,a,o,F),oe()}function me(){if(S.dragging){var t=y||h,a=v(t);a&&a.removeChild(t),S.emit(y?"cancel":"remove",t,a,o),oe()}}function pe(t){if(S.dragging){var a=arguments.length>0?t:l.revertOnSpill,d=y||h,b=v(d),N=ae(b);!1===N&&a&&(y?b&&b.removeChild(y):o.insertBefore(d,I)),N||a?S.emit("cancel",d,o,o):S.emit("drop",d,b,o,F),oe()}}function oe(){var t=y||h;ve(),Te(),t&&f.rm(t,"gu-transit"),Q&&clearTimeout(Q),S.dragging=!1,V&&S.emit("out",t,V,o),S.emit("dragend",t),o=h=y=I=F=Q=V=null}function ae(t,a){var d;return d=void 0!==a?a:i?F:g(y||h),t===o&&d===I}function ge(t,a,d){for(var b=t;b&&!N();)b=v(b);return b;function N(){if(!1===te(b))return!1;var q=Ee(b,t),X=be(b,q,a,d);return!!ae(b,X)||l.accepts(h,b,o,X)}}function se(t){if(i){t.preventDefault();var a=s("clientX",t)||0,d=s("clientY",t)||0,N=d-Y;i.style.left=a-T+"px",i.style.top=N+"px";var P=y||h,q=$(i,a,d),X=ge(q,a,d),z=null!==X&&X!==V;(z||null===X)&&(function Re(){V&&H("out")}(),V=X,function Pe(){z&&H("over")}());var U=v(P);if(X!==o||!y||l.copySortSource){var j,Z=Ee(X,q);if(null!==Z)j=be(X,Z,a,d);else{if(!0!==l.revertOnSpill||y)return void(y&&U&&U.removeChild(P));j=I,X=o}(null===j&&z||j!==P&&j!==g(P))&&(F=j,X.insertBefore(P,j),S.emit("shadow",P,X,o))}else U&&U.removeChild(P)}function H(ke){S.emit(ke,P,V,o)}}function xe(t){f.rm(t,"gu-hide")}function Oe(t){S.dragging&&f.add(t,"gu-hide")}function _e(){if(!i){var t=h.getBoundingClientRect();(i=h.cloneNode(!0)).style.width=J(t)+"px",i.style.height=G(t)+"px",f.rm(i,"gu-transit"),f.add(i,"gu-mirror"),l.mirrorContainer.appendChild(i),_(p,"add","mousemove",se),f.add(l.mirrorContainer,"gu-unselectable"),S.emit("cloned",i,h,"mirror")}}function Te(){i&&(f.rm(l.mirrorContainer,"gu-unselectable"),_(p,"remove","mousemove",se),v(i).removeChild(i),i=null)}function Ee(t,a){for(var d=a;d!==t&&v(d)!==t;)d=v(d);return d===p?null:d}function be(t,a,d,b){var N="horizontal"===l.direction;return a!==t?function X(){var U=a.getBoundingClientRect();return function z(U){return U?g(a):a}(N?d>U.left+J(U)/2:b>U.top+G(U)/2)}():function q(){var j,Z,H,U=t.children.length;for(j=0;j<U;j++)if(H=(Z=t.children[j]).getBoundingClientRect(),N&&H.left+H.width/2>d||!N&&H.top+H.height/2>b)return Z;return null}()}function Ie(t,a){return"boolean"==typeof l.copy?l.copy:l.copy(t,a)}}},8333:(R,k,m)=>{"use strict";m.d(k,{pQ:()=>G,qE:()=>M,sW:()=>v});var C=m(9721),x=m.n(C),f=m(5e3),u=m(7579),p=m(727),D=m(9300),_=m(4004);class O{constructor(s,e,r){this.name=s,this.drake=e,this.options=r,this.initEvents=!1}}const E={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},A=Object.keys(E).map(c=>E[c]),$=x()||C;class W{constructor(s=$){this.build=s}}const B=(c,s,e)=>r=>r.pipe((0,D.h)(({event:n,name:i})=>n===c&&(void 0===s||i===s)),(0,_.U)(({name:n,args:i})=>e(n,i))),J=(c,[s,e,r])=>({name:c,el:s,container:e,source:r});let G=(()=>{class c{constructor(e=null){this.drakeFactory=e,this.dispatch$=new u.x,this.drag=r=>this.dispatch$.pipe(B(E.Drag,r,(n,[i,o])=>({name:n,el:i,source:o}))),this.dragend=r=>this.dispatch$.pipe(B(E.DragEnd,r,(n,[i])=>({name:n,el:i}))),this.drop=r=>this.dispatch$.pipe(B(E.Drop,r,(n,[i,o,h,T])=>({name:n,el:i,target:o,source:h,sibling:T}))),this.elContainerSource=r=>n=>this.dispatch$.pipe(B(r,n,J)),this.cancel=this.elContainerSource(E.Cancel),this.remove=this.elContainerSource(E.Remove),this.shadow=this.elContainerSource(E.Shadow),this.over=this.elContainerSource(E.Over),this.out=this.elContainerSource(E.Out),this.cloned=r=>this.dispatch$.pipe(B(E.Cloned,r,(n,[i,o,h])=>({name:n,clone:i,original:o,cloneType:h}))),this.dropModel=r=>this.dispatch$.pipe(B(E.DropModel,r,(n,[i,o,h,T,Y,L,K,I,F])=>({name:n,el:i,target:o,source:h,sibling:T,item:Y,sourceModel:L,targetModel:K,sourceIndex:I,targetIndex:F}))),this.removeModel=r=>this.dispatch$.pipe(B(E.RemoveModel,r,(n,[i,o,h,T,Y,L])=>({name:n,el:i,container:o,source:h,item:T,sourceModel:Y,sourceIndex:L}))),this.groups={},null===this.drakeFactory&&(this.drakeFactory=new W)}add(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}find(e){return this.groups[e]}destroy(e){let r=this.find(e);!r||(r.drake&&r.drake.destroy(),delete this.groups[e])}createGroup(e,r){return this.add(new O(e,this.drakeFactory.build([],r),r))}handleModels({name:e,drake:r,options:n}){let i,o,h;r.on("remove",(T,Y,L)=>{if(!r.models)return;let K=r.models[r.containers.indexOf(L)];K=K.slice(0);const I=K.splice(o,1)[0];this.dispatch$.next({event:E.RemoveModel,name:e,args:[T,Y,L,I,K,o]})}),r.on("drag",(T,Y)=>{!r.models||(i=T,o=this.domIndexOf(T,Y))}),r.on("drop",(T,Y,L,K)=>{if(!r.models||!Y)return;h=this.domIndexOf(T,Y);let y,I=r.models[r.containers.indexOf(L)],F=r.models[r.containers.indexOf(Y)];if(Y===L)I=I.slice(0),y=I.splice(o,1)[0],I.splice(h,0,y),F=I;else{let Q=i!==T;if(y=I[o],Q){if(!n.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");y=n.copyItem(y)}if(Q||(I=I.slice(0),I.splice(o,1)),F=F.slice(0),F.splice(h,0,y),Q)try{Y.removeChild(T)}catch(V){}}this.dispatch$.next({event:E.DropModel,name:e,args:[T,Y,L,K,y,I,F,o,h]})})}setupEvents(e){if(e.initEvents)return;e.initEvents=!0;const r=e.name;A.forEach(i=>{e.drake.on(i,(...o)=>{this.dispatch$.next({event:i,name:r,args:o})})})}domIndexOf(e,r){return Array.prototype.indexOf.call(r.children,e)}}return c.\u0275fac=function(e){return new(e||c)(f.LFG(W,8))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac}),c})(),v=(()=>{class c{constructor(e,r){this.el=e,this.dragulaService=r,this.dragulaModelChange=new f.vpe}get container(){return this.el&&this.el.nativeElement}ngOnChanges(e){if(e&&e.dragula){const{previousValue:r,currentValue:n}=e.dragula;let h=!!n;!!r&&this.teardown(r),h&&this.setup()}else if(e&&e.dragulaModel){const{previousValue:r,currentValue:n}=e.dragulaModel,{drake:o}=this.group;if(this.dragula&&o){o.models=o.models||[];let h=o.models.indexOf(r);-1!==h?(o.models.splice(h,1),n&&o.models.splice(h,0,n)):n&&o.models.push(n)}}}setup(){let r=this.dragulaService.find(this.dragula);r||(r=this.dragulaService.createGroup(this.dragula,{})),(n=>{this.dragulaModel&&(n.drake.models?n.drake.models.push(this.dragulaModel):n.drake.models=[this.dragulaModel])})(r),r.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=r}subscribe(e){this.subs=new p.w0,this.subs.add(this.dragulaService.dropModel(e).subscribe(({source:r,target:n,sourceModel:i,targetModel:o})=>{r===this.el.nativeElement?this.dragulaModelChange.emit(i):n===this.el.nativeElement&&this.dragulaModelChange.emit(o)})),this.subs.add(this.dragulaService.removeModel(e).subscribe(({source:r,sourceModel:n})=>{r===this.el.nativeElement&&this.dragulaModelChange.emit(n)}))}teardown(e){this.subs&&this.subs.unsubscribe();const r=this.dragulaService.find(e);if(r){const n=r.drake.containers.indexOf(this.el.nativeElement);if(-1!==n&&r.drake.containers.splice(n,1),this.dragulaModel&&r.drake&&r.drake.models){let i=r.drake.models.indexOf(this.dragulaModel);-1!==i&&r.drake.models.splice(i,1)}}}ngOnDestroy(){this.teardown(this.dragula)}}return c.\u0275fac=function(e){return new(e||c)(f.Y36(f.SBq),f.Y36(G))},c.\u0275dir=f.lG2({type:c,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[f.TTD]}),c})(),M=(()=>{class c{static forRoot(){return{ngModule:c,providers:[G]}}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({}),c})();new W((c,s)=>new g(c,s));class g{constructor(s=[],e={},r){this.containers=s,this.options=e,this.models=r,this.dragging=!1,this.emitter$=new u.x,this.subs=new p.w0}start(s){this.dragging=!0}end(){this.dragging=!1}cancel(s){this.dragging=!1}remove(){this.dragging=!1}on(s,e){this.subs.add(this.emitter$.pipe((0,D.h)(({eventType:r})=>r===s)).subscribe(({args:r})=>{e(...r)}))}destroy(){this.subs.unsubscribe()}emit(s,...e){this.emitter$.next({eventType:s,args:e})}}},4233:R=>{var k="function"==typeof setImmediate;R.exports=k?function(C){setImmediate(C)}:function(C){setTimeout(C,0)}}}]);
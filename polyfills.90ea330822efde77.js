"use strict";(self.webpackChunkautorizadores_app=self.webpackChunkautorizadores_app||[]).push([[429],{6106:(Gt,zn,Kn)=>{Error;const Ho=function(s,...e){if(Ho.translate){const n=Ho.translate(s,e);s=n[0],e=n[1]}let t=zl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+zl(s[n],s.raw[n]);return t};function zl(s,e){return":"===e.charAt(0)?s.substring(function Ul(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>"undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self)().$localize=Ho,Kn(8583),window.global=window},8583:()=>{!function(f){const v=f.performance;function T(fe){v&&v.mark&&v.mark(fe)}function _(fe,V){v&&v.measure&&v.measure(fe,V)}T("Zone");const S=f.__Zone_symbol_prefix||"__zone_symbol__";function C(fe){return S+fe}const q=!0===f[C("forceDuplicateZoneCheck")];if(f.Zone){if(q||"function"!=typeof f.Zone.__symbol__)throw new Error("Zone already loaded.");return f.Zone}let H=(()=>{class fe{constructor(p,m){this._parent=p,this._name=m?m.name||"unnamed":"<root>",this._properties=m&&m.properties||{},this._zoneDelegate=new X(this,this._parent&&this._parent._zoneDelegate,m)}static assertZonePatched(){if(f.Promise!==Qe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let p=fe.current;for(;p.parent;)p=p.parent;return p}static get current(){return Re.zone}static get currentTask(){return Ve}static __load_patch(p,m,K=!1){if(Qe.hasOwnProperty(p)){if(!K&&q)throw Error("Already loaded patch: "+p)}else if(!f["__Zone_disable_"+p]){const ee="Zone:"+p;T(ee),Qe[p]=m(f,fe,Me),_(ee,ee)}}get parent(){return this._parent}get name(){return this._name}get(p){const m=this.getZoneWith(p);if(m)return m._properties[p]}getZoneWith(p){let m=this;for(;m;){if(m._properties.hasOwnProperty(p))return m;m=m._parent}return null}fork(p){if(!p)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,p)}wrap(p,m){if("function"!=typeof p)throw new Error("Expecting function got: "+p);const K=this._zoneDelegate.intercept(this,p,m),ee=this;return function(){return ee.runGuarded(K,this,arguments,m)}}run(p,m,K,ee){Re={parent:Re,zone:this};try{return this._zoneDelegate.invoke(this,p,m,K,ee)}finally{Re=Re.parent}}runGuarded(p,m=null,K,ee){Re={parent:Re,zone:this};try{try{return this._zoneDelegate.invoke(this,p,m,K,ee)}catch(O){if(this._zoneDelegate.handleError(this,O))throw O}}finally{Re=Re.parent}}runTask(p,m,K){if(p.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(p.zone||Fe).name+"; Execution: "+this.name+")");if(p.state===G&&(p.type===Ye||p.type===J))return;const ee=p.state!=U;ee&&p._transitionTo(U,ce),p.runCount++;const O=Ve;Ve=p,Re={parent:Re,zone:this};try{p.type==J&&p.data&&!p.data.isPeriodic&&(p.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,p,m,K)}catch(I){if(this._zoneDelegate.handleError(this,I))throw I}}finally{p.state!==G&&p.state!==M&&(p.type==Ye||p.data&&p.data.isPeriodic?ee&&p._transitionTo(ce,U):(p.runCount=0,this._updateTaskCount(p,-1),ee&&p._transitionTo(G,U,G))),Re=Re.parent,Ve=O}}scheduleTask(p){if(p.zone&&p.zone!==this){let K=this;for(;K;){if(K===p.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${p.zone.name}`);K=K.parent}}p._transitionTo(Te,G);const m=[];p._zoneDelegates=m,p._zone=this;try{p=this._zoneDelegate.scheduleTask(this,p)}catch(K){throw p._transitionTo(M,Te,G),this._zoneDelegate.handleError(this,K),K}return p._zoneDelegates===m&&this._updateTaskCount(p,1),p.state==Te&&p._transitionTo(ce,Te),p}scheduleMicroTask(p,m,K,ee){return this.scheduleTask(new W(Y,p,m,K,ee,void 0))}scheduleMacroTask(p,m,K,ee,O){return this.scheduleTask(new W(J,p,m,K,ee,O))}scheduleEventTask(p,m,K,ee,O){return this.scheduleTask(new W(Ye,p,m,K,ee,O))}cancelTask(p){if(p.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(p.zone||Fe).name+"; Execution: "+this.name+")");p._transitionTo(Ce,ce,U);try{this._zoneDelegate.cancelTask(this,p)}catch(m){throw p._transitionTo(M,Ce),this._zoneDelegate.handleError(this,m),m}return this._updateTaskCount(p,-1),p._transitionTo(G,Ce),p.runCount=0,p}_updateTaskCount(p,m){const K=p._zoneDelegates;-1==m&&(p._zoneDelegates=null);for(let ee=0;ee<K.length;ee++)K[ee]._updateTaskCount(p.type,m)}}return fe.__symbol__=C,fe})();const $={name:"",onHasTask:(fe,V,p,m)=>fe.hasTask(p,m),onScheduleTask:(fe,V,p,m)=>fe.scheduleTask(p,m),onInvokeTask:(fe,V,p,m,K,ee)=>fe.invokeTask(p,m,K,ee),onCancelTask:(fe,V,p,m)=>fe.cancelTask(p,m)};class X{constructor(V,p,m){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=V,this._parentDelegate=p,this._forkZS=m&&(m&&m.onFork?m:p._forkZS),this._forkDlgt=m&&(m.onFork?p:p._forkDlgt),this._forkCurrZone=m&&(m.onFork?this.zone:p._forkCurrZone),this._interceptZS=m&&(m.onIntercept?m:p._interceptZS),this._interceptDlgt=m&&(m.onIntercept?p:p._interceptDlgt),this._interceptCurrZone=m&&(m.onIntercept?this.zone:p._interceptCurrZone),this._invokeZS=m&&(m.onInvoke?m:p._invokeZS),this._invokeDlgt=m&&(m.onInvoke?p:p._invokeDlgt),this._invokeCurrZone=m&&(m.onInvoke?this.zone:p._invokeCurrZone),this._handleErrorZS=m&&(m.onHandleError?m:p._handleErrorZS),this._handleErrorDlgt=m&&(m.onHandleError?p:p._handleErrorDlgt),this._handleErrorCurrZone=m&&(m.onHandleError?this.zone:p._handleErrorCurrZone),this._scheduleTaskZS=m&&(m.onScheduleTask?m:p._scheduleTaskZS),this._scheduleTaskDlgt=m&&(m.onScheduleTask?p:p._scheduleTaskDlgt),this._scheduleTaskCurrZone=m&&(m.onScheduleTask?this.zone:p._scheduleTaskCurrZone),this._invokeTaskZS=m&&(m.onInvokeTask?m:p._invokeTaskZS),this._invokeTaskDlgt=m&&(m.onInvokeTask?p:p._invokeTaskDlgt),this._invokeTaskCurrZone=m&&(m.onInvokeTask?this.zone:p._invokeTaskCurrZone),this._cancelTaskZS=m&&(m.onCancelTask?m:p._cancelTaskZS),this._cancelTaskDlgt=m&&(m.onCancelTask?p:p._cancelTaskDlgt),this._cancelTaskCurrZone=m&&(m.onCancelTask?this.zone:p._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const K=m&&m.onHasTask;(K||p&&p._hasTaskZS)&&(this._hasTaskZS=K?m:$,this._hasTaskDlgt=p,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=V,m.onScheduleTask||(this._scheduleTaskZS=$,this._scheduleTaskDlgt=p,this._scheduleTaskCurrZone=this.zone),m.onInvokeTask||(this._invokeTaskZS=$,this._invokeTaskDlgt=p,this._invokeTaskCurrZone=this.zone),m.onCancelTask||(this._cancelTaskZS=$,this._cancelTaskDlgt=p,this._cancelTaskCurrZone=this.zone))}fork(V,p){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,V,p):new H(V,p)}intercept(V,p,m){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,V,p,m):p}invoke(V,p,m,K,ee){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,V,p,m,K,ee):p.apply(m,K)}handleError(V,p){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,V,p)}scheduleTask(V,p){let m=p;if(this._scheduleTaskZS)this._hasTaskZS&&m._zoneDelegates.push(this._hasTaskDlgtOwner),m=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,V,p),m||(m=p);else if(p.scheduleFn)p.scheduleFn(p);else{if(p.type!=Y)throw new Error("Task is missing scheduleFn.");re(p)}return m}invokeTask(V,p,m,K){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,V,p,m,K):p.callback.apply(m,K)}cancelTask(V,p){let m;if(this._cancelTaskZS)m=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,V,p);else{if(!p.cancelFn)throw Error("Task is not cancelable");m=p.cancelFn(p)}return m}hasTask(V,p){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,V,p)}catch(m){this.handleError(V,m)}}_updateTaskCount(V,p){const m=this._taskCounts,K=m[V],ee=m[V]=K+p;if(ee<0)throw new Error("More tasks executed then were scheduled.");0!=K&&0!=ee||this.hasTask(this.zone,{microTask:m.microTask>0,macroTask:m.macroTask>0,eventTask:m.eventTask>0,change:V})}}class W{constructor(V,p,m,K,ee,O){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=V,this.source=p,this.data=K,this.scheduleFn=ee,this.cancelFn=O,!m)throw new Error("callback is not defined");this.callback=m;const I=this;this.invoke=V===Ye&&K&&K.useG?W.invokeTask:function(){return W.invokeTask.call(f,I,this,arguments)}}static invokeTask(V,p,m){V||(V=this),Ie++;try{return V.runCount++,V.zone.runTask(V,p,m)}finally{1==Ie&&F(),Ie--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,Te)}_transitionTo(V,p,m){if(this._state!==p&&this._state!==m)throw new Error(`${this.type} '${this.source}': can not transition to '${V}', expecting state '${p}'${m?" or '"+m+"'":""}, was '${this._state}'.`);this._state=V,V==G&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const _e=C("setTimeout"),le=C("Promise"),se=C("then");let Ke,Ne=[],we=!1;function Le(fe){if(Ke||f[le]&&(Ke=f[le].resolve(0)),Ke){let V=Ke[se];V||(V=Ke.then),V.call(Ke,fe)}else f[_e](fe,0)}function re(fe){0===Ie&&0===Ne.length&&Le(F),fe&&Ne.push(fe)}function F(){if(!we){for(we=!0;Ne.length;){const fe=Ne;Ne=[];for(let V=0;V<fe.length;V++){const p=fe[V];try{p.zone.runTask(p,null,null)}catch(m){Me.onUnhandledError(m)}}}Me.microtaskDrainDone(),we=!1}}const Fe={name:"NO ZONE"},G="notScheduled",Te="scheduling",ce="scheduled",U="running",Ce="canceling",M="unknown",Y="microTask",J="macroTask",Ye="eventTask",Qe={},Me={symbol:C,currentZoneFrame:()=>Re,onUnhandledError:x,microtaskDrainDone:x,scheduleMicroTask:re,showUncaughtError:()=>!H[C("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:x,patchMethod:()=>x,bindArguments:()=>[],patchThen:()=>x,patchMacroTask:()=>x,patchEventPrototype:()=>x,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>x,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>x,wrapWithCurrentZone:()=>x,filterProperties:()=>[],attachOriginToPatched:()=>x,_redefineProperty:()=>x,patchCallbacks:()=>x,nativeScheduleMicroTask:Le};let Re={parent:null,zone:new H(null,null)},Ve=null,Ie=0;function x(){}_("Zone","Zone"),f.Zone=H}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const Gt=Object.getOwnPropertyDescriptor,zn=Object.defineProperty,Kn=Object.getPrototypeOf,$e=Object.create,vt=Array.prototype.slice,In="addEventListener",Dn="removeEventListener",Ts=Zone.__symbol__(In),Zn=Zone.__symbol__(Dn),Et="true",Q="false",hn=Zone.__symbol__("");function pn(f,v){return Zone.current.wrap(f,v)}function Nn(f,v,T,_,S){return Zone.current.scheduleMacroTask(f,v,T,_,S)}const ye=Zone.__symbol__,_t="undefined"!=typeof window,Lt=_t?window:void 0,He=_t&&Lt||"object"==typeof self&&self||global;function xs(f,v){for(let T=f.length-1;T>=0;T--)"function"==typeof f[T]&&(f[T]=pn(f[T],v+"_"+T));return f}function ct(f){return!f||!1!==f.writable&&!("function"==typeof f.get&&void 0===f.set)}const Xn="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,dn=!("nw"in He)&&void 0!==He.process&&"[object process]"==={}.toString.call(He.process),Cs=!dn&&!Xn&&!(!_t||!Lt.HTMLElement),pe=void 0!==He.process&&"[object process]"==={}.toString.call(He.process)&&!Xn&&!(!_t||!Lt.HTMLElement),Ue={},lr=function(f){if(!(f=f||He.event))return;let v=Ue[f.type];v||(v=Ue[f.type]=ye("ON_PROPERTY"+f.type));const T=this||f.target||He,_=T[v];let S;if(Cs&&T===Lt&&"error"===f.type){const C=f;S=_&&_.call(this,C.message,C.filename,C.lineno,C.colno,C.error),!0===S&&f.preventDefault()}else S=_&&_.apply(this,arguments),null!=S&&!S&&f.preventDefault();return S};function cr(f,v,T){let _=Gt(f,v);if(!_&&T&&Gt(T,v)&&(_={enumerable:!0,configurable:!0}),!_||!_.configurable)return;const S=ye("on"+v+"patched");if(f.hasOwnProperty(S)&&f[S])return;delete _.writable,delete _.value;const C=_.get,q=_.set,H=v.slice(2);let $=Ue[H];$||($=Ue[H]=ye("ON_PROPERTY"+H)),_.set=function(X){let W=this;!W&&f===He&&(W=He),W&&("function"==typeof W[$]&&W.removeEventListener(H,lr),q&&q.call(W,null),W[$]=X,"function"==typeof X&&W.addEventListener(H,lr,!1))},_.get=function(){let X=this;if(!X&&f===He&&(X=He),!X)return null;const W=X[$];if(W)return W;if(C){let _e=C.call(this);if(_e)return _.set.call(this,_e),"function"==typeof X.removeAttribute&&X.removeAttribute(v),_e}return null},zn(f,v,_),f[S]=!0}function hr(f,v,T){if(v)for(let _=0;_<v.length;_++)cr(f,"on"+v[_],T);else{const _=[];for(const S in f)"on"==S.slice(0,2)&&_.push(S);for(let S=0;S<_.length;S++)cr(f,_[S],T)}}const et=ye("originalInstance");function Yn(f){const v=He[f];if(!v)return;He[ye(f)]=v,He[f]=function(){const S=xs(arguments,f);switch(S.length){case 0:this[et]=new v;break;case 1:this[et]=new v(S[0]);break;case 2:this[et]=new v(S[0],S[1]);break;case 3:this[et]=new v(S[0],S[1],S[2]);break;case 4:this[et]=new v(S[0],S[1],S[2],S[3]);break;default:throw new Error("Arg list too long.")}},Rt(He[f],v);const T=new v(function(){});let _;for(_ in T)"XMLHttpRequest"===f&&"responseBlob"===_||function(S){"function"==typeof T[S]?He[f].prototype[S]=function(){return this[et][S].apply(this[et],arguments)}:zn(He[f].prototype,S,{set:function(C){"function"==typeof C?(this[et][S]=pn(C,f+"."+S),Rt(this[et][S],C)):this[et][S]=C},get:function(){return this[et][S]}})}(_);for(_ in v)"prototype"!==_&&v.hasOwnProperty(_)&&(He[f][_]=v[_])}function Mt(f,v,T){let _=f;for(;_&&!_.hasOwnProperty(v);)_=Kn(_);!_&&f[v]&&(_=f);const S=ye(v);let C=null;if(_&&(!(C=_[S])||!_.hasOwnProperty(S))&&(C=_[S]=_[v],ct(_&&Gt(_,v)))){const H=T(C,S,v);_[v]=function(){return H(this,arguments)},Rt(_[v],C)}return C}function li(f,v,T){let _=null;function S(C){const q=C.data;return q.args[q.cbIdx]=function(){C.invoke.apply(this,arguments)},_.apply(q.target,q.args),C}_=Mt(f,v,C=>function(q,H){const $=T(q,H);return $.cbIdx>=0&&"function"==typeof H[$.cbIdx]?Nn($.name,H[$.cbIdx],$,S):C.apply(q,H)})}function Rt(f,v){f[ye("OriginalDelegate")]=v}let pr=!1,Qn=!1;function Jn(){if(pr)return Qn;pr=!0;try{const f=Lt.navigator.userAgent;(-1!==f.indexOf("MSIE ")||-1!==f.indexOf("Trident/")||-1!==f.indexOf("Edge/"))&&(Qn=!0)}catch(f){}return Qn}Zone.__load_patch("ZoneAwarePromise",(f,v,T)=>{const _=Object.getOwnPropertyDescriptor,S=Object.defineProperty,q=T.symbol,H=[],$=!0===f[q("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],X=q("Promise"),W=q("then");T.onUnhandledError=I=>{if(T.showUncaughtError()){const P=I&&I.rejection;P?console.error("Unhandled Promise rejection:",P instanceof Error?P.message:P,"; Zone:",I.zone.name,"; Task:",I.task&&I.task.source,"; Value:",P,P instanceof Error?P.stack:void 0):console.error(I)}},T.microtaskDrainDone=()=>{for(;H.length;){const I=H.shift();try{I.zone.runGuarded(()=>{throw I.throwOriginal?I.rejection:I})}catch(P){se(P)}}};const le=q("unhandledPromiseRejectionHandler");function se(I){T.onUnhandledError(I);try{const P=v[le];"function"==typeof P&&P.call(this,I)}catch(P){}}function Ne(I){return I&&I.then}function we(I){return I}function Ke(I){return p.reject(I)}const Le=q("state"),re=q("value"),F=q("finally"),Fe=q("parentPromiseValue"),G=q("parentPromiseState"),ce=null,U=!0,Ce=!1;function Y(I,P){return w=>{try{Me(I,P,w)}catch(D){Me(I,!1,D)}}}const J=function(){let I=!1;return function(w){return function(){I||(I=!0,w.apply(null,arguments))}}},Qe=q("currentTaskTrace");function Me(I,P,w){const D=J();if(I===w)throw new TypeError("Promise resolved with itself");if(I[Le]===ce){let j=null;try{("object"==typeof w||"function"==typeof w)&&(j=w&&w.then)}catch(Z){return D(()=>{Me(I,!1,Z)})(),I}if(P!==Ce&&w instanceof p&&w.hasOwnProperty(Le)&&w.hasOwnProperty(re)&&w[Le]!==ce)Ve(w),Me(I,w[Le],w[re]);else if(P!==Ce&&"function"==typeof j)try{j.call(w,D(Y(I,P)),D(Y(I,!1)))}catch(Z){D(()=>{Me(I,!1,Z)})()}else{I[Le]=P;const Z=I[re];if(I[re]=w,I[F]===F&&P===U&&(I[Le]=I[G],I[re]=I[Fe]),P===Ce&&w instanceof Error){const R=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;R&&S(w,Qe,{configurable:!0,enumerable:!1,writable:!0,value:R})}for(let R=0;R<Z.length;)Ie(I,Z[R++],Z[R++],Z[R++],Z[R++]);if(0==Z.length&&P==Ce){I[Le]=0;let R=w;try{throw new Error("Uncaught (in promise): "+function C(I){return I&&I.toString===Object.prototype.toString?(I.constructor&&I.constructor.name||"")+": "+JSON.stringify(I):I?I.toString():Object.prototype.toString.call(I)}(w)+(w&&w.stack?"\n"+w.stack:""))}catch(ie){R=ie}$&&(R.throwOriginal=!0),R.rejection=w,R.promise=I,R.zone=v.current,R.task=v.currentTask,H.push(R),T.scheduleMicroTask()}}}return I}const Re=q("rejectionHandledHandler");function Ve(I){if(0===I[Le]){try{const P=v[Re];P&&"function"==typeof P&&P.call(this,{rejection:I[re],promise:I})}catch(P){}I[Le]=Ce;for(let P=0;P<H.length;P++)I===H[P].promise&&H.splice(P,1)}}function Ie(I,P,w,D,j){Ve(I);const Z=I[Le],R=Z?"function"==typeof D?D:we:"function"==typeof j?j:Ke;P.scheduleMicroTask("Promise.then",()=>{try{const ie=I[re],ae=!!w&&F===w[F];ae&&(w[Fe]=ie,w[G]=Z);const te=P.run(R,void 0,ae&&R!==Ke&&R!==we?[]:[ie]);Me(w,!0,te)}catch(ie){Me(w,!1,ie)}},w)}const fe=function(){},V=f.AggregateError;class p{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(P){return Me(new this(null),U,P)}static reject(P){return Me(new this(null),Ce,P)}static any(P){if(!P||"function"!=typeof P[Symbol.iterator])return Promise.reject(new V([],"All promises were rejected"));const w=[];let D=0;try{for(let R of P)D++,w.push(p.resolve(R))}catch(R){return Promise.reject(new V([],"All promises were rejected"))}if(0===D)return Promise.reject(new V([],"All promises were rejected"));let j=!1;const Z=[];return new p((R,ie)=>{for(let ae=0;ae<w.length;ae++)w[ae].then(te=>{j||(j=!0,R(te))},te=>{Z.push(te),D--,0===D&&(j=!0,ie(new V(Z,"All promises were rejected")))})})}static race(P){let w,D,j=new this((ie,ae)=>{w=ie,D=ae});function Z(ie){w(ie)}function R(ie){D(ie)}for(let ie of P)Ne(ie)||(ie=this.resolve(ie)),ie.then(Z,R);return j}static all(P){return p.allWithCallback(P)}static allSettled(P){return(this&&this.prototype instanceof p?this:p).allWithCallback(P,{thenCallback:D=>({status:"fulfilled",value:D}),errorCallback:D=>({status:"rejected",reason:D})})}static allWithCallback(P,w){let D,j,Z=new this((te,Se)=>{D=te,j=Se}),R=2,ie=0;const ae=[];for(let te of P){Ne(te)||(te=this.resolve(te));const Se=ie;try{te.then(Ae=>{ae[Se]=w?w.thenCallback(Ae):Ae,R--,0===R&&D(ae)},Ae=>{w?(ae[Se]=w.errorCallback(Ae),R--,0===R&&D(ae)):j(Ae)})}catch(Ae){j(Ae)}R++,ie++}return R-=2,0===R&&D(ae),Z}constructor(P){const w=this;if(!(w instanceof p))throw new Error("Must be an instanceof Promise.");w[Le]=ce,w[re]=[];try{const D=J();P&&P(D(Y(w,U)),D(Y(w,Ce)))}catch(D){Me(w,!1,D)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return p}then(P,w){var D;let j=null===(D=this.constructor)||void 0===D?void 0:D[Symbol.species];(!j||"function"!=typeof j)&&(j=this.constructor||p);const Z=new j(fe),R=v.current;return this[Le]==ce?this[re].push(R,Z,P,w):Ie(this,R,Z,P,w),Z}catch(P){return this.then(null,P)}finally(P){var w;let D=null===(w=this.constructor)||void 0===w?void 0:w[Symbol.species];(!D||"function"!=typeof D)&&(D=p);const j=new D(fe);j[F]=F;const Z=v.current;return this[Le]==ce?this[re].push(Z,j,P,P):Ie(this,Z,j,P,P),j}}p.resolve=p.resolve,p.reject=p.reject,p.race=p.race,p.all=p.all;const m=f[X]=f.Promise;f.Promise=p;const K=q("thenPatched");function ee(I){const P=I.prototype,w=_(P,"then");if(w&&(!1===w.writable||!w.configurable))return;const D=P.then;P[W]=D,I.prototype.then=function(j,Z){return new p((ie,ae)=>{D.call(this,ie,ae)}).then(j,Z)},I[K]=!0}return T.patchThen=ee,m&&(ee(m),Mt(f,"fetch",I=>function O(I){return function(P,w){let D=I.apply(P,w);if(D instanceof p)return D;let j=D.constructor;return j[K]||ee(j),D}}(I))),Promise[v.__symbol__("uncaughtPromiseErrors")]=H,p}),Zone.__load_patch("toString",f=>{const v=Function.prototype.toString,T=ye("OriginalDelegate"),_=ye("Promise"),S=ye("Error"),C=function(){if("function"==typeof this){const X=this[T];if(X)return"function"==typeof X?v.call(X):Object.prototype.toString.call(X);if(this===Promise){const W=f[_];if(W)return v.call(W)}if(this===Error){const W=f[S];if(W)return v.call(W)}}return v.call(this)};C[T]=v,Function.prototype.toString=C;const q=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":q.call(this)}});let Pn=!1;if("undefined"!=typeof window)try{const f=Object.defineProperty({},"passive",{get:function(){Pn=!0}});window.addEventListener("test",f,f),window.removeEventListener("test",f,f)}catch(f){Pn=!1}const As={useG:!0},nt={},dr={},zt=new RegExp("^"+hn+"(\\w+)(true|false)$"),fr=ye("propagationStopped");function mr(f,v){const T=(v?v(f):f)+Q,_=(v?v(f):f)+Et,S=hn+T,C=hn+_;nt[f]={},nt[f][Q]=S,nt[f][Et]=C}function fn(f,v,T,_){const S=_&&_.add||In,C=_&&_.rm||Dn,q=_&&_.listeners||"eventListeners",H=_&&_.rmAll||"removeAllListeners",$=ye(S),X="."+S+":",le=function(re,F,Fe){if(re.isRemoved)return;const G=re.callback;let Te;"object"==typeof G&&G.handleEvent&&(re.callback=U=>G.handleEvent(U),re.originalDelegate=G);try{re.invoke(re,F,[Fe])}catch(U){Te=U}const ce=re.options;return ce&&"object"==typeof ce&&ce.once&&F[C].call(F,Fe.type,re.originalDelegate?re.originalDelegate:re.callback,ce),Te};function se(re,F,Fe){if(!(F=F||f.event))return;const G=re||F.target||f,Te=G[nt[F.type][Fe?Et:Q]];if(Te){const ce=[];if(1===Te.length){const U=le(Te[0],G,F);U&&ce.push(U)}else{const U=Te.slice();for(let Ce=0;Ce<U.length&&(!F||!0!==F[fr]);Ce++){const M=le(U[Ce],G,F);M&&ce.push(M)}}if(1===ce.length)throw ce[0];for(let U=0;U<ce.length;U++){const Ce=ce[U];v.nativeScheduleMicroTask(()=>{throw Ce})}}}const Ne=function(re){return se(this,re,!1)},we=function(re){return se(this,re,!0)};function Ke(re,F){if(!re)return!1;let Fe=!0;F&&void 0!==F.useG&&(Fe=F.useG);const G=F&&F.vh;let Te=!0;F&&void 0!==F.chkDup&&(Te=F.chkDup);let ce=!1;F&&void 0!==F.rt&&(ce=F.rt);let U=re;for(;U&&!U.hasOwnProperty(S);)U=Kn(U);if(!U&&re[S]&&(U=re),!U||U[$])return!1;const Ce=F&&F.eventNameToString,M={},Y=U[$]=U[S],J=U[ye(C)]=U[C],Ye=U[ye(q)]=U[q],Qe=U[ye(H)]=U[H];let Me;function Re(w,D){return!Pn&&"object"==typeof w&&w?!!w.capture:Pn&&D?"boolean"==typeof w?{capture:w,passive:!0}:w?"object"==typeof w&&!1!==w.passive?Object.assign(Object.assign({},w),{passive:!0}):w:{passive:!0}:w}F&&F.prepend&&(Me=U[ye(F.prepend)]=U[F.prepend]);const p=Fe?function(w){if(!M.isExisting)return Y.call(M.target,M.eventName,M.capture?we:Ne,M.options)}:function(w){return Y.call(M.target,M.eventName,w.invoke,M.options)},m=Fe?function(w){if(!w.isRemoved){const D=nt[w.eventName];let j;D&&(j=D[w.capture?Et:Q]);const Z=j&&w.target[j];if(Z)for(let R=0;R<Z.length;R++)if(Z[R]===w){Z.splice(R,1),w.isRemoved=!0,0===Z.length&&(w.allRemoved=!0,w.target[j]=null);break}}if(w.allRemoved)return J.call(w.target,w.eventName,w.capture?we:Ne,w.options)}:function(w){return J.call(w.target,w.eventName,w.invoke,w.options)},ee=F&&F.diff?F.diff:function(w,D){const j=typeof D;return"function"===j&&w.callback===D||"object"===j&&w.originalDelegate===D},O=Zone[ye("UNPATCHED_EVENTS")],I=f[ye("PASSIVE_EVENTS")],P=function(w,D,j,Z,R=!1,ie=!1){return function(){const ae=this||f;let te=arguments[0];F&&F.transferEventName&&(te=F.transferEventName(te));let Se=arguments[1];if(!Se)return w.apply(this,arguments);if(dn&&"uncaughtException"===te)return w.apply(this,arguments);let Ae=!1;if("function"!=typeof Se){if(!Se.handleEvent)return w.apply(this,arguments);Ae=!0}if(G&&!G(w,Se,ae,arguments))return;const Bt=Pn&&!!I&&-1!==I.indexOf(te),Ct=Re(arguments[2],Bt);if(O)for(let yt=0;yt<O.length;yt++)if(te===O[yt])return Bt?w.call(ae,te,Se,Ct):w.apply(this,arguments);const ss=!!Ct&&("boolean"==typeof Ct||Ct.capture),kn=!(!Ct||"object"!=typeof Ct)&&Ct.once,mi=Zone.current;let Ds=nt[te];Ds||(mr(te,Ce),Ds=nt[te]);const rs=Ds[ss?Et:Q];let is,Kt=ae[rs],gn=!1;if(Kt){if(gn=!0,Te)for(let yt=0;yt<Kt.length;yt++)if(ee(Kt[yt],Se))return}else Kt=ae[rs]=[];const Ln=ae.constructor.name,Mn=dr[Ln];Mn&&(is=Mn[te]),is||(is=Ln+D+(Ce?Ce(te):te)),M.options=Ct,kn&&(M.options.once=!1),M.target=ae,M.capture=ss,M.eventName=te,M.isExisting=gn;const je=Fe?As:void 0;je&&(je.taskData=M);const st=mi.scheduleEventTask(is,Se,je,j,Z);return M.target=null,je&&(je.taskData=null),kn&&(Ct.once=!0),!Pn&&"boolean"==typeof st.options||(st.options=Ct),st.target=ae,st.capture=ss,st.eventName=te,Ae&&(st.originalDelegate=Se),ie?Kt.unshift(st):Kt.push(st),R?ae:void 0}};return U[S]=P(Y,X,p,m,ce),Me&&(U.prependListener=P(Me,".prependListener:",function(w){return Me.call(M.target,M.eventName,w.invoke,M.options)},m,ce,!0)),U[C]=function(){const w=this||f;let D=arguments[0];F&&F.transferEventName&&(D=F.transferEventName(D));const j=arguments[2],Z=!!j&&("boolean"==typeof j||j.capture),R=arguments[1];if(!R)return J.apply(this,arguments);if(G&&!G(J,R,w,arguments))return;const ie=nt[D];let ae;ie&&(ae=ie[Z?Et:Q]);const te=ae&&w[ae];if(te)for(let Se=0;Se<te.length;Se++){const Ae=te[Se];if(ee(Ae,R))return te.splice(Se,1),Ae.isRemoved=!0,0===te.length&&(Ae.allRemoved=!0,w[ae]=null,"string"==typeof D)&&(w[hn+"ON_PROPERTY"+D]=null),Ae.zone.cancelTask(Ae),ce?w:void 0}return J.apply(this,arguments)},U[q]=function(){const w=this||f;let D=arguments[0];F&&F.transferEventName&&(D=F.transferEventName(D));const j=[],Z=bs(w,Ce?Ce(D):D);for(let R=0;R<Z.length;R++){const ie=Z[R];j.push(ie.originalDelegate?ie.originalDelegate:ie.callback)}return j},U[H]=function(){const w=this||f;let D=arguments[0];if(D){F&&F.transferEventName&&(D=F.transferEventName(D));const j=nt[D];if(j){const ie=w[j[Q]],ae=w[j[Et]];if(ie){const te=ie.slice();for(let Se=0;Se<te.length;Se++){const Ae=te[Se];this[C].call(this,D,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}if(ae){const te=ae.slice();for(let Se=0;Se<te.length;Se++){const Ae=te[Se];this[C].call(this,D,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}}}else{const j=Object.keys(w);for(let Z=0;Z<j.length;Z++){const ie=zt.exec(j[Z]);let ae=ie&&ie[1];ae&&"removeListener"!==ae&&this[H].call(this,ae)}this[H].call(this,"removeListener")}if(ce)return this},Rt(U[S],Y),Rt(U[C],J),Qe&&Rt(U[H],Qe),Ye&&Rt(U[q],Ye),!0}let Le=[];for(let re=0;re<T.length;re++)Le[re]=Ke(T[re],_);return Le}function bs(f,v){if(!v){const C=[];for(let q in f){const H=zt.exec(q);let $=H&&H[1];if($&&(!v||$===v)){const X=f[q];if(X)for(let W=0;W<X.length;W++)C.push(X[W])}}return C}let T=nt[v];T||(mr(v),T=nt[v]);const _=f[T[Q]],S=f[T[Et]];return _?S?_.concat(S):_.slice():S?S.slice():[]}function hi(f,v){const T=f.Event;T&&T.prototype&&v.patchMethod(T.prototype,"stopImmediatePropagation",_=>function(S,C){S[fr]=!0,_&&_.apply(S,C)})}function gr(f,v,T,_,S){const C=Zone.__symbol__(_);if(v[C])return;const q=v[C]=v[_];v[_]=function(H,$,X){return $&&$.prototype&&S.forEach(function(W){const _e=`${T}.${_}::`+W,le=$.prototype;try{if(le.hasOwnProperty(W)){const se=f.ObjectGetOwnPropertyDescriptor(le,W);se&&se.value?(se.value=f.wrapWithCurrentZone(se.value,_e),f._redefineProperty($.prototype,W,se)):le[W]&&(le[W]=f.wrapWithCurrentZone(le[W],_e))}else le[W]&&(le[W]=f.wrapWithCurrentZone(le[W],_e))}catch(se){}}),q.call(v,H,$,X)},f.attachOriginToPatched(v[_],q)}function Is(f,v,T){if(!T||0===T.length)return v;const _=T.filter(C=>C.target===f);if(!_||0===_.length)return v;const S=_[0].ignoreProperties;return v.filter(C=>-1===S.indexOf(C))}function es(f,v,T,_){f&&hr(f,Is(f,v,T),_)}function ts(f){return Object.getOwnPropertyNames(f).filter(v=>v.startsWith("on")&&v.length>2).map(v=>v.substring(2))}Zone.__load_patch("util",(f,v,T)=>{const _=ts(f);T.patchOnProperties=hr,T.patchMethod=Mt,T.bindArguments=xs,T.patchMacroTask=li;const S=v.__symbol__("BLACK_LISTED_EVENTS"),C=v.__symbol__("UNPATCHED_EVENTS");f[C]&&(f[S]=f[C]),f[S]&&(v[S]=v[C]=f[S]),T.patchEventPrototype=hi,T.patchEventTarget=fn,T.isIEOrEdge=Jn,T.ObjectDefineProperty=zn,T.ObjectGetOwnPropertyDescriptor=Gt,T.ObjectCreate=$e,T.ArraySlice=vt,T.patchClass=Yn,T.wrapWithCurrentZone=pn,T.filterProperties=Is,T.attachOriginToPatched=Rt,T._redefineProperty=Object.defineProperty,T.patchCallbacks=gr,T.getGlobalObjects=()=>({globalSources:dr,zoneSymbolEventNames:nt,eventNames:_,isBrowser:Cs,isMix:pe,isNode:dn,TRUE_STR:Et,FALSE_STR:Q,ZONE_SYMBOL_PREFIX:hn,ADD_EVENT_LISTENER_STR:In,REMOVE_EVENT_LISTENER_STR:Dn})});const ns=ye("zoneTask");function mn(f,v,T,_){let S=null,C=null;T+=_;const q={};function H(X){const W=X.data;return W.args[0]=function(){return X.invoke.apply(this,arguments)},W.handleId=S.apply(f,W.args),X}function $(X){return C.call(f,X.data.handleId)}S=Mt(f,v+=_,X=>function(W,_e){if("function"==typeof _e[0]){const le={isPeriodic:"Interval"===_,delay:"Timeout"===_||"Interval"===_?_e[1]||0:void 0,args:_e},se=_e[0];_e[0]=function(){try{return se.apply(this,arguments)}finally{le.isPeriodic||("number"==typeof le.handleId?delete q[le.handleId]:le.handleId&&(le.handleId[ns]=null))}};const Ne=Nn(v,_e[0],le,H,$);if(!Ne)return Ne;const we=Ne.data.handleId;return"number"==typeof we?q[we]=Ne:we&&(we[ns]=Ne),we&&we.ref&&we.unref&&"function"==typeof we.ref&&"function"==typeof we.unref&&(Ne.ref=we.ref.bind(we),Ne.unref=we.unref.bind(we)),"number"==typeof we||we?we:Ne}return X.apply(f,_e)}),C=Mt(f,T,X=>function(W,_e){const le=_e[0];let se;"number"==typeof le?se=q[le]:(se=le&&le[ns],se||(se=le)),se&&"string"==typeof se.type?"notScheduled"!==se.state&&(se.cancelFn&&se.data.isPeriodic||0===se.runCount)&&("number"==typeof le?delete q[le]:le&&(le[ns]=null),se.zone.cancelTask(se)):X.apply(f,_e)})}Zone.__load_patch("legacy",f=>{const v=f[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(f,v,T)=>{T.patchMethod(f,"queueMicrotask",_=>function(S,C){v.current.scheduleMicroTask("queueMicrotask",C[0])})}),Zone.__load_patch("timers",f=>{const v="set",T="clear";mn(f,v,T,"Timeout"),mn(f,v,T,"Interval"),mn(f,v,T,"Immediate")}),Zone.__load_patch("requestAnimationFrame",f=>{mn(f,"request","cancel","AnimationFrame"),mn(f,"mozRequest","mozCancel","AnimationFrame"),mn(f,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(f,v)=>{const T=["alert","prompt","confirm"];for(let _=0;_<T.length;_++)Mt(f,T[_],(C,q,H)=>function($,X){return v.current.run(C,f,X,H)})}),Zone.__load_patch("EventTarget",(f,v,T)=>{(function fi(f,v){v.patchEventPrototype(f,v)})(f,T),function di(f,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:T,zoneSymbolEventNames:_,TRUE_STR:S,FALSE_STR:C,ZONE_SYMBOL_PREFIX:q}=v.getGlobalObjects();for(let $=0;$<T.length;$++){const X=T[$],le=q+(X+C),se=q+(X+S);_[X]={},_[X][C]=le,_[X][S]=se}const H=f.EventTarget;H&&H.prototype&&v.patchEventTarget(f,v,[H&&H.prototype])}(f,T);const _=f.XMLHttpRequestEventTarget;_&&_.prototype&&T.patchEventTarget(f,T,[_.prototype])}),Zone.__load_patch("MutationObserver",(f,v,T)=>{Yn("MutationObserver"),Yn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(f,v,T)=>{Yn("IntersectionObserver")}),Zone.__load_patch("FileReader",(f,v,T)=>{Yn("FileReader")}),Zone.__load_patch("on_property",(f,v,T)=>{!function vr(f,v){if(dn&&!pe||Zone[f.symbol("patchEvents")])return;const T=v.__Zone_ignore_on_properties;let _=[];if(Cs){const S=window;_=_.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const C=function ci(){try{const f=Lt.navigator.userAgent;if(-1!==f.indexOf("MSIE ")||-1!==f.indexOf("Trident/"))return!0}catch(f){}return!1}()?[{target:S,ignoreProperties:["error"]}]:[];es(S,ts(S),T&&T.concat(C),Kn(S))}_=_.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let S=0;S<_.length;S++){const C=v[_[S]];C&&C.prototype&&es(C.prototype,ts(C.prototype),T)}}(T,f)}),Zone.__load_patch("customElements",(f,v,T)=>{!function pi(f,v){const{isBrowser:T,isMix:_}=v.getGlobalObjects();(T||_)&&f.customElements&&"customElements"in f&&v.patchCallbacks(v,f.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(f,T)}),Zone.__load_patch("XHR",(f,v)=>{!function $(X){const W=X.XMLHttpRequest;if(!W)return;const _e=W.prototype;let se=_e[Ts],Ne=_e[Zn];if(!se){const M=X.XMLHttpRequestEventTarget;if(M){const Y=M.prototype;se=Y[Ts],Ne=Y[Zn]}}const we="readystatechange",Ke="scheduled";function Le(M){const Y=M.data,J=Y.target;J[C]=!1,J[H]=!1;const Ye=J[S];se||(se=J[Ts],Ne=J[Zn]),Ye&&Ne.call(J,we,Ye);const Qe=J[S]=()=>{if(J.readyState===J.DONE)if(!Y.aborted&&J[C]&&M.state===Ke){const Re=J[v.__symbol__("loadfalse")];if(0!==J.status&&Re&&Re.length>0){const Ve=M.invoke;M.invoke=function(){const Ie=J[v.__symbol__("loadfalse")];for(let x=0;x<Ie.length;x++)Ie[x]===M&&Ie.splice(x,1);!Y.aborted&&M.state===Ke&&Ve.call(M)},Re.push(M)}else M.invoke()}else!Y.aborted&&!1===J[C]&&(J[H]=!0)};return se.call(J,we,Qe),J[T]||(J[T]=M),U.apply(J,Y.args),J[C]=!0,M}function re(){}function F(M){const Y=M.data;return Y.aborted=!0,Ce.apply(Y.target,Y.args)}const Fe=Mt(_e,"open",()=>function(M,Y){return M[_]=0==Y[2],M[q]=Y[1],Fe.apply(M,Y)}),Te=ye("fetchTaskAborting"),ce=ye("fetchTaskScheduling"),U=Mt(_e,"send",()=>function(M,Y){if(!0===v.current[ce]||M[_])return U.apply(M,Y);{const J={target:M,url:M[q],isPeriodic:!1,args:Y,aborted:!1},Ye=Nn("XMLHttpRequest.send",re,J,Le,F);M&&!0===M[H]&&!J.aborted&&Ye.state===Ke&&Ye.invoke()}}),Ce=Mt(_e,"abort",()=>function(M,Y){const J=function le(M){return M[T]}(M);if(J&&"string"==typeof J.type){if(null==J.cancelFn||J.data&&J.data.aborted)return;J.zone.cancelTask(J)}else if(!0===v.current[Te])return Ce.apply(M,Y)})}(f);const T=ye("xhrTask"),_=ye("xhrSync"),S=ye("xhrListener"),C=ye("xhrScheduled"),q=ye("xhrURL"),H=ye("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",f=>{f.navigator&&f.navigator.geolocation&&function qe(f,v){const T=f.constructor.name;for(let _=0;_<v.length;_++){const S=v[_],C=f[S];if(C){if(!ct(Gt(f,S)))continue;f[S]=(H=>{const $=function(){return H.apply(this,xs(arguments,T+"."+S))};return Rt($,H),$})(C)}}}(f.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(f,v)=>{function T(_){return function(S){bs(f,_).forEach(q=>{const H=f.PromiseRejectionEvent;if(H){const $=new H(_,{promise:S.promise,reason:S.rejection});q.invoke($)}})}}f.PromiseRejectionEvent&&(v[ye("unhandledPromiseRejectionHandler")]=T("unhandledrejection"),v[ye("rejectionHandledHandler")]=T("rejectionhandled"))})}},Gt=>{Gt(Gt.s=6106)}]);
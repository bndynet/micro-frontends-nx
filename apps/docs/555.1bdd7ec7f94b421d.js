(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[555],{8555:(bt,re,I)=>{I.r(re),I.d(re,{ACTIVE_RUNTIME_CHECKS:()=>y,ActionsSubject:()=>R,FEATURE_REDUCERS:()=>F,FEATURE_STATE_PROVIDER:()=>L,INIT:()=>C,INITIAL_REDUCERS:()=>x,INITIAL_STATE:()=>_,META_REDUCERS:()=>j,REDUCER_FACTORY:()=>w,ROOT_STORE_PROVIDER:()=>A,ReducerManager:()=>S,ReducerManagerDispatcher:()=>G,ReducerObservable:()=>v,STORE_FEATURES:()=>N,ScannedActionsSubject:()=>g,State:()=>H,StateObservable:()=>Z,Store:()=>m,StoreFeatureModule:()=>Me,StoreModule:()=>mt,StoreRootModule:()=>ne,UPDATE:()=>pe,USER_PROVIDED_META_REDUCERS:()=>z,USER_RUNTIME_CHECKS:()=>$,combineReducers:()=>b,compose:()=>K,createAction:()=>oe,createActionGroup:()=>we,createFeature:()=>et,createFeatureSelector:()=>_e,createReducer:()=>Ft,createReducerFactory:()=>B,createSelector:()=>Q,createSelectorFactory:()=>me,defaultMemoize:()=>O,defaultStateFn:()=>ge,emptyProps:()=>xe,isNgrxMockEnvironment:()=>ve,on:()=>_t,props:()=>ce,provideState:()=>It,provideStore:()=>Tt,reduceState:()=>Re,resultMemoize:()=>Xe,select:()=>Ee,setNgrxMockEnvironment:()=>Qe,union:()=>De});var o=I(8944),p=I(3970),E=I(6209);const h={};function oe(e,n){if(h[e]=(h[e]||0)+1,"function"==typeof n)return M(e,(...r)=>({...n(...r),type:e}));switch(n?n._as:"empty"){case"empty":return M(e,()=>({type:e}));case"props":return M(e,r=>({...r,type:e}));default:throw new Error("Unexpected config.")}}function ce(){return{_as:"props",_p:void 0}}function De(e){}function M(e,n){return Object.defineProperty(n,"type",{value:e,writable:!1})}function k(e){return e.charAt(0).toUpperCase()+e.substring(1)}function we(e){const{source:n,events:t}=e;return Object.keys(t).reduce((r,i)=>({...r,[Ue(i)]:oe(Ne(n,i),t[i])}),{})}function xe(){return{_as:"props",_p:void 0}}function Ue(e){return e.trim().toLowerCase().split(" ").map((n,t)=>0===t?n:k(n)).join("")}function Ne(e,n){return`[${e}] ${n}`}const C="@ngrx/store/init";let R=(()=>{class e extends p.BehaviorSubject{constructor(){super({type:C})}next(t){if("function"==typeof t)throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const Pe=[R],D=new o.InjectionToken("@ngrx/store Internal Root Guard"),ie=new o.InjectionToken("@ngrx/store Internal Initial State"),_=new o.InjectionToken("@ngrx/store Initial State"),w=new o.InjectionToken("@ngrx/store Reducer Factory"),se=new o.InjectionToken("@ngrx/store Internal Reducer Factory Provider"),x=new o.InjectionToken("@ngrx/store Initial Reducers"),U=new o.InjectionToken("@ngrx/store Internal Initial Reducers"),N=new o.InjectionToken("@ngrx/store Store Features"),ue=new o.InjectionToken("@ngrx/store Internal Store Reducers"),P=new o.InjectionToken("@ngrx/store Internal Feature Reducers"),ae=new o.InjectionToken("@ngrx/store Internal Feature Configs"),V=new o.InjectionToken("@ngrx/store Internal Store Features"),de=new o.InjectionToken("@ngrx/store Internal Feature Reducers Token"),F=new o.InjectionToken("@ngrx/store Feature Reducers"),z=new o.InjectionToken("@ngrx/store User Provided Meta Reducers"),j=new o.InjectionToken("@ngrx/store Meta Reducers"),le=new o.InjectionToken("@ngrx/store Internal Resolved Meta Reducers"),$=new o.InjectionToken("@ngrx/store User Runtime Checks Config"),fe=new o.InjectionToken("@ngrx/store Internal User Runtime Checks Config"),y=new o.InjectionToken("@ngrx/store Internal Runtime Checks"),T=new o.InjectionToken("@ngrx/store Check if Action types are unique"),A=new o.InjectionToken("@ngrx/store Root Store Provider"),L=new o.InjectionToken("@ngrx/store Feature State Provider");function b(e,n={}){const t=Object.keys(e),r={};for(let c=0;c<t.length;c++){const s=t[c];"function"==typeof e[s]&&(r[s]=e[s])}const i=Object.keys(r);return function(s,d){s=void 0===s?n:s;let a=!1;const l={};for(let u=0;u<i.length;u++){const f=i[u],ke=s[f],Ce=(0,r[f])(ke,d);l[f]=Ce,a=a||Ce!==ke}return a?l:s}}function K(...e){return function(n){if(0===e.length)return n;const t=e[e.length-1];return e.slice(0,-1).reduceRight((i,c)=>c(i),t(n))}}function B(e,n){return Array.isArray(n)&&n.length>0&&(e=K.apply(null,[...n,e])),(t,r)=>{const i=e(t);return(c,s)=>i(c=void 0===c?r:c,s)}}class v extends p.Observable{}class G extends R{}const pe="@ngrx/store/update-reducers";let S=(()=>{class e extends p.BehaviorSubject{constructor(t,r,i,c){super(c(i,r)),this.dispatcher=t,this.initialState=r,this.reducers=i,this.reducerFactory=c}get currentReducers(){return this.reducers}addFeature(t){this.addFeatures([t])}addFeatures(t){const r=t.reduce((i,{reducers:c,reducerFactory:s,metaReducers:d,initialState:a,key:l})=>{const u="function"==typeof c?function ze(e){const n=Array.isArray(e)&&e.length>0?K(...e):t=>t;return(t,r)=>(t=n(t),(i,c)=>t(i=void 0===i?r:i,c))}(d)(c,a):B(s,d)(c,a);return i[l]=u,i},{});this.addReducers(r)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(r=>r.key))}addReducer(t,r){this.addReducers({[t]:r})}addReducers(t){this.reducers={...this.reducers,...t},this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(r=>{this.reducers=function Ve(e,n){return Object.keys(e).filter(t=>t!==n).reduce((t,r)=>Object.assign(t,{[r]:e[r]}),{})}(this.reducers,r)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:pe,features:t})}ngOnDestroy(){this.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(G),o.\u0275\u0275inject(_),o.\u0275\u0275inject(x),o.\u0275\u0275inject(w))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const $e=[S,{provide:v,useExisting:S},{provide:G,useExisting:R}];let g=(()=>{class e extends p.Subject{ngOnDestroy(){this.complete()}}return e.\u0275fac=function(){let n;return function(r){return(n||(n=o.\u0275\u0275getInheritedFactory(e)))(r||e)}}(),e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const Le=[g];class Z extends p.Observable{}let H=(()=>{class e extends p.BehaviorSubject{constructor(t,r,i,c){super(c);const l=t.pipe((0,E.observeOn)(p.queueScheduler)).pipe((0,E.withLatestFrom)(r)).pipe((0,E.scan)(Re,{state:c}));this.stateSubscription=l.subscribe(({state:u,action:f})=>{this.next(u),i.next(f)})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}}return e.INIT=C,e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(R),o.\u0275\u0275inject(v),o.\u0275\u0275inject(g),o.\u0275\u0275inject(_))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();function Re(e={state:void 0},[n,t]){const{state:r}=e;return{state:t(r,n),action:n}}const Ke=[H,{provide:Z,useExisting:H}];let m=(()=>{class e extends p.Observable{constructor(t,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=t}select(t,...r){return Ee.call(null,t,...r)(this)}lift(t){const r=new e(this,this.actionsObserver,this.reducerManager);return r.operator=t,r}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,r){this.reducerManager.addReducer(t,r)}removeReducer(t){this.reducerManager.removeReducer(t)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(Z),o.\u0275\u0275inject(R),o.\u0275\u0275inject(S))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const Be=[m];function Ee(e,n,...t){return function(i){let c;if("string"==typeof e){const s=[n,...t].filter(Boolean);c=i.pipe((0,E.pluck)(e,...s))}else{if("function"!=typeof e)throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);c=i.pipe((0,E.map)(s=>e(s,n)))}return c.pipe((0,E.distinctUntilChanged)())}}const W="https://ngrx.io/guide/store/configuration/runtime-checks";function ye(e){return void 0===e}function Se(e){return null===e}function Ie(e){return Array.isArray(e)}function he(e){return"object"==typeof e&&null!==e}function je(e){if(!function We(e){return he(e)&&!Ie(e)}(e))return!1;const n=Object.getPrototypeOf(e);return n===Object.prototype||null===n}function q(e){return"function"==typeof e}let Te=!1;function Qe(e){Te=e}function ve(){return Te}function Y(e,n){return e===n}function Je(e,n,t){for(let r=0;r<e.length;r++)if(!t(e[r],n[r]))return!0;return!1}function Xe(e,n){return O(e,Y,n)}function O(e,n=Y,t=Y){let c,r=null,i=null;return{memoized:function l(){if(void 0!==c)return c.result;if(!r)return i=e.apply(null,arguments),r=arguments,i;if(!Je(arguments,r,n))return i;const u=e.apply(null,arguments);return r=arguments,t(i,u)?i:(i=u,u)},reset:function s(){r=null,i=null},setResult:function d(u){c={result:u}},clearResult:function a(){c=void 0}}}function Q(...e){return me(O)(...e)}function ge(e,n,t,r){if(void 0===t){const c=n.map(s=>s(e));return r.memoized.apply(null,c)}const i=n.map(c=>c(e,t));return r.memoized.apply(null,[...i,t])}function me(e,n={stateFn:ge}){return function(...t){let r=t;if(Array.isArray(r[0])){const[u,...f]=r;r=[...u,...f]}const i=r.slice(0,r.length-1),c=r[r.length-1],s=i.filter(u=>u.release&&"function"==typeof u.release),d=e(function(...u){return c.apply(null,u)}),a=O(function(u,f){return n.stateFn.apply(null,[u,i,f,d])});return Object.assign(a.memoized,{release:function l(){a.reset(),d.reset(),s.forEach(u=>u.release())},projector:d.memoized,setResult:a.setResult,clearResult:a.clearResult})}}function _e(e){return Q(n=>{const t=n[e];return!ve()&&(0,o.isDevMode)()&&!(e in n)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},n=>n)}function et(e){const{name:n,reducer:t}=e,r=_e(n),i=function tt(e,n){const t=function nt(e){return e(void 0,{type:"@ngrx/feature/init"})}(n);return(je(t)?Object.keys(t):[]).reduce((i,c)=>({...i,[`select${k(c)}`]:Q(e,s=>s?.[c])}),{})}(r,t);return{name:n,reducer:t,[`select${k(n)}State`]:r,...i}}function rt(e,n){return n instanceof o.InjectionToken?e.get(n):n}function ot(e,n,t){return t.map((r,i)=>{if(n[i]instanceof o.InjectionToken){const c=e.get(n[i]);return{key:r.key,reducerFactory:c.reducerFactory?c.reducerFactory:b,metaReducers:c.metaReducers?c.metaReducers:[],initialState:c.initialState}}return r})}function ct(e,n){return n.map(r=>r instanceof o.InjectionToken?e.get(r):r)}function J(e){return"function"==typeof e?e():e}function it(e,n){return e.concat(n)}function st(e){if(e)throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function X(e){Object.freeze(e);const n=q(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&function Ye(e,n){return Object.prototype.hasOwnProperty.call(e,n)}(e,t)&&(!n||"caller"!==t&&"callee"!==t&&"arguments"!==t)){const r=e[t];(he(r)||q(r))&&!Object.isFrozen(r)&&X(r)}}),e}function ee(e,n=[]){return(ye(e)||Se(e))&&0===n.length?{path:["root"],value:e}:Object.keys(e).reduce((r,i)=>{if(r)return r;const c=e[i];return function qe(e){return q(e)&&e.hasOwnProperty("\u0275cmp")}(c)?r:!(ye(c)||Se(c)||function He(e){return"number"==typeof e}(c)||function Ze(e){return"boolean"==typeof e}(c)||function Ge(e){return"string"==typeof e}(c)||Ie(c))&&(je(c)?ee(c,[...n,i]):{path:[...n,i],value:c})},!1)}function Fe(e,n){if(!1===e)return;const t=e.path.join("."),r=new Error(`Detected unserializable ${n} at "${t}". ${W}#strict${n}serializability`);throw r.value=e.value,r.unserializablePath=t,r}function lt(e){return(0,o.isDevMode)()?{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1,...e}:{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function ft({strictActionSerializability:e,strictStateSerializability:n}){return t=>e||n?function at(e,n){return function(t,r){n.action(r)&&Fe(ee(r),"action");const i=e(t,r);return n.state()&&Fe(ee(i),"state"),i}}(t,{action:r=>e&&!te(r),state:()=>n}):t}function pt({strictActionImmutability:e,strictStateImmutability:n}){return t=>e||n?function ut(e,n){return function(t,r){const i=n.action(r)?X(r):r,c=e(t,i);return n.state()?X(c):c}}(t,{action:r=>e&&!te(r),state:()=>n}):t}function te(e){return e.type.startsWith("@ngrx")}function Rt({strictActionWithinNgZone:e}){return n=>e?function dt(e,n){return function(t,r){if(n.action(r)&&!o.NgZone.isInAngularZone())throw new Error(`Action '${r.type}' running outside NgZone. ${W}#strictactionwithinngzone`);return e(t,r)}}(n,{action:t=>e&&!te(t)}):n}function Et(e){return[{provide:fe,useValue:e},{provide:$,useFactory:yt,deps:[fe]},{provide:y,deps:[$],useFactory:lt},{provide:j,multi:!0,deps:[y],useFactory:pt},{provide:j,multi:!0,deps:[y],useFactory:ft},{provide:j,multi:!0,deps:[y],useFactory:Rt}]}function Ae(){return[{provide:T,multi:!0,deps:[y],useFactory:St}]}function yt(e){return e}function St(e){if(!e.strictActionTypeUniqueness)return;const n=Object.entries(h).filter(([,t])=>t>1).map(([t])=>t);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(t=>`"${t}"`).join(", ")}. ${W}#strictactiontypeuniqueness`)}function It(e,n,t={}){return{\u0275providers:[...Oe(e,n,t),gt]}}function be(e,n){return[{provide:D,useFactory:st,deps:[[m,new o.Optional,new o.SkipSelf]]},{provide:ie,useValue:n.initialState},{provide:_,useFactory:J,deps:[ie]},{provide:U,useValue:e},{provide:ue,useExisting:e instanceof o.InjectionToken?e:U},{provide:x,deps:[o.Injector,U,[new o.Inject(ue)]],useFactory:rt},{provide:z,useValue:n.metaReducers?n.metaReducers:[]},{provide:le,deps:[j,z],useFactory:it},{provide:se,useValue:n.reducerFactory?n.reducerFactory:b},{provide:w,deps:[se,le],useFactory:B},Pe,$e,Le,Ke,Be,Et(n.runtimeChecks),Ae()]}const jt=[{provide:A,useFactory:function ht(){(0,o.inject)(R),(0,o.inject)(v),(0,o.inject)(g),(0,o.inject)(m),(0,o.inject)(D,o.InjectFlags.Optional),(0,o.inject)(T,o.InjectFlags.Optional)}},{provide:o.ENVIRONMENT_INITIALIZER,multi:!0,useFactory:()=>()=>(0,o.inject)(A)}];function Tt(e={},n={}){return{\u0275providers:[...be(e,n),jt]}}const gt=[{provide:L,useFactory:function vt(){(0,o.inject)(A);const e=(0,o.inject)(V),n=(0,o.inject)(F),t=(0,o.inject)(S);(0,o.inject)(T,o.InjectFlags.Optional);const r=e.map((i,c)=>{const d=n.shift()[c];return{...i,reducers:d,initialState:J(i.initialState)}});t.addFeatures(r)}},{provide:o.ENVIRONMENT_INITIALIZER,multi:!0,deps:[],useFactory:()=>()=>(0,o.inject)(L)}];function Oe(e,n,t={}){return[{provide:ae,multi:!0,useValue:e instanceof Object?{}:t},{provide:N,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:t instanceof o.InjectionToken||!t.reducerFactory?b:t.reducerFactory,metaReducers:t instanceof o.InjectionToken||!t.metaReducers?[]:t.metaReducers,initialState:t instanceof o.InjectionToken||!t.initialState?void 0:t.initialState}},{provide:V,deps:[o.Injector,ae,N],useFactory:ot},{provide:P,multi:!0,useValue:e instanceof Object?e.reducer:n},{provide:de,multi:!0,useExisting:n instanceof o.InjectionToken?n:P},{provide:F,multi:!0,deps:[o.Injector,P,[new o.Inject(de)]],useFactory:ct},Ae()]}let ne=(()=>{class e{constructor(t,r,i,c,s,d){}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(R),o.\u0275\u0275inject(v),o.\u0275\u0275inject(g),o.\u0275\u0275inject(m),o.\u0275\u0275inject(D,8),o.\u0275\u0275inject(T,8))},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),Me=(()=>{class e{constructor(t,r,i,c,s){this.features=t,this.featureReducers=r,this.reducerManager=i;const d=t.map((a,l)=>{const f=r.shift()[l];return{...a,reducers:f,initialState:J(a.initialState)}});i.addFeatures(d)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(V),o.\u0275\u0275inject(F),o.\u0275\u0275inject(S),o.\u0275\u0275inject(ne),o.\u0275\u0275inject(T,8))},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),mt=(()=>{class e{static forRoot(t,r={}){return{ngModule:ne,providers:[...be(t,r)]}}static forFeature(t,r,i={}){return{ngModule:Me,providers:[...Oe(t,r,i)]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})();function _t(...e){return{reducer:e.pop(),types:e.map(r=>r.type)}}function Ft(e,...n){const t=new Map;for(const r of n)for(const i of r.types){const c=t.get(i);t.set(i,c?(d,a)=>r.reducer(c(d,a),a):r.reducer)}return function(r=e,i){const c=t.get(i.type);return c?c(r,i):r}}}}]);
(self.webpackChunkpages=self.webpackChunkpages||[]).push([[7747],{7747:(Fe,D,E)=>{E.r(D),E.d(D,{Actions:()=>Q,EFFECTS_ERROR_HANDLER:()=>U,Effect:()=>G,EffectSources:()=>R,EffectsFeatureModule:()=>L,EffectsModule:()=>Ee,EffectsRootModule:()=>O,EffectsRunner:()=>v,ROOT_EFFECTS_INIT:()=>S,USER_PROVIDED_EFFECTS:()=>g,act:()=>ge,concatLatestFrom:()=>Me,createEffect:()=>z,defaultEffectsErrorHandler:()=>T,getEffectsMetadata:()=>X,mergeEffects:()=>x,ofType:()=>q,provideEffects:()=>_e,rootEffectsInit:()=>H});var i=E(1531),u=E(3970),f=E(6209),o=E(8944);const A={dispatch:!0,useEffectsErrorHandler:!0},_="__@ngrx/effects_create__";function z(e,n){const t=e(),r={...A,...n};return Object.defineProperty(t,_,{value:r}),t}function B(e){return Object.getOwnPropertyNames(e).filter(r=>!(!e[r]||!e[r].hasOwnProperty(_))&&e[r][_].hasOwnProperty("dispatch")).map(r=>({propertyName:r,...e[r][_]}))}function y(e){return Object.getPrototypeOf(e)}const F="__@ngrx/effects__";function G(e={}){return function(n,t){!function Y(e,n){b(e)?e.constructor[F].push(n):Object.defineProperty(e.constructor,F,{value:[n]})}(n,{...A,...e,propertyName:t})}}function W(e){return(0,i.compose)(J,y)(e)}function b(e){return e.constructor.hasOwnProperty(F)}function J(e){return b(e)?e.constructor[F]:[]}function X(e){return w(e).reduce((n,{propertyName:t,dispatch:r,useEffectsErrorHandler:s})=>(n[t]={dispatch:r,useEffectsErrorHandler:s},n),{})}function w(e){return[W,B].reduce((t,r)=>t.concat(r(e)),[])}function x(e,n,t){const r=y(e).constructor.name,s=w(e).map(({propertyName:c,dispatch:d,useEffectsErrorHandler:l})=>{const p="function"==typeof e[c]?e[c]():e[c],a=l?t(p,n):p;return!1===d?a.pipe((0,f.ignoreElements)()):a.pipe((0,f.materialize)()).pipe((0,f.map)(h=>({effect:e[c],notification:h,propertyName:c,sourceName:r,sourceInstance:e})))});return(0,u.merge)(...s)}function T(e,n,t=10){return e.pipe((0,f.catchError)(r=>(n&&n.handleError(r),t<=1?e:T(e,n,t-1))))}let Q=(()=>{class e extends u.Observable{constructor(t){super(),t&&(this.source=t)}lift(t){const r=new e;return r.source=this,r.operator=t,r}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(i.ScannedActionsSubject))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function q(...e){return(0,f.filter)(n=>e.some(t=>"string"==typeof t?t===n.type:t.type===n.type))}const C=new o.InjectionToken("@ngrx/effects Internal Root Guard"),g=new o.InjectionToken("@ngrx/effects User Provided Effects"),j=new o.InjectionToken("@ngrx/effects Internal Root Effects"),k=new o.InjectionToken("@ngrx/effects Root Effects"),P=new o.InjectionToken("@ngrx/effects Internal Feature Effects"),N=new o.InjectionToken("@ngrx/effects Feature Effects"),U=new o.InjectionToken("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>T}),S="@ngrx/effects/init",H=(0,i.createAction)(S);function ue(e){return I(e,"ngrxOnInitEffects")}function I(e,n){return e&&n in e&&"function"==typeof e[n]}let R=(()=>{class e extends u.Subject{constructor(t,r){super(),this.errorHandler=t,this.effectsErrorHandler=r}addEffects(t){this.next(t)}toActions(){return this.pipe((0,f.groupBy)(y),(0,f.mergeMap)(t=>t.pipe((0,f.groupBy)(ae))),(0,f.mergeMap)(t=>{const r=t.pipe((0,f.exhaustMap)(c=>function de(e,n){return t=>{const r=x(t,e,n);return function se(e){return I(e,"ngrxOnRunEffects")}(t)?t.ngrxOnRunEffects(r):r}}(this.errorHandler,this.effectsErrorHandler)(c)),(0,f.map)(c=>(function ee(e,n){if("N"===e.notification.kind){const t=e.notification.value;!function te(e){return"function"!=typeof e&&e&&e.type&&"string"==typeof e.type}(t)&&n.handleError(new Error(`Effect ${function ne({propertyName:e,sourceInstance:n,sourceName:t}){const r="function"==typeof n[e];return`"${t}.${String(e)}${r?"()":""}"`}(e)} dispatched an invalid action: ${function re(e){try{return JSON.stringify(e)}catch{return e}}(t)}`))}}(c,this.errorHandler),c.notification)),(0,f.filter)(c=>"N"===c.kind&&null!=c.value),(0,f.dematerialize)()),s=t.pipe((0,f.take)(1),(0,f.filter)(ue),(0,f.map)(c=>c.ngrxOnInitEffects()));return(0,u.merge)(r,s)}))}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(o.ErrorHandler),o.\u0275\u0275inject(U))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ae(e){return function fe(e){return I(e,"ngrxOnIdentifyEffects")}(e)?e.ngrxOnIdentifyEffects():""}let v=(()=>{class e{constructor(t,r){this.effectSources=t,this.store=r,this.effectsSubscription=null}get isStarted(){return!!this.effectsSubscription}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(R),o.\u0275\u0275inject(i.Store))},e.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),O=(()=>{class e{constructor(t,r,s,c,d,l,p){this.sources=t,r.start(),c.forEach(a=>t.addEffects(a)),s.dispatch({type:S})}addEffects(t){this.sources.addEffects(t)}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(R),o.\u0275\u0275inject(v),o.\u0275\u0275inject(i.Store),o.\u0275\u0275inject(k),o.\u0275\u0275inject(i.StoreRootModule,8),o.\u0275\u0275inject(i.StoreFeatureModule,8),o.\u0275\u0275inject(C,8))},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),L=(()=>{class e{constructor(t,r,s,c){r.forEach(d=>d.forEach(l=>t.addEffects(l)))}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275inject(O),o.\u0275\u0275inject(N),o.\u0275\u0275inject(i.StoreRootModule,8),o.\u0275\u0275inject(i.StoreFeatureModule,8))},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),Ee=(()=>{class e{static forFeature(t=[]){return{ngModule:L,providers:[t,{provide:P,multi:!0,useValue:t},{provide:g,multi:!0,useValue:[]},{provide:N,multi:!0,useFactory:V,deps:[o.Injector,P,g]}]}}static forRoot(t=[]){return{ngModule:O,providers:[t,{provide:j,useValue:[t]},{provide:C,useFactory:pe,deps:[[v,new o.Optional,new o.SkipSelf],[j,new o.Self]]},{provide:g,multi:!0,useValue:[]},{provide:k,useFactory:V,deps:[o.Injector,j,g]}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})();function V(e,n,t){const r=[];for(const s of n)r.push(...s);for(const s of t)r.push(...s);return function le(e,n){return n.map(t=>e.get(t))}(e,r)}function pe(e,n){if((1!==n.length||0!==n[0].length)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}function ge(e,n){const{project:t,error:r,complete:s,operator:c,unsubscribe:d}="function"==typeof e?{project:e,error:n,operator:f.concatMap,complete:void 0,unsubscribe:void 0}:{...e,operator:e.operator||f.concatMap};return l=>(0,u.defer)(()=>{const p=new u.Subject;return(0,u.merge)(l.pipe(c((a,$)=>(0,u.defer)(()=>{let h=!1,K=!1,m=0;return t(a,$).pipe((0,f.materialize)(),(0,f.map)(M=>{switch(M.kind){case"E":return K=!0,{kind:"N",value:r(M.error,a)};case"C":return h=!0,s?{kind:"N",value:s(m,a)}:void 0;default:return++m,M}}),(0,f.filter)(M=>null!=M),(0,f.dematerialize)(),(0,f.finalize)(()=>{!h&&!K&&d&&p.next(d(m,a))}))}))),p)})}function Me(e){return(0,u.pipe)((0,f.concatMap)(n=>{const t=e(n),r=Array.isArray(t)?t:[t];return(0,u.of)(n).pipe((0,f.withLatestFrom)(...r))}))}function _e(e){return{\u0275providers:[e,{provide:o.ENVIRONMENT_INITIALIZER,multi:!0,useValue:()=>{(0,o.inject)(i.ROOT_STORE_PROVIDER),(0,o.inject)(i.FEATURE_STATE_PROVIDER,o.InjectFlags.Optional);const n=(0,o.inject)(v),t=(0,o.inject)(R),r=!n.isStarted;r&&n.start();for(const s of e){const c=(0,o.inject)(s);t.addEffects(c)}r&&(0,o.inject)(i.Store).dispatch(H())}}]}}}}]);
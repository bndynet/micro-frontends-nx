(self.webpackChunklogin=self.webpackChunklogin||[]).push([[481],{1481:(We,P,E)=>{E.r(P),E.d(P,{BrowserModule:()=>_e,BrowserTransferStateModule:()=>xe,By:()=>Ue,DomSanitizer:()=>re,EVENT_MANAGER_PLUGINS:()=>f,EventManager:()=>m,HAMMER_GESTURE_CONFIG:()=>T,HAMMER_LOADER:()=>O,HammerGestureConfig:()=>te,HammerModule:()=>Ve,Meta:()=>q,Title:()=>J,TransferState:()=>Fe,VERSION:()=>Ke,bootstrapApplication:()=>we,createApplication:()=>ve,disableDebugTools:()=>Le,enableDebugTools:()=>Pe,makeStateKey:()=>Be,platformBrowser:()=>De,provideProtractorTestingSupport:()=>Se,\u0275BrowserDomAdapter:()=>y,\u0275BrowserGetTestability:()=>L,\u0275DomEventsPlugin:()=>G,\u0275DomRendererFactory2:()=>S,\u0275DomSanitizerImpl:()=>N,\u0275DomSharedStylesHost:()=>p,\u0275HammerGesturesPlugin:()=>ne,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>R,\u0275KeyEventsPlugin:()=>$,\u0275NAMESPACE_URIS:()=>v,\u0275SharedStylesHost:()=>_,\u0275TRANSITION_ID:()=>M,\u0275escapeHtml:()=>He,\u0275flattenStyles:()=>g,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>W,\u0275shimContentAttribute:()=>F,\u0275shimHostAttribute:()=>j});var l=E(417),o=E(8944);class ie extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class y extends ie{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new y)}onAndCancel(r,e,n){return r.addEventListener(e,n,!1),()=>{r.removeEventListener(e,n,!1)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function ae(){return h=h||document.querySelector("base"),h?h.getAttribute("href"):null}();return null==e?null:function le(t){w=w||document.createElement("a"),w.setAttribute("href",t);const r=w.pathname;return"/"===r.charAt(0)?r:`/${r}`}(e)}resetBaseElement(){h=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return(0,l.\u0275parseCookieValue)(document.cookie,r)}}let w,h=null;const M=new o.InjectionToken("TRANSITION_ID"),ce=[{provide:o.APP_INITIALIZER,useFactory:function ue(t,r,e){return()=>{e.get(o.ApplicationInitStatus).donePromise.then(()=>{const n=(0,l.\u0275getDOM)(),s=r.querySelectorAll(`style[ng-transition="${t}"]`);for(let i=0;i<s.length;i++)n.remove(s[i])})}},deps:[M,l.DOCUMENT,o.Injector],multi:!0}];class L{addToWindow(r){o.\u0275global.getAngularTestability=(n,s=!0)=>{const i=r.findTestabilityInTree(n,s);if(null==i)throw new Error("Could not find testability for element.");return i},o.\u0275global.getAllAngularTestabilities=()=>r.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>r.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(n=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const u=function(c){a=a||c,i--,0==i&&n(a)};s.forEach(function(c){c.whenStable(u)})})}findTestabilityInTree(r,e,n){return null==e?null:r.getTestability(e)??(n?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}}let de=(()=>{class t{build(){return new XMLHttpRequest}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const f=new o.InjectionToken("EventManagerPlugins");let m=(()=>{class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(s=>s.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,n,s){return this._findPluginFor(n).addEventListener(e,n,s)}addGlobalEventListener(e,n,s){return this._findPluginFor(n).addGlobalEventListener(e,n,s)}getZone(){return this._zone}_findPluginFor(e){const n=this._eventNameToPlugin.get(e);if(n)return n;const s=this._plugins;for(let i=0;i<s.length;i++){const a=s[i];if(a.supports(e))return this._eventNameToPlugin.set(e,a),a}throw new Error(`No event manager plugin found for event ${e}`)}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(f),o.\u0275\u0275inject(o.NgZone))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();class D{constructor(r){this._doc=r}addGlobalEventListener(r,e,n){const s=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,r);if(!s)throw new Error(`Unsupported event target ${s} for event ${e}`);return this.addEventListener(s,e,n)}}let _=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(e){const n=new Set;e.forEach(s=>{this._stylesSet.has(s)||(this._stylesSet.add(s),n.add(s))}),this.onStylesAdded(n)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),p=(()=>{class t extends _{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,n,s){e.forEach(i=>{const a=this._doc.createElement("style");a.textContent=i,s.push(n.appendChild(a))})}addHost(e){const n=[];this._addStylesToHost(this._stylesSet,e,n),this._hostNodes.set(e,n)}removeHost(e){const n=this._hostNodes.get(e);n&&n.forEach(H),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((n,s)=>{this._addStylesToHost(e,s,n)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(H))}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();function H(t){(0,l.\u0275getDOM)().remove(t)}const v={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},A=/%COMP%/g,B="%COMP%",fe=`_nghost-${B}`,pe=`_ngcontent-${B}`;function F(t){return pe.replace(A,t)}function j(t){return fe.replace(A,t)}function g(t,r,e){for(let n=0;n<r.length;n++){let s=r[n];Array.isArray(s)?g(t,s,e):(s=s.replace(A,t),e.push(s))}return e}function x(t){return r=>{if("__ngUnwrap__"===r)return t;!1===t(r)&&(r.preventDefault(),r.returnValue=!1)}}let S=(()=>{class t{constructor(e,n,s){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.rendererByCompId=new Map,this.defaultRenderer=new C(e)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;switch(n.encapsulation){case o.ViewEncapsulation.Emulated:{let s=this.rendererByCompId.get(n.id);return s||(s=new me(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,s)),s.applyToHost(e),s}case 1:case o.ViewEncapsulation.ShadowDom:return new ge(this.eventManager,this.sharedStylesHost,e,n);default:if(!this.rendererByCompId.has(n.id)){const s=g(n.id,n.styles,[]);this.sharedStylesHost.addStyles(s),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(m),o.\u0275\u0275inject(p),o.\u0275\u0275inject(o.APP_ID))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();class C{constructor(r){this.eventManager=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(r,e){return e?document.createElementNS(v[e]||e,r):document.createElement(r)}createComment(r){return document.createComment(r)}createText(r){return document.createTextNode(r)}appendChild(r,e){(z(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(z(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let n="string"==typeof r?document.querySelector(r):r;if(!n)throw new Error(`The selector "${r}" did not match any elements`);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,s){if(s){e=s+":"+e;const i=v[s];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){const s=v[n];s?r.removeAttributeNS(s,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?r.style.setProperty(e,n,s&o.RendererStyleFlags2.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&o.RendererStyleFlags2.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r[e]=n}setValue(r,e){r.nodeValue=e}listen(r,e,n){return"string"==typeof r?this.eventManager.addGlobalEventListener(r,e,x(n)):this.eventManager.addEventListener(r,e,x(n))}}function z(t){return"TEMPLATE"===t.tagName&&void 0!==t.content}class me extends C{constructor(r,e,n,s){super(r),this.component=n;const i=g(s+"-"+n.id,n.styles,[]);e.addStyles(i),this.contentAttr=F(s+"-"+n.id),this.hostAttr=j(s+"-"+n.id)}applyToHost(r){super.setAttribute(r,this.hostAttr,"")}createElement(r,e){const n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}}class ge extends C{constructor(r,e,n,s){super(r),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=g(s.id,s.styles,[]);for(let a=0;a<i.length;a++){const u=document.createElement("style");u.textContent=i[a],this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}}let G=(()=>{class t extends D{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s){return e.addEventListener(n,s,!1),()=>this.removeEventListener(e,n,s)}removeEventListener(e,n,s){return e.removeEventListener(n,s)}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const V=["alt","control","meta","shift"],Ee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ye={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let $=(()=>{class t extends D{constructor(e){super(e)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,s){const i=t.parseEventName(n),a=t.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const n=e.toLowerCase().split("."),s=n.shift();if(0===n.length||"keydown"!==s&&"keyup"!==s)return null;const i=t._normalizeKey(n.pop());let a="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),a="code."),V.forEach(oe=>{const se=n.indexOf(oe);se>-1&&(n.splice(se,1),a+=oe+".")}),a+=i,0!=n.length||0===i.length)return null;const c={};return c.domEventName=s,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let s=Ee[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),V.forEach(a=>{a!==s&&(0,ye[a])(e)&&(i+=a+".")}),i+=s,i===n)}static eventCallback(e,n,s){return i=>{t.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>n(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();function we(t,r){return(0,o.\u0275internalCreateApplication)({rootComponent:t,...K(r)})}function ve(t){return(0,o.\u0275internalCreateApplication)(K(t))}function K(t){return{appProviders:[...Y,...t?.providers??[]],platformProviders:R}}function Se(){return[...X]}function W(){y.makeCurrent()}const R=[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:W,multi:!0},{provide:l.DOCUMENT,useFactory:function Me(){return(0,o.\u0275setDocument)(document),document},deps:[]}],De=(0,o.createPlatformFactory)(o.platformCore,"browser",R),Z=new o.InjectionToken(""),X=[{provide:o.\u0275TESTABILITY_GETTER,useClass:L,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],Y=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function Te(){return new o.ErrorHandler},deps:[]},{provide:f,useClass:G,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:f,useClass:$,multi:!0,deps:[l.DOCUMENT]},{provide:S,useClass:S,deps:[m,p,o.APP_ID]},{provide:o.RendererFactory2,useExisting:S},{provide:_,useExisting:p},{provide:p,useClass:p,deps:[l.DOCUMENT]},{provide:m,useClass:m,deps:[f,o.NgZone]},{provide:l.XhrFactory,useClass:de,deps:[]},[]];let _e=(()=>{class t{constructor(e){}static withServerTransition(e){return{ngModule:t,providers:[{provide:o.APP_ID,useValue:e.appId},{provide:M,useExisting:o.APP_ID},ce]}}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(Z,12))},t.\u0275mod=o.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=o.\u0275\u0275defineInjector({providers:[...Y,...X],imports:[l.CommonModule,o.ApplicationModule]}),t})(),q=(()=>{class t{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,n)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);const s=this.getTag(n);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){const a=this._parseSelector(e),u=this.getTags(a).filter(c=>this._containsAttributes(e,c))[0];if(void 0!==u)return u}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(s=>n.setAttribute(this._getMetaKeyMap(s),e[s])),n}_parseSelector(e){const n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(s=>n.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Ce[e]||e}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:function(e){let n=null;return n=e?new e:function Ae(){return new q((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),n},providedIn:"root"}),t})();const Ce={httpEquiv:"http-equiv"};let J=(()=>{class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:function(e){let n=null;return n=e?new e:function be(){return new J((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),n},providedIn:"root"}),t})();function Q(t,r){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[t]=r)}const d=typeof window<"u"&&window||{};class Oe{constructor(r,e){this.msPerTick=r,this.numTicks=e}}class Ne{constructor(r){this.appRef=r.injector.get(o.ApplicationRef)}timeChangeDetection(r){const e=r&&r.record,n="Change Detection",s=null!=d.console.profile;e&&s&&d.console.profile(n);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const u=I();e&&s&&d.console.profileEnd(n);const c=(u-i)/a;return d.console.log(`ran ${a} change detection cycles`),d.console.log(`${c.toFixed(2)} ms per check`),new Oe(c,a)}}function I(){return d.performance&&d.performance.now?d.performance.now():(new Date).getTime()}const ee="profiler";function Pe(t){return Q(ee,new Ne(t)),t}function Le(){Q(ee,null)}function He(t){const r={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return t.replace(/[&"'<>]/g,e=>r[e])}function Be(t){return t}let Fe=(()=>{class t{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,n){return void 0!==this.store[e]?this.store[e]:n}set(e,n){this.store[e]=n}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,n){this.onSerializeCallbacks[e]=n}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(n){console.warn("Exception in onSerialize callback: ",n)}return JSON.stringify(this.store)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:function(){return(()=>{const r=(0,o.inject)(l.DOCUMENT),e=(0,o.inject)(o.APP_ID),n=new t;return n.store=function je(t,r){const e=t.getElementById(r+"-state");let n={};if(e&&e.textContent)try{n=JSON.parse(function ke(t){const r={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return t.replace(/&[^;]+;/g,e=>r[e])}(e.textContent))}catch(s){console.warn("Exception while restoring TransferState for app "+r,s)}return n}(r,e),n})()},providedIn:"root"}),t})(),xe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=o.\u0275\u0275defineInjector({}),t})();class Ue{static all(){return()=>!0}static css(r){return e=>null!=e.nativeElement&&function ze(t,r){return!!(0,l.\u0275getDOM)().isElementNode(t)&&(t.matches&&t.matches(r)||t.msMatchesSelector&&t.msMatchesSelector(r)||t.webkitMatchesSelector&&t.webkitMatchesSelector(r))}(e.nativeElement,r)}static directive(r){return e=>-1!==e.providerTokens.indexOf(r)}}const Ge={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},T=new o.InjectionToken("HammerGestureConfig"),O=new o.InjectionToken("HammerLoader");let te=(()=>{class t{constructor(){this.events=[],this.overrides={}}buildHammer(e){const n=new Hammer(e,this.options);n.get("pinch").set({enable:!0}),n.get("rotate").set({enable:!0});for(const s in this.overrides)n.get(s).set(this.overrides[s]);return n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),ne=(()=>{class t extends D{constructor(e,n,s,i){super(e),this._config=n,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Ge.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,n,s){const i=this.manager.getZone();if(n=n.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,u=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(u=this.addEventListener(e,n,s)):u=()=>{}}).catch(()=>{u=()=>{}})),()=>{u()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),u=function(c){i.runGuarded(function(){s(c)})};return a.on(n,u),()=>{a.off(n,u),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(T),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(O,8))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),Ve=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:f,useClass:ne,multi:!0,deps:[l.DOCUMENT,T,o.\u0275Console,[new o.Optional,O]]},{provide:T,useClass:te,deps:[]}]}),t})(),re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:function(e){let n=null;return n=e?new(e||t):o.\u0275\u0275inject(N),n},providedIn:"root"}),t})(),N=(()=>{class t extends re{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case o.SecurityContext.NONE:return n;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"HTML")?(0,o.\u0275unwrapSafeValue)(n):(0,o.\u0275_sanitizeHtml)(this._doc,String(n)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"Style")?(0,o.\u0275unwrapSafeValue)(n):n;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(n,"Script"))return(0,o.\u0275unwrapSafeValue)(n);throw new Error("unsafe value used in a script context");case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(n,"URL")?(0,o.\u0275unwrapSafeValue)(n):(0,o.\u0275_sanitizeUrl)(String(n));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(n,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(n);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(l.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:function(e){let n=null;return n=e?new e:function $e(t){return new N(t.get(l.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),n},providedIn:"root"}),t})();const Ke=new o.Version("14.2.6")}}]);
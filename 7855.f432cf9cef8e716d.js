(self.webpackChunkhost=self.webpackChunkhost||[]).push([[7855],{7855:(W,y,c)=>{c.r(y),c.d(y,{CdkDialogContainer:()=>O,DEFAULT_DIALOG_CONFIG:()=>T,DIALOG_DATA:()=>E,DIALOG_SCROLL_STRATEGY:()=>v,DIALOG_SCROLL_STRATEGY_PROVIDER:()=>b,DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>I,Dialog:()=>R,DialogConfig:()=>f,DialogModule:()=>S,DialogRef:()=>D,throwDialogContentAlreadyAttachedError:()=>M});var p=c(9034),d=c(7798),g=c(3021),h=c(4325),P=c(417),o=c(8944),m=c(9399),_=c(3970),A=c(8441),k=c(6209);function F(a,r){}class f{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}function M(){throw Error("Attempting to attach dialog content after content is already attached")}let O=(()=>{class a extends h.BasePortalOutlet{constructor(e,t,i,n,l,s,u,L){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=n,this._interactivityChecker=l,this._ngZone=s,this._overlayRef=u,this._focusMonitor=L,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=w=>{this._portalOutlet.hasAttached();const B=this._portalOutlet.attachDomPortal(w);return this._contentAttached(),B},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=i}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const i=(0,g._getFocusedElementPierceShadowDom)(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,g._getFocusedElementPierceShadowDom)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,g._getFocusedElementPierceShadowDom)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(p.FocusTrapFactory),o.\u0275\u0275directiveInject(P.DOCUMENT,8),o.\u0275\u0275directiveInject(f),o.\u0275\u0275directiveInject(p.InteractivityChecker),o.\u0275\u0275directiveInject(o.NgZone),o.\u0275\u0275directiveInject(d.OverlayRef),o.\u0275\u0275directiveInject(p.FocusMonitor))},a.\u0275cmp=o.\u0275\u0275defineComponent({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(e,t){if(1&e&&o.\u0275\u0275viewQuery(h.CdkPortalOutlet,7),2&e){let i;o.\u0275\u0275queryRefresh(i=o.\u0275\u0275loadQuery())&&(t._portalOutlet=i.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,t){2&e&&o.\u0275\u0275attribute("id",t._config.id||null)("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null)},features:[o.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&o.\u0275\u0275template(0,F,0,0,"ng-template",0)},dependencies:[h.CdkPortalOutlet],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),a})();class D{constructor(r,e){this.overlayRef=r,this.config=e,this.closed=new _.Subject,this.disableClose=e.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===m.ESCAPE&&!this.disableClose&&!(0,m.hasModifierKey)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(r,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),t.next(r),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r="",e=""){return this.overlayRef.updateSize({width:r,height:e}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}}const v=new o.InjectionToken("DialogScrollStrategy"),E=new o.InjectionToken("DialogData"),T=new o.InjectionToken("DefaultDialogConfig");function I(a){return()=>a.scrollStrategies.block()}const b={provide:v,deps:[d.Overlay],useFactory:I};let j=0,R=(()=>{class a{constructor(e,t,i,n,l,s){this._overlay=e,this._injector=t,this._defaultOptions=i,this._parentDialog=n,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _.Subject,this._afterOpenedAtThisLevel=new _.Subject,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,_.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,k.startWith)(void 0))),this._scrollStrategy=s}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,t){(t={...this._defaultOptions||new f,...t}).id=t.id||"cdk-dialog-"+j++,t.id&&this.getDialogById(t.id);const n=this._getOverlayConfig(t),l=this._overlay.create(n),s=new D(l,t),u=this._attachContainer(l,s,t);return s.containerInstance=u,this._attachDialogContent(e,s,u,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){C(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){C(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),C(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new d.OverlayConfig({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){const n=i.injector||i.viewContainerRef?.injector,l=[{provide:f,useValue:i},{provide:D,useValue:t},{provide:d.OverlayRef,useValue:e}];let s;i.container?"function"==typeof i.container?s=i.container:(s=i.container.type,l.push(...i.container.providers(i))):s=O;const u=new h.ComponentPortal(s,i.viewContainerRef,o.Injector.create({parent:n||this._injector,providers:l}),i.componentFactoryResolver);return e.attach(u).instance}_attachDialogContent(e,t,i,n){if(e instanceof o.TemplateRef){const l=this._createInjector(n,t,i,void 0);let s={$implicit:n.data,dialogRef:t};n.templateContext&&(s={...s,..."function"==typeof n.templateContext?n.templateContext():n.templateContext}),i.attachTemplatePortal(new h.TemplatePortal(e,null,s,l))}else{const l=this._createInjector(n,t,i,this._injector),s=i.attachComponentPortal(new h.ComponentPortal(e,n.viewContainerRef,l,n.componentFactoryResolver));t.componentInstance=s.instance}}_createInjector(e,t,i,n){const l=e.injector||e.viewContainerRef?.injector,s=[{provide:E,useValue:e.data},{provide:D,useValue:t}];return e.providers&&("function"==typeof e.providers?s.push(...e.providers(t,e,i)):s.push(...e.providers)),e.direction&&(!l||!l.get(A.Directionality,null,o.InjectFlags.Optional))&&s.push({provide:A.Directionality,useValue:{value:e.direction,change:(0,_.of)()}}),o.Injector.create({parent:l||n,providers:s})}_removeOpenDialog(e,t){const i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,l)=>{n?l.setAttribute("aria-hidden",n):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){const n=t[i];n!==e&&"SCRIPT"!==n.nodeName&&"STYLE"!==n.nodeName&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(d.Overlay),o.\u0275\u0275inject(o.Injector),o.\u0275\u0275inject(T,8),o.\u0275\u0275inject(a,12),o.\u0275\u0275inject(d.OverlayContainer),o.\u0275\u0275inject(v))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a})();function C(a,r){let e=a.length;for(;e--;)r(a[e])}let S=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=o.\u0275\u0275defineInjector({providers:[R,b],imports:[d.OverlayModule,h.PortalModule,p.A11yModule,h.PortalModule]}),a})()}}]);
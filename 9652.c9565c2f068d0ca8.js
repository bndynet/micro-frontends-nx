(self.webpackChunkhost=self.webpackChunkhost||[]).push([[9652],{9652:(G,A,o)=>{o.r(A),o.d(A,{EXPANSION_PANEL_ANIMATION_TIMING:()=>M,MAT_ACCORDION:()=>m,MAT_EXPANSION_PANEL:()=>y,MAT_EXPANSION_PANEL_DEFAULT_OPTIONS:()=>b,MatAccordion:()=>X,MatExpansionModule:()=>Y,MatExpansionPanel:()=>w,MatExpansionPanelActionRow:()=>K,MatExpansionPanelContent:()=>O,MatExpansionPanelDescription:()=>z,MatExpansionPanelHeader:()=>N,MatExpansionPanelTitle:()=>V,matExpansionAnimations:()=>P});var u=o(1306),x=o(4325),f=o(417),e=o(8944),D=o(2027),I=o(8968),T=o(9034),p=o(6209),E=o(9399),C=o(1461),g=o(3970),s=o(459),H=o(4177);const S=["body"];function R(t,i){}const j=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],L=["mat-expansion-panel-header","*","mat-action-row"];function k(t,i){if(1&t&&e.\u0275\u0275element(0,"span",2),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("@indicatorRotate",n._getExpandedState())}}const B=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],F=["mat-panel-title","mat-panel-description","*"],m=new e.InjectionToken("MAT_ACCORDION"),M="225ms cubic-bezier(0.4,0.0,0.2,1)",P={indicatorRotate:(0,s.trigger)("indicatorRotate",[(0,s.state)("collapsed, void",(0,s.style)({transform:"rotate(0deg)"})),(0,s.state)("expanded",(0,s.style)({transform:"rotate(180deg)"})),(0,s.transition)("expanded <=> collapsed, void => collapsed",(0,s.animate)(M))]),bodyExpansion:(0,s.trigger)("bodyExpansion",[(0,s.state)("collapsed, void",(0,s.style)({height:"0px",visibility:"hidden"})),(0,s.state)("expanded",(0,s.style)({height:"*",visibility:"visible"})),(0,s.transition)("expanded <=> collapsed, void => collapsed",(0,s.animate)(M))])},y=new e.InjectionToken("MAT_EXPANSION_PANEL");let O=(()=>{class t{constructor(n,a){this._template=n,this._expansionPanel=a}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.TemplateRef),e.\u0275\u0275directiveInject(y,8))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]}),t})(),U=0;const b=new e.InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let w=(()=>{class t extends u.CdkAccordionItem{constructor(n,a,r,d,h,v,_){super(n,a,r),this._viewContainerRef=d,this._animationMode=v,this._hideToggle=!1,this.afterExpand=new e.EventEmitter,this.afterCollapse=new e.EventEmitter,this._inputChanges=new g.Subject,this._headerId="mat-expansion-panel-header-"+U++,this._bodyAnimationDone=new g.Subject,this.accordion=n,this._document=h,this._bodyAnimationDone.pipe((0,p.distinctUntilChanged)((c,l)=>c.fromState===l.fromState&&c.toState===l.toState)).subscribe(c=>{"void"!==c.fromState&&("expanded"===c.toState?this.afterExpand.emit():"collapsed"===c.toState&&this.afterCollapse.emit())}),_&&(this.hideToggle=_.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(n){this._hideToggle=(0,I.coerceBooleanProperty)(n)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(n){this._togglePosition=n}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,p.startWith)(null),(0,p.filter)(()=>this.expanded&&!this._portal),(0,p.take)(1)).subscribe(()=>{this._portal=new x.TemplatePortal(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(n){this._inputChanges.next(n)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const n=this._document.activeElement,a=this._body.nativeElement;return n===a||a.contains(n)}return!1}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(m,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(H.UniqueSelectionDispatcher),e.\u0275\u0275directiveInject(e.ViewContainerRef),e.\u0275\u0275directiveInject(f.DOCUMENT),e.\u0275\u0275directiveInject(C.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(b,8))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,r){if(1&n&&e.\u0275\u0275contentQuery(r,O,5),2&n){let d;e.\u0275\u0275queryRefresh(d=e.\u0275\u0275loadQuery())&&(a._lazyContent=d.first)}},viewQuery:function(n,a){if(1&n&&e.\u0275\u0275viewQuery(S,5),2&n){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(a._body=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,a){2&n&&e.\u0275\u0275classProp("mat-expanded",a.expanded)("_mat-animation-noopable","NoopAnimations"===a._animationMode)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e.\u0275\u0275ProvidersFeature([{provide:m,useValue:void 0},{provide:y,useExisting:t}]),e.\u0275\u0275InheritDefinitionFeature,e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:L,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){1&n&&(e.\u0275\u0275projectionDef(j),e.\u0275\u0275projection(0),e.\u0275\u0275elementStart(1,"div",0,1),e.\u0275\u0275listener("@bodyExpansion.done",function(d){return a._bodyAnimationDone.next(d)}),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275projection(4,1),e.\u0275\u0275template(5,R,0,0,"ng-template",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(6,2),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("@bodyExpansion",a._getExpandedState())("id",a.id),e.\u0275\u0275attribute("aria-labelledby",a._headerId),e.\u0275\u0275advance(4),e.\u0275\u0275property("cdkPortalOutlet",a._portal))},dependencies:[x.CdkPortalOutlet],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[P.bodyExpansion]},changeDetection:0}),t})(),K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-action-row"]],hostAttrs:[1,"mat-action-row"]}),t})();class W{}const Q=(0,D.mixinTabIndex)(W);let N=(()=>{class t extends Q{constructor(n,a,r,d,h,v,_){super(),this.panel=n,this._element=a,this._focusMonitor=r,this._changeDetectorRef=d,this._animationMode=v,this._parentChangeSubscription=g.Subscription.EMPTY;const c=n.accordion?n.accordion._stateChanges.pipe((0,p.filter)(l=>!(!l.hideToggle&&!l.togglePosition))):g.EMPTY;this.tabIndex=parseInt(_||"")||0,this._parentChangeSubscription=(0,g.merge)(n.opened,n.closed,c,n._inputChanges.pipe((0,p.filter)(l=>!!(l.hideToggle||l.disabled||l.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),n.closed.pipe((0,p.filter)(()=>n._containsFocus())).subscribe(()=>r.focusVia(a,"program")),h&&(this.expandedHeight=h.expandedHeight,this.collapsedHeight=h.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const n=this._isExpanded();return n&&this.expandedHeight?this.expandedHeight:!n&&this.collapsedHeight?this.collapsedHeight:null}_keydown(n){switch(n.keyCode){case E.SPACE:case E.ENTER:(0,E.hasModifierKey)(n)||(n.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(n))}}focus(n,a){n?this._focusMonitor.focusVia(this._element,n,a):this._element.nativeElement.focus(a)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(n=>{n&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(w,1),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(T.FocusMonitor),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(b,8),e.\u0275\u0275directiveInject(C.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275injectAttribute("tabindex"))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,a){1&n&&e.\u0275\u0275listener("click",function(){return a._toggle()})("keydown",function(d){return a._keydown(d)}),2&n&&(e.\u0275\u0275attribute("id",a.panel._headerId)("tabindex",a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),e.\u0275\u0275styleProp("height",a._getHeaderHeight()),e.\u0275\u0275classProp("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after","after"===a._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===a._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:F,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,a){1&n&&(e.\u0275\u0275projectionDef(B),e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275projection(1),e.\u0275\u0275projection(2,1),e.\u0275\u0275projection(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,k,1,1,"span",1)),2&n&&(e.\u0275\u0275classProp("mat-content-hide-toggle",!a._showToggle()),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",a._showToggle()))},dependencies:[f.NgIf],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[P.indicatorRotate]},changeDetection:0}),t})(),z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),t})(),X=(()=>{class t extends u.CdkAccordion{constructor(){super(...arguments),this._ownHeaders=new e.QueryList,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(n){this._hideToggle=(0,I.coerceBooleanProperty)(n)}ngAfterContentInit(){this._headers.changes.pipe((0,p.startWith)(this._headers)).subscribe(n=>{this._ownHeaders.reset(n.filter(a=>a.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new T.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(n){this._keyManager.onKeydown(n)}_handleHeaderFocus(n){this._keyManager.updateActiveItem(n)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return t.\u0275fac=function(){let i;return function(a){return(i||(i=e.\u0275\u0275getInheritedFactory(t)))(a||t)}}(),t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,r){if(1&n&&e.\u0275\u0275contentQuery(r,N,5),2&n){let d;e.\u0275\u0275queryRefresh(d=e.\u0275\u0275loadQuery())&&(a._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){2&n&&e.\u0275\u0275classProp("mat-accordion-multi",a.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:m,useExisting:t}]),e.\u0275\u0275InheritDefinitionFeature]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[f.CommonModule,D.MatCommonModule,u.CdkAccordionModule,x.PortalModule]}),t})()}}]);
(self.webpackChunkhost=self.webpackChunkhost||[]).push([[5013],{5013:(pe,Z,h)=>{h.r(Z),h.d(Z,{BaseCdkCell:()=>b,BaseRowDef:()=>O,CDK_ROW_TEMPLATE:()=>_e,CDK_TABLE:()=>p,CDK_TABLE_TEMPLATE:()=>Re,CdkCell:()=>H,CdkCellDef:()=>k,CdkCellOutlet:()=>g,CdkColumnDef:()=>m,CdkFooterCell:()=>q,CdkFooterCellDef:()=>P,CdkFooterRow:()=>J,CdkFooterRowDef:()=>I,CdkHeaderCell:()=>L,CdkHeaderCellDef:()=>v,CdkHeaderRow:()=>X,CdkHeaderRowDef:()=>M,CdkNoDataRow:()=>W,CdkRecycleRows:()=>oe,CdkRow:()=>ee,CdkRowDef:()=>U,CdkTable:()=>$,CdkTableModule:()=>De,CdkTextColumn:()=>ne,DataRowOutlet:()=>x,DataSource:()=>w.DataSource,FooterRowOutlet:()=>F,HeaderRowOutlet:()=>N,NoDataRowOutlet:()=>A,STICKY_DIRECTIONS:()=>V,STICKY_POSITIONING_LISTENER:()=>K,StickyStyler:()=>te,TEXT_COLUMN_OPTIONS:()=>Y,_COALESCED_STYLE_SCHEDULER:()=>Q,_CoalescedStyleScheduler:()=>G,_Schedule:()=>B,mixinHasStickyInput:()=>T});var ie=h(8441),E=h(8968),w=h(4177),re=h(3021),z=h(3755),ce=h(417),t=h(8944),R=h(3970),D=h(6209);const le=[[["caption"]],[["colgroup"],["col"]]],ae=["caption","colgroup, col"];function de(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"th",3),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275styleProp("text-align",e.justify),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",e.headerText," ")}}function ue(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"td",4),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&n){const e=i.$implicit,o=t.\u0275\u0275nextContext();t.\u0275\u0275styleProp("text-align",o.justify),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",o.dataAccessor(e,o.name)," ")}}function T(n){return class extends n{constructor(...i){super(...i),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(i){const e=this._sticky;this._sticky=(0,E.coerceBooleanProperty)(i),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const i=this._hasStickyChanged;return this._hasStickyChanged=!1,i}resetStickyChanged(){this._hasStickyChanged=!1}}}const p=new t.InjectionToken("CDK_TABLE"),Y=new t.InjectionToken("text-column-options");let k=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkCellDef",""]]}),n})(),v=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkHeaderCellDef",""]]}),n})(),P=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkFooterCellDef",""]]}),n})();class fe{}const he=T(fe);let m=(()=>{class n extends he{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const o=this._stickyEnd;this._stickyEnd=(0,E.coerceBooleanProperty)(e),this._hasStickyChanged=o!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(p,8))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,o,s){if(1&e&&(t.\u0275\u0275contentQuery(s,k,5),t.\u0275\u0275contentQuery(s,v,5),t.\u0275\u0275contentQuery(s,P,5)),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o.cell=r.first),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o.headerCell=r.first),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o.footerCell=r.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[t.\u0275\u0275ProvidersFeature([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:n}]),t.\u0275\u0275InheritDefinitionFeature]}),n})();class b{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}}let L=(()=>{class n extends b{constructor(e,o){super(e,o)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[t.\u0275\u0275InheritDefinitionFeature]}),n})(),q=(()=>{class n extends b{constructor(e,o){if(super(e,o),1===e._table?._elementRef.nativeElement.nodeType){const s=e._table._elementRef.nativeElement.getAttribute("role");o.nativeElement.setAttribute("role","grid"===s||"treegrid"===s?"gridcell":"cell")}}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[t.\u0275\u0275InheritDefinitionFeature]}),n})(),H=(()=>{class n extends b{constructor(e,o){if(super(e,o),1===e._table?._elementRef.nativeElement.nodeType){const s=e._table._elementRef.nativeElement.getAttribute("role");o.nativeElement.setAttribute("role","grid"===s||"treegrid"===s?"gridcell":"cell")}}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[t.\u0275\u0275InheritDefinitionFeature]}),n})();class B{constructor(){this.tasks=[],this.endTasks=[]}}const Q=new t.InjectionToken("_COALESCED_STYLE_SCHEDULER");let G=(()=>{class n{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new R.Subject}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new B,this._getScheduleObservable().pipe((0,D.takeUntil)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new B;for(const o of e.tasks)o();for(const o of e.endTasks)o()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,R.from)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,D.take)(1))}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275inject(t.NgZone))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const _e="<ng-container cdkCellOutlet></ng-container>";let O=(()=>{class n{constructor(e,o){this.template=e,this._differs=o}ngOnChanges(e){if(!this._columnsDiffer){const o=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(o).create(),this._columnsDiffer.diff(o)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof M?e.headerCell.template:this instanceof I?e.footerCell.template:e.cell.template}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.IterableDiffers))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,features:[t.\u0275\u0275NgOnChangesFeature]}),n})();class we extends O{}const Ce=T(we);let M=(()=>{class n extends Ce{constructor(e,o,s){super(e,o),this._table=s}ngOnChanges(e){super.ngOnChanges(e)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.IterableDiffers),t.\u0275\u0275directiveInject(p,8))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature]}),n})();class me extends O{}const ye=T(me);let I=(()=>{class n extends ye{constructor(e,o,s){super(e,o),this._table=s}ngOnChanges(e){super.ngOnChanges(e)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.IterableDiffers),t.\u0275\u0275directiveInject(p,8))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature]}),n})(),U=(()=>{class n extends O{constructor(e,o,s){super(e,o),this._table=s}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.IterableDiffers),t.\u0275\u0275directiveInject(p,8))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[t.\u0275\u0275InheritDefinitionFeature]}),n})(),g=(()=>{class n{constructor(e){this._viewContainer=e,n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}}return n.mostRecentCellOutlet=null,n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ViewContainerRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","cdkCellOutlet",""]]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2}),n})(),W=(()=>{class n{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["ng-template","cdkNoDataRow",""]]}),n})();const V=["top","bottom","left","right"];class te{constructor(i,e,o,s,r=!0,c=!0,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this.direction=o,this._coalescedStyleScheduler=s,this._isBrowser=r,this._needsPositionStickyOnElement=c,this._positionListener=l,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){const o=[];for(const s of i)if(s.nodeType===s.ELEMENT_NODE){o.push(s);for(let r=0;r<s.children.length;r++)o.push(s.children[r])}this._coalescedStyleScheduler.schedule(()=>{for(const s of o)this._removeStickyStyle(s,e)})}updateStickyColumns(i,e,o,s=!0){if(!i.length||!this._isBrowser||!e.some(u=>u)&&!o.some(u=>u))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const r=i[0],c=r.children.length,l=this._getCellWidths(r,s),a=this._getStickyStartColumnPositions(l,e),C=this._getStickyEndColumnPositions(l,o),d=e.lastIndexOf(!0),_=o.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const u="rtl"===this.direction,y=u?"right":"left",ge=u?"left":"right";for(const S of i)for(let f=0;f<c;f++){const se=S.children[f];e[f]&&this._addStickyStyle(se,y,a[f],f===d),o[f]&&this._addStickyStyle(se,ge,C[f],f===_)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===d?[]:l.slice(0,d+1).map((S,f)=>e[f]?S:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===_?[]:l.slice(_).map((S,f)=>o[f+_]?S:null).reverse()}))})}stickRows(i,e,o){if(!this._isBrowser)return;const s="bottom"===o?i.slice().reverse():i,r="bottom"===o?e.slice().reverse():e,c=[],l=[],a=[];for(let d=0,_=0;d<s.length;d++){if(!r[d])continue;c[d]=_;const u=s[d];a[d]=this._isNativeHtmlTable?Array.from(u.children):[u];const y=u.getBoundingClientRect().height;_+=y,l[d]=y}const C=r.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let d=0;d<s.length;d++){if(!r[d])continue;const _=c[d],u=d===C;for(const y of a[d])this._addStickyStyle(y,o,_,u)}"top"===o?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:c,elements:a}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:c,elements:a})})}updateStickyFooterContainer(i,e){if(!this._isNativeHtmlTable)return;const o=i.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(s=>!s)?this._removeStickyStyle(o,["bottom"]):this._addStickyStyle(o,"bottom",0,!1)})}_removeStickyStyle(i,e){for(const s of e)i.style[s]="",i.classList.remove(this._borderCellCss[s]);V.some(s=>-1===e.indexOf(s)&&i.style[s])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,o,s){i.classList.add(this._stickCellCss),s&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${o}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){const e={top:100,bottom:10,left:1,right:1};let o=0;for(const s of V)i.style[s]&&(o+=e[s]);return o?`${o}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const o=[],s=i.children;for(let r=0;r<s.length;r++)o.push(s[r].getBoundingClientRect().width);return this._cachedCellWidths=o,o}_getStickyStartColumnPositions(i,e){const o=[];let s=0;for(let r=0;r<i.length;r++)e[r]&&(o[r]=s,s+=i[r]);return o}_getStickyEndColumnPositions(i,e){const o=[];let s=0;for(let r=i.length;r>0;r--)e[r]&&(o[r]=s,s+=i[r]);return o}}const K=new t.InjectionToken("CDK_SPL");let oe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["cdk-table","recycleRows",""],["table","cdk-table","","recycleRows",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:w._VIEW_REPEATER_STRATEGY,useClass:w._RecycleViewRepeaterStrategy}])]}),n})(),x=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","rowOutlet",""]]}),n})(),N=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","headerRowOutlet",""]]}),n})(),F=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","footerRowOutlet",""]]}),n})(),A=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.ElementRef))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","noDataRowOutlet",""]]}),n})();const Re='\n  <ng-content select="caption"></ng-content>\n  <ng-content select="colgroup, col"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n';let $=(()=>{class n{constructor(e,o,s,r,c,l,a,C,d,_,u,y){this._differs=e,this._changeDetectorRef=o,this._elementRef=s,this._dir=c,this._platform=a,this._viewRepeater=C,this._coalescedStyleScheduler=d,this._viewportRuler=_,this._stickyPositioningListener=u,this._ngZone=y,this._onDestroy=new R.Subject,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new t.EventEmitter,this.viewChange=new R.BehaviorSubject({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=l,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,E.coerceBooleanProperty)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,E.coerceBooleanProperty)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o),this._viewportRuler.change().pipe((0,D.takeUntil)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const o=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||o,this._forceRecalculateCellWidths=o,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),(0,w.isDataSource)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const o=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,o,(s,r,c)=>this._getEmbeddedViewArgs(s.item,c),s=>s.item.data,s=>{1===s.operation&&s.context&&this._renderCellTemplateForItem(s.record.item.rowDef,s.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(s=>{o.get(s.currentIndex).context.$implicit=s.item.data}),this._updateNoDataRow(),this._ngZone&&t.NgZone.isInAngularZone()?this._ngZone.onStable.pipe((0,D.take)(1),(0,D.takeUntil)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),s=this._elementRef.nativeElement.querySelector("thead");s&&(s.style.display=e.length?"":"none");const r=this._headerRowDefs.map(c=>c.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,r,"top"),this._headerRowDefs.forEach(c=>c.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),s=this._elementRef.nativeElement.querySelector("tfoot");s&&(s.style.display=e.length?"":"none");const r=this._footerRowDefs.map(c=>c.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(c=>c.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),o=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...o,...s],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,c)=>{this._addStickyColumnStyles([r],this._headerRowDefs[c])}),this._rowDefs.forEach(r=>{const c=[];for(let l=0;l<o.length;l++)this._renderRows[l].rowDef===r&&c.push(o[l]);this._addStickyColumnStyles(c,r)}),s.forEach((r,c)=>{this._addStickyColumnStyles([r],this._footerRowDefs[c])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){const e=[],o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let r=this._data[s];const c=this._getRenderRowsForData(r,s,o.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<c.length;l++){let a=c[l];const C=this._cachedRenderRowsMap.get(a.data);C.has(a.rowDef)?C.get(a.rowDef).push(a):C.set(a.rowDef,[a]),e.push(a)}}return e}_getRenderRowsForData(e,o,s){return this._getRowDefs(e,o).map(c=>{const l=s&&s.has(c)?s.get(c):[];if(l.length){const a=l.shift();return a.dataIndex=o,a}return{data:e,rowDef:c,dataIndex:o}})}_cacheColumnDefs(){this._columnDefsByName.clear(),j(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(o=>{this._columnDefsByName.has(o.name),this._columnDefsByName.set(o.name,o)})}_cacheRowDefs(){this._headerRowDefs=j(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=j(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=j(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(o=>!o.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(c,l)=>c||!!l.getColumnsDiff(),o=this._rowDefs.reduce(e,!1);o&&this._forceRenderDataRows();const s=this._headerRowDefs.reduce(e,!1);s&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),o||s||r}_switchDataSource(e){this._data=[],(0,w.isDataSource)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,w.isDataSource)(this.dataSource)?e=this.dataSource.connect(this):(0,R.isObservable)(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,R.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,D.takeUntil)(this._onDestroy)).subscribe(o=>{this._data=o||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,o)=>this._renderRow(this._headerRowOutlet,e,o)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,o)=>this._renderRow(this._footerRowOutlet,e,o)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,o){const s=Array.from(o.columns||[]).map(l=>this._columnDefsByName.get(l)),r=s.map(l=>l.sticky),c=s.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,c,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const o=[];for(let s=0;s<e.viewContainer.length;s++){const r=e.viewContainer.get(s);o.push(r.rootNodes[0])}return o}_getRowDefs(e,o){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(r=>!r.when||r.when(o,e));else{let r=this._rowDefs.find(c=>c.when&&c.when(o,e))||this._defaultRowDef;r&&s.push(r)}return s}_getEmbeddedViewArgs(e,o){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:o}}_renderRow(e,o,s,r={}){const c=e.viewContainer.createEmbeddedView(o.template,r,s);return this._renderCellTemplateForItem(o,r),c}_renderCellTemplateForItem(e,o){for(let s of this._getCellTemplates(e))g.mostRecentCellOutlet&&g.mostRecentCellOutlet._viewContainer.createEmbeddedView(s,o);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let o=0,s=e.length;o<s;o++){const c=e.get(o).context;c.count=s,c.first=0===o,c.last=o===s-1,c.even=o%2==0,c.odd=!c.even,this.multiTemplateDataRows?(c.dataIndex=this._renderRows[o].dataIndex,c.renderIndex=o):c.index=this._renderRows[o].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,o=>{const s=this._columnDefsByName.get(o);return e.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),o=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const s of o){const r=this._document.createElement(s.tag);r.setAttribute("role","rowgroup");for(const c of s.outlets)r.appendChild(c.elementRef.nativeElement);e.appendChild(r)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(o,s)=>o||s.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new te(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,R.of)()).pipe((0,D.takeUntil)(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(o=>!o._table||o._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const o=0===this._rowOutlet.viewContainer.length;if(o===this._isShowingNoDataRow)return;const s=this._noDataRowOutlet.viewContainer;if(o){const r=s.createEmbeddedView(e.templateRef),c=r.rootNodes[0];1===r.rootNodes.length&&c?.nodeType===this._document.ELEMENT_NODE&&(c.setAttribute("role","row"),c.classList.add(e._contentClassName))}else s.clear();this._isShowingNoDataRow=o}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.IterableDiffers),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275injectAttribute("role"),t.\u0275\u0275directiveInject(ie.Directionality,8),t.\u0275\u0275directiveInject(ce.DOCUMENT),t.\u0275\u0275directiveInject(re.Platform),t.\u0275\u0275directiveInject(w._VIEW_REPEATER_STRATEGY),t.\u0275\u0275directiveInject(Q),t.\u0275\u0275directiveInject(z.ViewportRuler),t.\u0275\u0275directiveInject(K,12),t.\u0275\u0275directiveInject(t.NgZone,8))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,o,s){if(1&e&&(t.\u0275\u0275contentQuery(s,W,5),t.\u0275\u0275contentQuery(s,m,5),t.\u0275\u0275contentQuery(s,U,5),t.\u0275\u0275contentQuery(s,M,5),t.\u0275\u0275contentQuery(s,I,5)),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o._noDataRow=r.first),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o._contentColumnDefs=r),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o._contentRowDefs=r),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o._contentHeaderRowDefs=r),t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o._contentFooterRowDefs=r)}},viewQuery:function(e,o){if(1&e&&(t.\u0275\u0275viewQuery(x,7),t.\u0275\u0275viewQuery(N,7),t.\u0275\u0275viewQuery(F,7),t.\u0275\u0275viewQuery(A,7)),2&e){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o._rowOutlet=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o._headerRowOutlet=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o._footerRowOutlet=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o._noDataRowOutlet=s.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,o){2&e&&t.\u0275\u0275classProp("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[t.\u0275\u0275ProvidersFeature([{provide:p,useExisting:n},{provide:w._VIEW_REPEATER_STRATEGY,useClass:w._DisposeViewRepeaterStrategy},{provide:Q,useClass:G},{provide:K,useValue:null}])],ngContentSelectors:ae,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,o){1&e&&(t.\u0275\u0275projectionDef(le),t.\u0275\u0275projection(0),t.\u0275\u0275projection(1,1),t.\u0275\u0275elementContainer(2,0)(3,1)(4,2)(5,3))},dependencies:[x,N,F,A],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),n})();function j(n,i){return n.concat(Array.from(i))}let ne=(()=>{class n{constructor(e,o){this._table=e,this._options=o,this.justify="start",this._options=o||{}}get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}ngOnInit(){this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,o)=>e[o])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject($,8),t.\u0275\u0275directiveInject(Y,8))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["cdk-text-column"]],viewQuery:function(e,o){if(1&e&&(t.\u0275\u0275viewQuery(m,7),t.\u0275\u0275viewQuery(k,7),t.\u0275\u0275viewQuery(v,7)),2&e){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o.columnDef=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o.cell=s.first),t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o.headerCell=s.first)}},inputs:{name:"name",headerText:"headerText",dataAccessor:"dataAccessor",justify:"justify"},decls:3,vars:0,consts:[["cdkColumnDef",""],["cdk-header-cell","",3,"text-align",4,"cdkHeaderCellDef"],["cdk-cell","",3,"text-align",4,"cdkCellDef"],["cdk-header-cell",""],["cdk-cell",""]],template:function(e,o){1&e&&(t.\u0275\u0275elementContainerStart(0,0),t.\u0275\u0275template(1,de,2,3,"th",1),t.\u0275\u0275template(2,ue,2,3,"td",2),t.\u0275\u0275elementContainerEnd())},dependencies:[k,v,m,H,L],encapsulation:2}),n})(),De=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[z.ScrollingModule]}),n})()}}]);
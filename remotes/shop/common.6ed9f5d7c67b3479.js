(self.webpackChunkshop=self.webpackChunkshop||[]).push([[592],{7866:(O,C,c)=>{c.r(C),c.d(C,{RemoteEntryModule:()=>s});var r=c(417),l=c(5294),S=c(9190),A=c(2264),o=c(8944),M=c(6776),b=c(1531),m=c(3970);function v(i,h){if(1&i){const a=o.\u0275\u0275getCurrentView();o.\u0275\u0275elementStart(0,"div")(1,"ui-welcome",1),o.\u0275\u0275listener("logoutHandler",function(){o.\u0275\u0275restoreView(a);const y=o.\u0275\u0275nextContext();return o.\u0275\u0275resetView(y.logout())}),o.\u0275\u0275elementEnd()()}if(2&i){const a=h.ngIf;o.\u0275\u0275advance(1),o.\u0275\u0275property("title","Hi "+a.name)("showLogoutButton",!0)}}let n=(()=>{class i{constructor(a,g,y){this.router=a,this.actions$=g,this.store=y,this.userInfo$=this.store.select(S.getAuthState).pipe((0,m.map)(j=>j.user)),this.destroyed$=new m.Subject}ngOnInit(){this.actions$.pipe((0,M.ofType)(S.logoutComplete),(0,m.takeUntil)(this.destroyed$)).subscribe(()=>{this.router.navigateByUrl("/")})}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}logout(){this.store.dispatch((0,S.logout)())}}return i.\u0275fac=function(a){return new(a||i)(o.\u0275\u0275directiveInject(l.Router),o.\u0275\u0275directiveInject(M.Actions),o.\u0275\u0275directiveInject(b.Store))},i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["mfe-nx-welcome"]],decls:2,vars:3,consts:[[4,"ngIf"],["bg","#086978",3,"title","showLogoutButton","logoutHandler"]],template:function(a,g){1&a&&(o.\u0275\u0275template(0,v,2,2,"div",0),o.\u0275\u0275pipe(1,"async")),2&a&&o.\u0275\u0275property("ngIf",o.\u0275\u0275pipeBind1(1,1,g.userInfo$))},dependencies:[r.NgIf,A.WelcomeComponent,r.AsyncPipe],encapsulation:2}),i})(),$=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["mfe-shop-entry"]],decls:1,vars:0,template:function(a,g){1&a&&o.\u0275\u0275element(0,"mfe-nx-welcome")},dependencies:[n],encapsulation:2}),i})(),s=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[r.CommonModule,A.UiModule,S.DataModule,l.RouterModule.forChild([{path:"",component:$}])]}),i})()},898:(O,C,c)=>{c.r(C),c.d(C,{AUTH_CONFIG:()=>h,AUTH_FEATURE_KEY:()=>E,AUTH_SERVICE:()=>I,Auth0Service:()=>N,AuthActionTypes:()=>l,AuthEffects:()=>w,AuthGuard:()=>k,AuthService:()=>g,DataModule:()=>V,KEY_BACK_URL:()=>y,LayoutService:()=>B,MenuService:()=>W,MyAuthService:()=>j,UserInfo:()=>a,authProvider:()=>x,authReducer:()=>F,checkLogin:()=>M,getAuthError:()=>H,getAuthState:()=>R,initialAuthState:()=>U,login:()=>S,loginFailure:()=>o,loginSuccess:()=>A,logout:()=>b,logoutComplete:()=>m});var r=c(1531),l=(()=>{return(e=l||(l={})).Login="[Login Page] Login",e.LoginComplete="[Login Page] Login Complete",e.LoginSuccess="[Auth API] Login Success",e.LoginFailure="[Auth API] Login Failure",e.CheckLogin="[Auth] Check Login",e.Logout="[Auth] Confirm Logout",e.LogoutComplete="[Auth] Logout Complete",l;var e})();const S=(0,r.createAction)(l.Login,(0,r.props)()),A=(0,r.createAction)(l.LoginSuccess,(0,r.props)()),o=(0,r.createAction)(l.LoginFailure,(0,r.props)()),M=(0,r.createAction)(l.CheckLogin),b=(0,r.createAction)(l.Logout,r.props),m=(0,r.createAction)(l.LogoutComplete);var v=c(6776),n=c(3970),$=c(3902),s=c(8944),i=c(2580);const h=new s.InjectionToken("auth.config");class a extends i.User{}class g{constructor(u,t){this.httpClient=u,this.authConfig=t}}const y="backUrl";let j=(()=>{class e extends g{constructor(t,p){super(t,p),this.user$=new n.BehaviorSubject(null),this.isAuthenticated$=new n.BehaviorSubject(!1),this.isLoggedIn$=this.user$.pipe((0,n.map)(d=>!!d)),this.isLoading$=new n.Subject}getId(){return e.id}isAuthenticated(){return console.log(this),this.isAuthenticated$}login(t){return t.pageUrl&&(this.loginPageUrl=t.pageUrl),t.requestUrl?("get"===t.requestMethod?this.httpClient.get(t.requestUrl):this.httpClient.post(t.requestUrl,t.requestBody)).pipe((0,n.map)(d=>(this.user$.next(d),this.user$.complete(),this.isAuthenticated$.next(!0),d))):(0,n.throwError)(()=>new Error("Username is required."))}getUser(){return this.user$}getAccessToken(){return this.user$.pipe((0,n.map)(t=>""))}logout(t){this.user$.next(null),this.user$.complete(),this.isAuthenticated$.next(!1)}}return e.id="my.auth",e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject($.HttpClient),s.\u0275\u0275inject(h))},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const I=new s.InjectionToken("auth.service"),x={provide:I,useClass:j,deps:[$.HttpClient,h,i.AuthService]};let w=(()=>{class e{constructor(t,p){this.actions$=t,this.authService=p,this.login$=(0,v.createEffect)(()=>this.actions$.pipe((0,v.ofType)(l.Login),(0,n.switchMap)(d=>this.authService.login(d).pipe((0,n.map)(f=>A(f)),(0,n.catchError)(f=>(0,n.of)(o({error:f}))))))),this.logout$=(0,v.createEffect)(()=>this.actions$.pipe((0,v.ofType)(l.Logout),(0,n.switchMap)(()=>{const d=this.authService.logout();return d instanceof n.Observable?d.pipe((0,n.map)(()=>m())):(0,n.of)(m())})))}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject(v.Actions),s.\u0275\u0275inject(I))},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const E="auth",U={isAuthenticated:!1,user:void 0},T=(0,r.createReducer)(U,(0,r.on)(S,e=>({...e,loaded:!1})),(0,r.on)(A,(e,u)=>({...e,isAuthenticated:!0,user:u})),(0,r.on)(o,(e,{error:u})=>({...e,error:u,isAuthenticated:!1})),(0,r.on)(m,e=>U));function F(e,u){return T(e,u)}const R=(0,r.createFeatureSelector)(E),H=(0,r.createSelector)(R,e=>e.error);var D=c(5294);let k=(()=>{class e{constructor(t,p){this.router=t,this.authService=p}canActivate(t,p){return this.authService.isAuthenticated$.pipe((0,n.map)(d=>{if(!d){let f=this.authService.authConfig.loginPageUrl||"/login";f=f.includes("?")?`${f}&${y}=${p.url}`:`${f}?${y}=${p.url}`,this.router.navigateByUrl(f)}return d}))}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject(D.Router),s.\u0275\u0275inject(I))},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),N=(()=>{class e extends g{constructor(t,p,d,f){super(t,p),this.auth0=d,this.store=f,this.user$=this.auth0.user$,this.isAuthenticated$=this.auth0.isAuthenticated$,this.isLoggedIn$=this.auth0.user$.pipe((0,n.map)(L=>!!L)),this.isLoading$=this.auth0.isLoading$,this.auth0.user$.subscribe(L=>{L&&this.store.dispatch(A(L))})}getId(){return e.id}isAuthenticated(){return this.auth0.isAuthenticated$}login(t){return this.auth0.loginWithRedirect({redirect_uri:location.href,appState:{target:t.backUrl||"/"}}).pipe((0,n.switchMap)(()=>(0,n.throwError)(()=>new Error("Redirection to server..."))))}getAccessToken(){return this.auth0.getAccessTokenSilently()}logout(t){this.auth0.logout({returnTo:t})}getUser(){return this.auth0.user$}}return e.id="auth0",e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject($.HttpClient),s.\u0275\u0275inject(h),s.\u0275\u0275inject(i.AuthService),s.\u0275\u0275inject(r.Store))},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();var P=c(417);let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({providers:[x],imports:[P.CommonModule,r.StoreModule.forFeature(E,F),v.EffectsModule.forFeature([w])]}),e})(),B=(()=>{class e{constructor(){this.config={ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14},this.state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1},this.configUpdate=new n.Subject,this.overlayOpen=new n.Subject,this.configUpdate$=this.configUpdate.asObservable(),this.overlayOpen$=this.overlayOpen.asObservable()}onMenuToggle(){this.isOverlay()&&(this.state.overlayMenuActive=!this.state.overlayMenuActive,this.state.overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.state.staticMenuDesktopInactive=!this.state.staticMenuDesktopInactive:(this.state.staticMenuMobileActive=!this.state.staticMenuMobileActive,this.state.staticMenuMobileActive&&this.overlayOpen.next(null))}onOverlaySubmenuOpen(){this.overlayOpen.next(null)}showProfileSidebar(){this.state.profileSidebarVisible=!this.state.profileSidebarVisible,this.state.profileSidebarVisible&&this.overlayOpen.next(null)}showConfigSidebar(){this.state.configSidebarVisible=!0}isOverlay(){return"overlay"===this.config.menuMode}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this.configUpdate.next(this.config)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),W=(()=>{class e{constructor(){this.menuSource=new n.Subject,this.resetSource=new n.Subject,this.menuSource$=this.menuSource.asObservable(),this.resetSource$=this.resetSource.asObservable()}onMenuStateChange(t){this.menuSource.next(t)}reset(){this.resetSource.next(!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
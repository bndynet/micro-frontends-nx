(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{9165:(G,b,h)=>{h.r(b),h.d(b,{AUTH_CONFIG:()=>f,AUTH_FEATURE_KEY:()=>L,AUTH_SERVICE:()=>p,Auth0Service:()=>P,AuthActionTypes:()=>a,AuthEffects:()=>E,AuthGuard:()=>H,AuthService:()=>m,DataModule:()=>V,KEY_BACK_URL:()=>y,LayoutService:()=>B,MyAuthService:()=>U,UserInfo:()=>x,authProvider:()=>C,authReducer:()=>I,checkLogin:()=>w,getAuthError:()=>R,getAuthState:()=>k,initialAuthState:()=>M,login:()=>j,loginFailure:()=>A,loginSuccess:()=>g,logout:()=>O,logoutComplete:()=>d});var r=h(8944),F=h(417),o=h(1531),l=h(6776),a=(()=>{return(t=a||(a={})).Login="[Login Page] Login",t.LoginComplete="[Login Page] Login Complete",t.LoginSuccess="[Auth API] Login Success",t.LoginFailure="[Auth API] Login Failure",t.CheckLogin="[Auth] Check Login",t.Logout="[Auth] Confirm Logout",t.LogoutComplete="[Auth] Logout Complete",a;var t})();const j=(0,o.createAction)(a.Login,(0,o.props)()),g=(0,o.createAction)(a.LoginSuccess,(0,o.props)()),A=(0,o.createAction)(a.LoginFailure,(0,o.props)()),w=(0,o.createAction)(a.CheckLogin),O=(0,o.createAction)(a.Logout,o.props),d=(0,o.createAction)(a.LogoutComplete);var i=h(3970),S=h(3902),$=h(2580);const f=new r.InjectionToken("auth.config");class x extends $.User{}class m{constructor(s,e){this.httpClient=s,this.authConfig=e}}const y="backUrl";let U=(()=>{class t extends m{constructor(e,u){super(e,u),this.user$=new i.BehaviorSubject(null),this.isAuthenticated$=new i.BehaviorSubject(!1),this.isLoggedIn$=this.user$.pipe((0,i.map)(n=>!!n)),this.isLoading$=new i.Subject}getId(){return t.id}isAuthenticated(){return console.log(this),this.isAuthenticated$}login(e){return e.pageUrl&&(this.loginPageUrl=e.pageUrl),e.requestUrl?("get"===e.requestMethod?this.httpClient.get(e.requestUrl):this.httpClient.post(e.requestUrl,e.requestBody)).pipe((0,i.map)(n=>(this.user$.next(n),this.user$.complete(),this.isAuthenticated$.next(!0),n))):(0,i.throwError)(()=>new Error("Username is required."))}getUser(){return this.user$}getAccessToken(){return this.user$.pipe((0,i.map)(e=>""))}logout(e){this.user$.next(null),this.user$.complete(),this.isAuthenticated$.next(!1)}}return t.id="my.auth",t.\u0275fac=function(e){return new(e||t)(r.\u0275\u0275inject(S.HttpClient),r.\u0275\u0275inject(f))},t.\u0275prov=r.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const p=new r.InjectionToken("auth.service"),C={provide:p,useClass:U,deps:[S.HttpClient,f,$.AuthService]};let E=(()=>{class t{constructor(e,u){this.actions$=e,this.authService=u,this.login$=(0,l.createEffect)(()=>this.actions$.pipe((0,l.ofType)(a.Login),(0,i.switchMap)(n=>this.authService.login(n).pipe((0,i.map)(c=>g(c)),(0,i.catchError)(c=>(0,i.of)(A({error:c}))))))),this.logout$=(0,l.createEffect)(()=>this.actions$.pipe((0,l.ofType)(a.Logout),(0,i.switchMap)(()=>{const n=this.authService.logout();return n instanceof i.Observable?n.pipe((0,i.map)(()=>d())):(0,i.of)(d())})))}}return t.\u0275fac=function(e){return new(e||t)(r.\u0275\u0275inject(l.Actions),r.\u0275\u0275inject(p))},t.\u0275prov=r.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const L="auth",M={isAuthenticated:!1,user:void 0},T=(0,o.createReducer)(M,(0,o.on)(j,t=>({...t,loaded:!1})),(0,o.on)(g,(t,s)=>({...t,isAuthenticated:!0,user:s})),(0,o.on)(A,(t,{error:s})=>({...t,error:s,isAuthenticated:!1})),(0,o.on)(d,t=>M));function I(t,s){return T(t,s)}const k=(0,o.createFeatureSelector)(L),R=(0,o.createSelector)(k,t=>t.error);var D=h(5294);let H=(()=>{class t{constructor(e,u){this.router=e,this.authService=u}canActivate(e,u){return this.authService.isAuthenticated$.pipe((0,i.map)(n=>{if(!n){let c=this.authService.authConfig.loginPageUrl||"/login";c=c.includes("?")?`${c}&${y}=${u.url}`:`${c}?${y}=${u.url}`,this.router.navigateByUrl(c)}return n}))}}return t.\u0275fac=function(e){return new(e||t)(r.\u0275\u0275inject(D.Router),r.\u0275\u0275inject(p))},t.\u0275prov=r.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),P=(()=>{class t extends m{constructor(e,u,n,c){super(e,u),this.auth0=n,this.store=c,this.user$=this.auth0.user$,this.isAuthenticated$=this.auth0.isAuthenticated$,this.isLoggedIn$=this.auth0.user$.pipe((0,i.map)(v=>!!v)),this.isLoading$=this.auth0.isLoading$,this.auth0.user$.subscribe(v=>{v&&this.store.dispatch(g(v))})}getId(){return t.id}isAuthenticated(){return this.auth0.isAuthenticated$}login(e){return this.auth0.loginWithRedirect({redirect_uri:location.href,appState:{target:e.backUrl||"/"}}).pipe((0,i.switchMap)(()=>(0,i.throwError)(()=>new Error("Redirection to server..."))))}getAccessToken(){return this.auth0.getAccessTokenSilently()}logout(e){this.auth0.logout({returnTo:e})}getUser(){return this.auth0.user$}}return t.id="auth0",t.\u0275fac=function(e){return new(e||t)(r.\u0275\u0275inject(S.HttpClient),r.\u0275\u0275inject(f),r.\u0275\u0275inject($.AuthService),r.\u0275\u0275inject(o.Store))},t.\u0275prov=r.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=r.\u0275\u0275defineInjector({providers:[C],imports:[F.CommonModule,o.StoreModule.forFeature(L,I),l.EffectsModule.forFeature([E])]}),t})(),B=(()=>{class t{constructor(){this.config={ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14},this.state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1},this.configUpdate=new i.Subject,this.overlayOpen=new i.Subject,this.configUpdate$=this.configUpdate.asObservable(),this.overlayOpen$=this.overlayOpen.asObservable()}onMenuToggle(){this.isOverlay()&&(this.state.overlayMenuActive=!this.state.overlayMenuActive,this.state.overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.state.staticMenuDesktopInactive=!this.state.staticMenuDesktopInactive:(this.state.staticMenuMobileActive=!this.state.staticMenuMobileActive,this.state.staticMenuMobileActive&&this.overlayOpen.next(null))}onOverlaySubmenuOpen(){this.overlayOpen.next(null)}showProfileSidebar(){this.state.profileSidebarVisible=!this.state.profileSidebarVisible,this.state.profileSidebarVisible&&this.overlayOpen.next(null)}showConfigSidebar(){this.state.configSidebarVisible=!0}isOverlay(){return"overlay"===this.config.menuMode}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this.configUpdate.next(this.config)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
(self.webpackChunkpages=self.webpackChunkpages||[]).push([[9592],{9592:(w,u,y)=>{y.r(u),y.d(u,{ConnectedOverlayScrollHandler:()=>b,DomHandler:()=>m});let m=(()=>{class p{static addClass(t,e){t.classList?t.classList.add(e):t.className+=" "+e}static addMultipleClasses(t,e){if(t.classList){let i=e.trim().split(" ");for(let l=0;l<i.length;l++)t.classList.add(i[l])}else{let i=e.split(" ");for(let l=0;l<i.length;l++)t.className+=" "+i[l]}}static removeClass(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}static hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return t?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var l=0;l<e.length;l++){if(e[l]==t)return i;1==e[l].nodeType&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],l=0;for(var s=0;s<i.length;s++){if(i[s]==t)return l;i[s].attributes&&i[s].attributes[e]&&1==i[s].nodeType&&l++}return-1}static relativePosition(t,e){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const l=e.offsetHeight,s=e.getBoundingClientRect(),o=this.getViewport();let r,n;s.top+l+i.height>o.height?(r=-1*i.height,t.style.transformOrigin="bottom",s.top+r<0&&(r=-1*s.top)):(r=l,t.style.transformOrigin="top"),n=i.width>o.width?-1*s.left:s.left+i.width>o.width?-1*(s.left+i.width-o.width):0,t.style.top=r+"px",t.style.left=n+"px"}static absolutePosition(t,e){let h,g,i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=i.height,s=i.width,o=e.offsetHeight,r=e.offsetWidth,n=e.getBoundingClientRect(),a=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),f=this.getViewport();n.top+o+l>f.height?(h=n.top+a-l,t.style.transformOrigin="bottom",h<0&&(h=a)):(h=o+n.top+a,t.style.transformOrigin="top"),g=n.left+s>f.width?Math.max(0,n.left+c+r-s):n.left+c,t.style.top=h+"px",t.style.left=g+"px"}static getParents(t,e=[]){return null===t.parentNode?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t);const l=/(auto|scroll)/,s=o=>{let r=window.getComputedStyle(o,null);return l.test(r.getPropertyValue("overflow"))||l.test(r.getPropertyValue("overflowX"))||l.test(r.getPropertyValue("overflowY"))};for(let o of i){let r=1===o.nodeType&&o.dataset.scrollselectors;if(r){let n=r.split(",");for(let a of n){let c=this.findSingle(o,a);c&&s(c)&&e.push(c)}}9!==o.nodeType&&s(o)&&e.push(o)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),l=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,r=t.getBoundingClientRect(),a=e.getBoundingClientRect().top+document.body.scrollTop-(r.top+document.body.scrollTop)-l-o,c=t.scrollTop,f=t.clientHeight,h=this.getOuterHeight(e);a<0?t.scrollTop=c+a:a+h>f&&(t.scrollTop=c+a-f+h)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,l=0,s=function(){l=+t.style.opacity.replace(",",".")+((new Date).getTime()-i)/e,t.style.opacity=l,i=+new Date,+l<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,e){var i=1,o=50/e;let r=setInterval(()=>{(i-=o)<=0&&(i=0,clearInterval(r)),t.style.opacity=i},50)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return-1!==[].indexOf.call(document.querySelectorAll(s),this)}).call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let l=getComputedStyle(t);i+=parseFloat(l.marginLeft)+parseFloat(l.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let l=getComputedStyle(t);i+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,l=e.getElementsByTagName("body")[0];return{width:t.innerWidth||i.clientWidth||l.clientWidth,height:t.innerHeight||i.clientHeight||l.clientHeight}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){return navigator.userAgent}static isIE(){var t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||(t.indexOf("Trident/")>0?(t.indexOf("rv:"),!0):t.indexOf("Edge/")>0)}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else{if(!e.el||!e.el.nativeElement)throw"Cannot append "+e+" to "+t;e.el.nativeElement.appendChild(t)}}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else{if(!e.el||!e.el.nativeElement)throw"Cannot remove "+t+" from "+e;e.el.nativeElement.removeChild(t)}}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}{if(null!==this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(null!==this.calculatedScrollbarHeight)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return null===t.offsetParent}static getFocusableElements(t){let e=p.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]):not(.p-disabled)'),i=[];for(let l of e)"none"!=getComputedStyle(l).display&&"hidden"!=getComputedStyle(l).visibility&&i.push(l);return i}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}}return p.zindex=1e3,p.calculatedScrollbarWidth=null,p.calculatedScrollbarHeight=null,p})();class b{constructor(d,t=(()=>{})){this.element=d,this.listener=t}bindScrollListener(){this.scrollableParents=m.getScrollableParents(this.element);for(let d=0;d<this.scrollableParents.length;d++)this.scrollableParents[d].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let d=0;d<this.scrollableParents.length;d++)this.scrollableParents[d].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5737],{95737:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return O}});var n=i(92777),o=i(82262),r=i(10748),l=i(45959),a=i(63553),s=i(37247),d=i(59499),c=i(67294),u=i(75589),h=i(94184),m=i.n(h),f=i(29334),p=i.n(f),x=i(68816),v=i(25304),_=i.n(v),g=i(83945),E=i(27490),C=i(39819),j=i(23059),S=i(85893),y=function(e){(0,l.Z)(u,e);var t,i,c=(t=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(i){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,a.Z)(this,e)});function u(e){var t;return(0,n.Z)(this,u),t=c.call(this,e),(0,d.Z)((0,r.Z)(t),"onMouseEnter",(function(){t.state.isMobile||t.setState({isHovering:!0})})),(0,d.Z)((0,r.Z)(t),"onMouseLeave",(function(){t.state.isMobile||t.setState({isHovering:!1})})),(0,d.Z)((0,r.Z)(t),"onResize",(function(){if(t.root){var e=.3333*t.root.getBoundingClientRect().width;t.triangle.style.borderRightWidth=e+"px",t.triangle.style.borderBottomWidth=.3*e+"px",t.setState({isMobile:window.innerWidth<992})}})),t.state={active:!1,isHovering:!1},t}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){x.Z&&(window.addEventListener("resize",this.onResize),this.onResize())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e,t,i=this,n=this.props,o=n.item,r=n.hideOnSmall,l=n.hideOnLarge,a=n.isExperienceEditorMode,s=o.fields,c=s.title,u=s.shortText,h=s.longText,f=s.link,p=s.image,x=s.video,v=s.type,j=s.fullVideo,y=s.buttonText,b=this.state.isMobile,w=(0,C.w)(x),Z=(0,E.a7)(f),L=(0,C.w)(j),O=L&&y&&y.value,M=v&&(null===(e=v.fields.cssClass)||void 0===e?void 0:e.value);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{ref:function(e){return i.root=e},className:m()(_().root,_()[M],"disable-button-theme",(t={},(0,d.Z)(t,_().isExperienceEditorMode,a),(0,d.Z)(t,_().hasVideo,w),(0,d.Z)(t,_().hideOnSmall,r),(0,d.Z)(t,_().active,this.state.active||this.props.active||b),(0,d.Z)(t,"clamp",!r),(0,d.Z)(t,"d-lg-none",l),t)),onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,children:[(0,S.jsx)("div",{className:_().colorTriangle,ref:function(e){return i.triangle=e}}),(0,S.jsx)("div",{className:m()(_().cardTop,(0,d.Z)({},_().hasVideo,w)),children:(0,S.jsxs)("div",{className:_().mediaWrapper,children:[(0,S.jsx)("div",{className:_().imageWrapper,children:(0,S.jsx)(g.Ee,{field:p,paddingPlaceholder:!0})}),!b&&w&&(0,S.jsx)(g.pY,{src:w,isPlaying:this.state.active||this.state.isHovering,loop:"loop",restartOnPlay:!1,className:_().videoLooped})]})}),(0,S.jsxs)("div",{className:_().cardBottom,children:[!b&&(0,S.jsxs)("div",{className:_().textContainer,children:[(0,S.jsx)(g.xv,{tag:"h3",field:c,className:_().title}),(0,S.jsx)("div",{className:_().shortText,children:(0,S.jsx)(g.Vt,{tag:"p",field:u})})]}),a&&(0,S.jsx)("span",{style:{"font-weight":"bold"},children:"Experience Editor: fields down below for `'`on hover`'` display"}),(0,S.jsxs)("div",{className:_().activeTextContainer,children:[b&&(0,S.jsx)(g.xv,{tag:"h3",field:c,className:m()(_().title,"f5")}),(0,S.jsx)("div",{className:_().longText,children:(0,S.jsx)(g.Vt,{tag:"p",field:h})}),(a||Z||O)&&(0,S.jsx)("div",{className:_().button,children:O?(0,S.jsx)(g.lU,{title:y.value,theme:"button light-secondary",url:L}):(0,S.jsx)(g.rU,{field:f,defaultTheme:"button light-secondary"})})]})]})]})})}}]),u}(c.PureComponent),b=(0,j.p)(y),w=i(15214),Z=i(57208),L=function(e){(0,l.Z)(u,e);var t,i,c=(t=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(i){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,a.Z)(this,e)});function u(e){var t;return(0,n.Z)(this,u),t=c.call(this,e),(0,d.Z)((0,r.Z)(t),"handleResize",(function(){t.setState({isMobile:window.innerWidth<768},(function(){t.state.isMobile?(window.removeEventListener("scroll",t.handleScroll),t.resetScrollColumns()):(window.addEventListener("scroll",t.handleScroll),t.handleScroll())}))})),(0,d.Z)((0,r.Z)(t),"handleScroll",(function(){for(var e=document.getElementsByClassName(p().libraScroll),i=0;i<e.length;i++)for(var n=e[i],o=t.distanceFromBottom(n),r=n.getElementsByClassName(p().libraScrollColumn),l=0;l<r.length;l++){var a=r[l],s=a.getAttribute(t.getScrollSpeedDataAttribute()),d=s?parseInt(s):null,c=t.getTranslate(d,o);a.style.transform="translate(0, ".concat(c,"px)")}})),(0,d.Z)((0,r.Z)(t),"getScrollSpeedDataAttribute",(function(){var e=window.innerWidth||document.documentElement.clientWidth;return e>1200?"data-scroll-speed-xl":e>=768?"data-scroll-speed-md":"data-scroll-speed"})),(0,d.Z)((0,r.Z)(t),"getTranslate",(function(e,t){if(t<0)return 0;if(!e)return 0;var i=-e/20*t;return i<-200?-200:i>200?200:i})),(0,d.Z)((0,r.Z)(t),"distanceFromBottom",(function(e){var t=e.getBoundingClientRect();return(window.innerHeight||document.documentElement.clientWidth)-t.top})),(0,d.Z)((0,r.Z)(t),"resetScrollColumns",(function(){var e=document.getElementsByClassName(p().libraScrollColumn);Array.prototype.forEach.call(e,(function(e){e.removeAttribute("style")}))})),t.state={isMobile:x.Z&&window.innerWidth<768},t}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){x.Z&&(window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.handleResize())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.fields,t=e.title,i=e.text,n=e.items,o=this.props.sitecoreContext.pageEditing,r=t&&(t.value||o),l=i&&(i.value||o);return n?(0,S.jsxs)("div",{className:p().root,children:[(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:m()(p().libraScroll,"row justify-content-center"),children:[r&&(0,S.jsx)("div",{className:m()(p().heading,"col-12 col-md-6"),children:(0,S.jsx)(g.xv,{tag:"h2",field:t,className:"f5 f2-lg"})}),l&&(0,S.jsx)("div",{className:m()(p().subHeading,"col-12 col-md-8"),children:(0,S.jsx)(g.xv,{tag:"p",field:i})})]})}),(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:m()(p().libraScroll,"row"),children:[(0,S.jsxs)("div",{className:m()(p().libraScrollColumn,"col col-12 col-md-6 col-lg-3"),"data-scroll-speed":"0","data-scroll-speed-md":"0","data-scroll-speed-xl":"0",children:[n[0]&&(0,S.jsx)(b,{item:n[0],hideOnSmall:!1,hideOnLarge:!1,isExperienceEditorMode:o}),n[2]&&(0,S.jsx)(b,{item:n[2],hideOnSmall:!1,hideOnLarge:!0,isExperienceEditorMode:o}),n[4]&&(0,S.jsx)(b,{item:n[4],hideOnSmall:!1,hideOnLarge:!0,isExperienceEditorMode:o}),n[6]&&(0,S.jsx)(b,{item:n[6],hideOnSmall:!1,hideOnLarge:!1,isExperienceEditorMode:o})]}),(0,S.jsxs)("div",{className:m()(p().libraScrollColumn,"col col-12 col-md-6 col-lg-3"),"data-scroll-speed":"1","data-scroll-speed-md":"1","data-scroll-speed-xl":"1.5",children:[n[1]&&(0,S.jsx)(b,{item:n[1],hideOnSmall:!1,hideOnLarge:!1,isExperienceEditorMode:o}),n[3]&&(0,S.jsx)(b,{item:n[3],hideOnSmall:!1,hideOnLarge:!0,isExperienceEditorMode:o}),n[4]&&(0,S.jsx)(b,{item:n[4],hideOnSmall:!0,hideOnLarge:!1,isExperienceEditorMode:o}),n[5]&&(0,S.jsx)(b,{item:n[5],hideOnSmall:!1,hideOnLarge:!0,isExperienceEditorMode:o}),n[7]&&(0,S.jsx)(b,{item:n[7],hideOnSmall:!1,hideOnLarge:!0,isExperienceEditorMode:o})]}),(0,S.jsxs)("div",{className:m()(p().libraScrollColumn,"col col-12 col-md-6 col-lg-3"),"data-scroll-speed":"0","data-scroll-speed-md":"-0.5","data-scroll-speed-xl":"-0.5",children:[n[2]&&(0,S.jsx)(b,{item:n[2],hideOnSmall:!0,hideOnLarge:!1,isExperienceEditorMode:o}),n[7]&&(0,S.jsx)(b,{item:n[7],hideOnSmall:!0,hideOnLarge:!1,isExperienceEditorMode:o})]}),(0,S.jsxs)("div",{className:m()(p().libraScrollColumn,"col col-12 col-md-6 col-lg-3"),"data-scroll-speed":"0","data-scroll-speed-md":"0.5","data-scroll-speed-xl":"1.25",children:[n[3]&&(0,S.jsx)(b,{item:n[3],hideOnSmall:!0,hideOnLarge:!1,isExperienceEditorMode:o}),n[5]&&(0,S.jsx)(b,{item:n[5],hideOnSmall:!0,hideOnLarge:!1,isExperienceEditorMode:o})]})]})})]}):(console.log("There are no items in InfoCardGallery component"),null)}}]),u}(c.Component),O=(0,Z.qC)((0,w.Z)({on:[["visible",function(){return{rootMargin:"200px"}}]]}),(0,u.withSitecoreContext)({updatable:!0}),j.p)(L)},25304:function(e){e.exports={root:"infoCard_root__lCuiY",isExperienceEditorMode:"infoCard_isExperienceEditorMode__dk28c",cardBottom:"infoCard_cardBottom__E78Ar",textContainer:"infoCard_textContainer__0ITu1",activeTextContainer:"infoCard_activeTextContainer__GV8Jd",hideOnSmall:"infoCard_hideOnSmall__UV_xe",colorTriangle:"infoCard_colorTriangle__yLajF",other:"infoCard_other__NXVJ_",hardware:"infoCard_hardware__G2Jzy",software:"infoCard_software__estgc",cardTop:"infoCard_cardTop__nFYIk",mediaWrapper:"infoCard_mediaWrapper__SlL0f",imageWrapper:"infoCard_imageWrapper__yTpSD",videoLooped:"infoCard_videoLooped__Z_dAa",title:"infoCard_title__R9RJ1",shortText:"infoCard_shortText__kk59g",longText:"infoCard_longText__8QljB",button:"infoCard_button__oPkhF",active:"infoCard_active__QU_yc",hasVideo:"infoCard_hasVideo__58S1L"}},29334:function(e){e.exports={root:"infoCardGallery_root__7fWon",heading:"infoCardGallery_heading__0L78f",subHeading:"infoCardGallery_subHeading__QwfPJ",libraScroll:"infoCardGallery_libraScroll___kkLw",libraScrollColumn:"infoCardGallery_libraScrollColumn__6Lq8G"}}}]);
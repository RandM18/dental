(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7994],{67994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(92777),r=n(82262),o=n(10748),a=n(45959),l=n(63553),s=n(37247),c=n(59499),d=n(75589),u=n(67294),f=n(94184),h=n.n(f),w=n(15690),g=n.n(w),m=n(80668),v=n(66351),_=n.n(v),C=n(23059),p=n(85893),x=(0,u.memo)((0,C.p)((function(e){var t=e.className,n=e.reveal;return(0,p.jsx)("div",{className:h()(_().root,t||"",n?_().reveal:""),children:(0,p.jsx)("span",{className:_().innerCircle})})}))),Z=n(83945),b=n(83090),y=n.n(b),j=(0,u.memo)((0,C.p)((function(e){var t=e.image,n=e.title,i=e.text,r=e.titleClass,o=e.reveal,a=e.left,l=e.editor,s=a?y().left:y().right;return(0,p.jsx)("div",{className:h()(y().root,o?y().reveal:"",l?"":s,l?y().editor:""),children:(0,p.jsxs)("div",{className:y().cardContainer,children:[(0,p.jsx)("div",{className:y().imageContainer,children:(0,p.jsx)(Z.Ee,{field:t,paddingPlaceholder:!0})}),(0,p.jsx)("div",{className:h()(y().titleContainer,a?y().left:y().right),children:(0,p.jsx)(Z.xv,{tag:"h3",className:h()(y().title,"f4",r),field:n})}),(0,p.jsx)("div",{className:y().textContainer,children:(0,p.jsx)(Z.Vt,{className:h()(y().text,"typeset"),field:i})})]})})}))),k=n(68816),R=n(15214),N=n(57208);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){(0,a.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){(0,i.Z)(this,f),n=d.call(this,e),(0,c.Z)((0,o.Z)(n),"anchorPoints",[]),(0,c.Z)((0,o.Z)(n),"goBackwards",!1),(0,c.Z)((0,o.Z)(n),"lineHeightMax",0),(0,c.Z)((0,o.Z)(n),"animationRequest",null),(0,c.Z)((0,o.Z)(n),"root",u.createRef()),(0,c.Z)((0,o.Z)(n),"line",u.createRef()),(0,c.Z)((0,o.Z)(n),"cardContainer",u.createRef()),(0,c.Z)((0,o.Z)(n),"animationTarget",0),(0,c.Z)((0,o.Z)(n),"initializeLineCheck",(function(){var e=n.state.editor;if(!e){var t=n.root.current.getBoundingClientRect();n.dotPlacement(),n.line&&n.line.current.firstChild&&t.top-.4*window.innerHeight<=0&&(n.animationTarget=Math.abs(t.top-window.innerHeight),n.line.current.firstChild.y2.baseVal.value=n.animationTarget),n.setState({currentCard:n.getCurrentState()})}window.setTimeout((function(){n.setState({loading:!1}),e||(n.animationRequest=window.requestAnimationFrame(n.lineScroll))}),1e3)})),(0,c.Z)((0,o.Z)(n),"lineScroll",(function(){if(n.animationRequest=window.requestAnimationFrame(n.lineScroll),n.root.current&&!(n.root.current.getBoundingClientRect().top-.75*window.innerHeight>=0)&&n.line&&n.line.current.firstChild){var e=n.line.current.firstChild.y2.baseVal.value,t=n.state.currentCard;if(!(.1>=Math.abs(e-n.animationTarget))){var i=Math.abs(n.animationTarget-e),r=Math.min(60,i/750*60),o=e;e<n.animationTarget?o+=r:n.goBackwards&&e>n.animationTarget&&(o-=r),n.line.current.firstChild.y2.baseVal.value=o;var a=n.getCurrentState();t!==a&&n.setState({currentCard:a})}}})),(0,c.Z)((0,o.Z)(n),"getCurrentState",(function(){for(var e=n.state.isMobile,t=n.root.current.getBoundingClientRect(),i=n.cardContainer.current.getElementsByClassName(g().cardTitle),r=-1,o=0;o<i.length;o++){var a=n.line.current.firstChild.y2.baseVal.value,l=e?25:10;if(!(i[o].getBoundingClientRect().top-(t.top+a)-l<0))break;r=o}return r})),(0,c.Z)((0,o.Z)(n),"onScroll",(function(){var e=n.root.current.getBoundingClientRect();n.animationTarget=Math.abs(e.top-.85*window.innerHeight),n.animationTarget<0?n.animationTarget=0:n.animationTarget>n.lineHeightMax&&(n.animationTarget=n.lineHeightMax)})),(0,c.Z)((0,o.Z)(n),"onResize",(function(){var e=n.state,t=e.isMobile;if(!e.editor){var i=n.root.current.getBoundingClientRect().height;n.lineHeightMax!==i&&(n.line.current.height.baseVal.value=i,n.lineHeightMax=i)}window.innerWidth<768?t||n.setState({isMobile:!0},n.dotPlacement):t&&n.setState({isMobile:!1},n.dotPlacement),n.dotPlacement()})),(0,c.Z)((0,o.Z)(n),"dotPlacement",(function(){if(!n.state.editor){var e=n.cardContainer.current.getElementsByClassName(g().dot),t=n.cardContainer.current.getElementsByClassName(g().cardContainer),i=n.cardContainer.current.getElementsByClassName(g().cardTitle),r=n.state.isMobile;if(i)for(var o=0;o<t.length;o++){var a=t[o].getBoundingClientRect(),l=i[o].getBoundingClientRect(),s=e[o],c=Math.abs(a.top-l.top)+.35*l.height;s.style.top="".concat(c,"px");var d="";if(r){var u=n.line.current.getBoundingClientRect();d="".concat(-(document.documentElement.clientWidth-a.width)/2+(u.x-10),"px")}else d="".concat(a.width/2-10,"px");s.style.left=d}}})),(0,c.Z)((0,o.Z)(n),"showMore",(function(){var e=n.state,t=e.cardsToShow,i=e.batch,r=n.props.fields.showInBatchOf,o=i+1;if(r[o]){var a=t+r[o].batch;n.setState({cardsToShow:a,batch:o},n.onScroll)}})),(0,c.Z)((0,o.Z)(n),"inViewHandler",(function(){n.onResize()}));var t,n,r=e.fields.showInBatchOf&&e.fields.showInBatchOf[0]&&e.fields.showInBatchOf[0].batch||(null===(t=e.fields.items)||void 0===t?void 0:t.length);return n.state={currentCard:-1,isMobile:0,loading:!0,editor:!1,cardsToShow:r,batch:0},n}return(0,r.Z)(f,[{key:"componentDidMount",value:function(){var e=this;this.setState({editor:this.props.sitecoreContext.pageEditing},(function(){k.Z&&(window.addEventListener("scroll",e.onScroll),window.addEventListener("resize",e.onResize),e.onResize(),e.onScroll(),e.initializeLineCheck())}))}},{key:"componentDidUpdate",value:function(){var e;null!==(e=this.root.current)&&void 0!==e&&e.getBoundingClientRect().width&&this.onResize()}},{key:"componentWillUnmount",value:function(){k.Z&&(window.cancelAnimationFrame(this.animationRequest),window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var e=this.props.fields,t=e.items,n=e.showMoreText,i=this.state,r=i.currentCard,o=i.isMobile,a=i.loading,l=i.editor,s=i.cardsToShow;return(0,p.jsxs)("div",{className:h()(g().root,a?g().loading:"",l?"":g().dots),ref:this.root,children:[l?(0,p.jsx)("div",{className:g().editor,children:(0,p.jsx)("div",{className:g().workflowContainer,children:t&&t.map((function(e,t){return(0,p.jsx)("div",{className:h()(g().cardContainer,"col-8"),children:(0,p.jsx)(j,S({editor:l,left:!o&&(t+1)%2,reveal:l},e.fields))},t)}))})}):(0,p.jsxs)("div",{children:[(0,p.jsx)("svg",{ref:this.line,className:g().line,height:"0",width:"10",children:(0,p.jsx)("line",{x1:"0.5",y1:"0",x2:"0.5",y2:"0"})}),(0,p.jsx)(m.Z,{onInView:this.inViewHandler,intoViewMargin:"20%",classNameInView:g().reveal,classNameNotInView:g().hide,children:(0,p.jsx)("div",{className:g().workflowContainer,ref:this.cardContainer,children:t&&t.map((function(e,n){return n<=s-1?(0,p.jsxs)("div",{className:h()(g().cardContainer,"col-8",0!==n?g().closerDistance:""),style:{zIndex:t.length-n},children:[(0,p.jsx)(x,{left:!o&&(n+1)%2,reveal:r>=n,className:g().dot}),(0,p.jsx)(j,S({left:!o&&(n+1)%2,reveal:r>=n,titleClass:g().cardTitle},e.fields))]},n):""}))})})]}),s<t.length&&(0,p.jsx)(Z.zx,{className:h()(g().button,(0,c.Z)({},g().show,s===r+1)),field:n,theme:"button corporate-primary",handleClick:this.showMore})]})}}]),f}(u.Component),B=(0,N.qC)((0,R.Z)({on:[["visible",function(){return{rootMargin:"200px"}}]]}),(0,d.withSitecoreContext)({updatable:!0}),C.p)(T)},83090:function(e){e.exports={root:"card_root__hPY_h",editor:"card_editor__IQWk_",right:"card_right__msc4W",left:"card_left__mVXXs",reveal:"card_reveal__H1jyI",cardContainer:"card_cardContainer__3AiTP",titleContainer:"card_titleContainer__9v6R7"}},66351:function(e){e.exports={root:"dot_root__KtLgP",reveal:"dot_reveal__L8AF2",innerCircle:"dot_innerCircle__1ZLIl"}},15690:function(e){e.exports={root:"workflow_root__9CiiA",loading:"workflow_loading__F5CBh",line:"workflow_line___KL3P",dots:"workflow_dots__MAOCD",workflowContainer:"workflow_workflowContainer__5RNqr",cardContainer:"workflow_cardContainer__W_rYL",closerDistance:"workflow_closerDistance__qkyTg",dot:"workflow_dot__9QncJ",button:"workflow_button___qlV_",show:"workflow_show__fGwhZ",editor:"workflow_editor__5wj3R",cardTitle:"workflow_cardTitle__GyXj3"}}}]);
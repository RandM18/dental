(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5148],{25148:function(e,t,n){"use strict";n.r(t);var i=n(92777),a=n(82262),s=n(10748),r=n(45959),c=n(63553),o=n(37247),l=n(59499),d=n(75589),u=n(67294),p=n(94184),f=n.n(p),m=n(61350),_=n.n(m),h=n(83945),b=n(73122),x=n(23059),v=n(15214),C=n(57208),g=n(85893),N=function(e){(0,r.Z)(u,e);var t,n,d=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return(0,c.Z)(this,e)});function u(){var e;(0,i.Z)(this,u);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=d.call.apply(d,[this].concat(n)),(0,l.Z)((0,s.Z)(e),"state",{activeItem:0}),(0,l.Z)((0,s.Z)(e),"handleTabChange",(function(t){e.props.sitecoreContext.pageEditing||e.setState({activeItem:t})})),(0,l.Z)((0,s.Z)(e),"renderPanel",(function(e){var t=e.tabText,n=e.text,i=e.image;return(0,g.jsxs)("div",{className:f()("container",_().panel),children:[(0,g.jsx)(h.xv,{tag:"div",field:t,className:_().panelTitle}),(0,g.jsxs)("div",{className:"row justify-content-center",children:[(0,g.jsx)("div",{className:f()("col-12 col-md-6 col-lg-4 offset-lg-1",_().textContainer),children:(0,g.jsx)(h.Vt,{className:"typeset",field:n})}),(0,g.jsx)("div",{className:f()("col-12 col-md-6",_().imageContainer),children:(0,g.jsx)(h.Ee,{field:i,paddingPlaceholder:!0})})]})]})})),e}return(0,a.Z)(u,[{key:"render",value:function(){var e=this,t=this.props,n=t.fields,i=t.sitecoreContext,a=n.items,s=this.state.activeItem,r=a&&a.map((function(t,n){return(0,g.jsx)(b.OK,{id:n,isActive:s===n,handleClick:e.handleTabChange,children:(0,g.jsx)(h.xv,{tag:"none",field:t.fields.tabText})},t.fields.tabText&&t.fields.tabText.value)})),c=a&&a.map((function(t,n){return(0,g.jsx)(b.x4,{isActive:s===n,itemClass:_().itemClass,children:e.renderPanel(t.fields)},n)}));return(0,g.jsxs)("div",{className:_().root,children:[(0,g.jsx)(b.td,{children:r}),(0,g.jsx)(b.nK,{isExperienceEditorMode:i.pageEditing,children:c}),i.pageEditing&&(!a||0===a.length)&&(0,g.jsx)("p",{className:_().helpMessage,children:"No items were selected yet"})]})}}]),u}(u.Component);t.default=(0,C.qC)((0,v.Z)({on:[["visible",function(){return{rootMargin:"200px"}}]]}),(0,d.withSitecoreContext)({updatable:!0}),x.p)(N)},73122:function(e,t,n){"use strict";n.d(t,{td:function(){return p},OK:function(){return m},nK:function(){return h},x4:function(){return x}});var i=n(59499),a=n(67294),s=n(94184),r=n.n(s),c=n(35147),o=n.n(c),l=n(23059),d=n(85893),u=(0,l.p)((function(e){var t=e.children;return(0,d.jsx)("div",{className:o().tabs,children:t})})),p=(0,a.memo)(u),f=(0,l.p)((function(e){return(0,d.jsx)("div",{className:r()(o().tab,e.tabClass,(0,i.Z)({},o().active,e.isActive)),onClick:function(){return e.handleClick(e.id)},children:e.children})})),m=(0,a.memo)(f),_=(0,l.p)((function(e){return(0,d.jsx)("div",{className:r()(o().itemsWrapper,(0,i.Z)({},o().editMode,e.isExperienceEditorMode)),children:e.children})})),h=(0,a.memo)(_),b=(0,l.p)((function(e){return(0,d.jsx)("div",{className:r()(o().item,e.itemClass,(0,i.Z)({},o().active,e.isActive)),children:e.children})})),x=(0,a.memo)(b);p.displayName="TabList",m.displayName="Tab",h.displayName="TabPanelWrapper",x.displayName="TabPanel"},61350:function(e){e.exports={root:"tabbedContent_root__1dmqs",itemClass:"tabbedContent_itemClass__74NGH",panel:"tabbedContent_panel__HX_8D",textContainer:"tabbedContent_textContainer__kk_Wv",imageContainer:"tabbedContent_imageContainer__Ji64t",panelTitle:"tabbedContent_panelTitle__3Gq0b",helpMessage:"tabbedContent_helpMessage__91DqQ"}},35147:function(e){e.exports={tabs:"tabsContent_tabs__9XNXs",tab:"tabsContent_tab__sm0oM",active:"tabsContent_active__xAIoD",itemsWrapper:"tabsContent_itemsWrapper__XsgM9",editMode:"tabsContent_editMode__DueDG",item:"tabsContent_item__BAyQA"}}}]);
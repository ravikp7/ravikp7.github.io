(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={drone:"style_drone__3f9Va",fly:"style_fly__2AbKE",droneBody:"style_droneBody__1c4u0",bar:"style_bar__zUBXX",verticalBar:"style_verticalBar__NUqwx",blade:"style_blade__OVkBy","blade-rotate":"style_blade-rotate__29jqD"}},function(e,t,a){e.exports={navButton:"style_navButton__3NtF1",buttonContainer:"style_buttonContainer__28nuw",bar:"style_bar__lGRvA"}},function(e,t,a){e.exports={mainHeader:"Header_mainHeader__3Bz6Q",title:"Header_title__3MQmh",navContainer:"Header_navContainer__1Rh8y",navToggleContainer:"Header_navToggleContainer__26wI2"}},function(e,t,a){e.exports={imageContainer:"style_imageContainer__2Yomp",pictureCircle:"style_pictureCircle__Z6a9w",picture:"style_picture__38q9T"}},function(e,t,a){e.exports={navbar:"style_navbar__2NChU",navList:"style_navList__2CMBn"}},function(e,t,a){e.exports={infoCard:"style_infoCard__1x9F-","image-overlay":"style_image-overlay__XjpBU",infoText:"style_infoText__xBV_J"}},function(e,t,a){e.exports={app:"App_app__1hEDz",appHeader:"App_appHeader__tlz1c"}},,,,,function(e,t,a){e.exports={titleText:"style_titleText__M_TmV"}},function(e,t,a){e.exports={navItem:"style_navItem__3ZW5r"}},function(e,t,a){e.exports={overlay:"style_overlay__kA8Lj"}},function(e,t,a){e.exports=a.p+"static/media/my-picture.901c0169.jpg"},function(e,t,a){e.exports={banner:"style_banner__2iWeO",grow:"style_grow__yaz2s"}},function(e,t,a){e.exports={rippleContainer:"style_rippleContainer__1ciVx",ripple:"style_ripple__361CR"}},function(e,t,a){e.exports={playground:"style_playground__1gYNv"}},function(e,t,a){e.exports={mainPage:"MainPage_mainPage__wExVw"}},,,function(e,t,a){e.exports=a(54)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),o=(a(34),a(2)),c=a(3),s=a(6),m=a(4),u=a(5),v=a(27),p=a(1),d=a(26),_=a(18),y=a.n(_),f=function(e){var t=e.title;return r.a.createElement("span",{className:y.a.titleText},t)},b=a(11),h=a.n(b),E=a(19),g=a.n(E),x=function(e){var t=e.topic,a=e.isSmallScreen;return r.a.createElement("div",{className:g.a.navItem,style:{margin:a?"15px":"0 20px"}},r.a.createElement("span",null,r.a.createElement("a",{href:"#".concat(t.toLowerCase())},t)))},N=function(e){var t=e.navItems,a=e.isSmallScreen;return r.a.createElement("nav",{className:h.a.navbar},r.a.createElement("div",{className:h.a.navList,style:{flexDirection:a?"column":"row"}},t.map(function(e){return r.a.createElement(x,Object.assign({topic:e,isSmallScreen:a},{key:e}))})))},O=a(9),C=a.n(O),j=a(8),w=a.n(j),k=function(e){var t=e.clickHandle;return r.a.createElement("button",{type:"button",className:w.a.navButton,onClick:t},r.a.createElement("div",{className:w.a.buttonContainer},r.a.createElement("div",{className:w.a.bar}),r.a.createElement("div",{className:w.a.bar}),r.a.createElement("div",{className:w.a.bar})))},S=a(20),B=a.n(S),H=function(e){var t=e.shouldDisplayOverlay,a=e.navItems;return r.a.createElement("div",{style:t?{height:"220px"}:{height:"0px"},className:B.a.overlay},r.a.createElement(N,{navItems:a,isSmallScreen:!0}))},P=function(e){var t=e.title,a=e.navItems,l=e.resetState,i=e.toggleNavlinks,o=e.shouldDisplayOverlay;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:C.a.mainHeader},r.a.createElement("div",{className:C.a.title},r.a.createElement(f,{title:t})),r.a.createElement(d.a,{query:"(max-width: 1000px)",onChange:l},function(e){return e?r.a.createElement("div",{className:C.a.navToggleContainer},r.a.createElement(k,{clickHandle:i})):r.a.createElement("div",{className:C.a.navContainer},r.a.createElement(N,{navItems:a,isSmallScreen:!1}))})),r.a.createElement(H,{shouldDisplayOverlay:o,navItems:a}))},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={shouldDisplayOverlay:!1},a.toggleNavlinks=a.toggleNavlinks.bind(Object(p.a)(Object(p.a)(a))),a.resetState=a.resetState.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleNavlinks",value:function(){this.setState(function(e){return{shouldDisplayOverlay:!e.shouldDisplayOverlay}})}},{key:"resetState",value:function(){this.setState({shouldDisplayOverlay:!1})}},{key:"render",value:function(){var e=Object(v.a)({},this.props,this.state,{toggleNavlinks:this.toggleNavlinks,resetState:this.resetState});return r.a.createElement(P,e)}}]),t}(n.PureComponent),I=a(10),T=a.n(I),D=function(e){var t=e.imageUrl,a=e.imageAlt,n=e.isCircle;return r.a.createElement("div",{className:T.a.imageContainer},r.a.createElement("img",{className:n?T.a.pictureCircle:T.a.picture,src:t,alt:a}))};D.defaultProps={isCircle:!1};var F=D,q=a(12),U=a.n(q),M=function(){return r.a.createElement("div",{className:U.a.infoCard},r.a.createElement("div",{className:U.a.infoText},"Computer Engineer"))},V=a(21),z=a.n(V),L=a(22),R=a.n(L),W=function(){return r.a.createElement("div",{className:R.a.banner},r.a.createElement(F,{imageUrl:z.a,imageAlt:"Ravi Kumar Prasad",isCircle:!0}),r.a.createElement(M,null))},J=a(23),K=a.n(J),X=function(){return r.a.createElement("div",{className:K.a.rippleContainer},r.a.createElement(W,null))},Q=a(7),Y=a.n(Q),Z=function(e){var t=e.id,a=e.onHover;return r.a.createElement("div",{id:t,className:Y.a.drone,onMouseEnter:a},r.a.createElement("div",{className:Y.a.bar},r.a.createElement("div",{className:Y.a.verticalBar},r.a.createElement("div",{className:Y.a.blade})),r.a.createElement("div",{className:Y.a.verticalBar},r.a.createElement("div",{className:Y.a.blade}))),r.a.createElement("div",{className:Y.a.droneBody}),r.a.createElement(r.a.Fragment,null))},G=a(24),$=a.n(G),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dronePositions:[{x:40,y:15},{x:65,y:25},{x:10,y:25},{x:15,y:80},{x:65,y:75}]},a.loop=a.loop.bind(Object(p.a)(Object(p.a)(a))),a.onHover=a.onHover.bind(Object(p.a)(Object(p.a)(a))),a.frame=!0,setTimeout(function(){a.frame=window.requestAnimationFrame(a.loop)},2e3),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.element=document.querySelector("#animate-box"),this.elements=[1,2,3,4,5].map(function(e){return document.querySelector("#animate-box-".concat(e))}),this.frame||(this.frame=window.requestAnimationFrame(this.loop))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.frame)}},{key:"onHover",value:function(){this.setState(function(e){return{dronePositions:e.dronePositions.reverse()}})}},{key:"loop",value:function(){var e=this;this.elements.forEach(function(t,a){var n=t;if(""!==t.style.top&&""!==t.style.left){var r=parseFloat(t.style.top.slice(0,-2)),l=parseFloat(t.style.left.slice(0,-2)),i=e.state.dronePositions[a],o=i.x,c=i.y;if(l<o){var s="".concat(l+.5,"vw");n.style.left=s}if(l>o){var m="".concat(l-.5,"vw");n.style.left=m}if(r<c){var u="".concat(r+.5,"vh");n.style.top=u}if(r>c){var v="".concat(r-.5,"vh");n.style.top=v}}else n.style.top="50vh",n.style.left="50vw"}),this.frame=window.requestAnimationFrame(this.loop)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:$.a.playground},[1,2,3,4,5].map(function(t){return r.a.createElement(Z,{id:"animate-box-".concat(t),key:t,onHover:e.onHover})}))}}]),t}(n.Component),te=a(25),ae=a.n(te),ne=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:ae.a.mainPage},r.a.createElement(ee,null),r.a.createElement(X,null))}}]),t}(n.Component),re=a(13),le=a.n(re),ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:le.a.app},r.a.createElement("header",{className:le.a.appHeader},r.a.createElement(A,{title:"Ravi Kumar Prasad",navItems:["Projects","Blog","About","Contact"]})),r.a.createElement(ne,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,2,1]]]);
//# sourceMappingURL=main.f69af8c3.chunk.js.map
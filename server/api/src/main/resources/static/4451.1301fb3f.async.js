(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4451],{8212:function(J,b,r){"use strict";r.d(b,{Z:function(){return m}});var c=r(28991),y=r(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},u=n,R=r(27029),f=function(k,Y){return y.createElement(R.Z,(0,c.Z)((0,c.Z)({},k),{},{ref:Y,icon:u}))};f.displayName="EditOutlined";var m=y.forwardRef(f)},91816:function(J,b,r){"use strict";r.d(b,{Z:function(){return m}});var c=r(28991),y=r(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},u=n,R=r(27029),f=function(k,Y){return y.createElement(R.Z,(0,c.Z)((0,c.Z)({},k),{},{ref:Y,icon:u}))};f.displayName="FolderOpenOutlined";var m=y.forwardRef(f)},63258:function(J,b,r){"use strict";r.d(b,{Z:function(){return m}});var c=r(28991),y=r(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},u=n,R=r(27029),f=function(k,Y){return y.createElement(R.Z,(0,c.Z)((0,c.Z)({},k),{},{ref:Y,icon:u}))};f.displayName="FolderOutlined";var m=y.forwardRef(f)},71230:function(J,b,r){"use strict";var c=r(92820);b.Z=c.Z},13062:function(J,b,r){"use strict";var c=r(38842),y=r.n(c),n=r(6999)},32138:function(J,b,r){"use strict";r.d(b,{Z:function(){return Ue}});var c=r(96156),y=r(90484),n=r(22122),u=r(67294),R=r(28991),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},m=f,Z=r(27029),k=function(E,g){return u.createElement(Z.Z,(0,R.Z)((0,R.Z)({},E),{},{ref:g,icon:m}))};k.displayName="HolderOutlined";var Y=u.forwardRef(k),ce=r(39242),de=r(94184),P=r.n(de),W=r(85061),Ze=r(28481),x=r(23279),Re=r.n(x),Xe=r(10225),Ye=r(57295),st=r(86504),ct=r(91816),dt=r(63258),_e=r(65632),ae;(function(i){i[i.None=0]="None",i[i.Start=1]="Start",i[i.End=2]="End"})(ae||(ae={}));function ke(i,E){function g(v){var T=v.key,L=v.children;E(T,v)!==!1&&ke(L||[],E)}i.forEach(g)}function qe(i){var E=i.treeData,g=i.expandedKeys,v=i.startKey,T=i.endKey,L=[],s=ae.None;if(v&&v===T)return[v];if(!v||!T)return[];function F(N){return N===v||N===T}return ke(E,function(N){if(s===ae.End)return!1;if(F(N)){if(L.push(N),s===ae.None)s=ae.Start;else if(s===ae.Start)return s=ae.End,!1}else s===ae.Start&&L.push(N);return g.indexOf(N)!==-1}),L}function Le(i,E){var g=(0,W.Z)(E),v=[];return ke(i,function(T,L){var s=g.indexOf(T);return s!==-1&&(v.push(L),g.splice(s,1)),!!g.length}),v}var Me=function(i,E){var g={};for(var v in i)Object.prototype.hasOwnProperty.call(i,v)&&E.indexOf(v)<0&&(g[v]=i[v]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,v=Object.getOwnPropertySymbols(i);T<v.length;T++)E.indexOf(v[T])<0&&Object.prototype.propertyIsEnumerable.call(i,v[T])&&(g[v[T]]=i[v[T]]);return g};function et(i){var E=i.isLeaf,g=i.expanded;return E?u.createElement(st.Z,null):g?u.createElement(ct.Z,null):u.createElement(dt.Z,null)}function Be(i){var E=i.treeData,g=i.children;return E||(0,Ye.zn)(g)}var ut=function(E,g){var v=E.defaultExpandAll,T=E.defaultExpandParent,L=E.defaultExpandedKeys,s=Me(E,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]),F=u.useRef(),N=u.useRef(),fe=u.createRef();u.useImperativeHandle(g,function(){return fe.current});var _=function(){var w=(0,Ye.I8)(Be(s)),e=w.keyEntities,t;return v?t=Object.keys(e):T?t=(0,Xe.r7)(s.expandedKeys||L||[],e):t=s.expandedKeys||L,t},We=u.useState(s.selectedKeys||s.defaultSelectedKeys||[]),Ne=(0,Ze.Z)(We,2),Fe=Ne[0],Pe=Ne[1],ve=u.useState(_()),le=(0,Ze.Z)(ve,2),q=le[0],we=le[1];u.useEffect(function(){"selectedKeys"in s&&Pe(s.selectedKeys)},[s.selectedKeys]),u.useEffect(function(){"expandedKeys"in s&&we(s.expandedKeys)},[s.expandedKeys]);var xe=function(w,e){var t=e.isLeaf;t||w.shiftKey||w.metaKey||w.ctrlKey||fe.current.onNodeExpand(w,e)},ee=Re()(xe,200,{leading:!0}),Ve=function(w,e){var t;return"expandedKeys"in s||we(w),(t=s.onExpand)===null||t===void 0?void 0:t.call(s,w,e)},yt=function(w,e){var t,l=s.expandAction;l==="click"&&ee(w,e),(t=s.onClick)===null||t===void 0||t.call(s,w,e)},mt=function(w,e){var t,l=s.expandAction;l==="doubleClick"&&ee(w,e),(t=s.onDoubleClick)===null||t===void 0||t.call(s,w,e)},Et=function(w,e){var t,l=s.multiple,a=e.node,o=e.nativeEvent,h=a.key,K=h===void 0?"":h,C=Be(s),A=(0,n.Z)((0,n.Z)({},e),{selected:!0}),B=(o==null?void 0:o.ctrlKey)||(o==null?void 0:o.metaKey),$=o==null?void 0:o.shiftKey,D;l&&B?(D=w,F.current=K,N.current=D,A.selectedNodes=Le(C,D)):l&&$?(D=Array.from(new Set([].concat((0,W.Z)(N.current||[]),(0,W.Z)(qe({treeData:C,expandedKeys:q,startKey:K,endKey:F.current}))))),A.selectedNodes=Le(C,D)):(D=[K],F.current=K,N.current=D,A.selectedNodes=Le(C,D)),(t=s.onSelect)===null||t===void 0||t.call(s,D,A),"selectedKeys"in s||Pe(D)},at=u.useContext(_e.E_),gt=at.getPrefixCls,ht=at.direction,xt=s.prefixCls,Ct=s.className,Ot=Me(s,["prefixCls","className"]),Ge=gt("tree",xt),bt=P()("".concat(Ge,"-directory"),(0,c.Z)({},"".concat(Ge,"-directory-rtl"),ht==="rtl"),Ct);return u.createElement(rt,(0,n.Z)({icon:et,ref:fe,blockNode:!0},Ot,{prefixCls:Ge,className:bt,expandedKeys:q,selectedKeys:Fe,onSelect:Et,onClick:yt,onDoubleClick:mt,onExpand:Ve}))},He=u.forwardRef(ut);He.displayName="DirectoryTree",He.defaultProps={showIcon:!0,expandAction:"click"};var ft=He,tt=r(33603),vt=r(6324),nt=4;function pt(i){var E,g=i.dropPosition,v=i.dropLevelOffset,T=i.prefixCls,L=i.indent,s=i.direction,F=s===void 0?"ltr":s,N=F==="ltr"?"left":"right",fe=F==="ltr"?"right":"left",_=(E={},(0,c.Z)(E,N,-v*L+nt),(0,c.Z)(E,fe,0),E);switch(g){case-1:_.top=-3;break;case 1:_.bottom=-3;break;default:_.bottom=-3,_[N]=L+nt;break}return u.createElement("div",{style:_,className:"".concat(T,"-drop-indicator")})}var Ie=u.forwardRef(function(i,E){var g,v=u.useContext(_e.E_),T=v.getPrefixCls,L=v.direction,s=v.virtual,F=i.prefixCls,N=i.className,fe=i.showIcon,_=i.showLine,We=i.switcherIcon,Ne=i.blockNode,Fe=i.children,Pe=i.checkable,ve=i.selectable,le=i.draggable,q=T("tree",F),we=(0,n.Z)((0,n.Z)({},i),{showLine:Boolean(_),dropIndicatorRender:pt}),xe=u.useMemo(function(){if(!le)return!1;var ee={};switch((0,y.Z)(le)){case"function":ee.nodeDraggable=le;break;case"object":ee=(0,n.Z)({},le);break;default:}return ee.icon!==!1&&(ee.icon=ee.icon||u.createElement(Y,null)),ee},[le]);return u.createElement(ce.Z,(0,n.Z)({itemHeight:20,ref:E,virtual:s},we,{prefixCls:q,className:P()((g={},(0,c.Z)(g,"".concat(q,"-icon-hide"),!fe),(0,c.Z)(g,"".concat(q,"-block-node"),Ne),(0,c.Z)(g,"".concat(q,"-unselectable"),!ve),(0,c.Z)(g,"".concat(q,"-rtl"),L==="rtl"),g),N),direction:L,checkable:Pe&&u.createElement("span",{className:"".concat(q,"-checkbox-inner")}),selectable:ve,switcherIcon:function(Ve){return(0,vt.Z)(q,We,_,Ve)},draggable:xe}),Fe)});Ie.TreeNode=ce.O,Ie.DirectoryTree=ft,Ie.defaultProps={checkable:!1,selectable:!0,showIcon:!1,motion:(0,n.Z)((0,n.Z)({},tt.Z),{motionAppear:!1}),blockNode:!1};var rt=Ie,Ue=rt},32157:function(J,b,r){"use strict";var c=r(38842),y=r.n(c),n=r(56489),u=r.n(n)},97272:function(J,b,r){"use strict";r.d(b,{Z:function(){return w}});var c=r(22122),y=r(96156),n=r(67294),u=r(94184),R=r.n(u),f=r(42550),m=r(65632),Z=r(21687),k=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},Y=function(t,l){var a=t.prefixCls,o=t.component,h=o===void 0?"article":o,K=t.className,C=t["aria-label"],A=t.setContentRef,B=t.children,$=k(t,["prefixCls","component","className","aria-label","setContentRef","children"]),D=l;return A&&((0,Z.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),D=(0,f.sQ)(l,A)),n.createElement(m.C,null,function(Q){var ue=Q.getPrefixCls,j=Q.direction,ie=h,V=ue("typography",a),I=R()(V,(0,y.Z)({},"".concat(V,"-rtl"),j==="rtl"),K);return n.createElement(ie,(0,c.Z)({className:I,"aria-label":C,ref:D},$),B)})},ce=n.forwardRef(Y);ce.displayName="Typography";var de=ce,P=de,W=r(90484),Ze=r(98423),x=r(28481),Re=r(21770),Xe=r(50344),Ye=r(20640),st=r.n(Ye),ct=r(8212),dt=r(79508),_e=r(99165),ae=r(6925),ke=r(42051),qe=r(34952),Le=r(79370),Me=r(31097),et=r(15105),Be=r(28991),ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},He=ut,ft=r(27029),tt=function(t,l){return n.createElement(ft.Z,(0,Be.Z)((0,Be.Z)({},t),{},{ref:l,icon:He}))};tt.displayName="EnterOutlined";var vt=n.forwardRef(tt),nt=r(45839),pt=r(96159),Ie=function(t){var l=t.prefixCls,a=t["aria-label"],o=t.className,h=t.style,K=t.direction,C=t.maxLength,A=t.autoSize,B=A===void 0?!0:A,$=t.value,D=t.onSave,Q=t.onCancel,ue=t.onEnd,j=t.enterIcon,ie=j===void 0?n.createElement(vt,null):j,V=n.useRef(),I=n.useRef(!1),te=n.useRef(),pe=n.useState($),H=(0,x.Z)(pe,2),Te=H[0],ye=H[1];n.useEffect(function(){ye($)},[$]),n.useEffect(function(){if(V.current&&V.current.resizableTextArea){var U=V.current.resizableTextArea.textArea;U.focus();var S=U.value.length;U.setSelectionRange(S,S)}},[]);var Ae=function(S){var z=S.target;ye(z.value.replace(/[\n\r]/g,""))},Ce=function(){I.current=!0},M=function(){I.current=!1},se=function(S){var z=S.keyCode;I.current||(te.current=z)},ne=function(){D(Te.trim())},Ke=function(S){var z=S.keyCode,me=S.ctrlKey,Ee=S.altKey,Je=S.metaKey,je=S.shiftKey;te.current===z&&!I.current&&!me&&!Ee&&!Je&&!je&&(z===et.Z.ENTER?(ne(),ue==null||ue()):z===et.Z.ESC&&Q())},$e=function(){ne()},Oe=R()(l,"".concat(l,"-edit-content"),(0,y.Z)({},"".concat(l,"-rtl"),K==="rtl"),o);return n.createElement("div",{className:Oe,style:h},n.createElement(nt.Z,{ref:V,maxLength:C,value:Te,onChange:Ae,onKeyDown:se,onKeyUp:Ke,onCompositionStart:Ce,onCompositionEnd:M,onBlur:$e,"aria-label":a,rows:1,autoSize:B}),ie!==null?(0,pt.Tm)(ie,{className:"".concat(l,"-edit-content-confirm")}):null)},rt=Ie;function Ue(e,t){return n.useMemo(function(){var l=!!e;return[l,(0,c.Z)((0,c.Z)({},t),l&&(0,W.Z)(e)==="object"?e:null)]},[e])}var i=function(e,t){var l=n.useRef(!1);n.useEffect(function(){l.current?e():l.current=!0},t)};function E(e){var t=(0,W.Z)(e);return t==="string"||t==="number"}function g(e){var t=0;return e.forEach(function(l){E(l)?t+=String(l).length:t+=1}),t}function v(e,t){for(var l=0,a=[],o=0;o<e.length;o+=1){if(l===t)return a;var h=e[o],K=E(h),C=K?String(h).length:1,A=l+C;if(A>t){var B=t-l;return a.push(String(h).slice(0,B)),a}a.push(h),l=A}return e}var T=0,L=1,s=2,F=3,N=4,fe=function(t){var l=t.enabledMeasure,a=t.children,o=t.text,h=t.width,K=t.rows,C=t.onEllipsis,A=n.useState([0,0,0]),B=(0,x.Z)(A,2),$=B[0],D=B[1],Q=n.useState(T),ue=(0,x.Z)(Q,2),j=ue[0],ie=ue[1],V=(0,x.Z)($,3),I=V[0],te=V[1],pe=V[2],H=n.useState(0),Te=(0,x.Z)(H,2),ye=Te[0],Ae=Te[1],Ce=n.useRef(null),M=n.useRef(null),se=n.useMemo(function(){return(0,Xe.Z)(o)},[o]),ne=n.useMemo(function(){return g(se)},[se]),Ke=n.useMemo(function(){return!l||j!==F?a(se,!1):a(v(se,te),te<ne)},[l,j,a,se,te,ne]);n.useLayoutEffect(function(){l&&h&&ne&&(ie(L),D([0,Math.ceil(ne/2),ne]))},[l,h,o,ne,K]),n.useLayoutEffect(function(){var S;j===L&&Ae(((S=Ce.current)===null||S===void 0?void 0:S.offsetHeight)||0)},[j]),n.useLayoutEffect(function(){var S,z;if(ye){if(j===L){var me=((S=M.current)===null||S===void 0?void 0:S.offsetHeight)||0,Ee=K*ye;me<=Ee?(ie(N),C(!1)):ie(s)}else if(j===s)if(I!==pe){var Je=((z=M.current)===null||z===void 0?void 0:z.offsetHeight)||0,je=K*ye,De=I,re=pe;I===pe-1?re=I:Je<=je?De=te:re=te;var St=Math.ceil((De+re)/2);D([De,St,re])}else ie(F),C(!0)}},[j,I,pe,K,ye]);var $e={width:h,whiteSpace:"normal",margin:0,padding:0},Oe=function(z,me,Ee){return n.createElement("span",{"aria-hidden":!0,ref:me,style:(0,c.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},Ee)},z)},U=function(z,me){var Ee=v(se,z);return Oe(a(Ee,!0),me,$e)};return n.createElement(n.Fragment,null,Ke,l&&j!==F&&j!==N&&n.createElement(n.Fragment,null,Oe("lg",Ce,{width:9999}),j===L?Oe(a(se,!1),M,$e):U(te,M)))},_=fe,We=function(t){var l=t.title,a=t.enabledEllipsis,o=t.isEllipsis,h=t.children;return!l||!a?h:n.createElement(Me.Z,{title:l,visible:o?void 0:!1},h)},Ne=We,Fe=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l};function Pe(e,t){var l=e.mark,a=e.code,o=e.underline,h=e.delete,K=e.strong,C=e.keyboard,A=e.italic,B=t;function $(D,Q){!D||(B=n.createElement(Q,{},B))}return $(K,"strong"),$(o,"u"),$(h,"del"),$(a,"code"),$(l,"mark"),$(C,"kbd"),$(A,"i"),B}function ve(e,t,l){return e===!0||e===void 0?t:e||l&&t}function le(e){return Array.isArray(e)?e:[e]}var q="...",we=n.forwardRef(function(e,t){var l=e.prefixCls,a=e.className,o=e.style,h=e.type,K=e.disabled,C=e.children,A=e.ellipsis,B=e.editable,$=e.copyable,D=e.component,Q=e.title,ue=Fe(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),j=n.useContext(m.E_),ie=j.getPrefixCls,V=j.direction,I=(0,ke.E)("Text")[0],te=n.useRef(null),pe=n.useRef(null),H=ie("typography",l),Te=(0,Ze.Z)(ue,["mark","code","delete","underline","strong","keyboard","italic"]),ye=Ue(B),Ae=(0,x.Z)(ye,2),Ce=Ae[0],M=Ae[1],se=(0,Re.Z)(!1,{value:M.editing}),ne=(0,x.Z)(se,2),Ke=ne[0],$e=ne[1],Oe=M.triggerType,U=Oe===void 0?["icon"]:Oe,S=function(d){var p;d&&((p=M.onStart)===null||p===void 0||p.call(M)),$e(d)};i(function(){var O;Ke||(O=pe.current)===null||O===void 0||O.focus()},[Ke]);var z=function(d){d.preventDefault(),S(!0)},me=function(d){var p;(p=M.onChange)===null||p===void 0||p.call(M,d),S(!1)},Ee=function(){var d;(d=M.onCancel)===null||d===void 0||d.call(M),S(!1)},Je=Ue($),je=(0,x.Z)(Je,2),De=je[0],re=je[1],St=n.useState(!1),Zt=(0,x.Z)(St,2),lt=Zt[0],Rt=Zt[1],Pt=n.useRef(),Tt=function(){clearTimeout(Pt.current)},Wt=function(d){var p;d.preventDefault(),re.text===void 0&&(re.text=String(C)),st()(re.text||""),Rt(!0),Tt(),Pt.current=setTimeout(function(){Rt(!1)},3e3),(p=re.onCopy)===null||p===void 0||p.call(re)};n.useEffect(function(){return Tt},[]);var Ft=n.useState(!1),Kt=(0,x.Z)(Ft,2),Dt=Kt[0],Vt=Kt[1],Gt=n.useState(!1),Lt=(0,x.Z)(Gt,2),Mt=Lt[0],Jt=Lt[1],Qt=n.useState(!1),It=(0,x.Z)(Qt,2),Xt=It[0],Yt=It[1],_t=n.useState(!1),Nt=(0,x.Z)(_t,2),wt=Nt[0],qt=Nt[1],en=n.useState(!1),At=(0,x.Z)(en,2),$t=At[0],tn=At[1],nn=Ue(A,{expandable:!1}),jt=(0,x.Z)(nn,2),be=jt[0],G=jt[1],ge=be&&!Xt,zt=G.rows,ze=zt===void 0?1:zt,ot=n.useMemo(function(){return!ge||G.suffix!==void 0||G.onEllipsis||G.expandable||Ce||De},[ge,G,Ce,De]);n.useLayoutEffect(function(){be&&!ot&&(Vt((0,Le.G)("webkitLineClamp")),Jt((0,Le.G)("textOverflow")))},[ot,be]);var he=n.useMemo(function(){return ot?!1:ze===1?Mt:Dt},[ot,Mt,Dt]),kt=ge&&(he?$t:wt),rn=ge&&ze===1&&he,Bt=ge&&ze>1&&he,an=function(d){var p;Yt(!0),(p=G.onExpand)===null||p===void 0||p.call(G,d)},ln=n.useState(0),Ht=(0,x.Z)(ln,2),on=Ht[0],sn=Ht[1],cn=function(d){var p=d.offsetWidth;sn(p)},dn=function(d){var p;qt(d),wt!==d&&((p=G.onEllipsis)===null||p===void 0||p.call(G,d))};n.useEffect(function(){var O=te.current;if(be&&he&&O){var d=O.offsetWidth<O.scrollWidth;$t!==d&&tn(d)}},[be,he,C]);var it=G.tooltip===!0?C:G.tooltip,Ut=n.useMemo(function(){var O=function(p){return["string","number"].includes((0,W.Z)(p))};if(!(!be||he)){if(O(C))return C;if(O(Q))return Q;if(O(it))return it}},[be,he,Q,it,kt]);if(Ke)return n.createElement(rt,{value:typeof C=="string"?C:"",onSave:me,onCancel:Ee,onEnd:M.onEnd,prefixCls:H,className:a,style:o,direction:V,maxLength:M.maxLength,autoSize:M.autoSize,enterIcon:M.enterIcon});var un=function(){var d=G.expandable,p=G.symbol;if(!d)return null;var X;return p?X=p:X=I.expand,n.createElement("a",{key:"expand",className:"".concat(H,"-expand"),onClick:an,"aria-label":I.expand},X)},fn=function(){if(!!Ce){var d=M.icon,p=M.tooltip,X=(0,Xe.Z)(p)[0]||I.edit,Se=typeof X=="string"?X:"";return U.includes("icon")?n.createElement(Me.Z,{key:"edit",title:p===!1?"":X},n.createElement(qe.Z,{ref:pe,className:"".concat(H,"-edit"),onClick:z,"aria-label":Se},d||n.createElement(ct.Z,{role:"button"}))):null}},vn=function(){if(!!De){var d=re.tooltips,p=re.icon,X=le(d),Se=le(p),Qe=lt?ve(X[1],I.copied):ve(X[0],I.copy),mn=lt?I.copied:I.copy,En=typeof Qe=="string"?Qe:mn;return n.createElement(Me.Z,{key:"copy",title:Qe},n.createElement(qe.Z,{className:R()("".concat(H,"-copy"),lt&&"".concat(H,"-copy-success")),onClick:Wt,"aria-label":En},lt?ve(Se[1],n.createElement(dt.Z,null),!0):ve(Se[0],n.createElement(_e.Z,null),!0)))}},pn=function(d){return[d&&un(),fn(),vn()]},yn=function(d){return[d&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},q),G.suffix,pn(d)]};return n.createElement(ae.Z,{onResize:cn,disabled:!ge||he},function(O){var d;return n.createElement(Ne,{title:it,enabledEllipsis:ge,isEllipsis:kt},n.createElement(P,(0,c.Z)({className:R()((d={},(0,y.Z)(d,"".concat(H,"-").concat(h),h),(0,y.Z)(d,"".concat(H,"-disabled"),K),(0,y.Z)(d,"".concat(H,"-ellipsis"),be),(0,y.Z)(d,"".concat(H,"-single-line"),ge&&ze===1),(0,y.Z)(d,"".concat(H,"-ellipsis-single-line"),rn),(0,y.Z)(d,"".concat(H,"-ellipsis-multiple-line"),Bt),d),a),style:(0,c.Z)((0,c.Z)({},o),{WebkitLineClamp:Bt?ze:void 0}),component:D,ref:(0,f.sQ)(O,te,t),direction:V,onClick:U.includes("text")?z:null,"aria-label":Ut,title:Q},Te),n.createElement(_,{enabledMeasure:ge&&!he,text:C,rows:ze,width:on,onEllipsis:dn},function(p,X){var Se=p;p.length&&X&&Ut&&(Se=n.createElement("span",{key:"show-content","aria-hidden":!0},Se));var Qe=Pe(e,n.createElement(n.Fragment,null,Se,yn(X)));return Qe})))})}),xe=we,ee=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},Ve=function(t){var l=t.ellipsis,a=ee(t,["ellipsis"]),o=n.useMemo(function(){return l&&(0,W.Z)(l)==="object"?(0,Ze.Z)(l,["expandable","rows"]):l},[l]);return(0,Z.Z)((0,W.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),n.createElement(xe,(0,c.Z)({},a,{ellipsis:o,component:"span"}))},yt=Ve,mt=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},Et=function(t,l){var a=t.ellipsis,o=t.rel,h=mt(t,["ellipsis","rel"]);(0,Z.Z)((0,W.Z)(a)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var K=n.useRef(null);n.useImperativeHandle(l,function(){return K.current});var C=(0,c.Z)((0,c.Z)({},h),{rel:o===void 0&&h.target==="_blank"?"noopener noreferrer":o});return delete C.navigate,n.createElement(xe,(0,c.Z)({},C,{ref:K,ellipsis:!!a,component:"a"}))},at=n.forwardRef(Et),gt=r(93355),ht=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},xt=(0,gt.a)(1,2,3,4,5),Ct=function(t){var l=t.level,a=l===void 0?1:l,o=ht(t,["level"]),h;return xt.indexOf(a)!==-1?h="h".concat(a):((0,Z.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),h="h1"),n.createElement(xe,(0,c.Z)({},o,{component:h}))},Ot=Ct,Ge=function(t){return n.createElement(xe,(0,c.Z)({},t,{component:"div"}))},bt=Ge,oe=P;oe.Text=yt,oe.Link=at,oe.Title=Ot,oe.Paragraph=bt;var w=oe},402:function(J,b,r){"use strict";var c=r(38842),y=r.n(c),n=r(60557),u=r.n(n),R=r(22385),f=r(47673)},20640:function(J,b,r){"use strict";var c=r(11742),y={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function u(f){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return f.replace(/#{\s*key\s*}/g,m)}function R(f,m){var Z,k,Y,ce,de,P,W=!1;m||(m={}),Z=m.debug||!1;try{Y=c(),ce=document.createRange(),de=document.getSelection(),P=document.createElement("span"),P.textContent=f,P.style.all="unset",P.style.position="fixed",P.style.top=0,P.style.clip="rect(0, 0, 0, 0)",P.style.whiteSpace="pre",P.style.webkitUserSelect="text",P.style.MozUserSelect="text",P.style.msUserSelect="text",P.style.userSelect="text",P.addEventListener("copy",function(x){if(x.stopPropagation(),m.format)if(x.preventDefault(),typeof x.clipboardData=="undefined"){Z&&console.warn("unable to use e.clipboardData"),Z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Re=y[m.format]||y.default;window.clipboardData.setData(Re,f)}else x.clipboardData.clearData(),x.clipboardData.setData(m.format,f);m.onCopy&&(x.preventDefault(),m.onCopy(x.clipboardData))}),document.body.appendChild(P),ce.selectNodeContents(P),de.addRange(ce);var Ze=document.execCommand("copy");if(!Ze)throw new Error("copy command was unsuccessful");W=!0}catch(x){Z&&console.error("unable to copy using execCommand: ",x),Z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",f),m.onCopy&&m.onCopy(window.clipboardData),W=!0}catch(Re){Z&&console.error("unable to copy using clipboardData: ",Re),Z&&console.error("falling back to prompt"),k=u("message"in m?m.message:n),window.prompt(k,f)}}finally{de&&(typeof de.removeRange=="function"?de.removeRange(ce):de.removeAllRanges()),P&&document.body.removeChild(P),Y()}return W}J.exports=R},79370:function(J,b,r){"use strict";r.d(b,{G:function(){return u}});var c=r(98924),y=function(f){if((0,c.Z)()&&window.document.documentElement){var m=Array.isArray(f)?f:[f],Z=window.document.documentElement;return m.some(function(k){return k in Z.style})}return!1},n=function(f,m){if(!y(f))return!1;var Z=document.createElement("div"),k=Z.style[f];return Z.style[f]=m,Z.style[f]!==k};function u(R,f){return!Array.isArray(R)&&f!==void 0?n(R,f):y(R)}},11742:function(J){J.exports=function(){var b=document.getSelection();if(!b.rangeCount)return function(){};for(var r=document.activeElement,c=[],y=0;y<b.rangeCount;y++)c.push(b.getRangeAt(y));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return b.removeAllRanges(),function(){b.type==="Caret"&&b.removeAllRanges(),b.rangeCount||c.forEach(function(n){b.addRange(n)}),r&&r.focus()}}},56489:function(){},60557:function(){}}]);

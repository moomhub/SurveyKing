(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[7905],{19540:function(Zt,oe,C){"use strict";C.r(oe),C.d(oe,{default:function(){return Dt}});var St=C(57663),V=C(71577),b=C(39428),L=C(3182),Et=C(34792),U=C(48086),bt=C(71194),se=C(50146),Tt=C(77576),Te=C(12028),A=C(94657),I=C(3980),Pe=C(57119),Oe=C(51042),je=C(2048),we=C(21077),J=C(16894),ie=C(80582),E=C(67294),H=C(93224),D=C(11849),j=C(32059),Q=C(69610),X=C(54941),T=C(3372),q=C(43028),_=C(15818),Le=C(94184),w=C.n(Le),B=C(45598),de=E.createContext(null),Ie=C(45916),y=C(85893),$e=["className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","expanded","selected","checked","halfChecked"],le="open",ce="close",Re="---",Fe=function(u){(0,q.Z)(h,u);var i=(0,_.Z)(h);function h(){var e;(0,Q.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(t){var n=e.props.context.onNodeClick;n(t,(0,T.Z)(e)),e.isSelectable()?e.onSelect(t):e.onCheck(t)},e.onSelectorDoubleClick=function(t){var n=e.props.context.onNodeDoubleClick;n(t,(0,T.Z)(e))},e.onSelect=function(t){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;t.preventDefault(),n(t,(0,T.Z)(e))}},e.onCheck=function(t){if(!e.isDisabled()){var n=e.props,a=n.disableCheckbox,l=n.checked,r=e.props.context.onNodeCheck;if(!(!e.isCheckable()||a)){t.preventDefault();var c=!l;r(t,(0,T.Z)(e),c)}}},e.onMouseEnter=function(t){var n=e.props.context.onNodeMouseEnter;n(t,(0,T.Z)(e))},e.onMouseLeave=function(t){var n=e.props.context.onNodeMouseLeave;n(t,(0,T.Z)(e))},e.onContextMenu=function(t){var n=e.props.context.onNodeContextMenu;n(t,(0,T.Z)(e))},e.onDragStart=function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,(0,T.Z)(e));try{t.dataTransfer.setData("text/plain","")}catch(a){}},e.onDragEnter=function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragOver=function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragLeave=function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragEnd=function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,T.Z)(e))},e.onDrop=function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,T.Z)(e))},e.onExpand=function(t){var n=e.props.context.onNodeExpand;n(t,(0,T.Z)(e))},e.setSelectHandle=function(t){e.selectHandle=t},e.getNodeChildren=function(){var t=e.props.children,n=(0,B.default)(t).filter(function(l){return l}),a=ve(n);return n.length!==a.length&&fe(),a},e.getNodeState=function(){var t=e.props.expanded;return e.isLeaf()?null:t?le:ce},e.isLeaf=function(){var t=e.props,n=t.isLeaf,a=t.loaded,l=e.props.context.loadData,r=e.getNodeChildren().length!==0;return n===!1?!1:n||!l&&!r||l&&a&&!r},e.isDisabled=function(){var t=e.props.disabled,n=e.props.context.disabled;return t===!1?!1:!!(n||t)},e.isCheckable=function(){var t=e.props.checkable,n=e.props.context.checkable;return!n||t===!1?!1:n},e.syncLoadData=function(t){var n=t.expanded,a=t.loading,l=t.loaded,r=e.props.context,c=r.loadData,f=r.onNodeLoad;if(!a&&c&&n&&!e.isLeaf()){var d=e.getNodeChildren().length!==0;!d&&!l&&f((0,T.Z)(e))}},e.renderSwitcher=function(){var t=e.props,n=t.expanded,a=t.switcherIcon,l=e.props.context,r=l.prefixCls,c=l.switcherIcon,f=a||c;if(e.isLeaf())return(0,y.jsx)("span",{className:w()("".concat(r,"-switcher"),"".concat(r,"-switcher-noop")),children:typeof f=="function"?f((0,D.Z)((0,D.Z)({},e.props),{},{isLeaf:!0})):f});var d=w()("".concat(r,"-switcher"),"".concat(r,"-switcher_").concat(n?le:ce));return(0,y.jsx)("span",{onClick:e.onExpand,className:d,children:typeof f=="function"?f((0,D.Z)((0,D.Z)({},e.props),{},{isLeaf:!1})):f})},e.renderCheckbox=function(){var t=e.props,n=t.checked,a=t.halfChecked,l=t.disableCheckbox,r=e.props.context.prefixCls,c=e.isDisabled(),f=e.isCheckable();if(!f)return null;var d=typeof f!="boolean"?f:null;return(0,y.jsx)("span",{className:w()("".concat(r,"-checkbox"),n&&"".concat(r,"-checkbox-checked"),!n&&a&&"".concat(r,"-checkbox-indeterminate"),(c||l)&&"".concat(r,"-checkbox-disabled")),onClick:e.onCheck,children:d})},e.renderIcon=function(){var t=e.props.loading,n=e.props.context.prefixCls;return(0,y.jsx)("span",{className:w()("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var t=e.state.dragNodeHighlight,n=e.props,a=n.title,l=n.selected,r=n.icon,c=n.loading,f=e.props.context,d=f.prefixCls,p=f.showIcon,x=f.icon,m=f.draggable,N=f.loadData,g=e.isDisabled(),k="".concat(d,"-node-content-wrapper"),K;if(p){var Z=r||x;K=Z?(0,y.jsx)("span",{className:w()("".concat(d,"-iconEle"),"".concat(d,"-icon__customize")),children:typeof Z=="function"?Z(e.props):Z}):e.renderIcon()}else N&&c&&(K=e.renderIcon());var P=(0,y.jsx)("span",{className:"".concat(d,"-title"),children:a});return(0,y.jsxs)("span",{ref:e.setSelectHandle,title:typeof a=="string"?a:"",className:w()("".concat(k),"".concat(k,"-").concat(e.getNodeState()||"normal"),!g&&(l||t)&&"".concat(d,"-node-selected"),!g&&m&&"draggable"),draggable:!g&&m||void 0,"aria-grabbed":!g&&m||void 0,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick,onDragStart:m?e.onDragStart:void 0,children:[K,P]})},e.renderChildren=function(){var t=e.props,n=t.expanded,a=t.pos,l=e.props.context,r=l.prefixCls,c=l.motion,f=l.renderTreeNode,d=e.getNodeChildren();if(d.length===0)return null;var p=!0;return d.forEach(function(x){x.props.children.length>0&&(p=!1)}),(0,y.jsx)(Ie.ZP,(0,D.Z)((0,D.Z)({visible:n},c),{},{children:function(m){var N=m.style,g=m.className;return(0,y.jsx)("ul",{className:w()(g,"".concat(r,"-child-tree"),n&&"".concat(r,"-child-tree-open")),style:(0,D.Z)((0,D.Z)({},N),{},{display:p?"flex":""}),"data-expanded":n,role:"group",children:ge(d,function(k,K){return f(k,K,a)})})}}))},e}return(0,X.Z)(h,[{key:"componentDidMount",value:function(){var o=this.props,v=o.eventKey,s=o.context.registerTreeNode;this.syncLoadData(this.props),s(v,this)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"componentWillUnmount",value:function(){var o=this.props,v=o.eventKey,s=o.context.registerTreeNode;s(v,null)}},{key:"isSelectable",value:function(){var o=this.props.selectable,v=this.props.context.selectable;return typeof o=="boolean"?o:v}},{key:"render",value:function(){var o,v=this.props.loading,s=this.props,t=s.className,n=s.style,a=s.dragOver,l=s.dragOverGapTop,r=s.dragOverGapBottom,c=s.isLeaf,f=s.expanded,d=s.selected,p=s.checked,x=s.halfChecked,m=(0,H.Z)(s,$e),N=this.props.context,g=N.prefixCls,k=N.filterTreeNode,K=N.draggable,Z=this.isDisabled(),P=De(m);return(0,y.jsxs)("li",(0,D.Z)((0,D.Z)({className:w()(t,(o={},(0,j.Z)(o,"".concat(g,"-treenode-disabled"),Z),(0,j.Z)(o,"".concat(g,"-treenode-switcher-").concat(f?"open":"close"),!c),(0,j.Z)(o,"".concat(g,"-treenode-checkbox-checked"),p),(0,j.Z)(o,"".concat(g,"-treenode-checkbox-indeterminate"),x),(0,j.Z)(o,"".concat(g,"-treenode-selected"),d),(0,j.Z)(o,"".concat(g,"-treenode-loading"),v),(0,j.Z)(o,"drag-over",!Z&&a),(0,j.Z)(o,"drag-over-gap-top",!Z&&l),(0,j.Z)(o,"drag-over-gap-bottom",!Z&&r),(0,j.Z)(o,"filter-node",k&&k(this)),o)),style:n,role:"treeitem",onDragEnter:K?this.onDragEnter:void 0,onDragOver:K?this.onDragOver:void 0,onDragLeave:K?this.onDragLeave:void 0,onDrop:K?this.onDrop:void 0,onDragEnd:K?this.onDragEnd:void 0},P),{},{children:[this.renderSwitcher(),this.renderCheckbox(),this.renderSelector(),this.renderChildren()]}))}}]),h}(E.Component),ee=function(i){return(0,y.jsx)(de.Consumer,{children:function(e){return(0,y.jsx)(Fe,(0,D.Z)((0,D.Z)({},i),{},{context:e}))}})};ee.defaultProps={title:Re},ee.isTreeNode=1;var te=ee,Ae=["children"],Me=.25,Ue=2,ue=!1;function fe(){ue||(ue=!0)}function $(u,i){var h=u.slice(),e=h.indexOf(i);return e>=0&&h.splice(e,1),h}function R(u,i){var h=u.slice();return h.indexOf(i)===-1&&h.push(i),h}function He(u){return u.split("-")}function he(u,i){return"".concat(u,"-").concat(i)}function Be(u){return u&&u.type&&u.type.isTreeNode}function ve(u){return(0,B.default)(u).filter(Be)}function F(u){var i=u.props||{},h=i.disabled,e=i.disableCheckbox,o=i.checkable;return!!(h||e)||o===!1}function pe(u,i){function h(e,o,v){var s=e?e.props.children:u,t=e?he(v.pos,o):0,n=ve(s);if(e){var a={node:e,index:o,pos:t,key:e.key||t,parentPos:v.node?v.pos:null};i(a)}E.Children.forEach(n,function(l,r){h(l,r,{node:e,pos:t})})}h(null)}function ge(u,i){var h=(0,B.default)(u).map(i);return h.length===1?h[0]:h}function Ge(u,i){var h=i.props,e=h.eventKey,o=h.pos,v=[];return pe(u,function(s){var t=s.key;v.push(t)}),v.push(e||o),v}function ye(u,i){var h=u.clientY,e=i.selectHandle.getBoundingClientRect(),o=e.top,v=e.bottom,s=e.height,t=Math.max(s*Me,Ue);return h<=o+t?-1:h>=v-t?1:0}function xe(u,i){if(!!u){var h=i.multiple;return h?u.slice():u.length?[u[0]]:u}}function Ce(u){return u&&u.map(function(i){return String(i)})}var We=function(i){return i};function me(u,i){if(!u)return[];var h=i||{},e=h.processProps,o=e===void 0?We:e,v=Array.isArray(u)?u:[u];return v.map(function(s){var t=s.children,n=(0,H.Z)(s,Ae),a=me(t,i);return(0,y.jsx)(te,(0,D.Z)((0,D.Z)({},o(n)),{},{children:a}))})}function ze(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.initWrapper,e=i.processEntity,o=i.onProcessFinished,v={},s={},t={posEntities:v,keyEntities:s};return h&&(t=h(t)||t),pe(u,function(n){var a=n.node,l=n.index,r=n.pos,c=n.key,f=n.parentPos,d={node:a,index:l,key:c,pos:r};v[r]=d,s[c]=d,d.parent=v[f],d.parent&&(d.parent.children=d.parent.children||[],d.parent.children.push(d)),e&&e(d,t)}),o&&o(t),t}function ne(u){if(!u)return null;var i;if(Array.isArray(u))i={checkedKeys:u,halfCheckedKeys:void 0};else if(typeof u=="object")i={checkedKeys:u.checked||void 0,halfCheckedKeys:u.halfChecked||void 0};else return null;return i.checkedKeys=Ce(i.checkedKeys),i.halfCheckedKeys=Ce(i.halfCheckedKeys),i}function Ne(u,i,h){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o={},v={};(e.checkedKeys||[]).forEach(function(r){o[r]=!0}),(e.halfCheckedKeys||[]).forEach(function(r){v[r]=!0});function s(r){if(o[r]!==i){var c=h[r];if(!!c){var f=c.children,d=c.parent,p=c.node;if(!F(p)){var x=!0,m=!1;(f||[]).filter(function(N){return!F(N.node)}).forEach(function(N){var g=N.key,k=o[g],K=v[g];(k||K)&&(m=!0),k||(x=!1)}),i?o[r]=x:o[r]=!1,v[r]=m,d&&s(d.key)}}}}function t(r){if(o[r]!==i){var c=h[r];if(!!c){var f=c.children,d=c.node;F(d)||(o[r]=i,(f||[]).forEach(function(p){t(p.key)}))}}}function n(r){var c=h[r];if(!!c){var f=c.children,d=c.parent,p=c.node;o[r]=i,!F(p)&&((f||[]).filter(function(x){return!F(x.node)}).forEach(function(x){t(x.key)}),d&&s(d.key))}}(u||[]).forEach(function(r){n(r)});var a=[],l=[];return Object.keys(o).forEach(function(r){o[r]&&a.push(r)}),Object.keys(v).forEach(function(r){!o[r]&&v[r]&&l.push(r)}),{checkedKeys:a,halfCheckedKeys:l}}function ke(u,i){var h={};function e(o){if(!h[o]){var v=i[o];if(!!v){h[o]=!0;var s=v.parent,t=v.node;F(t)||s&&e(s.key)}}}return(u||[]).forEach(function(o){e(o)}),Object.keys(h)}function De(u){return Object.keys(u).reduce(function(i,h){return(h.substr(0,5)==="data-"||h.substr(0,5)==="aria-")&&(i[h]=u[h]),i},{})}var Ke=function(u){(0,q.Z)(h,u);var i=(0,_.Z)(h);function h(){var e;(0,Q.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.domTreeNodes={},e.delayedDragEnterLogic=void 0,e.state={keyEntities:{},selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],dragNodesKeys:[],dragOverNodeKey:null,dropPosition:null,treeNode:[],prevProps:null},e.dragNode=void 0,e.onNodeDragStart=function(t,n){var a=e.state.expandedKeys,l=e.props.onDragStart,r=n.props,c=r.eventKey,f=r.children;e.dragNode=n,e.setState({dragNodesKeys:Ge(f,n),expandedKeys:$(a,c)}),l&&l({event:t,node:n})},e.onNodeDragEnter=function(t,n){var a=e.state.expandedKeys,l=e.props.onDragEnter,r=n.props,c=r.pos,f=r.eventKey;if(!!e.dragNode){var d=ye(t,n);if(e.dragNode.props.eventKey===f&&d===0){e.setState({dragOverNodeKey:"",dropPosition:null});return}setTimeout(function(){e.setState({dragOverNodeKey:f,dropPosition:d}),e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(p){clearTimeout(e.delayedDragEnterLogic[p])}),e.delayedDragEnterLogic[c]=window.setTimeout(function(){var p=R(a,f);"expandedKeys"in e.props||e.setState({expandedKeys:p}),l&&l({event:t,node:n,expandedKeys:p})},400)},0)}},e.onNodeDragOver=function(t,n){var a=e.props.onDragOver,l=n.props.eventKey;if(e.dragNode&&l===e.state.dragOverNodeKey){var r=ye(t,n);if(r===e.state.dropPosition)return;e.setState({dropPosition:r})}a&&a({event:t,node:n})},e.onNodeDragLeave=function(t,n){var a=e.props.onDragLeave;e.setState({dragOverNodeKey:""}),a&&a({event:t,node:n})},e.onNodeDragEnd=function(t,n){var a=e.props.onDragEnd;e.setState({dragOverNodeKey:""}),a&&a({event:t,node:n}),e.dragNode=null},e.onNodeDrop=function(t,n){var a=e.state,l=a.dragNodesKeys,r=l===void 0?[]:l,c=a.dropPosition,f=e.props.onDrop,d=n.props,p=d.eventKey,x=d.pos;if(e.setState({dragOverNodeKey:""}),r.indexOf(p)===-1){var m=He(x),N={event:t,node:n,dragNode:e.dragNode,dragNodesKeys:r.slice(),dropPosition:c+Number(m[m.length-1]),dropToGap:!1};c!==0&&(N.dropToGap=!0),f&&f(N),e.dragNode=null}},e.onNodeClick=function(t,n){var a=e.props.onClick;a&&a(t,n)},e.onNodeDoubleClick=function(t,n){var a=e.props.onDoubleClick;a&&a(t,n)},e.onNodeSelect=function(t,n){var a=e.state.selectedKeys,l=e.state.keyEntities,r=e.props,c=r.onSelect,f=r.multiple,d=n.props,p=d.selected,x=d.eventKey,m=!p;m?f?a=R(a,x):a=[x]:a=$(a,x);var N=a.map(function(g){var k=l[g];return k?k.node:null}).filter(function(g){return g});e.setUncontrolledState({selectedKeys:a}),c&&c(a,{event:"select",selected:m,node:n,selectedNodes:N,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,a){var l=e.state,r=l.keyEntities,c=l.checkedKeys,f=l.halfCheckedKeys,d=e.props,p=d.checkStrictly,x=d.onCheck,m=n.props.eventKey,N,g={event:"check",node:n,checked:a,nativeEvent:t.nativeEvent};if(p){var k=a?R(c,m):$(c,m),K=$(f,m);N={checked:k,halfChecked:K},g.checkedNodes=k.map(function(S){return r[S]}).filter(function(S){return S}).map(function(S){return S.node}),e.setUncontrolledState({checkedKeys:k})}else{var Z=Ne([m],a,r,{checkedKeys:c,halfCheckedKeys:f}),P=Z.checkedKeys,O=Z.halfCheckedKeys;N=P,g.checkedNodes=[],g.checkedNodesPositions=[],g.halfCheckedKeys=O,P.forEach(function(S){var M=r[S];if(!!M){var Y=M.node,Kt=M.pos;g.checkedNodes.push(Y),g.checkedNodesPositions.push({node:Y,pos:Kt})}}),e.setUncontrolledState({checkedKeys:P,halfCheckedKeys:O})}x&&x(N,g)},e.onNodeLoad=function(t){return new Promise(function(n){e.setState(function(a){var l=a.loadedKeys,r=l===void 0?[]:l,c=a.loadingKeys,f=c===void 0?[]:c,d=e.props,p=d.loadData,x=d.onLoad,m=t.props.eventKey;if(!p||r.indexOf(m)!==-1||f.indexOf(m)!==-1)return{};var N=p(t);return N.then(function(){var g=e.state,k=g.loadedKeys,K=g.loadingKeys,Z=R(k,m),P=$(K,m);x&&x(Z,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:Z}),e.setState({loadingKeys:P}),n()}),{loadingKeys:R(f,m)}})})},e.onNodeExpand=function(t,n){var a=e.state.expandedKeys,l=e.props,r=l.onExpand,c=l.loadData,f=n.props,d=f.eventKey,p=f.expanded,x=a.indexOf(d),m=!p;if(m?a=R(a,d):a=$(a,d),e.setUncontrolledState({expandedKeys:a}),r&&r(a,{node:n,expanded:m,nativeEvent:t.nativeEvent}),m&&c){var N=e.onNodeLoad(n);return N?N.then(function(){e.setUncontrolledState({expandedKeys:a})}):null}return null},e.onNodeMouseEnter=function(t,n){var a=e.props.onMouseEnter;a&&a({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var a=e.props.onMouseLeave;a&&a({event:t,node:n})},e.onNodeContextMenu=function(t,n){var a=e.props.onRightClick;a&&(t.preventDefault(),a({event:t,node:n}))},e.setUncontrolledState=function(t){var n=!1,a={};Object.keys(t).forEach(function(l){l in e.props||(n=!0,a[l]=t[l])}),n&&e.setState(a)},e.registerTreeNode=function(t,n){n?e.domTreeNodes[t]=n:delete e.domTreeNodes[t]},e.isKeyChecked=function(t){var n=e.state.checkedKeys,a=n===void 0?[]:n;return a.indexOf(t)!==-1},e.renderTreeNode=function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=e.state,r=l.keyEntities,c=l.expandedKeys,f=c===void 0?[]:c,d=l.selectedKeys,p=d===void 0?[]:d,x=l.halfCheckedKeys,m=x===void 0?[]:x,N=l.loadedKeys,g=N===void 0?[]:N,k=l.loadingKeys,K=k===void 0?[]:k,Z=l.dragOverNodeKey,P=l.dropPosition,O=he(a,n),S=t.key||O;return r[S]?E.cloneElement(t,{key:S,eventKey:S,expanded:f.indexOf(S)!==-1,selected:p.indexOf(S)!==-1,loaded:g.indexOf(S)!==-1,loading:K.indexOf(S)!==-1,checked:e.isKeyChecked(S),halfChecked:m.indexOf(S)!==-1,pos:O,dragOver:Z===S&&P===0,dragOverGapTop:Z===S&&P===-1,dragOverGapBottom:Z===S&&P===1}):(fe(),null)},e}return(0,X.Z)(h,[{key:"render",value:function(){var o=this,v=this.state.treeNode,s=this.props,t=s.prefixCls,n=s.className,a=s.focusable,l=s.style,r=s.showLine,c=s.tabIndex,f=c===void 0?0:c,d=s.selectable,p=s.showIcon,x=s.icon,m=s.switcherIcon,N=s.draggable,g=s.checkable,k=s.checkStrictly,K=s.disabled,Z=s.motion,P=s.loadData,O=s.filterTreeNode,S=De(this.props);return a&&(S.tabIndex=f),(0,y.jsx)(de.Provider,{value:{prefixCls:t,selectable:d,showIcon:p,icon:x,switcherIcon:m,draggable:N,checkable:g,checkStrictly:k,disabled:K,motion:Z,loadData:P,filterTreeNode:O,renderTreeNode:this.renderTreeNode,isKeyChecked:this.isKeyChecked,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop,registerTreeNode:this.registerTreeNode},children:(0,y.jsx)("ul",(0,D.Z)((0,D.Z)({},S),{},{className:w()(t,n,(0,j.Z)({},"".concat(t,"-show-line"),r)),style:l,role:"tree",unselectable:"on",children:ge(v,function(M,Y){return o.renderTreeNode(M,Y)})}))})}}],[{key:"getDerivedStateFromProps",value:function(o,v){var s=v.prevProps,t={prevProps:o};function n(g){return!s&&g in o||s&&s[g]!==o[g]}var a=null;if(n("treeData")?a=me(o.treeData):n("children")&&(a=(0,B.default)(o.children)),a){t.treeNode=a;var l=ze(a);t.keyEntities=l.keyEntities}var r=t.keyEntities||v.keyEntities;if(n("expandedKeys")||s&&n("autoExpandParent")?t.expandedKeys=o.autoExpandParent||!s&&o.defaultExpandParent?ke(o.expandedKeys,r):o.expandedKeys:!s&&o.defaultExpandAll?t.expandedKeys=Object.keys(r):!s&&o.defaultExpandedKeys&&(t.expandedKeys=o.autoExpandParent||o.defaultExpandParent?ke(o.defaultExpandedKeys,r):o.defaultExpandedKeys),o.selectable&&(n("selectedKeys")?t.selectedKeys=xe(o.selectedKeys,o):!s&&o.defaultSelectedKeys&&(t.selectedKeys=xe(o.defaultSelectedKeys,o))),o.checkable){var c;if(n("checkedKeys")?c=ne(o.checkedKeys)||{}:!s&&o.defaultCheckedKeys?c=ne(o.defaultCheckedKeys)||{}:a&&(c=ne(o.checkedKeys)||{checkedKeys:v.checkedKeys,halfCheckedKeys:v.halfCheckedKeys}),c){var f=c,d=f.checkedKeys,p=d===void 0?[]:d,x=f.halfCheckedKeys,m=x===void 0?[]:x;if(!o.checkStrictly){var N=Ne(p,!0,r);p=N.checkedKeys,m=N.halfCheckedKeys}t.checkedKeys=p,t.halfCheckedKeys=m}}return n("loadedKeys")&&(t.loadedKeys=o.loadedKeys),t}}]),h}(E.Component);Ke.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[]};var Ye=Ke,Ze=Ye;Ze.TreeNode=te;var Ve=Ze,re=function(){return{height:0,opacity:0}},Se=function(i){return{height:i.scrollHeight,opacity:1}},Je=function(i){return{height:i.offsetHeight}},Qe={motionName:"ant-motion-collapse",onAppearStart:re,onEnterStart:re,onAppearActive:Se,onEnterActive:Se,onLeaveStart:Je,onLeaveActive:re},Xe=Qe,Ee=C(16165),qe=C(46133),_e=C.n(qe),et=C(3361),tt=C.n(et),nt=C(31929),G=C(83279),rt=["value","flatTreeData","onChange","readonly"],at=function(i){var h=i.value,e=h===void 0?[]:h,o=i.flatTreeData,v=i.onChange,s=i.readonly,t=(0,H.Z)(i,rt);return(0,y.jsx)(ae,(0,D.Z)({checkable:!0,showIcon:!0,defaultCheckedKeys:e,checkedKeys:e,checkStrictly:!0,defaultExpandAll:!0,onCheck:function(a,l){var r=a.checked,c=l.node.props.eventKey;if(!(!c||!v||s)){var f=(o==null?void 0:o.filter(function(d){return d.key.startsWith(c)}).map(function(d){return d.key}))||[];if(l.checked){v((0,G.Z)(new Set([].concat((0,G.Z)(r),(0,G.Z)(f)))));return}if(!l.checked){v(r.filter(function(d){return!f.includes(d)}));return}}}},t))},ae=function(u){(0,q.Z)(h,u);var i=(0,_.Z)(h);function h(){var e;(0,Q.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.tree=void 0,e.renderSwitcherIcon=function(t,n,a){var l=a.isLeaf,r=a.expanded,c=a.loading,f=e.props.showLine;if(c)return(0,y.jsx)(Ee.Z,{type:"loading",className:"".concat(t,"-switcher-loading-icon")});if(l)return f?(0,y.jsx)(Ee.Z,{type:"file",className:"".concat(t,"-switcher-line-icon")}):null;var d="".concat(t,"-switcher-icon");return n?E.cloneElement(n,{className:w()(n.props.className||"",d)}):r?(0,y.jsx)(_e(),{className:d}):(0,y.jsx)(tt(),{className:d})},e.setTreeRef=function(t){e.tree=t},e.renderTree=function(t){var n,a=t.getPrefixCls,l=(0,T.Z)(e),r=l.props,c=r.prefixCls,f=r.className,d=r.showIcon,p=r.switcherIcon,x=r.blockNode,m=r.children,N=r.checkable,g="ant3-tree";return(0,y.jsx)(Ve,(0,D.Z)((0,D.Z)({ref:e.setTreeRef},r),{},{prefixCls:g,className:w()(f,(n={},(0,j.Z)(n,"".concat(g,"-icon-hide"),!d),(0,j.Z)(n,"".concat(g,"-block-node"),x),n)),checkable:N&&(0,y.jsx)("span",{className:"".concat(g,"-checkbox-inner")}),switcherIcon:function(K){return e.renderSwitcherIcon(g,p,K)},children:m}))},e}return(0,X.Z)(h,[{key:"render",value:function(){return(0,y.jsx)(nt.ConfigConsumer,{children:this.renderTree})}}]),h}(E.Component);ae.TreeNode=te,ae.defaultProps={checkable:!1,showIcon:!1,motion:(0,D.Z)((0,D.Z)({},Xe),{},{motionAppear:!1}),blockNode:!1};var ot=C(52125),st=C(57551),it=C(64317),W=C(75291),dt=C(92956),be=C(5966),lt=C(90672),ct=C(64284),ut=["treeData","flatTreeData","readonly"];function ft(u){for(var i=u.split(":"),h=[],e=0;e<i.length;e++)e>0?h.push("".concat(h[e-1],":").concat(i[e])):h.push(i[0]);return h}var z={list:"1",detail:"2",create:"3",update:"4",delete:"5",import:"6",export:"7"},ht=function u(i,h){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"parentKey",o=i.filter(function(s){return s[e]===h}),v=o.filter(function(s){return Object.keys(z).includes(s.key.toLowerCase().split(":").slice(-1)[0])}).length>0;return v&&o.sort(function(s,t){var n=z[s.key.toLowerCase().split(":").slice(-1)[0]]||s,a=z[t.key.toLowerCase().split(":").slice(-1)[0]]||t;return n>a?1:n<a?-1:0}),o.map(function(s){return(0,D.Z)((0,D.Z)({},s),{},{children:u(i,s.key)})})},vt=function(i){var h=i.treeData,e=i.flatTreeData,o=i.readonly,v=(0,H.Z)(i,ut);return(0,y.jsx)(W.ZP.Item,(0,D.Z)((0,D.Z)({},v),{},{children:(0,y.jsx)(at,(0,D.Z)({treeData:h,flatTreeData:e},i.fieldProps))}))},pt=(0,ie.Pi)(function(u){var i=u.onOk,h=u.onClose,e=u.role,o=(0,E.useRef)(),v=!!(e!=null&&e.id),s=(0,ct.Z)(),t=(0,I.m2)(),n=[];t.permissions.filter(function(l){return!l.code.startsWith("ROLE_")}).forEach(function(l){ft(l.code).forEach(function(r,c,f){var d=l.name||s.formatMessage({id:"authority.".concat(r.replaceAll(":",".")),defaultMessage:r});if(!n.find(function(x){return x.key===r})){var p=Object.keys(z).includes(r.toLowerCase().split(":").slice(-1)[0]);n.push({key:r,title:d,icon:p?(0,y.jsx)(ot.Z,{}):(0,y.jsx)(st.Z,{}),parentKey:f[c-1]})}})});var a=ht(n,void 0);return(0,y.jsxs)(dt.a,{title:v?e!=null&&e.id?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272":"\u67E5\u770B\u89D2\u8272",formRef:o,open:!0,initialValues:e,drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){h()}},onFinish:function(){var l=(0,L.Z)((0,b.Z)().mark(function r(c){var f;return(0,b.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!((e==null?void 0:e.code)==="admin"&&c.code!=="admin")){p.next=3;break}return U.default.error("\u9ED8\u8BA4\u7BA1\u7406\u5458\u89D2\u8272\u7F16\u7801\u4E0D\u80FD\u4FEE\u6539"),p.abrupt("return");case 3:return p.next=5,t.saveOrUpdateRole((0,D.Z)((0,D.Z)({},e),c));case 5:f=p.sent,f.success&&i();case 7:case"end":return p.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),children:[(0,y.jsxs)(W.ZP.Group,{children:[(0,y.jsx)(be.Z,{name:"name",width:"md",label:"\u89D2\u8272\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,rules:[{required:!0,message:"\u89D2\u8272\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,y.jsx)(be.Z,{width:"md",name:"code",label:"\u89D2\u8272\u7F16\u7801",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801",rules:[{required:!0,message:"\u89D2\u8272\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],required:!0}),(0,y.jsx)(it.Z,{width:"md",name:"status",label:"\u72B6\u6001",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272\u72B6\u6001"}],fieldProps:{options:[{label:"\u6B63\u5E38",value:1},{label:"\u505C\u7528",value:0}]},required:!0})]}),(0,y.jsx)(W.ZP.Group,{children:(0,y.jsx)(lt.Z,{name:"remark",width:"xl",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0\u4FE1\u606F"})}),(0,y.jsx)(W.ZP.Group,{children:(0,y.jsx)(vt,{name:"authorities",label:"\u89D2\u8272\u6388\u6743",treeData:a,flatTreeData:n})})]})}),Pt=C(57338),gt=C(273),Ot=C(62350),yt=C(24565),xt=C(37809),Ct=C(96642),mt=function(i){var h=i.onClose,e=i.role,o=(0,E.useRef)(),v=(0,E.useState)([]),s=(0,A.Z)(v,2),t=s[0],n=s[1],a=[{title:"\u7EC4\u7EC7\u673A\u6784",dataIndex:"deptName",hideInSearch:!0,width:150},{title:"\u59D3\u540D",dataIndex:"name",ellipsis:!0,width:120},{title:"\u624B\u673A",dataIndex:"phone",width:150,search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,width:100,valueEnum:{0:{text:"\u5931\u6D3B",status:"Default"},1:{text:"\u6FC0\u6D3B",status:"Processing"}}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",width:150,valueType:"dateTime",hideInSearch:!0}];return(0,y.jsx)(se.Z,{title:"\u9009\u62E9\u7528\u6237",open:!0,width:950,onCancel:function(){return h()},okText:"\u6279\u91CF\u6DFB\u52A0",okButtonProps:{disabled:t.length===0},onOk:(0,L.Z)((0,b.Z)().mark(function l(){var r,c;return(0,b.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,I.hi.updateRole({id:e.id,userIds:t});case 2:if(r=d.sent,!r.success){d.next=9;break}return(c=o.current)===null||c===void 0||c.reload(),n([]),d.abrupt("return",!0);case 9:return U.default.error(r.message||"\u6DFB\u52A0\u5931\u8D25"),d.abrupt("return",!1);case 11:case"end":return d.stop()}},l)})),children:(0,y.jsx)(J.ZP,{columns:a,bordered:!0,actionRef:o,params:{neRoleId:e.id},request:function(){var l=(0,L.Z)((0,b.Z)().mark(function r(c){return(0,b.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",I.hi.loadUsers(c));case 1:case"end":return d.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),rowKey:"id",pagination:{defaultPageSize:10},rowSelection:{selectedRowKeys:t,onChange:function(r){n(r)}}})})},Nt=function(i){var h=i.onClose,e=i.role,o=(0,E.useRef)(),v=(0,E.useState)([]),s=(0,A.Z)(v,2),t=s[0],n=s[1],a=(0,E.useState)(),l=(0,A.Z)(a,2),r=l[0],c=l[1],f=function(){var p=(0,L.Z)((0,b.Z)().mark(function x(){var m,N,g,k,K,Z=arguments;return(0,b.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:for(m=Z.length,N=new Array(m),g=0;g<m;g++)N[g]=Z[g];return O.next=3,I.hi.updateRole({id:e.id,evictUserIds:N});case 3:if(k=O.sent,!k.success){O.next=9;break}return(K=o.current)===null||K===void 0||K.reload(),O.abrupt("return",!0);case 9:return U.default.error(k.message||"\u53D6\u6D88\u5931\u8D25"),O.abrupt("return",!1);case 11:case"end":return O.stop()}},x)}));return function(){return p.apply(this,arguments)}}(),d=[{title:"\u7EC4\u7EC7\u673A\u6784",dataIndex:"deptName",hideInSearch:!0,width:150},{title:"\u59D3\u540D",dataIndex:"name",ellipsis:!0,width:120},{title:"\u624B\u673A",dataIndex:"phone",width:150,search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,width:100,valueEnum:{0:{text:"\u5931\u6D3B",status:"Default"},1:{text:"\u6FC0\u6D3B",status:"Processing"}}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",width:180,hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(x,m){return[(0,y.jsx)(yt.Z,{title:(0,y.jsxs)(y.Fragment,{children:["\u786E\u5B9A\u53D6\u6D88\u7528\u6237 ",(0,y.jsx)("b",{children:e.name})," \u89D2\u8272\u5417\uFF1F"]}),onConfirm:(0,L.Z)((0,b.Z)().mark(function N(){return(0,b.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:f(m.id);case 1:case"end":return k.stop()}},N)})),children:(0,y.jsx)("a",{children:"\u53D6\u6D88\u6388\u6743"},"editable")})]}}];return(0,y.jsxs)(gt.Z,{title:"\u5206\u914D\u7528\u6237",onClose:h,open:!0,width:1e3,children:[(0,y.jsx)(J.ZP,{columns:d,bordered:!0,actionRef:o,params:{roleId:e.id},request:function(){var p=(0,L.Z)((0,b.Z)().mark(function x(m){return(0,b.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",I.hi.loadUsers(m));case 1:case"end":return g.stop()}},x)}));return function(x){return p.apply(this,arguments)}}(),rowKey:"id",pagination:{defaultPageSize:10},rowSelection:{selectedRowKeys:t,onChange:function(x){n(x)}},toolBarRender:function(){return[(0,y.jsx)(V.Z,{icon:(0,y.jsx)(xt.Z,{}),type:"primary",onClick:function(){c(!0)},children:"\u6DFB\u52A0\u7528\u6237"},"batchAdd"),(0,y.jsx)(V.Z,{danger:!0,disabled:t.length===0,icon:(0,y.jsx)(Ct.Z,{}),type:"primary",onClick:(0,L.Z)((0,b.Z)().mark(function x(){return(0,b.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,f.apply(void 0,(0,G.Z)(t));case 2:n([]);case 3:case"end":return N.stop()}},x)})),children:"\u6279\u91CF\u53D6\u6D88\u6388\u6743"},"batchCancel")]}}),r&&(0,y.jsx)(mt,{role:e,onClose:function(){var x;c(!1),(x=o.current)===null||x===void 0||x.reload()}})]})},kt=(0,ie.Pi)(function(){var u=(0,I.m2)(),i=(0,E.useRef)(),h=(0,E.useState)(),e=(0,A.Z)(h,2),o=e[0],v=e[1],s=(0,E.useState)(),t=(0,A.Z)(s,2),n=t[0],a=t[1];(0,E.useEffect)(function(){u.loadPermissions()},[u]);var l=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"name",ellipsis:!0,width:150},{title:"\u7F16\u7801",dataIndex:"code",hideInSearch:!0,width:150},{title:"\u63CF\u8FF0",dataIndex:"remark",search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,renderText:function(c,f,d,p){return(0,y.jsx)(Te.Z,{checked:c===1,onChange:function(m){I.hi.updateRole({id:f.id,status:m?1:0}).then(function(N){if(N.success){var g;(g=i.current)===null||g===void 0||g.reload()}})}})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",valueType:"dateTime",hideInSearch:!0,width:200},{title:"\u64CD\u4F5C",valueType:"option",width:200,render:function(c,f){return[(0,y.jsx)("a",{onClick:function(){a({current:f,visible:!0})},children:"\u7F16\u8F91"},"edit"),(0,y.jsx)(we.Z,{onSelect:function(p){p==="delete"?se.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u89D2\u8272?",icon:(0,y.jsx)(Pe.Z,{}),onOk:function(){u.deleteRole(f.id).then(function(m){if(m.success){var N;U.default.success("\u5220\u9664\u6210\u529F"),(N=i.current)===null||N===void 0||N.reload()}})}}):p==="roleUser"&&v(f)},menus:f.code==="admin"?[{key:"roleUser",name:"\u5206\u914D\u7528\u6237"}]:[{key:"roleUser",name:"\u5206\u914D\u7528\u6237"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];return(0,y.jsxs)(je._z,{title:!1,children:[(0,y.jsx)(J.ZP,{columns:l,bordered:!0,actionRef:i,dataSource:u.roles,request:function(){var r=(0,L.Z)((0,b.Z)().mark(function c(f){return(0,b.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",u.loadRoles(f));case 1:case"end":return p.stop()}},c)}));return function(c){return r.apply(this,arguments)}}(),scroll:{x:800},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:5},dateFormatter:"string",headerTitle:"\u7CFB\u7EDF\u89D2\u8272\u5217\u8868",toolBarRender:function(){return[(0,y.jsx)(V.Z,{icon:(0,y.jsx)(Oe.Z,{}),type:"primary",onClick:function(){a({visible:!0})},children:"\u65B0\u5EFA"},"button")]}}),(n==null?void 0:n.visible)&&(0,y.jsx)(pt,{onClose:function(){a(void 0)},onOk:function(){var c;a(void 0),(c=i.current)===null||c===void 0||c.reload()},role:n.current}),o&&(0,y.jsx)(Nt,{role:o,onClose:function(){return v(void 0)}})]})}),Dt=kt}}]);

(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[1843],{87520:function(oe,N,r){"use strict";r.r(N),r.d(N,{ExamResult:function(){return I},default:function(){return le}});var p={};r.r(p),r.d(p,{Number0:function(){return J},Number1:function(){return W},Number2:function(){return X},Number3:function(){return $},Number4:function(){return q},Number5:function(){return _},Number6:function(){return ee},Number7:function(){return re},Number8:function(){return ne},Number9:function(){return te},NumberDot:function(){return E},ScoreUnderline:function(){return Z}});var g=r(9761),m=r(67294),z=r(5977),x=r(39428),w=r(3182),B=r(69610),D=r(54941),C=r(3980),j=r(54531),O=function(){function i(n){(0,B.Z)(this,i),this.id=void 0,this.answerId=void 0,this.examResult=void 0,this.id=n.id,this.answerId=n.answerId,this.makeObservable(),this.loadExamResult()}return(0,D.Z)(i,[{key:"makeObservable",value:function(){(0,j.Ou)(this,{id:j.LO.ref,answerId:j.LO.ref,examResult:j.LO.ref,loadExamResult:j.aD})}},{key:"loadExamResult",value:function(){var n=(0,w.Z)((0,x.Z)().mark(function a(){var u;return(0,x.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,C.hi.loadExamResult({id:this.id,answerId:this.answerId});case 2:u=l.sent,u.success&&(this.examResult=u.data);case 4:case"end":return l.stop()}},a,this)}));function t(){return n.apply(this,arguments)}return t}()}]),i}(),de=r(20136),T=r(55241),ue=r(49111),A=r(19650),ce=r(57663),R=r(71577),ve=r(34792),F=r(48086),U=r(94657),V=r(71555),H=r(23538),S=r(92592),P=r(74855),L=m.createContext({});function y(){return(0,m.useContext)(L)}var e=r(85893),Y=(0,g.Pi)(function(){var i=y(),n=i.examResult,t=(0,m.useState)(""),a=(0,U.Z)(t,2),u=a[0],f=a[1];(0,m.useEffect)(function(){function s(){return o.apply(this,arguments)}function o(){return o=(0,w.Z)((0,x.Z)().mark(function c(){return(0,x.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:S.toDataURL(window.location.href,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:1}).then(function(v){f(v)}).catch(function(v){console.error(v)});case 1:case"end":return d.stop()}},c)})),o.apply(this,arguments)}s()},[]);var l=function(){var s=(0,w.Z)((0,x.Z)().mark(function o(c){return(0,x.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:S.toDataURL(window.location.href,{errorCorrectionLevel:"H",margin:1,width:c}).then(function(v){f(v);var h=document.createElement("a");h.href=v,h.setAttribute("download","".concat(n==null?void 0:n.name,"_").concat(c,".png")),document.body.appendChild(h),h.click(),document.body.removeChild(h)});case 1:case"end":return d.stop()}},o)}));return function(c){return s.apply(this,arguments)}}(),M=function(){if(console.log(n==null?void 0:n.schema),n!=null&&n.schema){var o,c,b=(o=n.schema.children)===null||o===void 0?void 0:o.reduce(function(d,v){var h;return(h=v.attribute)!==null&&h!==void 0&&h.examScore?d+v.attribute.examScore:d},0);return(0,e.jsxs)("span",{className:"total-score",children:["\u603B\u5206",b||((c=n.schema.attribute)===null||c===void 0?void 0:c.examScore),"\u5206"]})}return(0,e.jsx)(e.Fragment,{})};return(0,e.jsxs)("div",{className:"exam-result-header",children:[(0,e.jsxs)("div",{className:"header-content",children:[(0,e.jsx)(P.CopyToClipboard,{text:"".concat(window.location.href),onCopy:function(){return F.default.success("\u590D\u5236\u6210\u529F")},children:(0,e.jsx)(R.Z,{icon:(0,e.jsx)(V.Z,{}),children:"\u5206\u4EAB\u7ED9\u597D\u53CB"})}),(0,e.jsx)(T.Z,{overlayInnerStyle:{border:"1px solid rgb(225, 231, 242)",borderRadius:3,boxShadow:"rgb(224 229 236 / 40%) 0px 3px 8px 0px"},content:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:u,height:100,width:100}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(A.Z,{children:[(0,e.jsx)("a",{onClick:function(){return l(256)},children:"\u5C0F\u53F7"}),(0,e.jsx)("a",{onClick:function(){return l(512)},children:"\u4E2D\u53F7"}),(0,e.jsx)("a",{onClick:function(){return l(1024)},children:"\u5927\u53F7"})]})})]}),children:(0,e.jsx)(R.Z,{icon:(0,e.jsx)(H.Z,{}),type:"text"})})]}),(0,e.jsxs)("div",{className:"title",children:[n==null?void 0:n.name,M()]})]})}),he=r(66456),Q=r(53831),G=r(18111),K=r(27484),k=r.n(K),J=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024","p-id":"1361","data-spm-anchor-id":"a313x.7781069.0.i5",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M383.07989 126.788545l396.245994 67.928045 1.415284 701.919397-533.517367-66.51276 135.856089-703.334682z m512.288105 834.944918l-1.415284-815.13094-48.114067-56.605771L347.703381 5.085297 282.605904 51.78408 122.689985 868.335898l48.119661 67.928045 659.460873 82.075292 65.097476-56.605772z","p-id":"1362","data-spm-anchor-id":"a313x.7781069.0.i6"})}),W=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M721.875514 50.613231L635.921319 3.610078 300.167797 252.066458l65.809987 87.297142 237.712802-178.623125L541.909442 1012.213591l107.44135 8.057683L721.875514 50.613231z","p-id":"1206"})}),X=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M897.62003 940.716242l-11.754723-104.450063-552.277836 61.364204 485.693625-547.052281-5.225554-75.726157-319.873811-267.6571L431.508365 3.278453 120.770953 216.094971 179.527927 302.266689l278.097114-189.312619 248.064046 207.590964L163.856812 928.967066l43.085859 87.475333 690.677359-75.726157z","p-id":"1518"})}),$=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M737.423214 989.936662l187.89454-346.261526-33.553787-79.180716-340.891365-84.55643 381.153688-295.258882-26.839698-96.629574L290.505882 2.154728l-14.761001 107.369896 488.523583 68.445948-367.736616 285.862489 20.131162 95.291198 379.815312 93.947271-134.209592 249.626398-550.260996-118.104663-24.157393 104.687592 590.523317 127.495503 59.049556-26.839698z","p-id":"1676"})}),q=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M966.522808 751.55574l-4.036306-108.963429-219.262936 5.383613 44.388142-521.92977-108.957815-9.414305-44.393755 534.033075-447.940178 9.419919L429.79512 41.300564 328.909918 2.290421 54.491615 695.058679l52.460754 73.983979 517.893463-10.761612-21.523224 254.236772 107.616122 8.072612 22.864917-263.656691 232.719161-5.377999z","p-id":"1832"})}),_=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M784.968235 982.615128l170.861419-435.28703-43.393376-74.585138-538.346299-56.953806 56.953806-301.041546h474.615051V6.269714H384.938323l-54.24172 44.746646-74.579592 402.741998 47.458732 65.090064 524.785868 55.600536-128.821312 325.444774-614.284706-135.6043L60.846819 871.419602l661.743438 145.093828 62.377978-33.898302z","p-id":"1988"})}),ee=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M672.288828 1004.206903l275.275297-318.669393-20.336395-86.788192-424.444619-180.357063-42.033443 101.704559 353.922156 150.524329-199.338452 233.236208-413.593272-151.87369L576.009942 53.618752 479.731056 2.088969 74.273472 757.403689l31.187742 75.94249 508.517151 185.777092 58.310463-14.916368z","p-id":"2146"})}),re=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M885.422422 150.609477l-47.387874-83.290486L141.556268 8.440271 130.065421 123.326396l616.05911 54.566161-363.316338 789.818369 104.830936 47.39346 397.783293-864.494909z","p-id":"2302"})}),ne=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M590.001388 117.347799l121.780542 133.82422-175.307999 157.905999-219.468152-171.287864 272.995609-120.442355z m-49.512898 432.245371l263.628304 204.748101-220.806338 151.215067-343.91949-85.643932 301.097524-270.319236z m84.305746 459.0091l301.097524-204.748101 2.676373-89.658491-305.112084-236.864576 200.733542-180.660744 2.676372-77.614814L643.528846 16.983816l-62.894763-13.381864-390.761591 171.287864-12.043678 91.002253 275.677557 216.791779L90.846695 807.868728l24.087356 92.334865 465.700032 115.089609 44.160153-6.690932z","p-id":"2458"})}),te=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M908.989292 186.728233l-39.335692-75.962037L392.18431 6.317002l-55.614067 23.06289L108.684132 344.076574l20.34797 81.386304 377.089689 180.405657 47.480454-99.019353-317.411602-150.563826L404.393092 121.61473l375.735016 81.391879-345.893185 769.103081 100.374026 44.765533L908.989292 186.728233z","p-id":"2614"})}),E=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",width:"12",height:"12",children:(0,e.jsx)("path",{d:"M653.3 515.4c0 38.7-14 72-42.1 99.9s-61.4 41.9-100 41.9c-38.3 0-71.1-13.9-98.6-41.6-27.5-27.8-41.3-61.1-41.3-100.2 0-38.7 13.6-71.9 40.7-99.6s60.2-41.6 99.2-41.6c39.7 0 73.3 14 100.8 41.9 27.5 27.8 41.3 61 41.3 99.3z","p-id":"7081"})}),Z=(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,e.jsx)("path",{d:"M281.6 435.2c38.4-8.533333 247.466667-59.733333 520.533333-76.8 46.933333-4.266667 55.466667-29.866667 29.866667-38.4-21.333333-8.533333-192-29.866667-563.2 55.466667-42.666667 8.533333-64 21.333333-81.066667 42.666666-8.533333 8.533333-8.533333 25.6 0 34.133334 12.8 17.066667 64-12.8 93.866667-17.066667z m550.4 38.4c-64 4.266667-392.533333 17.066667-721.066667 136.533333-59.733333 21.333333-93.866667 42.666667-93.866666 76.8 0 12.8 4.266667 4.266667 17.066666 21.333334 42.666667 42.666667 170.666667-145.066667 887.466667-196.266667 0 0 76.8 0 76.8-21.333333 4.266667-25.6-93.866667-21.333333-166.4-17.066667z","p-id":"1873"})}),ae=(0,g.Pi)(function(){var i,n=y(),t=n.examResult;if(!t||!t.examScore)return(0,e.jsx)(e.Fragment,{});var a=(i=t.metaInfo)===null||i===void 0?void 0:i.answerInfo,u=function(){return t.examScore===void 0?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)("div",{className:"score",children:"".concat(t.examScore).split("").map(function(s){return s!=="."?m.cloneElement(p["Number"+s],{key:s,height:32,width:24,fill:"currentColor",focusable:"false","aria-hidden":"true"}):m.cloneElement(E,{key:s,height:12,width:12,fill:"currentColor",focusable:"false","aria-hidden":"true"})}).concat([m.cloneElement(Z,{key:"underline",height:24,width:48,className:"score-underline",fill:"currentColor",focusable:"false","aria-hidden":"true"})])})},f=[{title:"\u5F53\u524D\u6392\u540D",dataIndex:"rank",align:"center"},{title:"\u7B54\u9898\u65F6\u957F",dataIndex:"duration",align:"center"},{title:"\u63D0\u4EA4\u65F6\u95F4",dataIndex:"submitTime",align:"center"}],l=[{key:"1",rank:t.rank,duration:(0,G.gh)(((a==null?void 0:a.endTime)||0)-((a==null?void 0:a.startTime)||0)),submitTime:k()(a==null?void 0:a.endTime).format("YYYY.MM.DD HH:mm")}];return t.rank===void 0&&f.splice(0,1),(0,e.jsxs)("div",{className:"exam-result-mine",children:[u(),(0,e.jsx)(Q.Z,{className:"result-info",bordered:!0,size:"small",rowKey:"key",pagination:!1,columns:f,dataSource:l})]})}),ie=r(68068),se=(0,g.Pi)(function(){var i,n=y(),t=n.examResult,a=(0,C.dD)();return!t||!t.schema?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)("div",{children:(0,e.jsx)(ie.Z,{schema:t.schema,initialValues:t.answer,readOnly:!0,theme:a?"antdMobile":"antd",headerVisible:!1,footerVisible:!1,paginationVisible:!1,questionNumber:!1,correctAnswerVisible:!0,examScoreVisible:!0,mode:"exam",questionScore:(i=t.examInfo)===null||i===void 0?void 0:i.questionScore})})}),I=(0,g.Pi)(function(i){var n=(0,z.UO)(),t=n.id,a=n.answerId,u=(0,m.useMemo)(function(){return new O({id:t,answerId:a})},[]);return(0,e.jsx)(L.Provider,{value:u,children:(0,e.jsxs)("div",{className:"exam-result",children:[(0,e.jsx)(Y,{}),(0,e.jsx)(ae,{}),(0,e.jsx)(se,{})]})})}),le=I}}]);

(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[12,23],{1153:function(e,t,n){"use strict";n.r(t);var r=n(58),c=n(619),s=n.n(c),i=n(620),o=n(156),a=n(1),l=n(621),u=n(641),d=n(628),p=n.n(d),j=n(623),h=n(1133),b=n(624),f=n(627),O=n(29),x=function(e){var t=e.discussion,n=e.setDiscussion,c=e.setToastMessage,d=(e.toastMessages,e.loadDiscussionsList),p=Object(a.useState)([]),j=Object(o.a)(p,2),h=j[0],x=j[1],g=Object(a.useState)(!1),y=Object(o.a)(g,2),m=y[0],w=y[1],v=Object(a.useState)(),k=Object(o.a)(v,2),A=k[0],C=k[1],N=function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),w(!0),r=function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===n){e.next=8;break}return r={title:t.title,description:t.description,category:t.category?t.category:h[0]._id,isPublic:t.isPublic.toString()},-2!==n&&(r.medias=[n]),console.log(r),e.next=6,Object(u.b)(t._id,r,c);case 6:e.sent.ok?(d(),c([{title:"Congrats!",description:"The information of discussion with id: "+t._id+" has been successfuly changed",type:"success"}])):c([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 8:w(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!A){e.next=8;break}return e.next=6,Object(f.b)(A,c,r);case 6:e.next=9;break;case 8:r(-2);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent.data,x(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){P()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.g,{children:Object(O.jsx)(l.h,{children:Object(O.jsx)(l.U,{children:Object(O.jsxs)(l.l,{sm:"12",children:[Object(O.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"ID: "+t._id}),Object(O.jsx)("div",{className:"small text-muted",children:(new Date).toDateString()})]})})})}),Object(O.jsx)(l.v,{action:"",method:"discussion",onSubmit:N,children:Object(O.jsx)(l.U,{children:Object(O.jsx)(l.l,{sm:"12",children:Object(O.jsxs)(l.g,{children:[Object(O.jsxs)(l.h,{children:[Object(O.jsxs)(l.w,{children:[Object(O.jsx)(l.K,{htmlFor:"title",children:"Discussion Title"}),Object(O.jsx)(l.E,{type:"text",id:"title",required:!0,placeholder:"Enter title...",onInput:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{title:e.target.value}))},autoComplete:"name",value:t.title})]}),Object(O.jsxs)(l.w,{row:!0,children:[Object(O.jsx)(l.K,{col:!0,md:"2",htmlFor:"file-input",children:"Image/Video"}),Object(O.jsx)(l.l,{xs:"12",md:"9",className:"ml-n5 mt-1",children:Object(O.jsx)(l.F,{id:"file-input",name:"file-input",onChange:function(e){return C(e.target.files[0])}})})]}),Object(O.jsx)(l.w,{row:!0,children:Object(O.jsxs)(l.l,{xs:"12",sm:"3",children:[Object(O.jsx)(l.K,{htmlFor:"select",children:"Category"}),Object(O.jsx)(l.V,{custom:!0,name:"category",id:"category",required:!0,onChange:function(e){n(Object(r.a)(Object(r.a)({},t),{},{category:e.target.value}))},value:t.category?t.category._id:h[0]?h[0]._id:"",children:h.filter((function(e){return"general"===e.type})).map((function(e){return Object(O.jsx)("option",{value:e._id,children:e.name},e._id)}))})]})}),Object(O.jsxs)(l.w,{row:!0,children:[Object(O.jsx)(l.l,{tag:"label",sm:"4",className:"col-form-label",children:"I want to publish this discussion:"}),Object(O.jsx)(l.l,{sm:"1",className:"ml-n5",children:Object(O.jsx)(l.gb,{onChange:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{isPublic:e.target.checked}))},className:"ml-n5 mt-1",color:"info",checked:!!t.isPublic})})]}),Object(O.jsxs)(l.w,{children:[Object(O.jsx)(l.K,{htmlFor:"textarea-input",children:"Description"}),Object(O.jsx)(l.hb,{rows:"6",name:"description",id:"description",onInput:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{description:e.target.value}))},value:t.description})]})]}),Object(O.jsxs)(l.i,{className:"d-flex",children:[Object(O.jsx)(l.f,{type:"submit",size:"md",className:"btn btn-info",children:"Edit Discussion"})," ",Object(O.jsx)(l.L,{size:"sm",className:"btn btn-danger ml-2",children:"Cancel"}),m?Object(O.jsx)("div",{className:"w-25",children:Object(O.jsx)(l.eb,{className:"ml-2"})}):null]})]})})})})]})},g=(n(1114),n(1118),function(e){var t=e.discussion;return console.log("discussion: ",t),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.g,{children:Object(O.jsx)(l.h,{children:Object(O.jsx)(l.U,{children:Object(O.jsxs)(l.l,{sm:"12",children:[Object(O.jsxs)("h4",{id:"traffic",className:"card-title mb-0",children:["ID: ",t._id]}),Object(O.jsx)("div",{className:"small text-muted",children:(new Date).toDateString()})]})})})}),t?Object(O.jsxs)(l.U,{children:[Object(O.jsx)(l.l,{sm:t.medias[0]?"6":"12",children:Object(O.jsxs)(l.M,{children:[Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Title: "}),t.title]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"#Replies: "}),t.replies.length]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Owner: "}),t.owner?t.owner.email:"Not specified"]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Category: "}),t.category?t.category.name:"Not specified"]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Is this discussion visible for users: "}),Object(O.jsx)(l.b,{color:t.isPublic?"success":"danger",className:"ml-2 p-2",children:t.isPublic?"Yes":"No"})]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Created At: "}),t.createdAt?t.createdAt.replace("T"," ").replace("Z",""):""]}),Object(O.jsxs)(l.N,{children:[Object(O.jsx)("strong",{children:"Last Update At: "}),t.updatedAt?t.updatedAt.replace("T"," ").replace("Z",""):""]})]})}),Object(O.jsx)(l.l,{sm:"6",children:t.medias[0]?Object(O.jsx)(l.D,{style:{maxHeight:"300px",maxWidth:"100%",marginTop:"10px"},src:t.medias[0].path}):null})]}):null,Object(O.jsxs)(l.g,{className:"mt-4",children:[Object(O.jsx)(l.k,{children:"Description:"}),Object(O.jsx)("p",{className:"pl-4 pt-3",children:t.description})]})]})}),y=n(694),m=function(e){return Object(O.jsx)(j.a,{content:h.a[e]})};t.default=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],d=Object(a.useState)({show:!1}),j=Object(o.a)(d,2),h=j[0],b=j[1],f=Object(a.useState)([]),w=Object(o.a)(f,2),v=w[0],k=w[1],A=Object(a.useState)(""),C=Object(o.a)(A,2),N=C[0],P=C[1],T=Object(a.useState)(!0),D=Object(o.a)(T,2),S=D[0],E=D[1],L=Object(a.useState)([]),I=Object(o.a)(L,2),_=I[0],q=I[1],M=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,Object(u.c)();case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent.data,console.log(n),c(n),z(N,n),E(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e,t){e=e.toLowerCase();var r=(t||n).filter((function(t){return t.title.toLowerCase().includes(e)||t.owner.email.toLowerCase().includes(e)||t.createdAt.toString().includes(e)})).sort((function(e,t){return e.createdAt-t.createdAt})).reverse();k(r),P(e)},B=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(t,{isDeleted:"true"},q);case 2:if(!(n=e.sent).ok){e.next=9;break}return q([{title:"Congrats!",description:"The Discussion with id: "+t+" has been successfuly deleted",type:"success"}]),e.next=7,M();case 7:e.next=10;break;case 9:q([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 10:console.log(n),b({show:!1,type:"delete"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(t,{isPublic:!h.isPublic+""},q);case 2:if(!(n=e.sent).ok){e.next=9;break}return q([{title:"Congrats!",description:"The publicity status of Discussion with id: "+t+" has been successfuly changed",type:"success"}]),e.next=7,M();case 7:e.next=10;break;case 9:q([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 10:console.log(n),b({show:!1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){M()}),[]);var H=[{name:Object(O.jsx)("strong",{children:"Title"}),selector:"title",sortable:!0,left:!0},{name:Object(O.jsx)("strong",{children:"Category"}),selector:"category",sortable:!0,left:!0,cell:function(e){return e.category?e.category.name:"Not specified"}},{name:Object(O.jsx)("strong",{children:"Posted at"}),selector:"date",sortable:!0,center:!0,cell:function(e){return e.createdAt.split("T")[0]}},{name:Object(O.jsx)("strong",{children:"Author"}),selector:"owner.email",sortable:!0,center:!0},{name:Object(O.jsx)("strong",{children:"Is Visible"}),selector:"isPublic",sortable:!0,center:!0,cell:function(e){return Object(O.jsx)(l.b,{color:e.isPublic?"success":"danger",className:"float-right",children:e.isPublic?"Yes":"No"})}},{name:"",selector:"_id",cell:function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.L,{className:"card-header-action",onClick:function(){return b(Object(r.a)(Object(r.a)({},e),{},{show:!h.show,type:"detail"}))},children:m("cilInfo")}),Object(O.jsx)(l.L,{className:"card-header-action",onClick:function(){return b(Object(r.a)(Object(r.a)({},e),{},{show:!h.show,type:"edit"}))},children:m("cilPencil")}),Object(O.jsx)(l.L,{className:"card-header-action",onClick:function(){return b({id:e._id,title:e.title,isPublic:e.isPublic,show:!h.show,type:"isPublic"})},children:m("cilCloudUpload")}),Object(O.jsx)(l.L,{className:"card-header-action",onClick:function(){return b({id:e._id,title:e.title,show:!h.show,type:"delete"})},children:m("cilTrash")}),Object(O.jsx)(l.L,{className:"card-header-action",onClick:function(){return b({id:e._id,replies:e.replies,show:!h.show,type:"replies"})},children:m("cilCommentBubble")})]})}}];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.g,{children:Object(O.jsxs)(l.h,{children:[Object(O.jsx)(l.U,{children:Object(O.jsx)(l.l,{sm:"6"})}),Object(O.jsx)(l.U,{children:Object(O.jsxs)(l.l,{sm:"12",children:[Object(O.jsx)(l.E,{type:"text",id:"searchText",placeholder:"search by keyword ...",onInput:function(e){return z(e.target.value)}}),Object(O.jsx)(p.a,{title:"Discussions List",columns:H,data:v,highlightOnHover:!0,pagination:!0,progressPending:S})]})})]})}),Object(O.jsxs)(l.O,{show:h.show,onClosed:function(){b({show:!1,type:h.type})},color:"delete"===h.type?"danger":"isPublic"===h.type?"warning":"info",size:"edit"===h.type||"detail"===h.type||"replies"===h.type?"xl":"",children:[Object(O.jsx)(l.R,{closeButton:!0,children:Object(O.jsx)(l.S,{children:"delete"===h.type?"Delete Discussion account":"edit"===h.type?"Edit Discussion profile":"detail"===h.type?"Discussion detail":"Change Publicity status"})}),h.show?Object(O.jsxs)(l.P,{children:["delete"===h.type?Object(O.jsxs)("div",{children:["Are you sure you want to delete ",Object(O.jsx)("strong",{children:h.title}),"?"]}):"isPublic"===h.type?Object(O.jsxs)("div",{children:["Are you sure you want to change publicity status of ",Object(O.jsx)("strong",{children:h.title}),"?"]}):null,"edit"===h.type?Object(O.jsx)(x,{loadDiscussionsList:M,discussion:h,setDiscussion:b,setToastMessage:q,toastMessages:_}):"detail"===h.type?Object(O.jsx)(g,{discussion:h}):"replies"===h.type?Object(O.jsx)(y.default,{discussion:h,setToastMessage:q,loadDiscussionsList:M}):null]}):null,"delete"===h.type||"isPublic"===h.type?Object(O.jsxs)(l.Q,{children:[Object(O.jsx)(l.f,{color:"delete"===h.type?"danger":"warning",onClick:function(){return"delete"===h.type?B(h.id):F(h.id)},children:"Yes"}),Object(O.jsx)(l.f,{color:"secondary",onClick:function(){return b({show:!1})},children:"Cancel"})]}):null]}),_.map((function(e){return console.log(e),Object(O.jsx)(l.lb,{position:"bottom-right",children:Object(O.jsxs)(l.ib,{show:!0,autohide:3e3,fade:!0,color:e.type,children:[Object(O.jsx)(l.kb,{closeButton:!0,children:e.title}),Object(O.jsx)(l.jb,{children:e.description})]},Math.floor(1e6*Math.random()))},"toaster"+Math.floor(1e6*Math.random()))}))]})}},624:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(619),c=n.n(r),s=n(620),i=n(622),o="Bearer "+localStorage.getItem("HDI-token"),a=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Object(i.a)("CategoriesList"),{method:"GET",mode:"cors",headers:{Authorization:o,Accept:"application/json"}}).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("CategoriesEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:o,Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e})).catch((function(e){console.log(e),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("CategoriesDelete")+"/"+t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:o,Accept:"application/json"}}).then((function(e){return e})).catch((function(e){console.log(e),n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("CategoriesAdd"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:o,Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e})).catch((function(e){console.log(e),n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},627:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j}));var r=n(619),c=n.n(r),s=n(620),i=n(622),o=n(632),a="indigenous-images",l=new(n.n(o).a.S3)({accessKeyId:"AKIAWBK3UNFZVVF7OF4B",secretAccessKey:"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"}),u="Bearer "+localStorage.getItem("HDI-token"),d=function(){var e=Object(s.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("MediasAdd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:u,Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e})).catch((function(e){console.log(e),n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={Bucket:a,Key:Math.floor(1e10*Math.random()).toString(),Body:t,ContentType:"image/jpeg",ACL:"public-read-write"},l.upload(i,function(){var e=Object(s.a)(c.a.mark((function e(s,i){var o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s&&n([{title:"Error!",description:"An error occured while processing the request: "+s,type:"danger"}]),console.log("File uploaded successfully.",i),e.next=4,d({type:"image",extension:"."+t.name.split(".")[1],path:i.Location},n);case 4:if(!(o=e.sent).ok){e.next=13;break}return e.next=8,o.json();case 8:return a=e.sent,e.next=11,r(a.data._id);case 11:e.next=16;break;case 13:return e.next=15,r(-1);case 15:n([{title:"Error!",description:"An error occured while processing the request: "+s,type:"danger"}]);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],t.forEach((function(e){var t={Bucket:a,Key:Math.floor(1e10*Math.random()).toString(),Body:e.content,ContentType:"image/jpeg",ACL:"public-read-write"};i.push({type:e.type,promise:l.upload(t).promise()})})),Promise.all(i.map((function(e){return e.promise}))).then(function(){var e=Object(s.a)(c.a.mark((function e(s){var i,o,a,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],o=0;case 2:if(!(o<s.length)){e.next=23;break}if(console.log("File uploaded successfully.",s[o]),"icon"===t[o].type){e.next=19;break}return e.next=7,d({type:"image",extension:".jpg",path:s[o].Location},n);case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:l=e.sent,i.push(l.data._id),e.next=17;break;case 15:return n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]),e.abrupt("return");case 17:e.next=20;break;case 19:i.push(s[o].Location);case 20:o++,e.next=2;break;case 23:return e.next=25,r(i);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},630:function(e,t){},641:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return a}));var r=n(619),c=n.n(r),s=n(620),i=n(622),o="Bearer "+localStorage.getItem("HDI-token"),a=function(){var e=Object(s.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("DiscussionsAdd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:o,Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e})).catch((function(e){console.log(e),n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Object(i.a)("DiscussionsList"),{method:"GET",mode:"cors",headers:{Authorization:o,Accept:"application/json"}}).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(i.a)("DiscussionsEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:o,Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e})).catch((function(e){console.log(e),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},694:function(e,t,n){"use strict";n.r(t);var r=n(619),c=n.n(r),s=n(620),i=n(156),o=n(1),a=n(621),l=n(622),u="Bearer "+localStorage.getItem("HDI-token"),d=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(l.a)("RepliesEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:u,Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e})).catch((function(e){console.log(e),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=n(628),j=n.n(p),h=n(623),b=n(1133),f=n(29),O=function(e){return Object(f.jsx)(h.a,{content:b.a[e]})};t.default=function(e){var t=e.discussion,n=e.setToastMessage,r=e.loadDiscussionsList,l=Object(o.useState)({show:!1}),u=Object(i.a)(l,2),p=u[0],h=u[1],b=Object(o.useState)([]),x=Object(i.a)(b,2),g=x[0],y=x[1],m=Object(o.useState)(""),w=Object(i.a)(m,2),v=w[0],k=w[1],A=Object(o.useState)(!0),C=Object(i.a)(A,2),N=C[0],P=C[1],T=function(){var e=Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(!0),n=t.replies,D(v,n),P(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e,n){e=e.toLowerCase();var r=(n||t.replies).filter((function(t){return t.text.toLowerCase().includes(e)||t.owner.firstName.toLowerCase().includes(e)||t.owner.lastName.toLowerCase().includes(e)||t.createdAt.toString().includes(e)})).sort((function(e,t){return e.createdAt-t.createdAt})).reverse();y(r),k(e)},S=function(){var e=Object(s.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s,{isDeleted:"true"},n);case 2:if(!(i=e.sent).ok){e.next=11;break}return n([{title:"Congrats!",description:"The Reply with id: "+s+" has been successfuly deleted",type:"success"}]),t.replies=t.replies.filter((function(e){return e._id!==s})),e.next=8,T();case 8:r(),e.next=12;break;case 11:n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 12:console.log(i),h({show:!1,type:"delete"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s,{isPublic:!p.isPublic+""},n);case 2:if(!(i=e.sent).ok){e.next=12;break}return n([{title:"Congrats!",description:"The publicity status of Reply with id: "+s+" has been successfuly changed",type:"success"}]),t.replies.find((function(e){return e._id===s})).isPublic=!p.isPublic,e.next=9,T();case 9:r(),e.next=13;break;case 12:n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 13:console.log(i),h({show:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){T()}),[]);var L=[{name:Object(f.jsx)("strong",{children:"Text"}),selector:"text",sortable:!0,left:!0},{name:Object(f.jsx)("strong",{children:"Category"}),selector:"category",sortable:!0,left:!0,cell:function(e){return e.category?e.category.name:"Not specified"}},{name:Object(f.jsx)("strong",{children:"Replied at"}),selector:"date",sortable:!0,center:!0,cell:function(e){return e.createdAt.split("T")[0]}},{name:Object(f.jsx)("strong",{children:"Author"}),selector:"owner",sortable:!0,center:!0,cell:function(e){return(e.owner.firstName?e.owner.firstName:"")+" "+(e.owner.lastName?e.owner.lastName:"")}},{name:Object(f.jsx)("strong",{children:"Is Visible"}),selector:"isPublic",sortable:!0,center:!0,cell:function(e){return Object(f.jsx)(a.b,{color:e.isPublic?"success":"danger",className:"float-right",children:e.isPublic?"Yes":"No"})}},{name:"",selector:"_id",cell:function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(a.L,{className:"card-header-action",onClick:function(){return h({id:e._id,text:e.text,isPublic:e.isPublic,show:!p.show,type:"isPublic"})},children:O("cilCloudUpload")}),Object(f.jsx)(a.L,{className:"card-header-action",onClick:function(){return h({id:e._id,text:e.text,show:!p.show,type:"delete"})},children:O("cilTrash")})]})}}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(a.g,{children:Object(f.jsxs)(a.h,{children:[Object(f.jsx)(a.U,{children:Object(f.jsx)(a.l,{sm:"6"})}),Object(f.jsx)(a.U,{children:Object(f.jsxs)(a.l,{sm:"12",children:[Object(f.jsx)(a.E,{type:"text",id:"searchText",placeholder:"search by keyword ...",onInput:function(e){return D(e.target.value)}}),Object(f.jsx)(j.a,{title:"Replies List",columns:L,data:g,highlightOnHover:!0,pagination:!0,progressPending:N})]})})]})}),Object(f.jsxs)(a.O,{show:p.show,onClosed:function(){h({show:!1,type:p.type})},color:"delete"===p.type?"danger":"isPublic"===p.type?"warning":"info",size:"edit"===p.type||"detail"===p.type?"xl":"",children:[Object(f.jsx)(a.R,{closeButton:!0,children:Object(f.jsx)(a.S,{children:"delete"===p.type?"Delete Reply account":"edit"===p.type?"Edit Reply profile":"detail"===p.type?"Reply detail":"Change Publicity status"})}),p.show?Object(f.jsx)(a.P,{children:"delete"===p.type?Object(f.jsxs)("div",{children:["Are you sure you want to delete ",Object(f.jsx)("strong",{children:p.text}),"?"]}):"isPublic"===p.type?Object(f.jsxs)("div",{children:["Are you sure you want to change publicity status of ",Object(f.jsx)("strong",{children:p.text}),"?"]}):null}):null,"delete"===p.type||"isPublic"===p.type?Object(f.jsxs)(a.Q,{children:[Object(f.jsx)(a.f,{color:"delete"===p.type?"danger":"warning",onClick:function(){return"delete"===p.type?S(p.id):E(p.id)},children:"Yes"}),Object(f.jsx)(a.f,{color:"secondary",onClick:function(){return h({show:!1})},children:"Cancel"})]}):null]})]})}}}]);
//# sourceMappingURL=12.ebe9b5be.chunk.js.map
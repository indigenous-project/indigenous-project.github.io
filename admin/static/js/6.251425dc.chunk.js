(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[6],{624:function(n,t,e){"use strict";e.d(t,"d",(function(){return u})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return p}));var o=e(619),r=e.n(o),i=e(620),a=e(622),c="Bearer "+localStorage.getItem("HDI-token"),u=function(){var n=Object(i.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Object(a.a)("CategoriesList"),{method:"GET",mode:"cors",headers:{Authorization:c,Accept:"application/json"}}).catch((function(n){console.log(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=Object(i.a)(r.a.mark((function n(t,e,o){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n})).catch((function(n){console.log(n),o([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,o){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(r.a.mark((function n(t,e){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesDelete")+"/"+t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"}}).then((function(n){return n})).catch((function(n){console.log(n),e([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=Object(i.a)(r.a.mark((function n(t,e){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesAdd"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(t)}).then((function(n){return n})).catch((function(n){console.log(n),e([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},626:function(n,t,e){"use strict";e.d(t,"a",(function(){return E}));var o=e(1),r=e(57),i=function(){return(i=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},a={onActivate:r.func,onAddUndo:r.func,onBeforeAddUndo:r.func,onBeforeExecCommand:r.func,onBeforeGetContent:r.func,onBeforeRenderUI:r.func,onBeforeSetContent:r.func,onBeforePaste:r.func,onBlur:r.func,onChange:r.func,onClearUndos:r.func,onClick:r.func,onContextMenu:r.func,onCopy:r.func,onCut:r.func,onDblclick:r.func,onDeactivate:r.func,onDirty:r.func,onDrag:r.func,onDragDrop:r.func,onDragEnd:r.func,onDragGesture:r.func,onDragOver:r.func,onDrop:r.func,onExecCommand:r.func,onFocus:r.func,onFocusIn:r.func,onFocusOut:r.func,onGetContent:r.func,onHide:r.func,onInit:r.func,onKeyDown:r.func,onKeyPress:r.func,onKeyUp:r.func,onLoadContent:r.func,onMouseDown:r.func,onMouseEnter:r.func,onMouseLeave:r.func,onMouseMove:r.func,onMouseOut:r.func,onMouseOver:r.func,onMouseUp:r.func,onNodeChange:r.func,onObjectResizeStart:r.func,onObjectResized:r.func,onObjectSelected:r.func,onPaste:r.func,onPostProcess:r.func,onPostRender:r.func,onPreProcess:r.func,onProgressState:r.func,onRedo:r.func,onRemove:r.func,onReset:r.func,onSaveContent:r.func,onSelectionChange:r.func,onSetAttrib:r.func,onSetContent:r.func,onShow:r.func,onSubmit:r.func,onUndo:r.func,onVisualAid:r.func},c=i({apiKey:r.string,id:r.string,inline:r.bool,init:r.object,initialValue:r.string,onEditorChange:r.func,outputFormat:r.oneOf(["html","text"]),value:r.string,tagName:r.string,cloudChannel:r.string,plugins:r.oneOfType([r.string,r.array]),toolbar:r.oneOfType([r.string,r.array]),disabled:r.bool,textareaName:r.string,tinymceScriptSrc:r.string,scriptLoading:r.shape({async:r.bool,defer:r.bool,delay:r.number})},a),u=function(n){return"function"===typeof n},s=function(n){return n in a},p=function(n){return n.substr(2)},l=function(n,t,e,o,r){return function(n,t,e,o,r,i,a){var c=Object.keys(r).filter(s),u=Object.keys(i).filter(s),l=c.filter((function(n){return void 0===i[n]})),d=u.filter((function(n){return void 0===r[n]}));l.forEach((function(n){var t=p(n),o=a[t];e(t,o),delete a[t]})),d.forEach((function(e){var r=o(n,e),i=p(e);a[i]=r,t(i,r)}))}(r,n.on.bind(n),n.off.bind(n),(function(t,e){return function(o){var r;return null===(r=t(e))||void 0===r?void 0:r(o,n)}}),t,e,o)},d=0,f=function(n){var t=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++d+String(t)},h=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},v=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},g=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},y=function(){var n=g();return{load:function(t,e,o,r,i,a){var c=function(){return function(n,t,e,o,r,i){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=n,a.src=e,a.async=o,a.defer=r,a.addEventListener("load",(function n(){a.removeEventListener("load",n),i()})),t.head&&t.head.appendChild(a)}(n.scriptId,t,e,o,r,(function(){n.listeners.forEach((function(n){return n()})),n.scriptLoaded=!0}))};n.scriptLoaded?a():(n.listeners.push(a),n.scriptLoading||(n.scriptLoading=!0,i>0?setTimeout(c,i):c()))},reinitialize:function(){n=g()}}}(),b=e(629),m=function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(t,e)};return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),C=function(){return(C=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},k=function(){var n,t,e;return(null===(e=null===(t=null===(n=Object(b.a)())||void 0===n?void 0:n.Env)||void 0===t?void 0:t.browser)||void 0===e?void 0:e.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},w=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput":"SelectionChange"},E=function(n){function t(t){var e,r,i,a=n.call(this,t)||this;return a.rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var n=a.editor,t=a.props.value;n&&t&&t!==a.currentContent&&n.undoManager.ignore((function(){if(n.setContent(t),a.valueCursor&&(!a.inline||n.hasFocus()))try{n.selection.moveToBookmark(a.valueCursor)}catch(e){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(n){var t;void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(a.valueCursor=null===(t=a.editor)||void 0===t?void 0:t.selection.getBookmark(3))},a.handleBeforeInputSpecial=function(n){"Enter"!==n.key&&"Backspace"!==n.key&&"Delete"!==n.key||a.handleBeforeInput(n)},a.handleEditorChange=function(n){var t=a.editor;if(t&&t.initialized){var e=t.getContent();if(void 0!==a.props.value&&a.props.value!==e&&(clearTimeout(a.rollbackTimer),a.rollbackTimer=window.setTimeout(a.rollbackChange,1)),e!==a.currentContent&&(a.currentContent=e,u(a.props.onEditorChange))){var o=a.props.outputFormat,r="html"===o?e:t.getContent({format:o});a.props.onEditorChange(r,t)}}},a.handleEditorChangeSpecial=function(n){"Backspace"!==n.key&&"Delete"!==n.key||a.handleEditorChange(n)},a.initialise=function(){var n=a.elementRef.current;if(n){var t=Object(b.a)();if(!t)throw new Error("tinymce should have been loaded into global scope");var e,o,r=C(C({},a.props.init),{selector:void 0,target:n,readonly:a.props.disabled,inline:a.inline,plugins:(e=a.props.init&&a.props.init.plugins,o=a.props.plugins,v(e).concat(v(o))),toolbar:a.props.toolbar||a.props.init&&a.props.init.toolbar,setup:function(t){a.editor=t,a.bindHandlers({}),a.inline&&!h(n)&&t.once("PostRender",(function(n){t.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&u(a.props.init.setup)&&a.props.init.setup(t)},init_instance_callback:function(n){var t,e,o=a.getInitialValue();a.currentContent=null!==(t=a.currentContent)&&void 0!==t?t:n.getContent(),a.currentContent!==o&&(a.currentContent=o,n.setContent(o),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var r=null!==(e=a.props.disabled)&&void 0!==e&&e;n.setMode(r?"readonly":"design"),a.props.init&&u(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(n)}});a.inline||(n.style.visibility=""),h(n)&&(n.value=a.getInitialValue()),t.init(r)}},a.id=a.props.id||f("tiny-react"),a.elementRef=o.createRef(),a.inline=null!==(i=null!==(e=a.props.inline)&&void 0!==e?e:null===(r=a.props.init)||void 0===r?void 0:r.inline)&&void 0!==i&&i,a.boundHandlers={},a}return m(t,n),t.prototype.componentDidUpdate=function(n){var t,e,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact((function(){var n;if(!o.inline||r.hasFocus())try{n=r.selection.getBookmark(3)}catch(c){}var t=o.valueCursor;if(r.setContent(o.props.value),!o.inline||r.hasFocus())for(var e=0,i=[n,t];e<i.length;e++){var a=i[e];if(a)try{r.selection.moveToBookmark(a),o.valueCursor=a;break}catch(c){}}}))}if(this.props.disabled!==n.disabled){var i=null!==(e=this.props.disabled)&&void 0!==e&&e;this.editor.setMode(i?"readonly":"design")}}},t.prototype.componentDidMount=function(){var n,t,e,o,r,i;null!==Object(b.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&y.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async)&&void 0!==t&&t,null!==(o=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.defer)&&void 0!==o&&o,null!==(i=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var n=this,t=this.editor;t&&(t.off(k(),this.handleEditorChange),t.off(w(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(e){t.off(e,n.boundHandlers[e])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var n=this.props.tagName,t=void 0===n?"div":n;return o.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return o.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var n=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+n+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(n){var t=this;if(void 0!==this.editor){l(this.editor,n,this.props,this.boundHandlers,(function(n){return t.props[n]}));var e=function(n){return void 0!==n.onEditorChange||void 0!==n.value},o=e(n),r=e(this.props);!o&&r?(this.editor.on(k(),this.handleEditorChange),this.editor.on(w(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!r&&(this.editor.off(k(),this.handleEditorChange),this.editor.off(w(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=c,t.defaultProps={cloudChannel:"5"},t}(o.Component)},629:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return r}));var o=function(){return"undefined"!==typeof window?window:n},r=function(){var n=o();return n&&n.tinymce?n.tinymce:null}}).call(this,e(83))},653:function(n,t,e){"use strict";e.d(t,"c",(function(){return s})),e.d(t,"b",(function(){return p})),e.d(t,"a",(function(){return u}));var o=e(619),r=e.n(o),i=e(620),a=e(622),c="Bearer "+localStorage.getItem("HDI-token"),u=function(){var n=Object(i.a)(r.a.mark((function n(t,e){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("JobsAdd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(t)}).then((function(n){return n})).catch((function(n){console.log(n),e([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=Object(i.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Object(a.a)("JobsList"),{method:"GET",mode:"cors",headers:{Authorization:c,Accept:"application/json"}}).catch((function(n){console.log(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(r.a.mark((function n(t,e,o){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("JobsEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n})).catch((function(n){console.log(n),o([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,o){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.251425dc.chunk.js.map
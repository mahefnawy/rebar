webpackJsonp([10],{1309:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(139),s=n(u),i=r(340),d=n(i),f=r(347),p=r(72),m=r(342),h=n(m),_=r(58),C=n(_),g=r(1),E=n(g),y=r(533),b=n(y),v=function(e){return{card:{minWidth:275}}},S=function(e){function t(e,r){var n=this;a(this,t);var c=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return c._handle_onClick_Create=function(){var e,t,r,a,l,o,u;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.state,t=e.UserAccount_Identifier,r=e.User_Secret,c.setState({currentOperation:"creating",User_Secret:""}),n.prev=2,a=window.location,l=a.protocol+"//"+a.hostname+":"+a.port,n.next=7,regeneratorRuntime.awrap(fetch(l+"/auth/createuser",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({UserAccount_Identifier:t,User_Secret:r})}));case 7:return o=n.sent,n.next=10,regeneratorRuntime.awrap(o.json());case 10:u=n.sent,console.log("CREATE USER RESPONSE"),console.log(u),u.success?c.setState({currentOperation:"success"}):c.setState({currentOperation:"failure",errorMessage:u.error}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),c.setState({currentOperation:"failure",errorMessage:"Did not receive proper response from server. Please try again. Message:"+n.t0.message});case 19:case"end":return n.stop()}},null,n,[[2,16]])},c._handle_onClick_CancelCreation=function(){c.setState({currentOperation:"failure",errorMessage:"User creation has been canceled"})},c._handle_onClick_TryAgain=function(){c.setState({currentOperation:"prompt",errorMessage:""})},c._handle_onClick_Continue=function(){window.location.replace("/")},c.state={currentOperation:"prompt",errorMessage:"",UserAccount_Identifier:"",User_Secret:""},c}return c(t,e),o(t,[{key:"renderCreating",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return E.default.createElement(d.default,{className:e.card},E.default.createElement(i.CardHeader,{title:"Creating user"}),E.default.createElement(C.default,{component:"p"},"Creating user",E.default.createElement("br",null),t,E.default.createElement("br",null),"Please wait."),E.default.createElement(f.LinearProgress,{mode:"query"}),E.default.createElement(i.CardActions,null,E.default.createElement(s.default,{onClick:this._handle_onClick_CancelCreation},"Cancel")))}},{key:"renderSuccess",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return E.default.createElement(d.default,{className:e.card},E.default.createElement(i.CardHeader,{title:"Creating user"}),E.default.createElement(C.default,{component:"p"},"Created user",E.default.createElement("br",null),t),E.default.createElement(i.CardActions,null,E.default.createElement(s.default,{onClick:this._handle_onClick_Continue},"Continue")))}},{key:"renderFailure",value:function(){var e=this.props.classes,t=this.state,r=t.UserAccount_Identifier,n=t.errorMessage;return E.default.createElement(d.default,{className:e.card},E.default.createElement(i.CardHeader,{title:"Creating user"}),E.default.createElement(C.default,{component:"p"},"Failed creating user",E.default.createElement("br",null),r,E.default.createElement("br",null),"Reason: ",n),E.default.createElement(i.CardActions,null,E.default.createElement(s.default,{onClick:this._handle_onClick_TryAgain},"Try Again")))}},{key:"renderPrompt",value:function(){var e=this,t=this.props.classes,r=this.state,n=r.UserAccount_Identifier,a=r.User_Secret;return E.default.createElement(d.default,{className:t.card},E.default.createElement(i.CardHeader,{title:"Create New User"}),E.default.createElement(h.default,{label:"Account Name",fullWidth:!0,value:n,onChange:function(t){return e.setState({UserAccount_Identifier:t.target.value})}}),E.default.createElement(h.default,{label:"Password",type:"password",fullWidth:!0,value:a,onChange:function(t){return e.setState({User_Secret:t.target.value})}}),E.default.createElement(i.CardActions,null,E.default.createElement(s.default,{onClick:this._handle_onClick_Create},"Create")))}},{key:"render",value:function(){var e=this.state.currentOperation;return E.default.createElement(b.default,null,"prompt"===e&&this.renderPrompt(),"creating"===e&&this.renderCreating(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}]),t}(E.default.Component);t.default=(0,p.withStyles)(v)(S)}});
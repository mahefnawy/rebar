webpackJsonp([9],{1176:function(e,n,t){function l(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(n,t,l){return t&&e(n.prototype,t),l&&e(n,l),n}}(),s=t(297),u=l(s),c=t(67),d=t(1),f=l(d),y=t(0),p=l(y),g=t(47),m=t(469),_=l(m),k=function(e){return{card:{minWidth:275}}},b=function(e){function n(){return a(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),i(n,[{key:"_handle_onClick",value:function(e){this.context.router.push("/ensayo/item/"+e)}},{key:"render",value:function(){var e=this,n=this.props,t=n.classes,l=n.Viewer;return p.default.createElement(_.default,null,l.Ensayos.edges.map(function(n){return p.default.createElement(u.default,{key:n.node.id,className:t.card},p.default.createElement(s.CardHeader,{title:n.node.Ensayo_Title}),p.default.createElement(s.CardContent,{onClick:function(){return e._handle_onClick(n.node.id)}},n.node.Ensayo_Description))}))}}]),n}(p.default.Component);b.contextTypes={router:f.default.object},n.default=(0,g.createFragmentContainer)((0,c.withStyles)(k)(b),{Viewer:function(){return t(1444)}})},1444:function(e,n,t){"use strict";var l={argumentDefinitions:[],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["Ensayos"]}]},name:"EnsayoPublicList_Viewer",selections:[{kind:"LinkedField",alias:"Ensayos",args:null,concreteType:"EnsayosConnection",name:"__EnsayoPublicList_Ensayos_connection",plural:!1,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"EnsayosEdge",name:"edges",plural:!0,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Ensayo",name:"node",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Title",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Description",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"__typename",storageKey:null}],storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"cursor",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"PageInfo",name:"pageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"endCursor",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer"};e.exports=l}});
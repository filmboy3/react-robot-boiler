(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(25),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},b=function(e){var t=e.robots,n=t.map(function(e,n){return a.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})});return console.log("Cardlist"),a.a.createElement("div",null,n)},p=function(e){e.searchField;var t=e.searchChange;return console.log("Rendered SearchBox"),a.a.createElement("div",{className:"tc pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"search robots"}))},m=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",borderTop:"5px solid black",height:"800px"}},e.children)},E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("Header"),a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(E,{color:"red"}))}}]),t}(r.Component),O=n(10),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),v=(n(31),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(f,null),a.a.createElement(p,{searchChange:n}),a.a.createElement(m,null,a.a.createElement(g,null,a.a.createElement(b,{robots:c}))))}}]),t}(r.Component)),S=Object(O.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUESTS_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUESTS_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUESTS_ROBOTS_FAILED",payload:t})})})}}})(v),j=n(7);n(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(9),C={searchField:""},R={isPending:!1,robots:[],error:""},w=n(18),_=n(19),k=Object(j.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(y.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUESTS_ROBOTS_PENDING":return Object(y.a)({},e,{isPending:!0});case"REQUESTS_ROBOTS_SUCCESS":return Object(y.a)({},e,{robots:t.payload,isPending:!1});case"REQUESTS_ROBOTS_FAILED":return Object(y.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(w.createLogger)(),F=Object(j.d)(k,Object(j.a)(_.a,T));c.a.render(a.a.createElement(O.a,{store:F},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.1e3a6784.chunk.js.map
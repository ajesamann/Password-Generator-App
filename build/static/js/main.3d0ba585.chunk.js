(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e,t,a){e.exports=a(35)},16:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(1),r=a.n(o),l=(a(16),a(5)),c=a(6),i=a(9),d=a(7),m=a(10),u=a(8),p=a(2),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={randomList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],randomPassword:"",showCopied:!1,addSpec:!1,value:8},a.generateNewPassword=function(){for(var e=["!","#","$","&","?","%","^","@",":","/",">","-","_","*"],t=[],n=e[Math.floor(Math.random()*e.length)],s=0;s<a.state.value;s++){var o=a.state.randomList[Math.floor(Math.random()*a.state.randomList.length)];s<a.state.value&&t.push(o)}if(a.state.addSpec){var r=t[Math.floor(Math.random()*t.length)];t.indexOf(r)>-1&&(t[t.indexOf(r)]=n)}a.setState({randomPassword:t.join("")})},a.toggle=function(e){a.setState({showCopied:!a.state.showCopied}),setTimeout((function(){a.setState({showCopied:!a.state.showCopied})}),3e3)},a.toggleOn=function(e){a.setState({addSpec:!a.state.addSpec})},a.slideInput=function(e){a.setState({value:e.target.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.state.addSpec);var e=this.state.randomPassword;return s.a.createElement("div",{className:"container"},s.a.createElement(p.Transition,{native:!0,items:this.state.showCopied,from:{transform:"translate3d(0, -200px, 0)"},enter:{transform:"translate3d(0, -50px, 0)"},leave:{transform:"translate3d(0, -200px, 0)"}},(function(e){return e&&function(e){return s.a.createElement(p.animated.div,{style:e},s.a.createElement("div",{className:"copied"},"Successfully copied to clipboard"))}})),s.a.createElement("div",{className:"slidercon"},s.a.createElement("input",{type:"range",min:3,max:13,value:this.state.value,className:"slider",onChange:this.slideInput}),s.a.createElement("div",{className:"inputvalue"},"Password length: ",this.state.value)),s.a.createElement("label",{className:"specialcon"},s.a.createElement("input",{type:"checkbox",id:"special",value:"special",onClick:this.toggleOn}),s.a.createElement("span",{className:"checkbox"}),s.a.createElement("span",null,"Include a special character")),s.a.createElement(u.CopyToClipboard,{text:e},s.a.createElement("div",{className:"password",onClick:this.toggle},e)),s.a.createElement("div",{className:"clickhere"},"Click your password to copy it!"),s.a.createElement("button",{className:"generate-password",onClick:this.generateNewPassword},"Generate Password!"))}}]),t}(n.Component);a(34);var v=function(){return s.a.createElement("div",null,s.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.3d0ba585.chunk.js.map
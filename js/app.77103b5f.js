(function(e){function t(t){for(var c,r,i=t[0],l=t[1],s=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var c={},n={app:0},o=[];function r(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=c,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(a,c,function(t){return e[t]}.bind(null,c));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/escalator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23"),n=(a("b0c0"),a("ac1f"),a("841c"),Object(c["r"])("data-v-773ad774"));Object(c["j"])("data-v-773ad774");var o={class:"columns is-mobile inputs"},r=Object(c["g"])("div",{class:"column is-3-desktop is-8-mobile is-offset-1 app-name"},[Object(c["g"])("h1",null,"Escalator")],-1),i={class:"column is-4-desktop is-3-mobile"},l={key:0},s={class:"select is-rounded"},u=Object(c["e"])('<option data-v-773ad774>C</option><option value="C#" data-v-773ad774>C#/Db</option><option data-v-773ad774>D</option><option value="D#" data-v-773ad774>D#/Eb</option><option data-v-773ad774>E</option><option data-v-773ad774>F</option><option value="F#" data-v-773ad774>F#/Gb</option><option data-v-773ad774>G</option><option value="G#" data-v-773ad774>G#/Ab</option><option data-v-773ad774>A</option><option value="A#" data-v-773ad774>A#/Bb</option><option data-v-773ad774>B</option>',12),d={key:0,class:"column is-5-desktop"},b={class:"field"},p={class:"control"},f={class:"columns is-mobile is-centered"},j={class:"column is-8-desktop is-11-mobile scales"},O={class:"scale-container"},v={class:"spinner"};Object(c["i"])();var g=n((function(e,t,a,n,g,h){var m=Object(c["l"])("Scale"),y=Object(c["l"])("Footer");return Object(c["h"])(),Object(c["c"])(c["a"],null,[Object(c["g"])("div",{id:"app-body",class:{"low-opacity":!g.requestDone}},[Object(c["g"])("div",o,[r,Object(c["g"])("div",i,[h.isMobile()?Object(c["d"])("",!0):(Object(c["h"])(),Object(c["c"])("span",l," Ver escalas da nota   ")),Object(c["g"])("div",s,[Object(c["q"])(Object(c["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.keySelected=e}),onChange:t[2]||(t[2]=function(e){return h.getScale()})},[u],544),[[c["n"],g.keySelected]])])]),h.isMobile()?Object(c["d"])("",!0):(Object(c["h"])(),Object(c["c"])("div",d,[Object(c["g"])("div",b,[Object(c["g"])("div",p,[Object(c["q"])(Object(c["g"])("input",{class:"input",type:"text",placeholder:"Procure uma escala aqui","onUpdate:modelValue":t[3]||(t[3]=function(e){return g.querySearch=e})},null,512),[[c["o"],g.querySearch]])])])]))]),Object(c["g"])("div",f,[Object(c["g"])("div",j,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["k"])(g.scales,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.scale},[Object(c["g"])("div",O,[Object(c["q"])(Object(c["g"])(m,{scale:e.scale,scaleName:e.name,color:e.color},null,8,["scale","scaleName","color"]),[[c["p"],h.search(e.name)]])])])})),128))])])],2),Object(c["q"])(Object(c["g"])("div",v,null,512),[[c["p"],!g.requestDone]]),Object(c["g"])(y)],64)})),h=(a("caad"),a("2532"),a("5319"),Object(c["r"])("data-v-06e5cb36"));Object(c["j"])("data-v-06e5cb36");var m={class:"scale-name unselectable"},y=Object(c["g"])("i",{class:"fas fa-play-circle"},null,-1);Object(c["i"])();var k=h((function(e,t,a,n,o,r){var i=Object(c["l"])("NoteCard");return Object(c["h"])(),Object(c["c"])("table",null,[Object(c["g"])("caption",m,[Object(c["g"])("span",{"data-tooltip":r.isMobile()?null:"Tocar escala",class:"play-all pointer",onClick:t[1]||(t[1]=function(e){return r.playAll(e)})},[y],8,["data-tooltip"]),Object(c["f"])(" "+Object(c["m"])(a.scaleName),1)]),Object(c["g"])("tr",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["k"])(a.scale,(function(e){return Object(c["h"])(),Object(c["c"])("td",{key:e},[Object(c["g"])(i,{actualNote:e,noteBeingPlayed:o.noteBeingPlayed},null,8,["actualNote","noteBeingPlayed"])])})),128))])])})),w=(a("4160"),a("159b"),Object(c["r"])("data-v-4da30986")),S=w((function(e,t,a,n,o,r){return Object(c["h"])(),Object(c["c"])("span",{onClick:t[1]||(t[1]=function(e){return r.play(a.actualNote.note)}),class:"note-card unselectable pointer","data-tooltip":r.isMobile()?null:a.actualNote.degree.name,style:{background:r.getColor(a.actualNote.note)}},Object(c["m"])(r.removeDigits(a.actualNote.note)),13,["data-tooltip"])})),C=a("5e54"),D=((new C["b"]).toDestination(),new C["a"]({urls:{C4:"C4.mp3","D#4":"Ds4.mp3","F#4":"Fs4.mp3",A4:"A4.mp3"},baseUrl:"https://tonejs.github.io/audio/salamander/"}).toDestination());a("45fc"),a("466d");function P(){var e=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}var M={isMobile:P},A={props:{actualNote:Object},created:function(){},methods:{isMobile:function(){return M.isMobile()},play:function(e){D.triggerAttackRelease("".concat(e),"8n")},removeDigits:function(e){return e&&e.replaceAll(/\d/g,"")},getColor:function(e){var t={c:"#9de24f","c#":"#70a337",d:"#ffbd55","d#":"#d6a353",e:"#5f9ec5",f:"#f86565","f#":"#b14444",g:"#d6a353","g#":"#dcc930",a:"#d88de4","a#":"#9d54a9",b:"#3e58bb"},a=e&&this.removeDigits(e).toLowerCase();return t[a]}}};a("ff3e");A.render=S,A.__scopeId="data-v-4da30986";var N=A,_={data:function(){return{noteBeingPlayed:""}},props:{scaleName:String,scale:Array,color:String},methods:{isMobile:function(){return M.isMobile()},playAll:function(e){var t=this,a=Object(C["c"])(),c=0;this.scale.forEach((function(e){t.noteBeingPlayed=e.note,D.triggerAttackRelease(e.note,"8n",a+c),c+=.4}));var n=e.currentTarget;n.style.color="#4da950",setTimeout((function(){n.style.color="#646464"}),1e3*c)}},components:{NoteCard:N}};a("9c78");_.render=k,_.__scopeId="data-v-06e5cb36";var q=_,B=Object(c["r"])("data-v-0d234147");Object(c["j"])("data-v-0d234147");var F={class:"app-footer"},x=Object(c["g"])("p",null,[Object(c["f"])(" Made with "),Object(c["g"])("span",null,[Object(c["g"])("i",{class:"fas fa-heart"})]),Object(c["f"])(" by "),Object(c["g"])("a",{target:"_blank",href:"https://www.github.com/higorc"},"HigorC")],-1);Object(c["i"])();var T=B((function(e,t,a,n,o,r){return Object(c["h"])(),Object(c["c"])("div",F,[x])})),E={};a("dc32");E.render=T,E.__scopeId="data-v-0d234147";var I=E,G=(a("d3b7"),"https://escalator-api.herokuapp.com/"),U=function(e){return new Promise((function(t,a){fetch("".concat(G,"?key=").concat(encodeURIComponent(e))).then((function(e){200===e.status?t(e.json()):a("Error ".concat(e.status))}))}))},L={getScales:U},R={name:"App",data:function(){return{keySelected:"C",querySearch:"",scales:{},requestDone:!0}},mounted:function(){setTimeout(this.getScale,300)},methods:{isMobile:function(){return M.isMobile()},search:function(e){var t=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),a=this.querySearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return!a||a&&t.includes(a)},getScale:function(){var e=this;this.requestDone=!1,L.getScales(this.keySelected).then((function(t){e.requestDone=!0,Object.assign(e.scales,t)}))}},components:{Scale:q,Footer:I}};a("92cf");R.render=g,R.__scopeId="data-v-773ad774";var V=R;a("725c"),a("5e34");a("b383"),Object(c["b"])(V).mount("#app")},7765:function(e,t,a){},"92cf":function(e,t,a){"use strict";a("cae8")},"9c78":function(e,t,a){"use strict";a("c5dc")},ae70:function(e,t,a){},b383:function(e,t,a){},c5dc:function(e,t,a){},cae8:function(e,t,a){},dc32:function(e,t,a){"use strict";a("7765")},ff3e:function(e,t,a){"use strict";a("ae70")}});
//# sourceMappingURL=app.77103b5f.js.map
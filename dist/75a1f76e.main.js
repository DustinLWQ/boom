webpackJsonp([1,2],{115:function(n,o,r){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}var t=r(117),c=(e(t),r(85),[{name:"liben",sex:"male"},{name:"jinxue",sex:"female"}]);c=c.map(function(n){return n.name+="--human",n});var u=document.querySelector.partial("div");console.log(u)},117:function(n,o,r){"use strict";var e=arguments;Function.prototype.partial=function(){console.log(e.constructor);var n=void 0,o=Array.from(e);return console.log(o.constructor),function(){return n.bind(o.concat.call(Array.from(e)))}}},301:function(n,o,r){n.exports=r(115)}},[301]);
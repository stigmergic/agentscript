var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var osmtogeojson = createCommonjsModule(function (module, exports) {
!function(e){module.exports=e();}(function(){return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var s="function"==typeof commonjsRequire&&commonjsRequire;if(!u&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND", l}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r);}return n[i].exports}for(var a="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){function r(e,t){return(e.version||t.version)&&e.version!==t.version?(e.version||0)>(t.version||0)?e:t:o.merge(e,t)}var o=e("./lodash.custom.js"),a=e("geojson-rewind"),i={};e("osm-polygon-features").forEach(function(e){if("all"===e.polygon)i[e.key]=!0;else{var t="whitelist"===e.polygon?"included_values":"excluded_values",n={};e.values.forEach(function(e){n[e]=!0;}), i[e.key]={}, i[e.key][t]=n;}});var u={};u=function(e,t){function n(e){function t(e){var t=o.clone(e);t.lat=e.center.lat, t.lon=e.center.lon, t.__is_center_placeholder=!0, i.push(t);}function n(e){function t(e,t,r){var o={type:"node",id:"_"+n.type+"/"+n.id+"bounds"+r,lat:e,lon:t};n.nodes.push(o.id), i.push(o);}var n=o.clone(e);n.nodes=[], t(n.bounds.minlat,n.bounds.minlon,1), t(n.bounds.maxlat,n.bounds.minlon,2), t(n.bounds.maxlat,n.bounds.maxlon,3), t(n.bounds.minlat,n.bounds.maxlon,4), n.nodes.push(n.nodes[0]), n.__is_bounds_placeholder=!0, u.push(n);}function r(e){function t(e,t,n){var r={type:"node",id:n,lat:e,lon:t};i.push(r);}o.isArray(e.nodes)||(e.nodes=e.geometry.map(function(e){return null!==e?"_anonymous@"+e.lat+"/"+e.lon:"_anonymous@unknown_location"})), e.geometry.forEach(function(n,r){n&&t(n.lat,n.lon,e.nodes[r]);});}function a(e){function t(e,t,n){var r={type:"node",id:n,lat:e,lon:t};i.push(r);}function n(e,t){function n(e,t){var n={type:"node",id:"_anonymous@"+e+"/"+t,lat:e,lon:t};r.nodes.push(n.id), i.push(n);}if(!u.some(function(e){return"way"==e.type&&e.id==t})){var r={type:"way",id:t,nodes:[]};e.forEach(function(e){e?n(e.lat,e.lon):r.nodes.push(void 0);}), u.push(r);}}e.members.forEach(function(e,r){"node"==e.type?e.lat&&t(e.lat,e.lon,e.ref):"way"==e.type&&e.geometry&&(e.ref="_fullGeom"+e.ref, n(e.geometry,e.ref));});}for(var i=new Array,u=new Array,l=new Array,c=0;c<e.elements.length;c++)switch(e.elements[c].type){case"node":var f=e.elements[c];i.push(f);break;case"way":var p=o.clone(e.elements[c]);p.nodes=o.clone(p.nodes), u.push(p), p.center&&t(p), p.geometry?r(p):p.bounds&&n(p);break;case"relation":var y=o.clone(e.elements[c]);y.members=o.clone(y.members), l.push(y);var d=y.members&&y.members.some(function(e){return"node"==e.type&&e.lat||"way"==e.type&&e.geometry&&e.geometry.length>0});y.center&&t(y), d?a(y):y.bounds&&n(y);}return s(i,u,l)}function u(e){function t(e,t,n){e.hasAttribute(n)&&(t[n]=e.getAttribute(n));}function n(e,n){var r=o.clone(e);t(n,r,"lat"), t(n,r,"lon"), r.__is_center_placeholder=!0, u.push(r);}function r(e,t){function n(e,t,n){var o={type:"node",id:"_"+r.type+"/"+r.id+"bounds"+n,lat:e,lon:t};r.nodes.push(o.id), u.push(o);}var r=o.clone(e);r.nodes=[], n(t.getAttribute("minlat"),t.getAttribute("minlon"),1), n(t.getAttribute("maxlat"),t.getAttribute("minlon"),2), n(t.getAttribute("maxlat"),t.getAttribute("maxlon"),3), n(t.getAttribute("minlat"),t.getAttribute("maxlon"),4), r.nodes.push(r.nodes[0]), r.__is_bounds_placeholder=!0, l.push(r);}function a(e,t){function n(e,t,n){var r={type:"node",id:n,lat:e,lon:t};return u.push(r), r.id}o.isArray(e.nodes)||(e.nodes=[], o.each(t,function(t,n){e.nodes.push("_anonymous@"+t.getAttribute("lat")+"/"+t.getAttribute("lon"));})), o.each(t,function(t,r){t.getAttribute("lat")&&n(t.getAttribute("lat"),t.getAttribute("lon"),e.nodes[r]);});}function i(e,t){function n(e,t,n){var r={type:"node",id:n,lat:e,lon:t};u.push(r);}function r(e,t){function n(e,t){var n={type:"node",id:"_anonymous@"+e+"/"+t,lat:e,lon:t};r.nodes.push(n.id), u.push(n);}if(!l.some(function(e){return"way"==e.type&&e.id==t})){var r={type:"way",id:t,nodes:[]};o.each(e,function(e){e.getAttribute("lat")?n(e.getAttribute("lat"),e.getAttribute("lon")):r.nodes.push(void 0);}), l.push(r);}}o.each(t,function(t,o){"node"==e.members[o].type?t.getAttribute("lat")&&n(t.getAttribute("lat"),t.getAttribute("lon"),e.members[o].ref):"way"==e.members[o].type&&t.getElementsByTagName("nd").length>0&&(e.members[o].ref="_fullGeom"+e.members[o].ref, r(t.getElementsByTagName("nd"),e.members[o].ref));});}var u=new Array,l=new Array,c=new Array;o.each(e.getElementsByTagName("node"),function(e,n){var r={};o.each(e.getElementsByTagName("tag"),function(e){r[e.getAttribute("k")]=e.getAttribute("v");});var a={type:"node"};t(e,a,"id"), t(e,a,"lat"), t(e,a,"lon"), t(e,a,"version"), t(e,a,"timestamp"), t(e,a,"changeset"), t(e,a,"uid"), t(e,a,"user"), o.isEmpty(r)||(a.tags=r), u.push(a);});var f,p;return o.each(e.getElementsByTagName("way"),function(e,i){var u={},s=[];o.each(e.getElementsByTagName("tag"),function(e){u[e.getAttribute("k")]=e.getAttribute("v");});var c=!1;o.each(e.getElementsByTagName("nd"),function(e,t){var n;(n=e.getAttribute("ref"))&&(s[t]=n), !c&&e.getAttribute("lat")&&(c=!0);});var y={type:"way"};t(e,y,"id"), t(e,y,"version"), t(e,y,"timestamp"), t(e,y,"changeset"), t(e,y,"uid"), t(e,y,"user"), s.length>0&&(y.nodes=s), o.isEmpty(u)||(y.tags=u), (f=e.getElementsByTagName("center")[0])&&n(y,f), c?a(y,e.getElementsByTagName("nd")):(p=e.getElementsByTagName("bounds")[0])&&r(y,p), l.push(y);}), o.each(e.getElementsByTagName("relation"),function(e,a){var u={},s=[];o.each(e.getElementsByTagName("tag"),function(e){u[e.getAttribute("k")]=e.getAttribute("v");});var l=!1;o.each(e.getElementsByTagName("member"),function(e,n){s[n]={}, t(e,s[n],"ref"), t(e,s[n],"role"), t(e,s[n],"type"), (!l&&"node"==s[n].type&&e.getAttribute("lat")||"way"==s[n].type&&e.getElementsByTagName("nd").length>0)&&(l=!0);});var y={type:"relation"};t(e,y,"id"), t(e,y,"version"), t(e,y,"timestamp"), t(e,y,"changeset"), t(e,y,"uid"), t(e,y,"user"), s.length>0&&(y.members=s), o.isEmpty(u)||(y.tags=u), (f=e.getElementsByTagName("center")[0])&&n(y,f), l?i(y,e.getElementsByTagName("member")):(p=e.getElementsByTagName("bounds")[0])&&r(y,p), c.push(y);}), s(u,l,c)}function s(e,n,r){function i(e,n){if("object"!=typeof n&&(n={}), "function"==typeof t.uninterestingTags)return!t.uninterestingTags(e,n);for(var r in e)if(t.uninterestingTags[r]!==!0&&n[r]!==!0&&n[r]!==e[r])return!0;return!1}function u(e){var t={timestamp:e.timestamp,version:e.version,changeset:e.changeset,user:e.user,uid:e.uid};for(var n in t)void 0===t[n]&&delete t[n];return t}function s(e,n){function r(e){for(var n,r,o,a,i,u,s=function(e){return e[0]},f=function(e){return e[e.length-1]},p=[];e.length;)for(n=e.pop().nodes.slice(), p.push(n);e.length&&s(n)!==f(n);){for(r=s(n), o=f(n), a=0;a<e.length;a++){if(u=e[a].nodes, o===s(u)){i=n.push, u=u.slice(1);break}if(o===f(u)){i=n.push, u=u.slice(0,-1).reverse();break}if(r==f(u)){i=n.unshift, u=u.slice(0,-1);break}if(r==s(u)){i=n.unshift, u=u.slice(1).reverse();break}u=i=null;}if(!u){t.verbose&&console.warn("Multipolygon",l+"/"+c,"contains unclosed ring geometry");break}e.splice(a,1), i.apply(n,u);}return p}function a(e){var t,n,r=function(e,t){for(var n=0;n<t.length;n++)if(a(t[n],e))return!0;return!1},o=function(e){return e.map(function(e){return[+e.lat,+e.lon]})},a=function(e,t){for(var n=e[0],r=e[1],o=!1,a=0,i=t.length-1;a<t.length;i=a++){var u=t[a][0],s=t[a][1],l=t[i][0],c=t[i][1],f=s>r!=c>r&&n<(l-u)*(r-s)/(c-s)+u;f&&(o=!o);}return o};for(e=o(e), t=0;t<f.length;t++)if(n=o(f[t]), r(n,e))return t}var i,s=!1,l=P?"way":"relation",c="number"==typeof e.id?e.id:+e.id.replace("_fullGeom","");i=n.members.filter(function(e){return"way"===e.type}), i=i.map(function(e){var n=g[e.ref];return void 0===n?(t.verbose&&console.warn("Multipolygon",l+"/"+c,"tainted by a missing way",e.type+"/"+e.ref), void(s=!0)):{id:e.ref,role:e.role||"outer",way:n,nodes:n.nodes.filter(function(n){return void 0!==n||(s=!0, t.verbose&&console.warn("Multipolygon",l+"/"+c,"tainted by a way",e.type+"/"+e.ref,"with a missing node"), !1)})}}), i=o.compact(i);var f,p;f=r(i.filter(function(e){return"outer"===e.role})), p=r(i.filter(function(e){return"inner"===e.role}));var y;y=f.map(function(e){return[e]});for(var d=0;d<p.length;d++){var v=a(p[d]);void 0!==v?y[v].push(p[d]):t.verbose&&console.warn("Multipolygon",l+"/"+c,"contains an inner ring with no containing outer");}var h=[];if(h=o.compact(y.map(function(e){var n=o.compact(e.map(function(e){return e.length<4?void(t.verbose&&console.warn("Multipolygon",l+"/"+c,"contains a ring with less than four nodes")):o.compact(e.map(function(e){return[+e.lon,+e.lat]}))}));return 0==n.length?void(t.verbose&&console.warn("Multipolygon",l+"/"+c,"contains an empty ring cluster")):n})), 0==h.length)return t.verbose&&console.warn("Multipolygon",l+"/"+c,"contains no coordinates"), !1;var b="MultiPolygon";1===h.length&&(b="Polygon", h=h[0]);var m={type:"Feature",id:e.type+"/"+c,properties:{type:e.type,id:c,tags:e.tags||{},relations:A[e.type][e.id]||[],meta:u(e)},geometry:{type:b,coordinates:h}};return s&&(t.verbose&&console.warn("Multipolygon",l+"/"+c,"is tainted"), m.properties.tainted=!0), m}for(var c=new Object,f=new Object,p=0;p<e.length;p++){var y=e[p];void 0!==c[y.id]&&(y=t.deduplicator(y,c[y.id])), c[y.id]=y, "undefined"!=typeof y.tags&&i(y.tags)&&(f[y.id]=!0);}for(var p=0;p<r.length;p++)if(o.isArray(r[p].members))for(var d=0;d<r[p].members.length;d++)"node"==r[p].members[d].type&&(f[r[p].members[d].ref]=!0);for(var g=new Object,v=new Object,p=0;p<n.length;p++){var h=n[p];if(g[h.id]&&(h=t.deduplicator(h,g[h.id])), g[h.id]=h, o.isArray(h.nodes))for(var d=0;d<h.nodes.length;d++)v[h.nodes[d]]=!0, h.nodes[d]=c[h.nodes[d]];}var b=new Array;for(var m in c){var y=c[m];v[m]&&!f[m]||b.push(y);}for(var _=new Array,p=0;p<r.length;p++){var w=r[p];_[w.id]&&(w=t.deduplicator(w,_[w.id])), _[w.id]=w;}var A={node:{},way:{},relation:{}};for(var m in _){var w=_[m];if(o.isArray(w.members))for(var d=0;d<w.members.length;d++){var j=w.members[d].type,k=w.members[d].ref;"number"!=typeof k&&(k=k.replace("_fullGeom","")), A[j]?("undefined"==typeof A[j][k]&&(A[j][k]=[]), A[j][k].push({role:w.members[d].role,rel:w.id,reltags:w.tags})):t.verbose&&console.warn("Relation",w.type+"/"+w.id,"member",j+"/"+k,"ignored because it has an invalid type");}else t.verbose&&console.warn("Relation",w.type+"/"+w.id,"ignored because it has no members");}var O,E={type:"FeatureCollection",features:new Array};for(p=0;p<b.length;p++)if("undefined"!=typeof b[p].lon&&"undefined"!=typeof b[p].lat){var x={type:"Feature",id:b[p].type+"/"+b[p].id,properties:{type:b[p].type,id:b[p].id,tags:b[p].tags||{},relations:A.node[b[p].id]||[],meta:u(b[p])},geometry:{type:"Point",coordinates:[+b[p].lon,+b[p].lat]}};b[p].__is_center_placeholder&&(x.properties.geometry="center"), E.features.push(x);}else t.verbose&&console.warn("POI",b[p].type+"/"+b[p].id,"ignored because it lacks coordinates");for(var M={type:"FeatureCollection",features:new Array},T={type:"FeatureCollection",features:new Array},p=0;p<r.length;p++)if(_[r[p].id]===r[p]&&"undefined"!=typeof r[p].tags&&("multipolygon"==r[p].tags.type||"boundary"==r[p].tags.type)){if(!o.isArray(r[p].members)){t.verbose&&console.warn("Multipolygon",r[p].type+"/"+r[p].id,"ignored because it has no members");continue}for(var N=0,d=0;d<r[p].members.length;d++)"outer"==r[p].members[d].role?N++:t.verbose&&"inner"!=r[p].members[d].role&&console.warn("Multipolygon",r[p].type+"/"+r[p].id,"member",r[p].members[d].type+"/"+r[p].members[d].ref,'ignored because it has an invalid role: "'+r[p].members[d].role+'"');if(r[p].members.forEach(function(e){g[e.ref]&&("outer"!==e.role||i(g[e.ref].tags,r[p].tags)||(g[e.ref].is_multipolygon_outline=!0), "inner"!==e.role||i(g[e.ref].tags)||(g[e.ref].is_multipolygon_outline=!0));}), 0==N){t.verbose&&console.warn("Multipolygon relation",r[p].type+"/"+r[p].id,"ignored because it has no outer ways");continue}var P=!1;1!=N||i(r[p].tags,{type:!0})||(P=!0);var x=null;if(P){var B=r[p].members.filter(function(e){return"outer"===e.role})[0];if(B=g[B.ref], void 0===B){t.verbose&&console.warn("Multipolygon relation",r[p].type+"/"+r[p].id,"ignored because outer way",B.type+"/"+B.ref,"is missing");continue}B.is_multipolygon_outline=!0, x=s(B,r[p]);}else x=s(r[p],r[p]);if(x===!1){t.verbose&&console.warn("Multipolygon relation",r[p].type+"/"+r[p].id,"ignored because it has invalid geometry");continue}T.features.push(x);}for(var p=0;p<n.length;p++)if(o.isArray(n[p].nodes)){if(!n[p].is_multipolygon_outline){"number"!=typeof n[p].id&&(n[p].id=+n[p].id.replace("_fullGeom","")), n[p].tainted=!1, n[p].hidden=!1;var F=new Array;for(d=0;d<n[p].nodes.length;d++)"object"==typeof n[p].nodes[d]?F.push([+n[p].nodes[d].lon,+n[p].nodes[d].lat]):(t.verbose&&console.warn("Way",n[p].type+"/"+n[p].id,"is tainted by an invalid node"), n[p].tainted=!0);if(F.length<=1)t.verbose&&console.warn("Way",n[p].type+"/"+n[p].id,"ignored because it contains too few nodes");else{var S="LineString";"undefined"!=typeof n[p].nodes[0]&&n[p].nodes[0]===n[p].nodes[n[p].nodes.length-1]&&("undefined"!=typeof n[p].tags&&l(n[p].tags)||n[p].__is_bounds_placeholder)&&(S="Polygon", F=[F]);var x={type:"Feature",id:n[p].type+"/"+n[p].id,properties:{type:n[p].type,id:n[p].id,tags:n[p].tags||{},relations:A.way[n[p].id]||[],meta:u(n[p])},geometry:{type:S,coordinates:F}};n[p].tainted&&(t.verbose&&console.warn("Way",n[p].type+"/"+n[p].id,"is tainted"), x.properties.tainted=!0), n[p].__is_bounds_placeholder&&(x.properties.geometry="bounds"), "LineString"==S?M.features.push(x):T.features.push(x);}}}else t.verbose&&console.warn("Way",n[p].type+"/"+n[p].id,"ignored because it has no nodes");return O={type:"FeatureCollection",features:[]}, O.features=O.features.concat(T.features), O.features=O.features.concat(M.features), O.features=O.features.concat(E.features), t.flatProperties&&O.features.forEach(function(e){e.properties=o.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id});}), O=a(O,!0)}function l(e){var n=t.polygonFeatures;if("function"==typeof n)return n(e);if("no"===e.area)return!1;for(var r in e){var o=e[r],a=n[r];if("undefined"!=typeof a&&"no"!==o){if(a===!0)return!0;if(a.included_values&&a.included_values[o]===!0)return!0;if(a.excluded_values&&a.excluded_values[o]!==!0)return!0}}return!1}t=o.merge({verbose:!1,flatProperties:!1,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:i,deduplicator:r},t);var c;return c="undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?u(e):n(e)}, u.toGeojson=u, t.exports=u;},{"./lodash.custom.js":2,"geojson-rewind":3,"osm-polygon-features":6}],2:[function(e,t,n){(function(e){(function(){function r(e,t){return e.set(t[0],t[1]), e}function o(e,t){return e.add(t), e}function a(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function i(e,t){for(var n=-1,r=e?e.length:0;++n<r&&t(e[n],n,e)!==!1;);return e}function u(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function s(e,t,n,r){var o=-1,a=e?e.length:0;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}function l(e,t){for(var n=-1,r=e?e.length:0;++n<r;)if(t(e[n],n,e))return!0;return!1}function c(e){return function(t){return null==t?Tt:t[e]}}function f(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function p(e){return function(t){return e(t)}}function y(e,t){return null==e?Tt:e[t]}function d(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"");}catch(e){}return t}function g(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e];}), n}function v(e,t){return function(n){return e(t(n))}}function h(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e;}), n}function b(){}function m(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}function _(){this.__data__=or?or(null):{};}function w(e){return this.has(e)&&delete this.__data__[e]}function A(e){var t=this.__data__;if(or){var n=t[e];return n===Ft?Tt:n}return Rn.call(t,e)?t[e]:Tt}function j(e){var t=this.__data__;return or?t[e]!==Tt:Rn.call(t,e)}function k(e,t){var n=this.__data__;return n[e]=or&&t===Tt?Ft:t, this}function O(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}function E(){this.__data__=[];}function x(e){var t=this.__data__,n=J(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Hn.call(t,n,1), !0}function M(e){var t=this.__data__,n=J(t,e);return n<0?Tt:t[n][1]}function T(e){return J(this.__data__,e)>-1}function N(e,t){var n=this.__data__,r=J(n,e);return r<0?n.push([e,t]):n[r][1]=t, this}function P(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}function B(){this.__data__={hash:new m,map:new(er||O),string:new m};}function F(e){return Ue(this,e).delete(e)}function S(e){return Ue(this,e).get(e)}function L(e){return Ue(this,e).has(e)}function I(e,t){return Ue(this,e).set(e,t), this}function D(e){var t=-1,n=e?e.length:0;for(this.__data__=new P;++t<n;)this.add(e[t]);}function R(e){return this.__data__.set(e,Ft), this}function U(e){return this.__data__.has(e)}function $(e){this.__data__=new O(e);}function C(){this.__data__=new O;}function G(e){return this.__data__.delete(e)}function z(e){return this.__data__.get(e)}function W(e){return this.__data__.has(e)}function q(e,t){var n=this.__data__;if(n instanceof O){var r=n.__data__;if(!er||r.length<Pt-1)return r.push([e,t]), this;n=this.__data__=new P(r);}return n.set(e,t), this}function V(e,t){var n=mr(e)||st(e)?f(e.length,String):[],r=n.length,o=!!r;for(var a in e)!t&&!Rn.call(e,a)||o&&("length"==a||Ve(a,r))||n.push(a);return n}function X(e,t,n){(n===Tt||ut(e[t],n))&&("number"!=typeof t||n!==Tt||t in e)||(e[t]=n);}function H(e,t,n){var r=e[t];Rn.call(e,t)&&ut(r,n)&&(n!==Tt||t in e)||(e[t]=n);}function J(e,t){for(var n=e.length;n--;)if(ut(e[n][0],t))return n;return-1}function K(e,t){return e&&Te(t,At(t),e)}function Q(e,t,n,r,o,a,u){var s;if(r&&(s=a?r(e,o,a,u):r(e)), s!==Tt)return s;if(!dt(e))return e;var l=mr(e);if(l){if(s=ze(e), !t)return Me(e,s)}else{var c=hr(e),f=c==zt||c==Wt;if(_r(e))return _e(e,t);if(c==Xt||c==Rt||f&&!a){if(d(e))return a?e:{};if(s=We(f?{}:e), !t)return Ne(e,K(s,e))}else{if(!An[c])return a?e:{};s=qe(e,c,Q,t);}}u||(u=new $);var p=u.get(e);if(p)return p;if(u.set(e,s), !l)var y=n?De(e):At(e);return i(y||e,function(o,a){y&&(a=o, o=e[a]), H(s,a,Q(o,t,n,r,a,e,u));}), s}function Y(e){return dt(e)?Vn(e):{}}function Z(e,t){return e&&gr(e,t,At)}function ee(e,t){t=He(t,e)?[t]:me(t);for(var n=0,r=t.length;null!=e&&n<r;)e=e[tt(t[n++])];return n&&n==r?e:Tt}function te(e,t,n){var r=t(e);return mr(e)?r:u(r,n(e))}function ne(e){return $n.call(e)}function re(e,t){return null!=e&&t in Object(e)}function oe(e,t,n,r,o){return e===t||(null==e||null==t||!dt(e)&&!gt(t)?e!==e&&t!==t:ae(e,t,oe,n,r,o))}function ae(e,t,n,r,o,a){var i=mr(e),u=mr(t),s=Ut,l=Ut;i||(s=hr(e), s=s==Rt?Xt:s), u||(l=hr(t), l=l==Rt?Xt:l);var c=s==Xt&&!d(e),f=l==Xt&&!d(t),p=s==l;if(p&&!c)return a||(a=new $), i||wr(e)?Se(e,t,n,r,o,a):Le(e,t,s,n,r,o,a);if(!(o&Lt)){var y=c&&Rn.call(e,"__wrapped__"),g=f&&Rn.call(t,"__wrapped__");if(y||g){var v=y?e.value():e,h=g?t.value():t;return a||(a=new $), n(v,h,r,o,a)}}return!!p&&(a||(a=new $), Ie(e,t,n,r,o,a))}function ie(e,t,n,r){var o=n.length,a=o,i=!r;if(null==e)return!a;for(e=Object(e);o--;){var u=n[o];if(i&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var s=u[0],l=e[s],c=u[1];if(i&&u[2]){if(l===Tt&&!(s in e))return!1}else{var f=new $;if(r)var p=r(l,c,s,e,t,f);if(!(p===Tt?oe(c,l,r,St|Lt,f):p))return!1}}return!0}function ue(e){if(!dt(e)||Ke(e))return!1;var t=pt(e)||d(e)?Cn:mn;return t.test(nt(e))}function se(e){return gt(e)&&yt(e.length)&&!!wn[$n.call(e)]}function le(e){return"function"==typeof e?e:null==e?kt:"object"==typeof e?mr(e)?ye(e[0],e[1]):pe(e):Et(e)}function ce(e){if(!Qe(e))return Qn(e);var t=[];for(var n in Object(e))Rn.call(e,n)&&"constructor"!=n&&t.push(n);return t}function fe(e){if(!dt(e))return et(e);var t=Qe(e),n=[];for(var r in e)("constructor"!=r||!t&&Rn.call(e,r))&&n.push(r);return n}function pe(e){var t=$e(e);return 1==t.length&&t[0][2]?Ze(t[0][0],t[0][1]):function(n){return n===e||ie(n,e,t)}}function ye(e,t){return He(e)&&Ye(t)?Ze(tt(e),t):function(n){var r=_t(n,e);return r===Tt&&r===t?wt(n,e):oe(t,r,Tt,St|Lt)}}function de(e,t,n,r,o){if(e!==t){if(!mr(t)&&!wr(t))var a=fe(t);i(a||t,function(i,u){if(a&&(u=i, i=t[u]), dt(i))o||(o=new $), ge(e,t,u,n,de,r,o);else{var s=r?r(e[u],i,u+"",e,t,o):Tt;s===Tt&&(s=i), X(e,u,s);}});}}function ge(e,t,n,r,o,a,i){var u=e[n],s=t[n],l=i.get(s);if(l)return void X(e,n,l);var c=a?a(u,s,n+"",e,t,i):Tt,f=c===Tt;f&&(c=s, mr(s)||wr(s)?mr(u)?c=u:ct(u)?c=Me(u):(f=!1, c=Q(s,!0)):vt(s)||st(s)?st(u)?c=bt(u):!dt(u)||r&&pt(u)?(f=!1, c=Q(s,!0)):c=u:f=!1), f&&(i.set(s,c), o(c,s,r,a,i), i.delete(s)), X(e,n,c);}function ve(e){return function(t){return ee(t,e)}}function he(e,t){return t=Yn(t===Tt?e.length-1:t,0), function(){for(var n=arguments,r=-1,o=Yn(n.length-t,0),i=Array(o);++r<o;)i[r]=n[t+r];r=-1;for(var u=Array(t+1);++r<t;)u[r]=n[r];return u[t]=i, a(e,this,u)}}function be(e){if("string"==typeof e)return e;if(ht(e))return yr?yr.call(e):"";var t=e+"";return"0"==t&&1/e==-It?"-0":t}function me(e){return mr(e)?e:br(e)}function _e(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n), n}function we(e){var t=new e.constructor(e.byteLength);return new Wn(t).set(new Wn(e)), t}function Ae(e,t){var n=t?we(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function je(e,t,n){var o=t?n(g(e),!0):g(e);return s(o,r,new e.constructor)}function ke(e){var t=new e.constructor(e.source,bn.exec(e));return t.lastIndex=e.lastIndex, t}function Oe(e,t,n){var r=t?n(h(e),!0):h(e);return s(r,o,new e.constructor)}function Ee(e){return pr?Object(pr.call(e)):{}}function xe(e,t){var n=t?we(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Me(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function Te(e,t,n,r){n||(n={});for(var o=-1,a=t.length;++o<a;){var i=t[o],u=r?r(n[i],e[i],i,n,e):Tt;H(n,i,u===Tt?e[i]:u);}return n}function Ne(e,t){return Te(e,vr(e),t)}function Pe(e){return he(function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:Tt,i=o>2?n[2]:Tt;for(a=e.length>3&&"function"==typeof a?(o--, a):Tt, i&&Xe(n[0],n[1],i)&&(a=o<3?Tt:a, o=1), t=Object(t);++r<o;){var u=n[r];u&&e(t,u,r,a);}return t})}function Be(e,t){return function(n,r){if(null==n)return n;if(!lt(n))return e(n,r);for(var o=n.length,a=t?o:-1,i=Object(n);(t?a--:++a<o)&&r(i[a],a,i)!==!1;);return n}}function Fe(e){return function(t,n,r){for(var o=-1,a=Object(t),i=r(t),u=i.length;u--;){var s=i[e?u:++o];if(n(a[s],s,a)===!1)break}return t}}function Se(e,t,n,r,o,a){var i=o&Lt,u=e.length,s=t.length;if(u!=s&&!(i&&s>u))return!1;var c=a.get(e);if(c&&a.get(t))return c==t;var f=-1,p=!0,y=o&St?new D:Tt;for(a.set(e,t), a.set(t,e);++f<u;){var d=e[f],g=t[f];if(r)var v=i?r(g,d,f,t,e,a):r(d,g,f,e,t,a);if(v!==Tt){if(v)continue;p=!1;break}if(y){if(!l(t,function(e,t){if(!y.has(t)&&(d===e||n(d,e,r,o,a)))return y.add(t)})){p=!1;break}}else if(d!==g&&!n(d,g,r,o,a)){p=!1;break}}return a.delete(e), a.delete(t), p}function Le(e,t,n,r,o,a,i){switch(n){case tn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer, t=t.buffer;case en:return!(e.byteLength!=t.byteLength||!r(new Wn(e),new Wn(t)));case $t:case Ct:case Vt:return ut(+e,+t);case Gt:return e.name==t.name&&e.message==t.message;case Jt:case Qt:return e==t+"";case qt:var u=g;case Kt:var s=a&Lt;if(u||(u=h), e.size!=t.size&&!s)return!1;var l=i.get(e);if(l)return l==t;a|=St, i.set(e,t);var c=Se(u(e),u(t),r,o,a,i);return i.delete(e), c;case Yt:if(pr)return pr.call(e)==pr.call(t)}return!1}function Ie(e,t,n,r,o,a){var i=o&Lt,u=At(e),s=u.length,l=At(t),c=l.length;if(s!=c&&!i)return!1;for(var f=s;f--;){var p=u[f];if(!(i?p in t:Rn.call(t,p)))return!1}var y=a.get(e);if(y&&a.get(t))return y==t;var d=!0;a.set(e,t), a.set(t,e);for(var g=i;++f<s;){p=u[f];var v=e[p],h=t[p];if(r)var b=i?r(h,v,p,t,e,a):r(v,h,p,e,t,a);if(!(b===Tt?v===h||n(v,h,r,o,a):b)){d=!1;break}g||(g="constructor"==p);}if(d&&!g){var m=e.constructor,_=t.constructor;m!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _)&&(d=!1);}return a.delete(e), a.delete(t), d}function De(e){return te(e,At,vr)}function Re(){var e=b.iteratee||Ot;return e=e===Ot?le:e, arguments.length?e(arguments[0],arguments[1]):e}function Ue(e,t){var n=e.__data__;return Je(t)?n["string"==typeof t?"string":"hash"]:n.map}function $e(e){for(var t=At(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Ye(o)];}return t}function Ce(e,t){var n=y(e,t);return ue(n)?n:Tt}function Ge(e,t,n){t=He(t,e)?[t]:me(t);for(var r,o=-1,a=t.length;++o<a;){var i=tt(t[o]);if(!(r=null!=e&&n(e,i)))break;e=e[i];}if(r)return r;var a=e?e.length:0;return!!a&&yt(a)&&Ve(i,a)&&(mr(e)||st(e))}function ze(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Rn.call(e,"index")&&(n.index=e.index, n.input=e.input), n}function We(e){return"function"!=typeof e.constructor||Qe(e)?{}:Y(qn(e))}function qe(e,t,n,r){var o=e.constructor;switch(t){case en:return we(e);case $t:case Ct:return new o((+e));case tn:return Ae(e,r);case nn:case rn:case on:case an:case un:case sn:case ln:case cn:case fn:return xe(e,r);case qt:return je(e,r,n);case Vt:case Qt:return new o(e);case Jt:return ke(e);case Kt:return Oe(e,r,n);case Yt:return Ee(e)}}function Ve(e,t){return t=null==t?Dt:t, !!t&&("number"==typeof e||_n.test(e))&&e>-1&&e%1==0&&e<t}function Xe(e,t,n){if(!dt(n))return!1;var r=typeof t;return!!("number"==r?lt(n)&&Ve(t,n.length):"string"==r&&t in n)&&ut(n[t],e)}function He(e,t){if(mr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ht(e))||(yn.test(e)||!pn.test(e)||null!=t&&e in Object(t))}function Je(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function Ke(e){return!!In&&In in e}function Qe(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Sn;return e===n}function Ye(e){return e===e&&!dt(e)}function Ze(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==Tt||e in Object(n)))}}function et(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}function tt(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-It?"-0":t}function nt(e){if(null!=e){try{return Dn.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function rt(e){for(var t=-1,n=e?e.length:0,r=0,o=[];++t<n;){var a=e[t];a&&(o[r++]=a);}return o}function ot(e,t){var n=mr(e)?i:dr;return n(e,Re(t,3))}function at(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(Bt);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i), i};return n.cache=new(at.Cache||P), n}function it(e){return Q(e,!1,!0)}function ut(e,t){return e===t||e!==e&&t!==t}function st(e){return ct(e)&&Rn.call(e,"callee")&&(!Xn.call(e,"callee")||$n.call(e)==Rt)}function lt(e){return null!=e&&yt(e.length)&&!pt(e)}function ct(e){return gt(e)&&lt(e)}function ft(e){if(lt(e)&&(mr(e)||"string"==typeof e||"function"==typeof e.splice||_r(e)||st(e)))return!e.length;var t=hr(e);if(t==qt||t==Kt)return!e.size;if(ar||Qe(e))return!Qn(e).length;for(var n in e)if(Rn.call(e,n))return!1;return!0}function pt(e){var t=dt(e)?$n.call(e):"";return t==zt||t==Wt}function yt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Dt}function dt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function gt(e){return!!e&&"object"==typeof e}function vt(e){if(!gt(e)||$n.call(e)!=Xt||d(e))return!1;var t=qn(e);if(null===t)return!0;var n=Rn.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Dn.call(n)==Un}function ht(e){return"symbol"==typeof e||gt(e)&&$n.call(e)==Yt}function bt(e){return Te(e,jt(e))}function mt(e){return null==e?"":be(e)}function _t(e,t,n){var r=null==e?Tt:ee(e,t);return r===Tt?n:r}function wt(e,t){return null!=e&&Ge(e,t,re)}function At(e){return lt(e)?V(e):ce(e)}function jt(e){return lt(e)?V(e,!0):fe(e)}function kt(e){return e}function Ot(e){return le("function"==typeof e?e:Q(e,!0))}function Et(e){return He(e)?c(tt(e)):ve(e)}function xt(){return[]}function Mt(){return!1}var Tt,Nt="4.15.0",Pt=200,Bt="Expected a function",Ft="__lodash_hash_undefined__",St=1,Lt=2,It=1/0,Dt=9007199254740991,Rt="[object Arguments]",Ut="[object Array]",$t="[object Boolean]",Ct="[object Date]",Gt="[object Error]",zt="[object Function]",Wt="[object GeneratorFunction]",qt="[object Map]",Vt="[object Number]",Xt="[object Object]",Ht="[object Promise]",Jt="[object RegExp]",Kt="[object Set]",Qt="[object String]",Yt="[object Symbol]",Zt="[object WeakMap]",en="[object ArrayBuffer]",tn="[object DataView]",nn="[object Float32Array]",rn="[object Float64Array]",on="[object Int8Array]",an="[object Int16Array]",un="[object Int32Array]",sn="[object Uint8Array]",ln="[object Uint8ClampedArray]",cn="[object Uint16Array]",fn="[object Uint32Array]",pn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yn=/^\w*$/,dn=/^\./,gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vn=/[\\^$.*+?()[\]{}|]/g,hn=/\\(\\)?/g,bn=/\w*$/,mn=/^\[object .+?Constructor\]$/,_n=/^(?:0|[1-9]\d*)$/,wn={};wn[nn]=wn[rn]=wn[on]=wn[an]=wn[un]=wn[sn]=wn[ln]=wn[cn]=wn[fn]=!0, wn[Rt]=wn[Ut]=wn[en]=wn[$t]=wn[tn]=wn[Ct]=wn[Gt]=wn[zt]=wn[qt]=wn[Vt]=wn[Xt]=wn[Jt]=wn[Kt]=wn[Qt]=wn[Zt]=!1;var An={};An[Rt]=An[Ut]=An[en]=An[tn]=An[$t]=An[Ct]=An[nn]=An[rn]=An[on]=An[an]=An[un]=An[qt]=An[Vt]=An[Xt]=An[Jt]=An[Kt]=An[Qt]=An[Yt]=An[sn]=An[ln]=An[cn]=An[fn]=!0, An[Gt]=An[zt]=An[Zt]=!1;var jn="object"==typeof e&&e&&e.Object===Object&&e,kn="object"==typeof self&&self&&self.Object===Object&&self,On=jn||kn||Function("return this")(),En="object"==typeof n&&n&&!n.nodeType&&n,xn=En&&"object"==typeof t&&t&&!t.nodeType&&t,Mn=xn&&xn.exports===En,Tn=Mn&&jn.process,Nn=function(){try{return Tn&&Tn.binding("util")}catch(e){}}(),Pn=Nn&&Nn.isTypedArray,Bn=Array.prototype,Fn=Function.prototype,Sn=Object.prototype,Ln=On["__core-js_shared__"],In=function(){var e=/[^.]+$/.exec(Ln&&Ln.keys&&Ln.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Dn=Fn.toString,Rn=Sn.hasOwnProperty,Un=Dn.call(Object),$n=Sn.toString,Cn=RegExp("^"+Dn.call(Rn).replace(vn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gn=Mn?On.Buffer:Tt,zn=On.Symbol,Wn=On.Uint8Array,qn=v(Object.getPrototypeOf,Object),Vn=Object.create,Xn=Sn.propertyIsEnumerable,Hn=Bn.splice,Jn=Object.getOwnPropertySymbols,Kn=Gn?Gn.isBuffer:Tt,Qn=v(Object.keys,Object),Yn=Math.max,Zn=Ce(On,"DataView"),er=Ce(On,"Map"),tr=Ce(On,"Promise"),nr=Ce(On,"Set"),rr=Ce(On,"WeakMap"),or=Ce(Object,"create"),ar=!Xn.call({valueOf:1},"valueOf"),ir=nt(Zn),ur=nt(er),sr=nt(tr),lr=nt(nr),cr=nt(rr),fr=zn?zn.prototype:Tt,pr=fr?fr.valueOf:Tt,yr=fr?fr.toString:Tt;m.prototype.clear=_, m.prototype.delete=w, m.prototype.get=A, m.prototype.has=j, m.prototype.set=k, O.prototype.clear=E, O.prototype.delete=x, O.prototype.get=M, O.prototype.has=T, O.prototype.set=N, P.prototype.clear=B, P.prototype.delete=F, P.prototype.get=S, P.prototype.has=L, P.prototype.set=I, D.prototype.add=D.prototype.push=R, D.prototype.has=U, $.prototype.clear=C, $.prototype.delete=G, $.prototype.get=z, $.prototype.has=W, $.prototype.set=q;var dr=Be(Z),gr=Fe(),vr=Jn?v(Jn,Object):xt,hr=ne;(Zn&&hr(new Zn(new ArrayBuffer(1)))!=tn||er&&hr(new er)!=qt||tr&&hr(tr.resolve())!=Ht||nr&&hr(new nr)!=Kt||rr&&hr(new rr)!=Zt)&&(hr=function(e){var t=$n.call(e),n=t==Xt?e.constructor:Tt,r=n?nt(n):Tt;if(r)switch(r){case ir:return tn;case ur:return qt;case sr:return Ht;
case lr:return Kt;case cr:return Zt}return t});var br=at(function(e){e=mt(e);var t=[];return dn.test(e)&&t.push(""), e.replace(gn,function(e,n,r,o){t.push(r?o.replace(hn,"$1"):n||e);}), t});at.Cache=P;var mr=Array.isArray,_r=Kn||Mt,wr=Pn?p(Pn):se,Ar=Pe(function(e,t,n){de(e,t,n);});b.compact=rt, b.iteratee=Ot, b.keys=At, b.keysIn=jt, b.memoize=at, b.merge=Ar, b.property=Et, b.toPlainObject=bt, b.clone=it, b.eq=ut, b.forEach=ot, b.get=_t, b.hasIn=wt, b.identity=kt, b.isArguments=st, b.isArray=mr, b.isArrayLike=lt, b.isArrayLikeObject=ct, b.isBuffer=_r, b.isEmpty=ft, b.isFunction=pt, b.isLength=yt, b.isObject=dt, b.isObjectLike=gt, b.isPlainObject=vt, b.isSymbol=ht, b.isTypedArray=wr, b.stubArray=xt, b.stubFalse=Mt, b.toString=mt, b.each=ot, b.VERSION=Nt, xn&&((xn.exports=b)._=b, En._=b);}).call(this);}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],3:[function(e,t,n){function r(e,t){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.map(o(r,t)), e;case"Feature":return e.geometry=r(e.geometry,t), e;case"Polygon":case"MultiPolygon":return a(e,t);default:return e}}function o(e,t){return function(n){return e(n,t)}}function a(e,t){return"Polygon"===e.type?e.coordinates=i(e.coordinates,t):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(o(i,t))), e}function i(e,t){t=!!t, e[0]=u(e[0],!t);for(var n=1;n<e.length;n++)e[n]=u(e[n],t);return e}function u(e,t){return s(e)===t?e:e.reverse()}function s(e){return l.ring(e)>=0}var l=e("geojson-area");t.exports=r;},{"geojson-area":4}],4:[function(e,t,n){function r(e){if("Polygon"===e.type)return o(e.coordinates);if("MultiPolygon"===e.type){for(var t=0,n=0;n<e.coordinates.length;n++)t+=o(e.coordinates[n]);return t}return null}function o(e){var t=0;if(e&&e.length>0){t+=Math.abs(a(e[0]));for(var n=1;n<e.length;n++)t-=Math.abs(a(e[n]));}return t}function a(e){var t=0;if(e.length>2){for(var n,r,o=0;o<e.length-1;o++)n=e[o], r=e[o+1], t+=i(r[0]-n[0])*(2+Math.sin(i(n[1]))+Math.sin(i(r[1])));t=t*u.RADIUS*u.RADIUS/2;}return t}function i(e){return e*Math.PI/180}var u=e("wgs84");t.exports.geometry=r, t.exports.ring=a;},{wgs84:5}],5:[function(e,t,n){t.exports.RADIUS=6378137, t.exports.FLATTENING=1/298.257223563, t.exports.POLAR_RADIUS=6356752.3142;},{}],6:[function(e,t,n){t.exports=e("./polygon-features.json");},{"./polygon-features.json":7}],7:[function(e,t,n){t.exports=[{key:"building",polygon:"all"},{key:"highway",polygon:"whitelist",values:["services","rest_area","escape","elevator"]},{key:"natural",polygon:"blacklist",values:["coastline","cliff","ridge","arete","tree_row"]},{key:"landuse",polygon:"all"},{key:"waterway",polygon:"whitelist",values:["riverbank","dock","boatyard","dam"]},{key:"amenity",polygon:"all"},{key:"leisure",polygon:"all"},{key:"barrier",polygon:"whitelist",values:["city_wall","ditch","hedge","retaining_wall","wall","spikes"]},{key:"railway",polygon:"whitelist",values:["station","turntable","roundhouse","platform"]},{key:"area",polygon:"all"},{key:"boundary",polygon:"all"},{key:"man_made",polygon:"blacklist",values:["cutline","embankment","pipeline"]},{key:"power",polygon:"whitelist",values:["plant","substation","generator","transformer"]},{key:"place",polygon:"all"},{key:"shop",polygon:"all"},{key:"aeroway",polygon:"blacklist",values:["taxiway"]},{key:"tourism",polygon:"all"},{key:"historic",polygon:"all"},{key:"public_transport",polygon:"all"},{key:"office",polygon:"all"},{key:"building:part",polygon:"all"},{key:"military",polygon:"all"},{key:"ruins",polygon:"all"},{key:"area:highway",polygon:"all"},{key:"craft",polygon:"all"},{key:"golf",polygon:"all"}];},{}]},{},[1])(1)});
});

export default osmtogeojson;
/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/geotoolbox@2.0.3/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{topology as e}from"../topojson-server@3.0.1/+esm.js";import t from"../geos-wasm@1.2.1/+esm.js";import{geoArea as r,geoCentroid as o,geoIdentity as n,geoPath as i,geoEquirectangularRaw as s,geoBounds as a,geoCircle as l}from"../d3-geo@3.1.0/+esm.js";import{merge as u,neighbors as c,mesh as p,feature as f}from"../topojson-client@3.1.0/+esm.js";import*as g from"../d3-array/+esm.js";import{presimplify as y,quantile as d,simplify as m}from"../topojson-simplify@3.0.3/+esm.js";function h(e){return e=JSON.parse(JSON.stringify(e)),"FeatureCollection"!=e?.type||Array.isArray(e)?Array.isArray(e)&&null!=e[0]?.type&&null!=e[0]?.properties&&null!=e[0]?.geometry?{type:"FeatureCollection",features:e}:Array.isArray(e)&&null!=e[0]?.type&&null!=e[0]?.coordinates?{type:"FeatureCollection",features:e.map((e=>({type:"Feature",properties:{},geometry:e})))}:"object"==typeof e&&["Point","LineString","Polygon","MultiPoint","MultiLineString","MultiPolygon"].includes(e?.type)?{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e}]}:"object"==typeof e&&"Feature"==e?.type?{type:"FeatureCollection",features:[e]}:void 0:e}function S(e,t={}){let r=!1!==t.outer,o=!0===(!1!==t.mutate)?e:JSON.parse(JSON.stringify(e));for(let e=0;e<o.features.length;e++)if("Polygon"===o.features[e].geometry.type)O(o.features[e].geometry.coordinates,r);else if("MultiPolygon"===o.features[e].geometry.type)for(let t=0;t<o.features[e].geometry.coordinates.length;t++)O(o.features[e].geometry.coordinates[t],r);return o}function O(e,t){if(0!==e.length){E(e[0],t);for(let r=1;r<e.length;r++)E(e[r],!t)}}function E(e,t){let r=0,o=0;for(let t=0,n=e.length,i=n-1;t<n;i=t++){const n=(e[t][0]-e[i][0])*(e[i][1]+e[t][1]),s=r+n;o+=Math.abs(r)>=Math.abs(n)?r-s+n:n-s+r,r=s}r+o>=0!=!!t&&e.reverse()}function G(e){let t=Array.from(new Set(e.features.map((e=>e.geometry.type)))),r=[];return-1===t.indexOf("Polygon")&&-1===t.indexOf("MultiPolygon")||r.push(3),-1===t.indexOf("LineString")&&-1===t.indexOf("MultiLineString")||r.push(2),-1===t.indexOf("Point")&&-1===t.indexOf("MultiPoint")||r.push(1),{dimension:1==r.length?r[0]:-1,types:t}}function M(t){return e({x:t})}function _(e,t){function r(e){if(!e||0===e.length)return null;const r=e.length,o=new Float64Array(e.flat()),n=t.Module._malloc(2*r*8);t.Module.HEAPF64.set(o,n/8);const i=t.GEOSCoordSeq_copyFromBuffer(n,r,!1,!1);return t.Module._free(n),i}switch(e.type){case"Feature":return _(e.geometry,t);case"FeatureCollection":if(0===e.features.length)return t.GEOSGeom_createEmptyCollection(7);{const r=[];e.features.forEach((e=>{r.push(_(e.geometry,t))}));const o=t.Module._malloc(4*r.length),n=new Uint32Array(r);t.Module.HEAPU32.set(n,o/4);const i=t.GEOSGeom_createCollection(7,o,r.length);return t.Module._free(o),i}case"GeometryCollection":if(0===e.geometries.length)return t.GEOSGeom_createEmptyCollection(7);{const r=[];e.geometries.forEach((e=>{r.push(_(e,t))}));const o=t.Module._malloc(4*r.length),n=new Uint32Array(r);t.Module.HEAPU32.set(n,o/4);const i=t.GEOSGeom_createCollection(7,o,r.length);return t.Module._free(o),i}case"Point":return 0===e.coordinates.length?t.GEOSGeom_createEmptyPoint():t.GEOSGeom_createPointFromXY(e.coordinates[0],e.coordinates[1]);case"LineString":if(0===e.coordinates.length)return t.GEOSGeom_createEmptyLineString();{const o=r(e.coordinates);return t.GEOSGeom_createLineString(o)}case"Polygon":if(0===e.coordinates.length)return t.GEOSGeom_createEmptyPolygon();{const o=r(e.coordinates[0]),n=t.GEOSGeom_createLinearRing(o),i=[];if(e.coordinates.length>1)for(let o=1;o<e.coordinates.length;o++){const n=r(e.coordinates[o]);i.push(t.GEOSGeom_createLinearRing(n))}let s=null;if(i.length>0){const e=new Uint32Array(i);s=t.Module._malloc(4*i.length),t.Module.HEAPU32.set(e,s/4)}const a=t.GEOSGeom_createPolygon(n,s,i.length);return i.length>0&&t.Module._free(s),a}case"MultiPoint":if(0===e.coordinates.length)return t.GEOSGeom_createEmptyCollection(4);{const r=[];for(let o=0;o<e.coordinates.length;o++)r.push(t.GEOSGeom_createPointFromXY(e.coordinates[o][0],e.coordinates[o][1]));const o=t.Module._malloc(4*r.length),n=new Uint32Array(r);t.Module.HEAPU32.set(n,o/4);const i=t.GEOSGeom_createCollection(4,o,r.length);return t.Module._free(o),i}case"MultiLineString":if(0===e.coordinates.length)return t.GEOSGeom_createEmptyCollection(5);{const o=[];for(let n=0;n<e.coordinates.length;n++){const i=r(e.coordinates[n]);o.push(t.GEOSGeom_createLineString(i))}const n=t.Module._malloc(4*o.length),i=new Uint32Array(o);t.Module.HEAPU32.set(i,n/4);const s=t.GEOSGeom_createCollection(5,n,o.length);return t.Module._free(n),s}case"MultiPolygon":if(0===e.coordinates.length)return t.GEOSGeom_createEmptyCollection(6);{const o=[];for(let n=0;n<e.coordinates.length;n++){const i=r(e.coordinates[n][0]),s=t.GEOSGeom_createLinearRing(i),a=[];if(e.coordinates[n].length>1)for(let o=1;o<e.coordinates[n].length;o++){const i=r(e.coordinates[n][o]);a.push(t.GEOSGeom_createLinearRing(i))}let l=null;if(a.length>0){const e=new Uint32Array(a);l=t.Module._malloc(4*a.length),t.Module.HEAPU32.set(e,l/4)}const u=t.GEOSGeom_createPolygon(s,l,a.length);a.length>0&&t.Module._free(l),o.push(u)}const n=t.Module._malloc(4*o.length),i=new Uint32Array(o);t.Module.HEAPU32.set(i,n/4);const s=t.GEOSGeom_createCollection(6,n,o.length);return t.Module._free(n),s}default:throw new Error("Unsupported GeoJSON type: "+e.type+". Are you sure this is valid GeoJSON?")}}function C(e,t){function r(e){if(!e)return null;const r=t.Module._malloc(4);t.GEOSCoordSeq_getSize(e,r);const o=t.Module.getValue(r,"i32");if(t.Module._free(r),0===o)return[];const n=[],i=t.Module._malloc(2*o*8);t.GEOSCoordSeq_copyToBuffer(e,i,!1,!1);const s=new Float64Array(t.Module.HEAPF64.buffer,i,2*o);for(let e=0;e<2*o;e+=2)n.push([s[e],s[e+1]]);return t.Module._free(i),n}if(!e)return null;switch(t.GEOSGeomTypeId(e)){case 0:{const r=t.GEOSGeom_getCoordSeq(e),o=[],n=t.Module._malloc(4);t.GEOSCoordSeq_getSize(r,n);const i=t.Module.getValue(n,"i32");if(t.Module._free(n),1===i){const e=t.Module._malloc(8),n=t.Module._malloc(8);t.GEOSCoordSeq_getXY(r,0,e,n);const i=t.Module.getValue(e,"double"),s=t.Module.getValue(n,"double");t.Module._free(e),t.Module._free(n),o.push(i,s)}return{type:"Point",coordinates:o}}case 1:return{type:"LineString",coordinates:r(t.GEOSGeom_getCoordSeq(e))};case 3:{const o=[],n=t.GEOSGetExteriorRing(e);if(0!==n){const i=t.GEOSGeom_getCoordSeq(n),s=t.Module._malloc(4);t.GEOSCoordSeq_getSize(i,s);const a=t.Module.getValue(s,"i32");if(t.Module._free(s),a>0){o.push(r(i));const n=t.GEOSGetNumInteriorRings(e);for(let i=0;i<n;i++){const n=t.GEOSGetInteriorRingN(e,i),s=t.GEOSGeom_getCoordSeq(n);o.push(r(s))}}}return{type:"Polygon",coordinates:o}}case 4:{const r=[],o=t.GEOSGetNumGeometries(e);for(let n=0;n<o;n++){const o=t.GEOSGetGeometryN(e,n),i=t.GEOSGeom_getCoordSeq(o),s=t.Module._malloc(8),a=t.Module._malloc(8);t.GEOSCoordSeq_getXY(i,0,s,a);const l=t.Module.getValue(s,"double"),u=t.Module.getValue(a,"double");t.Module._free(s),t.Module._free(a),r.push([l,u])}return{type:"MultiPoint",coordinates:r}}case 5:{const o=[],n=t.GEOSGetNumGeometries(e);for(let i=0;i<n;i++){const n=t.GEOSGetGeometryN(e,i),s=t.GEOSGeom_getCoordSeq(n);o.push(r(s))}return{type:"MultiLineString",coordinates:o}}case 6:{const o=[],n=t.GEOSGetNumGeometries(e);for(let i=0;i<n;i++){const n=t.GEOSGetGeometryN(e,i),s=[],a=t.GEOSGetExteriorRing(n),l=t.GEOSGeom_getCoordSeq(a);s.push(r(l));const u=t.GEOSGetNumInteriorRings(n);for(let e=0;e<u;e++){const o=t.GEOSGetInteriorRingN(n,e),i=t.GEOSGeom_getCoordSeq(o);s.push(r(i))}o.push(s)}return{type:"MultiPolygon",coordinates:o}}case 7:{const r=[],o=t.GEOSGetNumGeometries(e);for(let n=0;n<o;n++){const o=t.GEOSGetGeometryN(e,n);r.push(C(o,t))}return{type:"GeometryCollection",geometries:r}}default:return null}}async function P(e){const r=await t(),o=_(e=h(e),r),n=C(r.GEOSMakeValid(o),r).geometries;return e.features.forEach(((e,t)=>e.geometry=n[t])),e}function b(e){return new Function(`return (${e})`)()}function F({x:e,field:t}){let r=[...e.features.map((e=>({...e.properties})))];r.forEach((e=>{Array.isArray(t)?t.forEach((t=>delete e[t])):delete e[t]}));let o=JSON.parse(JSON.stringify(e));return o.features.map(((e,t)=>e.properties={...r[t]})),o}function w(e,t=(e=>e),r="properties"){let o={...e},n=o.features,i=Array.from(new Set(n.map((e=>Object.keys(e))).flat())),s=n.map((e=>e[r])).map(t),a=[];n.forEach(((e,t)=>{let o={};i.forEach((n=>{o=Object.assign(o,{[n]:n==r?s[t]:e[n]})})),a.push(o)}));let l={};return Object.keys(o).forEach((e=>{l=Object.assign(l,{[e]:"features"==e?a:o[e]})})),l}function j(e,t=(e=>e),r="properties"){let o={...e},n=o.features;Array.from(new Set(n.map((e=>Object.keys(e))).flat()));let i=[];n.forEach(((e,o)=>{0!=[e[r]].filter(t).length&&i.push(e)}));let s={};return Object.keys(o).forEach((e=>{s=Object.assign(s,{[e]:"features"==e?i:o[e]})})),s}function A(e){e=h(e);let t=[];e.features.forEach((e=>{t.push(function(e){let t=[];e.geometry.type.includes("Multi")?e.geometry.coordinates.forEach((r=>{t.push({type:"Feature",properties:e.properties,geometry:{type:e.geometry.type.replace("Multi",""),coordinates:r}})})):t.push({...e});const o=r(e);return t.forEach((e=>e.__share=r(e)/o)),JSON.parse(JSON.stringify(t))}(e))}));const o=Object.keys(e).filter((e=>"features"!=e)),n={};return o.forEach((t=>{n[t]=e[t]})),n.features=t.flat(),n}const N=Object.assign({},{topology:e,merge:u});function v(e,t={}){let r=G(e=h(e)).dimension;if(null!=t.id&&null!=t.id){let o=t.id,n=Array.from(new Set(e.features.map((e=>e.properties[o])))),i=[];return n.forEach((t=>{let n,s={type:"FeatureCollection",features:e.features.filter((e=>e.properties[o]==t))};if(3==r){let e=N.topology({foo:s});n=N.merge(e,e.objects.foo.geometries)}2==r&&(n={type:"MultiLineString",coordinates:A(s).features.map((e=>e.geometry.coordinates))}),1==r&&(n={type:"MultiPoint",coordinates:A(s).features.map((e=>e.geometry.coordinates))}),i.push({type:"Feature",properties:{id:t},geometry:n})})),{type:"FeatureCollection",features:i}}{let t;if(3==r){let r=N.topology({foo:e});t=N.merge(r,r.objects.foo.geometries)}return 2==r&&(t={type:"MultiLineString",coordinates:A(e).features.map((e=>e.geometry.coordinates))}),1==r&&(t={type:"MultiPoint",coordinates:A(e).features.map((e=>e.geometry.coordinates))}),{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:t}]}}}const L=Object.assign({},{geoArea:r,geoCentroid:o,geoIdentity:n,geoPath:i});function J(e,t={}){let r=!1!==t.largest,o=!0===t.planar,n=L.geoPath(L.geoIdentity());e=h(e);const i=function(e){var t={},r=0;return e.geometry.coordinates.forEach((function(e){var i={type:"Polygon",coordinates:e},s=o?n.area(i):L.geoArea(i);s>r&&(r=s,t=i)})),t};let s=e.features.map((e=>(e.geometry.coordinates=o?n.centroid(1==r?"Polygon"==e.geometry.type?e:i(e):e):L.geoCentroid(1==r?"Polygon"==e.geometry.type?e:i(e):e),e.geometry.type="Point",e)));return e.features=s,e}const q=Object.assign({},{topology:e,neighbors:c,mesh:p}),x=Object.assign({},g);function U(e,t={}){let r=h(e);if(null==t.values&&null==t.id){const e=q.topology({d:r});return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:q.mesh(e,Object.entries(e.objects)[0][1],((e,t)=>e!==t))}]}}{const e=t.id,o=t.values,n=t.type?t.type:"rel",i=t.share?t.share:null,s=q.topology({d:r}),a=r.features.map((t=>t.properties[e])),l=q.neighbors(s.objects.d.geometries),u=new Map(r.features.map((t=>[t.properties[e],t.properties[o]])));let c=[];a.forEach((t=>{l[a.indexOf(t)].map((e=>({properties:{i:t,j:a[e],varoptionsi:+u.get(t),varoptionsj:+u.get(a[e]),disc:"rel"==n?0!=x.min([+u.get(t),+u.get(a[e])])?x.max([+u.get(t),+u.get(a[e])])/x.min([+u.get(t),+u.get(a[e])]):null:x.max([+u.get(t),+u.get(a[e])])-x.min([+u.get(t),+u.get(a[e])])}}))).forEach((t=>{let r=q.mesh(s,s.objects.d,((r,o)=>r.properties[e]==t.properties.i&o.properties[e]==t.properties.j)),o=Object.assign({type:"Feature"},t);c.push(Object.assign(o,{geometry:r}))}))})),c.sort(((e,t)=>x.descending(e.properties.disc,t.properties.disc)));const p=c.length;return c.map((e=>e.properties)).forEach(((e,t)=>{Object.assign(e,{share:(t+1)/p})})),null!=i&&(c=c.filter((e=>e.properties.share<i))),r.features=c,r}}const k=Object.assign({},{geoEquirectangularRaw:s,geoBounds:a});function I(e){let t;t=Array.isArray(e)?e:k.geoBounds(h(e));let r=t[0][0],o=t[0][1],n=t[1][0],i=t[1][1];const s={type:"FeatureCollection",features:[{type:"Feature",properties:{id:1},geometry:{type:"Polygon",coordinates:-90===o?[[[r,i],[n,i]]]:[[[r,o],[r,i],[n+=360*(n<r),i],[n,o],[r,o]]]}}]};return R(k.geoEquirectangularRaw,.02)(s)}const R=(e,t)=>{const r=Math.PI/180,o=Math.tan(r*t/2)**2,n=function(t,r,i,s,a,l,u){if(l--){var c=V(t,i),p=e.invert(...c),f=T(p),g=X(f,r),y=X(f,s);H(f,r,s)*(1+.25*a)*(1+.25*a)/(o*a)+(g-y)/a*2*((g-y)/a)>1&g+y>o|g+y>.25&&(n(t,r,c,f,g,l,u),u.push(p),n(c,f,i,s,y,l,u))}},i=t=>{let r=[],o=t[0],i=e.invert(...o),s=T(i);r.push(i);for(var a=1,l=t.length;a<l;a++){let i=t[a],l=e.invert(...i),u=T(l);n(o,s,i,u,X(s,u),16,r),r.push(l),o=i,s=u}return r};let s,a=t=>e.invert(...t),l=e=>t=>t.forEach(((r,o)=>t[o]=e(r))),u={Point:e=>e.coordinates=a(e.coordinates),MultiPoint:e=>l(a)(e.coordinates),LineString:e=>e.coordinates=i(e.coordinates),Polygon:e=>l(i)(e.coordinates),MultiLineString:e=>l(i)(e.coordinates),MultiPolygon:e=>e.coordinates.forEach(l(i)),Feature:e=>s(e.geometry),GeometryCollection:e=>e.geometries.forEach(s),FeatureCollection:e=>e.features.forEach(s)};return s=e=>(u[e.type](e),e),function(e){return e=JSON.parse(JSON.stringify(e)),s(e)}},H=([e,t,r],[o,n,i],[s,a,l])=>{var u=e*((n-t)*(l-r)-(a-t)*(i-r))+t*((i-r)*(s-e)-(l-r)*(o-e))+r*((o-e)*(a-t)-(s-e)*(n-t)),c=(e+s)*(e+o)+(t+a)*(t+n)+(r+l)*(r+i);return(u*u+!(c*c))/(c*c)},V=([e,t],[r,o])=>[.5*(e+r),.5*(t+o)],B=Math.PI/180,T=([e,t])=>[Math.cos(B*t)*Math.cos(B*e),Math.cos(B*t)*Math.sin(B*e),Math.sin(B*t)],X=([e,t,r],[o,n,i])=>{var s=e*(n-t)-(o-e)*t,a=t*(i-r)-(n-t)*r,l=r*(o-e)-(i-r)*e,u=e*(o+e)+t*(n+t)+r*(i+r);return(s*s+a*a+l*l+!(u*u))/(u*u)};function Y(e,t={}){let r=JSON.parse(JSON.stringify(e)),o=t.lat||t.latitude,n=t.lon||t.lng||t.longitude,i=t.coords||t.coordinates;!t.sep&&!t.separator||(t.sep||t.separator);let s=!!t.reverse;if(null==o&&null==n&&null==i){let e=["coords","Coords","coord","Coords","Coordinates","coordinates","Coordinate","coordinate"],t=["lat","Lat","LAT","Latitude","latitude"],s=["lon","Lon","LON","lng","Lng","LNG","Longitude","longitude"],a=[];r.forEach((e=>a.push(Object.keys(e)))),a=Array.from(new Set(a.flat())),o=t.filter((e=>a.includes(e)))[0],n=s.filter((e=>a.includes(e)))[0],i=e.filter((e=>a.includes(e)))[0]}if(o&&n){let t=s?n:o,r=s?o:n;return{type:"FeatureCollection",features:e.map((e=>({type:"Feature",properties:e,geometry:{type:"Point",coordinates:[+e[r],+e[t]]}})))}}return i?{type:"FeatureCollection",features:e.map((e=>({type:"Feature",properties:e,geometry:{type:"Point",coordinates:s?z(e[i]):z(e[i]).reverse()}})))}:i}function z(e){return e?e.toLowerCase().includes("point")?function(e){let t=e.match(/\(([^)]+)\)/g);return null===t?[void 0,void 0]:t[0].replace(/\s\s+/g," ").replace("(","").replace(")","").trimStart().trimEnd().split(" ").map((e=>e.replace(",","."))).map((e=>+e))}(e):function(e,t=","){let r=(e=e.replace(/[ ]+/g,"")).split(t).map((e=>e.replace(",","."))).map((e=>e.replace(/[^\d.-]/g,""))).map((e=>+e));return 2!=r.length&&(r=[void 0,void 0]),r}(e):null}function D(e){const t=l().center((e=>e)).radius(e/4).precision(10),r=[];for(let o=-80;o<=80;o+=e)for(let n=-180;n<180;n+=e)r.push({type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[t([n,o]).coordinates]}});return{type:"FeatureCollection",features:r}}function $(){let e=[];return[["Equator",0],["Tropic of Cancer",23.43656],["Tropic of Capricorn",-23.43636],["Arctic Circle",66.56345],["Antarctic Circle",-66.56364]].forEach((t=>{e.push({type:"Feature",properties:{name:t[0],latitude:t[1]},geometry:W(t[1])})})),{type:"FeatureCollection",features:e}}function W(e){let t=[],r=-180;for(;r<=180;)t.push([r,e]),r+=2.5;return{type:"MultiLineString",coordinates:[t]}}function K(e){return 180*(e/6371.0088%(2*Math.PI))/Math.PI}async function Q(e,r={}){const o=await t();e=h(e);let n=r.quadsegs?r.quadsegs:8,i=!1!==r.wgs84,s=0;switch(typeof r.dist){case"number":s=i?K(r.dist):r.dist;break;case"string":s=r.dist}let a={...e};if(delete a.features,r.merge){const t=_(e,o),r=o.GEOSBuffer(t,s,n);return Object.assign(a,{features:[{type:"Feature",properties:{},geometry:C(r,o)}]})}{let t=[];return e.features.forEach((e=>{let r="number"==typeof s?s:i?K(e.properties[s]):e.properties[s];const a=_(e,o),l=o.GEOSBuffer(a,r,n);t.push({type:"Feature",properties:e.properties,geometry:C(l,o)})})),t=t.filter((e=>0!=e.geometry.coordinates)),Object.assign(a,{features:t})}}async function Z(e,r={}){const o=await t();e=h(e);let n,i=!!r.reverse,s={...e};if(delete s.features,null!=r.clip&&null!=r.clip)n=h(r.clip);else{let e=1e-5;n={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-180+e,90-e],[180-e,90-e],[180-e,-90+e],[-180+e,-90+e],[-180+e,90-e]]]}}]}}Z=o.GEOSUnaryUnion(_(n,o));let a=[];return e.features.forEach((e=>{const t=_(e,o),r=1==i?o.GEOSDifference(t,Z):o.GEOSIntersection(t,Z);a.push({type:"Feature",properties:e.properties,geometry:C(r,o)})})),Object.assign(s,{features:a})}function ee(e){e=h(e);let t=[];return e.features.forEach((e=>{let r=e.geometry.coordinates.flat(1/0),o=[];for(let t=0;t<r.length;t+=2)o.push({type:"Feature",properties:e.properties,geometry:{type:"Point",coordinates:[r[t],r[t+1]]}});t.push(o)})),{type:"FeatureCollection",features:t.flat()}}async function te(e,r={tolerance:1}){const o=await t(),n=_(e=h(e),o),i=C(o.GEOSDensify(n,r.dist),o).geometries;return e.features.forEach(((e,t)=>e.geometry=i[t])),e}async function re(e,r={}){const o=await t();e=h(e);let n={...e};if(delete n.features,null!=r.id&&null!=r.id){let t=Array.from(new Set(e.features.map((e=>e.properties[r.id])))),i=[];return t.forEach((t=>{const n=_({type:"FeatureCollection",features:e.features.filter((e=>e.properties[r.id]==t))},o),s=o.GEOSUnaryUnion(n);i.push({type:"Feature",properties:{id:t},geometry:C(s,o)})})),Object.assign(n,{features:i})}{const t=_(e,o),r=o.GEOSUnaryUnion(t);return Object.assign(n,{features:[{type:"Feature",properties:{},geometry:C(r,o)}]})}}const oe=Object.assign({},{topology:e,presimplify:y,quantile:d,simple:m,feature:f});function ne(e,t={}){let r,o=t.k?t.k:.5;r=h(e);let n=oe.topology({foo:r}),i=oe.presimplify(n);return i=oe.simple(i,oe.quantile(i,o)),r.features=oe.feature(i,Object.keys(i.objects)[0]).features,r}let ie={contains:async function(e,r){const o=await t();return se(o.GEOSContains(_(h(e),o),_(h(r),o)))},covers:async function(e,r){const o=await t();return se(o.GEOSCovers(_(h(e),o),_(h(r),o)))},crosses:async function(e,r){const o=await t();return se(o.GEOSCrosses(_(h(e),o),_(h(r),o)))},coveredby:async function(e,r){const o=await t();return se(o.GEOSCoveredBy(_(h(e),o),_(h(r),o)))},disjoint:async function(e,r){const o=await t();return se(o.GEOSDisjoint(_(h(e),o),_(h(r),o)))},equals:async function(e,r){const o=await t();return se(o.GEOSEquals(_(h(e),o),_(h(r),o)))},intersects:async function(e,r){const o=await t();return se(o.GEOSIntersects(_(h(e),o),_(h(r),o)))},overlaps:async function(e,r){const o=await t();return se(o.GEOSOverlaps(_(h(e),o),_(h(r),o)))},touches:async function(e,r){const o=await t();return se(o.GEOSTouches(_(h(e),o),_(h(r),o)))},within:async function(e,r){const o=await t();return se(o.GEOSWithin(_(h(e),o),_(h(r),o)))}};function se(e){return new Map([[-1,void 0],[0,!1],[1,!0]]).get(e)}let ae={add:function({x:e,field:t,expression:r}){let o=[...e.features.map((e=>({...e.properties})))],n=[];e.features.map((e=>e.properties)).forEach((e=>{n.push(Object.keys(e))})),n=Array.from(new Set(n.flat())),n.forEach((e=>{r=r.replace(e,`d.${e}`)})),r="d=> "+r;let i=o.map(b(r));o.forEach(((e,r)=>{e=Object.assign(e,{[t]:i[r]})}));let s=JSON.parse(JSON.stringify(e));return s.features.map(((e,t)=>e.properties={...o[t]})),s},select:function({x:e,expression:t}){let r=[...e.features],o=[];e.features.map((e=>e.properties)).forEach((e=>{o.push(Object.keys(e))})),o=Array.from(new Set(o.flat())),o.forEach((e=>{t=t.replace(e,`d.properties.${e}`)})),t="d => "+t;let n=JSON.parse(JSON.stringify(e));return n.features=r.filter(b(t)),n},keep:function({x:e,fields:t}){let r=[];return e.features.map((e=>e.properties)).forEach((e=>{r.push(Object.keys(e))})),r=Array.from(new Set(r.flat())),F({x:e,field:r.filter((e=>!t.includes(e)))})},remove:F,table:function(e){return JSON.parse(JSON.stringify(e.features.map((e=>e.properties))))},subset:function({x:e,field:t,selection:r,inverse:o=!1}){let n=[...e.features];r=Array.isArray(r)?r:[r],o&&(r=Array.from(new Set(n.map((e=>e.properties[t])))).filter((e=>!r.includes(e))));let i=[];r.forEach((e=>{i.push(n.filter((r=>r.properties[t]==e)))}));let s=JSON.parse(JSON.stringify(e));return s.features=i.flat(),s},head:function({x:e,field:t,nb:r=10}){let o=[...e.features];o=o.filter((e=>""!=e.properties[t])).filter((e=>null!=e.properties[t])).filter((e=>null!=e.properties[t])).filter((e=>e.properties[t]!=1/0)).filter((e=>e.properties[t]!=-1/0)).filter((e=>NaN!=e.properties[t])),o.sort(((e,r)=>+r.properties[t]-+e.properties[t])),o=o.slice(0,r);let n=JSON.parse(JSON.stringify(e));return n.features=o,n},tail:function({x:e,field:t,nb:r=10}){let o=[...e.features];o=o.filter((e=>""!=e.properties[t])).filter((e=>null!=e.properties[t])).filter((e=>null!=e.properties[t])).filter((e=>e.properties[t]!=1/0)).filter((e=>e.properties[t]!=-1/0)).filter((e=>NaN!=e.properties[t])),o.sort(((e,r)=>+e.properties[t]-+r.properties[t])),o=o.slice(0,r);let n=JSON.parse(JSON.stringify(e));return n.features=o,n}};export{v as aggregate,I as bbox,U as border,Q as buffer,J as centroid,Z as clip,Y as coords2geo,te as densify,A as dissolve,h as featurecollection,j as filter,$ as geolines,P as makevalid,w as map,ee as nodes,ie as op,ae as properties,S as rewind,ne as simplify,D as tissot,M as topojson,G as type,re as union};export default null;
/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/area@6.5.0/dist/es/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{geomReduce as t}from"../meta@6.5.0/+esm.js";var n=6378137;function r(n){return t(n,(function(t,n){return t+function(t){var n,r=0;switch(t.type){case"Polygon":return e(t.coordinates);case"MultiPolygon":for(n=0;n<t.coordinates.length;n++)r+=e(t.coordinates[n]);return r;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}(n)}),0)}function e(t){var n=0;if(t&&t.length>0){n+=Math.abs(o(t[0]));for(var r=1;r<t.length;r++)n-=Math.abs(o(t[r]))}return n}function o(t){var r,e,o,i,u,c,s=0,f=t.length;if(f>2){for(c=0;c<f;c++)c===f-2?(o=f-2,i=f-1,u=0):c===f-1?(o=f-1,i=0,u=1):(o=c,i=c+1,u=c+2),r=t[o],e=t[i],s+=(a(t[u][0])-a(r[0]))*Math.sin(a(e[1]));s=s*n*n/2}return s}function a(t){return t*Math.PI/180}export{r as default};

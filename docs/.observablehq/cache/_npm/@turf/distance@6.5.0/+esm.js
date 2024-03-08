/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/distance@6.5.0/dist/es/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{getCoord as t}from"../invariant@6.5.0/+esm.js";import{degreesToRadians as a,radiansToLength as r}from"../helpers@6.5.0/+esm.js";function n(n,o,s){void 0===s&&(s={});var h=t(n),i=t(o),M=a(i[1]-h[1]),m=a(i[0]-h[0]),p=a(h[1]),e=a(i[1]),f=Math.pow(Math.sin(M/2),2)+Math.pow(Math.sin(m/2),2)*Math.cos(p)*Math.cos(e);return r(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),s.units)}export{n as default};

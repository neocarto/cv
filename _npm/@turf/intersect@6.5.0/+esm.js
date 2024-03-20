/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/intersect@6.5.0/dist/es/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{polygon as r,multiPolygon as e}from"../helpers@6.5.0/+esm.js";import{getGeom as o}from"../invariant@6.5.0/+esm.js";import t from"../../polygon-clipping@0.15.7/+esm.js";function n(n,i,p){void 0===p&&(p={});var m=o(n),s=o(i),l=t.intersection(m.coordinates,s.coordinates);return 0===l.length?null:1===l.length?r(l[0],p.properties):e(l,p.properties)}export{n as default};

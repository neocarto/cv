/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/machinepack-http@3.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"../machine@13.0.0-24/+esm.js";var t={name:"machinepack-http",version:"3.0.0",description:"Send an HTTP request.",scripts:{test:"node ./node_modules/test-machinepack-mocha/bin/testmachinepack-mocha.js && mocha tests/*.js -R spec"},keywords:["http","machines","machinepack"],author:"The Treeline Company",license:"MIT",dependencies:{lodash:"3.10.1",machine:"^13.0.0-10","machinepack-urls":"^6.0.0-2",request:"2.74.0"},repository:{type:"git",url:"git@github.com:mikermcneil/machinepack-http.git"},devDependencies:{mocha:"3.0.0",sails:"^0.12.4","test-machinepack-mocha":"^2.1.1"},machinepack:{friendlyName:"HTTP",machineDir:"machines/",machines:["send-http-request","fetch-webpage-html","get","post","put","del","patch","negotiate-http-status"],testsUrl:"https://travis-ci.org/mikermcneil/machinepack-http"}},a=e.pack({pkg:t,dir:"/app/.cache/npm/machinepack-http@3.0.0"});export{a as default};

// Imports
import { FileAttachment } from "../../_observablehq/stdlib.js";
import * as bertin from "../../_npm/bertin@1.8.5/+esm.js";
import { geoConicConformal } from "../../_npm/d3-geo@3.1.0/+esm.js";
const d3 = Object.assign({}, { geoConicConformal });

// Data
const paris = await FileAttachment("../../data/paris.geojson", import.meta.url).json();
const bar = await FileAttachment("../../data/bar.json", import.meta.url).json();
const pub = await FileAttachment("../../data/pub.json", import.meta.url).json();
const poi = {
  type: "FeatureCollection",
  features: [...bar.features, ...pub.features],
};

// Dots
export function dots(width, k) {
  return bertin.draw({
    params: {
      background: "#EBF2F8",
      width,
      projection: d3.geoConicConformal().center([2.454071, 46.279229]),
    },
    layers: [
      {
        geojson: pub,
        symbol_size: 5,
        stroke: "none",
        fill: "#D75C48",
        fillOpacity: k.includes("pubs") ? 1 : 0,
      },
      {
        geojson: bar,
        symbol_size: 5,
        stroke: "none",
        fill: "#D75C48",
        fillOpacity: k.includes("bars") ? 1 : 0,
      },
      { geojson: paris, fill: "#CCC" },
    ],
  });
}

// Grid
export function grid(width, k) {
  return bertin.draw({
    params: {
      background: "#EBF2F8",
      width,
      projection: d3.geoConicConformal().center([2.454071, 46.279229]),
    },
    layers: [
      {
        type: "regulargrid",
        step: k,
        geojson: poi,
        stroke: "white",
        strokeWidth: 0.1,
        fillOpacity: 0.8,
        fill: {
          type: "choro",
          values: "value",
          colors: "Reds",
        },
      },
      { geojson: paris, fill: "#CCC" },
    ],
  });
}

// Grid
export function smooth(width, k) {
  return bertin.draw({
    params: {
      background: "#EBF2F8",
      width,
      projection: d3.geoConicConformal().center([2.454071, 46.279229]),
    },
    layers: [
      {
        type: "smooth",
        geojson: poi,
        thresholds: 15,
        bandwidth: k,
        colorcurve: 1,
        remove: 0,
      },
      { geojson: paris, fill: "#CCC" },
    ],
  });
}

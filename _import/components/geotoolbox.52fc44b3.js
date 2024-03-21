// Imports
import { FileAttachment } from "../../_observablehq/stdlib.js";
import * as geo from "../../_npm/geotoolbox@2.0.3/+esm.js";
import * as viz from "../../_npm/geoviz@0.5.2/+esm.js";
import { geoEquirectangular } from "../../_npm/d3-geo@3.1.0/+esm.js";
const d3 = Object.assign({}, { geoEquirectangular });

// Data
const world = await FileAttachment("../../data/world.json", import.meta.url).json();
const aus = await FileAttachment("../../data/aussimpl.json", import.meta.url).json();

// Simplifiy
export function simplify(width, k) {
  const world_simpl = geo.simplify(world, { k });
  let svg = viz.create({
    projection: d3.geoEquirectangular(),
    domain: world,
    width,
  });
  svg.path({
    data: world_simpl,
    fill: "#D75C48",
    stroke: "white",
    strokeWidth: 0.5,
  });
  return svg.render();
}

// Buffer

export function buffermap(width, buffered) {
  let svg = viz.create({
    projection: d3.geoEquirectangular(),
    domain: buffered,
    margin: 1,
    width,
  });

  svg.path({
    data: buffered,
    fill: "none",
    stroke: "#D75C48",
    strokeWidth: 2,
    strokeDasharray: [4, 2],
  });

  svg.path({
    data: aus,
    fill: "#D75C48",
    fillOpacity: 0.3,
    stroke: "none",
  });
  return svg.render();
}

// Render Intersect

export function intersect(width, china_buff, india_buff) {
  let svg = viz.create({
    projection: d3.geoEquirectangular(),
    domain: [china_buff, india_buff],
    //domain: clipped,
    margin: [30, 0, 0, 0],
    width,
  });

  svg.path({
    data: china_buff,
    fill: "#3c46b0",
    stroke: "none",
    fillOpacity: 0.4,
  });
  svg.path({
    data: india_buff,
    fill: "#bd1542",
    stroke: "none",
    fillOpacity: 0.4,
  });
  return svg.render();
}

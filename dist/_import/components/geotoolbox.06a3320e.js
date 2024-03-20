// Imports
import { FileAttachment } from "../../_observablehq/stdlib.js";
import * as geo from "../../_npm/geotoolbox@2.0.3/+esm.js";
import * as viz from "../../_npm/geoviz@0.5.2/+esm.js";
import { geoEquirectangular } from "../../_npm/d3-geo@3.1.0/+esm.js";
const d3 = Object.assign({}, { geoEquirectangular });

// Data
const world = await FileAttachment("../../data/world.json", import.meta.url).json();
const aus = await FileAttachment("../../data/aussimpl.json", import.meta.url).json();

// Data Handling
const china = geo.properties.subset({
  x: world,
  field: "ISO3",
  selection: "CHN",
});
const india = geo.properties.subset({
  x: world,
  field: "ISO3",
  selection: "IND",
});
const china_buff = await geo.buffer(china, { dist: 1000 });
const india_buff = await geo.buffer(india, { dist: 500 });
const clipped = await geo.clip(china_buff, { clip: india_buff });

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
export async function buffer(width, k) {
  const aus_simpl = await geo.buffer(aus, { dist: k });
  let svg = viz.create({
    projection: d3.geoEquirectangular(),
    domain: aus_simpl,
    margin: 1,
    width,
  });

  svg.path({
    data: aus,
    fill: "#D75C48",
    fillOpacity: 0.3,
    stroke: "none",
  });
  svg.path({
    data: aus_simpl,
    fill: "none",
    stroke: "#D75C48",
    strokeWidth: 2,
    strokeDasharray: [4, 2],
  });

  return Promise.resolve(svg.render());
}

// Intersect

export async function intersect(width) {
  let svg = viz.create({
    projection: d3.geoEquirectangular(),
    domain: [china_buff, india_buff],
    margin: [30, 0, 0, 0],
    width,
  });

  svg.path({
    data: china_buff,
    fill: "none",
    stroke: "#D75C48",
    strokeWidth: 2,
    strokeDasharray: [4, 2],
  });
  svg.path({
    data: india_buff,
    fill: "none",
    stroke: "#D75C48",
    strokeWidth: 2,
    strokeDasharray: [4, 2],
  });
  svg.path({
    data: clipped,
    strokeWidth: 2,
    stroke: "#D75C48",
    fill: "#D75C48",
  });

  return Promise.resolve(svg.render());
}

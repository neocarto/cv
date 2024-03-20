// Imports
import { FileAttachment } from "../../_observablehq/stdlib.js";
import * as viz from "../../_npm/geoviz@0.5.2/+esm.js";
import { geoOrthographic } from "../../_npm/d3-geo@3.1.0/+esm.js";
const d3 = Object.assign({}, { geoOrthographic });

// Data
const world = await FileAttachment("../../data/world.json", import.meta.url).json();
const aus = await FileAttachment("../../data/AUS.geojson", import.meta.url).json();
const africa = viz.tool.featurecollection(
  world.features.filter((d) => d.properties.region == "Africa")
);

// Globe
export function globe(width) {
  let svg = viz.create({
    projection: d3.geoOrthographic().rotate([-30, -30]),
    zoomable: "versor",
    margin: [10, 0, 0, 0],
    width,
  });
  svg.outline({ fill: viz.effect.radialGradient(svg) });
  svg.graticule({ stroke: "white", step: 30 });
  svg.path({ datum: world, fill: "white", fillOpacity: 0.3 });
  svg.circle({
    data: world,
    r: "pop",
    k: 20,
    fill: "#D75C48",
    fillOpacity: 0.9,
    strokeWidth: 0.2,
  });
  return svg.render();
}

// Tiles
export function tile(width) {
  let svg = viz.create({
    projection: "mercator",
    domain: aus,
    zoomable: true,
    margin: [15, 0, 0, 0],
    width,
  });

  svg.tile({
    url: "worldimagery",
    zoomDelta: 1,
    clipPath: svg.effect.clipPath({ datum: aus }),
  });
  return svg.render();
}

// Thematic maps
export function thematic(width) {
  const data = africa.features.map((d) => d.properties.gdppc);
  const choro = viz.tool.choro(data, {
    method: "quantile",
    nb: 6,
    precision: 0,
    colors: "BluGrn",
  });

  const svg = viz.create({
    projection: "mercator",
    domain: africa,
    margin: [20, 0, 0, 0],
    width,
  });

  svg.path({
    data: africa,
    fill: (d) => choro.colorize(d.properties.gdppc),
    tip: "$NAMEen\n\nGDP per capita: $gdppc\nPopulation:$pop",
    fillOpacity: 0.8,
    stroke: "none",
    filter: svg.effect.shadow({}),
  });

  svg.legend.choro_vertical({
    pos: [0, svg.height - 150],
    ...choro,
    title: "GDP per Capita",
    title_fontSize: 12,
  });

  return svg.render();
}

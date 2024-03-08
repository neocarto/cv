// Imports
import { FileAttachment } from "npm:@observablehq/stdlib";
import { view } from "npm:geoverview@1.2";

// Data
const airports = await FileAttachment("../data/airports.geojson").json();
const roads = await FileAttachment("../data/roads.geojson").json();
const counties = await FileAttachment("../data/counties.geojson").json();

// Map

export function geoview(width, k) {
  const data = new Map([
    ["World airports (dots)", airports],
    ["European roads (lines)", roads],
    ["US counties (polygons)", counties],
  ]);

  //return data.get(k);

  return view(data.get(k), { width });
}

---
toc: false
---

<link rel="stylesheet" href="css/style.css">

```js
import {menu} from "./helpers/menu.js"
```

<div class = "hero"><h1> <img src="images/nico.jpg" width="110px"></img> Nicolas Lambert</h1></div>

<div class="note">In this section, I share my main software development activities. You'll find lots more on my <a href="https://github.com/neocarto" target = "_BLANK">github</a> account.</div>

```js
menu("libs")
```

```js

let k
//const world = FileAttachment("data/world.json").json()
```


# Geotoolbox

`geotoolbox` is javascript tool for geographers based on d3-geo, topojson and geos-wasm. It allows to simply deal with geojson properties and provides several GIS operations useful for thematic cartography.

<div class="grid grid-cols-3">

  <div class="card">
        <h2><b>Simplify</b></h2>
        ${simplify_k}
        <br/>
${resize((width) => simplify(width, simplifyk))}
        
</div>
  <div class="card">
      <h2><b>Buffer</b></h2>
        ${buffer_k}
        <br/>
        ${bufferk}
<br/>
  </div>
  <div class="card"></div>
</div>

<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/geotoolbox" targt = "_BLANK">code repository</a> and some other <a href ="https://observablehq.com/@neocartocnrs/hello-geotoolbox?collection=@neocartocnrs/geotoolbox" target = "_BLANK">live examples</a>.</div>

# Bertin

`bertin` is an easy to use wrapper around d3.js to facilitate the process of making thematic maps. The principle is to work with layers stacked on each other. As in a GIS, the layers that are displayed above are placed at the top in the code, the layers that are displayed below are placed at the bottom in the code. The layers that can be displayed are of several types: header, footer, graticule, outline, choro, typo, prop, shadow, scalebar, text... Each type has its own parameters

<div class="grid grid-cols-3">

  <div class="card">
        <h2><b>Bubbles</b></h2>
                ${bubble_k}
  ${resize((width) => bertin_bubble(width, bubblek))}
</div>
  <div class="card">
      <h2><b>Grid</b></h2>
       ${bertin_step}
  ${resize((width) => bertin_grid(width, bertinstep))}
  
  </div>
  <div class="card">
      <h2><b>Smooth</b></h2>
       ${bertin_bandwidth}
  ${resize((width) => bertin_smooth(width, bertinbandwidth))}
  
  </div>
</div>

<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/bertin" targt = "_BLANK">code repository</a> and some other <a href ="https://observablehq.com/collection/@neocartocnrs/bertin" target = "_BLANK">live examples</a>.</div>

# Geoviz

```js
import * as viz from "npm:geoviz@0.5.2";
import * as geo from "npm:geotoolbox@2.0.3";
import * as bertin from "npm:bertin";
import {previews} from "./helpers/preview.js"
const world = FileAttachment("data/world.json").json();
const aus = FileAttachment("data/AUS.geojson").json();
const aus2 = FileAttachment("data/aussimpl.json").json();
const deaths = FileAttachment("data/deaths.json").json();
```

`geoviz` is a JavaScript library for designing thematic maps. The library provides a set of d3 compatible functions that you can mix with the usual d3 syntax. The library is designed to be intuitive and concise. It allow to manage different geographic layers (points, lines, polygons) and marks (circles, labels, scale bar, title, north arrow, etc.) to design pretty maps. Its use is particularly well suited to Observable notebooks. Maps designed with geoviz are thematic, vectorial, interactive, interoperable and zoomable.


<div class="grid grid-cols-3" align = "center">

  <div class="card">
        <h2><b>Rotable globes</b></h2>
    ${resize((width) => geoviz_globe(width))}
</div>
  <div class="card">
      <h2><b>Zoomable tiles</b></h2>
      ${resize((width) => geoviz_tile(width))}
  
  </div>
  <div class="card">C</div>
</div>

<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/geoviz" targt = "_BLANK">code repository</a>, some other <a href ="https://observablehq.com/@neocartocnrs/geoviz" target = "_BLANK">live examples</a> and the <a href = "https://riatelab.github.io/geoviz/docs/" target = "_BLANK">documentation api</a>.</div>


```js
// FUNCTIONS GEOVIZ

function geoviz_globe(width){
let svg = viz.create({projection:d3.geoOrthographic().rotate([-30,-30]), zoomable:"versor", width})
svg.outline({ fill: viz.effect.radialGradient(svg) });
svg.graticule({stroke:"white", step:30})
svg.path({datum:world, fill:"white", fillOpacity:0.3})
return svg.render()
}

function geoviz_tile(width){

 let svg = viz.create({
    projection: d3.geoMercator(),
    domain: aus,
    zoomable: true,
    width
  });

  svg.tile({
    url: "worldimagery",
    zoomDelta: 1,
    clipPath: svg.effect.clipPath({ datum: aus })
  });
  return svg.render();
}

function geoviz_bubble(width){

 let svg = viz.create({
    projection: d3.geoNaturalEarth(),
    width
  });

  svg.tile({
    url: "worldimagery",
    zoomDelta: 1,
    clipPath: svg.effect.clipPath({ datum: aus })
  });
  return svg.render();
}

// SIMPLIFY

const simplify_k = Inputs.range([0.01, 0.2], {step: 0.01, value:0.01})
const simplifyk = Generators.input(simplify_k);

function simplify(width, k){

const world_simpl = geo.simplify(world, {k})

 let svg = viz.create({
    projection: d3.geoEquirectangular(),
   domain: world,
    width
  });

svg.path({data:world_simpl, fill:"#D75C48", stroke:"white", strokeWidth:0.5})
  return svg.render();
}


// BERTIN
const bubble_k = Inputs.range([5, 20], {step: 1, value:10})
const bubblek = Generators.input(bubble_k);

function bertin_bubble(width, k){

return bertin.draw({
  params: { width, extent: deaths, margin:[40,10,40,20], background:"#EBF2F8" },
  layers: [
    {
      type: "bubble",
      geojson: deaths,
      values: "Total Number of Dead and Missing",
      k,
      dorling: true,
      iteration:100,
      fill: "#f22e2e",
      tooltip: ["$Total Number of Dead and Missing"]
    },

    ]
})
}

const bertin_step = Inputs.range([5, 20], {step: 1, value:10})
const bertinstep = Generators.input(bertin_step);
function bertin_grid(width, k){


return bertin.draw({
  params: { width, extent: deaths, margin:[40,10,40,20], background:"#EBF2F8"  },
  layers: [
    {
      type: "regulargrid",
      geojson: deaths,
      fillOpacity: 0.8,
      values: "Total Number of Dead and Missing",
      step: k,
      fill: {
        type: "choro",
        values: "value",
        colors: "Reds"
      },
      strokeWidth: 0.1,
      tooltip: "$value"
    },
  ]
})


}

const bertin_bandwidth = Inputs.range([2, 15], {step: 1, value:8})
const bertinbandwidth = Generators.input(bertin_bandwidth);
function bertin_smooth(width, k){


return bertin.draw({
  params: { width, extent: deaths, margin:[40,10,40,20],background:"#EBF2F8"  },
  layers: [
    {
      type: "smooth",
      thresholds: 100,
      bandwidth: k,
      colorcurve: 2,
      remove: 0,
      geojson: deaths,
      values: "Total Number of Dead and Missing"
    },
  ]
})

}




// BUFFER

const buffer_k = Inputs.range([0, 1000], {step: 1, value:0})
const bufferk = Generators.input(buffer_k);
let aussbuff = geo.buffer(aus2, {dist:bufferk})





function asyncbuff(dist){

//const result = await geo.buffer(aus2, {dist:dist})

let svg = viz.create({
    projection: "mercator",
   domain: aus, margin:50,
    width
  });
svg.path({data:aus2, fill:"#D75C48", stroke:"white", fillOpacity:0.4, strokeWidth:0.5})
//svg.path({data:result, fill:"none", stroke:"#D75C48", strokeWidth:2})
return svg.render()
}



async function buff(width, k){
let ausbuff = await geo.buffer(aus2, { dist: k })
 let svg = viz.create({
    projection: "mercator",
   domain: aus, margin:50,
    width
  });
svg.path({data:aus2, fill:"#D75C48", stroke:"white", fillOpacity:0.4, strokeWidth:0.5})
svg.path({data:ausbuff, fill:"none", stroke:"#D75C48", strokeWidth:2})
return svg.render()
}
```

```js



// function buff(){
// let svg = viz.create({projection:"mercator"})
// svg.path({data:aussbuff})
// return (svg.render())
// }
```

```js
//buff()
```



```js
  
//   let svg = viz.create({ projection: "mercator", domain:aussbuff, width:width/2 });
//   svg.path({ data: aus });
//   svg.path({ data: aussbuff, fill: "none", stroke: "red" });
//   display(svg.render());
```

  ```js
//   function disp(width){
//   let svg = viz.create({ projection: "mercator", domain:aussbuff, width });
//   svg.path({ data: aus });
//   svg.path({ data: aussbuff, fill: "none", stroke: "red" });
//   return svg.render();
//}
 ```

 ```js
//disp(400)
 ```


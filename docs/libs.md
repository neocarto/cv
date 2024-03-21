---
toc: false
---

<link rel="stylesheet" href="css/style.css">

```js
// IMPORTS
import * as geo from "npm:geotoolbox@2.0.3";
import {menu} from "./helpers/menu.js"
import {globe, tile, thematic} from "./components/geoviz.js"
import {simplify, buffer, intersect, buffermap} from "./components/geotoolbox.js"
import {dots, grid, smooth} from "./components/bertin.js"
```

```js
// DATA
const aus = await FileAttachment("./data/aussimpl.json").json();
const world = await FileAttachment("./data/world.json").json();
const china = await geo.properties.subset({
  x: world,
  field: "ISO3",
  selection: "CHN",
});
const india = await geo.properties.subset({
  x: world,
  field: "ISO3",
  selection: "IND",
});
```

```js
const china_buff = await geo.buffer(china, { dist: bufferk2 });
```

```js
const india_buff = await geo.buffer(india, { dist: bufferk2 });
```


```js
// Inputs
const simplify_k = Inputs.range([0.01, 0.2], {step: 0.01, value:0.01})
const simplifyk = Generators.input(simplify_k);
const dots_k = Inputs.checkbox(["pubs", "bars"], {
  value: ["pubs", "bars"]
})
const dotsk = Generators.input(dots_k);
const grid_k = Inputs.range([10, 40], {step: 1, value:15})
const gridk = Generators.input(grid_k);
const smooth_k = Inputs.range([3, 10], {step: 1, value:5})
const smoothk = Generators.input(smooth_k);
const buffer_k = Inputs.range([0, 1000], {step: 10, value:500})
const bufferk = Generators.input(buffer_k);
const buffer_k2 = Inputs.range([0, 1000], {step: 10, value:500})
const bufferk2 = Generators.input(buffer_k2);
```

<div class = "hero"><h1> <img src="images/nico.jpg" width="110px"></img> Nicolas Lambert</h1></div>

<div class="note">In this section, I share my main software development activities. You'll find lots more on my <a href="https://github.com/neocarto" target = "_BLANK">github</a> account.</div>

```js
menu("libs")
```

# Geoviz

**[`geoviz`](https://github.com/riatelab/geoviz)** is a JavaScript library for designing thematic maps. The library provides a set of d3 compatible functions that you can mix with the usual d3 syntax. The library is designed to be intuitive and concise. It allow to manage different geographic layers (points, lines, polygons) and marks (circles, labels, scale bar, title, north arrow, etc.) to design pretty maps. Its use is particularly well suited to Observable notebooks. Maps designed with geoviz are thematic, vectorial, interactive, interoperable and zoomable.

<div class="grid grid-cols-3" align = "center">

  <div class="card">
        <h2><b>Interactive globes</b></h2>
         ${resize((width) => globe(width))}
</div>
 <div class="card">
 
   <h2><b>Zoomable tiles</b></h2>
         ${resize((width) => tile(width))}

 </div>
  <div class="card"><h2><b>Thematic Maps</b></h2> ${resize((width) => thematic(width))}</div>
</div>

<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/geoviz" targt = "_BLANK">code repository</a>, some other <a href ="https://observablehq.com/@neocartocnrs/geoviz" target = "_BLANK">live examples</a> and the <a href = "https://riatelab.github.io/geoviz/" target = "_BLANK">documentation api</a>.</div>

# Geotoolbox

**[`geotoolbox`](https://github.com/riatelab/geotoolbox)** is GIS library for geographers based on d3-geo, topojson and geos-wasm. It allows to simply deal with geojson properties and provides several GIS operations useful for thematic cartography.


```js
const buffered = geo.buffer(aus, {dist: bufferk});
```

<div class="grid grid-cols-3" align = "center">

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
       ${resize((width) => buffermap(width, buffered))}

              

</div>

  <div class="card">
   <h2><b>Intersect</b></h2>
       ${buffer_k2}
       <br/>
     ${resize((width) => intersect(width,  china_buff, india_buff))}
 </div>

</div> 



<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/geotoolbox" targt = "_BLANK">code repository</a> and some other <a href ="https://observablehq.com/@neocartocnrs/hello-geotoolbox?collection=@neocartocnrs/geotoolbox" target = "_BLANK">live examples</a>.</div>

# Bertin

**[`bertin`](https://github.com/neocarto/bertin)** is an easy to use wrapper around [d3js](https://github.com/d3/d3) to facilitate the process of **making thematic maps**. The principle is to work with layers stacked on each other. As in a GIS, the layers that are displayed above are placed at the top in the code, the layers that are displayed below are placed at the bottom in the code. The layers that can be displayed are of [several types](https://observablehq.com/@neocartocnrs/bertin-js-layer-types-in-brief): header, footer, graticule, outline, choro, typo, prop, shadow, scalebar, text... Each type has its own parameters. This list will be completed gradually.

<div class="grid grid-cols-3" align = "center">
  <div class="card">
        <h2><b>Dots</b></h2>
        ${dots_k}
        <br/>
         ${resize((width) => dots(width, dotsk))}
</div>
 <div class="card">
   <h2><b>Grid</b></h2>
          ${grid_k}
        <br/>
       ${resize((width) => grid(width, gridk))}
 </div>
  <div class="card">
   <h2><b>Smooth</b></h2>
                   ${smooth_k}
        <br/>
       ${resize((width) => smooth(width, smoothk))}
 </div>
</div>


<div class="card" style = "background-color:white">
See the <a href = "https://github.com/riatelab/bertin" targt = "_BLANK">code repository</a> and some other <a href ="https://observablehq.com/collection/@neocartocnrs/bertin" target = "_BLANK">live examples</a>.</div>

# See also

<div class="grid grid-cols-4" style="vertical-align: middle; display: flex;">
  <a href ="https://observablehq.com/@neocartocnrs" target="_BLANK"><div class="card">
<img src ="images/qq4vXsM7-80x80.png" width="25px"></img>
  </div></a>
    <a href ="https://github.com/neocarto" target="_BLANK"><div class="card">
<img src ="images/github.png" width="25px"></img>
  </div></a>
</div>
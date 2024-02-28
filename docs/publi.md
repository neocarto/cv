---
theme: dashboard
title: Publications
toc: false
---

## Travaux

```js
import {require} from "npm:d3-require";
const Cite = await require("https://bundle.run/citation-js@0.5.1");


 const publi = new Cite(
  await d3.text(
    await FileAttachment("bib/publications.bib").url()
  )
)


 const com = new Cite(
  await d3.text(
    await FileAttachment("bib/communications.bib").url()
  )
)
```


<div class="grid grid-cols-2">
  <div class="card" id = "pub"><h1>Publications</h1>
</div>
  <div class="card" id = "com"><h1>Communications</h1>
</div>
</div>


```js
// Publications
let div = document.getElementById('pub');
div.innerHTML +=publi.format("bibliography", {
    format: "html",
    template: "vancouver",
    lang: "en-US"
  });


```


```js
// Communications
let div = document.getElementById('com');
div.innerHTML +=com.format("bibliography", {
    format: "html",
    template: "vancouver",
    lang: "en-US"
  });


```


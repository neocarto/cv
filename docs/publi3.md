---
title: Publications
toc: true
---


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

## Publications
<div id = "pub"></div>

<br/>

## Communications
<div id = "com"></div>



```js
// Publications
let div = document.getElementById('pub');
div.innerHTML +=publi.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "fr-FR",nosort:true
  });
// Communications
let div = document.getElementById('com');
div.innerHTML +=publi.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "fr-FR",nosort:true
  });
```


---
toc: false
---

<link rel="stylesheet" href="css/style.css">

```js
import {require} from "npm:d3-require";
const Cite = await require("https://bundle.run/citation-js@0.5.1");
 const publi = new Cite(
  await d3.text(
    await FileAttachment("bib/publications.bib").url()
  )
)
```



```js
import {menu} from "./helpers/menu.js"
```

<div class = "hero"><h1> <img src="images/nico.jpg" width="110px"></img> Nicolas Lambert</h1></div>


<div class="note">In this section, I list my scientific publications. This is a bibText file. You can therefore choose the display format.</div>


```js
menu("publi")
```

```js
const style = view(Inputs.radio(["vancouver", "apa", "harvard1"], { value: "apa"}));
```

<div id = "pub"></div>


```js
// Publications

let div = document.getElementById('pub');
div.innerHTML =publi.format("bibliography", {
    format: "html",
    template: style,
    lang: "fr-FR",
    nosort:true
  });

```

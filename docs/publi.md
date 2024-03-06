---
title: Publications
toc: true
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: var(--sans-serif);
  text-wrap: balance;
  text-align: left;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 10vw;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}




@media (min-width: 640px) {
  .hero h1 {
    font-size: 50px;


  }
}

</style>



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

```js
import {menu} from "./helpers/menu.js"
```

```js
menu("publi")
```


# Liste des travaux




## Publications

```js
const style = view(Inputs.radio(["vancouver", "apa", "harvard1"], { value: "apa"}));
```

<div id = "pub"></div>

<br/>

### <ins>Communications</ins>

```js
const style2 = view(Inputs.radio(["vancouver", "apa", "harvard1"], { value: "apa"}));
```

<div id = "com"></div>



```js
// Publications

let div = document.getElementById('pub');
div.innerHTML =publi.format("bibliography", {
    format: "html",
    template: style,
    lang: "fr-FR",
    nosort:true
  });
// Communications
let div2 = document.getElementById('com');
div2.innerHTML = publi.format("bibliography", {
    format: "html",
    template: style2,
    lang: "fr-FR",
    nosort:true
  });
```

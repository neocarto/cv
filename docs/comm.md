<link rel="stylesheet" href="css/style.css">

```js
import {require} from "npm:d3-require";
const Cite = await require("https://bundle.run/citation-js@0.5.1");

const com = new Cite(
  await d3.text(
    await FileAttachment("bib/communications.bib").url()
  )
)
```

```js
import {menu} from "./helpers/menu.js"
```

<div class = "hero"><h1> <img src="images/nico.jpg" width="110px"></img> Nicolas Lambert</h1></div>

```js
menu("comm")
```

```js
const style = view(Inputs.radio(["vancouver", "apa", "harvard1"], { value: "apa"}));
```

<div id = "com"></div>



```js
// Communications
let div = document.getElementById('com');
let bib = div.innerHTML = com.format("bibliography", {
    format: "html",
    template: style,
    lang: "fr-FR",
    nosort:true
  });

//   div.querySelectorAll("div a:first-child").forEach((link) => {
//     link.setAttribute("name", link.hash.substr(1));
//     link.removeAttribute("href");
//   });


```

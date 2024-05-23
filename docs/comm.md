---
toc: false
---

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
import {previews2} from "./helpers/preview.js"
```

<div class = "hero"><h1> <img src="images/nico.jpg" width="110px"></img> Nicolas Lambert</h1></div>

<div class="note">In this section, I list my scientific talks. This is a bibText file. You can therefore choose the display format.</div>

```js
menu("comm")
```

```js
previews2([
  {
    path: "https://www.youtube.com/watch?v=cg9Ei4mIR6E",
    thumbnail:
      "https://i.ytimg.com/vi/cg9Ei4mIR6E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5cDQDqxUHs2hMzHbuoqmYE4qJrg",
    title: "2023 - SAGEO"
  },
          {
    path: "https://www.youtube.com/watch?v=TGzH0PH6O20",
    thumbnail:
      "https://i.ytimg.com/vi/TGzH0PH6O20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDhvoOyFPadfs0OdhYlamFRQROEA",
    title: "2022 - Journée SIG Université Laval"
  },
    {
    path: "https://www.youtube.com/watch?v=Jh_2Q_xa3II",
    thumbnail:
      "https://cartomob.sciencesconf.org/data/pages/CartoMob_affiche_web_sc.jpg",
    title: "2021 - Cartomob"
  },
      {
    path: "https://www.youtube.com/watch?v=WZT5otPpS2Y",
    thumbnail:
      "https://i.ytimg.com/vi/WZT5otPpS2Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbVzDtFGcDCVPUtaOZ43je64DjdA",
    title: "2021 - Cartomob"
  },

          {
    path: "https://www.youtube.com/watch?v=2e9IGjIE-vI",
    thumbnail:
      "https://www.museumtv.art/wp-content/uploads/import/2017/08/magritte-video.jpg",
    title: "2020 - Magrit (ENS)"
  },
            {
    path: "https://www.youtube.com/watch?v=j-QeXDiK1Iw",
    thumbnail:
      "https://i.ytimg.com/vi/j-QeXDiK1Iw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC56ZrIooZiNqQcFbciKVDybD1rAA",
    title: "2019 - Mapping migrations (1/2)"
  },
              {
    path: "https://www.youtube.com/watch?v=t_RPztVTMWU",
    thumbnail:
      "https://i.ytimg.com/vi/t_RPztVTMWU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4kJin-Ql5L-iZ5T29A546tj5v6A",
    title: "2019 - Mapping migrations (2/2)"
  },
               {
    path: "https://www.youtube.com/watch?v=Xt-wKKRuA6o",
    thumbnail:
      "https://i.ytimg.com/vi/Xt-wKKRuA6o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPbfmiRLhAJgYuVRW4Gx5KoPfDlA",
    title: "2017 - Symposium Mobilities and Deaths (Montreal)"
  },

 
])
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

```js
import {buffer} from "./components/geotoolbox.js"
```

```js
buffer(500, 200)
```


<div class="grid grid-cols-3" align = "center">

  <div class="card">

${await buffer(width, 300)}

${await resize((width) => Promise.resolve(buffer(width, 300)).then(d => d))}

 </div>
</div>


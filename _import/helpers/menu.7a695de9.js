export function menu(page) {
  const on = "style = 'background-color:#D75C48; color: white'";
  const off = "style = 'background-color:white'";
  let content = `<div class="grid grid-cols-4" style="display: flex; align:left">`;

  if (page !== "home") {
    content += `<a href ="index"><div class="card" ${off}>Home</div></a>`;
  }
  content += `<a href ="books"><div class="card" ${
    page == "books" ? on : off
  }>Books</div></a>
  <a href ="publi"><div class="card" ${
    page == "publi" ? on : off
  }>Papers</div></a>
  <a href ="comm"><div class="card" ${page == "comm" ? on : off}>Talks</div></a>
  <a href ="teach"><div class="card" ${
    page == "teach" ? on : off
  }>Teaching</div></a>
  <a href ="libs"><div class="card" ${
    page == "libs" ? on : off
  }>JS libraries</div></a>
  </div>`;

  let div = document.createElement("div");
  div.id = "menu";
  div.innerHTML = content;
  return document.body.appendChild(div);
}

{
  /* <a href ="gallery"><div class="card" ${
  page == "gallery" ? on : off
}>Gallery</div></a>

<a href ="video"><div class="card" ${
  page == "video" ? on : off
}>Videos</div></a>
<a href ="other"><div class="card" ${
  page == "other" ? on : off
}>Other/projects</div></a> */
}

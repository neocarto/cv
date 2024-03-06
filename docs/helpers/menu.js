export function menu(page) {
  const on = "style = 'background-color:#D75C48; color: white'";
  const off = "style = 'background-color:white'";
  let content = `<div class="grid grid-cols-4" style="display: flex; align:left>`;

  if (page !== "home") {
    content += `<div class="card" ${off}>Accueil</div>`;
  }
  content += `<a href ="books"><div class="card" ${
    page == "books" ? on : off
  }>Livres et Atlas</div></a>
  <a href ="publi"><div class="card" ${
    page == "publi" ? on : off
  }>Liste des publications</div></a>
  <a href ="comm"><div class="card" ${
    page == "comm" ? on : off
  }>Liste des communications</div></a>
  <a href ="libs"><div class="card" ${
    page == "libs" ? on : off
  }>Développement logiciel</div></a>
  <a href ="gallery"><div class="card" ${
    page == "gallery" ? on : off
  }>Gallerie</div></a>
  <a href ="teach"><div class="card" ${
    page == "teach" ? on : off
  }>Enseignement</div></a>
  <a href ="divers"><div class="card" ${
    page == "divers" ? on : off
  }>Divers</div></a>
</div>`;

  let div = document.createElement("div");
  div.id = "menu";
  div.innerHTML = content;
  return document.body.appendChild(div);
}

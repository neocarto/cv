import * as htl from "npm:htl";

export function previews(notebooks) {
  return htl.html`<div style="display: grid; grid-gap: .875rem; grid-template-columns: repeat(auto-fill, minmax(160px, 5fr));">${notebooks.map(
    preview
  )}</div>`;
}

function preview({ path, title, author = "Nicolas Lambert", thumbnail }) {
  return htl.html`<a href="https://observablehq.com/${encodeURI(
    path
  )}" target="_blank" title="${title} by ${author}" style="display: inline-flex; flex-direction: column; align-items: start; font: 400 .75rem var(--sans-serif); color: #1b1e23; width: 100%;" onmouseover=${(
    event
  ) =>
    (event.currentTarget.firstElementChild.style.borderColor =
      "#1b1e23")} onmouseout=${(event) =>
    (event.currentTarget.firstElementChild.style.borderColor = "#e8e8e8")}>
    <div style="border: solid 1px #e8e8e8; border-radius: 4px; box-sizing: border-box; width: 100%; padding-top: 62.5%; background-size: cover; background-image: url(https://static.observableusercontent.com/thumbnail/${encodeURI(
      thumbnail
    )}.jpg);"></div>
    <div style="width: 100%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${title}</div>
  </a>`;
}

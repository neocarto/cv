import { require } from "npm:d3-require";
import { text } from "npm:d3-request";
import { FileAttachment } from "npm:stdlib";

const Cite = await require("https://bundle.run/citation-js@0.5.1");
const publi = new Cite(
  await text(await FileAttachment("bib/publications.bib").url())
);

export function biblio(target) {
  let div = document.getElementById(target);
  div.innerHTML += publi.format("bibliography", {
    format: "html",
    template: "vancouver",
    lang: "en-US",
  });
}

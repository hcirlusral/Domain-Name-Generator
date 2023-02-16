/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "our", "her"];
  let adj = ["aggressive", "proud", "colossal", "silly"];
  let noun = ["pizza", "insect", "telephone", "ghost"];
  let domain = [".com", ".net", ".org"];

  for (let x of pronoun) {
    for (let y of adj) {
      for (let z of noun) {
        for (let a of domain) {
          domainName.push(x + y + z + a);
        }
      }
    }
  }
  const element = document.querySelector("#domains");
  element.innerText = domainName.join(", ");
};

//Week 3
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if(callback) {
    callback(data);
  }
}
export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

import { loadTemplate, renderWithTemplate } from "../templateUtils.mjs";
export async function loadHeaderFooter() {
    // Load the header and footer templates
    const headerTemplate = await loadTemplate("../partials/header.html");
    const footerTemplate = await loadTemplate("../partials/footer.html");

    // Grab the header and footer placeholder elements from the DOM
    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    // Render the header and footer using renderWithTemplate
    if (headerElement) {
        renderWithTemplate(headerTemplate, headerElement);
    }
    if (footerElement) {
        renderWithTemplate(footerTemplate, footerElement);
    }
}

//Week 3

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

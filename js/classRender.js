class Render {
  refs = {
    body: document.body,
    servicePannel: document.createElement("section"),
  };

  createElement(tagName, options) {
    const element = document.createElement(tagName);
    // element.setAttribute("type","button");
    for (const option in options) {
      element[option] = options[option];
    }
    // element.type = 'button';(и так и так)
    return element;
  }
  renderElWithMarkup(parentNode, markup, position = "beforeend") {
    parentNode.insertAdjacentHTML(position, markup);
  }
  renderElWithNode(parentNode, childNode, position = "beforeend") {
    parentNode.insertAdjacentElement(position, childNode);
  }
}

const render = new Render();
export default render;

const options = {
  type: "button",
  textContent: "click me",
  name: "click-button",
};

console.log(render.createElement("button", options));
render.renderElWithNode(
  render.refs.body,
  render.refs.servicePannel,
  "afterbegin"
);


import { menu } from "./workEntities.js";
import render from "./classRender.js";

const createMenuFormTmp = (menu) => `
<form id="menu-form">
<ul>
    ${menu.reduce((acc, el) => {
      return (
        acc +
        `<li id="${el.id}">
<span>${el.name}</span>
<span>${el.price}</span>
<input type="text" value = "0">
<button data-action="remove" type="button"> - </button>
<button data-action="add" type="button"> + </button>
<button data-action="reset" type="button"> reset </button> 
</li>`
      );
    }, "")}
</ul>
<button type="submit"> Submit </button>
</form>
`;

const addDishQuantity = (value) => {
  value++;
  return value;
};

const removeDishQuantity = (value) => {
  if (value === 0) return value;
  value--;
  return value;
};

const hendlerChangeDishQuantity = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  const parentItem = e.target.closest("li");
  const input = parentItem.querySelector("input");
  const value = Number(input.value);

  switch (e.target.dataset.action) {
    case "add":
      input.value = addDishQuantity(value);
      break;
    case "remove":
      input.value = removeDishQuantity(value);
      break;
    case "reset":
      input.value = removeDishQuantity(0);
      break;
    default:
      break;
  }
};

export default function () {
  const menuFormTmp = createMenuFormTmp(menu);
  render.renderElWithMarkup(render.refs.servicePannel, menuFormTmp);
  render.refs.menuForm = document.getElementById("menu-form");
  render.refs.menuForm.addEventListener("click", hendlerChangeDishQuantity);
}

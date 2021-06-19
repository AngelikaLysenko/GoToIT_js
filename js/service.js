import render from "./classRender.js";
import openMenuForm from "./menuForm.js";
const btnOpenMenu = render.createElement ("button", {
    type: "button",
    textContent: "Open Menu",
    id: "open-menu-btn",
}) 

export default function (){
    render.renderElWithNode(
        render.refs.servicePanel, 
        openMenuBtn,
        'afterbegin'
        );

    render.renderElWithNode(
        render.refs.body, 
        render.refs.servicePanel, 
        'afterbegin'
        );
}
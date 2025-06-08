

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.chidren;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement= {
    type: "a",
    props: {
        href: "https://letmegooglethat.com/",
        target: "_blank"
    },
    chidren: "let me google that for you"
}
const mainContainer=document.querySelector("#root");

customRender(reactElement,mainContainer);
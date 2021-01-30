import "./index.css";

import img from "./img/xin.png";

console.log(img);

const domImg = document.createElement("img");
domImg.setAttribute("src", img);
document.body.appendChild(domImg);
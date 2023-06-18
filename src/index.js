import { Header } from "./components/Header/index.js";
import { Banner } from "./components/Banner/index.js";
import { Menu } from "./components/Menu/index.js";
import { Gallery } from "./components/Gallery/index.js";
import { Contact } from "./components/Contact/index.js";
import { Footer } from "./components/Footer/index.js";

import './style.css';

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);

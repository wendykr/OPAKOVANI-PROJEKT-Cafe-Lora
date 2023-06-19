import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { Banner } from "./components/Banner/index";
import { Menu } from "./components/Menu/index";
import { Gallery } from "./components/Gallery/index";
import { Contact } from "./components/Contact/index";
import './style.css';

export const HomePage = () => {

    const pageElement = document.createElement('div');
    pageElement.classList.add('page');

    const main = document.createElement('main');
    main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

    pageElement.append(Header({ showMenu: true }), main, Footer());

    return pageElement;
}
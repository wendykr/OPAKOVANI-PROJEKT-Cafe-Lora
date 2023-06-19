import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { Order } from "./components/Order";

export const OrderPage = () => {

    const element = document.createElement('main');
    element.classList.add('order');

    element.append(Header( {showMenu: false} ), Order( {items: 'loading'} ), Footer());

    return element;
}
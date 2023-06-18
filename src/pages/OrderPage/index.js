import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { Order } from "./components/Order";

export const OrderPage = () => {

    const element = document.createElement('main');
    element.classList.add('order');

    element.append(Header( {showMenu: false} ));

    element.append(Order( {items: 'loading'}));

    // element.insertAdjacentHTML(
    // "beforeend",
    //     `<div class="order__content container">
    //         <h1>Vaše objednávka</h1>
    //         <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    //         <div class="order__items">
    //             <div class="order-item">
    //                 <img src="https://cafelora.kodim.app/assets/cups/vienna-coffee.png" class="order-item__image">
    //                 <div class="order-item__name">
    //                     Vídeňská káva
    //                 </div>
    //             </div>
    //             <div class="order-item">
    //                 <img src="https://cafelora.kodim.app/assets/cups/chocolate-milk.png" class="order-item__image">
    //                 <div class="order-item__name">
    //                     Čokoláda s mlékem
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `);

    element.append(Footer());

    return element;
}
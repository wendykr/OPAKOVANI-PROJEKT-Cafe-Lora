import { HomePage } from "./pages/HomePage/index";
import { OrderPage } from "./pages/OrderPage/index";

import './style.css';

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
if (pathname === '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}
import { HomePage } from "./pages/HomePage/index";
import { OrderPage } from "./pages/OrderPage/index";

import './style.css';

const { pathname } = window.location;

if (pathname === BASE_PATH + '/' || pathname === BASE_PATH + '/home') {
  document.querySelector('#app').append(HomePage());
}
if (pathname === BASE_PATH + '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}
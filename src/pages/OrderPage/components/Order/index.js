import { OrderItem } from "../OrderItem";
import './style.css';

export const Order = (props) => {
    const { items } = props;

    const element = document.createElement('div');
    element.classList.add('order__content');
    element.classList.add('container');

    element.innerHTML = `
            <h1>Vaše objednávka</h1>
            <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
            <div class="order__items"></div>
    `;

    if (items === 'loading') {
        fetch(`https://cafelora.kodim.app/api/me/drinks`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => response.json())
            .then((data) => {
                const result = data.result.filter(oneOrder => oneOrder.ordered === true);
                // element.replaceWith(Order({items: result}))
                if (result.length === 0) {
                    element.querySelector('.empty-order').classList.remove('empty-order--hide');
                } else {
                    element.querySelector('.order__items').append(
                        ...result.map((item) => OrderItem(item))
                    );
                }
                
            });
    // } else if (items.length === 0) {
    //     element.querySelector('.empty-order').classList.remove('empty-order--hide');
    // } else {
    //     element.querySelector('.order__items').append(
    //         ...items.map((item) => OrderItem(item))
    //     );
    }

    return element;
}
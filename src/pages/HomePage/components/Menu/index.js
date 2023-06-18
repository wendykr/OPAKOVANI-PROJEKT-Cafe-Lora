import { Drink } from '../Menu/components/Drink/index';
import './style.css';

export const Menu = (props) => {
    const { drinks } = props;

    const element = document.createElement('section');
    element.classList.add('menu');
    element.setAttribute("id", "menu");

    element.innerHTML = `
            <div class="container">
                <h2>Naše nabídka</h2>
                <p class="menu-intro">
                Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div class="drinks-list">${(drinks === 'loading') ? 'Načítám...' : ''}
            </div>
        </div>
    `;

    element.insertAdjacentHTML('beforeend',
        `<div class="order-detail">
            <a href="/objednavka">Detail objednávky</a>
        </div>
    `);

    if (drinks === 'loading') {
        fetch(`https://cafelora.kodim.app/api/me/drinks`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data.result);
                element.replaceWith(
                    Menu({
                        drinks: data.result,
                    })
                );
            });
    } else {
        element.querySelector('.drinks-list').append(
            ...drinks.map((drink) => Drink(drink))
        );

        // element.querySelector('.drinks-list').append(Drink(
        //     {
        //         id: 'romano',
        //         name: 'Romano',
        //         ordered: false,
        //         image: 'https://cafelora.kodim.app/assets/cups/romano.png',
        //         layers: [
        //         {
        //             color: '#fbdf5b',
        //             label: 'citrón',
        //         },
        //         {
        //             color: '#613916',
        //             label: 'espresso',
        //         },
        //         ]
        //     }
        // ));

    }

    return element;
}
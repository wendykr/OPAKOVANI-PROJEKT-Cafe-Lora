import { Layer } from '../Layer/index';

import './style.css';

export const Drink = (props) => {
    const { id, name, ordered, image, layers } = props;
    const element = document.createElement('div');
    element.classList.add('drink');

    element.innerHTML = `
        <div class="drink__product">
            <div class="drink__cup">
                <img src="${image}">
            </div>
            <div class="drink__info">
                <h3>${name}</h3>
            </div>
        </div>
        <div class="drink__controls">
            <button class="order-btn${(ordered) ? ' order-btn--ordered' : ''}">
            ${(ordered) ? 'Zrušit' : 'Objednat'}
            </button>
        </div>
    `;

    // element.querySelector('.drink__info').append(Layer(
    //     {
    //         color: '#feeeca',
    //         label: 'mléčná pěna',
    //     }
    // ));

    const listLayers = element.querySelector('.drink__info');
    listLayers.append(...layers.map((item) => Layer(item)));

    element.querySelector('.order-btn').addEventListener('click', (event) => {
        console.log('click');
        event.preventDefault();
    
        fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            ordered: !ordered,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data.result);
            element.replaceWith(
              Drink(
                {
                  id: data.result.id,
                  name: data.result.name,
                  ordered: data.result.ordered,
                  image: data.result.image,
                  layers: data.result.layers,
                  // ...data.result,
                }
              )
            );
          });
    })

    return element;
}
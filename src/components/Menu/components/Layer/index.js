import './style.css';

export const Layer = (props) => {
    const { color, label } = props;
    const element = document.createElement('div');
    element.classList.add('layer');

    element.innerHTML = `
        <div class="layer__color" style="background-color: #${color}"></div>
        <div class="layer__label">${label}</div>
    `;

    return element;
}
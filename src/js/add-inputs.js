import { nanoid } from 'nanoid';

const inputsList = document.getElementById("inputslist");
const addDoorsInputButton = document.getElementById("addinputbutton");

addDoorsInputButton.addEventListener('click', addInput);


function addInput() {
    const formStringArray = [];
    const randomId = nanoid();
    const markupString = `
    <li class="inputs__item" key=${randomId}>
    <select class="door__select">
        <option value="door">Door</option>
        <option value="window">Window</option>
    </select>
    <input type="number" class="door__input">
    <input type="number" class="door__input">
    <button type="button" id="deleteinputbutton" class="delete__button">
        <svg class="button__icon">
            <use href='./images/sprite.svg#delete'/>
        </svg>
    </button>
</li>`;
    inputsList.insertAdjacentHTML('beforeend', markupString);

}


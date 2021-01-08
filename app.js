// import functions and grab DOM elements
import { addButtonClick, DivButtonClick, MulButtonClick, SubButtonClick } from './handlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

addButton.addEventListener ('click', addButtonClick); 

subtractButton.addEventListener ('click', SubButtonClick);

multiplyButton.addEventListener ('click', MulButtonClick);
   
divideButton.addEventListener ('click', DivButtonClick);
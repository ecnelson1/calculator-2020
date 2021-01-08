import {getSum,divide,multiply,difference } from './utils.js';


const addInput1 = document.getElementById("add-input")
const addInput2 = document.getElementById("add-input2")
const addResults = document.getElementById ("add-results")

export function addButtonClick(){
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const sum = getSum(addValue1,addValue2);
    addResults.textContent = "You added for " + sum;
}
export function SubButtonClick(){
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const subVal = addValue1 - addValue2;
    addResults.textContent = "You subtracted for " + subVal;
} 
export function MulButtonClick(){
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const mulVal = addValue1 * addValue2;
    addResults.textContent = "You multiplied for " + mulVal;
} 
export function DivButtonClick(){
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const divVal = addValue1 / addValue2;
    addResults.textContent = "You divided for " + Math.round ((divVal + Number.EPSILON) * 100) /100;  
} 
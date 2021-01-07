// import functions and grab DOM elements
const addInput1 = document.getElementById("add-input")
const addInput2 = document.getElementById("add-input2")
const addButton = document.getElementById("add-button")
const subtractButton = document.getElementById("subtract-button")
const multiplyButton = document.getElementById("multiply-button")
const divideButton = document.getElementById("divide-button")
const addResults = document.getElementById ("add-results")

// initialize state
// set event listeners to update state and DOM

// add a button that when the user pushes it changes the style and text of welcome

addButton.addEventListener ('click',() => {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const sum = addValue1 + addValue2;
    addResults.textContent = sum;
    console.log(sum)
} )
subtractButton.addEventListener ('click',() => {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const subVal = addValue1 - addValue2;
    addResults.textContent = subVal;
    console.log(subVal)
} )
multiplyButton.addEventListener ('click',() => {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const mulVal = addValue1 * addValue2;
    addResults.textContent = mulVal;
    console.log(mulVal)
} )
divideButton.addEventListener ('click',() => {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const divVal = addValue1 / addValue2;
    addResults.textContent = divVal;
    console.log(divVal)
} )


// import functions and grab DOM elements
const welcomeElement = document.getElementById("welcome")
const myButton = document.getElementById("change-button")
const input = document.getElementById ("user-input")
// initialize state

// set event listeners to update state and DOM

// add a button that when the user pushes it changes the style and text of welcome

myButton.addEventListener('click', () => {
    welcomeElement.style.color = "green"
    welcomeElement.textContent = input.value
})

// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const doit = document.getElementById('doit');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = doit.value;
    const id = new Date().getTime().toString();
    
    if (value && !editFlag) {
        console.log("add item to the list");
    } else if (value && editFlag) {
        console.log("editing");
    } else {
        alert.textContent = "empty value";
        alert.classList.add("alert-danger");
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

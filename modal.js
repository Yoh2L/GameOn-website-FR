function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgthks = document.querySelector(".bgthks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
// Subscription confirm Modal
const closeModalThks = document.querySelector(".close-thks");
const fermerModalThks = document.querySelector(".fermer-modal");
// Input Elements
const inputsTxt = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="number"]');
const city = document.querySelectorAll("input[type=radio]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

closeModalThks.addEventListener("click", () => {
  modalbgthks.style.display = "none";
});

fermerModalThks.addEventListener("click", () => {
  modalbgthks.style.display = "none";
});


// Name / email / date / quantity checker

let first, last, email, date, quantity, checkboxes, cgv;

inputsTxt.forEach((input) =>{
  input.addEventListener("input", (e) => {
    switch (e.target.id){
      case "first" :
        fnameChecker(e.target.value)
        break;
      case "last" :
        lnameChecker(e.target.value)
        break;
      case "email" :
        emailChecker(e.target.value)
        break;
      case "birthdate" :
        dateChecker(e.target.value)
        break;
      case "quantity" :
        quantityChecker(e.target.value)
        break;
      default:
        nul;
    }
  })
})

// Error function

const errorDisplay = (tag, message, valid) =>{
  const span = document.querySelector("." + tag + "-container > span");
  const div= document.querySelector("." + tag + "-container > input");

  if(!valid) {
    div.classList.add("error");
    div.classList.remove("no-error");
    span.textContent = message;
  } else {
    div.classList.add("no-error");
    div.classList.remove("error");
    span.textContent = message;
  }
}

// First name checker

const fnameChecker = (value) => {
  if (value.length < 2 || value.length > 20){
    errorDisplay("first", "Le prénom doit être compris entre 2 et 20 caractères.")
    first = null;
  }
  else if (!value.match(/^[a-zA-Z\u00C0-\u017F]*$/)){
    errorDisplay("first", "Le prénom ne doit pas contenir de caractères spéciaux.")
    first = null;
  }
  else {
    errorDisplay("first", "", true);
    first = value;
  }

};

// Last name checker

const lnameChecker = (value) => {
  if (value.length < 2 || value.length > 20){
    errorDisplay("last", "Le nom doit être compris entre 2 et 20 caractères.")
    last = null;
  }
  else if (!value.match(/^[a-zA-Z\u00C0-\u017F]*$/)){
    errorDisplay("last", "Le nom ne doit pas contenir de caractères spéciaux.")
    last = null;
  }
  else {
    errorDisplay("last", "", true);
    last = value;
  }
};

// Email Checker

const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errorDisplay('email', "Le mail n'est pas valide.");
    email = null;
  }
  else {
    errorDisplay("email", "", true);
    email = value;
  }
};

//Date Checker

const dateChecker = (value) => {
  if (!value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
    errorDisplay("birthdate", "La date de naissance n'est pas valide.")
    date = null;
  }
  else {
    errorDisplay("birthdate", "", true);
    date = value;
  }

};

// Quantity checker

const quantityChecker = (value) => {
  if (!value.match(/^\d+$/)) {
    errorDisplay('quantity', "Le nombre de concours n'est pas valide.")
    quantity = null;
  }
  else {
    errorDisplay('quantity', "", true);
    quantity = value;
  }

};

// Radio checker

let radios = document.querySelectorAll('[name="location"]');

function radioChecker () {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checkboxes = radios[i].value;
    }
  }
}

// CGV checker

function cgvChecker () {
  if (document.getElementById('checkbox1').checked) {
    cgv = "Coché";
  }
  else {
    cgv = null;
  }
}

// Submit
var frm = document.getElementById('reserve');
let form = document.querySelector('.btn-submit');
let checkNbr = 0;

form.addEventListener('click', event => {
  event.preventDefault();
  radioChecker();
  cgvChecker();
  if (checkboxes) {
    checkNbr++;
    errorDisplay("city", "",true);
  } else {
    errorDisplay("city", "Veuillez cocher une case.");
    checkNbr = 0;
  }
  if (cgv) {
    checkNbr++;
    errorDisplay("cgv", "",true);
  } else {
    errorDisplay("cgv", "Veuillez accepter les CGV.");
    checkNbr = 0;
  }
  if (first) {
    checkNbr++;
  } else {
    errorDisplay("first", "Veuillez renseigner votre prénom");
    checkNbr = 0;
  }
  if (last) {
    checkNbr++;
  } else {
    errorDisplay("last", "Veuillez renseigner votre nom.");
    checkNbr = 0;
  }
  if (email) {
    checkNbr++;
  } else {
    errorDisplay("email", "Veuillez renseigner votre email.");
    checkNbr = 0;
  }
  if (date) {
    checkNbr++;
  } else {
    errorDisplay("birthdate", "Veuillez renseigner votre date de naissance.");
    checkNbr = 0;
  }
  if (quantity) {
    checkNbr++;
  } else {
    errorDisplay("quantity", "Veuillez indiquer le nombre de tournois.");
    checkNbr = 0;
  }
  if (checkNbr == 7) {
    checkNbr = 0;
    modalbg.style.display = "none";
    frm.reset();
    modalbgthks.style.display = "block";
  } else {
    checkNbr = 0;
  }
});







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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
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

// name / email / date / quantity checker

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




// radio and checkbox checker

var radios = document.querySelectorAll('[name="location"]');

function radioChecker () {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checkboxes = radios[i].value;
    }
  }
}

function cgvChecker () {
  if (document.getElementById('checkbox1').checked) {
    cgv = "Coché";
    console.log(cgv);
  }
}




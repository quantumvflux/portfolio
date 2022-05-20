"use strict";

// nav bar logic
const openBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const navContainer = document.querySelector(".nav-container");

const navLink = document.querySelector("#nav-item");
const navLink1 = document.querySelector("#nav-item-1");
const navLink3 = document.querySelector("#nav-item-3");
const navLink4 = document.querySelector("#nav-item-4");

openBtn.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);
closeBtn.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);

navLink.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);
navLink1.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);

navLink3.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);

navLink4.addEventListener("click", () =>
  navContainer.classList.toggle("active")
);

// List of sentences
var _CONTENT = ["Front end web developer", "Economist", "Musician"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// CONTACT FORM

const form = document.getElementById("form");

const sendEmail = (e) => {
  e.preventDefault();
  const contactName = document.querySelector("#name");
  const email = document.querySelector("#email");
  const msg = document.querySelector("#msg");
  Email.send({
    SecureToken: "dcfdf88a-6a82-4191-9aa2-5742b6f5ef2e",
    To: "marcosabaravalle@gmail.com",
    From: email.value,
    Subject: `Nuevo mensaje de ${contactName.value}, desde portfolio`,
    Body: msg.value,
  }).then((message) => alert("Thank you!"));
};

form.addEventListener("submit", sendEmail);

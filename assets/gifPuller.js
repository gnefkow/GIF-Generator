// HTML:
  // div to drop the gifs
  // div to drop the buttons

// switch the protocol to https (may be fine on my browser with https anywhere?)

// JS
  // TODO: get the key from Giphy
  // TODO: plug in jQuery

// Create variables for categories  (use an array of strings)
// AJAX Call
// create the URL with the ${search term} that loads 10 items
// click event - look back to class activity with the "states"



// DOM Elements
var pageTitleEl = document.getElementById("pageTitle");
var categoryButtonsEl = document.getElementById("categoryButtons");
var gifSpotEl = document.getElementById("gifSpot");
var placeholderBoxEl = document.getElementById("placeholderBox");

// GLOBAL VARzzzz
var buttonId;


// Array of initial options:
var initialOptions = ["Incredibles", "Toy Story", "Cars", "Coco"]

// Create Buttons for the Array

// ===== ===== ===== ===== FUNCTIONS ===== ===== ===== ===== //

function createInitialButtons() {
  for (var i = 0; i < initialOptions.length; i++) {
  var newButton = document.createElement("button");
  newButton.setAttribute("data-query", initialOptions[i]);
  newButton.textContent = initialOptions[i];
  newButton.setAttribute("id", initialOptions[i])
  newButton.classList.add("queryButton");
  categoryButtonsEl.appendChild(newButton);
  console.log(newButton);
  }
    onClick();

};



function onClick() {
  console.log("on click:")
  var clickedButton = document.getElementsByClassName("queryButton");
  
  for (var i = 0; i < clickedButton.length; i++) {
    clickedButton[i].addEventListener('click', function(i) {
      buttonId = i.originalTarget.id;
      console.log(`clicked ${buttonId}`);
      return buttonId;
    });
  } 
};
  





// AJAX Call
// create the URL with the ${search term} that loads 10 items
// click event - look back to class activity with the "states"

createInitialButtons();

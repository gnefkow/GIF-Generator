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
var initialOptions = ["Incredibles", "Toy Story", "Cars", "Coco", "A Bug's Life", "Monsters, Inc,", "Finding Nemo", "Ratatouille", "WALL-E", "Up", "Inside Out"]





// API Vars:








function getGIFs() {
  var gifLength = 5;
  var apiKey = "D2pGnNn2qgx3MeX8XOdetCWrKQtU0bD9";
  var pixar = "pixar "
  var queryURL = `http://api.giphy.com/v1/gifs/search?q=${pixar}${buttonId}&api_key=${apiKey}&limit=${gifLength}`

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {
for (var i = 0; i < gifLength; i++){
    console.log(response);
      console.log(`buttonId is ${buttonId}`);
      console.log(`queryURL is ${queryURL}`);
      
  
  placeholderBoxEl.style.display = "none";

  var getGIF = response.data[i].images.downsized.url;
  var newImage = document.createElement("img");
  var newDiv = document.createElement("div");
  newImage.setAttribute("src", getGIF);
  newDiv.setAttribute("id",buttonId + i)
  newDiv.classList.add("gifDiv");
  newDiv.appendChild(newImage);
  gifSpotEl.prepend(newDiv);

}
  });
};






// ===== ===== ===== ===== FUNCTIONS ===== ===== ===== ===== //

// Create Buttons for the "initial Options" Array
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


// ON CLICK: Sets the buttonId variable
function onClick() {
  console.log("on click:")
  var clickedButton = document.getElementsByClassName("queryButton");
  // Pulls the ID:
  for (var i = 0; i < clickedButton.length; i++) {
      clickedButton[i].addEventListener('click', function(i) {
      buttonId = i.originalTarget.id;
      console.log(`clicked ${buttonId}`);
      getGIFs();
    });
  } 
};
  





// AJAX Call
// create the URL with the ${search term} that loads 10 items
// click event - look back to class activity with the "states"

createInitialButtons();

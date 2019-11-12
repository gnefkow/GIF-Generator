

// DOM Elements
var pageTitleEl = document.getElementById("pageTitle");
var categoryButtonsEl = document.getElementById("categoryButtons");
var gifSpotEl = document.getElementById("gifSpot");
var placeholderBoxEl = document.getElementById("placeholderBox");

// GLOBAL VARzzzz
var buttonId;


// Array of initial options:
var initialOptions = ["Incredibles", "Toy Story", "Cars", "Coco", "A Bug's Life", "Monsters, Inc,", "Finding Nemo", "Ratatouille", "WALL-E", "Up", "Inside Out"]





// ===== ===== ===== ===== GET AND DISPLAY GIFS ===== ===== ===== ===== //
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

      // Hide the Placeholder Box:
      placeholderBoxEl.style.display = "none";

      // Craft img URL:
        //Get the URL:
        var gifURL = response.data[i].images.downsized.url;
        // Make it still by default:
        gifURL = gifURL.replace(".gif","_s.gif");
      
      // Display GIFs:
        var newImage = document.createElement("img");
        var newDiv = document.createElement("div");
        newImage.setAttribute("src", gifURL);
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
  }
    getClick();
};


// ON CLICK: Sets the buttonId variable
function getClick() {
  var clickedButton = document.getElementsByClassName("queryButton");
  // Pulls the ID:
  for (var i = 0; i < clickedButton.length; i++) {
      clickedButton[i].addEventListener('click', function(i) {
      buttonId = i.originalTarget.id;
      getGIFs();
    });
  } 
};
  


// ===== ===== ===== ===== RUN!! ===== ===== ===== ===== //
createInitialButtons();

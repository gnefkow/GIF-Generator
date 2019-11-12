

// DOM Elements
var pageTitleEl = document.getElementById("pageTitle");
var categoryButtonsEl = document.getElementById("categoryButtons");
var gifSpotEl = document.getElementById("gifSpot");
var placeholderBoxEl = document.getElementById("placeholderBox");

// GLOBAL VARzzzz
var buttonId;


// Array of initial options:
var initialOptions = ["Incredibles", "Toy Story", "Cars", "Coco", "A Bug's Life", "Monsters, Inc,", "Finding Nemo", "Ratatouille", "WALL-E", "Up", "Inside Out"]


// ===== ===== ===== ===== QUERY BUTTON FUNCTIONS ===== ===== ===== ===== //

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
      buttonId = i.target.id;
      getGIFs();
    });
  } 
};





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

      // Hide the Placeholder Box::
      placeholderBoxEl.style.display = "none";

      // Craft defaults img URL:
        //Get the URL:
        var initialGifURL = response.data[i].images.downsized.url;

      
      // Display GIFs as IMGs:
        var newImage = document.createElement("img");

      // Set default to still:
        gifURL = initialGifURL.replace(".gif", "_s.gif");
        newImage.setAttribute("src", gifURL);
      
      // Create Attributes for Still and Animate:
        var defaultState = "still";  
        newImage.setAttribute("data-still", gifURL);
        newImage.setAttribute("data-animate", initialGifURL);
        newImage.setAttribute("data-state", defaultState);

      // Give ID:
        newImage.setAttribute("id", `img-${buttonId}-${i}`);
      // Give Class:
        newImage.classList.add("gifImg");

      // Add GIFs to the page:
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id",buttonId + i)
        newDiv.classList.add("gifDiv");
        newDiv.appendChild(newImage);
        gifSpotEl.prepend(newDiv);
      }

      // Make GIFs Clickable:
        animateClick();
  });
};

// ===== ===== ===== ===== ANIMATE + PAUSE GIFS ===== ===== ===== ===== //
function animateClick() {
  
  var clickedGIF = document.getElementsByClassName("gifImg");
  // Pulls the ID:
  for (var i = 0; i < clickedGIF.length; i++) {
    // Event Listener:
      clickedGIF[i].addEventListener('click', function(i){
          gifId = i.target.id;
          gifState = i.target.dataset.state;

      // Set to animate or be still:
          if (gifState === "still") {
            this.setAttribute("data-state", "animated");
            this.setAttribute("src", this.dataset.animate);
          } else {
            this.setAttribute("data-state", "still");
            this.setAttribute("src", this.dataset.still);
          };

      // Remove Event Listener:
      clickedGIF[i].removeEventListener('click'); // I dont' know if this is actually working.
      });
  };   
};







  


// ===== ===== ===== ===== RUN!! ===== ===== ===== ===== //
createInitialButtons();

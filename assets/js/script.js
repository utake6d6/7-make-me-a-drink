"use strict";



var liquor = ''
var yelpSearch = ''
var recipe = [];
var glass = document.createElement('img');
var glassEl = document.querySelector('#glass')

// THis is search by liquor give other drinks
function getdrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + liquor)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      console.log(json);

    })
}
/* will need a for loop for the array of drink options
for (let i = 0; i < drinkArr.lenght; i++){
   var drinkEl = document.createElement('li');
  drinkEl.setAttribute('class', "?");
  drinkEl.setAttribute('Onclick', 'getRecipe(this)');
  drinkEl.setAttribute('value', drinkArr[i]);
  drinkEl.innerText = drinkArr[i];
 drinks.appendChild(drinkEl);
}

Will also need localStocage to paste to past searches
*/
//this is the search for recipe by name of drink
function getRecpie() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      recipe = json
      showRecipe()
      console.log(json);

    })
}

// THis is the recipe!!
function showRecipe() {
  // this is the pic of the glass
  glass.src = "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg";
  glassEl.appendChild(glass);
  for (let i = 0; i < recipe.length; i++) {

    var repiceEl = document.createElement('p');
    // will have to add ;onClick or separate search box?
    repiceEl.innerHTML = recipe[i];
    recipeUl.appendChild(repiceEl);

  }



}
// need to work on the second fetch to see what we get?
function getStore() {
  fetch('https://api.yelp.com/v3/categories/' + yelpSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      console.log(json);

    })
}
// will need to make new elements
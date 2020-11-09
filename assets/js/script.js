"use strict";


// will have to update VAR
var drink = 'screwdriver' //TEMP VAR!!
var liquor = 'rum'        //TEMP VAR!!
var recipe = [];
var drinks = [];
var glass = document.createElement('img');
var glassEl = document.querySelector('#glass');
var lists = document.querySelector('#list');
// var drinkEl = document.querySelector('#drink')
var liquorEl = document.querySelector('#liquor')
var grid = document.querySelector('.grid')
var factData = [];
var factList = document.querySelector('#factList')
var recent = document.querySelector('#pastSearches')
var searchInput = document.querySelector('#drinkSearch');
var search = JSON.parse(localStorage.getItem('search')) || [];


function getdrink() {
  Promise.all([
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + liquor)
    /*fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=" + "fun facts about" + liquor + "=6", {
       "method": "GET",
       "headers": {
         "x-rapidapi-key": "0648fc4c2fmsh626d7d99380e5bap1d3459jsn18d68de57084",
         "x-rapidapi-host": "google-search3.p.rapidapi.com"
       }
     })*/
  ])
    .then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    .then(function (json) {
      drinks = json
      console.log(drinks);

      showDrinks()
      // createFactList()

    })
}



//this is the search for recipe by name of drink
function getRecipe() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      recipe = json

      showRecipe()
      console.log(recipe);
      console.log(search)
    })
}
var glassEl = document.querySelector('#glass');
var recipeUl = document.querySelector('#recipe')
// THis is the recipe!! done until getDrinks is up
function showRecipe() {
  grid.style.display = "none"
  var ingredients = [recipe.drinks[0].strIngredient1, recipe.drinks[0].strIngredient2, recipe.drinks[0].strIngredient3, recipe.drinks[0].strIngredient4, recipe.drinks[0].strIngredient5, recipe.drinks[0].strIngredient6, recipe.drinks[0].strIngredient7, recipe.drinks[0].strIngredient8, recipe.drinks[0].strIngredient9, recipe.drinks[0].strIngredient10, recipe.drinks[0].strIngredient11, recipe.drinks[0].strIngredient12, recipe.drinks[0].strIngredient13, recipe.drinks[0].strIngredient14, recipe.drinks[0].strIngredient15];
  var measure = [recipe.drinks[0].strMeasure1, recipe.drinks[0].strMeasure2, recipe.drinks[0].strMeasure3, recipe.drinks[0].strMeasure4, recipe.drinks[0].strMeasure5, recipe.drinks[0].strMeasure6, recipe.drinks[0].strMeasure7, recipe.drinks[0].strMeasure8, recipe.drinks[0].strMeasure9, recipe.drinks[0].strMeasure10, recipe.drinks[0].strMeasure11, recipe.drinks[0].strMeasure12, recipe.drinks[0].strMeasure13, recipe.drinks[0].strMeasure14, recipe.drinks[0].strMeasure15];

  recipeUl.innerHTML = recipe.drinks[0].strDrink
  var direction = document.createElement('li');
  direction.innerHTML = recipe.drinks[0].strInstructions
  recipeUl.appendChild(direction)
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null) {
      var recipeEl = document.createElement('li');
      recipeEl.innerHTML = ingredients[i] + " ";
      recipeUl.appendChild(recipeEl);
    }
    if (measure[i] !== null) {
      var spanEl = document.createElement('span');
      spanEl.innerHTML = measure[i];
      recipeEl.appendChild(spanEl);
    }
  }
  glass.src = recipe.drinks[0].strDrinkThumb + "/preview";
  glassEl.appendChild(glass);

}


function showDrinks() {
  //clear out the area and then append the new drinks
  lists.innerHTML = "";
  // if (drinks[0].drinks.length !== null){}
  for (let i = 0; i < drinks[0].drinks.length; i++) {

    var drinkEl = document.createElement('li');
    drinkEl.setAttribute('class', "drinks");
    drinkEl.setAttribute('Onclick', 'findDrink(this)');
    drinkEl.setAttribute('value', drinks[0].drinks[i].strDrink);
    drinkEl.innerText = drinks[0].drinks[i].strDrink;
    lists.appendChild(drinkEl);
  }
}


function findLiquor() {
  liquor = liquorEl.value;
  getdrink()

}

function findDrink(drinkEl) {
  drink = drinkEl.innerText;
  search.unshift(drink)
  for (let i = search.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (search[j] === search[i]) {
        search.splice(i, 1);
        break;
      }
    }
    recent.style.display = "none";
  }
  search.splice(5)
  localStorage.setItem('search', JSON.stringify(search))
  getRecipe()
}
var pickDrink = document.querySelector('#pick-drink')
// Click on img to show the list of drinks
function img(pickDrink) {
  grid.style.display = "none"
  liquor = pickDrink;
  liquorEl.value = liquor;

  getdrink()

}



function createFactList() {
  factList.innerHTML = "";
  for (var i = 0; i < 6; i++) {
    var factEl = document.createElement('li');
    var factItem = document.createElement('a');
    factItem.setAttribute('class', "list-group-item")
    factItem.setAttribute('Onclick', 'openLink(this)')
    factItem.setAttribute('href', drinks[1].results[i].link);
    factItem.innerText = drinks[1].results[i].title;

    factList.appendChild(factEl);
    factEl.appendChild(factItem);
  }
}
function searchHistory() {
  recent.innerHTML = "";
  grid.style.display = "block";
  recent.style.display = "block";
  // if (drinks[0].drinks.length !== null){}
  for (let i = 0; i < search.length; i++) {

    var pastRecipeEl = document.createElement('li');
    pastRecipeEl.setAttribute('class', "drinks");
    pastRecipeEl.setAttribute('Onclick', 'findDrink(this)');
    pastRecipeEl.setAttribute('value', search[i]);
    pastRecipeEl.innerText = search[i];
    recent.appendChild(pastRecipeEl);
  }
}
"use strict";
var liquor = ''
var yelpSearch = ''
// will need a link 
function getdrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + liquor)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      console.log(json);

    })
}
// need a second fetch
function getStore() {
  fetch('https://api.yelp.com/v3/businesses/' + yelpSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      console.log(json);

    })
}
// will need to make new elements
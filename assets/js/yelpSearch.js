"use strict";


//PAT FREE ZONE 2


If(IKnowWhatIAmDoing)
{
  alert = "I MEAN It TOO!"
}
elseif(IAmConfusedAsHeck)
{
  alert = "HEEELLP!"
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
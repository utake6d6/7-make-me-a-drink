fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=limes=100", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "0648fc4c2fmsh626d7d99380e5bap1d3459jsn18d68de57084",
    "x-rapidapi-host": "google-search3.p.rapidapi.com"
  }
})
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch(err => {
    console.error(err);
  });
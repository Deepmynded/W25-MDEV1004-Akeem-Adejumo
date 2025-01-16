fetch('https://swapi.dev/api/films')
.then(function(response){
    return response.json();
})
.then(function(jsondata){
    console.log(jsondata);

})
.catch(function(error){
    console.log("Sorry, got an error", error);
});
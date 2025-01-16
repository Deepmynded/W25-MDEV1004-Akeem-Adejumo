fetch('https://api.giphy.com/v1/gifs/random?api_key=rU5u8OUUt5xkVgMPoZjYI4Tf68Osag16&tag=bird&rating=g')
.then(function(response){
    if (response.status == 200) {
    return response.json();
}
else {
    console.log('Whooops problem!', response.status);
}
})
.then(function(jsondata){
    console.log(jsondata);
    var gifurl = jsondata.data.images.original.url;
    console.log(gifurl);

    //create gif webpage
    var gif = document.createElement('img');
    gif.setAttribute('src',gifurl);
    document.body.appendChild(gif);
    
    //add Title
    var title = document.createElement('h1');
    title.textContent = jsondata.data.title;
    document.body.appendChild(title);


})
.catch(function(error){
    console.log("Sorry, got an error", error);
});
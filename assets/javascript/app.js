
var athletes = [];





function renderButtons(){ 

		// Loops through the array of movies
		$.each(athletes, function(){

		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('athletes'); // Added a class 
		    a.attr('data-name', athletes[i]); // Added a data-attribute
		    a.text(athletes[i]); // Provided the initial button text
		    $('#buttonsArea').append(a); // Added the button to the HTML
		}

    
    
    
function displayGiph (){
    var athlete = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="
    
    
}

    
    
function emptyButtons (){
    
    
    
}
    


$('.athletes').on('click', function() {

        // Comment 2: Sets a variable to the API url with the api key and tag included
        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";
        // Comment 3:  Ajax call to the API url using the GET method (vs POST)
        $.ajax({url: queryURL, method: 'GET'})
            // Comment 4:  Response when the API url has responded with information
            //  Other possibilities are .fail and .always to name a few
            .done(function(response) {
                // Comment 5:  Sets a variable to the image url of the JSON response.data object
                var imageUrl = response.data.image_original_url;
                // Comment 6:  Creates a generic image element and assigns it to catImage
                var athleteImage = $("<img>");
                
                // Comment 7:  Adds the attributes to the image element (catImage) to display the
                //  image url as an actual image on the page
                catImage.attr('src', imageUrl);
                catImage.attr('alt', 'cat image');
                // Comment 8:  Opposite of append - inserts the image at in the beginning of the #images div before any existing content (does not empty or delete the existing comment, but only inserts the new content at the beginning).
                $('#gifLoad').prepend(athleteImage);
            });
        });
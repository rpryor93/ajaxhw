
var athletes = [];



function renderButtons(){ 

		$('#buttonsArea').empty();
		
		for (var i = 0; i < athletes.length; i++){

		    var a = $('<button>') 
		    a.addClass('athlete'); 
		    a.attr('data-name', athletes[i]);
		    a.text(athletes[i]); 
		    $('#buttonsArea').append(a); 
            
		}
	}




$('#findGif').on('click', function(){

		
		var athlete = $('#gif-input').val().trim();

		athletes.push(athlete);
		
		renderButtons();

		return false;
    
	});




$('button').on('click', function() {
        var name = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&limit=1";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var athleteImage = $('<img>');
                    athleteImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p)
                    gifDiv.append(athleteImage)

                    $('#gifLoad').prepend(gifDiv);
                }
                
            });
    });

    
 
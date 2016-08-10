
var athletes = ['Brian Dawkins', 'Wayne Gretzky', 'Micheal Jordan', 'Donovan McNabb', 'Sammy Sosa', 'Barry Sanders', 'Vince Carter', 'Walter Peyton', 'Calvin Johnson', 'Barry Bonds', 'Julio Jones', 'Suzuki Ichiro', 'Emmitt Smith', 'Roger Staubach', 'Odell Beckham', 'Mark McGwire'];



function renderButtons(){ 

		$('#buttonsArea').empty();
		
		for (var i = 0; i < athletes.length; i++){

		    var a = $('<button>') 
		    a.addClass('athlete'); 
		    a.attr('data-name', athletes[i]);
		    a.text(athletes[i]);
            a.attr("type", "button");
		    $('#buttonsArea').append(a).fadeIn(); 
            $('#gif-input').val('');
            
		}
	}

$(document).ready(renderButtons);


$('#findGif').on('click', function(){

		
		var athlete = $('#gif-input').val().trim();
       
		athletes.push(athlete);
		
		renderButtons();
        
		return false;
        
        
    
	});




$(document).on('click', 'button', function() {
        var name = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&limit=15";
    
      

        $.ajax({url: queryURL, method: 'GET'})
            
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;
                    var url = results[i].url;

                    var p = $('<p>').text("Rating: " + rating);
                    var u = $('<p>').text("URL: " + url);
                    
                    var athleteImage = $('<img>');
                    athleteImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p)
                    gifDiv.append(athleteImage)
                    gifDiv.append(u)

                    $('#gifLoad').prepend(gifDiv).fadeIn('slow');
                }
               
            });
       
    });

$(document).on('click', '#clear', function() {
    $('#gifLoad').empty();
    $('#gif-input').val('');
   
    
});

    
 
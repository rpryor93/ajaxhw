
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

		// This line of code will grab the input from the textbox
		var athlete = $('#gif-input').val().trim();

		// The movie from the textbox is then added to our array
		athletes.push(athlete);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
    
	});

renderButtons();


    
  
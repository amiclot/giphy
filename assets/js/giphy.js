      // Initial array of movies
      var fighters = ["Jon Jones", "Demetrious Johnson", "Conor McGregor", "Stipe Miocic", "Max Holloway", "Cody Garbrandt", "Daniel Cormier", "Joanna Jedrzejczyk", "Tyron Woodley", "Dominick Cruz"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayFighterInfo() {

        var fighter = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + fighter + "&limit=10&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.data[0].images.fixed_width.url);
      var gif1 = '<img src= ' + response.data[0].images.fixed_height_still.url + '>';
      var gif2 = '<img src= ' + response.data[1].images.fixed_height_still.url + '>';
      var gif3 = '<img src= ' + response.data[2].images.fixed_height_still.url + '>';
      var gif4 = '<img src= ' + response.data[3].images.fixed_height_still.url + '>';
      var gif5 = '<img src= ' + response.data[4].images.fixed_height_still.url + '>';
      var gif6 = '<img src= ' + response.data[5].images.fixed_height_still.url + '>';
      var gif7 = '<img src= ' + response.data[6].images.fixed_height_still.url + '>';
      var gif8 = '<img src= ' + response.data[7].images.fixed_height_still.url + '>';
      var gif9 = '<img src= ' + response.data[8].images.fixed_height_still.url + '>';
      var gif10 = '<img src= ' + response.data[9].images.fixed_height_still.url + '>';
      

      $('#fighter-view').html(gif1 + gif2 + gif3 + gif4 + gif5 + gif6 + gif7 + gif8 + gif9 + gif10);

      

    });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of movies
        for (var i = 0; i < fighters.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("fighter");
          // Added a data-attribute
          a.attr("data-name", fighters[i]);
          // Provided the initial button text
          a.text(fighters[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where the add movie button is clicked
      $("#add-fighter").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var fighter = $("#fighter-input").val().trim();

        // The movie from the textbox is then added to our array
        fighters.push(fighter);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".fighter", displayFighterInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
      
      var fighters = ["Jon Jones", "Demetrious Johnson", "Conor McGregor", "Stipe Miocic", "Max Holloway", "Cody Garbrandt", "Daniel Cormier", "Joanna Jedrzejczyk", "Tyron Woodley", "Dominick Cruz"];

   
      function displayFighterInfo() {

    var fighter = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + fighter + "&limit=10&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.data[0].images.fixed_width.url);
      console.log(response.data);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='panel panel-default'>");
            var rating = results[i].rating;
            var h4 = $("<h4 class=text-center>").text("Rating: " + rating);
            var fighterImage = $("<img class=img-responsive>");
            fighterImage.attr("src", results[i].images.fixed_height_still.url);
            fighterImage.attr("image-still", results[i].images.fixed_height_still.url);
            fighterImage.attr("image-animate", results[i].images.fixed_height.url);
            fighterImage.attr("image-state", "still");
            gifDiv.prepend(h4);
            gifDiv.prepend(fighterImage);
            $("#fighter-view").prepend(gifDiv);
          }


    });

      }

  
      function renderButtons() {

      
        $("#buttons-view").empty();

        
        for (var i = 0; i < fighters.length; i++) {

         
          var a = $("<button>");
          
          a.addClass("fighter");
          
          a.attr("data-name", fighters[i]);
         
          a.text(fighters[i]);
          
          $("#buttons-view").append(a);
        }
      }

     
      $("#add-fighter").on("click", function(event) {
        event.preventDefault();
        x
        var fighter = $("#fighter-input").val().trim();

        fighters.push(fighter);

        renderButtons();

      });


      $(document).on("click", ".fighter", displayFighterInfo);


      renderButtons();

      $(document).on("click", ".img-responsive", function() {
        
        var state = $(this).attr('image-state');
        
        if (state === 'still'){
          $(this).attr('src', $(this).attr('image-animate'));
          $(this).attr('image-state', 'image-animate');
        }else{
          $(this).attr('src', $(this).attr('image-still'));
          $(this).attr('image-state', 'still');
        }

       });
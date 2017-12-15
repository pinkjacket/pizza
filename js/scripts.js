// back end
function Pizza() {
  
}


// front end
$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();

    var yourPizza = Pizza()
        $("#results").empty();
        $("#order").show();
        $("#results").append("Enjoy your pizza!");
  });
});

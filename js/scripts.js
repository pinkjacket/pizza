// back end
function Pizza(pizzaToppings) {
  this.toppings = pizzaToppings;
}


// front end
$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    var yourPizza = new Pizza(pizzaToppings)
        $("#results").empty();
        $("#order").show();
        $("#results").append("Enjoy your pizza!");
        $("#toppingsreadout").append("<li>" + yourPizza.toppings.join("</li> <li>") + "</li>")
  });
});

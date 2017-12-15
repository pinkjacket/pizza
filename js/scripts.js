// back end
function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}


// front end
$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    var yourPizza = new Pizza(pizzaToppings, pizzaSize)
        $("#results").empty();
        $("#order").show();
        $("#results").append("Enjoy your " + yourPizza.size.toString() + " pizza!");
        $("#toppingsreadout").append("<li>" + yourPizza.toppings.join("</li> <li>") + "</li>")
  });
});

function Pizza(size, toppings) {
  this.size = $("#size").val();
  this.toppings = $("#toppings").val();
  console.log(this.size);
  console.log(this.toppings);
}
Pizza.prototype.priceCheck = function() {
  //Take total from size and toppings and push to output
}
Pizza.prototype.toppingPrice = function() {
  //Take in all toppings prices, add them up, and push tehm into priceCheck
}
let pizzaOne = new Pizza();
let pizzaTwo = new Pizza();

// - UI LOGIC - //

$(document).ready(function() {

});
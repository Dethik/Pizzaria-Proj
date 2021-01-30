function Pizza(pizzaSize, meats, vegis) {
  this.pizzaSize = pizzaSize;
  this.meats = meats;
  this.vegis = vegis;
  this.Cost = 0;
};
Pizza.prototype.priceCalc = function() {
  if (this.pizzaSize === "small") {
      this.Cost += 8;
  } else if (this.pizzaSize === "mediam") {
      this.Cost += 10;
  } else if (this.pizzaSize === "large") {
      this.Cost += 12;
  } else if (this.pizzaSize === "family") {
      this.Cost += 16;
  }
  if (this.meats === "pepperoni") {
      this.Cost += 3;
  } else if (this.meats === "ham") {
      this.Cost += 1.75;
  } else if (this.meats === "bacon") {
      this.Cost += 2.25;
  } else if (this.meats === "canadian-bacon") {
      this.Cost += 3;
  } else {
      this.Cost += 0;
  }
  if (this.vegis === "black-olives") {
      this.Cost += 1.25;
  } else if (this.vegis === "onion") {
      this.Cost += 1;
  } else if (this.vegis === "tomatoes") {
      this.Cost += 1.25;
  } else if (this.vegis === "mushrooms") {
      this.Cost += 1.50;
  } else if (this.vegis === "pineapple") {
      this.Cost += 5.00;
  } else {
      this.Cost += 0;
  }
  return this.Cost / 2;
};
$(document).ready(function() {
  $("form#pizzas").submit(function(event) {
      event.preventDefault();
      let pizzasize = $("select#size").val();
      let pizzatop1 = $("select#meattoppings").val();
      let pizzatop2 = $("select#veggietoppings").val();
      let TotalPizzaPrice = new Pizza(pizzasize, pizzatop1, pizzatop2);
      TotalPizzaPrice.priceCalc();
      $("#order").text("The final cost for your purchase today is $" + TotalPizzaPrice.priceCalc() + " !");
  });
});
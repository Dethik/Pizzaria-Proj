function Pizza(pizzaSize, choice1, choice2) {
  this.pizzaSize = pizzaSize;
  this.choice1 = choice1;
  this.choice2 = choice2;
  this.Cost = 0;
};
Pizza.prototype.calculate = function() {
  if (this.pizzaSize === "small") {
      this.Cost += 8;
  } else if (this.pizzaSize === "mediam") {
      this.Cost += 10;
  } else if (this.pizzaSize === "large") {
      this.Cost += 12;
  } else if (this.pizzaSize === "family") {
      this.Cost += 16;
  }
  if (this.choice1 === "pepperoni") {
      this.Cost += 3;
  } else if (this.choice1 === "ham") {
      this.Cost += 1.75;
  } else if (this.choice1 === "bacon") {
      this.Cost += 2.25;
  } else if (this.choice1 === "canadian-bacon") {
      this.Cost += 3;
  } else if (this.choice1 === "no-meat") {
      this.Cost += 0;
  }
  if (this.choice2 === "black-olives") {
      this.Cost += 1.25;
  } else if (this.choice2 === "onion") {
      this.Cost += 1;
  } else if (this.choice2 === "tomatoes") {
      this.Cost += 1.25;
  } else if (this.choice2 === "mushrooms") {
      this.Cost += 1.50;
  } else if (this.choice2 === "pineapple") {
      this.Cost += 5.00;
  } else if (this.choice2 === "no-veggies") {
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
      TotalPizzaPrice.calculate();
      $("#order").text("The final cost for your purchase today is $ " + TotalPizzaPrice.calculate() + "!");
  });
});
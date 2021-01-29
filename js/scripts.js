// BUSINESS LOGIC //
function Pizza() {
  this.size = undefined;
  this.sauce = undefined;
  this.toppings = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

// Size Check
Pizza.prototype.changeSize = function(size) {
	this.size = size;
	if (this.size === "#small") {
		this.sizePrice = '12'
	} else if (this.size === "#medium") {
		this.sizePrice = '18'
	} else {
		this.sizePrice = '24'
	}
  this.calculateTotal(size);
  console.log(this.calculateTotal)
}

// Sauce Check
Pizza.prototype.changeSauce = function(sauce) {
    this.sauce = sauce;
}

// Topping Check
Pizza.prototype.changeToppings = function(topping) {
  this.toppings.push(topping);
  this.toppingPrice++;
  this.calculateTotal();
  console.log(this.calculateTotal)
}

// Price Total for checkout
Pizza.prototype.calculateTotal = function() {
  this.totalPrice = this.sizePrice + this.toppingsPrice;
}

// - UI LOGIC - //

Pizza.prototype.showCost = function() {
  $("#output").append("$" + this.totalPrice + ".00");
}

$(document).ready(function() {
  let pizza = new Pizza();
  $(".size").click(function() {
    let size = event.target.id;
    $(".crustSizes").addClass("hidden");
    $("#your-" + size).removeClass("hidden");
    $(".sauces").removeClass("hidden");
    pizza.changeSize(size);
  });
  $(".sauce").click(function() {
    if (pizza.sauce) {
      $(".your-" + pizza.sauce).addClass("hidden");
    }
    let sauce = event.target.id;
    $(".sauces").addClass("hidden");
    $(".toppings").removeClass("hidden");
    pizza.changeSauce(sauce === true);
  });
  $(".topping").click(function() {
    let topping = event.target.id;
    $("#" + topping).addClass("hidden");
    pizza.changeToppings(topping);
  });
  $("#show-pizza").click(function() {
    pizza.showCost();
  });
});

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
	if (this.size === "small") {
		this.sizePrice = 12;
	} else if (this.size === "medium") {
		this.sizePrice = 18;
	} else if (this.size === "large") {
		this.sizePrice = 24;
	} else {
    this.sizePrice = 0;
  }
	this.calculateTotal();
}

// Sauce Check
Pizza.prototype.sauce = function(sauce) {
  if (sauce === true) {
    this.sauce = sauce
  } else {
    this.sauce = undefined
  }
}

// Topping Check
Pizza.prototype.changeToppings = function(topping) {
  this.toppings.push(topping);
  this.toppingPrice++;
  this.calculateTotal();
}

// Price Total for checkout
Pizza.prototype.calculateTotal = function() {
  if (this.sizePrice > 0) {
    this.totalPrice = this.sizePrice + this.toppingsPrice;
  } else {
    "That's-a not a pizza pie!"
  }
}
// - UI LOGIC - //

$(document).ready(function() {
  let pizza = new Pizza();
  $("#pizza-btn").submit(function(event) {
    event.preventDefault();
  });
});
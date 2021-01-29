// BUSINESS LOGIC //
function Pizza() {
  this.size = undefined;
  this.toppings = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

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

Pizza.prototype.sauce = function(sauce) {
  if (sauce === true) {
    this.sauce = sauce
  } else {
    this.sauce = undefined
  }
}

Pizza.prototype.changeToppings = function(topping) {
  this.toppings.push(topping);
  this.toppingPrice++;
  this.calculateTotal();
}

Pizza.prototype.calculateTotal = function() {
  this.totalPrice = this.sizePrice + this.toppingsPrice;
}

Pizza.prototype.priceCheck = function() {
  //Take total from size and toppings and push to output
}

// - UI LOGIC - //

$(document).ready(function() {
  let pizza = new Pizza();
  $("#pizza-btn").submit(function(event) {
    event.preventDefault();
  });
});
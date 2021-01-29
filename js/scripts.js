// BUSINESS LOGIC //
function Pizza() {
  this.size = undefined;
  this.toppings = [];
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.priceCheck = function() {
  //Take total from size and toppings and push to output
}

Pizza.prototype.toppingPrice = function() {
  //Take in all toppings prices, add them up, and push tehm into priceCheck
}

Pizza.prototype.addSize = function(size) {
	this.size = size;
	if (this.size === "small") {
		this.sizePrice = 12;
	} else if (this.size === "medium") {
		this.sizePrice = 18;
	} else {
		this.sizePrice = 24;
	}
	this.calculateTotal();
}


// - UI LOGIC - //

$(document).ready(function() {
  let pizza = new Pizza();
  $("#pizza-btn").submit(function(event) {
    event.preventDefault();
  });
});
# Pizza Parlor

#### Come order your custom Pizza Today!

#### By - Zack Rutledge

## Technologies Used

* HTML
* CSS
* Bootstrap
* Markdown
* JavaScript
* Jquery

## Description

This is a project to demonstrate my knowledge with Object Oriented JavaScript.
In this a user will be able to order a pizza, choosing the size and toppings.

## Setup/Installation Requirements

* Open Git Bash
* Use command 'git pull https://github.com/Dethik/Pizzaria-Proj'
* Navigate to top level of directory
* Open index.html in your browser of choice.

## Known Bugs

* No Known Issues

## License

[MIT](LICENSE.txt)

## Contact Information

Email: Thorgrim88@gmail.com

## Test Specs

Describe: pizza()
Test: Customize a pizza, from size to toppings.
Expect(new Pizza(1,2,3).toEqual('new Pizza constructor'))

Describe: size()
Test: Intake selection from user for size adjusting the price for the pizza accordingly.
Expect(new Pizza('small',2,2).pizzaSize).toEqual('small')

Describe: toppings()
Test: Intake selections from user for any toppings they wish to have, adding them all together to give a total price for the pizza.
Expect(new Pizza('large', 'pepperoni', 'onion').priceCalc()).toEqual(price))
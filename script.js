'use strict';
function Phone(brand, price, color) {
	this.brand =  brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log ("The phone brand is" + this.brand + ", color is" + this.color + "and the price is" + this.price + ".")
}

var SamsungGalaxyS6 = new Phone ("Samsung", 900, "white");
SamsungGalaxyS6.printInfo();
var table = [];

function Phone(model, brand, price, color, weight, country) {
	this.model = model;
	this.brand =  brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
	this.country = country;
}
Phone.prototype.printInfo = function() {
	console.log ("This is " + this.model + ". The phone brand is " + this.brand + ", color is " + this.color + ", weight is " + this.weight + " gram and the price is " + this.price + " zlotys.")
}
Phone.prototype.productionCountry = function () {
	if (this.country !== 'China' ) {
	 console.log ('It is not product in China!')
	};	
}
Phone.prototype.addToTable = function () {
	table.push ( {
		model: this.model,
		price: this.price,
	});
	console.log (table);
}

var SamsungGalaxyS6 = new Phone ("Samsung Galaxy S6", "Samsung", 900, "white", 138, "South Korea");
var iPhone6S = new Phone("iPhone 6S", "Apple", 2250, "silver", 160, "USA");
var OnePlusOne = new Phone ("One Plus One","One Plus", 2500, "black", 172, "China");


SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.productionCountry();
SamsungGalaxyS6.addToTable ();

iPhone6S.printInfo();
iPhone6S.productionCountry();
iPhone6S.addToTable ();

OnePlusOne.printInfo();
OnePlusOne.productionCountry();
OnePlusOne.addToTable ();

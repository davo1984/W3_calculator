class Tire {
	constructor(rubberThickness, sidewallColor, pressure) {
		this.rubberThickness = rubberThickness
		this.sidewallColor = sidewallColor
		this.pressure = pressure
	}
	checkPressure() {
		console.log(this)
		if (this.pressure > 50) {
			console.log("all good")
		}
		else {
			console.log("fill up your tires")
		}
	}
}

// a car company
class Vehicle {
	constructor(brand, make, model, color, tire) {
		this.brand = brand;
		this.make = make;
		this.model = model;
		this.color = color;
		this.tire = tire
	}
	changeColor(newColor) {
		this.color = newColor
	}
}

class Truck extends Vehicle {
	constructor(brand, make, model, color, towingCapacity, tire) {
		super(brand, make, model, color, tire)
		this.towingCapacity = towingCapacity
	}
	openFlatbed() {
		console.log("opened the flatbed")
	}
}
class Car extends Vehicle {
	constructor(brand, make, model, color, FuelEfficiency, tire) {
		super(brand, make, model, color, tire)
		this.FuelEfficiency = FuelEfficiency
	}
	sportMode() {
		console.log("zoom zoom")
	}
}
var goodTire = new Tire(10, "white", 65)
var badTire = new Tire(12, "black", 15)
var myCar = new Car(
	"Toyota",
	"Prius",
	"2018SE",
	"sea foam green",
	"60mpg",
	badTire);
console.log("off the lot, Prius", myCar)
myCar.changeColor("yellow")
console.log("after 2 years, Prius", myCar)
myCar.sportMode()
myCar.openFlatbed()

//############
//############
//############

var myTruck = new Truck(
	"Toyota",
	"Tundra",
	"2020LE",
	"Red",
	"100Tons",
	goodTire);
console.log("off the lot, Big Truck", myTruck)
myTruck.changeColor("Blue")
console.log("after 2 years, Big Truck", myTruck)
myTruck.openFlatbed()

myCar.tire.checkPressure()
myTruck.tire.checkPressure()
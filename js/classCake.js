class Candle {
	constructor(color, sparkler) {
		this.color = color;
		this.sparkler = sparkler;
		this.candlesLit = false;
	}
	lightCandles(candleStatus) {
		this.candlesLit = candleStatus
	}
}

class Cake {
	constructor(type, layers, icing, candleNum) {
		this.type = type;
		this.layers = layers;
		this.icing = icing;
		this.candles = []
		this.candleNum = candleNum
	}
	generateCandles() {
		for (let index = 0; index < this.candleNum; index++) {
            var nCan = new Candle("blue", false)
			this.candles.push(nCan)
			console.log(this.candles)
		}
	}
}


var birthdayCake = new Cake("birthday", 3, true, 24);
console.log("before generate", birthdayCake)
birthdayCake.generateCandles()
console.log("after generate", birthdayCake)
//

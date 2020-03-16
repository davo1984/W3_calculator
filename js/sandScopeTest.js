
class Fred {
    constructor(fDat0, fDat1) {
        this.fDat0 = fDat0;
        this.fDat1 = fDat1;
    }
    showStuff() {
        console.log(this.fDat0, this.fDat1);
        //console.log(fDat0, fDat1);
    }
    joinStuff() {
        console.log(this.fDat0.concat(this.fDat1));
    }
}

let Cindi = new Fred("Carissa", "Courtney");
let fDat0 = "Tom";
let fDat1 = "Nick"; 
const unboundGetX = Cindi.joinStuff;
console.log(unboundGetX);
//const boundGetX = joinStuff().bind(Fred);
//boundGetX(); 
console.log("Y");
console.log(Cindi);
Cindi.showStuff("Nick","Tom");
Cindi.joinStuff();
console.log("Z");


//let unBoundbsFun = aNewCalculator.bsFun;
//console.log(unBoundbsFun);

//let boundbsFun = unBoundbsFun.bind( function(){this.bsFun});
//boundbsFun();
//console.log(boundbsFun);

//let newClick = aNewCalculator.numFun.bind(Calculator);

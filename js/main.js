class htmlPart {
    constructor(e, bootClass, idName, styleInfo, dispText) {
        this.e = document.createElement(e);
        this.e.className = bootClass;
        this.e.id = idName;
        this.e.style = styleInfo;
        this.e.innerHTML = dispText;
    }
}

class Fred {
    constructor(fDat0, fDat1) {
        this.fDat0 = fDat0;
        this.fDat1 = fDat1;
    }

    showStuff() {
        console.log(this.fDat0, this.fDat1);
        //console.log(fDat0, fDat1);
    }
}


class Calculator {
    constructor(dispArr, histArr) {
        this.dispArr = dispArr;
        this.histArr = histArr;
    }

    //buildUI() {
    //  create  element
    //var e = document.createElement(this.e);
    //e.setAttribute("class", this.bootClass);
    //e.setAttribute("id", this.idName);
    //e.setAttribute("style", this.styleInfo);
    //document.body.appendChild(e);
    //}

    initCalc() {
        console.log("INSIDE initCalc");
        //put the Calculator on the page
        //window.onload = function () { buildCalcDisplay() }

        // build array to display on keys then don't use it!
        //let keyStr = "0.=123-456X789/CE<H";
        //let keyArr = keyStr.split("");
        //build array of key pics to pretty it up
        //console.log('now playing', keyArr);

        let c = new htmlPart("div", "container", "calcCont", "background-color: lightblue;", "");
        document.body.appendChild(c.e);
// "background-color: tan", 
        let r1 = new htmlPart("div", "row border border-dark", "dispRow","", ""); //"QQQ)";
        calcCont.appendChild(r1.e);

        let nineColV = new htmlPart("div", "col-9", "nineCol", "", "");
        dispRow.appendChild(nineColV.e);

        let cDisp = new htmlPart("div", "col-9 border border-dark mx-auto text-right", "calcDisp", "background-color: ivory", "666");
        nineCol.appendChild(cDisp.e);

        let calcBodyRow = new htmlPart("div", "row d-flex flex-sm-row-reverse text-center", "dFlexRev", "", "");
        nineCol.appendChild(calcBodyRow.e);

        //let calcBodyCol = new htmlPart("div", "col-4 mx-auto", "calcBody", "", "");
        //calcCont.appendChild(calcBodyCol.e);

        for (let i = 9; i > 0; i--) {
            let keyID = "key" + i;
            //console.log("key=" + keyID);
            let keyTile = new htmlPart("button", "col-4 border border-dark border-rounded py-auto Allison", keyID, "", i);
            keyTile.e.addEventListener("click", this.numFun());
            dFlexRev.appendChild(keyTile.e); //zz
        }

        let KeyTileEqu = new htmlPart("div", "col-4 border border-dark", "key=", "", "=");
        KeyTileEqu.e.addEventListener("click", this.operatorFun());
        dFlexRev.appendChild(KeyTileEqu.e);

        let KeyTileDot = new htmlPart("div", "col-4 border border-dark dotCl", "key.", "", ".");
        KeyTileDot.e.addEventListener("click", this.dotFun());
        dFlexRev.appendChild(KeyTileDot.e);

        let KeyTile0 = new htmlPart("button", "col-4 border border-dark Allison", "key0", "", "0");
        KeyTile0.e.addEventListener("click", this.numFun());
        dFlexRev.appendChild(KeyTile0.e);

        let OperColV = new htmlPart("div", "col-3 text-center", "operCol", "", "");
        dispRow.appendChild(OperColV.e);

        let operRowV = new htmlPart("div", "row d-flex flex-column", "operRow", "", "");
        operCol.appendChild(operRowV.e);

        let KeyClr = new htmlPart("div", "col border border-dark Hayden", "operRowV", "", "Clr");
        KeyClr.e.addEventListener("click", this.clrFun());
        //KeyClr.e.clrFun.bind(this);
        operRow.appendChild(KeyClr.e);

        let KeyPlus = new htmlPart("div", "col border border-dark", "keyPlus", "", "+");
        KeyPlus.e.addEventListener("click", this.operatorFun());
        operRow.appendChild(KeyPlus.e);

        let KeyMinus = new htmlPart("div", "col border border-dark", "keyMinus", "", "-");
        KeyMinus.e.addEventListener("click", this.operatorFun());
        operRow.appendChild(KeyMinus.e);

        let KeyMult = new htmlPart("div", "col border border-dark operCL", "keyMult", "", "&#x22C7");
        KeyMult.e.addEventListener("click", this.operatorFun());
        operRow.appendChild(KeyMult.e);

        let KeyDivi = new htmlPart("div", "col border border-dark operCl", "keyDivide", "", "&#x00F7");
        KeyDivi.e.addEventListener("click", this.operatorFun());
        operRow.appendChild(KeyDivi.e);

        let KeyBS = new htmlPart("div", "col border border-dark Dennis", "keyBS", "", "&#x21E6"); // "&#x21FD"); //"<");
        KeyBS.e.addEventListener("click", this.bsFun());
        operRow.appendChild(KeyBS.e);
    }

//example not my code below ZZZZ
//var Button = function (content) { this.content = content; }; 
//Button.prototype.click = function  { console.log(this.content + ' clicked'); } 
//var myButton = new Button('OK'); 
//myButton.click(); 
//var looseClick = myButton.click; 
//looseClick();       // not bound, 'this' is not myButton 
//var boundClick = myButton.click.bind(myButton); 
//boundClick(); 
// bound, 'this' is myButton Which prints out:

//example ZZZZ


    numFun() {
        //console.log('number pressed'); //zz
        //console.log(this)
        console.log('number ' + this.innerHTML + ' pressed id=' + this.id);
        let pressedNum = this.innerHTML;
        let displayNum = document.querySelector('#calcDisp').innerHTML;
        //console.log('display='+document.querySelector('#calcDisp'+pressedNum+'+pressedNum);

        let newNum = '';
        if (displayNum === 0) {
            newNum = pressedNum;
            console.log('A');
        } else if (displayNum.length >= 16) {
            newNum = displayNum;
            console.log('B');
        } else {
            newNum = displayNum.concat(pressedNum);
            console.log('C');
        }
        document.querySelector('#calcDisp').innerHTML = newNum;
    }

    dotFun() {
        console.log('dotFun ' + this.innerHTML + ' pressed id=' + this.id);
    }

    bsFun() {
        console.log('bsFun ' + this.innerHTML + ' pressed id=' + this.id);
    }

    clrFun() {
        //console.log('clrFun ' + this.innerHTML + ' pressed id=' + this.id);
        document.querySelector('#calcDisp').innerHTML = 0;
        //console.log('display ='+ele.innerHTML)
    }

    operatorFun() {
        //console.log('OPERATOR pressed');
        console.log('OPERATOR ' + this.innerHTML + ' pressed id=' + this.id);
    }

    onclick() {
        console.log("I do not do anything! " + this.innerHTML)
    }

} // ending CALCULATOR

let aNewCalculator = new Calculator([1, "+", 3], ["5", "-", "8"]);
console.log(aNewCalculator);
aNewCalculator.onclick;
console.log("a-1");
aNewCalculator.initCalc();
console.log("X-1");

//let unBoundclrFun = Calculator.clrFun;
//console.log(unBoundclrFun);
//let boundclrFun = clrFun.bind(aNewCalculator);
//let newClick = aNewCalculator.numFun.bind(Calculator);

$(".Allison").on("click", "", aNewCalculator.numFun);
$(".Dennis").on("click", "", aNewCalculator.bsFun);

let newFred = new Fred("Carissa", "Courtney");
console.log("Y");
console.log(newFred);
newFred.showStuff();
console.log("Z");
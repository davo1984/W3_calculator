class htmlPart {
    constructor(e, bootClass, idName, styleInfo, dispText) {
        this.e = document.createElement(e);
        this.e.className = bootClass;
        this.e.id = idName;
        this.e.style = styleInfo;
        this.e.innerHTML = dispText;
    }
}



class Calculator {
    constructor(dispArr, currOpr, histArr) {
        this.dispArr = dispArr;
        this.currOpr = currOpr;
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
        //console.log("INSIDE initCalc");
        //this.dispArr;
        //let currOpr = '';
        //let histArr = [];
        console.log(this.dispArr);
        console.log("INSIDE initCalc: disp="+this.dispArr+" curr="+ this.currOpr
                +" histArr="+this.histArr);

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

        let cDisp = new htmlPart("div", "col-9 border border-dark mx-auto text-right", 
                "calcDisp", "background-color: ivory", this.dispArr[0]);
        nineCol.appendChild(cDisp.e);

        let calcBodyRow = new htmlPart("div", "row d-flex flex-sm-row-reverse text-center", "dFlexRev", "", "");
        nineCol.appendChild(calcBodyRow.e);

        // build number body of calculator 1-9
        for (let i = 9; i > 0; i--) {
            let keyID = "key" + i;
            //console.log("key=" + keyID);
            let keyTile = new htmlPart("button", "col-4 border border-dark border-rounded py-auto Allison", keyID, "", i);
            keyTile.e.addEventListener("click", this.numFun);
            dFlexRev.appendChild(keyTile.e);
        }

        // add the 3 keys on the bottom
        let KeyTileEqu = new htmlPart("div", "col-4 border border-dark", "key=", "", "=");
        KeyTileEqu.e.addEventListener("click", this.operatorFun);
        dFlexRev.appendChild(KeyTileEqu.e);

        let KeyTileDot = new htmlPart("div", "col-4 border border-dark dotCl", "key.", "", ".");
        KeyTileDot.e.addEventListener("click", this.dotFun);
        dFlexRev.appendChild(KeyTileDot.e);

        let KeyTile0 = new htmlPart("button", "col-4 border border-dark Allison", "key0", "", "0");
        KeyTile0.e.addEventListener("click", this.numFun);
        dFlexRev.appendChild(KeyTile0.e);

        // operator key column, then the keys
        let OperColV = new htmlPart("div", "col-3 text-center", "operCol", "", "");
        dispRow.appendChild(OperColV.e);

        let operRowV = new htmlPart("div", "row d-flex flex-column", "operRow", "", "");
        operCol.appendChild(operRowV.e);

        let KeyClr = new htmlPart("div", "col border border-dark Hayden", "operRowV", "", "Clr");
        KeyClr.e.addEventListener("click", this.clrFun);
        operRow.appendChild(KeyClr.e);

        let KeyPlus = new htmlPart("div", "col border border-dark", "+", "", "+");
        KeyPlus.e.addEventListener("click", this.operatorFun);
        operRow.appendChild(KeyPlus.e);

        let KeyMinus = new htmlPart("div", "col border border-dark", "-", "", "-");
        KeyMinus.e.addEventListener("click", this.operatorFun);
        operRow.appendChild(KeyMinus.e);

        let KeyMult = new htmlPart("div", "col border border-dark operCL", "&#x22C7", "", "&#x22C7");
        KeyMult.e.addEventListener("click", this.operatorFun);
        operRow.appendChild(KeyMult.e);

        let KeyDivi = new htmlPart("div", "col border border-dark operCl", "&#x00F7", "", "&#x00F7");
        KeyDivi.e.addEventListener("click", this.operatorFun);
        operRow.appendChild(KeyDivi.e);
        
        let KeyBS = new htmlPart("div", "col border border-dark Dennis", "keyBS", "", "&#x21E6"); // "&#x21FD"); //"<");
        KeyBS.e.addEventListener("click", this.bsFun);
        operRow.appendChild(KeyBS.e);
    }

    // deal with a number key press 0-9
    numFun() {
        //console.log('number pressed'); 
        //console.log(this.dispArr);   //undefined!
        //console.log("numFun: disp=" + this.dispArr + " curr=" + this.currOpr
        //    + " histArr=" + this.histArr);
        
        //console.log('number ' + this.innerHTML + ' pressed id=' + this.id + 
        //        ' Display=' + aNewCalculator.dispArr);

        let pressedNum = this.innerHTML;

        if (aNewCalculator.dispArr.length == 1 && aNewCalculator.dispArr[0] == '0') {
            aNewCalculator.dispArr[0] = pressedNum;
        } else {
            aNewCalculator.dispArr.push(pressedNum);
        }
        console.log('displayNum='+aNewCalculator.dispArr.join(""));

        document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join("");
    }

    // decimal key pressed
    dotFun() {
        if ( aNewCalculator.dispArr.indexOf('.') < 0 ) { 
            aNewCalculator.dispArr.push('.');
            document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join("");
        }
        //console.log('dotFun ' + this.innerHTML + ' index of dot=' + aNewCalculator.dispArr.indexOf('.'));
    }

    // backspace key pressed
    bsFun() {
        if ( aNewCalculator.dispArr.length > 1 ) {
            aNewCalculator.dispArr.pop();
            document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join("");
        } else {
            document.querySelector('#calcDisp').innerHTML = "0";
        }
        console.log('bsFun ' + this.innerHTML + ' pressed id=' + this.id);
    }

    // clear the display and current calculation
    clrFun() {
        //console.log('clrFun ' + this.innerHTML + ' pressed id=' + this.id);
        aNewCalculator.dispArr = [0];
        console.log("CLEAR: "+aNewCalculator.dispArr);
        document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr[0];
        //console.log('display ='+ele.innerHTML)
    }

    
    operatorFun() {
        //console.log('OPERATOR pressed');
        console.log('OPERATOR currOpr=' + aNewCalculator.currOpr + ' pressed id=' + this.id);
        let displayNum = aNewCalculator.dispArr.join("");
        if (aNewCalculator.currOpr) {
            //something in currOpr   DO THE MATH !!             i
            console.log('id='+this.id+" calcDisp="+aNewCalculator.calcDisp);
            if ( this.id === "&#x22C7" && displayNum === 0){
                //aNewCalculator.calcDisp = "ERR &#x00f7 by 0";
                console.log("DIVISION BY ZERO");
                //TODO add err popup here & err text handling code to handle text msg
            } 
            document.querySelector('#calcDisp').innerHTML = this.id;
            console.log('this.currOpr ='+this.currOpr+' NULL instance.currOpr='+aNewCalculator.currOpr);
        } else {
            // currOpr is NULL! == EMPTY
            //set current display to be acted upon
            aNewCalculator.histArr.unshift(aNewCalculator.calcDisp);
            aNewCalculator.currOpr = this.id;
            document.querySelector('#calcDisp').innerHTML = this.id;
            console.log('hist[0] =' + aNewCalculator.histArr[0] + ' FILLED instance.currOpr='+this.id);
        }
    }

    onclick() {
        console.log("I do not do anything! " + this.innerHTML)
    }
} // ending CALCULATOR

let aNewCalculator = new Calculator([0], null,[]);
console.log(aNewCalculator);
console.log("a-1");
aNewCalculator.onclick();
console.log("X-1");
aNewCalculator.onclick;
console.log("X-2");
aNewCalculator.initCalc();
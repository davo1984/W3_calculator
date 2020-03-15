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
    constructor(dispArr, runningTot, workOp, numState) {
        this.dispArr = dispArr;
        this.runningTot = runningTot;
        this.workOp = workOp;
        this.numState = numState;
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
        aNewCalculator.runningTot = 0;
        aNewCalculator.workOp = '';
        aNewCalculator.numState = 0;
        console.log(this.dispArr);
        console.log("INSIDE initCalc: disp="+this.dispArr+" curr="+ this.currOpr
                +" numState="+this.numState);

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
            let keyTile = new htmlPart("button", "col-4 border border-dark border-rounded py-auto", keyID, "", i);
            keyTile.e.addEventListener("click", this.digitAdd);
            dFlexRev.appendChild(keyTile.e);
        }

        // add the 3 keys on the bottom
        let KeyTileEqu = new htmlPart("div", "col-4 border border-dark", "key=", "", "=");
        KeyTileEqu.e.addEventListener("click", this.performOperation);
        dFlexRev.appendChild(KeyTileEqu.e);

        let KeyTileDot = new htmlPart("div", "col-4 border border-dark dotCl", "key.", "", ".");
        KeyTileDot.e.addEventListener("click", this.insertDecimal);
        dFlexRev.appendChild(KeyTileDot.e);

        let KeyTile0 = new htmlPart("button", "col-4 border border-dark Allison", "key0", "", "0");
        KeyTile0.e.addEventListener("click", this.digitAdd);
        dFlexRev.appendChild(KeyTile0.e);

        // operator key column, then the keys
        let OperColV = new htmlPart("div", "col-3 text-center", "operCol", "", "");
        dispRow.appendChild(OperColV.e);

        let operRowV = new htmlPart("div", "row d-flex flex-column", "operRow", "", "");
        operCol.appendChild(operRowV.e);

        let KeyClr = new htmlPart("div", "col border border-dark", "operRowV", "", "Clr");
        KeyClr.e.addEventListener("click", this.clearAll);
        operRow.appendChild(KeyClr.e);

        let KeyPlus = new htmlPart("div", "col border border-dark", "+", "", "+");
        KeyPlus.e.addEventListener("click", this.performOperation);
        operRow.appendChild(KeyPlus.e);

        let KeyMinus = new htmlPart("div", "col border border-dark", "-", "", "-");
        KeyMinus.e.addEventListener("click", this.performOperation);
        operRow.appendChild(KeyMinus.e);

        let KeyMult = new htmlPart("div", "col border border-dark operCL", "X", "", "&#x22C7");
        KeyMult.e.addEventListener("click", this.performOperation);
        operRow.appendChild(KeyMult.e);

        let KeyDivi = new htmlPart("div", "col border border-dark operCl", "/", "", "&#x00F7");
        KeyDivi.e.addEventListener("click", this.performOperation);
        operRow.appendChild(KeyDivi.e);
        
        let KeyBS = new htmlPart("div", "col border border-dark", "keyBS", "", "&#x21E6"); // "&#x21FD"); //"<");
        KeyBS.e.addEventListener("click", this.eraseDigit);
        operRow.appendChild(KeyBS.e);
    }

    // deal with a number key press 0-9
    digitAdd() {
        let pressedNum = this.innerHTML;
        let displayNum = aNewCalculator.dispArr.join(); 
console.log(' ');
console.log('inside digitAdd .numState='+aNewCalculator.numState);
        if ( aNewCalculator.numState === 0 ) {
            console.log('.numState ==0: dispArr=' + aNewCalculator.dispArr.join("") +
                ' displayNum=' + displayNum + ' numState=' + aNewCalculator.numState);
            aNewCalculator.dispArr = [];
            aNewCalculator.dispArr[0] = pressedNum;
            if (pressedNum = 0) { 
                aNewCalculator.numState = 0; 
            } else {
                aNewCalculator.numState = 1;
            }
        } else {
            aNewCalculator.dispArr.push(pressedNum);
            displayNum = aNewCalculator.dispArr.join(''); 
            console.log('.numState != 0: dispArr=' + aNewCalculator.dispArr.join('') +
                ' displayNum='+displayNum+' numState='+aNewCalculator.numState);
            //aNewCalculator.dispArr= displayArr;
        }
        document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join('');
        console.log('leaving digitAdd .numState=' + aNewCalculator.numState
            + ' dispArr'+aNewCalculator.dispArr.join(''));
    }

    // decimal key pressed
    insertDecimal() {
        if ( aNewCalculator.dispArr.indexOf('.') < 0 ) { 
            aNewCalculator.dispArr.push('.');
            document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join("");
        }
        //console.log('insertDecimal ' + this.innerHTML + ' index of dot=' + aNewCalculator.dispArr.indexOf('.'));
    }

    // backspace key pressed
    eraseDigit() {
        if ( aNewCalculator.dispArr.length > 1 ) {
            aNewCalculator.dispArr.pop();
            document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr.join("");
        } else {
            document.querySelector('#calcDisp').innerHTML = "0";
        }
        console.log('eraseDigit ' + this.innerHTML + ' pressed id=' + this.id);
    }

    // clear the display and current calculation
    clearAll() {
        //console.log'clearAll ' + this.innerHTML + ' pressed id=' + this.id);
        aNewCalculator.dispArr = [0];
        console.log("CLEAR: "+aNewCalculator.dispArr);
        document.querySelector('#calcDisp').innerHTML = aNewCalculator.dispArr[0];
        aNewCalculator.workOp = '';
        aNewCalculator.numState = 0;
        //console.log('display ='+ele.innerHTML)
    }

    performOperation() {
        //console.log('OPERATOR pressed');
        let displayNum = aNewCalculator.dispArr.join("");
        let workOp = aNewCalculator.workOp;
        let runningTot = aNewCalculator.runningTot;
        let numState = aNewCalculator.numState;
        //let currOp = aNewCalculator.currOp;
        console.log(' ');
        console.log('performOperation: ');
        console.log(
            " runningTot=" + runningTot + 
            ' workOp=' + workOp + 
            ' displayNum=' + displayNum + 
            ' dispArr=' + aNewCalculator.dispArr +
            ' .numState=' + aNewCalculator.numState);

        //console.log ('empty='+""+", NULL="+null);

        if (workOp != '') {
            //something in workOp   DO THE MATH !!             i
            console.log('AAA workOp='+workOp+" displayNum="+displayNum);

            if (workOp === '+') {
                runningTot = +runningTot + +displayNum; 
            } else if (workOp === '-') {
                runningTot = +runningTot - +displayNum;
            } else if (workOp === 'X') {
                runningTot = +runningTot * +displayNum;
            } else if (workOp === '/') {
                if ( +displayNum == 0 || displayNum == '0') {
                    console.log("DIVISION BY ZERO");
                    //modal popup! TODO  
                    // once popup is done return display to running total &
                    // continue w/o return
                    document.querySelector('#calcDisp').innerHTML = "DIVISION BY ZERO";
                    aNewCalculator.numState = 0;
                    return;
                } {
                    runningTot = +runningTot / +displayNum;
                }
            }
            //console.log('runningTot=' + runningTot + '<displayNum='+displayNum+"<");
            document.querySelector('#calcDisp').innerHTML = runningTot;
            aNewCalculator.workOp = this.id;
            runningTot = '' + runningTot;
            aNewCalculator.dispArr = runningTot.split('');
            aNewCalculator.runningTot = runningTot;
            if (this.id != 'key=') {
                aNewCalculator.workOp = this.id;
            } else {
                console.log ('EQUAL KEY WAS PRESSED');
                // TODO 
            }
            //document.querySelector('#calcDisp').innerHTML = this.id;
            console.log('MATH .numState=' + aNewCalculator.numState + 
                ' .dispArr=' + aNewCalculator.dispArr +
                ' .workOp=' + aNewCalculator.workOp + 
                ' .currOp=' + aNewCalculator.currOpr);
        } else {
                //set current display to be acted upon
                aNewCalculator.runningTot = displayNum;
                aNewCalculator.workOp = this.id;
                aNewCalculator.currOpr = '';
                aNewCalculator.numberState = 0;
        }
        aNewCalculator.numState = 0;
        console.log(
            " runningTot=" + aNewCalculator.runningTot +
            ' workOp=' + aNewCalculator.workOp +
            ' displayNum=' + displayNum +
            ' dispArr=' + aNewCalculator.dispArr +
            ' .numState=' + aNewCalculator.numState);

    }

    onclick() {
        console.log("I do not do anything! " + this.innerHTML)
    }
} // ending CALCULATOR

let aNewCalculator = new Calculator([0], null,[]);
console.log(aNewCalculator);
console.log("a-1");
aNewCalculator.onclick();  // works
console.log("X-1");
aNewCalculator.onclick;    // doesn't work
console.log("X-2");
aNewCalculator.initCalc();
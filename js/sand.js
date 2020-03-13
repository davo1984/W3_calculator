
class htmlPart {
    constructor(e, bootClass, idName, styleInfo, dispText, clickFun) {
        this.e = document.createElement(e);
        this.e.className = bootClass;
        this.e.id = idName;
        this.e.style = styleInfo;
        this.e.innerHTML = dispText;
        this.e.onclick = clickFun;
    }
    buildUI() {
        //  create  element
        //var e = document.createElement(this.e);
        //e.setAttribute("class", this.bootClass);
        //e.setAttribute("id", this.idName);
        //e.setAttribute("style", this.styleInfo);
        //document.body.appendChild(e);
    }
}

// build array to display on keys then don't use it!
let keyStr = "0.=123-456X789/CE<H";
let keyArr = keyStr.split("");
//build array of key pics to pretty it up

//put the Calculator on the page
window.onload = function () { buildCalcDisplay() }


function buildCalcDisplay() {
    //console.log('now playing', keyArr);
    let c = new htmlPart("div", "container", "calcCont", "background-color: lightblue;", "");
    document.body.appendChild(c.e);

    r1 = new htmlPart("div", "row border border-dark", "dispRow", "background-color: tan", ""); //"QQQ)";
    calcCont.appendChild(r1.e);

    nineColV = new htmlPart("div", "col-9", "nineCol", "", "");
    dispRow.appendChild(nineColV.e);

    let cDisp = new htmlPart("div", "col-9 border border-dark mx-auto text-right", "calcDisp", "background-color: ivory", "0");
    nineCol.appendChild(cDisp.e);

    let calcBodyRow = new htmlPart("div", "row d-flex flex-sm-row-reverse text-center", "dFlexRev", "", "");
    nineCol.appendChild(calcBodyRow.e);

    //let calcBodyCol = new htmlPart("div", "col-4 mx-auto", "calcBody", "", "");
    //calcCont.appendChild(calcBodyCol.e);

    for (let i = 9; i > 0; i--) {
        let keyID = "key" + i;
        //console.log("key=" + keyID);
        let keyTile = new htmlPart("div", "col-4 border border-dark", keyID, "", i);
        keyTile.e.addEventListener("click", numFun);
        dFlexRev.appendChild(keyTile.e); //zz
    }

    KeyTileEqu = new htmlPart("div", "col-4 border border-dark", "key=", "", "=");
    KeyTileEqu.e.addEventListener("click", operatorFun);
    dFlexRev.appendChild(KeyTileEqu.e);

    KeyTileDot = new htmlPart("div", "col-4 border border-dark dotCl", "key.", "", ".");
    KeyTileDot.e.addEventListener("click", dotFun);
    dFlexRev.appendChild(KeyTileDot.e);

    KeyTile0 = new htmlPart("div", "col-4 border border-dark", "key0", "", "0");
    KeyTile0.e.addEventListener("click", numFun);
    dFlexRev.appendChild(KeyTile0.e);

    OperColV = new htmlPart("div", "col-3 text-center", "operCol", "", "");
    dispRow.appendChild(OperColV.e);

    operRowV = new htmlPart("div", "row d-flex flex-column", "operRow", "", "");
    operCol.appendChild(operRowV.e);

    KeyClr = new htmlPart("div", "col border border-dark", "operRowV", "", "Clr");
    KeyClr.e.addEventListener("click", clrFun);
    operRow.appendChild(KeyClr.e);

    KeyPlus = new htmlPart("div", "col border border-dark", "keyPlus", "", "+");
    KeyPlus.e.addEventListener("click", operatorFun);
    operRow.appendChild(KeyPlus.e);

    KeyMinus = new htmlPart("div", "col border border-dark", "keyMinus", "", "-");
    KeyMinus.e.addEventListener("click", operatorFun);
    operRow.appendChild(KeyMinus.e);

    KeyMult = new htmlPart("div", "col border border-dark operCL", "keyMult", "", "&#x22C7");
    KeyMult.e.addEventListener("click", operatorFun);
    operRow.appendChild(KeyMult.e);

    KeyDivi = new htmlPart("div", "col border border-dark operCl", "keyDivide", "", "&#x00F7");
    KeyDivi.e.addEventListener("click", operatorFun);
    operRow.appendChild(KeyDivi.e);

    KeyBS = new htmlPart("div", "col border border-dark", "keyBS", "", "&#x21E6"); // "&#x21FD"); //"<");
    KeyBS.e.addEventListener("click", bsFun);
    operRow.appendChild(KeyBS.e);
}

function numFun() {
    console.log('number pressed'); //zz
    console.log(this)
    console.log('number ' + this.innerHTML + ' pressed id='+ this.id);
}

function dotFun() {
    console.log('dotFun ' + this.innerHTML + ' pressed id='+ this.id);
}

function bsFun() {
    console.log('bsFun ' + this.innerHTML + ' pressed id=' + this.id);
}

function clrFun() {
    console.log('clrFun ' + this.innerHTML + ' pressed id=' + this.id);
}

function operatorFun() {
    //console.log('OPERATOR pressed');
    console.log('OPERATOR ' + this.innerHTML + ' pressed id=' + this.id);
}

function onclick() {
    console.log("I do not do anything! " + this.innerHTML)
}

// function init () {
//     let c=new htmlPart("div","col-12","Frank", "background-color: red", "QQQ"); // instance of Container
//     c.buildUI(); // run the buildUI, which puts the element on the page
// }



//init();


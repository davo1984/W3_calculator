class Container {
    constructor() {
    }
    buildUI () {
        // create element
        var e = document.createElement("div");
        e.setAttribute('id', "blue");
        document.body.appendChild(e);
    }
}

function init () {
    let c=new Container(); // instance of Container
    c.buildUI(); // run the builUI, which puts the elment on the page
}

init();


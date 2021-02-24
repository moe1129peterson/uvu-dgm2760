document.querySelector('header > h1').innerHTML = "Inspector Clouseau";
document.querySelector('header > h2').innerHTML = "'This is Inspector Chief Clouseau speaking on de phoune.'";

function reDisplay() {

    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`

    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`
    
    let myWindow = document.querySelector('#myWindow').innerHTML = `${windowSizes} \n ${offset}`

}

reDisplay()

document.getElementById("location").innerHTML = "The URL for this page is " + window.location.href;

document.getElementById("myDocument").innerHTML = "Document title is " + document.title;

document.getElementById("updated").innerHTML = "This document was last updated on " + document.lastModified;


// how to manipulate the DOM with javascript

// grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// change text of element
heading.textContent = "Changed the heading to something else!";

// change text color
heading.style.color = "#0000FF";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"))

image.setAttribute("src", "https://wddbyui.github.io/wdd131/images/ponder_dom.png")


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
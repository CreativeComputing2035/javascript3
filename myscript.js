document.onclick = function(){
    //alert("Clicked in Document.")
}

var myImage = document.getElementById("imageOne");
myImage.onclick = function() {
    console.log("Clicked imageOne");
}

var myHeadline = document.getElementById("headline");
myHeadline.onclick = function() {
    console.log("Clicked Headline");
    myHeadline.style.color = "#ff0000";
    myHeadline.style.backgroundColor = "#000000";
}



window.onload = function(){
    //this function will run after the page has finished loading.
    console.log("Page has loaded.")
}

document.getElementById("navMenu").innerHTML =
    '<ul class="nav">'+
    '<li class="nav"><a href="index.html">Home</a></li>'+
    '<li class="nav"><a href="services.html">Services</a></li>'+
    '<li class="nav"><a href="about.html">About</a></li>'+
    '</ul>';

var myElement = document.getElementById("myElement");
var myListItems = document.getElementByTagName("li");
console.log("child nodes of Aside: ", myItems.childNodes.length);
var myAsideItems = document.getElementById("aside");
var myAsideList = myAsideItems.getElementsByTagName("li");
console.log(myAsideList);

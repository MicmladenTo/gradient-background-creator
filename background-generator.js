var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// Set the background gradient manually
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

// Sets initial gradient on page load
setGradient();

// Colour randomiser
function getRandomColor() {

  	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

// Set random background
function setRandomGradient() {
    
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    
    setGradient();
}

// Choose the colours manually
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Use the random button /////
button.addEventListener("click", setRandomGradient);
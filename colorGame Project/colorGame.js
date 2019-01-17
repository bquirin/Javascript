var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares); 
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

intialise();

function intialise(){
	for(var i = 0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numOfSquares = 3; 
		}else{
			numOfSquares = 6;
		}
		reset();
	});
}

}


function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours"
	messageDisplay.textContent = "";
	
	for(var i= 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i]; 

		}else{
			squares[i].style.display = 'none'; 
		}
	}
	h1.style.backgroundColor = "steelblue";
	

}


resetButton.addEventListener("click", function(){

	reset()

})

colorDisplay.textContent= pickedColor;

for(var i = 0; i< squares.length; i++){
	//add inital colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color 
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}	
	});
}


function changeColors(color){
	//loop through all squares
	for(var i= 0; i<squares.length; i++){
		//change each squre to match another color
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor(){
	//var str = "rgb("
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomColors(num){ 
	//make an array 
	var array = [];
	//add num random colors to array 
	for(var i = 0; i < num; i++){
		array.push(randomColor());
	}
	return array;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var str = "rgb(" +r+', ' +g  +', '+ b +')';

	return str;

}
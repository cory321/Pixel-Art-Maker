window.onload = function() {
	
	generateGrid();
	document.addEventListener("mousedown", enablePainting);
	document.addEventListener("mouseup", disablePainting);
};

var generateGrid = function() {

	body = document.getElementById("container");
	content = "<div class=\"box\"></div>";
	numBoxes = 2000;

	for(var i = 0; i < numBoxes; i++) {
		body.innerHTML = body.innerHTML + content;
	}

	//allow user to click individual pixels
	var box = document.querySelectorAll(".box");
	for (var i = 0; i < numBoxes; i++) {
		box[i].addEventListener("click", assignColorToSquare);
	};
};

var enablePainting = function() {

	var box = document.querySelectorAll(".box");
	for (var i = 0; i < numBoxes; i++) {
		box[i].addEventListener("mouseover", assignColorToSquare);
	};
};

var disablePainting = function() {

	var box = document.querySelectorAll(".box");
	for (var i = 0; i < numBoxes; i++) {
		box[i].removeEventListener("mouseover", assignColorToSquare);
	};
};

var assignColorToSquare = function() {
	event.preventDefault();
	this.style.backgroundColor = document.getElementById('background-color').value;
};

var updateColorValue = function() {
	document.getElementById('chosen-color').value = document.getElementById('background-color').value;
};

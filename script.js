document.body.onload = createCell;
var nrCell = 0, status = 0;
var message = document.getElementById("message");
var button = document.getElementById("button");

function createCell() {
	for (var i = 1; i <= 3; ++i) {
		for (var j = 1; j <= 3; ++j) {
			const object = document.getElementById("container");
			const newDiv = document.createElement("div");
			newDiv.onclick = function() {printText(newDiv)};
			newDiv.setAttribute("id", "C" + i + j);
			container.appendChild(newDiv);
		}
	}
}

function printText(div) { 
	if (status == 0) {
		if (div.innerHTML == "") {
			div.appendChild(text(nrCell)); 
			++nrCell;
			getGameResult(div); 
		}
	} 
}

function showPlayerTurn(number) { 
	if (number % 2 == 0) {
		var newText = document.createTextNode("X");
	} else {
		var newText = document.createTextNode("0");
	}
	return newText;
}

function checkWinner(cellText) { 
	var row = (cellText.id).charAt(1);
	var col = (cellText.id).charAt(2);
	var winRow = 0, winColumn = 0, winMainDiag = 0, winSecDiag = 0;
	for (var j = 1; j <= 3; ++j) {
		var rowDiv = document.getElementById("C" + row + j);
		if (rowDiv.innerHTML != cellText.innerHTML) {
			winRow = 1;
		} 
		var columnDiv = document.getElementById("C" + j + col); 
		if (columnDiv.innerHTML != cellText.innerHTML) {
			winColumn = 1;
		}
		if (row == col) { 
			var divMainDiag = document.getElementById("C" + j + j);
			if (divMainDiag.innerHTML != cellText.innerHTML) {
				winMainDiag = 1;
			}
		} else {
			winMainDiag = 1;
		}
		if (col == 3 - row + 1) { 
			var divSecDiag = document.getElementById("C" + j + (3 - j + 1));
			if (divSecDiag.innerHTML != cellText.innerHTML) {
				winSecDiag = 1;
			}
		} else {
			winSecDiag = 1;
		}
	}
	if (winRow == 0 || winColumn == 0 || winMainDiag == 0 || winSecDiag == 0) {
		return 0;
	} 
	return 1;
}

function getGameResult(cell) {
	if (checkWinner(cell) == 0 && nrCell > 4) { 
		printResult(cell);
	} else if (nrCell == 9) { 
		printResult("1");     
	} 
}

function printResult(variable) { 
	if (variable == 1) {
		message.innerHTML = "Remiza!";
		button.style.display = "block";
	} else {
		message.innerHTML = variable.innerHTML + " a castigat!";
		status = 1;
		button.style.display = "block";
	}
}

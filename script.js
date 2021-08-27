document.body.onload = addElement;
var nrCell = 1, status = 0;
var message = document.getElementById("message");
var button = document.getElementById("button");

function addElement() {
	for (var i = 1; i <= 3; ++i) {
		for (var j = 1; j <= 3; ++j) {
			const object = document.getElementById("container");
			const newDiv = document.createElement("div");
			newDiv.onclick = function() {changeText(newDiv)};
			newDiv.setAttribute("id", "C" + i + j);
			container.appendChild(newDiv);
		}
	}
}
function changeText(div) {
	if (status == 0) {
		var row = (div.id).charAt(1);
		var column = (div.id).charAt(2);

		if (div.innerHTML == "") {
			div.appendChild(text(nrCell));
			++nrCell;
		}
		if (winner(row, column, div) == 0 && nrCell > 4) {
			message.innerHTML = div.innerHTML + " a castigat!";
			status = 1;
			button.style.display = "block";
		} else if (nrCell == 10) {
			message.innerHTML = "Remiza!";
			button.style.display = "block";
		}
	} 
}
function text(number) {
	if (number % 2 == 0) {
		var newText = document.createTextNode("0");
	} else {
		var newText = document.createTextNode("X");
	}
	return newText;
}
function winner(rowNr, colNr, text) {
	var winRow = 0, winColumn = 0, winMainDiag = 0, winSecDiag = 0;
	for (var j = 1; j <= 3; ++j) {
		var rowDiv = document.getElementById("C" + rowNr + j);
		if (rowDiv.innerHTML != text.innerHTML) {
			winRow = 1;
		} 
		var columnDiv = document.getElementById("C" + j + colNr); 
		if (columnDiv.innerHTML != text.innerHTML) {
			winColumn = 1;
		}
		if (rowNr == colNr) { 
			var divMainDiag = document.getElementById("C" + j + j);
			if (divMainDiag.innerHTML != text.innerHTML) {
				winMainDiag = 1;
			}
		} else {
			winMainDiag = 1;
		}
		if (colNr == 3 - rowNr + 1) { 
			var divSecDiag = document.getElementById("C" + j + (3 - j + 1));
			if (divSecDiag.innerHTML != text.innerHTML) {
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
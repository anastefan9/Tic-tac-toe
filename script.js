document.body.onload = addElement;
var counter = 1, status = 0;

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
function changeText(variable) {
	if (status == 0) {
		var row = (variable.id).charAt(1);
		var column = (variable.id).charAt(2);
		var winRow = 0, winColumn = 0, winMainDiagonal = 0, winSecDiagonal = 0, newText;
		var message = document.getElementById("message");
		var reloadButton = document.getElementById("reloadButton");

		if (counter % 2 == 0) {
			newText = document.createTextNode("0");
		} else {
			newText = document.createTextNode("X");
		}
		if (variable.innerHTML == "") {
			variable.appendChild(newText);
			++counter;
		}
		for (var j = 1; j <= 3; ++j) {
			var rowElementId = "C" + row + j; //rand
			var rowDiv = document.getElementById(rowElementId);
			if (rowDiv.innerHTML != variable.innerHTML) {
				winRow = 1;
			}
			var columnElementId = "C" + j + column; //coloana
			var columnDiv = document.getElementById(columnElementId);
			if (columnDiv.innerHTML != variable.innerHTML) {
				winColumn = 1;
			}
			if (row == column) { //diagonala principala
				var mainDiagElemId = "C" + j + j;
				var divMainDiag = document.getElementById(mainDiagElemId);
				if (divMainDiag.innerHTML != variable.innerHTML) {
					winMainDiagonal = 1;
				}
			} else {
				winMainDiagonal = 1;
			}
			if (column == 3 - row + 1) { //diagonala secundara
				var secDiagElemId = "C" + j + (3 - j + 1);
				var divSecDiag = document.getElementById(secDiagElemId);
				if (divSecDiag.innerHTML != variable.innerHTML) {
					winSecDiagonal = 1;
				}
			} else {
				winSecDiagonal = 1;
			}
		}
		if (winRow == 0 || winColumn == 0 || winMainDiagonal == 0 || winSecDiagonal == 0) {
			message.innerHTML = variable.innerHTML + " a castigat!";
			status = 1;
			reloadButton.style.display = "block";
		} else if (counter == 10) {
			message.innerHTML = "Remiza!";
			reloadButton.style.display = "block";
		}
	} 
}


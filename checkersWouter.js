var Board = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0, 2, 0]
]


function onLoad() {
    var element = document.getElementById('table');
    if (element != null) {
        element.parentNode.removeChild(element);
    };

    var div = document.getElementById('main')
    var table = document.createElement("table");

    for (var i = 0; i < 10; i++) {
        newRow = document.createElement("tr");
        for (var j = 0; j <= 9; j++) {
            newColumn = document.createElement("td");
            newColumn.setAttribute("onclick", 'checkValue(this)')
            if (Board[i][j] == 1) {
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers1");
                newColumn.appendChild(childDiv);
            }
            if (Board[i][j] == 2) {
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers2");
                newColumn.appendChild(childDiv);

            }
            if (i % 2 == 0) {
                newColumn.style.backgroundColor = j % 2 ? 'black' : 'white';
            } else {
                newColumn.style.backgroundColor = j % 2 ? 'white' : 'black';
            }
            newRow.appendChild(newColumn);
        }
        table.setAttribute('id', 'table');
        table.appendChild(newRow);
        div.appendChild(table);

        if(!player){
            document.getElementById("player").innerHTML = "it's player greys turn";
        } else if (player){
            document.getElementById("player").innerHTML = "it's player golds turn";
        }
    };

}

var selected = 1;
var firstSelectedArray = [];
var secondSelectedArray = [];
var valueArray = [];
var player = true;

function clearFields() {
    selected = 1;
    firstSelectedArray = [];
    secondSelectedArray = [];
    valueArray = [];
};



function checkValue(x) {
    var rowIndex = x.parentNode.rowIndex
    var columnIndex = x.cellIndex;

    if (rowIndex % 2 != 0 && columnIndex % 2 != 0 ||
        rowIndex % 2 == 0 && columnIndex % 2 == 0) {
        clearFields()
    }
    else {

        if (selected == 1) {
            firstSelectedArray.push(rowIndex);
            firstSelectedArray.push(columnIndex);
            if (player && Board[firstSelectedArray[0]][firstSelectedArray[1]] == 1) {
                valueArray.push(Board[rowIndex][columnIndex]);
                selected += 1
                player = false;

            }  else if (!player && Board[firstSelectedArray[0]][firstSelectedArray[1]] == 2) {
                valueArray.push(Board[rowIndex][columnIndex]);
                selected += 1
                player = true;
            } else {
                clearFields();
                alert("it's not your turn");
            }
        }
        else if (selected == 2) {
            secondSelectedArray.push(rowIndex);
            secondSelectedArray.push(columnIndex);

            if(firstSelectedArray[0] == secondSelectedArray[0] && firstSelectedArray[1] == secondSelectedArray[1]){
                player = !player
            } else {

            if (
                Math.abs(firstSelectedArray[0] - secondSelectedArray[0]) == 1 &&
                Math.abs(firstSelectedArray[1] - secondSelectedArray[1]) == 1 &&
                Board[secondSelectedArray[0]][secondSelectedArray[1]] == 0
            ) {
                valueArray.push(Board[rowIndex][columnIndex]);
                Board[secondSelectedArray[0]][secondSelectedArray[1]] = valueArray[0];
                Board[firstSelectedArray[0]][firstSelectedArray[1]] = valueArray[1];
            } else if (
                Math.abs(firstSelectedArray[0] - secondSelectedArray[0]) == 2 &&
                Math.abs(firstSelectedArray[1] - secondSelectedArray[1]) == 2
            ) {
                var averageFirstandSecondArrayRow = (firstSelectedArray[0] + secondSelectedArray[0]) / 2
                var averageFirstandSecondArrayRow2 = (firstSelectedArray[1] + secondSelectedArray[1]) / 2
                if (Board[averageFirstandSecondArrayRow][averageFirstandSecondArrayRow2] == 1 &&
                    Board[firstSelectedArray[0]][firstSelectedArray[1]] == 2 &&
                    Board[secondSelectedArray[0]][secondSelectedArray[1]] != 1 &&
                    Board[secondSelectedArray[0]][secondSelectedArray[1]] != 2 ||
                    Board[averageFirstandSecondArrayRow][averageFirstandSecondArrayRow2] == 2 &&
                    Board[firstSelectedArray[0]][firstSelectedArray[1]] == 1 &&
                    Board[secondSelectedArray[0]][secondSelectedArray[1]] != 1 &&
                    Board[secondSelectedArray[0]][secondSelectedArray[1]] != 2

                ) {
                    Board[averageFirstandSecondArrayRow][averageFirstandSecondArrayRow2] = 0;
                    Board[secondSelectedArray[0]][secondSelectedArray[1]] = valueArray[0];
                    Board[firstSelectedArray[0]][firstSelectedArray[1]] = valueArray[1];
                };
            };

            };

            clearFields();
            onload();
        };
    };
};



var Board = [
    [0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,2,0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0,2,0]
]

function onLoad(){
    var element = document.getElementById('table');
    if(element != null){
        element.parentNode.removeChild(element);
    };

    var div = document.getElementById('main')
    var table = document.createElement("table");

    for(var i = 0 ; i<10 ; i++){
        newRow = document.createElement("tr");
        for (var j= 0; j<= 9;j++){
            newColumn = document.createElement("td");
            newColumn.setAttribute("onclick", 'checkValue(this)')

            if(Board[i][j]== 1){
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers1");
                newColumn.appendChild(childDiv);

            }
            if(Board[i][j]== 2){
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers2");
                newColumn.appendChild(childDiv);

            }
            if(i % 2 == 0){
                newColumn.style.backgroundColor = j % 2 ? 'black': 'white';
            } else {
                newColumn.style.backgroundColor = j % 2 ? 'white': 'black';
            }
            newRow.appendChild(newColumn);
        }
        table.setAttribute('id','table');
        table.appendChild(newRow);
        div.appendChild(table);
    };
    
}

var selected = 1;
firstSelectedArray = [];
secondSelectedArray = [];
valueArray= [];

function checkValue(x){
    
    var rowIndex = x.parentNode.rowIndex
    var columnIndex = x.cellIndex;


    if (selected == 1){
        firstSelectedArray.push(rowIndex);
        firstSelectedArray.push(columnIndex);
        valueArray.push(Board[rowIndex][columnIndex]);
        selected += 1
    }

    else if(selected == 2){
        secondSelectedArray.push(rowIndex);
        secondSelectedArray.push(columnIndex);

        valueArray.push(Board[rowIndex][columnIndex]);
        
        Board[secondSelectedArray[0]][secondSelectedArray[1]] = valueArray[0];
        Board[firstSelectedArray[0]][firstSelectedArray[1]] = valueArray[1];

        firstSelectedArray = [];
        secondSelectedArray = [];
        valueArray= [];
        selected = 1

        onload();
    }

    
};


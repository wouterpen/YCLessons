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
    var table = document.getElementById('board');

    function checkValue(x){
        console.log(x);
    };

    for(var i = 0 ; i<10 ; i++){
        newRow = document.createElement("tr");
        for (var j= 0; j<= 9;j++){
            newColumn = document.createElement("td");
            newColumn.id = i + '' + j
            newColumn.onclick = function checkValue(){};
            if(Board[i][j]== 1){
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers1");
                childDiv.onclick = function() { console.log("checkValue()")} ;
                newColumn.appendChild(childDiv);

            }
            if(Board[i][j]== 2){
                childDiv = document.createElement('div');
                childDiv.setAttribute("class", "checkers2");
                // childDiv.id = Math.random();
                childDiv.onclick = function() {'yes'};
                newColumn.appendChild(childDiv);

            }
            if(i % 2 == 0){
                newColumn.style.backgroundColor = j % 2 ? 'black': 'white';
            } else {
                newColumn.style.backgroundColor = j % 2 ? 'white': 'black';
            }
            newRow.appendChild(newColumn);
        }
        table.appendChild(newRow);
    };
    
}


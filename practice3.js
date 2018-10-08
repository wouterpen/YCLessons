
function JScriptVoorbeeld () {
}

function sayHello(name){
    const value = document.getElementById(name).getAttribute("value")
    if(value != null){
        alert("hello "+ value);
    } else {
        alert("hello mister or misses unknown");
    };
};

function forLoop(){
    for(var i = 0 ; i<5; i++){
            console.log(i);
        }
    };

function Count(event){
    var Counting = document.getElementById("Count").innerHTML;
    var NewCount = parseInt(Counting);

    if(event === "+"){
        NewCount += 1
        
    } else { NewCount -= 1}

    document.getElementById("Count").innerHTML = NewCount;    
    
};

function countLines(){
    const Lines = document.getElementById('lineCount').value;
    
    for(var i = 0 ; i<Lines; i++){
        
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode(i+1);
        btn.id = "ID" + i;
        btn.className = i;
        btn.style.color = i%2 ? 'green': 'red';
        btn.appendChild(t);
        document.body.appendChild(btn);
    }
};




function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://swapi.co/api/people/1/", true);
    xhttp.send();
  }

function findCharacter(){
    var person = document.getElementById("starwars").value;
    console.log(person);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var response = JSON.parse(this.responseText);
        console.log("response!!!---",response);

        
        document.getElementById("name").innerHTML = response.name;
        document.getElementById("height").innerHTML = response.height;
        document.getElementById("mass").innerHTML = response.mass;
        document.getElementById("haircolor").innerHTML = response.hair_color;
        document.getElementById("skincolor").innerHTML = response.skin_color;

      }
    };
    xhttp.open("GET", `https://swapi.co/api/${person}`, true);
    xhttp.send();
  }

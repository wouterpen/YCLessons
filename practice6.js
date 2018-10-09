// https://api.chucknorris.io/jokes/random


function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        JSON.parse(this.responseText).value;
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", " https://api.chucknorris.io/jokes/random", true);
    xhttp.send();
  }
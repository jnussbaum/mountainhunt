console.log("1");

var bildId = ["a"];
function init(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
      var lines = this.responseText.split("\n");
      //var bld;
      for (i=0; i<lines.length; i++){
          var field = lines[i].split(";");
          //autmatisches laden der Bilder
          //
          bildId.push(field[0]);
      }


    }
  };
console.log(bildId)
  xhttp.open("GET", "CSV/Capauliana_Hackaton2020.csv", true);
  xhttp.send();
}
window.onload = init;

function bild(x){
  var bld;
  bld += "<img src='PIC/" + bildId[x] + ".1.jpg' style='height: 300px;' alt='missing pic'/>"
  document.getElementById("output").innerHTML = bld;
}
//document.getElementById("output").innerHTML = bld;

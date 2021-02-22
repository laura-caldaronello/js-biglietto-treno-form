var element1 = document.getElementById("go");
var element2 = document.getElementById("no");
document.getElementById("ticket-container").style.display = "none";

element1.addEventListener('click',
function() {
  var personName = document.getElementById("inputName").value;
  console.log(personName);
  
  var personKm = document.getElementById("inputKm").value;

  var personAge = document.getElementById("inputAge").value;

  if (personName != "" && personKm != "" && personAge != "") {
    document.getElementById("ticket-container").style.display = "flex";

    document.getElementById("outputName").innerHTML = personName;

    var whole = 0.21 * personKm;
    if (personAge == "range1") {
      var price = 0.8 * whole;
      var price = price.toFixed(2);
      var offer = "Sconto Minorenne";
    }
    else if (personAge == "range2") {
      var price = whole.toFixed(2);
      var offer = "Prezzo intero";
    }
    else if (personAge == "range3") {
      var price = 0.6 * whole;
      var price = price.toFixed(2);
      var offer = "Sconto Over 65";
    }
    document.getElementById("outputOffer").innerHTML = offer;
    document.getElementById("outputPrice").innerHTML = price + " €";

    var carriage = Math.floor(Math.random() * 10) + 1;
    document.getElementById("outputCarriage").innerHTML = carriage;

    var cp = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("outputCP").innerHTML = cp;
  }
}
);

element2.addEventListener('click',
function() {
  document.getElementById("inputName").value = "";
  document.getElementById("inputKm").value = "";
  document.getElementById("inputAge").value = "";

  document.getElementById("outputName").innerHTML = "";
  document.getElementById("outputOffer").innerHTML = "";
  document.getElementById("outputPrice").innerHTML = "";
  document.getElementById("outputCarriage").innerHTML = "";
  document.getElementById("outputCP").innerHTML = "";
}
);

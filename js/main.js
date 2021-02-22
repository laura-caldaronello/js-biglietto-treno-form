var element1 = document.getElementById("go");
var element2 = document.getElementById("no");
document.getElementById("ticket-container").style.display = "none";

element1.addEventListener('click',
function() {
  document.getElementById("ticket-container").style.display = "flex";

  var outputName = document.getElementById("inputName").value;
  document.getElementById("outputName").innerHTML = outputName;

  var outputKm = document.getElementById("inputKm").value;

  var outputAge = document.getElementById("inputAge").value;
  var whole = 0.21 * outputKm;
  if (outputAge == "range1") {
    var offer = 0.8 * whole;
    var offer = offer.toFixed(2);
    document.getElementById("outputOffer").innerHTML = "Sconto Minorenne";
  }
  else if (outputAge == "range2") {
    var offer = whole.toFixed(2);
    document.getElementById("outputOffer").innerHTML = "Prezzo intero";
  }
  else if (outputAge == "range3") {
    var offer = 0.6 * whole;
    var offer = offer.toFixed(2);
    document.getElementById("outputOffer").innerHTML = "Sconto Over 65";
  }
  document.getElementById("outputPrice").innerHTML = offer + " €";

  document.getElementById("outputCarriage").innerHTML = Math.floor(Math.random() * 10) + 1;

  document.getElementById("outputCP").innerHTML = Math.floor(Math.random() * 10000) + 90000;
}
);

element2.addEventListener('click',
function() {
  inputName.value = "";

  inputKm.value = "";

  inputAge.value = "";
}
);

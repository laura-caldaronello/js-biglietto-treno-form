var element = document.getElementById("go");

element.addEventListener('click',
function() {
  var outputName = document.getElementById("inputName").value;
  document.getElementById("outputName").innerHTML = outputName;

  var outputKm = document.getElementById("inputKm").value;

  var outputAge = document.getElementById("inputAge").value;
  var whole = 0.21 * outputKm;
  if (outputAge == "range1") {
    var offer = 0.8 * whole;
    var offer = offer.toFixed(2);
  }
  else if (outputAge == "range2") {
    var offer = whole.toFixed(2);
  }
  else if (outputAge == "range3") {
    var offer = 0.6 * whole;
    var offer = offer.toFixed(2);  
  }
  document.getElementById("outputOffer").innerHTML = offer + " €";

}
);
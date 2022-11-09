function kontroll() {
  var Namn = document.forms["Felhantering"]["Namn"].value;
  if (Namn === "") {
    alert("Du måste skriva in ett namn");
    return false;
  }
}

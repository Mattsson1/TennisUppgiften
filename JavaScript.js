function kontroll() {
  var Name = document.forms["Felhantering"]["ForstaNamn"].value;
  var Andranamn = document.forms["Felhantering"]["SecondName"].value;
  var Mobilnummer = document.forms["Felhantering"]["Nummer"].value;
  var Time = document.forms["Felhantering"]["bookingtime"].value;
  var buttons = document.getElementsByClassName("RadioKnapp");

  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      var Radio = buttons[i].value;
    }
  }
  if (Name == "" || Andranamn == "" || Mobilnummer == "" || Time == " ") {
    alert("Du måste fylla i alla fält!");
    return false;
  } else {
    alert(Name + " " + Andranamn + " " + Mobilnummer + " Har bokat " + Time + " " + Radio + " bokad tid");
  }
}

function Efternamnkontroll() {
  var Andranamn = document.forms["Felhantering"]["Andranamn"].value;
  if (Andranamn == "") {
    alert("Du måste skriva in ett efternamn");
    return false;
  }
}

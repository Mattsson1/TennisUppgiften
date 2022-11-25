function kontroll() {
  var Name = document.forms["Felhantering"]["ForstaNamn"].value;//Hämtar värdet av "Forstanamn" inuti "FelHantering" som är min <form>
  var Andranamn = document.forms["Felhantering"]["SecondName"].value;
  var Mobilnummer = document.forms["Felhantering"]["Nummer"].value;
  var Time = document.forms["Felhantering"]["bookingtime"].value;
  var buttons = document.getElementsByClassName("RadioKnapp");//Hämtar RadioKnapp classerna

  for (i = 0; i < buttons.length; i++) {//En forloop. i=0, buttons.length som är 3 i detta fall. Loopen kommer köras 3 gånger
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

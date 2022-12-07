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

//let NewEvent = document.createElement('div');
//  NewEvent.classList.add('Events')
  


function Efternamnkontroll() {

  var newEvent = document.createElement("div")
  newEvent.addEventListener('click', function handleClick(event) {
    console.log("element clicked!", event)

  })


  newEvent.classList.add("Events");
  document.getElementById("Events").appendChild(newEvent);
  

}


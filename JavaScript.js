const Events = document.getElementById("myForm").addEventListener("submit", (event) => kontroll(event))

function kontroll(event) {
  event.preventDefault()
  var Name = document.forms["LogInForm"]["ForstaNamn"].value //Hämtar värdet av "Forstanamn" inuti "LogInForm" som är min <form>
  var Andranamn = document.forms["LogInForm"]["SecondName"].value
  var Mobilnummer = document.forms["LogInForm"]["Nummer"].value
  var Time = document.forms["LogInForm"]["bookingtime"].value
  var buttons = document.getElementsByClassName("RadioKnapp") //Hämtar RadioKnapp classerna
  for (i = 0; i < buttons.length; i++) {
    //En forloop. i=0, buttons.length som är 3 i detta fall. Loopen kommer köras 3 gånger
    if (buttons[i].checked) {
      var Radio = buttons[i].value
    }
  }
  if (Name == "" || Andranamn == "" || Mobilnummer == "" || Time == " ") {
    alert("Du måste fylla i alla fält!")
    return false
  }else if(Number.isInteger(Mobilnummer) === true)
  {
    alert("Fyll i ett giltigt mobilnummer!")
    return false
  }
  
  else {
    saveEvent()
    //alert(Name + " " + Andranamn + " " + Mobilnummer + " Har bokat " + Time + " " + Radio + " bokad tid")
  }

  createEvent()
}

function Efternamnkontroll() {
  var Andranamn = document.forms["LogInForm"]["Andranamn"].value
  if (Andranamn == "") {
    alert("Du måste skriva in ett efternamn")
    return false
  }
}

function createEvent() {
  var Name = document.forms["LogInForm"]["ForstaNamn"].value
  var Andranamn = document.forms["LogInForm"]["SecondName"].value
  var Mobilnummer = document.forms["LogInForm"]["Nummer"].value
  var Time = document.forms["LogInForm"]["bookingtime"].value
  var buttons = document.getElementsByClassName("RadioKnapp") //Hämtar RadioKnapp classerna
  
  for (i = 0; i < buttons.length; i++) {
    //En forloop. i=0, buttons.length som är 3 i detta fall. Loopen kommer köras 3 gånger
    if (buttons[i].checked) {
      var Radio = buttons[i].value
    }
  }

  const eventDiv = document.createElement("p")
  eventDiv.classList.add("Test")
  eventDiv.textContent = "Du har bokat tennisplanen den " + Time + " i " + Radio
  document.getElementById("Events").appendChild(eventDiv)
}

function saveEvent () 
{
  var Name = document.forms["LogInForm"]["ForstaNamn"].value //Hämtar värdet av "Forstanamn" inuti "LogInForm" som är min <form>
  var Andranamn = document.forms["LogInForm"]["SecondName"].value
  var Mobilnummer = document.forms["LogInForm"]["Nummer"].value
  var Time = document.forms["LogInForm"]["bookingtime"].value
  var buttons = document.getElementsByClassName("RadioKnapp") //Hämtar RadioKnapp classerna
  for (i = 0; i < buttons.length; i++) {
    //En forloop. i=0, buttons.length som är 3 i detta fall. Loopen kommer köras 3 gånger
    if (buttons[i].checked) {
      var Radio = buttons[i].value
    }
  }
  return false
}
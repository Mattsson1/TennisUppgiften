const Events = document.getElementById("myForm").addEventListener("submit", (event) => kontroll(event))

function kontroll(event) {
  event.preventDefault()
  var Name = document.forms["LogInForm"]["ForstaNamn"].value //Hämtar värdet av "Forstanamn" inuti "LogInForm" som är min <form>
  var Andranamn = document.forms["LogInForm"]["SecondName"].value
  var Mobilnummer = document.forms["LogInForm"]["Nummer"].value
  var Time = document.forms["LogInForm"]["bookingtime"].value
  var Bastu = document.forms["LogInForm"]["checkBox"].checked
  if (Bastu === true)
  {
    var bastuBokad = "Extratillägg: Bastu"
  }
  else{
    bastuBokad = "Inget extratillägg"
  }
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
  }else if(isNaN(Name) === false || isNaN(Andranamn) === false)
  {
    alert("Namnen kan inte innehålla siffror")
    return false
  }
  else if(isNaN(Mobilnummer))//Checkar ifall Mobilnummer är INT, 'isNaN' retunerar antingen true eller false
  {
    alert("Fyll i ett giltigt mobilnummer!")
    return false
  }


  

  else{
    alert(Name + " " + Andranamn + " " + Mobilnummer + " Har bokat " + Time + " " + Radio + " bokad tid, " + bastuBokad)
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
  var Bastu = document.forms["LogInForm"]["checkBox"].checked
  if (Bastu === true)
  {
    var bastuBokad = "Extratillägg: Bastu"
  }
  else{
    bastuBokad = "Inget extratillägg"
  }
  var buttons = document.getElementsByClassName("RadioKnapp") //Hämtar RadioKnapp classerna
  
  for (i = 0; i < buttons.length; i++) {
    //En forloop. i=0, buttons.length som är 3 i detta fall. Loopen kommer köras 3 gånger
    if (buttons[i].checked) {
      var Radio = buttons[i].value
    }
  }

  const eventDiv = document.createElement("p")
  eventDiv.classList.add("Test")
  eventDiv.textContent = "Du har bokat tennisplanen den " + Time + " i " + Radio + " " + bastuBokad
  document.getElementById("Events").appendChild(eventDiv)
}


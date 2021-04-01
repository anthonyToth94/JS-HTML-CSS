/*
Replace the static HTML images
Make a dynamic content
Use search input -> and change the content
*/

//Fill it up of the HTML contents div img etc
//Search input value goes into optionalPicture
//Seperate each of elements by name
let fullContent = {
  allPictures: [],
  optionalPicture: "",
  dessert: [],
  lunch: [],
  breakfast: [],
};

window.onload = () => {
  initialization();
};

function initialization() {
  //Save elements STATE
  let breakfast = document.getElementsByClassName("blocks breakfast");
  let lunch = document.getElementsByClassName("blocks lunch");
  let dessert = document.getElementsByClassName("blocks dessert");
  let botDiv = document.getElementsByClassName("botDiv")[0];
  let innerWrap = document.getElementsByClassName("innerWrap")[0];
  //Upload the whole content -> to my object allPictures Array ..Array.from()
  fullContent.allPicture = [
    //easier way without for..
    ...Array.from(breakfast),
    ...Array.from(lunch),
    ...Array.from(dessert),
  ];
  //Seperate and fill it up the objects
  fullContent.breakfast = [...Array.from(breakfast)];
  fullContent.lunch = [...Array.from(lunch)];
  fullContent.dessert = [...Array.from(dessert)];

  //The page content need to be empty
  botDiv.innerHTML = "";
  //Create a new div beside botDiv
  let newBotDiv = document.createElement("DIV");
  newBotDiv.className = "newBotDiv";
  innerWrap.appendChild(newBotDiv);
  //Loop all of the elements
  allPictures();

  selectChategory();
}

function allPictures() {
  let newDiv = document.getElementsByClassName("newBotDiv")[0];
  for (let i = 0; i < fullContent.allPicture.length; i++) {
    newDiv.appendChild(fullContent.allPicture[i]);
  }
}
//Search by img alt text
searchInput();
function searchInput() {
  let form = document.getElementsByTagName("FORM")[0];

  form.onsubmit = (event) => {
    event.preventDefault();
    let value = event.target.elements[0].value;
    let value2 = value.toLowerCase();
    for (elem of fullContent.allPicture) {
      if (value2 === elem.children[0].alt) {
        fullContent.optionalPicture = elem;
        break;
      }
    }
    if (fullContent.optionalPicture == "") {
      allPictures();
    } else {
      optionalPictures();
    }
    fullContent.optionalPicture = "";
  };
}

function optionalPictures() {
  let newDiv = document.getElementsByClassName("newBotDiv")[0];
  newDiv.innerHTML = "";
  newDiv.appendChild(fullContent.optionalPicture);
}

function selectChategory() {
  let select = document.getElementsByTagName("select")[0];
  let newDiv = document.getElementsByClassName("newBotDiv")[0];

  select.onchange = function (event) {
    let value = event.target.value;
    console.log(value);
    if (value == "Dessert") {
      newDiv.innerHTML = "";

      for (x of fullContent.dessert) {
        newDiv.appendChild(x);
      }
    } else if (value == "Lunch") {
      newDiv.innerHTML = "";

      for (x of fullContent.lunch) {
        newDiv.appendChild(x);
      }
    } else if (value == "Breakfast") {
      newDiv.innerHTML = "";

      for (x of fullContent.breakfast) {
        newDiv.appendChild(x);
      }
    }
  };
}

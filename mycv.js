/*function one_step() {
    let body = document.querySelector("body");
    let b_color = body.style.backgroundColor;
    if (b_color == "white") {
        b_color = "blue";
    } else {
        b_color = "white";
    }
    body.style.backgroundColor = b_color;
}



window.addEventListener("load", function () {
    let interval = setInterval(one_step, 1000);
} )
*/

function petanque_move() {
    let petanque = document.getElementById('fast-linear2');
    let name = document.getElementById('nom');
    let size_pet = petanque.style.width;
    if (size_pet == '120px') {
        size_pet = '60px';
    } else {
        size_pet = '120px';
    }
    petanque.style.width = size_pet;
}



window.addEventListener("load", function () {
    let interval = setInterval(petanque_move, 1000);
} )



function toggle() {
    // from the 'document' global variable
    // locate the element that we want to toggle
    let to_toggle = document.getElementById("fast-linear2");
    // find its current status
    let current = to_toggle.style.paddingLeft;
    // apply the opposite status
    if (current == "10px") {
      to_toggle.style.paddingLeft = "500px";
    } else {
      to_toggle.style.paddingLeft = "10px";    
    }
  }
/*
  function toggle() {
    // from the 'document' global variable
    // locate the element that we want to toggle
    let to_toggle = document.getElementById("nom");
    // find its current status
    let current = to_toggle.style.display;
    // apply the opposite status
    if (current == "block") {
      to_toggle.style.display = "none";
    } else {
      to_toggle.style.display = "block";    
    }
  }
*/
var flyingDonut = creationElement("pusheen/donutfood.png", "flyingDonut", true);
document.body.appendChild(flyingDonut);

//  *  HANDLING THE MOVING OF THE FLYING DONUT HERE :
//  *
//  */

var xDonut =0;
var yDonut = 0;
var valeurDeplacementX = 1;
var valeurDeplacementY = 1;


var deplacementDonut = setInterval(function() {
    
  if (xDonut >= document.body.clientWidth - flyingDonut.width) {
    valeurDeplacementX = -1;
  } else if (xDonut <= 0) {
    valeurDeplacementX = 1;
  }
  if (yDonut >= document.body.clientHeight - flyingDonut.height) {
    valeurDeplacementY = -1;
  } else if (yDonut <= 0) {
    valeurDeplacementY = 1;
  }

  xDonut += valeurDeplacementX;
  yDonut += valeurDeplacementY;
  flyingDonut.style.top = yDonut + "px";
  flyingDonut.style.left = xDonut + "px";
}, 1);

/*
Events autour du Donuts . drag&drop
*/

// EVENT QUAND ON ATTRAPE LE DONUT : DRAGSTART
flyingDonut.addEventListener("dragstart", function(event) {
    flyingDonut.style.cursor = "grabbing";
  });
  
  // EVENT POUR PERMETTRE DE GLISSER LE DONUT SUR LA  : DRAGOVER
  bubbleFood.addEventListener("dragover", function(event) {
    // par defaut les elements ne peuvent pas être droppés dans d'autres. Il faut donc empecher le comportement par défaut :
    event.preventDefault();
  });
  
  // EVENT QUAND ON PASSE LE DONUT SUR LA FENETRE : DRAGENTER
  bubbleFood.addEventListener("dragenter", function(event) {
    // Met en surbrillance la cible de drop potentielle lorsque l'élément glissable y entre
    bubbleFood.style.backgroundColor = "yellow";
    bubbleFood.style.borderRadius = "40px";
  });
  
  //  EVENT QUAND ON LACHE LE DONUT SUR LA FENETRE : DROP
  bubbleFood.addEventListener("drop", function(event) {
    event.preventDefault();
    compteurDePoints++;
    bubbleFood.style.display = "none";
    pusheenHungry.style.display = "none";
    flyingDonut.style.display = "none";
    pusheenDonut.style.display = "block";
    if (compteurDePoints >= 10) {
      youWin();
      pusheenDonut.style.display = "none";
      screenOfNeeds(
        "Vous avez gagné !! Allez jeter un oeil sur les compétences que vous avez débloqué... Vous en apprendrez surement plus sur la personne à l'initiative de ce jeu !",
        "alert"
      );
      textSpan.style.display = "block";
    } else {
      tableauxLogos[compteurDePoints].style.display = "initial";
      generateAleatoireDeBesoin();
      setTimeout(function() {
        rules.textContent =
          "Promenez Pusheen.. Il a besoin de se dégourdir les pattes!";
        feedingButton = false;
  
        buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
        pusheenDonut.style.display = "none";
        spriteChat.style.display = "block";
      }, 3000);
    }
  });
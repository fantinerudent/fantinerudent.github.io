"use strict";

const ecranTamagoshi = document.getElementById("ecranTamagoshi");
var spriteChat = document.getElementById("contenu");
var compteurDePoints = -1;


/**
 *  CREATION OF A "HUG"PUSHEEN :
 */

var pusheenHug = document.createElement("img");
pusheenHug.src = "pusheen/hug.png";
pusheenHug.id = "hug";
pusheenHug.style.position = "absolute";
pusheenHug.style.height = "100%";
pusheenHug.style.width = "100%";

/***
 * CREATION OF MY PUSHEEN CV & STYLE
 */

var pusheenCV = document.createElement("img");
pusheenCV.src = "pusheen/cv.png";
pusheenCV.style.position = "absolute";
pusheenCV.id = "miaou";
pusheenCV.style.left = "80%";
pusheenCV.style.bottom = "10px";
pusheenCV.draggable = false;
document.body.appendChild(pusheenCV);


/**
 * CREATION OF BUBBLE ' EVENT :
 */

var bubble = document.getElementById("thinkingbubble");
pusheenCV.addEventListener("mouseover", function() {
  bubble.style.display = "block";
});

bubble.addEventListener("click", function() {
  open("./CV-fantine-rudent.pdf");
});
bubble.addEventListener("mouseout", function() {
  bubble.style.display = "none";
});

/**
 * INJECTION OF THE "HUG"PUSHEEN - when I click
 */

var buttonPlay = document.getElementById("buttonPlay");
buttonPlay.addEventListener("click", function() {
  spriteChat.style.display = "none";
  if (pusheenHug.style.display != "block") {
    pusheenHug.style.display = "block";
  } else {
    pusheenHug.style.display = "none";
    spriteChat.style.display = "block";
  }
  ecranTamagoshi.appendChild(pusheenHug);
});

/***
 *  SPRITE Chaton
 *
 */

var masque = document.getElementById("container");

window.addEventListener("load", function() {
  spriteChat.style.display = "block";
  var masqueX = masque.offsetLeft;
  var masqueY = masque.offsetTop;
  var spriteChatX = spriteChat.offsetLeft;
  var spriteChatY = spriteChat.offsetTop;
  window.onkeydown = function(event) {
    var code = event.keyCode;

    switch (code) {
      case 37:
        if (masqueX >= -30) {
          masqueX -= 4;
          masque.style.left = masqueX + "px";
          if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
            spriteChat.style.top = "-150px";
            spriteChat.style.left = "-436px";
          } else {
            spriteChat.style.top = "0px";
            spriteChat.style.left = "-440px";
          }
        } else {
          spriteChat.style.left = "-300px";
          spriteChat.style.top = "-300px";
        }
        break;
      case 38:
        if (masqueY >= -20) {
          masqueY -= 4;
          masque.style.top = masqueY + "px";
          if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
            spriteChat.style.top = "-150px";
            spriteChat.style.left = "0px";
          } else {
            spriteChat.style.top = "0px";
            spriteChat.style.left = "0px";
          }
        } else {
          spriteChat.style.left = "-300px";
          spriteChat.style.top = "-300px";
        }

        break;
      case 39:
        if (masqueX <= 165) {
          masqueX += 4;
          masque.style.left = masqueX + "px";
          if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
            spriteChat.style.top = "-150px";
            spriteChat.style.left = "-158px";
          } else {
            spriteChat.style.top = "0px";
            spriteChat.style.left = "-154px";
          }
        } else {
          spriteChat.style.left = "-300px";
          spriteChat.style.top = "-300px";
        }
        break;

      case 40:
        if (masqueY <= 155) {
          masqueY += 4;
          masque.style.top = masqueY + "px";
          if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
            spriteChat.style.top = "-150px";
            spriteChat.style.left = "-295px";
          } else {
            spriteChat.style.top = "0px";
            spriteChat.style.left = "-290px";
          }
        } else {
          spriteChat.style.left = "-300px";
          spriteChat.style.top = "-300px";
        }
    }
  };
});

/**
 *  LA j'ai envie de rajouter une fonctionnalité miaou qd on appuie sur Espace.
 *
 */
// window.onkeyup = function(event) {
//   var code = event.keyCode;
//   if (code === 13) {
//     spriteChat.style.left = "0px";
//     spriteChat.style.top = "0px";
//   }
// };
// };

/**
 * CREATION OF "HUNGRY"pusheen
 */

var pusheenHungry = document.createElement("img");
pusheenHungry.src = "pusheen/hungry.png";
pusheenHungry.id = "hungry";
pusheenHungry.style.position = "absolute";
pusheenHungry.style.height = "150px";
pusheenHungry.style.bottom = "30px";
pusheenHungry.style.left = "-39px";
pusheenHungry.draggable = false;

var bubbleFood = document.createElement("img");
bubbleFood.src = "pusheen/foodbubbleb.png";
bubbleFood.id = "bubblefood";
bubbleFood.draggable = false;
bubbleFood.style.position = "absolute";
bubbleFood.style.height = "150px";
bubbleFood.style.bottom = "119px";
bubbleFood.style.left = "132px";

var pusheenDonut = document.createElement("img");
pusheenDonut.src = "pusheen/donut.png";
pusheenDonut.draggable = false;
pusheenDonut.style.position = "absolute";
pusheenDonut.style.height = "200px";
pusheenDonut.style.bottom = "30px";
pusheenDonut.style.left = "20px";

/**
 *
 * CREATION OF MY FLYING DONUT
 */

var flyingDonut = document.createElement("img");
flyingDonut.src = "pusheen/donutfood.png";
flyingDonut.id = "donutfood";
flyingDonut.style.position = "absolute";
flyingDonut.style.height = "150px";
flyingDonut.style.display = "none";
flyingDonut.draggable = true;
window.document.body.appendChild(flyingDonut);

//  *  HANDLING THE MOVING OF THE FLYING DONUT HERE :
//  *
//  */

var xDonut = 0;
var yDonut = 0;
var valeurDeplacementX = 2;
var valeurDeplacementY = 2;

var deplacementDonut = setInterval(function() {
  if (xDonut >= document.body.clientWidth - flyingDonut.width) {
    valeurDeplacementX = -2;
  } else if (xDonut <= 0) {
    valeurDeplacementX = 2;
  }
  if (yDonut >= document.body.clientHeight) {
    valeurDeplacementY = -2;
  } else if (yDonut <= 0) {
    valeurDeplacementY = 2;
  }

  xDonut += valeurDeplacementX;
  yDonut += valeurDeplacementY;
  flyingDonut.style.top = yDonut + "px";
  flyingDonut.style.left = xDonut + "px";
}, 1);

/**
 *
 * EVENT - FEEDING PUSHEEN
 *
 */
var buttonFeed = document.getElementById("buttonFeed");
buttonFeed.addEventListener("click", function() {
  if (spriteChat.style.display === "block") {
    bubbleFood.style.display = "block";
    bubbleFood.style.left = "133px";
    bubbleFood.style.top = "13px";
    spriteChat.style.display = "none";
    pusheenHungry.style.display = "block";
    flyingDonut.style.display = "block";
    pusheenDonut.style.display = "none";

    ecranTamagoshi.appendChild(pusheenHungry);
    ecranTamagoshi.appendChild(bubbleFood);
    ecranTamagoshi.appendChild(pusheenDonut);

    // 2 / EVENT QUAND ON ATTRAPPE LE DONUT : DRAGSTART
    flyingDonut.addEventListener("dragstart", function(event) {
      flyingDonut.style.cursor = "grabbing";
    });

    // 3 / EVENT POUR PERMETTRE DE GLISSER LE DONUT SUR LA  : DRAGOVER (SANS CET EVENT, CA NE FONCTIONNERA PAS)
    bubbleFood.addEventListener("dragover", function(event) {
      // par defaut les elements ne peuvent pas être droppés dans d'autres. Il faut donc empecher le comportement par défaut :
      event.preventDefault();
    });

    // // 4 / EVENT QUAND ON PASSE LE DONUT SEUR LA FENETRE : DRAGENTER
    // bubbleFood.addEventListener("dragenter", function(event) {
    //   // Met en surbrillance la cible de drop potentielle lorsque l'élément glissable y entre
    // //   bubbleFood.style.borderColor = "red";
    // //   bubbleFood.style.borderStyle = "dotted";
    // //   bubbleFood.style.borderWidth = "10px";
    // });

    // 5 / EVENT QUAND ON LACHE LE DONUT SEUR LA FENETRE : DROP
    bubbleFood.addEventListener("drop", function(event) {
      // faire appraitre le donut dans la	bubbleFood :
      // event.target.append(flyingDonut);
      event.preventDefault();
      console.log("droppé", compteurDePoints);
      bubbleFood.style.display = "none";
      pusheenHungry.style.display = "none";
      flyingDonut.style.display = "none";
      compteurDePoints++;
      fonctionAffichageCompetence();
      console.trace(compteurDePoints);
      pusheenDonut.style.display = "block";
      setTimeout(function() {
        pusheenDonut.style.display = "none";
        spriteChat.style.display = "block";
      }, 3000);
    });
  }
});

/***
 *  GESTION DU COMPTAGE DE POINTS;
 * faire une boucle, a chaque fois que je gagne un point, une nouvelle spriteChat passe en display block dans les boites à bijoux (compétences); quand la boite est remplie, j'ai gagné le jeu.
 */

var tableauxLogos = document.querySelectorAll(".logo");
var fonctionAffichageCompetence = function() {
  tableauxLogos[compteurDePoints].style.display = "block";
};

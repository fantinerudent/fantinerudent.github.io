"use strict";

/**
 * WHERE I STOCK THE VARIABLES/CONST' I'LL USE.
 */
// var ecranTamagoshi = document.getElementById("ecranTamagoshi");
var spriteChat = document.getElementById("contenu");
var compteurDePoints = -1;
var tableauxLogos = document.querySelectorAll(".logo");
var rules = document.getElementById("rules");
var masque = document.getElementById("container");
var textSpan = document.getElementById("texte");
var nombreDeVies = 2;


// Creation of 3 boleans I'll use to unlock the buttons of my miaoutchy:

var feedingButton = false;
var huggingButton = false;
var playingButton = false;

/* CREATION OF A FUNCTION in order to create new element.
 */

var creationElement = function(src, id, isDraggable) {
  var element = document.createElement("img");
  element.src = src;
  element.id = id;
  element.draggable = isDraggable;
  return element;
};

// Creation of the event which will let you know the needs of your pusheenCat :

var screenOfNeeds = function(message, className) {
  $("#ecranTamagoshi")
    .removeClass("regularEcranTamagoshi")
    .addClass(className);
  textSpan.textContent = message;
  spriteChat.style.display = "none";
};

// creation d'un settimeout qui se déclenche si l'utilisateur ne repond pas aux besoins:

var pusheenSad = creationElement("pusheen/sad.png", "pusheenSad", false);
var pusheenCrying = creationElement(
  "pusheen/crying.png",
  "pusheenCrying",
  false
);

var t;
var declanchement = function() {
  t = setTimeout(delaisReponseBesoin, 10000);
};

var delaisReponseBesoin = function() {
  nombreDeVies -= 1;
  rules.textContent =
    "Vous n'avez pas répondu aux besoins de Pusheen, vous avez perdu une vie...";
  screenOfNeeds("Vous avez perdu une vie...", "alert");
  if (nombreDeVies === 1) {
    ecranTamagoshi.appendChild(pusheenSad);
    setTimeout(function() {
      feedingButton = false;
      huggingButton = false;
      playingButton = false;
      generateAleatoireDeBesoin();
      pusheenSad.style.display = "none";
      textSpan.style.display = "none";
      rules.textContent = "Continuez à promener Pusheen, il a besoin de se dégourdir les jambes ";
      buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
      buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
      buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
      $("#ecranTamagoshi")
        .removeClass("alert")
        .addClass("regularEcranTamagoshi");
      spriteChat.style.display = "block";
    }, 3000);
  } else if (nombreDeVies === 0) {
    feedingButton = false;
    huggingButton = false;
    playingButton = false;
    buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
    buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
    buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
    ecranTamagoshi.appendChild(pusheenCrying);
    rules.textContent =
      "Vous avez perdu la partie, vous n'avez pas pris soin de mon petit Pusheen... Je vais devoir m'occuper de lui et le consoler... Soyez plus attentif la prochaine fois! ( - pour rejouer, actualiser la page - )";
  }
};

// Fonction qui supprime le compte à rebours.

function stopDelais() {
  clearTimeout(t);
}

// création des 3 lanceurs d'evenements ( nourrir, caliner, jouer) //


function loopOfNeedsFeeding() {
  declanchement();
  feedingButton = true;
  screenOfNeeds(" 😋 Pusheen a très faim 🍽️ ", "alert");
  textSpan.style.display = "block";
  buttonFeed.style.backgroundColor = "yellow";
}

function loopOfNeedsHugging() {
  declanchement();
  huggingButton = true;
  screenOfNeeds(" 🤗 Pusheen a besoin d'être calinée 👐 ", "alert");
  textSpan.style.display = "block";
  buttonHug.style.backgroundColor = "yellow";
}

function loopOfNeedsPlaying() {
  declanchement();
  playingButton = true;
  screenOfNeeds("Pusheen veut jouer ! 🤾‍♀️ ", "alert");
  textSpan.style.display = "block";
  buttonPlay.style.backgroundColor = "yellow";
}

// creation d'une fonction qui renvoie un chiffre aléatoire entre 1 & 3.

var generateAleatoireDeBesoin = function getRandomInt() {
  var chiffreAleatoire = Math.floor(Math.random() * 3);
  switch (chiffreAleatoire) {
    case 0:
      setTimeout(loopOfNeedsFeeding, 10000);
      break;
    case 1:
      setTimeout(loopOfNeedsHugging, 10000);
      break;
    case 2:
      setTimeout(loopOfNeedsPlaying, 10000);
      break;
    default:
  }
};

// création de l'évenement lorsque toutes les compétences ont été débloquées.

var youWin = function() {
  textSpan.style.fontSize = "20px";
  buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
  buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
  buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
  rules.textContent = "BRAVOOOO ! ";
  textSpan.style.position = "relative";
  textSpan.style.top = "-50px";
};

// début du jeu : au chargement de la page !

$(function() {
  generateAleatoireDeBesoin();
  rules.style.display = "block";
  rules.textContent =
    "Bonjour et bienvenue. Aujourd'hui vous allez devoir prendre soin de mon petit chat, Pusheen ! Il a besoin de beaucoup d'attention, et que vous repondiez rapidement à ses besoins... Vous pouvez déplacer Pusheen à l'aide des flèches du clavier... Ne vous inquiètez pas, Pusheen sait tout à fait se faire comprendre lorsqu'il a besoin de quelque chose!";
});


/***
 * CREATION OF MY PUSHEEN CV
 */

var pusheenCV = creationElement("pusheen/cv.png", "pusheenCV", false);
document.body.appendChild(pusheenCV);

/**
 * CREATION OF BUBBLE ' EVENT : when my mouse is over PusheenCV - a bubble appears - when I click on it, a page opens with my CV on PDF !
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
 * CREATION OF "HUNGRY"pusheen
 */
var pusheenHungry = creationElement(
  "pusheen/hungry.png",
  "pusheenHungry",
  false
);
var bubbleFood = creationElement(
  "pusheen/foodbubbleb.png",
  "bubbleFood",
  false
);
var pusheenDonut = creationElement("pusheen/donut.png", "pusheenDonut", false);
var flyingDonut = creationElement("pusheen/donutfood.png", "flyingDonut", true);
document.body.appendChild(flyingDonut);
pusheenDonut.style.display = "none";
pusheenHungry.style.display = "none";
bubbleFood.style.display = "none";

//  *  HANDLING THE MOVING OF THE FLYING DONUT HERE :
//  *
//  */

var xDonut = 0;
var yDonut = 0;
var valeurDeplacementX = 2;
var valeurDeplacementY = 2;

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
/**
 *
 * EVENT - FEEDING PUSHEEN
 *
 */

var buttonFeed = document.getElementById("buttonFeed");
buttonFeed.addEventListener("click", function() {
  
  stopDelais();
  if (feedingButton === true) {
    feedingButton=false;
    feedingFunction();
  }
}); // appel de la fonction feedingButton() présente dans le fichier fonctionnalites.js si le feedingButton est passé à true.

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
  if (compteurDePoints > 10) {
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

/***
 * EVENT - PUSHEEN HUG
 ***/

/**
 *  CREATION OF A "HUG"PUSHEEN :
 */
var pusheenHug = creationElement("pusheen/hug.png", "pusheenHug", false);
var pusheenRolling = creationElement(
  "pusheen/rolling.png",
  "pusheenRolling",
  false
);

/**
 *  Deuxieme fonctionnalité: caliner pusheen.
 */

ecranTamagoshi.appendChild(pusheenRolling);

buttonHug.addEventListener("click", function() {
  stopDelais();
  if (huggingButton === true) {
    huggingButton=false;
    huggingFunction();
    ecranTamagoshi.appendChild(pusheenHug);
  }
});

// utilisation of the events "mousedown" & "mouseup" - to calculate the time, during what the user is petting pusheen. The user must pet pusheen more than 5 secondes to get a point - and unlock one skill.

var start = 0;
var end = 0;
pusheenRolling.addEventListener("mousedown", function() {
  start = new Date();
});

var total = 0;
pusheenRolling.addEventListener("mouseup", function() {
  end = new Date();
  total = end - start;

  if (total >= 4000) {
    compteurDePoints++;
    rules.textContent =
      "Promenez Pusheen.. Il a besoin de se dégourdir les pattes!";

    pusheenRolling.style.display = "none";
    pusheenHug.style.display = "block";
    if (compteurDePoints > 10) {
      youWin();
      screenOfNeeds(
        "Vous avez gagné !! Allez jeter un oeil sur les compétences que vous avez débloqué... Vous en apprendrez surement plus sur la personne à l'initiative de ce jeu !",
        "alert"
      );
      pusheenHug.style.display = "none";
      textSpan.style.display = "block";
    } else {
      setTimeout(function() {
        generateAleatoireDeBesoin();
        tableauxLogos[compteurDePoints].style.display = "initial";
        buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
        pusheenHug.style.display = "none";
        spriteChat.style.display = "block";
      }, 3000);
    }
  }
});

/**
 * EVENT  PLAYING PUSHEEN :
 *
 */

var pusheenUnicorn = creationElement(
  "pusheen/pusheenunicorn.png",
  "pusheenUnicorn",
  false
);
var pusheenBad = creationElement("pusheen/pusheenBad.png", "pusheenBad", false);
var pusheenVideoGame = creationElement(
  "pusheen/pusheenplaying.png",
  "pusheenVideoGame",
  false
);
var pusheenBalle = creationElement(
  "pusheen/playing.png",
  "pusheenBalle",
  false
);

ecranTamagoshi.appendChild(pusheenUnicorn);
ecranTamagoshi.appendChild(pusheenBalle);
ecranTamagoshi.appendChild(pusheenBad);
ecranTamagoshi.appendChild(pusheenVideoGame);

var buttonPlay = document.getElementById("buttonPlay");

buttonPlay.addEventListener("click", function() {
  stopDelais();
  if (playingButton === true) {
    playingButton=false;
    playingFunction();
  }
});

var opacityPusheenBad = 0.1;
pusheenBad.addEventListener("mouseover", function mouse() {
  if (pusheenBad.style.opacity < 1) {
    opacityPusheenBad += 0.1;
  }
  pusheenBad.style.opacity = opacityPusheenBad;
});

var opacityPusheenBalle = 0.1;
pusheenBalle.addEventListener("click", function() {
  if (pusheenBalle.style.opacity < 1) {
    opacityPusheenBalle += 0.1;
  }
  pusheenBalle.style.opacity = opacityPusheenBalle;
});

var opacityPusheenVideoGame = 0.1;
window.addEventListener("keydown", function() {
  if (pusheenVideoGame.style.opacity < 1) {
    opacityPusheenVideoGame += 0.1;
  }
  pusheenVideoGame.style.opacity = opacityPusheenVideoGame;
});

var opacityPusheenUnicorn = 0.1;
pusheenUnicorn.addEventListener("mouseover", function() {
  if (pusheenUnicorn.style.opacity < 1) {
    opacityPusheenUnicorn += 0.1;
  }
  pusheenUnicorn.style.opacity = opacityPusheenUnicorn;
});

/**
 * Creation d'un evenemenet au click sur les logos qui s'affichent afin que ça dévoile leurs significations par rapport à mon CV.
 */

var detailCompetence = document.getElementById("detailCompetence");

var affichageCompetence = function(message) {
  detailCompetence.textContent = message;
  detailCompetence.style.display = "block";
};

logos.addEventListener("mouseout", function() {
  affichageCompetence("");
  detailCompetence.style.display = "none";
});

cat.addEventListener("mouseover", function() {
  affichageCompetence(
    "Adoratrice de chats depuis 1992, heureuse maman chat de Nine"
  );
});

manette.addEventListener("mouseover", function() {
  affichageCompetence(
    "Grande geek depuis la nuit des temps:mes grands frères comme tuteurs, une nintendo 64 et warcraft à mes débuts..."
  );
});

love.addEventListener("mouseover", function() {
  affichageCompetence(
    'Le social fait partie de moi: bénévole dans l\'association "Comme les autres" depuis 2015, qui accompagne les personnes en situation de handicap, suite à un accident de la vie, dans leur parcours de reconstruction... '
  );
});

funny.addEventListener("mouseover", function() {
  affichageCompetence(
    "De nature joviale, j'ai toujours le mot pour rire et je suis très souvent souriante"
  );
});

babysit.addEventListener("mouseover", function() {
  affichageCompetence(
    "J'ai commencé ma carrière professionnelle en tant qu'éducatrice de jeunes enfants... J'ai aussi passé une année aux USA en tant que fille au pair de Liam/Hudson/Keaton."
  );
});

angular.addEventListener("mouseover", function() {
  affichageCompetence("Formée en Angular 8 et TypeScript");
});

css.addEventListener("mouseover", function() {
  affichageCompetence("Formée en CSS3");
});

html.addEventListener("mouseover", function() {
  affichageCompetence("Formée en HTML5");
});

js.addEventListener("mouseover", function() {
  affichageCompetence(
    "Formée en JavaScript, tout d'abord en ligne via OpenClassRoom, puis par le biais de la formation \"Developpeur full Stack JS\" à l'IFOCOP -Paris XI- d'Octobre 2019 à Juin 2020."
  );
});

nodejs.addEventListener("mouseover", function() {
  affichageCompetence("Formée en NodeJs ainsi qu'en MongoDB");
});

steam.addEventListener("mouseover", function() {
  affichageCompetence(
    "Actuellement sur le jeu Life is Strange 2 de Square Enix (une pure merveille), et utilisatrice régulière de la Nintendo Switch "
  );
});

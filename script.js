"use strict";

console.log(
  "Bonjour développeurs avertis :  juste pour vous prévenir que les besoins de Pusheen sont aléatoires; ne perdez pas patience... "
);

//  STOCKAGE DES VALEURS QUE JE VAIS UTILISER PLUSIEURS FOIS \\
var spriteChat = document.getElementById("contenu");
var counterOfPoints = -1;
var arrayOfLogos = document.querySelectorAll(".logo");
for (var i = 0; i < arrayOfLogos.length; i++) {
  arrayOfLogos[i].style.display = "none";
}
var rules = document.getElementById("rules");
var masque = document.getElementById("container");
var textSpan = document.getElementById("texte");
var numberOfLifes = 2;

// CREATION DE TROIS VARIABLES STOCKANT DES BOLEANS QUI VONT \\
// RENDRE LES BOUTONS UTILISABLES EN FONCTION DES BESOINS DE PUSHEEN\\

var pusheenNeedsFood = false;
var pusheenNeedsAhug = false;
var pusheenNeedsToPlay = false;

// CREATION D'UNE FONCTION GLOBALE, UTILISEE A CHAQUE \\
//  FOIS QUE J'AURAIS BESOIN DE CREER UN NOUVEAU PUSHEEN \\

var creationElement = function(src, id, isDraggable) {
  var element = document.createElement("img");
  element.src = src;
  element.id = id;
  element.draggable = isDraggable;
  return element;
};

// CREATION D'UNE FONCTION GLOBALE \\
// qui va permettre de modifier la classe et le message qui s'affiche sur l'écran
// en fonction du besoin de Pusheen \\

var screenOfNeeds = function(message, className) {
  $("#ecranTamagoshi")
    .removeClass("regularEcranTamagoshi")
    .addClass(className);
  textSpan.textContent = message;
  spriteChat.style.display = "none";
};

// CREATION D'UN EVENEMENT SET TIME OUT, QUI VA DECLANCHER LA PERTE D'UNE VIE \\

var pusheenSad = creationElement("pusheen/sad.png", "pusheenSad", false);
var pusheenCrying = creationElement(
  "pusheen/crying.png",
  "pusheenCrying",
  false
);

var t;
var timerLoosingLife = function() {
  t = setTimeout(lifeLost, 10000);
};

var lifeLost = function() {
  numberOfLifes -= 1;
  rules.textContent =
    "Vous n'avez pas répondu aux besoins de Pusheen, vous avez perdu une vie...";
  screenOfNeeds("Vous avez perdu une vie...", "alert");
  if (numberOfLifes === 1) {
    ecranTamagoshi.appendChild(pusheenSad);
    setTimeout(function() {
      pusheenNeedsFood = false;
      pusheenNeedsAhug = false;
      pusheenNeedsToPlay = false;
      generateRandomNeed();
      pusheenSad.style.display = "none";
      textSpan.style.display = "none";
      rules.textContent =
        "Continuez à promener Pusheen, il a besoin de se dégourdir les jambes ";
      buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
      buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
      buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
      $("#ecranTamagoshi")
        .removeClass("alert")
        .addClass("regularEcranTamagoshi");
      spriteChat.style.display = "block";
    }, 5000);
  } else if (numberOfLifes === 0) {
    pusheenNeedsFood = false;
    pusheenNeedsAhug = false;
    pusheenNeedsToPlay = false;
    buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
    buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
    buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
    ecranTamagoshi.appendChild(pusheenCrying);
    rules.textContent =
      "Vous avez perdu la partie, vous n'avez pas pris soin de mon petit Pusheen... Je vais devoir m'occuper de lui et le consoler... Soyez plus attentif la prochaine fois! ( - pour rejouer, actualiser la page - )";
  }
};

// SUPPRESSION DU SET TIME OUT qui fait perdre une vie à Pushee,\\

function stopTimerLoosingLife() {
  clearTimeout(t);
}

// création des 3 lanceurs d'evenements ( nourrir, caliner, jouer) //

function loopOfNeedsFeeding() {
  timerLoosingLife();
  pusheenNeedsFood = true;
  screenOfNeeds(" 😋 Pusheen a très faim 🍽️ ", "alert");
  textSpan.style.display = "block";
  buttonFeed.style.backgroundColor = "yellow";
}

function loopOfNeedsHugging() {
  timerLoosingLife();
  pusheenNeedsAhug = true;
  screenOfNeeds(" 🤗 Pusheen a besoin d'être caliné 👐 ", "alert");
  textSpan.style.display = "block";
  buttonHug.style.backgroundColor = "yellow";
}

function loopOfNeedsPlaying() {
  timerLoosingLife();
  pusheenNeedsToPlay = true;
  screenOfNeeds("Pusheen veut jouer ! 🤾‍♀️ ", "alert");
  textSpan.style.display = "block";
  buttonPlay.style.backgroundColor = "yellow";
}

/* 
**
**
*
CREATION DES ELEMENTS DE LA PAGE PRINCIPALE 
* 
**
**
*/
var pusheenCV = creationElement("pusheen/cv.png", "pusheenCV", false);
document.body.appendChild(pusheenCV);

// EVENEMENT MOUSEOVER QUI CHANGE L'OPACITE DE LA BULLE \\
var bubble = document.getElementById("thinkingbubble");
pusheenCV.addEventListener("mouseover", function() {
  bubble.style.opacity = 1;
});

bubble.addEventListener("click", function() {
  open("./CV-fantine-rudent.pdf");
});
bubble.addEventListener("mouseout", function() {
  bubble.style.opacity = 0.3;
});

// CREATION D'UNE FONCTION QUI GENERE UN  BESOIN ALEATOIREATOIREMENT ENTRE 1 ET 3 \\

var generateRandomNeed = function getRandomInt() {
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

// CREATION DE L'EVENEMENT : Vous avez Gagné ! \\

var youWin = function() {
  textSpan.style.fontSize = "20px";
  buttonFeed.style.backgroundColor = "rgba(221, 17, 85, 1)";
  buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
  buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
  rules.textContent = "BRAVOOOO ! ";
  textSpan.style.position = "relative";
  textSpan.style.top = "-50px";
};

// AU CHARGEMENT DE LA PAGE : le generateur de besoins aléatoires est lancé \\

$(function() {
  generateRandomNeed();
  rules.style.display = "block";
  rules.textContent =
    "Bonjour et bienvenue. Soyez attentif aux besoins de mon Pusheen et il va vous en apprendre plus sur moi. Déplacez le à l'aide des touches :  ◀️ 🔼 🔽 ▶️ !";
});

// CREATION DES PUSHEENS :

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
var pusheenHug = creationElement("pusheen/hug.png", "pusheenHug", false);
var pusheenRolling = creationElement(
  "pusheen/rolling.png",
  "pusheenRolling",
  false
);
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
var pusheenWink = creationElement("pusheen/wink.png", "pusheenWink", false);

ecranTamagoshi.appendChild(pusheenWink);

pusheenDonut.style.display = "none";
pusheenHungry.style.display = "none";
bubbleFood.style.display = "none";

/* 
**
**
*
// CREATION DE L'EVENEMENT 1) NOURRIR PUSHEEN : 
**
**
*/

var feedingFunction = function() {
  textSpan.style.display = "none";
  $("#ecranTamagoshi")
    .removeClass("alert")
    .addClass("regularEcranTamagoshi");

  rules.textContent =
    "Vous devez attraper  le donut qui se balade dans la fenêtre et le faire glisser à l'intérieur de la bulle de pensée de Pusheen";
  ecranTamagoshi.appendChild(pusheenHungry);
  ecranTamagoshi.appendChild(bubbleFood);
  ecranTamagoshi.appendChild(pusheenDonut);

  rules.style.display = "block";
  bubbleFood.style.display = "block";

  pusheenHungry.style.display = "block";
  flyingDonut.style.display = "block";

  if (bubbleFood.style.backgroundColor === "yellow") {
    bubbleFood.style.backgroundColor = "";
  }
};

buttonFeed.addEventListener("click", function() {
  stopTimerLoosingLife();
  if (pusheenNeedsFood === true) {
    pusheenNeedsFood = false;
    feedingFunction();
  }
});

/* 
**
**
*
// CREATION DE L'EVENEMENT 2) CALINER PUSHEEN : 
**
**
*/

var huggingFunction = function() {
  textSpan.style.display = "none";
  $("#ecranTamagoshi")
    .removeClass("alert")
    .addClass("regularEcranTamagoshi");

  rules.textContent =
    "Vous devez brosser Pusheen avec le peigne pendant plus de 4 secondes, maintenez bien le click de la souris enfoncé pendant 4 secondes sans interruption !";
  pusheenRolling.style.cursor = "url('pusheen/brush.png'), auto";
  pusheenRolling.style.display = "block";
  spriteChat.style.display = "none";
};

ecranTamagoshi.appendChild(pusheenRolling);

buttonHug.addEventListener("click", function() {
  stopTimerLoosingLife();
  if (pusheenNeedsAhug === true) {
    pusheenNeedsAhug = false;
    huggingFunction();
    ecranTamagoshi.appendChild(pusheenHug);
  }
});

// FONCTION POUR CALCULER LE TEMPS OU LE CLIC EST MAINTENU -sur Pusheen- POUR GAGNER LE POINT

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
    counterOfPoints++;
    rules.textContent =
      "Promenez Pusheen.. Il a besoin de se dégourdir les pattes!";

    pusheenRolling.style.display = "none";
    pusheenHug.style.display = "block";
    if (counterOfPoints >= 10) {
      youWin();
      screenOfNeeds(
        "Vous avez gagné !! Allez jeter un oeil sur les compétences que vous avez débloqué... Vous en apprendrez surement plus sur la personne à l'initiative de ce jeu !",
        "alert"
      );
      pusheenHug.style.display = "none";
      textSpan.style.display = "block";
    } else {
      setTimeout(function() {
        generateRandomNeed();
        arrayOfLogos[counterOfPoints].style.display = "inline-block";
        buttonHug.style.backgroundColor = "rgba(221, 17, 85, 1)";
        pusheenHug.style.display = "none";
        spriteChat.style.display = "block";
      }, 3000);
    }
  }
});

/* 
**
**
*
// CREATION DE L'EVENEMENT 3) JOUER AVEC PUSHEEN : 
**
**
*/

//fonction pour vérifier si tous les pusheens sont en opacité 1 :
var verificationOpacity = function() {
  if (
    pusheenBalle.style.opacity >= "1" &&
    pusheenBad.style.opacity >= "1" &&
    pusheenUnicorn.style.opacity >= "1" &&
    pusheenVideoGame.style.opacity >= "1"
  ) {
    pusheenUnicorn.style.display = "none";
    pusheenBalle.style.display = "none";
    pusheenBad.style.display = "none";
    pusheenVideoGame.style.display = "none";
    pusheenWink.style.display = "block";
    setTimeout(function() {
      spriteChat.style.display = "block";
      pusheenWink.style.display = "none";
      counterOfPoints += 2;
      if (counterOfPoints >= 10) {
        youWin();
        screenOfNeeds(
          "Vous avez gagné !! Allez jeter un oeil sur les compétences que vous avez débloqué... Vous en apprendrez surement plus sur la personne à l'initiative de ce jeu !",
          "alert"
        );
        textSpan.style.display = "block";
      } else {
        arrayOfLogos[counterOfPoints].style.display = "inline-block";
        arrayOfLogos[counterOfPoints - 1].style.display = "inline-block";
        rules.textContent =
          "Promenez Pusheen.. Il a besoin de se dégourdir les pattes!";
        generateRandomNeed();
        opacityPusheenBad = 0.1;
        opacityPusheenBalle = 0.1;
        opacityPusheenUnicorn = 0.1;
        opacityPusheenVideoGame = 0.1;
        buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
      }
    }, 2000);
  }
};

ecranTamagoshi.appendChild(pusheenUnicorn);
ecranTamagoshi.appendChild(pusheenBalle);
ecranTamagoshi.appendChild(pusheenBad);
ecranTamagoshi.appendChild(pusheenVideoGame);

var buttonPlay = document.getElementById("buttonPlay");

var playingFunction = function() {
  textSpan.style.display = "none";
  $("#ecranTamagoshi")
    .removeClass("alert")
    .addClass("regularEcranTamagoshi");
  spriteChat.style.display = "none";
  pusheenBad.style.display = "inline-block";
  pusheenBad.style.opacity = 0.1;
  pusheenBalle.style.display = "inline-block";
  pusheenBalle.style.opacity = 0.1;
  pusheenUnicorn.style.display = "inline-block";
  pusheenUnicorn.style.opacity = 0.1;
  pusheenVideoGame.style.display = "inline-block";
  pusheenVideoGame.style.opacity = 0.1;
  rules.textContent =
    "Pour faire jouer Pusheen, vous allez devoir trouver un moyen de faire complétement apparaitre les 4 petites images ... indice: tout se faire avec la souris! ";
};

buttonPlay.addEventListener("click", function() {
  stopTimerLoosingLife();
  if (pusheenNeedsToPlay === true) {
    pusheenNeedsToPlay = false;
    playingFunction();
  }
});

var opacityPusheenBad = 0.1;
pusheenBad.addEventListener("mouseover", function mouse() {
  if (pusheenBad.style.opacity < 1) {
    opacityPusheenBad += 0.1;
  }
  pusheenBad.style.opacity = opacityPusheenBad;
  verificationOpacity();
});

var opacityPusheenBalle = 0.1;
pusheenBalle.addEventListener("click", function() {
  if (pusheenBalle.style.opacity < 1) {
    opacityPusheenBalle += 0.1;
  }
  pusheenBalle.style.opacity = opacityPusheenBalle;
  verificationOpacity();
});

var opacityPusheenVideoGame = 0.1;
pusheenVideoGame.addEventListener("mousemove", function() {
  if (pusheenVideoGame.style.opacity < 1) {
    opacityPusheenVideoGame += 0.01;
  }
  pusheenVideoGame.style.opacity = opacityPusheenVideoGame;
  verificationOpacity();
});

var opacityPusheenUnicorn = 0.1;
pusheenUnicorn.addEventListener("mouseover", function() {
  if (pusheenUnicorn.style.opacity < 1) {
    opacityPusheenUnicorn += 0.1;
  }
  pusheenUnicorn.style.opacity = opacityPusheenUnicorn;
  verificationOpacity();
});

//  GESTION DE L'EVENEMENT COMPETENCES \\
// détail de chacun des logos au hover  \\

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

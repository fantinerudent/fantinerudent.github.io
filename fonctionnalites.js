/**
 * * Fonctionnalité 1 = nourrir Pusheen ==>
 * *
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

/**
 * * Fonctionnalité 2 = carresser Pusheen ==>
 * *
 */

var huggingFunction = function() {
  textSpan.style.display = "none";
  $("#ecranTamagoshi")
    .removeClass("alert")
    .addClass("regularEcranTamagoshi");

  rules.textContent =
    "Vous devez brosser Pusheen avec le peigne pendant plus de 4 secondes, maintenez bien le click !";
  pusheenRolling.style.cursor = "url('pusheen/brush.png'), auto";
  pusheenRolling.style.display = "block";
  spriteChat.style.display = "none";
};

/**
 * * Fonctionnalité 3 = jouer avec Pusheen ==>
 * *
 */

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
    "Pour faire jouer Pusheen, vous allez devoir trouver un moyen de faire complétement apparaitre les 4 petites images ... Quand c'est fini : cliquez sur ce bouton ==> ";
  var buttonToAdd = document.createElement("button");
  buttonToAdd.textContent = "clique";

  rules.appendChild(buttonToAdd);
  buttonToAdd.addEventListener("click", function() {
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
      spriteChat.style.display = "block";
      compteurDePoints++;
      if (compteurDePoints > 10) {
        youWin();
        screenOfNeeds(
          "Vous avez gagné !! Allez jeter un oeil sur les compétences que vous avez débloqué... Vous en apprendrez surement plus sur la personne à l'initiative de ce jeu !",
          "alert"
        );
        textSpan.style.display = "block";
      } else {
        tableauxLogos[compteurDePoints].style.display = "initial";
        rules.textContent =
          "Promenez Pusheen.. Il a besoin de se dégourdir les pattes!";
        playingButton = false;
        generateAleatoireDeBesoin();
        opacityPusheenBad = 0.1;
        opacityPusheenBalle = 0.1;
        opacityPusheenUnicorn = 0.1;
        opacityPusheenVideoGame = 0.1;
        buttonPlay.style.backgroundColor = "rgba(221, 17, 85, 1)";
      }
    }
  });
};

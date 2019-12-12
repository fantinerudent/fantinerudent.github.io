/**
 * Creation d'un evenemenet au survol sur les logos qui s'affichent pour dévoiler.
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

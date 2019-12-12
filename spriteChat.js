var spriteChat = document.getElementById("contenu");

/***
 *  SPRITE Chaton
 //  *
 */

window.addEventListener("load", function() {
    spriteChat.style.display = "block";
    var masqueX = masque.offsetLeft;
    var masqueY = masque.offsetTop;
    var spriteChatX = spriteChat.offsetLeft;
    var spriteChatY = spriteChat.offsetTop;
  
    // listener event quand user presse touche
    window.onkeydown = function(event) {
      var code = event.keyCode;
      switch (code) {
        case 37:
          if (masqueX >= -15) {
            masqueX -= 4;
            masque.style.left = masqueX + "px";
            if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
              spriteChat.style.top = "-100px";
              spriteChat.style.left = "-300px";
            } else {
              spriteChat.style.top = "0px";
              spriteChat.style.left = "-300px";
            }
          } else {
            spriteChat.style.left = "-210px";
            spriteChat.style.top = "-198px";
          }
          break;
        case 38:
          if (masqueY >= -15) {
            masqueY -= 4;
            masque.style.top = masqueY + "px";
            if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
              spriteChat.style.top = "-100px";
              spriteChat.style.left = "0px";
            } else {
              spriteChat.style.top = "0px";
              spriteChat.style.left = "0px";
            }
          } else {
            spriteChat.style.left = "-210px";
            spriteChat.style.top = "-198px";
          }
  
          break;
        case 39:
          if (masqueX <= 180) {
            masqueX += 4;
            masque.style.left = masqueX + "px";
            if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
              spriteChat.style.top = "-100px";
              spriteChat.style.left = "-105px";
            } else {
              spriteChat.style.top = "0px";
              spriteChat.style.left = "-103px";
            }
          } else {
            spriteChat.style.left = "-210px";
            spriteChat.style.top = "-198px";
          }
          break;
  
        case 40:
          if (masqueY <= 140) {
            masqueY += 4;
            masque.style.top = masqueY + "px";
            if (spriteChat.style.top == "0px" || spriteChat.style.top == "") {
              spriteChat.style.top = "-102px";
              spriteChat.style.left = "-200px";
            } else {
              spriteChat.style.top = "0px";
              spriteChat.style.left = "-198px";
            }
          } else {
            spriteChat.style.left = "-210px";
            spriteChat.style.top = "-198px";
          }
  
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
        //
      }
    };
  });
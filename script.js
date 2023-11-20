const resetGame = document.querySelector("[data-resetGame]");
const container = document.querySelector(".container");
const game = document.querySelector(".game");

let emojis = [
     "/images/happy-pumpkin.webp",
     "/images/happy-pumpkin.webp",
     "/images/halloween-ghost.webp",
     "/images/halloween-ghost.webp",
     "/images/halloween.png",
     "/images/halloween.png",
     "/images/spider-web.png",
     "/images/spider-web.png",
     "/images/spider2.png",
     "/images/spider2.png",
];

let shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
     let box = document.createElement("div");
     let img = document.createElement("img");
     box.className = "item";
     img.src = shuf_emojis[i];
     img.setAttribute("width", "200px");
     img.setAttribute("height", "200px");
     box.appendChild(img);
     box.addEventListener("click", matchingPhoto); // for mouse
     box.addEventListener("touchstart", matchingPhoto); // for touchscreen only

     function matchingPhoto() {
          this.classList.add("boxOpen");
          setTimeout(match, 1000);
     }

     function match() {
          let boxOpen = document.querySelectorAll(".boxOpen");
          if (boxOpen.length > 1) {
               if (boxOpen[0].innerHTML == boxOpen[1].innerHTML) {
                    boxOpen[0].classList.add("boxMatch");
                    boxOpen[1].classList.add("boxMatch");
                    boxOpen[1].classList.remove("boxOpen");
                    boxOpen[0].classList.remove("boxOpen");
                    let boxMatch = document.querySelectorAll(".boxMatch");
                    if (boxMatch.length == emojis.length) {
                         setTimeout(() => {
                              container.classList.add("winning");
                              container.innerHTML = "You Win";
                         }, 1000);
                    }
               } else {
                    boxOpen[1].classList.remove("boxOpen");
                    boxOpen[0].classList.remove("boxOpen");
               }
          }
     }
     document.querySelector(".game").appendChild(box);
}

resetGame.addEventListener("click", () => document.location.reload());

let emojis = [
     "🤩",
     "🤩",
     "💕",
     "💕",
     "🤐",
     "🤐",
     "🤣",
     "🤣",
     "😎",
     "😎",
     "😀",
     "😀",
     "😡",
     "😡",
     "🤔",
     "🤔",
];

let shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
     let box = document.createElement("div");
     box.className = "item";
     box.innerHTML = shuf_emojis[i];
     box.onclick = function () {
          this.classList.add("boxOpen");
          setTimeout(() => {
               let boxOpen = document.querySelectorAll(".boxOpen");
               if (boxOpen.length > 1) {
                    if (boxOpen[0].innerHTML == boxOpen[1].innerHTML) {
                         boxOpen[0].classList.add("boxMatch");
                         boxOpen[1].classList.add("boxMatch");
                         boxOpen[1].classList.remove("boxOpen");
                         boxOpen[0].classList.remove("boxOpen");
                         let boxMatch = document.querySelectorAll(".boxMatch");
                         if (boxMatch.length == emojis.length) {
                              alert("you win");
                         }
                    } else {
                         boxOpen[1].classList.remove("boxOpen");
                         boxOpen[0].classList.remove("boxOpen");
                    }
               }
          }, 1000);
     };
     document.querySelector(".game").appendChild(box);
}

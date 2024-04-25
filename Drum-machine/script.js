const display = document.getElementById("display");
const control = document.querySelectorAll(".drum-pad");
const playControlAudio = (li) => {
    display.innerText = li.innerText;
    li.play();
}

Array.from(control).forEach(li => {
    li.addEventListener("click", () => {
       playControlAudio(li.children[0]);
    })
    li.addEventListener("mouseout", () => {display.innerText = ""})
    document.addEventListener("keydown", (event) => {
       if(event.key.toUpperCase() === li.innerText) {
          playControlAudio(li.children[0]);
       }
    })
})







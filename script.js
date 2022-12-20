const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript!";
document.querySelector("body").appendChild(h2);

const audio = new Audio("audio/bianca_pronunciation.mp3");
const input = document.querySelector("button");

input.addEventListener("click", function() {
    audio.play();
});
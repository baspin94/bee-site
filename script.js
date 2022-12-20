const audio = new Audio("audio/bianca_pronunciation.mp3");
const input = document.querySelector("button");

input.addEventListener("click", function() {
    audio.play();
});

const daisy = document.getElementById("Daisy");
const dolly = document.getElementById("Dolly");

daisy.addEventListener("click", function(){
    alert("Daisy: 'HAI! Thank you for the boop! Here, have some smoochies!'");
});

dolly.addEventListener("click", function() {
    alert("Dolly: 'Ugh, go away. I'm not interested in boops, only food.'");
});
const helloButton = document.querySelector(".contact button");
helloButton.addEventListener("click", function () {
    alert("Hey! Welcome to VibeVault!");
});
const themeButton = document.getElementById("themeBtn");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
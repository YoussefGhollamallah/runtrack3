let bouton = document.querySelector("#button");
let compteur = document.querySelector("#compteur")

parseInt(compteur);

compteur.innerHTML = 0

bouton.addEventListener("click", () => {
    compteur.innerHTML++
})
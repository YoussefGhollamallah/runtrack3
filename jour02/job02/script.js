let bouton = document.getElementById("button");
let citation = document.getElementById("citation");


function showHide() {
    if (citation.innerHTML === "") {
       citation.innerHTML = "L'important n'est pas la chute, mais l'aterrissage.";
    } else {
        citation.innerHTML = ""
    }

}

bouton.addEventListener("click",showHide)
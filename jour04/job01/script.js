let btn = document.getElementById("button");
let expression = document.querySelector("#expression")

const url = "expression.txt";

fetch(url)
.then(r => r.text())
.then(text => {
    btn.addEventListener("click", ()=> {
        expression.textContent = text
    })
})
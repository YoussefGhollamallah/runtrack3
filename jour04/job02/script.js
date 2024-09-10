let message = document.getElementById("message");


const url = "fichier.json";

function jsonValueKey(json, val) {
    fetch(json)
    .then(response => response.json())
    .then(value => {
            return message.textContent = value[val]
        
    })
    .catch(error => message.textContent = "Erreur : " + error);
}

jsonValueKey(url, "city")
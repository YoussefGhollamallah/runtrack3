document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.querySelector("form");
    const urlPokemon = "pokemon.json";
    let message = document.querySelector("#message");
    const idPokemon = document.querySelector("#id");
    const nomPokemon = document.querySelector("#nom");
    const typePokemon = document.querySelector("#type"); // Ajout du champ type

    function getPokemonId(event) {
        event.preventDefault(); 

        const pokemonId = idPokemon.value;
        const pokemonNom = nomPokemon.value;
        const pokemonType = typePokemon.value; // Récupère la valeur du champ type

        // Vérifier si aucun champ n'est renseigné
        if (!pokemonId && !pokemonNom && !pokemonType) {
            message.style.color = "red";
            message.textContent = "Veuillez entrer un identifiant, un nom ou un type de Pokémon.";
            return;
        }

        // Recherche dans le fichier JSON
        fetch(urlPokemon)
            .then(response => response.json())
            .then(data => {
                let found = false;
                let results = [];

                // Recherche par ID
                if (pokemonId && data[pokemonId - 1]) { // Ajuste l'indice si nécessaire
                    message.style.color = "green";
                    message.innerHTML = `Pokémon trouvé : <br> Name : ${data[pokemonId - 1].name.french} <br> 
                    Type : ${data[pokemonId - 1].type.join(", ")}`;
                    found = true;
                }

                // Recherche par nom si l'ID n'a rien donné
                if (!found && pokemonNom) {
                    const pokemon = Object.values(data).find(poke => poke.name.french.toLowerCase() === pokemonNom.toLowerCase());
                    if (pokemon) {
                        message.style.color = "green";
                        message.innerHTML = `Pokémon trouvé : <br> Name : ${pokemon.name.french} <br> 
                        Type : ${pokemon.type.join(", ")}`;
                        found = true;
                    }
                }

                // Recherche par type si l'ID et le nom n'ont rien donné
                if (!found && pokemonType) {
                    results = Object.values(data).filter(poke => poke.type.includes(pokemonType));

                    if (results.length > 0) {
                        message.style.color = "green";
                        message.innerHTML = `Pokémons trouvés pour le type ${pokemonType} :<br>`;
                        results.forEach(poke => {
                            message.innerHTML += `Name : ${poke.name.french} - Type : ${poke.type.join(", ")}<br>`;
                        });
                        found = true;
                    }
                }

                if (!found) {
                    message.style.color = "red";
                    message.textContent = "Aucun Pokémon trouvé.";
                }
            })
            .catch(error => {
                message.style.color = "red";
                message.textContent = "Erreur lors de la récupération des données : " + error;
                console.error(error);
            });
    }

    myForm.addEventListener("submit", getPokemonId);
});


const btn = document.getElementById("btn")

function loadUsers() {

    fetch('users.php')  // Effectue une requête GET vers users.php
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des utilisateurs');
            }
            return response.json();  // Convertit la réponse en JSON
        })
        .then(users => {
            const tableBody = document.getElementById('usersTableBody');
            tableBody.innerHTML = '';  

            users.forEach(function(user) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tableBody.appendChild(row);  // Ajoute la ligne au tableau
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

btn.addEventListener("click", loadUsers)

// Charger les utilisateurs lorsque la page est entièrement chargée
document.addEventListener('DOMContentLoaded', loadUsers);

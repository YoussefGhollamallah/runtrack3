<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Liste des utilisateurs</title>
</head>
<body>

    <header>
        <h1>Liste des utilisateurs</h1>
    </header>
    <main>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody id="usersTableBody">
                <!-- Les utilisateurs seront insérés ici -->
            </tbody>
        </table>

        <button onclick="loadUsers()">Update</button>
    </main>
    <script src="script.js"></script>
</body>
</html>
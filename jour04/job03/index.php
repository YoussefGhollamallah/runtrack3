<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1> Fetch Data Pokémon </h1>
    </header>

    <main>
        <section>
            <p id="message"></p>
        </section>
        <form action="#" method="post">
            <fieldset>
                <legend>Tri Pokémon</legend>
                
                <label for="id">ID:</label>
                <input type="text" id="id" name="id"><br><br>
                
                <label for="nom">Nom:</label>
                <input type="text" id="nom" name="nom"><br><br>
                
                <label for="type">Type:</label>
                <select id="type" name="type">
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Ground">Ground</option>
                <option value="Electric">Electric</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Poison">Poison</option>
                <option value="Flying">Flying</option>
                </select><br><br>
                
                <button type="submit">Filtrer</button>
            </fieldset>
        </form>

    </main>

    <footer>
        <p>©️ copyright - tous droit reservé à moi et non à toi 😁</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
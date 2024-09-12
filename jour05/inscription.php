<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Valider et nettoyer les entrées utilisateur
    $nom = htmlspecialchars(trim($_POST['nom'])); // Supprime les espaces et protège contre XSS
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); // Nettoyage de l'email
    $password = $_POST['password'];


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Adresse email invalide';
    }

    if (strlen($password) < 8) {
        $error = 'Le mot de passe doit contenir au moins 8 caractères';
    }

    if (!isset($error)) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare('INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)');
        $stmt->execute([$nom, $prenom, $email, $hashedPassword]);

        // Redirection après inscription réussie
        header('Location: connexion.php');
        exit;
    }
}
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Inscription</title>
</head>
<body>
    <header>
        <h1><a class="text-c-white" href="index.php">Home</a></h1>
        <nav>
            <ul>
                <li class="navItems"><a class="text-c-white" href="inscription.php">Inscription</a></li>
                <li class="navItems"><a class="text-c-white" href="connexion.php">Connexion</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="mainInscript">
        <div class="form-container">
            <h2>Inscription</h2>
            <form id="inscriptionForm" method="POST">
                <div class="form-group">
                    <label for="nom">Nom:</label>
                    <input type="text" name="nom" id="nom">
                    <span class="error" id="nomError"></span>
                </div>

                <div class="form-group">
                    <label for="prenom">Prénom:</label>
                    <input type="text" name="prenom" id="prenom">
                    <span class="error" id="prenomError"></span>
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email">
                    <span class="error" id="emailError"></span>
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe:</label>
                    <input type="password" name="password" id="password">
                    <span class="error" id="passwordError"></span>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirmez le mot de passe:</label>
                    <input type="password" id="confirmPassword">
                    <span class="error" id="confirmPasswordError"></span>
                </div>

                <div class="form-group">
                    <input type="submit" value="S'inscrire">
                </div>
            </form>
        </div>
    </main>
    <script src="inscription.js"></script>
</body>
</html>

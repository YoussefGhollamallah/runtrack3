<?php
require_once 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Valider et nettoyer les données
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    // Préparer la requête pour éviter les injections SQL
    $stmt = $pdo->prepare('SELECT * FROM utilisateurs WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    // Vérification du mot de passe
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['prenom'] = htmlspecialchars($user['prenom']);  // Échapper les caractères spéciaux
        header('Location: index.php');
        exit;
    } else {
        $error = 'Email ou mot de passe incorrect';
    }
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Connexion</title>
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
            <h2>Connexion</h2>
            <form method="POST">
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
                    <input type="submit" value="Se connecter">
                </div>
            </form>

            <?php if (isset($error)): ?>
                <p class="error"><?= htmlspecialchars($error) ?></p>
            <?php endif; ?>
        </div>
    </main>

</body>
</html>

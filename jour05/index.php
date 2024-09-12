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
        <h1><a class="text-c-white" href="index.php">Home</a></h1>
        <nav>
            <ul>
                <li class="navItems"><a class="text-c-white" href="inscription.php">Inscription</a></li>
                <li class="navItems"><a class="text-c-white" href="connexion.php">Connexion</a></li>
            </ul>
        </nav>
    </header>
    <main id="mainIndex">
    <?php
        
        session_start();

        if (isset($_SESSION['prenom'])) {
            $user = $_SESSION['prenom'];
            echo "Bonjour $user";
        } else {
            echo '<ul><li class="navItems"><a class="text-c-white" href="connexion.php">Connexion</a></li></ul> | <ul><li class="navItems"><a class="text-c-white" href="inscription.php">Inscription</a></li></ul>';
        }

        ?>
    </main>
</body>
</html>
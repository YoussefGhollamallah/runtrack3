document.getElementById('inscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let errors = false;

    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (nom.value === '') {
        document.getElementById('nomError').innerText = "Veuillez entrer votre nom";
        errors = true;
    } else {
        document.getElementById('nomError').innerText = '';
    }

    if (prenom.value === '') {
        document.getElementById('prenomError').innerText = "Veuillez entrer votre prénom";
        errors = true;
    } else {
        document.getElementById('prenomError').innerText = '';
    }

    if (!validateEmail(email.value)) {
        document.getElementById('emailError').innerText = "Veuillez entrer un email valide";
        errors = true;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (password.value.length < 8) {
        document.getElementById('passwordError').innerText = "Le mot de passe doit contenir au moins 8 caractères";
        document.getElementById("passwordError").style.color = "red"
        errors = true;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').innerText = "Les mots de passe ne correspondent pas";
        errors = true;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    if (!errors) {
        this.submit();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

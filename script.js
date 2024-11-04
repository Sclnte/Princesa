const phrases = [
    "Eres mi sol.",
    "Cada momento contigo es un regalo.",
    "Tu sonrisita linda ilumina mi vida.",
    "Gracias por venir a mi vida.",
    "Me encantan tus hermosos ojos.",
    "💖💖💖",
    "💗💗💗",
    "Coincidir con usted es lo mejor que me ha pasado.",
    "Usted mi mujer, mi esposa, mi complemento, mi todo.",
    "Usted tiene todo lo que yo necesito.S",
    "Por nada del mundo quiero perderla.",
    "Quiero que seamos los dos, y solo los dos."
];

function showRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").innerText = phrases[randomIndex];
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Al cargar la página, mostrar una frase aleatoria
window.onload = showRandomPhrase;

// Función para crear un corazón
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.animationDuration = 5 + Math.random() * 3 + 's'; // Duración aleatoria de caída

    document.getElementById('hearts-container').appendChild(heart);

    // Elimina el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Genera corazones en intervalos
setInterval(createHeart, 500);

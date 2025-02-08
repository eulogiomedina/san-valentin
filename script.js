let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

let clickCount = 0;
let messages = [
   "¡Di sí, por favor 🥹!",
    "¡Piensalo de nuevo 🤞!",
    "¡Vamos, atrévete a decir que sí 😉!",
    "¡No tengas dudas, te hará sonreir ☺️!"
];

noBtn.addEventListener("click", function() {
    // Cambiar el texto del botón "No" según el número de clics
    if (clickCount < messages.length) {
        noBtn.textContent = messages[clickCount];
        clickCount++;
    }

    // Aumentar el tamaño del botón "Sí"
    let currentWidth = parseInt(window.getComputedStyle(yesBtn).width);
    yesBtn.style.width = (currentWidth + 20) + "px"; // Aumentar el ancho de 20px por clic
});

// Redirigir al hacer clic en "Sí"
yesBtn.addEventListener("click", function() {
    window.location.href = "gracias.html";  // Redirigir a la página de gracias
});

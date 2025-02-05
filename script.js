const messages = [
    "Seguritaa? :(",
    "deveritas deveritas?? :c",
    "estas de acuerdoooo?",
    "Ahhh cariñoo plss",
    "Puedes pensarlo pofavo?",
    "si dices que no, estaré tite unu",
    "nououu mood tite unu",
    "ya lleevaammme diosito unu.",
    "Okioki, ya no preguntaré :(",
    "avedaaaa, ntc cariñooo, dí que síiiii ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleContinueClick() {
    window.location.href = "carrussel.html";
}

window.onload = function () {
    var audio = document.getElementById("background-audio");
    var promise = audio.play();

    if (promise !== undefined) {
        promise.catch(function (error) {
            // Autoplay no permitido
            alert("Haz clic en la página para reproducir la música.");
            document.addEventListener('click', function () {
                audio.play();
            });
        });
    }
};
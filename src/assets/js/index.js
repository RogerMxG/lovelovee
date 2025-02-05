const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const messageBox = document.querySelector("#message");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
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

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 500);


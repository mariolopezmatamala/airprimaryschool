
document.addEventListener("DOMContentLoaded", function () {
    const h6Elements = document.querySelectorAll(".estadisticas-particular h6");

    h6Elements.forEach((h6) => {
        const targetNumber = parseInt(h6.textContent);
        animateNumber(h6, targetNumber, 1500); 
    });
});

function animateNumber(element, targetNumber, duration) {
    const startNumber = 0;
    const interval = 10; // milliseconds
    const steps = Math.ceil(duration / interval);
    const increment = (targetNumber - startNumber) / steps;

    let currentNumber = startNumber;
    const timer = setInterval(function () {
        currentNumber += increment;
        element.textContent = Math.round(currentNumber);

        if (currentNumber >= targetNumber) {
            clearInterval(timer);
        }
    }, interval);
}

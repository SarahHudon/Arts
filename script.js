// script.js
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service-box");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.7)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.boxShadow = "none";
        });

        service.addEventListener("click", () => {
            alert("Vous avez sélectionné " + service.querySelector("h2").innerText);
        });
    });
});

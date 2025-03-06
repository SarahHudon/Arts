// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé avec succès !");

    const services = document.querySelectorAll(".service-box");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.5)";
        });

        service.addEventListener("click", () => {
            alert("Vous avez sélectionné " + service.querySelector("h2").innerText);
        });
    });
});

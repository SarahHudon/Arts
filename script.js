// Vérification que le script est bien chargé
console.log("Le script JavaScript est bien chargé !");

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne toutes les boîtes de service
    const services = document.querySelectorAll(".service-box");

    services.forEach(service => {
        // Effet de survol avec ombre lumineuse
        service.addEventListener("mouseenter", () => {
            service.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.5)";
        });
        console.log("SahShine sélectionné !");

    });

    // Appliquer le fond personnalisé pour le service SahShine
    const sahShineService = document.getElementById('service-sahshine');
    if (sahShineService) {
        sahShineService.addEventListener('click', () => {
            document.body.classList.add('sahshine-background');
        });
    }
});

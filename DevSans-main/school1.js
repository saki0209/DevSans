document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    // Initialize AOS animation library (only if AOS exists)
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out-sine',
            once: true
        });
    }

    // Smooth scroll for navigation links
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = this.getAttribute("href");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    // Get the scroll-to-top button (only if it exists)
    const mybutton = document.getElementById("scrollToTopBtn");
    
    if (mybutton) {
        window.onscroll = function () { scrollFunction(); };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        mybutton.addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

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

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    // Get the scroll-to-top button
    const mybutton = document.getElementById("scrollToTopBtn");
    
    // Check if the button exists before adding event listeners
    if (mybutton) {
        window.onscroll = function() { scrollFunction(); };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks the button, scroll to the top
        mybutton.addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    } else {
        console.warn("scrollToTopBtn not found.");
    }

    // Scroll buttons for horizontal scrolling
    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");
    const scrollContainer = document.getElementById("scrollContainer");

    if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
        scrollLeftBtn.addEventListener("click", function () {
            scrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener("click", function () {
            scrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
        });
    } else {
        console.warn("Scroll buttons or container not found.");
    }

    // Initialize AOS animation library
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out-sine',
            once: true
        });
    } else {
        console.warn("AOS library not found.");
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

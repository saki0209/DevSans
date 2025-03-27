
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    //Get the button
    var mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    document.addEventListener("DOMContentLoaded", function () {
      const scrollLeftBtn = document.getElementById("scrollLeftBtn");
      const scrollRightBtn = document.getElementById("scrollRightBtn");

      function scrollLeft() {
          document.getElementById('scrollContainer').scrollBy({
              left: -100,
              behavior: 'smooth'
          });
      }

      function scrollRight() {
          document.getElementById('scrollContainer').scrollBy({
              left: 100,
              behavior: 'smooth'
          });
      }

      scrollLeftBtn.addEventListener("click", scrollLeft);
      scrollRightBtn.addEventListener("click", scrollRight);
  });
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    AOS.init({
        duration: 1500, // Increase the duration in milliseconds
        easing: 'ease-in-out-sine', // Use a different easing function for smoother animation
        once: true // Ensure the animation happens only once
      });
      
    mybutton.addEventListener("click", topFunction);

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
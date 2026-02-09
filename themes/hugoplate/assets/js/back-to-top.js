document.addEventListener("DOMContentLoaded", function () {
      const backToTopButton = document.getElementById("back-to-top");

      // Show the button when user scrolls down
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      });

      // Smooth scroll to top when button is clicked
      backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    });
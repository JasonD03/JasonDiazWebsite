const design_card_buttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

design_card_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_buttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Optional: Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            if (dropdownMenu.style.display === "block") {
                dropdownMenu.style.display = "none";
            }
        }
    });
});
function scrollToSection(sectionId, event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


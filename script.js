document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.toggle_btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open');
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('.navbar a, .dropdown-menu a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

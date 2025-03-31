// Detecta o evento de rolagem
window.onscroll = function () {
    var scrollPosition = window.scrollY;

    var navbar = document.querySelector('nav');
    var searchContainer = document.querySelector('.search-container');

    if (scrollPosition > 100) {
        navbar.classList.add('fixed-top');
        searchContainer.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
        searchContainer.classList.remove('fixed-top');
    }
};
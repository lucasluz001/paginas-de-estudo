const menu = document.querySelector(".nav-link")
const menuHamburguer = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener('click', () => {
    if (menu.style.transform === 'translateX(0%)') {
        menu.style.transform = 'translateX(100%)'; // Esconde o menu
    } else {
        menu.style.transform = 'translateX(0%)'; // Mostra o menu
    }
});
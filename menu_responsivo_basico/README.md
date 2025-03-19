# Menu Hamburguer básico
    
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Sobre
Um site simples, apenas com um menu responsivo. Seu propósito foi para estudar o funcionamento do menu hamburguer, conceito no qual é utilizado técnicas de Javascript e CSS. Diferente do repositório [menu_responsivo](https://github.com/lucasluz001/paginas-de-estudo/tree/main/menu_responsivo), o menu responsivo basico é feito apenas para estudar o funcionamento do evento de abrir o menu lateral e escondê-lo, conceito aplicado sobre o estilo `transform` no arquivo Javascript. Código usado para fazer a função de exibir e esconder o menu:
```
const menu = document.querySelector(".nav-link")
const menuHamburguer = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener('click', () => {
    if (menu.style.transform === 'translateX(0%)') {
        menu.style.transform = 'translateX(100%)'; // Esconde o menu
    } else {
        menu.style.transform = 'translateX(0%)'; // Mostra o menu
    }
});
```
## Instruções de uso
Acesse o link para visualizar o site:
[https://lucasluz001.github.io/paginas-de-estudo/menu_responsivo_basico/index.html](https://lucasluz001.github.io/paginas-de-estudo/menu_responsivo_basico/index.html)

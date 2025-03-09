function clickMenu(){
if (itens.style.display == 'block' && itens2.style.display =='block' ){
itens.style.display = 'none'
itens2.style.display = 'none'
} else {
itens.style.display = 'block'
itens2.style.display = 'block'
}
}

function mudouTamanho(){
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
        itens2.style.display = 'block'
    } else {
        itens.style.display = 'none'
        itens2.style.display = 'none'
    }
}
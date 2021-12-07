document.addEventListener('DOMContentLoaded', function () {
    menu = document.querySelector('#menu');
    img_menu_abrir = document.querySelector('.botao_menu_abrir');
    img_menu_fechar = document.querySelector('.botao_menu_fechar');
    aberto = false
    img_menu_abrir.addEventListener('click', function(event) {
        menu.id = 'anim_abrir'
    })
    img_menu_fechar.addEventListener('click', function(event) {
        menu.id = 'anim_fechar'
    })
    
})
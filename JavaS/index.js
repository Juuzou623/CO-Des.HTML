document.addEventListener('DOMContentLoaded', function() {
        tarefas=document.querySelector('.popup');
        imageMode= document.querySelector('.botao_taf');

        imageMode.addEventListener('click', function(event) {
            tarefas.style.visibility = "visible"
        })
});
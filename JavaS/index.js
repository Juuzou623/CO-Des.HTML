document.addEventListener('DOMContentLoaded', function () {
        tarefas=document.querySelector('.popup_tarefa');
        imageMode= document.querySelector('.botao_taf');
        pagina_anterior= document.querySelector('body')

        visivel = true

        imageMode.addEventListener('click', function(event) {
            if (visivel==false){
                tarefas.style.visibility = "visible"
                visivel=true
            }
            else{
                tarefas.style.visibility = "hidden"
                visivel=false
            }
            
        })
});
document.addEventListener('DOMContentLoaded', function () {
        tarefas=document.querySelector('.popup_tarefa');
        imageMode= document.querySelector('.botao_taf');
        pagina_anterior= document.querySelector('main')

        visivel = true

        imageMode.addEventListener('click', function(event) {
            if (visivel==false){
                tarefas.style.visibility = "visible"
                visivel=true
                pagina_anterior.style.background = "rgba(0,0,0,0.5)"
            }
            else{
                tarefas.style.visibility = "hidden"
                visivel=false
            }
            
        })
});
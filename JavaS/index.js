document.addEventListener('DOMContentLoaded', function () {
        tarefas=document.querySelector('.popup_tarefa');
        imageMode= document.querySelector('.botao_taf');
        const body = document.body;

        visivel = true

        imageMode.addEventListener('click', function(event) {
            if (visivel==false){
                tarefas.style.visibility = "visible"
                body.style.background = "rgba(0,0,0,0.7)";
                visivel=true
            }
            else{
                tarefas.style.visibility = "hidden"
                body.style.background = "rgba(255,255,255,1)";
                visivel=false
            }
            
        })
});
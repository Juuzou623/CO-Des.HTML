document.addEventListener('DOMContentLoaded', function () {
        tarefas=document.querySelector('.popup_tarefa');
        imageMode= document.querySelector('.botao_taf');
        const body = document.body;

        visivel = false

        imageMode.addEventListener('click', function(event) {
            if (visivel==false){
                tarefas.style.visibility = "visible"
                visivel=true
                var escuridao = document.createElement("div");
                escuridao.id = "escuridao"
                body.appendChild(escuridao);
            }
            else{
                tarefas.style.visibility = "hidden"
                visivel=false
                body.removeChild(escuridao);

            }
            
        })
});
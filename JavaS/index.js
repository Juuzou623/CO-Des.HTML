document.addEventListener('DOMContentLoaded', function () {
        tarefas=document.querySelector('.popup');
        imageMode= document.querySelector('.botao_taf');

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
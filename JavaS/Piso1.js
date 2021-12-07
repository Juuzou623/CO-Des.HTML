document.addEventListener('DOMContentLoaded', function () {
    registrar=document.querySelector('.popup_registro');
    imageMode_Rs_vazias= document.querySelectorAll('.Vaga_vazia');
    const body = document.body;

    regis_visivel = true
    imageMode_Rs_vazias.forEach (imageMode_R_v =>{
    imageMode_R_v.addEventListener('click', function(event) {
            if (regis_visivel==false){
                registrar.style.visibility = "visible"
                body.style.background = "rgba(0,0,0,0.7)";
                regis_visivel=true
                pagina_anterior.style.background = "rgba(0,0,0,0.5)";
            }
            else{
                registrar.style.visibility = "hidden"
                body.style.background = "rgba(255,255,255,1)";
                regis_visivel=false
            }
    })
    })
});
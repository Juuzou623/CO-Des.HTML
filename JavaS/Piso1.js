document.addEventListener('DOMContentLoaded', function () {
    registrar=document.querySelector('.popup_registro');
    imageMode_Rs_vazias= document.querySelectorAll('.Vaga_vazia');
    enviar=document.querySelector('#registrando')

    const body = document.body;

    regis_visivel = false
    var escuridao = document.createElement("div");
    escuridao.id = "escuridao"


    i=-1
    imageMode_Rs_vazias.forEach (imageMode_R_v =>{
    imageMode_R_v.addEventListener('click', function(event) {
        if (regis_visivel==false){
            registrar.style.visibility = "visible"
            body.appendChild(escuridao);
            regis_visivel=true
        }
        else{
            registrar.style.visibility = "hidden"
            body.removeChild(escuridao);
            regis_visivel=false
        }
    })
    })   

    retirada = document.querySelector('.popup_retirada');
    imageMode_Rets_triangulo = document.querySelectorAll('.Vaga_triangulo');
    ret_visivel = false

    imageMode_Rets_triangulo.forEach (imageMode_R_t =>{
        imageMode_R_t.addEventListener('click', function(event) {
            if (ret_visivel==false){
                retirada.style.visibility = "visible"
                ret_visivel=true
                var escuridao = document.createElement("div");
                escuridao.id = "escuridao"
                body.appendChild(escuridao);
            }

            else{
                retirada.style.visibility = "hidden"
                body.removeChild(escuridao);
                ret_visivel=false
            }
        })
    });

        legendaa = document.querySelector('.popup_legenda');
        imageMode_leg=document.querySelector('.botao_leg');
        leg_visivel = false

        imageMode_leg.addEventListener('click', function(event) {
            if (leg_visivel==false){
                legendaa.style.visibility = "visible"
                leg_visivel=true
                var escuridao = document.createElement("div");
                escuridao.id = "escuridao"
                body.appendChild(escuridao);
            }

            else{
                legendaa.style.visibility = "hidden"
                body.removeChild(escuridao);
                leg_visivel=false
            }
    
        }); 

});
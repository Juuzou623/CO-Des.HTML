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
    });

    retirada = document.querySelector('.popup_retirada');
    imageMode_Rets_triangulo = document.querySelectorAll('.Vaga_triangulo');
    ret_visivel = true

    imageMode_Rets_triangulo.forEach (imageMode_R_t =>{
        imageMode_R_t.addEventListener('click', function(event) {

                if (ret_visivel==false){
                    retirada.style.visibility = "visible"
                    body.style.background = "rgba(0,0,0,0.7)";
                    ret_visivel=true
                    pagina_anterior.style.background = "rgba(0,0,0,0.5)";
                }

                else{
                    retirada.style.visibility = "hidden"
                    body.style.background = "rgba(255,255,255,1)";
                    ret_visivel=false
                }
        })
        });

    });

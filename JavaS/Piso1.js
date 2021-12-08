document.addEventListener('DOMContentLoaded', function () {
    registrar=document.querySelector('.popup_registro');
    imageMode_Rs_vazias= document.querySelectorAll('.Vaga_vazia');

    const body = document.body;

    regis_visivel = true

    imageMode_Rs_vazias.forEach (imageMode_R_v =>{
    imageMode_R_v.addEventListener('click', function(event) {
            if (regis_visivel==false){
                registrar.style.visibility = "visible"
                regis_visivel=true
                var escuridao = document.createElement("div");
                escuridao.id = "escuridao"
                body.appendChild(escuridao);
            }
            else{
                registrar.style.visibility = "hidden"
                body.removeChild(escuridao);
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

    });

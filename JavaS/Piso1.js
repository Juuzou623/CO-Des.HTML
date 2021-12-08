document.addEventListener('DOMContentLoaded', function () {
    /*COLOCAR*/
    registrar=document.querySelector('.popup_registro');
    imageMode_Rs_vazias= document.querySelectorAll('.Vaga_vazia');
    enviar=document.querySelector('#registrando');
    body = document.querySelector('body');
    voltar_reg = document.querySelector('.voltar_registro');

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
            voltar_reg.addEventListener('click', function(event) {
                registrar.style.visibility = "hidden"
                body.removeChild(escuridao);
                regis_visivel=false
            })
            enviar.addEventListener('click', function(event) {
                c1=document.querySelector("#campo1").value
                c2=document.querySelector("#campo2").value
                c3=document.querySelector("#campo3").value

                if ((c1 =="") || (c2=="") || (c3=="")){
                    alert("Lacunas vazias! Por favor, complete-as para o veículo ser registrado");
                }
                else{
                    imageMode_R_v.src="Imagens/circulo-preto-2.png"
                }
                
            })
        });
    });

    /*RETIRAR*/
    retirada = document.querySelector('.popup_retirada');
    imageMode_Rets_triangulo = document.querySelectorAll('.Vaga_triangulo');
    voltar_ret = document.querySelector('.voltar_retirada');
    tirar=document.querySelector('#retirando')
    
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

            voltar_ret.addEventListener('click', function(event) {
                retirada.style.visibility = "hidden"
                body.removeChild(escuridao);
                ret_visivel=false
            })
            tirar.addEventListener('click', function(event) {
                imageMode_R_t.src="Imagens/Circulo-vazio.png"
            })
        });
    });

    /*LEGENDA*/
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
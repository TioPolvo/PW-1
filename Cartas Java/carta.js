 
 function algo (id1, id2){

 let opcao= document.getElementById('carta1').value

     let inp1 = Number(document.getElementById(id1).value);
    let inp2 = Number(document.getElementById(id2).value);

    //Convertendo para numero
    inp1 = Number(inp1);
    inp2 = Number(inp2);

    //Pegando o sinal da da conta
    let opcao= document.getElementById('carta1').value


 switch (opcao) {

        case 'carta1':
            resultado = inp1 + inp2;
            alert(resultado);
        break

        case 'carta2':
            resultado = inp1 - inp2;
            alert(resultado);
        break

        case '*':
            resultado = inp1 * inp2;
            alert(resultado);
        break
    }


    if (inp1 == null || inp1 == undefined){

        resultado = inp1 + inp2;
        
        document.getElementById('inp_3').value=resultado;

        alert("soma realizada com sucesso");

    }else if (inp1 >= 0 && inp2 <= 0 || inp1 <= 0 && inp2 >= 0) {

        resultado = inp1 + inp2;

        document.getElementById('inp_3').value=resultado;
        
        alert("Subtração");

    } else{

        alert("o valo é zero");

        document.getElementById('inp_3').value=0;}
         }
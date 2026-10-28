function pegarDadosFormulario(event) {

    //Impedir o comportamento padrão do HTML que é recarregar a pagina
    event.preventDefault();

    //Pega o formulario
    const formulario = event.target;

    //transforma o formulario em um objeto
    const dados = Object.fromEntries(new FormData(formulario));

    console.log(dados);
    console.log(dados.nome);
    console.log(dados.email);
    console.log(dados.idade);
}

const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", pegarDadosFormulario);


function alterarValor(id, novoValor) {
    const elemento = document.getElementById(id);

    if (elemento) {

        elemento.value = registrar(novoValor)

    } else {
        console.log("Elemento não encontrado!");
    }
}

function registrar( novoValor){

    console.log('valor inserido')

    return novoValor;

}
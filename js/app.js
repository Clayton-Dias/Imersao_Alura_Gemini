// comentário em linha em js
/**comentário de multiplas linhas em js**/
//console.log(carros);   


//função otimizada e com adição de alguns comentários realizados pelo Gemini AI.
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa
    let section = document.getElementById("resultados-pesquisa");
    let termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio e exibe mensagem caso esteja
    if (!termoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado pois o campo está vazio. Por favor digite o que deseja encontrar.</p>";
        return; // Interrompe a função se não houver termo de pesquisa
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada carro no array 'carros'
    for (let dado of carros) {
        // Converte as propriedades para minúsculo para comparação case-insensitive
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em alguma das propriedades
        if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            // Constrói o HTML para cada item de resultado utilizando template literals
            resultados += `
                <div class="item-resultado">
                    <img src="${dado.img}">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados e exibe mensagem caso contrário
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

/** 
 * 
 * 
function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value  

    if(!campoPesquisa){
        section.innerHTML = "<p> Nada foi encontrado pois o campo está vazio. Por favor digite o que deseja encontrar.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags ="";

    // Itera sobre cada carro no array 'carros'    
    for (let dado of carros) { //repetição em js de uma lista     
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item de resultado utilizando template literals
            resultados += (
                ` 
                <div class="item-resultado">
                    <img src="${dado.img}">
                    <h2>${dado.titulo}(AC Cobra)</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
                ` // usar crase (`)
            )
        
        }

        
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
 * 
 * 
*/
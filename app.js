// comentário em linha em js
/**comentário de multiplas linhas em js**/

//console.log(carros);   

function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada carro no array 'carros'    
    for (let dado of carros) { //repetição em js de uma lista 

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
        );
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}


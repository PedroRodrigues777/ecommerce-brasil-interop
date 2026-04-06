/**
 * Função para buscar dados de produtos de forma assíncrona
 * via API REST utilizando o objeto XMLHttpRequest.
 */
function buscarProdutos() {
    const xhr = new XMLHttpRequest();
    const url = "https://api.exemplo.com/v1/produtos";
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const dados = JSON.parse(xhr.responseText);
                console.log("Dados recebidos com sucesso:", dados);
                
                atualizarVitrine(dados);
            } else {
                console.error("Erro na requisição: Status " + xhr.status);
            }
        }
    };

    xhr.send();
}

function atualizarVitrine(produtos) {
    const container = document.getElementById('vitrine-produtos');
    if (!container) return;

    let html = '';
    produtos.forEach(item => {
        html += `<div class="produto">
                    <h3>${item.nome}</h3>
                    <p>Preço: R$ ${item.preco}</p>
                 </div>`;
    });
    container.innerHTML = html;
}

window.onload = buscarProdutos;

import { produtoServices } from "../service/produto-service.js";

const novoProduto = (description, price, imageUrl) => {
    const card = document.createElement('div');
    const conteudo = `
        <div class="prod-holder">    
            <div class="produto">
                <img src="${imageUrl}" alt="Controle do Xbox series S/X">
                <p class="descricao">${description}</p>
                <p class="preco">$${price},00</p>
                <a href="#">Ver Produto</a>
            </div>
        </div>
    `

    card.innerHTML = conteudo;
    return card;
}

const produtos = document.querySelector("[data-product]");

const render = async () => {
    try {
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(element => {
            produtos.appendChild(novoProduto(element.description, element.price, element.imageUrl))
        });
    }
    catch (erro) {
        console.log(erro)
    }
}

render();
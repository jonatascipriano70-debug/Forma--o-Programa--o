/* esta parte pedi ajudar ao google pois ainda não sei fazer */
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");
// Aqui estamos a procurar todos os cartões de produtos
const cards = document.querySelectorAll(".card");
// Esta função decide quais produtos aparecem
function filtrarProdutos() {
    const texto = pesquisa.value.toLowerCase();
    const valorCategoria = categoria.value;

    cards.forEach(card => {
        const nome = card.querySelector("h3").textContent.toLowerCase();
        const cat = card.dataset.categoria;

        const combinaTexto = nome.includes(texto);
        const combinaCategoria = valorCategoria === "todos" || cat === valorCategoria;

        if (combinaTexto && combinaCategoria) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

pesquisa.addEventListener("input", filtrarProdutos);
categoria.addEventListener("change", filtrarProdutos);

/* pedi ao chatgpt esta parte - Isso guarda temporariamente enquanto o site está aberto.*/
let carrinho = [];

function adicionarCarrinho(produto) {
    carrinho.push(produto);
    alert(produto + " foi adicionado ao carrinho!");
}
const formulario = document.getElementById("formulario");

if(formulario){
    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem");

        if(nome === "" || email === ""){
            mensagem.textContent = "Preencha todos os campos.";
            mensagem.style.color = "red";
            return;
        }

        if(!email.includes("@")){
            mensagem.textContent = "Email inválido.";
            mensagem.style.color = "red";
            return;
        }

        mensagem.textContent = "Mensagem enviada com sucesso!";
        mensagem.style.color = "green";
    });
}

window.addEventListener("load", function(){

    const produtoGuardado = localStorage.getItem("produtoSelecionado");

    if(produtoGuardado){
        adicionarCarrinho(produtoGuardado);
        localStorage.removeItem("produtoSelecionado");
    }
});


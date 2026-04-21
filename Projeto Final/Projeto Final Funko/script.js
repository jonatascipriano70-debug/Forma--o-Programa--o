document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
        this.reset();
    }
});
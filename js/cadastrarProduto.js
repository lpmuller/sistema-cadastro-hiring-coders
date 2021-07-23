const formProduto = document.getElementById('form-produto');

formProduto.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome-produto').value;
    let marca = document.getElementById('marca').value;
    let sku = document.getElementById('sku').value;
    let categoria = document.getElementById('categoria').value;
    let quantidade = document.getElementById('quantidade').value;
    let preco = document.getElementById('preco').value;
    let dados = {
        nome,
        marca,
        sku,
        categoria,
        quantidade,
        preco
    }
    let conversaoDados = JSON.stringify(dados);
    localStorage.setItem('produto', conversaoDados);

    produtoCadastrado();

    formProduto.reset();
});

function produtoCadastrado() {
    let mensagemProduto = document.getElementById('mensagem-produto');
    mensagemProduto.innerHTML = "✓ Produto cadastrado com sucesso!"
    setTimeout(() => formProduto.submit(), 4000);
}
const formCliente = document.getElementById('form-cliente');

formCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;
    let dados = {
        nome,
        email,
        cpf,
        nascimento,
        telefone,
        cep,
        endereco,
        complemento,
        bairro,
        cidade,
        uf,
    }
    let conversaoDados = JSON.stringify(dados);
    localStorage.setItem('cliente', conversaoDados);

    clienteCadastrado();

    formCliente.reset();
});

function clienteCadastrado() {
    let mensagemCliente = document.getElementById('mensagem-cliente');
    mensagemCliente.innerHTML = "✓ Cliente cadastrado com sucesso!"
    setTimeout(() => formCliente.submit(), 4000);
}

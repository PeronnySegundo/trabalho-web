const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha")
const senhaDeConfirmacao = document.getElementById("senhaDeConfirmacao");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validacaoUsername();
})

validacaoUsername = () => {
    const usernameValue = username.value;
    if(usernameValue === ""){
        mostrarErro(username, "O nome de usuário não pode ser vazio");
    }
    else{
        const item = username.parentElement;
        item.classList = "conteudoDoFormulario"
    }
}

mostrarErro = (input, menssagem) => {
    const item = input.parentElement;
    const menssagemDeErro = item.querySelector("a");
    menssagemDeErro.innerText = menssagem;
    item.className = "conteudoDoFormulario error";
}
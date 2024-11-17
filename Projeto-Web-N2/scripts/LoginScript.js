const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validacaoDoFormulario();
})

email.addEventListener("blur", () => {
    validacaoEmail();
})
username.addEventListener("blur", () => {
    validacaoUsername();
})
senha.addEventListener("blur", () => {
    validacaoSenha();
})

validacaoUsername = () => {
    const usernameValue = username.value;
    if(usernameValue === ""){
        mostrarErro(username, "O nome de usuário não pode ser vazio");
    }
    else{
        const item = username.parentElement;
        item.className = "conteudoDoFormulario"
    }
}

validacaoEmail = () => {
    const emailValue = email.value;
    if(emailValue === ""){
        mostrarErro(email, "O email não pode ser vazio");
    }
    else{
        const item = email.parentElement;
        item.className = "conteudoDoFormulario"
    }
}

validacaoSenha = () => {
    const senhaValue = senha.value;
    if(senhaValue === ""){
        mostrarErro(senha, "A senha não pode ser vazia");
    }
    else if(senhaValue.length < 8){
        mostrarErro(senha, "A senha deve no mínimo 8 caracteres")
    }
    else{
        const item = senha.parentElement;
        item.className = "conteudoDoFormulario";
    }
}

validacaoDoFormulario = () => {
    validacaoUsername();
    validacaoEmail();
    validacaoSenha();  
    const item = form.querySelectorAll(".conteudoDoFormulario");
    const valido = [...item].every((item) => {
        return item.className == "conteudoDoFormulario"
    });
    if(valido){
        alert("Cadastrado!")
    }
}
 
mostrarErro = (input, menssagem) => {
    const item = input.parentElement;
    const menssagemDeErro = item.querySelector("a");
    menssagemDeErro.innerText = menssagem;
    item.className = "conteudoDoFormulario error";
}
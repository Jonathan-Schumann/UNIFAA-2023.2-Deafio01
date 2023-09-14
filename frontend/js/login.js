// Capturando os campos
let email = document.getElementById("exampleInputEmail")
let senha = document.getElementById("exampleInputPassword")
let btnEntrar = document.getElementById("btn-entrar");



//Capturando evento de click
btnEntrar.addEventListener('click', () => {
    // 1º Pegar o email digitado
    let userEmail = email.value;
    // 2º Pegar a senha digitada
    let userSenha = senha.value;
    // 3º Validar se o email e senha estão corretos
    if(!userEmail || !userSenha){
        Swal.fire({
            icon: 'error',
            text: 'E-mail e senha obrigatórios!',
          });
        return;
    }else if(userEmail == "admin@admin.com" && userSenha == "123456");{
        location.href = "controle-cliente.html";
    }    
});

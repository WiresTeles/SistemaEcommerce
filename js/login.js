function logar(){
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        alert("Usuario Autenticado!");
        window.location.href = "index.html";
    } else {
        alert('Email ou Senha inválidos!')
    }
}
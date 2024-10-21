document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const errorMessageContainer = document.createElement("div");
    errorMessageContainer.className = "error-message";
    form.appendChild(errorMessageContainer);


    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário


        const emailInput = document.querySelector("input[type='email']").value;
        const passwordInput = document.querySelector("input[type='password']").value;


        // Verifica o login e a senha
        if (emailInput === "emily@gmail.com" && passwordInput === "123") {
            window.location.href = "perfil2.html"; // Redireciona para a página home
        }
       
        else if (emailInput === "josegomes@gmail.com" && passwordInput === "123") {
            window.location.href = "perfil.html"; // Redireciona para a página home
        }
        else {
            // Exibe uma mensagem de erro
            errorMessageContainer.innerHTML = `
            <br>
            <p>Email ou senha incorretos.</p>
            <p>Tente novamente.</p>
        `;
            errorMessageContainer.style.color = "red";
            errorMessageContainer.style.textAlign = "center";
        }
    });
});
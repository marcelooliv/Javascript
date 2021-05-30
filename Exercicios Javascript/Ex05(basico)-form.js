function cadastro(){
    const form = document.querySelector('.form');
    const clientes = [];

   function eventoSubmit(evento){
       evento.preventDefault(); //pra impedir a página de recarregar
        const nome = form.querySelector('.nome');
       const email = form.querySelector('.email');
        const idade = form.querySelector('.idade');
        const senha = form.querySelector('.senha');
        clientes.push({
            nome: nome.value,
            email: email.value,
            data_de_nascimento: idade.value,
            senha: senha.value
        });
        console.log(clientes)
    }
    form.addEventListener('submit', eventoSubmit);
}
cadastro();
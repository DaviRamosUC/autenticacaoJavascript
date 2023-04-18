const usuarios = [
    { email: 'fulano@example.com', senha: 'senha123' },
    { email: 'ciclano@example.com', senha: 'senha456' }
  ];
  
  const form = document.querySelector('form');
  const mensagem = document.querySelector('#mensagem');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    const senha = form.senha.value;
    
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
      alert('Autenticação bem-sucedida!');
      // redirecionar para a página protegida
      window.location.href = 'pagina_protegida.html'
    } else {
      alert('E-mail ou senha inválidos');
    }
    
    // limpar os campos de entrada
    form.email.value = '';
    form.senha.value = '';
  });
  
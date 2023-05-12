const loginform=document.querySelector('#loginform')
loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const contraseña=document.querySelector('#contraseña').value
    const correo = document.querySelector('#correo').value
    const usuario=JSON.parse(localStorage.getItem('usuario')) || []
    const validacion =usuario.find(usuario => usuario.correo === correo && usuario.contraseña=== contraseña)
    
    function recargar(){
        window.location.href = window.location.href;
    }
    const alertaLogin = document.querySelector('#div-alerta');
    if(!validacion){
        const alerta = document.createElement('span');

        alerta.textContent = 'Usuario o contraseñas incorrectos';
        alertaLogin.appendChild(alerta);

        setTimeout(() => {
            recargar();
            alertaLogin.remove()
        }, 3000, );
        
        return alertaLogin;
    }
    const saludo = document.createElement('span');
    saludo.textContent = `Hola de vuelta ${validacion.nombre}`;
    alertaLogin.appendChild(saludo);
    setTimeout(() => {
        alertaLogin.remove()
        window.location.href='index.html'

    },2000)

})
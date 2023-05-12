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
    
    if(!validacion){
        const alerta = document.createElement('span');
        const alertaLogin = document.querySelector('#div-alerta');
        alerta.textContent = 'Usuario o contraseñas incorrectos';
        alertaLogin.appendChild(alerta);

        setTimeout(() => {
            recargar();
            alertaLogin.remove()
        }, 3000, );
        
        // return alertaLogin;
        return alert('usuario o contraseña incorrectos')
    }
    const divSaludo = document.querySelector('#div-saludo')
    const saludo = document.createElement('span');
    saludo.textContent = `Hola de vuelta ${validacion.nombre}`;
    divSaludo.appendChild(saludo);
    setTimeout(() => {
        saludo.remove()
        window.location.href='index.html';

    },2000)
    // alert("hola de vuelta");

})
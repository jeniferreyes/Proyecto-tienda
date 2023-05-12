const registroForm=document.querySelector('#registroForm')
registroForm.addEventListener('submit', (e)=>{
    
    e.preventDefault()
    const nombre=document.querySelector('#nombre').value
    const correo=document.querySelector('#correo').value
    const contraseña=document.querySelector('#contraseña').value
    //guarda los valores si no se va al array vacio []
    const usuario=JSON.parse(localStorage.getItem('usuario')) || []
    const usuariosRegistrados = usuario.find(usuario =>usuario.correo===correo) //find devuelve el valor del primer array
    //validación
    
    if (usuariosRegistrados) {
        
        return alert('Bienvenido');
        
    }
    usuario.push({nombre: nombre, correo: correo, contraseña: contraseña})
    localStorage.setItem('usuario', JSON.stringify(usuario))
    alert('Usted se ha registrado')
    //login
    window.location.href ='login.html'
})
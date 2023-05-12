const boton = document.getElementById('boton');

boton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    boton.classList.toggle('active')

    //localstorage            comprueba si contiene la case de dark
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('modo-oscuro', 'true') //modo-oscuro es el nombre del almacenamiento
    }else{
        localStorage.setItem('modo-oscuro', 'false')
    }
})

//modo actual
if(localStorage.getItem('modo-oscuro') === 'true'){
    document.body.classList.add('dark');
    boton.classList.add('active')
}else{
    document.body.classList.remove('dark');
    boton.classList.remove('active')
}
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#product-items');
const contenedor = document.querySelector('#articulos-carrito tbody');
const botonVaciar = document.querySelector('#vaciar-carrito')

let elementosCarrito = [];
cargarEventos();

function cargarEventos(){
    listaProductos.addEventListener('click', agregarProducto)

    carrito.addEventListener('click', )
}


const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#products');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const botonVaciar = document.querySelector('#vaciar carrito');

let productosCarrito = []

cargarEventos();

function cargarEventos() {

    listaProductos.addEventListener('click', agregarProducto)
    carrito.addEventListener('click', eliminarProducto)
    botonVaciar.addEventListener('click', vaciarCarrito)
}

function agregarProducto(e) {
    e.preventDefault()
    if(e.target.classList.contains('add-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto);
    }
}

function leerDatosProducto() {
    const infoProducto = {
        image: producto.querySelector('img').src,

        nombreProd: producto.querySelector('h3').textContent,

        precio: producto.querySelector('.price').textContent,

        id:producto.querySelector('data-id'), cantidad: 1
    }
    if(productosCarrito.some(producto => producto.id===infoProducto.id)){
        const productos = productosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad++
                    return producto;
            }else{
                return producto;
            }
        });
        productosCarrito = [...productos];
    }else{
        productosCarrito = [...productosCarrito, infoProducto];
    }
    console.log(productosCarrito);
    carritoHTML();
}

function vaciarCarrito() {
    
}

function carritoHTML() {
    vaciarCarrito();

    productosCarrito.forEach(producto => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>
            <img src="${producto.imagen}">
        </td>

        <td>
            ${producto.nombreProd}
        </td>

        <td>
            ${producto.precio}
        </td>

        <td>
            ${producto.cantidad}
        </td>

        <td>
            <a href="#" class="borrar-prod" data-id="${producto.id}">Elimiar</a>
        </td>
        `
        contenedorCarrito.appendChild(row);
    });
    addStorage();
}

function eliminarProducto(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-prod')){
        const productoID = e.target.getAttribute('data-id');

        productosCarrito = productosCarrito.filter(producto => producto.id!==productoID);

        carritoHTML();

    }
}
document.addEventListener('DOMContentLoaded'), ()=>{
    productosCarrito = JSON.parse(localStorage.getItem('listaProductos')) || [];

    console.log(productos);

    carritoHTML();
}
function addStorage(){
    localStorage.setItem('listaProductos', JSON.stringify(productosCarrito));
}
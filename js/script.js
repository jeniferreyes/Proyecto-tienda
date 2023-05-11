const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#products');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const botonVaciar = document.querySelector('#vaciar-carrito');

let productosCarrito = [];

cargarEventos();

function cargarEventos() {

    listaProductos.addEventListener('click', agregarProducto),
    carrito.addEventListener('click', eliminarProducto),
    botonVaciar.addEventListener('click', vaciarCarrito)
}

function agregarProducto(e) {
    e.preventDefault()
    if(e.target.classList.contains('add-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,

        nombreProd: producto.querySelector('h3').textContent,

        precio: producto.querySelector('.price').textContent,

        id:producto.querySelector('a').getAttribute('data-id'), 
        
        cantidad: 1
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

function eliminarProducto(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-prod')){
        const productoID = e.target.getAttribute('data-id');

        productosCarrito = productosCarrito.filter(producto => producto.id!==productoID);

        carritoHTML();

    }
}
function vaciarCarrito() {

    contenedorCarrito.innerHTML = ' ';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function carritoHTML() {
    vaciarCarrito();

    productosCarrito.forEach(producto => {
        const nuevoProd = document.createElement('tr');

        nuevoProd.innerHTML = `
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
        contenedorCarrito.appendChild(nuevoProd);
    });
}

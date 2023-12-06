let carritoCompras = localStorage.getItem("Carrito")
carritoCompras = JSON.parse(carritoCompras)

let carritoContainer = document.getElementById("carritoContainer")



function mostrarProductos(productos){
    productos.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =`<h2>${producto.nombre}</h2>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Precio total $${producto.precio}
                        <button class="eliminarCarrito" id="${producto.id}">Eliminar producto</button>`
        carritoContainer.appendChild(card)
    })
    botonEliminarCarrito()

}



function botonEliminarCarrito(){
    let botonEliminar = document.querySelectorAll(".eliminarCarrito")
    botonEliminar.forEach(button =>{
        button.onclick = (e) => {
            const idActual = e.currentTarget.id
            const productoEliminar = carritoCompras.find(producto => producto.id == idActual)

            carritoCompras.splice(productoEliminar,1)

        }
    }) 
}
console.log(carritoCompras)
mostrarProductos(carritoCompras)

let vaciarCarrito = document.getElementById("vaciarCarrito")

function borrarTodo (){
    vaciarCarrito.onclick = () =>{
        localStorage.clear()
        carritoCompras = []
    }
}

let carritoCompras = localStorage.getItem("Carrito")
carritoCompras = JSON.parse(carritoCompras)

let carritoContainer = document.getElementById("carritoContainer")



function mostrarProductos(productos){
    productos.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =`<h2>${producto.nombre}</h2>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Precio total $${producto.precio*producto.cantidad}`
        carritoContainer.appendChild(card)
    });

}

mostrarProductos(carritoCompras)
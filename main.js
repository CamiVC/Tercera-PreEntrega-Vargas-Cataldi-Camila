let buttonGuardar = document.getElementById("buttonGuardar")

let carrito
const carritoLS = localStorage.getItem("Carrito")

class producto {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this. cantidad = cantidad
    }
}

if(carritoLS){
    carrito = JSON.parse(carritoLS)
} else { 
    carrito = []
}

buttonGuardar.onclick = () => {
    const compra = new producto (document.getElementById("inputProducto").value, document.getElementById("inputPrecio").value, document.getElementById("inputCantidad").value)
    carrito.push(compra)
    console.log(carrito)
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

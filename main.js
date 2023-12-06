let buttonGuardar = document.getElementById("buttonGuardar")

const mercaderia = [
    {
        id:1,
        nombre: "Carpa Iglú",
        precio: 10000,
        categoria: "carpa",
    },
    {
        id:2,
        nombre: "Carpa Canadiense",
        precio: 30000,
        categoria: "carpa",
    },
    {
        id:3,
        nombre: "Carpa Alta Montaña",
        precio: 50000,
        categoria: "carpa",
    },
    {
        id:4,
        nombre: "Bolsa de dormir chica",
        precio: 5000,
        categoria: "bolsa",
    },
    {
        id:5,
        nombre: "Bolsa de dormir grande",
        precio: 7000,
        categoria: "bolsa",
    },
    {
        id:6,
        nombre: "Bolsa de dormir Alta Montaña",
        precio: 9000,
        categoria: "bolsa",
    },
    {
        id:7,
        nombre: "Botas",
        precio: 3000,
        categoria: "calzado",
    },
    {
        id:8,
        nombre: "Zapatillas",
        precio: 2000,
        categoria: "calzado",
    },
    {
        id:9,
        nombre: "Sandalias",
        precio: 1000,
        categoria: "calzado",
    },
    {
        id:10,
        nombre: "Mochila campamento 45 Litros",
        precio: 10000,
        categoria: "mochila",
    },
    {
        id:11,
        nombre: "Mochila campamento 60 Litros",
        precio: 11000,
        categoria: "mochila",
    },
    {
        id:12,
        nombre: "Mochila campamento 80 Litros",
        precio: 12000,
        categoria: "mochila",
    }
]

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

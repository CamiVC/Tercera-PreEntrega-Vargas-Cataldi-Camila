let buttonGuardar = document.getElementById("buttonGuardar")

const mercaderia = [
    {
        id:1,
        nombre: "Carpa Iglú",
        img:"./images/carpa iglu.jpg",
        precio: 10000,
        categoria: "carpa",
    },
    {
        id:2,
        nombre: "Carpa Canadiense",
        img:"./images/carpa canadiense.jpg",
        precio: 30000,
        categoria: "carpa",
    },
    {
        id:3,
        nombre: "Carpa Alta Montaña",
        img:"./images/carpa alta montaña.jpg",
        precio: 50000,
        categoria: "carpa",
    },
    {
        id:4,
        nombre: "Bolsa de dormir chica",
        img:"./images/bolsa chica.png",
        precio: 5000,
        categoria: "bolsa",
    },
    {
        id:5,
        nombre: "Bolsa de dormir grande",
        img:"./images/bolsa grande.png",
        precio: 7000,
        categoria: "bolsa",
    },
    {
        id:6,
        nombre: "Bolsa de dormir Térmica",
        img:"./images/bolsa termica.png",
        precio: 9000,
        categoria: "bolsa",
    },
    {
        id:7,
        nombre: "Botas",
        img:"./images/botas.jpg",
        precio: 3000,
        categoria: "calzado",
    },
    {
        id:8,
        nombre: "Zapatillas",
        img:"./images/zapatillas.jpg",
        precio: 2000,
        categoria: "calzado",
    },
    {
        id:9,
        nombre: "Sandalias",
        img:"./images/sandalias.jpg",
        precio: 1000,
        categoria: "calzado",
    },
    {
        id:10,
        nombre: "Mochila campamento 45 Litros",
        img:"./images/mochila 45.jpg",
        precio: 10000,
        categoria: "mochila",
    },
    {
        id:11,
        nombre: "Mochila campamento 60 Litros",
        img:"./images/mochila 60.jpg",
        precio: 11000,
        categoria: "mochila",
    },
    {
        id:12,
        nombre: "Mochila campamento 80 Litros",
        img:"./images/Mochila 80.jpg",
        precio: 12000,
        categoria: "mochila",
    }
]

let carrito
const carritoLS = localStorage.getItem("Carrito")

if(carritoLS){
    carrito = JSON.parse(carritoLS)
} else { 
    carrito = []
}

let productoContainer = document.getElementById("productoContainer")

function renderCarrito (mercaderia){
    mercaderia.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =   `<h3>${producto.nombre}</h3>
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <p>Precio: $${producto.precio}`
        productoContainer.appendChild(card)
    })
}

renderCarrito(mercaderia)



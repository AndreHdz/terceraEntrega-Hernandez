import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const productos = [
    {
        id: 1,
        nombre: "Baraja de cartas Bicycle",
        descripcion: "Baraja de cartas Bicycle de alta calidad para juegos de poker",
        precio: 9.99,
        imagen: "https://ejemplo.com/baraja-bicycle.jpg"
    },
    {
        id: 2,
        nombre: "Tapete de poker profesional",
        descripcion: "Tapete de poker profesional con acabado de fieltro para una experiencia de juego auténtica",
        precio: 49.99,
        imagen: "https://ejemplo.com/tapete-poker.jpg"
    },
    {
        id: 3,
        nombre: "Fichas de poker de cerámica",
        descripcion: "Fichas de poker de cerámica de alta calidad y con diseño personalizado",
        precio: 0.99,
        imagen: "https://ejemplo.com/fichas-ceramica.jpg"
    },
    {
        id: 4,
        nombre: "Maletín de fichas de poker",
        descripcion: "Maletín de aluminio con fichas de poker de alta calidad y baraja incluida",
        precio: 89.99,
        imagen: "https://ejemplo.com/maletin-poker.jpg"
    },
    {
        id: 5,
        nombre: "Gafas de sol para poker",
        descripcion: "Gafas de sol especiales para poker con lentes polarizadas y diseño elegante",
        precio: 29.99,
        imagen: "https://ejemplo.com/gafas-poker.jpg"
    },
    {
        id: 6,
        nombre: "Libro de estrategias de poker",
        descripcion: "Libro con estrategias y técnicas avanzadas para mejorar el juego de poker",
        precio: 14.99,
        imagen: "https://ejemplo.com/libro-poker.jpg"
    },
    {
        id: 7,
        nombre: "Mesa de poker plegable",
        descripcion: "Mesa de poker plegable para uso en casa o en eventos",
        precio: 199.99,
        imagen: "https://ejemplo.com/mesa-poker.jpg"
    },
    {
        id: 8,
        nombre: "Mazo de cartas Copag",
        descripcion: "Mazo de cartas Copag con acabado de alta calidad para juegos de poker",
        precio: 12.99,
        imagen: "https://ejemplo.com/mazo-copag.jpg"
    },
    {
        id: 9,
        nombre: "Reloj de pulsera con cronómetro",
        descripcion: "Reloj de pulsera con cronómetro para controlar el tiempo de las partidas de poker",
        precio: 39.99,
        imagen: "https://ejemplo.com/reloj-cronometro.jpg"
    }
    ,
    {
        id: 10,
        nombre: "200 Fichas para poker",
        descripcion: "200 Fichas calidad premium para tus seciones de poker en casa",
        precio: 39.99,
        imagen: "https://ejemplo.com/200-fichas-poker.jpg"
    }
]

app.get('/products',(req,res) => {

    let limit = req.query.limit;
    if (limit === undefined || limit === '') {
        return res.send({productos});
    } else if (!isNaN(limit)){
        const limitedProducts = productos.slice(0,parseInt(limit));
        return res.send(limitedProducts);
    }
})

app.get('/products/:pid', (req,res) => {
    let pid = req.params.pid;
    let product = productos.find(p => p.id === parseInt(pid));

    if(!product) {
        return res.send({error:"Product not finded"})
    }
    res.send({product});
})

app.listen(PORT,()=> console.log("Listo para recibir peticiones!"))
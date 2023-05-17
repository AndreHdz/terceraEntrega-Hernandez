import express from "express";
import productManager from "./productManager.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/products',(req,res) => {
    let limit = req.query.limit;
    const productos = productManager.getProducts();
    if (limit === undefined || limit === '') {
        return res.send(productos);
    } else if (!isNaN(limit)){
        const limitedProducts = productos.slice(0,parseInt(limit));
        return res.send(limitedProducts);
    }
})

app.get('/products/:pid', (req,res) => {
    let pid = parseInt(req.params.pid);
    const product = productManager.getProductById(pid);
    if(!product) {
        return res.send({error:"Product not finded"})
    }
    return res.send(product);
})

app.listen(PORT,()=> console.log("Listo para recibir peticiones!"))
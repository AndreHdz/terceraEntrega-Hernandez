const fs = require("fs");


class ProductManager{


    constructor(){
        this.products = [];
        const productString = fs.readFileSync(`${__dirname}/products.json`, "utf-8");
        const products = JSON.parse(productString);
        this.products = products;
    }

    addProduct(title,description,price,thumbnail,code,stock){

        let idMax = 0;
         
        this.products.forEach((e) =>{
            if(e.id >= idMax){
                idMax = e.id;
            }
        })
        
        idMax++;
        
        const newProduct = {
            id: idMax,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
        
        const productsString = JSON.stringify(this.products);
        fs.writeFileSync(`${__dirname}/products.json`, productsString);
    }
    
    
    getProducts(){
        return this.products;
    }

    getProductById(searchId){
        const product = this.products.find((value) => {
            if(searchId == value.id){
                return value;
            } 
        }); 
        
        if(product){
            console.log(product);
        } else {
            console.log('Product not found')
        }

    }

    deleteProduct(id){
        const productIndex = this.products.find(p => p.id === id);
        if(productIndex === -1){
            return console.log("Product not found");
        } 
        this.products.splice(productIndex,1);

        const productsString = JSON.stringify(this.products);
        fs.writeFileSync(`${__dirname}/products.json`,productsString);

        return console.log(`Producto con id:${id} eliminado correctamente`)

    }

    updateProduct(id,updatedFields){
        const productIndex = this.products.find(p => p.id === id);
        if(productIndex === -1){
            return console.log("Product not found");
        }

        this.products[productIndex] = {
            ...this.products[productIndex],
            ...updatedFields
        }

        const productString = JSON.stringify(this.products);
        fs.writeFileSync(`${__dirname}/products.json`, productString);

        return console.log(productString);
    }
}

const getProducts = new ProductManager;









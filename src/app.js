import express from "express";
import cors from "cors";l 
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from "express-handlebars";
import { Server } from "socket.io";

import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";

const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(cors());

const httpSErver = app.listen(port, ()=> console.log(`Servidor ejecutándose en el puerto ${port}`));

app.use(express.json());

app.engine('.hbs', engine({extname: '.hbs'}));
app.use ("/api/products", productsRouter);
app.use ("/api/carts", cartsRouter);

app.use(viewsRouter);
app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);

io.on("connection", async (socket)=> {
    console.log("Cliente conectado");
    const products = await managerProductService.getProducts();
    socket.emit("productsArray", products);

   
    socket.on("addProduct", async (productData)=> {
        const results = await managerProductService.addProduct(productData);
        const products = await managerProductService.getProducts();
        io.emit("productsArray", products);
    }); 

    socket.on("deleteProduct", async (deletedId) => { 
    const newProducts = await managerProductService.deleteProduct(deletedId);
    const products = await managerProductService.getProducts();
        io.emit("productsArray", products);
    });


});
import { Router } from "express";
import { managerProductService } from "../managers/index.js";


const router = Router();

router.get("/", async (req,res) => {
    const products = await managerProductService.getProducts();
    res.render("home", {products});
});

router.get("/nowproducts", (req,res) => {
    
    res.render("now");
});



export {router as viewsRouter};
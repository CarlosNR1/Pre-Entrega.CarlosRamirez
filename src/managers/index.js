import { ProductManager } from "./productmanagers.js";
import { CartManager } from "./cartmanagers.js";
import { __dirname } from "../utils.js";
import path from "path";

export const productManager = new ProductManager(path.join(__dirname, "/src/managers/data/productsmanagers.json"));
export const cartManager = new CartManager(path.join(__dirname, "/src/managers/data/cartsmanagers.json"));
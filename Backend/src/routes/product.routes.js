import express from "express";
import { Router } from "express";
import { createProduct,getProduct,getProducts, updateProduct , deleteProduct} from "../controllers/product.controller.js";
import upload from "../middleware/upload.middleware.js";

const router = Router();

router.post("/",upload.array('images',5),createProduct);
router.get("/",getProducts);
router.get("/:id",getProduct)
router.put('/seller/:id',updateProduct)
router.delete('/seller/:id',deleteProduct);

export default router;
import express from "express";
import { Router } from "express";
import { createProduct,getProduct } from "../controllers/product.controller.js";
import upload from "../middleware/upload.middleware.js";

const router = Router();

router.post("/",upload.array('images',5),createProduct);
router.get("/",getProduct);

export default router;
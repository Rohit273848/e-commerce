import productModel from "../models/Product.models.js"
import StorageService from "../services/storage.services.js";

export const createProduct =  async (req,res)=>{
    try{
        let { title, description, price, category,stock} = req.body;
        
        if(!title||!description||!price||!category||stock==undefined){
            return res.status(400).json({
                success:false,
                message:"All fields (title,description , price ,category , stock) are requireed"
            })
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                message: "Product image is required",
            });
        }

        const images =await StorageService(req.files);
        const product = await productModel.create({
            title,
            description,
            price,
            images,
            category,
            stock,
        })
        res.status(201).json({
            message: "product created successfully",
            success: true,
            product
        })


    }catch(err){
        console.error("create product error:" ,err);
        
        res.status(500).json({
            success:false,
            message:err.message||"Internal server error"
        })
    }
}

export const getProduct = async (req,res)=>{
    try{const product =await productModel.find();
    res.status(200).json({
        products
    })}
    catch(err){
        console.log("product not fetch due to:",err);
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
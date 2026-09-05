import productModel from "../models/Product.models.js"
import StorageService from "../services/storage.services.js";

export const createProduct = async (req, res) => {
    try {
        let { title, description, price, category, stock } = req.body;

        if (!title || !description || !price || !category || stock == undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields (title,description , price ,category , stock) are requireed"
            })
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                message: "Product image is required",
            });
        }

        const images = await StorageService(req.files);
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


    } catch (err) {
        console.error("create product error:", err);

        res.status(500).json({
            success: false,
            message: err.message || "Internal server error"
        })
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({
            products
        })
    }
    catch (err) {
        console.log("product not fetch due to:", err);
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const getProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await productModel.findOne({ _id });

        res.status(200).json({
            product
        })
    } catch (err) {
        console.log("product not found due to:", err);
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const { title, description, price, category, stock } = req.body;

        const product = await productModel.findByIdAndUpdate(
            _id,
            {
                title,
                description,
                price,
                category,
                stock
            },
            {  new: true ,
                runValidators: true
            },
        );
        if(!product){
            res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }

        res.status(200).json({
            product
        })
    } catch (err) {
        console.log("Seller product not found due to:", err);
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const deleteProduct = async (req,res)=>{
    try{
      const _id = req.params.id;

        const product = await productModel.findByIdAndDelete(_id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            product
        });
    }catch(err){
        console.log("Product not found of this seller");
        res.status(500).json({
            success:false,
            message:err.message,
        })        
    }
}
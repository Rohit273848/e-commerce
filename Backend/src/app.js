import express from "express"
import cors from "cors"
import productModel from "./models/Product.models.js";
import productRoute from "./routes/product.routes.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials:true,
    })
)


app.use('/api/products',productRoute)

export default app;
import { useDispatch } from "react-redux"
import { setLoading, setProducts } from "../state/productSlice";
import { getProductByID, getProducts } from "../services/product.api";


export const useProduct =()=>{
    const dispatch =  useDispatch();

    async function handleGetProducts() {
        try {
            dispatch(setLoading(true));
            const data = await getProducts();
            dispatch(setProducts(data.products));
        } finally {
            dispatch(setLoading(false));
        }
    }

    async function handleGetProductByID(id) {
        try {
            dispatch(setLoading(true));
            const data = await getProductByID(id);
            console.log(data.product);
            return data.product;
        } finally {
            dispatch(setLoading(false));
        }
    }

    return {handleGetProducts,handleGetProductByID};
}
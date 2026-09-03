import { useDispatch } from "react-redux"
import { setLoading, setProducts } from "../state/productSlice";
import { getProductByID, getProducts } from "../services/product.api";


export const useProduct =()=>{
    const dispatch =  useDispatch();

    async function handleGetProducts() {
        dispatch(setLoading(true));
        const data = await getProducts();
        // console.log(data.products);
        dispatch(setProducts(data.products));
        dispatch(setLoading(false));
    }

    async function handleGetProductByID(id) {
        dispatch(setLoading(true));
        const data = await getProductByID(id);
        console.log(data.product);
        dispatch(setLoading(false));
        return data.product;
    }

    return {handleGetProducts,handleGetProductByID};
}
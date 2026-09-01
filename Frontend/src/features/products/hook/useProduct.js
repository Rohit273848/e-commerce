import { useDispatch } from "react-redux"
import { setLoading, setProducts } from "../state/productSlice";
import { getProducts } from "../services/product.api";


export const useProduct =()=>{
    const dispatch =  useDispatch();

    async function handleGetProducts() {
        dispatch(setLoading(true));
        const data = await getProducts();
        console.log(data.products);
        dispatch(setProducts(data.products));
        dispatch(setLoading(false));
    }

    return {handleGetProducts};
}
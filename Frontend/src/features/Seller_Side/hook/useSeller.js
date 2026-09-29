import { useDispatch } from "react-redux"
import { setLoading, removeProduct } from "../../products/state/productSlice.js";
import { deleteProduct } from "../services/seller.api.js";



export const useSeller =()=>{
    const dispatch =  useDispatch();

    async function handleDeleteProducts(id) {
        try {
            dispatch(setLoading(true));
            await deleteProduct(id);
            dispatch(removeProduct(id));
        } catch(error){
            console.error("failed to delete product:",error);
            throw error;
        }finally {
            dispatch(setLoading(false));
        }
    }

    return {handleDeleteProducts};
}
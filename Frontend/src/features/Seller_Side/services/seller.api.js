import axios from "axios";

const sellerApiInstance = axios.create({
     baseURL: "http://localhost:3000/api/products/seller",
    withCredentials: true,
})

export async function deleteProduct(id){
    const response = await sellerApiInstance.delete(`/${id}`);
    return response.data;
}
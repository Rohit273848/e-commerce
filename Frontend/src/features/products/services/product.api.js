
import axios from 'axios'

const productApiInstance = axios.create({
    baseURL: "http://localhost:3000/api/products",
    withCredentials: true,
})

export async function createProduct(formData) {
    const response = await productApiInstance.post("/", formData);
    return response.data;
}

export async function getProducts() {
    const response = await productApiInstance.get('/');
    return response.data;
}

export async function getProductByID(id) {
    const response = await productApiInstance.get(`/${id}`)
    return response.data;
}
























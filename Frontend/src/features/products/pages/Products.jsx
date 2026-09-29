import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { useEffect, useState } from "react";
import { useProduct } from "../hook/useProduct";



export default function Product() {
    const [fetchError, setFetchError] = useState(null);
    const { handleGetProducts } = useProduct();

    const products = useSelector(state => state.products.products || []);
    const loading = useSelector(state => state.products.loading );

    const loadProducts = () => {
        setFetchError(null);
        handleGetProducts().catch((err) => {
            setFetchError(err?.response?.data?.message || "Failed to load products");
        });
     
    };



    useEffect(() => {
        loadProducts();
        
    }, [])

   console.log(products);
    // console.log(Array.isArray(products));

    const dispatch = useDispatch();

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (loading) {
        return (
            <>
             <div className="flex flex-col p-10 pt-27">
            <h1 className=" text-center pb-10 text-5xl text-gray-500">All Products</h1>
            <div className="grid grid-cols-5 gap-10" >
                {
                    array.map(() => {
                        return (
                            <div className="animate-pulse">

                                {/* Image Skeleton */}
                                <div className="h-74 w-full rounded-lg bg-gray-200"></div>

                                {/* Content Skeleton */}
                                <div className="mt-4 space-y-3">

                                    {/* Title */}
                                    <div className="h-5 w-3/4 rounded bg-gray-200"></div>

                                    {/* Category */}
                                    <div className="h-4 w-1/2 rounded bg-gray-200"></div>

                                    {/* Price */}
                                    <div className="h-5 w-1/4 rounded bg-gray-200"></div>

                                    {/* Button */}
                                    <div className="h-10 w-full rounded-lg bg-gray-200"></div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            </>
        )
    }
    return (
        <>  <div className="flex flex-col p-10 pt-27">
            <h1 className=" text-center pb-10 text-5xl text-gray-500">All Products</h1>
            <div className="grid grid-cols-5 gap-10">
                {[...products].reverse().map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
            </div>
        </div>
        </>
    ) 
}
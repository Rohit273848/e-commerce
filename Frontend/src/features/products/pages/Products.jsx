import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { useEffect, useState } from "react";
import { useProduct } from "../hook/useProduct";

// export const products = [
//     {
//         id: 1,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260723/sT7H/6a618c2aa0359b385a9b0b23/-473Wx593H-443344053-multi-MODEL.jpg",
//         title: "title1",
//         price: 129,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt",

//     },
//     {
//         id: 2,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260326/ZTZX/69c4ac0c9e784a25d58d3dba/-473Wx593H-443392797-bottlegreen-MODEL.jpg",
//         title: "title2",
//         price: 929,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 3,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260526/CeaP/6a158f7dfcb5bb61d2e9c0aa/-473Wx593H-443401340-olive-MODEL.jpg",
//         title: "title3",
//         price: 909,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 4,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260808/z1br/6a76da0fa0359b385ade6698/-473Wx593H-443401422-black-MODEL.jpg",
//         title: "title4",
//         price: 990,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 5,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260808/dOl5/6a76d400a0359b385ade5be8/-473Wx593H-443401422-white-MODEL.jpg",
//         title: "title4",
//         price: 999,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 1,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260808/utTl/6a76d82ca0359b385ade6332/-473Wx593H-443401422-beige-MODEL.jpg",
//         title: "title1",
//         price: 99,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 2,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260810/Iqsq/6a79ba825d467f347abbebb0/-473Wx593H-443385113-skyblue-MODEL.jpg",
//         title: "title2",
//         price: 99,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 3,
//         image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260808/z1br/6a76da0fa0359b385ade6698/-473Wx593H-443401422-black-MODEL.jpg",
//         title: "title3",
//         price: 99,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 4,
//         image: "https://ik.imagekit.io/cvlhdu1b2/insta-clone/posts/WhatsApp_Image_2025-03-29_at_19.28.25_0ef3cb7b_l-6dNBjZB.jpg?updatedAt=1774529060576",
//         title: "title4",
//         price: 99,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
//     {
//         id: 5,
//         image: "https://ik.imagekit.io/cvlhdu1b2/insta-clone/posts/WhatsApp_Image_2025-03-29_at_19.28.25_0ef3cb7b_l-6dNBjZB.jpg?updatedAt=1774529060576",
//         title: "title4",
//         price: 99,
//         category: "Men",
//         subcategory: "T-Shirts",
//         quantity: 12,
//         description: "Shein Men Drop Shoulder Numeric Back & Front Print Tshirt"
//     },
// ]

export default function Product() {
    const [fetchError, setFetchError] = useState(null);
    const { handleGetProducts } = useProduct();

    const products = useSelector(state => state.products.products || []);
    const loading = useSelector(state => state.products.loading);

    const loadProducts = () => {
        setFetchError(null);
        handleGetProducts().catch((err) => {
            setFetchError(err?.response?.data?.message || "Failed to load products");
        });
    };



    useEffect(() => {
        loadProducts();
    }, [])


    console.log(Array.isArray(products));

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
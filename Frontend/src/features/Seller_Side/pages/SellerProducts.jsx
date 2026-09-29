import { useEffect,useState } from "react";
import { useProduct } from "../../products/hook/useProduct"
import { useSelector } from "react-redux"
import { useSeller } from "../hook/useSeller";

// const products =

export default function SellerProducts() {
    const [fetchError, setFetchError] = useState("");
    const { handleDeleteProducts } = useSeller();
    const { handleGetProducts } = useProduct();

    const products = useSelector((state) => state.products.products || []);

    const handleDelete = async(id) => {
        try {
            await handleDeleteProducts(id);
        } catch (err) {
            alert(err?.response?.data?.message || "Failed to delete product");
        }
    }

    useEffect(() => {
        handleGetProducts().catch((err) => {
            setFetchError(err?.response?.data?.message || "Failed to load products");
        });
    }, [])

    console.log(products);
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">Products</h1>
                    <p className="text-sm text-gray-500 mt-0.5">Manage and update your product catalog</p>
                </div>
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                    {products.length} products
                </span>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-colors"
                    >
                        {/* Product Image */}
                        <div className="aspect-[4/3] bg-gray-50 border-b border-gray-100 flex items-center justify-center p-3">
                            <img
                                src={product.images?.[0]?.url || "https://tse3.mm.bing.net/th/id/OIP.mq1Bn-cPypfKB2-5DChDBwHaLH?r=0&pid=Api&P=0&h=180"}
                                alt={product.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4 flex flex-col flex-1 justify-between">
                            <div>
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                    <span>{product.category}</span>
                                    <span>Stock: {product.quantity}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 truncate" title={product.title}>
                                    {product.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price & Actions */}
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-base font-bold text-gray-900">
                                    ₹{product.price}
                                </span>

                                <div className="flex items-center gap-1.5">
                                    <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(product._id)} className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
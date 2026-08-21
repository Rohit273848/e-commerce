import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./Products";

export default function ProductDetails() {
    // State for size selection and quantity count
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantityCount, setQuantityCount] = useState(1);

    // Extract product ID from URL params
    let { id } = useParams();
    id = Number(id);

    // Find product matching the URL id
    const product = products.find(item => item.id === id);

    /* ========================================================
       EMPTY / NOT FOUND STATE
       Renders when product ID doesn't exist in products data
       ======================================================== */
    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center">
                {/* 404 Card Container */}
                <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full border border-gray-100">
                    <h2 className="text-3xl font-bold text-dark mb-2">Product Not Found</h2>
                    <p className="text-secondary mb-6">
                        The product you are looking for does not exist or has been removed.
                    </p>
                    {/* Back button link */}
                    <Link
                        to="/products"
                        className="inline-block bg-dark text-white px-6 py-3 rounded-full font-medium transition hover:bg-dark/90 cursor-pointer"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* ========================================================
               1. BREADCRUMB NAVIGATION
               Provides context & quick links back to products page
               ======================================================== */}
            <nav className="flex items-center gap-2 text-sm text-secondary mb-8">
                <Link to="/" className="hover:text-dark transition">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-dark transition">Products</Link>
                <span>/</span>
                <span className="text-dark font-medium truncate max-w-xs">{product.title}</span>
            </nav>

            {/* ========================================================
               2. MAIN PRODUCT CONTAINER
               Responsive 2-column grid layout (1 column on mobile, 2 on desktop)
               ======================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100">

                {/* ------------------------------------------------------
                   LEFT COLUMN: PRODUCT IMAGE BOX
                   Displays image inside a rounded frame with subtle zoom on hover
                   ------------------------------------------------------ */}
                <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-6 overflow-hidden border border-gray-100 group">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>

                {/* ------------------------------------------------------
                   RIGHT COLUMN: PRODUCT INFORMATION & CONTROLS
                   ------------------------------------------------------ */}
                <div className="flex flex-col justify-between h-full space-y-6">

                    {/* Category badge & Product title header */}
                    <div>
                        {/* Category / Subcategory Pill Tag */}
                        <span className="inline-block bg-primary/20 text-dark text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                            {product.category} • {product.subcategory}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-dark tracking-tight sm:text-4xl">
                            {product.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 text-secondary text-base leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Price display with discount badge */}
                    <div className="border-t border-b border-gray-100 py-4 my-2">
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-extrabold text-dark">
                                ₹{product.price}
                            </span>
                            <span className="text-xs text-gray-400 line-through">
                                ₹{Math.round(product.price * 1.25)}
                            </span>
                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                                Save 20%
                            </span>
                        </div>
                        <p className="text-xs text-secondary mt-1">
                            Price inclusive of all taxes
                        </p>
                    </div>

                    {/* Size Selector options */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold text-dark">Select Size</span>
                            <span className="text-xs text-secondary hover:underline cursor-pointer">Size Guide</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all border cursor-pointer ${
                                        selectedSize === size
                                            ? "bg-dark text-white border-dark shadow-sm"
                                            : "bg-white text-dark border-gray-200 hover:border-dark"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stock status indicator & Quantity stepper */}
                    <div className="flex items-center justify-between">
                        {/* Stock status */}
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-dark">
                                In Stock ({product.quantity} available)
                            </span>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                            <button
                                onClick={() => setQuantityCount(prev => Math.max(1, prev - 1))}
                                className="px-3 py-1 text-lg font-medium text-dark hover:bg-gray-200 transition cursor-pointer"
                            >
                                -
                            </button>
                            <span className="px-4 py-1 text-sm font-semibold text-dark">
                                {quantityCount}
                            </span>
                            <button
                                onClick={() => setQuantityCount(prev => Math.min(product.quantity, prev + 1))}
                                className="px-3 py-1 text-lg font-medium text-dark hover:bg-gray-200 transition cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Call to Action Buttons: Add to Cart & Buy Now */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {/* Add to Cart Button */}
                        <button className="flex-1 bg-primary text-dark font-bold py-4 px-6 rounded-xl hover:bg-primary/80 transition-all duration-200 shadow-sm hover:shadow cursor-pointer active:scale-[0.99]">
                            ADD TO CART
                        </button>

                        {/* Buy Now Button */}
                        <button className="flex-1 bg-dark text-white font-bold py-4 px-6 rounded-xl hover:bg-dark/90 transition-all duration-200 shadow-sm hover:shadow cursor-pointer active:scale-[0.99]">
                            BUY NOW
                        </button>
                    </div>

                    {/* Trust badges footer */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center text-xs text-secondary">
                        <div className="p-2">
                            <p className="font-semibold text-dark">Free Shipping</p>
                            <p>On orders over ₹999</p>
                        </div>
                        <div className="p-2 border-x border-gray-100">
                            <p className="font-semibold text-dark">100% Authentic</p>
                            <p>Quality guaranteed</p>
                        </div>
                        <div className="p-2">
                            <p className="font-semibold text-dark">7 Days Return</p>
                            <p>Easy exchanges</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

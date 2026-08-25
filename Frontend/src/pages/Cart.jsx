import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    removeFromCart,
    increaseQuantity,
    dicreaseQuantity,
    clearCart,
} from "../features/cart/cartSlice";

export default function Cart() {
    // ==========================================
    // 1. REDUX STATE & DISPATCH SETUP
    // ==========================================
    const dispatch = useDispatch();
    
    // Get list of cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // ==========================================
    // 2. PRICE & TOTALS CALCULATION LOGIC
    // ==========================================
    
    // Logic to calculate total quantity of all items in cart
    const totalItemsCount = cartItems.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
    );

    // Logic to calculate subtotal (actual selling price * quantity)
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    // Logic to calculate original MRP / list price (assuming a base discount for display)
    const originalPriceTotal = cartItems.reduce(
        (sum, item) => {
            const originalPrice = item.originalPrice || Math.round(item.price * 1.15);
            return sum + originalPrice * (item.quantity || 1);
        },
        0
    );

    // Logic to calculate total discount amount
    const totalDiscount = originalPriceTotal - subtotal;

    // Logic for final payable amount
    const orderTotal = subtotal;

    // ==========================================
    // 3. ACTION HANDLERS
    // ==========================================
    
    // Handler to remove a single product from cart
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    // Handler to increase item quantity by 1
    const handleIncreaseQty = (id) => {
        dispatch(increaseQuantity(id));
    };

    // Handler to decrease item quantity by 1
    const handleDecreaseQty = (id) => {
        dispatch(dicreaseQuantity(id));
    };

    // ==========================================
    // 4. EMPTY CART VIEW
    // Rendered when there are no items in the cart
    // ==========================================
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                {/* Simple Top Navigation for Empty State */}
                <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-black text-dark tracking-tight">
                        MY Shop
                    </Link>
                    <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-dark">
                        Continue Shopping
                    </Link>
                </header>

                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center shadow-xs">
                        <div className="w-20 h-20 bg-dark/10 text-dark rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            <i className="ri-shopping-bag-3-line"></i>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Your Cart is Empty
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Add items that you like to your cart and they will show up here.
                        </p>
                        <Link
                            to="/products"
                            className="inline-block bg-dark hover:bg-dark/90 text-white px-8 py-3 rounded-lg font-medium text-sm transition shadow-sm"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // ==========================================
    // 5. MAIN CART PAGE LAYOUT (Meesho Style)
    // ==========================================
    return (
        <div className="min-h-screen bg-[#f9fafb] text-gray-800 font-sans pb-16">
            
            {/* ----------------------------------------------------
                TOP HEADER: Logo + 4-Step Checkout Stepper
            ---------------------------------------------------- */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 sm:px-8 py-3 shadow-xs">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    
                    {/* Left: Brand Logo */}
                    <Link to="/" className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                        MY Shop
                    </Link>

                    {/* Center/Right: Checkout Step Indicator */}
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                        {/* Step 1: Cart (Active) */}
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full border-2 border-dark text-dark font-bold flex items-center justify-center text-xs bg-dark/10">
                                1
                            </div>
                            <span className="text-xs font-semibold text-dark mt-1">Cart</span>
                        </div>

                        {/* Divider Line 1 */}
                        <div className="w-8 sm:w-16 h-0.5 bg-gray-300 -mt-4"></div>

                        {/* Step 2: Address (Pending) */}
                        <div className="flex flex-col items-center opacity-60">
                            <div className="w-6 h-6 rounded-full border border-gray-400 text-gray-500 font-medium flex items-center justify-center text-xs">
                                2
                            </div>
                            <span className="text-xs text-gray-500 mt-1">Address</span>
                        </div>

                        {/* Divider Line 2 */}
                        <div className="w-8 sm:w-16 h-0.5 bg-gray-300 -mt-4"></div>

                        {/* Step 3: Payment (Pending) */}
                        <div className="flex flex-col items-center opacity-60">
                            <div className="w-6 h-6 rounded-full border border-gray-400 text-gray-500 font-medium flex items-center justify-center text-xs">
                                3
                            </div>
                            <span className="text-xs text-gray-500 mt-1">Payment</span>
                        </div>

                        {/* Divider Line 3 */}
                        <div className="w-8 sm:w-16 h-0.5 bg-gray-300 -mt-4"></div>

                        {/* Step 4: Summary (Pending) */}
                        <div className="flex flex-col items-center opacity-60">
                            <div className="w-6 h-6 rounded-full border border-gray-400 text-gray-500 font-medium flex items-center justify-center text-xs">
                                4
                            </div>
                            <span className="text-xs text-gray-500 mt-1">Summary</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* ----------------------------------------------------
                MAIN CONTENT GRID: Left (Items) & Right (Summary)
            ---------------------------------------------------- */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* ====================================================
                    LEFT COLUMN: Product Details (7 cols)
                ==================================================== */}
                <div className="lg:col-span-7">
                    
                    {/* Section Title */}
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base sm:text-lg font-bold text-gray-800">
                            Product Details
                        </h2>
                        {/* Clear Cart Button */}
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="text-xs text-gray-500 hover:text-red-600 transition cursor-pointer flex items-center gap-1"
                        >
                            <i className="ri-delete-bin-line"></i> Clear all
                        </button>
                    </div>

                    {/* List of Product Cards */}
                    <div className="space-y-4">
                        {cartItems.map((item) => {
                            // Calculate single item original price & discount percentage
                            const originalItemPrice = item.originalPrice || Math.round(item.price * 1.15);
                            const discountPercent = Math.round(
                                ((originalItemPrice - item.price) / originalItemPrice) * 100
                            );

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:border-gray-300 transition"
                                >
                                    {/* Card Upper Body: Image + Info + Actions */}
                                    <div className="p-4 flex gap-4 items-start">
                                        
                                        {/* Product Thumbnail */}
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded border border-gray-100 overflow-hidden shrink-0 bg-gray-50">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Details Content */}
                                        <div className="flex-1 min-w-0">
                                            
                                            {/* Title & Edit Button Row */}
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                                                    {item.title}
                                                </h3>
                                                <button
                                                    onClick={() => handleIncreaseQty(item.id)}
                                                    className="text-xs font-bold text-dark hover:underline cursor-pointer uppercase"
                                                >
                                                    EDIT
                                                </button>
                                            </div>

                                            {/* Price Row: Discounted Price, Strikethrough Price, Off % */}
                                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                                <span className="text-sm sm:text-base font-bold text-gray-900">
                                                    ₹{item.price}
                                                </span>
                                                <span className="text-xs text-gray-400 line-through">
                                                    ₹{originalItemPrice}
                                                </span>
                                                <span className="text-xs text-gray-500 font-medium">
                                                    {discountPercent}% Off
                                                </span>
                                                {/* Timer / Flash badge */}
                                                <span className="text-[11px] bg-orange-50 text-orange-700 border border-orange-200 px-1.5 py-0.5 rounded flex items-center gap-1 font-medium">
                                                    ⏰ 01h:41m:03s
                                                </span>
                                            </div>

                                            {/* Return Policy Notice */}
                                            <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                                                All issue easy returns
                                            </p>

                                            {/* Size & Quantity Control Line */}
                                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                                                <span>
                                                    Size: <strong className="text-gray-800">{item.size || "Free Size"}</strong>
                                                </span>
                                                <span>•</span>
                                                
                                                {/* Simple Inline Quantity Stepper */}
                                                <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5">
                                                    <span className="text-gray-500">Qty:</span>
                                                    <button
                                                        onClick={() => handleDecreaseQty(item.id)}
                                                        className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded cursor-pointer font-bold"
                                                        title="Decrease quantity"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="font-bold text-gray-800 px-1">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => handleIncreaseQty(item.id)}
                                                        className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded cursor-pointer font-bold"
                                                        title="Increase quantity"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <div className="mt-3">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-red-600 cursor-pointer uppercase tracking-wider"
                                                >
                                                    ✕ REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Bottom Footer: Seller Info */}
                                    <div className="bg-white border-t border-gray-100 px-4 py-2 text-xs text-gray-500">
                                        Sold by:{" "}
                                        <span className="uppercase font-medium text-gray-700">
                                            {item.seller || item.category || "ARUSH FOOTWEAR INDUSTRIES"}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ====================================================
                    RIGHT COLUMN: Price Details & Checkout (5 cols)
                ==================================================== */}
                <div className="lg:col-span-5 lg:pl-4">
                    
                    {/* Section Header */}
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                        Price Details ({totalItemsCount} {totalItemsCount === 1 ? "Item" : "Items"})
                    </h2>

                    {/* Price Card Container */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-xs space-y-4">
                        
                        {/* 1. Product Original Price Row */}
                        <div className="flex justify-between text-sm text-gray-600">
                            <span className="border-b border-dotted border-gray-400">
                                Product Price
                            </span>
                            <span className="font-medium text-gray-800">
                                + ₹{originalPriceTotal}
                            </span>
                        </div>

                        {/* 2. Total Discounts Row */}
                        <div className="flex justify-between text-sm text-emerald-600">
                            <span className="border-b border-dotted border-emerald-400">
                                Total Discounts
                            </span>
                            <span className="font-medium">
                                - ₹{totalDiscount}
                            </span>
                        </div>

                        {/* Divider Line */}
                        <div className="border-t border-gray-200 pt-3">
                            {/* 3. Order Total Row */}
                            <div className="flex justify-between items-center text-base sm:text-lg font-bold text-gray-900">
                                <span>Order Total</span>
                                <span>₹{orderTotal}</span>
                            </div>
                        </div>

                        {/* 4. Green Discount Celebration Badge */}
                        <div className="bg-[#e6f8f0] text-[#038d65] p-3 rounded-md text-xs sm:text-sm font-medium flex items-center gap-2 border border-emerald-100">
                            <span className="w-5 h-5 rounded-full bg-[#038d65] text-white flex items-center justify-center text-xs shrink-0">
                                %
                            </span>
                            <span>Yay! Your total discount is ₹{totalDiscount}</span>
                        </div>

                        {/* 5. Safe Notice Before Button */}
                        <p className="text-[11px] text-gray-400 text-center pt-2">
                            Clicking on 'Continue' will not deduct any money
                        </p>

                        {/* 6. Main Action: Continue Button */}
                        <button
                            onClick={() => alert("Proceeding to Address step!")}
                            className="w-full bg-dark hover:bg-dark/90 text-white font-semibold py-3 px-4 rounded-md transition shadow-xs cursor-pointer text-sm sm:text-base tracking-wide active:scale-[0.99]"
                        >
                            Continue
                        </button>

                        {/* 7. Safety / Trust Priority Card */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 border border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-dark/10 text-dark flex items-center justify-center text-lg shrink-0">
                                    <i className="ri-shield-check-line"></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="bg-dark text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                            MyShop Safe
                                        </span>
                                        <h4 className="text-xs font-bold text-gray-800">
                                            Your Safety, Our Priority
                                        </h4>
                                    </div>
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                        We make sure that your package is safe at every point of contact.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}


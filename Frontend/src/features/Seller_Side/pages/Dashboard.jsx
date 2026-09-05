import { Link } from "react-router-dom";

export default function Dashboard() {
    // Dummy stats for the seller dashboard
    const stats = [
        {
            title: "Total Products",
            value: "24",
            change: "+3 this week",
            isPositive: true,
            icon: (
                <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            bgColor: "bg-primary/20"
        },
        {
            title: "Total Orders",
            value: "148",
            change: "+12% vs last month",
            isPositive: true,
            icon: (
                <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            bgColor: "bg-blue-50"
        },
        {
            title: "Total Sales",
            value: "₹54,290",
            change: "+18.4%",
            isPositive: true,
            icon: (
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bgColor: "bg-emerald-50"
        },
        {
            title: "Low Stock Alert",
            value: "3",
            change: "Needs restock",
            isPositive: false,
            icon: (
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            bgColor: "bg-amber-50"
        }
    ];

    // Dummy recent products
    const recentProducts = [
        {
            id: "1",
            title: "Drop Shoulder Numeric Oversized T-Shirt",
            category: "Men • T-Shirts",
            price: "₹999",
            stock: 12,
            status: "In Stock"
        },
        {
            id: "2",
            title: "Classic Olive Cotton Tee",
            category: "Men • T-Shirts",
            price: "₹909",
            stock: 4,
            status: "Low Stock"
        },
        {
            id: "3",
            title: "Minimalist Black Graphic Tee",
            category: "Men • T-Shirts",
            price: "₹990",
            stock: 18,
            status: "In Stock"
        }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark tracking-tight">Seller Dashboard</h1>
                    <p className="text-sm text-secondary mt-1">
                        Monitor your inventory, sales, and product performance.
                    </p>
                </div>
                <Link
                    to="/seller/add-product"
                    className="inline-flex items-center justify-center gap-2 bg-dark text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-dark/90 transition shadow-sm"
                >
                    <span className="text-lg leading-none">+</span>
                    <span>Add New Product</span>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-secondary">{item.title}</span>
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bgColor}`}>
                                {item.icon}
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-3xl font-extrabold text-dark">{item.value}</span>
                            <div className="flex items-center gap-1.5 mt-2 text-xs">
                                <span
                                    className={`font-semibold ${
                                        item.isPositive ? "text-emerald-600" : "text-amber-600"
                                    }`}
                                >
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Products Overview Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between border-b border-gray-100">
                    <div>
                        <h2 className="text-lg font-bold text-dark">Recent Products</h2>
                        <p className="text-xs text-secondary mt-0.5">Quick look at your latest catalog items</p>
                    </div>
                    <Link
                        to="/seller/products"
                        className="text-xs font-semibold text-dark hover:text-primary transition underline"
                    >
                        View All Products →
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-dark">
                        <thead className="bg-gray-50 text-xs uppercase font-semibold text-secondary border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentProducts.map((prod) => (
                                <tr key={prod.id} className="hover:bg-gray-50/60 transition">
                                    <td className="px-6 py-4 font-medium text-dark">{prod.title}</td>
                                    <td className="px-6 py-4 text-secondary text-xs">{prod.category}</td>
                                    <td className="px-6 py-4 font-semibold">{prod.price}</td>
                                    <td className="px-6 py-4 text-secondary">{prod.stock} units</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                prod.status === "In Stock"
                                                    ? "bg-emerald-50 text-emerald-700"
                                                    : "bg-amber-50 text-amber-700"
                                            }`}
                                        >
                                            {prod.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
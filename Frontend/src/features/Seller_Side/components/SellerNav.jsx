import { NavLink, Link } from "react-router-dom";

export default function SellerNav() {
    const menuItems = [
        {
            label: "Dashboard",
            path: "/seller"
        },
        {
            label: "Products",
            path: "/seller/products"
        },
        {
            label: "Orders",
            path: "/seller/orders"
        },
        {
            label: "Add Product",
            path: "/seller/add-product"
        }
    ];

    return (
        <aside className="w-64 h-screen sticky top-0 bg-dark text-white flex flex-col justify-between p-5 pr-0 shadow-lg">
            {/* Top Section: Brand & Navigation */}
              {/* Brand Header */}
                <div className="text-center py-3 mb-6 border-b border-gray-700">
                    <h2 className="font-bold text-lg leading-tight">Seller Panel</h2>
                    <span className="text-xs text-primary font-medium">Merchant Portal</span>
                </div>
            <div>


                {/* Navigation Links */}
                <nav>
                    <ul className="flex flex-col gap-2 ">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end={item.path === "/seller"}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3  font-medium text-sm transition-all duration-200 ${isActive
                                            ? "bg-white text-dark font-semibold shadow-sm"
                                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Bottom Actions: Store Link & Logout */}
            <div className="pt-4 border-t border-gray-700 flex flex-col gap-2">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                    Back to Store
                </Link>
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors font-medium"
                >
                    Logout
                </Link>
            </div>
        </aside>
    );
}

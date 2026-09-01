import { createBrowserRouter } from "react-router-dom";
import Home from "../features/products/pages/Home.jsx"
import Products from "../features/products/pages/Products";
import Layout from "../features/products/pages/Layout";
import ProductDetails from "../features/products/pages/ProductDetails";
import Cart from "../features/cart/pages/Cart.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "product/:id",
				element: <ProductDetails />
			}
		],
	},
	{
		path: "cart",
		element: <Cart />
	}
])
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../pages/Layout";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

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
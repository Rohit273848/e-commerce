import { createBrowserRouter } from "react-router-dom";
import Home from "../features/products/pages/Home.jsx"
import Products from "../features/products/pages/Products";
import Layout from "../features/products/pages/Layout";
import ProductDetails from "../features/products/pages/ProductDetails";
import Cart from "../features/cart/pages/Cart.jsx";
import Dashboard from "../features/Seller_Side/pages/Dashboard.jsx";
import SellerLayout from "../features/Seller_Side/pages/SellerLayout.jsx";

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
	},
	{
		path:"/seller",
		element:<SellerLayout/>,
		children:[
			{
				index: true,
				element:<Dashboard/>
			}
		]
	}
])
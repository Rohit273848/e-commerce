import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../pages/Layout";

export const router = createBrowserRouter([
   {
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
			},
		],
	},

])
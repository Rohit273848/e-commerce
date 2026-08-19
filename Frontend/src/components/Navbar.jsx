import React from "react";
import logo from '../assets/logo.png'
export default function Navbar() {
    return (
        <>
            <nav className="flex bg-primary text-dark rounded-4xl justify-between items-center text-lg uppercase  px-6 py-2 font-sans 
">
                <div>
                    <a href="">
                        <h1 className="text-xl font-bold tracking-tight">MyShop</h1>
                    </a>
                </div>
                <ul className="flex gap-9">
                    <li><a href="#" className="transition-colors hover:text-white">Home</a></li>
                    <li><a href="#" className="transition-colors hover:text-white">Products</a></li>
                    <li><a href="#" className="transition-colors hover:text-white">About</a></li>
                    <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
                </ul>
                <div className="flex gap-10" >
                    <div className="flex gap-3 ">
                        <button className="cursor-pointer rounded-full bg-dark px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">Login</button>
                        <button className="cursor-pointer rounded-full bg-dark px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"> Register</button>
                    </div>
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-dark hover:text-white">
                        <i className="ri-shopping-cart-line text-xl"></i>
                    </button>
                </div>

            </nav>
        </>
    )
}
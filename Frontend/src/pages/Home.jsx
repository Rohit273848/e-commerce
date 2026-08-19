import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <> 
        <div className="bg-background min-h-screen p-5 ">
            <Navbar />
             <main className="flex min-h-[80vh] flex-col items-center justify-center text-center">

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-dark">
                    Find Your Favorite Clothing Collections
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">
                    Discover quality products from trusted local stores,
                    compare prices, explore reviews, and find the best deals
                    near you.
                </p>

                <button className="mt-8 rounded-full bg-dark px-7 py-3 font-medium text-white transition hover:opacity-90">
                    Shop Now
                </button>

            </main>
            <Footer/>
        </div>
        </>
    )
}
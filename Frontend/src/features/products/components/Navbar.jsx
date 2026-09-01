import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Navbar() {
    const items = useSelector((state)=>(state.cart.items))
    
    const totalItemsCount = items.reduce((sum,item)=>sum+(item.quantity||1),0)
    
    return (
       
        <>
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-4xl bg-primary/60 z-99
">
                <div>
                    <a href="">
                        <h1 className="text-xl font-bold tracking-tight">MyShop</h1>
                    </a>
                </div>
                <ul className="flex gap-9">
                    <li><Link to={'/'}className="transition-colors hover:text-white">Home</Link></li>
                     <li><Link to={'/products'}className="transition-colors hover:text-white">Products</Link></li>
                      <li><Link to={'/about'}className="transition-colors hover:text-white">About</Link></li>
                       <li><Link to={'/contect'}className="transition-colors hover:text-white">Contect</Link></li>
                </ul>
                <div className="flex gap-10" >
                    <div className="flex gap-3 ">
                        <button className="cursor-pointer rounded-full bg-dark px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">Login</button>
                        <button className="cursor-pointer rounded-full bg-dark px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"> Register</button>
                    </div>
                    <button className="flex p-2.5 cursor-pointer items-center justify-center rounded-full transition hover:bg-dark hover:text-white">
                        <Link to={'/cart'}> <i className="ri-shopping-cart-line text-xl"></i></Link>
                        <p>{totalItemsCount}</p>
                    </button>
                </div>

            </nav>
        </>
    )
}
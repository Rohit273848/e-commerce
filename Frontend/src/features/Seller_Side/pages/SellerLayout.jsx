import SellerNav from "../components/SellerNav";
import { Outlet } from "react-router-dom";

export default function SellerLayout() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <SellerNav />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";

export default function Navbar() {
    const cartContext = useContext(CartContext)!;
    const { cartItemsAmount } = cartContext;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#F3EFE7]/70 backdrop-blur-xl border-b border-[#E5E5E7]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link
                    to="/"
                    className="font-['Playfair Display'] text-3xl text-[#1C1C1E] tracking-wide hover:opacity-80 transition"
                >
                    ElegantShop
                </Link>

                <div className="flex items-center gap-8 text-[#3A3A3C] font-light text-lg">
                    <Link className="hover:text-[#1C1C1E] transition" to="/">
                        Home
                    </Link>
                    <Link className="hover:text-[#1C1C1E] transition" to="/shop">
                        Shop
                    </Link>
                    <Link
                        className="relative hover:text-[#1C1C1E] transition"
                        to="/cart"
                    >
                        Cart
                        <span className="ml-1 bg-[#C4A484] text-white px-2 py-0.5 rounded-md text-sm">
              {cartItemsAmount()}
            </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
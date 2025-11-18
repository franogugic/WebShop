import type { Product } from "../pages/Shop.tsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";

type SingleProductProps = {
    product: Product;
};

const SingleProductWrapper = ({ product }: SingleProductProps) => {
    const cartContext = useContext(CartContext);
    if (!cartContext) return null;

    const { addToCart, cart, removeFromCart } = cartContext;

    const inCart = cart.some((p) => p.id === product.id);

    return (
        <div className="bg-white/70 backdrop-blur-xl border border-[#E5E5E7] rounded-2xl shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center text-center gap-4">

            <Link
                to={`/shop/${product.id}`}
                className="flex flex-col items-center text-center"
            >
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-40 h-40 object-contain mb-4"
                />

                <p className="font-['Playfair Display'] text-xl text-[#1C1C1E] mb-1">
                    {product.title}
                </p>

                <p className="text-[#3A3A3C] font-light text-sm tracking-wide">
                    {product.price} €
                </p>
            </Link>

            {inCart ? (
                <button
                    className="bg-[#E74C3C] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#d63e30] transition"
                    onClick={() => removeFromCart(product.id)}
                >
                    Remove from Cart
                </button>
            ) : (
                <button
                    className="bg-[#C4A484] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#B99771] transition"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default SingleProductWrapper;

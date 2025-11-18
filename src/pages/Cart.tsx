import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";
import SingleProductWrapper from "../components/SingleProductWrapper.tsx";

const Cart = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) return null;

    const { cart, totalAmount, clearCart, updateQuantity } = cartContext;

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            <div className="absolute top-[-150px] right-[-150px] w-[350px] h-[350px] bg-[#C4A484]/30 blur-3xl rounded-full" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#1C1C1E]/20 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between mb-12">
                    <h1 className="font-['Playfair Display'] text-4xl text-[#1C1C1E]">
                        Your Cart
                    </h1>

                    <button
                        onClick={clearCart}
                        className="bg-[#1C1C1E] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#3A3A3C] transition"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-[#E5E5E7] rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="text-2xl font-['Playfair Display'] text-[#1C1C1E] mb-2">
                        Total
                    </h2>
                    <p className="text-lg text-[#3A3A3C] font-light">
                        {totalAmount().toFixed(2)} €
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/70 backdrop-blur-xl border border-[#E5E5E7] rounded-2xl shadow-xl p-6 flex flex-col gap-4"
                        >
                            <SingleProductWrapper product={item} />

                            <div className="flex items-center justify-center gap-4 mt-4">
                                <button
                                    className="bg-[#E5E5E7] hover:bg-[#D4D4D6] px-4 py-2 rounded-xl shadow-sm transition"
                                    onClick={() =>
                                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                                    }
                                >
                                    -
                                </button>

                                <div className="text-lg font-semibold text-[#1C1C1E] w-10 text-center">
                                    {item.quantity}
                                </div>

                                <button
                                    className="bg-[#E5E5E7] hover:bg-[#D4D4D6] px-4 py-2 rounded-xl shadow-sm transition"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Cart;

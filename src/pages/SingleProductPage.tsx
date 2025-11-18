import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import type { Product } from "./Shop.tsx";
import { CartContext } from "../context/CartContext.tsx";

const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);

    const cartContext = useContext(CartContext)!;
    const { addToCart, removeFromCart, cart } = cartContext;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading || !product) {
        return <p className="pt-32 text-center text-[#3A3A3C]">Loading...</p>;
    }

    const inCart = cart.some((p) => p.id === product.id);

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">

            <div className="absolute top-[-200px] right-[-200px] w-[450px] h-[450px] bg-[#C4A484]/40 blur-3xl rounded-full" />
            <div className="absolute bottom-[-200px] left-[-200px] w-[450px] h-[450px] bg-[#1C1C1E]/25 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto px-6">

                <div className="bg-white/70 backdrop-blur-xl border border-[#E5E5E7] rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-12">

                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="w-full max-w-sm rounded-2xl shadow-xl"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-6">
                        <h1 className="font-['Playfair Display'] text-4xl text-[#1C1C1E]">
                            {product.title}
                        </h1>

                        <p className="text-[#3A3A3C] text-lg leading-relaxed font-light">
                            {product.description}
                        </p>

                        <p className="text-3xl text-[#1C1C1E] font-semibold">
                            {product.price} €
                        </p>

                        {inCart ? (
                            <button
                                className="bg-[#E74C3C] text-white px-8 py-3 rounded-xl text-lg shadow-lg hover:bg-[#d63e30] transition"
                                onClick={() => removeFromCart(product.id)}
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button
                                className="bg-[#C4A484] text-white px-8 py-3 rounded-xl text-lg shadow-lg hover:bg-[#B99771] transition"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-20 bg-white/50 backdrop-blur-xl border border-[#E5E5E7] rounded-2xl shadow-xl p-10">
                    <h2 className="font-['Playfair Display'] text-3xl text-[#1C1C1E] mb-8">
                        Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(product)
                            .filter(([key]) => !["images", "description", "title"].includes(key))
                            .map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex justify-between border-b border-[#E5E5E7] pb-2"
                                >
                  <span className="text-[#3A3A3C] font-light capitalize">
                    {key.replace(/_/g, " ")}
                  </span>
                                    <span className="text-[#1C1C1E] font-medium">
                    {String(value)}
                  </span>
                                </div>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProductPage;

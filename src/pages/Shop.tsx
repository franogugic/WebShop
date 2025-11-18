import { useEffect, useState } from "react";
import SingleProductWrapper from "../components/SingleProductWrapper.tsx";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error ocurred: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">

            <div className="absolute top-[-200px] right-[-200px] w-[450px] h-[450px] bg-[#C4A484]/40 blur-3xl rounded-full" />
            <div className="absolute bottom-[-200px] left-[-200px] w-[450px] h-[450px] bg-[#1C1C1E]/25 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                <h1 className="font-['Playfair Display'] text-5xl text-[#1C1C1E] mb-16 text-center drop-shadow">
                    Our Collection
                </h1>

                {loading ? (
                    <p className="text-center text-[#3A3A3C] text-lg font-light">
                        Loading products...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <SingleProductWrapper product={product} key={product.id} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Shop;

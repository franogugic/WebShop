import {useEffect, useState} from "react";
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
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                setProducts(data.products);
            }
            catch (error){
                console.error("Error ocurred: ", error);
            }
            finally {
                setLoading(false);
            }            
        }
        
        fetchData().catch(console.error);
    }, []);
    return (
        <div>
            {loading ? <p>Loading...</p> : 
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product) => (
                        <SingleProductWrapper product={product}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default Shop

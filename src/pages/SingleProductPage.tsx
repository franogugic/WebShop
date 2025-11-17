import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Product} from "./Shop.tsx";
const SingleProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://dummyjson.com/products/"+id)
                const data = await res.json();
                setProduct(data)
            }
            catch (e) {
                console.error(e)
            }finally {
                setLoading(false)
            }
        }
        
        fetchProduct().catch(e => console.error(e));
    }, [])
    
    return (
        <>
        {
            loading ? 
                <p>Loading...</p> :
                <div>
                    <img src={product?.images[0]} alt={product?.title} className='border w-4/5' />
                    {product && Object.entries(product)
                        .filter(([key]) => key !== "images")
                        .map(([key, value]) => (
                            <p key={key}>
                                {key}: {String(value)}
                            </p>
                        ))}
                </div>
        }
        </>
    )
}

export default SingleProductPage

import type {Product} from "../pages/Shop.tsx";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.tsx";

type SingleProductProps = {
    product: Product;
}
const SingleProductWrapper = ({product} : SingleProductProps) => {

    const cartContext = useContext(CartContext);
    if (!cartContext) return null;

    const { addToCart, cart, removeFromCart } = cartContext;

    return ( 
        <div className="flex flex-col items-center justify-center">
            <Link to={`/shop/${product?.id}`} className="flex flex-col items-center text-center justify-center bg-black rounded-md p-3 text-white">
                <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-3xs"
                />
                <p>{product.title}</p>
                <p>{product.price}e</p>
            </Link>
            {
                cart.some((p) => p.id === product.id) ? (
                    <button className="bg-red" onClick={() => removeFromCart(product.id)}>
                        Remove product
                    </button>
                ) : (
                    <button className="bg-red" onClick={() => addToCart(product)}>
                        Add product
                    </button>
                )
            }

        </div>
    )
}

export default SingleProductWrapper

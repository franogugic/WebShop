import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";
import SingleProductWrapper from "../components/SingleProductWrapper.tsx";

const Cart = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) return null;

    const { cart, totalAmount, clearCart } = cartContext;
    
    return (
        <div>
            <div className="flex items-center justify-between w-full mb-6">
                <p>Total: {totalAmount().toFixed(2)}e</p>
                <button onClick={clearCart} className="bg-black rounded-lg text-white px-6 py-2">Clear cart</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {cart.map((item) => (
                    <SingleProductWrapper key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default Cart;

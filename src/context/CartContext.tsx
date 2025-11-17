import { createContext, useState } from "react";
import type {ReactNode} from "react";
import type { Product } from "../pages/Shop";

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, newQty: number) => void;
    clearCart: () => void;
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    totalAmount: () => number;
    cartItemsAmount: () => number;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((p) => p.id === item.id);
            if (existingItem) {
                return prevCart.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((p) => p.id !== id));
    };

    const updateQuantity = (id: number, newQty: number) => {
        setCart((prevCart) =>
            prevCart
                .map((p) => (p.id === id ? { ...p, quantity: newQty } : p))
                .filter((p) => p.quantity > 0)
        );
    };
    
    const totalAmount = () => {
        return cart.reduce((sum,p)=>  sum + p.price * p.quantity, 0);
    }
    
    const cartItemsAmount = () => {
        return cart.length;
    }

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, setCart, totalAmount, cartItemsAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

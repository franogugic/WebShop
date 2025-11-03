import type {Product} from "../pages/Shop.tsx";

type SingleProductProps = {
    product: Product;
}
const SingleProductWrapper = ({product} : SingleProductProps) => {
    return (
        <div className="flex flex-col items-center text-center justify-center bg-black rounded-md p-3 text-white">
            <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-3xs"
            />
            <p>{product.title}</p>
            <p>{product.price}e</p>
        </div>
    )
}

export default SingleProductWrapper

import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-20 z-50 w-full text-white bg-black py-4">
            <div className="container mx-auto flex items-center justify-between">
                    <Link className="text-[32px]" to="/">head</Link>
                <div className="flex items-center justify-center gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
               </div>
            </div>

        </div>
    )
}

export default Navbar

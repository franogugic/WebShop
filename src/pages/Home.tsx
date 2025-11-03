import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <p className="text-[48px]">LANDING PAGE</p>
            <p className="text-[12px] italic font-thin">Triba zavrsit UI za ovaj projekt!!! HITNO...</p>
            
            <button className="px-6 py-2 text-white bg-black mt-16 rounded-[8px]">
                <Link to="/shop">
                    Shop something
                </Link>
            </button>
        </div>
    )
}

export default Home

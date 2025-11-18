import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F3EFE7] relative overflow-hidden">
            <div className="absolute top-[-200px] right-[-150px] w-[400px] h-[400px] bg-[#C4A484]/40 blur-3xl rounded-full" />
            <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] bg-[#1C1C1E]/20 blur-3xl rounded-full" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#C4A484]/30 to-transparent blur-3xl rounded-full" />

            <section className="relative max-w-7xl mx-auto text-center py-40 px-6">
                <h1 className="font-['Playfair Display'] text-6xl md:text-7xl text-[#1C1C1E] font-semibold tracking-wide drop-shadow-xl">
                    Redefine Your Lifestyle
                </h1>

                <p className="mt-6 text-lg text-[#3A3A3C] max-w-2xl mx-auto font-light leading-relaxed">
                    Where premium craftsmanship meets timeless aesthetics. Discover a curated selection of luxury essentials designed to elevate your every day.
                </p>

                <div className="mt-14 flex justify-center gap-4">
                    <Link
                        to="/shop"
                        className="bg-[#1C1C1E] text-white px-12 py-4 rounded-xl text-xl tracking-wide hover:bg-[#3A3A3C] transition shadow-xl hover:shadow-2xl"
                    >
                        Shop Now
                    </Link>
                    <Link
                        to="/about"
                        className="border border-[#1C1C1E] text-[#1C1C1E] px-12 py-4 rounded-xl text-xl hover:bg-[#1C1C1E] hover:text-white transition shadow-md"
                    >
                        Learn More
                    </Link>
                </div>
            </section>

            <section className="relative max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {[
                    {
                        title: "Handcrafted Excellence",
                        desc: "Each item is made with precision using premium, ethically sourced materials.",
                    },
                    {
                        title: "Luxury Packaging",
                        desc: "Every order arrives in elegant custom packaging designed to impress.",
                    },
                    {
                        title: "Exclusive Collections",
                        desc: "Limited-edition pieces crafted for those who appreciate the finer things.",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white/70 backdrop-blur-xl border border-[#E5E5E7] rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl transition"
                    >
                        <h3 className="font-['Playfair Display'] text-3xl text-[#1C1C1E] mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-[#3A3A3C] text-sm font-light leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </section>

            <section className="relative max-w-7xl mx-auto mt-40 px-6 text-center">
                <div className="bg-gradient-to-br from-white to-[#F3EFE7] rounded-3xl shadow-2xl p-16 border border-[#E5E5E7] relative overflow-hidden">
                    <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-[#C4A484]/30 blur-3xl rounded-full" />
                    <div className="absolute bottom-[-80px] right-[10%] w-[300px] h-[300px] bg-[#1C1C1E]/20 blur-3xl rounded-full" />

                    <h2 className="font-['Playfair Display'] text-5xl text-[#1C1C1E] mb-6 drop-shadow-lg">
                        Experience the Art of Luxury
                    </h2>

                    <p className="text-[#3A3A3C] max-w-2xl mx-auto font-light text-md leading-relaxed">
                        Dive into a world where beauty meets functionality. Explore exclusive designs crafted for those who seek more than ordinary.
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/shop"
                            className="bg-[#C4A484] text-white px-10 py-3 rounded-xl text-lg hover:bg-[#B99771] transition shadow-lg hover:shadow-xl tracking-wide"
                        >
                            Browse Collection
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="mt-40 pb-16 text-center text-[#3A3A3C] text-sm font-light">
                © {new Date().getFullYear()} Elegant Shop — Luxury Redefined.
            </footer>
        </div>
    );
}
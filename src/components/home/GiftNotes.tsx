import { Button } from "../ui/button";

export default function GiftNotes() {
    return (
        <div>
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
                        Make It <span className="italic font-serif">Extra Special</span> with Personalised Gift Notes
                    </h2>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">
                        {/* Left: Large Hero Image */}
                        <div className="relative overflow-hidden rounded-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=900&fit=crop"
                                alt="Woman wearing elegant gold jewelry"
                                className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Right: 2x2 Grid of Price Range Images */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {/* Shop Under 10000 */}
                            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop"
                                    alt="Rings under 10000"
                                    className="w-full h-[180px] md:h-[250px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 whitespace-nowrap">
                                    Shop Under ₹10000
                                </button>
                            </div>

                            {/* Shop Under 20000 */}
                            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop"
                                    alt="Rings under 20000"
                                    className="w-full h-[180px] md:h-[250px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 whitespace-nowrap">
                                    Shop Under ₹20000
                                </button>
                            </div>

                            {/* Shop Under 50000 */}
                            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop"
                                    alt="Rings under 50000"
                                    className="w-full h-[180px] md:h-[250px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 whitespace-nowrap">
                                    Shop Under ₹50000
                                </button>
                            </div>

                            {/* E-Gift Cards */}
                            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
                                    alt="E-Gift Cards"
                                    className="w-full h-[180px] md:h-[250px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 whitespace-nowrap">
                                    E-Gift Cards
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
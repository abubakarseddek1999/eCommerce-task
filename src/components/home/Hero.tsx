import { ChevronRight, Search } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
    const categories = ["Rings", "Earrings", "Pendants", "Bracelets"]
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-8 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance px-2">
                            Step into Sparkle - Pure Gold & Silver Await
                        </h1>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto mt-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Earrings.."
                                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                                />
                                <Search className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden mb-6">
                        <div className="text-center mb-4">
                            <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Bestsellers</h3>
                            <div className="flex gap-3 overflow-x-auto pb-2 px-4 -mx-4 scrollbar-hide">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        className="px-4 py-2 rounded-full border border-gray-300 hover:border-amber-600 hover:bg-amber-50 transition-all text-sm whitespace-nowrap flex-shrink-0"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mt-8 md:mt-12">
                        <div className="order-2 md:order-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance leading-tight">
                                Because You Deserve to Feel Timeless.
                            </h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                                Each piece is thoughtfully designed to celebrate your individuality - blending modern elegance with
                                lasting craftsmanship.
                            </p>
                            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-6 rounded-full group w-full md:w-auto text-sm">
                                Explore the Elegance
                                <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            {/* Feature Badges */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 md:mt-12">
                                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-semibold text-xs md:text-sm">Timeless Design</p>
                                </div>
                                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-semibold text-xs md:text-sm">Lightweight Comfort</p>
                                </div>
                                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-semibold text-xs md:text-sm">Anti - Fade Polish</p>
                                </div>
                                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-semibold text-xs md:text-sm">Modern Minimal</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <img
                                src="/elegant-woman-wearing-gold-necklace-and-jewelry.jpg"
                                alt="Jewelry model"
                                className="rounded-2xl md:rounded-3xl w-full h-auto shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
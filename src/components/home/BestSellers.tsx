"use client";
import { ChevronRight, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useState } from "react";
import { productsByCategory } from "@/src/app/page";

export default function BestSellers() {
      const [activeCategory, setActiveCategory] = useState("Rings")
    
      const categories = ["Rings", "Earrings", "Pendants", "Bracelets", "Bangles"]
    
    return (
        <div>
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Explore Our Timeless Bestseller</h2>

                        <div className="hidden md:flex flex-wrap justify-center gap-3 mt-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full border transition-all ${activeCategory === cat
                                        ? "border-amber-600 bg-amber-600 text-white"
                                        : "border-gray-300 hover:border-amber-600 hover:bg-amber-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="md:hidden mt-6 -mx-4 px-4">
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-full border whitespace-nowrap flex-shrink-0 snap-start transition-all ${activeCategory === cat
                                            ? "border-amber-600 bg-amber-600 text-white shadow-md scale-105"
                                            : "border-gray-300 bg-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden mb-6">
                        <Swiper
                            key={activeCategory}
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            centeredSlides={false}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="bestseller-swiper"
                        >
                            {productsByCategory[activeCategory].map((product, idx) => (
                                <SwiperSlide key={idx} className="mb-10">
                                    <Card className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="relative overflow-hidden bg-gray-50">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <button className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-amber-50">
                                                <Heart className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="p-3">
                                            <h3 className="font-semibold text-xs mb-2">{product.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base font-bold">₹{product.price}</span>
                                                <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {productsByCategory[activeCategory].map((product, idx) => (
                            <Card
                                key={idx}
                                className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative overflow-hidden bg-gray-50">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <button className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-amber-50">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold">₹{product.price}</span>
                                        <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-6">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-3 md:px-8 md:py-6 group bg-transparent text-sm w-full md:w-auto"
                        >
                            Shop Bestsellers
                            <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
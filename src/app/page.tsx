"use client"
import { Search, ShoppingBag, Heart, Star, ChevronRight, Menu, X } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import Footer from "../components/share/Footer"
import Navbar from "../components/share/Navbar"
import Hero from "../components/home/Hero"
import BestSellers from "../components/home/BestSellers"
import Features from "../components/home/Features"
import Reviews from "../components/home/Reviews"
import UserGallery from "../components/home/UserGallery"
import EthosSection from "../components/home/EthosSection"
import Gift from "../components/home/Gift"
import WinterCollection from "../components/home/WinterCollection"
import GiftNotes from "../components/home/GiftNotes"
export const productsByCategory: Record<
  string,
  Array<{ name: string; price: number; originalPrice: number; image: string }>
> = {
  Rings: [
    { name: "TWISTED PETAL GOLD RING", price: 5990, originalPrice: 7990, image: "/elegant-gold-ring-jewelry.jpg" },
    { name: "DIAMOND ETERNITY RING", price: 12990, originalPrice: 15990, image: "/diamond-eternity-ring.jpg" },
    { name: "VINTAGE ROSE GOLD RING", price: 8990, originalPrice: 11990, image: "/vintage-rose-gold-ring.jpg" },
    {
      name: "CLASSIC SOLITAIRE RING",
      price: 15990,
      originalPrice: 19990,
      image: "/classic-solitaire-diamond-ring.jpg",
    },
  ],
  Earrings: [
    {
      name: "CHANDELIER DROP EARRINGS",
      price: 6990,
      originalPrice: 8990,
      image: "/chandelier-drop-gold-earrings.jpg",
    },
    { name: "PEARL STUD EARRINGS", price: 4990, originalPrice: 6990, image: "/pearl-stud-earrings-elegant.jpg" },
    { name: "HOOP DIAMOND EARRINGS", price: 9990, originalPrice: 12990, image: "/hoop-diamond-earrings.jpg" },
    { name: "VINTAGE DROP EARRINGS", price: 7990, originalPrice: 9990, image: "/vintage-drop-earrings-gold.jpg" },
  ],
  Pendants: [
    { name: "HEART PENDANT NECKLACE", price: 5990, originalPrice: 7990, image: "/heart-pendant-necklace-gold.jpg" },
    {
      name: "INFINITY SYMBOL PENDANT",
      price: 6990,
      originalPrice: 8990,
      image: "/infinity-symbol-pendant-diamond.jpg",
    },
    { name: "VINTAGE LOCKET PENDANT", price: 8990, originalPrice: 11990, image: "/vintage-locket-pendant-gold.jpg" },
    { name: "GEOMETRIC PENDANT", price: 7990, originalPrice: 9990, image: "/geometric-pendant-modern-gold.jpg" },
  ],
  Bracelets: [
    {
      name: "TWISTED PETAL GOLD BRACELET",
      price: 7990,
      originalPrice: 9990,
      image: "/gold-bracelet-jewelry-elegant-.jpg",
    },
    { name: "TENNIS BRACELET DIAMOND", price: 14990, originalPrice: 18990, image: "/tennis-bracelet-diamond.jpg" },
    { name: "CHARM BRACELET GOLD", price: 6990, originalPrice: 8990, image: "/charm-bracelet-gold.jpg" },
    { name: "BANGLE STACK SET", price: 9990, originalPrice: 12990, image: "/bangle-stack-set-gold.jpg" },
  ],
  Bangles: [
    {
      name: "CLASSIC GOLD BANGLES",
      price: 8990,
      originalPrice: 11990,
      image: "/placeholder.svg?height=400&width=350",
    },
    {
      name: "DIAMOND CUT BANGLES",
      price: 10990,
      originalPrice: 13990,
      image: "/placeholder.svg?height=400&width=350",
    },
    {
      name: "TEXTURED BANGLE PAIR",
      price: 7990,
      originalPrice: 9990,
      image: "/placeholder.svg?height=400&width=350",
    },
    {
      name: "ENGRAVED BANGLES SET",
      price: 9990,
      originalPrice: 12990,
      image: "/placeholder.svg?height=400&width=350",
    },
  ],
}
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <Navbar />
      </div>

      <Hero />

      {/* Bestsellers Section */}
      <BestSellers />

      {/* Explore Our Collection */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Explore Our Collection</h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {[
              { name: "Rings", image: "/collection-rings.jpg" },
              { name: "Earrings", image: "/collection-earrings.jpg" },
              { name: "Pendants", image: "/collection-pendants.jpg" },
              { name: "Bracelets", image: "/collection-bracelets.jpg" },
              { name: "Necklace", image: "/collection-necklace.jpg" },
              { name: "Bangles", image: "/collection-bangles.jpg" },
            ].map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-full aspect-square mb-2 md:mb-3 bg-white shadow-md group-hover:shadow-xl transition-all">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center font-semibold text-xs md:text-sm">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-12 bg-white md:bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Recently Viewed</h2>

          <div className="block md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={12}
              slidesPerView={2.2}
              pagination={{ clickable: true }}
              className="recently-viewed-swiper"
            >
              {[1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all">
                    <div className="relative overflow-hidden bg-white">
                      <img
                        src={`/jewelry-item-.jpg?height=300&width=250&query=jewelry item ${item}`}
                        alt="Product"
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-xs mb-1 truncate">TWISTED PETAL GOLD BRACELET</h3>
                      <span className="text-xs font-bold">₹7990</span>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={`/jewelry-item-.jpg?height=300&width=250&query=jewelry item ${item}`}
                    alt="Product"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-xs mb-1">TWISTED PETAL GOLD BRACELET</h3>
                  <span className="text-sm font-bold">₹7990</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Notes Section */}
       <GiftNotes />
      {/* Winter Collection & Lab Grown - Side by Side */}
      <WinterCollection />

      {/* Gifting Section */}
      <Gift />

      {/* User Gallery CTA */}
      <UserGallery />
      {/* Ethos Section */}
       <EthosSection />

      {/* Features Section - Lab Grown */}
      <Features />

      {/* Reviews Section */}
      <Reviews />

      <Footer />
    </div>
  )
}

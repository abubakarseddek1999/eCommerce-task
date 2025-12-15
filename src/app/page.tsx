"use client"
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
import RecentlyViewed from "../components/home/RecentlyViewed"
import ExploreCollection from "../components/home/ExploreCollection"
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
      <ExploreCollection />
      {/* Recently Viewed */}
      <RecentlyViewed />
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

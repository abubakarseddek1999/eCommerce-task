"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingBag, Heart, Star, ChevronRight, Menu, X } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import Footer from "../components/share/Footer"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Rings")

  const categories = ["Rings", "Earrings", "Pendants", "Bracelets", "Bangles"]

  const productsByCategory: Record<
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold tracking-wider">KILANGI</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                All Jewellery
              </a>
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                Gold
              </a>
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                Silver
              </a>
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                Gifting
              </a>
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="hover:text-amber-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-amber-600 transition-colors hidden md:block">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-amber-600 transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  All Jewellery
                </a>
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  Gold
                </a>
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  Silver
                </a>
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  Gifting
                </a>
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  About Us
                </a>
                <a href="#" className="text-sm hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

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

      {/* Bestsellers Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Explore Our Timeless Bestseller</h2>

            <div className="hidden md:flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeCategory === cat
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
                    className={`px-5 py-2 rounded-full border whitespace-nowrap flex-shrink-0 snap-start transition-all ${
                      activeCategory === cat
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
                <SwiperSlide key={idx}>
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
      <section className="py-12 md:py-24 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/gift-box-with-jewelry-and-personalized-note.jpg"
                alt="Gift notes"
                className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                Make it extra special with personalised gift notes
              </h2>
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-6 rounded-full w-full md:w-auto text-sm">
                Shop Under 10000
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Collection & Lab Grown - Side by Side */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <Card className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all">
              <img
                src="/winter-jewelry-collection-elegant-woman.jpg"
                alt="Winter collection"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                  Winter Love Has Arrived..
                </h3>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-fit text-xs md:text-sm px-4 py-2">
                  Explore New Arrivals <ChevronRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all hidden md:block">
              <img
                src="/lab-grown-gold-and-silver-jewelry-display.jpg"
                alt="Lab grown"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Introducing Lab Grown Silver and Gold</h3>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-fit mt-4">
                  Shop Gold and Silver <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-6 md:hidden">
            <Button variant="outline" className="rounded-full px-6 py-3 bg-transparent text-sm w-full">
              Explore More Collection <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Gifts That Celebrate Every Moment</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
              Varius velit platea quis pellentesque mi et imperdiet. dolor sit amet consectetur.
            </p>
          </div>

          <div className="block md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {[
                {
                  title: "BIRTHDAY",
                  desc: "Celebrate their special day with a timeless piece that shines as bright as they do.",
                  cta: "Shop Birthday Gifts",
                  image: "/birthday-jewelry-gift-celebration.jpg",
                },
                {
                  title: "ANNIVERSARY",
                  desc: "Mark your love story with jewellery that symbolizes everlasting connection and devotion.",
                  cta: "Shop Anniversary Gifts",
                  image: "/anniversary-couple-jewelry-gift.jpg",
                },
                {
                  title: "ENGAGEMENT",
                  desc: "Begin forever with a piece that captures the promise of your beautiful journey ahead.",
                  cta: "Shop Engagement Gifts",
                  image: "/engagement-ring-proposal-romantic.jpg",
                },
              ].map((gift, idx) => (
                <SwiperSlide key={idx}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={gift.image || "/placeholder.svg"}
                        alt={gift.title}
                        className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-amber-600">
                        {gift.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{gift.desc}</p>
                      <Button
                        variant="outline"
                        className="rounded-full group/btn bg-transparent text-sm w-full border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
                      >
                        {gift.cta}
                        <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8">
            {[
              {
                title: "BIRTHDAY",
                desc: "Celebrate their special day with a timeless piece that shines as bright as they do.",
                cta: "Shop Birthday Gifts",
                image: "/birthday-jewelry-gift-celebration.jpg",
              },
              {
                title: "ANNIVERSARY",
                desc: "Mark your love story with jewellery that symbolizes everlasting connection and devotion.",
                cta: "Shop Anniversary Gifts",
                image: "/anniversary-couple-jewelry-gift.jpg",
              },
              {
                title: "ENGAGEMENT",
                desc: "Begin forever with a piece that captures the promise of your beautiful journey ahead.",
                cta: "Shop Engagement Gifts",
                image: "/engagement-ring-proposal-romantic.jpg",
              },
            ].map((gift, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gift.image || "/placeholder.svg"}
                    alt={gift.title}
                    className="w-full h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                    <ChevronRight className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div className="p-6 bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-amber-50/30 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-amber-600">
                    {gift.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {gift.desc}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full group/btn bg-transparent border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {gift.cta}
                    <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 md:px-8 md:py-6 bg-transparent text-sm w-full md:w-auto"
            >
              Explore More Collection <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* User Gallery CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Have this item? Show us how you wear it.</h3>
            <p className="text-gray-600 text-sm mb-6">
              Tag <span className="font-semibold">@kilangi</span> and you could be featured right here
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button variant="outline" className="rounded-full bg-transparent text-sm flex-1">
                Add Your Photo
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent text-sm flex-1">
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xs md:text-sm font-semibold text-amber-600 mb-2 uppercase tracking-wider">
                OUR ETHOS
              </h3>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Every Shape. Every Sparkle.</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                Every piece we create is a blend of artistry and awareness handcrafted with precision, guided by
                purpose.
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                From ethically sourced materials to sustainable processes, we believe true beauty shines brightest when
                it's made responsibly.
              </p>
              <Button variant="outline" className="rounded-full bg-transparent text-sm w-full md:w-auto">
                Know More <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div>
              <img
                src="/jewelry-craftsmanship-artisan-hands-creating.jpg"
                alt="Ethos"
                className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Lab Grown */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              Not Just A Trend. It's The Future.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-4">
              Our lab-grown gold and silver jewellery is crafted with the same brilliance and purity as mined metals
              without the compromise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { icon: "925", title: "925 Sterling Silver" },
              { icon: "💎", title: "Certified Diamonds" },
              { icon: "🌱", title: "Ethical Sourcing" },
              { icon: "✓", title: "BIS Hallmark" },
              { icon: "✨", title: "Customisable Designs" },
              { icon: "↺", title: "Free 15 Days Return & Exchange" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
              >
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{feature.icon}</div>
                <p className="text-xs md:text-sm font-semibold leading-tight">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Voices of Our Happy Customer</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Every piece we create carries a story but nothing shines brighter than the words of those who wear them.
            </p>
          </div>

          <div className="block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              className="reviews-swiper pb-12"
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <Card className="p-5 border-0 shadow-lg">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-base mb-3">"So pretty!"</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The
                      craftsmanship is stunning, and the shine is just perfect.
                    </p>
                    <p className="font-semibold text-sm">Harshad Mehta</p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="p-6 border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-4">"So pretty!"</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The
                  craftsmanship is stunning, and the shine is just perfect.
                </p>
                <p className="font-semibold">Harshad Mehta</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 md:px-8 md:py-6 bg-transparent text-sm w-full md:w-auto"
            >
              Read More Reviews <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

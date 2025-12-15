"use client"
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div>
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
        </div>
    )
}
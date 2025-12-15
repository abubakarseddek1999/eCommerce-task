export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">KILANGI</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Kilangi Jewellery is a premium brand specializing in exquisite silver and gold jewellery.
                            </p>
                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                Known for its timeless elegance and fine craftsmanship, Kilangi offers a curated collection of
                                traditional and contemporary designs perfect for every occasion.
                            </p>
                        </div>

                        {/* Our Collection */}
                        <div>
                            <h4 className="font-bold mb-4 text-sm md:text-base">OUR COLLECTION</h4>
                            <ul className="space-y-2 md:space-y-3 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Rings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Earrings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Pendants
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Bracelets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Necklaces
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Bangles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Accessories
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Policies */}
                        <div>
                            <h4 className="font-bold mb-4 text-sm md:text-base">POLICIES</h4>
                            <ul className="space-y-2 md:space-y-3 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        FAQ's Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-sm md:text-base">QUICK LINKS</h4>
                            <ul className="space-y-2 md:space-y-3 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        All Jewellery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Gold
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Silver
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Gifting
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
                        <p className="text-gray-400 text-xs md:text-sm">2025 / Kilangi</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
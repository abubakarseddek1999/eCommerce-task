export default function Features() {
    return (
        <div>
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
        </div>
    )
}
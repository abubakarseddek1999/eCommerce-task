export default function ExploreCollection() {
    return (
        <div>
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
        </div>
    )
}
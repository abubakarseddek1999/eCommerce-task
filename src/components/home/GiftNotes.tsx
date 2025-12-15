export default function GiftNotes() {
    return (
        <div>
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

        </div>
    )
}
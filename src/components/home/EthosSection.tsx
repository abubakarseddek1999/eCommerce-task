import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function EthosSection() {
    return (
        <div>
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
        </div>
    )
}
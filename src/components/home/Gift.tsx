import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
export default function Gift() {
    return (
        <div>
            <section className="py-12 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Gifts That Celebrate Every Moment</h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
                            Varius velit platea quis pellentesque mi et imperdiet. dolor sit amet consectetur.
                        </p>
                    </div>

                    <div className=" ">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                              }}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1.2, // mobile
                                },
                                640: {
                                  slidesPerView: 2.2, // tablet
                                },
                                1024: {
                                  slidesPerView: 3.2, // desktop
                                },
                              }}
                            pagination={{ clickable: true }}
                            className="pb-12"
                        >
                            {[
                                {
                                    title: "BIRTHDAY",
                                    desc: "Celebrate their special day with a timeless piece that shines as bright .",
                                    cta: "Shop Birthday Gifts",
                                    image: "/birthday-jewelry-gift-celebration.jpg",
                                },
                                {
                                    title: "ANNIVERSARY",
                                    desc: "Mark your love story with jewellery that symbolizes everlasting connection.",
                                    cta: "Shop Anniversary Gifts",
                                    image: "/anniversary-couple-jewelry-gift.jpg",
                                },
                                {
                                    title: "ENGAGEMENT",
                                    desc: "Begin forever with a piece that captures the promise of your beautiful .",
                                    cta: "Shop Engagement Gifts",
                                    image: "/engagement-ring-proposal-romantic.jpg",
                                },
                                {
                                    title: "BIRTHDAY",
                                    desc: "Celebrate their special day with a timeless piece that shines as bright .",
                                    cta: "Shop Birthday Gifts",
                                    image: "/birthday-jewelry-gift-celebration.jpg",
                                },
                            ].map((gift, idx) => (
                                <SwiperSlide key={idx}>
                                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group mb-10">
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
        </div>
    )
}
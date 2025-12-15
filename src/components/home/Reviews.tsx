import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
export default function Reviews() {
    return (
        <div>
            <section className="py-12 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Voices of Our Happy Customer</h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Every piece we create carries a story but nothing shines brighter than the words of those who wear them.
                        </p>
                    </div>

                    <div className="">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
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
                            autoplay={{ delay: 4000 }}
                            className="reviews-swiper pb-125"
                        >
                            {[1, 2, 3, 4].map((item) => (
                                <SwiperSlide key={item} className="mb-10">
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
        </div>
    )
}
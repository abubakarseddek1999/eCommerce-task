import { Card } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
export default function RecentlyViewed() {
    return (
        <div>
            <section className="py-12 bg-white md:bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Recently Viewed</h2>

                    <div className="">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            spaceBetween={12}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2.2, // mobile
                                },
                                640: {
                                    slidesPerView: 2.2, // tablet
                                },
                                1024: {
                                    slidesPerView: 3.2, // desktop
                                },
                            }}
                            // pagination={{ clickable: true }}
                            className="recently-viewed-swiper"
                        >
                            {[1, 2, 3, 4,5,6,7,8,9,10].map((item) => (
                                <SwiperSlide key={item} className="mb-10">
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

                </div>
            </section>
        </div>
    )
}
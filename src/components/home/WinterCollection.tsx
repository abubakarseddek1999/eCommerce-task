import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function WinterCollection() {
    return (
        <div>
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
        </div>
    )
}
import { Button } from "../ui/button";

export default function UserGallery() {
    return (
        <div>
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Have this item? Show us how you wear it.</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Tag <span className="font-semibold">@kilangi</span> and you could be featured right here
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                            <Button variant="outline" className="rounded-full bg-transparent text-sm flex-1">
                                Add Your Photo
                            </Button>
                            <Button variant="outline" className="rounded-full bg-transparent text-sm flex-1">
                                View Our Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
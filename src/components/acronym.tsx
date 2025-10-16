import { Palette, Handshake, Sprout } from "lucide-react";

export function DEIAcronymSection() {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-16 px-4 sm:px-6 md:px-6 lg:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}

                {/* Three columns */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-12">
                    {/* Diversity */}
                    <div className="text-center">
                        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-6 flex justify-center">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <Palette className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-gray-600" />
                            </div>
                        </div>
                        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black mb-3 sm:mb-3 md:mb-4 lg:mb-4">
                            Diversity
                        </h3>
                        <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed">
                            Our community thrives on creativity and imagination.
                            Whether it&apos;s designing breathtaking builds,
                            developing exciting mini-games, or experimenting
                            with fresh concepts, we encourage bold ideas and
                            empower our team to innovate freely.
                        </p>
                    </div>

                    {/* Equity */}
                    <div className="text-center">
                        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-6 flex justify-center">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <Handshake className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-gray-600" />
                            </div>
                        </div>
                        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black mb-3 sm:mb-3 md:mb-4 lg:mb-4">
                            Equity
                        </h3>
                        <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed">
                            Great events are built through clear roles and
                            expertise. Our builders, developers, artists, and
                            team each handle their part with care, ensuring
                            every experience feels polished, seamless, and
                            enjoyable for all our players.
                        </p>
                    </div>

                    {/* Inclusion */}
                    <div className="text-center">
                        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-6 flex justify-center">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <Sprout className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-gray-600" />
                            </div>
                        </div>
                        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black mb-3 sm:mb-3 md:mb-4 lg:mb-4">
                            Inclusion
                        </h3>
                        <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed">
                            Inclusion means recognizing, respecting, and valuing
                            all the layers of diversity and differences in an
                            individual, and fostering a workplace environment
                            where all team members feel comfortable and
                            confident to show up as their full selves. With
                            inclusion, our aim is to ensure everyone feels
                            valued.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

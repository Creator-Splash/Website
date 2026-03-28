// All head images from public/heads/
const headImages = Array.from({ length: 25 }, (_, i) => `/heads/Axolotl_${i + 1}.png`);

// Fixed zig-zag positions with 6x6 gap pattern
// Each position is calculated based on a grid with offset for zig-zag effect
const headPositions = [
    // Row 1 (top)
    { top: 6, left: 6 },
    { top: 6, left: 30 },
    { top: 6, left: 54 },
    { top: 6, left: 78 },
    // Row 2 (offset by 12% for zig-zag)
    { top: 30, left: 18 },
    { top: 30, left: 42 },
    { top: 30, left: 66 },
    { top: 30, left: 90 },
    // Row 3
    { top: 54, left: 6 },
    { top: 54, left: 30 },
    { top: 54, left: 54 },
    { top: 54, left: 78 },
    // Row 4 (offset for zig-zag)
    { top: 78, left: 18 },
    { top: 78, left: 42 },
    { top: 78, left: 66 },
];

// Fixed head size (3x of original 30-70px range, using ~150px)
const HEAD_SIZE = 150;

export default function WorkedWith() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#181d3a] overflow-hidden min-h-[600px]">
            {/* Zig-zag pattern heads - fixed positions */}
            {headPositions.map((pos, index) => (
                <img
                    key={index}
                    src={headImages[index % headImages.length]}
                    alt=""
                    className="absolute pointer-events-none select-none"
                    style={{
                        top: `${pos.top}%`,
                        left: `${pos.left}%`,
                        width: `${HEAD_SIZE}px`,
                        height: `${HEAD_SIZE}px`,
                        opacity: 0.5,
                        zIndex: 1,
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title - Top Left */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left underline underline-offset-4">
                    We&apos;ve worked with...
                </h3>

                {/* 2 rows of clients - only 1 image, rest empty */}
                <div>
                    {/* Row 1 */}
                    <div className="flex items-center gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-10 md:mb-12">
                        <img
                            src="/workedwith/image.png"
                            alt="Partner"
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover hover:scale-105 transition-transform duration-300 bg-white/10"
                        />
                        {/* Empty spaces for future logos */}
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 hidden sm:block" />
                    </div>

                    {/* Row 2 - Empty for future logos */}
                    <div className="flex items-center gap-8 sm:gap-12 md:gap-16">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40" />
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 hidden sm:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}

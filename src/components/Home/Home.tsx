import { FaYoutube } from "react-icons/fa";

export default function Home() {
    return (
        <section className="home" id="inicio">
            <div className="overflow-hidden w-full max-w-full lg:max-w-[95%] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[95vh] mx-auto">
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
                    <video
                        src="/intro.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    />
                    <a
                        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-4 rounded-md font-bold text-base sm:text-lg md:text-xl lg:text-[22px] uppercase flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 transition-all duration-300 no-underline z-10 shadow-lg tracking-wider hover:bg-white hover:text-black hover:-rotate-2 hover:scale-110 hover:shadow-[0_8px_30px_rgba(255,0,0,0.6)]"
                        href="https://www.youtube.com/@creatorsplash"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="text-xl sm:text-2xl md:text-[26px] lg:text-[30px]" />
                        <span>SUBSCRIBE</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

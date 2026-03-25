// src/app/page.tsx
import { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Home from "@/components/Home/Home";
import About from "@/components/Home/About";
import Informations from "@/components/Home/Info";

const faqData = [
    {
        question: "What is Creator Splash?",
        answer: "Creator Splash brings together eight teams of five creators. Each Event features a rotating line-up of 10 original games, but only 7 will be played. To keep things fresh, players participate in a randomized wheel spin to determine which games make it into the voting pool. The games range from aerial combat and underwater salvage to spooky betrayal and much more. Unlike other events, there is no final game that must be played, and during the final three games, team points are hidden until the end.",
    },
    {
        question: "Our Mission",
        answer: "Our mission is to create an inclusive, welcoming space where creators can connect, collaborate, and entertain their audiences through unique and memorable gameplay experiences.",
    },
    {
        question: "How can I join?",
        answer: "Unfortunately, Creator Splash is currently an invite-only event. This may change in the future, but in the meantime, feel free to show support for the event by joining the Discord!",
    },
    {
        question: "Can I stream or record the event for my own content?",
        answer: "Of course! Depending on the event we will suggest either streaming or recording.",
    },
    {
        question: "Can I ask Harp to be in my video?",
        answer: "Harp's schedule varies depending on the day so it just depends on when you catch him. Please keep in mind Harp usually has a pretty tight schedule so we're afraid the odds of him joining isn't the greatest.",
    },
    {
        question: "Where can I watch Creator Splash content?",
        answer: "You can subscribe to the Creator Splash YouTube channel to keep up to date with videos.",
    },
];

export const metadata: Metadata = {
    title: "Creator Splash",
    description:
        "Learn about Harp and the Creator Splash community - the most chaotic Minecraft events on the internet!",
};

export default function Page() {
    return (
        <>
            <div className="min-h-screen  bg-[#1a202c]">
                {/* Hero Section with Angled Video Background */}
                <Home />

                {/* About Section */}
                <About />

                {/* Community Section */}
                <Informations />

                {/* FAQ Section - Darker Background */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-20 px-4 bg-[#1a202c]">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="relative inline-block mb-6 animate-fade-in">
                            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
                                FAQ
                            </h2>
                            {/* White underline centered */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white animate-slide-in delay-100"></div>
                        </div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-300 mb-12 sm:mb-14 md:mb-16 lg:mb-16 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
                            We get asked lots of questions, lots of times, so
                            we&apos;ve gathered the most frequently asked ones
                            here. If you&apos;ve something to ask that&apos;s
                            not covered, then do use our contact form and
                            we&apos;ll get back to you as soon as we can!
                        </p>

                        <Accordion
                            type="single"
                            collapsible
                            className="w-full text-left bg-transparent"
                        >
                            {faqData.map((faq, idx) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`faq-${idx}`}
                                    className="border-b border-gray-700"
                                >
                                    <AccordionTrigger className="text-white text-base sm:text-lg md:text-xl lg:text-xl font-bold py-4 hover:text-cyan-400 transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* We&apos;ve worked with Section */}
                <section className="py-12 sm:py-14 md:py-16 lg:py-16 px-4 bg-[#1a202c]">
                    <div className="container mx-auto max-w-6xl text-center">
                        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black text-white mb-8 sm:mb-10 md:mb-12 lg:mb-12 animate-fade-in">
                            We&apos;ve worked with...
                        </h3>

                        {/* Partner logos */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/workedwith/image.png"
                                alt="GPortal"
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer with Social Icons */}
            </div>
        </>
    );
}

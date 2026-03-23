"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Twitter, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Events() {
    const [contestSlide, setContestSlide] = useState(0);
    const [gamesSlide, setGamesSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5);

    const storeUrl = "https://creatorsplash-shop.fourthwall.com/";

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth < 640) {
                    setSlidesToShow(2);
                } else if (window.innerWidth < 768) {
                    setSlidesToShow(3);
                } else if (window.innerWidth < 1024) {
                    setSlidesToShow(4);
                } else {
                    setSlidesToShow(5);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const merchSlides = [
        {
            title: "Season 1 Merch",
            description:
                "Creator Splash season 1 Merch is here! Want your own axolotl/sea themed merch? Press the button below to check it out!",
            image: "/heads/Axolotl_1.png",
            logoimage: "/logo.svg",
        },
    ];

    const contestSlides = [
        {
            title: "Creator Splash ?",
            description:
                "Creator Splash brings together eight teams of five creators. Each event features a rotating line-up from thirteen original games, but only nine will be played. To keep things fresh, players participate in a randomized wheel spin to determine which games make it into the voting pool. The games range from aerial combat and underwater salvage to spooky betrayal and much more. Unlike other events, there is no final game that must be played, and during the final three games, team points are hidden until the end.",
            image: "/merch.png",
        },
        {
            title: "Season Opening",
            description:
                "Before each season starts, Creator Splash hosts a musical animation ceremony that brings together some of Minecraft's best animators and singers/groups to perform live on stage.",
            image: "/SH03.png",
        },
        {
            title: "Voting",
            description:
                "Voting is a key part of Creator Splash. Players vote for their favorite games, and the top nine games are selected for the event. This ensures that each event is unique and tailored to the players' preferences.",
            image: "/SH05.png",
        },
        {
            title: "The Games",
            description:
                "Creator Splash brings together eight teams of five creators. Each Event features a rotating line-up of 10 original games, but only 7 will be played. To keep things fresh, players participate in a randomized wheel spin to determine which games make it into the voting pool. The games range from aerial combat and underwater salvage to spooky betrayal and much more.",
            image: "/SH05_1.png",
        },
    ];

    const gamesSlides = [
        {
            slug: "super-soakers",
            title: "Super Soakers",
            image: "/games/Super_Soakers.svg",
        },
        // {
        //   slug: "cloud-riders",
        //   title: "Cloud Riders",
        //   image: "/games/Cloud_Riders.svg",
        // },
        {
            slug: "flight-school",
            title: "Flight School",
            image: "/games/Flight_School.svg",
        },
        {
            slug: "haunted-hull",
            title: "Haunted Hull",
            image: "/games/Haunted_Hull.svg",
        },
        {
            slug: "oxygen-heist",
            title: "Oxygen Heist",
            image: "/games/Oxygen_Heist.svg",
        },
        {
            slug: "nemesis-rising",
            title: "Nemesis Rising",
            image: "/games/Nemesis_Rising.svg",
        },
        {
            slug: "sea-raceway",
            title: "Sea Raceway",
            image: "/games/Sea_Raceway.svg",
        },
        {
            slug: "deep-divers",
            title: "Deep Divers",
            image: "/games/Deep_Divers.svg",
        },
        {
            slug: "multiverse",
            title: "Multiverse",
            image: "/placeholder.svg",
        },
        // {
        //   slug: "hunted",
        //   title: "Hunted",
        //   image: "",
        // },
        {
            slug: "delivery-of-doom",
            title: "Delivery Of Doom",
            image: "/placeholder.svg",
        },
        {
            slug: "redacted",
            title: " [REDACTED]",
            image: "/placeholder.svg",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Video */}
            <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-162 overflow-hidden">
                {/* Blurred Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
                >
                    <source src="/intro.mp4" type="video/mp4" />
                </video>

                {/* Centered Video Card Container */}
                <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                    <div className="relative max-w-6xl w-full">
                        {/* Main Video Card */}
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-130 object-cover rounded-lg mb-6 sm:mb-8 md:mb-12"
                            >
                                <source src="/intro.mp4" type="video/mp4" />
                            </video>

                            {/* Text Overlay on Video Card */}
                            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                                <div className="text-center text-white px-4 sm:px-6 md:px-8">
                                    <h1
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-yellow-400 drop-shadow-lg"
                                        style={{
                                            fontFamily: "Impact, sans-serif",
                                            textShadow:
                                                "3px 3px 6px rgba(0,0,0,0.8)",
                                            WebkitTextStroke:
                                                "1px rgba(0,0,0,0.5)",
                                        }}
                                    >
                                        <br />
                                        <div className="flex items-center justify-center">
                                            <Image
                                                width={500}
                                                height={500}
                                                src="/logo.png"
                                                alt=""
                                                className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto"
                                            />
                                        </div>
                                    </h1>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto drop-shadow-md font-medium px-2">
                                        Creator Splash is a Minecraft event
                                        bringing 40 creators together to compete
                                        in a brand-new roster of Minecraft
                                        games!
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm sm:text-base md:text-lg lg:text-xl">
                                        <a
                                            href="https://discord.com/invite/Fpa9Ps8NdR"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 font-bold text-white w-full sm:w-auto">
                                                DISCORD
                                            </Button>
                                        </a>
                                        <a
                                            href={storeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 font-bold text-white w-full sm:w-auto">
                                                MERCH
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Cards */}
            <section
                className="relative py-8 bg-[#1a202c] -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-32 xl:-mt-50 -bottom-1"
                style={{
                    clipPath:
                        "polygon(0 20%, 5% 10%, 10% 20%, 15% 10%, 20% 20%, 25% 10%, 30% 20%, 35% 10%, 40% 20%, 45% 10%, 50% 20%, 55% 10%, 60% 20%, 65% 10%, 70% 20%, 75% 10%, 80% 20%, 85% 10%, 90% 20%, 95% 10%, 100% 20%, 100% 100%, 0 100%)",
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-30 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10">
                        {/*<Card className="bg-purple-600 text-white p-4 sm:p-6 hover:bg-purple-700 transition-colors cursor-pointer">
                            <a
                                href="https://discord.com/invite/Fpa9Ps8NdR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center">
                                    <Users className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                                    <div>
                                        <div className="text-xs sm:text-sm font-semibold opacity-90">
                                            DISCORD
                                        </div>
                                        <div className="text-sm sm:text-base font-bold">
                                            Meet other players!
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Card>*/}
                        <Card className="bg-blue-500 text-white p-4 sm:p-6 hover:bg-blue-600 transition-colors cursor-pointer">
                            <a
                                href="https://x.com/CreatorSplash"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center">
                                    <Twitter className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                                    <div>
                                        <div className="text-xs sm:text-sm font-semibold opacity-90">
                                            TWITTER
                                        </div>
                                        <div className="text-sm sm:text-base font-bold">
                                            Follow us for news!
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Card>
                        <Card className="bg-red-600 text-white p-4 sm:p-6 hover:bg-red-700 transition-colors cursor-pointer sm:col-span-2 md:col-span-1">
                            <a
                                href="https://www.youtube.com/@creatorsplash"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center">
                                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                                    <div>
                                        <div className="text-xs sm:text-sm font-semibold opacity-90">
                                            YOUTUBE
                                        </div>
                                        <div className="text-sm sm:text-base font-bold">
                                            Watch our videos!
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    </div>
                </div>
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
                    <svg
                        className="relative block w-full h-12 sm:h-16 md:h-20"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z"
                            fill="#39b5ff"
                        />
                    </svg>
                </div>
            </section>

            
           

            {/* Merch section */}
            <section className="relative bg-[#39b5ff] py-12 sm:py-16 md:py-20 lg:py-24 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1100px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/merch1.png"
                        alt="meow"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Optional overlay to maintain text readability */}
                <div className="absolute inset-0 z-10"></div>

                {/* Centered Content Container */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                    <Link href="https://creatorsplash-shop.fourthwall.com/en-gbp">
                        {" "}
                        <button className="bg-[#fb8246] text-[#000000] font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:bg-[#ff946d] transition-colors text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            Support your team
                        </button>
                    </Link>
                </div>

                {/* Wavy Bottom Border */}
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
                    <svg
                        className="relative block w-full h-12 sm:h-16 md:h-20"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,30 1200,60 L1200,120 L0,120 Z"
                            fill="#3b82f6"
                        />
                    </svg>
                </div>
            </section>

            {/* Games Section */}
            <section className="relative bg-[#3b82f6] py-8 sm:py-12 md:py-14 lg:py-16">
                <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
                    <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-2">
                            OUR GAME
                        </h2>
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-[#feb2da]"
                            style={{
                                fontFamily: "Impact, sans-serif",
                                WebkitTextStroke: "1px black",
                                color: "#feb2da",
                            }}
                        >
                            ROSTER
                        </h1>
                    </div>

                    {/* <div className="relative max-w-6xl mx-auto">

            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 z-10 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-3 sm:p-4 md:p-6 lg:p-8 rounded-full hidden sm:flex"
              onClick={() =>
                setGamesSlide(Math.max(0, gamesSlide - slidesToShow))
              }
              disabled={gamesSlide === 0}
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Button>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2 md:gap-3">
              {gamesSlides
                .slice(gamesSlide, gamesSlide + slidesToShow)
                .map((game, index) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className="block group"
                  >
                    <div className="flex flex-col items-center">
                      <Card
                        className={`bg-blue overflow-hidden relative aspect-[9/16] rounded-xl w-full ${
                          index % 2 === 1 ? "mt-2 sm:mt-3 md:mt-4" : ""
                        }`}
                      >

                        <Image
                          src={game.image || "/iamge.svg"}
                          alt=""
                          fill
                          className="object-cover rounded-xl"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          unoptimized={true}
                        />
                      </Card>


                      <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white mt-2 sm:mt-3 text-center px-1">
                        {game.title}
                      </h2>
                    </div>
                  </Link>
                ))}
            </div>


            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 z-10 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-3 sm:p-4 md:p-6 lg:p-8 rounded-full hidden sm:flex"
              onClick={() =>
                setGamesSlide(
                  Math.min(
                    gamesSlides.length - slidesToShow,
                    gamesSlide + slidesToShow
                  )
                )
              }
              disabled={gamesSlide >= gamesSlides.length - slidesToShow}
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Button>


            <div className="flex justify-center mt-4 space-x-4 sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white p-3 rounded-full"
                onClick={() =>
                  setGamesSlide(Math.max(0, gamesSlide - slidesToShow))
                }
                disabled={gamesSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white p-3 rounded-full"
                onClick={() =>
                  setGamesSlide(
                    Math.min(
                      gamesSlides.length - slidesToShow,
                      gamesSlide + slidesToShow
                    )
                  )
                }
                disabled={gamesSlide >= gamesSlides.length - slidesToShow}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2">
              {(() => {
                const totalDots = Math.ceil(gamesSlides.length / slidesToShow);

                return Array.from({ length: totalDots }).map((_, idx) => {
                  const targetSlide = idx * slidesToShow;
                  const maxSlide = Math.max(
                    0,
                    gamesSlides.length - slidesToShow
                  );
                  const actualTargetSlide = Math.min(targetSlide, maxSlide);

                  const isActive = gamesSlide === actualTargetSlide;

                  return (
                    <button
                      key={idx}
                      className={`w-3 h-3 ${
                        isActive
                          ? "bg-blue-600 rotate-45"
                          : "bg-white/30 rounded-full"
                      }`}
                      onClick={() => setGamesSlide(actualTargetSlide)}
                    />
                  );
                });
              })()}
            </div>
          </div> */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Games Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                            {gamesSlides.map((game, index) => (
                                <Link
                                    key={game.slug}
                                    href={`/games/${game.slug}`}
                                    className="block group"
                                >
                                    <div className="flex flex-col items-center">
                                        <Card
                                            className={`bg-blue overflow-hidden relative aspect-[9/16] rounded-xl w-full `}
                                        >
                                            {/* Background Image using Next.js Image */}
                                            <Image
                                                src={game.image || "/iamge.svg"}
                                                alt=""
                                                fill
                                                className="object-cover rounded-xl"
                                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                                                unoptimized={true}
                                            />
                                        </Card>

                                        {/* Game title outside the card */}
                                        <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white mt-2 sm:mt-3 text-center px-1">
                                            {game.title}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

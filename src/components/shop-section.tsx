import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
    <Card className="overflow-hidden py-0 bg-white">
        <div className="aspect-video relative  ">
            <Image
                src="/placeholder.svg"
                alt={title}
                fill
                className="object-cover"
            />
            <div className="absolute top-0 left-0 w-8 h-8 rotate-45 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm rotate-45">
                    +
                </span>
            </div>
        </div>
        <CardContent className="p-4">
            <h3 className="text-gray-800 font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </CardContent>
    </Card>
);

interface PricingCardProps {
    days: number;
    price: number;
    type: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ days, price, type }) => (
    <div className="text-center">
        <div className="text-gray-800 font-bold text-lg mb-1">
            {days} Days ({type})
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-4">${price}</div>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {type === "Auto-Renew" ? "SUBSCRIBE" : "ADD TO CART"}
        </Button>
    </div>
);

export default function MCCPlusSection() {
    const features = [
        {
            title: "Feature One",
            description: "This is just some test description for feature one.",
        },
        {
            title: "Feature Two",
            description: "Another placeholder description for feature two.",
        },
        {
            title: "Feature Three",
            description: "Testing description content for feature three.",
        },
        {
            title: "Feature Four",
            description: "Dummy description text for feature four.",
        },
        {
            title: "Feature Five",
            description: "This is just filler text for testing feature five.",
        },
        {
            title: "Feature Six",
            description: "Some test description goes here for feature six.",
        },
        {
            title: "Feature Seven",
            description: "Example placeholder for feature seven's description.",
        },
        {
            title: "Feature Eight",
            description: "Test description text for feature eight.",
        },
        {
            title: "Feature Nine",
            description: "Here's some dummy content for feature nine.",
        },
        {
            title: "Feature Ten",
            description: "Final test description for feature ten.",
        },
    ];

    // Hardcoded positions for left side axolotls
    const leftAxolotls = [
        { num: 1, top: 5, left: 2, rotation: -15 },
        { num: 2, top: 30, left: 15, rotation: 5 },
        { num: 8, top: 50, left: 2, rotation: 18 },
        { num: 9, top: 5, left: 25, rotation: 15 },
        { num: 14, top: 50, left: 25, rotation: -15 },
    ];

    // Hardcoded positions for right side axolotls
    const rightAxolotls = [
        { num: 15, top: 5, right: 2, rotation: 15 },
        { num: 17, top: 30, right: 15, rotation: -5 },
        { num: 18, top: 50, right: 2, rotation: -18 },
        { num: 24, top: 5, right: 25, rotation: -15 },
        { num: 22, top: 50, right: 25, rotation: 5 },
    ];

    return (
        <>
            <section className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl w-full">
                    {/* Purple Banner */}
                    <div className="bg-gradient-to-r py-8 sm:py-12 md:py-16 lg:py-16 px-4 rounded-2xl relative overflow-hidden">
                        <div className="text-center">
                            <div className="rounded-xl mx-auto mb-6 flex items-center justify-center relative">
                                <Link
                                    href="https://creatorsplash-shop.fourthwall.com/en-gbp/products/axolotl-mug"
                                    target="_blank"
                                >
                                    <Image
                                        src="/mug.svg"
                                        alt="mug"
                                        width={420}
                                        height={800}
                                        className="relative z-10 transition-all duration-300 hover:scale-[1.05] w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto"
                                    />
                                </Link>

                                {/* Left side axolotls - hidden on mobile/tablet */}
                                {leftAxolotls.map((axolotl) => (
                                    <Image
                                        key={`left-${axolotl.num}`}
                                        src={`/heads/Axolotl_${axolotl.num}.png`}
                                        alt="axolotl"
                                        width={200}
                                        height={120}
                                        className="absolute opacity-80 hidden lg:block"
                                        style={{
                                            transform: `rotate(${axolotl.rotation}deg)`,
                                            top: `${axolotl.top}%`,
                                            left: `${axolotl.left}%`,
                                        }}
                                    />
                                ))}

                                {/* Right side axolotls - hidden on mobile/tablet */}
                                {rightAxolotls.map((axolotl) => (
                                    <Image
                                        key={`right-${axolotl.num}`}
                                        src={`/heads/Axolotl_${axolotl.num}.png`}
                                        alt="axolotl"
                                        width={200}
                                        height={120}
                                        className="absolute opacity-80 hidden lg:block"
                                        style={{
                                            transform: `rotate(${axolotl.rotation}deg)`,
                                            top: `${axolotl.top}%`,
                                            right: `${axolotl.right}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white flex flex-col items-center justify-center px-4 py-4 sm:py-6 md:py-8 lg:py-8">
                <div className="max-w-7xl w-full">
                    {/* FeatureCard Section - COMMENTED OUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-12">
                        {/*
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
      */}
                    </div>

                    {/* Pricing Cards */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <PricingCard days={30} price={7.69} type="Auto-Renew" />
            <PricingCard days={90} price={19.99} type="Top-Up" />
            <PricingCard days={360} price={76.79} type="Top-Up" />
          </div> */}
                </div>
            </section>
        </>
    );
}

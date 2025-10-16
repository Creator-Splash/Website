"use client";
import Link from "next/link";
import { Button } from "@/components/ui/8bit/button";
import { useState, useMemo } from "react";

interface TeamRole {
    name: string;
    bg: string;
    hoverBg: string;
    textColor: string;
    url: string;
}

const teamRoles: TeamRole[] = [
    {
        name: "Sponsorships",
        bg: "#ef4444", // red-500
        hoverBg: "#dc2626", // red-600
        textColor: "white",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScaPMqaNq3wJeXz0kvZMxD78uE0PWBoWMAPpLAlbmA6NUoyNA/viewform",
    },
    {
        name: "Testers",
        bg: "#fde047", // yellow-300
        hoverBg: "#facc15", // yellow-400
        textColor: "black",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScAXjNcah19fgnN7mYXs11reg7OQKpCjCUG1vn-Rt4fpjgCww/viewform",
    },
    {
        name: "Discord Staff",
        bg: "#22d3ee", // cyan-400
        hoverBg: "#06b6d4", // cyan-500
        textColor: "black",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSe_vQzbYGItLFZJHOR0hsnJvZzajNBS0xzx7j00cMBXTEGGPw/viewform",
    },
    {
        name: "Voice Actors",
        bg: "#a855f7", // purple-400
        hoverBg: "#9333ea", // purple-500
        textColor: "white",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeuk2uEajU0Wei4DbKCYGhKDZeUHLYKldR-Rd9ucQjdkjUAQg/viewform",
    },
    {
        name: "Event Staff",
        bg: "#4ade80", // green-400
        hoverBg: "#22c55e", // green-500
        textColor: "black",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdpVA8qKXXJltOvc4ZD0GPcsBTLMglm8T1XQsXhzwjjcKEQ8g/viewform",
    },
    {
        name: "Modelling",
        bg: "#f472b6", // pink-400
        hoverBg: "#ec4899", // pink-500
        textColor: "black",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdftjuhSr-8f633N8vylQ-yYWyJ6YB9zNC_ewN55Zg9nnQjyg/viewform",
    },
];

export default function JoinTeamSection() {
    return (
        <section className="bg-gray-200 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-8">
            <div className="max-w-4xl w-full">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center p-6 sm:p-8 md:p-12 lg:p-16 text-black tracking-wider">
                    Join Our Team!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-16">
                    {teamRoles.map((role, index) => (
                        <HoverButton key={index} role={role} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HoverButton({ role }: { role: TeamRole }) {
    const [isHovered, setIsHovered] = useState(false);

    // Generate random rotation angle for this button (between -15 and 15 degrees)
    const randomRotation = useMemo(() => {
        return (Math.random() - 0.5) * 30; // Random between -15 and 15 degrees
    }, []);

    return (
        <Link href={role.url} target="_blank" rel="noopener noreferrer">
            <Button
                className="w-full flex justify-center items-center py-6 sm:py-7 md:py-8 lg:py-8 text-base sm:text-lg md:text-xl lg:text-xl "
                style={{
                    backgroundColor: isHovered ? role.hoverBg : role.bg,
                    color: role.textColor,
                    transform: isHovered
                        ? `scale(1.15) rotate(${randomRotation}deg) translateY(-8px)`
                        : "scale(1) rotate(0deg) translateY(0px)",
                    transition:
                        "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",

                    zIndex: isHovered ? 10 : 1,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span
                    className="pb-1 relative z-10"
                    style={{
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    {role.name}
                </span>

                {/* Animated sparkle effect */}
                <div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`,
                        opacity: isHovered ? 0.6 : 0,
                        transform: isHovered ? "scale(1.2)" : "scale(0.8)",
                        transition: "all 0.4s ease-out",
                    }}
                />

                {/* Pulse ring effect */}
                <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        transition: "all 0.3s ease-out",
                    }}
                />
            </Button>
        </Link>
    );
}

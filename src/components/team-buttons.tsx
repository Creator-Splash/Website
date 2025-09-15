"use client";

import Link from "next/link";
import { Button } from "@/components/ui/8bit/button";
import { useState } from "react";

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
    <section className="bg-gray-200 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <p className="text-6xl font-bold text-center p-16 text-black  tracking-wider">
          Join Our Team!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

  return (
    <Link href={role.url} target="_blank" rel="noopener noreferrer">
      <Button
        className="w-full flex  transition-all duration-300 text-xl justify-center items-center py-8"
        style={{
          backgroundColor: isHovered ? role.hoverBg : role.bg,
          color: role.textColor,
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="pb-1 ">{role.name}</span>
      </Button>
    </Link>
  );
}

// components/MemberCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Flag from "react-flagkit";
import { FaGithub, FaTwitch, FaTwitter, FaDiscord } from "react-icons/fa";

export interface MemberCardProps {
  avatar?: string;
  name: string;
  role: string;
  country: string;
  countryFlag?: string;
  bgColor?: string; // 🎨 per person background
  socials?: {
    github?: string;
    twitch?: string;
    twitter?: string;
    discord?: string;
  };
}

export default function MemberCard({
  avatar,
  name,
  role,
  country,
  countryFlag,
  bgColor = "#1a202c",
  socials,
}: MemberCardProps) {
  return (
    <div
      className="flex items-center rounded-xl p-4 w-full max-w-md mx-auto shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      {/* Avatar */}
      {avatar ? (
        <Image
          src={`/heads/${avatar}`}
          alt={name}
          width={64}
          height={64}
          className="rounded-xl object-cover border-2 border-white shadow-md"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center text-2xl">
          🧑
        </div>
      )}

      {/* Content */}
      <div className="ml-4 flex-1">
        {/* Name + Role */}
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <div className="flex items-center text-sm text-gray-200">
          {role}
          {countryFlag && (
            <span className="ml-2" title={country}>
              <Flag country={countryFlag} />
            </span>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          {socials?.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-300 transition" />
            </a>
          )}
          {socials?.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
          )}
          {socials?.twitch && (
            <a href={socials.twitch} target="_blank" rel="noopener noreferrer">
              <FaTwitch className="text-xl hover:text-purple-400 transition" />
            </a>
          )}
          {socials?.discord && (
            <a href={socials.discord} target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-xl hover:text-indigo-400 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

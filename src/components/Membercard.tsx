import React from "react";
import Image from "next/image";
import Flag from "react-flagkit";

export interface MemberCardProps {
  avatar?: string;
  name: string;
  role: string;
  country: string;
  countryFlag?: string;
  description?: string;
  responsibilities?: string[];
}

export default function MemberCard({
  avatar,
  name,
  role,
  country,
  countryFlag,
  description,
  responsibilities = [],
}: MemberCardProps) {
  return (
    <div className="bg-[#101010] text-white rounded-xl p-6 flex flex-row items-center justify-center w-full max-w-3xl mx-auto">
      {/* Avatar + Name (centered vertically and horizontally) */}
      <div className="flex flex-col items-center justify-center w-32 ">
        {avatar ? (
          <Image
            src={`/heads/${avatar}`}
            alt={name}
            width={70}
            height={70}
            className="rounded-full object-cover my-0"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
            🧑
          </div>
        )}
        <div className="flex flex-col items-center mt-2">
          <h3 className="text-xl font-bold whitespace-nowrap text-center">
            {name}
          </h3>
          <div className="flex flex-row items-center justify-center gap-2 mt-1 whitespace-nowrap">
            <span>{role}</span>
            {countryFlag && (
              <span className="not-emoji-font flex-shrink-0" title={country}>
                <Flag country={countryFlag} />
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Text content */}
      <div className="flex-1 ml-6">
        {description && <p className="text-gray-200 mb-2">{description}</p>}
        {responsibilities.length > 0 && (
          <ul className="text-gray-500 text-sm list-disc list-inside">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

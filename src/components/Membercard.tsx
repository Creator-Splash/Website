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
        <div className="bg-[#101010] text-white rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center w-full max-w-3xl mx-auto">
            {/* Avatar + Name (centered vertically and horizontally) */}
            <div className="flex flex-col items-center justify-center w-full sm:w-full md:w-32 lg:w-32 mb-4 sm:mb-4 md:mb-0 lg:mb-0">
                {avatar ? (
                    <Image
                        src={`/heads/${avatar}`}
                        alt={name}
                        width={70}
                        height={70}
                        className="rounded-full object-cover my-0 w-16 h-16 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]"
                    />
                ) : (
                    <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
                        🧑
                    </div>
                )}
                <div className="flex flex-col items-center mt-2">
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl font-bold whitespace-nowrap text-center">
                        {name}
                    </h3>
                    <div className="flex flex-row items-center justify-center gap-2 mt-1 whitespace-nowrap text-sm sm:text-sm md:text-base lg:text-base">
                        <span>{role}</span>
                        {countryFlag && (
                            <span
                                className="not-emoji-font flex-shrink-0"
                                title={country}
                            >
                                <Flag country={countryFlag} />
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {/* Text content */}
            <div className="flex-1 ml-0 sm:ml-0 md:ml-6 lg:ml-6 text-center sm:text-center md:text-left lg:text-left w-full">
                {description && (
                    <p className="text-gray-200 mb-2 text-sm sm:text-sm md:text-base lg:text-base">
                        {description}
                    </p>
                )}
                {responsibilities.length > 0 && (
                    <ul className="text-gray-500 text-xs sm:text-xs md:text-sm lg:text-sm list-disc list-inside">
                        {responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

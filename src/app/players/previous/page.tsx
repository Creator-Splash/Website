"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data";

const PreviousPlayers: React.FC = () => {
    // Previous Players search and filter state
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [civilisationFilter, setCivilisationFilter] = useState<string>("");
    const [seasonFilter, setSeasonFilter] = useState<string>("");
    
    // Dropdown open state
    const [eventDropdownOpen, setEventDropdownOpen] = useState<boolean>(false);
    const [seasonDropdownOpen, setSeasonDropdownOpen] = useState<boolean>(false);
    
    // Refs for click outside handling
    const eventDropdownRef = useRef<HTMLDivElement>(null);
    const seasonDropdownRef = useRef<HTMLDivElement>(null);
    
    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (eventDropdownRef.current && !eventDropdownRef.current.contains(event.target as Node)) {
                setEventDropdownOpen(false);
            }
            if (seasonDropdownRef.current && !seasonDropdownRef.current.contains(event.target as Node)) {
                setSeasonDropdownOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    // Event options
    const eventOptions = [
        { value: "", label: "All Events" },
        { value: "civilisation", label: "Civilisation" },
    ];
    
    // Season options
    const seasonOptions = [
        { value: "", label: "All Seasons" },
        { value: "feb2026", label: "February 2026" },
    ];

    // Filter previous players based on search and filters
    const filteredPlayers = teamMembers.slice(0, 12).filter((member, index) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[index % 12];
        
        // Search by name
        const matchesSearch = searchQuery === "" || 
            member.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Filter by civilisation (currently all are "Civilisation")
        const matchesCivilisation = civilisationFilter === "" || civilisationFilter === "civilisation";
        
        // Filter by season
        const matchesSeason = seasonFilter === "" || 
            (seasonFilter === "feb2026" && month === "February");
        
        return matchesSearch && matchesCivilisation && matchesSeason;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-6">
                <Link 
                    href="/players"
                    className="inline-flex items-center text-[#3d7992] hover:text-[#2a5a6e] transition-colors"
                >
                    <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 19l-7-7 7-7" 
                        />
                    </svg>
                    Back to Leaderboards
                </Link>
            </div>

            <section className="py-10 sm:py-12 md:py-14 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
                        Previous Players
                    </h2>
                    
                    {/* Search and Filter Bar */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {/* Search Input */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3d7992] focus:border-transparent text-gray-800"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Event Filter Dropdown */}
                        <div className="relative" ref={eventDropdownRef}>
                            <button
                                onClick={() => {
                                    setEventDropdownOpen(!eventDropdownOpen);
                                    setSeasonDropdownOpen(false);
                                }}
                                className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 min-w-[160px] justify-between ${
                                    civilisationFilter !== "" 
                                        ? "bg-[#3d7992] text-white" 
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                            >
                                <span>
                                    {eventOptions.find(opt => opt.value === civilisationFilter)?.label || "All Events"}
                                </span>
                                <svg 
                                    className={`w-4 h-4 transition-transform ${eventDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {eventDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px] overflow-hidden">
                                    {eventOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setCivilisationFilter(option.value);
                                                setEventDropdownOpen(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left transition-colors ${
                                                civilisationFilter === option.value
                                                    ? "bg-[#3d7992] text-white"
                                                    : "text-gray-800 hover:bg-gray-100"
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Season Filter Dropdown */}
                        {/*<div className="relative" ref={seasonDropdownRef}>
                            <button
                                onClick={() => {
                                    setSeasonDropdownOpen(!seasonDropdownOpen);
                                    setEventDropdownOpen(false);
                                }}
                                className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 min-w-[160px] justify-between ${
                                    seasonFilter !== "" 
                                        ? "bg-[#3d7992] text-white" 
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                            >
                                <span>
                                    {seasonOptions.find(opt => opt.value === seasonFilter)?.label || "All Seasons"}
                                </span>
                                <svg 
                                    className={`w-4 h-4 transition-transform ${seasonDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {seasonDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px] overflow-hidden">
                                    {seasonOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setSeasonFilter(option.value);
                                                setSeasonDropdownOpen(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left transition-colors ${
                                                seasonFilter === option.value
                                                    ? "bg-[#3d7992] text-white"
                                                    : "text-gray-800 hover:bg-gray-100"
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>*/}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                        {filteredPlayers.map((member, index) => {
                            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            const originalIndex = teamMembers.findIndex(m => m.name === member.name);
                            const month = months[originalIndex % 12];
                            return (
                            <div
                                key={index}
                                className="rounded-none overflow-visible shadow-none hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs"
                                style={{ backgroundColor: "#3d7992" }}
                            >
                                {/* Polaroid card with 3:4 aspect ratio */}
                                <div
                                    className="relative"
                                    style={{ aspectRatio: "3/4" }}
                                >
                                    {/* Square image area (top 3/4 of the card) */}
                                    <div
                                        className="absolute top-0 left-0 right-0 p-4"
                                        style={{
                                            aspectRatio: "1/1",
                                            width: "100%",
                                        }}
                                    >
                                        {/* Player head image */}
                                        <div className="relative w-full h-full flex items-center justify-center bg-slate-600">
                                            <Image
                                                src={`https://mc-heads.net/avatar/${member.name}/512`}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                            {/* Name overlay - bottom left of image */}
                                            <div
                                                className="absolute left-0 bottom-0  px-3 py-1 "
                                                style={{
                                                    transform:
                                                        "translateX(-20%) translateY(30%)",
                                                }}
                                            >
                                                <span
                                                    className="font-bold text-xl"
                                                    style={{
                                                        color: "#3d7992",
                                                        textShadow: `
                                                          -4px -4px 0 #ffffff,
                                                          4px -4px 0 #ffffff,
                                                          -4px 4px 0 #ffffff,
                                                          4px 4px 0 #ffffff,
                                                          -4px 0 0 #ffffff,
                                                          4px 0 0 #ffffff,
                                                          0 -4px 0 #ffffff,
                                                          0 4px 0 #ffffff,
                                                          -2px -4px 0 #ffffff,
                                                          2px -4px 0 #ffffff,
                                                          -2px 4px 0 #ffffff,
                                                          2px 4px 0 #ffffff,
                                                          -4px -2px 0 #ffffff,
                                                          4px -2px 0 #ffffff,
                                                          -4px 2px 0 #ffffff,
                                                          4px 2px 0 #ffffff
                                                      `,
                                                    }}
                                                >
                                                    {member.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bottom 1/4 empty space with text on white bg */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/4 flex flex-col items-start justify-end text-xl">
                                        <div className="relative">
                                            <div className="bg-white px-4 py-0 rounded-r-xl">
                                                <span className="text-gray-800 font-medium text-sm">
                                                    February 2026&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex ">
                                          <div className="bg-white px-4 py-0 rounded-br-lg ">
                                              <span className="text-gray-800 font-medium text-sm">
                                                  Civilisation
                                              </span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        })}
                    </div>

                    {/* No results message */}
                    {filteredPlayers.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No players found matching your search criteria.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PreviousPlayers;

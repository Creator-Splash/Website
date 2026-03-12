"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Player data generated from public/Players/ directory
const previousPlayers = [
    { name: "2kae217", image: "/Players/2kae217.jpg" },
    { name: "3Queeni", image: "/Players/3Queeni.jpg" },
    { name: "AbolishRegret", image: "/Players/AbolishRegret.jpg" },
    { name: "AcornBandit", image: "/Players/AcornBandit.jpg" },
    { name: "Agne3_", image: "/Players/Agne3_.jpg" },
    { name: "aimseytv", image: "/Players/aimseytv.jpg" },
    { name: "AjStumbles", image: "/Players/AjStumbles.jpg" },
    { name: "Arteamissing", image: "/Players/Arteamissing.jpg" },
    { name: "ArtfulMelody", image: "/Players/ArtfulMelody.jpg" },
    { name: "ashtuneo", image: "/Players/ashtuneo.jpg" },
    { name: "AstroKatsumiVT", image: "/Players/AstroKatsumiVT.jpg" },
    { name: "AvitalElizabeth", image: "/Players/AvitalElizabeth.jpg" },
    { name: "AwesomeisBlue", image: "/Players/AwesomeisBlue.jpg" },
    { name: "beca4leafclover", image: "/Players/beca4leafclover.jpg" },
    { name: "caliburnu5", image: "/Players/caliburnu5.jpg" },
    { name: "CarlyPumpkin", image: "/Players/CarlyPumpkin.jpg" },
    { name: "CHALLY071515", image: "/Players/CHALLY071515.jpg" },
    { name: "Chandiggitydog", image: "/Players/Chandiggitydog.jpg" },
    { name: "CyberChamp_", image: "/Players/CyberChamp_.jpg" },
    { name: "DaHouse_Panda", image: "/Players/DaHouse_Panda.jpg" },
    { name: "darugona", image: "/Players/darugona.jpg" },
    { name: "Doribunn", image: "/Players/Doribunn.jpg" },
    { name: "DreamerUnnamed", image: "/Players/DreamerUnnamed.jpg" },
    { name: "Envilex_", image: "/Players/Envilex_.jpg" },
    { name: "Flying Pandas", image: "/Players/Flying Pandas.jpg" },
    { name: "Froxchu", image: "/Players/Froxchu.jpg" },
    { name: "gainfulcoconut", image: "/Players/gainfulcoconut.jpg" },
    { name: "GhostieFruit", image: "/Players/GhostieFruit.jpg" },
    { name: "ghosttauk", image: "/Players/ghosttauk.jpg" },
    { name: "GnGt75", image: "/Players/GnGt75.jpg" },
    { name: "GoddessAkane_", image: "/Players/GoddessAkane_.jpg" },
    { name: "Hels0n_", image: "/Players/Hels0n_.jpg" },
    { name: "hyaz0ra", image: "/Players/hyaz0ra.jpg" },
    { name: "ikentyi", image: "/Players/ikentyi.jpg" },
    { name: "ImKayziee", image: "/Players/ImKayziee.jpg" },
    { name: "ItsToxumi", image: "/Players/ItsToxumi.jpg" },
    { name: "ItzAuxiliary", image: "/Players/ItzAuxiliary.jpg" },
    { name: "ItzIgglePiggles", image: "/Players/ItzIgglePiggles.jpg" },
    { name: "JackCas_", image: "/Players/JackCas_.jpg" },
    { name: "Jake_Stone1118", image: "/Players/Jake_Stone1118.jpg" },
    { name: "jojosolos", image: "/Players/jojosolos.jpg" },
    { name: "Khaos_Korps", image: "/Players/Khaos_Korps.jpg" },
    { name: "King_WolfLIVE", image: "/Players/King_WolfLIVE.jpg" },
    { name: "LaKitty101MC", image: "/Players/LaKitty101MC.jpg" },
    { name: "LaurrelLive", image: "/Players/LaurrelLive.png" },
    { name: "lemonthynealt", image: "/Players/lemonthynealt.jpg" },
    { name: "LiariTTV", image: "/Players/LiariTTV.png" },
    { name: "Londons_Antari", image: "/Players/Londons_Antari.jpg" },
    { name: "Lufflin_", image: "/Players/Lufflin_.jpg" },
    { name: "lunarafia", image: "/Players/lunarafia.jpg" },
    { name: "M33kMike_", image: "/Players/M33kMike_.jpg" },
    { name: "MacmiEli", image: "/Players/MacmiEli.jpg" },
    { name: "MAGlCSINGS", image: "/Players/MAGlCSINGS.jpg" },
    { name: "maskyzee", image: "/Players/maskyzee.jpg" },
    { name: "Meepstic", image: "/Players/Meepstic.jpg" },
    { name: "melizsayay", image: "/Players/melizsayay.jpg" },
    { name: "MillaStaria", image: "/Players/MillaStaria.jpg" },
    { name: "moonbugvt", image: "/Players/moonbugvt.jpg" },
    { name: "Mr_BurningBear", image: "/Players/Mr_BurningBear.jpg" },
    { name: "MrPrawes", image: "/Players/MrPrawes.jpg" },
    { name: "mummysparklec", image: "/Players/mummysparklec.jpg" },
    { name: "NashNougat", image: "/Players/NashNougat.jpg" },
    { name: "neon_xox_", image: "/Players/neon_xox_.jpg" },
    { name: "neochampy", image: "/Players/neochampy.jpg" },
    { name: "nonoscarnival", image: "/Players/nonoscarnival.jpg" },
    { name: "NoNipzX", image: "/Players/NoNipzX.jpg" },
    { name: "nukumorikaliket", image: "/Players/nukumorikaliket.jpg" },
    { name: "OrangeAily", image: "/Players/OrangeAily.jpg" },
    { name: "Owengejuice", image: "/Players/Owengejuice.jpg" },
    { name: "Pandastra_", image: "/Players/Pandastra_.jpg" },
    { name: "raiinevt", image: "/Players/raiinevt.jpg" },
    { name: "regisaur__", image: "/Players/regisaur__.jpg" },
    { name: "rexmin203", image: "/Players/rexmin203.jpg" },
    { name: "rhilistic", image: "/Players/rhilistic.jpg" },
    { name: "Roscumber", image: "/Players/Roscumber.jpg" },
    { name: "s0phttv", image: "/Players/s0phttv.jpg" },
    { name: "SandwichLord690", image: "/Players/SandwichLord690.jpg" },
    { name: "Sapsarata", image: "/Players/Sapsarata.jpg" },
    { name: "sardin4_", image: "/Players/sardin4_.jpg" },
    { name: "sarunaa", image: "/Players/sarunaa.jpg" },
    { name: "Seapeekay", image: "/Players/Seapeekay.jpg" },
    { name: "Shania_ttv", image: "/Players/Shania_ttv.jpg" },
    { name: "shayxllow", image: "/Players/shayxllow.jpg" },
    { name: "ShivaRoseBloom", image: "/Players/ShivaRoseBloom.jpg" },
    { name: "Skeletoniee", image: "/Players/Skeletoniee.jpg" },
    { name: "som1stoleAxo", image: "/Players/som1stoleAxo.jpg" },
    { name: "spideyarmy_", image: "/Players/spideyarmy_.jpg" },
    { name: "StormVleugels", image: "/Players/StormVleugels.jpg" },
    { name: "sugarfern__", image: "/Players/sugarfern__.jpg" },
    { name: "tank_matt", image: "/Players/tank_matt.jpg" },
    { name: "Tazzomi", image: "/Players/Tazzomi.jpg" },
    { name: "TesseractTown", image: "/Players/TesseractTown.jpg" },
    { name: "theambear_", image: "/Players/theambear_.jpg" },
    { name: "TheTaciturn0ne", image: "/Players/TheTaciturn0ne.jpg" },
    { name: "TotallyVelvet", image: "/Players/TotallyVelvet.jpg" },
    { name: "whoisbobbymac", image: "/Players/whoisbobbymac.jpg" },
    { name: "yooniexes", image: "/Players/yooniexes.jpg" },
    { name: "YourCrazyAB", image: "/Players/YourCrazyAB.jpg" },
];

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
    const filteredPlayers = previousPlayers.filter((player) => {
        // Search by name
        const matchesSearch = searchQuery === "" || 
            player.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Filter by civilisation (currently all are "Civilisation")
        const matchesCivilisation = civilisationFilter === "" || civilisationFilter === "civilisation";
        
        // Filter by season (all players are from Feb 2026)
        const matchesSeason = seasonFilter === "" || seasonFilter === "feb2026";
        
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
                        {filteredPlayers.map((player, index) => {
                            return (
                            <div
                                key={index}
                                className="rounded-none overflow-visible hover:scale-105 hover:-translate-y-2 transition-all duration-300 w-full max-w-xs cursor-pointer"
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
                                        {/* Player image */}
                                        <div className="relative w-full h-full flex items-center justify-center bg-slate-600">
                                            <Image
                                                src={player.image}
                                                alt={player.name}
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
                                                    {player.name}
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

"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  // Team locations with names
  const teamLocations = [
    { lat: 51.5074, lng: -0.1278, name: "London" }, // UK
    { lat: 39.8283, lng: -98.5795, name: "USA" }, // USA
    { lat: -25.2744, lng: 133.7751, name: "Australia" }, // Australia
    { lat: 59.3293, lng: 18.0686, name: "Stockholm" }, // Sweden
    { lat: 48.669, lng: 19.699, name: "Slovakia" }, // Slovakia
    { lat: 51.9194, lng: 19.1451, name: "Poland" }, // Poland
    { lat: 46.2276, lng: 2.2137, name: "France" }, // France
    { lat: 48.3794, lng: 31.1656, name: "Ukraine" }, // Ukraine
    { lat: -38.4161, lng: -63.6167, name: "Argentina" }, // Argentina
    { lat: 56.1304, lng: -106.3468, name: "Canada" }, // Canada
    { lat: 28.0339, lng: 1.6596, name: "Algeria" }, // Algeria
    { lat: 39.0742, lng: 21.8243, name: "Greece" }, // Greece
    { lat: -40.9006, lng: 174.886, name: "New Zealand" }, // New Zealand
    { lat: -0.7893, lng: 113.9213, name: "Indonesia" }, // Indonesia
  ];

  return (
    <section>
      <div className="py-40 bg-black w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Global{" "}
            <span className="text-pink-500">
              {"Team".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Our international team spans across continents. From the UK
            headquarters to creative talents worldwide - developers, artists,
            voice actors, and event staff.
          </p>
        </div>

        <WorldMap
          dots={teamLocations.map((loc) => ({
            start: { lat: loc.lat, lng: loc.lng, label: loc.name },
            end: { lat: loc.lat, lng: loc.lng, label: loc.name },
          }))}
        />
      </div>
    </section>
  );
}

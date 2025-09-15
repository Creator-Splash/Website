import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CareersSection() {
  return (
    <section className="relative py-32 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-9xl mx-auto text-center relative">
        {/* Team photos arranged horizontally without overlapping */}

        {/* Far left */}
        <div className="absolute top-69.5 -left-10 w-120 h-152 transform  -translate-y-1/2 z-10">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/cm.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left */}
        <div className="absolute top-1/2 left-90 w-120 h-164 transform  -translate-y-1/2">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/bd.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center left */}
        <div className="absolute top-1/2 left-178 w-120 h-164 transform  -translate-y-1/2">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/fx.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center right */}
        <div className="absolute top-1/2 right-178 w-120 h-164 transform -translate-y-1/2 ">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/bgp2.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right */}
        <div className="absolute top-72 right-90 w-120 h-145 transform -translate-y-1/2">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/fg.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Far right */}
        <div className="absolute top-64 right-4 w-120 h-160 transform -translate-y-1/2">
          <div className="w-full h-full  rounded-lg overflow-hidden">
            <Image
              src="/team/msj.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 py-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-balance leading-tight">
            We'd love
            <br />
            to have you
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Aligned with our mission and excited about the possibilities?
            <br />
            Explore our open roles to see where your superpowers can shine.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors">
            Explore open roles →
          </Button>
        </div>
      </div>
    </section>
  );
}

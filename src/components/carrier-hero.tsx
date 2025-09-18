import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface DrawOutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DrawOutlineButton = ({ children, ...rest }: DrawOutlineButtonProps) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}

      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}

      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}

      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}

      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default function CareersSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-9xl mx-auto text-center relative">
        {/* Mobile/Tablet: Simple grid layout for smaller screens */}
        <div className="block xl:hidden mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/cm.png"
                alt="Team member"
                width={120}
                height={152}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/bd.png"
                alt="Team member"
                width={120}
                height={164}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/fx.png"
                alt="Team member"
                width={120}
                height={164}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/bgp2.png"
                alt="Team member"
                width={120}
                height={164}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/fg.png"
                alt="Team member"
                width={120}
                height={145}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/msj.png"
                alt="Team member"
                width={120}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Preserve exact original positioning (xl and above) */}
        {/* Far left */}
        <div className="hidden xl:block absolute top-69.5 -left-10 w-120 h-152 transform -translate-y-1/2 z-10">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/cm.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left */}
        <div className="hidden xl:block absolute top-1/2 left-90 w-120 h-164 transform -translate-y-1/2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/bd.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center left */}
        <div className="hidden xl:block absolute top-1/2 left-178 w-120 h-164 transform -translate-y-1/2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/fx.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center right */}
        <div className="hidden xl:block absolute top-1/2 right-178 w-120 h-164 transform -translate-y-1/2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/bgp2.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right */}
        <div className="hidden xl:block absolute top-72 right-90 w-120 h-145 transform -translate-y-1/2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/fg.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Far right */}
        <div className="hidden xl:block absolute top-64 right-4 w-120 h-160 transform -translate-y-1/2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/team/msj.png"
              alt="Team member"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main content - responsive */}
        <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-balance leading-tight">
            We&apos;d love
            <br />
            to have you
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed px-4">
            Aligned with our mission and excited about the possibilities?
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Explore our open roles to see where your superpowers can shine.
          </p>
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium rounded-lg transition-colors"></Button> */}
          <DrawOutlineButton>Explore open roles →</DrawOutlineButton>
        </div>
      </div>
    </section>
  );
}

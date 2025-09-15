import { ArrowRight } from "lucide-react";

export function DiversitySection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
              Join Creator Splash
            </h1>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We make more than Minecraft events. We make lasting memories. Our
              team loves bringing players together with fun events that turn
              every adventure into a story worth sharing. If you enjoy building,
              coding, moderating, or planning events, we would love to welcome
              you to the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Palette, Handshake, Sprout } from "lucide-react";

export function DEIAcronymSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Diversity */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Palette className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Diversity</h3>
            <p className="text-gray-600 leading-relaxed">
              Our community thrives on creativity and imagination. Whether it’s
              designing breathtaking builds, developing exciting mini-games, or
              experimenting with fresh concepts, we encourage bold ideas and
              empower our team to innovate freely.
            </p>
          </div>

          {/* Equity */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Equity</h3>
            <p className="text-gray-600 leading-relaxed">
              Great events are built through clear roles and expertise. Our
              builders, developers, artists, and team each handle their part
              with care, ensuring every experience feels polished, seamless, and
              enjoyable for all our players.
            </p>
          </div>

          {/* Inclusion */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Sprout className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Inclusion</h3>
            <p className="text-gray-600 leading-relaxed">
              Inclusion means recognizing, respecting, and valuing all the
              layers of diversity and differences in an individual, and
              fostering a workplace environment where all team members feel
              comfortable and confident to show up as their full selves. With
              inclusion, our aim is to ensure everyone feels valued.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

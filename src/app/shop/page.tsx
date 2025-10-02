import Link from "next/link";
import Image from "next/image";
import MCCShopSection from "@/components/shop-section";
import { ShoppingCart, Gift, Gem, Ticket, Package } from "lucide-react";

export default function Shop() {
  const merchItems = [
    {
      id: 1,
      src: "/merch/item1.png",
      alt: "Merch Item 1",
      title: "Product Name 1",
    },
    {
      id: 2,
      src: "/merch/item2.png",
      alt: "Merch Item 2",
      title: "Product Name 2",
    },
    {
      id: 3,
      src: "/merch/item3.png",
      alt: "Merch Item 3",
      title: "Product Name 3",
    },
    {
      id: 4,
      src: "/merch/item4.png",
      alt: "Merch Item 4",
      title: "Product Name 4",
    },
    {
      id: 5,
      src: "/merch/item5.png",
      alt: "Merch Item 5",
      title: "Product Name 5",
    },
    {
      id: 6,
      src: "/merch/item6.png",
      alt: "Merch Item 6",
      title: "Product Name 6",
    },
    {
      id: 7,
      src: "/merch/item7.png",
      alt: "Merch Item 7",
      title: "Product Name 7",
    },
    {
      id: 8,
      src: "/merch/item8.png",
      alt: "Merch Item 8",
      title: "Product Name 8",
    },
  ];

  const sidebarItems = [
    { name: "Team shirts", icon: Package, href: "#team-shirts" },
    { name: "Axolotl Mug", icon: Gem, href: "#mug" },
    { name: "Game Passes", icon: Ticket, href: "#game-passes" },
    { name: "Free Stuff!", icon: Gift, href: "#free-stuff" },
    { name: "Merch", icon: ShoppingCart, href: "#merch" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#39b5ff] py-12 sm:py-16 md:py-20 lg:py-24 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/merch1.png"
            alt="Creator Splash merchandise banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <Link href="https://creatorsplash-shop.fourthwall.com/en-gbp">
            <button className="bg-[#fb8246] text-[#000000] font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:bg-[#ff946d] transition-colors text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              Support your team
            </button>
          </Link>
        </div>
      </section>

      {/* Merch Grid Section with Sidebar */}
      <section id="team-shirts" className="relative py-16">
        {/* Sidebar - does NOT affect main content centering */}
        <aside className="absolute left-0 top-42 w-64 text-white">
          <div className="p-4">
            {/* Cart Summary */}
            {/* <div className="rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground">Total (0 items)</span>
                <span className="font-bold text-lg text-foreground">$0.00</span>
              </div>
            </div> */}

            {/* Navigation Items */}
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <div key={index} className="relative">
                  <Link href={item.href} scroll={true}>
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors text-foreground hover:bg-[#35384a] hover:text-background `}
                    >
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {item.icon && <item.icon size={20} />}
                      </div>
                      <span className="font-medium flex-1">{item.name}</span>
                    </button>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content - stays perfectly centered */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Merchandise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our latest collection of premium merchandise
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
            {merchItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[14/22] bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center z-10"
                  />
                </div>
              </div>
            ))}
            <div className="" id="mug"></div>
          </div>

          <div className="text-center mt-12">
            <Link href="https://creatorsplash-shop.fourthwall.com/en-gbp">
              <button className="bg-[#fb8246] text-[#000000] font-bold uppercase text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-[#ff946d] transition-colors">
                Shop All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <MCCShopSection />
      </section>
    </>
  );
}

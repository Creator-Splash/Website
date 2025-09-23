// data/team.ts
export const teamMembers = [
  // Owner
  {
    name: "Harp",
    avatar: "Axolotl_1.png",
    role: "Owner",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: [
      "Owner of Creator Splash",
      "Game Concept Designer",
      "Project Manager",
    ],
  },

  // Managers
  {
    name: "Benji",
    avatar: "Axolotl_2.png",
    role: "Discord Manager",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Discord Server Admin", "Discord Bot Administrator"],
  },
  {
    name: "AJX",
    avatar: "Axolotl_3.png",
    role: "Roster Manager",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: [
      "Team Management",
      "Roster Management",
      "Tester Recruitment",
      "Player Balancing",
    ],
  },
  {
    name: "Emily",
    avatar: "Axolotl_4.png",
    role: "Tester Manager",
    country: "America",
    countryFlag: "US",
    responsibilities: ["Tester Management"],
  },

  // Discord Staff Team
  {
    name: "Fridge",
    avatar: "Axolotl_5.png",
    role: "Discord Staff",
    country: "America",
    countryFlag: "US",
    responsibilities: ["Discord Moderator", "Backup Event Moderator"],
  },
  {
    name: "AgentOfLore",
    avatar: "Axolotl_6.png",
    role: "Discord Staff",
    country: "Australia",
    countryFlag: "AU",
    responsibilities: ["Discord Moderator", "Backup Event Moderator"],
  },
  {
    name: "Mizzen",
    avatar: "Axolotl_7.png",
    role: "Discord Staff",
    country: "Coming soon",
    countryFlag: "",
    responsibilities: ["Discord Moderator", "Backup Event Moderator"],
  },

  // Event Staff Team
  {
    name: "Poke",
    avatar: "Axolotl_8.png",
    role: "Event Staff",
    country: "America",
    countryFlag: "US",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "Jordan",
    avatar: "Axolotl_9.png",
    role: "Event Staff",
    country: "America",
    countryFlag: "US",
    responsibilities: ["Event Moderator", "Team Logo Designer", "Event Artist"],
  },
  {
    name: "Stardust",
    avatar: "Axolotl_10.png",
    role: "Event Staff",
    country: "Sweden",
    countryFlag: "SE",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "Onyx",
    avatar: "Axolotl_11.png",
    role: "Event Staff",
    country: "Slovakia",
    countryFlag: "SK",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "Ashlyn",
    avatar: "Axolotl_12.png",
    role: "Event Staff",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "Cutie",
    avatar: "Axolotl_13.png",
    role: "Event Staff",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "DatKid",
    avatar: "Axolotl_14.png",
    role: "Event Staff",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Event Moderator"],
  },
  {
    name: "Layton",
    avatar: "Axolotl_15.png",
    role: "Event Staff",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Event Moderator"],
  },

  // Devs Dept
  {
    name: "KingCat",
    avatar: "Axolotl_16.png",
    role: "Core Dev",
    country: "America",
    countryFlag: "US",
    responsibilities: ["Core Developer"],
  },
  {
    name: "Encighted Orange",
    avatar: "Axolotl_17.png",
    role: "Game Dev",
    country: "United Kingdom",
    countryFlag: "GB",
    responsibilities: ["Game Developer"],
  },
  {
    name: "Comba",
    avatar: "Axolotl_18.png",
    role: "Game Dev",
    country: "Germany",
    countryFlag: "DE",
    responsibilities: ["Game Developer"],
  },
  {
    name: "Mio",
    avatar: "Axolotl_19.png",
    role: "Website Dev",
    country: "India",
    countryFlag: "IN",
    responsibilities: ["Website Developer"],
  },

  // Artists Dept
  {
    name: "Boss Isaz",
    avatar: "Axolotl_20.png",
    role: "Texture Pack Artist",
    country: "France",
    countryFlag: "FR",
    responsibilities: ["Creator Splash Texture Artist"],
  },
  {
    name: "Nohmann",
    avatar: "Axolotl_21.png",
    role: "Mobs/Weapons Artist",
    country: "Ukraine",
    countryFlag: "UA",
    responsibilities: ["Mobs and Weapons Artist"],
  },
  {
    name: "WinterStory",
    avatar: "Axolotl_22.png",
    role: "Weapons Artist",
    country: "Slovakia",
    countryFlag: "SK",
    responsibilities: ["Weapons Artist"],
  },
  {
    name: "Arlan",
    avatar: "Axolotl_23.png",
    role: "Armour Artist",
    country: "Brazil",
    countryFlag: "BR",
    responsibilities: ["Armour Artist"],
  },
  {
    name: "Gonzalo",
    avatar: "Axolotl_24.png",
    role: "Logo Artist",
    country: "Argentina",
    countryFlag: "AR",
    responsibilities: ["Logo Artist"],
  },

  // Community Management (moved to match Discord order)
  {
    name: "J48",
    avatar: "Axolotl_25.png", // Will need to be assigned from remaining images
    role: "Community Manager",
    country: "Syria",
    countryFlag: "SY",
    responsibilities: [
      "Head of Community Relations",
      "Head of Sponsorships",
      "Player Roster Help",
      "Social Media Helper",
    ],
  },
];

// Helper function to organize team by departments
export const organizeByDepartments = () => {
  return {
    owner: teamMembers.filter((member) => member.role === "Owner"),
    managers: teamMembers.filter(
      (member) =>
        member.role === "Discord Manager" ||
        member.role === "Roster Manager" ||
        member.role === "Tester Manager"
    ),
    discordStaff: teamMembers.filter(
      (member) => member.role === "Discord Staff"
    ),
    eventStaff: teamMembers.filter((member) => member.role === "Event Staff"),
    devs: teamMembers.filter(
      (member) => member.role.includes("Dev") && member.role !== "Head Dev"
    ),
    artists: teamMembers.filter(
      (member) =>
        member.role.includes("Artist") || member.role.includes("Texture")
    ),
    video: teamMembers.filter((member) => member.role === "Animator"),
    music: teamMembers.filter((member) => member.role === "Music Producer"),
    voice: teamMembers.filter((member) => member.role === "Voice Actor"),
    models: teamMembers.filter((member) => member.role === "Model Designer"),
    community: teamMembers.filter(
      (member) => member.role === "Community Manager"
    ),
    testing: teamMembers.filter((member) => member.role === "Testing Manager"),
  };
};

// Flag emoji mapping
export const getFlagEmoji = (countryCode: string): string => {
  const flags: Record<string, string> = {
    GB: "🇬🇧",
    US: "🇺🇸",
    AU: "🇦🇺",
    FR: "🇫🇷",
    SY: "🇸🇾",
    SE: "🇸🇪",
    SK: "🇸🇰",
    ID: "🇮🇩",
    GR: "🇬🇷",
    DE: "🇩🇪",
    IN: "🇮🇳",
    UA: "🇺🇦",
    BR: "🇧🇷",
    AR: "🇦🇷",
    CA: "🇨🇦",
    DZ: "🇩🇿",
    NZ: "🇳🇿",
  };
  return flags[countryCode] || "🏳️";
};

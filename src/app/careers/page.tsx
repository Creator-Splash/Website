import { WorldMapDemo } from "@/components/TeamWorldMap";
import { DEIAcronymSection } from "@/components/acronym";
import CareersSection from "@/components/carrier-hero";
import GenderIdentityChart from "@/components/chart";
import { DiversitySection } from "@/components/diversity";
import JoinTeamSection from "@/components/team-buttons";

export default function Carrier() {
  return (
    <main>
      <CareersSection />
      <DiversitySection />
      <DEIAcronymSection />
      <div className="flex items-center justify-center bg-black">
        <GenderIdentityChart />
      </div>
      {/* <WorldMapDemo /> */}
      <JoinTeamSection />
    </main>
  );
}

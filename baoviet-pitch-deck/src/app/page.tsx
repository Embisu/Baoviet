import Navbar from "@/components/Navbar";
import HeroAwwwards from "@/components/sections/HeroAwwwards";
import AwwwardsInsight from "@/components/sections/AwwwardsInsight";
import OperationStructure from "@/components/sections/OperationStructure";
import BentoEventScale from "@/components/sections/BentoEventScale";
import DetailedBudget from "@/components/sections/DetailedBudget";
import BrandIdentity from "@/components/sections/BrandIdentity";
import WowActivations from "@/components/sections/WowActivations";
import JourneyTouchpoints from "@/components/sections/JourneyTouchpoints";
import EndMedia from "@/components/sections/EndMedia";
import FinalEpilogue from "@/components/sections/FinalEpilogue";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-[#020510] text-[#F8FAFC] relative">
      <Navbar />
      <HeroAwwwards />
      <AwwwardsInsight />
      <OperationStructure />
      <BentoEventScale />
      <DetailedBudget />
      <BrandIdentity />
      <WowActivations />
      <JourneyTouchpoints />
      <EndMedia />
      <FinalEpilogue />
    </main>
  );
}

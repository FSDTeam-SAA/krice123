import Banner from "@/components/shared/Banner";
import Contact from "@/components/shared/Contact";
import FloorPlan from "@/components/website/home/FloorPlan";
import PastProject from "@/components/website/home/PastProject";

export default function Home() {
  return (
    <div className="bg-[#f7f4ef] text-[#2a2a2a]">
      <Banner />
      <PastProject />
      <FloorPlan />
      <Contact />
  
    </div>
  );
}

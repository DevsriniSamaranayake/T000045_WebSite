import SmallCard from "@/components/SmallCard";

const RoadMap = () => {
  return (
    <div
      className="container mx-auto px-6 min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600 flex flex-col items-center"
      style={{ backgroundImage: "url('/subscribeWall.webp')" }}
    >
   
      <h2 className="stroke-yellow text-5xl font-bold text-center mt-12">
        Road Map
      </h2>

      {/* Roadmap Container */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 w-full py-12">
        <SmallCard
          title="Phase 01"
          description="Create, audit, & deploy smart contract for secure token launch."
          className="-rotate-12"
        />

        <img src="/Arrow1.webp" className="w-16 h-16 md:w-20 md:h-18" />

        <SmallCard
          title="Phase 02"
          description="Research, define token utility, ecosystem, and market."
          className="-rotate-6"
        />

        <img src="/Arrow2.webp" className="w-16 h-16 md:w-20 md:h-18" />

        <SmallCard
          title="Phase 03"
          description="Integrate tokens with decentralized applications, drive adoption."
          className="-rotate-12"
        />

        <img src="/Arrow1.webp" className="w-16 h-16 md:w-20 md:h-18" />

        <SmallCard
          title="Phase 04"
          description="Build partnerships, promote platform, engage community through incentives."
          className="-rotate-6"
        />
      </div>
    </div>
  );
};

export default RoadMap;



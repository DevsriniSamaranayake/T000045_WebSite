import SmallCard from "@/components/SmallCard";

const RoadMap = () => {
  return (
    <div
      id="roadmap"
      className="container w-full max-w-[2050px] mx-auto min-h-screen bg-cover bg-center bg-no-repeat bg-[#EE8F1C] flex flex-col items-center px-6"
      style={{ backgroundImage: "url('/RoadMapWallpaper.webp')" }}
    >
      <h2 className="stroke-yellow text-5xl font-bold text-center mt-12 x-6 py-4">
        Road Map
      </h2>

      {/* Roadmap Container */}
      <div className="w-full mx-auto flex flex-col items-center justify-center mt-16 px-4 py-8 md:py-16">

        {/* Desktop View*/}
        <div className="hidden lg:flex w-full relative">
          {/* Phase 1 */}
          <div className="absolute left-8 top-8">
            <SmallCard
              title="Phase 01"
              description="Create, audit, & deploy smart contract for secure token launch."
              className="-rotate-12"
            />
          </div>

          {/* Arrow */}
          <div className="absolute left-[310px] top-[80px]">
            <img src="/Arrow_1.png" className="w-10 md:w-20 h-10 md:h-20 rotate-90 lg:rotate-0" />
          </div>

          {/* Phase 2 */}
          <div className="absolute left-[380px] top-[150px]">
            <SmallCard
              title="Phase 02"
              description="Research, define token utility, ecosystem, and market."
              className="-rotate-6"
            />
          </div>

          {/* Arrow */}
          <div className="absolute left-[680px] top-[300px]">
            <img src="/Arrow2.webp" className="w-10 md:w-20 h-10 md:h-20 rotate-90 lg:rotate-0" />
          </div>

          {/* Phase 3 */}
          <div className="absolute left-[750px] top-[30px]">
            <SmallCard
              title="Phase 03"
              description="Integrate tokens with decentralized applications, drive adoption."
              className="-rotate-12"
            />
          </div>

          {/* Arrow */}
          <div className="absolute left-[1050px] top-[100px]">
            <img src="/Arrow_1.png" className="w-10 md:w-20 h-10 md:h-20 rotate-90 lg:rotate-0" />
          </div>

          {/* Phase 4 */}
          <div className="absolute left-[1150px] top-[130px]">
            <SmallCard
              title="Phase 04"
              description="Build partnerships, promote platform, engage community through incentives."
              className="-rotate-12"
            />
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 gap-8 w-full place-items-center mt-6">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <SmallCard
              title="Phase 01"
              description="Create, audit, & deploy smart contract for secure token launch."
            />
            <img src="/Arrow_1.png" className=" md:hidden w-10 h-10 mt-4" />
          </div>

          <div className="flex flex-col items-center">
            <SmallCard
              title="Phase 02"
              description="Research, define token utility, ecosystem, and market."
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <SmallCard
              title="Phase 03"
              description="Integrate tokens with decentralized applications, drive adoption."
            />
            <img src="/Arrow_1.png" className="md:hidden w-10 h-10 mt-4" />
          </div>

          <div className="flex flex-col items-center">
            <SmallCard
              title="Phase 04"
              description="Build partnerships, promote platform, engage community through incentives."
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col items-start gap-8 md:hidden w-full mt-6 relative">
          <SmallCard
            title="Phase 01"
            description="Create, audit, & deploy smart contract for secure token launch."
            className="-rotate-6"
          />
          <img src="/Arrow_Road1.png" className="absolute left-[410px] top-[100px] w-auto h-auto " />

          <SmallCard
            title="Phase 02"
            description="Research, define token utility, ecosystem, and market."
            className="-rotate-6 left-[100px] relative"
          />
          <img src="/Arrow_Road2.png" className="absolute left-[60px] top-[430px]" />

          <SmallCard
            title="Phase 03"
            description="Integrate tokens with decentralized applications, drive adoption."
            className="-rotate-6"
          />
          <img src="/Arrow_Road1.png" className="absolute top-[650px] left-[410px]" />

          <SmallCard
            title="Phase 04"
            description="Build partnerships, promote platform, engage community through incentives."
            className="-rotate-6 left-[100px] relative"
          /> 
        </div>

      </div>
    </div>
  );
};

export default RoadMap;


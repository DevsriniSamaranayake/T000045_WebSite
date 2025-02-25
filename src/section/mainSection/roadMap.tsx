import SmallCard from "@/components/SmallCard";

const RoadMap = () => {
  return (
    <div
      id="roadmap"
      className="container max-w-[2050px] mx-auto min-h-screen bg-cover bg-center bg-no-repeat bg-amber-500 flex flex-col items-center"
      style={{ backgroundImage: "url('/RoadMapWallpaper.webp')" }}
    >
      <h2 className="stroke-yellow text-5xl font-bold text-center mt-12">
        Road Map  
      </h2>

      {/* Roadmap Container */}
      <div className="flex flex-col md:flex-row items-center mt-16 relative border border-black h-[500px] w-full">
        
        {/* Phase 1 */}
        {/* <div className="absolute left-8"> */}
        <div className="absolute left-8 top-8 border border-blue-500">
          <SmallCard
            title="Phase 01"
            description="Create, audit, & deploy smart contract for secure token launch."
            className="-rotate-12"
          />
        </div>

        {/* Arrow */}
        <div className="absolute left-[310px] top-[80px] border border-red-500  ">
          <img src="/Arrow_1.png" className="w-10 md:w-20 h-10 md:h-20 rotate-90 md:rotate-0" />
        </div>

       
        {/* <div className="relative top-40"> */}
        <div className="absolute left-[380px] top-[150px] border border-blue-500">
          <SmallCard
            title="Phase 02"
            description="Research, define token utility, ecosystem, and market."
            className="-rotate-6"
          />
        </div>

        {/* Arrow */}
        {/* <div className="relative top-36"> */}
        <div className="absolute left-[680px] top-[300px] border border-red-500">
          <img src="/Arrow2.webp" className="w-10 md:w-20 h-10 md:h-20 rotate-90 md:rotate-0" />
        </div>

        {/* Phase 3 */}
        <div className="absolute left-[750px] top-[30px] border border-blue-500">
          <SmallCard
            title="Phase 03"
            description="Integrate tokens with decentralized applications, drive adoption."
            className="-rotate-12"
          />
        </div>

        {/* Arrow */}
        <div className="absolute left-[1050px] border border-red-500">
          <img src="/Arrow_1.png" className="w-10 md:w-20 h-10 md:h-20 rotate-90 md:rotate-0" />
        </div>

     
        {/* <div className="relative top-40"> */}
        <div className="absolute left-[1150px] top-[130px] border border-blue-500">  
          <SmallCard
            title="Phase 04"
            description="Build partnerships, promote platform, engage community through incentives."
            className="-rotate-12"
          />
        </div>

      </div>
    </div>
  );
};

export default RoadMap;

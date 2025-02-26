const Tokenomics = () => {
    return (
      <div
        id ="tokenomics" className="container max-w-[2050px] relative w-full min-h-screen flex bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/TokenWall.webp')" }}
      >
          {/* Desktop View*/}
          <div className="hidden lg:flex w-full ">
                <img src='/TokenFrame.png' className="w-180 h-auto object-right"/>
          </div>

          {/*Tab Screen*/}
          <div className="hidden md:grid lg:hidden w-full">
                <h1 className="stroke-token absolute top-[150px] left-[100px]">Tokenomics</h1>
                <img src='/TokenTabFrame.png' className="w-full object-right" />
          </div>

          {/*Mobile Screen*/}
          <div className="flex flex-col md:hidden w-full ">
                <img src='/TokenMobileFrame.png' className="w-full h-380 object-right"/>
          </div>

      </div>
    );
};

export default Tokenomics;
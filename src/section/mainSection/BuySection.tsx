import BuyCard from "@/components/BuyCard";

const BuySection = () => {
  return (
    <div
      id="howToBuy"
      className="container max-w-[2050px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
      style={{ backgroundImage: "url('BuyWall.png')" }}
    >
      {/* Left Section - BuyCard */}
      <div className="flex flex-col items-center space-y-6 mt-3 mb-12 md:w-1/2 mr-60">
        <BuyCard title="Create a wallet" description="Create a crypto wallet to securely hold your $Talang tokens." />
        <BuyCard title="Buy some Eth" description="Purchase some ETH to use in your token exchange." />
        <BuyCard title="Visit Uniswap" description="Create a crypto wallet to securely hold your $Talang tokens." />
        <BuyCard title="Swap to $Telang" description="Swapping refers to the process of exchanging one $Telang" />
      </div>

      {/* Right Section - Title & Images */}
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
        {/* Title */}
        <h2 className="stroke-main font-bold">How to Buy!</h2>

        {/* Images */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-3">
          {/* Buy_Gun image */}
          <img className="w-25 mt-20 mr-8 hidden md:block" src="/Buy_Gun.webp" alt="Buy Gun" />

          {/* BuyFox image */}
          <img className="w-40 h-30 mt-6 md:mt-0  lg:w-[300px]" src="/BuyFox.webp" alt="Buy Fox" />
        </div>
      </div>
    </div>
  );
};

export default BuySection;
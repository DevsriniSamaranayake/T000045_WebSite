import BuyCard from "@/components/BuyCard";

const BuySection = () => {
  return (


      <div
        id ="howToBuy" className="container mx-auto px-6 flex items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600 "
        style={{ backgroundImage: "url('/Buywallpaper.webp')" }}
      >

            <div className="flex flex-col items-center space-y-6 mt-3 mb-12">

                  <BuyCard
                        title="Create a wallet "
                        description="Create a crypto wallet to securely hold your $Talang tokens."
                  />

                  <BuyCard
                        title="Buy some Eth "
                        description="Purchase some ETH to use in your token exchange."
                  />
                  <BuyCard
                        title="visit uniswap"
                        description="Create a crypto wallet to securely hold your $Talang tokens."
                  />
                  <BuyCard
                        title="swap to $telang"
                        description="Swapping refers to the process of exchanging one $Telang"
                  />
                

            </div>

            <div className="w-1/2 flex flex-col  text-center">
                  <h2 className="stroke-yellow font-text-4xl">How to Buy!</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                        <img className="w-25 ml10 mt-20" src="/Buy_Gun.webp"/>
                        <img className="w-40 h-30 mr-60 " src="/BuyFox.webp"/>
                  </div>    

            </div>
             
      </div>

)
}

export default BuySection;




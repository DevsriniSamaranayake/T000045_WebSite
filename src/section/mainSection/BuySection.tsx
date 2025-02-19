
const BuySection = () => {
  return (

    <div
    className="flex justify-center items-center h-screen bg-cover"
    style={{ backgroundImage: "url('/Buywallpaper.webp')" }}>

    <div className="flex flex-col items-center space-y-6 mt-3">

    <div className="font-shojumaru max-w-sm p-6 bg-amber-900">
        <p className="text-yellow-400">Create a wallet </p>
        <p className="text-white">Create a crypto wallet to securely hold your $Talang tokens.</p>
    </div>

    <div className="font-shojumaru max-w-sm p-6 bg-amber-900">
        <p className="text-yellow-400">Buy some Eth </p>
        <p className="text-white">Purchase some ETH to use in your token exchange.</p>
    </div>

    <div className=" font-shojumaru max-w-sm p-6 bg-amber-900">
        <p className="text-yellow-400"> visit uniswap </p>
        <p className="text-white">Create a crypto wallet to securely hold your $Talang tokens.</p>
    </div>

    <div className="font-shojumaru max-w-sm p-6 bg-amber-900">
        <p className="text-yellow-400">swap to $telang </p>
        <p className="text-white">Swapping refers to the process of exchanging one $Telang</p>
    </div>

        </div>

    <div className="ml-60" >
                
                 <p className="font-text-8xl">How to Buy!</p>
                 <img className="w-40 " src="/Buy_Gun.webp"/>
                 <img className="w-40 h-30 mr-60" src="/BuyFox.webp"/>

             </div>
</div>

)
}

export default BuySection;




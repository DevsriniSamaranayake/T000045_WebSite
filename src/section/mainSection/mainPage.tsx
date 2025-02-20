import Button from "@/components/Button";
import InputButton from "@/components/InputButton";

const MainPage = ()=>{
    return(
        <div
        className="container mx-auto px-6 flex items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
        style={{ backgroundImage: "url('/MainCheck_1x.webp')" }}
      >
        {/* <h2 className="stroke-yellow text-5xl font-bold text-center mt-12">
        Floki Coin
      </h2> */}
  <div className="w-1/3 flex justify-start items-end">

<img className="w-60 h-auto items-end" src="/HomeFloki.webp" alt="Subscribe" />

</div>

      <div className="w-2/3 flex flex-col items-center text-center text-white max-w-2xl">
              
                <h2 className="stroke-yellow text-5xl font-bold text-center mt-12">
        Floki Coin
      </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                      <InputButton type="text" placeholder="#237135" className="mb-3 text-center" />
                      <img src="/CopyIcon.webp" className="w-10 h-10" />
                  </div>

                  <Button text="Buy Now" className="mt-6"/>

            </div>

          



        </div>
    )
}

export default MainPage;
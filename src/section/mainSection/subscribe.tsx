import Button from "@/components/Button";
import InputButton from "@/components/InputButton";

const Subscribe = ()=>{
    return(
        
   <div
        className="container mx-auto px-6 flex items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
        style={{ backgroundImage: "url('/subscribeWall.webp')" }}
      >

            <div className="w-2/3 flex flex-col items-center text-center text-white max-w-2xl">
                <h2 className="stroke-yellow text-5xl font-bold text-center mt-12">Subscribe !</h2>
                  <p className="mt-6 text-lg text-center">
                      Keep up with the latest from the Society Launchpad. Get exclusive real-time updates and stay informed before everyone else!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                      <InputButton type="email" placeholder="Your Email" className="mb-3 text-center" />
                      <InputButton type="text" placeholder="Mobile Number" className="mb-3 text-center" />
                  </div>

                  <Button text="Subscribe" className="mt-6"/>

            </div>

            <div className="w-1/3 flex justify-start items-end">

                <img className="w-96 h-auto" src="/subscribeImg.webp" alt="Subscribe" />

            </div>
    </div>

    )
}

export default Subscribe;


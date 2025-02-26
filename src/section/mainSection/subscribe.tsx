import Button from "@/components/Button";
import InputButton from "@/components/InputButton";

const Subscribe = () => {
  return (
    <div
      className="container max-w-[2050px] mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
      style={{ backgroundImage: "url('/SubscribeWallpaper.webp')" }}
    >
        
      {/* Text Section */}
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-center text-center text-white max-w-2xl px-4">
        <h1 className="stroke-yellow text-5xl sm:text-6xl md:text-6xl xl:text-8xl font-bold mt-12">
          Subscribe!
        </h1>
        <p className="mt-6 text-lg">
          Keep up with the latest from the Society Launchpad. Get exclusive real-time updates and stay informed before everyone else!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 w-full">
          <InputButton type="email" placeholder="Your Email" className="mb-3 text-center px-4 py-2" />
          <InputButton type="text" placeholder="Mobile Number" className="mb-3 text-center px-4 py-2" />
        </div>

        <Button text="Subscribe" className="mt-6" />
      </div>


      <div className="w-full md:w-2/5 lg:w-1/2 flex items-center justify-center md:justify-start mt-6 md:mt-0">
      {/* Added  ml-16 - alignment problem */}
        <img className="w-72 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[650px] py-8 h-auto" src="/subscribeImg.webp" alt="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;

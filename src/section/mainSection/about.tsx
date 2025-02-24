 import Button from "@/components/Button";

  const AboutSection = () => {
    return (
        <div
          id="about"
          className="relative container max-w-[2050px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat px-6"
          style={{ backgroundImage: "url('/AboutWallpaper.webp')" }}
        >

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start items-end md:absolute bottom-0 left-0">
            <img className="w-72 sm:w-80 md:w-96 h-auto" src="/about_img.webp" alt="About Floki" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:text-right text-white mr-10 mx-auto  md:items-end sm:text-center ">
          {/* <div className="w-full md:w-2/3 flex flex-col items-center md:items-end text-center md:text-right text-white mr-10"> */}
            <h2 className="stroke-yellow text-5xl sm:text-6xl md:text-6xl xl:text-8xl font-bold mt-12">About Floki</h2>
            <p className="mt-6 text-lg sm:text-1xl lg:text-3xl drop-shadow-xl">
              Floki Coin finds itself at the center of a whirlwind of controversy. In a shocking turn of events, this
              charming and playful Viking-themed meme coin is wrongfully accused of being behind a devastating bank heist.
              The headlines scream of conspiracy, as authorities hastily point fingers, and Floki’s reputation hangs by a thread.
            </p>
            <Button text="Buy Now" className="mt-6 sm:px-9  sm:h-auto" />
          </div>
    
      
        </div>
    );
  };
  
  export default AboutSection;

  
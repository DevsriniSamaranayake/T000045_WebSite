import Button from "@/components/Button";

const AboutSection = () => {
    return (
      <div
        className="container mx-auto px-6 flex items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/AboutWallpaper.webp')" }}
      >
        <div className="w-1/2 flex justify-start items-end">
          <img className="w-96 h-auto object-cover" src="/about_img.webp" alt="About Floki" />
        </div>
  
  
        <div className="w-1/2 flex flex-col items-end text-right text-white max-w-2xl">
          <h2 className="stroke-yellow">About Floki</h2>
          <p className="mt-6 text-lg">
            Floki Coin finds itself at the center of a whirlwind of controversy. In a shocking turn of events, 
            this charming and playful Viking-themed meme coin is wrongfully accused of being behind a devastating 
            bank heist. The headlines scream of conspiracy, as authorities hastily point fingers, and Floki’s 
            reputation hangs by a thread.
          </p>
          <Button text="Buy Now" className="mt-6"/>
        
        </div>
      </div>
    );
  };
  
  export default AboutSection;
  
  
  
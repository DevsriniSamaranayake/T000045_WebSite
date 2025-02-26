import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import Navbar from "@/components/NavBar";

const MainPage = () => {
  return (

        <div
          id="home"
          className="relative container max-w-[2050px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/MainPage.png')" }}
        >

            <div className="items-center mx-auto">
            {/* <Navbar />  */}
            </div>
          
          

            <div className="w-full md:w-1/2 flex flex-col items-center text-center  mx-auto">
                <h1 className="text-9xl sm:text-6xl md:text-8xl xl:text-9xl font-bold stroke-main mt-8 md:mt-0 mb-8">
                  Floki Coin 
                </h1>

                <div className="flex items-center gap-4 w-full justify-center">
                  <InputButton
                    type="text"
                    placeholder="#237135"
                    className="text-center w-full sm:w-2/3 px-6 py-3 border border-gray-300 rounded-full text-lg"
                  />
                  <img src="/CopyIcon.webp" className="w-10 md:w-12 h-10 md:h-12 cursor-pointer" alt="Copy" />
                </div>

                <Button text="Buy Now" className="mt-8 w-48 text-lg py-3" />

                <div className="flex justify-center gap-6 md:gap-8 mt-10">

                      <a href="https://floki.com" target="_blank" rel="noopener noreferrer">
                        <img
                          src="/Logo1.webp"
                          className="w-10 md:w-12 h-10 md:h-12 transition-transform transform hover:scale-110"
                          alt="Website"
                        />
                      </a>

                      <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                        <img
                          src="/logoTelegram.webp"
                          className="w-10 md:w-12 h-10 md:h-12 transition-transform transform hover:scale-110"
                          alt="Telegram"
                        />
                      </a>

                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img
                          src="/LogoX.webp"
                          className="w-10 md:w-12 h-10 md:h-12 transition-transform transform hover:scale-110"
                          alt="Twitter (X)"
                        />
                      </a>
                </div>

          </div>

          {/*Image*/}
          <div className="w-full md:w-1/2 lg:w-120 xl:w-100 flex justify-center md:justify-start items-end md:absolute bottom-0 left-0">
            <img className="w-64 md:w-80  h-auto" src="/HomeFloki.webp" alt="Home" />
          </div>
        </div>
  );
};

export default MainPage;

import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import Navbar from "@/components/NavBar";
const MainPage = () => {
  return (
    <div
    id="home"
      className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
      style={{ backgroundImage: "url('/MainCheck_1x.webp')" }}
    >
      {/* <Navbar />  */}
      <div className="w-full md:w-1/5 flex justify-center md:justify-start items-end absolute bottom-0 left-0">
        <img className="w-96 h-auto" src="/HomeFloki.webp" alt="Home" />
      </div>

      <div className="w-full md:w-4/5 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="stroke-main text-6xl font-bold text-center mt-8 md:mt-0 mb-8">
          Floki Coin
        </h1>

        <div className="flex items-center gap-4 w-full justify-center">
          <InputButton
            type="text"
            placeholder="#237135"
            className="text-center w-2/3 px-6 py-3 border border-gray-300 rounded-full text-lg"
          />
          <img src="/CopyIcon.webp" className="w-12 h-12 cursor-pointer" alt="Copy" />
        </div>

        <Button text="Buy Now" className="mt-8 w-48 text-lg py-3" />

        <div className="flex justify-center gap-8 mt-10">
          <a href="https://floki.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/Logo1.webp"
              className="w-12 h-12 transition-transform transform hover:scale-110"
              alt="Website"
            />
          </a>

          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logoTelegram.webp"
              className="w-12 h-12 transition-transform transform hover:scale-110"
              alt="Telegram"
            />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/LogoX.webp"
              className="w-12 h-12 transition-transform transform hover:scale-110"
              alt="Twitter (X)"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

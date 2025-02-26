import Button from "../../components/Button";
import NavButton from "../../components/NavButton";

const Footer = () => {
  
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="max-w-[2050px] mx-auto py-6 bg-[#370907] text-white ">
      {/* Navbar */}
      <div className="flex justify-center mt-8 ">
        <div className="flex flex-col md:flex-row items-center md:space-x-3 space-y-4 md:space-y-0 w-full md:w-auto ">
            <Button text="Home" onClick={() => scrollToSection("home")} className="w-3/4 md:w-48 text-lg py-3" />

            <NavButton text="About" onClick={() => scrollToSection("about")} className="w-3/4 md:w-48 text-lg py-3" />

            <NavButton text="Tokenomics" onClick={() => scrollToSection("tokenomics")} className="w-3/4 md:w-48 text-lg py-3" />
                
            <NavButton text="How to Buy" onClick={() => scrollToSection("howToBuy")} className="w-3/4 md:w-48 text-lg py-3" />

            <NavButton text="Road Map" onClick={() => scrollToSection("roadmap")} className="w-3/4 md:w-48 text-lg py-3" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-6 px-6 mb-8">
       
        <p className="text-sm md:text-base">&copy; 2025 Floki Coin. All rights reserved.</p>

        <div className="flex gap-6 md:gap-6 mt-4 md:mt-0 mr-6">
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
    </div>
  );
};

export default Footer;


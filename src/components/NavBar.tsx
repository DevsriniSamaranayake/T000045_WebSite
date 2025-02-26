import { useState } from "react";
import Button from "./Button";
import NavButton from "./NavButton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <nav className="fixed top-0  w-full  z-50 px-6 py-4 flex justify-between items-center">


      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 items-center">
  
        <Button text="Home" onClick={() => scrollToSection("home")}  className="mt-8 w-40 text-lg py-3" />

        <NavButton text="About" onClick={() => scrollToSection("about")}  className="mt-8 w-auto text-lg py-3" />
  
        <NavButton text="Tokenomics" onClick={() => scrollToSection("tokenomics")}  className="mt-8 w-auto text-lg py-3" />
            
        <NavButton text="How to Buy" onClick={() => scrollToSection("howToBuy")}  className="mt-8 w-auto text-lg py-3" />

        <NavButton text="Road Map" onClick={() => scrollToSection("roadmap")}  className="mt-8 w-auto text-lg py-3" />
       
      </div>

    
      <button className="md:hidden text-yellow" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 right-6 bg-black bg-opacity-90 p-4 rounded-lg flex flex-col space-y-4">
          <button onClick={() => scrollToSection("home")} className="text-white">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-white">About</button>
          <button onClick={() => scrollToSection("roadmap")} className="text-white">Roadmap</button>
          <button onClick={() => scrollToSection("buy")} className="text-white">Buy Now</button>
        </div>
      )} 
    </nav>
  );
};

export default Navbar;

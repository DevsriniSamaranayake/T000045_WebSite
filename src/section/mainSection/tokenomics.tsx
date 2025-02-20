
const Tokenomics = () => {
    return (
      <div
        className="container relative w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/TokenWall.webp')" }}
      >
      
        <div
          className="relative w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 py-16 px-8 rounded-lg flex flex-col items-center justify-center bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/TokenNotice.webp')" }}
        >
      
          <h2 className="stroke-yellow text-5xl font-bold text-center text-white">
            Tokenomics
          </h2>
  
          {/* Image Cards - Random Rotation */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <img src="/Card1.webp" className="w-32 h-32 md:w-40 md:h-40 rotate-6 " />
            <img src="/card2.webp" className="w-32 h-32 md:w-40 md:h-40 -rotate-12 shadow-lg" />
            <img src="/card3.webp" className="w-32 h-32 md:w-40 md:h-40 rotate-3 shadow-lg" />
            <img src="/card4.webp" className="w-32 h-32 md:w-40 md:h-40 -rotate-6 shadow-lg" />
          </div>
        </div>
      </div>
    );
};

export default Tokenomics;

  
  
// const Tokenomics = () => {
//     return (
//       <div
//         className="container mx-auto px-6 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600 relative"
//         style={{ backgroundImage: "url('/TokenWall.webp')" }}
//       >
      
//         <div
//           className="container px-6 py-12 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-amber-600 rounded-lg shadow-lg relative"
//           style={{ backgroundImage: "url('/TokenNotice.webp')" }}
//         >
         
//           <h2 className="stroke-yellow text-5xl font-bold text-center text-white mt-6">
//             Tokenomics
//           </h2>
  
         
//           <div className="flex flex-wrap items-center justify-center gap-1 mt-8">
//             <img src="/Card1.webp" className="w-40 h-40 rotate-6" />
//             <img src="/card2.webp" className="w-40 h-40 -rotate-12 shadow-lg" />
//             <img src="/card3.webp" className="w-40 h-40 rotate-3 shadow-lg" />
//             <img src="/card4.webp" className="w-40 h-40 -rotate-6 shadow-lg" />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Tokenomics;
  
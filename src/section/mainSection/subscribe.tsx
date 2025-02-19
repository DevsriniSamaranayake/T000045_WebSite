const Subscribe = ()=>{
    return(
        
   <div
        className="container mx-auto px-6 flex items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-amber-600"
        style={{ backgroundImage: "url('/subscribeWall.webp')" }}
      >

            <div className="w-2/3 flex flex-col items-center text-center text-white max-w-2xl">
            <h2 className="stroke-yellow">Subscribe</h2>
          <p className="mt-6 text-lg">
            Floki Coin finds itself at the center of a whirlwind of controversy. In a shocking turn of events, 
            this charming and playful Viking-themed meme coin is wrongfully accused of being behind a devastating 
            bank heist. The headlines scream of conspiracy, as authorities hastily point fingers, and Floki’s 
            reputation hangs by a thread.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-900 text-white rounded-lg font-bold hover:bg-yellow-800">
            Buy Now
          </button>
           <button className="mt-6 px-6 py-3 bg-yellow-900 text-white rounded-lg font-bold hover:bg-yellow-800">
            Subscribe
          </button>
            </div>
            <div className="w-1/3 flex justify-start items-end">
            <img className="w-96 h-auto" src="/subscribeImg.webp" alt="Subscribe" />
            </div>
      </div>
    )
}

export default Subscribe;


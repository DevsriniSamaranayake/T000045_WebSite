import AboutSection from "@/section/mainSection/about";
import BuySection from "@/section/mainSection/BuySection";
import Subscribe from "@/section/mainSection/subscribe";
import RoadMap from "@/section/mainSection/roadMap";
import MainPage from "@/section/mainSection/mainPage";
import Tokenomics from "@/section/mainSection/tokenomics";
import Footer from "@/section/mainSection/footer";

const Home = () => {
  return (
    <div>
      <MainPage />
      <Subscribe />
      <AboutSection />
      <Tokenomics />
      <BuySection />
      <RoadMap />
      {/* <Footer /> */}
    </div>
  )
}

export default Home

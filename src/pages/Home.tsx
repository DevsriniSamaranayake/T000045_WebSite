import AboutSection from "@/section/mainSection/about";
import BuySection from "@/section/mainSection/BuySection";
import Subscribe from "@/section/mainSection/subscribe";
import RoadMap from "@/section/mainSection/roadMap";

const Home = () => {
  return (
    <div>
      <Subscribe />
      <AboutSection />
      <BuySection />
      <RoadMap />
    </div>
  )
}

export default Home

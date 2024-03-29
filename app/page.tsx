

import CarouselHome from "@/components/carousel";
import Facility from "@/components/facility";
import Room from "@/components/room";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center container gap-20">
      <CarouselHome />
      <Facility />
      <Room />
      <Footer />
    </div>
  );
};

export default Home;

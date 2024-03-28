import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import CarouselHome from "@/components/carousel";
import Facility from "@/components/facility";

const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center container gap-10">
      <CarouselHome />
      <Facility />
    </div>
  );
};

export default Home;

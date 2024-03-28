
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import CarouselHome from "@/components/carousel";

const Home = () => {
  return (
    <div className="flex items center justify-center h-[90vh] p-4">
      <CarouselHome />
    </div>
  );
};

export default Home;

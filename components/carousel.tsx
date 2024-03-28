"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import image1 from "@/public/images/carousel1.jpg";
import image2 from "@/public/images/carousel2.jpg";
import image3 from "@/public/images/carousel3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    id: 1,
    image: image1,
    alt: "image 1",
  },
  {
    id: 2,
    image: image2,
    alt: "image 2",
  },
  {
    id: 3,
    image: image3,
    alt: "image 3",
  },
];

const CarouselHome = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    priority
                    style={{
                      objectFit: "cover", // cover, contain, none
                      borderRadius: "8px"
                    }}
                    fill
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselHome;

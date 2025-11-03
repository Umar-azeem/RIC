"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    image: "/image/hr.png",
    title: "Welcome to RIC",
    subtitle: "Preparing students with transformative experience",
  },
  {
    image: "/image/hr2.png",
    title: "Excellence in Education",
    subtitle: "Building future leaders",
  },
  {
    image: "/image/1.png",
    title: "Our Community",
    subtitle: "Join thousands of successful graduates",
  },
  {
    image: "/image/2.png",
    title: "Welcome to RIC",
    subtitle: "Preparing students with transformative experience",
  },
  {
    image: "/image/3.png",
    title: "Excellence in Education",
    subtitle: "Building future leaders",
  },
  {
    image: "/image/4.png",
    title: "Excellence in Education",
    subtitle: "Building future leaders",
  },
  {
    image: "/image/rrri1.png",
    title: "Our Community",
    subtitle: "Join thousands of successful graduates",
  },
];

export default function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className=" w-full max-w-full "
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" ">
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1200}
                    height={200}
                    className="w-full  h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 " />
      <CarouselNext className="right-3" />
    </Carousel>
  );
}

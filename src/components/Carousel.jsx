import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  const images = [
    "/carousel-1.jpg",
    "/carousel-2.jpg",
    "/carousel-3.jpg",
    "/carousel-4.jpg",
  ];

  return (
    <div className="rounded-lg -mt-24">
      <Swiper loop={true} slidePerView={1}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`carousel-${index}`} className="rounded-lg w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

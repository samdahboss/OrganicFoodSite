import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import carouselImages from '../../utils/CarouselImages'

export default function Carousel() {
    return (
    <div className="rounded-lg -mt-24">
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`carousel-${index}`}
              className="rounded-lg w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
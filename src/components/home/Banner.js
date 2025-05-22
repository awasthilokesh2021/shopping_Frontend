import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const data = [
    " https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg",
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
]

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        className="rounded-lg overflow-hidden"
      >
        {data.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt={`banner-${i}`}
              className="w-full h-64 md:h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
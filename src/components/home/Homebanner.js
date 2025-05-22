import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Homebanner = () => {
  const data = [
    "https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg",
    "https://cdn.vectorstock.com/i/preview-1x/09/80/online-shopping-banner-vector-17230980.jpg",
    "https://img.freepik.com/premium-vector/abstract-orange-red-header-banner-design_1302-18956.jpg"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-6">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3500 }}
        navigation
        className="rounded-lg overflow-hidden"
      >
        {data.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.trim()}
              alt={`banner-${i}`}
              className="w-full h-52 md:h-72 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homebanner;

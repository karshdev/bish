import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Card() {
  return (
    <div className="text-center py-8 md:mx-12">
      <h2 className="font-raleway font-extrabold text-2xl md:text-3xl">
        What's being said...
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50 p-6 text-center mx-auto md:my-4">
              <h3 className="text-[20px] md:text-[26px] leading-[16px] font-bold">
                John H.
              </h3>
              <p className="text-[20px] md:text-[26px] font-bold">Kingston</p>
              <div className="text-orange-500 text-xl md:text-2xl my-2 md:my-4">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <p className="text-[20px] md:text-[24px] font-medium md:font-semibold">
                It's a really good idea My home's BISH! code saved us £150 on
                our radiator job.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Card;

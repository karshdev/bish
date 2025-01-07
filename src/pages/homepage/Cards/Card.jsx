import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; ;

function Card() {
  return (
    <div className="text-center py-8">
      <h2 className="font-raleway font-extrabold text-2xl md:text-3xl">What's being said...</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {[1, 2, 3].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-b from-white to-gray-100 shadow-md p-6 w-72 text-center mx-auto">
              <h3 className="text-lg font-bold">John H.</h3>
              <p className="text-sm font-bold">Kingston</p>
              <div className="text-orange-500 text-xl my-2">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <p>It's a really good idea My home's BISH! code saved us</p>
              <p className="font-bold">£150 on our radiator job.</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Card;
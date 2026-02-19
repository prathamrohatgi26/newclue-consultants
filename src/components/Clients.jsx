import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  '/images/testimonial-1.jpg',
  '/images/testimonial-2.jpg',
  '/images/testimonial-3.jpg',
  '/images/testimonial-4.jpeg',
  '/images/testimonial-4.webp',
];

export default function Clients() {
  return (
    <div className="bg-[#f7f9fa] py-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-3">
          <div className="text-[#129dd8] font-bold text-[0.8125rem] leading-[1.125rem]">OUR CLIENTS</div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="client-swiper w-[86%] lg:w-[92%] mx-auto"
          >
            {clients.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center">
                  <img
                    src={src}
                    alt="Client"
                    className="h-20 w-auto mx-auto mb-5"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

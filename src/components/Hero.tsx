import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// 导入 Swiper 样式
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// 使用实际图片
const slides = [
  {
    id: 1,
    image: '/images/内蒙古草原.jpeg',
    title: '内蒙古草原',
    description: '辽阔壮美的草原风光'
  },
  {
    id: 2,
    image: '/images/九寨沟.jpg',
    title: '九寨沟',
    description: '山水与自然的神奇结合'
  },
  {
    id: 3,
    image: '/images/hmos.png',
    title: '鸿蒙系统',
    description: '科技创新的力量'
  }
];

const Hero = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-[60vh] rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero; 
import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ServiceCard from './ServiceCard';
import Dumbbelling from '../images/dumbbelling.webp'
import fatBurning from '../images/fat-burning.jpg'
import woman from '../images/woman.jpg'
const Home = () => {
  return (
    <div className='home'>
      <header>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slider-1 slider'>
            <h1>Enroll With Best Trainer</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-2 slider'>
        <h1>Enroll With Best Trainer</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-3 slider'>
        <h1>Enroll With Best Trainer</h1>
        </div>
        </SwiperSlide>
      </Swiper>
      </header>

      <section className='service'>
        <h1>Services</h1>

        <div className='service-container container'>
          <ServiceCard 
          image={fatBurning}
          price={300}
          work={'Grid Training'}
          desc={'Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body'}
          />
          <ServiceCard 
          image={Dumbbelling}
          price={600}
          work={'Dumbbelling'}
          desc={'If you must use dumbbells for daily training, use heavy ones with fewer repetitions rather than light bells with numerous repetitions'}
          />
          <ServiceCard 
          image={woman}
          price={500}
          work={'Cycling GYM'}
          desc={'To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear'}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
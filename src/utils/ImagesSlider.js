import '../styles/slider.css'
import Image from '../imgs/bg.jpg'
import Image2 from '../imgs/bg2.jpg'
import Image3 from '../imgs/bg3.jpg'
import Image4 from '../imgs/bg4.jpg'
import Image5 from '../imgs/bg5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const ImageSliderContainer = () => {
  const imagesData = [
    {
      url: Image,
      alt: 'test1',
      text: '[JCBT]에서 효율적으로 공부하세요. 최신 자격증 문제로 실력을 향상시켜보세요!',
    },
    {
      url: Image2,
      alt: 'test2',
      text: '다양한 분야의 문제를 풀어보고, 전문가들과 경험을 공유하세요.',
    },
    {
      url: Image3,
      alt: 'test3',
      text: 'Information Security 전문가가 되어보세요. JCBT와 함께라면 가능합니다!',
    },
    {
      url: Image4,
      alt: 'test4',
      text: '새로운 도전! JCBT에서 미래를 준비하세요. 다양한 자격증을 취득하세요.',
    },
    {
      url: Image5,
      alt: 'test5',
      text: '문제 풀기의 재미와 도전! JCBT에서 여러 자격증을 목표하세요.',
    },
  ]

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper_container"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.alt} />
            <p
              className="overlay-text"
              style={{
                color: 'white',
                fontSize: '14px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '10px',
                borderRadius: '10px',
              }}
            >
              {image.text}
            </p>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default ImageSliderContainer

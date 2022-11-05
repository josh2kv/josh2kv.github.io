import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Summary from './Summary';
import { device } from '../../css/breakpoints';
import Experience from './Experience';

const AboutMe = () => {
  return (
    <SwiperWrapper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Summary />
      </SwiperSlide>
      <SwiperSlide>
        <Experience />
      </SwiperSlide>
    </SwiperWrapper>
  );
};

const SwiperWrapper = styled(Swiper)`
  height: 100vh;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: ${themeGet('colors.palette.yellow1')};
  }

  .swiper-pagination-bullet-active {
    background-color: ${themeGet('colors.primary')};
  }

  ${device.medium} {
    height: 73vh;
  }
`;

export default AboutMe;

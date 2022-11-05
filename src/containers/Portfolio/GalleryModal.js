import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import themeGet from '@styled-system/theme-get';
import 'swiper/css';
import 'swiper/css/navigation';

import { device } from '../../css/breakpoints';
import { useScreenContext } from '../../hooks/useScreenContext';

const GalleryModal = ({ galleryIsOpen, handleCloseGallery, images }) => {
  const isLargeView = useScreenContext();

  const customStyle = {
    overlay: {
      display: 'grid',
      placeItems: 'center',
      position: 'fixed',
      inset: '0px',
      backgroundColor: 'rgba(0, 0, 0, .4)',
      zIndex: '99',
    },
    content: {
      gridArea: '1/1',
      position: 'relative',
      maxWidth: '160rem',
      width: '100%',
      inset: '0',
      borderRadius: '0',
    },
  };

  return (
    <Block
      isOpen={galleryIsOpen}
      contentLabel="project gallery"
      onRequestClose={handleCloseGallery}
      shouldCloseOnOverlayClick={true}
      style={customStyle}
      ariaHideApp={false}
    >
      <Swiper
        speed={1} // loop={true}
        // fadeEffect={{ crossFade:true  }}
        slidesPerView={'auto'}
        navigation={true}
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={30}
        // effect={ 'fade' }
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper-content"
      >
        {images.map(image => (
          <SwiperSlide>
            <GatsbyImage
              className="slide-image"
              image={getImage(image)}
              alt="project photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CloseWrapper onClick={handleCloseGallery} />
    </Block>
  );
};

const CloseWrapper = styled(AiOutlineClose)`
  position: absolute;
  top: -5rem;
  right: 1rem;
  width: 4rem;
  height: auto;
  cursor: pointer;
  color: ${themeGet('colors.textMain')};

  ${device.medium} {
    top: -4rem;
    right: -4rem;
  }
`;

const Block = styled(Modal)`
  position: relative;

  .swiper-slide {
    max-width: 100vw;
    /* width: 100%; */
    /* height: 80rem; */
    border-radius: ${themeGet('borderRadius.section')};
    margin: 0 auto;
  }

  .swiper-content {
    width: 100%;
    height: 100%;

    .slide-image {
      cursor: grab;
    }
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${themeGet('colors.primary')};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${themeGet('colors.primary')};
  }

  ${device.medium} {
    max-width: 90vw;
  }
`;

export default GalleryModal;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Scrollbar } from 'swiper';
import SectionTitle from '../../components/SectionTitle';
import Card from './Card';
import Gallery from './Gallery';
import { useMyProjects } from '../../hooks/useMyProjects';

// import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import DividerH from '../../components/DividerH';
import Details from './Details';

const Portfolio = () => {
  const projects = useMyProjects();
  const [selectedProject, setSelectedProject] = useState('orion');
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  const handleOpenGallery = () => {
    setGalleryIsOpen(true);
  };
  const handleCloseGallery = () => {
    setGalleryIsOpen(false);
  };

  const { details, images } = projects.find(
    project => project.id === selectedProject,
  );

  return (
    <Block>
      <Gallery
        galleryIsOpen={galleryIsOpen}
        handleCloseGallery={handleCloseGallery}
        images={images}
      />
      <SectionTitle title="my projects" />
      <SwiperWrapper
        slidesPerView={'auto'}
        spaceBetween={30}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        // pagination={{ clickable: true }}
        modules={[Scrollbar, FreeMode, Pagination]}
        className="swiper-content"
      >
        {projects.map(project => (
          <SwiperSlide
            key={project.id}
            onClick={() => {
              setSelectedProject(project.id);
            }}
          >
            <Card project={project} selectedProject={selectedProject} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <DividerH />
      <Details details={details} handleClickGallery={handleOpenGallery} />
    </Block>
  );
};

const Block = styled.div`
  /* width: 100%; */
  /* max-width: 80rem; */
  min-width: 0;
`;

const SwiperWrapper = styled(Swiper)`
  .swiper-slide {
    max-width: 26rem;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  /* .swiper-content {

    width: 100%;
    height: 100%;
  } */
`;

export default Portfolio;

/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  //const categoryColor = category.cor;
  //const categoryExtraLink = category.link_extra;
  //const categoryLogo = category.logo;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: '#2D4059' }}>
            <ExtraLink>{categoryTitle.toUpperCase()}</ExtraLink>
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor="#2D4059"
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;

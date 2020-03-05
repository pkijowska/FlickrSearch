import React from 'react';
import Image from './Image';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

const Gallery = (props) => {
  return (
    <StyledGallery>
      { props.data.map( (url) => <Image ownername={url.ownername} url={url.url_n} key={url.id} tags={url.tags} datetaken={url.datetaken} alt={url.username}/> ) }
    </StyledGallery>
    );
}

export default Gallery;

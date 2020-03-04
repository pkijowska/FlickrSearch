import React from 'react';
import Image from './Image';

const Gallery = (props) => {
  return (
    <div>
      { props.data.map( (url) => <Image ownername={url.ownername} url={url.url_n} key={url.id} tags={url.tags} datetaken={url.datetaken} alt={url.username}/> ) }
    </div>
    );
}

export default Gallery;

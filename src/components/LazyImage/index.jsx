import React from 'react';
import { LazyImage } from 'react-lazy-images';

const MyLazyImage = ({ alt, src, ...props }) => {
  return (
    <LazyImage
      alt={alt}
      placeholder={({ imageProps, ref }) => (
        <div
          ref={ref}
          style={{
            height: '100%',
            width: '100%',
            background: 'rgba(0,0,0,0.2)',
            margin: '.2rem',
            borderRadius: '.4rem',
          }}
        />
      )}
      src={src}
      {...props}
    />
  );
};

export default MyLazyImage;

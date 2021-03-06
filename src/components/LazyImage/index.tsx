import React, { FC } from 'react';
import { LazyImage } from 'react-lazy-images';
import styled, { keyframes } from 'styled-components';

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ImageWrapper = styled.div`
  animation: 1s ${opacityAnim} ease-out;
`;

interface IProps {
  alt?: string;
  src: string;
  myWidth?: number | string;
  actual: JSX.Element;
}

const MyLazyImage: FC<IProps> = ({ alt, src, actual, myWidth }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      placeholder={({ imageProps, ref }) => (
        <div
          ref={ref}
          style={{
            minHeight: '30rem',
            width: myWidth || '100%',
            background: 'rgba(0,0,0,0.1)',
            margin: '.2rem',
          }}
        />
      )}
      actual={() => <ImageWrapper>{actual}</ImageWrapper>}
    />
  );
};

export default MyLazyImage;

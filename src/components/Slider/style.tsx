import styled, { css, keyframes } from 'styled-components';

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    visibility: hidden
  }
  15% {
    opacity: 0;
    visibility: hidden
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    visibility: visible
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

interface IImage {
  urlImage?: string;
}

interface ButtonProps {
  left?: boolean;
}

interface ICarousel {
  itemIndex: number;
}

interface IAnimatedText {
  isSelected: boolean;
}

const SLIDER_HEIGHT = '45rem';
const SLIDER_MARGIN = '3rem';

export const Container = styled.div`
  height: ${SLIDER_HEIGHT};
  width: ${({ theme }) => `calc(${theme.sizes.sliderWidth} + 3rem)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;

export const Image = styled.div<IImage>`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ urlImage }) => urlImage || ''});
`;

export const AnimatedTitle = styled.h2<IAnimatedText>`
  position: absolute;
  top: 3rem;
  left: -2.5rem;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background: black;
  ${({ isSelected }) =>
    css`
      animation: ${isSelected ? fadeInDown : fadeOutDown} 0.8s linear forwards;
    `};
`;

export const Card = styled.div`
  position: relative;
  margin-left: ${SLIDER_MARGIN};
  width: ${({ theme }) => theme.sizes.sliderWidth};
`;

export const CarouselWrapper = styled.div<ICarousel>`
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  transition: 1s;
  margin-left: 3rem;
  transform: translateX(
    ${({ itemIndex, theme }) =>
      css`calc(-${itemIndex} * (${theme.sizes.sliderWidth} + ${SLIDER_MARGIN}) - ${SLIDER_MARGIN})`}
  );
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(${SLIDER_HEIGHT} / 2 - 2.5rem);
  z-index: 2;
  ${({ left }) =>
    left
      ? css`
          left: 2rem;
        `
      : css`
          right: 2rem;
        `}

  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  position: relative;
`;

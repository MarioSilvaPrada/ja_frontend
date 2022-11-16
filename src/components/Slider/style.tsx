import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  15% {
    opacity: 0;
    transform: translateY(100%);
  }
 
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
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
  delay?: number;
  isSpace?: boolean;
}

const SLIDER_HEIGHT = '40rem';
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

  @media (max-width: 700px) {
    width: 100%;
    height: 30rem;
    margin-right: 0;
    overflow-y: hidden;
  }
`;

export const Image = styled.div<IImage>`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ urlImage }) => urlImage || ''});
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  left: -3rem;
  font-size: 3rem;
  color: black;
  display: flex;
  overflow: hidden;
  @media (max-width: 500px) {
    left: 1rem;
    bottom: 1rem;
  }
`;

export const AnimatedSpan = styled.span<IAnimatedText>`
  opacity: ${({ isSelected }) => (isSelected ? 0 : 1)};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: -0.2rem;
  margin-left: ${({ isSpace }) => (isSpace ? '0.5rem' : 0)};
  ${({ isSelected, delay }) =>
    css`
      animation: ${isSelected ? fadeInDown : fadeOutDown} 0.3s linear forwards;
      animation-delay: ${delay}s;
    `};

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.25);
`;

export const StyledLink = styled(Link)``;

export const Card = styled.div`
  position: relative;
  margin-left: ${SLIDER_MARGIN};
  width: ${({ theme }) => theme.sizes.sliderWidth};
  padding-right: ${SLIDER_MARGIN};

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

export const CarouselWrapper = styled.div<ICarousel>`
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  transition: 1s;
  margin-left: ${SLIDER_MARGIN};

  transform: translateX(
    ${({ itemIndex, theme }) =>
      css`calc(-${itemIndex} * (${theme.sizes.sliderWidth} + ${SLIDER_MARGIN}) - ${SLIDER_MARGIN})`}
  );

  @media (max-width: 500px) {
    margin-left: 0;
    transform: translateX(
      ${({ itemIndex, theme }) =>
        css`calc(-${itemIndex} * ${theme.sizes.sliderWidth})`}
    );
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background: transparent;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0;
  z-index: 2;
  ${({ left }) =>
    left
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  cursor: pointer;
`;

import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
 
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
  delay?: number;
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
  margin-right: ${SLIDER_MARGIN};
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
  background: rgba(255, 255, 255, 0.6);
  padding: 0.5rem;
  display: flex;
`;

export const AnimatedSpan = styled.span<IAnimatedText>`
  opacity: ${({ isSelected }) => (isSelected ? 0 : 1)};
  font-size: 2.5rem;
  ${({ isSelected, delay }) =>
    css`
      animation: ${isSelected ? fadeInDown : fadeOutDown} 0.3s linear forwards;
      animation-delay: ${delay}s;
    `};
`;

export const StyledLink = styled(Link)``;

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

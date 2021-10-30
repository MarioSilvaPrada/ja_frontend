import styled, { css } from 'styled-components';

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
const CARD_WIDTH = '78rem';

export const Container = styled.div`
  height: ${SLIDER_HEIGHT};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  margin-bottom: 2rem;
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
  z-index: 1;
  top: 3rem;
  left: 3rem;
  margin: 0;
  transform: translateY(-50%) translateX(-20%);
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;

export const Card = styled.div`
  position: relative;
  width: ${CARD_WIDTH};
`;

export const CarouselWrapper = styled.div<ICarousel>`
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  transition: 0.5s;
  transform: translateX(
    ${({ itemIndex }) => css`calc(-${itemIndex} * ${CARD_WIDTH})`}
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

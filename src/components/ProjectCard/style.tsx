import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IProps {
  imgURL?: string;
}

export const ImageCard = styled.div<IProps>`
  background-image: url(${({ imgURL }) => imgURL || ''});
  background-position: center;
  background-size: cover;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  z-index: 2;
  transition: 0.5s;
`;

export const HoverImage = styled.div<IProps>`
  background-image: url(${({ imgURL }) => imgURL || ''});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.8s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 0;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

export const PressWrapper = styled(Link)``;

export const H3 = styled.h3``;

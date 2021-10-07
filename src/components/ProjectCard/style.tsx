import styled from 'styled-components';
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
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
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

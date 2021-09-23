import styled from 'styled-components';

interface IProps {
  imgURL: string;
}

export const Wrapper = styled.div``;

export const Title = styled.div`
  color: red;
`;

export const Container = styled.div``;

export const ImageCard = styled.div<IProps>`
  background-image: url(${({ imgURL }) => imgURL || ''});
  background-position: center;
  background-size: cover;
  width: 20rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

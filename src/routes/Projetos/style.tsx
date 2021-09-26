import styled from 'styled-components';

interface IProps {
  imgURL?: string;
}

export const Title = styled.div`
  color: red;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 0.5rem;
`;

export const ImageCard = styled.div<IProps>`
  background-image: url(${({ imgURL }) => imgURL || ''});
  background-position: center;
  background-size: cover;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

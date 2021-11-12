import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 10rem;
`;

export const OptionsWrapper = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Option = styled.p``;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: uppercase;
  color: white;
  height: 100%;
`;

export const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

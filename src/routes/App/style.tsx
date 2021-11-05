import styled from 'styled-components';

// interface IProps {
//   urlImage?: string;
// }

// export const Container = styled.div<IProps>`
//   height: 100%;
//   background-image: url(${({ urlImage }) => urlImage || ''});
//   background-position: center;
//   background-size: cover;
//   background-color: white;
// `;

// export const Layer = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.5);
// `;

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
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

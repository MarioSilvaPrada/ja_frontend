import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.red};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.big};
`;

export const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

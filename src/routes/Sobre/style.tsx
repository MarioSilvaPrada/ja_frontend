import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.big};
`;

export const Paragraph = styled.p`
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
`;

export const SocialLink = styled.a`
  font-size: 1.3rem;
  color: white;
  margin-right: 0.6rem;
`;

export const Copy = styled.p`
  font-size: 0.8rem;
`;

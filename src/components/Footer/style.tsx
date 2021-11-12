import styled from 'styled-components';

interface IProps {
  isHomePage?: boolean;
}

export const SocialWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ isHomePage }) => (isHomePage ? 0 : '3rem')};
  a:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const SocialLink = styled.a`
  font-size: 1.5rem;
  color: white;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.7rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1rem;
  padding: 0 0.5rem;
`;

export const Copy = styled.p`
  font-size: 0.8rem;
`;
export const ParagraphWrapper = styled.div`
  text-align: center;
`;

export const DotWrapper = styled.span`
  margin: 0 0.7rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

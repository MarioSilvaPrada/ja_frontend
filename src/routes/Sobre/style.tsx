import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  font-size: 1.3rem;
  color: white;
  margin-right: 0.6rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PartnerLink = styled.a`
  margin-right: 1rem;
  font-size: 0.8rem;
`;

export const Title = styled.h4`
  margin-bottom: 0.6rem;
  text-transform: uppercase;
`;

export const AboutWrapper = styled.div`
  max-width: 40rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

export const AboutParagraph = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
`;

export const AboutImg = styled.img`
  width: 40rem;

  @media (max-width: 40.5rem) {
    width: 100%;
  }
`;

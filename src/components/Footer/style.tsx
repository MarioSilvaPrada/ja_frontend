import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

export const SocialLink = styled.a`
  font-size: 1.5rem;
  color: white;
`;

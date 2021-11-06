import styled, { css } from 'styled-components';

interface LayoutProps {
  pathName: string;
}

const homeRouteStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div<LayoutProps>`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 1rem 0.5rem;
  position: relative;

  ${({ pathName }) => pathName === '/' && homeRouteStyle}
`;

export const Body = styled.div``;

export const Title = styled.h2``;

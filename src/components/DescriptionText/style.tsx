import styled from 'styled-components';

interface IText {
  isPT?: boolean;
}

export const Description = styled.p<IText>`
  margin: 0 0 1rem;
  line-height: 1.6rem;
  display: inline-block;
  font-size: ${({ isPT }) => (isPT ? '.75rem' : '.9rem')};
  color: ${({ isPT }) => (isPT ? 'grey' : 'black')};
  line-height: ${({ isPT }) => (isPT ? '1.3rem' : '1.5rem')};
`;

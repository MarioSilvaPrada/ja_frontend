import styled, { css } from 'styled-components';

type Props = {
  size?: number;
  axis?: 'horizontal' | 'vertical';
};

export const Spacer = styled.div<Props>`
  ${({ axis, size = 16 }: Props) => {
    switch (axis) {
      case 'horizontal':
        return css`
          width: ${size}px;
          min-width: ${size}px;
          height: 1px;
          min-height: 1px;
        `;
      case 'vertical':
        return css`
          width: 1px;
          min-width: 1px;
          height: ${size}px;
          min-height: ${size}px;
        `;
      default:
        return css`
          width: ${size}px;
          min-width: ${size}px;
          height: ${size}px;
          min-height: ${size}px;
        `;
    }
  }}
`;

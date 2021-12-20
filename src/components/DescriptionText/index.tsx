import React, { FC } from 'react';
import * as S from './style';

interface IProps {
  children: string;
  isPT?: boolean;
}

const DescriptionText: FC<IProps> = ({ children, isPT }) => (
  <S.Description isPT={isPT}>{children}</S.Description>
);

export default DescriptionText;

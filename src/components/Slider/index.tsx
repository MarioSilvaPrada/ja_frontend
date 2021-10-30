import React, { FC, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import * as S from './style';

const Slider: FC = () => {
  const [item, setItem] = useState(0);
  const data = [
    {
      img: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text: 'Test',
    },
    {
      img: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text: 'Test2',
    },
    {
      img: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text: 'Test3',
    },
  ];

  const goToItem = (direction?: string) => {
    if (direction === 'left') {
      setItem(item - 1);
      return;
    }
    setItem(item + 1);
  };

  return (
    <>
      <S.ButtonsWrapper>
        {item > 0 && (
          <S.Button left onClick={() => goToItem('left')}>
            <BiLeftArrow color="white" size="1.5rem" />
          </S.Button>
        )}
        {item + 1 < data.length && (
          <S.Button onClick={() => goToItem()}>
            <BiRightArrow color="white" size="1.5rem" />
          </S.Button>
        )}
      </S.ButtonsWrapper>
      <S.Container>
        <S.CarouselWrapper itemIndex={item}>
          {data.map(({ img, text }, i) => (
            <S.Card>
              <S.AnimatedTitle isSelected={item === i}>{text}</S.AnimatedTitle>
              <S.Image urlImage={img} />
            </S.Card>
          ))}
        </S.CarouselWrapper>
      </S.Container>
    </>
  );
};

export default Slider;

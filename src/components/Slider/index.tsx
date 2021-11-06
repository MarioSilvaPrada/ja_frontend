import React, { FC, useState, useEffect } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { IProjects } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  sliderProjects: Array<IProjects>;
}

const Slider: FC<IProps> = ({ sliderProjects }) => {
  const [item, setItem] = useState(0);
  const [direction, setDirection] = useState('right');

  const goToItem = (direction?: string) => {
    if (direction === 'left') {
      setItem(item - 1);
      return;
    }
    setItem(item + 1);
  };

  const animateText = (text: string, isSelected: boolean) => {
    const split = text.split('');

    const arrayString = [];

    for (let i = 0; i < split.length; i++) {
      arrayString.push(
        <S.AnimatedSpan
          key={`${split[i]}${i}`}
          isSelected={isSelected}
          delay={0.5 + i / 10}
        >
          {split[i]}
        </S.AnimatedSpan>
      );
    }

    return arrayString;
  };

  useEffect(() => {
    if (item + 1 === sliderProjects.length) {
      setDirection('left');
      setTimeout(() => setItem(item - 1), 4000);
      return;
    }
    if (item === 0) {
      setDirection('right');
      setTimeout(() => setItem(item + 1), 4000);
      return;
    }

    if (direction === 'right') {
      setTimeout(() => setItem(item + 1), 4000);
    }

    if (direction === 'left') {
      setTimeout(() => setItem(item - 1), 4000);
    }
  }, [item]);

  return (
    <>
      <S.ButtonsWrapper>
        {/* {item > 0 && (
          <S.Button left onClick={() => goToItem('left')}>
            <BiLeftArrow color="white" size="1.5rem" />
          </S.Button>
        )}
        {item + 1 < sliderProjects.length && (
          <S.Button onClick={() => goToItem()}>
            <BiRightArrow color="white" size="1.5rem" />
          </S.Button>
        )} */}
      </S.ButtonsWrapper>
      <S.Container>
        <S.CarouselWrapper itemIndex={item}>
          {sliderProjects.map(({ main_image, name, id }, i) => (
            <S.StyledLink to={`projetos/${id}`} key={id}>
              <S.Card>
                <S.TextWrapper>{animateText(name, item === i)}</S.TextWrapper>
                <S.Image urlImage={main_image} />
              </S.Card>
            </S.StyledLink>
          ))}
        </S.CarouselWrapper>
      </S.Container>
    </>
  );
};

export default Slider;

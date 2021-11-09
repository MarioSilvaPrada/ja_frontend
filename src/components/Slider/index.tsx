import React, { FC, useState, useEffect } from 'react';
import { IProjects } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  sliderProjects: Array<IProjects>;
}

const Slider: FC<IProps> = ({ sliderProjects }) => {
  const [item, setItem] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAutomatic, setIsAutomatic] = useState(true);

  const goToItem = (dire: string) => {
    if (dire === 'left' && item > 0) {
      setItem(item - 1);
    }

    if (dire === 'right' && item < sliderProjects.length - 1) {
      setItem(item + 1);
    }
    setIsAutomatic(false);
  };

  const animateText = (text: string, isSelected: boolean) => {
    const split = text.split('');

    const arrayString = [];

    for (let i = 0; i < split.length; i++) {
      arrayString.push(
        <S.AnimatedSpan
          key={`${split[i]}${i}`}
          isSelected={isSelected}
          delay={0.03 * i}
          isSpace={split[i] === ' '}
        >
          {split[i]}
        </S.AnimatedSpan>
      );
    }

    return arrayString;
  };

  const automaticMovement = () => {
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
  };

  useEffect(() => {
    if (isAutomatic) {
      automaticMovement();
    } else {
      const timer = () => setTimeout(() => setIsAutomatic(true), 3000);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [item, isAutomatic]);

  return (
    <>
      <S.Container>
        <S.Button left onClick={() => goToItem('left')} />
        <S.Button onClick={() => goToItem('right')} />
        <S.CarouselWrapper itemIndex={item}>
          {sliderProjects.map(({ main_image, name, id }, i) => (
            <S.StyledLink to={`works/${id}`} key={id}>
              <S.Card>
                <S.Layer />
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

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-image: url(https://images.pexels.com/photos/7174398/pexels-photo-7174398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-position: center;
  background-size: cover;
  padding: 2rem;
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 10rem;
`;

export const OptionsWrapper = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Option = styled.p`
  font-size: 1.1rem;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: uppercase;
  color: white;
  height: 100%;
`;

export const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;

  a:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

export const SocialLink = styled.a`
  font-size: 1.8rem;
`;

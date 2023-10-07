import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background.jpg';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 600px;
  padding: 20px 128px;
  background-color: #2e2f4270;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.4),
      rgba(46, 47, 66, 0.4)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: 50% 70%;
  background-size: 1440px;
`;

export const Title = styled.h1`
  width: 660px;
  font-family: ManropeSemiBold;
  font-size: 64px;
  color: var(--title-about);
  padding-bottom: 20px;
`;

export const AboutText = styled.p`
  width: 300px;
  padding: 10px;
  background-color: #2e2f4280;
  border-radius: 15px;
  font-size: 20px;
  line-height: 160%;
  color: var(--text-about);
  margin-bottom: 20px;
`;

export const CatalogButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 145px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: var(--text-about);
`;

export const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import background from '../../assets/images/favorites-bcg.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  padding: 40px 128px;
  margin: 0 auto;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 750px;
  height: 450px;
  background: #8a8a8980;
  background-image: url(${background});
`;

export const MessageText = styled.p`
  font-family: ManropeMedium;
  font-size: 24px;
`;

export const CatalogLink = styled(Link)`
  color: var(--value-color);
  text-decoration: underline;

  &:hover {
    color: var(--hover-color);
    text-shadow: 1px 1px 1px var(--condition-text);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

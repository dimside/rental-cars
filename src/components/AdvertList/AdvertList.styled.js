import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  padding: 40px 128px;
  margin: 0 auto;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  text-decoration: underline;
  color: var(--button-color);
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: var(--hover-color);
    scale: 1.2;
  }
`;

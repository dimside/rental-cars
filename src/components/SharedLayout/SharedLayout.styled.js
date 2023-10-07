import styled from '@emotion/styled';
const { NavLink } = require('react-router-dom');

export const Header = styled.header`
  padding: 16px 0;
  background-color: var(--header-bcg);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Container = styled.div`
  text-align: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  font-family: ManropeSemiBold;
  font-size: 38px;
`;

export const Nav = styled(NavLink)`
  color: var(--nav-text);

  &.active {
    color: var(--nav-active);
  }
`;

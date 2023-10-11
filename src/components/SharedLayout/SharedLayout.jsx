import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  Nav,
  Navigation,
} from './SharedLayout.styled';

import logo from '../../assets/images/logo.png';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container className="container">
          <Navigation>
            <Nav to="/">
              <Logo>
                <img src={logo} alt="Logo" />
                <p>Rental Cars</p>
              </Logo>
            </Nav>
            <Nav to="/catalog">Catalog</Nav>
            <Nav to="/favorites">Favorites</Nav>
          </Navigation>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;

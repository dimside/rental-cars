import { Container, Header, Nav, Navigation } from './SharedLayout.styled';

const {  Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container className="container">
          <Navigation>
            <Nav to="/">About</Nav>
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
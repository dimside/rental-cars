import { Container, Title, AboutText, ArrowIcon, CatalogButton } from './About.styled';
import { ReactComponent as Arrow } from '../../assets/images/icons/chevron-right.svg';

const About = () => {
  return (
    <Container>
      <Title>Discover the world on wheels with our car rental service</Title>
      <AboutText>
        Choose from a wide range of cars that fit your style and budget.
        Experience the freedom of the open road with our reliable and efficient
        rental service.
      </AboutText>
      <CatalogButton to="catalog">
        <ArrowIcon>
          <Arrow />
        </ArrowIcon>
        Catalog
      </CatalogButton>
    </Container>
  );
};

export default About;

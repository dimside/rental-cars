import { useSelector } from 'react-redux';

import { selectFavorites } from 'redux/selector';
import AdvertCard from 'components/AdvertCard';
import {
  Container,
  MessageText,
  ImageContainer,
  List,
  CatalogLink,
} from './Favorites.styled';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length === 0 ? (
        <div>
          <MessageText>Your favorites are empty for now...</MessageText>
          <ImageContainer></ImageContainer>
          <MessageText>
            You can add advertisements that interest you on the{' '}
            {<CatalogLink to="/catalog">"Catalog"</CatalogLink>} page.
          </MessageText>
        </div>
      ) : (
        <List>
          {favorites.map(item => (
            <AdvertCard key={item.id} info={item} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default FavoritesList;
